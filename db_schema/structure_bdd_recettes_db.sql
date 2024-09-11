--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3
-- Dumped by pg_dump version 16.3

-- Started on 2024-09-11 20:47:07

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 219 (class 1259 OID 467592)
-- Name: Ingredients; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Ingredients" (
    id integer NOT NULL,
    name character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Ingredients" OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 467591)
-- Name: Ingredients_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Ingredients_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Ingredients_id_seq" OWNER TO postgres;

--
-- TOC entry 4869 (class 0 OID 0)
-- Dependencies: 218
-- Name: Ingredients_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Ingredients_id_seq" OWNED BY public."Ingredients".id;


--
-- TOC entry 221 (class 1259 OID 467599)
-- Name: RecipeIngredients; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."RecipeIngredients" (
    id integer NOT NULL,
    "recipeId" integer,
    "ingredientId" integer,
    quantity character varying(255),
    unit character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."RecipeIngredients" OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 467598)
-- Name: RecipeIngredients_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."RecipeIngredients_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."RecipeIngredients_id_seq" OWNER TO postgres;

--
-- TOC entry 4870 (class 0 OID 0)
-- Dependencies: 220
-- Name: RecipeIngredients_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."RecipeIngredients_id_seq" OWNED BY public."RecipeIngredients".id;


--
-- TOC entry 217 (class 1259 OID 467583)
-- Name: Recipes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Recipes" (
    id integer NOT NULL,
    title character varying(255),
    description text,
    instructions text,
    "userId" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone,
    "imageUrl" character varying(255)
);


ALTER TABLE public."Recipes" OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 467582)
-- Name: Recipes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Recipes_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Recipes_id_seq" OWNER TO postgres;

--
-- TOC entry 4871 (class 0 OID 0)
-- Dependencies: 216
-- Name: Recipes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Recipes_id_seq" OWNED BY public."Recipes".id;


--
-- TOC entry 215 (class 1259 OID 467577)
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 467608)
-- Name: Users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Users" (
    id integer NOT NULL,
    username character varying(255),
    email character varying(255),
    password character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Users" OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 467607)
-- Name: Users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Users_id_seq" OWNER TO postgres;

--
-- TOC entry 4872 (class 0 OID 0)
-- Dependencies: 222
-- Name: Users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;


--
-- TOC entry 4708 (class 2604 OID 467595)
-- Name: Ingredients id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Ingredients" ALTER COLUMN id SET DEFAULT nextval('public."Ingredients_id_seq"'::regclass);


--
-- TOC entry 4709 (class 2604 OID 467602)
-- Name: RecipeIngredients id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."RecipeIngredients" ALTER COLUMN id SET DEFAULT nextval('public."RecipeIngredients_id_seq"'::regclass);


--
-- TOC entry 4707 (class 2604 OID 467586)
-- Name: Recipes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Recipes" ALTER COLUMN id SET DEFAULT nextval('public."Recipes_id_seq"'::regclass);


--
-- TOC entry 4710 (class 2604 OID 467611)
-- Name: Users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users" ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);


--
-- TOC entry 4716 (class 2606 OID 467597)
-- Name: Ingredients Ingredients_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Ingredients"
    ADD CONSTRAINT "Ingredients_pkey" PRIMARY KEY (id);


--
-- TOC entry 4718 (class 2606 OID 467606)
-- Name: RecipeIngredients RecipeIngredients_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."RecipeIngredients"
    ADD CONSTRAINT "RecipeIngredients_pkey" PRIMARY KEY (id);


--
-- TOC entry 4714 (class 2606 OID 467590)
-- Name: Recipes Recipes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Recipes"
    ADD CONSTRAINT "Recipes_pkey" PRIMARY KEY (id);


--
-- TOC entry 4712 (class 2606 OID 467581)
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- TOC entry 4720 (class 2606 OID 467615)
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


-- Completed on 2024-09-11 20:47:07

--
-- PostgreSQL database dump complete
--


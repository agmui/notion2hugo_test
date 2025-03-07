---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3JSMUNY%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGk96WAf2Up8MFKE1D0qjOEz%2FH3t2CBSzrcXIZJ%2B0up6AiEA62aljQaQz%2BioPwVzM4O4Op48n4PU%2FhE54ejcarw3qxYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDBZgJ8%2BgE0Ycqj0FGyrcA%2BlJJXJ2pmoIkcclsP%2BgU0aPa2Z%2FQW69whssN31cs3FwnfAWVYPOg8Mz9sbxe0apgPH8KuW%2BuQsqoXZ8n%2FSZV2at7gJf541Qc%2BqMeIzih1XYKuPmqkdc8KiBhNqCEkjsNvq%2FRdslefFXMSiUyRA9H7OQsD%2Bo8XBDkZNWHfQ%2BEigEx8RziX3VdHzZB5%2FbSrXAB4X5iw10yyQ4hZXgkzFvHpflxLajEyGrbJE3Q%2Bawn5LR15tqLmdIdmE79IV8M4KkgxqB9ioqDwpmllIdczLAp6ljwjn9GA8fBOqlIRBPr8BnuF4zWnL9ABycS8NCXGoJcMha%2F7MWtp2dUQAQsVDx9szm6i%2FDKmnMVZdNtIECYogGyzNy7cf8wXcsCcFyqa0cEJaz6tpCCFkfi5A2ICsBk8fQyrVn1tp%2BuHDqRI4%2B14PbEmDyw2eMYtpaqQ%2BFCFdPbrZM4gHVPD8b4LdmYeRgUV8NAwSj4878pg%2FieoNiTmeS8Fo8pGMyBEkX5zIGDrkPeCjl0E1wOe8RUyWq8OzdLA%2B1AifrsGOxZBkL3CO0sKMdncsewghf8zOyWGWpjqm3fQ%2B%2FixHL1QZWvRAuJfWSg8eSBT9grDJYuPqNbDRQ2FR0KSHb2ASP5PvFzb6iMLuHq74GOqUB5%2BLMm1RyPQqbBuBmgurwxKKCMO8onQ%2FLXqA14DFMpXksb%2F17wH%2FcUVJCTiJxvuQqXONJ6Mi09QsZ6yR7j33Ud4BGSZjqklM1taKC4g%2FfjTnOzh%2BSCGH7sRDJ8dMJ3bneeYJO1%2BrUWMNBtCpP7zYGDRvKMpquYMxGPATRRvzVA0asLg%2Bii%2BgLNeFIO233Fj6SOlBusjNyEGKMkLVVDwau%2FSB3vz5O&X-Amz-Signature=f7bfe4431608bc6977c4c8ad77d27e40dcf4e95678d80f8aae6634a8a5ca93ff&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3JSMUNY%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGk96WAf2Up8MFKE1D0qjOEz%2FH3t2CBSzrcXIZJ%2B0up6AiEA62aljQaQz%2BioPwVzM4O4Op48n4PU%2FhE54ejcarw3qxYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDBZgJ8%2BgE0Ycqj0FGyrcA%2BlJJXJ2pmoIkcclsP%2BgU0aPa2Z%2FQW69whssN31cs3FwnfAWVYPOg8Mz9sbxe0apgPH8KuW%2BuQsqoXZ8n%2FSZV2at7gJf541Qc%2BqMeIzih1XYKuPmqkdc8KiBhNqCEkjsNvq%2FRdslefFXMSiUyRA9H7OQsD%2Bo8XBDkZNWHfQ%2BEigEx8RziX3VdHzZB5%2FbSrXAB4X5iw10yyQ4hZXgkzFvHpflxLajEyGrbJE3Q%2Bawn5LR15tqLmdIdmE79IV8M4KkgxqB9ioqDwpmllIdczLAp6ljwjn9GA8fBOqlIRBPr8BnuF4zWnL9ABycS8NCXGoJcMha%2F7MWtp2dUQAQsVDx9szm6i%2FDKmnMVZdNtIECYogGyzNy7cf8wXcsCcFyqa0cEJaz6tpCCFkfi5A2ICsBk8fQyrVn1tp%2BuHDqRI4%2B14PbEmDyw2eMYtpaqQ%2BFCFdPbrZM4gHVPD8b4LdmYeRgUV8NAwSj4878pg%2FieoNiTmeS8Fo8pGMyBEkX5zIGDrkPeCjl0E1wOe8RUyWq8OzdLA%2B1AifrsGOxZBkL3CO0sKMdncsewghf8zOyWGWpjqm3fQ%2B%2FixHL1QZWvRAuJfWSg8eSBT9grDJYuPqNbDRQ2FR0KSHb2ASP5PvFzb6iMLuHq74GOqUB5%2BLMm1RyPQqbBuBmgurwxKKCMO8onQ%2FLXqA14DFMpXksb%2F17wH%2FcUVJCTiJxvuQqXONJ6Mi09QsZ6yR7j33Ud4BGSZjqklM1taKC4g%2FfjTnOzh%2BSCGH7sRDJ8dMJ3bneeYJO1%2BrUWMNBtCpP7zYGDRvKMpquYMxGPATRRvzVA0asLg%2Bii%2BgLNeFIO233Fj6SOlBusjNyEGKMkLVVDwau%2FSB3vz5O&X-Amz-Signature=9651e1d889f39aeac87c8f38223e94ffd5d8e0b908d629d254833296b94c9411&X-Amz-SignedHeaders=host&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.

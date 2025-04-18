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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ETSQIWQ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T150815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBDFSEVDxhnQMQ9Z05w4bDgYFnl14gH6xwcNJBvd%2B61NAiEA7PGOYubrc79siJE6zguDNr9CdUFeBB1dMGsshkMmUcAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDC2bVgQvdc0rPgObVSrcAyrCRz%2Fda8GczRlHBvT0BbWegw9WLT9EbW9BuHi5SeWohzeo2cC1sdZ5vJRQ%2Bcm07yrfW9COM%2FqBkRQ3lPuFTb%2Fh0FIQGQ8UdVvVPbBvt5ue5jGFeC1H3bt3NHZX6JEqHlQ1Eeyd9TIB4bJU3JqjFCTEmgL2E2EO4SdEjSq8Ekc3JGTi7qXW3vm%2B7QfXlIRkCSb8ARMHXwDSeCBlwSF3avNL42qcgECXSRu0r4h5WEpojEJw%2BZWJ5kGbyvxwFivV9DeiU60VYTyO1a0fsLxB4XrLQCzIcswcgu%2FpSD0Yjzj%2F8gfd7TLuwjbUtMm0poEZ3eQ8BiAinpGMOyllVLh88Yholc3%2Bh02WtxowVOkyBe7NyeZdzeVsjUN%2BW9yEduk%2B0cpmUlbkrqiN0JeNkDldadWa670423FHkW1yLXx9HkSUOLvxrnFlR6xkRYmTB44%2B%2BFUmqB2Ma6VRfoAqFyN%2Fowy16tYD0k1KULxgyQ%2BmZp%2FRB5Fb84zLbNKaOeG2vWL77H3Oi1dVQa7VbBC7BKXPSgcIAADByI%2BcfDjnWZd2fX7hHLNqs%2F5Ed%2BiCjN65Ya0tIU2YH9uY%2BOE%2FEI7ZHdTVzqcYhp9SmumtpdEpSD%2FFx3C8qjrgYHafC4Exke8CMPTEicAGOqUB%2BBBed1O5zYZvOPoK1szSSblL1QxFL6jvzpHrjpsBUf9J3DfzQyVWuMnOz1pBECexBtSGwer7X0Dmd6WIGVQ6Gz52zslXR5jeWwaWrMXProts6i87%2BrjBM%2BBxRHrE5tGl7HnoiHtioFwG0jsbU1tIIYDgQkDjGMo%2BjomCk9BxJ7%2BizFBQh20vGlqg0qZHnJhIcfwOiqYyTTg7rtV0IvjHkK2Ne6MH&X-Amz-Signature=16968dd2d5d7a6d6b5aee9bb3980e68fc2a0829ffa852e8b546c8ed24e7b1bba&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ETSQIWQ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T150815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBDFSEVDxhnQMQ9Z05w4bDgYFnl14gH6xwcNJBvd%2B61NAiEA7PGOYubrc79siJE6zguDNr9CdUFeBB1dMGsshkMmUcAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDC2bVgQvdc0rPgObVSrcAyrCRz%2Fda8GczRlHBvT0BbWegw9WLT9EbW9BuHi5SeWohzeo2cC1sdZ5vJRQ%2Bcm07yrfW9COM%2FqBkRQ3lPuFTb%2Fh0FIQGQ8UdVvVPbBvt5ue5jGFeC1H3bt3NHZX6JEqHlQ1Eeyd9TIB4bJU3JqjFCTEmgL2E2EO4SdEjSq8Ekc3JGTi7qXW3vm%2B7QfXlIRkCSb8ARMHXwDSeCBlwSF3avNL42qcgECXSRu0r4h5WEpojEJw%2BZWJ5kGbyvxwFivV9DeiU60VYTyO1a0fsLxB4XrLQCzIcswcgu%2FpSD0Yjzj%2F8gfd7TLuwjbUtMm0poEZ3eQ8BiAinpGMOyllVLh88Yholc3%2Bh02WtxowVOkyBe7NyeZdzeVsjUN%2BW9yEduk%2B0cpmUlbkrqiN0JeNkDldadWa670423FHkW1yLXx9HkSUOLvxrnFlR6xkRYmTB44%2B%2BFUmqB2Ma6VRfoAqFyN%2Fowy16tYD0k1KULxgyQ%2BmZp%2FRB5Fb84zLbNKaOeG2vWL77H3Oi1dVQa7VbBC7BKXPSgcIAADByI%2BcfDjnWZd2fX7hHLNqs%2F5Ed%2BiCjN65Ya0tIU2YH9uY%2BOE%2FEI7ZHdTVzqcYhp9SmumtpdEpSD%2FFx3C8qjrgYHafC4Exke8CMPTEicAGOqUB%2BBBed1O5zYZvOPoK1szSSblL1QxFL6jvzpHrjpsBUf9J3DfzQyVWuMnOz1pBECexBtSGwer7X0Dmd6WIGVQ6Gz52zslXR5jeWwaWrMXProts6i87%2BrjBM%2BBxRHrE5tGl7HnoiHtioFwG0jsbU1tIIYDgQkDjGMo%2BjomCk9BxJ7%2BizFBQh20vGlqg0qZHnJhIcfwOiqYyTTg7rtV0IvjHkK2Ne6MH&X-Amz-Signature=8955d8da012bd79eb8ab45ff7f3717350de8c79d0753a927e1ed9a967b13f820&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQK2IPAT%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF4KoKLhgMxj92mT8QnvwOSJIw1F8lunFI9W87Q9pHQQIgXdvPJH2kLsiteDDK23L5D8XxOLM09rd0pm7O9zOBXTYq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDPc%2BGf6pgc3JOXX0cCrcA3oR7EUuDbBmYzwn7x1s8ctchH%2FBMPJi8uAPVaIULw6NHaBuFwu1GyBpT6%2FDznbJRriAwMZRs%2FXWlpfmH8Fz%2BGoUGoCXs3ZgqqWtyoMq6Rrg9nMRrimSLYaDY23RKthMjvfDjATekkVC8%2FM%2Bg2wHzTvy%2F5tuyuR2lWl%2FhlpRybflF%2FGgGFG%2Bl91sAkGokagvatdAiiishN2XqVU7OM71ygtXU%2FREr%2B9IVPd6ATyB7cVMzqJrZAFD5aMrkvizUAlqCkXCDWAHRyV20AeQtl%2FEl8EPeD%2BbkTwGbVEQalOEdjpNEojimYpYtx6gSfK%2BHCtKqmkPjqcvFoB0T%2BqhqUmGs9bKHn3CeO%2FwkCR6tOmtuX46%2BYIm8x2fImnGlsRbLFJrut1fiEdCipmmAGdrFeDES4CT5N1Fq8d9mQZWWjJ%2FWh9vB0RE24OyXAfY8FrQaooyR5nTPBe8qJT2J%2F0AjZSD45vM7Bthq1XjCxJwQonAluuawuFmqwryZXbECrdvmwQC9YqrlIcTlz9A7SF9c3ual%2FHZUUW8qArSVaHF2yspp5wSX0F2c2FtA9gW8Lsmr1PdXHgDZL8XFosKgmqeGwiStS5407rF3iENStI8uKf5cbZ0uq0vt%2FHCjCfIZva0MJOtjr8GOqUBvMr2d0de1iMx%2FBFAmN3y2tTLw1AaTdpInZEfBfQXZhc8ltyX3bR20MzhDmj%2FZiN%2B2mI%2Fg4H4nOcI4oTEQlFghXbVCO9jW0Zdkhu3uUZyI07VeQiF8aC8VASfnpON6bn0tDDEbsz7vOLuvtMLPcJBUzcI6f8c7cE2MsRZkkLvQst%2Bd%2BmYPTSsCvMERjsIBE9yKBv1%2FgjQ5%2B0OSfRg8QN9aeI%2BXC6L&X-Amz-Signature=5195c54a3a0b866d98d7952e406e29d01c2587551870bf715cc3fe40a695481c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQK2IPAT%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF4KoKLhgMxj92mT8QnvwOSJIw1F8lunFI9W87Q9pHQQIgXdvPJH2kLsiteDDK23L5D8XxOLM09rd0pm7O9zOBXTYq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDPc%2BGf6pgc3JOXX0cCrcA3oR7EUuDbBmYzwn7x1s8ctchH%2FBMPJi8uAPVaIULw6NHaBuFwu1GyBpT6%2FDznbJRriAwMZRs%2FXWlpfmH8Fz%2BGoUGoCXs3ZgqqWtyoMq6Rrg9nMRrimSLYaDY23RKthMjvfDjATekkVC8%2FM%2Bg2wHzTvy%2F5tuyuR2lWl%2FhlpRybflF%2FGgGFG%2Bl91sAkGokagvatdAiiishN2XqVU7OM71ygtXU%2FREr%2B9IVPd6ATyB7cVMzqJrZAFD5aMrkvizUAlqCkXCDWAHRyV20AeQtl%2FEl8EPeD%2BbkTwGbVEQalOEdjpNEojimYpYtx6gSfK%2BHCtKqmkPjqcvFoB0T%2BqhqUmGs9bKHn3CeO%2FwkCR6tOmtuX46%2BYIm8x2fImnGlsRbLFJrut1fiEdCipmmAGdrFeDES4CT5N1Fq8d9mQZWWjJ%2FWh9vB0RE24OyXAfY8FrQaooyR5nTPBe8qJT2J%2F0AjZSD45vM7Bthq1XjCxJwQonAluuawuFmqwryZXbECrdvmwQC9YqrlIcTlz9A7SF9c3ual%2FHZUUW8qArSVaHF2yspp5wSX0F2c2FtA9gW8Lsmr1PdXHgDZL8XFosKgmqeGwiStS5407rF3iENStI8uKf5cbZ0uq0vt%2FHCjCfIZva0MJOtjr8GOqUBvMr2d0de1iMx%2FBFAmN3y2tTLw1AaTdpInZEfBfQXZhc8ltyX3bR20MzhDmj%2FZiN%2B2mI%2Fg4H4nOcI4oTEQlFghXbVCO9jW0Zdkhu3uUZyI07VeQiF8aC8VASfnpON6bn0tDDEbsz7vOLuvtMLPcJBUzcI6f8c7cE2MsRZkkLvQst%2Bd%2BmYPTSsCvMERjsIBE9yKBv1%2FgjQ5%2B0OSfRg8QN9aeI%2BXC6L&X-Amz-Signature=8feee94a4246746314bf135fb16577597427c4d0e81c6884d9bb5e3aa4b3aa28&X-Amz-SignedHeaders=host&x-id=GetObject)

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

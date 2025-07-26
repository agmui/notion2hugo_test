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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHBOY3HU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQD9aBpnJASOdU1I2O5eZYGE8KnlFkBOm1BFt7xwhQszOAIhAPO%2BpgdSU9N4L700v6Oa%2BjKlW4aFzWpwefW7LCJF30RgKv8DCFcQABoMNjM3NDIzMTgzODA1IgzPbSZqH9tgEdnmrOkq3ANEv1k79MzHVFDeRBhtf0JzRVUGiW7qQQju6B5e34vY91IcOqd43RNPZJCj8mXgELhR%2Fx3xetdrGLgTDtzLmz1cV%2FjNdyCqc5gWmn0I85UhuDR4iRMwghxBfh2dI3hV7UXZBHWuFb1A8vGiKNndCgp2DidPl7wKONV5CUyceiffI%2BGl2%2BOk0Ox7zkMdM%2BcRfOHahfMsJi0mhri2Le2pmRPtRWFFcJIdRn2I0KhvQ4NFEEcMy6%2BUdwT7zhVKEedvEpIIu0dusKU0uWYSgTWSfnddZrJN97mfFeRbZ7oWjiapwKP66ch3PFljh2nl6dDxEpel36JFwIxAeQp6H16ZsD%2FLB5Nbd4QQRIlA%2F3O09ZnaOY3jePjLpcXyCRUyI%2Fv263fqbbp35R221Ju%2BO5N9NDZisKuW71C1KZjoSlFCESHUL9VAGj2ZAaIeje2hnfioqjdUj4WIpjuRBgf%2Bf%2FeOe67YntUlV9Xzq6RPoXhZZWgVj%2FGbN5N%2Bzi2ZBYLjrZBmfbQPP3aPUYyXVHrUP6yB6ARtuKk0UKcVqYh1ZNTHTQVxgJemEIrPj3PKRLuyrtY7M%2Bye5MBq4ySyzvSHw3iqQlQhE28Ul4gt7WxhH0IVDb4C%2FmGC6w51t295PO6hnjDw4pHEBjqkAZRNXWuJFYpkf5U5tRUwcm1WNF6s3vq4SPr06m4ZJtTJsekIFiVKk8dMRuG7vQ67BWxOaOxXa4i3LuL5IiUEZ3a6Gdu3iLEeMfGEPMZaWgYY3WhLiw626M4sRwkiFgizDS1sMDtCOGS2vEbo82VNZIQK1yvBgqYtl13sIBzJmtW9bpkjKjQ0z3BiNmnEcdbtn53Y5Oj%2FwnNYYCadiQ9Pv5CvN%2FMt&X-Amz-Signature=8666fb1ce5a7faecce0f1c3cd0aea74d104dc81d54bc59c3f71a2fb2d164cf9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHBOY3HU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQD9aBpnJASOdU1I2O5eZYGE8KnlFkBOm1BFt7xwhQszOAIhAPO%2BpgdSU9N4L700v6Oa%2BjKlW4aFzWpwefW7LCJF30RgKv8DCFcQABoMNjM3NDIzMTgzODA1IgzPbSZqH9tgEdnmrOkq3ANEv1k79MzHVFDeRBhtf0JzRVUGiW7qQQju6B5e34vY91IcOqd43RNPZJCj8mXgELhR%2Fx3xetdrGLgTDtzLmz1cV%2FjNdyCqc5gWmn0I85UhuDR4iRMwghxBfh2dI3hV7UXZBHWuFb1A8vGiKNndCgp2DidPl7wKONV5CUyceiffI%2BGl2%2BOk0Ox7zkMdM%2BcRfOHahfMsJi0mhri2Le2pmRPtRWFFcJIdRn2I0KhvQ4NFEEcMy6%2BUdwT7zhVKEedvEpIIu0dusKU0uWYSgTWSfnddZrJN97mfFeRbZ7oWjiapwKP66ch3PFljh2nl6dDxEpel36JFwIxAeQp6H16ZsD%2FLB5Nbd4QQRIlA%2F3O09ZnaOY3jePjLpcXyCRUyI%2Fv263fqbbp35R221Ju%2BO5N9NDZisKuW71C1KZjoSlFCESHUL9VAGj2ZAaIeje2hnfioqjdUj4WIpjuRBgf%2Bf%2FeOe67YntUlV9Xzq6RPoXhZZWgVj%2FGbN5N%2Bzi2ZBYLjrZBmfbQPP3aPUYyXVHrUP6yB6ARtuKk0UKcVqYh1ZNTHTQVxgJemEIrPj3PKRLuyrtY7M%2Bye5MBq4ySyzvSHw3iqQlQhE28Ul4gt7WxhH0IVDb4C%2FmGC6w51t295PO6hnjDw4pHEBjqkAZRNXWuJFYpkf5U5tRUwcm1WNF6s3vq4SPr06m4ZJtTJsekIFiVKk8dMRuG7vQ67BWxOaOxXa4i3LuL5IiUEZ3a6Gdu3iLEeMfGEPMZaWgYY3WhLiw626M4sRwkiFgizDS1sMDtCOGS2vEbo82VNZIQK1yvBgqYtl13sIBzJmtW9bpkjKjQ0z3BiNmnEcdbtn53Y5Oj%2FwnNYYCadiQ9Pv5CvN%2FMt&X-Amz-Signature=b4075c022ec687cbd3597fa9b1c5e98e4135b8c400164254c708c64bf9249291&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

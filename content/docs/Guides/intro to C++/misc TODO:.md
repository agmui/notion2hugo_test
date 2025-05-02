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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF5XFJ4H%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T140818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIBpX%2BO1TQIjJ70RDyGXhBhiqBTKKTjlVPnBZAcO011nvAiBh45qKqLl7RcyQCDhCl1gQ7beo1gEszR6kXovSUvD%2BhCqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2KrGXgpVSPZn6l%2BWKtwDKaU%2F3KVvPfssayeOlyuEGQgqkF5lXcyAqkrnIGdtzmR6u%2FEh8R0R%2BOA6IFmfQYEbnXKvA5wsXOTYA76HweRsQKlcLx7xADrbiMTsgvOQ98SENQmQ9c7IlEr2N8kkz8lH2L%2B6bVJf5mxc%2FcSixpCLrjq3mFNkGQlSdIk3CvN82zt6iC7IHya62DnPwV5vhKTyzz5esB4QLRlQKHlcLr857oW9CfYSvwk4x8hT88Pu51%2B11RqhHSukvQAW7XRTkFOatJEsq8OKP0AOO1IZRzyR749y3te0hseUAaug4d7fLv1oW3%2BOWTHfMCwFmm2gzGCKqbaThWaZLv846BpitCCF51JK1VzquQQK%2BU%2Binn9IbCKPLMImXDAKxnG9k1%2BxpVMvNdMeRlY45uG9HpjaR1%2F23QE%2FoVgvtruRary56lpQzdIsWnwoAwMNQoO7R0bMabrLN3U6yh0TZqRvhAk9hv3HYWpmo6ohoDEKAvyc9q4U%2FVsX0ttf7hqftw5g%2BLLsb1HGvQzT43R8ENfty9l8isNdJYCJJWA4DCnwaX5rYSZ5wrj8ZcyMCmQ3zAfnuym9XepIt%2Fi3SpAxxPP%2ByeZ%2FHG%2B7k4r9tue50c%2BpyiblHz5unAwPnsSyX%2Fb8AnVH68Mw7Y3TwAY6pgGo3pw0CsMI6QNuT69MbUiO1evYboMZBmax6KhfdXR7A%2FgSZadiQuZt5zerem%2BMhUCq1wUIfIgQoKLRggSXnv%2FhrV8nUo1UPtxLmSeqG78VuQZCPfu%2FMVqmxogz503mpOXPwpoSo2zU4d%2BWN12%2BKBw8iPt7RKlcFEN1b2FxxWEq6gA%2B%2FUfDoHrVqUKDkh1vk6WK6dCX4b50QHPVE4wKrh30eyBxvwcG&X-Amz-Signature=5effcc347814038b3dd424a33f1eb8de7874f6cda522827283770eccd6db134a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF5XFJ4H%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T140818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIBpX%2BO1TQIjJ70RDyGXhBhiqBTKKTjlVPnBZAcO011nvAiBh45qKqLl7RcyQCDhCl1gQ7beo1gEszR6kXovSUvD%2BhCqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2KrGXgpVSPZn6l%2BWKtwDKaU%2F3KVvPfssayeOlyuEGQgqkF5lXcyAqkrnIGdtzmR6u%2FEh8R0R%2BOA6IFmfQYEbnXKvA5wsXOTYA76HweRsQKlcLx7xADrbiMTsgvOQ98SENQmQ9c7IlEr2N8kkz8lH2L%2B6bVJf5mxc%2FcSixpCLrjq3mFNkGQlSdIk3CvN82zt6iC7IHya62DnPwV5vhKTyzz5esB4QLRlQKHlcLr857oW9CfYSvwk4x8hT88Pu51%2B11RqhHSukvQAW7XRTkFOatJEsq8OKP0AOO1IZRzyR749y3te0hseUAaug4d7fLv1oW3%2BOWTHfMCwFmm2gzGCKqbaThWaZLv846BpitCCF51JK1VzquQQK%2BU%2Binn9IbCKPLMImXDAKxnG9k1%2BxpVMvNdMeRlY45uG9HpjaR1%2F23QE%2FoVgvtruRary56lpQzdIsWnwoAwMNQoO7R0bMabrLN3U6yh0TZqRvhAk9hv3HYWpmo6ohoDEKAvyc9q4U%2FVsX0ttf7hqftw5g%2BLLsb1HGvQzT43R8ENfty9l8isNdJYCJJWA4DCnwaX5rYSZ5wrj8ZcyMCmQ3zAfnuym9XepIt%2Fi3SpAxxPP%2ByeZ%2FHG%2B7k4r9tue50c%2BpyiblHz5unAwPnsSyX%2Fb8AnVH68Mw7Y3TwAY6pgGo3pw0CsMI6QNuT69MbUiO1evYboMZBmax6KhfdXR7A%2FgSZadiQuZt5zerem%2BMhUCq1wUIfIgQoKLRggSXnv%2FhrV8nUo1UPtxLmSeqG78VuQZCPfu%2FMVqmxogz503mpOXPwpoSo2zU4d%2BWN12%2BKBw8iPt7RKlcFEN1b2FxxWEq6gA%2B%2FUfDoHrVqUKDkh1vk6WK6dCX4b50QHPVE4wKrh30eyBxvwcG&X-Amz-Signature=c45f8038578d760fa2ac42e3328711fae0482c830f2e3e50d111cb745dd5803a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

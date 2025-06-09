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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJJ5ZEAD%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T034444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBgI%2BrkpCqLe2CbGU%2FHx1C%2BnmIWOu8Ch%2F4dW1JWbo%2FDgIhAJ0Z5jJ5qKFzaUlABuCkt0uWbERulkcBJw9PdUZdd0zTKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqgdE%2Fsr%2FQmC7M6g8q3ANt3p6ywfewWcCe5BOqabjhWIJrBkwt7GrN09V%2FwpzlIcVJHvIK01BeTg0rgIiU8UeidSxD3%2BPVsArt%2B1wVAiXzUya1FI1DjoKEx6CioAlPKMvWjt0BslwRcyEDo%2BEotGRd4yI%2BGyNdZBiLD%2FM97lDvKYPlXnxDAJuF9sghHjBX6T13nb56KMqYBwNjpIwsYJMVi9Mr31mPGYGBMoGENcyrp65jm8nDQWRCb3ssL68%2FGqB%2BNRvRjQtIvYNwZCaIp4EACb%2FbIt%2B9Lnhaz0FY3VpzYNM6sAoRpqNQ99jefq28MSOzmkJxqjC691GvVgFNOAHPZRXKrPdwq7KI2hiGDaJMW9T6Pp38IjNYOIfyKPdGhwAJQO2APu%2FYLH81KIlfTgstMN%2BCEqdMn%2FM%2FF9vdfrXh2amvozLRmcnJSIY8GZ3SUuu3E1Ummu4EdMFr68A4hbJgpzRy1LgGYvvqSknCxw8fAuOVL9STTXGFb6syqfac0R8gFo%2BKIwlcColbfvBLxYSR3E2WhBge7ICeNh6HZNYrOYaV6DejYVR62rWNYpY2CQh%2FE0peqGtfMZ3k%2Beaw3wzzMKZT6mEPFdjeMcWXK45rcs43AX1VrJXkNLBdAOHBD3HZ%2BKedcr4jyDH9czDT7pjCBjqkAXSBpmG5OuN99xn1HlQKsV%2B8Plt50U%2FwooCNm1eT0mnIS2PoYcXW3d%2F7mGuKVRm2ZP%2BKhOhdbnOzCOwhbo0DiMNPFlrWYXCZD06i18c5nKPiBzFvOyXL6hvi5xL3MuqHjrT3n9QwHHTCTl4x%2BwgIUuHK7j0JR1KEm4grNOFJ5BbdnIAoUpOoRG5liEgaepEMZvvnFHnYoyGfTywfMYPArq8d%2B9rs&X-Amz-Signature=388996d02a7672924add3c08c13b1d2790de2237175e6778018538684d0e15f3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJJ5ZEAD%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T034444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBgI%2BrkpCqLe2CbGU%2FHx1C%2BnmIWOu8Ch%2F4dW1JWbo%2FDgIhAJ0Z5jJ5qKFzaUlABuCkt0uWbERulkcBJw9PdUZdd0zTKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqgdE%2Fsr%2FQmC7M6g8q3ANt3p6ywfewWcCe5BOqabjhWIJrBkwt7GrN09V%2FwpzlIcVJHvIK01BeTg0rgIiU8UeidSxD3%2BPVsArt%2B1wVAiXzUya1FI1DjoKEx6CioAlPKMvWjt0BslwRcyEDo%2BEotGRd4yI%2BGyNdZBiLD%2FM97lDvKYPlXnxDAJuF9sghHjBX6T13nb56KMqYBwNjpIwsYJMVi9Mr31mPGYGBMoGENcyrp65jm8nDQWRCb3ssL68%2FGqB%2BNRvRjQtIvYNwZCaIp4EACb%2FbIt%2B9Lnhaz0FY3VpzYNM6sAoRpqNQ99jefq28MSOzmkJxqjC691GvVgFNOAHPZRXKrPdwq7KI2hiGDaJMW9T6Pp38IjNYOIfyKPdGhwAJQO2APu%2FYLH81KIlfTgstMN%2BCEqdMn%2FM%2FF9vdfrXh2amvozLRmcnJSIY8GZ3SUuu3E1Ummu4EdMFr68A4hbJgpzRy1LgGYvvqSknCxw8fAuOVL9STTXGFb6syqfac0R8gFo%2BKIwlcColbfvBLxYSR3E2WhBge7ICeNh6HZNYrOYaV6DejYVR62rWNYpY2CQh%2FE0peqGtfMZ3k%2Beaw3wzzMKZT6mEPFdjeMcWXK45rcs43AX1VrJXkNLBdAOHBD3HZ%2BKedcr4jyDH9czDT7pjCBjqkAXSBpmG5OuN99xn1HlQKsV%2B8Plt50U%2FwooCNm1eT0mnIS2PoYcXW3d%2F7mGuKVRm2ZP%2BKhOhdbnOzCOwhbo0DiMNPFlrWYXCZD06i18c5nKPiBzFvOyXL6hvi5xL3MuqHjrT3n9QwHHTCTl4x%2BwgIUuHK7j0JR1KEm4grNOFJ5BbdnIAoUpOoRG5liEgaepEMZvvnFHnYoyGfTywfMYPArq8d%2B9rs&X-Amz-Signature=c8d137e83d855bfd46c28099f207022af3055a230beb7aa07b6959853a342ba4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB67RB2E%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjy5CHYxtfp47QnO4Yhc4qBZ4mr0zOSrNUoRuedJ8GJgIhAJ%2Faq30bAkPx8FVLmfUOYDUvlkNSR4buNxC5GhjDxONsKv8DCHgQABoMNjM3NDIzMTgzODA1Igw8LLuzv8nbv7DGQHcq3AMoFnC9lVOUxhHGlBrB448d7zl%2B5REUyTJTRd0b%2F0XrHvYbasKIzpvE9OnhRzWYgxJ55JQvldP3lKUzfoJY3L5Qdrn%2FjNAgvBo6lQMGRhZaqkuDfTeGFnwm%2BJksPYFDaQ1YhhJh5oJl6Q%2BCV5L3QVhHEA4OYQopzHqSTDYHtTSZ2k20%2BqwN9uCy7IC2HZUKHSFkUr4dfmyo9akKLgA1OraLE034KN0rac3Xkbb0DJyQIS3MZEcAWZ%2F3b9%2FX7e72zPuT0kwr0mIhMY%2FVB6C5sRikCY%2BRLwJdR3cSTGscUQxX9eKfejoVWHihLGh6rbralAK17gzw7EXZGexoH7BtvUm1QotYmG6HS5enOZE1TJ7h8KIOTVBWtwKQ23qp%2BCajL0aYu9B3amP3I0THCHr5cQrQf6auuw2wmLCP6ExmMBP5ojQTxaQes05aeIblNTweveFuN0cur9MfCfdjvYAgBMRBC5O65c5NjpL0mfoAMFKB1BGTiU8rz1l%2B8lHPl8u6dmwU5WHa5qTbuXlfbjULZ7Mkzsuybnx11mHtjpt2iWB62rKLcOWk856z1Cvh5Pejwzyv%2FavHM086w8KPFhRRx7IAybfNbAQw5faPflaEuKJd84bnhYo5%2BDUO8wKSUDDMkPPABjqkAalQWeYA%2BWUieNcesLz%2FC%2BC5ZUQVEnuN38AB5vZtrzoAZsPqz4bzSlXDJTON3dyW9sMpjKfZ1G%2FDgRTEdHfIhTOy53%2FNn7OSFUf%2Br9Wg05oVEHBnC0%2B4ioEcZm5Jge77MjJbifRbLP5Q%2Fv4VSiaoulQwOv893QaTA%2B%2BKbmws0tch5iOgWfMqlMnjTcDS4dRt7X439ALRfljFZTZNz6CDuvnhO5nY&X-Amz-Signature=1d0ff95ff699915e6e979dd7be8cfc12b9cdeaac5b291ec55779d5a3f6afb462&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB67RB2E%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjy5CHYxtfp47QnO4Yhc4qBZ4mr0zOSrNUoRuedJ8GJgIhAJ%2Faq30bAkPx8FVLmfUOYDUvlkNSR4buNxC5GhjDxONsKv8DCHgQABoMNjM3NDIzMTgzODA1Igw8LLuzv8nbv7DGQHcq3AMoFnC9lVOUxhHGlBrB448d7zl%2B5REUyTJTRd0b%2F0XrHvYbasKIzpvE9OnhRzWYgxJ55JQvldP3lKUzfoJY3L5Qdrn%2FjNAgvBo6lQMGRhZaqkuDfTeGFnwm%2BJksPYFDaQ1YhhJh5oJl6Q%2BCV5L3QVhHEA4OYQopzHqSTDYHtTSZ2k20%2BqwN9uCy7IC2HZUKHSFkUr4dfmyo9akKLgA1OraLE034KN0rac3Xkbb0DJyQIS3MZEcAWZ%2F3b9%2FX7e72zPuT0kwr0mIhMY%2FVB6C5sRikCY%2BRLwJdR3cSTGscUQxX9eKfejoVWHihLGh6rbralAK17gzw7EXZGexoH7BtvUm1QotYmG6HS5enOZE1TJ7h8KIOTVBWtwKQ23qp%2BCajL0aYu9B3amP3I0THCHr5cQrQf6auuw2wmLCP6ExmMBP5ojQTxaQes05aeIblNTweveFuN0cur9MfCfdjvYAgBMRBC5O65c5NjpL0mfoAMFKB1BGTiU8rz1l%2B8lHPl8u6dmwU5WHa5qTbuXlfbjULZ7Mkzsuybnx11mHtjpt2iWB62rKLcOWk856z1Cvh5Pejwzyv%2FavHM086w8KPFhRRx7IAybfNbAQw5faPflaEuKJd84bnhYo5%2BDUO8wKSUDDMkPPABjqkAalQWeYA%2BWUieNcesLz%2FC%2BC5ZUQVEnuN38AB5vZtrzoAZsPqz4bzSlXDJTON3dyW9sMpjKfZ1G%2FDgRTEdHfIhTOy53%2FNn7OSFUf%2Br9Wg05oVEHBnC0%2B4ioEcZm5Jge77MjJbifRbLP5Q%2Fv4VSiaoulQwOv893QaTA%2B%2BKbmws0tch5iOgWfMqlMnjTcDS4dRt7X439ALRfljFZTZNz6CDuvnhO5nY&X-Amz-Signature=99673fbd398f785f70d18b63ab3dd17dea6a311b0bf65a5ed75f8e6f25f87aa8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

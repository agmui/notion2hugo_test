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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FBKQ2ZW%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T210702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCEQ5B3WxWeGNNTcQx43WBeHK9ZrJB2DJDBfDgxkRdpiwIhAN2QzVkCzAlOyuqw%2BChGjOgKO0iMkF%2BUwJk6E2x5g9i9KogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSfqn5o%2BvwQceyOoAq3APFWjzvS4hFtiG4HC2s%2Fg6sJ2zNajgWDElK6gTYgvRHj4GtYDNt63ingHRqWrFh3AYcI6wycB5SS5T4MD3nOAbidM0l%2B05gB69gjqbgO5f7unforGplFJrTuow%2F9TK3UO69wzcfTK4oNZ3EU7AIomaF1sOALLq4qwl2gEKh9ANuvzyQs6AjMkPm1HjHE2W6cwptmkPlMK1oZqxvXUnQbAkh%2FSKA%2FeQp3KJkaBSTDBk5D34ZX4bjxy%2Foc5WWdTBzNSP3PUl119nz4ct3LqHxqkJwNOXwEQ%2Bbs6P0Tp%2FCIrb52ovrtKgboppLcrwgq8KEK%2B0y0uPhgHw5X0XX30B2r5IK%2BvPMdWmvNkLAAReFeXrGGEvhuzBvYLTWT84CxC6Zzsgr16FXp28FgKtjrz1kDctKEIor%2FG5DtePexREXGy4EdEnbyuTNVOR%2FAU4gNpnDtqSuu%2FPcMot3WfTmHPedDqK9U%2BqdFhEe8G%2Bpc6imQh9LebdEAU3eUhBkEwFZQJZ79XFfraFRyaJsVTFI6dQD0Q%2By19ep9DoKJZJ4ulj%2Fn69mkuC3Ah3n8jzFoay98L34I%2F7FPu%2FIFh44mqjLsNX0c%2B93aIB27Mqkox5zpwMgj6sW8bW9sOe9j%2ByGScxFeTC789nABjqkATdwy3NuiMVJcxAJKYCu%2F5xHDdlvDLLUovmEbz%2FSmyedOH1BKLW9IYxHTQC6SslhYDzY05m7Ay8kRznucWB1DUHw0DN9HG87eQyMLDD83IkZ08ICinZlEcdNdK%2FfgEZb0n0DQIlfi0vXpNPkJaq%2BiBaT6V%2FmVnL6d60HrVYQ6XbxawPoZu1THeLBHq46JNZ9nyhIHM3G8bzLQR9nRfROblx81KgQ&X-Amz-Signature=d5cb501f3ec9546c1433ea9c1973c0a3978f2dbec4151967674f5d40db730680&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FBKQ2ZW%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T210702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCEQ5B3WxWeGNNTcQx43WBeHK9ZrJB2DJDBfDgxkRdpiwIhAN2QzVkCzAlOyuqw%2BChGjOgKO0iMkF%2BUwJk6E2x5g9i9KogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSfqn5o%2BvwQceyOoAq3APFWjzvS4hFtiG4HC2s%2Fg6sJ2zNajgWDElK6gTYgvRHj4GtYDNt63ingHRqWrFh3AYcI6wycB5SS5T4MD3nOAbidM0l%2B05gB69gjqbgO5f7unforGplFJrTuow%2F9TK3UO69wzcfTK4oNZ3EU7AIomaF1sOALLq4qwl2gEKh9ANuvzyQs6AjMkPm1HjHE2W6cwptmkPlMK1oZqxvXUnQbAkh%2FSKA%2FeQp3KJkaBSTDBk5D34ZX4bjxy%2Foc5WWdTBzNSP3PUl119nz4ct3LqHxqkJwNOXwEQ%2Bbs6P0Tp%2FCIrb52ovrtKgboppLcrwgq8KEK%2B0y0uPhgHw5X0XX30B2r5IK%2BvPMdWmvNkLAAReFeXrGGEvhuzBvYLTWT84CxC6Zzsgr16FXp28FgKtjrz1kDctKEIor%2FG5DtePexREXGy4EdEnbyuTNVOR%2FAU4gNpnDtqSuu%2FPcMot3WfTmHPedDqK9U%2BqdFhEe8G%2Bpc6imQh9LebdEAU3eUhBkEwFZQJZ79XFfraFRyaJsVTFI6dQD0Q%2By19ep9DoKJZJ4ulj%2Fn69mkuC3Ah3n8jzFoay98L34I%2F7FPu%2FIFh44mqjLsNX0c%2B93aIB27Mqkox5zpwMgj6sW8bW9sOe9j%2ByGScxFeTC789nABjqkATdwy3NuiMVJcxAJKYCu%2F5xHDdlvDLLUovmEbz%2FSmyedOH1BKLW9IYxHTQC6SslhYDzY05m7Ay8kRznucWB1DUHw0DN9HG87eQyMLDD83IkZ08ICinZlEcdNdK%2FfgEZb0n0DQIlfi0vXpNPkJaq%2BiBaT6V%2FmVnL6d60HrVYQ6XbxawPoZu1THeLBHq46JNZ9nyhIHM3G8bzLQR9nRfROblx81KgQ&X-Amz-Signature=698022c3d484aea9f68cd51eda3ca3e5ca25299b14b54f1c70056eb81dd4ab3c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

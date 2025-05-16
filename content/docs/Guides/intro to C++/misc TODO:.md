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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URXDDILC%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T033633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVf5p%2BS6FZELCVEItyLPhD56KpuwaUgMqjXJb1D58PqgIhAPsWIzejdK7fYEgmy69f4whZTg4ZlkDv6AHGx%2BWSvY6zKv8DCDwQABoMNjM3NDIzMTgzODA1IgxgBueU0UVz%2BhKt6rsq3AMPq7xr%2BQHn5c4iyNek9B50RTXAcdwouk%2F82Fzc7tsB9cM09D%2FL7jN%2FA783b5ycllMuLs5hLwSGHuCOrdkj4AXk1lQ1wvUPzISNlicu7DD6YohfOjTnSyzu74bus0JhFtHVxrDOKdkl1AZQkGXBYXPWAgzvh%2BZI9cDnuEZV0HZNPepTnvWSpK151eI5%2FdhKvNj8RnycheOik8DFtAoDl4lmpNyZuN2cOKDS5yHZ1EkYKupQjytfZF66B9pB5ZSlkaYOAxrSYxKrIKBi8tRpCRqnQEGumNmOiaUrxmQiAt93FpeI60TQifBnD3HcDTsvfMdZrjLhldXqCMExvqF8cCcklT1SrxGqsMHm5Q8zF6OsdWEjKyt8Y0Ti5QXZGyHHaHIy8IxzOYnMw%2FnenKaIhoDXymIbvjssRMiDgBEWf7Z0Ho%2BUIaEd6KFKBRuxXXU%2FCGxL7BiiSpYf9d37PyWzy9zvEeil1tKlbHK0p%2Bce%2Fw7MvxD2VzjloNEPXm2VoSBM%2BA48%2FeQwXYAHUfqpADhLa8AfpzUyQKx8U4IYh9NG3shn7PmR9yo%2BoA5RZ6g8S%2F3sgeNpN%2FE7GJ%2Btjh2QQZ0i8Kwf8lMhG0wfgaG980ZAEn5e6nh%2FebyPpycNt%2BS5IzCR1JrBBjqkAZOMVI1QRZwLbEB%2B9aKrI9Gakn%2BD0fHHzL9xtg9Mt5%2BKoxQSD%2FV1Vcc%2FOGhdjQ%2BCWVhFitiYyk49y0qnhmDPF7YYoMI2K%2BM1tRFK0xmYO2Hek9TdbexHEAKYX9Vk0XugcMM%2FkNBIZJlEb1856Hg6UWK%2B81rzLQYf%2Feg5WPhNXhuX2EVeh4vsnKN7K4WIaBVCGAOhZKv%2FkC2tbHfgVmrUyXPr4CPN&X-Amz-Signature=41db0276b60ce486df32779e673f3676b120ccb3ac222303fc636253c2d437fb&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URXDDILC%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T033633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVf5p%2BS6FZELCVEItyLPhD56KpuwaUgMqjXJb1D58PqgIhAPsWIzejdK7fYEgmy69f4whZTg4ZlkDv6AHGx%2BWSvY6zKv8DCDwQABoMNjM3NDIzMTgzODA1IgxgBueU0UVz%2BhKt6rsq3AMPq7xr%2BQHn5c4iyNek9B50RTXAcdwouk%2F82Fzc7tsB9cM09D%2FL7jN%2FA783b5ycllMuLs5hLwSGHuCOrdkj4AXk1lQ1wvUPzISNlicu7DD6YohfOjTnSyzu74bus0JhFtHVxrDOKdkl1AZQkGXBYXPWAgzvh%2BZI9cDnuEZV0HZNPepTnvWSpK151eI5%2FdhKvNj8RnycheOik8DFtAoDl4lmpNyZuN2cOKDS5yHZ1EkYKupQjytfZF66B9pB5ZSlkaYOAxrSYxKrIKBi8tRpCRqnQEGumNmOiaUrxmQiAt93FpeI60TQifBnD3HcDTsvfMdZrjLhldXqCMExvqF8cCcklT1SrxGqsMHm5Q8zF6OsdWEjKyt8Y0Ti5QXZGyHHaHIy8IxzOYnMw%2FnenKaIhoDXymIbvjssRMiDgBEWf7Z0Ho%2BUIaEd6KFKBRuxXXU%2FCGxL7BiiSpYf9d37PyWzy9zvEeil1tKlbHK0p%2Bce%2Fw7MvxD2VzjloNEPXm2VoSBM%2BA48%2FeQwXYAHUfqpADhLa8AfpzUyQKx8U4IYh9NG3shn7PmR9yo%2BoA5RZ6g8S%2F3sgeNpN%2FE7GJ%2Btjh2QQZ0i8Kwf8lMhG0wfgaG980ZAEn5e6nh%2FebyPpycNt%2BS5IzCR1JrBBjqkAZOMVI1QRZwLbEB%2B9aKrI9Gakn%2BD0fHHzL9xtg9Mt5%2BKoxQSD%2FV1Vcc%2FOGhdjQ%2BCWVhFitiYyk49y0qnhmDPF7YYoMI2K%2BM1tRFK0xmYO2Hek9TdbexHEAKYX9Vk0XugcMM%2FkNBIZJlEb1856Hg6UWK%2B81rzLQYf%2Feg5WPhNXhuX2EVeh4vsnKN7K4WIaBVCGAOhZKv%2FkC2tbHfgVmrUyXPr4CPN&X-Amz-Signature=4f64e9e694dc669bc06552c946b3e619fc2fe2e319bd773e9b96177824e9431f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGIZROD7%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T081043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFv1FvbZpTdXOkMBrIXlytpqLg1SGlFXJtFfFAmV0JcFAiAxgE2tWah5Qi3qT1kOgKd5IUoUtj%2FsptOFWm7R4fIVMiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwvAeJ%2BFCYppQFu53KtwDux7qMCQRazlUN7wnEBoX87BSI4iOoYqNQlBK1CzWNxTMfmM9cudeiU0Tz%2FQgg3TFNMsO3JLok3KT%2FuSpGgc6Jct9YlazJeZr4DaVpxvKe1Jv%2BOFu%2FPS0qRF%2Bssq2CvlGgjP41Y1%2FHicAgLtG8SXCwNJomdnx007yLBSwkJwfnQ1Kreo9y9%2Bt93MSvVIgLNpXpj3iJljS5kk%2FH7JHNl%2FLGUup04qPac8xHdKlAv1E%2BFpfTRQIR9ekwrz%2FUS3u%2FzvaCHVtS4d5AI%2FG56x55G0a93N9xxirJDU93%2FpIEsI0OoPz8Usk7H6EiRdTKhpps4xZyvzYc91klHWO0BVjBDA7ORkORWD%2FRr3a9mDuy8%2B%2FaEGv6GbdYNzuUdOFhfrEeognIk%2FhsCwTz8B6XekchlHeI0L0XrUpkvomGIDQ7Xi6sqmmA2kZqI%2BFphd76PCwelpTVFrCs3Psnpndsb1uORnP7UlmCvUwuQK%2FQ5hqt%2Bq4V%2Bs95bFf%2BhR8AfS5%2FqFHK1z%2Bi%2BetzrFele1%2Fjlgl1VvrrnvqpePKQmY5pM%2Bm8KCcA%2FyIUQhd65vL7VvjFrryXpCCvvZqvVh5TnzNhJX6XCAZx38DlIz8DGhkpAJvfiniP3sXGgHDa1FFQV4j8KgwsN7gvQY6pgEIDWBIn3DcUuAZ2OS%2B7BF6kg7Klz%2Bli4bYKrFGnqQVMIQAXeCmT6o1QTrvNQYzYo4tm%2BB0RHUL52glQEsHshuAqXwBeJVs94BtoyrR5GSffP2iDQYbin11jPakzC%2BOYmdxocsDWeZK5TSZYsjJpnphYdMFe%2BrlrfpFH15tUsnfgqZOuZ%2B3jx2Hw7E6oV1mkbwSAEHxw1trdkbJmXIZwp45%2BMJVhAUp&X-Amz-Signature=0dd6793425cf01bc507f02322753b4f70cb9e6f884dc74afbac2c0de8451a353&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGIZROD7%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T081043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFv1FvbZpTdXOkMBrIXlytpqLg1SGlFXJtFfFAmV0JcFAiAxgE2tWah5Qi3qT1kOgKd5IUoUtj%2FsptOFWm7R4fIVMiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwvAeJ%2BFCYppQFu53KtwDux7qMCQRazlUN7wnEBoX87BSI4iOoYqNQlBK1CzWNxTMfmM9cudeiU0Tz%2FQgg3TFNMsO3JLok3KT%2FuSpGgc6Jct9YlazJeZr4DaVpxvKe1Jv%2BOFu%2FPS0qRF%2Bssq2CvlGgjP41Y1%2FHicAgLtG8SXCwNJomdnx007yLBSwkJwfnQ1Kreo9y9%2Bt93MSvVIgLNpXpj3iJljS5kk%2FH7JHNl%2FLGUup04qPac8xHdKlAv1E%2BFpfTRQIR9ekwrz%2FUS3u%2FzvaCHVtS4d5AI%2FG56x55G0a93N9xxirJDU93%2FpIEsI0OoPz8Usk7H6EiRdTKhpps4xZyvzYc91klHWO0BVjBDA7ORkORWD%2FRr3a9mDuy8%2B%2FaEGv6GbdYNzuUdOFhfrEeognIk%2FhsCwTz8B6XekchlHeI0L0XrUpkvomGIDQ7Xi6sqmmA2kZqI%2BFphd76PCwelpTVFrCs3Psnpndsb1uORnP7UlmCvUwuQK%2FQ5hqt%2Bq4V%2Bs95bFf%2BhR8AfS5%2FqFHK1z%2Bi%2BetzrFele1%2Fjlgl1VvrrnvqpePKQmY5pM%2Bm8KCcA%2FyIUQhd65vL7VvjFrryXpCCvvZqvVh5TnzNhJX6XCAZx38DlIz8DGhkpAJvfiniP3sXGgHDa1FFQV4j8KgwsN7gvQY6pgEIDWBIn3DcUuAZ2OS%2B7BF6kg7Klz%2Bli4bYKrFGnqQVMIQAXeCmT6o1QTrvNQYzYo4tm%2BB0RHUL52glQEsHshuAqXwBeJVs94BtoyrR5GSffP2iDQYbin11jPakzC%2BOYmdxocsDWeZK5TSZYsjJpnphYdMFe%2BrlrfpFH15tUsnfgqZOuZ%2B3jx2Hw7E6oV1mkbwSAEHxw1trdkbJmXIZwp45%2BMJVhAUp&X-Amz-Signature=5174698dec40f51a9750a5db97ad550119abaebb530c1b71aaa3f6ca4105c25d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

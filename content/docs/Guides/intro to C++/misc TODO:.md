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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STPUHHK5%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzd5W7c%2B%2FqcE%2Bc%2BxGCCYARLY0SctMgOZkfN5l%2FXCy14AiEAx8MU6SCoyr%2B13%2FO1dThu4kNfC1vglJizS6x9NNZS6IUqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC8cieqZLx5yjrnptyrcA1Xk2DNzfICBfrFULl%2BX9Vs2CvOZ3GwlMhP5VtlEv9gEpITCnnLzLSfgvioFArkzsZxQKOlN6ohmQeuvHoKCiY8cwI50oICruLdM8ULB3vwNeJhg%2FYkfY%2BcIWg4AhNvz9Whrj69esQSByCSx6Ho4PuL3bnFd2Nvi%2B8cLfGeHsyuaojTk66YRe17nGXXPoXvvrY8Rk0IJfS9hfh8GCeUS2M2tya8rCTQ0ZKQI05F165URuD37cnwvEEVZwF29iQxbALQs1zvSTRZHEdB%2B2gf7wzrt61dNAI7STNnx%2F1uL4VrX%2B1aHaOEGm475806fVzVv5T46sPOuUYqfHf9J8tCVSeMFC1MFC0dIPTYxqb8Kxs9EBT9hfaZjxbneG3%2BXABbQXvZElvfg9O2Ighro27sp0pV%2BgVlyWtrNcbP5jLYAAnIpInwlWxUOQjUKh8KuGwR9BjEOHZpW3aoQn56AL4DKHywPzYpv6bKTF3R44FW9Un0ySTzUgZi1CCR4S3W5oR31fykwfluH1h3tX505jj3ILufRPVzK%2B3HzbMOZ2VXB1wn5NWRDrUdu0ujLXt5D5OalgXBUgWPi9Vzu%2FSUM7CH%2BGhuaomWG7wpjkgxKOdkqBN4wsi8UrfZGCMPB20RYMLD4nMIGOqUBitQYIWEz%2BN4AfHQn%2BCNfV%2FfWnhZjlKA5w6aUV6L4pc0Yn6Z4s2cqWFJngnOW7eJIKQTYh34v%2FGnHxsAp63OHrlWlwmBQ6dIkQjHrAZuA42JoTeBeyaFD2J2yiYZ%2FfpfieNGzp1vyc9eaWBa8aVC6fqO2a%2BGNF8pV7xfNH0%2F%2BmOoyzBLS2cetEUccnJadTMOzm7dhSR57XmkPaS8DohOu7%2BJcvNNs&X-Amz-Signature=769eceb624919554d76987e6d4accb9660738c005ede47ea86071f143545e40a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STPUHHK5%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzd5W7c%2B%2FqcE%2Bc%2BxGCCYARLY0SctMgOZkfN5l%2FXCy14AiEAx8MU6SCoyr%2B13%2FO1dThu4kNfC1vglJizS6x9NNZS6IUqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC8cieqZLx5yjrnptyrcA1Xk2DNzfICBfrFULl%2BX9Vs2CvOZ3GwlMhP5VtlEv9gEpITCnnLzLSfgvioFArkzsZxQKOlN6ohmQeuvHoKCiY8cwI50oICruLdM8ULB3vwNeJhg%2FYkfY%2BcIWg4AhNvz9Whrj69esQSByCSx6Ho4PuL3bnFd2Nvi%2B8cLfGeHsyuaojTk66YRe17nGXXPoXvvrY8Rk0IJfS9hfh8GCeUS2M2tya8rCTQ0ZKQI05F165URuD37cnwvEEVZwF29iQxbALQs1zvSTRZHEdB%2B2gf7wzrt61dNAI7STNnx%2F1uL4VrX%2B1aHaOEGm475806fVzVv5T46sPOuUYqfHf9J8tCVSeMFC1MFC0dIPTYxqb8Kxs9EBT9hfaZjxbneG3%2BXABbQXvZElvfg9O2Ighro27sp0pV%2BgVlyWtrNcbP5jLYAAnIpInwlWxUOQjUKh8KuGwR9BjEOHZpW3aoQn56AL4DKHywPzYpv6bKTF3R44FW9Un0ySTzUgZi1CCR4S3W5oR31fykwfluH1h3tX505jj3ILufRPVzK%2B3HzbMOZ2VXB1wn5NWRDrUdu0ujLXt5D5OalgXBUgWPi9Vzu%2FSUM7CH%2BGhuaomWG7wpjkgxKOdkqBN4wsi8UrfZGCMPB20RYMLD4nMIGOqUBitQYIWEz%2BN4AfHQn%2BCNfV%2FfWnhZjlKA5w6aUV6L4pc0Yn6Z4s2cqWFJngnOW7eJIKQTYh34v%2FGnHxsAp63OHrlWlwmBQ6dIkQjHrAZuA42JoTeBeyaFD2J2yiYZ%2FfpfieNGzp1vyc9eaWBa8aVC6fqO2a%2BGNF8pV7xfNH0%2F%2BmOoyzBLS2cetEUccnJadTMOzm7dhSR57XmkPaS8DohOu7%2BJcvNNs&X-Amz-Signature=25f37b9e0997b8246347b7c3fd6d777b4a6706ca94c4a96baf5ff7ccfb35858a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "null/Guides/intro to C++/misc TODO:.md"
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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y32GSCE%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T003542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDNq9AIl6uGuOAJsT838tIT4AxsgkotbTLv8RNv8uf6GgIgB7k7Odfx4XIW6T1KR6PRwK8C0JKHHNX3L0VEdrrfWjwq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDD6XCw3u7abxuMPKayrcA6nCUgzX%2BpBqNrfzfTBjbOvw%2FTkm9MquA%2BxwRuHW%2F4XiN%2Fu7aRciW%2F7nAC%2FfuohTQbMuDT7CVcBBLGHDAjMAKTcbpFUaB3munFxXOwXrTXn83lhTa57958uNBs%2Bf09ZTPygvD7IxsbHR7GWosZTbzTqHEeTEuBfF5c9IdhjmP9QEV8Hf01dt0TT%2BGFz3LQgxUTHEoVPCeymRqsUtqGG%2BwtK%2BUatwd%2FNC2K%2BH6wAYrrGswg7O2U71%2FAnL1YfatMcrJDkrzfSMdakO23f8spLVT8BRIgrXABNmZ8vNqFPiot9WXuDP7RxArxk%2FDjDP5XujPyGKhEuGSsY9KI5jPP1GzjGf6zoLVU0c3ElVsqbjp6qRUumJ4gc6IvOTZIbQPW9YRBkMKLHf%2Fsl1pMNjTzxKdD8E5omwAgaBulNroZNnLzN8DbEgbnYwNlIe4CVIx1HRHQFK5%2BeqglopJg%2FYsmAAZD3BcyVbSlVh2WKm%2FtOywSJef6pgmrtr6wnG1Tyz98VKXWhlR3NFqjceG4ypoD%2B31GfKjAB7kogydEjwAwYrHA0xPWL9vqdve%2BED5exfSVR5gC5K%2BJFIgoNHaCuM00W1Ouy6KwUcOze41hQ4%2FmzWt1wJIXa3vhajqL0xbiFHMP3Oir0GOqUBX4qkZbOyNvO10Nr9lkPSjoklQjhtfxwhHbvbxNOKY1Dj%2FUaxsVOSJkSUQ68fi0uc9k54YRTpn7yWX1Fg8DsJsMSxBvot27076SIkr8NSQP14EUFkbqe3X6kMIyZzhgmqEL2F0eH0pTvBVWS8C%2FHDJ3JAKQ1NzkKS9SOpyit1UHfLHPrhWQOdvd1bJPVJubf10Sy3Ux9g%2BzxTnPpjdq9xm52UM3jq&X-Amz-Signature=f9e07362a8a317f49b91a2ef26934cc01b812b4cf706575803fb84c27650df75&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y32GSCE%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T003542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDNq9AIl6uGuOAJsT838tIT4AxsgkotbTLv8RNv8uf6GgIgB7k7Odfx4XIW6T1KR6PRwK8C0JKHHNX3L0VEdrrfWjwq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDD6XCw3u7abxuMPKayrcA6nCUgzX%2BpBqNrfzfTBjbOvw%2FTkm9MquA%2BxwRuHW%2F4XiN%2Fu7aRciW%2F7nAC%2FfuohTQbMuDT7CVcBBLGHDAjMAKTcbpFUaB3munFxXOwXrTXn83lhTa57958uNBs%2Bf09ZTPygvD7IxsbHR7GWosZTbzTqHEeTEuBfF5c9IdhjmP9QEV8Hf01dt0TT%2BGFz3LQgxUTHEoVPCeymRqsUtqGG%2BwtK%2BUatwd%2FNC2K%2BH6wAYrrGswg7O2U71%2FAnL1YfatMcrJDkrzfSMdakO23f8spLVT8BRIgrXABNmZ8vNqFPiot9WXuDP7RxArxk%2FDjDP5XujPyGKhEuGSsY9KI5jPP1GzjGf6zoLVU0c3ElVsqbjp6qRUumJ4gc6IvOTZIbQPW9YRBkMKLHf%2Fsl1pMNjTzxKdD8E5omwAgaBulNroZNnLzN8DbEgbnYwNlIe4CVIx1HRHQFK5%2BeqglopJg%2FYsmAAZD3BcyVbSlVh2WKm%2FtOywSJef6pgmrtr6wnG1Tyz98VKXWhlR3NFqjceG4ypoD%2B31GfKjAB7kogydEjwAwYrHA0xPWL9vqdve%2BED5exfSVR5gC5K%2BJFIgoNHaCuM00W1Ouy6KwUcOze41hQ4%2FmzWt1wJIXa3vhajqL0xbiFHMP3Oir0GOqUBX4qkZbOyNvO10Nr9lkPSjoklQjhtfxwhHbvbxNOKY1Dj%2FUaxsVOSJkSUQ68fi0uc9k54YRTpn7yWX1Fg8DsJsMSxBvot27076SIkr8NSQP14EUFkbqe3X6kMIyZzhgmqEL2F0eH0pTvBVWS8C%2FHDJ3JAKQ1NzkKS9SOpyit1UHfLHPrhWQOdvd1bJPVJubf10Sy3Ux9g%2BzxTnPpjdq9xm52UM3jq&X-Amz-Signature=d9b8701b4a2cdc2ca301993a7da6c3ff78e90138a6dc215a7d718e8761984dda&X-Amz-SignedHeaders=host&x-id=GetObject)

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

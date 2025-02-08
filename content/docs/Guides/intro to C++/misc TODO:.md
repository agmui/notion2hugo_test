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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH6DRFO7%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T040903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIDXEBpPT4%2BKqY6m1yfqA9bMP4p3%2B%2Bcdz8bGZIcP%2F1HHBAiEAoPnYzIbjifNIXyqB2puKHjnm78kTGe%2BmrZQToRaiia4qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZwyFcxhv1fMpHD8CrcAxrR1mcuD%2BMUDpG8SyvM3%2BR0TU3f0qeqA5G9WKbV7m3DL0XinNvWhgf7DebQlKfDArvBhm%2BjiM6tg5QPZvFW2QsY7IgQi3pllMF2aLTq31pGRhg3M3EDwSoUZPDKtTHCo9hmEkBKVedif94f5llFWeeuA8F21Cp24RbXRwo4PwZtlAhbKaSKZpY5cohjkpTaqAGeMUjnflYtjc7w8ytGON3cvxPcMv%2FWI9SDdfnXBFID092pPjH5V7fnvgRiMLLXmVhf8Td8cGwBYUXqs58Y%2F2kQY6Y7okxAyQQrKxkNSbusldO%2F%2Fbyi%2F2afEcCKL74h2E0TOj58Kkac6w0B5oItStVp%2FVgB9GaT7dJjCRiFE336ASwaoTW2BhCzdmcamJOCiVh0J8IIgVEIZQbqWTPUz17VRpZtWHAwnhLjLZ2eUzwk9yKO9a0mU%2B4ol%2Fqt%2Bawib%2Bfyl4qQrHyNls1IUQc1vERPfFvMaA0xaxmQdFFrgTEp7CH4RgMGK%2BpmfKCxgQGg0Je%2F9D0alBkLgrzqd%2FMnJF2vWQWCL8VzVu5%2F3fUOAbQT8j%2F%2BV2HtlU5MrohR0Ehnxgx5J1Lq0j22VjqXC1oklDwGuGjPW7C6JsCS2yC9zCsc9EBtj8fep9RMZuH9MP6Xm70GOqUBKKk1iQpq%2Bje9PX8b3AXwmJAS5bJ%2B00l93PiWB9JjbSZoNDkTDb%2B70xEXneHC1Akkvqho0RNJUhWX9ssc%2BUMhRMbepBUa5akyQ2PBQzoQs7MJaoNK%2FhBAVKXbg7xYxRrsNiwv3gWxoQZkc9Y9IyYvt0ddr5km%2Fvm4yeWQLsT%2F%2FfTJBlK06Rvspfc18%2BWO%2BSvoP1G%2FqIOvG%2BiLGokA9tgSzI5d1wSc&X-Amz-Signature=388598246c595fc61614da884cdc259c18f32eccb920eafa500d294f4c49fc38&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH6DRFO7%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T040903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIDXEBpPT4%2BKqY6m1yfqA9bMP4p3%2B%2Bcdz8bGZIcP%2F1HHBAiEAoPnYzIbjifNIXyqB2puKHjnm78kTGe%2BmrZQToRaiia4qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZwyFcxhv1fMpHD8CrcAxrR1mcuD%2BMUDpG8SyvM3%2BR0TU3f0qeqA5G9WKbV7m3DL0XinNvWhgf7DebQlKfDArvBhm%2BjiM6tg5QPZvFW2QsY7IgQi3pllMF2aLTq31pGRhg3M3EDwSoUZPDKtTHCo9hmEkBKVedif94f5llFWeeuA8F21Cp24RbXRwo4PwZtlAhbKaSKZpY5cohjkpTaqAGeMUjnflYtjc7w8ytGON3cvxPcMv%2FWI9SDdfnXBFID092pPjH5V7fnvgRiMLLXmVhf8Td8cGwBYUXqs58Y%2F2kQY6Y7okxAyQQrKxkNSbusldO%2F%2Fbyi%2F2afEcCKL74h2E0TOj58Kkac6w0B5oItStVp%2FVgB9GaT7dJjCRiFE336ASwaoTW2BhCzdmcamJOCiVh0J8IIgVEIZQbqWTPUz17VRpZtWHAwnhLjLZ2eUzwk9yKO9a0mU%2B4ol%2Fqt%2Bawib%2Bfyl4qQrHyNls1IUQc1vERPfFvMaA0xaxmQdFFrgTEp7CH4RgMGK%2BpmfKCxgQGg0Je%2F9D0alBkLgrzqd%2FMnJF2vWQWCL8VzVu5%2F3fUOAbQT8j%2F%2BV2HtlU5MrohR0Ehnxgx5J1Lq0j22VjqXC1oklDwGuGjPW7C6JsCS2yC9zCsc9EBtj8fep9RMZuH9MP6Xm70GOqUBKKk1iQpq%2Bje9PX8b3AXwmJAS5bJ%2B00l93PiWB9JjbSZoNDkTDb%2B70xEXneHC1Akkvqho0RNJUhWX9ssc%2BUMhRMbepBUa5akyQ2PBQzoQs7MJaoNK%2FhBAVKXbg7xYxRrsNiwv3gWxoQZkc9Y9IyYvt0ddr5km%2Fvm4yeWQLsT%2F%2FfTJBlK06Rvspfc18%2BWO%2BSvoP1G%2FqIOvG%2BiLGokA9tgSzI5d1wSc&X-Amz-Signature=4234db63f686b3976f97c8f7c5bd00e2dbaa4c30b1ef13cc3946febfc7f97f4a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VMCFBCE%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T003846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUFQgmEfwb0iZkPE1cB5yjL1P%2BssdsHe9eFITFYztY4AiEArGtGHtoSQDsOj63sg1u8chQqg46y%2FtKCfbvne1%2BPGuUqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEXEhdGLRQg9gg%2F9CrcA44uP%2BSBA5uM9Jp3K4ZhZo77yJHDsvEVNGPiaypGELoq1TdpM1clhMcSZCiFzQm3G266L%2F15ZwEDo5OcV2rCv32xBi4aQ%2BqSbwACZJCILZEnSae82DEjSmuYFIZY0t20ghOAaN2BkAGScTex6cnsp%2FfW1QJh6%2B9oDP7aK5cf%2FDWrRrAqXK5G38j%2BhzdVqAVxIJQvi6hpNPVwFkuiV05yiTic7HGw5ZPpDQ9ZSCKINwtGrqPvJkMqnZUKFknCS%2FK7otgmfcF9aY6bMMkLOLt2Kdigoza84bqJlYyXZ3Yh1rKDljraHgQQo31sJ0S6ftz7Lno%2FBnumnn0GWEDVPC%2B8sXlHJf4o4BTW3avXlH3jtn1rjxlvy6hPAGoPF3ryFyiz1cNmY2m0dISTBZtwTMSzae5ZBsvKkJnHH4OZAPPnRowCGLnYvPJGCbuuIrWTPfs5XAc1Hwbw4vMt0icz%2Bx8O0TIU6U5%2BlTp3qOIxsftXtJQk0glQbd%2BcQJzbsbbMfUVv6%2FInie1o4qt6j5rpxBQSVxHw1%2F%2BkRXkwzvOlObfOEL27B1t%2BR6kse1joBBykeW8j5fDxJPTEWw77Wn4%2F2Big280U4t6JwRW3HgfN71As98wTKibBYnvqTSUX3CCsMJ25vL8GOqUBgFWhksBK4ApKnwTF%2BUpa7zr5kQ%2Fvn8kS5v%2F%2FeovtAITr8FmnxKcqfuryit6u9oZh8Va9ns%2FZ0NdA1cN6C%2BKBCj8O%2FgMoP5a4kF1ebYdd5MXWK0d1TT7kp5PowujMC6pzoZh9ebMTT6fBx9EikOrCXQzmYra%2FZOBmPeq3Vi%2ByLT7GVdh13Fblz6jGf9II0Dw253bB6%2FnR4iQWwan0JlycPDNlUfne&X-Amz-Signature=07dd5abbb40bfb18b942e7cdc9a812d1fd33eea0162f97a525cd59f1d2ff67ac&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VMCFBCE%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T003846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUFQgmEfwb0iZkPE1cB5yjL1P%2BssdsHe9eFITFYztY4AiEArGtGHtoSQDsOj63sg1u8chQqg46y%2FtKCfbvne1%2BPGuUqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEXEhdGLRQg9gg%2F9CrcA44uP%2BSBA5uM9Jp3K4ZhZo77yJHDsvEVNGPiaypGELoq1TdpM1clhMcSZCiFzQm3G266L%2F15ZwEDo5OcV2rCv32xBi4aQ%2BqSbwACZJCILZEnSae82DEjSmuYFIZY0t20ghOAaN2BkAGScTex6cnsp%2FfW1QJh6%2B9oDP7aK5cf%2FDWrRrAqXK5G38j%2BhzdVqAVxIJQvi6hpNPVwFkuiV05yiTic7HGw5ZPpDQ9ZSCKINwtGrqPvJkMqnZUKFknCS%2FK7otgmfcF9aY6bMMkLOLt2Kdigoza84bqJlYyXZ3Yh1rKDljraHgQQo31sJ0S6ftz7Lno%2FBnumnn0GWEDVPC%2B8sXlHJf4o4BTW3avXlH3jtn1rjxlvy6hPAGoPF3ryFyiz1cNmY2m0dISTBZtwTMSzae5ZBsvKkJnHH4OZAPPnRowCGLnYvPJGCbuuIrWTPfs5XAc1Hwbw4vMt0icz%2Bx8O0TIU6U5%2BlTp3qOIxsftXtJQk0glQbd%2BcQJzbsbbMfUVv6%2FInie1o4qt6j5rpxBQSVxHw1%2F%2BkRXkwzvOlObfOEL27B1t%2BR6kse1joBBykeW8j5fDxJPTEWw77Wn4%2F2Big280U4t6JwRW3HgfN71As98wTKibBYnvqTSUX3CCsMJ25vL8GOqUBgFWhksBK4ApKnwTF%2BUpa7zr5kQ%2Fvn8kS5v%2F%2FeovtAITr8FmnxKcqfuryit6u9oZh8Va9ns%2FZ0NdA1cN6C%2BKBCj8O%2FgMoP5a4kF1ebYdd5MXWK0d1TT7kp5PowujMC6pzoZh9ebMTT6fBx9EikOrCXQzmYra%2FZOBmPeq3Vi%2ByLT7GVdh13Fblz6jGf9II0Dw253bB6%2FnR4iQWwan0JlycPDNlUfne&X-Amz-Signature=f902ef7e74aaee5cb92d765ef835927c43bc84efc4c58d5d1fb97b2c8e651efa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

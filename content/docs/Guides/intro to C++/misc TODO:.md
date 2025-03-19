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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O2A3B2K%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCjKL%2FABo%2Fx%2BYiRCT%2FgxY2pBd%2B6%2F7D%2FIPckOrOvfSGcCgIhAIB%2FSswaC%2FvHicL7aZYKi2g0ENZz4Iqfby0K3ubIpHwgKv8DCH4QABoMNjM3NDIzMTgzODA1Igz4vjbe48im2S1Dz6Eq3APR8iRy5C3XTVpu%2BBuulxJBlcpewxpTTn39yRSA0cPDujpyaOtg%2BqE7J9LRcBo2f3uE0pf%2B4L%2BXU9QkLYps1TQo35VuRZa3%2BkTIWRti5uKrZCD%2BG9IJwubH3kYFAbNNKBQVCAvGpnjiG5iZI6ycF3psOAs%2BgDu%2B3nTJqWfGp4Eml0Wan0BI3F6x8%2Bp4Ngir4t%2F5%2B2aN7rVcfkeYbZQdF67dHP8u5O3Nl%2FMd5xf0IqdY7vr0EZYkHEA3Cxtg7wJf2WmKPIxsOFUY7WQbXRqaDs1Qiyw0shiZGNS605B0k7Lw3h4poENb6m6PnhA4RLF3%2F0lDOixbrOvalwEF6yBg82X1dD3hJeLRGuJcUUDRyVIfa7r7V%2FpHdA4rt49pNahj9FYpbqxMASwm6eyksf2y%2FPd%2FPB%2BwakxV0egYuOhyRFITbfPtuLix8bMYFIB8AvTSh6ZTl2%2FeZbuy16T8%2BtXfWsA6lBHh5Qn0P21ERL2UCzQTOKJGHjU3%2B6%2Fvy6stenBrKDoOONXhqiQvZyBlZWMN7peCAKMLvBTe98Txz3RNTRYEEFYqlLBkKjtlsOOYzl%2BuHFkN90Qbwtp1jI%2BU%2BEUmwvZbEfu3iKUstBhdmUbdA4S%2BCSAeiOU%2BexhYzcdMCDDS2Oy%2BBjqkAafZhXehHpbAL3Le5FF8YBgX2Kf9TQe7zmb4K0zHaJ25Ks6OE5ZLyPiF19yLfOpSVMuBjaLFs5xXJPdTeBU%2B9DQuX3RMGEBFPGJcHErSlx6U%2FOW%2F78XF7pxZI7s1yz8LGcLJOWWz1EiJaWUCjKUK%2FJhbpI6dKX%2FotlBXyBI9bhvKxxYHY91W6ny7UU1a9U56H1o3lWf2oiDAaYt25s7eONGvjU4d&X-Amz-Signature=612a209c9da9a21e2d220e4b6cd6b301679e96ef5b06a5e96e347f5c48d18aec&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O2A3B2K%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCjKL%2FABo%2Fx%2BYiRCT%2FgxY2pBd%2B6%2F7D%2FIPckOrOvfSGcCgIhAIB%2FSswaC%2FvHicL7aZYKi2g0ENZz4Iqfby0K3ubIpHwgKv8DCH4QABoMNjM3NDIzMTgzODA1Igz4vjbe48im2S1Dz6Eq3APR8iRy5C3XTVpu%2BBuulxJBlcpewxpTTn39yRSA0cPDujpyaOtg%2BqE7J9LRcBo2f3uE0pf%2B4L%2BXU9QkLYps1TQo35VuRZa3%2BkTIWRti5uKrZCD%2BG9IJwubH3kYFAbNNKBQVCAvGpnjiG5iZI6ycF3psOAs%2BgDu%2B3nTJqWfGp4Eml0Wan0BI3F6x8%2Bp4Ngir4t%2F5%2B2aN7rVcfkeYbZQdF67dHP8u5O3Nl%2FMd5xf0IqdY7vr0EZYkHEA3Cxtg7wJf2WmKPIxsOFUY7WQbXRqaDs1Qiyw0shiZGNS605B0k7Lw3h4poENb6m6PnhA4RLF3%2F0lDOixbrOvalwEF6yBg82X1dD3hJeLRGuJcUUDRyVIfa7r7V%2FpHdA4rt49pNahj9FYpbqxMASwm6eyksf2y%2FPd%2FPB%2BwakxV0egYuOhyRFITbfPtuLix8bMYFIB8AvTSh6ZTl2%2FeZbuy16T8%2BtXfWsA6lBHh5Qn0P21ERL2UCzQTOKJGHjU3%2B6%2Fvy6stenBrKDoOONXhqiQvZyBlZWMN7peCAKMLvBTe98Txz3RNTRYEEFYqlLBkKjtlsOOYzl%2BuHFkN90Qbwtp1jI%2BU%2BEUmwvZbEfu3iKUstBhdmUbdA4S%2BCSAeiOU%2BexhYzcdMCDDS2Oy%2BBjqkAafZhXehHpbAL3Le5FF8YBgX2Kf9TQe7zmb4K0zHaJ25Ks6OE5ZLyPiF19yLfOpSVMuBjaLFs5xXJPdTeBU%2B9DQuX3RMGEBFPGJcHErSlx6U%2FOW%2F78XF7pxZI7s1yz8LGcLJOWWz1EiJaWUCjKUK%2FJhbpI6dKX%2FotlBXyBI9bhvKxxYHY91W6ny7UU1a9U56H1o3lWf2oiDAaYt25s7eONGvjU4d&X-Amz-Signature=b8cc3f7a9240d2c65f38be3e1919b8bcf5af38940a4c5f2c5477d76dde468183&X-Amz-SignedHeaders=host&x-id=GetObject)

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

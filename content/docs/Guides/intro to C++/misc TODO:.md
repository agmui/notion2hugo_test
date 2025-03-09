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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4P3HVH4%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T022632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC0PeOfkbNP9X32hbYsGrvxeNRCp5pbUK8suDgdFeiAYAIgR%2B8RqIpTC5LGJiDC3qpU0PNrdo5fWVCtau41CUkgy10q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDMHlTmCtsEjoj0n2ECrcA%2BoBvCDiZirrGo3buvOn%2Fmwim0%2FNtL%2Fvks34aSFVxtXbksX%2Bcz%2FlBkd7f8CB0%2FOuOn229%2BhIEbcbkuXmPyfO%2B%2BRvt9NRmov3CEusja3ng%2B8bPBpCKI6FwjU54d24xOCtcK%2BPlVN71r9OP95SjjBTTHAQs1r1j5H7g7nJFAAPpyv52fqWq71aYXI%2FlvKTWmJYy4G3IuvbopD2Y%2F70b2X6frm48UaN%2BPzyG2Pbw0yxFFPBW934Dcp79lcb0tXzbpmIolqgSd%2FinN3UWfoAF9tcB7SQLVJ1RwrAs3NAB62UjU0d%2B59bYldAmHcKHWoRVj%2Fe54YIQ2kRR%2BiXkl8yspu1lrXJw%2FIDf13Eo42jYbZcNTttWU1sE6G38N2jsy6Mser1X0VK%2Bo6ARM9mlEdebLz53r%2BgbVPbYH8%2FXNdSWpfn4rstBMSJv2EGEvVNPGEypCOzoi%2BuhnA5WnL7UlSWFNHbEdB0U4YJPjbNGHbyt6QGFMwXOWxF6SkwSXaqHYaEG9ntDO1N%2FBgwG1GN5W%2BGMCllcx%2F3eeuAGYl6A8eNXmx7vBwEZU2aKdn1DygkceBayvy%2BisAdu%2FG56RIUzrS0A3j67gU1wVCHwW1ZJGMr3VMZeL4fDiTdl4kQRh4QuuuMMJ7ps74GOqUBKkiYQaLDnGl31ZkJle02IrhZe4VqkSvc1etgbLRr5DiDdqlP2LNs8oiKl5D8V9gsImn%2FH%2Fxsf8vRrFhinrfocw9qwUEtUwh9jOIqr5VjBakwwLZ2yNpLX9Zyj6oZe2ql%2BQDczSTBSas5QoKvyPt31vdNLrDTPwb7ZCgn1Lr6I%2F9%2FCzwcQDybk5kyz3oHTm76EksG4gldRnDokxlx%2FxCFYtouT1cP&X-Amz-Signature=6831a2cf60f1155342fe5384fb8cb0aead5587ae6b0c5623007d40f2eda591e5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4P3HVH4%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T022632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC0PeOfkbNP9X32hbYsGrvxeNRCp5pbUK8suDgdFeiAYAIgR%2B8RqIpTC5LGJiDC3qpU0PNrdo5fWVCtau41CUkgy10q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDMHlTmCtsEjoj0n2ECrcA%2BoBvCDiZirrGo3buvOn%2Fmwim0%2FNtL%2Fvks34aSFVxtXbksX%2Bcz%2FlBkd7f8CB0%2FOuOn229%2BhIEbcbkuXmPyfO%2B%2BRvt9NRmov3CEusja3ng%2B8bPBpCKI6FwjU54d24xOCtcK%2BPlVN71r9OP95SjjBTTHAQs1r1j5H7g7nJFAAPpyv52fqWq71aYXI%2FlvKTWmJYy4G3IuvbopD2Y%2F70b2X6frm48UaN%2BPzyG2Pbw0yxFFPBW934Dcp79lcb0tXzbpmIolqgSd%2FinN3UWfoAF9tcB7SQLVJ1RwrAs3NAB62UjU0d%2B59bYldAmHcKHWoRVj%2Fe54YIQ2kRR%2BiXkl8yspu1lrXJw%2FIDf13Eo42jYbZcNTttWU1sE6G38N2jsy6Mser1X0VK%2Bo6ARM9mlEdebLz53r%2BgbVPbYH8%2FXNdSWpfn4rstBMSJv2EGEvVNPGEypCOzoi%2BuhnA5WnL7UlSWFNHbEdB0U4YJPjbNGHbyt6QGFMwXOWxF6SkwSXaqHYaEG9ntDO1N%2FBgwG1GN5W%2BGMCllcx%2F3eeuAGYl6A8eNXmx7vBwEZU2aKdn1DygkceBayvy%2BisAdu%2FG56RIUzrS0A3j67gU1wVCHwW1ZJGMr3VMZeL4fDiTdl4kQRh4QuuuMMJ7ps74GOqUBKkiYQaLDnGl31ZkJle02IrhZe4VqkSvc1etgbLRr5DiDdqlP2LNs8oiKl5D8V9gsImn%2FH%2Fxsf8vRrFhinrfocw9qwUEtUwh9jOIqr5VjBakwwLZ2yNpLX9Zyj6oZe2ql%2BQDczSTBSas5QoKvyPt31vdNLrDTPwb7ZCgn1Lr6I%2F9%2FCzwcQDybk5kyz3oHTm76EksG4gldRnDokxlx%2FxCFYtouT1cP&X-Amz-Signature=c97547eef34d8787b0e723d6d6fc053199180adf86c886a44261694bfc2f5a31&X-Amz-SignedHeaders=host&x-id=GetObject)

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

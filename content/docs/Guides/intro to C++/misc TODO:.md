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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q36X4SNM%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T041257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZAiA21y9mqbyaCbF1nmSYXCRziGV581xxhgSSJ8vl%2FAiEA3dWhp8OuChgeKlzW9cSlR%2BsNQfXM6IMdAI4VUGEvUH8qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLSYduNgX1%2BXpKDWDCrcA8J0TChUA8%2BzWgz%2BoUMeTatjKpXlYY1%2F7sXB7X0kCsF9XlOaj1tLR0jb3K1ABkjosNSSbuL3UyEXwEv%2BT%2FcshhcjalbarQzLmBvRc9kJfjlYAAo%2FQW4xhUh7DSne8%2B%2BsiwCNDnbDmUmFFrJL07xDZZoqY1Tj03w8oRlzlw5rCkbWXbkFyZp1hL5sMT0EkSa9hdsyy83gtMSJbox1TdgCQeC%2FItTZWwfjK69MFUM4l9xXqh9R2DrldH1gfipbebpZzYRI3mItHDPLnPvtp5HTzW2gu9c2fEN1uSXsft%2FZhr9u5BKnMbz7kYd3ip3UIMeQv7f%2BmTJyOH6lqurc6CFkuFSbdeCJ%2FVSdOvWbpVAcamLXrOdxLaIwSchSOTfrX1QJ4UxUDx6IANU2utLhaUzJl8oohGIqVPY1YWdyqYdB7N968CVVWvkJaBO3pUSoQK9uTeXikkHQx37mifvFegg2TkYop8g263uLZ%2By0fP58Hr34pMR1Zb4IVPv47IfRGyfRfZlHwbQOkb1TVZZqbc0WBkcFfFsq1uKSJe3JmVU53DVx%2FZp5psQTFPU%2FJX0JTiif6c9pkUypwcgI1h4s3VnBFloUB2jN1hYGEN%2F5%2FsN43421VUfUimf4oDL8fZgrMMabtcEGOqUBWExTZJjGmnJ84trBSn48BTaqh3V8JtZ88qvHWoKyp5DEXz27pDsLVA3Hxz6Wzm5MtIrSxWjzzVdsmj5Gn6yKcI%2BBxUpl7SILQKAP8Tj4YLEN%2FETA0ODDEsH3WlzzhONwAwyB9xdtdFqPrJoc5zRrB5a1yPljlni79xGrEltfqxIXR0PcTlynjPGSsWgxF4jn%2FBqnUPq1cAxFbJAQhF5tjBrYl2Bt&X-Amz-Signature=41cb3d0e790df8f6f807489358a93ae0780446cc34f6e0133ad4803bb245ccf5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q36X4SNM%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T041257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZAiA21y9mqbyaCbF1nmSYXCRziGV581xxhgSSJ8vl%2FAiEA3dWhp8OuChgeKlzW9cSlR%2BsNQfXM6IMdAI4VUGEvUH8qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLSYduNgX1%2BXpKDWDCrcA8J0TChUA8%2BzWgz%2BoUMeTatjKpXlYY1%2F7sXB7X0kCsF9XlOaj1tLR0jb3K1ABkjosNSSbuL3UyEXwEv%2BT%2FcshhcjalbarQzLmBvRc9kJfjlYAAo%2FQW4xhUh7DSne8%2B%2BsiwCNDnbDmUmFFrJL07xDZZoqY1Tj03w8oRlzlw5rCkbWXbkFyZp1hL5sMT0EkSa9hdsyy83gtMSJbox1TdgCQeC%2FItTZWwfjK69MFUM4l9xXqh9R2DrldH1gfipbebpZzYRI3mItHDPLnPvtp5HTzW2gu9c2fEN1uSXsft%2FZhr9u5BKnMbz7kYd3ip3UIMeQv7f%2BmTJyOH6lqurc6CFkuFSbdeCJ%2FVSdOvWbpVAcamLXrOdxLaIwSchSOTfrX1QJ4UxUDx6IANU2utLhaUzJl8oohGIqVPY1YWdyqYdB7N968CVVWvkJaBO3pUSoQK9uTeXikkHQx37mifvFegg2TkYop8g263uLZ%2By0fP58Hr34pMR1Zb4IVPv47IfRGyfRfZlHwbQOkb1TVZZqbc0WBkcFfFsq1uKSJe3JmVU53DVx%2FZp5psQTFPU%2FJX0JTiif6c9pkUypwcgI1h4s3VnBFloUB2jN1hYGEN%2F5%2FsN43421VUfUimf4oDL8fZgrMMabtcEGOqUBWExTZJjGmnJ84trBSn48BTaqh3V8JtZ88qvHWoKyp5DEXz27pDsLVA3Hxz6Wzm5MtIrSxWjzzVdsmj5Gn6yKcI%2BBxUpl7SILQKAP8Tj4YLEN%2FETA0ODDEsH3WlzzhONwAwyB9xdtdFqPrJoc5zRrB5a1yPljlni79xGrEltfqxIXR0PcTlynjPGSsWgxF4jn%2FBqnUPq1cAxFbJAQhF5tjBrYl2Bt&X-Amz-Signature=35caf35f40a08ef0ebc3482145a82320f5a0125930d5d312de910b74a9ffd915&X-Amz-SignedHeaders=host&x-id=GetObject)

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

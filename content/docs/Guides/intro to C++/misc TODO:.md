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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NTDZJLG%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T132545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOqa7G7eLyXODTRdvpm93Ft89bcWevO2quk7Q2Skt2sAIgM%2BPnDjRKny12kcBDISKaEL3rvPpMXkEiuvoObuih7yMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDElOhcX8xns9GzhEwyrcA1pfb76LbQHgvnLZqEQf8EmQD90lSpkL3tr1gb7Q105f3DwMKpa%2FrZJRdmFdVyjeJ3k3SqUtGCr9TO%2FN%2BiNFlcpkYeoU9ylMxM%2Fowup50bjLXM2O%2FuOgJ0xAYy7wCExf%2F2oJMmgvOnYSnQdo9tqt%2FO87YyaskCstW928F6ULk0c562ikieDBiPeX5FVUlyG6AVJWhVY0sWORGuGtF%2FaclOJxdgezCOAHwZK9FzeG853bqFBl%2BWJyRFu7rENKwlRLIjcGj%2FcUIPzMdFyuG5TwxsRwO%2BQLS6B%2FQr9VEIs4gy8s%2BvqIX0xQR%2BjcDtv%2FbHvK4LVznWUNisddSVG7a0cHyOHJvOyEw7A1B4kxSvlXdic6zzXPq3LzmFZB7XyeCaV20RtIFZdLNNfcMGr5oTmozcXLrgwkGuQYoAv6FHg98p%2Fri2WRET8cCL8TXHLc4Vnp7Ukdrqe4KSic83v9QIfQ9Y6QUEnoOtB8vnT%2Bnsp277HkALrjSPtuxXYUCe%2FSGZWC3wFKkF4HnK7LwQl33vi3Z%2B91PJcy9%2BRcM9oYld%2B3t%2BwSZEL5P5XuMCNDhCSIoLbhfOJWflx1XnRMfo0pjFgKP4bY6eL8GKabudOVcF2L3ILf1yeRBRhNwtU88GaoMIKnxcIGOqUBa2xymIlLwrbekaw%2FQh528FYRvTxBIaHpdDA1GA95v5ZyYoImuRwODIwScNkCXSJUr2gpHon6fjS1gdfoFgjYq1OHKl3A20qCsGDn%2BbLObu6%2F5nBgr7D5kG2Qt1ClyOi4pbNhyjpzqYSB3khfePpM3xQ%2FgjMnrZrReQ0botyaCgNM5o7w1qdi3bj1U7z7B0i2NbM44dJttUvgQq6AikiIESa1nNoX&X-Amz-Signature=d3297502f69c49f476e36b1d269b59822c7421cb320df1e599b3961093327245&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NTDZJLG%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T132545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOqa7G7eLyXODTRdvpm93Ft89bcWevO2quk7Q2Skt2sAIgM%2BPnDjRKny12kcBDISKaEL3rvPpMXkEiuvoObuih7yMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDElOhcX8xns9GzhEwyrcA1pfb76LbQHgvnLZqEQf8EmQD90lSpkL3tr1gb7Q105f3DwMKpa%2FrZJRdmFdVyjeJ3k3SqUtGCr9TO%2FN%2BiNFlcpkYeoU9ylMxM%2Fowup50bjLXM2O%2FuOgJ0xAYy7wCExf%2F2oJMmgvOnYSnQdo9tqt%2FO87YyaskCstW928F6ULk0c562ikieDBiPeX5FVUlyG6AVJWhVY0sWORGuGtF%2FaclOJxdgezCOAHwZK9FzeG853bqFBl%2BWJyRFu7rENKwlRLIjcGj%2FcUIPzMdFyuG5TwxsRwO%2BQLS6B%2FQr9VEIs4gy8s%2BvqIX0xQR%2BjcDtv%2FbHvK4LVznWUNisddSVG7a0cHyOHJvOyEw7A1B4kxSvlXdic6zzXPq3LzmFZB7XyeCaV20RtIFZdLNNfcMGr5oTmozcXLrgwkGuQYoAv6FHg98p%2Fri2WRET8cCL8TXHLc4Vnp7Ukdrqe4KSic83v9QIfQ9Y6QUEnoOtB8vnT%2Bnsp277HkALrjSPtuxXYUCe%2FSGZWC3wFKkF4HnK7LwQl33vi3Z%2B91PJcy9%2BRcM9oYld%2B3t%2BwSZEL5P5XuMCNDhCSIoLbhfOJWflx1XnRMfo0pjFgKP4bY6eL8GKabudOVcF2L3ILf1yeRBRhNwtU88GaoMIKnxcIGOqUBa2xymIlLwrbekaw%2FQh528FYRvTxBIaHpdDA1GA95v5ZyYoImuRwODIwScNkCXSJUr2gpHon6fjS1gdfoFgjYq1OHKl3A20qCsGDn%2BbLObu6%2F5nBgr7D5kG2Qt1ClyOi4pbNhyjpzqYSB3khfePpM3xQ%2FgjMnrZrReQ0botyaCgNM5o7w1qdi3bj1U7z7B0i2NbM44dJttUvgQq6AikiIESa1nNoX&X-Amz-Signature=f51679f1301fe8dab21d0502b9de2ad425eb0762fe8733f126393e33fcf33ac3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

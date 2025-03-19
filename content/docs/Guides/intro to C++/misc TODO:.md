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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UO6L3QX%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T050824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIHXTikr%2Fjlw025iFI1Hq87W%2B3Wf%2BY2bJ78JRDBRS1eT6AiEA9SIO41i6e4Ozi7XRsc4PAVgsWDlMUYYsErld4vhsNLYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMmHKdpfozsH9zSiZCrcA6bn0Ix3dVXUc1FatSPLxXfoFeMgfkhTT4a23kSg%2BE2K7fdhKdTytJYTRl3jgjBwaI1MG7v4oJ1xGUeZj%2FeE%2F2db490SbvjfEgJ03YLYGczyySjg%2BkHAwHnk%2BNBeoHHdmNvU9SU4dxg6mF%2B0u3AZ3iDeRtFQxNEP4av7cetLWXJKBn9%2Bg4wqVcbE6ZwZmlb1uKeRzJdf35rQZnamV0C2x4qZllKwJvPcKIu4GMnQzmiz5tZTZ76IcWlIkd99xxo8QALW1ka02jKeJWPRqWo0x573LZwjauDH8%2F0r9UCuXRbbaHNXhMn%2FATbme0nYbDrHF4nrqdSC8yt3N4cPRsZsYGos6kQhnFRDqnK%2BIviNmm7RTzN1OqwVjqrPo8nUpy2ZfAFO4uJjFKoULKofKb55V17pHEGBnNBkf10Hr1%2BycqIM6bn%2B3tyH8b4Yj2c0DSKw91ueZqff4bnXeB%2FX1%2B26Td5OD6CqTwRZGVaLIv0aqkSO2W%2BIDiXBdUmZRyY%2BbSgxAXxUuUDMPaH%2Boh%2B6jF0ZwsZhjErmB8x0g3cqAmFBGDCXYeTwexawa1t%2Bi6RsSAC7ozs9XwRKFSwmaHQblqRf2MWoYh30nOvFEz%2BKxUhbIxClVHJ69T%2B4bdiL1ndbMN796L4GOqUBP6uq9VcFBtx8s9gRtic8KnMvkm5dDqyZnBBF2d36ZRST%2BpNTZO1Xk226ZA27BnYff12KrCBagYFqSCpdIflk4qcIqBDxmZ2XQKz2RLye%2F8eMa%2BcfC5qiY3jSdP0DjL86fESebmQ3z4WhhaSZkf5tYCjsSyR7Xo%2BsA3qwNAo40MhTRH1VqUHM55uJFx4TdXIy4ygebQb9aw1fYGTI7i1mnCEy254B&X-Amz-Signature=32db68e7d36960b6f2c2a04af0fa2dc93946f17b96a8019e2f56640b6bcc325b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UO6L3QX%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T050824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIHXTikr%2Fjlw025iFI1Hq87W%2B3Wf%2BY2bJ78JRDBRS1eT6AiEA9SIO41i6e4Ozi7XRsc4PAVgsWDlMUYYsErld4vhsNLYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMmHKdpfozsH9zSiZCrcA6bn0Ix3dVXUc1FatSPLxXfoFeMgfkhTT4a23kSg%2BE2K7fdhKdTytJYTRl3jgjBwaI1MG7v4oJ1xGUeZj%2FeE%2F2db490SbvjfEgJ03YLYGczyySjg%2BkHAwHnk%2BNBeoHHdmNvU9SU4dxg6mF%2B0u3AZ3iDeRtFQxNEP4av7cetLWXJKBn9%2Bg4wqVcbE6ZwZmlb1uKeRzJdf35rQZnamV0C2x4qZllKwJvPcKIu4GMnQzmiz5tZTZ76IcWlIkd99xxo8QALW1ka02jKeJWPRqWo0x573LZwjauDH8%2F0r9UCuXRbbaHNXhMn%2FATbme0nYbDrHF4nrqdSC8yt3N4cPRsZsYGos6kQhnFRDqnK%2BIviNmm7RTzN1OqwVjqrPo8nUpy2ZfAFO4uJjFKoULKofKb55V17pHEGBnNBkf10Hr1%2BycqIM6bn%2B3tyH8b4Yj2c0DSKw91ueZqff4bnXeB%2FX1%2B26Td5OD6CqTwRZGVaLIv0aqkSO2W%2BIDiXBdUmZRyY%2BbSgxAXxUuUDMPaH%2Boh%2B6jF0ZwsZhjErmB8x0g3cqAmFBGDCXYeTwexawa1t%2Bi6RsSAC7ozs9XwRKFSwmaHQblqRf2MWoYh30nOvFEz%2BKxUhbIxClVHJ69T%2B4bdiL1ndbMN796L4GOqUBP6uq9VcFBtx8s9gRtic8KnMvkm5dDqyZnBBF2d36ZRST%2BpNTZO1Xk226ZA27BnYff12KrCBagYFqSCpdIflk4qcIqBDxmZ2XQKz2RLye%2F8eMa%2BcfC5qiY3jSdP0DjL86fESebmQ3z4WhhaSZkf5tYCjsSyR7Xo%2BsA3qwNAo40MhTRH1VqUHM55uJFx4TdXIy4ygebQb9aw1fYGTI7i1mnCEy254B&X-Amz-Signature=68df4bfb7347757e2408581b06e2d4850d5a0d62b1e8527916ca58e4c22ae232&X-Amz-SignedHeaders=host&x-id=GetObject)

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

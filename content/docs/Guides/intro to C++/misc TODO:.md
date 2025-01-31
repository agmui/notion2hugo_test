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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLMWNCCX%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T150722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICG7GWmRu4TQHFu0CdppYm2F8HpsBwTwUsV3vPYGgCGpAiEA06zWgck6pnzhYb3DKj%2FksItUq26Ctkqvt6qm9eFJ5AoqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHW8%2Fgr0rItJJfiOAyrcA0xZuUmjyY6itJuwsGZ7Q5ULoqMwkNcJ0ZZuzi3%2FyI2zMxnTxGvM6k9HcxfrOJGtJBNV5BlVfcsvvdfDBczDhL143GUWA11RryVzwD3%2B1OIpw9wuCZ6oeq3aB6IhibiuTy9lpFKrHsNIDFuNP5g60mtREFSIMrBrRzEP5du8g3ZRW4k%2FxkV49vayfNV%2BTDOjnjc%2F5CB5Oi2ylXwVXIJ8ILHdxHR6MKldQcvZyfpeZprK6fVyMjVJFGaTqDj5p0cE9Xh2vf5BT2atrR%2BPb7fHFiSNhBChEgADgb7NKWHgh2atrpm%2BWFF%2Fe3hrV5w4LBpkRG6OTfRJGKCUcoK2ZvKNl6ZmehS90TDOky4WDI8CTPAdwR57CdIAVEsm%2BcdYmn3jaIFIxWCm%2F9I61lhk3YLtOc0wzRpw4yL73uNAMSnIGeA%2BuzLeAiRxaa46jJbfoND0FQVw1TKTxGVchzH%2FI5xwTPTcScnmY0pViBQltJAsoabqDrUsxV9bUmAw45abfjnh3TuNReZtk6Uf8BC4iluKY3CqP%2Bbjv7vpVm0V%2BriclII5Jsowc6r%2F%2BuQ3eh9oTws0XoWl8MpQAt%2Fo%2BMbeNH3aT0VcJ9Qp%2BF%2B%2F%2FbxUEC4lkKnPBs3tmui%2FUPnhap5ZMMXJ87wGOqUBX%2BT9%2Flv8sf2i9G42X03hFZ3HNPEOzEnQPcH2jSsuAUIno2O%2F2VeTAryjchkLA0z1t%2FjUZzatoGIrRvqN3Mks6pfrUN7aLoT1fKa52U2pv2TRStL6o1gkXm%2FMEN6%2FeBE1wGrugXgWDgeuZxjE5YXUnEbKvOUWFUlTnGamanPrnR%2BWwclw%2FW76EI2tmWtzQB%2BnuUUqCRycahyFNTNDrgov9A%2BeORTK&X-Amz-Signature=2664abe49a930f843e09f01fe129ede965f77869d19216fc721e114d2a0b607d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLMWNCCX%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T150722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICG7GWmRu4TQHFu0CdppYm2F8HpsBwTwUsV3vPYGgCGpAiEA06zWgck6pnzhYb3DKj%2FksItUq26Ctkqvt6qm9eFJ5AoqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHW8%2Fgr0rItJJfiOAyrcA0xZuUmjyY6itJuwsGZ7Q5ULoqMwkNcJ0ZZuzi3%2FyI2zMxnTxGvM6k9HcxfrOJGtJBNV5BlVfcsvvdfDBczDhL143GUWA11RryVzwD3%2B1OIpw9wuCZ6oeq3aB6IhibiuTy9lpFKrHsNIDFuNP5g60mtREFSIMrBrRzEP5du8g3ZRW4k%2FxkV49vayfNV%2BTDOjnjc%2F5CB5Oi2ylXwVXIJ8ILHdxHR6MKldQcvZyfpeZprK6fVyMjVJFGaTqDj5p0cE9Xh2vf5BT2atrR%2BPb7fHFiSNhBChEgADgb7NKWHgh2atrpm%2BWFF%2Fe3hrV5w4LBpkRG6OTfRJGKCUcoK2ZvKNl6ZmehS90TDOky4WDI8CTPAdwR57CdIAVEsm%2BcdYmn3jaIFIxWCm%2F9I61lhk3YLtOc0wzRpw4yL73uNAMSnIGeA%2BuzLeAiRxaa46jJbfoND0FQVw1TKTxGVchzH%2FI5xwTPTcScnmY0pViBQltJAsoabqDrUsxV9bUmAw45abfjnh3TuNReZtk6Uf8BC4iluKY3CqP%2Bbjv7vpVm0V%2BriclII5Jsowc6r%2F%2BuQ3eh9oTws0XoWl8MpQAt%2Fo%2BMbeNH3aT0VcJ9Qp%2BF%2B%2F%2FbxUEC4lkKnPBs3tmui%2FUPnhap5ZMMXJ87wGOqUBX%2BT9%2Flv8sf2i9G42X03hFZ3HNPEOzEnQPcH2jSsuAUIno2O%2F2VeTAryjchkLA0z1t%2FjUZzatoGIrRvqN3Mks6pfrUN7aLoT1fKa52U2pv2TRStL6o1gkXm%2FMEN6%2FeBE1wGrugXgWDgeuZxjE5YXUnEbKvOUWFUlTnGamanPrnR%2BWwclw%2FW76EI2tmWtzQB%2BnuUUqCRycahyFNTNDrgov9A%2BeORTK&X-Amz-Signature=61a84ec7e8790d4ad82b42c929e6c70d97db8f489260aaf6231b1b2b303bda0e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

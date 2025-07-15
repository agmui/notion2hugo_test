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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY4ZNIBG%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T051531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIDYksjEma1lCc63l2BfPEmLQzCE3ZWsN2lej0oWJnPPjAiEAh15FpcZM5OYwgqEmxZ96lKv9%2FGd4or9QVPKiBbtAwxIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDM%2BxkUkn2Ei1C5ia%2BSrcA9CjQZQUcfE8IspNNkf2Z6%2FeQyZfEcUwzurKwHh%2F64g9GtepWCYpS5xzDxmxB944Fv9ZLUJqd4rgsc5s0XVKB5NitfmkYipaDf3nxbnCDpM55DSsBsmAIzIeqyXSvC2UzIJz9NMss9WjqmEDDHj1XeVKaLPsGM%2FVPbDV9bCoHJd2TIguuFislyH01DseFUpOvhEPnoF2hPQ3Sl6PPF8ZoUPvkKPFJr%2FHTl4H05XaEO5HJcwN1382fKLA4qLtOdsz3t6SK00tQU3ZY5D2N2UlP%2FKgjwcXfoc6Nu4EL8R1JPnr9OQ8%2FVxgM8hUPElWOUWn9W34u%2FI0FHviQ%2BqB6Lv1nHqZfn5ACIamNRJvKr%2BfVO0QD2APr%2B5r%2FAHm%2FvunaV5AdXZyJOzDM%2FYrR%2BQ51LqEw7ym2fjQuuWXja84JMJX25DS1FIZX9LBA6idPHwdW67HhGf7P1tUwtkuQmLEy%2BLA%2B2oF%2FAXKLdv7y4uSV0H6PpOFBZQOni4dMO1zp6LnD3AyYNZYjVcl9cC1bJrlfmH24SfxL3IJsfPFwrbVX33Z4E2wYyMLI%2BlvLUNiBtAZaC0IQgUs%2BHNoBi09becLGSIw%2B%2FxwxsTwWj1t93xSJRGh0l2WzzFryJbe64x8ThPYMOGq18MGOqUBmCwrsasQC7CTd351gw2%2B80lDSE8svCJg56HqWFU2u9iAdAPHXHFw6dhNiCJOg38GxJyWz%2FRjtdiq4ZMSh%2FnC%2BblLrc%2FVRr%2F%2Fda5Jd0wqL%2Bp%2FBhxR1BXmcL%2BZj%2Ff6lIfBInSNjot%2BRyX6MdmbpMIUygKMKY3ZJQIjowjEKNtlkY7OKmq91%2F0jhhbxZyNxLrt9B1Grre7BxRx50oN%2F4J05zASDDFa%2B&X-Amz-Signature=c3bf0e5fef80c5945b469dba65be2b3808e7a9a9d06ef0a41cdb1e50b02f308c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY4ZNIBG%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T051531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIDYksjEma1lCc63l2BfPEmLQzCE3ZWsN2lej0oWJnPPjAiEAh15FpcZM5OYwgqEmxZ96lKv9%2FGd4or9QVPKiBbtAwxIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDM%2BxkUkn2Ei1C5ia%2BSrcA9CjQZQUcfE8IspNNkf2Z6%2FeQyZfEcUwzurKwHh%2F64g9GtepWCYpS5xzDxmxB944Fv9ZLUJqd4rgsc5s0XVKB5NitfmkYipaDf3nxbnCDpM55DSsBsmAIzIeqyXSvC2UzIJz9NMss9WjqmEDDHj1XeVKaLPsGM%2FVPbDV9bCoHJd2TIguuFislyH01DseFUpOvhEPnoF2hPQ3Sl6PPF8ZoUPvkKPFJr%2FHTl4H05XaEO5HJcwN1382fKLA4qLtOdsz3t6SK00tQU3ZY5D2N2UlP%2FKgjwcXfoc6Nu4EL8R1JPnr9OQ8%2FVxgM8hUPElWOUWn9W34u%2FI0FHviQ%2BqB6Lv1nHqZfn5ACIamNRJvKr%2BfVO0QD2APr%2B5r%2FAHm%2FvunaV5AdXZyJOzDM%2FYrR%2BQ51LqEw7ym2fjQuuWXja84JMJX25DS1FIZX9LBA6idPHwdW67HhGf7P1tUwtkuQmLEy%2BLA%2B2oF%2FAXKLdv7y4uSV0H6PpOFBZQOni4dMO1zp6LnD3AyYNZYjVcl9cC1bJrlfmH24SfxL3IJsfPFwrbVX33Z4E2wYyMLI%2BlvLUNiBtAZaC0IQgUs%2BHNoBi09becLGSIw%2B%2FxwxsTwWj1t93xSJRGh0l2WzzFryJbe64x8ThPYMOGq18MGOqUBmCwrsasQC7CTd351gw2%2B80lDSE8svCJg56HqWFU2u9iAdAPHXHFw6dhNiCJOg38GxJyWz%2FRjtdiq4ZMSh%2FnC%2BblLrc%2FVRr%2F%2Fda5Jd0wqL%2Bp%2FBhxR1BXmcL%2BZj%2Ff6lIfBInSNjot%2BRyX6MdmbpMIUygKMKY3ZJQIjowjEKNtlkY7OKmq91%2F0jhhbxZyNxLrt9B1Grre7BxRx50oN%2F4J05zASDDFa%2B&X-Amz-Signature=6d7e770e5da516dca6a875bc743f2a5bdff0e791833e57012737dd5778e11355&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

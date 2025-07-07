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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZYYDOLU%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T121632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQC0sn0Yom0qd%2BlOimy6OR%2F8T1hEmhZYvaaC%2Bnc7D7uPmAIgZahB2889Sl2XCtUV9X6Wv3w40R2lb%2BmKm2ow6jHoNHUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDD87UdCXXfrRpx5M1SrcA38FrFuRl0ubFzpYfs0kMccPx1Gob24U1svQJCTPcCYypMOtALU%2BxBFMbQP0fx0setZVm9tExQ4BiiSZw7NYDd0%2F4XH5rDCIOJbyDVOMrk6Dg5mr5CHZIku3OAe4eBuO%2B5mOgtdICck6zwN%2FV97RB2ziuzCRuxMeKjlFTRX1IL6R83myPrervhKYZeHE5h47%2Fff4nVtE%2BHGl8NNcuLor5YlnzQCSQrXNGJtcuARf3iU%2FiNFgAEu10eK%2B4EnMWl0Q4MBbY11YnOJpQaMMB8gCkl8craZ5C5nQDkszTwLbJZVM622hTAtIM6iHGysYMdkR9Fd1s1dt%2B9WiXwW3C%2B5t0S6GU6tN7TQhk9J0lt9uLdmhIjOg%2FSLWcLS8oXkB4fcC9mtthdSswfQj2VsJLK1uycxfIRvleMv9bGyM%2FlD5atrU0mqUkRJmhBLAIdj6%2Bzr2OUhK3604oauV3SgbxjxTFF5M52WOr0nI%2BuFLX%2FwmbAlemIHj9mcQlMx1gjlDwCyko5LSU2BKsd8Q3RzsEPUGKH6yn%2BuQnDbopzSzqzfS7szk0vxDun4ugrTrzrulmJoADU13GDSosmQpMDLfUugkosWhEp2P0nLAF%2FbczYl0JrIm73i3Qty7mqrKfoJVMLHirsMGOqUBnFMCynCfZb%2Bg9%2FCLMekR5wxR2RuUfGBe%2FRhO1f06AxHe4v5irrtEP1nK6zisKJcInfmkaVW8%2Fo2VEgJjNiGBAkTG0VL6zmLhZxdwy2SmeoaxKZbBPxoZtKOFtFIKcGMyIxFNo4aERRLPGFgYiwy6WHfxJb%2BfZXsexotbY67CF7OenIOv2BSeq2pfLAeiZ%2FWNsbMUvgjJi1jyXx9uucZtWqiAuNum&X-Amz-Signature=ab6f0cd22393bb374bfe222fd9a60a537c5067ade63159873d678679a0e234bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZYYDOLU%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T121632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQC0sn0Yom0qd%2BlOimy6OR%2F8T1hEmhZYvaaC%2Bnc7D7uPmAIgZahB2889Sl2XCtUV9X6Wv3w40R2lb%2BmKm2ow6jHoNHUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDD87UdCXXfrRpx5M1SrcA38FrFuRl0ubFzpYfs0kMccPx1Gob24U1svQJCTPcCYypMOtALU%2BxBFMbQP0fx0setZVm9tExQ4BiiSZw7NYDd0%2F4XH5rDCIOJbyDVOMrk6Dg5mr5CHZIku3OAe4eBuO%2B5mOgtdICck6zwN%2FV97RB2ziuzCRuxMeKjlFTRX1IL6R83myPrervhKYZeHE5h47%2Fff4nVtE%2BHGl8NNcuLor5YlnzQCSQrXNGJtcuARf3iU%2FiNFgAEu10eK%2B4EnMWl0Q4MBbY11YnOJpQaMMB8gCkl8craZ5C5nQDkszTwLbJZVM622hTAtIM6iHGysYMdkR9Fd1s1dt%2B9WiXwW3C%2B5t0S6GU6tN7TQhk9J0lt9uLdmhIjOg%2FSLWcLS8oXkB4fcC9mtthdSswfQj2VsJLK1uycxfIRvleMv9bGyM%2FlD5atrU0mqUkRJmhBLAIdj6%2Bzr2OUhK3604oauV3SgbxjxTFF5M52WOr0nI%2BuFLX%2FwmbAlemIHj9mcQlMx1gjlDwCyko5LSU2BKsd8Q3RzsEPUGKH6yn%2BuQnDbopzSzqzfS7szk0vxDun4ugrTrzrulmJoADU13GDSosmQpMDLfUugkosWhEp2P0nLAF%2FbczYl0JrIm73i3Qty7mqrKfoJVMLHirsMGOqUBnFMCynCfZb%2Bg9%2FCLMekR5wxR2RuUfGBe%2FRhO1f06AxHe4v5irrtEP1nK6zisKJcInfmkaVW8%2Fo2VEgJjNiGBAkTG0VL6zmLhZxdwy2SmeoaxKZbBPxoZtKOFtFIKcGMyIxFNo4aERRLPGFgYiwy6WHfxJb%2BfZXsexotbY67CF7OenIOv2BSeq2pfLAeiZ%2FWNsbMUvgjJi1jyXx9uucZtWqiAuNum&X-Amz-Signature=c053e2b140aa35cc15810c7985e042124aff101124d1077927f293e008193e94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

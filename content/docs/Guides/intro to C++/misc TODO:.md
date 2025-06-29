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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZG4BCWL%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T004932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYk8lxpLM7AcnrRRUVLbWQt37KjL7HTKRlsZ%2BzuRMzAQIhAJaR3zqqjRpHeR5t3N4b7fq5Av37HysnoptKqST5p9xLKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FK21ThMw358fzgmAq3APaA267OviCRFXuHcgGAiSpZLjPhy3cMO%2FE1G0CrS9UcjeKuQYwDrus8NeV%2Bgr4l2EHzeyiKbojZ70Ka0B1xz3xZxPVk5x5t71f%2BiLYCe%2BCyZBVjWZQbPucLfsu%2FtRba7ZEWGqk6PrGzeaVUmnCZm%2B1Xxv384IDcSTxBSZtPfwdi3OMHZ54TTsbtf302W4BAbLTbbgEEcSt44u3suWanajaQ0mxGeyljdl9WWE3B9%2BZcL5SO%2B4a5EswJ4434ZP8RxfZ13JBbvk8wXiAX2frJSBUj3dEXT%2Fuqrh9BAyVQEXkl2Pb4ZPVEOwDcTXeQRNRiGbcLBHukQZEYoqhp47r5lxtiiyNQdQZyl%2FHt0%2BGZW0lolfUGQxKeAzERB3TxXMV7nb4ZAERgyz0zIg9o87pHSGrxN1RoiAtqkj1MTJWnG%2Bv2Kya%2B3Rf50ILDXWHCoeMmgQ0U4F%2F404gGFcnGkllvHA6dr6%2FXlBfcOYKVg0aOKTTJiDh%2B4lHS9JWqxQg4t0eWBhSiDZiKywV8oMcsEO3uEjX4wf5pRarJu2L2zkRCAxpl2ywPG0oDUMDSUFo9YabHn%2BFk5F98iSvVW1aWPaqa6TGal99h2kGGNKdo9xU0DscNZeO1zu6BLdC7T5aEzColoLDBjqkAXWEG3GYsWl1Sto3wvAohL6g794GmEmKx1WR2GkvAXp2NJrzhHbyWiWOvjg9%2BgFHktd8BRUY1w%2FCca%2FHaX8s3J59nqRDAeGZXd3sYDaqJIU362HasaCocoqj8g%2BULuMlpvXa9klQudFN5j4oCVvuF6L3exeKn0q%2FCVvgPLu8NtrlArMk2hdUCGHENxHPK%2FVq4Ml46u7DY1V2Xjmr6xcU%2FGfTcNIo&X-Amz-Signature=a8e19e332498f1e742ed85b21444acf88b9f53bed4352ae66f7952c6cbc15e6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZG4BCWL%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T004932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYk8lxpLM7AcnrRRUVLbWQt37KjL7HTKRlsZ%2BzuRMzAQIhAJaR3zqqjRpHeR5t3N4b7fq5Av37HysnoptKqST5p9xLKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FK21ThMw358fzgmAq3APaA267OviCRFXuHcgGAiSpZLjPhy3cMO%2FE1G0CrS9UcjeKuQYwDrus8NeV%2Bgr4l2EHzeyiKbojZ70Ka0B1xz3xZxPVk5x5t71f%2BiLYCe%2BCyZBVjWZQbPucLfsu%2FtRba7ZEWGqk6PrGzeaVUmnCZm%2B1Xxv384IDcSTxBSZtPfwdi3OMHZ54TTsbtf302W4BAbLTbbgEEcSt44u3suWanajaQ0mxGeyljdl9WWE3B9%2BZcL5SO%2B4a5EswJ4434ZP8RxfZ13JBbvk8wXiAX2frJSBUj3dEXT%2Fuqrh9BAyVQEXkl2Pb4ZPVEOwDcTXeQRNRiGbcLBHukQZEYoqhp47r5lxtiiyNQdQZyl%2FHt0%2BGZW0lolfUGQxKeAzERB3TxXMV7nb4ZAERgyz0zIg9o87pHSGrxN1RoiAtqkj1MTJWnG%2Bv2Kya%2B3Rf50ILDXWHCoeMmgQ0U4F%2F404gGFcnGkllvHA6dr6%2FXlBfcOYKVg0aOKTTJiDh%2B4lHS9JWqxQg4t0eWBhSiDZiKywV8oMcsEO3uEjX4wf5pRarJu2L2zkRCAxpl2ywPG0oDUMDSUFo9YabHn%2BFk5F98iSvVW1aWPaqa6TGal99h2kGGNKdo9xU0DscNZeO1zu6BLdC7T5aEzColoLDBjqkAXWEG3GYsWl1Sto3wvAohL6g794GmEmKx1WR2GkvAXp2NJrzhHbyWiWOvjg9%2BgFHktd8BRUY1w%2FCca%2FHaX8s3J59nqRDAeGZXd3sYDaqJIU362HasaCocoqj8g%2BULuMlpvXa9klQudFN5j4oCVvuF6L3exeKn0q%2FCVvgPLu8NtrlArMk2hdUCGHENxHPK%2FVq4Ml46u7DY1V2Xjmr6xcU%2FGfTcNIo&X-Amz-Signature=319edc73bf32af26a5f58ef0769164e608e2a640482e0fe882ba2bfe1996baeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

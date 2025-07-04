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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLTV5444%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQC2vZ8%2BA0h4LN8SdpUBkkV1bzXXSBHMgbVKAygFkPcpLAIgMzlhlUe4RoDv2AWsnfCIx%2BrXvUfQqOvNgg9MmyeHQQcq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDIJj0jaIA0yKJ90gmircAwwTyoOahhxHNLkiUR67pok2ldUIiEalIHvd0FbqpGEW7KgwEVY6fRkVvJ9uVe%2Fv%2B%2FeRZSrKJDDnC2l4%2BKc7FgA20klxFy5S04%2FmCnADDCMK3YxQppcdknfzm9%2FTE6MCZC7hfpTcL3joI7hPPUSCDZNPnAM7q4V%2BcFMnaEjpSKBlV%2FNRgt0aJSh36%2FQZxmCjYx84q9fsj4X4u4Ujpzk5jhguwXUvaVNg%2FPIf%2Ba6SFLY6bhNnQmVY%2FSWt%2BQLiT%2FGf5OLQTt7LkDOlqdVjEZgBGM25GmC0cARXlcdhikjbv4GArnTlatPyy3u8fSOwuggPc0wtlgVj8ZmA2Rnke6n8lENX1MDJrtEEyRvxi%2BxdqYRe5qp4RQpLnczjTVWv0lAZhYP8gXJJxVZvtZn61jiN15WO3DldDF1xHG%2FQzVz6ynB2r9gbZlzj28N9hu9nFXjul51Ipv23HogDmunpD2hAm7dbW0qSMmFiR3iZe7pk%2BUVYNl0L%2FRRTryORwuUyGURsAbu6jxHGBh5nEuZvjtIE%2FOSluAjilcgLWmAMGPoUZqgVlbVc3Ia6XpKSZHGmtQlu3unscw9vxhjhz%2BW2vEUEMfC9EzUx3n76hIJNeSBJ6i1pA1Z4YGApXaIqmY7aMIvsn8MGOqUB8xarJhjUkapiUYEZ60xHAWrOmSx8Woaf4zQJ1hYzCK7l1a6gQwcb0Rm2iqWTVM%2B4Pl%2BNXfHz7CEvokjUuX%2BgjoN49iYvxOBWOIsIM6MMqvezjmsVk2eU%2BAAHAOQpiynP4991%2BmmCRV5Zt%2FAz9GPW9XOJOnofyiLOoQQiw6Hhdxat0k%2FHUbbXc5Jl%2FzRhKzgHnKSeAglIzMduxjBH%2BV0r%2BmcjRnDY&X-Amz-Signature=a1282825eeb2d44dea10b7be0a8101e4823fb37331a078419489780afc957ec9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLTV5444%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQC2vZ8%2BA0h4LN8SdpUBkkV1bzXXSBHMgbVKAygFkPcpLAIgMzlhlUe4RoDv2AWsnfCIx%2BrXvUfQqOvNgg9MmyeHQQcq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDIJj0jaIA0yKJ90gmircAwwTyoOahhxHNLkiUR67pok2ldUIiEalIHvd0FbqpGEW7KgwEVY6fRkVvJ9uVe%2Fv%2B%2FeRZSrKJDDnC2l4%2BKc7FgA20klxFy5S04%2FmCnADDCMK3YxQppcdknfzm9%2FTE6MCZC7hfpTcL3joI7hPPUSCDZNPnAM7q4V%2BcFMnaEjpSKBlV%2FNRgt0aJSh36%2FQZxmCjYx84q9fsj4X4u4Ujpzk5jhguwXUvaVNg%2FPIf%2Ba6SFLY6bhNnQmVY%2FSWt%2BQLiT%2FGf5OLQTt7LkDOlqdVjEZgBGM25GmC0cARXlcdhikjbv4GArnTlatPyy3u8fSOwuggPc0wtlgVj8ZmA2Rnke6n8lENX1MDJrtEEyRvxi%2BxdqYRe5qp4RQpLnczjTVWv0lAZhYP8gXJJxVZvtZn61jiN15WO3DldDF1xHG%2FQzVz6ynB2r9gbZlzj28N9hu9nFXjul51Ipv23HogDmunpD2hAm7dbW0qSMmFiR3iZe7pk%2BUVYNl0L%2FRRTryORwuUyGURsAbu6jxHGBh5nEuZvjtIE%2FOSluAjilcgLWmAMGPoUZqgVlbVc3Ia6XpKSZHGmtQlu3unscw9vxhjhz%2BW2vEUEMfC9EzUx3n76hIJNeSBJ6i1pA1Z4YGApXaIqmY7aMIvsn8MGOqUB8xarJhjUkapiUYEZ60xHAWrOmSx8Woaf4zQJ1hYzCK7l1a6gQwcb0Rm2iqWTVM%2B4Pl%2BNXfHz7CEvokjUuX%2BgjoN49iYvxOBWOIsIM6MMqvezjmsVk2eU%2BAAHAOQpiynP4991%2BmmCRV5Zt%2FAz9GPW9XOJOnofyiLOoQQiw6Hhdxat0k%2FHUbbXc5Jl%2FzRhKzgHnKSeAglIzMduxjBH%2BV0r%2BmcjRnDY&X-Amz-Signature=311da7ea1cc28b1861ce2bf6b2f852acfa9ec2ba3e9506185171b8f85c3b2b6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

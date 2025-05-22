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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IYHKIXO%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T022729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDebSwr3jT4hRhdZ64%2Bm0a1MtEj%2FyrNJBIL6KDiuExhsgIgfAw1beLB%2BKelyOTKn1XSiPgBckuNger%2FcA6t4IpImg4qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2dgB41HexsY2CPKyrcA3rCTJkgrpAqGoE5dLGY0n8atFfryYAPOW0TOUFe2Q7%2FRCH6LTLjtntCXNroOVyzoyZx4b6J9vyxgwkGRSdOeq5RsT%2FVZh2DrUvDEF5XaCXDpuVTHkCdDVZWKlhh2lBetklf1%2FE3G4sMvPKHiue0Q9p1xG0B5HUajjWypV3oIWbKE5f1f%2BWMtY7At6Eh58o68LniGHBjWb2zP1hwL8GX%2B4NLX5SO3eKi8nqP%2Faw%2BBAqhxPeYIVcrb1hOL4t7pJJ8gATLbsMnD6s2uBVvOzq4lWvkEG7%2B19sE8xG1MzD8QhLr5qGal4%2BV79D4HvDnmf2OLf9H5c3pY7qWmqLI3Gjm9dbuEk9I7RH05zg2Aim0g1wAdYSDxfLjQsaggYfUlZ%2BchPRvXFuQVObLp0NoVabS4nH206av7ZaGhzj6PaicC8OfranzaJxL0AljTHRTRPu0wpkoX8X%2B60ATDEn54Jpz%2BetCPT0yX4kXR5KPYv2du9bMfK8F4pufM4Z5s8piXBeXYuNCtY4KIpzlrQVXOaB12aYBru3aa9bTRFGtkl8s05vFxX%2Bi2dRwxtbwXIO0GlXya7X%2B4e7eHsX1JszroQgN1FQBZVMgUBEwX1nFZ96F8QzWjRqiLrQKv%2BShzhkuMPeTusEGOqUBCzkNB2wVCT6bSp5%2F7w0mVCWk6kdqTsNxMr3Qy%2FJ4shxd38Qr5RAwb47dPpvdiNJuK3Cw2dTLxv9t8xtUn6qY7wMWNk7errCcrC2YTpGn7SSgekOqEdpng8WjeOoiaNcZZzMYuaiAOlbcdM12Oct3IXmeezDwdXZq3st7ZAbYqmEW6Ak4adzhmI8q98ZdPdykkZboID%2B9B5cxwd%2BfN5D8iljrhuck&X-Amz-Signature=351584d5954fe36d16eb4187f1b68ec9103bdecee9e6f921f16a67c89912a7c6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IYHKIXO%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T022729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDebSwr3jT4hRhdZ64%2Bm0a1MtEj%2FyrNJBIL6KDiuExhsgIgfAw1beLB%2BKelyOTKn1XSiPgBckuNger%2FcA6t4IpImg4qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2dgB41HexsY2CPKyrcA3rCTJkgrpAqGoE5dLGY0n8atFfryYAPOW0TOUFe2Q7%2FRCH6LTLjtntCXNroOVyzoyZx4b6J9vyxgwkGRSdOeq5RsT%2FVZh2DrUvDEF5XaCXDpuVTHkCdDVZWKlhh2lBetklf1%2FE3G4sMvPKHiue0Q9p1xG0B5HUajjWypV3oIWbKE5f1f%2BWMtY7At6Eh58o68LniGHBjWb2zP1hwL8GX%2B4NLX5SO3eKi8nqP%2Faw%2BBAqhxPeYIVcrb1hOL4t7pJJ8gATLbsMnD6s2uBVvOzq4lWvkEG7%2B19sE8xG1MzD8QhLr5qGal4%2BV79D4HvDnmf2OLf9H5c3pY7qWmqLI3Gjm9dbuEk9I7RH05zg2Aim0g1wAdYSDxfLjQsaggYfUlZ%2BchPRvXFuQVObLp0NoVabS4nH206av7ZaGhzj6PaicC8OfranzaJxL0AljTHRTRPu0wpkoX8X%2B60ATDEn54Jpz%2BetCPT0yX4kXR5KPYv2du9bMfK8F4pufM4Z5s8piXBeXYuNCtY4KIpzlrQVXOaB12aYBru3aa9bTRFGtkl8s05vFxX%2Bi2dRwxtbwXIO0GlXya7X%2B4e7eHsX1JszroQgN1FQBZVMgUBEwX1nFZ96F8QzWjRqiLrQKv%2BShzhkuMPeTusEGOqUBCzkNB2wVCT6bSp5%2F7w0mVCWk6kdqTsNxMr3Qy%2FJ4shxd38Qr5RAwb47dPpvdiNJuK3Cw2dTLxv9t8xtUn6qY7wMWNk7errCcrC2YTpGn7SSgekOqEdpng8WjeOoiaNcZZzMYuaiAOlbcdM12Oct3IXmeezDwdXZq3st7ZAbYqmEW6Ak4adzhmI8q98ZdPdykkZboID%2B9B5cxwd%2BfN5D8iljrhuck&X-Amz-Signature=8be530a6cde3d4919ee18becdcc26a0518e58a656163b9575bdf2126eef02fc0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

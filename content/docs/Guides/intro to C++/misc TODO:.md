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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWCH6PYD%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T200938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAr56tMXlqJjIRjwaGI9ZA7HTLyqkjRKmwJ01bZNhfCbAiEAtI3r7i5W2A5SK7M2Dm9Ijkq5AcGXw2iB3uDBgXG6nTsqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDChoAJ9vgy0pN0v6AyrcA82s5B3YQLsYMxYM6f9Ec0yQ821azUGYIS%2B9GJUa41nv%2BDArxhLCg8iA8xjHNUhwEU2QC1U6gbvPw9GsBRH744ixICMRiZM4UHGr7mxoPzcb9%2FT4%2BeoTBnv%2B8pctQGfwNtxoOGm4yM4vSQnztk4WWL%2F4lhOwuJ7JYdeodwEMRkzSIH0OF6vRE1NzGdMS%2FxfS3JfdVFa4HPIap7qPbl20g77IESBKwK39s3tyn9HVaDjQT%2B9lCx10zkiTzLwnPgWxtttbp09EGeSKRAeVK674Pim8bN1vocUYspQsYG75Ed9PBR3gv5K7JQs5cPSQW%2ByjHTBtyXLFUBxjFJ1KeieYR3dvELiZil3ONV3vWTFxyUs4Jls10Jtl4Fkrl%2FU7giH2JWObgNDVXKLDDC2LPl%2FU4Gl09lJdziN%2BEAvTnnCMigLZH3J7%2FhcSKMXJcFpBMr%2FpbWEKggZzG%2BBcsFRCHLQXvyBbbxlJoYaC6uiDnMlP1QupO2EKLYdMyHpl4jB9HTiSe6AfKieh7%2F8ymeyRbNPH8jlw3jWxMxeDTss84oT8kkTdNtInuH9NKqZ00vxvbbRdRBncy6iyF97N%2FP1rlW2QSX5zSppzQYEAZBqgXAKKzAJTp0vtyRXE2FEotLp3MJqg6MEGOqUBvYxVw9lIQ1%2F%2B7EU7k%2FybnR%2FwfNwdcgO8i80ISC3881na44UqLOeMfRz%2FULpZgXW1dujhH5sFyWPrpTZkZnvZ6UlTNJO2Zx%2BhPdT%2B%2FvIAq5ANdIx%2FdX4CLXKMkzdghHqwS0zWzFGDpTdYD5lNQBSFzMTbHLy5L3AVLFMbqLpjyResaFQNVN%2BDD97CmXP8dUofX1OKiuCEp8FCfQ26LnQfQfZvmEaX&X-Amz-Signature=068dbf29a48cf07c35d0a864b6f6c9b2deb234ee3f61c74113b31267f1c9d057&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWCH6PYD%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T200938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAr56tMXlqJjIRjwaGI9ZA7HTLyqkjRKmwJ01bZNhfCbAiEAtI3r7i5W2A5SK7M2Dm9Ijkq5AcGXw2iB3uDBgXG6nTsqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDChoAJ9vgy0pN0v6AyrcA82s5B3YQLsYMxYM6f9Ec0yQ821azUGYIS%2B9GJUa41nv%2BDArxhLCg8iA8xjHNUhwEU2QC1U6gbvPw9GsBRH744ixICMRiZM4UHGr7mxoPzcb9%2FT4%2BeoTBnv%2B8pctQGfwNtxoOGm4yM4vSQnztk4WWL%2F4lhOwuJ7JYdeodwEMRkzSIH0OF6vRE1NzGdMS%2FxfS3JfdVFa4HPIap7qPbl20g77IESBKwK39s3tyn9HVaDjQT%2B9lCx10zkiTzLwnPgWxtttbp09EGeSKRAeVK674Pim8bN1vocUYspQsYG75Ed9PBR3gv5K7JQs5cPSQW%2ByjHTBtyXLFUBxjFJ1KeieYR3dvELiZil3ONV3vWTFxyUs4Jls10Jtl4Fkrl%2FU7giH2JWObgNDVXKLDDC2LPl%2FU4Gl09lJdziN%2BEAvTnnCMigLZH3J7%2FhcSKMXJcFpBMr%2FpbWEKggZzG%2BBcsFRCHLQXvyBbbxlJoYaC6uiDnMlP1QupO2EKLYdMyHpl4jB9HTiSe6AfKieh7%2F8ymeyRbNPH8jlw3jWxMxeDTss84oT8kkTdNtInuH9NKqZ00vxvbbRdRBncy6iyF97N%2FP1rlW2QSX5zSppzQYEAZBqgXAKKzAJTp0vtyRXE2FEotLp3MJqg6MEGOqUBvYxVw9lIQ1%2F%2B7EU7k%2FybnR%2FwfNwdcgO8i80ISC3881na44UqLOeMfRz%2FULpZgXW1dujhH5sFyWPrpTZkZnvZ6UlTNJO2Zx%2BhPdT%2B%2FvIAq5ANdIx%2FdX4CLXKMkzdghHqwS0zWzFGDpTdYD5lNQBSFzMTbHLy5L3AVLFMbqLpjyResaFQNVN%2BDD97CmXP8dUofX1OKiuCEp8FCfQ26LnQfQfZvmEaX&X-Amz-Signature=70558e5a4f20cf317b0016f32c1745e1dd246ce7345a2c1ddc7bdaca9867943f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

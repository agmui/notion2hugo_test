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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYB77N57%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCngfJc%2F838UdsHALckNGR%2FegS0Ao1paBUHxSNPQf671wIhANDVZv79RBNPVcetnn81qaVrcYf85fyDmZk0Gef6sEhuKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyh9ZlczOIiTpTXyZYq3AMaXUF99%2BCuE7ekBrqWQFGtNywLmg36duJT9TZqEu2KL6da5EnFn%2BwjXHL%2BIy9jF93pxUUoiU%2Fss9EYSFzp84UWIUUCI%2FhmQmLaw6AD7vogwpRDyfCUjRVBWRKXHyP1UgXaTCwbAEH9Zud0mHMgKwNPA1GpBERhi6qc%2FTI8bX%2BehREDHbbxnp7amSxxoIwtbNnQdNNgtGmO98iYgchkduDc7ekNjeFpnP1ozaA617gprMoCDIoFaqyMwtLeUE2EXATtAHsZfUz58A2kwMF9WDqJZD20KwQWxxyQPXmfr7eSdo95dNBrodDFZKLkJ21i8e%2FbhLrNhrWmx%2FpXPp0Q%2FldRtgtFKkhWJCMekHe68cIWPYMr6qXXCtFludxX98kSswab0jAmiZtLrw4nrPqDiK%2BeQ3OU8TzhHD2agERtGMP0NS0jCgvzOndIb9vSBx%2FhnuSJ0lIGmc2uY6yai%2FG4ACHD%2BD7mBhQ8yYREx4ug%2FdRbLy4TIr%2Ftu0Y%2BibVOyeAOhzACCMZZ9VwytScjMetOZUR3jldsPQhh%2BuVsrFhdi3iNKdv7Sy7l5YAbj82UUgeom6%2BJrhtXTdZSU1mjZIFv7isuXL%2Bi2h0l0XEPGE6Sc1f%2BNqhIDMSbbIQGHUUtMDCtp%2FPBBjqkAQQMVQ%2BmrCYWyfzx5pEC3p%2FHJDCNjPCbVLE54nd%2FZZxjpV%2F7ULM0gVxqTw%2F%2B1w%2FX4AduqamPtajv0HJCGjOU5fMSaWBBpnXQw%2FoIef%2Bsn3dPm%2BSBkeQnDsnKZFGn%2BTR9zmH%2F5nf%2FzqXhrnPNMQ8E5tamgTmH5Pe5o3JQhFrIROHdoTt0A4BuL%2FKMla8L4JSjAN7xhL0VqVunvE%2BxqoZlM1GlcyNn&X-Amz-Signature=6654d78c3883929e97520497e7ca2434ccfa810667c6832d6bdfcf2c16419b5e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYB77N57%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCngfJc%2F838UdsHALckNGR%2FegS0Ao1paBUHxSNPQf671wIhANDVZv79RBNPVcetnn81qaVrcYf85fyDmZk0Gef6sEhuKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyh9ZlczOIiTpTXyZYq3AMaXUF99%2BCuE7ekBrqWQFGtNywLmg36duJT9TZqEu2KL6da5EnFn%2BwjXHL%2BIy9jF93pxUUoiU%2Fss9EYSFzp84UWIUUCI%2FhmQmLaw6AD7vogwpRDyfCUjRVBWRKXHyP1UgXaTCwbAEH9Zud0mHMgKwNPA1GpBERhi6qc%2FTI8bX%2BehREDHbbxnp7amSxxoIwtbNnQdNNgtGmO98iYgchkduDc7ekNjeFpnP1ozaA617gprMoCDIoFaqyMwtLeUE2EXATtAHsZfUz58A2kwMF9WDqJZD20KwQWxxyQPXmfr7eSdo95dNBrodDFZKLkJ21i8e%2FbhLrNhrWmx%2FpXPp0Q%2FldRtgtFKkhWJCMekHe68cIWPYMr6qXXCtFludxX98kSswab0jAmiZtLrw4nrPqDiK%2BeQ3OU8TzhHD2agERtGMP0NS0jCgvzOndIb9vSBx%2FhnuSJ0lIGmc2uY6yai%2FG4ACHD%2BD7mBhQ8yYREx4ug%2FdRbLy4TIr%2Ftu0Y%2BibVOyeAOhzACCMZZ9VwytScjMetOZUR3jldsPQhh%2BuVsrFhdi3iNKdv7Sy7l5YAbj82UUgeom6%2BJrhtXTdZSU1mjZIFv7isuXL%2Bi2h0l0XEPGE6Sc1f%2BNqhIDMSbbIQGHUUtMDCtp%2FPBBjqkAQQMVQ%2BmrCYWyfzx5pEC3p%2FHJDCNjPCbVLE54nd%2FZZxjpV%2F7ULM0gVxqTw%2F%2B1w%2FX4AduqamPtajv0HJCGjOU5fMSaWBBpnXQw%2FoIef%2Bsn3dPm%2BSBkeQnDsnKZFGn%2BTR9zmH%2F5nf%2FzqXhrnPNMQ8E5tamgTmH5Pe5o3JQhFrIROHdoTt0A4BuL%2FKMla8L4JSjAN7xhL0VqVunvE%2BxqoZlM1GlcyNn&X-Amz-Signature=fcc355cac98781d14a1c76c6baab38109e976c4db18e3c12fad881b89e214eae&X-Amz-SignedHeaders=host&x-id=GetObject)

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

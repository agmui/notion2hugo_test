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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US3R2ESM%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T090846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIFYAMyTFGA1dNGtWeRYVitnhUBDitaj%2FCvQTZJyy42rJAiEAs6LIh1TdWOaxctBpXRoWpH7VLrrESryVwHAoeyOW5Wkq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDCkspAf8auXURQs5sSrcA8%2FArbx8774868jmS%2BB4U6gdreibV%2FAoV1QD6G9slXnnKk1PerZsES4XJn9f3I3%2Fma7GKP37CGYwF1p6Z3KZFdTASZAIDMnaOIKW0yvlRUn45X1ftSX3fmVe1YcgEz3OFVTrRnKfxCyKIAmmYhSYBY6hOsW04GIyxr3P91%2BYPxC3QXc%2FMojJUlDiKFsZEl82KW%2B6kjvmNAaPbBwZJzkjNHXym7%2BWV2WCQEibnsvW4BVmXli94WzXsN9P%2FLDZ%2Bgl%2F6bTEswFVUpnC7MiMUs6FG9a9rpdKWoXjCBr6hpU%2BBeIzuTng6d7t5OlKzUTd9u4GIXwpIHjez%2BQEDGEI8Oi4s8iBqkAMiat4ImHQnGNgbeTCvFlZZ3qDpeEAGFgz7U6cDhRwQj1cfPhf7h7wn8Ez9vPHnoY2OSsCloS3%2Ftb1Px5Hu5QTunxTUviQM1S3MNGXyU4vWq0G2y06bFFuKZZ4yo9R7VLQDYKmlC88N8YMaC56pPeC%2BnrOgFqFy2YwDxyzjwYcHy2hnQ8GX1e%2BEZ0Uhb0zco%2BhYAv8zIOM1gYT%2FNADX6D4Gt8aYj%2FVBtJhGumuEnKWg0RudGGz8GhtPm3sqEWGQ%2BcMM4D2ZKOG914Z3VQG1q5GHSUZvlw6q6yFMKPRgL4GOqUBVjMFdqmSOUc9sAesuRP86Ro%2BGGNvMjzqZFSJJUxnvPSwYGgjDOzRh%2B2CAOfegYRI2kXJBeKnSaoW7E94oaHEh7d7qMFLmDbDH%2BDWjHPJfpQHlzYPKcoAM%2FXQanH8VOxagkLiDcRVxxXxduARSXyCyebdCbmAvXWYcbpBj6E1c4kkcn0i7hjNk%2B0hPfMFjYmWsCFeYVGl%2B%2BhnjSSL1Jsg9Eu8jPPf&X-Amz-Signature=d6ec1d93aaa0aa957a218c4306b3ff1820fb3f25abcf3c1580a548851f437831&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US3R2ESM%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T090846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIFYAMyTFGA1dNGtWeRYVitnhUBDitaj%2FCvQTZJyy42rJAiEAs6LIh1TdWOaxctBpXRoWpH7VLrrESryVwHAoeyOW5Wkq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDCkspAf8auXURQs5sSrcA8%2FArbx8774868jmS%2BB4U6gdreibV%2FAoV1QD6G9slXnnKk1PerZsES4XJn9f3I3%2Fma7GKP37CGYwF1p6Z3KZFdTASZAIDMnaOIKW0yvlRUn45X1ftSX3fmVe1YcgEz3OFVTrRnKfxCyKIAmmYhSYBY6hOsW04GIyxr3P91%2BYPxC3QXc%2FMojJUlDiKFsZEl82KW%2B6kjvmNAaPbBwZJzkjNHXym7%2BWV2WCQEibnsvW4BVmXli94WzXsN9P%2FLDZ%2Bgl%2F6bTEswFVUpnC7MiMUs6FG9a9rpdKWoXjCBr6hpU%2BBeIzuTng6d7t5OlKzUTd9u4GIXwpIHjez%2BQEDGEI8Oi4s8iBqkAMiat4ImHQnGNgbeTCvFlZZ3qDpeEAGFgz7U6cDhRwQj1cfPhf7h7wn8Ez9vPHnoY2OSsCloS3%2Ftb1Px5Hu5QTunxTUviQM1S3MNGXyU4vWq0G2y06bFFuKZZ4yo9R7VLQDYKmlC88N8YMaC56pPeC%2BnrOgFqFy2YwDxyzjwYcHy2hnQ8GX1e%2BEZ0Uhb0zco%2BhYAv8zIOM1gYT%2FNADX6D4Gt8aYj%2FVBtJhGumuEnKWg0RudGGz8GhtPm3sqEWGQ%2BcMM4D2ZKOG914Z3VQG1q5GHSUZvlw6q6yFMKPRgL4GOqUBVjMFdqmSOUc9sAesuRP86Ro%2BGGNvMjzqZFSJJUxnvPSwYGgjDOzRh%2B2CAOfegYRI2kXJBeKnSaoW7E94oaHEh7d7qMFLmDbDH%2BDWjHPJfpQHlzYPKcoAM%2FXQanH8VOxagkLiDcRVxxXxduARSXyCyebdCbmAvXWYcbpBj6E1c4kkcn0i7hjNk%2B0hPfMFjYmWsCFeYVGl%2B%2BhnjSSL1Jsg9Eu8jPPf&X-Amz-Signature=5de3f08ddaa49ac4976299e414603fc5fe82161db7676d2476230c0842034053&X-Amz-SignedHeaders=host&x-id=GetObject)

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

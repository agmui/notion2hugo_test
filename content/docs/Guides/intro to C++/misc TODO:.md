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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F7GOUTM%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T141205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWwTCsGpq1n%2BbIIvKoENwqFd4MlXEf6GVe%2FxcYffFmHwIhANqhw2mpYfXUzUatK0HLrvSGy2X4bcxcC1t6JqgbfujsKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8031zaC2rWwDHJ54q3AOjn0CmMNYlKQJHdO5s%2FCVnur9bBNP4KdpZL91lVYAH%2BHPbv98d%2B6D0nDbhxAzv915t7YL9%2FztzLhYKUkekg3MK0g2rosMII4XW173NJwWvfOanBXV6roLbcbmNWH0%2BCsdwM%2F1dpezByk%2Fvp0RyYbQFdbDNcGrDkxPsBljNz%2FlnWf33bW1y%2BPGT%2FI%2BlpbBabpjEp2CxldM8jDeLi5sMkpALbMkaZ9q16trs06wQYOfv%2FcJjYsNMnXp8riEnezkPhrkwLq4jpGAWiPkRTbEOniW76FyTF9FoKMdmgDmaP003%2FyYxTteaQoogKX7p2GM7JbU5zwBotAS6Rf1056%2Bo2Q7C3sDGHw9BrKpe1q2sOY9kK6oEVKn4HQ0YyWEFcZ93suKmXRQG7omHzvCkj258V1jwTWg7kPGoYQzcIujGrO%2FOL39p%2BnboIn6Keapey2hnxqs%2BlETMtajNSu2AeD6VMCSpyU7SLTaf3iJp8ML4OjqlElUAAFEpKLjTzBzJCBy41uiucRhNOkmcOPDq%2FvlWP%2FaCumdZUk%2BWMN07%2FcNPd93kwTFbIvkD1r4zIAZJqIkQ2NgNwxipR3i941QW1DRJ1H%2FGKW0umw0DoocvfkQJnPiLCg0qY4bFe0o%2FzgR%2FkjCh%2BPjDBjqkAVnAWaWHFaHJ3UOmnalEWhEaVSJiauxbgo9Vn15e%2B8IaTp%2BQCGxP4Lt6W%2FqEeWv73zA8f0WewAOzSM8yaWLmAzqDN1ZOLCF5VQXOJjvSoQxnpiKXo45Y71NmSOZkNASuYAurYfBUWRyRjBCOObW%2F6A%2B5BOYh0t6AjdGsq9nJ338IlF47BMUG24EuA2aEnhhy3SJ%2F1CSijSy9Ih%2BfGzKEiOad1KY5&X-Amz-Signature=b2dc12dfafa331e539e923d0eef19210bd5403746648459f6149e33135dc3a21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F7GOUTM%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T141205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWwTCsGpq1n%2BbIIvKoENwqFd4MlXEf6GVe%2FxcYffFmHwIhANqhw2mpYfXUzUatK0HLrvSGy2X4bcxcC1t6JqgbfujsKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8031zaC2rWwDHJ54q3AOjn0CmMNYlKQJHdO5s%2FCVnur9bBNP4KdpZL91lVYAH%2BHPbv98d%2B6D0nDbhxAzv915t7YL9%2FztzLhYKUkekg3MK0g2rosMII4XW173NJwWvfOanBXV6roLbcbmNWH0%2BCsdwM%2F1dpezByk%2Fvp0RyYbQFdbDNcGrDkxPsBljNz%2FlnWf33bW1y%2BPGT%2FI%2BlpbBabpjEp2CxldM8jDeLi5sMkpALbMkaZ9q16trs06wQYOfv%2FcJjYsNMnXp8riEnezkPhrkwLq4jpGAWiPkRTbEOniW76FyTF9FoKMdmgDmaP003%2FyYxTteaQoogKX7p2GM7JbU5zwBotAS6Rf1056%2Bo2Q7C3sDGHw9BrKpe1q2sOY9kK6oEVKn4HQ0YyWEFcZ93suKmXRQG7omHzvCkj258V1jwTWg7kPGoYQzcIujGrO%2FOL39p%2BnboIn6Keapey2hnxqs%2BlETMtajNSu2AeD6VMCSpyU7SLTaf3iJp8ML4OjqlElUAAFEpKLjTzBzJCBy41uiucRhNOkmcOPDq%2FvlWP%2FaCumdZUk%2BWMN07%2FcNPd93kwTFbIvkD1r4zIAZJqIkQ2NgNwxipR3i941QW1DRJ1H%2FGKW0umw0DoocvfkQJnPiLCg0qY4bFe0o%2FzgR%2FkjCh%2BPjDBjqkAVnAWaWHFaHJ3UOmnalEWhEaVSJiauxbgo9Vn15e%2B8IaTp%2BQCGxP4Lt6W%2FqEeWv73zA8f0WewAOzSM8yaWLmAzqDN1ZOLCF5VQXOJjvSoQxnpiKXo45Y71NmSOZkNASuYAurYfBUWRyRjBCOObW%2F6A%2B5BOYh0t6AjdGsq9nJ338IlF47BMUG24EuA2aEnhhy3SJ%2F1CSijSy9Ih%2BfGzKEiOad1KY5&X-Amz-Signature=9daa9597132a67f242aa1ea3e96c7c1b1f74b2bd929f5e7a197e081045d7735a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R33BCGP%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDMx9vmiYashcPk%2FfbmMFkyf2DWFo9v8uYlu13Vbb6jVgIhALDfY9G6Citbt3mbWxR4rJNOKIntK%2FZE2rqWtNrtP1WkKv8DCDIQABoMNjM3NDIzMTgzODA1IgyNGejjgoh85moJ%2Bygq3AOXwOXtoep8Bnhaj5T60xAQljHA4Rz%2FHrwk%2FifPJbsE8DdRT9zPII9Is3HBwd9kyRvBxeG73XSV3B0XupLDoOqbCXZuvgUJ%2BTzqXbQ34qT7pQVQ0jsJ6HCdX%2BdKN9ylijsFxq72PeCEWf1RE4TVxOhrDUNsOwGhCRqRujn1e0z1MXyccadjuXYGOtNWQjBvBsqYZ30sB2pZiFzBMLZ77AXwI7xVLgOKdDLSLqL2o56Hcxrk%2B33FBLwEcnBCBWbzuyxjLPKC3g1nnnwXdLRfG4CYd4nhmgv0p1%2BIRD8vlx9%2FcPxcF067ooPnZfin93JEKqg2hljVBHZnVuFf%2F2tXum%2Bb4LQChM9BSpxR98KKq6nszohAXMVt74S05WaL9NOCqw59r1dXrZqMeKadgU5BQbF2aVjSonXuPO0EFmxxn6VkgFAHTqr%2BqJ218dtHasiyEW7ds%2BQ668ITuk226wHrry0cyRXMNswxr6GfOvFtZCmxdKspvIoXfUiKsReHLwZNDpZELD00seS2MeUxoTNESUyT5Se3nZd4hnneC4VPNHCzAgG6pF5knz7lpqW3toDMN6MSW8AQHBr5j%2BlcyyPnMKTXyf%2B3N6WdtU%2BiJdgetEQFUITny9%2FQR0s3skXA4DD0q5jBBjqkAfqJ%2F%2BQnZK8SpF78Wp1zrnniTSCDRosDIMDBXjQCosjmvClI4TDtIoQ4vgZ0VXpw%2FycIXxAC5lCnJVStjO4Py8Lsy%2BHFDMhlMk10VMKmPS3lYlXsDSkIpS6mqySTIpM%2BZpn2KjbWXIgGCf%2BfjV0XTuWYnXIAIos2AKZRn6MNeU7HW3qFJ3R7IxhCPaySx23LUHtqUQaADRfD%2BYEi3tDVO6fE4zSO&X-Amz-Signature=6fb028579a602f4e308e597197656b88d9dc93eef142a25ed3e86e8ed0b5a889&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R33BCGP%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDMx9vmiYashcPk%2FfbmMFkyf2DWFo9v8uYlu13Vbb6jVgIhALDfY9G6Citbt3mbWxR4rJNOKIntK%2FZE2rqWtNrtP1WkKv8DCDIQABoMNjM3NDIzMTgzODA1IgyNGejjgoh85moJ%2Bygq3AOXwOXtoep8Bnhaj5T60xAQljHA4Rz%2FHrwk%2FifPJbsE8DdRT9zPII9Is3HBwd9kyRvBxeG73XSV3B0XupLDoOqbCXZuvgUJ%2BTzqXbQ34qT7pQVQ0jsJ6HCdX%2BdKN9ylijsFxq72PeCEWf1RE4TVxOhrDUNsOwGhCRqRujn1e0z1MXyccadjuXYGOtNWQjBvBsqYZ30sB2pZiFzBMLZ77AXwI7xVLgOKdDLSLqL2o56Hcxrk%2B33FBLwEcnBCBWbzuyxjLPKC3g1nnnwXdLRfG4CYd4nhmgv0p1%2BIRD8vlx9%2FcPxcF067ooPnZfin93JEKqg2hljVBHZnVuFf%2F2tXum%2Bb4LQChM9BSpxR98KKq6nszohAXMVt74S05WaL9NOCqw59r1dXrZqMeKadgU5BQbF2aVjSonXuPO0EFmxxn6VkgFAHTqr%2BqJ218dtHasiyEW7ds%2BQ668ITuk226wHrry0cyRXMNswxr6GfOvFtZCmxdKspvIoXfUiKsReHLwZNDpZELD00seS2MeUxoTNESUyT5Se3nZd4hnneC4VPNHCzAgG6pF5knz7lpqW3toDMN6MSW8AQHBr5j%2BlcyyPnMKTXyf%2B3N6WdtU%2BiJdgetEQFUITny9%2FQR0s3skXA4DD0q5jBBjqkAfqJ%2F%2BQnZK8SpF78Wp1zrnniTSCDRosDIMDBXjQCosjmvClI4TDtIoQ4vgZ0VXpw%2FycIXxAC5lCnJVStjO4Py8Lsy%2BHFDMhlMk10VMKmPS3lYlXsDSkIpS6mqySTIpM%2BZpn2KjbWXIgGCf%2BfjV0XTuWYnXIAIos2AKZRn6MNeU7HW3qFJ3R7IxhCPaySx23LUHtqUQaADRfD%2BYEi3tDVO6fE4zSO&X-Amz-Signature=fe2bf46f0b0f83e795fee2e0c4425c510d38e9e12593613af37b8146288cb02d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

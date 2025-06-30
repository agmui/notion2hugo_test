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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFFJ2UOB%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T170811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1LIYfeikVGaKubwbXwepG75ufDbrAzzpYeNpPYCUhJAiBLuC5zxd24nXU%2BhttOOlBjwIgqOqvADiNeQGFC2m3UvCqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV5ChXNVhVn2IXtDJKtwD7skFtIPVuqzMowsHBTiUblhMjQs5TnpIInASpK2VfBm13ZTS9PLgz582RXuy2XUXXMBiysUppTEgfcVX4KlmU%2BO4Rkna9kRitp9Crjkpt6Fck8T4tWvleZlUWy8fXXxJ%2F%2FLVzrMVAtUAAJgCJ4ZzDEWzfhRQoSHXAgythtP2aW2p%2F9BoWkNA0GZx2x1cXFH5Fffeui8RX5FsRt8qBvI7vezoJrdphPH7AR41XDwmJ2tkXNZJDVxLo5E7omvGvi9uYHZL5K0ehSF1VuRkFWHhzoKn5%2FnaGB5at%2BXnyW%2FULPvWH8AR1YiZNuRRzL7G1zGuUNmGfkACTfj8IqUxqB4GJpbpX1Eftqfnp40jXWe9EO50zQt5BsJ6nPfTjBy%2BpEYpSEl6%2FNtxwDMirBzLJXFuKFJt7wVH%2BS6mhQhitJhQ%2FxM8BE9v4YjxjpFRigViVRBKvCodJU6%2BSFM37V%2FIkfgRA1Ik2TaX1X33raXNKZRoxGvlp0yGNQYK69%2FQcqzWMG6KvaxLRuPgAG218EgTLaygSn25xZPIdT4wcd7jzgvoSgkRlxefwZa6AFiy1e0IWgSkCp%2F1YJOnt1I2UCWNlvs4chyl56TluAiykaEjRLLHLhpD1Xsg9EoHagFjleUwpuuKwwY6pgGDjNchMuoewZLRxPhqeCyvlbyiIsTV419MPBMgftuhCorks5t4XroXQY3pdgZ3XmvA92IE36NXgq%2BqqHtI0QbjMOs9kj6%2BEHRlpmgiCyOrlGESOG%2FuELGlXn%2B%2By0BTDFlQOZ3h9fwAgxNvC64JGrldMeA1PZvWxUAJL5jWkmSY6a%2BM2b8U3CvqIZarnND4XlPNubw2Zh3%2BHkeP64TQ1%2FF4xjCG33vR&X-Amz-Signature=fe64bac1d336368ae1a1f65353ac0328ea89878ecbdaaf88be5e0f294c943255&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFFJ2UOB%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T170811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1LIYfeikVGaKubwbXwepG75ufDbrAzzpYeNpPYCUhJAiBLuC5zxd24nXU%2BhttOOlBjwIgqOqvADiNeQGFC2m3UvCqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV5ChXNVhVn2IXtDJKtwD7skFtIPVuqzMowsHBTiUblhMjQs5TnpIInASpK2VfBm13ZTS9PLgz582RXuy2XUXXMBiysUppTEgfcVX4KlmU%2BO4Rkna9kRitp9Crjkpt6Fck8T4tWvleZlUWy8fXXxJ%2F%2FLVzrMVAtUAAJgCJ4ZzDEWzfhRQoSHXAgythtP2aW2p%2F9BoWkNA0GZx2x1cXFH5Fffeui8RX5FsRt8qBvI7vezoJrdphPH7AR41XDwmJ2tkXNZJDVxLo5E7omvGvi9uYHZL5K0ehSF1VuRkFWHhzoKn5%2FnaGB5at%2BXnyW%2FULPvWH8AR1YiZNuRRzL7G1zGuUNmGfkACTfj8IqUxqB4GJpbpX1Eftqfnp40jXWe9EO50zQt5BsJ6nPfTjBy%2BpEYpSEl6%2FNtxwDMirBzLJXFuKFJt7wVH%2BS6mhQhitJhQ%2FxM8BE9v4YjxjpFRigViVRBKvCodJU6%2BSFM37V%2FIkfgRA1Ik2TaX1X33raXNKZRoxGvlp0yGNQYK69%2FQcqzWMG6KvaxLRuPgAG218EgTLaygSn25xZPIdT4wcd7jzgvoSgkRlxefwZa6AFiy1e0IWgSkCp%2F1YJOnt1I2UCWNlvs4chyl56TluAiykaEjRLLHLhpD1Xsg9EoHagFjleUwpuuKwwY6pgGDjNchMuoewZLRxPhqeCyvlbyiIsTV419MPBMgftuhCorks5t4XroXQY3pdgZ3XmvA92IE36NXgq%2BqqHtI0QbjMOs9kj6%2BEHRlpmgiCyOrlGESOG%2FuELGlXn%2B%2By0BTDFlQOZ3h9fwAgxNvC64JGrldMeA1PZvWxUAJL5jWkmSY6a%2BM2b8U3CvqIZarnND4XlPNubw2Zh3%2BHkeP64TQ1%2FF4xjCG33vR&X-Amz-Signature=a3b443f594716dab9a0ad9c0cb17d279209fa09a171cb1035eb1eb5e02abbc5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

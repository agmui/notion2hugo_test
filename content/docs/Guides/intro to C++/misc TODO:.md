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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCEQYG6S%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T170948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsbwCFyFmHHIclnTmnHF7oqyxlkMbURE96pNLPldNmzAiBojPc%2FkXEgDIMQJVKAn0lEcnVxrZj4xkPET5wNDPAfzSqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaMQC4uLn3kCxyPAPKtwDSUfT47aUInfCrEpdAkXp7qFx%2BMX9ewXLjLCSCTiIEhu%2FQEw4HOe359u%2B6QyEiNgmKyuICSfkoZkRbmoOT%2F3fMnjulp1mQmS3i5x9v8RWIhrzDmen4bNufvoSHMCHk2OIGHRAOdcQGlSf2vC%2BlAlQQJiZbkRCIY53YNlE3HMMqRYmFVaxvDF8pKbFM0bMkGFel2szsPE%2Bd0C4RNfQEG0yO8Pi87WY989NMn2bL9lxbuVoPbDZajHFYrno0cEM4bEP7SlJH5%2BrGXvbwmQjn53RmruiqJir3zpT%2F4gACDdlk%2F08N0Ny8xthiZhXAwF8BJ3xnNz6Bi3jkmGSqmRGCMJNB%2Fz%2F%2BG64SfLHhrDZQ6x1CTy60hOCXifDh4gkS3JcAOKQkuDAbsMfFtDI7MAlLfdY04QjjLtx2Q%2Fd9Y0jMqrVFdQ%2F16eEJT2ZBaL3rGI4%2B3X8ts%2BYOhaqtf7W6oDBIO67ltRXNKnE5%2B412j%2BMIVyFjX5GsCnbEyi74dn91Ge6AWtNv%2Bbg70V6p85caTdPw7JBHTkRF%2FBFzSE1HJHsJYs8DRamZGCJboWOqFy9ZQeBIdNXwzNMEQzBONnlGZ9xpsDi3G%2BoQv1zYDnoQYAXV1yLFKmunZL%2BEfp%2ByDGEfxYw5oC1wwY6pgGmTiUX1qHLEEybRPJr%2BzOs906Vlq7%2BMIWb%2B%2Bl6QeLbHXtI2SmRD0kZdyCx4G2IQLZnAJa48Xc8uCcqncxbathdbzn2P%2BQvGU1mO08jDQZyRB8tQZwlCHmoExSFWGBmNUk%2Bj0IBWtetp2QYuqPU%2B1BLUw9kiGLX9LlrqhS1qb3S12uKG5eji5u2o3CkN5XAXRysueJbv382FLHjXRW1DOFm1Kqx8a9J&X-Amz-Signature=4ce49bc0ee9fc3e47c268324e59c4ef2f2249aa234c82ea908d6c66eed65e2f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCEQYG6S%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T170948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsbwCFyFmHHIclnTmnHF7oqyxlkMbURE96pNLPldNmzAiBojPc%2FkXEgDIMQJVKAn0lEcnVxrZj4xkPET5wNDPAfzSqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaMQC4uLn3kCxyPAPKtwDSUfT47aUInfCrEpdAkXp7qFx%2BMX9ewXLjLCSCTiIEhu%2FQEw4HOe359u%2B6QyEiNgmKyuICSfkoZkRbmoOT%2F3fMnjulp1mQmS3i5x9v8RWIhrzDmen4bNufvoSHMCHk2OIGHRAOdcQGlSf2vC%2BlAlQQJiZbkRCIY53YNlE3HMMqRYmFVaxvDF8pKbFM0bMkGFel2szsPE%2Bd0C4RNfQEG0yO8Pi87WY989NMn2bL9lxbuVoPbDZajHFYrno0cEM4bEP7SlJH5%2BrGXvbwmQjn53RmruiqJir3zpT%2F4gACDdlk%2F08N0Ny8xthiZhXAwF8BJ3xnNz6Bi3jkmGSqmRGCMJNB%2Fz%2F%2BG64SfLHhrDZQ6x1CTy60hOCXifDh4gkS3JcAOKQkuDAbsMfFtDI7MAlLfdY04QjjLtx2Q%2Fd9Y0jMqrVFdQ%2F16eEJT2ZBaL3rGI4%2B3X8ts%2BYOhaqtf7W6oDBIO67ltRXNKnE5%2B412j%2BMIVyFjX5GsCnbEyi74dn91Ge6AWtNv%2Bbg70V6p85caTdPw7JBHTkRF%2FBFzSE1HJHsJYs8DRamZGCJboWOqFy9ZQeBIdNXwzNMEQzBONnlGZ9xpsDi3G%2BoQv1zYDnoQYAXV1yLFKmunZL%2BEfp%2ByDGEfxYw5oC1wwY6pgGmTiUX1qHLEEybRPJr%2BzOs906Vlq7%2BMIWb%2B%2Bl6QeLbHXtI2SmRD0kZdyCx4G2IQLZnAJa48Xc8uCcqncxbathdbzn2P%2BQvGU1mO08jDQZyRB8tQZwlCHmoExSFWGBmNUk%2Bj0IBWtetp2QYuqPU%2B1BLUw9kiGLX9LlrqhS1qb3S12uKG5eji5u2o3CkN5XAXRysueJbv382FLHjXRW1DOFm1Kqx8a9J&X-Amz-Signature=ae6a335fe344356da88e73b4ea2f30b0f4ad181445ee35c53408cff605bd8fa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

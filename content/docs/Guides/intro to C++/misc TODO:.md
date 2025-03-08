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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N5BQ2OI%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T022151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCycpkxdqhUQ3PzVJdxU%2FirBLk9nQAk68FoGl9CoqRSvAIgcGVnIvmS9Bdyn5SZ%2FZzLCeLLlBGARs8oEELQln74S3Yq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDG0PPSobUGOdyO2O%2FCrcAyRpHioV4Ak39Uks32VZFSYJMyP9VmnTEmzmnE%2BS7loSDlSRsj%2Fgt9VBbCPmnC2DG7j411dBYWcohrSp2nqMKtJKBuAlvI6cURwq41ju4f8ZRDH%2B3iZkKdZK7%2FBDHA8GRz91a13%2FIcneaKuY7PuHgz%2FLyFbj2%2FFb5u73eDNiLw8GNyU99LMcGUi5GB5oKHacNjoN%2FKjcsWzlRyAcvYRVoEAvq4rwuugr1mwEoDX8gWjGXboPN0Xw%2BSASgO1gU%2Fg6eghT05g1UdUhJcXFkw1UENGkrqnm%2BIjtGpZA6DXbYG5kIYd5S%2FiVgpFOfB%2FrnVCQAGur1kxXgAYiAeKLuUwqgTskIpFd9ceOHPrZGiWiVxkL4bMryzeWT9pvfPc9ezzYZfbitfp6PpzhMDvCgIikFgR5YvlYk5rMfbmEiPa0opXASpB3W8Br4zRO1q%2BXko95Uebgt2yXmsuEW8jo9108pEwFbFaKIPwA3PlDhbeMedPKr9iE%2FhW4rhlqwUSQnm1IbYOavzC%2FF2nFcNJXoiVRG1A1oSHGd%2FvydzR0PtFMmcrblk2UnQg%2B1HG3zSkE4A%2FKYcIAMclqeNQaDMTELNp%2FHZZzH8TEeI5LaW40zr2dPFA01NkZNOH5bJeBZo49MLq9rr4GOqUBoog7fodnd7qeeSjQV56%2B%2FqGdsDugwqYC%2FPqrvxfIDaUi%2FVDhjwFazpfiVIAyFXe96futLxvEeqHwYiLcxQ3KTvoOO6qEYdXM8W4OU%2BBJY1CVFv438NWiMsjKIj1CLK0y4PIr0Y0LMmoi%2FayGbaXBOGiF8Ko%2FfOFvDerbrBqQTInGV2Z3mariHQu%2FH1k3fLwW%2Fz3w%2BRWk67BUYKoXkAce3ax%2Ftici&X-Amz-Signature=afe5aabc11b84a0c2622eed0f414b4ac75edb90c15bd1a17e4cb8e270a1a2b9c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N5BQ2OI%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T022151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCycpkxdqhUQ3PzVJdxU%2FirBLk9nQAk68FoGl9CoqRSvAIgcGVnIvmS9Bdyn5SZ%2FZzLCeLLlBGARs8oEELQln74S3Yq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDG0PPSobUGOdyO2O%2FCrcAyRpHioV4Ak39Uks32VZFSYJMyP9VmnTEmzmnE%2BS7loSDlSRsj%2Fgt9VBbCPmnC2DG7j411dBYWcohrSp2nqMKtJKBuAlvI6cURwq41ju4f8ZRDH%2B3iZkKdZK7%2FBDHA8GRz91a13%2FIcneaKuY7PuHgz%2FLyFbj2%2FFb5u73eDNiLw8GNyU99LMcGUi5GB5oKHacNjoN%2FKjcsWzlRyAcvYRVoEAvq4rwuugr1mwEoDX8gWjGXboPN0Xw%2BSASgO1gU%2Fg6eghT05g1UdUhJcXFkw1UENGkrqnm%2BIjtGpZA6DXbYG5kIYd5S%2FiVgpFOfB%2FrnVCQAGur1kxXgAYiAeKLuUwqgTskIpFd9ceOHPrZGiWiVxkL4bMryzeWT9pvfPc9ezzYZfbitfp6PpzhMDvCgIikFgR5YvlYk5rMfbmEiPa0opXASpB3W8Br4zRO1q%2BXko95Uebgt2yXmsuEW8jo9108pEwFbFaKIPwA3PlDhbeMedPKr9iE%2FhW4rhlqwUSQnm1IbYOavzC%2FF2nFcNJXoiVRG1A1oSHGd%2FvydzR0PtFMmcrblk2UnQg%2B1HG3zSkE4A%2FKYcIAMclqeNQaDMTELNp%2FHZZzH8TEeI5LaW40zr2dPFA01NkZNOH5bJeBZo49MLq9rr4GOqUBoog7fodnd7qeeSjQV56%2B%2FqGdsDugwqYC%2FPqrvxfIDaUi%2FVDhjwFazpfiVIAyFXe96futLxvEeqHwYiLcxQ3KTvoOO6qEYdXM8W4OU%2BBJY1CVFv438NWiMsjKIj1CLK0y4PIr0Y0LMmoi%2FayGbaXBOGiF8Ko%2FfOFvDerbrBqQTInGV2Z3mariHQu%2FH1k3fLwW%2Fz3w%2BRWk67BUYKoXkAce3ax%2Ftici&X-Amz-Signature=d4444da6d922a86cdccea1ff4a9a19a8da9862b56179e7c14ae81366af5ac8ab&X-Amz-SignedHeaders=host&x-id=GetObject)

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

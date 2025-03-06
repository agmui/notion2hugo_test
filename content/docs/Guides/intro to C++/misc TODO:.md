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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642VGXQ5R%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T041009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvH5GPlSsoAXFB%2FX4spQhxPII90p3YwwM3%2BuQKAtjqFAIgDqr%2B1ds8Pycgt2L59CSE0yCTpTnUT0zHN1gTtLshjHIq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDPDj1aoUN9JZRtV%2BUircA6FTtkq%2FwDgM39p9riYARVCm83Ui8wCPfbZkLbBgWKjer%2B3dwGkZH03skgkC6YS%2Bez%2B39NbOG1fQAnQ8QXqoa%2FffemF2HRu4%2FrMszmc3Gb8DT8MN%2BiNW73sTOLL6bak94qVLuhg79HDpNZT9dD2u4V7O9m7n5FtWHUcOVVhTaOwYxEE7wvfYSNxvne20O6%2FK2SHnV0ybumfBg%2B6C%2Bn8PspnMWN2tcEIcLLO2uMuMBU8JJLAdaf2ne84szQWoLVPiQh%2BCfBwDcE%2BfGQkaPNuDrryWKv2FBYVgRAD06q8cMVsfrPemqMkPysc2mPZ69oFKAq8ac8ahs2LUaTIWyTj4YGDRciWkWvr%2Fc0z1ASd8BGHC%2BD23V5Wjtki3tZRy7cgzkeyZCN4MKsImnpIdiQIZ3Bw%2Baqu%2F%2BCSwT9VTmm6%2F5CbsWHRXHV9rczJ8lpBiUMJiKNzNedYL8euonOfNIRN6koPaWezNw%2BUxkEH4i5tr3D8UauAWCq%2BO4RGIlPWEx6hWzEgHq3l03R995yKBiKgfuEd%2BYsaT95MCjgYMvUV61iFRkZzYHScYJarr7pT%2BYq4rWqBWQAkCKrRqxEXqSZixF8Ud6vM%2FnqOMk5O5dTG9uAhnOQVEUCnBZnoZOJ9pMOe5pL4GOqUBWnfNheh3yTr3rBQzT5kHHAzPKJVzGMu7Ehjuy2qxW4qxgb4naFT9lIQF1OoVzLYGrrKTl5%2FtL%2FRFtVeLtoCyVyOxOcbsdSZO8JERgIqgqoP8AUnFuUJktC6fqzRppKJ8dL8PEn0szECloz6pwtAG3iCAqiKP%2BA9yK7U3Mp3HecrCq737FDS7rsSerdA3KCbptTbg5wmtRZFmGz%2F5sdUAP6U4ILEP&X-Amz-Signature=48cecc09db5ea77be82aa802ef4f5e03153b997fead63871dfeec466e1f4aaca&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642VGXQ5R%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T041009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvH5GPlSsoAXFB%2FX4spQhxPII90p3YwwM3%2BuQKAtjqFAIgDqr%2B1ds8Pycgt2L59CSE0yCTpTnUT0zHN1gTtLshjHIq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDPDj1aoUN9JZRtV%2BUircA6FTtkq%2FwDgM39p9riYARVCm83Ui8wCPfbZkLbBgWKjer%2B3dwGkZH03skgkC6YS%2Bez%2B39NbOG1fQAnQ8QXqoa%2FffemF2HRu4%2FrMszmc3Gb8DT8MN%2BiNW73sTOLL6bak94qVLuhg79HDpNZT9dD2u4V7O9m7n5FtWHUcOVVhTaOwYxEE7wvfYSNxvne20O6%2FK2SHnV0ybumfBg%2B6C%2Bn8PspnMWN2tcEIcLLO2uMuMBU8JJLAdaf2ne84szQWoLVPiQh%2BCfBwDcE%2BfGQkaPNuDrryWKv2FBYVgRAD06q8cMVsfrPemqMkPysc2mPZ69oFKAq8ac8ahs2LUaTIWyTj4YGDRciWkWvr%2Fc0z1ASd8BGHC%2BD23V5Wjtki3tZRy7cgzkeyZCN4MKsImnpIdiQIZ3Bw%2Baqu%2F%2BCSwT9VTmm6%2F5CbsWHRXHV9rczJ8lpBiUMJiKNzNedYL8euonOfNIRN6koPaWezNw%2BUxkEH4i5tr3D8UauAWCq%2BO4RGIlPWEx6hWzEgHq3l03R995yKBiKgfuEd%2BYsaT95MCjgYMvUV61iFRkZzYHScYJarr7pT%2BYq4rWqBWQAkCKrRqxEXqSZixF8Ud6vM%2FnqOMk5O5dTG9uAhnOQVEUCnBZnoZOJ9pMOe5pL4GOqUBWnfNheh3yTr3rBQzT5kHHAzPKJVzGMu7Ehjuy2qxW4qxgb4naFT9lIQF1OoVzLYGrrKTl5%2FtL%2FRFtVeLtoCyVyOxOcbsdSZO8JERgIqgqoP8AUnFuUJktC6fqzRppKJ8dL8PEn0szECloz6pwtAG3iCAqiKP%2BA9yK7U3Mp3HecrCq737FDS7rsSerdA3KCbptTbg5wmtRZFmGz%2F5sdUAP6U4ILEP&X-Amz-Signature=db80df39ab8b3becae574711e5f1b5f9f2c0703ea85e8a5138a748cbbcde4484&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRTBWHIM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FqHvnIzCitnfrEMntvQEyBj%2FL89R%2F%2Bk1IMxaenVkyVAiAIBzBga2z3A6evP5UO6HZtlvprxUtmYdRW%2BuDGQAZsMCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx0%2FuLl03QNt8S3f1KtwDynI%2B9xzwNJJPR0d2Bn%2FEINxoE3vCvKsaRgLNVHu5jKFP9uqOA53XJUTtkmm3QpXicVIbZRMcm146TflrQTltHsgIL0aAsBCQ5XDPFzYD8NFmO8M8mYr6Nm2AXpGdgaccTrkYmhvaeGgm0IJzxHtg3ZOdMkji%2BS8Yab%2BgDayM3syUR9GhGNT1IDKeIo9QwfoCwdU7mfjzad0I%2BBhZKjWOVBAv%2BE9BCvXTyRalTT%2B4TpbTD2AKlwg1fwwv99X3VtzpQYIYYkxX6sFWVOlNHpFDib2MgUm3ggMIMGMStTJ%2BO9heRpM7YZ9smOSEV1adSJ3%2F64XOmxPAdrdY60j9LfaS091bs6%2BdfptXPTOTKXVpEi4mECIGmj6uMi4thFrIVLRzdYllGOcsJ6tAjqSf11J64czqjqXLlGNv4kFjXJR02UzQbgiTB1xQQ2OqSp%2BUITHofs2ESO%2FMMcRqpua2R1wMC0W37LSsS6XVsiIjsc4OMJYb6gqxNYdM2PBhNO3LBjPbbnbjy3a175s4CzBdtejtBshNpzgTQWj0fa8FZ2Q3u8nm4nqkT%2FtMzvLu0BJ9BtxiV%2Fkgsvbi5o9R58TSb8bVjMrrSfAmNh%2BvREH1siSLURuyph%2FjN%2B%2F0T%2BGTo2QwsemtxAY6pgH0XnAu%2BHWwQYU6n329gCybMm8%2BbFEyr6dpjTPy6%2FXHHDjCli2qWAfI0KtFPDxIoRdfHraLyZosTYk0%2FJr5T46uf6UONtRrN64HzG1hh8SdlKdyyegN5fYkzKJN3XgmWQ3wB4mL3Zs71CpPQvN7LHtzrgjj28tJ2GKA6tpKWFL7Fr3G4n%2BDDhvZHjIGxuTqHQ%2BWgOfnoV0P9VoiY1mv5Mf2AmdG3rge&X-Amz-Signature=9ca9444e4262efa045b19411dd648dfe9552e3529d690028463747cd526c8df6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRTBWHIM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FqHvnIzCitnfrEMntvQEyBj%2FL89R%2F%2Bk1IMxaenVkyVAiAIBzBga2z3A6evP5UO6HZtlvprxUtmYdRW%2BuDGQAZsMCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx0%2FuLl03QNt8S3f1KtwDynI%2B9xzwNJJPR0d2Bn%2FEINxoE3vCvKsaRgLNVHu5jKFP9uqOA53XJUTtkmm3QpXicVIbZRMcm146TflrQTltHsgIL0aAsBCQ5XDPFzYD8NFmO8M8mYr6Nm2AXpGdgaccTrkYmhvaeGgm0IJzxHtg3ZOdMkji%2BS8Yab%2BgDayM3syUR9GhGNT1IDKeIo9QwfoCwdU7mfjzad0I%2BBhZKjWOVBAv%2BE9BCvXTyRalTT%2B4TpbTD2AKlwg1fwwv99X3VtzpQYIYYkxX6sFWVOlNHpFDib2MgUm3ggMIMGMStTJ%2BO9heRpM7YZ9smOSEV1adSJ3%2F64XOmxPAdrdY60j9LfaS091bs6%2BdfptXPTOTKXVpEi4mECIGmj6uMi4thFrIVLRzdYllGOcsJ6tAjqSf11J64czqjqXLlGNv4kFjXJR02UzQbgiTB1xQQ2OqSp%2BUITHofs2ESO%2FMMcRqpua2R1wMC0W37LSsS6XVsiIjsc4OMJYb6gqxNYdM2PBhNO3LBjPbbnbjy3a175s4CzBdtejtBshNpzgTQWj0fa8FZ2Q3u8nm4nqkT%2FtMzvLu0BJ9BtxiV%2Fkgsvbi5o9R58TSb8bVjMrrSfAmNh%2BvREH1siSLURuyph%2FjN%2B%2F0T%2BGTo2QwsemtxAY6pgH0XnAu%2BHWwQYU6n329gCybMm8%2BbFEyr6dpjTPy6%2FXHHDjCli2qWAfI0KtFPDxIoRdfHraLyZosTYk0%2FJr5T46uf6UONtRrN64HzG1hh8SdlKdyyegN5fYkzKJN3XgmWQ3wB4mL3Zs71CpPQvN7LHtzrgjj28tJ2GKA6tpKWFL7Fr3G4n%2BDDhvZHjIGxuTqHQ%2BWgOfnoV0P9VoiY1mv5Mf2AmdG3rge&X-Amz-Signature=9fd539ae695e19adf1d4508287d82f6e0fc52319843be7f1d7462dac060c8ee0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OVXJX73%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDU03WuT3gADPhX7zCY%2B7woqxeZnJ0wJ7c2u6fKvMXVFgIgTMgIdxud4C6w9ZxZ7BpBwuApW%2Bdy%2FLzwxgywsm9FhRAqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBI8x4Bskj6mTRESjircA3YP72EjY8ukEdHypHtiWKSTQMOn0Tn9gidG79yVdh%2FwtRgROPXycXQ2hizt%2Fl3zRPMVP1w5dUlq8ocBN0AIQRGcq8nOnvzQul4SPPXjMrv%2FTOebpFghVXvuq8YPq2PTLCCbR4qtjQEpv1uDbTkNiD6nY1qOUKNVnvxNYt9zu5UU4wEfrktHvbWsuP5O5oA9BDjIopXlkCEQC31CKs0d%2FLE6mLbl2zO3PE5ssvAWmsGIzhnlL9aVF1d5AIa2T4O7QKz0qT3WAYOn3Oe8lsm5LQUjb6FScS8qYaVyW%2BJSa5%2B5F55hyTjMgAdVQxZxHE7HvM1DtFv0bFbJQosCPTrq7HEGvfvCRIuZz8cQBzQ7CR7uz5BSAZp7AyLasFU2bLWUHjkVo%2BhtpyTlMWsh5AaRvr9Bl6yMXJ%2FVRQ%2FrD%2FqOD%2B6fIIdCaqmVo157LGot5mMHGwQqCgYx%2BZ6fLyxg%2BopXmoMeaDOuL8hHETPv%2FENXasPY%2Bs9q8Sjlz0cSnlr4XaTTlM1xgpuNhbv569rrUQLDuGIm0VWg5dL93VwTgPTkBv%2Bf52ZU2W9WfsYflAuwXMsjV9rsLEVx1spVU2JhH4NMZ12Q5ZqBMxIsosjiQONxTkPAKPExPijCp8zPtI7iMLW3h8EGOqUBtSyE4huCUz6d1iq3Xnz5BiTnlKkd6N1nV5icHa3G%2BtW5IsJ2WUo2Sj6vCyFV4mZ1ZGuRGbXOSNsZXkntLo1wrcug5LccrxsLYuNtCYfYXmZXy0LVOtgJsDwU%2BIZen7Y95iNbeDOGhmuos2gwgTD4DpQ%2BDLynyP6p1S7K1GEJn0XX5daYUwlHwUbDx%2B045mx4I3VHYT5cbuILR4FYsDeinp7qBxFd&X-Amz-Signature=32a3a2d295fde89266a0ac571c80f2d6411c56ad8375e8680ca0d2680396f300&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OVXJX73%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDU03WuT3gADPhX7zCY%2B7woqxeZnJ0wJ7c2u6fKvMXVFgIgTMgIdxud4C6w9ZxZ7BpBwuApW%2Bdy%2FLzwxgywsm9FhRAqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBI8x4Bskj6mTRESjircA3YP72EjY8ukEdHypHtiWKSTQMOn0Tn9gidG79yVdh%2FwtRgROPXycXQ2hizt%2Fl3zRPMVP1w5dUlq8ocBN0AIQRGcq8nOnvzQul4SPPXjMrv%2FTOebpFghVXvuq8YPq2PTLCCbR4qtjQEpv1uDbTkNiD6nY1qOUKNVnvxNYt9zu5UU4wEfrktHvbWsuP5O5oA9BDjIopXlkCEQC31CKs0d%2FLE6mLbl2zO3PE5ssvAWmsGIzhnlL9aVF1d5AIa2T4O7QKz0qT3WAYOn3Oe8lsm5LQUjb6FScS8qYaVyW%2BJSa5%2B5F55hyTjMgAdVQxZxHE7HvM1DtFv0bFbJQosCPTrq7HEGvfvCRIuZz8cQBzQ7CR7uz5BSAZp7AyLasFU2bLWUHjkVo%2BhtpyTlMWsh5AaRvr9Bl6yMXJ%2FVRQ%2FrD%2FqOD%2B6fIIdCaqmVo157LGot5mMHGwQqCgYx%2BZ6fLyxg%2BopXmoMeaDOuL8hHETPv%2FENXasPY%2Bs9q8Sjlz0cSnlr4XaTTlM1xgpuNhbv569rrUQLDuGIm0VWg5dL93VwTgPTkBv%2Bf52ZU2W9WfsYflAuwXMsjV9rsLEVx1spVU2JhH4NMZ12Q5ZqBMxIsosjiQONxTkPAKPExPijCp8zPtI7iMLW3h8EGOqUBtSyE4huCUz6d1iq3Xnz5BiTnlKkd6N1nV5icHa3G%2BtW5IsJ2WUo2Sj6vCyFV4mZ1ZGuRGbXOSNsZXkntLo1wrcug5LccrxsLYuNtCYfYXmZXy0LVOtgJsDwU%2BIZen7Y95iNbeDOGhmuos2gwgTD4DpQ%2BDLynyP6p1S7K1GEJn0XX5daYUwlHwUbDx%2B045mx4I3VHYT5cbuILR4FYsDeinp7qBxFd&X-Amz-Signature=bacd7a0bbe38b27640646217af8a3e0da4dcd3652e686b34c364498e5838602c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVN22XEV%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T033952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDDP9ST8quG907TkpR0%2BCX73dvdb0Fc86rUyzYUen63zwIgJgn3iwdtg%2Byrq7elnKreSkklBfWYQoBKdXC%2Bop9cF3YqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyFpTMuVrAlljuSTSrcA7I%2BtHSu5v9wMIe1cBg4aMP9xHKpyTPgqZMrRydOXLpQ1eNal07FmszFmGtCNHq7MpuApHc0WFQjPtt2aM0g%2Fy8xVH3Sy19sOmRY2nhrEmmwwK5BdxwC9FRBxelM7Vz64t8vPrYsLkgPY9kWz%2FTmhCc1eEOSS%2BxWLll19Zpp%2FSANlPuquCw%2BTnmcm2gCBk3MamNDSr9JiGQ%2B29J2rMtH%2BTsSKNorUnNvUx9O8aFoslQyq8G6bCWcKhnxSz6W%2Bh2spJmBRTDMn%2BrIc6hWohvfub0Yy72iv3JzPSHKm6cCS3G7TtXgkEIGdEhCdvMclMu4umH6DtMKaKblUH%2ByiJB6EcJnNAUi1oOTD44QQuSFdDWkObnjo6imqjjIWk5ZCX%2BMI0Papzd6Bm62r08ypnvXNzTU2ywUe6W4JgaRd%2FXD%2Fwc2oqNFE%2BAa6%2BbxJdNwhJyJbyIEpX5RdT7%2Blexsp%2BRFowQcFLaQN1fbhnAZkSFjKtgVWRnMuNfebKQbxka43GWMJbz%2BsX5ZcV2jGk7d5OEShKvNQgnwwLDqAQXm2FNRPT%2BB1CxR4tAyO2sCx29MJqU1u23pGdFDN%2FHbcsQf%2BXGdhBRGjnHs3ipZ953g3HEpi4gScYuKGMCXZj4GKY9YMN2TqcIGOqUBkNqdQORgwQ7%2FxFW65UEtW8rM7A8uJ8o6wkecMZEK1Xw5BovW0hE%2BuLSMs0fLjCvpdKgwBxHVzlwMDh9zJUC5HMbKKD5MOU4SDp5cWWIe1FY0gzyUfuMqM6Z8%2Fgn4rS4BWn9Kh4f%2BejGK%2Fuz65V8rIz0IAR2bglaSInZ41nNK12zSjWY8xonY8lsFVXW0gl4BaLdg5FlYTYpKI7dkUb5v5jYZqfPx&X-Amz-Signature=e16a76445d7cfdf45bbe154df4fdb9fc820cc16adeb06a3cfe62d84a7e8104c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVN22XEV%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T033952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDDP9ST8quG907TkpR0%2BCX73dvdb0Fc86rUyzYUen63zwIgJgn3iwdtg%2Byrq7elnKreSkklBfWYQoBKdXC%2Bop9cF3YqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyFpTMuVrAlljuSTSrcA7I%2BtHSu5v9wMIe1cBg4aMP9xHKpyTPgqZMrRydOXLpQ1eNal07FmszFmGtCNHq7MpuApHc0WFQjPtt2aM0g%2Fy8xVH3Sy19sOmRY2nhrEmmwwK5BdxwC9FRBxelM7Vz64t8vPrYsLkgPY9kWz%2FTmhCc1eEOSS%2BxWLll19Zpp%2FSANlPuquCw%2BTnmcm2gCBk3MamNDSr9JiGQ%2B29J2rMtH%2BTsSKNorUnNvUx9O8aFoslQyq8G6bCWcKhnxSz6W%2Bh2spJmBRTDMn%2BrIc6hWohvfub0Yy72iv3JzPSHKm6cCS3G7TtXgkEIGdEhCdvMclMu4umH6DtMKaKblUH%2ByiJB6EcJnNAUi1oOTD44QQuSFdDWkObnjo6imqjjIWk5ZCX%2BMI0Papzd6Bm62r08ypnvXNzTU2ywUe6W4JgaRd%2FXD%2Fwc2oqNFE%2BAa6%2BbxJdNwhJyJbyIEpX5RdT7%2Blexsp%2BRFowQcFLaQN1fbhnAZkSFjKtgVWRnMuNfebKQbxka43GWMJbz%2BsX5ZcV2jGk7d5OEShKvNQgnwwLDqAQXm2FNRPT%2BB1CxR4tAyO2sCx29MJqU1u23pGdFDN%2FHbcsQf%2BXGdhBRGjnHs3ipZ953g3HEpi4gScYuKGMCXZj4GKY9YMN2TqcIGOqUBkNqdQORgwQ7%2FxFW65UEtW8rM7A8uJ8o6wkecMZEK1Xw5BovW0hE%2BuLSMs0fLjCvpdKgwBxHVzlwMDh9zJUC5HMbKKD5MOU4SDp5cWWIe1FY0gzyUfuMqM6Z8%2Fgn4rS4BWn9Kh4f%2BejGK%2Fuz65V8rIz0IAR2bglaSInZ41nNK12zSjWY8xonY8lsFVXW0gl4BaLdg5FlYTYpKI7dkUb5v5jYZqfPx&X-Amz-Signature=9bed2d05511f6611c7cbe41da2d3b923d564e0b01e01e0ccff7449ea29b5e860&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

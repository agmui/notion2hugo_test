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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDTXZVEG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXJ3lMwvzHWL9ke3nFCfXo4Zx3VIP1K4yksD%2FEWcRpAAiEApQWBYKxzzwvS8ytM%2BA0EQqLUJHV0YdKLmzaJn8o4xdQqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLnYHLFW8Szs96OZayrcAyx4aZ810rAVYuziKOeSagEf3rvLaMNk5CBnqUt2yyIcu%2BOlszwbU0PjN5lFiSmILeZwKyjtJWZPV%2BCc5p15%2BwnzNIlzKZ3tGR2AzrrKwcMDUIrY%2Bi7K2svNm3r2Lr8GHDGZKBwDzvVQ4B1i12JVCTMrXiuPHAfC0pnOML1gCwypl3huLDo4geyjN%2BTUME8c4zsCvh04%2FUGQ7NlgyeQgceYTVq8y%2B%2F5hw5dwurIdG6MNgxn1m3n92lYJnWus3UpzOBdloxvaB6paHoTNnOG%2BJGWEKRURoL%2BhPTSXas1JySygge7%2BenvapADpgtpzMZNe%2Br8OXi38RtDlCaaL3yRHMtntZ218PM36SmBXDngeDVPDM6FvqJkgfeuPms1toR%2BJRtk4nLZX1DIBfrnMzlKmm7xqcheAViNGrUU95zxTJmP6HAUVnyDZ2Z%2BJNUuSTmqMOH2toWsD42JYrfP8%2F05jJHDGNF431iGzTV5i%2FMJyJEoj1yOMevpqAN2XAvR0%2FyeezmwGXIcqsl4%2Bgy2Q7zOODjmvHJImwmxKEZHKXK9ePZ1YeAKzgRQuNpM00jj%2Bq82bJmwg3U%2F93lpEGA6uiYuAQrCOJD1gz5F9tRRhWPRNTT3qzAyWjqAWbctrT0jEMKGx3cQGOqUBdOvbCEWc1ZFCvT7WtKFeu2aX34%2BPtFHgy7w3el87i%2Flu94axRjfllGo1lnAPE3LzFXaFjUgyX9Oz5%2BWoc03gDRosx1DTBrf9cXOCsS9PShLxBCio%2FHbG7ERzWDMEGIfBPJVzflciBXuFtl8dlu3U7qfIMYEBF7SGxLOXk9dCsitzfbJscoPWHAvRr28WW8NnkxHNRXNEG9iY5FmMX7k0OKVhHfBJ&X-Amz-Signature=ddd91db87c9eb72e7a559210d236219ac67316bb3de201276fcc07c908a56128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDTXZVEG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXJ3lMwvzHWL9ke3nFCfXo4Zx3VIP1K4yksD%2FEWcRpAAiEApQWBYKxzzwvS8ytM%2BA0EQqLUJHV0YdKLmzaJn8o4xdQqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLnYHLFW8Szs96OZayrcAyx4aZ810rAVYuziKOeSagEf3rvLaMNk5CBnqUt2yyIcu%2BOlszwbU0PjN5lFiSmILeZwKyjtJWZPV%2BCc5p15%2BwnzNIlzKZ3tGR2AzrrKwcMDUIrY%2Bi7K2svNm3r2Lr8GHDGZKBwDzvVQ4B1i12JVCTMrXiuPHAfC0pnOML1gCwypl3huLDo4geyjN%2BTUME8c4zsCvh04%2FUGQ7NlgyeQgceYTVq8y%2B%2F5hw5dwurIdG6MNgxn1m3n92lYJnWus3UpzOBdloxvaB6paHoTNnOG%2BJGWEKRURoL%2BhPTSXas1JySygge7%2BenvapADpgtpzMZNe%2Br8OXi38RtDlCaaL3yRHMtntZ218PM36SmBXDngeDVPDM6FvqJkgfeuPms1toR%2BJRtk4nLZX1DIBfrnMzlKmm7xqcheAViNGrUU95zxTJmP6HAUVnyDZ2Z%2BJNUuSTmqMOH2toWsD42JYrfP8%2F05jJHDGNF431iGzTV5i%2FMJyJEoj1yOMevpqAN2XAvR0%2FyeezmwGXIcqsl4%2Bgy2Q7zOODjmvHJImwmxKEZHKXK9ePZ1YeAKzgRQuNpM00jj%2Bq82bJmwg3U%2F93lpEGA6uiYuAQrCOJD1gz5F9tRRhWPRNTT3qzAyWjqAWbctrT0jEMKGx3cQGOqUBdOvbCEWc1ZFCvT7WtKFeu2aX34%2BPtFHgy7w3el87i%2Flu94axRjfllGo1lnAPE3LzFXaFjUgyX9Oz5%2BWoc03gDRosx1DTBrf9cXOCsS9PShLxBCio%2FHbG7ERzWDMEGIfBPJVzflciBXuFtl8dlu3U7qfIMYEBF7SGxLOXk9dCsitzfbJscoPWHAvRr28WW8NnkxHNRXNEG9iY5FmMX7k0OKVhHfBJ&X-Amz-Signature=f0497d17d4040c1ea7fc15e82dae0c533bf7c6765397743c9d7e26a06c69adcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

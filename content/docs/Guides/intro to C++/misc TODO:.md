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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GLD4KPC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDylAWKVM2LV6HNIzDPNFa9uQiJxhnlY4nliSacKSJedAiA8jbZlCRD7wCJYSU0jP13CDiQobqqIxOuNJOEp%2FK1qNiqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiCFOn9FjcogruGBfKtwDyd370IGJUAYa89cRLnRXqkYf9zFiO8Osh%2Bh8Xi4zSFzesmSVM4QFn%2BR%2BzA2eSSpjKDVB82TkyycYg9JBV%2BS9%2BAgUfR1aw7MzIOcCm7IDz7RsuMZ5of1fX%2Fwt0s8JBq%2Bsf245MGSTjtLeqsncOocJMn1CasZk0yisy0gHb0QpMEQuwQ6zPuWt%2FT18VIgXyMZBhkgPu6VX9u3rOcUMn8k8Ydar%2BnP0cH8Q9B4jU1W2GmFjeX%2FadCiijqcHfmETLowsaRi7Au6hrUYDTfyVT8I7oOK4gUTKq9On4H4RvdXr8BUsn80nKONHVdEBQveqGFm62d2BiiM8s%2FXMg1YzSJ4173Td7CbOzJOGF9MoyygbknSCYB%2FB4yxMr%2FFshgtESy7cqZWqOnq3l0%2BqTc9MhJbt3gND3RwAuxkUlh0cYo008JqCwqFtVobsRQ1cYkuDkDWAUUtRBKd23mKsaKgKo6liByNM3qJkyZWBXbQl0uO4%2BMkctudu2cxnN1h2lPZIQswHnSWZCacxMo5DB667L78eF9noZnkOOrq%2Bp4hsUfMZ7OaakyRQOUGP4GKrA8cBXaMdn1FY1jSywq3NloOFEXMV05n6nyDy6l3P%2FmI3S6BK%2F4HDBqImfTa9HncKKCAwoO2xxAY6pgGac0Td%2BYTov6Cw9ZfX4nOJo9aAZpNBPA%2FUor0JBAtGUvAISorF4tsxmPy8IStYRTEoYpNBtga81GCdCNe7cyQviFZrcGlIIwLDMsNRZWkG%2B8eNAR004iu6rp9EM%2FxAM9knKnXlXHbBtZwwDD4PA1aV7gK%2BrJYaDP6fr1UNCskBujxlImZJmD%2BjJvx%2BOc0IOP7GIEc4xap4nkTh0GO%2BK%2BE3OkxPoH3F&X-Amz-Signature=584c3397a713493dec6d8eba8553d54020c6ca5d07b57bd626f77ef40e6e46cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GLD4KPC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDylAWKVM2LV6HNIzDPNFa9uQiJxhnlY4nliSacKSJedAiA8jbZlCRD7wCJYSU0jP13CDiQobqqIxOuNJOEp%2FK1qNiqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiCFOn9FjcogruGBfKtwDyd370IGJUAYa89cRLnRXqkYf9zFiO8Osh%2Bh8Xi4zSFzesmSVM4QFn%2BR%2BzA2eSSpjKDVB82TkyycYg9JBV%2BS9%2BAgUfR1aw7MzIOcCm7IDz7RsuMZ5of1fX%2Fwt0s8JBq%2Bsf245MGSTjtLeqsncOocJMn1CasZk0yisy0gHb0QpMEQuwQ6zPuWt%2FT18VIgXyMZBhkgPu6VX9u3rOcUMn8k8Ydar%2BnP0cH8Q9B4jU1W2GmFjeX%2FadCiijqcHfmETLowsaRi7Au6hrUYDTfyVT8I7oOK4gUTKq9On4H4RvdXr8BUsn80nKONHVdEBQveqGFm62d2BiiM8s%2FXMg1YzSJ4173Td7CbOzJOGF9MoyygbknSCYB%2FB4yxMr%2FFshgtESy7cqZWqOnq3l0%2BqTc9MhJbt3gND3RwAuxkUlh0cYo008JqCwqFtVobsRQ1cYkuDkDWAUUtRBKd23mKsaKgKo6liByNM3qJkyZWBXbQl0uO4%2BMkctudu2cxnN1h2lPZIQswHnSWZCacxMo5DB667L78eF9noZnkOOrq%2Bp4hsUfMZ7OaakyRQOUGP4GKrA8cBXaMdn1FY1jSywq3NloOFEXMV05n6nyDy6l3P%2FmI3S6BK%2F4HDBqImfTa9HncKKCAwoO2xxAY6pgGac0Td%2BYTov6Cw9ZfX4nOJo9aAZpNBPA%2FUor0JBAtGUvAISorF4tsxmPy8IStYRTEoYpNBtga81GCdCNe7cyQviFZrcGlIIwLDMsNRZWkG%2B8eNAR004iu6rp9EM%2FxAM9knKnXlXHbBtZwwDD4PA1aV7gK%2BrJYaDP6fr1UNCskBujxlImZJmD%2BjJvx%2BOc0IOP7GIEc4xap4nkTh0GO%2BK%2BE3OkxPoH3F&X-Amz-Signature=8263553b43018f6f8130767af2128d72f96e19ca3f4f412ad1e2b16b686891c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

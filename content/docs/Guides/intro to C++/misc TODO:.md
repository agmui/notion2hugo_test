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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MH7GBNO%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T190749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCJ4uuq7g25s6qRt5%2B71hPhdOr%2FcwXQUx%2BQ%2FwUlJAyX7AIhAOBjnd9dbHnNinoiROIt39y7EIxTaJCd9%2Fh65p2U8OSvKv8DCHsQABoMNjM3NDIzMTgzODA1IgyQGQvXoH3dNnwaoSQq3ANtZdq%2F69AiwWS305OaCHN4ccupEkD1bgrY%2Bka1mm%2FxcyJPXz7miKsKuXUE8hXx1aOhrrlXGmhJJVn%2BRb6xbKN%2FB6dmcEAo9c1aU3D2oV4oVTTm0r35vpL2izOQVDIKDRclp9pdYzg2uyeBbtRjefbDDALMMfIgs2xToDHwdiuV7an77sNwfqieCqCnhFdlStvsXyPIFdPk%2FaNRiIT955kddsYtb6WWrccFwM%2BgPy2%2FseIUknrfdXRu%2BRAdVvApD33KqfZ2pCVCHtkIvrObn5sfEuV%2F1sCEDmRdEFqQ3CIPzbGNlp%2B2%2F1XefIYguAQaw6J0Stkb%2FiMdmijCoO9InrLqw6fPy6XgVgr4g1zACkNgbI99Q0gTI4M4YaSqzOEAF4FfukY%2FMcwJHcikhKikk9IsXoM%2Bp6FrTBrxV3TY5K%2FT5w3gDtrPGycqnXgMmIon3Gyq4VzH6Mpj0mu8Piu0xJp7XGycnDYkW%2FXbGO6AUQhc9%2BYamRGCmg01tcS6j3neyw7WiCOgGXckugEmOPheSCzZaIdIQoeOYjDeuWmpD7ifUDqDB1gh4yZRUVy8VI2rkCF63hNUj1xbWEHKznAN5yju%2FTxDd1lmpQFdfaPFOvf4whMXdALXPCXAwvXNYzCKlrDDBjqkAZJLbmqWh%2FWXRu8rSpVEVvre64ViXT38SdFJHUMB7YTNBzx9Bxhje1rY09oXB4cUo4P8hE67ytpYpZF2%2Fpila3BNUQRZK2gC6UmYsC0kzUnqbF2E%2BUnNNIM4A2cXGHMWVzQ%2By2oLHXzeegmhYaDGHTIGyjopRITCh9wvXYbt%2Bea9aXKpLuBQDRPAc1iFvWgpaAEeRDRRHxhZkuUTGB3JDdjAkyPL&X-Amz-Signature=573302ac529babbd8cebfbfdc1cd5425551ea1c00583f4d9d525163caaa71702&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MH7GBNO%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T190749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCJ4uuq7g25s6qRt5%2B71hPhdOr%2FcwXQUx%2BQ%2FwUlJAyX7AIhAOBjnd9dbHnNinoiROIt39y7EIxTaJCd9%2Fh65p2U8OSvKv8DCHsQABoMNjM3NDIzMTgzODA1IgyQGQvXoH3dNnwaoSQq3ANtZdq%2F69AiwWS305OaCHN4ccupEkD1bgrY%2Bka1mm%2FxcyJPXz7miKsKuXUE8hXx1aOhrrlXGmhJJVn%2BRb6xbKN%2FB6dmcEAo9c1aU3D2oV4oVTTm0r35vpL2izOQVDIKDRclp9pdYzg2uyeBbtRjefbDDALMMfIgs2xToDHwdiuV7an77sNwfqieCqCnhFdlStvsXyPIFdPk%2FaNRiIT955kddsYtb6WWrccFwM%2BgPy2%2FseIUknrfdXRu%2BRAdVvApD33KqfZ2pCVCHtkIvrObn5sfEuV%2F1sCEDmRdEFqQ3CIPzbGNlp%2B2%2F1XefIYguAQaw6J0Stkb%2FiMdmijCoO9InrLqw6fPy6XgVgr4g1zACkNgbI99Q0gTI4M4YaSqzOEAF4FfukY%2FMcwJHcikhKikk9IsXoM%2Bp6FrTBrxV3TY5K%2FT5w3gDtrPGycqnXgMmIon3Gyq4VzH6Mpj0mu8Piu0xJp7XGycnDYkW%2FXbGO6AUQhc9%2BYamRGCmg01tcS6j3neyw7WiCOgGXckugEmOPheSCzZaIdIQoeOYjDeuWmpD7ifUDqDB1gh4yZRUVy8VI2rkCF63hNUj1xbWEHKznAN5yju%2FTxDd1lmpQFdfaPFOvf4whMXdALXPCXAwvXNYzCKlrDDBjqkAZJLbmqWh%2FWXRu8rSpVEVvre64ViXT38SdFJHUMB7YTNBzx9Bxhje1rY09oXB4cUo4P8hE67ytpYpZF2%2Fpila3BNUQRZK2gC6UmYsC0kzUnqbF2E%2BUnNNIM4A2cXGHMWVzQ%2By2oLHXzeegmhYaDGHTIGyjopRITCh9wvXYbt%2Bea9aXKpLuBQDRPAc1iFvWgpaAEeRDRRHxhZkuUTGB3JDdjAkyPL&X-Amz-Signature=60c2bd8141328a92619adf9607d8f918e4fec7fb438a0446152afd61c21120b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

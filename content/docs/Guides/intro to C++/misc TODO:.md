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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE4VUJJD%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T230129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIGNW941rcCI2GxltMIOuBBZiyWbd9%2F7JcYW%2Bgqs40691AiEA6AIBhp4OX26iMn209%2BOeNFZ8Psz3n4tjO0Kw8rSm1zUq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPGSA%2BtzPlH9poQuPCrcA2SjlcXx61D3JeIANuY8Mkq5HLMWe6OgKUZvvyO%2BIRmerHPgs4JG%2FpTPHbLSFT%2FHUzOTuB4wlOYci4aP3q%2BuqvSMYBr3U2ZrKtbHl%2FXo4d2rjPcRJ%2B%2FdF5GTdq3Sq%2FI%2BmmgwrjvZ2n9TWUwHLPSpGoz2lQ%2Fi2KCYBNYPIYuwufs3aPYaStz2Ue5bUrO2xkB4HAlE2ngsqKqbezSuDp8ymRt2FgW3DT1iV5LHe%2B8rTOPwfSThiP7KKxU984DUShX3a%2B6C%2FKRf1528x8YKqdYFPebKi5Z0nuUUy8Fdjtpsm%2Bq3LUl3uFWx%2FJuFKt5hxXeDSYTs2e6S3ESImkuQ0xCORZSBpSvHc7YLGPuKpGbZ2pMwMDEVsbZVUEC4793aL5R3HAjrAwxzvOy5Vp4b%2BbLOcF9X19fNs6LeX%2B%2BerXNV0gClKALgWQreY0p3S6rziM%2BQWaZAEomeLb1uBS%2Fz4V8U01BAG7IeDol2gLACQOdTN33PYCFwhcCoNqT61nl%2BCgOJBWi7t2H6ubVMtA6t8evoOG0zRoAmvsraTcFkD7iFLyVU8BVn3fNRffoknzIQqkRlX4E%2Fk4u%2BCDsd5s8nPlev7JYEM1KRATq%2BJGRjdOUjvRgfYeHJYwcfdYa47YLCMPLdrb4GOqUBet9xmW5EOBznlpCVpZnf3NbSzkl553bCJre%2FNFm%2BERnOInQkJ5Q9UreVfAuqwLGFbsHhyVXWIbtE2Fc9Y1jZVvWllWR9786edenxg4mAbu3zUxZMLPdqsvqujk6OGalQndl6iGykWzIfaD1Gkl%2Bk%2BSqtAg49CGwkaG1qmEC%2BV%2FDCOI4AiUijZQfbKXoBpmzSsU8gj7BXORIhU1mUCYUpXtq1clip&X-Amz-Signature=0e40d96de25bba6e02b1640e0d5f0b9088acdd1f1a9f482490bb4ade49a4c51e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE4VUJJD%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T230129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIGNW941rcCI2GxltMIOuBBZiyWbd9%2F7JcYW%2Bgqs40691AiEA6AIBhp4OX26iMn209%2BOeNFZ8Psz3n4tjO0Kw8rSm1zUq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPGSA%2BtzPlH9poQuPCrcA2SjlcXx61D3JeIANuY8Mkq5HLMWe6OgKUZvvyO%2BIRmerHPgs4JG%2FpTPHbLSFT%2FHUzOTuB4wlOYci4aP3q%2BuqvSMYBr3U2ZrKtbHl%2FXo4d2rjPcRJ%2B%2FdF5GTdq3Sq%2FI%2BmmgwrjvZ2n9TWUwHLPSpGoz2lQ%2Fi2KCYBNYPIYuwufs3aPYaStz2Ue5bUrO2xkB4HAlE2ngsqKqbezSuDp8ymRt2FgW3DT1iV5LHe%2B8rTOPwfSThiP7KKxU984DUShX3a%2B6C%2FKRf1528x8YKqdYFPebKi5Z0nuUUy8Fdjtpsm%2Bq3LUl3uFWx%2FJuFKt5hxXeDSYTs2e6S3ESImkuQ0xCORZSBpSvHc7YLGPuKpGbZ2pMwMDEVsbZVUEC4793aL5R3HAjrAwxzvOy5Vp4b%2BbLOcF9X19fNs6LeX%2B%2BerXNV0gClKALgWQreY0p3S6rziM%2BQWaZAEomeLb1uBS%2Fz4V8U01BAG7IeDol2gLACQOdTN33PYCFwhcCoNqT61nl%2BCgOJBWi7t2H6ubVMtA6t8evoOG0zRoAmvsraTcFkD7iFLyVU8BVn3fNRffoknzIQqkRlX4E%2Fk4u%2BCDsd5s8nPlev7JYEM1KRATq%2BJGRjdOUjvRgfYeHJYwcfdYa47YLCMPLdrb4GOqUBet9xmW5EOBznlpCVpZnf3NbSzkl553bCJre%2FNFm%2BERnOInQkJ5Q9UreVfAuqwLGFbsHhyVXWIbtE2Fc9Y1jZVvWllWR9786edenxg4mAbu3zUxZMLPdqsvqujk6OGalQndl6iGykWzIfaD1Gkl%2Bk%2BSqtAg49CGwkaG1qmEC%2BV%2FDCOI4AiUijZQfbKXoBpmzSsU8gj7BXORIhU1mUCYUpXtq1clip&X-Amz-Signature=b498eaa1c4597a139923258d08f69da121ee3c3d9f206873be83767846d25841&X-Amz-SignedHeaders=host&x-id=GetObject)

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

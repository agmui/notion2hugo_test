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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z62UB65%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T210204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAKiFiIqInN3TsfCnQsGrZaQ3ls0WotM8hXxbnTko3w2AiEApIep7aSMBNJAgopAEWiADulvmvmdLBaUNFPbNwiIExcqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApGiXwY54xJXNGElyrcA1z9uSLmgIq9P9l%2BRBxaEdFb2h6V72MrDbn9AqR4n4BlfkLhn9p1lLgDCx1mlcWDnxU4KFQ%2FCxHTEZOeVOB8ekKTyH7hliBVF99iV%2BxJsMgW%2FxJHvVCmRedr7NBe1y8UXiCVngbzWu%2FBcaJ4feu%2FmyWdOfNqjobmghbpXZz8A3MlzjGFYBDfv7qvvoCL10ui4HHdM7n6g9ErYqrrFjlmcej25b9d3J9WX9uyDE%2F6Jf%2B2eXDBZ5pZdESklLI2fHdopFG8AO2AuXmg5FkjKbuk7JXIt6w%2FySw2LcadY6bjhW9YLPGVG2NXew2cAjHu4eRc8E4Wzwgh6oSIJOjifBRoq5w0qOfNHrE6elzxMIVlXr%2B6sgkEnwFkf7YG%2FhFNHyDMthy5E2VP2GSdBJN3qy35RauWKVryNuLTkDsm%2BXtimfAoQHqH9LTVS97OlTnuTjudMCFrJ0a3c9S0P3eUbfikrIrC%2FW3t00RdNLZ33KMDvOozz%2BQzPr93llz575ekIAPJ2lBxczQWlaDJGCvt%2B%2Biht%2B0w089ra7Wh96ywTABzj4TfzPDI8eHuHFSHh0vIwRGwhwYxGcLizBbz2NGE%2BAu6y0yi5f5NVoqPjJczS3G58oHr7BnGTrpmxEfO0dLnMMOD6L0GOqUB06uCAsH4ftxkGupf1P1b6xH9ZiIInK0WjGTE6VDnrvhQ0WNb7Yu8Uju3ncMzI1ToTzBv58IGiqwDkeP%2F90sEzIn8X1fu5i86grCwrmqZojCuc4jN5BdGmsF%2BageZ4wcjYerC6OuTr8kFsI8By2vLotA%2FrxEKVUfVii4z0mo1xWRrjcAUd8csTnUfvBdBWR096ezyxYgMNYL7x73%2F0wpVoYaR86ot&X-Amz-Signature=1435a6d0fe2873e186c64e2686c65271c71d4223094cb06206590d41bae5c981&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z62UB65%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T210204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAKiFiIqInN3TsfCnQsGrZaQ3ls0WotM8hXxbnTko3w2AiEApIep7aSMBNJAgopAEWiADulvmvmdLBaUNFPbNwiIExcqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApGiXwY54xJXNGElyrcA1z9uSLmgIq9P9l%2BRBxaEdFb2h6V72MrDbn9AqR4n4BlfkLhn9p1lLgDCx1mlcWDnxU4KFQ%2FCxHTEZOeVOB8ekKTyH7hliBVF99iV%2BxJsMgW%2FxJHvVCmRedr7NBe1y8UXiCVngbzWu%2FBcaJ4feu%2FmyWdOfNqjobmghbpXZz8A3MlzjGFYBDfv7qvvoCL10ui4HHdM7n6g9ErYqrrFjlmcej25b9d3J9WX9uyDE%2F6Jf%2B2eXDBZ5pZdESklLI2fHdopFG8AO2AuXmg5FkjKbuk7JXIt6w%2FySw2LcadY6bjhW9YLPGVG2NXew2cAjHu4eRc8E4Wzwgh6oSIJOjifBRoq5w0qOfNHrE6elzxMIVlXr%2B6sgkEnwFkf7YG%2FhFNHyDMthy5E2VP2GSdBJN3qy35RauWKVryNuLTkDsm%2BXtimfAoQHqH9LTVS97OlTnuTjudMCFrJ0a3c9S0P3eUbfikrIrC%2FW3t00RdNLZ33KMDvOozz%2BQzPr93llz575ekIAPJ2lBxczQWlaDJGCvt%2B%2Biht%2B0w089ra7Wh96ywTABzj4TfzPDI8eHuHFSHh0vIwRGwhwYxGcLizBbz2NGE%2BAu6y0yi5f5NVoqPjJczS3G58oHr7BnGTrpmxEfO0dLnMMOD6L0GOqUB06uCAsH4ftxkGupf1P1b6xH9ZiIInK0WjGTE6VDnrvhQ0WNb7Yu8Uju3ncMzI1ToTzBv58IGiqwDkeP%2F90sEzIn8X1fu5i86grCwrmqZojCuc4jN5BdGmsF%2BageZ4wcjYerC6OuTr8kFsI8By2vLotA%2FrxEKVUfVii4z0mo1xWRrjcAUd8csTnUfvBdBWR096ezyxYgMNYL7x73%2F0wpVoYaR86ot&X-Amz-Signature=be51ec2a413e4d5c5e56339afa33985acd44026a83596007522f12d7719c6095&X-Amz-SignedHeaders=host&x-id=GetObject)

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

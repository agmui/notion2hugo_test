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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XWN3PE2%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T121639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCR4ses9bJtMTGorzgUVfzgI1lWLa68Dnx1PniMFs6VngIgHPMMWWsxOtGtmebkOPowUCFTqmiIqXOQEiN9z3zOtZgqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKB9XTMIwGjBiomwACrcA5QFGUyF2BI6cKhEtocyuRdN01n7%2FbjCt09Qv8rMGeHHgiMKgCNqEAVHaxGfqa%2Ft7lYQuUmFuqisyFY21MKg7eCHtlpIXg56h6bxjdS6iCZ0rzjOINoEqgE6Bi%2B3ubi3snqpzMqgB3oz8Ego1NS%2Fz0wP72n4nqSnd898IukAnJHSMCf4XMcgj1hmlKoMZ2AAH1dS4hKTika%2FVJtoNztSboGJ83kGFg8pbmYGUDNN2M9%2FNpRB1uqVSV6AaEPKWjo0ojSsZUPxjCRWAVt2k0V8d6zoicrHQREgY8xlrJydkPRu%2FCNtUYqzla1RZRlzrfWjxR%2BJhDPLP5KIICEnQHdj5GgrORx0PO9Prkazd5TkWnYmlGEv2wQsCU%2F4W8NEL2pcVwK%2FnKYKn6hgMGbscNNHKeBxonT8UgTqOD7kvG1dYfmsitrMlBiK7eMAN92mSSsvmQuw%2F%2FQa%2FmL9n8y3hOzuuDBEyCL920R0xp2BL%2BmIYfIgrjQPyJ5Yx0mRRWnumZpMR76XfVog1pHNlvwEGP1w%2F78R84RkbApXwkStk%2FpwRSwnNFehpAGHZllSqyHO51Lr%2Bsfv%2F%2FC5ZTkGEtz4lgHKUhbVj6k4Sv63bX9DN9VOX8wvA1l8j3retTx5wQ3fMJvVvsMGOqUBIq9PGLcbWEdKIORVupsO2K9FjDjn4KTi0d%2BoYLTn6ryNkHoB1Swccb81Eu8kRHWsxHIqN8SuxOzGLAwArZQsyHtxclkYLn%2FjPWd3snvYfifGlP%2B6HPNI5GrZkkzb7vo2Q1TypjldrdUw2Qqsy2%2F3C0mQOY5mrQoiaB9HDW6YM52qjWs6YSlVjX4vIt2gaFZGW00OM6TlLE60gs5vMes4%2BG%2F8RcJg&X-Amz-Signature=9d70c094c97581814eefad08d379e2cdc4291193638e6e7b3d3518b05e0c7859&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XWN3PE2%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T121639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCR4ses9bJtMTGorzgUVfzgI1lWLa68Dnx1PniMFs6VngIgHPMMWWsxOtGtmebkOPowUCFTqmiIqXOQEiN9z3zOtZgqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKB9XTMIwGjBiomwACrcA5QFGUyF2BI6cKhEtocyuRdN01n7%2FbjCt09Qv8rMGeHHgiMKgCNqEAVHaxGfqa%2Ft7lYQuUmFuqisyFY21MKg7eCHtlpIXg56h6bxjdS6iCZ0rzjOINoEqgE6Bi%2B3ubi3snqpzMqgB3oz8Ego1NS%2Fz0wP72n4nqSnd898IukAnJHSMCf4XMcgj1hmlKoMZ2AAH1dS4hKTika%2FVJtoNztSboGJ83kGFg8pbmYGUDNN2M9%2FNpRB1uqVSV6AaEPKWjo0ojSsZUPxjCRWAVt2k0V8d6zoicrHQREgY8xlrJydkPRu%2FCNtUYqzla1RZRlzrfWjxR%2BJhDPLP5KIICEnQHdj5GgrORx0PO9Prkazd5TkWnYmlGEv2wQsCU%2F4W8NEL2pcVwK%2FnKYKn6hgMGbscNNHKeBxonT8UgTqOD7kvG1dYfmsitrMlBiK7eMAN92mSSsvmQuw%2F%2FQa%2FmL9n8y3hOzuuDBEyCL920R0xp2BL%2BmIYfIgrjQPyJ5Yx0mRRWnumZpMR76XfVog1pHNlvwEGP1w%2F78R84RkbApXwkStk%2FpwRSwnNFehpAGHZllSqyHO51Lr%2Bsfv%2F%2FC5ZTkGEtz4lgHKUhbVj6k4Sv63bX9DN9VOX8wvA1l8j3retTx5wQ3fMJvVvsMGOqUBIq9PGLcbWEdKIORVupsO2K9FjDjn4KTi0d%2BoYLTn6ryNkHoB1Swccb81Eu8kRHWsxHIqN8SuxOzGLAwArZQsyHtxclkYLn%2FjPWd3snvYfifGlP%2B6HPNI5GrZkkzb7vo2Q1TypjldrdUw2Qqsy2%2F3C0mQOY5mrQoiaB9HDW6YM52qjWs6YSlVjX4vIt2gaFZGW00OM6TlLE60gs5vMes4%2BG%2F8RcJg&X-Amz-Signature=b5392914d64ef32f1ff90c471a3b124acc4353e6ff7bcee817b8d5e39a36f14b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

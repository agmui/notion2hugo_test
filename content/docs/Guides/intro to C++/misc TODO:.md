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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDVZXE4Z%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T024420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmrMMXgC0zJWVyiaekEpMQfQYEGrKLw6SRBDSPT%2Fj0%2FAiBF62bAe0AerJZh82IUy4S%2ByfaNCxl99%2Fvg%2FpPh7pF5HyqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZzbZwnWY0YIN6wrUKtwDfRS93jAW0ITXgedY9%2B0U%2FTDZzjhiI96BLAmLkKYPMazJPLHC9B%2BmSaZOTILByCDXfQDFIMmr3ZD3JeLrcCxvaY9A7ipezRh9uC4inbjhyrGUmFgKiF9B9xi8S3VX2McY7JvAJPSHQGmsMb9b8cQbo5U6103ZsDHoJRW6NAbPCmrqGcr1dVHpXl%2Fe%2Fd%2BVLK14EWe3miVr%2B01YbqT3kgGPQ3JniW3TBIaGZrdqd%2BJTOkmXgb%2BJNafMJH4WKynuEKifIqiduaN2RZCszLcEH9d68NOsTZQhslDJegDeIbs3Odr2yK9gtETg%2BRuZYQ31uA07I%2FsZ%2FoPgmGNK5DjkSXaqMhJsZ2ixh5VmU9WGl2xBuH8K7wTsTnmfAy7SBANtZrJz8%2Bl9CuU4HEDMUM0Zy4ez1k9c7FSNjwNojOZpfl3bqMtdf0ifAEMtec1C3PS6PgyheQG7YQ5Lj7KZlXp7%2FCJjAd8zMA%2FSDS%2BYqOM%2BrShE3suBwWk1C2rtLcZo6eaYxgIV4fEmQD2Fjzn8MftS82qNce%2By8vrq%2FYQWXniGHAM%2FQ5%2Ba39NRvFHp43qgwzJz5hLoxxSc3US96QiX8kWS9exWVtX0wR0Wo%2BKR11FYiO0UMhWxL32nNraG3wL4YBMwjLS2wwY6pgGvXIsbH6XKCo4rc75rY47QKXbTXUPHTYyHoiImYA7PY5J9o4F3bkmMPBHxDAc%2BPHbT5iRxycX0vSLX4ze46d5eBBs0wyGFvOx5Xny1eP35Ogw%2B0J8j8ut106C7H1JYfDCIMDJQB4Re6zfL4eMDagtgRFNxe%2F0cMgYpL2pi7vjD%2FPiS0Pj8PzwMejsXoNsmPJGkdo7qWNH1Xfdgerpp00Adgclm%2FF1l&X-Amz-Signature=ed2a466f6134cb4944b539f527e3683e44b685b366bbe44b1964913d3ef9ed6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDVZXE4Z%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T024420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmrMMXgC0zJWVyiaekEpMQfQYEGrKLw6SRBDSPT%2Fj0%2FAiBF62bAe0AerJZh82IUy4S%2ByfaNCxl99%2Fvg%2FpPh7pF5HyqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZzbZwnWY0YIN6wrUKtwDfRS93jAW0ITXgedY9%2B0U%2FTDZzjhiI96BLAmLkKYPMazJPLHC9B%2BmSaZOTILByCDXfQDFIMmr3ZD3JeLrcCxvaY9A7ipezRh9uC4inbjhyrGUmFgKiF9B9xi8S3VX2McY7JvAJPSHQGmsMb9b8cQbo5U6103ZsDHoJRW6NAbPCmrqGcr1dVHpXl%2Fe%2Fd%2BVLK14EWe3miVr%2B01YbqT3kgGPQ3JniW3TBIaGZrdqd%2BJTOkmXgb%2BJNafMJH4WKynuEKifIqiduaN2RZCszLcEH9d68NOsTZQhslDJegDeIbs3Odr2yK9gtETg%2BRuZYQ31uA07I%2FsZ%2FoPgmGNK5DjkSXaqMhJsZ2ixh5VmU9WGl2xBuH8K7wTsTnmfAy7SBANtZrJz8%2Bl9CuU4HEDMUM0Zy4ez1k9c7FSNjwNojOZpfl3bqMtdf0ifAEMtec1C3PS6PgyheQG7YQ5Lj7KZlXp7%2FCJjAd8zMA%2FSDS%2BYqOM%2BrShE3suBwWk1C2rtLcZo6eaYxgIV4fEmQD2Fjzn8MftS82qNce%2By8vrq%2FYQWXniGHAM%2FQ5%2Ba39NRvFHp43qgwzJz5hLoxxSc3US96QiX8kWS9exWVtX0wR0Wo%2BKR11FYiO0UMhWxL32nNraG3wL4YBMwjLS2wwY6pgGvXIsbH6XKCo4rc75rY47QKXbTXUPHTYyHoiImYA7PY5J9o4F3bkmMPBHxDAc%2BPHbT5iRxycX0vSLX4ze46d5eBBs0wyGFvOx5Xny1eP35Ogw%2B0J8j8ut106C7H1JYfDCIMDJQB4Re6zfL4eMDagtgRFNxe%2F0cMgYpL2pi7vjD%2FPiS0Pj8PzwMejsXoNsmPJGkdo7qWNH1Xfdgerpp00Adgclm%2FF1l&X-Amz-Signature=c1be882463f369b2ad2c9f7e24eb0813ecd8eb439b710b290bb472d347636492&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

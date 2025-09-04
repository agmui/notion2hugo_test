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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA5D2RPU%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2qe%2F1EW6qX6OlObFlnRnhS3qjuYNDsaa0mh1P5KysawIhAKJniOZO1r3P%2BzXIcWUb4Z54uz2G9cQQu%2ByaHG%2FxSb14Kv8DCFEQABoMNjM3NDIzMTgzODA1IgxRCa0BpyHs6UMtWBkq3AMyQlkKFzIzkNnawWCsiLpAFkhTOpLgKxZo2UwO7mPQ3TFDvyQWTC6gWOjALWBMhC2KrI23cThIs49KKCOTe9ZecgDtdU2FBhQyQMs57M2G5Qci%2FQyIEyAmc2L0u5ljKd7RsZUgnexWJgUudmmSw7SAxt%2BocMSR52220%2BltNaEAuIsTEBbyg2V3NiuHX7USu332vJUTpLHa%2FhePvpINsDyK58Uq509DAia7cK7cumdolP2u0qQUngk3eWk9G6oexY%2BvGAcFc0XTubxHTPgE08PoIM2h%2BqsDY1MfR5stWWWTVsWImDMrJbY%2B%2Ft90JAFgbylMqO6umSSVPxQc11SMUPShKpdliqmt%2BJzGue6XJvcwwAUCAMLCrfVQLYAGBmm78xQWuD%2B4s3%2BTjYqyLEQXSwyqT8LBnHqlzkZexF7osOYnq4OJ7R%2FjxKcrJP35eX5Sk1wXpKF8Jzlo%2BI%2Bnjm5QSyqw40ucB%2BHyV1FYCKD9Sctuw%2FacEPV5a5WaQFlM6AEyIPvVSskPUzbbQ2142XXBVf8GOv%2FWG%2FH%2BC%2BMR0aPILRac5bc8lsXp4PfMcASOoAMNBEC1zkODX4qRt%2B6hb4q3a9quKyT9srkD4jdIDfiBXekDCy8M6iuIkhjVHuBQKjDEtuPFBjqkAWWEs7TyH23590gB3LEZDehBx4dHiXiZy5JHhbapvVHpvqNdz6hdvDI8nGhRfNGHK6YsrDjxh9RUtQareya%2FWRCKdhVjwEjTdw9XV%2B0X%2Fb5SbCleSFjNktD9ofPkUoh3BIWXRg6wvy%2BVlnvpAPkE%2FNTl1DKvJMPu6%2FzmP861nFRtvnJIvglgi%2BvVqSGAPXv1%2FNy9RkpA8BJLH37Y%2F%2ByJBDKf%2BYRH&X-Amz-Signature=fd34246c5c957eefb1e3b30e54321b627aa166f3f64297f9f67051b480e76a72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA5D2RPU%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2qe%2F1EW6qX6OlObFlnRnhS3qjuYNDsaa0mh1P5KysawIhAKJniOZO1r3P%2BzXIcWUb4Z54uz2G9cQQu%2ByaHG%2FxSb14Kv8DCFEQABoMNjM3NDIzMTgzODA1IgxRCa0BpyHs6UMtWBkq3AMyQlkKFzIzkNnawWCsiLpAFkhTOpLgKxZo2UwO7mPQ3TFDvyQWTC6gWOjALWBMhC2KrI23cThIs49KKCOTe9ZecgDtdU2FBhQyQMs57M2G5Qci%2FQyIEyAmc2L0u5ljKd7RsZUgnexWJgUudmmSw7SAxt%2BocMSR52220%2BltNaEAuIsTEBbyg2V3NiuHX7USu332vJUTpLHa%2FhePvpINsDyK58Uq509DAia7cK7cumdolP2u0qQUngk3eWk9G6oexY%2BvGAcFc0XTubxHTPgE08PoIM2h%2BqsDY1MfR5stWWWTVsWImDMrJbY%2B%2Ft90JAFgbylMqO6umSSVPxQc11SMUPShKpdliqmt%2BJzGue6XJvcwwAUCAMLCrfVQLYAGBmm78xQWuD%2B4s3%2BTjYqyLEQXSwyqT8LBnHqlzkZexF7osOYnq4OJ7R%2FjxKcrJP35eX5Sk1wXpKF8Jzlo%2BI%2Bnjm5QSyqw40ucB%2BHyV1FYCKD9Sctuw%2FacEPV5a5WaQFlM6AEyIPvVSskPUzbbQ2142XXBVf8GOv%2FWG%2FH%2BC%2BMR0aPILRac5bc8lsXp4PfMcASOoAMNBEC1zkODX4qRt%2B6hb4q3a9quKyT9srkD4jdIDfiBXekDCy8M6iuIkhjVHuBQKjDEtuPFBjqkAWWEs7TyH23590gB3LEZDehBx4dHiXiZy5JHhbapvVHpvqNdz6hdvDI8nGhRfNGHK6YsrDjxh9RUtQareya%2FWRCKdhVjwEjTdw9XV%2B0X%2Fb5SbCleSFjNktD9ofPkUoh3BIWXRg6wvy%2BVlnvpAPkE%2FNTl1DKvJMPu6%2FzmP861nFRtvnJIvglgi%2BvVqSGAPXv1%2FNy9RkpA8BJLH37Y%2F%2ByJBDKf%2BYRH&X-Amz-Signature=ccb526ab5f6c235994e384706f3750dfd8c09a9e82cf188a660c398259ee13c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

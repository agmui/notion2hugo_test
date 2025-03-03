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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CUREPUI%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T220742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDn0%2F8gPNB9ZluSJZPnhslC6l%2F0BQprxyFXKsqujbu%2B6gIgFKzjlcasXIwh4Ze5Pzsjmcwva5vHaTPP3L9Dha3I%2FK0qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8OZ9r1jYsDD%2FivoyrcA8P6hnYEEjIacRADFQiid0r5LZBKY5xQ20c0CKgrH%2BKCmMfw%2BLALtdZepy7Kh1Ox1VuHouVndaRHkDTM1b2Ru3vSfCgWR7XaDTI4AQFOxwB5P6oGfppzJq0Pq0d3RD%2BuoRtFE7COXmiOFG22bbuwteKsqL%2B0qAnX9aUL9sym4%2Fp6AuFATKzzJCO0mgM9Xq4bRkoCNMtPJcrU284130%2FXcSmGxozDsXXRIMXfEWMEnXFAuna7uUgyUPtZpgfnxuRcWMdZSu3HcdVYVpyU0CtPkZSXJgMrlEuTaXLJElVlpXlpAsCSesMsroMkRG1hBWuwXa00%2FusO5OUWaaRcTTxXNvOnSMWRE7YmdX6eZIKzq00C0KTHmCZ2wo4dVs41PuUnesyiiFbSSyCOQXJpkoR3Q0S11r1tUVa745oOD1y%2FiFNoFWShDgQdyqPmX%2FfryjG8u72pn7bSqWiuIw6%2FIu1JkBsi4l%2FGZFQITK4OEqlw4G2E39hKtS1eu0SwCJLCxVw5eDF6MTIOPz5voCRAYO2sxpI3G6kI0g2PAYaYg1lWv8y1MducwxgsW%2BTlZRpRZBnIdItHWuTl0gmE6rCNkWUH84LTTWAK78yHzXV%2FLZGJI3T2OcqW4w9%2Bb8oN%2F1HjMNq5mL4GOqUBP7UI3oysg79hgkJKjR3aLxuzW4XX9N%2F%2B%2BYQrGp%2BLWThFbaQsAdZ4heFnCpXTuUFUnKGT%2Fp6rwacL0wLyAJfolK6ru6FtPLURYnXnKDHWPBZwzzl%2F7WII7bL66fH1VFqZNjJDcgU4RLskJCMQMC4C3YmXck9NdUDtrG12dkYpmyWYMkOnC26f%2FTIaefkh49jfzOyGkESLtzP37NEoHPwotnUpLbX%2F&X-Amz-Signature=b872d0b8a662c9b9d224884f2a6f51330bacd4c5acacb022651fc809f08d8f89&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CUREPUI%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T220742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDn0%2F8gPNB9ZluSJZPnhslC6l%2F0BQprxyFXKsqujbu%2B6gIgFKzjlcasXIwh4Ze5Pzsjmcwva5vHaTPP3L9Dha3I%2FK0qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8OZ9r1jYsDD%2FivoyrcA8P6hnYEEjIacRADFQiid0r5LZBKY5xQ20c0CKgrH%2BKCmMfw%2BLALtdZepy7Kh1Ox1VuHouVndaRHkDTM1b2Ru3vSfCgWR7XaDTI4AQFOxwB5P6oGfppzJq0Pq0d3RD%2BuoRtFE7COXmiOFG22bbuwteKsqL%2B0qAnX9aUL9sym4%2Fp6AuFATKzzJCO0mgM9Xq4bRkoCNMtPJcrU284130%2FXcSmGxozDsXXRIMXfEWMEnXFAuna7uUgyUPtZpgfnxuRcWMdZSu3HcdVYVpyU0CtPkZSXJgMrlEuTaXLJElVlpXlpAsCSesMsroMkRG1hBWuwXa00%2FusO5OUWaaRcTTxXNvOnSMWRE7YmdX6eZIKzq00C0KTHmCZ2wo4dVs41PuUnesyiiFbSSyCOQXJpkoR3Q0S11r1tUVa745oOD1y%2FiFNoFWShDgQdyqPmX%2FfryjG8u72pn7bSqWiuIw6%2FIu1JkBsi4l%2FGZFQITK4OEqlw4G2E39hKtS1eu0SwCJLCxVw5eDF6MTIOPz5voCRAYO2sxpI3G6kI0g2PAYaYg1lWv8y1MducwxgsW%2BTlZRpRZBnIdItHWuTl0gmE6rCNkWUH84LTTWAK78yHzXV%2FLZGJI3T2OcqW4w9%2Bb8oN%2F1HjMNq5mL4GOqUBP7UI3oysg79hgkJKjR3aLxuzW4XX9N%2F%2B%2BYQrGp%2BLWThFbaQsAdZ4heFnCpXTuUFUnKGT%2Fp6rwacL0wLyAJfolK6ru6FtPLURYnXnKDHWPBZwzzl%2F7WII7bL66fH1VFqZNjJDcgU4RLskJCMQMC4C3YmXck9NdUDtrG12dkYpmyWYMkOnC26f%2FTIaefkh49jfzOyGkESLtzP37NEoHPwotnUpLbX%2F&X-Amz-Signature=355d72c9fc87fcd33d1369764017c31780e59c6bc92b32a8c3b99115aa2cf2ab&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5JDH7NY%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T061026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIEXYnhMjMVO3Pp68yRIOUD7bYlyop4XsRDa7wXsB%2BaTMAiAf9JhfqaTjNBhmHKhjbeAivXlBkQLgzVcXW9g1xPT79ir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMvZMKLla2554YJlICKtwDkhL8S5Eh5o03S2zuphhVxSpfI7M3hupxHJRmGQa8Rux5eGcdV0PqoWsLyYDa5s4HjvoGIYITgMYNa3QL%2BYrZDJGID6StdtsTFMoUR9WZ62YLJHXz%2Fc6hmmC3WAbH13aGXXH1APAiip9xyKDusBg2wYvuXngGHazdHWkYmh1YB%2BTdXSdJ8%2Bcd9O71NGC4cD2ULJ3WSdLE4Rj3B0C90qhWsI4XYQKnHQtYb1JlMIKImSyQlwpdv9LbmPnCNMkFADqVujEJ9vt%2BM%2FARcOj6qtd%2BhZAlOC8u6xbyltSvDzwB08cgHFQWOCOzxOaXBA%2BxEvfpoMwbfHuWW92pB8f0IyBbMkLO4YqqOf%2FsONUv%2FrDS9bjc3K6WOIyvUxI1oiGVkE9eS0uZxK%2Flgjr8muPs4Acli6O9sRh%2FqiRnBpeDAJA8RfF1OrktOgjOnZwwm2RRS0%2BbhvNGNOt5YhQJZeynQp2e6ciADonZYaqRQleIV9%2BS%2B%2BrhiLc4X1pJ1PZS9inGfF9hdbi4mgvvh6AJ8g1xslAt%2B%2BRggHM2iUBUzYVlU5RoK%2BfTEeRPtWd1v0DMc0lzSU7%2FkNSYj1I22MisjpjWYP1Cu%2Fkl4W9ppXqoKQiQ1FdVDFi3uPsOShm41aoMnuswtJCevwY6pgHt1SLurWM9WWULJpsiHyhMgc2LLzm3XM8Z9Q4huQrIoc2RbAEBp3csEoxX7k2m%2F923UHpWCz6OuwJW2%2BP%2Bd6xLeM2V4atrSkvAfuAhcYwqL9LLdzpPjJG48svWHrpxgRrzvW%2FSK%2FSTen2TN1YjZz3hO%2FpPDpV2S30pmvazVOxxfOgxiaqYrrtp1np86ZPq0SfYzIyRZ3xxU4PoSSJHLbdCEVFOvI%2B4&X-Amz-Signature=ef940ea711f63cc256bfa09c757094f9392270b529ffb62a6e89e1bfbbd66e40&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5JDH7NY%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T061026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIEXYnhMjMVO3Pp68yRIOUD7bYlyop4XsRDa7wXsB%2BaTMAiAf9JhfqaTjNBhmHKhjbeAivXlBkQLgzVcXW9g1xPT79ir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMvZMKLla2554YJlICKtwDkhL8S5Eh5o03S2zuphhVxSpfI7M3hupxHJRmGQa8Rux5eGcdV0PqoWsLyYDa5s4HjvoGIYITgMYNa3QL%2BYrZDJGID6StdtsTFMoUR9WZ62YLJHXz%2Fc6hmmC3WAbH13aGXXH1APAiip9xyKDusBg2wYvuXngGHazdHWkYmh1YB%2BTdXSdJ8%2Bcd9O71NGC4cD2ULJ3WSdLE4Rj3B0C90qhWsI4XYQKnHQtYb1JlMIKImSyQlwpdv9LbmPnCNMkFADqVujEJ9vt%2BM%2FARcOj6qtd%2BhZAlOC8u6xbyltSvDzwB08cgHFQWOCOzxOaXBA%2BxEvfpoMwbfHuWW92pB8f0IyBbMkLO4YqqOf%2FsONUv%2FrDS9bjc3K6WOIyvUxI1oiGVkE9eS0uZxK%2Flgjr8muPs4Acli6O9sRh%2FqiRnBpeDAJA8RfF1OrktOgjOnZwwm2RRS0%2BbhvNGNOt5YhQJZeynQp2e6ciADonZYaqRQleIV9%2BS%2B%2BrhiLc4X1pJ1PZS9inGfF9hdbi4mgvvh6AJ8g1xslAt%2B%2BRggHM2iUBUzYVlU5RoK%2BfTEeRPtWd1v0DMc0lzSU7%2FkNSYj1I22MisjpjWYP1Cu%2Fkl4W9ppXqoKQiQ1FdVDFi3uPsOShm41aoMnuswtJCevwY6pgHt1SLurWM9WWULJpsiHyhMgc2LLzm3XM8Z9Q4huQrIoc2RbAEBp3csEoxX7k2m%2F923UHpWCz6OuwJW2%2BP%2Bd6xLeM2V4atrSkvAfuAhcYwqL9LLdzpPjJG48svWHrpxgRrzvW%2FSK%2FSTen2TN1YjZz3hO%2FpPDpV2S30pmvazVOxxfOgxiaqYrrtp1np86ZPq0SfYzIyRZ3xxU4PoSSJHLbdCEVFOvI%2B4&X-Amz-Signature=4e4e610826fa61a84e1d1d4fea165c0262aafd1b98aa9c6e07285f08318151ee&X-Amz-SignedHeaders=host&x-id=GetObject)

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

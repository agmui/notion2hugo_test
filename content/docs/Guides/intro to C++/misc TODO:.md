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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCF47MEN%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T201011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHfDd7Lsc78NB5%2FvNtSRo%2BWWYJwDCfZ%2F1%2BSt5iBr0is0AiBysnBRHTbYyyP%2FxUUnJK5ZdGyuiwkGPKiIdKo7%2FRDcQiqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFdj%2FCDyAJWWLab9jKtwD%2FKu4bBOghDioRT2NKbT2hkFuIK%2BVxdO2c3HTvgmnL7g9RoPA%2BmtZSc2xymAlQpEa%2B7qX%2F0sLa6kFurLdQH9B0H8Jo7ONIQ2VDnXfBBEgiFqHGsRIR5ACyUjGRfR5kSSoaA0LrgSIFFwONWwKZH8UFKSGAcQ7gIHgWwESSYqw%2BmNEe4lG48RVKtHW6pns1HfhIiO3y40SEKxSCK6Xj1ZPvgzFwyAfqyJB3JFsU9q5mLGoyee5wRkhzQV2k8I4MDZ%2BqtcEtCyt%2Fg6ODZNK04xDpSch%2FzmuMSeYNproJllbdx9bTqri99eM%2BmwoFP%2FiOF1WWrpGNL5epJW2Mb6wI6nuow9yNP4mbBrbP%2BW6a6FO5vFwjZ%2BJmYDw%2BsNTQy1WfZ%2FuiTWU8o2RnFeo7OE7%2FeBgrFCJWQ9257Tr4nyCKuMiTW%2BGX%2FMmpeob3aXRN0ThdlfatgJXqjXE%2FI4onQL7f2QUeEEHnuAHGCqkGjAqpwRiGfn%2BWxpKGZ12ZoB%2F9B1aPwMvQ36%2B2SJGvn9fj24O3VAgnAsptuIoB8QoBENbWIQzOOlYm61tmJWq7v901bDnOvRGcO09Csrauxj%2B9nZEGspqUv7mtvDOLEf5cURREtw18WYDnY0Liwd%2FEQlUrZQwm7L6wwY6pgGR0y44RqUsoB4H6Uox5KhQxVOoHaQKXMGodUPelI0eAd1KxBOPQ3dHMHD%2B2o2gEIpplQPieNaAlcWsu4DqnGilRDDqWDte5BeEP2WKDqX9en2GerJ51VyPAqqQRv92aRUKShVDmxnT57%2B2wbPElHw0NthiPHHHvQhhJiad3kGqdw8fv3TDCFXWGPqVXQwwgUfMZ%2BokLi3%2FZDMCvHKgbQ7hWf2Id%2BR3&X-Amz-Signature=3233b35b6c73d957ea046b7e54241807aed22f102defbd21d746a3c502ec6dd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCF47MEN%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T201011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHfDd7Lsc78NB5%2FvNtSRo%2BWWYJwDCfZ%2F1%2BSt5iBr0is0AiBysnBRHTbYyyP%2FxUUnJK5ZdGyuiwkGPKiIdKo7%2FRDcQiqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFdj%2FCDyAJWWLab9jKtwD%2FKu4bBOghDioRT2NKbT2hkFuIK%2BVxdO2c3HTvgmnL7g9RoPA%2BmtZSc2xymAlQpEa%2B7qX%2F0sLa6kFurLdQH9B0H8Jo7ONIQ2VDnXfBBEgiFqHGsRIR5ACyUjGRfR5kSSoaA0LrgSIFFwONWwKZH8UFKSGAcQ7gIHgWwESSYqw%2BmNEe4lG48RVKtHW6pns1HfhIiO3y40SEKxSCK6Xj1ZPvgzFwyAfqyJB3JFsU9q5mLGoyee5wRkhzQV2k8I4MDZ%2BqtcEtCyt%2Fg6ODZNK04xDpSch%2FzmuMSeYNproJllbdx9bTqri99eM%2BmwoFP%2FiOF1WWrpGNL5epJW2Mb6wI6nuow9yNP4mbBrbP%2BW6a6FO5vFwjZ%2BJmYDw%2BsNTQy1WfZ%2FuiTWU8o2RnFeo7OE7%2FeBgrFCJWQ9257Tr4nyCKuMiTW%2BGX%2FMmpeob3aXRN0ThdlfatgJXqjXE%2FI4onQL7f2QUeEEHnuAHGCqkGjAqpwRiGfn%2BWxpKGZ12ZoB%2F9B1aPwMvQ36%2B2SJGvn9fj24O3VAgnAsptuIoB8QoBENbWIQzOOlYm61tmJWq7v901bDnOvRGcO09Csrauxj%2B9nZEGspqUv7mtvDOLEf5cURREtw18WYDnY0Liwd%2FEQlUrZQwm7L6wwY6pgGR0y44RqUsoB4H6Uox5KhQxVOoHaQKXMGodUPelI0eAd1KxBOPQ3dHMHD%2B2o2gEIpplQPieNaAlcWsu4DqnGilRDDqWDte5BeEP2WKDqX9en2GerJ51VyPAqqQRv92aRUKShVDmxnT57%2B2wbPElHw0NthiPHHHvQhhJiad3kGqdw8fv3TDCFXWGPqVXQwwgUfMZ%2BokLi3%2FZDMCvHKgbQ7hWf2Id%2BR3&X-Amz-Signature=c219717be679daa7b60bd3d4bd8e0bf1c889f33baafc6448670c1892df530d8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

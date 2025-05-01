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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKEB4CIM%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T070917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIAUOOks%2FT6m64FF4MXwd9mLpoLlerIsSGH4etoNSnbx7AiEAjKVBQxY911NsXyb9VoI%2FRkRIyhdBdiARA12xBmivVgUqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUy1575%2FzDHWSNXsircA%2FXcvETxY%2Bo7H42FjckEctaktZJ7Je%2B89qM4XG9272Aa2cJQg3Eyyhh%2BVBB3Ze1ve8JW5Xn6W0bVDf6un0rPkSSASR4%2BgXodMSVqJgQvl4Kz0wBwmdwe4089jKVBJa5HS%2B8eiFjgS%2FPWYjlw1Mtio95VsJiSqAywBj7junj64tAxPkeZoKZ%2BP8UO8v6cWwehAMdZSKl9aaOhHoNst9BjUSoIfQyqoDJgw%2BStWY%2BAO32%2BonJZ0HueODbGqOvS4s7pTvfKivCcm7Y1pxgfs2UnFUN6N%2F3GCZ434W9kAnpPZJvp1l1wmOba32eWJDXc2NOX3pWBmBq6qW3xkhqK52CUr9yIQ5kg5CtEVKzjWKTXFLe8TTNEUATvmkinOQxZ%2Fqevk1Y%2BpZfRrNcbrkwjN2rZtykWi9l8Caask8oNNOOu35YSuHM%2BkQCTMvC7wt3nkDD4RKUsMwDgzaiUBnNsMtqq6i9ubz4CYS3hm6wBOCxIoAZzIMbsYe89g1MInBycIlmPJU9iOsy%2Fh3QfPa%2F6YxfkrObj2%2BfOSuQ%2B00DM9QSF%2BZ%2FWmdADrar6%2FJNmrPINyuBJeUSM1eaMZQyws6Kgt1TszZGDF4B4JBZ0zjRGIqrhzXpft962SDKlpagifeXCMJKxzMAGOqUBBM2D7%2FnbPaoAvJTPeiDOw%2BeowXkfJaQOJbOZ8MJkwwApCwOfa03Uy64%2BS6uNPZzGRH%2BZvBXTZh0Lindptr3GP4cacQZQZ%2FwJTRrZVArcUKdCE4pAA6NbvyC6sDBK9ZU8YJqUOj472O3jDbpAV%2FrQuS13nKsuWaDWFhfIiRVbVRd0LhN4BK3B4%2FjARVppOhlPDAEdV3819H0%2FM%2F9vJHBkGmqK76gn&X-Amz-Signature=e8884c9b417b10772ecc7b15f1594410d7a4b55dbce1196d822641c47d57f2aa&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKEB4CIM%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T070917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIAUOOks%2FT6m64FF4MXwd9mLpoLlerIsSGH4etoNSnbx7AiEAjKVBQxY911NsXyb9VoI%2FRkRIyhdBdiARA12xBmivVgUqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUy1575%2FzDHWSNXsircA%2FXcvETxY%2Bo7H42FjckEctaktZJ7Je%2B89qM4XG9272Aa2cJQg3Eyyhh%2BVBB3Ze1ve8JW5Xn6W0bVDf6un0rPkSSASR4%2BgXodMSVqJgQvl4Kz0wBwmdwe4089jKVBJa5HS%2B8eiFjgS%2FPWYjlw1Mtio95VsJiSqAywBj7junj64tAxPkeZoKZ%2BP8UO8v6cWwehAMdZSKl9aaOhHoNst9BjUSoIfQyqoDJgw%2BStWY%2BAO32%2BonJZ0HueODbGqOvS4s7pTvfKivCcm7Y1pxgfs2UnFUN6N%2F3GCZ434W9kAnpPZJvp1l1wmOba32eWJDXc2NOX3pWBmBq6qW3xkhqK52CUr9yIQ5kg5CtEVKzjWKTXFLe8TTNEUATvmkinOQxZ%2Fqevk1Y%2BpZfRrNcbrkwjN2rZtykWi9l8Caask8oNNOOu35YSuHM%2BkQCTMvC7wt3nkDD4RKUsMwDgzaiUBnNsMtqq6i9ubz4CYS3hm6wBOCxIoAZzIMbsYe89g1MInBycIlmPJU9iOsy%2Fh3QfPa%2F6YxfkrObj2%2BfOSuQ%2B00DM9QSF%2BZ%2FWmdADrar6%2FJNmrPINyuBJeUSM1eaMZQyws6Kgt1TszZGDF4B4JBZ0zjRGIqrhzXpft962SDKlpagifeXCMJKxzMAGOqUBBM2D7%2FnbPaoAvJTPeiDOw%2BeowXkfJaQOJbOZ8MJkwwApCwOfa03Uy64%2BS6uNPZzGRH%2BZvBXTZh0Lindptr3GP4cacQZQZ%2FwJTRrZVArcUKdCE4pAA6NbvyC6sDBK9ZU8YJqUOj472O3jDbpAV%2FrQuS13nKsuWaDWFhfIiRVbVRd0LhN4BK3B4%2FjARVppOhlPDAEdV3819H0%2FM%2F9vJHBkGmqK76gn&X-Amz-Signature=9b17992ae740cb11c79542fb50b960d7aa9eb2ae60b61e6f51ee99ec0b25fc9d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

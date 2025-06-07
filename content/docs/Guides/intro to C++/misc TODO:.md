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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE3ZJJDD%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2B3fUglekan98dDahhngTaEmOOznWPh0eN%2BdJjqFljxAiEA4d8QTUe3J3FykW2R7ks8s%2F1efo18gGqYUl0D8yQA%2FgYq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDMTxj0%2FLbJce0bV6YyrcA4DwvYrVabQ2RT7KaAsoteVbD0FrMUfqs5ZpVB5Kq2dmLx8x%2BQwvS6ohFbAmWAgNZDSLW5GqzcktO9TPt86%2FSAP6qd4gAAgW1o67sC%2FfeG5PoK43CxHjZ%2BB8BCrvHeNatEJLoQf%2F5cKZWv4uNF8gBfzT01dyZM4A6QfEoLLKuWzr4w0IFWhjiSN%2FWdH%2BLfAfbUizWfwLEjl6WMfxulGCo51B%2F27m0nzRC3KHyU0gtokd3cCOgo2TYOSBVuolWHPpHMzXJpU3w0wHlWUAkA4wi616wvLTemPSPJvex9hn6uCJYOgQ3z6YpwuR8R32pSF8WJeMsFRNfngArlBySan2bFYKTxtymS%2Fh8Q9x6HXboFb6Yo91%2BUm2cz5Ak%2Bbex0hM79fVOObatXWpBSI7e2BORBktZZTgUzntqHXd%2FMKgUfobc7ipmcZCXiE4i9Zvi5KGAVWBBMSwHXqSGX%2F5QQg8OKz3PnIDFiG5Vr7z%2BWcJerJIirm6SMHX2ej3x2j4Nrynj6a1wWstfMkUekrZCOCPnJIubJAiQUFZ0oZodrKFT9Eaoh7sD5pfU%2BOJ%2FiKIvZCZ2g2%2BJYVqiqXtsC0ZTdY%2BX7SCSCBbU%2BcI2rhDRtX4wyZy5Ysv5OdTNdNXoi1HMMCVksIGOqUBQHmptOaGD6lps2RsyeOB6jxkgg%2BPNJTvV%2BcNKzgPMQ1kZF7z2L4s40Vd74C%2Bsx%2BStrAIk5UmEA1nnc1nqZzli0GshWEg0ALwAsx2C8r6XZoYlM0TMS4APmv%2FfgqUs2aPFqGJNmswRIz9cYPFPC149LjWwkRby7n9y%2FKliRt5LPjNkihfHdWUrwTPvbbO9A4wbDJ7M%2BODEku7lXDi2d2NA%2BRxAkS5&X-Amz-Signature=f5259a1619d8680cf888336cfd96bb50b0e49bbb2436ebfb96c6d841507c4061&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE3ZJJDD%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2B3fUglekan98dDahhngTaEmOOznWPh0eN%2BdJjqFljxAiEA4d8QTUe3J3FykW2R7ks8s%2F1efo18gGqYUl0D8yQA%2FgYq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDMTxj0%2FLbJce0bV6YyrcA4DwvYrVabQ2RT7KaAsoteVbD0FrMUfqs5ZpVB5Kq2dmLx8x%2BQwvS6ohFbAmWAgNZDSLW5GqzcktO9TPt86%2FSAP6qd4gAAgW1o67sC%2FfeG5PoK43CxHjZ%2BB8BCrvHeNatEJLoQf%2F5cKZWv4uNF8gBfzT01dyZM4A6QfEoLLKuWzr4w0IFWhjiSN%2FWdH%2BLfAfbUizWfwLEjl6WMfxulGCo51B%2F27m0nzRC3KHyU0gtokd3cCOgo2TYOSBVuolWHPpHMzXJpU3w0wHlWUAkA4wi616wvLTemPSPJvex9hn6uCJYOgQ3z6YpwuR8R32pSF8WJeMsFRNfngArlBySan2bFYKTxtymS%2Fh8Q9x6HXboFb6Yo91%2BUm2cz5Ak%2Bbex0hM79fVOObatXWpBSI7e2BORBktZZTgUzntqHXd%2FMKgUfobc7ipmcZCXiE4i9Zvi5KGAVWBBMSwHXqSGX%2F5QQg8OKz3PnIDFiG5Vr7z%2BWcJerJIirm6SMHX2ej3x2j4Nrynj6a1wWstfMkUekrZCOCPnJIubJAiQUFZ0oZodrKFT9Eaoh7sD5pfU%2BOJ%2FiKIvZCZ2g2%2BJYVqiqXtsC0ZTdY%2BX7SCSCBbU%2BcI2rhDRtX4wyZy5Ysv5OdTNdNXoi1HMMCVksIGOqUBQHmptOaGD6lps2RsyeOB6jxkgg%2BPNJTvV%2BcNKzgPMQ1kZF7z2L4s40Vd74C%2Bsx%2BStrAIk5UmEA1nnc1nqZzli0GshWEg0ALwAsx2C8r6XZoYlM0TMS4APmv%2FfgqUs2aPFqGJNmswRIz9cYPFPC149LjWwkRby7n9y%2FKliRt5LPjNkihfHdWUrwTPvbbO9A4wbDJ7M%2BODEku7lXDi2d2NA%2BRxAkS5&X-Amz-Signature=74b0315dd82808d32a559f33191ae1c7578680839bb5328ca3a2e709f19899f7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J3HYLZZ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T041042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Fs9dbYETSffSfjDVEx2ogt1kDlljcbNNKyvDO2uEMTwIgboaUZ%2Bfp3ZsIiSOK8LgunqNMJ%2BMm50iVgtrp1MTjvfkq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDIqquC7rQu09em9z8CrcA4m96mCCFODdzYwDn2pFiZvRoo3x%2BY0rrpnKMnFgKfPkOAD9SU2ZE81lpiL0bPhQ9eYyXB7kcMEOZAn71PsyDoJKv0YHk3kO5slLC6Vm9GLILx6%2Bb2dnfS9iiPm4YqdHEpzCg9kC4D3Ku6QxALkVo%2BBM7iE8PdJv79x79qn%2ByYJSiEog4etRykC5GJwiqxjTPXDE8VMD4ISTs7%2FlUMdgaiepa8%2FHs5qb7UTwnmsoJFE%2FA9h778VWjsf41v6gfD678KuVkQptkY%2BgjjizwNkzPrTvx5iWLqBF865AzzQbsSe6iX3ZYnPy%2FZAV9l7DdDOueQDzVaD%2BOcRsmU8tsdu5JCmKH0w48UXXJXe041lPAxAzHHTgIiK4XyvvNWwagTW4UKQfmagjbUup0QzjaZjfHSoIsUyjXNlnC2a2wUEoegvtCQ5gHzDo56V2LfDuyHZc1YqfiOg61ndwQWwhyvBcDPRqhGGSMO81XKE6VKytct%2FGHpavNsiLYWxVZv4BCkZUw9Ubq7QspJrlgkVNbaTa6h%2FHpBvkBeWYmgn0OiOiG7sU591otlEmFX4PhzdmVSGgFwqipnR3801pRS0MLoFMKhfawh9n0FqFtRrJm8tUSN5ShqP4%2FCJGj4wCHxaLMOiOh8AGOqUBSIrSD2w50%2BIk6ATrnSnZuNNVScv6s%2F5XZDcEm76%2Fvp4jkYWDr%2F7mAmP0jVBLgmNrmsebnBpyH%2FexTZsFm6NVQYCevowFbEhL3YBt%2FueZuUlG2kySTXklzvHCuoL42Hhae44EAfK12QftWDIR%2BD0L9kFp4tIbGVZN4rJ%2F6nLQsK0Cl97CpYGLcDznvwGUcqkSkKurU9HiIox8AUwF5vRuOuwN00Ua&X-Amz-Signature=ebe7ecc71b073c264b026579676b8fc975905e858c1d69fa72708e843241d677&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J3HYLZZ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T041042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Fs9dbYETSffSfjDVEx2ogt1kDlljcbNNKyvDO2uEMTwIgboaUZ%2Bfp3ZsIiSOK8LgunqNMJ%2BMm50iVgtrp1MTjvfkq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDIqquC7rQu09em9z8CrcA4m96mCCFODdzYwDn2pFiZvRoo3x%2BY0rrpnKMnFgKfPkOAD9SU2ZE81lpiL0bPhQ9eYyXB7kcMEOZAn71PsyDoJKv0YHk3kO5slLC6Vm9GLILx6%2Bb2dnfS9iiPm4YqdHEpzCg9kC4D3Ku6QxALkVo%2BBM7iE8PdJv79x79qn%2ByYJSiEog4etRykC5GJwiqxjTPXDE8VMD4ISTs7%2FlUMdgaiepa8%2FHs5qb7UTwnmsoJFE%2FA9h778VWjsf41v6gfD678KuVkQptkY%2BgjjizwNkzPrTvx5iWLqBF865AzzQbsSe6iX3ZYnPy%2FZAV9l7DdDOueQDzVaD%2BOcRsmU8tsdu5JCmKH0w48UXXJXe041lPAxAzHHTgIiK4XyvvNWwagTW4UKQfmagjbUup0QzjaZjfHSoIsUyjXNlnC2a2wUEoegvtCQ5gHzDo56V2LfDuyHZc1YqfiOg61ndwQWwhyvBcDPRqhGGSMO81XKE6VKytct%2FGHpavNsiLYWxVZv4BCkZUw9Ubq7QspJrlgkVNbaTa6h%2FHpBvkBeWYmgn0OiOiG7sU591otlEmFX4PhzdmVSGgFwqipnR3801pRS0MLoFMKhfawh9n0FqFtRrJm8tUSN5ShqP4%2FCJGj4wCHxaLMOiOh8AGOqUBSIrSD2w50%2BIk6ATrnSnZuNNVScv6s%2F5XZDcEm76%2Fvp4jkYWDr%2F7mAmP0jVBLgmNrmsebnBpyH%2FexTZsFm6NVQYCevowFbEhL3YBt%2FueZuUlG2kySTXklzvHCuoL42Hhae44EAfK12QftWDIR%2BD0L9kFp4tIbGVZN4rJ%2F6nLQsK0Cl97CpYGLcDznvwGUcqkSkKurU9HiIox8AUwF5vRuOuwN00Ua&X-Amz-Signature=03473b94da6d4800c103c1779099e326a388d443c2ebad6cc9a573f5a75af2db&X-Amz-SignedHeaders=host&x-id=GetObject)

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

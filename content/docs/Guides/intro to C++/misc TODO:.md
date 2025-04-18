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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TTX6RDZ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T050854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXThkgMfE8SlZ%2BiSjTMEEmYoEwvK3VoZJPSXk9bf7lnQIgT0SYGODmxT8%2Ft3jepMZ7LmHoiL0CqSM5s4T5nXEPnkkq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDOjuu1QXBlIKBLJWLyrcA4wYSqAIk6QaeI%2BfH9RqCmyKcmZDBrwu%2B%2BPkSYhZpUGj5Al9jgWw2nt%2FQr4eVDlFwmEsmcLoQ%2F%2F8bcd3rd4BDeExW49zSbnLLrvS7VC5JnRFyK%2FW%2BesknlE7xDHOSSOatAu7nXh2dGBiyV8B6iC6YjmtJo%2F4Eq29FfE9I3sYC1rH9kLsZ4SkiBfXzBXIlahcm1we25D8gya61WN2nTVOGvAg5kvLCOh4puWo44gnhZ95mli%2FlLqxh%2BNcQk0rMVGI90gzmFLxAvRim7sUkQPdR1gcus%2Bq0ZiP2qIxUQgyZAbfwvZSVtEUsdDalicGmXaZnuTBrESoVPMLXlYTWMvqKizaPllrHcq6BsmrQF8wv2bltwGJfnG%2BZRvTKna7QhbJ8Gjzp8aQIcpolkD0xQ%2B6bFAnyy2BhcYN1%2FXNW0SPp7V5eU50mJhq9VqLJApaeJ86Uz118ogdDvIcAkMiaakYYo7qnK1QmP5w%2Fd8EP32cczmNoWLJre7ERVwPyanmflAgcqIx1GoI5dgKd8VmGrrK%2BqgFqUD%2B%2BiBYWHDDHospNG%2B2YNLXmHrK7pQm3Npg5UPeJc%2F2iy0ocuTetTpZNFRn1V9G6WOmbdaiBcm3Qexb70kcRW6d8myqZk1GW%2FaKMNOph8AGOqUBRLtReKke8xy9eIcPGOICXfPT4%2BiYWa3eip9QAKwW4LQoRuEaVbphGox9ZujgkRV%2FZOYfpjmwFOrXBMXQyHiI6Sv2cOnnYs37sobDyVmNXcITgsrteqJ3gsuzhir8UUovN2eCjhHAkiGBx%2BkYk0hAaG1C007vD4g%2By%2FOnuVPbIdJSoQCTAmPITIvnFyvek9%2FzN6jn977X0%2BA%2FwHO%2FicW%2BZJl%2FC%2BWr&X-Amz-Signature=d89d23cc6a5201abf7e4651d43ec0df6fe831b76c86893df9f6a25312143d7fe&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TTX6RDZ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T050854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXThkgMfE8SlZ%2BiSjTMEEmYoEwvK3VoZJPSXk9bf7lnQIgT0SYGODmxT8%2Ft3jepMZ7LmHoiL0CqSM5s4T5nXEPnkkq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDOjuu1QXBlIKBLJWLyrcA4wYSqAIk6QaeI%2BfH9RqCmyKcmZDBrwu%2B%2BPkSYhZpUGj5Al9jgWw2nt%2FQr4eVDlFwmEsmcLoQ%2F%2F8bcd3rd4BDeExW49zSbnLLrvS7VC5JnRFyK%2FW%2BesknlE7xDHOSSOatAu7nXh2dGBiyV8B6iC6YjmtJo%2F4Eq29FfE9I3sYC1rH9kLsZ4SkiBfXzBXIlahcm1we25D8gya61WN2nTVOGvAg5kvLCOh4puWo44gnhZ95mli%2FlLqxh%2BNcQk0rMVGI90gzmFLxAvRim7sUkQPdR1gcus%2Bq0ZiP2qIxUQgyZAbfwvZSVtEUsdDalicGmXaZnuTBrESoVPMLXlYTWMvqKizaPllrHcq6BsmrQF8wv2bltwGJfnG%2BZRvTKna7QhbJ8Gjzp8aQIcpolkD0xQ%2B6bFAnyy2BhcYN1%2FXNW0SPp7V5eU50mJhq9VqLJApaeJ86Uz118ogdDvIcAkMiaakYYo7qnK1QmP5w%2Fd8EP32cczmNoWLJre7ERVwPyanmflAgcqIx1GoI5dgKd8VmGrrK%2BqgFqUD%2B%2BiBYWHDDHospNG%2B2YNLXmHrK7pQm3Npg5UPeJc%2F2iy0ocuTetTpZNFRn1V9G6WOmbdaiBcm3Qexb70kcRW6d8myqZk1GW%2FaKMNOph8AGOqUBRLtReKke8xy9eIcPGOICXfPT4%2BiYWa3eip9QAKwW4LQoRuEaVbphGox9ZujgkRV%2FZOYfpjmwFOrXBMXQyHiI6Sv2cOnnYs37sobDyVmNXcITgsrteqJ3gsuzhir8UUovN2eCjhHAkiGBx%2BkYk0hAaG1C007vD4g%2By%2FOnuVPbIdJSoQCTAmPITIvnFyvek9%2FzN6jn977X0%2BA%2FwHO%2FicW%2BZJl%2FC%2BWr&X-Amz-Signature=232107a9eb0606d33ad4ac29d4430d350ef38f4ebb4def9e9ca5c574cda867fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

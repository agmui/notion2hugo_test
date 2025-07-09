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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJLVTFXH%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbxOT%2FE%2F%2Bn7ArB7wDrneB6ppAhfnBVY4Y%2Bkop2%2B1KBsAiEAho4DtJrK5RBeVWNQIKcPcT3Ji6jx7kerv9lPtUDSvEoqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNSe3Zr8I46ZW32WCrcA%2FmRVhMK7Ii1alXYzVBZjekTOgjsCRMorYPuqjMf%2F1UsKSoD4IdJexjcR%2BnTsyaEb9WCgxXs7%2BZegaVNZ563PRGy0ZLlv8gYpk07OyUSkaeWg1h6b9If6Gze4nL%2F7TFM98%2BHqpEzfYedqsyY9wUF5R6c%2B8wts%2Bnc%2FHGP6Cn9HnXQNCaOGjpHUkpGzTdMzFzOQPlvyN0L8IkUIB%2Fqy2BxNKPtUUAt1Wj6WUs39aKJrSLvrbQ5%2FPRDBEWhZaccKp6Os%2BLtd2qDoZg2S6p2UwpTKzkiduqiAVT%2FlmT217UQ8ihO3JXfriKrhJf3XLCNrUgBTUq4FBcDOkJysIWYAGrEoReOTQouIT%2BPgZXV%2BA45YHn7vWJkXT%2FAketv4f%2BuM1dH7fuxCA0IhUxTHL%2FS9a2QO504jFsbTztw%2FDRKgMSoEG9PeOR7ZWV%2B3npcJ4qvxvrCTvfC9Zx36zf9AmysbkHS6HRGg3pvzraPbNGNgmIiaNF7KclMRL9c3EH662JtYlD5IshhtFGctOGxzN%2BwG6ZfI%2BChSfC9Rm8k7Zh8%2FKjoD52wQ7HjOHgkSoIGU7THyyt4aCWKyALhVds9gI5HusF5izttejVBX%2B5d2zxW%2FKX7GGBVMvvW2ImnlGUhmB%2FeMI3vusMGOqUBM8ZMY8RPqLpZrbZik9dY5kOXo8ndzApmq2f4G99DhhFnP50%2FuIID1s2Vax3TlsTqBv%2B2pioC91CG70g6HPlB7zrNRy%2BPQpbzykrxbbKYBnqEgYkE0T0cUv6tpdkVP%2Fxr9YdZ3ZuKBvc7dCNvOHAB6l4hiyKnLmVlKuYLNpULYyA8c3BaOxUsfsts1AK37zfHYFNmoQqhf6tbFsOthl9Z4VxWZ16S&X-Amz-Signature=afd15233b7b597544cf6083b5d404d016270bad6e6edf4ee8d2e896458793338&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJLVTFXH%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbxOT%2FE%2F%2Bn7ArB7wDrneB6ppAhfnBVY4Y%2Bkop2%2B1KBsAiEAho4DtJrK5RBeVWNQIKcPcT3Ji6jx7kerv9lPtUDSvEoqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNSe3Zr8I46ZW32WCrcA%2FmRVhMK7Ii1alXYzVBZjekTOgjsCRMorYPuqjMf%2F1UsKSoD4IdJexjcR%2BnTsyaEb9WCgxXs7%2BZegaVNZ563PRGy0ZLlv8gYpk07OyUSkaeWg1h6b9If6Gze4nL%2F7TFM98%2BHqpEzfYedqsyY9wUF5R6c%2B8wts%2Bnc%2FHGP6Cn9HnXQNCaOGjpHUkpGzTdMzFzOQPlvyN0L8IkUIB%2Fqy2BxNKPtUUAt1Wj6WUs39aKJrSLvrbQ5%2FPRDBEWhZaccKp6Os%2BLtd2qDoZg2S6p2UwpTKzkiduqiAVT%2FlmT217UQ8ihO3JXfriKrhJf3XLCNrUgBTUq4FBcDOkJysIWYAGrEoReOTQouIT%2BPgZXV%2BA45YHn7vWJkXT%2FAketv4f%2BuM1dH7fuxCA0IhUxTHL%2FS9a2QO504jFsbTztw%2FDRKgMSoEG9PeOR7ZWV%2B3npcJ4qvxvrCTvfC9Zx36zf9AmysbkHS6HRGg3pvzraPbNGNgmIiaNF7KclMRL9c3EH662JtYlD5IshhtFGctOGxzN%2BwG6ZfI%2BChSfC9Rm8k7Zh8%2FKjoD52wQ7HjOHgkSoIGU7THyyt4aCWKyALhVds9gI5HusF5izttejVBX%2B5d2zxW%2FKX7GGBVMvvW2ImnlGUhmB%2FeMI3vusMGOqUBM8ZMY8RPqLpZrbZik9dY5kOXo8ndzApmq2f4G99DhhFnP50%2FuIID1s2Vax3TlsTqBv%2B2pioC91CG70g6HPlB7zrNRy%2BPQpbzykrxbbKYBnqEgYkE0T0cUv6tpdkVP%2Fxr9YdZ3ZuKBvc7dCNvOHAB6l4hiyKnLmVlKuYLNpULYyA8c3BaOxUsfsts1AK37zfHYFNmoQqhf6tbFsOthl9Z4VxWZ16S&X-Amz-Signature=cfb98289b67e8215c8ce28685c06333074e74af3e7506d314a200919b996705a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

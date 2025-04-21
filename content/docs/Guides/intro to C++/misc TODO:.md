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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5RBRZMH%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T190425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQD%2FXllwmBefVPWzuuCP6p%2B6anBKRgpVK4%2BpAAvskpdOMQIhAIlT9gbATMD32VNrr6obLaT4hxocXsUOtCPgNprGWrw8KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9jmJItQ4JtozWbhIq3AOBtSzf%2BlKJejphezoXd5pPsDD23Ce7d2sfJjCEjOCH4a37ccuKE%2BzK%2F00CqC9i91JiS0xSo1FVWds9BUHlIICEqjz2435Y%2FoCotHsBUyPnMOsY9YcJUr1siFfAvtNTMt8SmAHHDgLZAVhZz62sz2NGFzmj33qsowdJCXDiTq%2FRFG9V6OnEtVVfTLIutUzWM9lUR0C28iyOXEobt5I%2FWEOhX8LzuMdgR8OSEFoUAabu%2BHevi6ndaVHBIPQiCDPZct0Wb0IysK5opgNB6JnrQbUX1Vbr62lshfZTlUJPirHqD%2FWmZ7%2FolIXH%2FqQoJn%2B7EiBckgu7ivqLKkkZNGAxJsyjKv%2FISfFBRLnj3ttJU2s%2Fu05vwF08my8wdLj5AbLsXL0Gdd6xBSHeFoAnMQ12OQPrkmuhyV02LlwJ1YXK5gcGrx%2FLnYvJFehEepVDXwusIACYUwu763%2BBSq1EFSJKkKk8GocakCOrIj0b3dDu318QhId1c4lzSfKTWfzhK2F9lEquWgjYpa4m4f73tFWcpOKbNFmCXQtwDyIzf9F8Du4rcAk149A7IDWRzOJeurDtkda4mizzBY5X4GckwDEVRpXSXc6hDdtCMYAfYh8MtmiaDyhL8Xq%2FR0qR53NMuzDxn5rABjqkAd6gYaSN4xvUCDr26YPL2UehWoDz1lL00xVXFNGpRq%2F1WQs1k0JnTbORgGiu2BK5NHDxB5HEzQI6korlYeDQhmS8M8xBJj3DdJ3sbwOiKTTT8ZA7%2FEIvFWdLrYAMv4cItR6xq9RV9%2BZXghQOyerxVe5tRPmZ9sDtmUtWMAWScvJMNDfEi85JgqWcR%2BBPTP4Jmnd8CyckBa7pHf5LQvbHjqr5t5pI&X-Amz-Signature=fadc2a7cf606664640649f64feac4ff29ac983e40ccd106fe35d2d0e2bee5562&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5RBRZMH%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T190425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQD%2FXllwmBefVPWzuuCP6p%2B6anBKRgpVK4%2BpAAvskpdOMQIhAIlT9gbATMD32VNrr6obLaT4hxocXsUOtCPgNprGWrw8KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9jmJItQ4JtozWbhIq3AOBtSzf%2BlKJejphezoXd5pPsDD23Ce7d2sfJjCEjOCH4a37ccuKE%2BzK%2F00CqC9i91JiS0xSo1FVWds9BUHlIICEqjz2435Y%2FoCotHsBUyPnMOsY9YcJUr1siFfAvtNTMt8SmAHHDgLZAVhZz62sz2NGFzmj33qsowdJCXDiTq%2FRFG9V6OnEtVVfTLIutUzWM9lUR0C28iyOXEobt5I%2FWEOhX8LzuMdgR8OSEFoUAabu%2BHevi6ndaVHBIPQiCDPZct0Wb0IysK5opgNB6JnrQbUX1Vbr62lshfZTlUJPirHqD%2FWmZ7%2FolIXH%2FqQoJn%2B7EiBckgu7ivqLKkkZNGAxJsyjKv%2FISfFBRLnj3ttJU2s%2Fu05vwF08my8wdLj5AbLsXL0Gdd6xBSHeFoAnMQ12OQPrkmuhyV02LlwJ1YXK5gcGrx%2FLnYvJFehEepVDXwusIACYUwu763%2BBSq1EFSJKkKk8GocakCOrIj0b3dDu318QhId1c4lzSfKTWfzhK2F9lEquWgjYpa4m4f73tFWcpOKbNFmCXQtwDyIzf9F8Du4rcAk149A7IDWRzOJeurDtkda4mizzBY5X4GckwDEVRpXSXc6hDdtCMYAfYh8MtmiaDyhL8Xq%2FR0qR53NMuzDxn5rABjqkAd6gYaSN4xvUCDr26YPL2UehWoDz1lL00xVXFNGpRq%2F1WQs1k0JnTbORgGiu2BK5NHDxB5HEzQI6korlYeDQhmS8M8xBJj3DdJ3sbwOiKTTT8ZA7%2FEIvFWdLrYAMv4cItR6xq9RV9%2BZXghQOyerxVe5tRPmZ9sDtmUtWMAWScvJMNDfEi85JgqWcR%2BBPTP4Jmnd8CyckBa7pHf5LQvbHjqr5t5pI&X-Amz-Signature=0698d4133506deeab6fb63265505118b2f018cbcf9d0b5571e6f6fc9a504e86b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

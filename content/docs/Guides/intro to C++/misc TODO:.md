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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBD4TKDZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDh%2Fh2wP17%2FcO5KLIHhbqu9GsLCixSsXKW0vih3llqZeAiBJM99iORZ2HzjI%2FBazi1bwlnsmdB0eL9cYmhQ6FaPdECr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMclyBVOWtKZeH0goGKtwDuid%2FCZhsBu2WGE01P44HpADs1v39i9AHwLUXZwnegoeTtfjFvm%2FQOMZcGQn40%2Bo%2Fh5fDjYeKhdWkSf1ZJvSHg3PiIZmX6Ckm8SWAQ0BGVOXwg1oRixT4EJmOXEZHRciwq49qQnofUqibeUcyNWvHAz0Gzp3lKlOo0jzKVg5sncBrZKuhMrUf9x%2FHrn5cuL1DVuRmiBbPY2RKh5qAstScqCvACiecsOKYWrnYL83m54gGEDT4IzX7ey9Ie7aEfMsx8VKXEa1DWwDwyLacQGcx6ZyqpvRU%2FSsIo%2F8TrXSMXFDPHyKAPF1Q42cNWvwSDFPyNGi38SodMsz2A5mxkh%2B6EBsVZMN%2BUKLG683AF3ZQdLk5Lnio4zYFRKhV%2FovPC2ydXOX5n7Nr3%2BXSNUhTCkQPUWX7MjjXyYdtl%2Bx4CW12zws8rAFhX72YiUkfNrAYCBwq1UEGhGo8M8UHWhEZQl%2BQtCdv9GODG3oafpa7dAWC9sFXVuiKyfFWIhTtrZXHpg%2FchnA7MbZaPQBc5FThMPiWf%2BlfvwgItUiAjFPdHSRuAivHlHmxqvy4SB9UklZiTwOKc0ckhJ4Ij5TclrcdAldDHIy2GYgF3qhrw%2FgUSOJSDWqk3SQ6d5ki07Xmn48wptvBxAY6pgHuRQadCK9%2F3xSIa4tfNbMptAzgaJgxNUHJJsInq2ZOKypbiWxdJri9UBgbk1204sPEbo9szID%2Fh5SwU0Ptf4%2BSPMc2DjCQYAyuRdEQLjVC9bpPYXlCL1YacOfCdoDrJR2sOYukE0V4cVzocJiCPnjOW7sg2JCjC4qQEuI4IWQ61xZkCJmea7IpdqoljG67UeNebpWF8qfR36ZIvlqEEk5hwuDbLvA5&X-Amz-Signature=96299cdd0d83d1e39a6bc125c615dccaa2ef4fada154937de3d0958019addd3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBD4TKDZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDh%2Fh2wP17%2FcO5KLIHhbqu9GsLCixSsXKW0vih3llqZeAiBJM99iORZ2HzjI%2FBazi1bwlnsmdB0eL9cYmhQ6FaPdECr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMclyBVOWtKZeH0goGKtwDuid%2FCZhsBu2WGE01P44HpADs1v39i9AHwLUXZwnegoeTtfjFvm%2FQOMZcGQn40%2Bo%2Fh5fDjYeKhdWkSf1ZJvSHg3PiIZmX6Ckm8SWAQ0BGVOXwg1oRixT4EJmOXEZHRciwq49qQnofUqibeUcyNWvHAz0Gzp3lKlOo0jzKVg5sncBrZKuhMrUf9x%2FHrn5cuL1DVuRmiBbPY2RKh5qAstScqCvACiecsOKYWrnYL83m54gGEDT4IzX7ey9Ie7aEfMsx8VKXEa1DWwDwyLacQGcx6ZyqpvRU%2FSsIo%2F8TrXSMXFDPHyKAPF1Q42cNWvwSDFPyNGi38SodMsz2A5mxkh%2B6EBsVZMN%2BUKLG683AF3ZQdLk5Lnio4zYFRKhV%2FovPC2ydXOX5n7Nr3%2BXSNUhTCkQPUWX7MjjXyYdtl%2Bx4CW12zws8rAFhX72YiUkfNrAYCBwq1UEGhGo8M8UHWhEZQl%2BQtCdv9GODG3oafpa7dAWC9sFXVuiKyfFWIhTtrZXHpg%2FchnA7MbZaPQBc5FThMPiWf%2BlfvwgItUiAjFPdHSRuAivHlHmxqvy4SB9UklZiTwOKc0ckhJ4Ij5TclrcdAldDHIy2GYgF3qhrw%2FgUSOJSDWqk3SQ6d5ki07Xmn48wptvBxAY6pgHuRQadCK9%2F3xSIa4tfNbMptAzgaJgxNUHJJsInq2ZOKypbiWxdJri9UBgbk1204sPEbo9szID%2Fh5SwU0Ptf4%2BSPMc2DjCQYAyuRdEQLjVC9bpPYXlCL1YacOfCdoDrJR2sOYukE0V4cVzocJiCPnjOW7sg2JCjC4qQEuI4IWQ61xZkCJmea7IpdqoljG67UeNebpWF8qfR36ZIvlqEEk5hwuDbLvA5&X-Amz-Signature=dd9fb6c6c58f2616638ea46eaaa64e670d58a89a8e0a4c2c6ffe63062ae36457&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

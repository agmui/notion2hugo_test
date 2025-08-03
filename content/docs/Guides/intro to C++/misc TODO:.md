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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN2GLTQE%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuNPbh2vclg7lTpZ27UtrgiPcrznM2tmaqQSEjA7ImOgIgAxU35KwZ0xr7Tjk9xhM6TFKufF520pSA4JobzvkJOS4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDMRuXWORTDnh6sq1fircAzWEb87WULBa3wuCc91tUeR495ttkBUC02FXgFYlkclAJ6wfu62ckYWQfwLHMPT49h%2B1hdJ%2Ft3kjeaTS6faSBeZviejcSFfKuUTGXythDfemBo1Pelpv0lUidenGif4ZLOSTugYe4vsK9Fw%2BWHNsEvx7HvCPuaSsstKedvcE%2F1MHaOz658xCBvdIjMkQju0xqcx4SbPNEb%2BbqHNtMRDI9t53Md7T2FgFfK17vwa2TG7hIFE6toszGwR8kpJh1D7WQK5eWuvpg6Ykc7lb4GH2%2F9tCX6tLrnHNaTSqt3FXndvy9PYM0TtVp6JOp3TeGNBqcsrtL0JuA6ZcQZpvIwhBazwp%2BOYFHCgbrgF8v9EqZpugvhaHuGGRWIH%2BO1ip1J%2FWDQ3apZPNd0MboNY4GIQQc0nppTxBcIga%2BmdUscM5%2FRdY7ntfGqPDYie7aj2W1A3yvHYnV%2BHc9qAIlxDNivm85u8xmM9GZs0LBOHYYrBB26LeAUEDt48479ueemMniBImrVlWli6ix4oxthkvw4yOFSDhEGLOMzJElA4MsW%2B3%2B%2BDVMPgXzs4mSieeFuzr5PBwm7x%2BMdQ3l4d3zKStk66saWotH%2BLBJ1%2Bk2CJfC%2BKtfzQMIAMmZe2aL0wmDQejMObZvsQGOqUB0fqDRKgivQMsGhX%2BgHQUReuNjhBAhawjS%2FkSls4y6QQbdl0jajygCmA9e373dBWZ3U49l64gNfYyrXMbu7A0jnLj32Lb2IhP0DcsF9GfsM1dr8Cok%2FEhIowfqfU8%2FF8TZrIQQrbSzL0tzmVV8vmoUcZ65m3omu77v4ZjQeOQOvRgy3cCAwFx769XX0KMLloPQ3yEVrlZaa71bfiE3VTL%2FuE4DTf3&X-Amz-Signature=1fd0da433ec8fd416e4d63df6efbf66cf35c0222d56d20b9cf24c663c4b31f9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN2GLTQE%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuNPbh2vclg7lTpZ27UtrgiPcrznM2tmaqQSEjA7ImOgIgAxU35KwZ0xr7Tjk9xhM6TFKufF520pSA4JobzvkJOS4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDMRuXWORTDnh6sq1fircAzWEb87WULBa3wuCc91tUeR495ttkBUC02FXgFYlkclAJ6wfu62ckYWQfwLHMPT49h%2B1hdJ%2Ft3kjeaTS6faSBeZviejcSFfKuUTGXythDfemBo1Pelpv0lUidenGif4ZLOSTugYe4vsK9Fw%2BWHNsEvx7HvCPuaSsstKedvcE%2F1MHaOz658xCBvdIjMkQju0xqcx4SbPNEb%2BbqHNtMRDI9t53Md7T2FgFfK17vwa2TG7hIFE6toszGwR8kpJh1D7WQK5eWuvpg6Ykc7lb4GH2%2F9tCX6tLrnHNaTSqt3FXndvy9PYM0TtVp6JOp3TeGNBqcsrtL0JuA6ZcQZpvIwhBazwp%2BOYFHCgbrgF8v9EqZpugvhaHuGGRWIH%2BO1ip1J%2FWDQ3apZPNd0MboNY4GIQQc0nppTxBcIga%2BmdUscM5%2FRdY7ntfGqPDYie7aj2W1A3yvHYnV%2BHc9qAIlxDNivm85u8xmM9GZs0LBOHYYrBB26LeAUEDt48479ueemMniBImrVlWli6ix4oxthkvw4yOFSDhEGLOMzJElA4MsW%2B3%2B%2BDVMPgXzs4mSieeFuzr5PBwm7x%2BMdQ3l4d3zKStk66saWotH%2BLBJ1%2Bk2CJfC%2BKtfzQMIAMmZe2aL0wmDQejMObZvsQGOqUB0fqDRKgivQMsGhX%2BgHQUReuNjhBAhawjS%2FkSls4y6QQbdl0jajygCmA9e373dBWZ3U49l64gNfYyrXMbu7A0jnLj32Lb2IhP0DcsF9GfsM1dr8Cok%2FEhIowfqfU8%2FF8TZrIQQrbSzL0tzmVV8vmoUcZ65m3omu77v4ZjQeOQOvRgy3cCAwFx769XX0KMLloPQ3yEVrlZaa71bfiE3VTL%2FuE4DTf3&X-Amz-Signature=3a246f1a8cda5cb3e4d7bd317fe308d237e48b8531e3c64f25fc52c44b7d0c63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

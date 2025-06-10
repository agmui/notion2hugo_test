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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VI25QM4%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWAY7iG3UaBdZrcWASw6iZN52R7f56nIW2hKLk5K8NwAIge49g4EFoIw%2BzT2IAAfVfXTtGInngIs2EgUjQ%2FkyAVJQqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhgGiAoLjkCBGpgpSrcA9mJuSq%2B%2F6YoWgy4RXticLGiazkBO0nGz5cF9t%2FXmZHjLBJiRRzF2b9NKbvowlo0YF%2BBjnbv2XiDjymUO%2BcAXvvMVJY6jDLMETmaYNpMjhGcCP1VsiEDonJI5kTRXXnAinPBBQKFWPFwflbRsRuq9KiE%2FwstwJpo48%2Bl%2FoqJENLQQVDQC0A3pMxRkOBy6RT8OxsibErKhqOB98wGlut1DLciPUyTugZBbJXeYssn7Dvr1vfh9cHjUSlRn55sLQhbCO%2FDUEIlK92bR02%2BXQXkURoWevaaf4wxaPa3Yx3tNf4lE36DQImBxAXeO2YPctGUCEA6tp4ksMVc5cb8g81AAbj1JL3fQdN0rnHooNvTw51dva5IE3KCtcmpiRvIN%2BqvCzu7AuVm1Ccrek76Yx3%2F%2BM0XzQaNP97AJz7fL0elCa4Hixn40lkiuxCXyLkOCKiDU6QrR8FtLnYxePprhzX6%2FctUv0dzsAMHkydPFE9MsWDhDnl2%2BjnzPyty%2FrDZ5MtvHTZLP%2FCoNeEyIifA64ROSKbMlaLWSqQV%2BlXfFDWYBQD1Cn1sW5PQASNNC2G9SbLuvlP%2Fu5nv7qEjPC5KfZ2ASSLRPq5bqbrTRB2HRHOske6viO6PPmE7irr1BTIkMP3en8IGOqUBL%2Bcz9UrwDfVQXTQH51fI%2FxaZAYPZFJUBJijUBHPMsOwwUUgFjOWaCAWn%2B05vkAx5XyW5W0psBDzVvef8A23DBmHxXSJeZ7kkvbMQbAnjabOJqou%2B0okIufE6ovnD2D0jmc%2FbuoIaiaV8%2F%2B01TMd%2F2eMhoqQZ9l6cltPxVgTTjKQDqiKIZpbLCkAbzaAuSxVZu9PadKj7SCrcI%2BoEyD00ppSmt0FB&X-Amz-Signature=898f90db012d934f2c9584397a6d51e0701988c0fbe6b764956ace247931d209&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VI25QM4%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWAY7iG3UaBdZrcWASw6iZN52R7f56nIW2hKLk5K8NwAIge49g4EFoIw%2BzT2IAAfVfXTtGInngIs2EgUjQ%2FkyAVJQqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhgGiAoLjkCBGpgpSrcA9mJuSq%2B%2F6YoWgy4RXticLGiazkBO0nGz5cF9t%2FXmZHjLBJiRRzF2b9NKbvowlo0YF%2BBjnbv2XiDjymUO%2BcAXvvMVJY6jDLMETmaYNpMjhGcCP1VsiEDonJI5kTRXXnAinPBBQKFWPFwflbRsRuq9KiE%2FwstwJpo48%2Bl%2FoqJENLQQVDQC0A3pMxRkOBy6RT8OxsibErKhqOB98wGlut1DLciPUyTugZBbJXeYssn7Dvr1vfh9cHjUSlRn55sLQhbCO%2FDUEIlK92bR02%2BXQXkURoWevaaf4wxaPa3Yx3tNf4lE36DQImBxAXeO2YPctGUCEA6tp4ksMVc5cb8g81AAbj1JL3fQdN0rnHooNvTw51dva5IE3KCtcmpiRvIN%2BqvCzu7AuVm1Ccrek76Yx3%2F%2BM0XzQaNP97AJz7fL0elCa4Hixn40lkiuxCXyLkOCKiDU6QrR8FtLnYxePprhzX6%2FctUv0dzsAMHkydPFE9MsWDhDnl2%2BjnzPyty%2FrDZ5MtvHTZLP%2FCoNeEyIifA64ROSKbMlaLWSqQV%2BlXfFDWYBQD1Cn1sW5PQASNNC2G9SbLuvlP%2Fu5nv7qEjPC5KfZ2ASSLRPq5bqbrTRB2HRHOske6viO6PPmE7irr1BTIkMP3en8IGOqUBL%2Bcz9UrwDfVQXTQH51fI%2FxaZAYPZFJUBJijUBHPMsOwwUUgFjOWaCAWn%2B05vkAx5XyW5W0psBDzVvef8A23DBmHxXSJeZ7kkvbMQbAnjabOJqou%2B0okIufE6ovnD2D0jmc%2FbuoIaiaV8%2F%2B01TMd%2F2eMhoqQZ9l6cltPxVgTTjKQDqiKIZpbLCkAbzaAuSxVZu9PadKj7SCrcI%2BoEyD00ppSmt0FB&X-Amz-Signature=a56169b3cae6d20275ead9940eae88a481bcc10d30235076abf883fe089ace63&X-Amz-SignedHeaders=host&x-id=GetObject)

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

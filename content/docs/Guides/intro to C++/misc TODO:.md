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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q57MIPDK%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T060830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIExOIKamR3aMiOo73J1Wdn6mV5kQrYzQNAFIkyzF2nMoAiEAg0BtIRTiIPg7G7suVFHDMSAEAzLat1MWTOHOtWH6AIYq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDJZWl3sjOU8fx8XymyrcA0Utu%2Bof49G%2B8oqTGcCENKWuUH%2Bsm1vc0E8Bi1npz24d8ey%2F%2FXAu8U7Ec9NQLJcwvR7svczpTDi4jLXWblPx3POKOtjlEGCl%2FSCdbJEs8TmLU22McIRaQmalBCnQodOWXaE23fWjsjxwLpQCEhH5vIPM17gOr5N4HIeBva%2B2NH9JznOxzzGVyohRtI234Z10yJbTXCvAK%2FxBDk%2B%2B%2FgbzkThBqkJCyIpgAXOI1PvNyq0YN9NuywNRDI6%2BC3WUB35EPbGhPxWU07rw8xN%2F93sBnJKnnKvgMxow8PW7hw09tMJmWrms6vqCaNXtohVkgFRKKIo6NTPGZ6pdB3hLoY2o0xFRXANiaD0I2oomg2ipjXPPBcbyIG%2F5TB1OWaoQBCEIRBir4gOFypmVqjPhS8pzPvVw30xcTJCQjL48fiEk1r1UMKQm5vKhF8ASSjPglwU3GeAqnKtlauXe1ieX0PB7kDRnJOCMCVjc2VscjZRsUiA9j%2F8HFnNqWmWcOxuLVusP10%2FgMNgk3mKjlBjsHKMgvuIrzypDB2j5D2EqOUE3Fqk5qcZ7PhpRMOh232vzHkbvQr%2Bv4dzjDwguVkaWyTGl5vRzzTAMXnE6W871Z1U2AUWXVkNapleY1XfYLiHIMNKdr74GOqUBunI9AnZbydqo7C5Y0TakX9S99rUdVZ%2Fzlxqb4hLMpCFtB83JxVsxtZ6GmsfXamn%2FrLIDx7gzb%2FU2t68g34Koph%2FhOhA7LPPsl0L4B3lxbxdtU4Omdz6hMyXIXNRau8OfK3EROIqHpdgoT%2FrnneBhI0mnYUTDWi3A8f3LJTZFw1bQggfPjk3mqz1ZafTAAOFO607FV%2FErhRe2iQHIYns4mXvwJ9x%2F&X-Amz-Signature=8591b955f463dc86737f3995afe2296e05f27b63030e67fcf1084644ecde4c02&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q57MIPDK%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T060830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIExOIKamR3aMiOo73J1Wdn6mV5kQrYzQNAFIkyzF2nMoAiEAg0BtIRTiIPg7G7suVFHDMSAEAzLat1MWTOHOtWH6AIYq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDJZWl3sjOU8fx8XymyrcA0Utu%2Bof49G%2B8oqTGcCENKWuUH%2Bsm1vc0E8Bi1npz24d8ey%2F%2FXAu8U7Ec9NQLJcwvR7svczpTDi4jLXWblPx3POKOtjlEGCl%2FSCdbJEs8TmLU22McIRaQmalBCnQodOWXaE23fWjsjxwLpQCEhH5vIPM17gOr5N4HIeBva%2B2NH9JznOxzzGVyohRtI234Z10yJbTXCvAK%2FxBDk%2B%2B%2FgbzkThBqkJCyIpgAXOI1PvNyq0YN9NuywNRDI6%2BC3WUB35EPbGhPxWU07rw8xN%2F93sBnJKnnKvgMxow8PW7hw09tMJmWrms6vqCaNXtohVkgFRKKIo6NTPGZ6pdB3hLoY2o0xFRXANiaD0I2oomg2ipjXPPBcbyIG%2F5TB1OWaoQBCEIRBir4gOFypmVqjPhS8pzPvVw30xcTJCQjL48fiEk1r1UMKQm5vKhF8ASSjPglwU3GeAqnKtlauXe1ieX0PB7kDRnJOCMCVjc2VscjZRsUiA9j%2F8HFnNqWmWcOxuLVusP10%2FgMNgk3mKjlBjsHKMgvuIrzypDB2j5D2EqOUE3Fqk5qcZ7PhpRMOh232vzHkbvQr%2Bv4dzjDwguVkaWyTGl5vRzzTAMXnE6W871Z1U2AUWXVkNapleY1XfYLiHIMNKdr74GOqUBunI9AnZbydqo7C5Y0TakX9S99rUdVZ%2Fzlxqb4hLMpCFtB83JxVsxtZ6GmsfXamn%2FrLIDx7gzb%2FU2t68g34Koph%2FhOhA7LPPsl0L4B3lxbxdtU4Omdz6hMyXIXNRau8OfK3EROIqHpdgoT%2FrnneBhI0mnYUTDWi3A8f3LJTZFw1bQggfPjk3mqz1ZafTAAOFO607FV%2FErhRe2iQHIYns4mXvwJ9x%2F&X-Amz-Signature=32e50d23f2b1d28b4edcd776cf3e138a65be977685943e196d3aaeb53151154e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

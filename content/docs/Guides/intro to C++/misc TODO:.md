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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BAFAU4D%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T140708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCk52EvHwPLsX5zjbaHmxlYusx%2BELu%2BSI9wp7SUCKcZPwIgCA8eGnU9WC2teFkN%2FLw%2F72r14kl1kZLJtDggIiS5%2Be4qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMyoamPhK3BGix8LGSrcA9d710MjAL%2BOTdLQSPh0%2Bccbbgms0nOj4EBcnDnz2GJuC59Cj0%2B17YkGvfItbfVVg6%2FfQFu8cgUFHgHf%2B2dKFDFDIRZbKJ02EQjySVFP9cwBouUvaRpfnOqY5cvEKpL1P6WjPu8HIuxXpmwM1USJAhSMCJfcXO0pyVim0QiRxQwCLSzdJGoDkWbeqzEEBwSGJNPGGuloAC4FSkhOfrgfm05uV2fYq2f9x7XYg39A60ZGHAuHwW3o9UiCYyRuHodN%2FfR5usLe5llOOlxVouA75rvKWbJcwiegUCRVCwjRH2brfIXunEGmKCwKvKdKFhJcqLFMGdDnS6FGud6dqlCnR5EA5si5ihMZ5oezKFK9lTlmpTBpIz0t07aGk7dICIypf7ubZ1Gh9T2wwbgjwD5W8aHFdD11%2Bax3S71tQ0j3N%2FUSuFkmd1DOAOPxUIFBm%2B5xmDK91H%2F0VJrrZ%2FrbE0Aqjt6Af02aLy2ReQ%2BKazQpQXoL41Px3UABmbGDqL2uXHkIo0jbV5%2FkkJOPegaq3bE4BUGyrIpnLxvaHHurWIWdcz%2FSaPQIvMMCg1BNfg4Aq%2BOacQFHEcpZ9yx%2F8q2AK6sHfZovFnFj2jdyXe7tTyWll3IoS0SEcepdlqZcTaLLMOrr2sIGOqUBljdzsaUAWcIv9YzAlpZRbfV6uivuDzz6bb6iuXvCwoCxoJZZGFRX6s0PoJrV%2FUTF37MX6KF0QkdCSE9gUSm9Ivr%2FhU773TKukfTOR53FxKtcSa3%2F2byNxbjsGemeM96DiBvGErClw2S5s6YK50s914BN%2BFTzMSCxArylo2YFBZi1bpv7Yp0e9%2Fd5ZPCQ3LwJ3248%2BL0yHloROTck3tqFasdW7fEo&X-Amz-Signature=62b6b516de842e38f0c097ad47031959e0f01ee353dea35b43a01f888e18cfd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BAFAU4D%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T140708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCk52EvHwPLsX5zjbaHmxlYusx%2BELu%2BSI9wp7SUCKcZPwIgCA8eGnU9WC2teFkN%2FLw%2F72r14kl1kZLJtDggIiS5%2Be4qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMyoamPhK3BGix8LGSrcA9d710MjAL%2BOTdLQSPh0%2Bccbbgms0nOj4EBcnDnz2GJuC59Cj0%2B17YkGvfItbfVVg6%2FfQFu8cgUFHgHf%2B2dKFDFDIRZbKJ02EQjySVFP9cwBouUvaRpfnOqY5cvEKpL1P6WjPu8HIuxXpmwM1USJAhSMCJfcXO0pyVim0QiRxQwCLSzdJGoDkWbeqzEEBwSGJNPGGuloAC4FSkhOfrgfm05uV2fYq2f9x7XYg39A60ZGHAuHwW3o9UiCYyRuHodN%2FfR5usLe5llOOlxVouA75rvKWbJcwiegUCRVCwjRH2brfIXunEGmKCwKvKdKFhJcqLFMGdDnS6FGud6dqlCnR5EA5si5ihMZ5oezKFK9lTlmpTBpIz0t07aGk7dICIypf7ubZ1Gh9T2wwbgjwD5W8aHFdD11%2Bax3S71tQ0j3N%2FUSuFkmd1DOAOPxUIFBm%2B5xmDK91H%2F0VJrrZ%2FrbE0Aqjt6Af02aLy2ReQ%2BKazQpQXoL41Px3UABmbGDqL2uXHkIo0jbV5%2FkkJOPegaq3bE4BUGyrIpnLxvaHHurWIWdcz%2FSaPQIvMMCg1BNfg4Aq%2BOacQFHEcpZ9yx%2F8q2AK6sHfZovFnFj2jdyXe7tTyWll3IoS0SEcepdlqZcTaLLMOrr2sIGOqUBljdzsaUAWcIv9YzAlpZRbfV6uivuDzz6bb6iuXvCwoCxoJZZGFRX6s0PoJrV%2FUTF37MX6KF0QkdCSE9gUSm9Ivr%2FhU773TKukfTOR53FxKtcSa3%2F2byNxbjsGemeM96DiBvGErClw2S5s6YK50s914BN%2BFTzMSCxArylo2YFBZi1bpv7Yp0e9%2Fd5ZPCQ3LwJ3248%2BL0yHloROTck3tqFasdW7fEo&X-Amz-Signature=f036372834ea8920800f3411430d97549ee9a64e813238a4e1864267a312a0c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

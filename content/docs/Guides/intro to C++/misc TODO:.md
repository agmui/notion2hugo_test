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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665COXU2AS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC4L%2BI7ChYu8FlYxPUEoSoDr0BnMpk58bLZGV%2BnXp2NXgIhAKuJOnFYFc5xiSuNOQZB85dvdGpCPyMI7GqHYUmfSTvuKv8DCE4QABoMNjM3NDIzMTgzODA1Igxgihj%2FGfQrO0xmMSkq3ANfivbtA9hpGXbd79EAM%2FFfRaY6PP5CcC1BMi7FZKluRLTxiQQ9QeMf4CA1RUDOqXbvPCWih9kfr8eM8HrZBvQ7PpzQSb1umXouxf%2BWhQZ8319qxoU0KCxdqTT8lUIhJOjJu2PTuTwhFPVL0oUFGePJQRJP2%2FYgbCnKV0IFtUCKwZkb3EG6FYZlTxYtMoffqZ1evZZVCCbN%2BcQaXljMSTwUnCuP30%2F6liHnItjLsGM%2BSmDr%2FKPi8CKbvdd8kMDav55KC7KD4Q5xI%2FhHwkzWnH8%2B8OEpvD8SASItHMx1h1LMvUwKtun4eVndnAivPtpjgTG6ic4mS6zyvmAWncRbeaG8mz4ExPBd6lAR%2FgUTcIu8fUu5BnBP6QhEEiVVkKcAmM2K9uqs84%2FnvDYMDp7Mak86dYLjf6OzHVGFV2unTyo03yKHflYWUzzkAjcirHJkRz1xtq6p%2BuvRzMR9F0gmEHXDyHDhzc4txfr36ls%2FaA5fPXkHUlXDejZjN3%2BLYIdltcAFbt5E32OS4tVkrH46iHClMo0mt9vpBrygrdGps8zAPgZz5bpv9pDy60LbKoAo%2BeFoWGrAGepzcqBdBiAfKjkWDcpQ9JOHNmntiALGaftV%2BxZ6JaAtk14Lz58olTCU0Y%2FEBjqkAfmf564krVQHpEvcF5AoFWQbT7eqtCbgBZkz3F1Cx4DF9RdVKjEleBxvcBGzzm07GAmOyZ8S0kYLRyk98rY8lya28zJHF1iD82qeuaIUX04G8nd62M%2Fub27GhKvixYl%2BJU0DPiAvEGHI4jpr3qcazaKd6MagoorLr4bSmL99%2BC2Vpnk%2F%2Fo3wbsZxGieaJL3TH%2BOFC5FYWirKeK3igt%2FiZkA8W9GD&X-Amz-Signature=523b7492921c5853de24c1cf1af6339d2838a70d0b297cd2c16d1fe4b3611190&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665COXU2AS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC4L%2BI7ChYu8FlYxPUEoSoDr0BnMpk58bLZGV%2BnXp2NXgIhAKuJOnFYFc5xiSuNOQZB85dvdGpCPyMI7GqHYUmfSTvuKv8DCE4QABoMNjM3NDIzMTgzODA1Igxgihj%2FGfQrO0xmMSkq3ANfivbtA9hpGXbd79EAM%2FFfRaY6PP5CcC1BMi7FZKluRLTxiQQ9QeMf4CA1RUDOqXbvPCWih9kfr8eM8HrZBvQ7PpzQSb1umXouxf%2BWhQZ8319qxoU0KCxdqTT8lUIhJOjJu2PTuTwhFPVL0oUFGePJQRJP2%2FYgbCnKV0IFtUCKwZkb3EG6FYZlTxYtMoffqZ1evZZVCCbN%2BcQaXljMSTwUnCuP30%2F6liHnItjLsGM%2BSmDr%2FKPi8CKbvdd8kMDav55KC7KD4Q5xI%2FhHwkzWnH8%2B8OEpvD8SASItHMx1h1LMvUwKtun4eVndnAivPtpjgTG6ic4mS6zyvmAWncRbeaG8mz4ExPBd6lAR%2FgUTcIu8fUu5BnBP6QhEEiVVkKcAmM2K9uqs84%2FnvDYMDp7Mak86dYLjf6OzHVGFV2unTyo03yKHflYWUzzkAjcirHJkRz1xtq6p%2BuvRzMR9F0gmEHXDyHDhzc4txfr36ls%2FaA5fPXkHUlXDejZjN3%2BLYIdltcAFbt5E32OS4tVkrH46iHClMo0mt9vpBrygrdGps8zAPgZz5bpv9pDy60LbKoAo%2BeFoWGrAGepzcqBdBiAfKjkWDcpQ9JOHNmntiALGaftV%2BxZ6JaAtk14Lz58olTCU0Y%2FEBjqkAfmf564krVQHpEvcF5AoFWQbT7eqtCbgBZkz3F1Cx4DF9RdVKjEleBxvcBGzzm07GAmOyZ8S0kYLRyk98rY8lya28zJHF1iD82qeuaIUX04G8nd62M%2Fub27GhKvixYl%2BJU0DPiAvEGHI4jpr3qcazaKd6MagoorLr4bSmL99%2BC2Vpnk%2F%2Fo3wbsZxGieaJL3TH%2BOFC5FYWirKeK3igt%2FiZkA8W9GD&X-Amz-Signature=813a32414230ea608096ada4089f186cb8dfcda104817d04bf729eca8055d683&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN34JL5Z%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T150721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCVrOjB86vlzLFJZ4DQonk1HYiV0fHfzBF72EQQIx9JTwIgTL%2Fk4vgjIguQ8tguig1onoNJY5lovCa4pVlhwvZ5CSAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPNP4WA%2BTIoMkvvpuCrcA%2BTEb8kNyNVBTLu1wwlWuUm3OQhXe0Tvl2KNh8gdDi4dJzIqY9IAD%2F%2BBPBrMVcuAGPRP%2BPWfl7ljvw6w2NbiUnQWiRGpoFj9%2B7zkhD9cgxDbUo5g0vKjj7iYjClc4%2FKkgfJ%2FcudyEvnIm91ja7wG7uwmN78mhB2Wz9fH57WL8CRhyiQPopmb8P3iDfmqqPYayGiHBAsuMMbQuSXC9ul9ELEYVTZ4d5mEdQDdnkZTe1syqpW98OoT7Etv%2B7x6jSlVgRVd6C2yy%2F0TdrvbpuLXLQrDryM6967ltMxp4A9KX2KWxEsP0eEK5Zm8NfCOzAkpfRG%2BMO1Fzv9p3XXji08%2FKzyv%2F%2FbKkL7uRl1iGoopKUJs%2Bhy%2BjkdYn0L6caJAEl4T6HLvgH40FdriPeR4AxXAXzy%2BTQQvCjH4uXKxOyJOhTXqjjLzZS7CydoqECbUkZ%2BYEhkO2%2FcWE7vzp2kmPhdhR3MtTX9GNGGNMS93J7FMjoHMQgiDEaRehXRDJab%2BbsJdqqZ0cEgEf44hi3f9eLKY7xSFHv9UiJDE%2BnAu3tgJtxGFifCzMQWRzuqqvk%2Bf%2BjX6xZamnYrK9%2BLzK3J7t39i8M1mK2SkiWLag00ynSqloacKWyvFTffPTtYtJ2H1MMnBtcIGOqUBQKdYpU99UCcnutN4vqRy4lK3ngIg0oNX3yZh2GX02IeRFKuqP21Fc31Kkut%2Bi4UnxlvI4Byw%2BpWF%2FkFXJwV965FfyysMb53rch08BaFtzeaqHfqzum93pcaz4MqZqyMexm6XR0Q%2FxZTJSNDB18Xgli3Ul3MQbSvg0X8qaA04PQatZGNA%2FzIFYoGOR2Gkk7DScqEUy7t1kJOEi2%2F7dPBu8D1w6AfB&X-Amz-Signature=d825e0f2060e289116ed901c3cf7705c82b7b9c5e033d4a328d449c555b0f1c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN34JL5Z%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T150721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCVrOjB86vlzLFJZ4DQonk1HYiV0fHfzBF72EQQIx9JTwIgTL%2Fk4vgjIguQ8tguig1onoNJY5lovCa4pVlhwvZ5CSAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPNP4WA%2BTIoMkvvpuCrcA%2BTEb8kNyNVBTLu1wwlWuUm3OQhXe0Tvl2KNh8gdDi4dJzIqY9IAD%2F%2BBPBrMVcuAGPRP%2BPWfl7ljvw6w2NbiUnQWiRGpoFj9%2B7zkhD9cgxDbUo5g0vKjj7iYjClc4%2FKkgfJ%2FcudyEvnIm91ja7wG7uwmN78mhB2Wz9fH57WL8CRhyiQPopmb8P3iDfmqqPYayGiHBAsuMMbQuSXC9ul9ELEYVTZ4d5mEdQDdnkZTe1syqpW98OoT7Etv%2B7x6jSlVgRVd6C2yy%2F0TdrvbpuLXLQrDryM6967ltMxp4A9KX2KWxEsP0eEK5Zm8NfCOzAkpfRG%2BMO1Fzv9p3XXji08%2FKzyv%2F%2FbKkL7uRl1iGoopKUJs%2Bhy%2BjkdYn0L6caJAEl4T6HLvgH40FdriPeR4AxXAXzy%2BTQQvCjH4uXKxOyJOhTXqjjLzZS7CydoqECbUkZ%2BYEhkO2%2FcWE7vzp2kmPhdhR3MtTX9GNGGNMS93J7FMjoHMQgiDEaRehXRDJab%2BbsJdqqZ0cEgEf44hi3f9eLKY7xSFHv9UiJDE%2BnAu3tgJtxGFifCzMQWRzuqqvk%2Bf%2BjX6xZamnYrK9%2BLzK3J7t39i8M1mK2SkiWLag00ynSqloacKWyvFTffPTtYtJ2H1MMnBtcIGOqUBQKdYpU99UCcnutN4vqRy4lK3ngIg0oNX3yZh2GX02IeRFKuqP21Fc31Kkut%2Bi4UnxlvI4Byw%2BpWF%2FkFXJwV965FfyysMb53rch08BaFtzeaqHfqzum93pcaz4MqZqyMexm6XR0Q%2FxZTJSNDB18Xgli3Ul3MQbSvg0X8qaA04PQatZGNA%2FzIFYoGOR2Gkk7DScqEUy7t1kJOEi2%2F7dPBu8D1w6AfB&X-Amz-Signature=c81c2de79b28cadf1680e5b31b0df470c8090e8a2e071daf3832375880ce74cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

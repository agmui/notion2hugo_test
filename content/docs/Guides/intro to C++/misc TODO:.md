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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQSFNU7Q%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDi0wsJks7IyDOJHGK48opTDrB0qYiyOsHIxUZtSWWbIAIgAmhikeQizNRS3EtURob5tuoEA5RHVBnvHyjz7tzOOuIqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEv%2BISyN75WvEdpIiCrcAySBhgb0ZHogGW%2B0EEhvV%2BqK8bWyhqj8p5i2HlOB%2FINWkLtpM7N5pDILQ0%2BS3uXhoYkemIGGsyU17oamQsgb%2BViftWu%2FioHMeRbZoEX0dxEBLQ8HbeYyE%2FwrUtk3yRAYLHoYmZUK48lzejEO%2BlSF%2FnFKIOWIyrKCTodO9B76tGlRrzlmkuv14Y1BC5YQaexmiv7SMgSmC62lYMOeLuWqKp6JFiIUW%2FXp6sVZ9DDSDE%2F8BpHgdiB8EoEEiSli%2FUUKlbLqQuk72MymUrdUCk%2BIGSAoVFhCz6ps8EoVTEE%2F%2BhtUFu6yUBpfH8MyIu3NPAg8edlmKSfY4iUiYs40JdAX%2BuksoO5SJwm%2FvmbogIW9MnERQPIx8825CVZSqMY2mioTEZqhV2bHzhuqUinXznxmrRKZu03I6WerFRB%2BPE%2Bg7YKSeMLtpUos4v%2Bdp5McECvWcbujJzdT8aTL%2FkARZCGZMRGNUdgO4qO5R3AdbwUA8Twngka%2BmznT9LjlvshfndfTvWZFnvDs%2FTTg9YmMe%2BXWv0DeE92ZyNYdxgUC9FGad1BpNgHQ9t1VIG0Hb3CQZO8yDREY5zUHo%2FAqk6YY0tTeSK%2BKeUJkyCym9AIeN6rm%2BV2SOheHQjONr7Q8%2BNxKMO%2Bq2sQGOqUB0RXSmrkr8ECMxGnuMvZusxY2xXjM1ehGrX3PlRAdWK6TXLYtrX29a8aPUBR5aKi8zEfdU7ZxN3qEqo3piGRTxIY2ColgzeQIyBJ1kVWNxlq0V%2BwfFj4lErRDHRWAMLs68L5l8%2BHCTwSiwzU7EDYAjxxG%2F2iOL3eoEvrJ1y3%2BVgMyZ6iJYmtIF8HgPYtRaa%2FXanCXygWOhT7gGgw9pHYXkF92dEko&X-Amz-Signature=947c4dfa9c0dd6567fb670c20c0da15b63f7d7e9c83eca7947348552e9ebe894&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQSFNU7Q%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDi0wsJks7IyDOJHGK48opTDrB0qYiyOsHIxUZtSWWbIAIgAmhikeQizNRS3EtURob5tuoEA5RHVBnvHyjz7tzOOuIqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEv%2BISyN75WvEdpIiCrcAySBhgb0ZHogGW%2B0EEhvV%2BqK8bWyhqj8p5i2HlOB%2FINWkLtpM7N5pDILQ0%2BS3uXhoYkemIGGsyU17oamQsgb%2BViftWu%2FioHMeRbZoEX0dxEBLQ8HbeYyE%2FwrUtk3yRAYLHoYmZUK48lzejEO%2BlSF%2FnFKIOWIyrKCTodO9B76tGlRrzlmkuv14Y1BC5YQaexmiv7SMgSmC62lYMOeLuWqKp6JFiIUW%2FXp6sVZ9DDSDE%2F8BpHgdiB8EoEEiSli%2FUUKlbLqQuk72MymUrdUCk%2BIGSAoVFhCz6ps8EoVTEE%2F%2BhtUFu6yUBpfH8MyIu3NPAg8edlmKSfY4iUiYs40JdAX%2BuksoO5SJwm%2FvmbogIW9MnERQPIx8825CVZSqMY2mioTEZqhV2bHzhuqUinXznxmrRKZu03I6WerFRB%2BPE%2Bg7YKSeMLtpUos4v%2Bdp5McECvWcbujJzdT8aTL%2FkARZCGZMRGNUdgO4qO5R3AdbwUA8Twngka%2BmznT9LjlvshfndfTvWZFnvDs%2FTTg9YmMe%2BXWv0DeE92ZyNYdxgUC9FGad1BpNgHQ9t1VIG0Hb3CQZO8yDREY5zUHo%2FAqk6YY0tTeSK%2BKeUJkyCym9AIeN6rm%2BV2SOheHQjONr7Q8%2BNxKMO%2Bq2sQGOqUB0RXSmrkr8ECMxGnuMvZusxY2xXjM1ehGrX3PlRAdWK6TXLYtrX29a8aPUBR5aKi8zEfdU7ZxN3qEqo3piGRTxIY2ColgzeQIyBJ1kVWNxlq0V%2BwfFj4lErRDHRWAMLs68L5l8%2BHCTwSiwzU7EDYAjxxG%2F2iOL3eoEvrJ1y3%2BVgMyZ6iJYmtIF8HgPYtRaa%2FXanCXygWOhT7gGgw9pHYXkF92dEko&X-Amz-Signature=76ef40346713aeeb102399b706b704b9e6f5f63104dab9f28b58e35ff8a94971&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

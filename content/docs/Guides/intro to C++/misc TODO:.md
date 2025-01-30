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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO4YTBN6%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T003440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlZpQHTnVUCOYIL7pgw2fROdLPgb0EKt4KojpBptvimAiEAu6ae%2FWaWJ3OXxFsvDqQHrRVFeEvRjln8gAwY%2B1inKLoqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzXxPwuefns%2BUDNxSrcA5rXnDdX6xeIkSr75lO5D1DdY4Y8vJzHXe2Y8wgbrfDhztzuGkYYBLLc6pUMRN%2FtVwk8Mf1YH1Y80vXNrE2CQngPW7G1bX4xmKxtAckDIpmkvLEin8EduQHsH2CsWFZkwaf%2FuoEIM2V%2FxK716MSHr4%2FwS13Yxe%2FYvLHDaJybd7j%2FppA2I2bIYqBZIXIYZbDGVxJA18%2BNQ4n08s8qJA4k%2FKH0MelB43FP%2BEyddISCZiqWkvwLKaIg62chgWcWvaZu6rNHk%2BLHzsH660JmSaJ1kWfpHwxwGpxAsHq7LUI0B7tUZTDtH6f6f89m%2Fcn1%2F%2F%2FzHu7JnO0C7UXjURIM52B%2BkEkY7e79JrIogneZhq3n8IDtnXst%2BPYJGYt9hsl%2FlI7RpQSyckEAekLw6mg8h6jOf3NXIHjnem7zcLx9kC5rYPRZsugOx0%2Bo7KfY%2BElmVCxAk0H4KfeF8jD7Z%2FPuPsPxrB7McY1FBucf%2BQEYYbnubvId5Ag3tKujZhyr53r2qGEDS4Qyk2GhlRPzj3HrRHmKCwFwGR7Ix4iYsRvD%2BjkWxwJbAIaL9oxKjaOBnBckvlVHRbquHw8B3LGiulLrkaBsVBNcw4AowfKlFMe77tCynjB%2FUYDh0msegKR%2BHkiNMO3G6rwGOqUBk6O8I6aKbXzLshDd8BhCSYza8YosBr%2FjiZDwNMslyKEk41haFJfMinJFoMeY57svYXSyxLb9Ev%2B%2Bt1QqNhB4d6h0M3rved%2FSIphN7IpU%2FVal73mjMhv3pS3xXXbPIj0sO7m2Giz4WW8TYcSlq%2FDtl3gjUZtEhTCZ9114Rna9bv0KL%2BIIM6QvTWpKsyJao0l5lP4h8P1LLwsF07djsT7o2mcCxXhy&X-Amz-Signature=10ab43a31c3f55db34856684312ed7d1cbab0bc5fe8d7e3a4178cf01a9f46481&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO4YTBN6%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T003440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlZpQHTnVUCOYIL7pgw2fROdLPgb0EKt4KojpBptvimAiEAu6ae%2FWaWJ3OXxFsvDqQHrRVFeEvRjln8gAwY%2B1inKLoqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzXxPwuefns%2BUDNxSrcA5rXnDdX6xeIkSr75lO5D1DdY4Y8vJzHXe2Y8wgbrfDhztzuGkYYBLLc6pUMRN%2FtVwk8Mf1YH1Y80vXNrE2CQngPW7G1bX4xmKxtAckDIpmkvLEin8EduQHsH2CsWFZkwaf%2FuoEIM2V%2FxK716MSHr4%2FwS13Yxe%2FYvLHDaJybd7j%2FppA2I2bIYqBZIXIYZbDGVxJA18%2BNQ4n08s8qJA4k%2FKH0MelB43FP%2BEyddISCZiqWkvwLKaIg62chgWcWvaZu6rNHk%2BLHzsH660JmSaJ1kWfpHwxwGpxAsHq7LUI0B7tUZTDtH6f6f89m%2Fcn1%2F%2F%2FzHu7JnO0C7UXjURIM52B%2BkEkY7e79JrIogneZhq3n8IDtnXst%2BPYJGYt9hsl%2FlI7RpQSyckEAekLw6mg8h6jOf3NXIHjnem7zcLx9kC5rYPRZsugOx0%2Bo7KfY%2BElmVCxAk0H4KfeF8jD7Z%2FPuPsPxrB7McY1FBucf%2BQEYYbnubvId5Ag3tKujZhyr53r2qGEDS4Qyk2GhlRPzj3HrRHmKCwFwGR7Ix4iYsRvD%2BjkWxwJbAIaL9oxKjaOBnBckvlVHRbquHw8B3LGiulLrkaBsVBNcw4AowfKlFMe77tCynjB%2FUYDh0msegKR%2BHkiNMO3G6rwGOqUBk6O8I6aKbXzLshDd8BhCSYza8YosBr%2FjiZDwNMslyKEk41haFJfMinJFoMeY57svYXSyxLb9Ev%2B%2Bt1QqNhB4d6h0M3rved%2FSIphN7IpU%2FVal73mjMhv3pS3xXXbPIj0sO7m2Giz4WW8TYcSlq%2FDtl3gjUZtEhTCZ9114Rna9bv0KL%2BIIM6QvTWpKsyJao0l5lP4h8P1LLwsF07djsT7o2mcCxXhy&X-Amz-Signature=71990615b050409e823a761f780dfc06f0102ee0d1185e1ecc0e71db13af615b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

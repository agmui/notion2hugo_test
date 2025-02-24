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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SACLCYZ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUbjY5%2Buroe8UBbMGPoUuW%2BmZ3%2BDeAd5Vo5PvCehBCFwIhAPraA2TX12ruqty4kh9fM3DQpHPJEG5NUjid%2FdN5cdqQKv8DCCoQABoMNjM3NDIzMTgzODA1Igzt%2FPTjbJ5L1iVmPR4q3APJdeGNowinxoeb%2FLMw78gpDqebTu7p7bsPkngC4BxojeHRL9aKMEyjF8Z2%2FRBrK5V7HIyqiEX1O8lKMXWTgqQXjENURoqMlDg%2BZgMMuwzOPlmIbiYUV7ZdMZkF2IsVIucClpE%2Bi0uq%2FQ61OfZA6wchcGR2A38cQNuPvgp7qFJd9f77%2FueIEDEiKfYPNMHoqy0JHDD6ZpWWNVWWFyqpVR5H%2Fyjl39fTwOdWa2JG5oCqwBo9UTj70NGTOlUX10SBxk105vAjMQRlGfDqOx%2BBhNh%2FlVy9oHVhsHCnvwYri%2Fp%2FLKWCejhTo1BLsXOg%2FYRjDqjgm%2FJSbKliZOzeWpL881ji1FJ9rG34k8vwleFYs0p6PPaMXzsBpIICImcBlTRyjWIZnAbNvUZ5IUhuJyfEAC7UmMXpUUPW3cdPX631zrwDhvAwBzdzSXCDzsw5SvU6WITu4tGpDlydJ5yMglrKsdxuatqCn0G8wBG%2F01it3ygAOLnyhTlR%2B1pA2ciPv6%2FR%2FOWswGGOlQQh4yCt45xljj0UVTFTabsBboaXxLFAN%2FfIGd%2FRZ%2Bj8YRImC4KvCgAMKZCBzHaT5CFj0XoSsKNMINwrHpZ0a7kFyFHg327SB8c8WGBGgSQBtbXjrj8SgzCE6%2FC9BjqkAX4TTxQMvXLfvlNU%2FIgm17upvSzNr5Qqt5F6L75XGqWDUSkLA6fF1P%2B8MCRksOdKyl3X1IcxkeFIgGMwLHbH5uH%2BuYO5Oil6AVU%2BdZtJCDa%2BEQBPTPH0FYoStadVGjl7aCKsFQXcXZnYSRNYcz2G5aJa1ndoAehCJSg9%2B5iLho1nXNvp3XDCHW5Po7e2t7seyrX7X8qdoI1d6IAgfAIq%2F3EowddP&X-Amz-Signature=580c916ff4eaf5f00f82e39ad7bea902dc1f80d4e7b2ea927f5b6194f9d3e5a3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SACLCYZ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUbjY5%2Buroe8UBbMGPoUuW%2BmZ3%2BDeAd5Vo5PvCehBCFwIhAPraA2TX12ruqty4kh9fM3DQpHPJEG5NUjid%2FdN5cdqQKv8DCCoQABoMNjM3NDIzMTgzODA1Igzt%2FPTjbJ5L1iVmPR4q3APJdeGNowinxoeb%2FLMw78gpDqebTu7p7bsPkngC4BxojeHRL9aKMEyjF8Z2%2FRBrK5V7HIyqiEX1O8lKMXWTgqQXjENURoqMlDg%2BZgMMuwzOPlmIbiYUV7ZdMZkF2IsVIucClpE%2Bi0uq%2FQ61OfZA6wchcGR2A38cQNuPvgp7qFJd9f77%2FueIEDEiKfYPNMHoqy0JHDD6ZpWWNVWWFyqpVR5H%2Fyjl39fTwOdWa2JG5oCqwBo9UTj70NGTOlUX10SBxk105vAjMQRlGfDqOx%2BBhNh%2FlVy9oHVhsHCnvwYri%2Fp%2FLKWCejhTo1BLsXOg%2FYRjDqjgm%2FJSbKliZOzeWpL881ji1FJ9rG34k8vwleFYs0p6PPaMXzsBpIICImcBlTRyjWIZnAbNvUZ5IUhuJyfEAC7UmMXpUUPW3cdPX631zrwDhvAwBzdzSXCDzsw5SvU6WITu4tGpDlydJ5yMglrKsdxuatqCn0G8wBG%2F01it3ygAOLnyhTlR%2B1pA2ciPv6%2FR%2FOWswGGOlQQh4yCt45xljj0UVTFTabsBboaXxLFAN%2FfIGd%2FRZ%2Bj8YRImC4KvCgAMKZCBzHaT5CFj0XoSsKNMINwrHpZ0a7kFyFHg327SB8c8WGBGgSQBtbXjrj8SgzCE6%2FC9BjqkAX4TTxQMvXLfvlNU%2FIgm17upvSzNr5Qqt5F6L75XGqWDUSkLA6fF1P%2B8MCRksOdKyl3X1IcxkeFIgGMwLHbH5uH%2BuYO5Oil6AVU%2BdZtJCDa%2BEQBPTPH0FYoStadVGjl7aCKsFQXcXZnYSRNYcz2G5aJa1ndoAehCJSg9%2B5iLho1nXNvp3XDCHW5Po7e2t7seyrX7X8qdoI1d6IAgfAIq%2F3EowddP&X-Amz-Signature=f4d75cef7da74c6df9592d1748a6f32d89993ed2c8fa9eefd4f652ee4edaffc0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

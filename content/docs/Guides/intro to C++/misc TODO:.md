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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C2PNMMK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcbWkfDe7IEVmFRoqTtnlxWBaAG9YWXjbUSLg6PirQyAiAz6LlY8X64nDQleATStmNHF327lDYc4CLqxBVVRvjsFiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH0DHH5hcQaumabfLKtwDkMG3XStEzZxO3OyJzj3fL49EAX4%2BFqidZJyAM3UZId1l30v9PcnPUCPtNl92YtZLeOZs3FD6uVrI7hX0V%2BA0hllXphmfgg4N3FRRRbzI6dB%2BOAs%2BsIKaP94yMGKRvR%2FUGdF3r7evVEZ%2FnZnYe2KdUQVGTYFcELZwPgrqFHL0%2B%2Fq3sjl2ob1eYDkSKx0N5kEoTFLe1yYO9LczD71icz2hr6f1R%2FgGTJ81zc9HmlBRhfk3hA%2FngyGlU8w6ZWIvYRl6Jy%2B%2BxfwTfzG1QOkP8v6CbXuvgwjGtOEj4Z%2Bebh%2F3SKpwZvytBEde9hOzfaq3MhC1C4eOdp%2FVbECOTLgxCY%2BXeOIkgbWUlBVN4SAUzrTjFCISdRAGabCd0VwONMMw2XT5trstCeTw9DLiHGHnIoBpIFphfwja%2BU64J1cxCfxcY2gb5588YapTjwjHsfLFwJY70RdzEahdYHmQkmDDvQ7XxeryDWB9Z20vVff1DMa9xrI9KtQKmkKlUtcIA1q7O8cjEGR%2FLnYhzloQn7ozhBcAS0guGc3%2FqCfPsJbCiUcJrdVxYMpbi1Jz6NtkmyggOjAlTuzYPolQYEIL20R7XVj2hiSRBcngeekCz0ryfNBMLhhxI2nxGRmSD5orL7Ywn%2BbcxAY6pgG%2BzqUslK45fH%2BCJqJGqvcUpR3bxxSpT9rby%2Bz1Dlt1HAprsFGVZN8tQkN2GwOax7MqLPXSDAYCTmLY4Os7ekmeDjSeDa5GTBAdSQZ1Est%2FkT4UCNB0M%2B1fLx6kyrgkecKfSqhYKF9Tnl2IOFO2nQi%2FRE9YnYxAFRfExLn8pNdWmljsB5%2B4YDZk29Ov1PuvxLTQakW%2FmFXeTa0yJ5pJ8WyjHhlW6fR%2B&X-Amz-Signature=b5aec57b16b987dd110cc9114cef071b3227dacc81f399a3e5a93e85ec27034f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C2PNMMK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcbWkfDe7IEVmFRoqTtnlxWBaAG9YWXjbUSLg6PirQyAiAz6LlY8X64nDQleATStmNHF327lDYc4CLqxBVVRvjsFiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH0DHH5hcQaumabfLKtwDkMG3XStEzZxO3OyJzj3fL49EAX4%2BFqidZJyAM3UZId1l30v9PcnPUCPtNl92YtZLeOZs3FD6uVrI7hX0V%2BA0hllXphmfgg4N3FRRRbzI6dB%2BOAs%2BsIKaP94yMGKRvR%2FUGdF3r7evVEZ%2FnZnYe2KdUQVGTYFcELZwPgrqFHL0%2B%2Fq3sjl2ob1eYDkSKx0N5kEoTFLe1yYO9LczD71icz2hr6f1R%2FgGTJ81zc9HmlBRhfk3hA%2FngyGlU8w6ZWIvYRl6Jy%2B%2BxfwTfzG1QOkP8v6CbXuvgwjGtOEj4Z%2Bebh%2F3SKpwZvytBEde9hOzfaq3MhC1C4eOdp%2FVbECOTLgxCY%2BXeOIkgbWUlBVN4SAUzrTjFCISdRAGabCd0VwONMMw2XT5trstCeTw9DLiHGHnIoBpIFphfwja%2BU64J1cxCfxcY2gb5588YapTjwjHsfLFwJY70RdzEahdYHmQkmDDvQ7XxeryDWB9Z20vVff1DMa9xrI9KtQKmkKlUtcIA1q7O8cjEGR%2FLnYhzloQn7ozhBcAS0guGc3%2FqCfPsJbCiUcJrdVxYMpbi1Jz6NtkmyggOjAlTuzYPolQYEIL20R7XVj2hiSRBcngeekCz0ryfNBMLhhxI2nxGRmSD5orL7Ywn%2BbcxAY6pgG%2BzqUslK45fH%2BCJqJGqvcUpR3bxxSpT9rby%2Bz1Dlt1HAprsFGVZN8tQkN2GwOax7MqLPXSDAYCTmLY4Os7ekmeDjSeDa5GTBAdSQZ1Est%2FkT4UCNB0M%2B1fLx6kyrgkecKfSqhYKF9Tnl2IOFO2nQi%2FRE9YnYxAFRfExLn8pNdWmljsB5%2B4YDZk29Ov1PuvxLTQakW%2FmFXeTa0yJ5pJ8WyjHhlW6fR%2B&X-Amz-Signature=80694225e7379f9567250812e167dffe1c5dd949d5c861cf5c7f1cb6a82ba27d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

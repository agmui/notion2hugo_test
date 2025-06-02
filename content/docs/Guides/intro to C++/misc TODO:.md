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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJBDOGEN%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T034421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIApzMra22dE0Ww9FeGCoM9Hs8YqKl6DV0wYmJQgHH6SnAiEAiYbKR8UNcf%2F5OXbRLxMAJ69kGovitKTCTs7g6CNnKVMqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrKnZF8DQ3DLkC4ESrcA3ed3yRXBgfnNryjO55ttOWasGu0NuWEdVghuEvH0a%2Fzy%2BTiYyWhU5xSsM%2BRVzyy1I6hH5vFUTXwk0657O6I%2FdspvKkZNb1DXSTGtgsxj5bozqlOSzOAGxk9Vd5jgui0k2W93y5ylfXdVzspkkeihwqRUzENfQ7z8upHLgD%2BjPQ3%2BqWVt4YnCSELH1vNEyfqWyTvKcZ0SYbBaMbe0p1g5MXInSEWpbocf%2BRzsi%2BKqi1DzIHQgCGcBuGEFMDSuHrbpHXLliR%2FNlmJtBL205n6Ey1FfFlSLcVIKP210rUeeQ%2BlcOwyk%2BIZBBtfyjaFlAcKgCr9X6WNV9ksWE3QiEktXNH474IwEr%2BRU%2FuYEjcKPRhM59dccMSx3qI720dMJvf7NfkQ7ADgycc02YerLUITYQ7JOILA%2F0TWfZok9IuQy1KmdW%2Fg0zm7GSnyYtHeJ5T%2F%2BjeZ9QL8RIoRvQF7Rmhf1vEZgaFY3jQKYhwOFuAbzbPEMkjYSO4hpAltQ1LSpty0OyBwVRz5wFC43KRzHc1%2Bby%2BeQe31OmwIT1dVDIZ%2F5gvVPq2gdfnl6bVngZWfz34BKlgzDt0zrsbDNEOOon6q0nBeHJWeASGDMj5KAYj6XT2JU9svxOKGPpdIu4yRMO%2Bv9MEGOqUBZHW0furPQtqJLe0aJo5wEe0MdLYnmoQsCIfH1bwn932kXhR8TZE%2B6%2BW1MK7hPr6Ie5QyR3dzDyGIulnxMo9r0PF4UD%2Bxx5mNdoxEtF%2FLtTFORQ%2FhLpZ2hN%2FnwuaXgt3E%2BVuYVVthyGIDXwTwsql61un87aECnkYdYZN6h7Zk1AOhQYrApkPHateTxj0vcu%2B9A8F%2FAhBRHNoVQXkAI4834367Uo1v&X-Amz-Signature=76cb2b919663c24185df6ada83bf0c8e93fd2e7cc9a1cfdf4ed5ab127e93d8a2&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJBDOGEN%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T034421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIApzMra22dE0Ww9FeGCoM9Hs8YqKl6DV0wYmJQgHH6SnAiEAiYbKR8UNcf%2F5OXbRLxMAJ69kGovitKTCTs7g6CNnKVMqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrKnZF8DQ3DLkC4ESrcA3ed3yRXBgfnNryjO55ttOWasGu0NuWEdVghuEvH0a%2Fzy%2BTiYyWhU5xSsM%2BRVzyy1I6hH5vFUTXwk0657O6I%2FdspvKkZNb1DXSTGtgsxj5bozqlOSzOAGxk9Vd5jgui0k2W93y5ylfXdVzspkkeihwqRUzENfQ7z8upHLgD%2BjPQ3%2BqWVt4YnCSELH1vNEyfqWyTvKcZ0SYbBaMbe0p1g5MXInSEWpbocf%2BRzsi%2BKqi1DzIHQgCGcBuGEFMDSuHrbpHXLliR%2FNlmJtBL205n6Ey1FfFlSLcVIKP210rUeeQ%2BlcOwyk%2BIZBBtfyjaFlAcKgCr9X6WNV9ksWE3QiEktXNH474IwEr%2BRU%2FuYEjcKPRhM59dccMSx3qI720dMJvf7NfkQ7ADgycc02YerLUITYQ7JOILA%2F0TWfZok9IuQy1KmdW%2Fg0zm7GSnyYtHeJ5T%2F%2BjeZ9QL8RIoRvQF7Rmhf1vEZgaFY3jQKYhwOFuAbzbPEMkjYSO4hpAltQ1LSpty0OyBwVRz5wFC43KRzHc1%2Bby%2BeQe31OmwIT1dVDIZ%2F5gvVPq2gdfnl6bVngZWfz34BKlgzDt0zrsbDNEOOon6q0nBeHJWeASGDMj5KAYj6XT2JU9svxOKGPpdIu4yRMO%2Bv9MEGOqUBZHW0furPQtqJLe0aJo5wEe0MdLYnmoQsCIfH1bwn932kXhR8TZE%2B6%2BW1MK7hPr6Ie5QyR3dzDyGIulnxMo9r0PF4UD%2Bxx5mNdoxEtF%2FLtTFORQ%2FhLpZ2hN%2FnwuaXgt3E%2BVuYVVthyGIDXwTwsql61un87aECnkYdYZN6h7Zk1AOhQYrApkPHateTxj0vcu%2B9A8F%2FAhBRHNoVQXkAI4834367Uo1v&X-Amz-Signature=ca9a0eaba86348d4fb393db7865fcecf87da2e441d0c03caf9568508a1415776&X-Amz-SignedHeaders=host&x-id=GetObject)

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

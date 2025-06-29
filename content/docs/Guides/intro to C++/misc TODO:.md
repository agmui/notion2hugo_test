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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RFU5UBL%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T061202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICE2CbHHDaiMzcLICZiSx6gf%2F%2FNq%2F1bSqGz0gcrTbjfxAiEAyqr93d9QyQPpCkgFn%2FSaYbMkeFzbVbkOtC1sktm7z3AqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbSOQ6MitCJPqrtBSrcA4PrWuLqq31Xao1ABGtSAioxO%2FXzjNGqhuYDGZvueVL6HDf8zzpd9bzhP5COAorRHQUUoBmaU2JUxmSAxcD6EDovPqVzhegXGvo8dMgBhdc4nPjl4d1udMbrMUZ0QCwduZSsG52A3bOTfj8W8tQfYbKeEE11s7%2FDzhgVpnWdsTV9GfoNX5gbAqCx9ydNZahFj1dEt96H3y3d06L88JtlYpC3nKA%2BYHnkMU9Td7igKn2TWT79Lvh7XncKF1FdFOhlCEM5MMwL2tbcd8WyRn%2FaMtBQ7TJF7Scbial4vH85gAIATzmCsSpn827B7YWY9iorLJEle695Z8xQHVih%2B8XZxCugInsSH%2Bkk%2BXUbMlygexwTgZb0dlXA9UMheBik3wwKGbZ2vwdXPb737K2rzpOF8fIl%2B0ooeWY5Wbbu4iN1AP2HKL2bF3moheg6bGizsZqLoRvnYI%2FyA4dkNgpqnGB2T3IVqblahARf2ENgapVjKhbPHqpfGU13hNqJXiFEG5jTCzNsOyC8ybyqxO0kA8qot9wUuooSMubdZ77A4CVqS%2Bp07ti%2BvKEu%2B7VbyZxWPjiDG%2FMOw97vu02tQdtnR9PE4TDMlJveJmZHCf8rG05upMInjWnrdxX7V7SzAE1RMNWOgsMGOqUBlCvbhYDBYFKoNQ6%2FRj7NI9DtPACGgO1kn6l3VIxMOi6og7IsxM1MgFoWiko4eWEiF2peEIBvysbqtRJsfz9RiGW2Yvh4jVgBQp02FeXHvkFTH6NV%2Fou2Ss18m3E%2FMIqN92jwc6Ob5qYf2k931pbxicajgVFj3Xd9msTdAA6LZZANIS6P0nGwZ9Gg6upIWLL0oLdmyBVuqWpoaNlxvrq%2FOr6ZCjdD&X-Amz-Signature=270230872a92ee4d59eb90d718c028c6578ddbcd8fe5265f36cf5d8f82304d74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RFU5UBL%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T061202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICE2CbHHDaiMzcLICZiSx6gf%2F%2FNq%2F1bSqGz0gcrTbjfxAiEAyqr93d9QyQPpCkgFn%2FSaYbMkeFzbVbkOtC1sktm7z3AqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbSOQ6MitCJPqrtBSrcA4PrWuLqq31Xao1ABGtSAioxO%2FXzjNGqhuYDGZvueVL6HDf8zzpd9bzhP5COAorRHQUUoBmaU2JUxmSAxcD6EDovPqVzhegXGvo8dMgBhdc4nPjl4d1udMbrMUZ0QCwduZSsG52A3bOTfj8W8tQfYbKeEE11s7%2FDzhgVpnWdsTV9GfoNX5gbAqCx9ydNZahFj1dEt96H3y3d06L88JtlYpC3nKA%2BYHnkMU9Td7igKn2TWT79Lvh7XncKF1FdFOhlCEM5MMwL2tbcd8WyRn%2FaMtBQ7TJF7Scbial4vH85gAIATzmCsSpn827B7YWY9iorLJEle695Z8xQHVih%2B8XZxCugInsSH%2Bkk%2BXUbMlygexwTgZb0dlXA9UMheBik3wwKGbZ2vwdXPb737K2rzpOF8fIl%2B0ooeWY5Wbbu4iN1AP2HKL2bF3moheg6bGizsZqLoRvnYI%2FyA4dkNgpqnGB2T3IVqblahARf2ENgapVjKhbPHqpfGU13hNqJXiFEG5jTCzNsOyC8ybyqxO0kA8qot9wUuooSMubdZ77A4CVqS%2Bp07ti%2BvKEu%2B7VbyZxWPjiDG%2FMOw97vu02tQdtnR9PE4TDMlJveJmZHCf8rG05upMInjWnrdxX7V7SzAE1RMNWOgsMGOqUBlCvbhYDBYFKoNQ6%2FRj7NI9DtPACGgO1kn6l3VIxMOi6og7IsxM1MgFoWiko4eWEiF2peEIBvysbqtRJsfz9RiGW2Yvh4jVgBQp02FeXHvkFTH6NV%2Fou2Ss18m3E%2FMIqN92jwc6Ob5qYf2k931pbxicajgVFj3Xd9msTdAA6LZZANIS6P0nGwZ9Gg6upIWLL0oLdmyBVuqWpoaNlxvrq%2FOr6ZCjdD&X-Amz-Signature=b8a78fd9ab94deafa1b7ea21ba45b9a70ef18a7c938641581cfe5302a6b6b2e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2QAWRRJ%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T061402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE3YfT3t0eEHjc9AMrqdNiY3ShXXPD%2Bx9%2FzzCBQe3qDWAiEA0JreF32YR8xgk%2BXu%2BKdCEyTMQ0vy%2Fqqt2sSnu2KSAuMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAkBRKNV0l2yqYtHyrcA87EJgoc8UflRzGWpDcz%2BMEFKrQkk87FLyJM34yIt2lvns3iTBkPgav53r%2BzUrajoCvpNtV8QslULjKd3EqUFJIeRmF5vaFEiSLAaGsb%2BUgLiLAJU00ojq2OD%2B9SViAMaFYCjj4448qkNmfwDH8BGI2Cvc4MliMpYY3WAntSKr0TKqxFGcuyUQFKDaYGScI8zIJKFG7uZPxf3Mxm%2BmXSF2PbUDHoq098X87PJSXZvaxutz4AOzxybk0GAsa6s7JX1XdISN4kPtH%2BfiJ4wL8SNekAdPSdhs8WJkvPxq63Ljz1HvPkAse%2BsyAnxzVr2oOxCe7gu8q4jOyfLCymqJQrh8Jt318wyMelGGhaWfFR2ibOWTTZZtVcSeeD587YrRlLMNOW3CYARlyyMcOu2JqIxe7NwgQZ9i77gBSKdjwMvXXidqqPJsXVE56kqta5tMlYWjSMSl1TVx7DNpArBxGI%2FvsryhK6SSPEq2xQLDr2BFa0obHeNnjOTxJnMGJY%2By0D5JkCwhjLvFM3cyYUYqy5aO2K%2FLGRNx2u5%2BuPSEy7b1jeTOBeEoomjWQyGA8eTifYpHCnbIYbrtw8%2FvFmVEwOIWMbIY4uemEUB71U%2Bip0zpbf4inbb9gSaJTG5515MJ7MjcMGOqUBaAkGfGJPTLts5BB2XVKiz7lCxM8cRYRJy1OuMVtbdGZkYdOGa6GKgUMJkHLFqk%2B72mAIGj6pVGOF5dh5XVgNaL01gPjdo5TsugPgDQJkW7vW0TBnqQZoMMjszzUSsA6tc6xdzKSrQNLbHMixSxvwVPbl4E6oNRbM5qk4Osk1brOvbZO%2FLX90bsc5vuue5f1iNTUm34X3G3%2BOU6UwLlOVgFSHlX5x&X-Amz-Signature=eb78e36ddd1cb3062623467c2a3f8ec0b72815d539809f0725288c5820c3fe96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2QAWRRJ%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T061402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE3YfT3t0eEHjc9AMrqdNiY3ShXXPD%2Bx9%2FzzCBQe3qDWAiEA0JreF32YR8xgk%2BXu%2BKdCEyTMQ0vy%2Fqqt2sSnu2KSAuMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAkBRKNV0l2yqYtHyrcA87EJgoc8UflRzGWpDcz%2BMEFKrQkk87FLyJM34yIt2lvns3iTBkPgav53r%2BzUrajoCvpNtV8QslULjKd3EqUFJIeRmF5vaFEiSLAaGsb%2BUgLiLAJU00ojq2OD%2B9SViAMaFYCjj4448qkNmfwDH8BGI2Cvc4MliMpYY3WAntSKr0TKqxFGcuyUQFKDaYGScI8zIJKFG7uZPxf3Mxm%2BmXSF2PbUDHoq098X87PJSXZvaxutz4AOzxybk0GAsa6s7JX1XdISN4kPtH%2BfiJ4wL8SNekAdPSdhs8WJkvPxq63Ljz1HvPkAse%2BsyAnxzVr2oOxCe7gu8q4jOyfLCymqJQrh8Jt318wyMelGGhaWfFR2ibOWTTZZtVcSeeD587YrRlLMNOW3CYARlyyMcOu2JqIxe7NwgQZ9i77gBSKdjwMvXXidqqPJsXVE56kqta5tMlYWjSMSl1TVx7DNpArBxGI%2FvsryhK6SSPEq2xQLDr2BFa0obHeNnjOTxJnMGJY%2By0D5JkCwhjLvFM3cyYUYqy5aO2K%2FLGRNx2u5%2BuPSEy7b1jeTOBeEoomjWQyGA8eTifYpHCnbIYbrtw8%2FvFmVEwOIWMbIY4uemEUB71U%2Bip0zpbf4inbb9gSaJTG5515MJ7MjcMGOqUBaAkGfGJPTLts5BB2XVKiz7lCxM8cRYRJy1OuMVtbdGZkYdOGa6GKgUMJkHLFqk%2B72mAIGj6pVGOF5dh5XVgNaL01gPjdo5TsugPgDQJkW7vW0TBnqQZoMMjszzUSsA6tc6xdzKSrQNLbHMixSxvwVPbl4E6oNRbM5qk4Osk1brOvbZO%2FLX90bsc5vuue5f1iNTUm34X3G3%2BOU6UwLlOVgFSHlX5x&X-Amz-Signature=7d6a062ad468ddb9edb5b5066a98fabb4b67d252f8a17d552b455beb69f1cf1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

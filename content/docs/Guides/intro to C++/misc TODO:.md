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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KAUAWFS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T220656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAYSOYk0ClFk8TtSzAfUgV%2FOrvmzHk%2F3KNVj%2BGd%2BtZmEAiEA%2FnaTiI22LV1PtHiB8J6wL9YP6hi%2BKNo2vzhBNNldQn0qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHq8gfjbNEVjjhLuvSrcA5K%2FZudaf0rsx4eLVAXFCKaitj0EBcPwXTuNopl5SDdHKX%2ByNR2N7IMDbcCTCj56qyiO1w2f3N%2FizVxHm%2Bo3lp7pfJWGeaFWTEiWHivr36HWAn%2BSnLoV08voW6hw8TArzNvswnRyOALbedNAXlkJMtbepN%2Fhu7a6387yDs6Hyr7Zp9Yff6BK2fWzFFKw3a3QOkqRUCTLggBxVZ7VNfFN3eBsuu%2FH72okhRpB2yQExBK9SIzBNb8I%2Bot7ysCtamIUgo%2Bq5OPHTrQTn8U4mChPdwdJ6BMLrIl1Qh1GtguoL30DhYK5i0J65tB9OKFEII8NjR%2Bigh4lW9O%2BjS7iQVzfdyiBqCjZjEy%2F9ih0fdOQ1JLosVNMbA7I35wgMQfMRFNOHDMppq%2FoHHmF2ryTr50HFQmMQstoZ%2FhkXLPZ4%2BbfQrKCS5BuCKSRAh5ojJ7PluHBZf67ikUS10zJGrOJ%2Bb6Akj1Q%2Fsdxrl3W7MO21s8cT8hE0Tzl33iSPTZk9nARzgzItgvisNXr76Xn51aRPnTjUjMApIGpi6la7fEv%2B8OHuna6o5WcI4ver2YOD9RAzoT1CpsY2kD%2FUsI3jXlC5Gxh14eG%2B3MwZBfOZbl9DpAtS6SfPZpb69DHGmL3fWaaMKXLgb8GOqUB%2B%2F4yVO7YVVOe4u8Cluie93Jr%2BcJo3sflsRT3%2FOW93qsV7jx9sIgTsDB5R6gfRWlxmK4DNw9gZ9rgPsio7g7nzMEvVZi9mIfnn9LyviQNCt%2FSmAuVc5eNYSwMYZ%2B%2BUPXP4TlnW53zeq5xXMnEeRxSuZyJmmyqtrz9va8E2%2B2sXWq4dwAXoS7S%2B9huoE%2FZod9W2EjYXtCLm9aj7UHb0SQ2M6Cyf0w9&X-Amz-Signature=dfe68fc5c2adb3af5d12815108ff6a4047b295cb4bc6f6a51e5d8579515f2801&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KAUAWFS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T220656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAYSOYk0ClFk8TtSzAfUgV%2FOrvmzHk%2F3KNVj%2BGd%2BtZmEAiEA%2FnaTiI22LV1PtHiB8J6wL9YP6hi%2BKNo2vzhBNNldQn0qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHq8gfjbNEVjjhLuvSrcA5K%2FZudaf0rsx4eLVAXFCKaitj0EBcPwXTuNopl5SDdHKX%2ByNR2N7IMDbcCTCj56qyiO1w2f3N%2FizVxHm%2Bo3lp7pfJWGeaFWTEiWHivr36HWAn%2BSnLoV08voW6hw8TArzNvswnRyOALbedNAXlkJMtbepN%2Fhu7a6387yDs6Hyr7Zp9Yff6BK2fWzFFKw3a3QOkqRUCTLggBxVZ7VNfFN3eBsuu%2FH72okhRpB2yQExBK9SIzBNb8I%2Bot7ysCtamIUgo%2Bq5OPHTrQTn8U4mChPdwdJ6BMLrIl1Qh1GtguoL30DhYK5i0J65tB9OKFEII8NjR%2Bigh4lW9O%2BjS7iQVzfdyiBqCjZjEy%2F9ih0fdOQ1JLosVNMbA7I35wgMQfMRFNOHDMppq%2FoHHmF2ryTr50HFQmMQstoZ%2FhkXLPZ4%2BbfQrKCS5BuCKSRAh5ojJ7PluHBZf67ikUS10zJGrOJ%2Bb6Akj1Q%2Fsdxrl3W7MO21s8cT8hE0Tzl33iSPTZk9nARzgzItgvisNXr76Xn51aRPnTjUjMApIGpi6la7fEv%2B8OHuna6o5WcI4ver2YOD9RAzoT1CpsY2kD%2FUsI3jXlC5Gxh14eG%2B3MwZBfOZbl9DpAtS6SfPZpb69DHGmL3fWaaMKXLgb8GOqUB%2B%2F4yVO7YVVOe4u8Cluie93Jr%2BcJo3sflsRT3%2FOW93qsV7jx9sIgTsDB5R6gfRWlxmK4DNw9gZ9rgPsio7g7nzMEvVZi9mIfnn9LyviQNCt%2FSmAuVc5eNYSwMYZ%2B%2BUPXP4TlnW53zeq5xXMnEeRxSuZyJmmyqtrz9va8E2%2B2sXWq4dwAXoS7S%2B9huoE%2FZod9W2EjYXtCLm9aj7UHb0SQ2M6Cyf0w9&X-Amz-Signature=76c1dfa608bf77b39065940f4b8bbd8b0a870ae50c17c6b4794f45c0ca91e81b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

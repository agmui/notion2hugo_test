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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WXWU462%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T040941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIHe0hwira3L4JEHD48RYouXJBxzsg6RcsHaEs2AL6dCnAiEAojZ%2B%2FTmbiyxOC8Ikb3lz3pmuYTw3OK4mpNempj%2Fu9tcqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKjnotLdQ23%2BSKzlwSrcA61UrgjtwzfNqPvNf2kIZUCbjCdXu1egcfTNpAUc5%2B3W0EaJlVnkIBDRw%2BqtYEsS8sg21Za7dgKikhtwV7sA8dzO93ezdHkWNSm0dJ0LFdMq9VOey8y7hSlKytxE61BL5MFK6o%2Bn2wdKMeYrGqTb%2BZxxdkJs2sqc8wV2EiJjpbUYEfF0V03M4SyFNZYDHld6EgHXRO6CrGjtcy5c4t7ERIPaDrTwWSSYYvRs8k390AhcsPPwHjwG5H7YtJhZ%2B5MiZSs4wxtFCAYECtXkgvZAFPBbYBUAq5Cm3JWGh6wXCB1JI8CGcw1U3N3M2yo%2F6I9ws3gv3q8eRQFaDw8gCo%2BKPRFxCBPVkAjqZRxgykIneBErD0dMlQ6UFZxxwGpzQ%2F4O0exqI1sKnEHDhZZaM4erH6lVyyGVYoCrC0bysKpaeJe2s9I8Y48U8BTm6QgLtB5FYjnqlkd0f%2BTrgmUu5QXmkM9K8kZr3pF%2FZg8Y%2FrGexEMVFo050RhjdgxTRY48gBEyFTmgqA9x6zlwrVe%2FdQDAobsP9a%2F%2Fo6APsk%2BoRf8eBhz%2FgLGkBGN5LvMdQez%2FhLlY7hmwhs%2FzXapG5dhaY3nCWpoNKhXV3%2Fm0Kr4fi2jWK2wUDURcmBSNkEOE4RtyMLCCkcAGOqUB0iSTGot7KQXpPsswHoWrUFKaVK6SWGveunGZ767BvDMcF4wP76HWabRqWoeBNsZmgOd%2BcM8OVsdsxFY%2FjGNndwSw7gFAfT63soOE%2F01LB2BaR2c%2Bn7vB89cXY5LtRPNAC%2FObCe5fNfGWsYkjZzuFZ%2Bc8L9bU2CUwvZ5pF7vegNGzSM9FrgAw2C6B4CUkCdbSCP9kGqnf%2B4AaKZ9X49jicRmikyfq&X-Amz-Signature=8cfa651fc730a40dd943052dd19164ee823f12bd8ce0d65373dd2afe5fbca5d4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WXWU462%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T040941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIHe0hwira3L4JEHD48RYouXJBxzsg6RcsHaEs2AL6dCnAiEAojZ%2B%2FTmbiyxOC8Ikb3lz3pmuYTw3OK4mpNempj%2Fu9tcqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKjnotLdQ23%2BSKzlwSrcA61UrgjtwzfNqPvNf2kIZUCbjCdXu1egcfTNpAUc5%2B3W0EaJlVnkIBDRw%2BqtYEsS8sg21Za7dgKikhtwV7sA8dzO93ezdHkWNSm0dJ0LFdMq9VOey8y7hSlKytxE61BL5MFK6o%2Bn2wdKMeYrGqTb%2BZxxdkJs2sqc8wV2EiJjpbUYEfF0V03M4SyFNZYDHld6EgHXRO6CrGjtcy5c4t7ERIPaDrTwWSSYYvRs8k390AhcsPPwHjwG5H7YtJhZ%2B5MiZSs4wxtFCAYECtXkgvZAFPBbYBUAq5Cm3JWGh6wXCB1JI8CGcw1U3N3M2yo%2F6I9ws3gv3q8eRQFaDw8gCo%2BKPRFxCBPVkAjqZRxgykIneBErD0dMlQ6UFZxxwGpzQ%2F4O0exqI1sKnEHDhZZaM4erH6lVyyGVYoCrC0bysKpaeJe2s9I8Y48U8BTm6QgLtB5FYjnqlkd0f%2BTrgmUu5QXmkM9K8kZr3pF%2FZg8Y%2FrGexEMVFo050RhjdgxTRY48gBEyFTmgqA9x6zlwrVe%2FdQDAobsP9a%2F%2Fo6APsk%2BoRf8eBhz%2FgLGkBGN5LvMdQez%2FhLlY7hmwhs%2FzXapG5dhaY3nCWpoNKhXV3%2Fm0Kr4fi2jWK2wUDURcmBSNkEOE4RtyMLCCkcAGOqUB0iSTGot7KQXpPsswHoWrUFKaVK6SWGveunGZ767BvDMcF4wP76HWabRqWoeBNsZmgOd%2BcM8OVsdsxFY%2FjGNndwSw7gFAfT63soOE%2F01LB2BaR2c%2Bn7vB89cXY5LtRPNAC%2FObCe5fNfGWsYkjZzuFZ%2Bc8L9bU2CUwvZ5pF7vegNGzSM9FrgAw2C6B4CUkCdbSCP9kGqnf%2B4AaKZ9X49jicRmikyfq&X-Amz-Signature=2bcfa6ae7007f5f59c1804951a4939c127683c5fdf387839886f01c158e3a572&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4YA5OGT%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnq8316iNYAEE4ul0oQzjrXL2f%2BBt2nBLsYZmgP5wNuAiEAkIywLBRxrooqFBh%2Fk9MiOEsPo%2BwWQEFbdrwi4b8%2BBPIqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKY8lv53HEbE1SADqyrcA2OQP%2FS1DUcSBKpNg1RgxR9G34sVpHitDzqXTkDq31wdLt4tD0IAHdezuiEH2Z%2FRTB143iR6r0yU4lkpKt%2B4O2RoNYaLHkXW9%2BoAKgIqycEINWNjyoLrF%2F9L01ov%2FVYf82iRYwA%2BMcjgR%2F6ljd34e7qRXGZ%2BIH63g1lMKmSKoqR0rY0EklAC1XeB9wK3WyeEEkpAZQcuEzqp1Q0jM27e6TZjIawJJQkc9HCi9U%2BZrlBMvp1%2BO%2BPquV4XF9765yZX3dvrjmVxtjjhH9KhQp18GiMkRDaIML27Na%2BgnMyttY13vUv2BbK99TsnVKD%2BKGhCvUgYrZvxeNO76rWXayx2UMylYfnQJQXQ1Fv5HapKyClrruG3lxuG%2F3sjZac5Q7RIxPVbn1QKOxNm6LlbFz7YDavmJTnge6rCotgyMaw7HOtEdcQl4BfF%2FL9Ti%2Fyg0S8beH2fiqgjhdNNDm0WI1R8vHimj9r2E68uyt3HtlFSrfEqJRj6mtq3CDJuEDXDwR0lK9vVq6epI0EFhbn%2BrAuKFE4ubwdExUYLuQqn4npKke8Or6PEKU3txEJyuP8PlwQLWllqAYfzzXutGEu7IqOy8Fj244ZSnAjKOzUKgLlgabsoAwtuOQma9Oe7chB4MNLNwMMGOqUBH4MNn5gRr2BE91fa3YPIxCcf%2FgRKrkJUcqEV2HDXPpBoZi0%2BScTdrTm4xJdf670S6aiBJLGVoh%2F%2FFE0gvIny2tdt1ETSQra48bqMCVO40XKrH8IUm32ZV1Sx29r%2BxWc4Zas1EJX6pVvgbC%2ByFRea94JbNcATWOPiIkf8g5kqPv5f6ihDuN%2BIMW46727LWaGAECuZlKNgDvUHG%2BCl1hFJMEaGfgFL&X-Amz-Signature=2e37f64743e8cbfbff599a430e6e2ab23a6d291a8eed0c26090a0e4dbee2412d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4YA5OGT%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnq8316iNYAEE4ul0oQzjrXL2f%2BBt2nBLsYZmgP5wNuAiEAkIywLBRxrooqFBh%2Fk9MiOEsPo%2BwWQEFbdrwi4b8%2BBPIqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKY8lv53HEbE1SADqyrcA2OQP%2FS1DUcSBKpNg1RgxR9G34sVpHitDzqXTkDq31wdLt4tD0IAHdezuiEH2Z%2FRTB143iR6r0yU4lkpKt%2B4O2RoNYaLHkXW9%2BoAKgIqycEINWNjyoLrF%2F9L01ov%2FVYf82iRYwA%2BMcjgR%2F6ljd34e7qRXGZ%2BIH63g1lMKmSKoqR0rY0EklAC1XeB9wK3WyeEEkpAZQcuEzqp1Q0jM27e6TZjIawJJQkc9HCi9U%2BZrlBMvp1%2BO%2BPquV4XF9765yZX3dvrjmVxtjjhH9KhQp18GiMkRDaIML27Na%2BgnMyttY13vUv2BbK99TsnVKD%2BKGhCvUgYrZvxeNO76rWXayx2UMylYfnQJQXQ1Fv5HapKyClrruG3lxuG%2F3sjZac5Q7RIxPVbn1QKOxNm6LlbFz7YDavmJTnge6rCotgyMaw7HOtEdcQl4BfF%2FL9Ti%2Fyg0S8beH2fiqgjhdNNDm0WI1R8vHimj9r2E68uyt3HtlFSrfEqJRj6mtq3CDJuEDXDwR0lK9vVq6epI0EFhbn%2BrAuKFE4ubwdExUYLuQqn4npKke8Or6PEKU3txEJyuP8PlwQLWllqAYfzzXutGEu7IqOy8Fj244ZSnAjKOzUKgLlgabsoAwtuOQma9Oe7chB4MNLNwMMGOqUBH4MNn5gRr2BE91fa3YPIxCcf%2FgRKrkJUcqEV2HDXPpBoZi0%2BScTdrTm4xJdf670S6aiBJLGVoh%2F%2FFE0gvIny2tdt1ETSQra48bqMCVO40XKrH8IUm32ZV1Sx29r%2BxWc4Zas1EJX6pVvgbC%2ByFRea94JbNcATWOPiIkf8g5kqPv5f6ihDuN%2BIMW46727LWaGAECuZlKNgDvUHG%2BCl1hFJMEaGfgFL&X-Amz-Signature=1eedda5cb950de1262388b452d7e9023deae44188fb3f76c91b24ea06d85e830&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

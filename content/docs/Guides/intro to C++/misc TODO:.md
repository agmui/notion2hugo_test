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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TM7KHRP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T100841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIH6Tkf0IX%2B9SfOd6mhgEdMjlh4Rd4QwXEqGLx%2BdpKSfoAiEAm12XPfMXVvyeFjEUPDCVWmoJyOokVs6KzLjcFiFumjMqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJDd2ipb1zYsyeOGUircA6l8ADUAAP01MWLuawyrR437lFuGl5PRLeKoIZ2GKdJdIbIdM0VK8dpOCULyr8sBi4gQUrvkaCB9Th4s861U17byLrZXHgi7dsNvsM3FnSIlorySzmwd9%2BtqwIZsGJKgYS8yWGPcOHbjQnCRL%2Fx7cqQ5ioPCDl3GnY5UYNxJ1%2FwqYShhBxv4I42Fm4H0HZ6VPRaAAHX7AxOPY9WpCIw4IG78hn0lycmVc8UANPnuMX1FOwStz4plQxP%2FXhRmkusZV1LvznAH9JF23x6a2l69kws3WL1utn%2FPD6i2qveFkIeK6KNnY6Ce2xLxQ7eZ40luCs2sMjbflgoTMvU1f%2BD%2BL2BhNVafJudIKWl%2FWfau3ZBOw5Cl3JwmQ99JuNG6ps8e%2FeSNaXH1Lh7izzTtNj8RQfRV6UEc%2BUhfWg11VLTSGjFtIh7vHomH%2BMS8cq4aeqctdgGF4DS82bLZgME75S1uBvQN4sGtR9igAPSn57Cyj649VyHf7PcoQ1972Or5el7s3P8S%2FltMQXPz75%2FppHaYWGrzlR9HOMXgUfbNctWG7UCto1ZpbMNkd0IipYtZog8A6Sg0lqZLUAIEoo5uWLXdHCEPN1I62XrA4jQaZxTxgG0pqTy58BqHQqaojCrHMOjX9L4GOqUBp%2BwSXdkmwq4WK4Qm7wU5BlESblDTsNiz9UzAJIlPQclneJ2S%2FEg%2FEPd7yktRvCtKRTP6xGd83JmVFzImupPjoqzaVHm%2Fo5aZbF%2BSiuMl2xek1bQs1jnHLlnCCleZeI%2FUwnkZLndkGZfFTKQ%2B9sue8O8Mc5lNeWG0O8k7%2Fbk4qoVGwTjl9CImrrQQysfxAf1tk0MumWfcvO8RLpCyrCnonGmkQNcv&X-Amz-Signature=d556cb554a6a07def026a89cd61a66cb3eb0d0f1876433eb713175b1c4060e9b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TM7KHRP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T100841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIH6Tkf0IX%2B9SfOd6mhgEdMjlh4Rd4QwXEqGLx%2BdpKSfoAiEAm12XPfMXVvyeFjEUPDCVWmoJyOokVs6KzLjcFiFumjMqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJDd2ipb1zYsyeOGUircA6l8ADUAAP01MWLuawyrR437lFuGl5PRLeKoIZ2GKdJdIbIdM0VK8dpOCULyr8sBi4gQUrvkaCB9Th4s861U17byLrZXHgi7dsNvsM3FnSIlorySzmwd9%2BtqwIZsGJKgYS8yWGPcOHbjQnCRL%2Fx7cqQ5ioPCDl3GnY5UYNxJ1%2FwqYShhBxv4I42Fm4H0HZ6VPRaAAHX7AxOPY9WpCIw4IG78hn0lycmVc8UANPnuMX1FOwStz4plQxP%2FXhRmkusZV1LvznAH9JF23x6a2l69kws3WL1utn%2FPD6i2qveFkIeK6KNnY6Ce2xLxQ7eZ40luCs2sMjbflgoTMvU1f%2BD%2BL2BhNVafJudIKWl%2FWfau3ZBOw5Cl3JwmQ99JuNG6ps8e%2FeSNaXH1Lh7izzTtNj8RQfRV6UEc%2BUhfWg11VLTSGjFtIh7vHomH%2BMS8cq4aeqctdgGF4DS82bLZgME75S1uBvQN4sGtR9igAPSn57Cyj649VyHf7PcoQ1972Or5el7s3P8S%2FltMQXPz75%2FppHaYWGrzlR9HOMXgUfbNctWG7UCto1ZpbMNkd0IipYtZog8A6Sg0lqZLUAIEoo5uWLXdHCEPN1I62XrA4jQaZxTxgG0pqTy58BqHQqaojCrHMOjX9L4GOqUBp%2BwSXdkmwq4WK4Qm7wU5BlESblDTsNiz9UzAJIlPQclneJ2S%2FEg%2FEPd7yktRvCtKRTP6xGd83JmVFzImupPjoqzaVHm%2Fo5aZbF%2BSiuMl2xek1bQs1jnHLlnCCleZeI%2FUwnkZLndkGZfFTKQ%2B9sue8O8Mc5lNeWG0O8k7%2Fbk4qoVGwTjl9CImrrQQysfxAf1tk0MumWfcvO8RLpCyrCnonGmkQNcv&X-Amz-Signature=4f742d4cc09c2242729034eac7de9e389833607ee7318ffc343574ed0d62c652&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635DWWJU2%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T160830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKxF%2Bxdi00Uu4kcJc1VZxubjbuwoeDQI71k3RU%2BGz3CAIgHG3MeUeef2oQgBai%2BwQ9oSaOeyxjWsNMJX9gYNuDdUAq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDDyE2t8%2BoZ0SfzV8LSrcAwxGtzhAEl6aUiVE%2B3FOkYmWb%2FHUieqFFYDi7mWyheZJWgmXpdj1yCRnFKmW5vTE%2BdpIVfwxxGuAIJxQObQgZNCHksJLNO9xS3SsER9r1EHleePTn1AR82%2FuA3oiDpCSn6c%2FJO%2BPzSypmNhAqfKHf6VpS0ipNbXRTu82AOTuICxky9kPaG9EGjIEY8EKyRl6VS0ckt30za0opxHjxR6UIDyGS1wzGT%2BSMxzwqtBvf09C3xUEcEJM%2Bpxm6m7uXv7tGe4XGR9flx9RkJMUw4kZLF9gwS7QJaGn5YrpIlFEXMk4w9JptJYkw4Wl7ahUSgj4Eker55ylexTyTCzycuXBcEeYJoq%2Bd%2FcnG8JIdq1UMicRm5cN0mRdL7t%2Bh2sa1u6c07g5FyyhRlOVg7rNZ7UwRIC4scQFdXKFRKRYUJp6nWZGVAFyUqi4NCdOqn19lh0TFTQOOUgbHHYGzghjJ636H2Q1yMVXHjwnoadqWZ2VGBFIqeh%2FQWK4KLbcDzqMQSXzJA6n4i4Se9SP%2B%2B8KLLRAQHuhArmj1ES7KGHoMf%2BwB1VwHMmriWrKZMA8HYVFL%2FarkinYxKRdu9gXnMbi0PRd42sL45PtjsRGlO53IGeSDDDl%2BfdDwyXkBp%2FFeZuCMOq8uMAGOqUBPtoSTu5m3l%2FwiakY%2FpvW80pQ9GJ5sO9x1CfAg5tXinpn8S5w28QNiQBvRtlILScPQzJto%2FXq0aHy1D4%2BTx%2Fd71GUCPR2ALtIupBBgx1wz90AUBF8lEYQcfOb7Bd93wQKGqHwBu%2FJDn4BTiIEA3s9kyJpdLzuQ2Xo4CnSWeJj%2BQ4HkO0vbyt8wGZ3w6ruK2VNpnlEYrQN5iHsU8YZb34aVvclJsop&X-Amz-Signature=7663283fe8d0f890f9894b8d678180b97f7d4abe90cc3e884df171ffdaf1a052&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635DWWJU2%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T160830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKxF%2Bxdi00Uu4kcJc1VZxubjbuwoeDQI71k3RU%2BGz3CAIgHG3MeUeef2oQgBai%2BwQ9oSaOeyxjWsNMJX9gYNuDdUAq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDDyE2t8%2BoZ0SfzV8LSrcAwxGtzhAEl6aUiVE%2B3FOkYmWb%2FHUieqFFYDi7mWyheZJWgmXpdj1yCRnFKmW5vTE%2BdpIVfwxxGuAIJxQObQgZNCHksJLNO9xS3SsER9r1EHleePTn1AR82%2FuA3oiDpCSn6c%2FJO%2BPzSypmNhAqfKHf6VpS0ipNbXRTu82AOTuICxky9kPaG9EGjIEY8EKyRl6VS0ckt30za0opxHjxR6UIDyGS1wzGT%2BSMxzwqtBvf09C3xUEcEJM%2Bpxm6m7uXv7tGe4XGR9flx9RkJMUw4kZLF9gwS7QJaGn5YrpIlFEXMk4w9JptJYkw4Wl7ahUSgj4Eker55ylexTyTCzycuXBcEeYJoq%2Bd%2FcnG8JIdq1UMicRm5cN0mRdL7t%2Bh2sa1u6c07g5FyyhRlOVg7rNZ7UwRIC4scQFdXKFRKRYUJp6nWZGVAFyUqi4NCdOqn19lh0TFTQOOUgbHHYGzghjJ636H2Q1yMVXHjwnoadqWZ2VGBFIqeh%2FQWK4KLbcDzqMQSXzJA6n4i4Se9SP%2B%2B8KLLRAQHuhArmj1ES7KGHoMf%2BwB1VwHMmriWrKZMA8HYVFL%2FarkinYxKRdu9gXnMbi0PRd42sL45PtjsRGlO53IGeSDDDl%2BfdDwyXkBp%2FFeZuCMOq8uMAGOqUBPtoSTu5m3l%2FwiakY%2FpvW80pQ9GJ5sO9x1CfAg5tXinpn8S5w28QNiQBvRtlILScPQzJto%2FXq0aHy1D4%2BTx%2Fd71GUCPR2ALtIupBBgx1wz90AUBF8lEYQcfOb7Bd93wQKGqHwBu%2FJDn4BTiIEA3s9kyJpdLzuQ2Xo4CnSWeJj%2BQ4HkO0vbyt8wGZ3w6ruK2VNpnlEYrQN5iHsU8YZb34aVvclJsop&X-Amz-Signature=4a103903816dacc2fc4170ab4316003ffaa29167cfa1d9f4605b2438ca4e13ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

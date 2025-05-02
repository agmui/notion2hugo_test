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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSB3NC52%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T161006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQCGAQTJ3CpAfFi1Tyg%2BN8x9iws5YaPs%2B%2FS%2BSRS4YAr1FQIgFu6zXj%2BkVxsWddDA5g%2Fydi%2Bwo43i3NMHyKnQ3DKyDzMqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgzvxfoCkTMmWX9kyrcA4IfCq6teCHNPPpSd9Ji91d%2Fy2vscqWPgYXRZqmKNE2GatH%2FmKrsqteSMfvVaW9iF501OA6x0KfDeXHRtsnUWrPAJb2XK6f60hMMg%2B6WRUlDFavGbdfeD4nqEZxnq0FYSIXTyuUBmlVUr9MlXB4K5QLf17JxdYZVA%2BzkKdCmGaIRS8qxFFCyuebRjmnbKyArQUtuh%2BZlLJbBkGQW1elf329tVvF3MxNYOwI%2FXrxwwjILwM%2FHm9zPtTVPWHL4zoKzXR8Yr6IVZZFL%2FhvAYzeFAiOkDwSxzPmCLLuMTeZCUJxVH5FiZJWljUpl1S9rBlVvKjHqeh6fw5aM4zBDC5r6u4LssAjGVr2vp7jRb5vKfAulUh9t0GzWwyIaDrtzP3dU63LU00xIwy%2Flq2KnCeBQ4dCSUK5ekTiLE%2BDOfpcYzu%2Bl5K%2FP%2F1J3X%2Bdjibu%2BQs%2FgFjOjHI1%2F284gYGAeetc%2B30tq8ronHWfpw42dqY0WoBqj%2BoehUkEzFPD1LkP1PXxaW13XddSrFeFAb9TtQu6O2yKeZkRcC4SHa9uDzpkZ60gP7vxoszxEvHQ%2BvAyGr0%2F4zFiKumDaaAatqIKLRl6dBku5B2yarFIQK58IO0g4mA2Cq%2FcaxXDo3JDojVfwMMPI08AGOqUBUPOAdIlXLpLPP56B1qDksS%2B3AU2P9UC2KGJVIPelR9%2B18RqnxTWGUHwnnXddW1Ou3d9cFqsSxaaGzEqcBSOLlg8cU9Ps4Dm5lYOVaEDEnyNX1GuJYcpCvs1mgmqcW8KHiHDt8gG4%2FHa%2BDwGd9FuRFXQbZNgvRdSGlQcahipPcnpzwVf2bep%2FyIxwSYU%2BRUFT75Z380jIs7N3iz9K4ShXpXBa9rhe&X-Amz-Signature=0aaa5b1d206175b1f279f911dfa0f8f3e22ba10f8206448a51920290d0fa4e8e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSB3NC52%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T161006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQCGAQTJ3CpAfFi1Tyg%2BN8x9iws5YaPs%2B%2FS%2BSRS4YAr1FQIgFu6zXj%2BkVxsWddDA5g%2Fydi%2Bwo43i3NMHyKnQ3DKyDzMqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgzvxfoCkTMmWX9kyrcA4IfCq6teCHNPPpSd9Ji91d%2Fy2vscqWPgYXRZqmKNE2GatH%2FmKrsqteSMfvVaW9iF501OA6x0KfDeXHRtsnUWrPAJb2XK6f60hMMg%2B6WRUlDFavGbdfeD4nqEZxnq0FYSIXTyuUBmlVUr9MlXB4K5QLf17JxdYZVA%2BzkKdCmGaIRS8qxFFCyuebRjmnbKyArQUtuh%2BZlLJbBkGQW1elf329tVvF3MxNYOwI%2FXrxwwjILwM%2FHm9zPtTVPWHL4zoKzXR8Yr6IVZZFL%2FhvAYzeFAiOkDwSxzPmCLLuMTeZCUJxVH5FiZJWljUpl1S9rBlVvKjHqeh6fw5aM4zBDC5r6u4LssAjGVr2vp7jRb5vKfAulUh9t0GzWwyIaDrtzP3dU63LU00xIwy%2Flq2KnCeBQ4dCSUK5ekTiLE%2BDOfpcYzu%2Bl5K%2FP%2F1J3X%2Bdjibu%2BQs%2FgFjOjHI1%2F284gYGAeetc%2B30tq8ronHWfpw42dqY0WoBqj%2BoehUkEzFPD1LkP1PXxaW13XddSrFeFAb9TtQu6O2yKeZkRcC4SHa9uDzpkZ60gP7vxoszxEvHQ%2BvAyGr0%2F4zFiKumDaaAatqIKLRl6dBku5B2yarFIQK58IO0g4mA2Cq%2FcaxXDo3JDojVfwMMPI08AGOqUBUPOAdIlXLpLPP56B1qDksS%2B3AU2P9UC2KGJVIPelR9%2B18RqnxTWGUHwnnXddW1Ou3d9cFqsSxaaGzEqcBSOLlg8cU9Ps4Dm5lYOVaEDEnyNX1GuJYcpCvs1mgmqcW8KHiHDt8gG4%2FHa%2BDwGd9FuRFXQbZNgvRdSGlQcahipPcnpzwVf2bep%2FyIxwSYU%2BRUFT75Z380jIs7N3iz9K4ShXpXBa9rhe&X-Amz-Signature=fac2f063edaa41115e4674cb09cfc84ea4b0f6ad0feabd9370c366330ae5e6c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

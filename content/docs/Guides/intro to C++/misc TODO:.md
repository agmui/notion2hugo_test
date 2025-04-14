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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4SHZ4FS%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T061318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtXWm87QBvpxgrVmg7wGnqK0m1hHGUV4hqqTKM5Q4pEgIgHQkvMnxROP1pQvRTSStH5xSxC2IMziPSAHZXV3lm%2F3IqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKI918GLccB4uctfgyrcA4Www5x0KpYD7PhKRBnmGCbppHXpoe%2F2UHTgkBjfCgVRb5Oex5uDsEANAAyqTBWlyvMgJBMx4a3g0zqS9H3a%2F8lno%2Bcsz%2BLGlJehxuSmgJtzGq7GVC44mgJDNLOE53uqZfckzU3ID%2Fw8mqZ%2Bli3X2m3lr%2B0K4RkudjrR310zbbrnT5Pfxzvm0U65fyogNB11cig9iaYCHeDYKgghzPhLsORtxfOcfEY%2BensGSeA4uJ2%2BeUskomqr%2FPspnYk5uHLnOXOR%2Bmd1K4Io75ug%2F9d32GMutj2yg%2Bd9rEzpCDrCTf6HddmHfYQXjAEXGGkM4EH%2BH5Aoa%2BjOMDrWoMudlIToK%2B%2Fuu9%2FJ197Ko66CCoWB1ukMpcoeLvP5tQOaOB%2Fur93bQsmo0ZZweUZQ5kuEpdYjmA47nZzBKOLf%2FpigVcTadA4q5pKOesL07j4hjlOg%2Bfm3IkvytHsUFyh%2Fx%2FnzA9OIZX4kH0pvDTzrpE3VSTuBTmf3ywPDmwdQ%2FlQmhwRnF5nPvDek7J6DtJlexEZv72cP9bypjbr0AE%2BV3kL9EselUBb4U6K23GdRUhXGGkrqSEkal%2B9ko9Ggru5%2B4%2B79GgWLQjF0ko3JbhDydGSO98HRH9JLfq2zFQy65E0Nx3shMJHJ8r8GOqUBkt6jhuySeBdcjDXVHaLYElU6%2B2wefYS%2BnrKJflODZoVm9%2BLR7w1JhmdhSDijFykkc5azkKzH22W1V68SWHBmMJBdy5mvHnkkbwtBR3NzKWaAiCLYGUIZe%2Baf7lR3IbNqPyhra%2BmlLDNMwQn5zjZkAvG06bp76xyiS31WmvfZVJlF6OvpmS15uyXGO3tGeYXR61Ug64KQIMYTkoFc9LIjELsfiBqn&X-Amz-Signature=04182a2f011b4766cfdbce2f864f37ccc239138c4925594a34d5be66d52497e6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4SHZ4FS%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T061318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtXWm87QBvpxgrVmg7wGnqK0m1hHGUV4hqqTKM5Q4pEgIgHQkvMnxROP1pQvRTSStH5xSxC2IMziPSAHZXV3lm%2F3IqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKI918GLccB4uctfgyrcA4Www5x0KpYD7PhKRBnmGCbppHXpoe%2F2UHTgkBjfCgVRb5Oex5uDsEANAAyqTBWlyvMgJBMx4a3g0zqS9H3a%2F8lno%2Bcsz%2BLGlJehxuSmgJtzGq7GVC44mgJDNLOE53uqZfckzU3ID%2Fw8mqZ%2Bli3X2m3lr%2B0K4RkudjrR310zbbrnT5Pfxzvm0U65fyogNB11cig9iaYCHeDYKgghzPhLsORtxfOcfEY%2BensGSeA4uJ2%2BeUskomqr%2FPspnYk5uHLnOXOR%2Bmd1K4Io75ug%2F9d32GMutj2yg%2Bd9rEzpCDrCTf6HddmHfYQXjAEXGGkM4EH%2BH5Aoa%2BjOMDrWoMudlIToK%2B%2Fuu9%2FJ197Ko66CCoWB1ukMpcoeLvP5tQOaOB%2Fur93bQsmo0ZZweUZQ5kuEpdYjmA47nZzBKOLf%2FpigVcTadA4q5pKOesL07j4hjlOg%2Bfm3IkvytHsUFyh%2Fx%2FnzA9OIZX4kH0pvDTzrpE3VSTuBTmf3ywPDmwdQ%2FlQmhwRnF5nPvDek7J6DtJlexEZv72cP9bypjbr0AE%2BV3kL9EselUBb4U6K23GdRUhXGGkrqSEkal%2B9ko9Ggru5%2B4%2B79GgWLQjF0ko3JbhDydGSO98HRH9JLfq2zFQy65E0Nx3shMJHJ8r8GOqUBkt6jhuySeBdcjDXVHaLYElU6%2B2wefYS%2BnrKJflODZoVm9%2BLR7w1JhmdhSDijFykkc5azkKzH22W1V68SWHBmMJBdy5mvHnkkbwtBR3NzKWaAiCLYGUIZe%2Baf7lR3IbNqPyhra%2BmlLDNMwQn5zjZkAvG06bp76xyiS31WmvfZVJlF6OvpmS15uyXGO3tGeYXR61Ug64KQIMYTkoFc9LIjELsfiBqn&X-Amz-Signature=0ef3809eef5bcc0ac2aaedd01a8a75806523c952f17dbe8d131f0f26241a6ad1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

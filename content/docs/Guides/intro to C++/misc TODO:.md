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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663G734Q2%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBqto%2FxRNgcKvOZy%2FpaoahrJdlkX%2FOVkOvAsVEc85Oi4AiB9xdqlWctaIaYwTLSCLzVKl6Hbbts0h3ZX9hyHd0v%2BaiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZslgOyqnXvab2l6QKtwDzvozMhebaGTDd53PXzFY28eZEUzdhrbZ5N8Vn6vV%2FRrsHYMs%2FSzK925Rs4466WoEan52Ujtk1QiGqkPcjb6zs5kiGvaXZ%2BSR2dJQhaXdUoWFbfV878f0Kg2PQ4i6ic8F1BpcP9JsGodQc%2FitlkicAA0mtRs6pYAjYtvIn5LQCiaNytWSWl339l8t%2Ff83n9G%2B82A2uU4spmBgr1MLssi2HPXpmXaIrEG1co8Z3QtZryoJ9cQZ1Yn8HuRaA%2FnrKqTB5uc50FzbleZ6%2Fnr8kTgDmrXGq0q6UcrEDoFvYrFmI19vg6rSw49NdcpFUY6tHNqNoJi6PxRuGfg8sYXK9VLOmvG%2BHRe8rBBhvPyl2N6Br6WkI9uszjxCkHSFa4BHXPi3SxzP5LulhMYj51P4QXG8NqgA8rcVbSfynjG%2Bmv5Os7yvmeFeg%2F3te0grRUY2HsF%2Fun%2FWfPPOxTMNz9EmrcHbnkh7WW1PR5PiOKl3yoHmsHW8f25fuHAu%2BmJKA8WbnHQ%2B93POKyYsk8OlcZLi%2BQf9n%2BZxvclxorpZsff3oGMBr%2Fqp0mGGFC5mfd0eqwlJYKip0Fidm2dv0rVdyc7ViVs2YlpNyVu6Nr%2BFHOFq5W3FgGPNstn%2BErIXbXCuQAEwlp3JwAY6pgGOJA1csddzOw3mww4fWi9gF5PMXVmZheG56z6V7Wf%2BO5wNATRrb4AvJ9PUyN6ApVPzeh3cWU9ieDOLc8CCcVVsNVF53V9phWN2RxIDk1RDyYxOWK3UQXS8mzbb59fxfb7QkqWJfWJ6sracHIQgU2H6vrhrEo2SqcqSncycwC7zoFQ4drWAAibbJDpLR8MJ4KhrccW0qSKHGWE9mKWeIarazrukwe1b&X-Amz-Signature=1ba4198ebe6f4233004a462cd03b1405eafb8389d663bd300d47fa815cd63af5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663G734Q2%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBqto%2FxRNgcKvOZy%2FpaoahrJdlkX%2FOVkOvAsVEc85Oi4AiB9xdqlWctaIaYwTLSCLzVKl6Hbbts0h3ZX9hyHd0v%2BaiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZslgOyqnXvab2l6QKtwDzvozMhebaGTDd53PXzFY28eZEUzdhrbZ5N8Vn6vV%2FRrsHYMs%2FSzK925Rs4466WoEan52Ujtk1QiGqkPcjb6zs5kiGvaXZ%2BSR2dJQhaXdUoWFbfV878f0Kg2PQ4i6ic8F1BpcP9JsGodQc%2FitlkicAA0mtRs6pYAjYtvIn5LQCiaNytWSWl339l8t%2Ff83n9G%2B82A2uU4spmBgr1MLssi2HPXpmXaIrEG1co8Z3QtZryoJ9cQZ1Yn8HuRaA%2FnrKqTB5uc50FzbleZ6%2Fnr8kTgDmrXGq0q6UcrEDoFvYrFmI19vg6rSw49NdcpFUY6tHNqNoJi6PxRuGfg8sYXK9VLOmvG%2BHRe8rBBhvPyl2N6Br6WkI9uszjxCkHSFa4BHXPi3SxzP5LulhMYj51P4QXG8NqgA8rcVbSfynjG%2Bmv5Os7yvmeFeg%2F3te0grRUY2HsF%2Fun%2FWfPPOxTMNz9EmrcHbnkh7WW1PR5PiOKl3yoHmsHW8f25fuHAu%2BmJKA8WbnHQ%2B93POKyYsk8OlcZLi%2BQf9n%2BZxvclxorpZsff3oGMBr%2Fqp0mGGFC5mfd0eqwlJYKip0Fidm2dv0rVdyc7ViVs2YlpNyVu6Nr%2BFHOFq5W3FgGPNstn%2BErIXbXCuQAEwlp3JwAY6pgGOJA1csddzOw3mww4fWi9gF5PMXVmZheG56z6V7Wf%2BO5wNATRrb4AvJ9PUyN6ApVPzeh3cWU9ieDOLc8CCcVVsNVF53V9phWN2RxIDk1RDyYxOWK3UQXS8mzbb59fxfb7QkqWJfWJ6sracHIQgU2H6vrhrEo2SqcqSncycwC7zoFQ4drWAAibbJDpLR8MJ4KhrccW0qSKHGWE9mKWeIarazrukwe1b&X-Amz-Signature=cd6f3d4a4314e184c3ec4269232f5c981235a28d42296d3e8c3fcf2ad40cd505&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FRTKMGL%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T170206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIEJeQiqp%2FWCADJMuSAioEDldfpPS1A%2BqTCsPUbENssW%2FAiAfQDsWdhUIroADsK%2BGtDz18wXt8ucUg98RA4RAJJ2YGyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5v%2FzyO69zlEGgo22KtwDFizMSwkgJ%2FAJ1XOvorVM0GVbBwfJyTxDDcZXAhGAJpzMF5QETtOX3Cx%2Bj4iO2rwA3KgxikWhzkwvWhF22EuWrgPz71ZgyVbF96WKZanBhyWeS78XPUvBhqE%2FK%2B2%2BFcs6LAAI3bPsQw7h1wh%2BtYECyMWepbKgODAsKNvrMg0Gz1tchh3NfGeObp5nvpSv0cctJddyH8DvGJ5gUs9%2Bjj8zNrVbG2S9MqIzrB6PBvDQBl1kmm6zweyzeirkqQqOatNNUDsrU6O%2B0FyDNs5Y0gcvn0nTaCwI6oBMlQ1GRC9Hx5y4dMEYpBHdZb4UfR1K2ERWewmhcLMap%2BHQmRLwtSLN2qBBIJTp8ELOShaNuZGgWFuZUMWDZXWE6BNEQeFL2U6ny7q%2FGF73HFiVKpPZDhZLHnU5i%2FPIbLZpUPqh76Lz%2BwSDNDg8MQv6wURAnD31AUDNzIOlaYseVEJMuHzJfbDnJ2nu01NDROp3EXStnZnc%2BOc7aM0CjFRqU%2FbrSTYK054lIatPfDyyE1HFHRDqMCjG%2BxSIAAmMNSKZ68OxBTgzc2zhkIXquHwXHaWlxC75rlufUxwxXSRRFpcLYoahUZKxuB%2BmMdYk9dw5OjCGIhOFtz%2FldzspTBG9O8Nobn0whsSTwAY6pgER9JJjzqTE8pdarxbL31IycnL8Sg1e43s29ze%2Fa33Ayb%2FaiYLHZ1NM3C99mJpTlgUxXY6bYyslcM9L%2FnLmZYD3BnXde6E9MpT9rrvcq4i8zcUQyeAjBILFlWlu35pJCQDkytjM6Q%2F%2Br0%2FpBXRgvaODzd1QGrRF6SfpwmxQzJwyjg%2FgStfvzx33utsTjMAcneRXHi1nUlespVxUSxBXTcMi8DzOs5HX&X-Amz-Signature=8d79a37473081dab2e57540a472975709a653cd04bfee150e7fcc1ab4f72d3ee&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FRTKMGL%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T170206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIEJeQiqp%2FWCADJMuSAioEDldfpPS1A%2BqTCsPUbENssW%2FAiAfQDsWdhUIroADsK%2BGtDz18wXt8ucUg98RA4RAJJ2YGyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5v%2FzyO69zlEGgo22KtwDFizMSwkgJ%2FAJ1XOvorVM0GVbBwfJyTxDDcZXAhGAJpzMF5QETtOX3Cx%2Bj4iO2rwA3KgxikWhzkwvWhF22EuWrgPz71ZgyVbF96WKZanBhyWeS78XPUvBhqE%2FK%2B2%2BFcs6LAAI3bPsQw7h1wh%2BtYECyMWepbKgODAsKNvrMg0Gz1tchh3NfGeObp5nvpSv0cctJddyH8DvGJ5gUs9%2Bjj8zNrVbG2S9MqIzrB6PBvDQBl1kmm6zweyzeirkqQqOatNNUDsrU6O%2B0FyDNs5Y0gcvn0nTaCwI6oBMlQ1GRC9Hx5y4dMEYpBHdZb4UfR1K2ERWewmhcLMap%2BHQmRLwtSLN2qBBIJTp8ELOShaNuZGgWFuZUMWDZXWE6BNEQeFL2U6ny7q%2FGF73HFiVKpPZDhZLHnU5i%2FPIbLZpUPqh76Lz%2BwSDNDg8MQv6wURAnD31AUDNzIOlaYseVEJMuHzJfbDnJ2nu01NDROp3EXStnZnc%2BOc7aM0CjFRqU%2FbrSTYK054lIatPfDyyE1HFHRDqMCjG%2BxSIAAmMNSKZ68OxBTgzc2zhkIXquHwXHaWlxC75rlufUxwxXSRRFpcLYoahUZKxuB%2BmMdYk9dw5OjCGIhOFtz%2FldzspTBG9O8Nobn0whsSTwAY6pgER9JJjzqTE8pdarxbL31IycnL8Sg1e43s29ze%2Fa33Ayb%2FaiYLHZ1NM3C99mJpTlgUxXY6bYyslcM9L%2FnLmZYD3BnXde6E9MpT9rrvcq4i8zcUQyeAjBILFlWlu35pJCQDkytjM6Q%2F%2Br0%2FpBXRgvaODzd1QGrRF6SfpwmxQzJwyjg%2FgStfvzx33utsTjMAcneRXHi1nUlespVxUSxBXTcMi8DzOs5HX&X-Amz-Signature=0aea745213e15a34ff4c9fdb8c75026ac7943f776c23feb7e07a6b2ef16a7851&X-Amz-SignedHeaders=host&x-id=GetObject)

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

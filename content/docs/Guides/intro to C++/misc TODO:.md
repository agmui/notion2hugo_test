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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4LTXQVT%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T150735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVbWrzVYSczsljnKkgWSw05X6CR2hpU8NLwBeUSRJZ9AiEAzCC2%2B23WBfCq9m19DgyDYcJQvieRU8jPn2ThyiJ%2BSTwq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDJFBKF0nUeLJAtnPISrcA2m0Zql5k26HyfMt4uxFB8NR3oPFmjvuoQBcuvUuE5Vr59aw6zr51AEVEBxXjLHXs7xAsy7X3qeTsot07UTuU7Dz9J72d6VeGrPJWldBhV14wOaQPtVXuGzKZoV%2Fq0eoR8ed7n0eu%2BR%2F%2F%2BJnlWhkJ3cek8WxsWmcAMlTHZkYU7gJWniMlcEUa3aaQnCTGvpQlUYGegGnlGc1R2QGNw6qg4XGiR8BxQ506iPNf6H%2BGmgub%2BmPgDphR%2BoknOh%2FRETbEjve4vuLSo2cokwNaHYyj9ifwIq2e21KPxA4rub%2BryzFhVAtHUMNgHxDx5AewEG1v2LX400vPFqc7Bbjyc%2Bgc7d5yyfTpWm9vnYIuE8Y%2BMfi2uGWha1f00GISh9URD7ekeDxZoXJ9kHjLNmuEniwBJJ8X44R05hVFy1ODd91i121SRPPvaEiTx4XKbAmcdQNiBhqZj%2BoPIG27JZPJYXvNBdlzIjDb8%2FNRHOWKSJz1trTyoQRmToNloVa1BtUL%2FWiBAMVhSUmKfApWLaD2KunQA4fQyht%2FLUGJeZoIBX1EcAFg7fcF97lvk8zbZ%2BH7zS%2FD30ikxc1FNUZwotinf%2FMmheuqLSPNT58dmsOuIxUzcLWFjGnCx5FDhRaImH0MN6Og70GOqUBZ%2BbsHkCIYgv3C%2BKYmgE2xEdD4V1YMoRPKEB30AI2Dpadw5ACkQY0FHMkwPJ7FPIrJuof4hKbaSrNAy9%2FpTPKFZ5On%2BskAafzKIfBMBIyBJw4jY4HXww0%2BHesfw28EaHGSoWQaJiprkqBKl37hx7UKIjdXXawas4DkgcbtIesxk%2BmP2k8Zw4YOTUPcOWCQoFMQe5TqkoW9hSSKQAGl1ROgXINMRVb&X-Amz-Signature=def1dbf3a74a667590a15b85298d3749750ac82b71eef006aa48f432b8e479c3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4LTXQVT%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T150735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVbWrzVYSczsljnKkgWSw05X6CR2hpU8NLwBeUSRJZ9AiEAzCC2%2B23WBfCq9m19DgyDYcJQvieRU8jPn2ThyiJ%2BSTwq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDJFBKF0nUeLJAtnPISrcA2m0Zql5k26HyfMt4uxFB8NR3oPFmjvuoQBcuvUuE5Vr59aw6zr51AEVEBxXjLHXs7xAsy7X3qeTsot07UTuU7Dz9J72d6VeGrPJWldBhV14wOaQPtVXuGzKZoV%2Fq0eoR8ed7n0eu%2BR%2F%2F%2BJnlWhkJ3cek8WxsWmcAMlTHZkYU7gJWniMlcEUa3aaQnCTGvpQlUYGegGnlGc1R2QGNw6qg4XGiR8BxQ506iPNf6H%2BGmgub%2BmPgDphR%2BoknOh%2FRETbEjve4vuLSo2cokwNaHYyj9ifwIq2e21KPxA4rub%2BryzFhVAtHUMNgHxDx5AewEG1v2LX400vPFqc7Bbjyc%2Bgc7d5yyfTpWm9vnYIuE8Y%2BMfi2uGWha1f00GISh9URD7ekeDxZoXJ9kHjLNmuEniwBJJ8X44R05hVFy1ODd91i121SRPPvaEiTx4XKbAmcdQNiBhqZj%2BoPIG27JZPJYXvNBdlzIjDb8%2FNRHOWKSJz1trTyoQRmToNloVa1BtUL%2FWiBAMVhSUmKfApWLaD2KunQA4fQyht%2FLUGJeZoIBX1EcAFg7fcF97lvk8zbZ%2BH7zS%2FD30ikxc1FNUZwotinf%2FMmheuqLSPNT58dmsOuIxUzcLWFjGnCx5FDhRaImH0MN6Og70GOqUBZ%2BbsHkCIYgv3C%2BKYmgE2xEdD4V1YMoRPKEB30AI2Dpadw5ACkQY0FHMkwPJ7FPIrJuof4hKbaSrNAy9%2FpTPKFZ5On%2BskAafzKIfBMBIyBJw4jY4HXww0%2BHesfw28EaHGSoWQaJiprkqBKl37hx7UKIjdXXawas4DkgcbtIesxk%2BmP2k8Zw4YOTUPcOWCQoFMQe5TqkoW9hSSKQAGl1ROgXINMRVb&X-Amz-Signature=639d4a4e404cab90593ebc7e56cb5de4b1b5d64d511be933ea2fc10404ce1db4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

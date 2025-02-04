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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGHNV3AM%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCICoOWzY0njiinXOhFq0cWN7LLlKZBIwOF86nnf2HjteIAiEA%2FENIdgHGLZhKfSVMlQprposDnbB0G9FoLuxoPA6knjcq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDKIUIEb5qNpWaZ7mUCrcAyGL6o3E6Lj2xJRAc3McBrjyVKLe79wTsHwqhsWvkBP6KURLrHZYzD2zocHFYej8WTL77z9LVtqlxnBKol7K3FJaruOft7v%2BJsroF2ydMoU%2FBnVH0JnUcuvWnPJ%2BImbgOEvflLtwyUDH4CI6h8SpRvRV7yR4RvcFboR2F%2F2nUyfzW3Oe%2BuanAwrURjzwuk9aOEgKrqvj7ye9jpEfBWTBnwOvZsJDZ%2FJzRkWwFh%2FB6vPyT5MgzYPFAj%2B6Wew81gk8J9bWvu3DOTtQyTYhgYL3lO6Glfdgmrh6kmuPdrp03SHVkf4JiTefAQ%2Bb64nE61KXB4YxOArbFYEjrzeRtS6PsBhCMqjHeboHN%2FNFOh%2BdwWmK8XuWERdO%2B91%2BBMGbUcfDn3i46RPqlYnsua5AD05VrSAXVJChESQ61ZywR06UN1srEBw7nkk8HDWvxRb9B1FuAofY3lv4nK7I5tW0X5GcU3orm4rpurwBGY4DeArxkH10A5Brgp2ZAJEFuFEOsBTIqL7dmI8WT5kdyLj9ERVJd9wi85SgFHxsz%2FRuvqepkMM5MK4HNBsKqZ%2B%2BUpp8YXiyDrKBGaVwdEOBHVG9oa6YZ8D3hyAd4VfokLyVG0ETCk2daZPG0SrhpSJBIR4fMIeUh70GOqUB0EbTBtLW%2FKT3D686bNVtxjtQi%2FjUFfbVKjk1576ALRPPHd0w7t%2FbusVHmM27zuH1AA1hYWTHPZFCgmnnGwUW%2FiD5hSVmgi6t%2BlXa2d%2FG0EDQ2GGRk6YA9Gn2Bcm%2BkDQY1%2FahpTqgONddQi0w8llGNcc294eqkbNBfwru0XB0KYKRIN6s9JaMeCjVT%2BzxfoIK0gyduutp91tW1YMptc%2FmeQIIDtH1&X-Amz-Signature=3886749bf57c480bb55567e2a6e392e6ee8afff34dfb6dd201a1207e3e32786b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGHNV3AM%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCICoOWzY0njiinXOhFq0cWN7LLlKZBIwOF86nnf2HjteIAiEA%2FENIdgHGLZhKfSVMlQprposDnbB0G9FoLuxoPA6knjcq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDKIUIEb5qNpWaZ7mUCrcAyGL6o3E6Lj2xJRAc3McBrjyVKLe79wTsHwqhsWvkBP6KURLrHZYzD2zocHFYej8WTL77z9LVtqlxnBKol7K3FJaruOft7v%2BJsroF2ydMoU%2FBnVH0JnUcuvWnPJ%2BImbgOEvflLtwyUDH4CI6h8SpRvRV7yR4RvcFboR2F%2F2nUyfzW3Oe%2BuanAwrURjzwuk9aOEgKrqvj7ye9jpEfBWTBnwOvZsJDZ%2FJzRkWwFh%2FB6vPyT5MgzYPFAj%2B6Wew81gk8J9bWvu3DOTtQyTYhgYL3lO6Glfdgmrh6kmuPdrp03SHVkf4JiTefAQ%2Bb64nE61KXB4YxOArbFYEjrzeRtS6PsBhCMqjHeboHN%2FNFOh%2BdwWmK8XuWERdO%2B91%2BBMGbUcfDn3i46RPqlYnsua5AD05VrSAXVJChESQ61ZywR06UN1srEBw7nkk8HDWvxRb9B1FuAofY3lv4nK7I5tW0X5GcU3orm4rpurwBGY4DeArxkH10A5Brgp2ZAJEFuFEOsBTIqL7dmI8WT5kdyLj9ERVJd9wi85SgFHxsz%2FRuvqepkMM5MK4HNBsKqZ%2B%2BUpp8YXiyDrKBGaVwdEOBHVG9oa6YZ8D3hyAd4VfokLyVG0ETCk2daZPG0SrhpSJBIR4fMIeUh70GOqUB0EbTBtLW%2FKT3D686bNVtxjtQi%2FjUFfbVKjk1576ALRPPHd0w7t%2FbusVHmM27zuH1AA1hYWTHPZFCgmnnGwUW%2FiD5hSVmgi6t%2BlXa2d%2FG0EDQ2GGRk6YA9Gn2Bcm%2BkDQY1%2FahpTqgONddQi0w8llGNcc294eqkbNBfwru0XB0KYKRIN6s9JaMeCjVT%2BzxfoIK0gyduutp91tW1YMptc%2FmeQIIDtH1&X-Amz-Signature=17c2069506888b4aad5730657821c0a20bb7e5f80f0cb34e4396a1d7db35a664&X-Amz-SignedHeaders=host&x-id=GetObject)

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

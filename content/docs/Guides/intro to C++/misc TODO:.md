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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSLZ7F3V%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T181027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmw0Q3R%2FoB8qnoL8mKk4FHqCPtw7xotaQ1xCE57Ok3qQIhAIzAM6w%2FrGRNAUVAaosq2OdptBR2ctrSOJaKS7xKVde0KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzo9gWbu3z18SIzbf4q3AN03dSUrhEOzXrJ5W2UOcou0hzx%2FojEWGF4gvjfZGtHkBkfqEiuXNqziJLSOgI3BN%2FiX73VKo2FRbYv2Rpr2ER30c7UcuFL2HyJKRyiWT4ZzTch2gvXJHESAALDFgbKwEJvxgShlVHykx5uJRJa5gwf7YRBZ74aNE6o6NiUN8i2xwnTOjhO8WyGnL2YPJ58M%2BDNNtMAScNgN8tABJ%2FKYVIlKX6LMO7SeZQ%2FvBDe7VBQZX59wJ%2FSWAXY8sT3hn6AV0vhxH3wyqMgYz5kHhivnqBqLxFRLJXf%2BQHr10N%2FNOr5eMk1AwHhXejp0rhuPk%2B1uJo8cGVR%2Fl1sHGQLO%2FcPYf31U47j6hg9Mfw1tCpm4J%2BPLq6hPsrIhqnueR1VVUQEhDI0PJd0uxp99XIWRfljaQI8cHTpps1uKFkCyZpShQZClnVTpGx4%2FeYu0WRDqc5TNmiWBL69zbLvFZCAYJDw5G7InIF5RfBsRyR2CRzxWw0lifo4SqMg9g4DiCr9uyUh7tlTaXnpdvvfkDAK9ke7DqZfZDT4TwG0eM1tKztGrkCgw5cy4zEMtV9xYCKnr6OVOd0k3lj3t7qrDf1%2BbQckET1FrOP7qnJBF2ObE85KtOa03aijUAJ56trsn8HcWDC%2F25e%2BBjqkAQoryMY%2FUACelEyfr5peM%2B6rtMEZQKaXhpn0rMD9%2BzhCWtLiAr75F8pRHEV1iDqtp%2FWysBRvOhXs3K4InctleKcEyeywTVaFuikZTomyIxE7Cm1K%2BXmIdi4KBNMnXnPobfik8jFvW1P14dM1L1Dth0dXXlO7M9B58REjI1YuNQLWLpUka5yGwP83wBBD1iwLJyzXiPHOBkv5nto%2BUHnej0kyzrni&X-Amz-Signature=a762937be84e57b7592b4f9fb351a98b1eb1078e8b01963c53ecd541f893ac8a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSLZ7F3V%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T181027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmw0Q3R%2FoB8qnoL8mKk4FHqCPtw7xotaQ1xCE57Ok3qQIhAIzAM6w%2FrGRNAUVAaosq2OdptBR2ctrSOJaKS7xKVde0KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzo9gWbu3z18SIzbf4q3AN03dSUrhEOzXrJ5W2UOcou0hzx%2FojEWGF4gvjfZGtHkBkfqEiuXNqziJLSOgI3BN%2FiX73VKo2FRbYv2Rpr2ER30c7UcuFL2HyJKRyiWT4ZzTch2gvXJHESAALDFgbKwEJvxgShlVHykx5uJRJa5gwf7YRBZ74aNE6o6NiUN8i2xwnTOjhO8WyGnL2YPJ58M%2BDNNtMAScNgN8tABJ%2FKYVIlKX6LMO7SeZQ%2FvBDe7VBQZX59wJ%2FSWAXY8sT3hn6AV0vhxH3wyqMgYz5kHhivnqBqLxFRLJXf%2BQHr10N%2FNOr5eMk1AwHhXejp0rhuPk%2B1uJo8cGVR%2Fl1sHGQLO%2FcPYf31U47j6hg9Mfw1tCpm4J%2BPLq6hPsrIhqnueR1VVUQEhDI0PJd0uxp99XIWRfljaQI8cHTpps1uKFkCyZpShQZClnVTpGx4%2FeYu0WRDqc5TNmiWBL69zbLvFZCAYJDw5G7InIF5RfBsRyR2CRzxWw0lifo4SqMg9g4DiCr9uyUh7tlTaXnpdvvfkDAK9ke7DqZfZDT4TwG0eM1tKztGrkCgw5cy4zEMtV9xYCKnr6OVOd0k3lj3t7qrDf1%2BbQckET1FrOP7qnJBF2ObE85KtOa03aijUAJ56trsn8HcWDC%2F25e%2BBjqkAQoryMY%2FUACelEyfr5peM%2B6rtMEZQKaXhpn0rMD9%2BzhCWtLiAr75F8pRHEV1iDqtp%2FWysBRvOhXs3K4InctleKcEyeywTVaFuikZTomyIxE7Cm1K%2BXmIdi4KBNMnXnPobfik8jFvW1P14dM1L1Dth0dXXlO7M9B58REjI1YuNQLWLpUka5yGwP83wBBD1iwLJyzXiPHOBkv5nto%2BUHnej0kyzrni&X-Amz-Signature=1cc22f9b2ad58b14d5965b9f4760c58119fd78113afccba9ec655fa43c356483&X-Amz-SignedHeaders=host&x-id=GetObject)

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

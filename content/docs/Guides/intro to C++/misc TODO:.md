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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4YJMNQM%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T220646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIAYnrDFrKOlEMn%2FOQgjy04T2PE1ldgLHSAz%2BzZO9chkOAiBqdUEO0H2KLG8CwpaJJj6sWMv5Px6QeVfPH1NCd%2BoCDSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMJ1s9%2Fh%2FK9Ib4zlhzKtwDT3peBJb2Yxu6JondI%2BYihbjptTZbR5qb1Bc7F8mB9om7uKNmOHfYWZliMa66JIy3bvpPyM5gIw7u9GXBZZxt2PuzsiUc1CL7Oyd7%2B7Tohd8Wph2qWGqzTm0IvY7hN6JVB6AXFtOMa76RojDnQC4jdJyrdmfKvSUHmK961SjZDyXBI3ug7ht4RPdJAafJet7Q89SffKCARUwNo9WMVf7Hbs8umrCAY1YgnuyLfcUS%2F7oQMFWLjeRq9%2BVJI6WqvIh21NS9EvsBo3I9itg7xySITA8mj4nHUgjJDgTq1tGqnXwJyOkd7xpdGwby%2FPAp1aTEKeCLTPKQOdVqjM3L6vCoZg%2BoLE43t0O6dHmWMFz0iCqpHuyMFbtwmFzPfZ9TxhlQefzMSxWUn4d2Q02ZkKgiJf4QWsJBUvD9pOneIaPZSOgiIKXm5sMFqrGLCg8nhCyaq4nCC%2FcWRKNTXzrNWes%2FmwaCb7JH8fRM8WHecj1mvWp9e1Yju%2FQRU%2Fux9YrqPi8%2B2ot9hyFCEgl%2FrYboxsISYV%2Fel5zqZp3hRfaaPNstK4y6eId44buprSaG6fYLff9Cpk5mNVOhb%2BBOH%2FaXfcN6%2FQYpbL6UK3EQPPzQ1CRlW1cHgfEwP05AiQ1j1rUwl4CavQY6pgHv5OcOttBh49zI8U%2FQcbd1qKcFFN6Q0ohFDXG3f9FLlAAR%2FxYVuIzZ1B7yKDwU2eyVgbtCzmy6W7uTTtf9%2BRsWXuFyw2aUMQphHvNGkYpjnhdFCNFNeMHaqFh3BqZuMfxAawMSJBT0058aponeIBP4J7nSx0wSKBBvZPfw7DyIygAOQPCJnqk7F5bKHRmYzFawIZY9rCZEn331Ozkg2gHsbQUFYh4%2B&X-Amz-Signature=925cdcfaa3285268a45f33e3ee0d44ebbd29115d1f997b7e75dd40737151f584&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4YJMNQM%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T220646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIAYnrDFrKOlEMn%2FOQgjy04T2PE1ldgLHSAz%2BzZO9chkOAiBqdUEO0H2KLG8CwpaJJj6sWMv5Px6QeVfPH1NCd%2BoCDSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMJ1s9%2Fh%2FK9Ib4zlhzKtwDT3peBJb2Yxu6JondI%2BYihbjptTZbR5qb1Bc7F8mB9om7uKNmOHfYWZliMa66JIy3bvpPyM5gIw7u9GXBZZxt2PuzsiUc1CL7Oyd7%2B7Tohd8Wph2qWGqzTm0IvY7hN6JVB6AXFtOMa76RojDnQC4jdJyrdmfKvSUHmK961SjZDyXBI3ug7ht4RPdJAafJet7Q89SffKCARUwNo9WMVf7Hbs8umrCAY1YgnuyLfcUS%2F7oQMFWLjeRq9%2BVJI6WqvIh21NS9EvsBo3I9itg7xySITA8mj4nHUgjJDgTq1tGqnXwJyOkd7xpdGwby%2FPAp1aTEKeCLTPKQOdVqjM3L6vCoZg%2BoLE43t0O6dHmWMFz0iCqpHuyMFbtwmFzPfZ9TxhlQefzMSxWUn4d2Q02ZkKgiJf4QWsJBUvD9pOneIaPZSOgiIKXm5sMFqrGLCg8nhCyaq4nCC%2FcWRKNTXzrNWes%2FmwaCb7JH8fRM8WHecj1mvWp9e1Yju%2FQRU%2Fux9YrqPi8%2B2ot9hyFCEgl%2FrYboxsISYV%2Fel5zqZp3hRfaaPNstK4y6eId44buprSaG6fYLff9Cpk5mNVOhb%2BBOH%2FaXfcN6%2FQYpbL6UK3EQPPzQ1CRlW1cHgfEwP05AiQ1j1rUwl4CavQY6pgHv5OcOttBh49zI8U%2FQcbd1qKcFFN6Q0ohFDXG3f9FLlAAR%2FxYVuIzZ1B7yKDwU2eyVgbtCzmy6W7uTTtf9%2BRsWXuFyw2aUMQphHvNGkYpjnhdFCNFNeMHaqFh3BqZuMfxAawMSJBT0058aponeIBP4J7nSx0wSKBBvZPfw7DyIygAOQPCJnqk7F5bKHRmYzFawIZY9rCZEn331Ozkg2gHsbQUFYh4%2B&X-Amz-Signature=f6b17281d328d35791ca082e185dffd7f26d28e81db9fda974c329a8e51dfb35&X-Amz-SignedHeaders=host&x-id=GetObject)

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

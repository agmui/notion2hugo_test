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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L7CSC55%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T081021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz4ZrLN%2B2RYfKZIhD76gecQ72daoBMDgD3ZYOBFpA8JwIhAKy8YVMX6G0DDQ2TND59QCjNbMfdz5SU8dguaxsuo3gSKv8DCG8QABoMNjM3NDIzMTgzODA1Igw1OoP2m95YoBcIisIq3AOxeRk81TSfE%2FaGdxvEsGRaChXAGrjwjXSSGeQ7G%2BCXkT%2BN4if8meUjPIs8GTt1B9JqWVm4DnEJTT312vUBzWuOTMimhqtT2f4Z8B2ZLldYrpRQn3VQ3vYrShNPuuE9VNQk5DS7KfCbXzLgHj64miwKQIsSyx2h%2BxqAsMHy2wsg6XbVLuRXlvH09Lk6PerJYMOYbLHpNdsqRQorM67YkiewBMJg4ZuaHEgpc8qEPnDmPPF5IyR4aP0PktkD6hbz1T50cIfSD8BnEWcGh6YVNAb4YC5%2BXTkhRqIR3k%2Bt%2Fasjph%2Ffo7a%2BfL5dVxbflKQll5f%2BBY59sJnTGQo0H8A47y9kkLdTpOZ3KKlPAXSohfTOKJ0OQaWNVlhcQx5708aiW6ZMnPeippa9dpyUB7F%2Bc2wrjYNeRf%2FSTZQ5kIieVD9Nr6YqkAUwBqmielWPe0u6P4p3nL5sA3R2ypkT%2FM8kgiYFWjopQ07RvlzTNqrBYoUoPlZqj4NmVXOqC1wjhIiYOcxQKst75dbZZSg08bzmwAtansYYmiUqtjVCsfXDJEKhbB8WgygF8872cjCZ%2Bc4B2FajTzjmDIete2AalFRqg%2BvLujHPH1BnYCevHYIq5kLcfzSOzfxZ72q%2Bi3PZFDDX9aXBBjqkARHH337a5Pl0EmlqOjOS%2BnTk67SSuySOoo6f8513PWB7JCHm2TzTWan5jvGnOIJMeP%2FwMMTInWf73JLsIg2DpO0d0H%2BZxI%2BJOimh9JAO%2BG7vSmnSxPz%2F6NyGJTsznxZOqKy9MznYHiHjI90mwlAej8mhpuwFrNTloQS1%2BZ7tSxEwGGKDChpWaTk0Qm2ZpahuhDXAcnZ1IQnbUfKVlqwcmaNixHRk&X-Amz-Signature=bc68c2288c6e24166af42d2fd1b89f9ef7c1fb52d56b43a635e21e6dab4fa9e0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L7CSC55%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T081021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz4ZrLN%2B2RYfKZIhD76gecQ72daoBMDgD3ZYOBFpA8JwIhAKy8YVMX6G0DDQ2TND59QCjNbMfdz5SU8dguaxsuo3gSKv8DCG8QABoMNjM3NDIzMTgzODA1Igw1OoP2m95YoBcIisIq3AOxeRk81TSfE%2FaGdxvEsGRaChXAGrjwjXSSGeQ7G%2BCXkT%2BN4if8meUjPIs8GTt1B9JqWVm4DnEJTT312vUBzWuOTMimhqtT2f4Z8B2ZLldYrpRQn3VQ3vYrShNPuuE9VNQk5DS7KfCbXzLgHj64miwKQIsSyx2h%2BxqAsMHy2wsg6XbVLuRXlvH09Lk6PerJYMOYbLHpNdsqRQorM67YkiewBMJg4ZuaHEgpc8qEPnDmPPF5IyR4aP0PktkD6hbz1T50cIfSD8BnEWcGh6YVNAb4YC5%2BXTkhRqIR3k%2Bt%2Fasjph%2Ffo7a%2BfL5dVxbflKQll5f%2BBY59sJnTGQo0H8A47y9kkLdTpOZ3KKlPAXSohfTOKJ0OQaWNVlhcQx5708aiW6ZMnPeippa9dpyUB7F%2Bc2wrjYNeRf%2FSTZQ5kIieVD9Nr6YqkAUwBqmielWPe0u6P4p3nL5sA3R2ypkT%2FM8kgiYFWjopQ07RvlzTNqrBYoUoPlZqj4NmVXOqC1wjhIiYOcxQKst75dbZZSg08bzmwAtansYYmiUqtjVCsfXDJEKhbB8WgygF8872cjCZ%2Bc4B2FajTzjmDIete2AalFRqg%2BvLujHPH1BnYCevHYIq5kLcfzSOzfxZ72q%2Bi3PZFDDX9aXBBjqkARHH337a5Pl0EmlqOjOS%2BnTk67SSuySOoo6f8513PWB7JCHm2TzTWan5jvGnOIJMeP%2FwMMTInWf73JLsIg2DpO0d0H%2BZxI%2BJOimh9JAO%2BG7vSmnSxPz%2F6NyGJTsznxZOqKy9MznYHiHjI90mwlAej8mhpuwFrNTloQS1%2BZ7tSxEwGGKDChpWaTk0Qm2ZpahuhDXAcnZ1IQnbUfKVlqwcmaNixHRk&X-Amz-Signature=5ed8ba5cb4cdf0b859ee823d119abb99add9d91d2d9aa92fbbfac0ef724d9e1f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

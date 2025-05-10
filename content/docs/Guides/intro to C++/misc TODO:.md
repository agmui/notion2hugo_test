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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U77R64GG%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T022109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi3DoNrasPfw%2FGm2o34p7wnXcHYqN2Z3%2FQDQhUr9j15QIhAIf8iePQvBJYGyXZC1k7wA%2B9qXeNvZYQieL9oQlLU6HmKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrC8k5ojeCa9sXGJEq3AN7UsorRw%2F%2F0RBGw%2FAZmgLswkdRixnmXARGR9osbSWXdX6QwSIgzI3l985a3eSnGmste0MTvAKNime0TaJ%2FalEmH0Z1eJhr2N1xax82w%2BtO7ngmqB6iBhULHLk0xPaEvhMV4jwmcUrRkw%2BAHCcOJntRKgM8G2JyMkXeC4z2FW3RJRKdwa47EAvjeXeACinvIwcSlLpnklRPGgrW5S1FBfz%2Bkt51%2F3VjWU29npsiPlnw%2FI7sUrFmyWatNf9lIG44URSzGmDX5Ta6JnorzLRDFZe%2FQdZCaAH5SIxsfWbFD%2BdMJ3hVWOMtlRsN%2FRZChw2MRwo9H8Wx1x%2FYXYGh6WaDL3nmGQxT7MS8sAHVcFTPh6WcxosI1DIAN3%2B1tFdwYtAAwGx7rf11C8nFSSqZJSPXFy3uKBn3g%2BOaYHXAMgr1dEOTMH9UVicxfDh72NeFxIybEU4dVBMf4Lro8LLxELbKoAjOOrw7xS%2F8RmEIqDs7HcC9HjzifbCx8LVy3ylBWAV%2Bgb9eaYh3h8g3RhOdp2ccd7MawZqwrb8Q0MuCycECwRS%2Fhea%2FpG46O1rTsA2yQOT%2F2v9lJj%2BcdvrMeP0ap3zTU9CKBbaxz1fcbVNv9pUfZAy9r4zyQghzZvgnWBJA4jDS6%2FrABjqkAeV%2BosrF1Au8xY4vZZouosCm%2FShGdSN7%2Bx5hLqYBVVM1BjyRXcWWNQxR%2FfEyzTnHneBVMMJOEVg%2BjMn%2F50cmzp719xsoiHYDvRDGLWrqsn6qPVtBdEUl4Wtlq%2BdeR18T9ACMJAn8sV7DbAh9EJK9FkKtCnI9iPHx0dQLrB1CLB66cQzpEe81tfszAj00RdCXo3TZcin0dDMz91gyVtzcK8%2FyMPIh&X-Amz-Signature=4841b0b72192a59a499fe265d410f363d7a94d787a9e222d7d7c54990da46689&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U77R64GG%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T022109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi3DoNrasPfw%2FGm2o34p7wnXcHYqN2Z3%2FQDQhUr9j15QIhAIf8iePQvBJYGyXZC1k7wA%2B9qXeNvZYQieL9oQlLU6HmKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrC8k5ojeCa9sXGJEq3AN7UsorRw%2F%2F0RBGw%2FAZmgLswkdRixnmXARGR9osbSWXdX6QwSIgzI3l985a3eSnGmste0MTvAKNime0TaJ%2FalEmH0Z1eJhr2N1xax82w%2BtO7ngmqB6iBhULHLk0xPaEvhMV4jwmcUrRkw%2BAHCcOJntRKgM8G2JyMkXeC4z2FW3RJRKdwa47EAvjeXeACinvIwcSlLpnklRPGgrW5S1FBfz%2Bkt51%2F3VjWU29npsiPlnw%2FI7sUrFmyWatNf9lIG44URSzGmDX5Ta6JnorzLRDFZe%2FQdZCaAH5SIxsfWbFD%2BdMJ3hVWOMtlRsN%2FRZChw2MRwo9H8Wx1x%2FYXYGh6WaDL3nmGQxT7MS8sAHVcFTPh6WcxosI1DIAN3%2B1tFdwYtAAwGx7rf11C8nFSSqZJSPXFy3uKBn3g%2BOaYHXAMgr1dEOTMH9UVicxfDh72NeFxIybEU4dVBMf4Lro8LLxELbKoAjOOrw7xS%2F8RmEIqDs7HcC9HjzifbCx8LVy3ylBWAV%2Bgb9eaYh3h8g3RhOdp2ccd7MawZqwrb8Q0MuCycECwRS%2Fhea%2FpG46O1rTsA2yQOT%2F2v9lJj%2BcdvrMeP0ap3zTU9CKBbaxz1fcbVNv9pUfZAy9r4zyQghzZvgnWBJA4jDS6%2FrABjqkAeV%2BosrF1Au8xY4vZZouosCm%2FShGdSN7%2Bx5hLqYBVVM1BjyRXcWWNQxR%2FfEyzTnHneBVMMJOEVg%2BjMn%2F50cmzp719xsoiHYDvRDGLWrqsn6qPVtBdEUl4Wtlq%2BdeR18T9ACMJAn8sV7DbAh9EJK9FkKtCnI9iPHx0dQLrB1CLB66cQzpEe81tfszAj00RdCXo3TZcin0dDMz91gyVtzcK8%2FyMPIh&X-Amz-Signature=233da87b2f4da62276e3b19a2399d0142fb27ce2d3694e7285278671ee562da1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

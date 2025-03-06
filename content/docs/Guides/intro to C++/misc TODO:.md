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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSJ4CZVA%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T090851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSL0YrEGlDqVdLACj31nojPJt0nZT5VN7xBuYjYmuA0AiEA4GzaRWN%2BlO4toLtzUzHKqcH3mMdrh05CTOU6DggkGJUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDNGwGQu6lFs02VTXdyrcA5et5cDKNzMoSSO5naxfWwVSKUmVluaZPNnzBeDaaZs3Fl20UYdhP4%2BmDuCJLfYzIU3w1eO%2Fa9O%2BAovJE9Yp9N3cpGYZTPyVkw8NGUOnFfFoU7m7JfZQ9HKJjJqS5wjz5v%2BJo%2Fn5FS1rpDL9LApLtnyqBSExhGLNN072OuHTvdc6m1gx0MUSoO9AxJqOPsg1C9L0CYDOHuBmZ6BMNGJE%2BX0KluksQGfJBFGwwMeGrTg1qnnIkpYyrjIHVifop7eNYZcPStZGTP2W4xF6MQuyKnAyo22EIOpPu5eYYRk89%2Fl%2F6gQAMQAeVapQ%2B52NncLs4%2BB%2FB0LRZO68IcFp9%2F66QZ1NmRycficAXjgB4%2Fcdbdm3xINhUbHeS4A3GWZJ8DYcShQRp75%2FOXLKZcTajOfUBmB4Rdx02iCcDBvBveRWOJIROQokxOkWxXIrswr1cNxCaCvh88%2FZkw45XrqAK5TW8wNoGBc6rX56rQQZVuVovLxH8h8vqG6eUSI2UnLRvQV9niCtydmtv0hVkJKpm8F4e%2BjxdTLXu01NCbVAbz8PZHQbUR%2FtUa8xdWUI5lxlgI1WKigZjoPbijKtL9eDrktd7OXbeJiz4eRioown1bKcQXiuXbbtwDTtI5rofWD6MLm1pb4GOqUBD2YsKrVFi3HN16wQeJFzmEIihUTPHmQ%2BMS9vm2Bw6ORP0otITUzhsScEL22bFjRZx7ZizL2queZgVWXgVMm9CO1NERjfOVQBpxpqhr7MQR%2B9Z8NOwOB0v23JT66bcw47%2FLMvrGjUNIFRuYvp0OX5i%2FBtpgLjZRN%2FKDiaEgIfubDdYVmKvHt9SgpFN3XlIgRrRaS%2B7pmIauTxRkcye8Smmxa6PBL9&X-Amz-Signature=b818bb8e2d4a051d3eb5768a2b719ab65410749ca858ffb4f3ed5884dd459322&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSJ4CZVA%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T090851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSL0YrEGlDqVdLACj31nojPJt0nZT5VN7xBuYjYmuA0AiEA4GzaRWN%2BlO4toLtzUzHKqcH3mMdrh05CTOU6DggkGJUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDNGwGQu6lFs02VTXdyrcA5et5cDKNzMoSSO5naxfWwVSKUmVluaZPNnzBeDaaZs3Fl20UYdhP4%2BmDuCJLfYzIU3w1eO%2Fa9O%2BAovJE9Yp9N3cpGYZTPyVkw8NGUOnFfFoU7m7JfZQ9HKJjJqS5wjz5v%2BJo%2Fn5FS1rpDL9LApLtnyqBSExhGLNN072OuHTvdc6m1gx0MUSoO9AxJqOPsg1C9L0CYDOHuBmZ6BMNGJE%2BX0KluksQGfJBFGwwMeGrTg1qnnIkpYyrjIHVifop7eNYZcPStZGTP2W4xF6MQuyKnAyo22EIOpPu5eYYRk89%2Fl%2F6gQAMQAeVapQ%2B52NncLs4%2BB%2FB0LRZO68IcFp9%2F66QZ1NmRycficAXjgB4%2Fcdbdm3xINhUbHeS4A3GWZJ8DYcShQRp75%2FOXLKZcTajOfUBmB4Rdx02iCcDBvBveRWOJIROQokxOkWxXIrswr1cNxCaCvh88%2FZkw45XrqAK5TW8wNoGBc6rX56rQQZVuVovLxH8h8vqG6eUSI2UnLRvQV9niCtydmtv0hVkJKpm8F4e%2BjxdTLXu01NCbVAbz8PZHQbUR%2FtUa8xdWUI5lxlgI1WKigZjoPbijKtL9eDrktd7OXbeJiz4eRioown1bKcQXiuXbbtwDTtI5rofWD6MLm1pb4GOqUBD2YsKrVFi3HN16wQeJFzmEIihUTPHmQ%2BMS9vm2Bw6ORP0otITUzhsScEL22bFjRZx7ZizL2queZgVWXgVMm9CO1NERjfOVQBpxpqhr7MQR%2B9Z8NOwOB0v23JT66bcw47%2FLMvrGjUNIFRuYvp0OX5i%2FBtpgLjZRN%2FKDiaEgIfubDdYVmKvHt9SgpFN3XlIgRrRaS%2B7pmIauTxRkcye8Smmxa6PBL9&X-Amz-Signature=d75ee4efb8a1fa75b23ecad76f804a0527cadd4a805370f8e424360c610c4359&X-Amz-SignedHeaders=host&x-id=GetObject)

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

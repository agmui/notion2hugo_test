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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXMEWLPZ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T024733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDbfGRKEEXBRKSYQV%2FnGIihD86sg0qv0Kocfovm7XqyiAIgLa3LpzKviRqpqFZx9ly%2FDGmxR3QVkx73p5JLE6jB6Lwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDHYMGpphrWwtadGBWyrcAw3j99q9VTAGT3HwFaGIFL%2FnzO4N93MYGl5HuNEF65HCeEIupdTV%2FgQaL4K1Mgn0wkRnvIHO%2Fb534BjQ53acx3gE%2FmNt8eCQjTuvnhk0t7o92pTU7RAkFfJhUZ5u6LSavJX0qFrX3dQ376qyyZy9Vc7lLUErYY3gKe1EgCeWIJuV%2FTyNtx39V5LJNMtuI1oFz6uVbl53U8rwNjPWacDahhrjZxwDSwxvjtGQD%2BxcwZi4B5PmE9K4vi8P9hxgTUV6bKi2c%2F7Md8Vrpx6nLSIHRbOAZCcq9X6QS76oBatPZdvR7I1qVU7%2FWlZ7fl6%2FqC3QYPuH3T%2BmaY4HPe3rzq48iZrBA3c41JxXg6JFhl8tWWbNsW2NhqoOjAtZtjrXMbqqIu%2FI2SGGDOYKeQ1FPL%2Bw0LdcVaoh%2BUa6%2FbVhIe9iOklRH6cnTXVBHb7UKslWUs9zQSaF4H23oEeLzpf8HSiDfg%2F1b%2FoCaCIPTJZSFkId%2FuSKqQvGSPMtNnG2i0PPBX9G5cSQYmEv4oohoPyLhTEhPTghD%2BqU5EpI%2FzUzQGctyeUTraKpisjfZc1smjwKPIEwQPQfzH104o5Biv9lsjnQTuWPzG6I1hOfWDjGXupCV9gcg4WAexykZ2Npj8SRMLjGq8MGOqUBf%2B5Gidy1Ch4K8rtct72rHtMe0ekcUtexD3MmlS%2FO6GRkrfSePNTNRcetLrPx%2FGmn6vVATyzlhepvqX5bJFACGm%2B8IpXkY%2BYjCeJJTqQlHGw5bDclLSt5pzyQ8dgHUbyva6p0pcWPKFZtxZPgV95EqC9CttP%2Fei%2BXvhsScwLP4K2mzV6G2b3iqGPxcsfuPe3Gwt4mai%2B4ssuLXxPxNpQy6TUmQTnE&X-Amz-Signature=4b78291dd4614d03ec2ad2e59383fdbdb2d0cbfbdc115652cb3b53cfa0096efb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXMEWLPZ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T024733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDbfGRKEEXBRKSYQV%2FnGIihD86sg0qv0Kocfovm7XqyiAIgLa3LpzKviRqpqFZx9ly%2FDGmxR3QVkx73p5JLE6jB6Lwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDHYMGpphrWwtadGBWyrcAw3j99q9VTAGT3HwFaGIFL%2FnzO4N93MYGl5HuNEF65HCeEIupdTV%2FgQaL4K1Mgn0wkRnvIHO%2Fb534BjQ53acx3gE%2FmNt8eCQjTuvnhk0t7o92pTU7RAkFfJhUZ5u6LSavJX0qFrX3dQ376qyyZy9Vc7lLUErYY3gKe1EgCeWIJuV%2FTyNtx39V5LJNMtuI1oFz6uVbl53U8rwNjPWacDahhrjZxwDSwxvjtGQD%2BxcwZi4B5PmE9K4vi8P9hxgTUV6bKi2c%2F7Md8Vrpx6nLSIHRbOAZCcq9X6QS76oBatPZdvR7I1qVU7%2FWlZ7fl6%2FqC3QYPuH3T%2BmaY4HPe3rzq48iZrBA3c41JxXg6JFhl8tWWbNsW2NhqoOjAtZtjrXMbqqIu%2FI2SGGDOYKeQ1FPL%2Bw0LdcVaoh%2BUa6%2FbVhIe9iOklRH6cnTXVBHb7UKslWUs9zQSaF4H23oEeLzpf8HSiDfg%2F1b%2FoCaCIPTJZSFkId%2FuSKqQvGSPMtNnG2i0PPBX9G5cSQYmEv4oohoPyLhTEhPTghD%2BqU5EpI%2FzUzQGctyeUTraKpisjfZc1smjwKPIEwQPQfzH104o5Biv9lsjnQTuWPzG6I1hOfWDjGXupCV9gcg4WAexykZ2Npj8SRMLjGq8MGOqUBf%2B5Gidy1Ch4K8rtct72rHtMe0ekcUtexD3MmlS%2FO6GRkrfSePNTNRcetLrPx%2FGmn6vVATyzlhepvqX5bJFACGm%2B8IpXkY%2BYjCeJJTqQlHGw5bDclLSt5pzyQ8dgHUbyva6p0pcWPKFZtxZPgV95EqC9CttP%2Fei%2BXvhsScwLP4K2mzV6G2b3iqGPxcsfuPe3Gwt4mai%2B4ssuLXxPxNpQy6TUmQTnE&X-Amz-Signature=b2f5238f77d1d8fc683102001684bd250f244494806a6c112369b5138a6d97d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

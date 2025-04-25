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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SINBAZ6R%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T121502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8gR%2B3xIdnFbfyYRrz1quQc9ynqbezggVaHmOMoim4tAiEAiW%2FmkNqhK%2FemDTMH4kLGfwHXj3rfQN7UxSxJ3B%2FH70gq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDB3dFhauKh9GOjwMzircA63F7LoVEIqCbwPoo9Nl%2FaTEu8wwXL%2Fi4gbKUECPLuhr1QDchQ%2BQUKYwIT0IO0PatlCpDgHE3LU8%2F4y%2FAaQ0IFhm5a%2BsHNzch6xTUy6AlMUjdrqMvy%2FSJ1YZa2EDCA%2Fu12flUpXW9ij2l%2F0NGrIZChIkaycMn2YN6lRZo5Ezos%2B4A1pNgmsjESQUbNHCfWdYDACcAarOxXoz3AdxS9B4le4D0LBMyMxyrItqvf8iSmWpVDpjdbofUUgFIFn4z55KLoY7BHeZ%2Fz8ngeXP2RwoOcYrGM6b4HpIwkyJQfUMaM4Y4b4Xjl0F4HfcV3JaHFJDmMXf%2Fb%2FTrfgI%2BN4dze0kUlzmVQTqrTedJFIOUcOyVBeMGmLnebi5ExMikCeZneyxwqUJuy%2BIQKh8s6KAYE6pyGqlSP1j29fIe7GQZHGpT2cFKW6qHx1gD68Z2MC5SLAu7EW%2BCWzS9gIPzTufzp7BorSbC7wM9FKr0Kx4rIYPSTR%2FE4%2BZYjslskV1ai1yGOM84ChBhwQZ9Ylew8XlSSkKqZZfDZdZAeQCSE6yxrr4%2B3JVCTCB6DD0gnvRiylGegOt88eWWMk6L0jz2%2BrdqiNHxvQd3tZoTK7GXTTGnjYmTEcs8To2MSFvmv5STQlGMNXjrcAGOqUBRKmRlUQk74%2B%2FhP3N4e8n7NwIKcInnOXyPa%2BRnxQLnWaeFUXG%2BfFA9xtf9VQfGPFZH%2FcKPtXsntu8Kt5JXd4RbJ7naAuAG6xZv9UwoPQbPhf8Gi%2FzR6nys%2BWH7oxGCTJw8Soqz%2Bx0rCY6w4waZ75e%2BvA%2FooZUcjpbm%2BjsnbV2LjgFWuwZcIJBkMUVrxiPtGwrpl19MKFZfrzrw3MgLW7hYARVyt3H&X-Amz-Signature=acbc87e7f99870c8e4bfd81cb3cd86cc4b52aa7b874430f08d84d6dd7799e4e4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SINBAZ6R%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T121502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8gR%2B3xIdnFbfyYRrz1quQc9ynqbezggVaHmOMoim4tAiEAiW%2FmkNqhK%2FemDTMH4kLGfwHXj3rfQN7UxSxJ3B%2FH70gq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDB3dFhauKh9GOjwMzircA63F7LoVEIqCbwPoo9Nl%2FaTEu8wwXL%2Fi4gbKUECPLuhr1QDchQ%2BQUKYwIT0IO0PatlCpDgHE3LU8%2F4y%2FAaQ0IFhm5a%2BsHNzch6xTUy6AlMUjdrqMvy%2FSJ1YZa2EDCA%2Fu12flUpXW9ij2l%2F0NGrIZChIkaycMn2YN6lRZo5Ezos%2B4A1pNgmsjESQUbNHCfWdYDACcAarOxXoz3AdxS9B4le4D0LBMyMxyrItqvf8iSmWpVDpjdbofUUgFIFn4z55KLoY7BHeZ%2Fz8ngeXP2RwoOcYrGM6b4HpIwkyJQfUMaM4Y4b4Xjl0F4HfcV3JaHFJDmMXf%2Fb%2FTrfgI%2BN4dze0kUlzmVQTqrTedJFIOUcOyVBeMGmLnebi5ExMikCeZneyxwqUJuy%2BIQKh8s6KAYE6pyGqlSP1j29fIe7GQZHGpT2cFKW6qHx1gD68Z2MC5SLAu7EW%2BCWzS9gIPzTufzp7BorSbC7wM9FKr0Kx4rIYPSTR%2FE4%2BZYjslskV1ai1yGOM84ChBhwQZ9Ylew8XlSSkKqZZfDZdZAeQCSE6yxrr4%2B3JVCTCB6DD0gnvRiylGegOt88eWWMk6L0jz2%2BrdqiNHxvQd3tZoTK7GXTTGnjYmTEcs8To2MSFvmv5STQlGMNXjrcAGOqUBRKmRlUQk74%2B%2FhP3N4e8n7NwIKcInnOXyPa%2BRnxQLnWaeFUXG%2BfFA9xtf9VQfGPFZH%2FcKPtXsntu8Kt5JXd4RbJ7naAuAG6xZv9UwoPQbPhf8Gi%2FzR6nys%2BWH7oxGCTJw8Soqz%2Bx0rCY6w4waZ75e%2BvA%2FooZUcjpbm%2BjsnbV2LjgFWuwZcIJBkMUVrxiPtGwrpl19MKFZfrzrw3MgLW7hYARVyt3H&X-Amz-Signature=cef4311e8472abfb839f80b61127132f5e5168d1367bd47f96e8e07fcb37bf51&X-Amz-SignedHeaders=host&x-id=GetObject)

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

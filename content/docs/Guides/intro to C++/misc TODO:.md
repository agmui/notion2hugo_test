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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCKD4RY7%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T031913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNp4IrJhU4K4KrWmu6A%2B1s%2BpNbqno%2BZBR%2FbG5ybATPIAIgAmKU4JTGJ2m%2FLirbxz4%2FmwkpDWKSHExtydd5Pj8xjFsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPo4jUfl6%2B56z9Yq%2BSrcA67lpwL3VgIOFnIUbNfQIu7knzyrbzr85bT4qBzauS2qR3QpqjqdgAcpJEcZNn%2FwuI%2FCFfBHiRfB7YrnwD8Ap5j14MQWHX7QH7n3azab7EqalEW5kvgtv%2By7cjIw5FqM%2FEtO%2Fv2F%2Foa14M7HyuJYlLqVm%2Fi6KuoEarifOzg2Kb48AniIvSBDNXAUJw9LId2NWaSX4QyVfcoQiRibIypGMw7PPbstb8jwsI5NIQu%2BzjHcSaThLkc4zr4%2FE7SPQOQBeL9ilay%2BzlKOX%2BfxNmaXDLBLKZjNnC6IJ8yjdwS2pkbH4LOh935usaDykg1tMiUHZ9Z8AyLIdQf4JIq7SpMyEc%2BGAl9U7AosGnzEX2o%2FsMfbZacJMmWaBnt68CF2SzMsxViu%2BQWUeFITn1vhoQcFGLsJn9XjOFtTbNJLjPTL0tElEPbgKdkWTD4d6khNhC2IoOwLt6YERa1ch1u5Ye%2BTONYWtw0RGKpgRMM0uCAuXtnDJz8UobeK1C0NBRy5pppQEyqF6WjpMnFxoqAQnOrv0eqEndPAbjgAtakb3MRlDo3%2BGniASumWVk2QqbALl5TGp%2Fqs8OZJWl%2BMZ16t7XpZO9N3BTp%2FGn4nzh4wwWDq3pvKjYcN3hfWxecgPQsAMJeglL4GOqUBcFWH4C5XnwOyJdkJJslNW4r0%2F8sRRInfAJ2M9r8XHJ4x%2BoPKBN1ob1NCZcn6UkrYjJ%2FGa1sy4Atq%2F2xLB8hokSIg7Rx8sSj1WeKMC60LRXYfFNNAm8leM8QTlIeNqWLGzQdfrpJfK4tOgRQoF4KQjl7nwGA%2Bvpdk0Tkv4ReS4CjIIZ6cEovNGru812zcbgsGdOll5KfXxmVM6hCAXi6nHeVFYXMF&X-Amz-Signature=2c44d09908333a3e97f00ef474d34b96975faf99b034f139cb5c98b84ca86f30&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCKD4RY7%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T031913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNp4IrJhU4K4KrWmu6A%2B1s%2BpNbqno%2BZBR%2FbG5ybATPIAIgAmKU4JTGJ2m%2FLirbxz4%2FmwkpDWKSHExtydd5Pj8xjFsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPo4jUfl6%2B56z9Yq%2BSrcA67lpwL3VgIOFnIUbNfQIu7knzyrbzr85bT4qBzauS2qR3QpqjqdgAcpJEcZNn%2FwuI%2FCFfBHiRfB7YrnwD8Ap5j14MQWHX7QH7n3azab7EqalEW5kvgtv%2By7cjIw5FqM%2FEtO%2Fv2F%2Foa14M7HyuJYlLqVm%2Fi6KuoEarifOzg2Kb48AniIvSBDNXAUJw9LId2NWaSX4QyVfcoQiRibIypGMw7PPbstb8jwsI5NIQu%2BzjHcSaThLkc4zr4%2FE7SPQOQBeL9ilay%2BzlKOX%2BfxNmaXDLBLKZjNnC6IJ8yjdwS2pkbH4LOh935usaDykg1tMiUHZ9Z8AyLIdQf4JIq7SpMyEc%2BGAl9U7AosGnzEX2o%2FsMfbZacJMmWaBnt68CF2SzMsxViu%2BQWUeFITn1vhoQcFGLsJn9XjOFtTbNJLjPTL0tElEPbgKdkWTD4d6khNhC2IoOwLt6YERa1ch1u5Ye%2BTONYWtw0RGKpgRMM0uCAuXtnDJz8UobeK1C0NBRy5pppQEyqF6WjpMnFxoqAQnOrv0eqEndPAbjgAtakb3MRlDo3%2BGniASumWVk2QqbALl5TGp%2Fqs8OZJWl%2BMZ16t7XpZO9N3BTp%2FGn4nzh4wwWDq3pvKjYcN3hfWxecgPQsAMJeglL4GOqUBcFWH4C5XnwOyJdkJJslNW4r0%2F8sRRInfAJ2M9r8XHJ4x%2BoPKBN1ob1NCZcn6UkrYjJ%2FGa1sy4Atq%2F2xLB8hokSIg7Rx8sSj1WeKMC60LRXYfFNNAm8leM8QTlIeNqWLGzQdfrpJfK4tOgRQoF4KQjl7nwGA%2Bvpdk0Tkv4ReS4CjIIZ6cEovNGru812zcbgsGdOll5KfXxmVM6hCAXi6nHeVFYXMF&X-Amz-Signature=950e6a1490c97309b5c54dfde8b87247c2faaddef530e2849af2e96b16bdf6db&X-Amz-SignedHeaders=host&x-id=GetObject)

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

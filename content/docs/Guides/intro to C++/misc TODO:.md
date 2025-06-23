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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG7TF5RZ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T230711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCICJ59rMf1ORx1P86jnnYKRMqWw0Dpx%2FmpWsER0xfFQeJAiAmGOR8SZlqQv2aE7umD98cvxIzyTCpWFOTFqAZw%2FcA2yr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMWKVM8fB40zzPeLVzKtwDMCqnKmb08gJwO2wdP2GAu9aBQtVqULnAYQAfWR%2Fd53cvukabO8aK7PF9D3yvCCRcuIqZr989lcBgk1uzYULkZ%2Fvj%2FifNOU9E%2Blr0y7FbW4MVI9uEUMgJORuy4cEa3u7lWOpjFjqqwr95Z1DiuMGNYxyCYc4GR26k2%2FqJLH3KnAXme3VRrCLbPjhyal8mdGfmuWgwk%2FSnVtvuNwnJRPG3zaCAfybEuixiF2YpljBgGm%2BrvSE2TYpNUyAAHvwlNgjW5mdacvk7g8JTwXRZipc8pMw51oe8M497EKCaSYNOWHaSl0xNomKn3RDe7pg%2B1fc%2Bksqc0vHN8qZTUPGtI7VbmySOFx5tfc5g%2F4X%2FQDWwDOVwGU428hO2sOqgshUCCEvNR32fKe%2BCyyRMt4A3heY1qZUVkbgvK2SyISRH4jaJuyxet13WxLCLhVdZ1gpnV6uJF5bT0e5VumEadZOQX6jfq1qzoyWU5LZ0LZiiMJQoNdIY%2FFYX5G0ndLxQvGLRc5UvxXmYYU8DW3QUWarsyNHR8oPs0vpgAtdbsjahXhqb6Ydhhu1dJ%2FQCudOWprIkvQw2Dt15fwIr5fTCooBSObtpFsG%2F2luTf9DIosm17C70ax5Dgwl2QQCnv7PcfI8wq7PnwgY6pgFrUXBUGceBalDT2DWKsDv9rtRzqT%2FlP%2B%2BqgudcBps1YvmJ51C5Fd8JKHPTQOjmYFNzISjE11oPy0oq9y%2BYrrorlMYLnq0BjWKSIFzECpLgPmx7HVWgJOxVj3MsQ6AXioD8Zv05KOjASBYHlL7tHm1bdkDbxGL4BBvxZa4URU9rEmm%2FywLjp933oESrnZkwOlYXkPUQTUjBBjcYK9TEE52cqr71rR9A&X-Amz-Signature=2d3428e6efeecc40cecad685f5478fb20a285d374afa94317a72f695a7c1b576&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG7TF5RZ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T230711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCICJ59rMf1ORx1P86jnnYKRMqWw0Dpx%2FmpWsER0xfFQeJAiAmGOR8SZlqQv2aE7umD98cvxIzyTCpWFOTFqAZw%2FcA2yr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMWKVM8fB40zzPeLVzKtwDMCqnKmb08gJwO2wdP2GAu9aBQtVqULnAYQAfWR%2Fd53cvukabO8aK7PF9D3yvCCRcuIqZr989lcBgk1uzYULkZ%2Fvj%2FifNOU9E%2Blr0y7FbW4MVI9uEUMgJORuy4cEa3u7lWOpjFjqqwr95Z1DiuMGNYxyCYc4GR26k2%2FqJLH3KnAXme3VRrCLbPjhyal8mdGfmuWgwk%2FSnVtvuNwnJRPG3zaCAfybEuixiF2YpljBgGm%2BrvSE2TYpNUyAAHvwlNgjW5mdacvk7g8JTwXRZipc8pMw51oe8M497EKCaSYNOWHaSl0xNomKn3RDe7pg%2B1fc%2Bksqc0vHN8qZTUPGtI7VbmySOFx5tfc5g%2F4X%2FQDWwDOVwGU428hO2sOqgshUCCEvNR32fKe%2BCyyRMt4A3heY1qZUVkbgvK2SyISRH4jaJuyxet13WxLCLhVdZ1gpnV6uJF5bT0e5VumEadZOQX6jfq1qzoyWU5LZ0LZiiMJQoNdIY%2FFYX5G0ndLxQvGLRc5UvxXmYYU8DW3QUWarsyNHR8oPs0vpgAtdbsjahXhqb6Ydhhu1dJ%2FQCudOWprIkvQw2Dt15fwIr5fTCooBSObtpFsG%2F2luTf9DIosm17C70ax5Dgwl2QQCnv7PcfI8wq7PnwgY6pgFrUXBUGceBalDT2DWKsDv9rtRzqT%2FlP%2B%2BqgudcBps1YvmJ51C5Fd8JKHPTQOjmYFNzISjE11oPy0oq9y%2BYrrorlMYLnq0BjWKSIFzECpLgPmx7HVWgJOxVj3MsQ6AXioD8Zv05KOjASBYHlL7tHm1bdkDbxGL4BBvxZa4URU9rEmm%2FywLjp933oESrnZkwOlYXkPUQTUjBBjcYK9TEE52cqr71rR9A&X-Amz-Signature=fa6301a7ea19677f443747ab26bbe15e15d27398b037790733fd362e8858c7f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

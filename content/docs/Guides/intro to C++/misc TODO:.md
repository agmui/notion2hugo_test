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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3L7DHJD%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T110557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAE%2F6iQ4DBMyg8Wv3E1yd1Xah5NxtbGcT1TQy3ZahiMOAiBYY59QjMYuZzVFKHFXWGkwJCq5Y%2Ff1vWVOx%2B8sTwwzUiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwBYaOJzyXNVmAMrbKtwD%2BqqdbLp0B4FdpVFn4OGFwHH5h7E8tEbo01ZHiHTfQZ7BLxOTa1uhbAmo4HpJRzowDvS%2B1alA6%2BGPg7Q0RMM2K6Nt6MkSeupw9biMd89duCIJpk%2FiJKStwjip%2ByCAoMl%2B2VgkjHBxCqEJykDX7qWSstei%2Fnx85lAf0UgUfiT1H6z7eODmhBFIrjpaYLrKLgBam3p16L0fISstgh5qGbOVhnHPn3uK%2Bhtdk%2B0LqjckQG2P2KftcYvjqA8%2BW1ltDNHzkNF%2FNlPJsC1y2RLzv7Xric%2FmAKqRoe%2BVMeKet1ygAm0uMVWMmpait34fYJ8Gq97jt3Bvt5qRrmPvCoUrkt7IixRxerBzWpEiGFtpGHYOWRddT%2FcsRmUrtM4HBPzi1E9x850tQ1V9GadBzXeX05eygt7efM2t%2FvD5zksnqbl5%2FcSd0ZtnpYuOooBFgCollRtMgFP14mkq9t7nsHkvJKZ38rIJHzjs%2BsQi6zZsKfsLTrG4RI2AvZw8MHp34nUQ0ZpnIZ18hUflYJFnw8Bzjl%2F9dOPULgEVqS5YLJXMqmV47iMNNrvQ9LNEoaTsmBL%2FaS5JlVfHnoOHTOed4vuLHoEbymkliKDvGXD3omZ9LOyjOKH5nJxVnOVpj%2F%2Bt1gMwvNPZwgY6pgFy9RPvt%2BelMSETyIMtadn7Veed0SyKp6UlY9AAp8bnmJP647%2B3j8iQiy5WFl7CIGYzBPlE4TuaMfG4KafONNhahXk5JXnIv9TmYIQjb9yd65EgLYvQx02XFMhbE%2FGRi2g%2FjK8a%2FSWpeyG6o%2BMXk9%2Bz%2FFjqVMIszqpRAOTtC%2BEZvcxkeQyWIr9aF1JPTQYACcf%2BI7JhM7EEqQAcOaNDbi9VXwWVgx72&X-Amz-Signature=a14cd5ce4a53039141768266957aaeb58e274aa10a137446441c93f16ec466f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3L7DHJD%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T110557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAE%2F6iQ4DBMyg8Wv3E1yd1Xah5NxtbGcT1TQy3ZahiMOAiBYY59QjMYuZzVFKHFXWGkwJCq5Y%2Ff1vWVOx%2B8sTwwzUiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwBYaOJzyXNVmAMrbKtwD%2BqqdbLp0B4FdpVFn4OGFwHH5h7E8tEbo01ZHiHTfQZ7BLxOTa1uhbAmo4HpJRzowDvS%2B1alA6%2BGPg7Q0RMM2K6Nt6MkSeupw9biMd89duCIJpk%2FiJKStwjip%2ByCAoMl%2B2VgkjHBxCqEJykDX7qWSstei%2Fnx85lAf0UgUfiT1H6z7eODmhBFIrjpaYLrKLgBam3p16L0fISstgh5qGbOVhnHPn3uK%2Bhtdk%2B0LqjckQG2P2KftcYvjqA8%2BW1ltDNHzkNF%2FNlPJsC1y2RLzv7Xric%2FmAKqRoe%2BVMeKet1ygAm0uMVWMmpait34fYJ8Gq97jt3Bvt5qRrmPvCoUrkt7IixRxerBzWpEiGFtpGHYOWRddT%2FcsRmUrtM4HBPzi1E9x850tQ1V9GadBzXeX05eygt7efM2t%2FvD5zksnqbl5%2FcSd0ZtnpYuOooBFgCollRtMgFP14mkq9t7nsHkvJKZ38rIJHzjs%2BsQi6zZsKfsLTrG4RI2AvZw8MHp34nUQ0ZpnIZ18hUflYJFnw8Bzjl%2F9dOPULgEVqS5YLJXMqmV47iMNNrvQ9LNEoaTsmBL%2FaS5JlVfHnoOHTOed4vuLHoEbymkliKDvGXD3omZ9LOyjOKH5nJxVnOVpj%2F%2Bt1gMwvNPZwgY6pgFy9RPvt%2BelMSETyIMtadn7Veed0SyKp6UlY9AAp8bnmJP647%2B3j8iQiy5WFl7CIGYzBPlE4TuaMfG4KafONNhahXk5JXnIv9TmYIQjb9yd65EgLYvQx02XFMhbE%2FGRi2g%2FjK8a%2FSWpeyG6o%2BMXk9%2Bz%2FFjqVMIszqpRAOTtC%2BEZvcxkeQyWIr9aF1JPTQYACcf%2BI7JhM7EEqQAcOaNDbi9VXwWVgx72&X-Amz-Signature=5d1e8899beb93efbcb418723aef8d66f06c51ab8b3e3c1f9aa6072a01ebd5817&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7ICCDMN%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T081223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDumQJVhbJikkk8YIZzr5gGeGB0k%2Bd41fnPaMKtA0RZ2AIgYCqVt365b5Idk1n39DHu16GxyOYSq1erikrdqpeSbB4qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB37Jcf7dCH2zjlCcyrcAz8FVXFVXmLWZPXA6b8ufTvuEFafW6XCn3K64O5FF%2BVfnZD2qb6hJpoQF11dG9N2A%2FkD06VFFnSgzsMvbmR8NQvqFs6GNBI5LNrYvGYz0YhnQ6OjYuLTXF%2BGJ3CU%2BMUSHQo%2B5C05%2BlCCuDPOZeq2CH%2Fn5bhCymsFoN9XCvo%2F6DL4TKuJc%2Fye0L1PUoTxpJuskF4F8GVfWvynzdX8xdHzrOMSC5%2FCNWxEWmusTywnLn9PXulJmqY0RABo1q%2Bnq2JRmkg4DQyc4oQf26x5K43NXIS5DLYHvAXuq0w3hT1cbIXQ%2FCEOAp75pTvb5iFMX6uyIb0a8YJWxSp7%2FCNBGqJy9lBOkUs9HLXnnWwi7dA3VPUvJe09pbEomc4qdELMk62rFJ93JZ9VUxAOc%2FD7Wg5mXLjsplF5hYXEpZSNKmqfkYtTHDB3i1bqeS9YBm%2BWlZfIu2DbP%2FxptTRqetyRe08kyYNE1OLHiGQMnatlas%2B0y4%2BUK%2BnV8ncudfQNUeO15dl5mgaTA1bQX70yQtkSeLagnmSovv%2BtSwNkrVB%2BeX%2FqzJtZiY7rYuHRmgsC5qg%2FgNrKd8OeYoCv%2BaM5jqvyniqAoqfvjX3dPK6GMXguTEu1QiN8OKZwW59JFFNdCtrNMK7yi8EGOqUBK9hGBXgNk%2BxC4TbD8ikQvH9TV2OuNsvWWnbZmaOsL%2FnpZB1MSOUQBBn60%2FVa3GGUMIxmAChL%2BIQCa52bK1MntTNcm0nRnQdO%2FszCBYttx%2FARAwbRevSQZlvAzLGqpR0zH3ZjlIKIrIk5wcAOrDpQgfVEjzBDUYxmPLnMc%2Bx9Q0UNwTa%2FqiuEBz5OZesgrJNOamDLAdw2UMqNVfb68xSuezIQt76A&X-Amz-Signature=08a48047e4c6e352057a5f77fc0b35e0861abba2ea563a3a24882e866e5b18a0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7ICCDMN%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T081223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDumQJVhbJikkk8YIZzr5gGeGB0k%2Bd41fnPaMKtA0RZ2AIgYCqVt365b5Idk1n39DHu16GxyOYSq1erikrdqpeSbB4qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB37Jcf7dCH2zjlCcyrcAz8FVXFVXmLWZPXA6b8ufTvuEFafW6XCn3K64O5FF%2BVfnZD2qb6hJpoQF11dG9N2A%2FkD06VFFnSgzsMvbmR8NQvqFs6GNBI5LNrYvGYz0YhnQ6OjYuLTXF%2BGJ3CU%2BMUSHQo%2B5C05%2BlCCuDPOZeq2CH%2Fn5bhCymsFoN9XCvo%2F6DL4TKuJc%2Fye0L1PUoTxpJuskF4F8GVfWvynzdX8xdHzrOMSC5%2FCNWxEWmusTywnLn9PXulJmqY0RABo1q%2Bnq2JRmkg4DQyc4oQf26x5K43NXIS5DLYHvAXuq0w3hT1cbIXQ%2FCEOAp75pTvb5iFMX6uyIb0a8YJWxSp7%2FCNBGqJy9lBOkUs9HLXnnWwi7dA3VPUvJe09pbEomc4qdELMk62rFJ93JZ9VUxAOc%2FD7Wg5mXLjsplF5hYXEpZSNKmqfkYtTHDB3i1bqeS9YBm%2BWlZfIu2DbP%2FxptTRqetyRe08kyYNE1OLHiGQMnatlas%2B0y4%2BUK%2BnV8ncudfQNUeO15dl5mgaTA1bQX70yQtkSeLagnmSovv%2BtSwNkrVB%2BeX%2FqzJtZiY7rYuHRmgsC5qg%2FgNrKd8OeYoCv%2BaM5jqvyniqAoqfvjX3dPK6GMXguTEu1QiN8OKZwW59JFFNdCtrNMK7yi8EGOqUBK9hGBXgNk%2BxC4TbD8ikQvH9TV2OuNsvWWnbZmaOsL%2FnpZB1MSOUQBBn60%2FVa3GGUMIxmAChL%2BIQCa52bK1MntTNcm0nRnQdO%2FszCBYttx%2FARAwbRevSQZlvAzLGqpR0zH3ZjlIKIrIk5wcAOrDpQgfVEjzBDUYxmPLnMc%2Bx9Q0UNwTa%2FqiuEBz5OZesgrJNOamDLAdw2UMqNVfb68xSuezIQt76A&X-Amz-Signature=72a332a2a0669d3b2ae00efeadd075c95a6b49f4e7a4b7dc14bad34e1358afb3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

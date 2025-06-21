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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E6VA6WT%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T170530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEN2C5SY3k9JncUHvW%2Fqr9a6F1C9YTPMUT4Esr34FrjKAiEAzEd9PcmdfwHRtzjw3sqFpSIi0u1tRmyIJgF7%2BDBPZ%2B0qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7ZYmuqhpGH8MHptyrcA%2BpfegQ5OCn56KszjtR04a3YPOlIAC4NXDazpi974IGRZ3bPvWbXxIxV7Fs%2BPGH%2B%2Fy44hpGcRkWQ0DYMz66VZ2zkg3zz4RfYSpwkUd5Yop4sjJAX7ve4%2BZmj3JZj%2F9M4E073x5q4rgF0NqjLXXaMDYj49qAEZqZE42phERiKcJSbpkEHwLyFjjpxALv2EJ3HHSJE3Gib3ekMXwj7FXsScV0BCI5jO5loKnwh9uTUldwIRctBPKwvHrcjgM0W7JP2NAtX7AQolqT5Rjgwi398Ssz%2BcgJOZsvRohacH7dLCcehKL9baQTeUXzOiFxaSlLjn8uy%2FXGYf6Fk%2BtJJ8GOAX8UBGLhxzLQJpUERw%2BVlsm5wTM6wJ6dsDf3AS4iAPDZvr6mweN8E9cberZpwvKNDL%2FmGPqhYtrflVZlMjELGHG6nNxIixd6wTQy2FLDxv19CK8TNTVgpOGs4SjHtyDoqwDYkTocm1v2ab7YCPvU9BqDbccmIC1t7lepkadOR0tEVr0SXcfPytCPRkmpClaoxI2BKvo6nDiYnKEBy8WCgjlJg64Prc4BfkuXMzlfRG74aAX4oiIEZM89bh0QRxFFUPRLfQOKJISaAHVTYu%2BCcSglIoNT0oUgrirNwLQI%2BMIGQ28IGOqUB4roteWoUigU91Zc1LXib8HiscttkLe2roYK9HHweK9xiBrlU41NEBMxJ6XaCnn63OLGrj8AwuE4eZKCLLmhIWVMz2emvvEWGN2qCuuN3ygpt78I19Ijw6%2BveQPBYnn5s0OPQkMb9GipqgDx4eCpN9eMz0sKVOr9t3BJ2wxUUTxxj5VdABM2Ybis0QMoKDqBdZIzGvpqKvpRRObYBfLJd2m0YKzeW&X-Amz-Signature=d377b4c839b04831eb1a767e2cd5a93c974c6fe6b2aedea1c89024f78e3e99f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E6VA6WT%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T170530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEN2C5SY3k9JncUHvW%2Fqr9a6F1C9YTPMUT4Esr34FrjKAiEAzEd9PcmdfwHRtzjw3sqFpSIi0u1tRmyIJgF7%2BDBPZ%2B0qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7ZYmuqhpGH8MHptyrcA%2BpfegQ5OCn56KszjtR04a3YPOlIAC4NXDazpi974IGRZ3bPvWbXxIxV7Fs%2BPGH%2B%2Fy44hpGcRkWQ0DYMz66VZ2zkg3zz4RfYSpwkUd5Yop4sjJAX7ve4%2BZmj3JZj%2F9M4E073x5q4rgF0NqjLXXaMDYj49qAEZqZE42phERiKcJSbpkEHwLyFjjpxALv2EJ3HHSJE3Gib3ekMXwj7FXsScV0BCI5jO5loKnwh9uTUldwIRctBPKwvHrcjgM0W7JP2NAtX7AQolqT5Rjgwi398Ssz%2BcgJOZsvRohacH7dLCcehKL9baQTeUXzOiFxaSlLjn8uy%2FXGYf6Fk%2BtJJ8GOAX8UBGLhxzLQJpUERw%2BVlsm5wTM6wJ6dsDf3AS4iAPDZvr6mweN8E9cberZpwvKNDL%2FmGPqhYtrflVZlMjELGHG6nNxIixd6wTQy2FLDxv19CK8TNTVgpOGs4SjHtyDoqwDYkTocm1v2ab7YCPvU9BqDbccmIC1t7lepkadOR0tEVr0SXcfPytCPRkmpClaoxI2BKvo6nDiYnKEBy8WCgjlJg64Prc4BfkuXMzlfRG74aAX4oiIEZM89bh0QRxFFUPRLfQOKJISaAHVTYu%2BCcSglIoNT0oUgrirNwLQI%2BMIGQ28IGOqUB4roteWoUigU91Zc1LXib8HiscttkLe2roYK9HHweK9xiBrlU41NEBMxJ6XaCnn63OLGrj8AwuE4eZKCLLmhIWVMz2emvvEWGN2qCuuN3ygpt78I19Ijw6%2BveQPBYnn5s0OPQkMb9GipqgDx4eCpN9eMz0sKVOr9t3BJ2wxUUTxxj5VdABM2Ybis0QMoKDqBdZIzGvpqKvpRRObYBfLJd2m0YKzeW&X-Amz-Signature=debff0f165d702326f6f4e1b1fbe616aa76e0d977c6a92b1289c691b914018c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMCFI4OU%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T004029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDME5OC8SnL%2BUkvJtweTSfUkYYO3B7cLKbt2XKXA7WZgwIhAOGeWvLTIoO5pUH4RPLFsogIlrGcO4bzybD48zC78PLBKv8DCCIQABoMNjM3NDIzMTgzODA1IgyvrHWCYFPK8gMiESsq3APiELDzIfVOHutboMmzc1wUidbOPNfg6RioLNBzejz7Qc2ACuR5NuAtMr9WL23gEaXCKZ4YaJiuB8z5BvE5%2BsDfkF28A%2F%2B%2B8JO6%2F8whxDDglrWPgrRWEJKxR5sBHhuJj94vaX7VwJs8QMomsA3QMY7t28UVe7zFPQcZ8R8DrfqSuuFB9NUhgmOBQB3%2FJouhhcEZsmAaMlYIUHHZbLZEYEYtZ9e8KiwEArlZxxi5v6090lAIkNWFQz86remBxcvn1Ix%2BheudVi69lHT6IxH3HcGfQPkVbqWzHNzM%2FaF46plEcBqmYmeuGHLX0J%2F%2F8miWNw1qvophc4NqEJwsU%2FMDfQuJFEqNPT9zKZLp7ZR7vNkHGRlVhmai%2BN2LggNzMlz4z6nBLwXxaEKafL14KpskUPqKGvOc2%2F7eRs7a5ud1b3YFX6MXwv5wwkQ6WYiQri3v2%2Fb8GN2WK%2FfkWDAzKisZ%2FWpW5tWYeyyKCjz0k2WhL5uXoyn30KlPNYK5P903ROScARtnXbvEtbaDqxCkzakNPHj3kXvy6XPYWQQaa1kbqrTWDmDDiBNI6gfanpz0oJRZQt%2B07qGq9v5L8sPR0c3dsel0kasw9e8Hdu8AeRQy0fOkR9LjJETmCZ7N7shzNDD80va%2FBjqkAWmKN3zaLjqsnWpQQ7E91meHmO3TdRdgfNnRkt6RWigQW1u8lIDuq5anN164tLTUqxsDot3jwUK2ewqq%2FrUexKkslDPWr1CdcxX5LjFrgkwR2AxgB9vpZOi9Wo8Es3tJNOafOzipBgTuKyz6dmTZuU5mX23pU3L4zEdY%2BZ2KG1jFWuuNTtuqXj494r0FM2WA%2FLdpIN1brB2vEk%2BULXyCt75iRf%2Fv&X-Amz-Signature=3a5404fffdb519c40465a33e5403a9ff75c47485f6a9873bcfe08813e72f5a8a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMCFI4OU%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T004029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDME5OC8SnL%2BUkvJtweTSfUkYYO3B7cLKbt2XKXA7WZgwIhAOGeWvLTIoO5pUH4RPLFsogIlrGcO4bzybD48zC78PLBKv8DCCIQABoMNjM3NDIzMTgzODA1IgyvrHWCYFPK8gMiESsq3APiELDzIfVOHutboMmzc1wUidbOPNfg6RioLNBzejz7Qc2ACuR5NuAtMr9WL23gEaXCKZ4YaJiuB8z5BvE5%2BsDfkF28A%2F%2B%2B8JO6%2F8whxDDglrWPgrRWEJKxR5sBHhuJj94vaX7VwJs8QMomsA3QMY7t28UVe7zFPQcZ8R8DrfqSuuFB9NUhgmOBQB3%2FJouhhcEZsmAaMlYIUHHZbLZEYEYtZ9e8KiwEArlZxxi5v6090lAIkNWFQz86remBxcvn1Ix%2BheudVi69lHT6IxH3HcGfQPkVbqWzHNzM%2FaF46plEcBqmYmeuGHLX0J%2F%2F8miWNw1qvophc4NqEJwsU%2FMDfQuJFEqNPT9zKZLp7ZR7vNkHGRlVhmai%2BN2LggNzMlz4z6nBLwXxaEKafL14KpskUPqKGvOc2%2F7eRs7a5ud1b3YFX6MXwv5wwkQ6WYiQri3v2%2Fb8GN2WK%2FfkWDAzKisZ%2FWpW5tWYeyyKCjz0k2WhL5uXoyn30KlPNYK5P903ROScARtnXbvEtbaDqxCkzakNPHj3kXvy6XPYWQQaa1kbqrTWDmDDiBNI6gfanpz0oJRZQt%2B07qGq9v5L8sPR0c3dsel0kasw9e8Hdu8AeRQy0fOkR9LjJETmCZ7N7shzNDD80va%2FBjqkAWmKN3zaLjqsnWpQQ7E91meHmO3TdRdgfNnRkt6RWigQW1u8lIDuq5anN164tLTUqxsDot3jwUK2ewqq%2FrUexKkslDPWr1CdcxX5LjFrgkwR2AxgB9vpZOi9Wo8Es3tJNOafOzipBgTuKyz6dmTZuU5mX23pU3L4zEdY%2BZ2KG1jFWuuNTtuqXj494r0FM2WA%2FLdpIN1brB2vEk%2BULXyCt75iRf%2Fv&X-Amz-Signature=eb6a0b22bbfe4e9f6a6a192af569f30ccb20c48f7db7cc5ee7482c1bb5f5f4a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

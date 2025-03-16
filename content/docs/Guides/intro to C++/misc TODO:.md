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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNO3OP7H%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T230714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC07SFJLDmNpztxyUiIWJxTz2w39S0V4f3k0wQSJz0NaAIgKFp2xMtrIKv0uTrLCyLw4s0Rs9cqKGJCDvBnYZUhfX0q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAgLYsEIo9QDcsVp%2BSrcAxznv0PUX2c49E9FoLeday7kZ2pQVIzpXpeywr46J%2F4Hsu6mYxYXcx1%2FHI4Cfiu5wjBaXx8c2Iou%2BVPL8g3mj2ApGRZ9AJjNKxrv7pdoLn2IOfMzuaoeNzntk0F02zvqRcQDsOW06isg9co7p6vPfTKKnC7g7NZA5B0u2mMJ4aHWluZFDVbxQ%2FGQo2XrBIq3gfviIJzjGeniTWcw26s3pIrgDwqaJcuJLv1%2FwtLYvG%2BfISN%2FVhRlb6sG%2Fn7aCNX9c%2FiDPKou4WJAiRhy%2F0VfDszxMHmZUOVYwzE7Hq1FlcOYlHtuoJniHpTZ7nzRCNVyx9jmbbkS03RxdVaTzwOKR%2B14IyeUOQVJNnJ4GrT4ftycCXfZnCHDBP3NGEznQC7t5JyTlXsBSvnuzYyQXKsC6UnNJuBcxImxifAYbc25jrRbLX%2BopnqX5EI7vwxP6e%2FeH9MF5y41E%2FBJase7jVHVGy5n5BNxS9j4%2B4tNZUSrFLhuDEKn8CBR6RJrOZJ4aQAgU0Ilp55PPyBiC8Dc%2FOmXgDbOx0Bd%2BIHZfb3QarrDMNCxycMj5WO5TyXvbyw6OpararP6K%2B7dbL7ZyzqB74rVokybx8o4rlOQ07VJgyLj7OhyavcCxqcIA7Hus5mzMKqd3b4GOqUBJ3SRa5Vlixv2f6SM7qIgUVD1AGFMrBzfEa%2Bngk3rTPtThe6dd6Qov%2F19urVe1cZGZOrLRnp9e9KmS7wK6Q70oPZOPZm237uPuEULGaPyZ6RtnCy%2FpyElJvQevaTjnRKGl%2F0b%2BQb4m46wNQ3OOdEs2%2BZPg6zZ4FYFQlHiJPHNDqT9tDLE%2BFfkGe2cUgpBSLYHFJTc1GEbUW7NYG7DzWuo1fxMZeJU&X-Amz-Signature=26cd7821811e7ffc81164e8c49e096f1f0f6836047bc4cd2cf5dffd5f4fe9eb3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNO3OP7H%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T230714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC07SFJLDmNpztxyUiIWJxTz2w39S0V4f3k0wQSJz0NaAIgKFp2xMtrIKv0uTrLCyLw4s0Rs9cqKGJCDvBnYZUhfX0q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAgLYsEIo9QDcsVp%2BSrcAxznv0PUX2c49E9FoLeday7kZ2pQVIzpXpeywr46J%2F4Hsu6mYxYXcx1%2FHI4Cfiu5wjBaXx8c2Iou%2BVPL8g3mj2ApGRZ9AJjNKxrv7pdoLn2IOfMzuaoeNzntk0F02zvqRcQDsOW06isg9co7p6vPfTKKnC7g7NZA5B0u2mMJ4aHWluZFDVbxQ%2FGQo2XrBIq3gfviIJzjGeniTWcw26s3pIrgDwqaJcuJLv1%2FwtLYvG%2BfISN%2FVhRlb6sG%2Fn7aCNX9c%2FiDPKou4WJAiRhy%2F0VfDszxMHmZUOVYwzE7Hq1FlcOYlHtuoJniHpTZ7nzRCNVyx9jmbbkS03RxdVaTzwOKR%2B14IyeUOQVJNnJ4GrT4ftycCXfZnCHDBP3NGEznQC7t5JyTlXsBSvnuzYyQXKsC6UnNJuBcxImxifAYbc25jrRbLX%2BopnqX5EI7vwxP6e%2FeH9MF5y41E%2FBJase7jVHVGy5n5BNxS9j4%2B4tNZUSrFLhuDEKn8CBR6RJrOZJ4aQAgU0Ilp55PPyBiC8Dc%2FOmXgDbOx0Bd%2BIHZfb3QarrDMNCxycMj5WO5TyXvbyw6OpararP6K%2B7dbL7ZyzqB74rVokybx8o4rlOQ07VJgyLj7OhyavcCxqcIA7Hus5mzMKqd3b4GOqUBJ3SRa5Vlixv2f6SM7qIgUVD1AGFMrBzfEa%2Bngk3rTPtThe6dd6Qov%2F19urVe1cZGZOrLRnp9e9KmS7wK6Q70oPZOPZm237uPuEULGaPyZ6RtnCy%2FpyElJvQevaTjnRKGl%2F0b%2BQb4m46wNQ3OOdEs2%2BZPg6zZ4FYFQlHiJPHNDqT9tDLE%2BFfkGe2cUgpBSLYHFJTc1GEbUW7NYG7DzWuo1fxMZeJU&X-Amz-Signature=7fdbd685018d026ddffc871f65855fb90a90a29ad09e25a53844a278b5418957&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF652WLS%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T132348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnkkpXrkRTXLVBrT4BGMvnnm%2FoIM3Ehn5C4k6%2B4nXLLAiAqcG5Zevr3xai9p1mT0KNbN8pK1%2FwaqYq9552QnNMSJSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOretM2I%2BZWJ4RkLMKtwD4QXdGA7lxq%2Fk9%2FtOVeJwNHWYZ7VnwF7KnbWk2rOMiiyDdT%2FtF8HbWc90aZlH%2FKyF1nAVuw2DFTL9UMDM55L3YU61GFk1jEUoiuuzlEvzTgaydilDxBvMHIjp0HwtW7T9StQ%2FRTjEUg26BFUir%2FBez3z1CYdkT6q%2BeW5ffyg7C25Dhug8zz7PVR7JbSQh8DDIbAy0Fs3kjEO9QSf3SR1XWZY5b0tceGfD2S9KDxFOUOp%2FU%2BuJV51hZt%2BYicOt2p4zHzBY3Fszguh9hDqsrBYUNi4PQLM%2FiuAsXwL2pC7MGBdxn9XgDWxRKRp4dDiu8lDCNFKpQRn0vT%2FUHDH2eT9613KjzEgbNlLWYt2sSibmevU63DQDN%2B%2BggfddsEGI%2F2b%2FVKSWC4tWwMgZvU7IiXGYA%2FDhois0iETQD%2Ba8gk4sCBaTtLOCojph6JoLrD9dGj1BybQnrbtUROyoc0jLB%2FRpgqLkFNr7YGnKPhKPj96YBK4SZrjgA2Kwql0F%2B1ZmdJR2dqY8xXFxrypRndo%2B1raD8H4%2BJTtjVsmhlSXQEOArdBTQC0NT4S%2BzzEvsmFVv4QoNReDpGxEQxxR7T6stgw8cqO3WqquLCFaObkA%2F8KX6tmiNmFzg1L2qQnKk8aowlaTVwgY6pgHPj21Jg%2F4zfrRdn9hwwG%2Fte8XifNlWbdsE%2FEXDSBHCvDIYBozMpWKqr1ezCwZFyeVbOKThlz4FNQCnUYDnJSBcnUHXKvE74OGwQbtN1N5ghpNJdSgX0cQytD4Efiek4kgs3AeZB5%2FAg8KlQHJTvH0pxKmqRbeMmS463zH9rOz9uaeYxqyrxYBWqBWTdeh%2F53OnoI6Buw2hrnyLKnItk3Exw%2BiJyEfW&X-Amz-Signature=95b7d8bffa5b6fef52ebe876234cf5372e5eab31788154c08ffff4a537c9bd0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF652WLS%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T132348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnkkpXrkRTXLVBrT4BGMvnnm%2FoIM3Ehn5C4k6%2B4nXLLAiAqcG5Zevr3xai9p1mT0KNbN8pK1%2FwaqYq9552QnNMSJSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOretM2I%2BZWJ4RkLMKtwD4QXdGA7lxq%2Fk9%2FtOVeJwNHWYZ7VnwF7KnbWk2rOMiiyDdT%2FtF8HbWc90aZlH%2FKyF1nAVuw2DFTL9UMDM55L3YU61GFk1jEUoiuuzlEvzTgaydilDxBvMHIjp0HwtW7T9StQ%2FRTjEUg26BFUir%2FBez3z1CYdkT6q%2BeW5ffyg7C25Dhug8zz7PVR7JbSQh8DDIbAy0Fs3kjEO9QSf3SR1XWZY5b0tceGfD2S9KDxFOUOp%2FU%2BuJV51hZt%2BYicOt2p4zHzBY3Fszguh9hDqsrBYUNi4PQLM%2FiuAsXwL2pC7MGBdxn9XgDWxRKRp4dDiu8lDCNFKpQRn0vT%2FUHDH2eT9613KjzEgbNlLWYt2sSibmevU63DQDN%2B%2BggfddsEGI%2F2b%2FVKSWC4tWwMgZvU7IiXGYA%2FDhois0iETQD%2Ba8gk4sCBaTtLOCojph6JoLrD9dGj1BybQnrbtUROyoc0jLB%2FRpgqLkFNr7YGnKPhKPj96YBK4SZrjgA2Kwql0F%2B1ZmdJR2dqY8xXFxrypRndo%2B1raD8H4%2BJTtjVsmhlSXQEOArdBTQC0NT4S%2BzzEvsmFVv4QoNReDpGxEQxxR7T6stgw8cqO3WqquLCFaObkA%2F8KX6tmiNmFzg1L2qQnKk8aowlaTVwgY6pgHPj21Jg%2F4zfrRdn9hwwG%2Fte8XifNlWbdsE%2FEXDSBHCvDIYBozMpWKqr1ezCwZFyeVbOKThlz4FNQCnUYDnJSBcnUHXKvE74OGwQbtN1N5ghpNJdSgX0cQytD4Efiek4kgs3AeZB5%2FAg8KlQHJTvH0pxKmqRbeMmS463zH9rOz9uaeYxqyrxYBWqBWTdeh%2F53OnoI6Buw2hrnyLKnItk3Exw%2BiJyEfW&X-Amz-Signature=7f1c9ed0d0baca1d6eb598d079310abd63303d084b57bcf07e4275e440353628&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

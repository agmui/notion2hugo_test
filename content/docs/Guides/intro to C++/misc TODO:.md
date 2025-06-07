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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MGF4F56%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb6Xb0Q01V7Gj3O7RuFj0SeNLRLXh47mRTDMgIUQedBQIhAO8cr7%2FNCJWstgOwwfyszHgVMfHTT1C5fWOS4VAmHkSdKv8DCHwQABoMNjM3NDIzMTgzODA1Igw7aMjXUZa4W%2FCkRZkq3APZbgvegCWW%2Fy7QdJy5c7OLwTUkmt2CCPCWXS7r8EYS%2B%2FMPIr3uGa6NTZ31%2BTaMyB4GR%2B0tHFWi19xjxia3eMgwtKZxwbtSZBwS%2BS2CMsCqkJnCSRU7eNaGE1E27iZ0z1GsBe8jC0kt1h1A6Bi%2Bkz%2BGJxHgYLUj7KGzzqni525vTRGPfVl%2FPhONrSLcDIMNLYD08AFMiUTAvByGd9HqRrxm4jdXpF%2B%2BP2x3wbfSktZM0Mzo2jkXYswZ6kdCJRElxaOFJqrN4Nt492iRGCac2T5mxOXoQzSsYTTV03ptOMCLrBpUMwdvn%2Bwlb6Xx0Um31CL6hp2tmyC1TTPfIY5qUCXy7Kx4FpqbhSI%2Fji4RJr4%2Bi27aCxlFuSENoZ6QECqOjnjrWdec3YidhiGx9Jf4%2FnfFGmc840AJqdOW6KJw%2FdX5d3i9WDeJkfnk9Q1jORll0EL3KaNaV%2BSeVUe6lQbfUB3U4zDKkOsA0vNGRldwru7ZyZhZ8ROdRjgjN1gwEnqgvvx6EqXnBx6bLTwJtgZGbWRvuCvJfRU%2BrRPCKxX5sNig8e2NRG%2BLfFr%2B9ojYKJGFj9OIXefdTjSN4p2by9CXhA7QVOz1qPVOEZUNujWB3ZvGwvmt1Qw8wv6Vc5U4LjC7mJLCBjqkAeB2oCMKfJ8I4VwT55wvsSN61ZEy2DXgQZzSnfmcquNB53E4McMSzHCEf8BZ3L2MO8CPb8KPp50T76akdwcCiWkRXnSt%2BDFMqB5mP%2BJr%2FFDUKYLDw5OiGnDUHU4%2FSH0VLbfQkWRQlcXqAJZI1asZyQB7yBwvIuEWzXW8SAvq9uOq%2FVFfWdr6sSQIf6UsHCrHhyIveYopg9K7VxXJWnVNefmeZqMg&X-Amz-Signature=f1feeda168f2ee31008f3dc03dcf4c66f0ca52a766fe30c94f7f8754f0926354&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MGF4F56%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb6Xb0Q01V7Gj3O7RuFj0SeNLRLXh47mRTDMgIUQedBQIhAO8cr7%2FNCJWstgOwwfyszHgVMfHTT1C5fWOS4VAmHkSdKv8DCHwQABoMNjM3NDIzMTgzODA1Igw7aMjXUZa4W%2FCkRZkq3APZbgvegCWW%2Fy7QdJy5c7OLwTUkmt2CCPCWXS7r8EYS%2B%2FMPIr3uGa6NTZ31%2BTaMyB4GR%2B0tHFWi19xjxia3eMgwtKZxwbtSZBwS%2BS2CMsCqkJnCSRU7eNaGE1E27iZ0z1GsBe8jC0kt1h1A6Bi%2Bkz%2BGJxHgYLUj7KGzzqni525vTRGPfVl%2FPhONrSLcDIMNLYD08AFMiUTAvByGd9HqRrxm4jdXpF%2B%2BP2x3wbfSktZM0Mzo2jkXYswZ6kdCJRElxaOFJqrN4Nt492iRGCac2T5mxOXoQzSsYTTV03ptOMCLrBpUMwdvn%2Bwlb6Xx0Um31CL6hp2tmyC1TTPfIY5qUCXy7Kx4FpqbhSI%2Fji4RJr4%2Bi27aCxlFuSENoZ6QECqOjnjrWdec3YidhiGx9Jf4%2FnfFGmc840AJqdOW6KJw%2FdX5d3i9WDeJkfnk9Q1jORll0EL3KaNaV%2BSeVUe6lQbfUB3U4zDKkOsA0vNGRldwru7ZyZhZ8ROdRjgjN1gwEnqgvvx6EqXnBx6bLTwJtgZGbWRvuCvJfRU%2BrRPCKxX5sNig8e2NRG%2BLfFr%2B9ojYKJGFj9OIXefdTjSN4p2by9CXhA7QVOz1qPVOEZUNujWB3ZvGwvmt1Qw8wv6Vc5U4LjC7mJLCBjqkAeB2oCMKfJ8I4VwT55wvsSN61ZEy2DXgQZzSnfmcquNB53E4McMSzHCEf8BZ3L2MO8CPb8KPp50T76akdwcCiWkRXnSt%2BDFMqB5mP%2BJr%2FFDUKYLDw5OiGnDUHU4%2FSH0VLbfQkWRQlcXqAJZI1asZyQB7yBwvIuEWzXW8SAvq9uOq%2FVFfWdr6sSQIf6UsHCrHhyIveYopg9K7VxXJWnVNefmeZqMg&X-Amz-Signature=32ad1808910e3d898e20726a596c6d6c7afc863a96877f88fd90e927c1210bb2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

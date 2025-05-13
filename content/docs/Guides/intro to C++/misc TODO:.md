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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHETI2BB%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T121601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCICInPY7O9hmZ8F5qjT1kVc3zWRla5qyO4nQfMkP8tRV%2BAiBCEsOpZXH8uIX%2F9aH40mZZlRad1XEGETq0%2FTVop3GCeyqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7C4Kv7rRU0MDI0%2BDKtwDqQLYcNa7DY3dtzSAO7Jvaw6IuVawbfE0UmP5OuqMjnN5dnylTFcfuTaDHV4%2F9N4PlWT4fDvgUhrwxbNpoWc4yV%2Fs05il9vObaXeguLxsy9UHqi1JnHq0tR49sH1vx8%2FgyeKm9oLW%2BFbtEZUXMCWJpsl7b%2FU8bDjmwci6Y6RdJRmgfG49I29Xyj248GmnZjOGxv%2BEHq6kEnJfYlWOJmWo8QNSUWYB5JhFeh%2FrAud01slMfRolBTRv6f6dSqGJu%2B8kKJkzS6jnmSrc%2FoFJDgXkZOoBnqB0dT8Dx5%2FoP%2FBHE6TlRx0ahQYEMWvC9GOd7Zd9NZf3d7bu1%2BBTzHoeHD4KXOPfeTnL9Eta6aCYTSB2qhYLftB05JtEjN0BrY72ZmNZeiblAOExe%2FCmh8bnp7k%2FFNRxaSWDNwh7qK1Q8UckTJJmVTnQi5hzXlNkhnNmrU7Vx%2F8I6FejtP6Q6V%2BXT0vvm%2FdEq1kwL4SXOVMBNWUdoDvUW3pNe5id11qVIBVrpLF5l33sHFconq1leJ3JVpoyLTkEyVd1%2Fncli6696PkkWd9SpoOp4XDRFo9SdZLP8gyOEIf9E8fAu5yktpFESXUoyr1%2FRRYhIZFPvmKQe3eqyGkSFg9CQi6Kbi30JiMwmdqMwQY6pgG6%2FBIslrnEarqz3jqK3X4g7oWDk8rrs%2F%2B0elzpnwdLJcyCdUZ4SG96qVUOQ6olK4KwIh2Y%2FYfkx0ScCCDBv%2FjBAgxJSCoK9IkVXxAiBFe6wWKypuTCEvGqNZLnn2zITY70kxW%2F%2BZdxpH%2FdBieMVvLrifOMFy6lUshLCjqUcGRHj57%2FfWPjIYM%2FRe5hUrMa9ww78%2FCHToDLlXMpdtEaDsVEoBycAyNT&X-Amz-Signature=02b2756c1924832fdc924aea815b909233d708e0d6763d990a4a800be7aa3bb9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHETI2BB%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T121601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCICInPY7O9hmZ8F5qjT1kVc3zWRla5qyO4nQfMkP8tRV%2BAiBCEsOpZXH8uIX%2F9aH40mZZlRad1XEGETq0%2FTVop3GCeyqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7C4Kv7rRU0MDI0%2BDKtwDqQLYcNa7DY3dtzSAO7Jvaw6IuVawbfE0UmP5OuqMjnN5dnylTFcfuTaDHV4%2F9N4PlWT4fDvgUhrwxbNpoWc4yV%2Fs05il9vObaXeguLxsy9UHqi1JnHq0tR49sH1vx8%2FgyeKm9oLW%2BFbtEZUXMCWJpsl7b%2FU8bDjmwci6Y6RdJRmgfG49I29Xyj248GmnZjOGxv%2BEHq6kEnJfYlWOJmWo8QNSUWYB5JhFeh%2FrAud01slMfRolBTRv6f6dSqGJu%2B8kKJkzS6jnmSrc%2FoFJDgXkZOoBnqB0dT8Dx5%2FoP%2FBHE6TlRx0ahQYEMWvC9GOd7Zd9NZf3d7bu1%2BBTzHoeHD4KXOPfeTnL9Eta6aCYTSB2qhYLftB05JtEjN0BrY72ZmNZeiblAOExe%2FCmh8bnp7k%2FFNRxaSWDNwh7qK1Q8UckTJJmVTnQi5hzXlNkhnNmrU7Vx%2F8I6FejtP6Q6V%2BXT0vvm%2FdEq1kwL4SXOVMBNWUdoDvUW3pNe5id11qVIBVrpLF5l33sHFconq1leJ3JVpoyLTkEyVd1%2Fncli6696PkkWd9SpoOp4XDRFo9SdZLP8gyOEIf9E8fAu5yktpFESXUoyr1%2FRRYhIZFPvmKQe3eqyGkSFg9CQi6Kbi30JiMwmdqMwQY6pgG6%2FBIslrnEarqz3jqK3X4g7oWDk8rrs%2F%2B0elzpnwdLJcyCdUZ4SG96qVUOQ6olK4KwIh2Y%2FYfkx0ScCCDBv%2FjBAgxJSCoK9IkVXxAiBFe6wWKypuTCEvGqNZLnn2zITY70kxW%2F%2BZdxpH%2FdBieMVvLrifOMFy6lUshLCjqUcGRHj57%2FfWPjIYM%2FRe5hUrMa9ww78%2FCHToDLlXMpdtEaDsVEoBycAyNT&X-Amz-Signature=c6174096c2e9f260a742f42e2e92557505efdb7f1ffd4cda5586ec6d472cc49e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

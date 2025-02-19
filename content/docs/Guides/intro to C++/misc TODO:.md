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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZRBTBHK%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T210658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAk6HfJgPXK9rkpaemsr1q8daskotX9tyuGTRveDU3kCAiAe6Kjv1LTBQqSg6Crwh4NPdDu0KKmdzAr1qPJjCZcDjSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FTtShuClp94%2BtZrTKtwDjQqycp%2FrH6IDH1h1dTmjuMzMHU5h%2FY%2BKOmN71oWg4EJbpUJJq1sfmLDHLRx9dPEuYVHxRgGc7WEouIHbrlR9aLlsBUKMWm%2FkyQ7WPNAhlM2SZCJiDaeQedUlNpbQsm3ZnUf0Z3U0KhL81E34ANlzZzV%2Bjwwk%2F2GhBfYUuR2wQBLPteogXrDduvJOGqyslYw7vqd4eucNxU2N%2Bu0%2BVIVZw3vHHi7RiKS8it13KAG4DEvJnBux1QTZTlE9%2Fae%2B8fBzgjnP7WTTJWSSCdZryYbaDNUdy0SRTqSCHqtStI6Bcap4poPkmm5pmg7BbxEQpqv7QaKX2uRCsWy1J7VaF%2FdTrM%2BrGJ%2FB2UvSI9VRRrPzxfZlHzxpnCc5AZNeVhoyQTY%2BW9TteqUqwhp9tAb8EJLq5ahDu81KQIIAw0tjt84cvrjG5cGNmzavBQXFxSaABQ%2BGxk96GExept%2BgfYsmdG5uWu8Z9uk5ex4%2BOjFyzuivSAR5cb2zN5ezAO2QX7kCacb1va%2FCU3t2MkgcZwf4yqCulQSSqyEVWOfouCwcMErXk6FkTikZBp5VeYFQKZpbWCqKUTpyNX9B3iZ5MduQIuIsACnQMnb2QodXYmeAVWPpsts%2FBt0FbbsE%2BOwq%2BcUw%2BO7YvQY6pgFOl%2BgJhbkE1IRACyhmAr1Ain5YMYjJoaRtoIztPI7z%2FlBFv1AFrb873M%2FhjYlxN52uGv49AmOqNH2WrNsdX33KZupcl7ULm1s8WtbPEtIKRelhj5H4G2hLQjLYamf9C%2FMAdx8NcPaVk0xPq1PzKywsW28AzUEv0vDnLJ50tnZxG5oO%2F6OcPnYtJg37t9Dret70yyVP%2BradNj6EjgwVEESNCrZy9LbQ&X-Amz-Signature=e7717a5293b805e40eb393cf4770d4188b9e6ec93f551879fb09845a7746a2c5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZRBTBHK%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T210658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAk6HfJgPXK9rkpaemsr1q8daskotX9tyuGTRveDU3kCAiAe6Kjv1LTBQqSg6Crwh4NPdDu0KKmdzAr1qPJjCZcDjSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FTtShuClp94%2BtZrTKtwDjQqycp%2FrH6IDH1h1dTmjuMzMHU5h%2FY%2BKOmN71oWg4EJbpUJJq1sfmLDHLRx9dPEuYVHxRgGc7WEouIHbrlR9aLlsBUKMWm%2FkyQ7WPNAhlM2SZCJiDaeQedUlNpbQsm3ZnUf0Z3U0KhL81E34ANlzZzV%2Bjwwk%2F2GhBfYUuR2wQBLPteogXrDduvJOGqyslYw7vqd4eucNxU2N%2Bu0%2BVIVZw3vHHi7RiKS8it13KAG4DEvJnBux1QTZTlE9%2Fae%2B8fBzgjnP7WTTJWSSCdZryYbaDNUdy0SRTqSCHqtStI6Bcap4poPkmm5pmg7BbxEQpqv7QaKX2uRCsWy1J7VaF%2FdTrM%2BrGJ%2FB2UvSI9VRRrPzxfZlHzxpnCc5AZNeVhoyQTY%2BW9TteqUqwhp9tAb8EJLq5ahDu81KQIIAw0tjt84cvrjG5cGNmzavBQXFxSaABQ%2BGxk96GExept%2BgfYsmdG5uWu8Z9uk5ex4%2BOjFyzuivSAR5cb2zN5ezAO2QX7kCacb1va%2FCU3t2MkgcZwf4yqCulQSSqyEVWOfouCwcMErXk6FkTikZBp5VeYFQKZpbWCqKUTpyNX9B3iZ5MduQIuIsACnQMnb2QodXYmeAVWPpsts%2FBt0FbbsE%2BOwq%2BcUw%2BO7YvQY6pgFOl%2BgJhbkE1IRACyhmAr1Ain5YMYjJoaRtoIztPI7z%2FlBFv1AFrb873M%2FhjYlxN52uGv49AmOqNH2WrNsdX33KZupcl7ULm1s8WtbPEtIKRelhj5H4G2hLQjLYamf9C%2FMAdx8NcPaVk0xPq1PzKywsW28AzUEv0vDnLJ50tnZxG5oO%2F6OcPnYtJg37t9Dret70yyVP%2BradNj6EjgwVEESNCrZy9LbQ&X-Amz-Signature=986d1ae076dc13568deafb61f6fba8fc8501ac47bfdfcc9ad1a7aad0a5d01ba1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

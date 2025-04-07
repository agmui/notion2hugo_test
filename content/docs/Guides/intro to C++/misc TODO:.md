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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCRUJ55P%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T190232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDec0GprDtXfNepMuTs0WuxVZnEQxn5MVod5hriZwN2ugIhAPHW7h2zH3pAs24xPLzNwZMig%2FCAXTynF%2BTY7GiFhG90Kv8DCGMQABoMNjM3NDIzMTgzODA1Igxge7pJxr4p2PnneXMq3AP87Hunm4Daz7Nj7y5VVucooqh4oqhEpsxdGJXVKX%2F8RLZbMpf2XfYfjlJLJOo3OxlSwO8Ps4h0uBnp4hB2WPXu7%2F7gMtykqMD%2Bt9XsItVOMhpoesJJhFpzsUF%2BsJynK%2FdJiXiLRjnHVo7XVBOuHlWfPVz195EtwsZ7zHvIl4cRknoiYNDg%2F8%2BwBKTP3myqZIumd60ZuuFSidKtm%2Fyjnrw6yBjm5SnjIK7E6KLpoN%2BPd239qi8gEaYRpfLu6ETG0573hxXAliW7O%2FlfESiaRY1a3KT9uFoazV9NybSTu3jsYOF%2BvUEjs8b2Id8RJB%2FOe487TkVjO6SNfq%2B%2FX0ju9meoWg0ssGlFkPMHpdhINWH8QHD7NrvsdOOgk%2BiSjBkjP3bIHC3H2BBUViYSqyMCDIAm5OTLtsnJ%2FKhmFgDQCKVjn4okF1H8Tb%2FujnNio7OXM10HOvNkDj0udSUDdL9z77V6AC821NA4GaTkr1dJL90qyIiNd1n2nuXBAPP8p2yFfq0LwarXQHMJj8AM0ECq13zOZl25oCPxbCFnGaBcU6jeykUn%2B9KYmWh%2F0pzl4yuZGVkKDheSJxIhVvCJwJsVJvUkIsMpJY9RAsowxZ4hOHB6okACm5C82WXQxV2rvDCno9C%2FBjqkAcn1OARb3GSMO3r6N%2BShVECVNGikhAxGLE8v6sXiP8gJyoz35uhIaYVs79toTDE4tLflTs8JE9zEuABW0egxWx1dJO17qC9Jjx2%2Fe6QiDH4%2BFCFayHUzhfz9qWAMzToNJUB8oVhfO0GrLmJc3NfCPBePDkCh802AqcEJ74LQ6BMZ64UbZRPgmRqP2Rl%2B3HlRRv3FNeIm40NZHPh128RKhjgg3USN&X-Amz-Signature=c4afb98ed1afc392702b680f62726da932d33f279c8eedc36729789ada2d1928&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCRUJ55P%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T190232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDec0GprDtXfNepMuTs0WuxVZnEQxn5MVod5hriZwN2ugIhAPHW7h2zH3pAs24xPLzNwZMig%2FCAXTynF%2BTY7GiFhG90Kv8DCGMQABoMNjM3NDIzMTgzODA1Igxge7pJxr4p2PnneXMq3AP87Hunm4Daz7Nj7y5VVucooqh4oqhEpsxdGJXVKX%2F8RLZbMpf2XfYfjlJLJOo3OxlSwO8Ps4h0uBnp4hB2WPXu7%2F7gMtykqMD%2Bt9XsItVOMhpoesJJhFpzsUF%2BsJynK%2FdJiXiLRjnHVo7XVBOuHlWfPVz195EtwsZ7zHvIl4cRknoiYNDg%2F8%2BwBKTP3myqZIumd60ZuuFSidKtm%2Fyjnrw6yBjm5SnjIK7E6KLpoN%2BPd239qi8gEaYRpfLu6ETG0573hxXAliW7O%2FlfESiaRY1a3KT9uFoazV9NybSTu3jsYOF%2BvUEjs8b2Id8RJB%2FOe487TkVjO6SNfq%2B%2FX0ju9meoWg0ssGlFkPMHpdhINWH8QHD7NrvsdOOgk%2BiSjBkjP3bIHC3H2BBUViYSqyMCDIAm5OTLtsnJ%2FKhmFgDQCKVjn4okF1H8Tb%2FujnNio7OXM10HOvNkDj0udSUDdL9z77V6AC821NA4GaTkr1dJL90qyIiNd1n2nuXBAPP8p2yFfq0LwarXQHMJj8AM0ECq13zOZl25oCPxbCFnGaBcU6jeykUn%2B9KYmWh%2F0pzl4yuZGVkKDheSJxIhVvCJwJsVJvUkIsMpJY9RAsowxZ4hOHB6okACm5C82WXQxV2rvDCno9C%2FBjqkAcn1OARb3GSMO3r6N%2BShVECVNGikhAxGLE8v6sXiP8gJyoz35uhIaYVs79toTDE4tLflTs8JE9zEuABW0egxWx1dJO17qC9Jjx2%2Fe6QiDH4%2BFCFayHUzhfz9qWAMzToNJUB8oVhfO0GrLmJc3NfCPBePDkCh802AqcEJ74LQ6BMZ64UbZRPgmRqP2Rl%2B3HlRRv3FNeIm40NZHPh128RKhjgg3USN&X-Amz-Signature=6c683bfb0ceee4d200c787b3d918fe27dd3fced1fc3521729431fa221cef3670&X-Amz-SignedHeaders=host&x-id=GetObject)

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

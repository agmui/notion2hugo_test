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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662II22SPE%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCpT77D6R9CbqcsFzg49LisF9fJkEyD9l8JsajxeKL4RgIhAIt9BYzXp1O%2B8IzCvmNmcpiBMZ6iydHVHElRcpDq1WU8Kv8DCFoQABoMNjM3NDIzMTgzODA1IgyAs4tmQDrgXvKTw3Mq3AOT%2Fb5gs3Z4Ad4LKclOAh4J5VamGb6P3STRTUHX%2F8HTltntbACBLObLX6ab9raUq1nHN20hz%2FdFUtE9doO5iiX%2FrOMlESOsH2QMqMeb0QRp9%2FKzx2rhSUAM6SxbiDlDdFl0acrR3V%2F4mMwDmhgeyBixQQ2eEM7n5y6I5CPHdVo3rFJwOOh8C%2Bf%2BY1%2Bd0JO5uMKCZnYCCSv2UoBDdhoa4oVrmUtKUslHDIeuuhoUxjaCquGDlxXEG5xXBcz2pW0umO5ddTmfxJMKb9zx0l0OJlNdiUHT2ZCTS2fw8CwkMiz8KAa0trEZUOAwn5fsVJQaZLi50xkn8w8WzL0FuOBUzBvOvJAzzCONTUa9Cg%2F594mwbYBUWmG4MTeO4E9eK2UGjTTeYUC7RhgHOgKG1oDlqs721gBkCTisdABWuq8ms4nkbx5vyfHNK6vMjMZXGt0iQ%2F245bxwqej%2Fgxr47lqJZCULdh9I3C%2FOxUalAIqds5%2B365IOuH3qP7x4c%2BXyi7KpUeb%2FNTHPP0qHTLk%2B82ulXzmvOf7zO3rLHkdZ%2FOcg39UDbNsrguDZzes1F6fLnCwljcdcv0MwWq2%2Biu14Y7baN29dl%2BFSmc72t3BONJf1BrP3%2BlFNG1WNahcr7S1TljCO9%2BS%2BBjqkASCnr3tpOcBuG0KIjjDc1jSmLKbtrrUrEAg3CzUHpC9XyxkB81bwq6bIoG7f5I7XkJFfeUMgfw0To2HykNkuJf0Q6bgfr5B%2FTwem2J8HYJWoya%2BeIkpAafQCDaYq58qTZ5TWXGfkrAXU8VEWovn3ePniI6JuB3iRiFSvEeE%2FvzG7Gzrmq0tv5%2FvLOgnq%2BrJVKKzE1xLGBwUOM6DCQc4JbmUK9cg9&X-Amz-Signature=4e303918d69831fb620665725bc427f06d5033f73db12777ac335a5a81715159&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662II22SPE%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCpT77D6R9CbqcsFzg49LisF9fJkEyD9l8JsajxeKL4RgIhAIt9BYzXp1O%2B8IzCvmNmcpiBMZ6iydHVHElRcpDq1WU8Kv8DCFoQABoMNjM3NDIzMTgzODA1IgyAs4tmQDrgXvKTw3Mq3AOT%2Fb5gs3Z4Ad4LKclOAh4J5VamGb6P3STRTUHX%2F8HTltntbACBLObLX6ab9raUq1nHN20hz%2FdFUtE9doO5iiX%2FrOMlESOsH2QMqMeb0QRp9%2FKzx2rhSUAM6SxbiDlDdFl0acrR3V%2F4mMwDmhgeyBixQQ2eEM7n5y6I5CPHdVo3rFJwOOh8C%2Bf%2BY1%2Bd0JO5uMKCZnYCCSv2UoBDdhoa4oVrmUtKUslHDIeuuhoUxjaCquGDlxXEG5xXBcz2pW0umO5ddTmfxJMKb9zx0l0OJlNdiUHT2ZCTS2fw8CwkMiz8KAa0trEZUOAwn5fsVJQaZLi50xkn8w8WzL0FuOBUzBvOvJAzzCONTUa9Cg%2F594mwbYBUWmG4MTeO4E9eK2UGjTTeYUC7RhgHOgKG1oDlqs721gBkCTisdABWuq8ms4nkbx5vyfHNK6vMjMZXGt0iQ%2F245bxwqej%2Fgxr47lqJZCULdh9I3C%2FOxUalAIqds5%2B365IOuH3qP7x4c%2BXyi7KpUeb%2FNTHPP0qHTLk%2B82ulXzmvOf7zO3rLHkdZ%2FOcg39UDbNsrguDZzes1F6fLnCwljcdcv0MwWq2%2Biu14Y7baN29dl%2BFSmc72t3BONJf1BrP3%2BlFNG1WNahcr7S1TljCO9%2BS%2BBjqkASCnr3tpOcBuG0KIjjDc1jSmLKbtrrUrEAg3CzUHpC9XyxkB81bwq6bIoG7f5I7XkJFfeUMgfw0To2HykNkuJf0Q6bgfr5B%2FTwem2J8HYJWoya%2BeIkpAafQCDaYq58qTZ5TWXGfkrAXU8VEWovn3ePniI6JuB3iRiFSvEeE%2FvzG7Gzrmq0tv5%2FvLOgnq%2BrJVKKzE1xLGBwUOM6DCQc4JbmUK9cg9&X-Amz-Signature=4aa07438d83b522205c89eb1ca0a8158e0a32d32150c10c95fc2e360703307dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

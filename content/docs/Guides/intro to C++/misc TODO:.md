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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG5ELBUT%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T034512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmMhaL0VKr4QWpN%2B2S9Q0CNtSbierqNrVxiibUTF%2BrHAiAF4Hli%2FUwH0kUTg1PvQBEy2YwBlKIshBqdYRJ%2BHOxtlyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkjfEjVMmoa7fElW9KtwDbByeDXtKPmcmaXzfC%2FH4Y3uTAbdx5d3jYIzbWa200MWNww4qPg6M%2Bmwx6ZjnZ4gmZmpEDW9ryIUi8dBzQ8KZl4AyoWUt2DF6kV%2B1sS0caZUTox7PBV6GPQ6aVl2MVfI1%2FEwBc%2BeF7bkjOcvGu8cX4rmnQSxVb0abek7Lp3tTQyoa%2F11334VaoAfdtL3x8sACBk1dJek%2Fd3op%2B2Ibkc1GfRbektXA4GPY1jyDOxQB%2F30H%2FSAaZzKYMGOQmyime2rJPiUSsCahGdwTX4xb0cf0wYnjEc1NyA9QXEjjTWj0DUHq8KtrkSpYpUB7SxD8DeNyCkR5ju%2FDfIZ7sdK49FZUQ%2B5hhfrTm5qDuO1R58CgMBHIVtfxeeAyv8AeeJa079jWYJdMkTzHk%2BV0rTtOpJOpoV6sH%2BcdQ0p7KK87lp65Hl%2Foyz4V%2BsV5kUJm32tF%2BBuder0WN8nLwC9gX14oRJTzTM7Gv4Kux2NvhPpXMSyo1e51%2BXHYmLaTB0v8NeEQvJAUOjb0oxiosJiqXfZt%2B2y8rgLqWm7RZb6hZ%2BaITTVDsFRZQXV2lFVYsHG4yUqRv4bZExswZeQjOr8BZFG8S%2BVrBR62wTg%2BRThBi6e6pRiXmxUMHbV8CQW0TU28wO0wkJ2TwgY6pgHEAmjzBw8mn%2FF2Le0do5ZdsEz4KFVw0KmEw4NGBbcWsWVIRZMC3cRFYtk4clobBHUgXf7sFy%2B3cfB747L%2F8q60tzmgIaby1FUqrAJIc6jasP0Vr%2FLRzpys4Vb%2FIQEjnNCYz83yfVRFTwxiSD6KxP20gByO6ct9wtXk3S%2BMJrwouUnEoAfYAEPfNz0ugvOFyUQcxCdy3kq0mjTYxzns2dp%2BniPW0gOW&X-Amz-Signature=1953a7240c0b5b4afc3562be2be1845274c51d5ae4f1312532df25646993f775&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG5ELBUT%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T034512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmMhaL0VKr4QWpN%2B2S9Q0CNtSbierqNrVxiibUTF%2BrHAiAF4Hli%2FUwH0kUTg1PvQBEy2YwBlKIshBqdYRJ%2BHOxtlyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkjfEjVMmoa7fElW9KtwDbByeDXtKPmcmaXzfC%2FH4Y3uTAbdx5d3jYIzbWa200MWNww4qPg6M%2Bmwx6ZjnZ4gmZmpEDW9ryIUi8dBzQ8KZl4AyoWUt2DF6kV%2B1sS0caZUTox7PBV6GPQ6aVl2MVfI1%2FEwBc%2BeF7bkjOcvGu8cX4rmnQSxVb0abek7Lp3tTQyoa%2F11334VaoAfdtL3x8sACBk1dJek%2Fd3op%2B2Ibkc1GfRbektXA4GPY1jyDOxQB%2F30H%2FSAaZzKYMGOQmyime2rJPiUSsCahGdwTX4xb0cf0wYnjEc1NyA9QXEjjTWj0DUHq8KtrkSpYpUB7SxD8DeNyCkR5ju%2FDfIZ7sdK49FZUQ%2B5hhfrTm5qDuO1R58CgMBHIVtfxeeAyv8AeeJa079jWYJdMkTzHk%2BV0rTtOpJOpoV6sH%2BcdQ0p7KK87lp65Hl%2Foyz4V%2BsV5kUJm32tF%2BBuder0WN8nLwC9gX14oRJTzTM7Gv4Kux2NvhPpXMSyo1e51%2BXHYmLaTB0v8NeEQvJAUOjb0oxiosJiqXfZt%2B2y8rgLqWm7RZb6hZ%2BaITTVDsFRZQXV2lFVYsHG4yUqRv4bZExswZeQjOr8BZFG8S%2BVrBR62wTg%2BRThBi6e6pRiXmxUMHbV8CQW0TU28wO0wkJ2TwgY6pgHEAmjzBw8mn%2FF2Le0do5ZdsEz4KFVw0KmEw4NGBbcWsWVIRZMC3cRFYtk4clobBHUgXf7sFy%2B3cfB747L%2F8q60tzmgIaby1FUqrAJIc6jasP0Vr%2FLRzpys4Vb%2FIQEjnNCYz83yfVRFTwxiSD6KxP20gByO6ct9wtXk3S%2BMJrwouUnEoAfYAEPfNz0ugvOFyUQcxCdy3kq0mjTYxzns2dp%2BniPW0gOW&X-Amz-Signature=027da7146d91b4c6d0b23809ffea9a584cefff601079bf95fad7edf0f2ef6b76&X-Amz-SignedHeaders=host&x-id=GetObject)

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

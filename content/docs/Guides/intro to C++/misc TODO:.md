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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R5RW66L%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T190145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIFrSqrI0%2F%2FYHrx91jpXgyQJGvIytq1wIYsDhqLFvTj3sAiAUiHZAH8CmoP%2BpRiaEzucoR3PPciCUoZnWiCQ5jPMjuCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMNU0cCYe0jZ82Nj8dKtwDcX1y%2F%2F8Q7DtT7t6g0S1ZXqiX8ahXADuLeI3Dh9QkkLo8VG5CGu9hmz7RTccQQqN9ByVql%2FRwEgLDAUQYnfjUQsT%2B3IRUFbdIBxG6DO2XiiBL9XosKsWp3uX1oSgEE78I8UaCreoxhhLK52FJDs%2BtJgZ8BPQhSpsvC8BGJnXWH7hjEnhUjNNtmaemgqc2Hu66mlmY1%2FyZ0tjE8lkvNZO0XBkHdNIgyy9vKHSblHfChomYIJSJDO8bLFInrvA%2FshCJVCq3wFbo%2F704P0%2B3nldG7sWiLY5wcZtNnAo%2Bb5rfy0dJKjEllC4LxpoKgI47NKvGgbQrbpYgn42xuWksyFPsnrOXqBfVJX4IHOr%2Bmakd03gBoCihxChWCKfN8AT60keKlMq3T7DLirD8lK6LAR7YkKmZwWTah4DFKhYhb7Od9GQ%2BxYGmvMb7jbuBfsS27DTQ5I4c96sqCqJFVt%2B38Lgny0FDo9%2FzIYEGGM%2FaLRjad1nObxn%2FEwdT%2B8%2FQDD33eIsWrtWFnAralb08JQytacDrNLBoWeMuVDuJVlEcx87irgMI0Ff37hdWR2o4N8YHh5EDqmjbQ86H%2F1eEvaW4a35MPv1omfmJ6CLYAdfm4vpiXwJz3Ccw8adP7ydGqO8wqJbIwQY6pgExBSC1kglw71X1nuF3kOHp2wvwams2%2B9tFfmmeqxQk8P%2FCAy1M6loXzds28upZ9wjaVjlJwFczg6JTxMt9AvsaWOfnGJ0ckgmYkJEFYrBJX4c1iUkVJC0K7MXQ5Ure4JSCDD0za%2BpEvO%2Br8wSERD6bKyppPQFn6NJwdtgjgqLMyUMlcuXrmDqVp6w%2Bc7lzwDJiZqi9z0TjJHlK5wSZQHla02VWKVIk&X-Amz-Signature=57dceec52bffd05c89b0145571db5ec138eb1a12032bbbedf8eaee1c2329b87a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R5RW66L%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T190145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIFrSqrI0%2F%2FYHrx91jpXgyQJGvIytq1wIYsDhqLFvTj3sAiAUiHZAH8CmoP%2BpRiaEzucoR3PPciCUoZnWiCQ5jPMjuCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMNU0cCYe0jZ82Nj8dKtwDcX1y%2F%2F8Q7DtT7t6g0S1ZXqiX8ahXADuLeI3Dh9QkkLo8VG5CGu9hmz7RTccQQqN9ByVql%2FRwEgLDAUQYnfjUQsT%2B3IRUFbdIBxG6DO2XiiBL9XosKsWp3uX1oSgEE78I8UaCreoxhhLK52FJDs%2BtJgZ8BPQhSpsvC8BGJnXWH7hjEnhUjNNtmaemgqc2Hu66mlmY1%2FyZ0tjE8lkvNZO0XBkHdNIgyy9vKHSblHfChomYIJSJDO8bLFInrvA%2FshCJVCq3wFbo%2F704P0%2B3nldG7sWiLY5wcZtNnAo%2Bb5rfy0dJKjEllC4LxpoKgI47NKvGgbQrbpYgn42xuWksyFPsnrOXqBfVJX4IHOr%2Bmakd03gBoCihxChWCKfN8AT60keKlMq3T7DLirD8lK6LAR7YkKmZwWTah4DFKhYhb7Od9GQ%2BxYGmvMb7jbuBfsS27DTQ5I4c96sqCqJFVt%2B38Lgny0FDo9%2FzIYEGGM%2FaLRjad1nObxn%2FEwdT%2B8%2FQDD33eIsWrtWFnAralb08JQytacDrNLBoWeMuVDuJVlEcx87irgMI0Ff37hdWR2o4N8YHh5EDqmjbQ86H%2F1eEvaW4a35MPv1omfmJ6CLYAdfm4vpiXwJz3Ccw8adP7ydGqO8wqJbIwQY6pgExBSC1kglw71X1nuF3kOHp2wvwams2%2B9tFfmmeqxQk8P%2FCAy1M6loXzds28upZ9wjaVjlJwFczg6JTxMt9AvsaWOfnGJ0ckgmYkJEFYrBJX4c1iUkVJC0K7MXQ5Ure4JSCDD0za%2BpEvO%2Br8wSERD6bKyppPQFn6NJwdtgjgqLMyUMlcuXrmDqVp6w%2Bc7lzwDJiZqi9z0TjJHlK5wSZQHla02VWKVIk&X-Amz-Signature=988e1c85a0a4652b55883b0a0d33697f2befe60b50cab2928752dad99c66d3df&X-Amz-SignedHeaders=host&x-id=GetObject)

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

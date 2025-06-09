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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJX4LC46%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T161047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBxsUyn9VV0qjf8071lqdHqIgtAWZuJIm7f2lHHL7agmAiBsuoVnLhsVB3OOPKdpETtDapfGpuEYWo1SAzJaWGdxpSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMugjXQJttMWw1waCzKtwDvEhgk7bMgnX8Eh8aJcSKdBk3PlBK0kGEtmwzhlhhzkqzPLYkuNva5ig0gCxNm1zWzuaxdkwb6KfsamN4kZMnn%2BbkFHy8HH%2F13S%2FW0tDm7HipOSo38WmOpvtwuCKg1%2FH94AMoOM3LLL3JV1FlG5lJzEnMgLM7zH4fkX3LxaameUQEPNppc0LuYXWDE5kiTZ%2BIlydsgGqqMFRiFM%2BkP47TNzpls6thzT%2Fd502lZ8PnFmTwqsIwqwOgbN2meJm87UrK52iygBKTVBMjY52lFqWdipjcGKqSeOwKNOys2xMW2GLnKV%2BINCqRYsBFeyJV5Q21H6pRNhAFtsLTAhzaz99CjEubEvmHT76yeLO6aUtCVfFg7dM5O9qZUSguF%2B0OEtZYFOH8LbrDMM0nyylgnwRgv47trqUpaPwUC3h6ot9TXnY8p5D5rFrhmHqE1A2KgCBjqTVIqJDlpQPXMA9xyYr7UIfo2QrrdHOBxzTCHKqENmzyAAd7xbf6uwOQDJ3JunZD3ZGBqL7pUy8ZjNCaBNdHG%2Bz4LqVUtPiJLDw%2Bro7GHDc1l55pCJW%2FYhKD5oy1sZwGtx%2F8FvcUWwC0R6xizIuWig6nCS25xFDxHTjsmaMiE9ROQobg63q5a0PQ6X4wwdebwgY6pgF1mAmPskinhJjis7IZanemFeWB9is96%2BMAyMPtOb%2BFRGNnrAD%2FfNCvBfoXh8z%2Bg1dxyRgM2ob2I2jWDYd%2FcL441kX7l4h1xT9OYabUwcSUdHRYN0PdrXDadr%2B8Cd08g0YO13P5vHXGndKiaGKmUp9ex%2FjLl5%2Fd513DCamx1lImXryk8tKZDqY5N1I3BE5eFs5f3MOdHQuSIsV3JlZBpSfbciy7uC8V&X-Amz-Signature=0f7c3868b399a17fe0baa24607bb9a44ace0e7eb00a9cccc541ad956c508362a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJX4LC46%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T161047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBxsUyn9VV0qjf8071lqdHqIgtAWZuJIm7f2lHHL7agmAiBsuoVnLhsVB3OOPKdpETtDapfGpuEYWo1SAzJaWGdxpSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMugjXQJttMWw1waCzKtwDvEhgk7bMgnX8Eh8aJcSKdBk3PlBK0kGEtmwzhlhhzkqzPLYkuNva5ig0gCxNm1zWzuaxdkwb6KfsamN4kZMnn%2BbkFHy8HH%2F13S%2FW0tDm7HipOSo38WmOpvtwuCKg1%2FH94AMoOM3LLL3JV1FlG5lJzEnMgLM7zH4fkX3LxaameUQEPNppc0LuYXWDE5kiTZ%2BIlydsgGqqMFRiFM%2BkP47TNzpls6thzT%2Fd502lZ8PnFmTwqsIwqwOgbN2meJm87UrK52iygBKTVBMjY52lFqWdipjcGKqSeOwKNOys2xMW2GLnKV%2BINCqRYsBFeyJV5Q21H6pRNhAFtsLTAhzaz99CjEubEvmHT76yeLO6aUtCVfFg7dM5O9qZUSguF%2B0OEtZYFOH8LbrDMM0nyylgnwRgv47trqUpaPwUC3h6ot9TXnY8p5D5rFrhmHqE1A2KgCBjqTVIqJDlpQPXMA9xyYr7UIfo2QrrdHOBxzTCHKqENmzyAAd7xbf6uwOQDJ3JunZD3ZGBqL7pUy8ZjNCaBNdHG%2Bz4LqVUtPiJLDw%2Bro7GHDc1l55pCJW%2FYhKD5oy1sZwGtx%2F8FvcUWwC0R6xizIuWig6nCS25xFDxHTjsmaMiE9ROQobg63q5a0PQ6X4wwdebwgY6pgF1mAmPskinhJjis7IZanemFeWB9is96%2BMAyMPtOb%2BFRGNnrAD%2FfNCvBfoXh8z%2Bg1dxyRgM2ob2I2jWDYd%2FcL441kX7l4h1xT9OYabUwcSUdHRYN0PdrXDadr%2B8Cd08g0YO13P5vHXGndKiaGKmUp9ex%2FjLl5%2Fd513DCamx1lImXryk8tKZDqY5N1I3BE5eFs5f3MOdHQuSIsV3JlZBpSfbciy7uC8V&X-Amz-Signature=f72f42e04a60947f07cdd23b27e19193ca8a72750cc91f6ae3d2ec6caa8e9e6a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

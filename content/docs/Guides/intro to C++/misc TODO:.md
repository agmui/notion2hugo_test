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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KKB3YUM%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCICKLixirUGghjgVGueH%2F1Jdqo8Ctamsu8ITBJn%2F%2F%2F%2B0pAiEA8Tofxeh3nENTYCYGEtVI5vVsKbLStvzKefqt1aSR%2Bjsq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDOSSRQfBOB02wmbqXSrcAwLrbHihRqd0%2FR8b9tg9ehU1wv7AnkF4IhgYAV2V%2BYDROzHns9hy9da6FTk4hggz6OsgfVQOG7OXcsQu%2B3JZwVylB4bG7IAtaZpGToTCr52Q3d9Fpn27PSP7MWQqW9hPtJQDKQZis1POHljFSUD1zLfJWxuIcfmt6GtIQtsOfNKCrTLz%2F5PTLcjaaB5p%2Fh01yiU6LEsikdy%2FlK6VG%2FPVM5AoTLmT3L13Fr8jJUDy3wsQPNERXUHcTT%2B6Yi7eD5aM4LIFre%2B%2FcaRZHJffxbLhasbsXsv%2FwuyGhVwQ3l98x6k3TZLvbRIGqhxaUuSIjmqnLOtymL8g7Qz5UuuA3c7Ns0lBhNbqHC%2FXoTLy2PtNjbIZviy8ptpfpCOvqa%2FBVACpsfkc%2Fe8P6elwbZnhb1iL8kx3cLD6uefQyA24BY8uTYRcQ4XekrnFr7FcglSAs9RWUIqX0bLyH0JOg%2FjIbosy6lMrXVIsbIVbK9cBGdxbLWaXWSUQl%2BRmv8bWw%2BTiHWVvq3cC4N5PDpMj01JMSAh8wRqSvmd2imikXevwzM%2FIFVmsqu3yUeLTsQL%2FbNaflKN8H%2FfjVjH5D8uULYK9zz%2BhAzmZI3ufqxcZrWeURziGtpRjmHV3LSMqC9ETAzZwMJK47MIGOqUB85w4k1khClqDlX%2FhXGiOWmm2Vv%2F6pNOzb3vx9AZDWj1JvN6eYR0JCM7vJiv5jS0SeNDZ%2FK5tRaMn98CEsfwtoH5auUINPD6Blj4aEUGT6b7Z2DRXv5WQ2DqHjdudWBX6nVQQv6Gf%2F5F%2Bj%2BwZqeFqKDKq998fflaaC3WxNcg%2By4l1h0wqMevKiHOyr6B5nD%2By7d2RMZGx%2B8rMWIBxgEPzT2WnGt%2Bk&X-Amz-Signature=319d626a8cdf3e6871201883b0af7bc8483a5d85098a87fe6ae9eecd3e55cf44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KKB3YUM%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCICKLixirUGghjgVGueH%2F1Jdqo8Ctamsu8ITBJn%2F%2F%2F%2B0pAiEA8Tofxeh3nENTYCYGEtVI5vVsKbLStvzKefqt1aSR%2Bjsq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDOSSRQfBOB02wmbqXSrcAwLrbHihRqd0%2FR8b9tg9ehU1wv7AnkF4IhgYAV2V%2BYDROzHns9hy9da6FTk4hggz6OsgfVQOG7OXcsQu%2B3JZwVylB4bG7IAtaZpGToTCr52Q3d9Fpn27PSP7MWQqW9hPtJQDKQZis1POHljFSUD1zLfJWxuIcfmt6GtIQtsOfNKCrTLz%2F5PTLcjaaB5p%2Fh01yiU6LEsikdy%2FlK6VG%2FPVM5AoTLmT3L13Fr8jJUDy3wsQPNERXUHcTT%2B6Yi7eD5aM4LIFre%2B%2FcaRZHJffxbLhasbsXsv%2FwuyGhVwQ3l98x6k3TZLvbRIGqhxaUuSIjmqnLOtymL8g7Qz5UuuA3c7Ns0lBhNbqHC%2FXoTLy2PtNjbIZviy8ptpfpCOvqa%2FBVACpsfkc%2Fe8P6elwbZnhb1iL8kx3cLD6uefQyA24BY8uTYRcQ4XekrnFr7FcglSAs9RWUIqX0bLyH0JOg%2FjIbosy6lMrXVIsbIVbK9cBGdxbLWaXWSUQl%2BRmv8bWw%2BTiHWVvq3cC4N5PDpMj01JMSAh8wRqSvmd2imikXevwzM%2FIFVmsqu3yUeLTsQL%2FbNaflKN8H%2FfjVjH5D8uULYK9zz%2BhAzmZI3ufqxcZrWeURziGtpRjmHV3LSMqC9ETAzZwMJK47MIGOqUB85w4k1khClqDlX%2FhXGiOWmm2Vv%2F6pNOzb3vx9AZDWj1JvN6eYR0JCM7vJiv5jS0SeNDZ%2FK5tRaMn98CEsfwtoH5auUINPD6Blj4aEUGT6b7Z2DRXv5WQ2DqHjdudWBX6nVQQv6Gf%2F5F%2Bj%2BwZqeFqKDKq998fflaaC3WxNcg%2By4l1h0wqMevKiHOyr6B5nD%2By7d2RMZGx%2B8rMWIBxgEPzT2WnGt%2Bk&X-Amz-Signature=df4f742d0943d38ef7ae558ea15e288f94cfd85e5cefa1810a529b4c684f8cac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

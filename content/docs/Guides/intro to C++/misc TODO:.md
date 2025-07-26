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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV7WMPIG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIGeuXf1FTofoOjJM3GwDqSh4PKerE0yNDwF0qV6crgzHAiAfX6zhYo4DyxlFPLnAebnGixT1RVixfR7un8QYxWJHIir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMuAWN10QxHyZJB4plKtwDFtcwmf0l5rNFfjv5Ap8ouwqmO8CtTbqupX2aSMuyrbDDFfqH9%2B98iXQV2qfy%2B2qCvm%2BqF4KxACSbF4ue3sF%2Fz8avgFdCk1ZhgYsY6IgTpoKxbG4LiBOBs9xjAoFUm1%2Fh1kjq3tDB%2FX4WhauFDOR50sstRaX52EufafBcwdfoy3WeYR4htVyv2ARU8V8OaHY2q6GOxZF1JDdskqlMjv03Od732HqcDDypZAZdne4w1%2B4pWb46NUJMz5fcz3J8EufvH%2FQWOdiRjYTY%2FbVyWdZxyMSb73lApqdNPYKHZClgqkKzILDt3Y9PTaDMwj08s1JHr1Dy5OTyTYhqHOJY1BqMn%2BU6fSpLaUYvJTs9IDJRFBYb7ORg3hBMT9%2BuIxtkK5VsqDDhBKHJ2movzh4tbClHMdKBYfKQdPCCM%2FekH47YaG2VQWMeWgdVjZcnThjzKAEiKN5rcVuS6yTLp9%2FJQfe5LFutZx2uC5PETRnKVOfd0nFFaHerlu6xsRazTwxXX3ep1CDkGpRMRvWRFD7DjuhumKeOg9eagKJA84vwLveQPEmuYXivK9ImYkzN1sPTvi%2FJL%2F9RU%2F08tCkj1vldNeB8YhCLrFjIUUCOk%2BV9WVSPPXEdi00iLkomgaBlX4Yw5KuSxAY6pgHK9kVWRhQlaEV6v7pWn8491yj8toMUurqcKBhT%2BM7ORDNVrE8N4rF8WbJPb0TYNydc4be%2BCrb0jUvBJ7vcqHWb0AGnCTTQbLP6AmHdRQIyap74KOEBAIK7mn%2F3OKoirbFCoiYbUrjYf%2F%2BvNW4NL6ffIlbNkKTOypq%2Bpk6iUJyp2%2BJiFXmk4EmKN19PAU232Nor3xmRTYI%2FNXin8bB1ffYPZb0waK08&X-Amz-Signature=5a68ef1a370069446711b136137a761da9342d9c3d255a99faa41697988f0670&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV7WMPIG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIGeuXf1FTofoOjJM3GwDqSh4PKerE0yNDwF0qV6crgzHAiAfX6zhYo4DyxlFPLnAebnGixT1RVixfR7un8QYxWJHIir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMuAWN10QxHyZJB4plKtwDFtcwmf0l5rNFfjv5Ap8ouwqmO8CtTbqupX2aSMuyrbDDFfqH9%2B98iXQV2qfy%2B2qCvm%2BqF4KxACSbF4ue3sF%2Fz8avgFdCk1ZhgYsY6IgTpoKxbG4LiBOBs9xjAoFUm1%2Fh1kjq3tDB%2FX4WhauFDOR50sstRaX52EufafBcwdfoy3WeYR4htVyv2ARU8V8OaHY2q6GOxZF1JDdskqlMjv03Od732HqcDDypZAZdne4w1%2B4pWb46NUJMz5fcz3J8EufvH%2FQWOdiRjYTY%2FbVyWdZxyMSb73lApqdNPYKHZClgqkKzILDt3Y9PTaDMwj08s1JHr1Dy5OTyTYhqHOJY1BqMn%2BU6fSpLaUYvJTs9IDJRFBYb7ORg3hBMT9%2BuIxtkK5VsqDDhBKHJ2movzh4tbClHMdKBYfKQdPCCM%2FekH47YaG2VQWMeWgdVjZcnThjzKAEiKN5rcVuS6yTLp9%2FJQfe5LFutZx2uC5PETRnKVOfd0nFFaHerlu6xsRazTwxXX3ep1CDkGpRMRvWRFD7DjuhumKeOg9eagKJA84vwLveQPEmuYXivK9ImYkzN1sPTvi%2FJL%2F9RU%2F08tCkj1vldNeB8YhCLrFjIUUCOk%2BV9WVSPPXEdi00iLkomgaBlX4Yw5KuSxAY6pgHK9kVWRhQlaEV6v7pWn8491yj8toMUurqcKBhT%2BM7ORDNVrE8N4rF8WbJPb0TYNydc4be%2BCrb0jUvBJ7vcqHWb0AGnCTTQbLP6AmHdRQIyap74KOEBAIK7mn%2F3OKoirbFCoiYbUrjYf%2F%2BvNW4NL6ffIlbNkKTOypq%2Bpk6iUJyp2%2BJiFXmk4EmKN19PAU232Nor3xmRTYI%2FNXin8bB1ffYPZb0waK08&X-Amz-Signature=7cd85e462ffbb88678ca9de395cee00280fd85c857ff60bb612a48e690b48c42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BTLU7OA%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T090802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIHE59aP8I25q3p5toDymv9O0TnxeEXraZccfmzR5qBy6AiBHlKXSbK550ByyLCkGkHGycxUD2fk3smwnJh4E0wkKaSr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMXmI3R3YzYdYyGz4lKtwD8hKb4WOLWYgjP4VFSSMSOqGZ0ZyN0Cph%2FEXaIYW1hFgtGQf%2BPCPyY11%2BHFNIOlX%2BT831eFobvMPymLshuDIDUU6G1KqX35JuPW6ApS55rghn%2BdEPhPfrW3mSxNguvn8ItRpg%2FsQNOOhHKwYmjCHVjzrGP9L0ETfBJUz22X0avemtwGRHHluNOxVjmTMmo2ZIq61uqaHXugj35vFcwN%2B1KBcBDnRc4cjmYb4D0GIMQbpNejBBRCqNfK9biT2vIY5DM6blJwBtYd1r9U8WJDO0LKVf1uHW2vcq11siulSu7owkZi3kyimohXFMRqesi0jtj1tkdBUotnxWFDnxuB3vwulSMojwWAn0pSySmho%2F3vMcjx5FOW7t5d0oHHuqcSr6HnL44d1skEKkJsBixUZpCZ5ZvRwbrq32rAQvo7UrBi2dStfMddlB3%2FPEApjm6hVsgpFOYk6162gafXSDywNhlv2%2BhEjYzQoXmpT%2B9BaiWpLhBHRy5Vd94zoTRz5k1F%2BXcjEovObimu2YcD5F9AXEr0y1tpGJ0dkehYolSuH9MMyeEGXprIB9gQblucWsevL82NSICeD%2FcD0IedXppu%2BCQBB%2FPuCworZ58Uvw%2BZi5mwjMG%2F9JnIW2F8dKMuwwk%2Bq7vQY6pgHYK9UUonYggrykx%2FC5kwWP%2BvolLjAp7kU0N7Mew0Wcbe7pg3Xl%2FWxTSa9cue0nFvDj9WPDwfSmpjkGNDCShpkZlALXxfswu5Igp8%2FIj%2BIv8Z%2BUUA4EB%2FP%2BQA%2FTi9pHKterG2N%2BA92n2tUdFei2yn%2Fv%2BxiML8P1%2BXoGRJ08aJ3ClJbAB9lr5%2BxcdlmHsBqz8fbcsWtEbnuGrOc4s3HM8dTu6WFuQZqk&X-Amz-Signature=391334560711f7bc3f37bf30dc758d5ce3c2a01c65124ebabe7e55bb61d6d139&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BTLU7OA%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T090802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIHE59aP8I25q3p5toDymv9O0TnxeEXraZccfmzR5qBy6AiBHlKXSbK550ByyLCkGkHGycxUD2fk3smwnJh4E0wkKaSr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMXmI3R3YzYdYyGz4lKtwD8hKb4WOLWYgjP4VFSSMSOqGZ0ZyN0Cph%2FEXaIYW1hFgtGQf%2BPCPyY11%2BHFNIOlX%2BT831eFobvMPymLshuDIDUU6G1KqX35JuPW6ApS55rghn%2BdEPhPfrW3mSxNguvn8ItRpg%2FsQNOOhHKwYmjCHVjzrGP9L0ETfBJUz22X0avemtwGRHHluNOxVjmTMmo2ZIq61uqaHXugj35vFcwN%2B1KBcBDnRc4cjmYb4D0GIMQbpNejBBRCqNfK9biT2vIY5DM6blJwBtYd1r9U8WJDO0LKVf1uHW2vcq11siulSu7owkZi3kyimohXFMRqesi0jtj1tkdBUotnxWFDnxuB3vwulSMojwWAn0pSySmho%2F3vMcjx5FOW7t5d0oHHuqcSr6HnL44d1skEKkJsBixUZpCZ5ZvRwbrq32rAQvo7UrBi2dStfMddlB3%2FPEApjm6hVsgpFOYk6162gafXSDywNhlv2%2BhEjYzQoXmpT%2B9BaiWpLhBHRy5Vd94zoTRz5k1F%2BXcjEovObimu2YcD5F9AXEr0y1tpGJ0dkehYolSuH9MMyeEGXprIB9gQblucWsevL82NSICeD%2FcD0IedXppu%2BCQBB%2FPuCworZ58Uvw%2BZi5mwjMG%2F9JnIW2F8dKMuwwk%2Bq7vQY6pgHYK9UUonYggrykx%2FC5kwWP%2BvolLjAp7kU0N7Mew0Wcbe7pg3Xl%2FWxTSa9cue0nFvDj9WPDwfSmpjkGNDCShpkZlALXxfswu5Igp8%2FIj%2BIv8Z%2BUUA4EB%2FP%2BQA%2FTi9pHKterG2N%2BA92n2tUdFei2yn%2Fv%2BxiML8P1%2BXoGRJ08aJ3ClJbAB9lr5%2BxcdlmHsBqz8fbcsWtEbnuGrOc4s3HM8dTu6WFuQZqk&X-Amz-Signature=abfce48b573443aceb16d238f69e5127d597b9ffed16c0c6616e1641570bfaea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

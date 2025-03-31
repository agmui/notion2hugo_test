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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNHPJDQJ%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T090935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQD%2BoZVRtINVXIQy57u6eKVlImJtFd5Mmos2hlwZIPGLZgIgeQ3DrYgXo%2FcBAQyiRLZqsYXB8e0bXlXoWp%2BiAxN3rq8qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJNjA%2BlmbjlFFoKJTircA%2FPGWOjtVgH5sKrzqaq5n6yiGWmFG2PhrN9tVV5ul4Us6cUkRLj3KXuGuttj9XZhWQVeVlBmAWgaDVwmxSG2A9OzZHU7xbv9e8wFd%2B1HkWlKpzyQj6UQ7aJ8URwuHutpQB0aSZDKjsPF7hET%2FY00m3nD4TiW4atOqVv%2BsOEwRHJ0ZB58VNDmPxmkj1Zp55dKzqDHqpg%2FfjunXSN%2BCjd7xGut5qmj%2BQ5jb0%2FbQUQoSwteteF8JfDhsTO%2BJRgDVoWIP67SZwWUOXBwCxT28YuMk2NEjnYExZWMAsfVtSC41D3BuXm%2FoaHSdrEoUO%2BC63raBfgtqj2PNivuMxWza4F%2FZslXuZk5BS3rJ4efnioNT3oH4ZbN%2Fu0utPjomiAF%2F1Ji8Fr%2BX5DwAmM3kSar8N8LJBEiNLOKkpRy3amM1oOC1P1a1%2BFPrMeW%2BVCfgm%2F%2FYR9rm1bOFRnY3fJWgMEE3FszvdSom%2BlLrGPE5XGj66djp0AlP4KadCPZAH2wMO%2FC3%2Bt4J6Xfnw5yUilclpZaXoATRjc516Dt5lKBLyStQPJl2nT86W%2FawE73Q7n%2B45uwLpQ2%2FLgjU0KnOUVdykne0VTWeyzaL8IyngYzUV0nYmkYWFcxZ9gv%2FwfVyp1VYjTRMP3jqL8GOqUB3cicsyvNcmjy3CE2SVvyImxUdYmgn2DZDTNuh%2Bo1QLue5Z9hilHiksfaDYU87GVauQTz%2F5tnpYTqN6p%2BmEPHXw5lvjOcNVe%2FRPhRZ7rqYfg4Rt0oTbkgfZrGe7IwMdb3gvG0yMj83WtipkfnsTyP3BhR6L6W3rht6symJH9m%2FsznHsxDz6QMT1KyE%2Bq5FY5RQG0MOqKXZHXWQCipjGF52%2B5IGwob&X-Amz-Signature=9bda6a7da8f55521ec3433541651343c0ee17fd75166a8dc4ec9f63ca3f73e8e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNHPJDQJ%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T090935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQD%2BoZVRtINVXIQy57u6eKVlImJtFd5Mmos2hlwZIPGLZgIgeQ3DrYgXo%2FcBAQyiRLZqsYXB8e0bXlXoWp%2BiAxN3rq8qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJNjA%2BlmbjlFFoKJTircA%2FPGWOjtVgH5sKrzqaq5n6yiGWmFG2PhrN9tVV5ul4Us6cUkRLj3KXuGuttj9XZhWQVeVlBmAWgaDVwmxSG2A9OzZHU7xbv9e8wFd%2B1HkWlKpzyQj6UQ7aJ8URwuHutpQB0aSZDKjsPF7hET%2FY00m3nD4TiW4atOqVv%2BsOEwRHJ0ZB58VNDmPxmkj1Zp55dKzqDHqpg%2FfjunXSN%2BCjd7xGut5qmj%2BQ5jb0%2FbQUQoSwteteF8JfDhsTO%2BJRgDVoWIP67SZwWUOXBwCxT28YuMk2NEjnYExZWMAsfVtSC41D3BuXm%2FoaHSdrEoUO%2BC63raBfgtqj2PNivuMxWza4F%2FZslXuZk5BS3rJ4efnioNT3oH4ZbN%2Fu0utPjomiAF%2F1Ji8Fr%2BX5DwAmM3kSar8N8LJBEiNLOKkpRy3amM1oOC1P1a1%2BFPrMeW%2BVCfgm%2F%2FYR9rm1bOFRnY3fJWgMEE3FszvdSom%2BlLrGPE5XGj66djp0AlP4KadCPZAH2wMO%2FC3%2Bt4J6Xfnw5yUilclpZaXoATRjc516Dt5lKBLyStQPJl2nT86W%2FawE73Q7n%2B45uwLpQ2%2FLgjU0KnOUVdykne0VTWeyzaL8IyngYzUV0nYmkYWFcxZ9gv%2FwfVyp1VYjTRMP3jqL8GOqUB3cicsyvNcmjy3CE2SVvyImxUdYmgn2DZDTNuh%2Bo1QLue5Z9hilHiksfaDYU87GVauQTz%2F5tnpYTqN6p%2BmEPHXw5lvjOcNVe%2FRPhRZ7rqYfg4Rt0oTbkgfZrGe7IwMdb3gvG0yMj83WtipkfnsTyP3BhR6L6W3rht6symJH9m%2FsznHsxDz6QMT1KyE%2Bq5FY5RQG0MOqKXZHXWQCipjGF52%2B5IGwob&X-Amz-Signature=dc1b4d753dd7e147bb7c45e7cbeb5c056b1840f90d79f3b1f8dc31d5945e7a20&X-Amz-SignedHeaders=host&x-id=GetObject)

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

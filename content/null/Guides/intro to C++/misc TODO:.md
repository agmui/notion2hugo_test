---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "null/Guides/intro to C++/misc TODO:.md"
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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPG6R6A3%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T031145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIDXXx1iOskRZmzzv4LGYb140cZIxdgYPwcI6WIVPnnagAiBdcDiOQzqkslGAeJpmASkXhHZ0NKb3bXoIiRyPBhXw0Sr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMn7lud3zvUySm8DEFKtwDBSsh0jN1CMoJLx2tNnwOu7NLqAkH8gmcD9sO7nKVm08LHX%2BSPyVFp4msmd6vABoqedolzyKD4TYKQ9FjZlmGnI7uhNtwWaEITLhj6qL1oR%2F7mpdFtnu4X%2B0OLWUrGiXClm5fvwGTesCHZ1gb3QyHDU8%2F6FBy4%2FaeBAHcgYngno%2BVzPhNKrpf2WdzowmOfI1M04eu9BMctGdVoqynDK3xrnRJXDAE4x40ppudgNmIEr51YgriQ74eJiYBdZaD0JKSVHmwGWfup5EtDnlJ084jwuYeMDGOfgsqDlaYfMT1B17rR%2BBry6GNoRJTbki2B%2Fnv%2F6k3fbUJfjF9g8DHtvygUh8bRSAmylTdy4UOz9cw55OX%2FtJEn6fzs6RU3Z5LCA4L9ZluYZh6LXCHDb3%2FoqZHHC%2BugnmA3f8a%2BUlzErb6e%2BjYAHFnBeT%2FbaRKJxNSEctp3El4YVcAnmr0bNEBrSzwHVLYtxBOraIqDhLFCsKVByzwK37DJrZ0zn3SsfhDPQ%2BrvGd2U8TqfYEG4IP07qzK5A71ZgZcYw%2FvvhN0kEBxPjmp7shupE0%2FpQLNsH8RlF8BfOeIKrMMcj4aycHuqfbrXHXcqpAIn2XhcE8TGeakHB1Wo9ajIhLzw%2BzuWeAwvs%2BKvQY6pgETrh12pHJYTr8zgTcA1JujB1bMfJeKaQD3NthAMdQiamgm9pYafmJcPoxSSdK%2BOU2nLK6X%2BGDQlWRKqe8xrS6UXsbK0kGU9p7aEJDHRQMoXhmma6ioTEpNvQDX1SmfB%2Bs5gri4F%2Bs0pecD6gTOC2ElR8Ln6Mk6PS4akxtlbwNdxT1ftw3gFy0mkyFdRer9Edb3vmcJ1LEhY5f%2BFxkPWRHpW2v4b%2Bge&X-Amz-Signature=ded75b0304e7d80f7b92d16bf15956318141026692def2f8b47114a9471d8206&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPG6R6A3%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T031145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIDXXx1iOskRZmzzv4LGYb140cZIxdgYPwcI6WIVPnnagAiBdcDiOQzqkslGAeJpmASkXhHZ0NKb3bXoIiRyPBhXw0Sr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMn7lud3zvUySm8DEFKtwDBSsh0jN1CMoJLx2tNnwOu7NLqAkH8gmcD9sO7nKVm08LHX%2BSPyVFp4msmd6vABoqedolzyKD4TYKQ9FjZlmGnI7uhNtwWaEITLhj6qL1oR%2F7mpdFtnu4X%2B0OLWUrGiXClm5fvwGTesCHZ1gb3QyHDU8%2F6FBy4%2FaeBAHcgYngno%2BVzPhNKrpf2WdzowmOfI1M04eu9BMctGdVoqynDK3xrnRJXDAE4x40ppudgNmIEr51YgriQ74eJiYBdZaD0JKSVHmwGWfup5EtDnlJ084jwuYeMDGOfgsqDlaYfMT1B17rR%2BBry6GNoRJTbki2B%2Fnv%2F6k3fbUJfjF9g8DHtvygUh8bRSAmylTdy4UOz9cw55OX%2FtJEn6fzs6RU3Z5LCA4L9ZluYZh6LXCHDb3%2FoqZHHC%2BugnmA3f8a%2BUlzErb6e%2BjYAHFnBeT%2FbaRKJxNSEctp3El4YVcAnmr0bNEBrSzwHVLYtxBOraIqDhLFCsKVByzwK37DJrZ0zn3SsfhDPQ%2BrvGd2U8TqfYEG4IP07qzK5A71ZgZcYw%2FvvhN0kEBxPjmp7shupE0%2FpQLNsH8RlF8BfOeIKrMMcj4aycHuqfbrXHXcqpAIn2XhcE8TGeakHB1Wo9ajIhLzw%2BzuWeAwvs%2BKvQY6pgETrh12pHJYTr8zgTcA1JujB1bMfJeKaQD3NthAMdQiamgm9pYafmJcPoxSSdK%2BOU2nLK6X%2BGDQlWRKqe8xrS6UXsbK0kGU9p7aEJDHRQMoXhmma6ioTEpNvQDX1SmfB%2Bs5gri4F%2Bs0pecD6gTOC2ElR8Ln6Mk6PS4akxtlbwNdxT1ftw3gFy0mkyFdRer9Edb3vmcJ1LEhY5f%2BFxkPWRHpW2v4b%2Bge&X-Amz-Signature=0cbdec4500c97b5c5b86e6e64624e4f8314ced88389c18a5921cb6f38c528d46&X-Amz-SignedHeaders=host&x-id=GetObject)

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

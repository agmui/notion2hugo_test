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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD4HZXVQ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZRreRwxlmvUok9RV4U0DOSk6eq%2FBk6gJybOWyIu0CTAiBs6zI4BryHTe3DIUN4KIiG3hE9zraWYlGKl6EQtdN87yr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMey5FetYy3l8c%2B9EeKtwDOG3OxdjnaVqO7U9pz9XyVY2rtMTEtR%2BvAWk05LmU7PrSIi0xO9HCUEMenOlZTSd9t4McG9q%2BphdsABKpjCYU7GyhaVR7n16aZy3rsJtWYW2xvQ%2B8RdLVSOno%2Fqy1hcdY7nxaGh0%2FyExoxGJL34%2B0dZ8i1%2BKhDHOs2OQRube%2F96cDAR%2FkS%2FKeniWGiUCUARy1PF0pBTzF5vQhABRzf0lc0KoaWM%2FtAtilJGKeb2s2ylP8vJbDVPJ2jFGUI3sqCTXOl5WR25C868vWQ1lh6kCIfe1HGN%2BmhwEvzm%2FSZLMperfLQ7Y8B4VSrdlnlraJsSNbiL45cirCMGvuILh2wfUwl7e7jDvuzHAC%2F7PC%2Fthc89lTMlvWSVggOWT8DYelB2X8M7cHQLBQjgxwUENuPUgjVM9epWPbkie3XUYudFFdnYKJH%2F4YQkChi02t6f0lIgDFnzvGOplxIBy7Bz33EpIuUGn4%2FfpVqhkvLioMcMtEqcbhnltYYOM7aA3MhT71Y5n7CDUi2ppMKiyTKexzZFESRgvV6enU%2B4oaKeynbRcv2J3CuEkQ2X%2FTXAUO7Xin3sM76JLiJ8rZVsyZK6eQsNyLdGBlg1Nc%2B74j2x0Rdz0JYrcJMQBSK84YhXaAYecw8db6vwY6pgEicJ4WHxYafTl8LweM6nEy1ykLTK6rSVJIu%2B8Z0eILKEegRUJrPiF9U9H0iH500GXhYM4odFNAYKsha6YT2FTXKjSBi8z8ZmTlH3HwrJt7LLipNHWJUIdyEJ03gaLMQhLWh3h2TUwxufFXuh8wxPK%2B67FhO%2BjAJTWYCXpY1uNo1FpcbKE760%2BgHFBXL3ao3m763Be0BG7xZPGCZ%2BwcuK3%2Fl4uIC2FN&X-Amz-Signature=14db2a9223cd2d83430e3ae66dd2d354accea9e3b03e9b7377f910088698b595&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD4HZXVQ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZRreRwxlmvUok9RV4U0DOSk6eq%2FBk6gJybOWyIu0CTAiBs6zI4BryHTe3DIUN4KIiG3hE9zraWYlGKl6EQtdN87yr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMey5FetYy3l8c%2B9EeKtwDOG3OxdjnaVqO7U9pz9XyVY2rtMTEtR%2BvAWk05LmU7PrSIi0xO9HCUEMenOlZTSd9t4McG9q%2BphdsABKpjCYU7GyhaVR7n16aZy3rsJtWYW2xvQ%2B8RdLVSOno%2Fqy1hcdY7nxaGh0%2FyExoxGJL34%2B0dZ8i1%2BKhDHOs2OQRube%2F96cDAR%2FkS%2FKeniWGiUCUARy1PF0pBTzF5vQhABRzf0lc0KoaWM%2FtAtilJGKeb2s2ylP8vJbDVPJ2jFGUI3sqCTXOl5WR25C868vWQ1lh6kCIfe1HGN%2BmhwEvzm%2FSZLMperfLQ7Y8B4VSrdlnlraJsSNbiL45cirCMGvuILh2wfUwl7e7jDvuzHAC%2F7PC%2Fthc89lTMlvWSVggOWT8DYelB2X8M7cHQLBQjgxwUENuPUgjVM9epWPbkie3XUYudFFdnYKJH%2F4YQkChi02t6f0lIgDFnzvGOplxIBy7Bz33EpIuUGn4%2FfpVqhkvLioMcMtEqcbhnltYYOM7aA3MhT71Y5n7CDUi2ppMKiyTKexzZFESRgvV6enU%2B4oaKeynbRcv2J3CuEkQ2X%2FTXAUO7Xin3sM76JLiJ8rZVsyZK6eQsNyLdGBlg1Nc%2B74j2x0Rdz0JYrcJMQBSK84YhXaAYecw8db6vwY6pgEicJ4WHxYafTl8LweM6nEy1ykLTK6rSVJIu%2B8Z0eILKEegRUJrPiF9U9H0iH500GXhYM4odFNAYKsha6YT2FTXKjSBi8z8ZmTlH3HwrJt7LLipNHWJUIdyEJ03gaLMQhLWh3h2TUwxufFXuh8wxPK%2B67FhO%2BjAJTWYCXpY1uNo1FpcbKE760%2BgHFBXL3ao3m763Be0BG7xZPGCZ%2BwcuK3%2Fl4uIC2FN&X-Amz-Signature=b50e99a7c57eac8f7a291b8144b51632585202171d380175952fb313ec562122&X-Amz-SignedHeaders=host&x-id=GetObject)

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

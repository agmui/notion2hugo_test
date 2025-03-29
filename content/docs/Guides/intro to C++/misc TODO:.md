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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3O45MTK%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T180929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDXA3LkFOJ%2F6YVxUFhJZxiiTrIA2Xsl%2BsqBmKzFAsF5BAIhAKs8NVhZwZJm9I3%2BgPj3kx4OfbUlMBjXfzPG6Cv6WnaGKv8DCHgQABoMNjM3NDIzMTgzODA1IgzpiWlNHiTobb8By6cq3ANzfRsq54CRa4oAsvNat6U%2BJjagdtpUEbK7XOkqN9qjFcqfyDIJkSWYyEY61OMA3W8adcGo9WHmP7ZPwyZ0nqchqO4PNuD4pCubBNUzg1NlgPjQgJRGTrTrESLn%2Bsel%2BRieXKi5gCTUmfED476EPD6%2BlreLyriOCLUvqZ9uQpIWKFsDS5CcA12m%2FhiTqpQ5zNxUXlhCgRMVP%2BJNc5IlVsB4BJBkJELZ2yUNQcOv2LVKgPO98RbLgE06omdGZdftrzP7iU9IEni%2FP%2B5YFmy3V9xJzK25k2BnIf215ZoINjnZ%2ForDTwDhzhxdAyAKY%2BQDV16OABk1pzN3dnIbqSsc0N7qouQhWanXOLYAOEVY6HXYR3xIuJkGZLpjeqiWqNLxWA%2FQOOOnzJFP0Sfp44EMggRcJL2KkoKANVeKS%2FFmsSuctnXvP9ga6fHMp5ntRY3jRDZ36xUZp438BoRPd%2FexxayDLztOc7zD7n9z6kQkS78VXIOD6KvKL1jVDZfc2PGkQSEKDbTZvAyS6ZieH9TMjhUj2JOzvJFR46huVy753I6OaTIja7iw8IpLA2CRWSSLD8vQ0sv3B%2Bu8YFaBkjQ2vefQoaL%2Fk31xwwYXV9c61baEkAL5N4kqzM0bUrt4GDDhn6C%2FBjqkAbKCKliXr%2FFD35T2TDl9T3AiJGlt%2F%2BaxUEW5KC2YB1bBVrPW2iY2M1plzJWPEOE6JCKTk7bOvWVy9nmIQ%2BKibFVh1NjB9HOw9491Y6sraT4%2BDtxh7We963V2pNxvu1j4gjA9Y%2FWjy2EZhcVEdMSopcope6ubuFlusA8DENSMh4I4rLS7gg1Q4OmGTdOlEJiQdZ4cICBh58dH%2BBsbYS7oNvcUQAiS&X-Amz-Signature=e69f2b433f9d828bb2fc7275ecd738a8f930469b50c9cf8d5646a52d9150d949&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3O45MTK%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T180929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDXA3LkFOJ%2F6YVxUFhJZxiiTrIA2Xsl%2BsqBmKzFAsF5BAIhAKs8NVhZwZJm9I3%2BgPj3kx4OfbUlMBjXfzPG6Cv6WnaGKv8DCHgQABoMNjM3NDIzMTgzODA1IgzpiWlNHiTobb8By6cq3ANzfRsq54CRa4oAsvNat6U%2BJjagdtpUEbK7XOkqN9qjFcqfyDIJkSWYyEY61OMA3W8adcGo9WHmP7ZPwyZ0nqchqO4PNuD4pCubBNUzg1NlgPjQgJRGTrTrESLn%2Bsel%2BRieXKi5gCTUmfED476EPD6%2BlreLyriOCLUvqZ9uQpIWKFsDS5CcA12m%2FhiTqpQ5zNxUXlhCgRMVP%2BJNc5IlVsB4BJBkJELZ2yUNQcOv2LVKgPO98RbLgE06omdGZdftrzP7iU9IEni%2FP%2B5YFmy3V9xJzK25k2BnIf215ZoINjnZ%2ForDTwDhzhxdAyAKY%2BQDV16OABk1pzN3dnIbqSsc0N7qouQhWanXOLYAOEVY6HXYR3xIuJkGZLpjeqiWqNLxWA%2FQOOOnzJFP0Sfp44EMggRcJL2KkoKANVeKS%2FFmsSuctnXvP9ga6fHMp5ntRY3jRDZ36xUZp438BoRPd%2FexxayDLztOc7zD7n9z6kQkS78VXIOD6KvKL1jVDZfc2PGkQSEKDbTZvAyS6ZieH9TMjhUj2JOzvJFR46huVy753I6OaTIja7iw8IpLA2CRWSSLD8vQ0sv3B%2Bu8YFaBkjQ2vefQoaL%2Fk31xwwYXV9c61baEkAL5N4kqzM0bUrt4GDDhn6C%2FBjqkAbKCKliXr%2FFD35T2TDl9T3AiJGlt%2F%2BaxUEW5KC2YB1bBVrPW2iY2M1plzJWPEOE6JCKTk7bOvWVy9nmIQ%2BKibFVh1NjB9HOw9491Y6sraT4%2BDtxh7We963V2pNxvu1j4gjA9Y%2FWjy2EZhcVEdMSopcope6ubuFlusA8DENSMh4I4rLS7gg1Q4OmGTdOlEJiQdZ4cICBh58dH%2BBsbYS7oNvcUQAiS&X-Amz-Signature=41e1a7cc7d5c4da083550b27e0f718a505d5f0c16dcf569c5311054774587b71&X-Amz-SignedHeaders=host&x-id=GetObject)

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

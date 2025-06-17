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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLPVB4IV%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFifNxhePaQp82hGKUNzEfWUTL1RjR3UgGtOqQJv8OSfAiADi4BePCZUu9FOxkSnBLDxVQ%2FTSW4G9TJ7rGk0kZz%2FSCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMSu29iam1fcJxW0UZKtwD7FW7eNvWFR4J6Z0dgfHUtXbH8giCbHmpkjvCEGjgY2IzvZEZ8FegihZC9oNImGz86E3dKNgR%2BbziMnvAO7iWwY5AYhkvjksi7h7yYGHV2z9E1GDaf1NFG8TcNXVZJRifpfirVemsOMHU1fwpNUsPlLrDR5w66r%2Fto9GzFcK0y08LiKxP9bDQ74DCBeNBu09hCFrHcXvMP2VWfdF68uEldunf1elpf7Bkin5ieCc3IafB17It7vRsHycD2qhpkL6ZCgYoAOo8WuEEGDbGzWrICgsJlk%2B97uL0Z%2BYB4%2F5hb6LP38vjI%2BvANnr7SdI%2FHuuxii2%2B6sb7HlokfabNb2G7B6TvcFCnBawn9pWvl72NiadlsKB5%2FB3cwOeIqOQUQU1a%2B8kSzg%2BgFB9k%2FnEmqq28c78x5O8LR06KUKki9M5nAcsRIlDIHj9ycue1LwhgJeSY07H74UgCJ6J2N9ObJwLYalo4p9QniCw3cRYUp%2B95Z4%2Bgvk60yT08OKGPMW%2Bp36r8uKr4CTwucf1Zf0vsKa6PgKb%2BFGVvzhz9cOoOzPNwHzpekPxEoxZkv6bdFHFzWmgt69Bin1PE0U0e0%2FNaW2xr2a4qzQfmF0eHvNwG%2BF75dERQnWQqCNwHSWFX1FAw1d%2FGwgY6pgFS%2Bwvncm5R5iJKaRFa%2FIqF1uK8RkaZJI0EFTc2okwqEgX9O7JJ84yJ54SXBx9ftECnwfv0n4DVfAy7YPzau%2BWo7LCAk3h6FYErkZrOvyoXbSOY2ahLxwZ3U%2BmB6aJrvGVhzIw5ceGszTb%2FvRwLQJ9CIFKFWMIspbYppdrqqrw%2FkqNKuzSjcCI0wfkqRwt1DVp8ZWyPQwIqDxv5KAlVUt3YU5xVy956&X-Amz-Signature=b5259218962f0fcf3f3b98b87c2965ad6b8be0df73c66eac2cd0c45a66ce461d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLPVB4IV%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFifNxhePaQp82hGKUNzEfWUTL1RjR3UgGtOqQJv8OSfAiADi4BePCZUu9FOxkSnBLDxVQ%2FTSW4G9TJ7rGk0kZz%2FSCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMSu29iam1fcJxW0UZKtwD7FW7eNvWFR4J6Z0dgfHUtXbH8giCbHmpkjvCEGjgY2IzvZEZ8FegihZC9oNImGz86E3dKNgR%2BbziMnvAO7iWwY5AYhkvjksi7h7yYGHV2z9E1GDaf1NFG8TcNXVZJRifpfirVemsOMHU1fwpNUsPlLrDR5w66r%2Fto9GzFcK0y08LiKxP9bDQ74DCBeNBu09hCFrHcXvMP2VWfdF68uEldunf1elpf7Bkin5ieCc3IafB17It7vRsHycD2qhpkL6ZCgYoAOo8WuEEGDbGzWrICgsJlk%2B97uL0Z%2BYB4%2F5hb6LP38vjI%2BvANnr7SdI%2FHuuxii2%2B6sb7HlokfabNb2G7B6TvcFCnBawn9pWvl72NiadlsKB5%2FB3cwOeIqOQUQU1a%2B8kSzg%2BgFB9k%2FnEmqq28c78x5O8LR06KUKki9M5nAcsRIlDIHj9ycue1LwhgJeSY07H74UgCJ6J2N9ObJwLYalo4p9QniCw3cRYUp%2B95Z4%2Bgvk60yT08OKGPMW%2Bp36r8uKr4CTwucf1Zf0vsKa6PgKb%2BFGVvzhz9cOoOzPNwHzpekPxEoxZkv6bdFHFzWmgt69Bin1PE0U0e0%2FNaW2xr2a4qzQfmF0eHvNwG%2BF75dERQnWQqCNwHSWFX1FAw1d%2FGwgY6pgFS%2Bwvncm5R5iJKaRFa%2FIqF1uK8RkaZJI0EFTc2okwqEgX9O7JJ84yJ54SXBx9ftECnwfv0n4DVfAy7YPzau%2BWo7LCAk3h6FYErkZrOvyoXbSOY2ahLxwZ3U%2BmB6aJrvGVhzIw5ceGszTb%2FvRwLQJ9CIFKFWMIspbYppdrqqrw%2FkqNKuzSjcCI0wfkqRwt1DVp8ZWyPQwIqDxv5KAlVUt3YU5xVy956&X-Amz-Signature=3ecd8ab523d012b9e7aeeb984450d1eda4679c078b1fe73ec7e9c16aa17ee9f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

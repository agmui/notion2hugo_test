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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7ZHOO4C%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuh0Lvg%2B4pyU8kspPLTZxjHDkSfJtQEbhZ9VkhASYkagIgXAxTtVlGCkSbs5Cpmggf8WgDeitIm0RY%2BqY8De%2BnuSYq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDBTBJOBWoTP79WwhPyrcA8Fb4l%2BKha32Wwz7XXCKM8LJHSh%2FKmegSROdN80mZrb6wtof74QOI0Vz7pXRycEiILJlc3%2FEBNU%2F9ExoOWJWEXPu8N7k%2BLD%2B2C8hFhtUk4i0SodroSYVbuGZRwBmTy675ukkGlH1RbrIrY3LZltBWuciffqPappSQ%2BUNEZGu3bHnpdHPmCTmickUeo1PXJfsk0IVOswCE1G7zwB4lUzGoHaWCp9wsAEnMqxfD1Dj0LrdNdv99R0TvVZReVKeRqPk5H2ZqTHw2ubOCQ9Vwixg4oTgFlYvnpXDyscIsPLbVFr5g%2BYEUP0x6jWO%2FHpyQOZVNHzF9Y2U08yipXubzrWfuzczz7QBQKUIeDhNYYgqEhees7JknnN5kHr2rzmsvIZqOzhDYG2VHt1PgnTgSniITBKNRZTaYAmBf0aaJc5qgJW1i2MzNuKJ5ybhEG9CUdVwTbJesjcVv%2BS86VjdqKBGVMU31%2FBS3KlxcqyiDQ1ihXr1yNN69CnPjSrJbGeBXvGN45ENF8%2F0zttW73RIKGK33s8%2Fe0MnxZ%2FRzNeBsSd8u%2Ff1AaTF4xP%2FIAgb2wQxRU5sdZTc61PpB3YqdcXVzod%2B0cB0zN5ceTpGTbZun2jb5Xmj9zBxDIqtph%2FGjV%2BvMIyWob4GOqUBhjPHrjfS89yhb1BgphbGSCEpxUdUzzN8412aFU7FTFbcAdLcGIJy2oo7Glbkz65CY5NIW5HJr9S3AK%2BZUCLvR3iU3nXAe0uUf%2FYsoQ27pHbwJX7Z%2BzHfALmDwHWrwAYu6WvI3KtokPfz%2BkyRA89bLdH6axMZ7F7kcX0FT4HxhNhxTfYpLuGrvBm8j8AKDy5xBrRewOWvPXKjrBKU0V%2FsYYePLf%2F%2B&X-Amz-Signature=c63624f140fde7b0be408514a54179e88df4b8e015b0f3dd5b3f30237619f2ea&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7ZHOO4C%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuh0Lvg%2B4pyU8kspPLTZxjHDkSfJtQEbhZ9VkhASYkagIgXAxTtVlGCkSbs5Cpmggf8WgDeitIm0RY%2BqY8De%2BnuSYq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDBTBJOBWoTP79WwhPyrcA8Fb4l%2BKha32Wwz7XXCKM8LJHSh%2FKmegSROdN80mZrb6wtof74QOI0Vz7pXRycEiILJlc3%2FEBNU%2F9ExoOWJWEXPu8N7k%2BLD%2B2C8hFhtUk4i0SodroSYVbuGZRwBmTy675ukkGlH1RbrIrY3LZltBWuciffqPappSQ%2BUNEZGu3bHnpdHPmCTmickUeo1PXJfsk0IVOswCE1G7zwB4lUzGoHaWCp9wsAEnMqxfD1Dj0LrdNdv99R0TvVZReVKeRqPk5H2ZqTHw2ubOCQ9Vwixg4oTgFlYvnpXDyscIsPLbVFr5g%2BYEUP0x6jWO%2FHpyQOZVNHzF9Y2U08yipXubzrWfuzczz7QBQKUIeDhNYYgqEhees7JknnN5kHr2rzmsvIZqOzhDYG2VHt1PgnTgSniITBKNRZTaYAmBf0aaJc5qgJW1i2MzNuKJ5ybhEG9CUdVwTbJesjcVv%2BS86VjdqKBGVMU31%2FBS3KlxcqyiDQ1ihXr1yNN69CnPjSrJbGeBXvGN45ENF8%2F0zttW73RIKGK33s8%2Fe0MnxZ%2FRzNeBsSd8u%2Ff1AaTF4xP%2FIAgb2wQxRU5sdZTc61PpB3YqdcXVzod%2B0cB0zN5ceTpGTbZun2jb5Xmj9zBxDIqtph%2FGjV%2BvMIyWob4GOqUBhjPHrjfS89yhb1BgphbGSCEpxUdUzzN8412aFU7FTFbcAdLcGIJy2oo7Glbkz65CY5NIW5HJr9S3AK%2BZUCLvR3iU3nXAe0uUf%2FYsoQ27pHbwJX7Z%2BzHfALmDwHWrwAYu6WvI3KtokPfz%2BkyRA89bLdH6axMZ7F7kcX0FT4HxhNhxTfYpLuGrvBm8j8AKDy5xBrRewOWvPXKjrBKU0V%2FsYYePLf%2F%2B&X-Amz-Signature=71162a85f1556dd03971702a7fce9bf29c3a0553bb22d5df6c9442bb3a8b31ab&X-Amz-SignedHeaders=host&x-id=GetObject)

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

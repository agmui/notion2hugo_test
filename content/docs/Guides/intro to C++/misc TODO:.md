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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRJZSL6H%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T110542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6ohZQKs6D0UCz8oMr1PEF7vn9tFwCbSc1EvOCsuPfPAiAA3UiqdA5VTmpvFxsjsq17OMm3m80tnbDCvJRcmqM2LSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpmljXm6gyCT0Otm3KtwD3%2B7eALuSFS6yHjpp03jud2%2BP30%2FsKt7PE8Dm0x3Eb337acCa7ITFSwG9pL7%2BUmsLO7zou%2F29bM4EXne5vBpdCMZP9F1lzAHYnlFGkslkG70aZYxsnDIwTqUxIpbWUALlDgdji6n4qbTdLRZpfgGU3p4HdroS%2FkJuRCZwU1vBCtrs71zeBWKa7kaHshxyXjlcJkjvN2jrD6GIJj7Hs1wdZDBYV%2BVQlJSa4vxbXxyC%2BmoL%2FfzOsuTvLltqjpOM3FbZRKvxksW7%2BFA6xp8gfH59PVFZddT3KH3zglJQvlzNIFQfRGIsn1UrCw1Gt5FO7B86i7%2BgwssUnsWwCjY7Bie2ZszRKG7UEU3ovXHL6lOBGlREKCWJA3mIf7%2BfjO59kV9TBmK4fGw7jDsWz4cGna8s6wmK%2BUNu2hjs5hAc3RGqmhHN7FVEeJz6ZkKbQ5a7Ih5WgGpcldoDuAO0XwszMA3ExWiYaE9ZTgIfWsWzWaeyzSVAt7PHtrH%2FAgBI1QX2vFtgddf88Anl1IQqK3V94OEDejRuP8uQn2u1wleVK%2F08lsk%2F66znXCpVYaMEVlliWMXis9Pbf3IaibJeUm5IymUj88LQqkKKImag4ViVnw0EjlPTUj9E76PNhJULdrYw1bqEwwY6pgGPWbWTmG8rFk68CTFA75BWirFpA9ihbAdL7VAuerbJOYF%2BmspSezAxddoeBBJli7HmGInGb8Be77KBOVukKgpgJRWn08nIHd%2B1tMAM56mpAdVJwWQ4O4NSE1YXGvNR83w4DGFrqXtSRMpeS4DE65pOM4gyf79p6rVlqr0Yr1NVB6JmZeMyIVaCsOnWiGkNNAN0MIysuoClnuK2U2gSgFwXp9OwuiyR&X-Amz-Signature=0e31479eebbf98306b9ff0638bf4204e6a0465fe3d1250e5ac3f22a0ff65652d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRJZSL6H%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T110542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6ohZQKs6D0UCz8oMr1PEF7vn9tFwCbSc1EvOCsuPfPAiAA3UiqdA5VTmpvFxsjsq17OMm3m80tnbDCvJRcmqM2LSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpmljXm6gyCT0Otm3KtwD3%2B7eALuSFS6yHjpp03jud2%2BP30%2FsKt7PE8Dm0x3Eb337acCa7ITFSwG9pL7%2BUmsLO7zou%2F29bM4EXne5vBpdCMZP9F1lzAHYnlFGkslkG70aZYxsnDIwTqUxIpbWUALlDgdji6n4qbTdLRZpfgGU3p4HdroS%2FkJuRCZwU1vBCtrs71zeBWKa7kaHshxyXjlcJkjvN2jrD6GIJj7Hs1wdZDBYV%2BVQlJSa4vxbXxyC%2BmoL%2FfzOsuTvLltqjpOM3FbZRKvxksW7%2BFA6xp8gfH59PVFZddT3KH3zglJQvlzNIFQfRGIsn1UrCw1Gt5FO7B86i7%2BgwssUnsWwCjY7Bie2ZszRKG7UEU3ovXHL6lOBGlREKCWJA3mIf7%2BfjO59kV9TBmK4fGw7jDsWz4cGna8s6wmK%2BUNu2hjs5hAc3RGqmhHN7FVEeJz6ZkKbQ5a7Ih5WgGpcldoDuAO0XwszMA3ExWiYaE9ZTgIfWsWzWaeyzSVAt7PHtrH%2FAgBI1QX2vFtgddf88Anl1IQqK3V94OEDejRuP8uQn2u1wleVK%2F08lsk%2F66znXCpVYaMEVlliWMXis9Pbf3IaibJeUm5IymUj88LQqkKKImag4ViVnw0EjlPTUj9E76PNhJULdrYw1bqEwwY6pgGPWbWTmG8rFk68CTFA75BWirFpA9ihbAdL7VAuerbJOYF%2BmspSezAxddoeBBJli7HmGInGb8Be77KBOVukKgpgJRWn08nIHd%2B1tMAM56mpAdVJwWQ4O4NSE1YXGvNR83w4DGFrqXtSRMpeS4DE65pOM4gyf79p6rVlqr0Yr1NVB6JmZeMyIVaCsOnWiGkNNAN0MIysuoClnuK2U2gSgFwXp9OwuiyR&X-Amz-Signature=498910a0d348fcb78b844bfb5822eb395dcd33cd333c9b05cfdbb2df804911b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

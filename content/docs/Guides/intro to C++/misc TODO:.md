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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLKP3FQ7%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T040941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkYQCsTLGL7oVPteQ1O3lFvm7JX6qosJHryNOOKdMErAiBH6V1GsITvPknQm%2FJxFBlLHKugV%2FgD879MQyNh%2FnPlPyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMabRy9HZz3ShyhSLiKtwD%2FZHgWDApCnWo9h8weO8Xh82oRocrJETxTgiMX6cJDRevJ%2BusATHEnEPIH2CrrmMRrVEaPmexoYtsOjkQUX56oktpsbDF95SxR81zL0%2FgUqwfj4O7n9JpxpYKcI%2FLhY6%2Bk1lNRarKJKz1gcom6YuIgjgfi1AGSv8dLGxOyh%2BKnP4mCL8OsAfEoum%2B24UoFsDAYmMBBQIsQRB0hvO0A6CYo7fgK3riqfu0ZOAqwI7m6RDrXsy0HUnugmOhPRQZ5yZIwiu%2B36BKKJnG6fNC8caONDryWpGN2NC2TkVO5GB2X%2FNRpVmEoDH5EtUWvrSVwjF12gCiWtmevdIy6cAR0pSvzFTiG5Odmsr81nWvq9jrH%2FSB3t7AhL0Nwqf8Ua%2FJqvvY4XgNVhWmJwco%2B0S0K7acmu%2BvaAXuK023f6wDjHLrU9ofuTg8p5aG6qnEoYn5DZmra9o8kGLmeeYHQU9w0V87OW5seZCcBPtKw0ZwzExvXPnejeg7UcyAYeeOUUUNZJQ1O9BGjGcl%2BMmwD9pAdKvdjiVQNXTGinw8FK77imBV1rUxoub%2BnL8TyHSZG%2FCFXTTpTvtqyeK9PPmEKstKyeFhf5x510RqN%2BnEcctHcLilOzKD%2FitDDEoSD1nMPAUw4eq6vQY6pgGvBnalyA%2BO7rC9kBxnYnoP%2FO0YiuyFdPtBHJRx1caVFIIMvEeLkAwyvnA7%2BBuDDBowY9Uc2%2FlRj4%2FxzR9zKefMCJPhQ1i6XfmyigWapv7K35jvxyxxAenfsl6Rdl4rhZ3k7IazxgzUP8LUg1aadRDpI8Y%2BebNq4ZPima3UYC3wcIHJpxoGvmLiwAkqU0y3%2FG6hVch%2FNjSHN5WPMRGeUNBFaxAEd6qy&X-Amz-Signature=5d26c5e17197485480c40f06af1d5f080f1f2e6bf01660e0b44313bca7f894e7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLKP3FQ7%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T040941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkYQCsTLGL7oVPteQ1O3lFvm7JX6qosJHryNOOKdMErAiBH6V1GsITvPknQm%2FJxFBlLHKugV%2FgD879MQyNh%2FnPlPyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMabRy9HZz3ShyhSLiKtwD%2FZHgWDApCnWo9h8weO8Xh82oRocrJETxTgiMX6cJDRevJ%2BusATHEnEPIH2CrrmMRrVEaPmexoYtsOjkQUX56oktpsbDF95SxR81zL0%2FgUqwfj4O7n9JpxpYKcI%2FLhY6%2Bk1lNRarKJKz1gcom6YuIgjgfi1AGSv8dLGxOyh%2BKnP4mCL8OsAfEoum%2B24UoFsDAYmMBBQIsQRB0hvO0A6CYo7fgK3riqfu0ZOAqwI7m6RDrXsy0HUnugmOhPRQZ5yZIwiu%2B36BKKJnG6fNC8caONDryWpGN2NC2TkVO5GB2X%2FNRpVmEoDH5EtUWvrSVwjF12gCiWtmevdIy6cAR0pSvzFTiG5Odmsr81nWvq9jrH%2FSB3t7AhL0Nwqf8Ua%2FJqvvY4XgNVhWmJwco%2B0S0K7acmu%2BvaAXuK023f6wDjHLrU9ofuTg8p5aG6qnEoYn5DZmra9o8kGLmeeYHQU9w0V87OW5seZCcBPtKw0ZwzExvXPnejeg7UcyAYeeOUUUNZJQ1O9BGjGcl%2BMmwD9pAdKvdjiVQNXTGinw8FK77imBV1rUxoub%2BnL8TyHSZG%2FCFXTTpTvtqyeK9PPmEKstKyeFhf5x510RqN%2BnEcctHcLilOzKD%2FitDDEoSD1nMPAUw4eq6vQY6pgGvBnalyA%2BO7rC9kBxnYnoP%2FO0YiuyFdPtBHJRx1caVFIIMvEeLkAwyvnA7%2BBuDDBowY9Uc2%2FlRj4%2FxzR9zKefMCJPhQ1i6XfmyigWapv7K35jvxyxxAenfsl6Rdl4rhZ3k7IazxgzUP8LUg1aadRDpI8Y%2BebNq4ZPima3UYC3wcIHJpxoGvmLiwAkqU0y3%2FG6hVch%2FNjSHN5WPMRGeUNBFaxAEd6qy&X-Amz-Signature=aa1003bc54d2cb12adcf29d5fc18cecc7d29703b57801bbde5c4f049478c6e37&X-Amz-SignedHeaders=host&x-id=GetObject)

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

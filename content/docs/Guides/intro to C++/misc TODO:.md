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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGRGAS6Y%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T003233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCICDpajewdRS7Jm20qR45f3p3al0bfjbosj%2BflOvGaxQjAiBq0yvTNaBrMwVtYHWFsHfV6MdxnfuPUhJFGIIuBo1TMiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtbVYyj6xm2%2B8Bq3hKtwDT%2BnNNyxls4BYGpDKCAxO23iF3R437opTplQ24fz%2BHlOjr8Hscye3inMWY0N7BF8EYMZcm0SFrqCvzlePTkmPzk%2FHXXMQ7Hrms%2FSERAQd3TxQO0MksxlpvHz3xuq8qrgGkvDxLk7XhV0OViduN%2BIbGPwG%2BsUziCRC71VraIo8hjNOWj5BlTuuaHpkfZfy06T5rdPOgoQFYfcPROr7w8aNCb3yPKRUqaYnKIJf5oj13pCvH63q0NY4VZXFp7nlCHhR4yXcEOlkkpJFPPeDHdo%2B9npFUphKQpA0%2FvBSXFKMfEguefPilXhBWlcMuejA8hd93jd56HsEUZHSDFQXqsC8uhswD97YRuAys2%2FEN6IstVully%2B%2FEUEfF8tgO3cl9lkvEMlz2zO2bFQry7gQvgQEsuZPKKtD68ilI6LFTVEKXjmDniCudGsYv9nKZH0ne5oP%2BbOEFU6nT7b0ZvZSsGP%2BdJPSJ1GdXVYT8nmnJ8lbgfGseelOM%2Fx3Sw8pQAPfduWDiqXIOwA6KRrP8ntKF0mtfGLjJDgMboRNwLq9tr3X5XB4S%2FT36N6o0I5xEN8SbtexqxgqbZMdGeAqphrwk460chKg1t6e5xkSc9L%2BQKahp6y%2BbFx7Ai%2FKO7TpSC0wld24vgY6pgGVU7gYjzgqAvoIv8xSiqOU1jZO7kKshWxTDWoV2v%2FC60wnw6ylLmDkjUn7z2%2FXOKlEt5enSIF%2Fm8%2FOPNg8tq%2Fa9Jy8nqCKqWAPURgcfQXz7Z0fWGEJKlYEn9PNpc1bdn8huzyzz5IdzgS9nVZZJYoGA3zBnt%2BaDY%2FSXMMvLsOCkPeeo0j9Eb9LddiYPIci9RICUd4FLmQqaiE5Qb4AbOf%2Bbb6mWhVl&X-Amz-Signature=8ce5c4300067d014bc44509dbd8b371d4ac4510c80c496d38d28c7704a8af512&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGRGAS6Y%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T003233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCICDpajewdRS7Jm20qR45f3p3al0bfjbosj%2BflOvGaxQjAiBq0yvTNaBrMwVtYHWFsHfV6MdxnfuPUhJFGIIuBo1TMiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtbVYyj6xm2%2B8Bq3hKtwDT%2BnNNyxls4BYGpDKCAxO23iF3R437opTplQ24fz%2BHlOjr8Hscye3inMWY0N7BF8EYMZcm0SFrqCvzlePTkmPzk%2FHXXMQ7Hrms%2FSERAQd3TxQO0MksxlpvHz3xuq8qrgGkvDxLk7XhV0OViduN%2BIbGPwG%2BsUziCRC71VraIo8hjNOWj5BlTuuaHpkfZfy06T5rdPOgoQFYfcPROr7w8aNCb3yPKRUqaYnKIJf5oj13pCvH63q0NY4VZXFp7nlCHhR4yXcEOlkkpJFPPeDHdo%2B9npFUphKQpA0%2FvBSXFKMfEguefPilXhBWlcMuejA8hd93jd56HsEUZHSDFQXqsC8uhswD97YRuAys2%2FEN6IstVully%2B%2FEUEfF8tgO3cl9lkvEMlz2zO2bFQry7gQvgQEsuZPKKtD68ilI6LFTVEKXjmDniCudGsYv9nKZH0ne5oP%2BbOEFU6nT7b0ZvZSsGP%2BdJPSJ1GdXVYT8nmnJ8lbgfGseelOM%2Fx3Sw8pQAPfduWDiqXIOwA6KRrP8ntKF0mtfGLjJDgMboRNwLq9tr3X5XB4S%2FT36N6o0I5xEN8SbtexqxgqbZMdGeAqphrwk460chKg1t6e5xkSc9L%2BQKahp6y%2BbFx7Ai%2FKO7TpSC0wld24vgY6pgGVU7gYjzgqAvoIv8xSiqOU1jZO7kKshWxTDWoV2v%2FC60wnw6ylLmDkjUn7z2%2FXOKlEt5enSIF%2Fm8%2FOPNg8tq%2Fa9Jy8nqCKqWAPURgcfQXz7Z0fWGEJKlYEn9PNpc1bdn8huzyzz5IdzgS9nVZZJYoGA3zBnt%2BaDY%2FSXMMvLsOCkPeeo0j9Eb9LddiYPIci9RICUd4FLmQqaiE5Qb4AbOf%2Bbb6mWhVl&X-Amz-Signature=f6d8cd1ec7489efb9f62364d92aafea6b8989eb6a1eaeb6fdce765335644927a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

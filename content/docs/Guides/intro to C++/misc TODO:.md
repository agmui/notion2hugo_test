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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FCBJJ7V%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T190905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIBRv9mXNi2GPFdEkC7Am7JNkhEtiDZ1gxDaxntdwSEw8AiAvn4qZOgNw8x7Irq0vLP0tRLWRNMOyMXyRz2G%2B9Iob%2FSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMdyIYzX%2F6emOUWHcfKtwDy17kuyvKzM0JeTRFAS1WNvrlit3BkvlLG8%2FsWMlGzgSAZjLb43v7oVYjkIJCgBntWkQzFsDYeXUxEwuddA58Idii78P%2Bl9tNA6D94JX5V96TufjRtQqEWE%2B08mM3JLjd4cTaFvKoP2mZ6Z%2FHxHpSE2T43VEouUoBeNCW028z9908CLfjDmANCioiyv%2BaithzzL%2FKH7mhBjaGlnoWEbmfCshJnxRfZJMf6dFFQlOlwBkT6gVeU2a%2FZ7kffAmGu122teRuDdc5mmDxytLlV0mcmBJ8ZU%2BQIm5xaoxhGoME1eqJtESt0g8YPmPKuJPr5gmfKMMz4XqyeQ4Ghr11r%2FtCjaKCCLDwUvvo3qMpVoo2CfvEAgpnm%2F1mvr8wOwKT4YGT8%2BGkvQ7xPilrNZ5NUxC3v6tt1Hrh779cXLEJqH2oQ2Tj8dg%2FEgB6Su2ib0%2FLajbFH5V3aqPJKzX1D4GdB6cNAfhLUYiHT4Squ9UR4ky247qV0J%2FJDKqwl7J6IRU2b4NocDxpdYhCo3gUeB%2FAEFb2TJlDH8TFYC9y1T4MArKC11648IDH4vRwPEQ1nn3xSN0qa7bEMO6YLbMU0CuqUV7%2BgHRvYC9U0nG5emLpNDtLZ7DN0KENprb5zClp9%2B0w8qTVwwY6pgG9iX6n6EjgtLS%2BifSXsvPR9r4DYAnqG760XQWM3NcUQd6ZIHjEvU3oJ6i7dyiy0ZD5gENhvjJjfvrx5THFqDh36NOqRb6Rstp8296GaXw3e2WEkV2uPmQo%2BiIqxZFbvtTLB2t%2BJ67Y9MVs%2BAU8XcDzwUQNVxpV21PORMRXus%2F1CY5KUSbfc41R12UE8lPIWH5WTJgqlJOYv2gWeBoLNND7Lag%2F9In6&X-Amz-Signature=aba16f05e8bcc33f0925a508d19f49ec4d55a185949227e2fc3aea35622c370c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FCBJJ7V%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T190905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIBRv9mXNi2GPFdEkC7Am7JNkhEtiDZ1gxDaxntdwSEw8AiAvn4qZOgNw8x7Irq0vLP0tRLWRNMOyMXyRz2G%2B9Iob%2FSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMdyIYzX%2F6emOUWHcfKtwDy17kuyvKzM0JeTRFAS1WNvrlit3BkvlLG8%2FsWMlGzgSAZjLb43v7oVYjkIJCgBntWkQzFsDYeXUxEwuddA58Idii78P%2Bl9tNA6D94JX5V96TufjRtQqEWE%2B08mM3JLjd4cTaFvKoP2mZ6Z%2FHxHpSE2T43VEouUoBeNCW028z9908CLfjDmANCioiyv%2BaithzzL%2FKH7mhBjaGlnoWEbmfCshJnxRfZJMf6dFFQlOlwBkT6gVeU2a%2FZ7kffAmGu122teRuDdc5mmDxytLlV0mcmBJ8ZU%2BQIm5xaoxhGoME1eqJtESt0g8YPmPKuJPr5gmfKMMz4XqyeQ4Ghr11r%2FtCjaKCCLDwUvvo3qMpVoo2CfvEAgpnm%2F1mvr8wOwKT4YGT8%2BGkvQ7xPilrNZ5NUxC3v6tt1Hrh779cXLEJqH2oQ2Tj8dg%2FEgB6Su2ib0%2FLajbFH5V3aqPJKzX1D4GdB6cNAfhLUYiHT4Squ9UR4ky247qV0J%2FJDKqwl7J6IRU2b4NocDxpdYhCo3gUeB%2FAEFb2TJlDH8TFYC9y1T4MArKC11648IDH4vRwPEQ1nn3xSN0qa7bEMO6YLbMU0CuqUV7%2BgHRvYC9U0nG5emLpNDtLZ7DN0KENprb5zClp9%2B0w8qTVwwY6pgG9iX6n6EjgtLS%2BifSXsvPR9r4DYAnqG760XQWM3NcUQd6ZIHjEvU3oJ6i7dyiy0ZD5gENhvjJjfvrx5THFqDh36NOqRb6Rstp8296GaXw3e2WEkV2uPmQo%2BiIqxZFbvtTLB2t%2BJ67Y9MVs%2BAU8XcDzwUQNVxpV21PORMRXus%2F1CY5KUSbfc41R12UE8lPIWH5WTJgqlJOYv2gWeBoLNND7Lag%2F9In6&X-Amz-Signature=4776a96fb790a7976500c8c45b6f4921cf43fac95f7d227c9738c012f2dc14ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

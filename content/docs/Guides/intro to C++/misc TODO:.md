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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CMB226J%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T024029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCDeNb%2BbG6u7GfDz%2FEKWZqQtl6F7NnZRXA0Ic5g2qVhpQIhAIqSVHF31%2Bo5%2B%2FA3wlr47VKqwFkQ%2B9JbFOJlMJB7OKOrKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGOzrgNyZhshz4wjQq3AO1999YhUrxv0gsHG%2FGbC6vuIGecfj%2BzwMwZtvN6%2BYOdJ%2BheZr8c9%2BFrsNklxG5cZcOTo0ne7ZZGc6R9jnOHlya%2FMtusctlXhjoPD5FbGQRG8xYYtUaVgFDXreDIG7ekCPwqL%2BYMiPIKd%2Fi%2B05LG2OSEuO40HfmOE7ZB4FirYg4u%2FlF%2B3XGDenfc1Dpg%2FxjEkRXerxsrdUWkqbphzzEYGQSpbYlU%2BP7VLaMCk34NGjsi%2Fdz3u8Ld8RcAm3p7rn9CFZN76rguIW8E%2BrFiI%2FwJySP4aiahRgEk%2BNvdausWh6GlpqsfZkHdteDrZaOfp3f1pESKo0NSLkOXbK13xFIV73687lgDUvGW7az4UtzrbrGVf4s09NqGMG%2Fqua4mtmYrCmskepCpgKBnBy8MB0rWJ2X65ck0ZQSkItL5nLklFxtVqjmKY0SVkdQL6FDb4m1vUq%2FuGZoDa2m30eu368%2FNhqxC1%2FvfXGoYdu0F9Hnc7e4wCDrY8dJU2xyd6uPC%2FUVmcfZqFTWqttTT3UfMcqt1H3parUdAiUWnLtWqJhDirDITKZd9olMwZuMQM5ktfq7w6KI9ub%2BiABOFNw7BGr1kI9muHTc3z%2BHUJlAEaqd60eI1rbUNSRqf4PDsReBjjDloMvABjqkAZoLkrspxqAEXuSQNgxbjnas2LE8%2FqtlMjLf8zMuOCmPIfvfitxJUjMS7M1WkdUEGxIVZ4KUQPbEnEIzC%2FasuN49SpVo4OyTU7e2R7sX%2BKy3aB3ALXVcbtMiNyl9JaYjXRxErDQC%2F0g8ERisX5uodoevtvDdPZ%2B9SpUE%2FhBfJONl0ITa3gZa7ykS%2B3p70rK2yT3utOL%2B6mpf7hnzPzO41Uwcr1dW&X-Amz-Signature=aa325bc1a8b110c6eb582e725e5fd0fbc3bdcec0c70ba2fe98605422a6cd1dfc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CMB226J%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T024029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCDeNb%2BbG6u7GfDz%2FEKWZqQtl6F7NnZRXA0Ic5g2qVhpQIhAIqSVHF31%2Bo5%2B%2FA3wlr47VKqwFkQ%2B9JbFOJlMJB7OKOrKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGOzrgNyZhshz4wjQq3AO1999YhUrxv0gsHG%2FGbC6vuIGecfj%2BzwMwZtvN6%2BYOdJ%2BheZr8c9%2BFrsNklxG5cZcOTo0ne7ZZGc6R9jnOHlya%2FMtusctlXhjoPD5FbGQRG8xYYtUaVgFDXreDIG7ekCPwqL%2BYMiPIKd%2Fi%2B05LG2OSEuO40HfmOE7ZB4FirYg4u%2FlF%2B3XGDenfc1Dpg%2FxjEkRXerxsrdUWkqbphzzEYGQSpbYlU%2BP7VLaMCk34NGjsi%2Fdz3u8Ld8RcAm3p7rn9CFZN76rguIW8E%2BrFiI%2FwJySP4aiahRgEk%2BNvdausWh6GlpqsfZkHdteDrZaOfp3f1pESKo0NSLkOXbK13xFIV73687lgDUvGW7az4UtzrbrGVf4s09NqGMG%2Fqua4mtmYrCmskepCpgKBnBy8MB0rWJ2X65ck0ZQSkItL5nLklFxtVqjmKY0SVkdQL6FDb4m1vUq%2FuGZoDa2m30eu368%2FNhqxC1%2FvfXGoYdu0F9Hnc7e4wCDrY8dJU2xyd6uPC%2FUVmcfZqFTWqttTT3UfMcqt1H3parUdAiUWnLtWqJhDirDITKZd9olMwZuMQM5ktfq7w6KI9ub%2BiABOFNw7BGr1kI9muHTc3z%2BHUJlAEaqd60eI1rbUNSRqf4PDsReBjjDloMvABjqkAZoLkrspxqAEXuSQNgxbjnas2LE8%2FqtlMjLf8zMuOCmPIfvfitxJUjMS7M1WkdUEGxIVZ4KUQPbEnEIzC%2FasuN49SpVo4OyTU7e2R7sX%2BKy3aB3ALXVcbtMiNyl9JaYjXRxErDQC%2F0g8ERisX5uodoevtvDdPZ%2B9SpUE%2FhBfJONl0ITa3gZa7ykS%2B3p70rK2yT3utOL%2B6mpf7hnzPzO41Uwcr1dW&X-Amz-Signature=5b0d7a87a998b5e4dfeeb8f1f7d056fdef5635dfd78095c14ce40836770ad8fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

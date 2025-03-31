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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OV3I7WM%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIFJ4WAohgBLhC88P5MnjSJggqXaFIWi9zxmWrz9d8vE7AiEAqsjESrw%2Fue7Hf4JyrJinjmihP8i93eNKS1oHcCn%2FsS8qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBxK2YFP9Uu9xFby6yrcA8dE8XsmpxXjVg3rEu0tRBkAm76L%2BEIsNVCQM7M1huSmqM7IX4xZe0hXLwH%2Fh5YjFYDAblY8B4qBcrwTVjjrXaWody1TK3r5OrzCCvLn7D52hyKadOXex182AD7QXDZ8FEz%2BWMyG9Nn9rKRoIaXezCxKesvYP4qEvLeVMSIq1V9cWKrc8SLxAG%2BNyNfwD6fOu5ALIJTtxlZz16vyz5GRDKJDT2ALfX03H7jH%2FPO7DzjqjU0kpgEKvxL7LklzX3148XlY9ds6X6c7yBfw8y9H%2FrjU5abyG6xSaG%2BKuwCJeBDNfTMDqSlGKXSHHZvDORTzeSFQGhTCD6r6av5zcecZUhZQlWtuIYBA26T8zvXPY8OZ2iYCLIV6Zw9hVL7lQ5T%2F5Coh52A%2F8wh0mAaMLtfk7uzuRtPiaEjnm2zXcxkw3k0SJ5h84U%2BgeIr6oczuNLI%2FtdT8%2B1zjnkNRNrLGCQdLa%2FQT7OKwcxMkq6ptN500mqJ5xpMskX3bZUFoMAXjthtIQ2f6ZuKTPHUx%2F0wqpY1c%2F6XAAdze7bVHtetI7uUsjeFdzDNimn3xRUg5wPRDGYZSnFiOZUNR8DAZEQxkUpFcD5VYW3lSVkYakM98vqAU8ciPQ1o42VQdmkHh3bJ3MMK4q78GOqUBBCTlE5chHpz15M87OdLv5foovUVMdc6KTmGES3VJLQiIHUPJbKSkjM9W4Jv9LEI1OCsBvM53Hu%2BO5Uoknf0GOhG5OXeqO88wwSHBQEhG4aBANzP72JYXZZdVaCZtedH25CBhZ6C5o2Vj72eVjUN1dRC2BiGh08HPHzia9FphjPIkat1F4v0%2B8zju93QRs0MSsztPCDzcxvdnf3p5xJiKy6rug3sE&X-Amz-Signature=13a118f578bb5e30082c8a216509bda23373c50a1d8782780a5167868465f8ca&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OV3I7WM%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIFJ4WAohgBLhC88P5MnjSJggqXaFIWi9zxmWrz9d8vE7AiEAqsjESrw%2Fue7Hf4JyrJinjmihP8i93eNKS1oHcCn%2FsS8qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBxK2YFP9Uu9xFby6yrcA8dE8XsmpxXjVg3rEu0tRBkAm76L%2BEIsNVCQM7M1huSmqM7IX4xZe0hXLwH%2Fh5YjFYDAblY8B4qBcrwTVjjrXaWody1TK3r5OrzCCvLn7D52hyKadOXex182AD7QXDZ8FEz%2BWMyG9Nn9rKRoIaXezCxKesvYP4qEvLeVMSIq1V9cWKrc8SLxAG%2BNyNfwD6fOu5ALIJTtxlZz16vyz5GRDKJDT2ALfX03H7jH%2FPO7DzjqjU0kpgEKvxL7LklzX3148XlY9ds6X6c7yBfw8y9H%2FrjU5abyG6xSaG%2BKuwCJeBDNfTMDqSlGKXSHHZvDORTzeSFQGhTCD6r6av5zcecZUhZQlWtuIYBA26T8zvXPY8OZ2iYCLIV6Zw9hVL7lQ5T%2F5Coh52A%2F8wh0mAaMLtfk7uzuRtPiaEjnm2zXcxkw3k0SJ5h84U%2BgeIr6oczuNLI%2FtdT8%2B1zjnkNRNrLGCQdLa%2FQT7OKwcxMkq6ptN500mqJ5xpMskX3bZUFoMAXjthtIQ2f6ZuKTPHUx%2F0wqpY1c%2F6XAAdze7bVHtetI7uUsjeFdzDNimn3xRUg5wPRDGYZSnFiOZUNR8DAZEQxkUpFcD5VYW3lSVkYakM98vqAU8ciPQ1o42VQdmkHh3bJ3MMK4q78GOqUBBCTlE5chHpz15M87OdLv5foovUVMdc6KTmGES3VJLQiIHUPJbKSkjM9W4Jv9LEI1OCsBvM53Hu%2BO5Uoknf0GOhG5OXeqO88wwSHBQEhG4aBANzP72JYXZZdVaCZtedH25CBhZ6C5o2Vj72eVjUN1dRC2BiGh08HPHzia9FphjPIkat1F4v0%2B8zju93QRs0MSsztPCDzcxvdnf3p5xJiKy6rug3sE&X-Amz-Signature=6e2d1335843adb72113b0e6c4c04d0f74c85bf669735f1b5c76dcf5858735ee8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655R55XY6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDtNf01Bka5EgWI%2FsWtjcKJzxVOthI462V4aq3xBBQvwwIhALrLMy0DndlNl9LGWQTqmrUM4vLGM5DwuLtsMa3X7LD7Kv8DCDIQABoMNjM3NDIzMTgzODA1IgymkW6u45ywIvYQdqcq3AO0JLSwIX9B8yMFzeEvnCzTepjxN4ujJZPOB%2FjVfCYd5kUFeWyZgbvKkBSz8VrOTCyvfHbg4s%2FoMGR%2FLfai5N8i67Sygqw9bqCGFkfhx4ssWIlzau5uVnuyPZyU2xlH9lq4HzBDuvf%2FplmLxXlX56HHbfz%2B%2BfQ%2FKTdVpxA27R3esvBRkA4LYL%2FOLiEQ6tPjoWGI6ouE4xrZIX58T8bc2HfgBV09rBbo9fAoza3BVzyu%2BwCgeuPYxkVFyJfxrfQ9khi6vmBKgOLkJ1O5qox%2FQJyOWzn8aLEiF7WQNRzfGb8%2BzvMIaqRaREpXU1qVdJLUt6kwnkMdpZUBEOTy%2BJBCVhzFdCoScoS6n8faRZLejnkAop3m3SSuZMoqwwsbL99ZJJFQROHDLmCo6dI9zjL6KEWDGXApBFpcvZ4iqO5FyFiPfWgTURdDkQUS9gNcHU%2FH%2F4M%2BkLJ38iuKoM7M%2BtJaQwgyhwfXzc%2Bm72TKeeKMAb%2B6tvRcsGCgyCZe08LD9bDTSnjN42OK5nRCeMUB0SK1q39svddWS3ADx%2FE%2B5hIIfsXg%2FBvdQLWhhyGCyJYaOyysKwIYfeS195M3mas%2B0o%2FNEwpjO17UW1CiJHNtIyHBlPz%2Bq9kvLIG%2BSEbYKA7pezCZ1InEBjqkAWnIpGqgw7%2FQNCEipSM%2F4oWXDaqesHeL7ZDVcXnASA4EvR55kYzI%2BjZUUpWCv%2BVoBGlERwjY8TXR%2Bmt60m1UMHR%2BnoCOfhgmZbJDLk4Ek3PWS6yitlKh%2BhbIvCPMe60TnHU9iwZ98i0D%2FJ61zE0IYuHZ2gMwwEcHUKYdQDHTLU%2F1gM35X5pgu22jE6tL5zBEf25hE5JZ4OpoWPq1RTrGL1L9S3jl&X-Amz-Signature=9b3ac6c905cb0f6e33760dedf60475427d6e8ed7f765b1e15254020276a97ac5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655R55XY6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDtNf01Bka5EgWI%2FsWtjcKJzxVOthI462V4aq3xBBQvwwIhALrLMy0DndlNl9LGWQTqmrUM4vLGM5DwuLtsMa3X7LD7Kv8DCDIQABoMNjM3NDIzMTgzODA1IgymkW6u45ywIvYQdqcq3AO0JLSwIX9B8yMFzeEvnCzTepjxN4ujJZPOB%2FjVfCYd5kUFeWyZgbvKkBSz8VrOTCyvfHbg4s%2FoMGR%2FLfai5N8i67Sygqw9bqCGFkfhx4ssWIlzau5uVnuyPZyU2xlH9lq4HzBDuvf%2FplmLxXlX56HHbfz%2B%2BfQ%2FKTdVpxA27R3esvBRkA4LYL%2FOLiEQ6tPjoWGI6ouE4xrZIX58T8bc2HfgBV09rBbo9fAoza3BVzyu%2BwCgeuPYxkVFyJfxrfQ9khi6vmBKgOLkJ1O5qox%2FQJyOWzn8aLEiF7WQNRzfGb8%2BzvMIaqRaREpXU1qVdJLUt6kwnkMdpZUBEOTy%2BJBCVhzFdCoScoS6n8faRZLejnkAop3m3SSuZMoqwwsbL99ZJJFQROHDLmCo6dI9zjL6KEWDGXApBFpcvZ4iqO5FyFiPfWgTURdDkQUS9gNcHU%2FH%2F4M%2BkLJ38iuKoM7M%2BtJaQwgyhwfXzc%2Bm72TKeeKMAb%2B6tvRcsGCgyCZe08LD9bDTSnjN42OK5nRCeMUB0SK1q39svddWS3ADx%2FE%2B5hIIfsXg%2FBvdQLWhhyGCyJYaOyysKwIYfeS195M3mas%2B0o%2FNEwpjO17UW1CiJHNtIyHBlPz%2Bq9kvLIG%2BSEbYKA7pezCZ1InEBjqkAWnIpGqgw7%2FQNCEipSM%2F4oWXDaqesHeL7ZDVcXnASA4EvR55kYzI%2BjZUUpWCv%2BVoBGlERwjY8TXR%2Bmt60m1UMHR%2BnoCOfhgmZbJDLk4Ek3PWS6yitlKh%2BhbIvCPMe60TnHU9iwZ98i0D%2FJ61zE0IYuHZ2gMwwEcHUKYdQDHTLU%2F1gM35X5pgu22jE6tL5zBEf25hE5JZ4OpoWPq1RTrGL1L9S3jl&X-Amz-Signature=7b100685988d633093ca4f30390b215cdf68d69aeccc9094c83f13deb5d2688a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

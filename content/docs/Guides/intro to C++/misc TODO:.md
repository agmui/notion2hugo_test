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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHNS7TVP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6y7UgAyruLbrwQ%2FMbMNUmTdTlvjxW3Te8ZTDiRZywZwIgKTmbHa%2BJRUY41AL4tCaMOybKd2Jss7ynUbA019p7ubkqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOhyb1Shyx9ko1BQnCrcAzMw6F%2BGNUJby8mXu2qtOk7J1dXSdSNgZnSOhY4WW0CIftET1s4uJhrAyNVAL4F%2F1yvpvQy0JjDGNZzLH0x48QSndAbjdHa9OeX2VznB43iSu%2B5ml5CflWV0Rqoq%2BlXa1BMfK1rUNLkr%2BR7LJfU2Lm4%2B84F28qNOF8KZWibLZEsSsRF2FPYsXLeJuUgIGMBsBT2Z5B4X9PH5dCebBb7xDoIJUbDjtlyk40LExWeEbgLxYa5FQDd7bbzFYqZcsszrH0qCw8L8axfmWiWz3y7LzFcLjUcWTkVculJOCJ8hMw2M4W6h8kvC5qWTc2US6Zh0e3EA8Xfa0fYWZbyqk52Qe01NNnrUug6sa1exG%2BXJrxbd1nGZE7Cks4SPjYY%2B0Lgm%2Fi8EL2eWKNA7IDE8WEZzVsd4D3M2KcVbar5dRIGaSaE9o8424CR%2FOKpfJWlk3niwrwpU3rvzjyEDw1FwGPLRibRjReC%2B9L1stcgkKm9R3nHvn4NlIqEWZO1AQpVaINcdwuOJl5Rj5PDx0DUDIWgzuiqx5YYXLmv8ZtbiCDfHLJ8dlE5I7U8UIOG0YvDhx2tNIar3y5e1XeDC02rdl37Nav968P5NsreSP7tNaLLCyMPh7UVivMBUbHDF412%2BMOyLp8QGOqUB9Lem1H15whQtZ%2FhMEWnQbMsEwhoIdsw3Pvuj5nS8N8cS1gRaR0Ao3yPDObw9NV75dHi5KZXE1O8go6WDOFJ54OKuP8Sb%2Bd3AE188GbnEbKKSzaML8zec7QYY9xSporZ6NC%2FUH2O0yXNn%2F9whufTttXIGqn238SuZ6iBz%2FTZMT%2BkbGIVwDMdIPdiZ7Ctr38OQusNn7cwqgHJJBvFTfcfn%2FfIZzIx7&X-Amz-Signature=60cdb9a065bef0710c6a213c0e75e692becf97a01a061ca2d8e5b933353815c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHNS7TVP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6y7UgAyruLbrwQ%2FMbMNUmTdTlvjxW3Te8ZTDiRZywZwIgKTmbHa%2BJRUY41AL4tCaMOybKd2Jss7ynUbA019p7ubkqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOhyb1Shyx9ko1BQnCrcAzMw6F%2BGNUJby8mXu2qtOk7J1dXSdSNgZnSOhY4WW0CIftET1s4uJhrAyNVAL4F%2F1yvpvQy0JjDGNZzLH0x48QSndAbjdHa9OeX2VznB43iSu%2B5ml5CflWV0Rqoq%2BlXa1BMfK1rUNLkr%2BR7LJfU2Lm4%2B84F28qNOF8KZWibLZEsSsRF2FPYsXLeJuUgIGMBsBT2Z5B4X9PH5dCebBb7xDoIJUbDjtlyk40LExWeEbgLxYa5FQDd7bbzFYqZcsszrH0qCw8L8axfmWiWz3y7LzFcLjUcWTkVculJOCJ8hMw2M4W6h8kvC5qWTc2US6Zh0e3EA8Xfa0fYWZbyqk52Qe01NNnrUug6sa1exG%2BXJrxbd1nGZE7Cks4SPjYY%2B0Lgm%2Fi8EL2eWKNA7IDE8WEZzVsd4D3M2KcVbar5dRIGaSaE9o8424CR%2FOKpfJWlk3niwrwpU3rvzjyEDw1FwGPLRibRjReC%2B9L1stcgkKm9R3nHvn4NlIqEWZO1AQpVaINcdwuOJl5Rj5PDx0DUDIWgzuiqx5YYXLmv8ZtbiCDfHLJ8dlE5I7U8UIOG0YvDhx2tNIar3y5e1XeDC02rdl37Nav968P5NsreSP7tNaLLCyMPh7UVivMBUbHDF412%2BMOyLp8QGOqUB9Lem1H15whQtZ%2FhMEWnQbMsEwhoIdsw3Pvuj5nS8N8cS1gRaR0Ao3yPDObw9NV75dHi5KZXE1O8go6WDOFJ54OKuP8Sb%2Bd3AE188GbnEbKKSzaML8zec7QYY9xSporZ6NC%2FUH2O0yXNn%2F9whufTttXIGqn238SuZ6iBz%2FTZMT%2BkbGIVwDMdIPdiZ7Ctr38OQusNn7cwqgHJJBvFTfcfn%2FfIZzIx7&X-Amz-Signature=5e74240dbeba7d0b030c4f3374a65385597444d6d58d26218c5a4275a83e4257&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

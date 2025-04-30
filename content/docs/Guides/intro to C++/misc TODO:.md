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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPEDJBVU%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T132014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIEcaIfaaZXRm%2BolnRbbOD%2F3yGNqnj0RvlKrVy%2BWzNDZmAiBI12yRYqEuoiD66VLwX2fqqfMxtA09CXoPBO58Ji%2BCcSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXzp5jAWt7lirPqGFKtwDtjK1bJJU2fShQArvMJnbzt%2FTjSx7tG5Op0TtDjok2bE4Ucedjsut3eTRq0kq1br5IZTg31KouLmh7il9IBn6LhLM0ePiCZna1juvhd4HZgns43jq1GK600vqzWci8BZoA0Kkch0QqVIuPSUU4jj%2FWGdDQa%2FXQEXl781nKpsQ9BktqJctA2E%2Bygb6WLdOolAZlsEws00JkKjd1tcgZl5bUStmu4RN%2BT4gx%2FAXCstp0fn79hynR8AufNTYhGJQzy1DFPztBryRElgrbK0DdjXee4KkkEoSpoJHai2TmpCcETDbv2uHqFYKuWIbxsuX04nZJVMU5SCiMnS4%2FdLVTSG7ez0K4w8eL77JvJA8NcXZvzz3SUr0%2B371OKZjMqVh7MCLLE21Rr2W49PFZuCY%2FhNuy4e5CKYqxsgHbScAjiGCyUk9OZRLNsbfhIos4dJ0akfbmekMYSTH0i2LgZ9hvb8wyH%2BGzBZfCMKV7UkQxwURUqg7SCaKR9XPDuo5vKFTa2%2F1CWSgbo92tV%2Femo9gGj2WfbtM%2FrQmZ9hzxuGeAB6iIb0iJwlXQoQaJOcCRZgivj4sWum9rWJrl0WSudwLAA%2FLgQIcyEcPnVoA%2BHZBWiwkxWz6yfIWN1J%2BEDwqFmQwucTIwAY6pgEwLNTDwaDeUXfYbzRbTjjuqwp5T4huwZfIz%2BGlCy9w6CwQe0iH32rCT6YASCMLbRGqBwxf4kLdBepPeSLmdJX4qWsgm2nPDukpLm8v5hkGNT8zg%2BA%2FjOt7pcjrdedVbn9awx1fbngt5xqNlB%2FahceZT6eXpHGAjtgJenM6pi3PTKwLHuXWAGOBhy%2B%2BXyj2zibJskaGZs1UAuC7oscHs%2BSa%2F3EtcPKz&X-Amz-Signature=c73798285dc26850e4771367e3fd1e667a456e9d70131f6f101d1057e3854ec0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPEDJBVU%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T132014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIEcaIfaaZXRm%2BolnRbbOD%2F3yGNqnj0RvlKrVy%2BWzNDZmAiBI12yRYqEuoiD66VLwX2fqqfMxtA09CXoPBO58Ji%2BCcSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXzp5jAWt7lirPqGFKtwDtjK1bJJU2fShQArvMJnbzt%2FTjSx7tG5Op0TtDjok2bE4Ucedjsut3eTRq0kq1br5IZTg31KouLmh7il9IBn6LhLM0ePiCZna1juvhd4HZgns43jq1GK600vqzWci8BZoA0Kkch0QqVIuPSUU4jj%2FWGdDQa%2FXQEXl781nKpsQ9BktqJctA2E%2Bygb6WLdOolAZlsEws00JkKjd1tcgZl5bUStmu4RN%2BT4gx%2FAXCstp0fn79hynR8AufNTYhGJQzy1DFPztBryRElgrbK0DdjXee4KkkEoSpoJHai2TmpCcETDbv2uHqFYKuWIbxsuX04nZJVMU5SCiMnS4%2FdLVTSG7ez0K4w8eL77JvJA8NcXZvzz3SUr0%2B371OKZjMqVh7MCLLE21Rr2W49PFZuCY%2FhNuy4e5CKYqxsgHbScAjiGCyUk9OZRLNsbfhIos4dJ0akfbmekMYSTH0i2LgZ9hvb8wyH%2BGzBZfCMKV7UkQxwURUqg7SCaKR9XPDuo5vKFTa2%2F1CWSgbo92tV%2Femo9gGj2WfbtM%2FrQmZ9hzxuGeAB6iIb0iJwlXQoQaJOcCRZgivj4sWum9rWJrl0WSudwLAA%2FLgQIcyEcPnVoA%2BHZBWiwkxWz6yfIWN1J%2BEDwqFmQwucTIwAY6pgEwLNTDwaDeUXfYbzRbTjjuqwp5T4huwZfIz%2BGlCy9w6CwQe0iH32rCT6YASCMLbRGqBwxf4kLdBepPeSLmdJX4qWsgm2nPDukpLm8v5hkGNT8zg%2BA%2FjOt7pcjrdedVbn9awx1fbngt5xqNlB%2FahceZT6eXpHGAjtgJenM6pi3PTKwLHuXWAGOBhy%2B%2BXyj2zibJskaGZs1UAuC7oscHs%2BSa%2F3EtcPKz&X-Amz-Signature=29985fa6807f5f6b47f39e01164662e05b18e6ad0d78e30a79aceb74ecdc8539&X-Amz-SignedHeaders=host&x-id=GetObject)

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

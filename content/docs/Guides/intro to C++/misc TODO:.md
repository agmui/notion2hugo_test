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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAW3TWCT%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T121146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnZkqbCuKs2VWkweAfjhoaeDSuGn1FQRZelFUhOIX3DAIgLgT%2F8Fdmr6B27eX1zwun0NGc2HtMMgwVStXrxvqwYp4qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFxkRZ25n8iqac%2FBCrcAy6METe9QyB3%2BWt%2Fn2N0fiQbBN9ZekaJ5uFwE1oK9%2B6Ea70C9Nj%2FqoUfGLjNfft71m%2FuBFjL9peseNRNuYrNWD96TA3A3ZulrbIrSAbP88okO0xAE1C2sa6JWe%2BSS3CsvCwVojThehVjACv49hmFpzA80ckoMVAAXXEbmTIOyj9SGy8b9E8koN6FJf6auCxyu3brk8vInt6cmEZ5sqpUeJTPcR8X0iKuK70oytSrrs0MbkDSTeA1En9UwciwzB1M0mMovuZI2aYXQO0pBhUXlwsbEkU6N5Opu1xkNrrAoIwkC3x4XNYP7CGeQvq2mkAIYg9OxLFzCeCa3cno5CFF0UEv9Zf%2FcmEhDBwmrOsimDP9XERwnkq5A39SGOHKCYXbVvjZcmuU3kqHOG2ZtBDjRLu%2BFgkkOuBR9sVhjOEbbrRl%2F13usj24b9p9I1a4dr0TRcuQjeZ%2FzUfoJ%2FEhyoP0fwShA7X7yaxLCslpUSJI9TgOuKxoWdC%2BQcuiItt%2Fz96bnUDyhobLs7QcJ%2Bj3v0joSOgM%2BzdcVVYleMKGUuZ0J2VSCtwdURCVDaN4KBGNO6Xj90ol0gNjmjzt%2Fg6fChivXt334BitsRo0dQ4U9IEv92zUiVwRFjDc%2F9gUK1PbMJOm97wGOqUBZx4%2BCM%2FIeueWVjfZAEiNU4bxQ5g7UwcJQZs6XHWpt3xyD3J7idxhN%2FV%2FVxKmT8WOUZR80BurBXJ9%2BXbLYP%2BjjbA07XxDUh44SdtgA3aNh4tYTOXgEG09DotO3OYVJwysMQDaK0Xy0bqNNx4Jydwu%2FdOcUSw5RxT1yFyT2Rj5I3wJBLJ4yKfdz0kk6yMmbsCTdaLJiNqY971V%2BE8lcEuDBAuUR8U4&X-Amz-Signature=3e078bb76523e13a60020ac54d582f890ef441784c5a44b66386124820ac5b9f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAW3TWCT%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T121146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnZkqbCuKs2VWkweAfjhoaeDSuGn1FQRZelFUhOIX3DAIgLgT%2F8Fdmr6B27eX1zwun0NGc2HtMMgwVStXrxvqwYp4qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFxkRZ25n8iqac%2FBCrcAy6METe9QyB3%2BWt%2Fn2N0fiQbBN9ZekaJ5uFwE1oK9%2B6Ea70C9Nj%2FqoUfGLjNfft71m%2FuBFjL9peseNRNuYrNWD96TA3A3ZulrbIrSAbP88okO0xAE1C2sa6JWe%2BSS3CsvCwVojThehVjACv49hmFpzA80ckoMVAAXXEbmTIOyj9SGy8b9E8koN6FJf6auCxyu3brk8vInt6cmEZ5sqpUeJTPcR8X0iKuK70oytSrrs0MbkDSTeA1En9UwciwzB1M0mMovuZI2aYXQO0pBhUXlwsbEkU6N5Opu1xkNrrAoIwkC3x4XNYP7CGeQvq2mkAIYg9OxLFzCeCa3cno5CFF0UEv9Zf%2FcmEhDBwmrOsimDP9XERwnkq5A39SGOHKCYXbVvjZcmuU3kqHOG2ZtBDjRLu%2BFgkkOuBR9sVhjOEbbrRl%2F13usj24b9p9I1a4dr0TRcuQjeZ%2FzUfoJ%2FEhyoP0fwShA7X7yaxLCslpUSJI9TgOuKxoWdC%2BQcuiItt%2Fz96bnUDyhobLs7QcJ%2Bj3v0joSOgM%2BzdcVVYleMKGUuZ0J2VSCtwdURCVDaN4KBGNO6Xj90ol0gNjmjzt%2Fg6fChivXt334BitsRo0dQ4U9IEv92zUiVwRFjDc%2F9gUK1PbMJOm97wGOqUBZx4%2BCM%2FIeueWVjfZAEiNU4bxQ5g7UwcJQZs6XHWpt3xyD3J7idxhN%2FV%2FVxKmT8WOUZR80BurBXJ9%2BXbLYP%2BjjbA07XxDUh44SdtgA3aNh4tYTOXgEG09DotO3OYVJwysMQDaK0Xy0bqNNx4Jydwu%2FdOcUSw5RxT1yFyT2Rj5I3wJBLJ4yKfdz0kk6yMmbsCTdaLJiNqY971V%2BE8lcEuDBAuUR8U4&X-Amz-Signature=6e1db666745d3883918df3cd10403e41c8c82bb7fcedd75c9238e675d1d6a0a6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

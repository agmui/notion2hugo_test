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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWTTYQ47%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T070806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcfqJV%2BNgrGhzJdXr%2Fzd%2Fr%2FH6pzmP%2Fizv84yP9XW7qOQIhAJ9BjWyHRNS1UwnbGrt7IFq64RsRCaSK%2B8Fl5KGiUvZTKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyEV3Y89bKnpO9EfAq3AM466u90XK%2BLbZw78fUvFTCBqbMpxyzPq0ZE7HvUuBHiYUAOrD%2FFF01yYg5suq4R83WcjmMewn9r0oAlDzfiMir5pMokLjQBI627Lt1tKAOBVY3tYJhCvSV%2FSdhjACHdLlkQ13wieUqTjrYkNJQ4oAWFjEpa5NJbyEnV8UGQ%2FTD4i8ulVrLzpUqNj6amqv2LqT1PrKeZ%2B%2FeihmsKs0XW7MOTOnBnodnyIpBDRa1SqKXldXUEf%2FIAj1yY3orIqV5EbrzapMALIwitV1SI9rsYfOQAuL8C0Q47FEJFK4IqskHVpXVxnAfhXu7nqRm79kTid%2BSr3FTo8q9nnkiIF7Q%2BZtstP6Juv4SzQSPi4RK7cZRuzc5r0M41fCrh5CdEwFKagtwLrakOpnIQYIpiV%2BML33%2FQyven6PJAqw6oATgZzpIaDogenJkw%2Bg2NlWPYDy9wWPuZlcDbjHIup6La5KQyFIWoxnnHAMM4D7Ob3%2Bfam9t5w8k%2FTaZpOiP5ZTLRm9NryMjc2scw%2BX5PLhqJQeeeSVwb6hYeOWqWrzDONFLr%2FEa211p1b0rMjCYJ4uH0sRQP25h2IRW2uJnAku3haDGmXHu3xJxG6uGI8FpYNBhQ%2B%2BpHQtifqQ9ZMbf%2BreLajCfhMq%2BBjqkAakTI0vMhjqN45lWG5OiuDCItv4TmX0FfeM2ZCUFhLURhJYXboEpg6JdXtU6IIOGJ3axtv4yk6xb8yT1hEF0UiFu5uUkkLWnZbhkzA7iQ7IQyu4rofBX%2Fc1xdC1Otq1n%2B1fTaKlDy%2FHjGO%2BxGsE1tBUjt6%2BEDkQUn%2FR57ixfcXSIH05ODuTw%2FLB%2Fg8ccrJggWxXdEvAG3o%2FtibeKwvCiHvTLTCq0&X-Amz-Signature=01c87b36a7b830e180d2ea38a5ed5ea180a6e7a83984269be1c8660116ddf5f2&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWTTYQ47%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T070806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcfqJV%2BNgrGhzJdXr%2Fzd%2Fr%2FH6pzmP%2Fizv84yP9XW7qOQIhAJ9BjWyHRNS1UwnbGrt7IFq64RsRCaSK%2B8Fl5KGiUvZTKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyEV3Y89bKnpO9EfAq3AM466u90XK%2BLbZw78fUvFTCBqbMpxyzPq0ZE7HvUuBHiYUAOrD%2FFF01yYg5suq4R83WcjmMewn9r0oAlDzfiMir5pMokLjQBI627Lt1tKAOBVY3tYJhCvSV%2FSdhjACHdLlkQ13wieUqTjrYkNJQ4oAWFjEpa5NJbyEnV8UGQ%2FTD4i8ulVrLzpUqNj6amqv2LqT1PrKeZ%2B%2FeihmsKs0XW7MOTOnBnodnyIpBDRa1SqKXldXUEf%2FIAj1yY3orIqV5EbrzapMALIwitV1SI9rsYfOQAuL8C0Q47FEJFK4IqskHVpXVxnAfhXu7nqRm79kTid%2BSr3FTo8q9nnkiIF7Q%2BZtstP6Juv4SzQSPi4RK7cZRuzc5r0M41fCrh5CdEwFKagtwLrakOpnIQYIpiV%2BML33%2FQyven6PJAqw6oATgZzpIaDogenJkw%2Bg2NlWPYDy9wWPuZlcDbjHIup6La5KQyFIWoxnnHAMM4D7Ob3%2Bfam9t5w8k%2FTaZpOiP5ZTLRm9NryMjc2scw%2BX5PLhqJQeeeSVwb6hYeOWqWrzDONFLr%2FEa211p1b0rMjCYJ4uH0sRQP25h2IRW2uJnAku3haDGmXHu3xJxG6uGI8FpYNBhQ%2B%2BpHQtifqQ9ZMbf%2BreLajCfhMq%2BBjqkAakTI0vMhjqN45lWG5OiuDCItv4TmX0FfeM2ZCUFhLURhJYXboEpg6JdXtU6IIOGJ3axtv4yk6xb8yT1hEF0UiFu5uUkkLWnZbhkzA7iQ7IQyu4rofBX%2Fc1xdC1Otq1n%2B1fTaKlDy%2FHjGO%2BxGsE1tBUjt6%2BEDkQUn%2FR57ixfcXSIH05ODuTw%2FLB%2Fg8ccrJggWxXdEvAG3o%2FtibeKwvCiHvTLTCq0&X-Amz-Signature=8ef5e93f7e9015f1dee7f4a5b31cefa34e4560f95e029ddc96db51a76541ce79&X-Amz-SignedHeaders=host&x-id=GetObject)

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

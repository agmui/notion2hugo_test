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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW3WK7HX%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCgZ620cG0Qp8aEhIWH6MSjcOEHaD25lxWouIYsxzxt4wIhALr%2BcuFy735KVpcxITqejTMjsx1ljgaww2HMO3aHEXKLKv8DCAIQABoMNjM3NDIzMTgzODA1Igx9vfXGX%2BJvmIUYE%2Fgq3APRZsqtLSmg6tBqvvK85970W8IFXXhHk%2BjAj0GseeEemIJG1w%2Ba%2FjqG6GlvXCYMp8lhdXIWmzGf1lHPJEspPnzFLnT%2BCZv%2BWUa0EtPaxlLHN7GrX7nyEyGH3H0X6QoQ00gu%2F3uTov3zDbaHpiTnKYH3ZibZGybDMAC8yTEbC6P1ulxQsGuN0ZJCOypsL1RE0%2FXUfvNd0kTtUiZIdjqRsRO0dfXO4rg2hE4DAzCSWfc%2Bx4f5hiPZprhhoo75M9DwzU1n82FnXPbzjZqoyPdem0o2MK6Tt60ineo9OLuyEU9kcajUqlR8V94KhwDHt9L1LnKKiFFD0Ta2hSljT5y1mM5BNwwIfgq9q7RFGAR5ojDUMrvr1rUvFWOjT54wxnfXjXuGH9UlSu8xPF1huNBiFDA9hJjrE7MrmXsI9LTQwdaRo8Mt9zmaR3MZhDQ3P0642LVqTY05ufZFknPiHS5VY%2BWctE%2BI8dKWrkn4B28rWWKA4RxttrSNYUWgK%2F2rJZz%2FMHBGXBsu0ALgyeh6Jz%2Bvm3kwzRexy%2BLkRS0tK6tBNEg5EsHVHH2qIeoG9o6Eo5kSgTDnmGFF5qvRJGbtGEnZphcKP33ydmRzy4LeiCi2lhqibupEC9BZNtuj2Pjt6zDGq9DLBjqkAVH7WKI7Au5vTRK0XrqClyBgGIAHa%2FMyZB9hDmk2xpZzF6r%2FthKyNm2LUuX83h6t5zQCYh6rGODuhDDDBUtjv8fcCwtqyRMYbrhY1U9i7hieWobckEQHQG1JbdIhlxVQQBlIpgCnaf0ejVkrcR3MslId%2BbBAXTFXaxiEd2lBnZD2ev94XQrbBw3kgVBG8uiPFv6ToZ7G5YeyfOfPma18rq%2F9Awwe&X-Amz-Signature=e13c31d58658a8cd3ab2c8ff32c07418181515f201a08231734b768c48e93bde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW3WK7HX%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCgZ620cG0Qp8aEhIWH6MSjcOEHaD25lxWouIYsxzxt4wIhALr%2BcuFy735KVpcxITqejTMjsx1ljgaww2HMO3aHEXKLKv8DCAIQABoMNjM3NDIzMTgzODA1Igx9vfXGX%2BJvmIUYE%2Fgq3APRZsqtLSmg6tBqvvK85970W8IFXXhHk%2BjAj0GseeEemIJG1w%2Ba%2FjqG6GlvXCYMp8lhdXIWmzGf1lHPJEspPnzFLnT%2BCZv%2BWUa0EtPaxlLHN7GrX7nyEyGH3H0X6QoQ00gu%2F3uTov3zDbaHpiTnKYH3ZibZGybDMAC8yTEbC6P1ulxQsGuN0ZJCOypsL1RE0%2FXUfvNd0kTtUiZIdjqRsRO0dfXO4rg2hE4DAzCSWfc%2Bx4f5hiPZprhhoo75M9DwzU1n82FnXPbzjZqoyPdem0o2MK6Tt60ineo9OLuyEU9kcajUqlR8V94KhwDHt9L1LnKKiFFD0Ta2hSljT5y1mM5BNwwIfgq9q7RFGAR5ojDUMrvr1rUvFWOjT54wxnfXjXuGH9UlSu8xPF1huNBiFDA9hJjrE7MrmXsI9LTQwdaRo8Mt9zmaR3MZhDQ3P0642LVqTY05ufZFknPiHS5VY%2BWctE%2BI8dKWrkn4B28rWWKA4RxttrSNYUWgK%2F2rJZz%2FMHBGXBsu0ALgyeh6Jz%2Bvm3kwzRexy%2BLkRS0tK6tBNEg5EsHVHH2qIeoG9o6Eo5kSgTDnmGFF5qvRJGbtGEnZphcKP33ydmRzy4LeiCi2lhqibupEC9BZNtuj2Pjt6zDGq9DLBjqkAVH7WKI7Au5vTRK0XrqClyBgGIAHa%2FMyZB9hDmk2xpZzF6r%2FthKyNm2LUuX83h6t5zQCYh6rGODuhDDDBUtjv8fcCwtqyRMYbrhY1U9i7hieWobckEQHQG1JbdIhlxVQQBlIpgCnaf0ejVkrcR3MslId%2BbBAXTFXaxiEd2lBnZD2ev94XQrbBw3kgVBG8uiPFv6ToZ7G5YeyfOfPma18rq%2F9Awwe&X-Amz-Signature=58302019aab62e55f8eccfe4d8e439b50d391e9b8c4679838aa74fafdd9138b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

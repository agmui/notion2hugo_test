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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXLSSZGV%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIEfpaJhPk7vwt3197f0oxyLY7vrEla1B8vWSjdr9Pf5yAiEAzwQDn%2BjV0Tv%2Bh3BxhJSMyPmA3Se19BakJ9KtABvjWQYqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmC91ctDiAstvP%2B7SrcAzmRp0J0lzysrNnGASyjqVhm8fZJosAdlSqGawJptYppzBLPwn0GRNSvBrgn1B1KmxzqtMluTrnlFMuSreZFH9ZNibZpcJ233EZkRIRVBR5mSO2vFER0uO3wVUqEB%2F%2B5a6J8hS%2F0JKR1JNkt2rVt1VlZPVc1kPsMJNjDw9imQQE5NCLQEQ99i7BCnr4WSVlw7vMNs%2FLA%2FtkWWZfaq8hKUgjILJzOEByDwL6UoP0lPXjXfOMzQ4TgS7snqGakXHIOGGXMNbsqjwEA1tYseCyx3ck%2BadXb3FOqAk%2B13eIQtHjtX5wBV3Sw%2FzQ%2Bqrpg8Yyg0XytpVOFk00Qh3egMhNcypobXkYQXmJHBQd2c%2F8lq9H%2FkbszFSJVb7KFf7c5GxawW0e%2FvDTaol2Ks1qSmKid91V99H14oI5Lza34cpj02Ng9%2Bl%2BZtINoqJsxs7SCU4bjyn%2FhS405f9LUb%2FWQB27zE%2F6XIZ6MMyW%2F6FC6xQ0gyvWWwCSyNdewqopN3%2BqVSfYc%2BpnWqSpWEoXt9flT8cOOE1GJxSvIKP8MMNKOZvWzaJuI9Evxd9A4PY3dBbVCJhSn917Jtt6B6RsRU49w8DM2nIRdf693GCrHYsKCgH7tgimVOQ%2FPC1kwUzoPANP7MNS4q78GOqUBdP6t51F%2FnHzP8QE%2BFqEsb63eQuvpTPhGUH6giHhuyJ%2BrCv7bE%2B5FNudKGrGkYhWU71sKJVa5SiJr9JKbGHq5AKm3WJbr80yAmJKOwmZLSZhpMuvuunw%2B0yqCg0shtwjSjhpYfzivSgsJOveTGTCP3SSVYEQms22mLbP%2Fn2X4w9HEQ47uLavz5hvQI1EaY7vW5wz6VxTGLGm0ePXvsxkypde%2FDHyH&X-Amz-Signature=60f78c5a4061d27828a8f9b6d971efe1ea474218f280fb6cc9bef5f4a4352cf6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXLSSZGV%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIEfpaJhPk7vwt3197f0oxyLY7vrEla1B8vWSjdr9Pf5yAiEAzwQDn%2BjV0Tv%2Bh3BxhJSMyPmA3Se19BakJ9KtABvjWQYqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmC91ctDiAstvP%2B7SrcAzmRp0J0lzysrNnGASyjqVhm8fZJosAdlSqGawJptYppzBLPwn0GRNSvBrgn1B1KmxzqtMluTrnlFMuSreZFH9ZNibZpcJ233EZkRIRVBR5mSO2vFER0uO3wVUqEB%2F%2B5a6J8hS%2F0JKR1JNkt2rVt1VlZPVc1kPsMJNjDw9imQQE5NCLQEQ99i7BCnr4WSVlw7vMNs%2FLA%2FtkWWZfaq8hKUgjILJzOEByDwL6UoP0lPXjXfOMzQ4TgS7snqGakXHIOGGXMNbsqjwEA1tYseCyx3ck%2BadXb3FOqAk%2B13eIQtHjtX5wBV3Sw%2FzQ%2Bqrpg8Yyg0XytpVOFk00Qh3egMhNcypobXkYQXmJHBQd2c%2F8lq9H%2FkbszFSJVb7KFf7c5GxawW0e%2FvDTaol2Ks1qSmKid91V99H14oI5Lza34cpj02Ng9%2Bl%2BZtINoqJsxs7SCU4bjyn%2FhS405f9LUb%2FWQB27zE%2F6XIZ6MMyW%2F6FC6xQ0gyvWWwCSyNdewqopN3%2BqVSfYc%2BpnWqSpWEoXt9flT8cOOE1GJxSvIKP8MMNKOZvWzaJuI9Evxd9A4PY3dBbVCJhSn917Jtt6B6RsRU49w8DM2nIRdf693GCrHYsKCgH7tgimVOQ%2FPC1kwUzoPANP7MNS4q78GOqUBdP6t51F%2FnHzP8QE%2BFqEsb63eQuvpTPhGUH6giHhuyJ%2BrCv7bE%2B5FNudKGrGkYhWU71sKJVa5SiJr9JKbGHq5AKm3WJbr80yAmJKOwmZLSZhpMuvuunw%2B0yqCg0shtwjSjhpYfzivSgsJOveTGTCP3SSVYEQms22mLbP%2Fn2X4w9HEQ47uLavz5hvQI1EaY7vW5wz6VxTGLGm0ePXvsxkypde%2FDHyH&X-Amz-Signature=306a8ea6e2022aa09d540feb5f717c94870196912b209f5edf52ca954d635521&X-Amz-SignedHeaders=host&x-id=GetObject)

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

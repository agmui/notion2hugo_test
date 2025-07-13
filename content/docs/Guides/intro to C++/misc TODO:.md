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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I5RYIX3%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T061238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1Fra2dDqjNjuA1gJrV8%2BzflBZEKHpJYpCNluFeNZ8mAiAHuLVn1scS4GYt%2BJiK2JB81R%2BtcT1WY1%2FSZCH0J%2FAeySqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo3HWvVHTIa8Ik0b0KtwDGui%2FzsGnkbkZyS3Q%2B1UuL%2FXfBSyOqJzsPwmDzSptl0GTAdw0OzcnJGzHk3x1Wlyuc49wfo4HNe13RU5iPXlUf7C5R0LU3loCqOqc1G95hu4j9i4dU8UMwLztkYclJtEnHbJsDDrxQqoM%2Bzm5oaq5ltat99HIjlABvKUqLdiVsdaDDiVy3Mv3Wrsozk%2FeXAwD1vkQ9unJAXVF8Qn%2BWs002IhBQXg%2BqJfZrGK823e68ijW%2FX8eE4wVCuHj%2BgOyr1ixGWWyAMevNEHsmCT1wqB8NisS0%2FrW9StU0MvfFJBqyyr4Tn2SbInUPNwHb9bnfIvi87CY55l8tjVWjcCIKp53Qp2mkrN43RWi6NBe%2B06IjJjFrAT1Yzav4G9AFA71MytbWdlmDhr5mowvLqkMN2A8HJbsJr6QXdt3v8GPmgKvhlsnnD0dXZe12nOqhUMI5zxpG3gqI8dTHsGZK86XxxCmtEkHlFsMeL7dysF12tKjQV1TALEJIokhuqY8Z7vFEmz4iXBaj3ScQ%2Feta35CBi7YBBQY8T43nJBnJTObGcf%2BZJUbNwInJc%2BVA7NFlZ2V8XSc8FnWPgqI0hX4Grehikzed2aUJ6LN%2BAk%2B692OoteVEYBBCccRFDTtRz3PSe4w4djMwwY6pgEiyrh20A%2FCZmyJrl7GgTrS5kwhlqSbeIt40XW2ePWjNQGUsxKB9kKPY7YjmXLrGB9SpKrlmQO19N0eVZLUAPu0ZQaEbQrX2u4EQL0d5T5KsLWagEeGJu%2Fa%2BSCRYqxXrMbKyJlGj1SQKb9lMdmjkzShR4hjQ6c669vXJ6FEGjF6vyk%2BLGSqoDUaEY2Nin9PxaXamR%2F%2Fx%2F0LuLvZav6xhe%2F5pOP8rrM6&X-Amz-Signature=59fbed88829017a71ab65c33692e6b2284a765502cb1c356aa12a527b45d2c48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I5RYIX3%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T061238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1Fra2dDqjNjuA1gJrV8%2BzflBZEKHpJYpCNluFeNZ8mAiAHuLVn1scS4GYt%2BJiK2JB81R%2BtcT1WY1%2FSZCH0J%2FAeySqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo3HWvVHTIa8Ik0b0KtwDGui%2FzsGnkbkZyS3Q%2B1UuL%2FXfBSyOqJzsPwmDzSptl0GTAdw0OzcnJGzHk3x1Wlyuc49wfo4HNe13RU5iPXlUf7C5R0LU3loCqOqc1G95hu4j9i4dU8UMwLztkYclJtEnHbJsDDrxQqoM%2Bzm5oaq5ltat99HIjlABvKUqLdiVsdaDDiVy3Mv3Wrsozk%2FeXAwD1vkQ9unJAXVF8Qn%2BWs002IhBQXg%2BqJfZrGK823e68ijW%2FX8eE4wVCuHj%2BgOyr1ixGWWyAMevNEHsmCT1wqB8NisS0%2FrW9StU0MvfFJBqyyr4Tn2SbInUPNwHb9bnfIvi87CY55l8tjVWjcCIKp53Qp2mkrN43RWi6NBe%2B06IjJjFrAT1Yzav4G9AFA71MytbWdlmDhr5mowvLqkMN2A8HJbsJr6QXdt3v8GPmgKvhlsnnD0dXZe12nOqhUMI5zxpG3gqI8dTHsGZK86XxxCmtEkHlFsMeL7dysF12tKjQV1TALEJIokhuqY8Z7vFEmz4iXBaj3ScQ%2Feta35CBi7YBBQY8T43nJBnJTObGcf%2BZJUbNwInJc%2BVA7NFlZ2V8XSc8FnWPgqI0hX4Grehikzed2aUJ6LN%2BAk%2B692OoteVEYBBCccRFDTtRz3PSe4w4djMwwY6pgEiyrh20A%2FCZmyJrl7GgTrS5kwhlqSbeIt40XW2ePWjNQGUsxKB9kKPY7YjmXLrGB9SpKrlmQO19N0eVZLUAPu0ZQaEbQrX2u4EQL0d5T5KsLWagEeGJu%2Fa%2BSCRYqxXrMbKyJlGj1SQKb9lMdmjkzShR4hjQ6c669vXJ6FEGjF6vyk%2BLGSqoDUaEY2Nin9PxaXamR%2F%2Fx%2F0LuLvZav6xhe%2F5pOP8rrM6&X-Amz-Signature=de97c58dbe89068c7ef9300b2959c06a9e3aa14ae4d2f5ad4e81ec890c7a86c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

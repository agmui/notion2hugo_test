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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3JEB2ZX%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T161018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCJJ9B3sCilNDxMTgKvOnUpy%2BZI8BRLxOCX%2Bbpj7NYf%2BAIhAOAV7WfHxU0w9gRHQNkMVTEtaqsnvqh5owuEfCHbYfuxKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOwq%2BqkRuhkEYd1ywq3APRB8kmAyC6k7qX1aHGkcB4hTEjVgvYhmjJRRQUo%2FlQrQLbvDEcnHSbXREYCVhnKf%2BDbIN7icCKOOIFffHj%2FSebbL4l75lpp%2Bv%2FMlRZyCqJifYwsrJ1FhwI7%2FLGZgZAmoiuqTpR8DRbWG%2B5b0Xm3jkk7kSbFXUCvl3MwP6favOqaKT5je6EsDvt6QWJxZGf%2FKBXX6npmHWAs8ivZbcxNoWpTd%2BmY7dDvouBKu5bMCrU9LmOJ7gn1Epzu3NqGdXzr9CLKbOvlo5GQ89nz4AX8ei%2FhL7K6mrYCo88d5YVkGHa3qahqTd1zug2X3Bh0yCUQ6YI2wrC14boSxUVqRUK3I62E9Hm3xZ1LwX4DUc4Y%2BfXXryU5CDLFlbUUxnZqyAe2HYDo5rX%2B2VDqMIUidXqP0R97S0yBFeBTWIJPssGOLlHPM8Rkfo%2Fk8fedYlSsy3Tryl7XpCGH5W0ERJ1Yofqvz%2BiCzS0cH8N4%2BmsKAgUg8kmMnhBwUlqpyqwRU%2BwKqtDatSQQ7FGRbbYiKg9Nv9gsWRNH1YoxvHkeOwUDyCmPz7Rry006uWO1NoEY7%2FG2hhM39Mf6YMcLzf%2Bge3eSSXy4uHOUCnSx21eCGVnLZ1pDMPF3HDgVkOTozgplMC82zDW%2B7S%2FBjqkAcG67ofUnTWwtFcesugx1Qo%2FyZ0mfYUV5rl9Q66kaC67CFXxjw42VItzD1jdxH14kWwiIoyCcu11dtUHVUvYK3UXptcCN%2FM6hpgiJQXcGLPH86pshwJweUxuNOKqd%2FFI2kV0bK2Q0hqVFK%2FbCSIdz0zEcXzAcqi1f6WDG8se6bLYW5y2hgEgW%2FKkRg4nS3XSI4DMNsbWo5fYDWDhcqyBgequX1hH&X-Amz-Signature=be4ba7f93ffdd0e96c40ba87a211747fdca94f37e424adc53d411000eb0c9b14&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3JEB2ZX%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T161018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCJJ9B3sCilNDxMTgKvOnUpy%2BZI8BRLxOCX%2Bbpj7NYf%2BAIhAOAV7WfHxU0w9gRHQNkMVTEtaqsnvqh5owuEfCHbYfuxKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOwq%2BqkRuhkEYd1ywq3APRB8kmAyC6k7qX1aHGkcB4hTEjVgvYhmjJRRQUo%2FlQrQLbvDEcnHSbXREYCVhnKf%2BDbIN7icCKOOIFffHj%2FSebbL4l75lpp%2Bv%2FMlRZyCqJifYwsrJ1FhwI7%2FLGZgZAmoiuqTpR8DRbWG%2B5b0Xm3jkk7kSbFXUCvl3MwP6favOqaKT5je6EsDvt6QWJxZGf%2FKBXX6npmHWAs8ivZbcxNoWpTd%2BmY7dDvouBKu5bMCrU9LmOJ7gn1Epzu3NqGdXzr9CLKbOvlo5GQ89nz4AX8ei%2FhL7K6mrYCo88d5YVkGHa3qahqTd1zug2X3Bh0yCUQ6YI2wrC14boSxUVqRUK3I62E9Hm3xZ1LwX4DUc4Y%2BfXXryU5CDLFlbUUxnZqyAe2HYDo5rX%2B2VDqMIUidXqP0R97S0yBFeBTWIJPssGOLlHPM8Rkfo%2Fk8fedYlSsy3Tryl7XpCGH5W0ERJ1Yofqvz%2BiCzS0cH8N4%2BmsKAgUg8kmMnhBwUlqpyqwRU%2BwKqtDatSQQ7FGRbbYiKg9Nv9gsWRNH1YoxvHkeOwUDyCmPz7Rry006uWO1NoEY7%2FG2hhM39Mf6YMcLzf%2Bge3eSSXy4uHOUCnSx21eCGVnLZ1pDMPF3HDgVkOTozgplMC82zDW%2B7S%2FBjqkAcG67ofUnTWwtFcesugx1Qo%2FyZ0mfYUV5rl9Q66kaC67CFXxjw42VItzD1jdxH14kWwiIoyCcu11dtUHVUvYK3UXptcCN%2FM6hpgiJQXcGLPH86pshwJweUxuNOKqd%2FFI2kV0bK2Q0hqVFK%2FbCSIdz0zEcXzAcqi1f6WDG8se6bLYW5y2hgEgW%2FKkRg4nS3XSI4DMNsbWo5fYDWDhcqyBgequX1hH&X-Amz-Signature=f9278ea2d737c4002159ceddd93ce2c9016ef9f6a32a945b0cbb4c0117ee49a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

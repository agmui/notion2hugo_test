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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622JJVUSF%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLntBprxZKi2zNSWr2%2BBQ10fYd5ZLqTibgcZn8QzoCcQIgZzkEvyqm0HAVJVJA7oEez4JkfNdJMJZUQjdLdUfNHa8qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFcpaaQbVqSAH42DlSrcAwGBDbH2%2FcCZ3kvm6os3pQ94HGrgAMCmXCU4Ut9QxWMF1JoMxM6Z86V7BsLDP4TB8wiB6b85d6Xxh6ehf%2BRfIrrC8CWuzNSx56sHiJMfEUckMonOJ8kXvp%2FuTvSRbObmS0XFUMVQcxhf9QWS8qINZNlrmDsn2FtGH5UIXOTrhr%2FKATpV7%2B7C%2BgiBBBE%2FvYg6CHVPet1qcj68ZxZe%2FRoXZ3I1dJKkdlc08AZ%2FCLdwWW8rkX6oMBaUDsWqN94JEbcmntuStpeHkaV5rQOsufs%2BMgZkzHsMRaDqfvD74mQ9Itu4UmRAVafZRfxgfK8I%2FaZQUbVzHw5Q4eIrqJ%2Fjox9GhxeHjUBJN7XD8eJBdB0Vhh785ni0yQenGrtg7BMZooc%2BcT8rZKxAzsXhktDxO%2F7o9z8ZqTRmHnNxEnheooGlP8eRS9h9vGEXx%2BqnEjgJ2uFf%2FIeJ9jZGRK3GDCAN1rd7qmM%2Fx%2FtSakpWEKExIkC2NlHpvGL5UIrp%2FOFb8bWFntn7Wav46hqbO%2BOWnVJbL9vjRm2KY1OYiaxzMQzBQI0%2B4kqREv1GM0aN4%2BljOXdU262C%2F20LimcwGujVe86yy5WMcvOFTa%2Fobw2eT2V1%2BfiVyRJMNjMM25bfd04IeiqtMJau2b0GOqUBQ8kdZR%2BZ1xxDDY45AZ08DX%2FsSxy8IRZ1TNvljTIFin8Qs%2F9DmrPKNIG4bwcFBlbJmKXajvSjkwgIHW%2B8BqLsXyZIu7gN0ms8zhhSzNt5zxVzvpBdxjU4yIJBmWWbpZjluGatW5Xi7AWpGh%2B%2B1KLrN0osy19jxb%2BgAvJqTmzKjx8kzt%2FVTKj7hhzZHYVxBBm4JhaKXSEVOjzXPebzQxRk9Qk9UD9%2B&X-Amz-Signature=e4919b196774e5e8e03f52377fb334de59546ba18d850ddae41fe8461138045f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622JJVUSF%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLntBprxZKi2zNSWr2%2BBQ10fYd5ZLqTibgcZn8QzoCcQIgZzkEvyqm0HAVJVJA7oEez4JkfNdJMJZUQjdLdUfNHa8qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFcpaaQbVqSAH42DlSrcAwGBDbH2%2FcCZ3kvm6os3pQ94HGrgAMCmXCU4Ut9QxWMF1JoMxM6Z86V7BsLDP4TB8wiB6b85d6Xxh6ehf%2BRfIrrC8CWuzNSx56sHiJMfEUckMonOJ8kXvp%2FuTvSRbObmS0XFUMVQcxhf9QWS8qINZNlrmDsn2FtGH5UIXOTrhr%2FKATpV7%2B7C%2BgiBBBE%2FvYg6CHVPet1qcj68ZxZe%2FRoXZ3I1dJKkdlc08AZ%2FCLdwWW8rkX6oMBaUDsWqN94JEbcmntuStpeHkaV5rQOsufs%2BMgZkzHsMRaDqfvD74mQ9Itu4UmRAVafZRfxgfK8I%2FaZQUbVzHw5Q4eIrqJ%2Fjox9GhxeHjUBJN7XD8eJBdB0Vhh785ni0yQenGrtg7BMZooc%2BcT8rZKxAzsXhktDxO%2F7o9z8ZqTRmHnNxEnheooGlP8eRS9h9vGEXx%2BqnEjgJ2uFf%2FIeJ9jZGRK3GDCAN1rd7qmM%2Fx%2FtSakpWEKExIkC2NlHpvGL5UIrp%2FOFb8bWFntn7Wav46hqbO%2BOWnVJbL9vjRm2KY1OYiaxzMQzBQI0%2B4kqREv1GM0aN4%2BljOXdU262C%2F20LimcwGujVe86yy5WMcvOFTa%2Fobw2eT2V1%2BfiVyRJMNjMM25bfd04IeiqtMJau2b0GOqUBQ8kdZR%2BZ1xxDDY45AZ08DX%2FsSxy8IRZ1TNvljTIFin8Qs%2F9DmrPKNIG4bwcFBlbJmKXajvSjkwgIHW%2B8BqLsXyZIu7gN0ms8zhhSzNt5zxVzvpBdxjU4yIJBmWWbpZjluGatW5Xi7AWpGh%2B%2B1KLrN0osy19jxb%2BgAvJqTmzKjx8kzt%2FVTKj7hhzZHYVxBBm4JhaKXSEVOjzXPebzQxRk9Qk9UD9%2B&X-Amz-Signature=4e62a1a56c71beb305a6f46f5f77544fb9b1ebcead8e13956413b71594e6cf59&X-Amz-SignedHeaders=host&x-id=GetObject)

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

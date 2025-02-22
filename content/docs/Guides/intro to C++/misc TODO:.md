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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SX3M6JO%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T080859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUSfwU6EYZPZzme1EalyhFckvZdsXjQkBei2iKSkX3EAIhAJjFKhR9ipg%2F073IkJviIosXnaF%2B3EI5dP%2BvH9HbQhjbKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXTarNgP9LUBzuNQsq3AOk4DgwbXOQSUhqcV7PN9RF8lf70CYPVpQd7IUdPPsF94BJV1DNWpXZss0j1Ov%2F7p4Pm%2FxDLxX%2FWeRG9fXbFkmWT0xecfdDBNniRmpYg0TMJxXm5et92QqaeYeMd3yKg9smtcwRFjgairzAm71%2BejMV1a5dvaOJ%2BYZHnQtMKwD2XPqUVsifna%2F4r9SwraHJ7S6Rb3rNLUuzGrrGRPi4GsfOvzAO2NjgSyO7XepzFnUGUTMAydNQVzl3MSqu6%2FzHohz4uw8OjYeMfYDnRrrn7sAd%2BPpWFo5YXEMMoeRC8ryEvZHnFW6kiRpIuVqs3DWI3%2Fyl3JxK6qeCG2owDVyvIDG5PKoqHeLRTPmzXjLbJ6vgMZDFPazmuL8EY1T7t2aSCeFVXx73T8Llz9z%2BgfRX22ZDaqG89YF2HKaOAIGMr9N7n1FVl%2FJ2dUEK3Gndrsvr9dPZ6nVjgepzkREkjeYN8KSfYypjR4HqtwT3qLc35HDRYbkXWY%2B0aKSaRIGvKBNsgYcFRJdcKkyK%2BQwEhJrnHriSq1o1mp8jvc1AR2aLiq6AOjm%2BAq0MxRBmQ4mNDzSP6ktXny%2FZbOkcpBWvZe83goqvQMSQejNNCbxvS0DRrgxLrSG9b7pfmYnBteGXeTC7x%2BW9BjqkAZNxElYhD5TFV4afqmEZou2FrjbcxrvU%2FXeHf8n6e8yfWpIZyfl7vKRrkb34omKripnXX1xFJOyME35%2FCmCiI1TbLMrzM4YZeKIDwSEL%2FpezQ0OPVP1z2LqVdMh%2F3%2Fu9vp1IXT55yX5sM9hlq2ML7ImlcCQUcw0oDGRVggUi%2FmLddi85hggKtfcU8zqDHzN2Su66tQEpZ3BmE60tEZDOyDa3u%2FGC&X-Amz-Signature=13793375a5f241d295f71f73819b45a9e99351e765240b84c7e6c872639cb5bc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SX3M6JO%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T080859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUSfwU6EYZPZzme1EalyhFckvZdsXjQkBei2iKSkX3EAIhAJjFKhR9ipg%2F073IkJviIosXnaF%2B3EI5dP%2BvH9HbQhjbKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXTarNgP9LUBzuNQsq3AOk4DgwbXOQSUhqcV7PN9RF8lf70CYPVpQd7IUdPPsF94BJV1DNWpXZss0j1Ov%2F7p4Pm%2FxDLxX%2FWeRG9fXbFkmWT0xecfdDBNniRmpYg0TMJxXm5et92QqaeYeMd3yKg9smtcwRFjgairzAm71%2BejMV1a5dvaOJ%2BYZHnQtMKwD2XPqUVsifna%2F4r9SwraHJ7S6Rb3rNLUuzGrrGRPi4GsfOvzAO2NjgSyO7XepzFnUGUTMAydNQVzl3MSqu6%2FzHohz4uw8OjYeMfYDnRrrn7sAd%2BPpWFo5YXEMMoeRC8ryEvZHnFW6kiRpIuVqs3DWI3%2Fyl3JxK6qeCG2owDVyvIDG5PKoqHeLRTPmzXjLbJ6vgMZDFPazmuL8EY1T7t2aSCeFVXx73T8Llz9z%2BgfRX22ZDaqG89YF2HKaOAIGMr9N7n1FVl%2FJ2dUEK3Gndrsvr9dPZ6nVjgepzkREkjeYN8KSfYypjR4HqtwT3qLc35HDRYbkXWY%2B0aKSaRIGvKBNsgYcFRJdcKkyK%2BQwEhJrnHriSq1o1mp8jvc1AR2aLiq6AOjm%2BAq0MxRBmQ4mNDzSP6ktXny%2FZbOkcpBWvZe83goqvQMSQejNNCbxvS0DRrgxLrSG9b7pfmYnBteGXeTC7x%2BW9BjqkAZNxElYhD5TFV4afqmEZou2FrjbcxrvU%2FXeHf8n6e8yfWpIZyfl7vKRrkb34omKripnXX1xFJOyME35%2FCmCiI1TbLMrzM4YZeKIDwSEL%2FpezQ0OPVP1z2LqVdMh%2F3%2Fu9vp1IXT55yX5sM9hlq2ML7ImlcCQUcw0oDGRVggUi%2FmLddi85hggKtfcU8zqDHzN2Su66tQEpZ3BmE60tEZDOyDa3u%2FGC&X-Amz-Signature=c015cfa16eb21878f4f1254681d47fd6da342402a470992f4c1096ed9c429d93&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UUP4UVO%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0ABg9jakdaNsdZu7cihmiXjRQ551g1pfjkW4N%2FU5v9AiALcMcZ92ds5%2FJBSA7C7t1oX97vi%2BgdGu8geCTBFpli9SqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMphAWxSFaggrruBcuKtwDVPHiECvnD8KSlbeR9EtUPQC%2BXcltuEqToiYLtAHs03AlHVL5RjrvXZm9V9zrNFbM1N3UmL8xoydUgYOVVhpNRUopDk%2BuJA8HJYEGag0DstpSjAnRMyQugc272f8K4YVbrdjskzxxyhliChMLJXSBwFqHAgDXjzPfnHLkPzMmDtbIlwPp5Xu0LqSAfiHJpM%2BOzW%2BFCyYJ6zyeKf69549xVXscbVa5VgGc%2BpVwFbkqVYxk9dJ6FAs8zRtlk%2F74AZaZ7NZQwai9MFzQzNLsaGj0K2k6Vv2PUFgYEn5WsiOJgLptdl16hF2PNmabY39GWh57EKfrnliqrrZrFYdAXLDRyFdqPbYYLf9Isj6JtwdUXvwJ56ZyKtRp2%2BAWSqp7gD6hAABDWjEUbsHg9yp%2FWVWajc7XtdSagPmeoUm4zV5hcG1OTdGyYWAzoWit77%2Bg9RTXUbqDk8XrX9uHrHJynwr4iAg%2B5ZNkaM1pj%2F2ttRJGi1q3yAZQ98522a6dBq9eFTjaFZlWNp5XeH5YJolGTJquZHPqPVMqsn4tdFPWkix1P9GC6NdZ7mJfrbOLlUIDoBAp%2BD9e3QSozqgWs8FpbdoHjAOb4QdEvpUHo61hgABUjya11fLHqRiFOB126sgwm4rAwAY6pgEqsdbCLOMnBRf%2FESeVH3hqxoVsmBAgdVGmp4RMp%2FNOe7HGl8wC%2B38TRO0bkAhX1ipAownp9ICFIY8dX%2F2luC2AI8deQWkqrMmeOgAZ1Om0CtEaGw6RJwUCHSh7l3ZWiv6RaTp6cRYrdzaEy1oI9e%2B38jOJn6mQhPpac5R1OYJWjPvTVmILvrAl4UD5yzMXbM295zoIiMEamZcP7peGZgGZNZZhN931&X-Amz-Signature=a57a87b07d0e471275826aa0c9ccea4e77203587cf2135c6a32d6dda8bf97ddd&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UUP4UVO%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0ABg9jakdaNsdZu7cihmiXjRQ551g1pfjkW4N%2FU5v9AiALcMcZ92ds5%2FJBSA7C7t1oX97vi%2BgdGu8geCTBFpli9SqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMphAWxSFaggrruBcuKtwDVPHiECvnD8KSlbeR9EtUPQC%2BXcltuEqToiYLtAHs03AlHVL5RjrvXZm9V9zrNFbM1N3UmL8xoydUgYOVVhpNRUopDk%2BuJA8HJYEGag0DstpSjAnRMyQugc272f8K4YVbrdjskzxxyhliChMLJXSBwFqHAgDXjzPfnHLkPzMmDtbIlwPp5Xu0LqSAfiHJpM%2BOzW%2BFCyYJ6zyeKf69549xVXscbVa5VgGc%2BpVwFbkqVYxk9dJ6FAs8zRtlk%2F74AZaZ7NZQwai9MFzQzNLsaGj0K2k6Vv2PUFgYEn5WsiOJgLptdl16hF2PNmabY39GWh57EKfrnliqrrZrFYdAXLDRyFdqPbYYLf9Isj6JtwdUXvwJ56ZyKtRp2%2BAWSqp7gD6hAABDWjEUbsHg9yp%2FWVWajc7XtdSagPmeoUm4zV5hcG1OTdGyYWAzoWit77%2Bg9RTXUbqDk8XrX9uHrHJynwr4iAg%2B5ZNkaM1pj%2F2ttRJGi1q3yAZQ98522a6dBq9eFTjaFZlWNp5XeH5YJolGTJquZHPqPVMqsn4tdFPWkix1P9GC6NdZ7mJfrbOLlUIDoBAp%2BD9e3QSozqgWs8FpbdoHjAOb4QdEvpUHo61hgABUjya11fLHqRiFOB126sgwm4rAwAY6pgEqsdbCLOMnBRf%2FESeVH3hqxoVsmBAgdVGmp4RMp%2FNOe7HGl8wC%2B38TRO0bkAhX1ipAownp9ICFIY8dX%2F2luC2AI8deQWkqrMmeOgAZ1Om0CtEaGw6RJwUCHSh7l3ZWiv6RaTp6cRYrdzaEy1oI9e%2B38jOJn6mQhPpac5R1OYJWjPvTVmILvrAl4UD5yzMXbM295zoIiMEamZcP7peGZgGZNZZhN931&X-Amz-Signature=db38a1365e14a41f40f7d8612341e8971974c82ac29de8599851eac00fcd4de2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSQM7TT2%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T200938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCtCwQJHw9J1B9lXSBSviTmqB7fADRZ0R9lzTgUjVp%2F8AIhAOgtCpTWKhY96c8sZVRE%2B2e3u0lO76tWwlqNuDcvpX85KogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfpGk9oe0bu46pbRYq3APJhpjorjiLDwLHJgOhMq3nk85PRzVmBtSGNYgg3AvoyBnTmExrNvu6jG0i57qmcO88hUEMVbwSJoHW5LVVFwnR1nVZrhCbxb1KLyZ8vChM2lperj3RY38UzyIO0ctkiI9F6TBJrKjXikDTo2%2FsJdXeZMaVVQfAWkgbAYJfSsToI%2BCS5s0HxWrJMjWgHgxh8OTeo1N8m9mMp%2FmKFEQa0cMxSnS5jJxRW0Odbio4Z2nsoAvhsziCE6u3mIcJnwpQGFjdYg9KHd9J2TW6oyZ4Zac7R4aDwwmX1%2FdlqLQgAWWgXXrvssYHFn36sHXprjqp0uxVrnmxIym6UVzwuuWIgt0GE5lDDeN1gMvKDwKLtnKjWmRjvsnruBTaddzQ0btyArisUATcWKreTCHUEQ2rhA4nK396uWdNSpfOLdkItwp6pifDeFlNu3pXARIb7wwsS4Qf4VAjLveMfwybjpiI6vXBAIy%2FnSstlWoYBL%2B8%2BbSMWBQwSvEY2NmSlk8bY7D0r7tbbwEXI800EiKcwnN%2BheMJ6Cr4pwg2l7Dc8opEPlOdHAqxPVPWXIeh9Ut80zTnpQ89sgPpP3RT%2BazAMth%2Bt5cfH6kj%2FMJLuusgVvmcHBV0C0vQueJvmdCyIj64HzDD4vfBBjqkARWY4bsGbv4%2FIthppBjGdO2f8%2FkcqyZgcc5iE%2BBJJUs4JyhLF1nTvtLqpqFXN0SsRvfX5yL5JI%2B0y3EbrPJI6URTBsAY8atOH8orz2SCJojpj3Avn%2FmedtJFLKm%2F44scAW%2FvIBc7aNEogDGbpoPYzplrayB%2FX2P7JpmEzoLsBXi4Tos0hFJ6taTxJU%2BtGub3ZDfzlq9nWZCISqG%2Fiz%2Fne1Yo5MtR&X-Amz-Signature=62c21efcf7d8a1e8ea58c5d738d3669a77a6f09bb8ba7b3ea4dd47b040837294&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSQM7TT2%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T200938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCtCwQJHw9J1B9lXSBSviTmqB7fADRZ0R9lzTgUjVp%2F8AIhAOgtCpTWKhY96c8sZVRE%2B2e3u0lO76tWwlqNuDcvpX85KogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfpGk9oe0bu46pbRYq3APJhpjorjiLDwLHJgOhMq3nk85PRzVmBtSGNYgg3AvoyBnTmExrNvu6jG0i57qmcO88hUEMVbwSJoHW5LVVFwnR1nVZrhCbxb1KLyZ8vChM2lperj3RY38UzyIO0ctkiI9F6TBJrKjXikDTo2%2FsJdXeZMaVVQfAWkgbAYJfSsToI%2BCS5s0HxWrJMjWgHgxh8OTeo1N8m9mMp%2FmKFEQa0cMxSnS5jJxRW0Odbio4Z2nsoAvhsziCE6u3mIcJnwpQGFjdYg9KHd9J2TW6oyZ4Zac7R4aDwwmX1%2FdlqLQgAWWgXXrvssYHFn36sHXprjqp0uxVrnmxIym6UVzwuuWIgt0GE5lDDeN1gMvKDwKLtnKjWmRjvsnruBTaddzQ0btyArisUATcWKreTCHUEQ2rhA4nK396uWdNSpfOLdkItwp6pifDeFlNu3pXARIb7wwsS4Qf4VAjLveMfwybjpiI6vXBAIy%2FnSstlWoYBL%2B8%2BbSMWBQwSvEY2NmSlk8bY7D0r7tbbwEXI800EiKcwnN%2BheMJ6Cr4pwg2l7Dc8opEPlOdHAqxPVPWXIeh9Ut80zTnpQ89sgPpP3RT%2BazAMth%2Bt5cfH6kj%2FMJLuusgVvmcHBV0C0vQueJvmdCyIj64HzDD4vfBBjqkARWY4bsGbv4%2FIthppBjGdO2f8%2FkcqyZgcc5iE%2BBJJUs4JyhLF1nTvtLqpqFXN0SsRvfX5yL5JI%2B0y3EbrPJI6URTBsAY8atOH8orz2SCJojpj3Avn%2FmedtJFLKm%2F44scAW%2FvIBc7aNEogDGbpoPYzplrayB%2FX2P7JpmEzoLsBXi4Tos0hFJ6taTxJU%2BtGub3ZDfzlq9nWZCISqG%2Fiz%2Fne1Yo5MtR&X-Amz-Signature=9af27fd7f83bd06b248c05d751a77703a545811b5856b4d39548cedb66c62ec3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

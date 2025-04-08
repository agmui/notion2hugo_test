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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKKMOL25%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T070907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVA7bmN2G12Fb5%2FwhH9PV0Wcde5lbdPjknxQMxILR6rgIhAL5LVY88q4TZ%2BCLFlgR%2FMkdjQSt0RmqOSQpiEejD69BgKv8DCHAQABoMNjM3NDIzMTgzODA1IgxZ3fQ27YP4soClwx8q3AOl1TDbOe6qv4eutgn5gsjmB%2B1OA%2F3uSB9FCZnGyxl%2FyZkt3Xs%2FBsOOK%2FbQ0My5EU5FsKDmABk1K5uOBO%2B6Y7mDVgrqKEdJfS%2FRwwsyr6iwzHkwThNhM5JGrpmrGoJhINUeEZtRm%2B1WS3hxWDwo5%2B4kGgUD0JDKLbrnM7C8ejOn%2F8zQwHi8UdNGCyYQW%2FojOV2SjNbRUoVzhMHp9RGhYse9j3Bbbxb4lpUftss8gEmk4xc6ejltt6ppFT5tIpH82Udhimzw9UklFY34kXNGg1gmDj51xLacA56BRe4BWGhBNwM3P21lYArxyBZCljOmr87Vdb05EdfqSVfA2Dbt6lWbiLGnjYbnZJMqhrQJ3%2BypP2bJwMgcwRPronkEfL%2F40yqElbFBEz55cMZavARuCL8b39XdUYHoiVPhqr%2FYw1q%2F%2F1%2BFj7A1AixpIur4FSW%2B%2BaV3IgE8K%2Fkiib2n89vgncoqwVfKjcehwFo0jZ0MPqJf7swyqz%2F5yBqvP96GZY9ejpb%2Bq6IfN4yNjVTZ8jypZoTZb%2F%2BQRsLJroxpUUlVQtfNEuLDTCczvTS3M%2BPR2BeAYkeA1UeH4D2gUo2ZpPJtRcSttmcy%2Fc1MQViqEf9IW%2FY7jV66Ru1Z5ak1Ga0flDDKhdO%2FBjqkAdP2S6wp%2B3kUH0KSJXeWuwPnqDDBfeaI70XA48Mgd5rAJf%2F4svcvQyWqy9Yl6zb8R15A4R%2FuKcAmkUhEED7eW1qjDUimlp7jZ7pLA5%2F9%2B01d4wLGOMXXP%2Bn7sgJ4HY0UpdPgItyL5F1g9sjuunhrBLBuepIo0wDsr%2F%2F8MmC0Ly7SS0hw7QBWSQhKVJ4SkYv8Jb%2Foskf8gK4IiRCycjAbgI%2BZiakS&X-Amz-Signature=ea21d4589ff0f47c35617ce47ea473a9b4c01ae33a7b949b3cfdc262fea1823e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKKMOL25%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T070907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVA7bmN2G12Fb5%2FwhH9PV0Wcde5lbdPjknxQMxILR6rgIhAL5LVY88q4TZ%2BCLFlgR%2FMkdjQSt0RmqOSQpiEejD69BgKv8DCHAQABoMNjM3NDIzMTgzODA1IgxZ3fQ27YP4soClwx8q3AOl1TDbOe6qv4eutgn5gsjmB%2B1OA%2F3uSB9FCZnGyxl%2FyZkt3Xs%2FBsOOK%2FbQ0My5EU5FsKDmABk1K5uOBO%2B6Y7mDVgrqKEdJfS%2FRwwsyr6iwzHkwThNhM5JGrpmrGoJhINUeEZtRm%2B1WS3hxWDwo5%2B4kGgUD0JDKLbrnM7C8ejOn%2F8zQwHi8UdNGCyYQW%2FojOV2SjNbRUoVzhMHp9RGhYse9j3Bbbxb4lpUftss8gEmk4xc6ejltt6ppFT5tIpH82Udhimzw9UklFY34kXNGg1gmDj51xLacA56BRe4BWGhBNwM3P21lYArxyBZCljOmr87Vdb05EdfqSVfA2Dbt6lWbiLGnjYbnZJMqhrQJ3%2BypP2bJwMgcwRPronkEfL%2F40yqElbFBEz55cMZavARuCL8b39XdUYHoiVPhqr%2FYw1q%2F%2F1%2BFj7A1AixpIur4FSW%2B%2BaV3IgE8K%2Fkiib2n89vgncoqwVfKjcehwFo0jZ0MPqJf7swyqz%2F5yBqvP96GZY9ejpb%2Bq6IfN4yNjVTZ8jypZoTZb%2F%2BQRsLJroxpUUlVQtfNEuLDTCczvTS3M%2BPR2BeAYkeA1UeH4D2gUo2ZpPJtRcSttmcy%2Fc1MQViqEf9IW%2FY7jV66Ru1Z5ak1Ga0flDDKhdO%2FBjqkAdP2S6wp%2B3kUH0KSJXeWuwPnqDDBfeaI70XA48Mgd5rAJf%2F4svcvQyWqy9Yl6zb8R15A4R%2FuKcAmkUhEED7eW1qjDUimlp7jZ7pLA5%2F9%2B01d4wLGOMXXP%2Bn7sgJ4HY0UpdPgItyL5F1g9sjuunhrBLBuepIo0wDsr%2F%2F8MmC0Ly7SS0hw7QBWSQhKVJ4SkYv8Jb%2Foskf8gK4IiRCycjAbgI%2BZiakS&X-Amz-Signature=96d413e7b0348bb62edcca18cb7e0f72a3a9be5141360c1c873c4ae3e1ecbe31&X-Amz-SignedHeaders=host&x-id=GetObject)

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

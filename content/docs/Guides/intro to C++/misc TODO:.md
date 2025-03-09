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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ6BSACU%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T030810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIGpcMNIKX5NhZvnsr%2BO2Kx3m4s7ih%2B%2BBJBUIcvaRa8K4AiAxRHxVX2M8u%2FkzV%2BbOmbnN32X7zvbItmVSqny2s2e6nir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMM7OtDMhP6t9%2BPlnqKtwDWHrdrSA4Gy6DcLwT6JQQZC9lrDlo%2Fm8Zw%2FxkQVSEWBQM1VhTgmURgzCJXgrqPgTK%2FjCXwr%2Bm0RZM%2BqFYibEg9Xsz%2BZNqbxF430FEd4j7TIr7aQ3rS8zmoyKH7SIKZRyfyYx0MZFV943pZm1uj2PpiVTq%2BrSVdWprdPChizbcJBDgBpxkKVK9lkG6JSmsStGSLmjyBcFaZCY%2FbiLrZwRxiYaxmaqxpCFBnxbrWu6CjG1pbckiwpTSp4OT0BBWNQF79q4%2FM4IK632VM6QXygICdASgaHDLaup%2Btf4pISMCjdcrXmk0O4TkgxBS7buD%2BVCLPWWXEv%2FX3cI8v7zqkrbyN8z1hej5w6mj6%2FdA7rm3M1f4Xd9lEOjkJblI%2FmjCGXW7300cVEYtanIrGY236AFFIjXH735zslDPlbBuxHUKQVK4G2SYaPet9aH%2BRpe7TR58c8Az3tWDnFiNYCE4m8zXn2t5kX%2BzlM6iqTtH0TJ4jyMcaKQbL8NmvgFF9KiU0xGRI2JpUOHoVE6wrhbjItCXyFK9ivE%2BapNJJd0alYNbjNqS8LTZVY5qu7JIcFMrOPXUbptZdoqq6VbQXnFpDy9k0opxMMthLiFI%2Frewnhj7JCM771EMrxaKmJA3xT0w%2B4q0vgY6pgHl8llV2ST6dGpgsioe49gRYGuoo83QDwXiTO4yQA%2B10Orr%2FrQJQuqGJzPJr3qVeziXE3tc2%2Bp9qfJjyc83DW15r4zMHYGwjs5Hx3sm99hGzLQ5pNGDg2zQftx%2F4rjUC5%2FsfIuU2Rss4FhPerGEoHqcyrqLXAzSCePr4nI2xL4vjaKWjckS1m4p2SGk8RXlLU8peZkbuaTB%2B5s7mDgGsfOrW%2F7rKCbv&X-Amz-Signature=18331dd98d2a880a25119035af0a3f97c234fc4fce437ee34e6f97514d990f13&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ6BSACU%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T030810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIGpcMNIKX5NhZvnsr%2BO2Kx3m4s7ih%2B%2BBJBUIcvaRa8K4AiAxRHxVX2M8u%2FkzV%2BbOmbnN32X7zvbItmVSqny2s2e6nir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMM7OtDMhP6t9%2BPlnqKtwDWHrdrSA4Gy6DcLwT6JQQZC9lrDlo%2Fm8Zw%2FxkQVSEWBQM1VhTgmURgzCJXgrqPgTK%2FjCXwr%2Bm0RZM%2BqFYibEg9Xsz%2BZNqbxF430FEd4j7TIr7aQ3rS8zmoyKH7SIKZRyfyYx0MZFV943pZm1uj2PpiVTq%2BrSVdWprdPChizbcJBDgBpxkKVK9lkG6JSmsStGSLmjyBcFaZCY%2FbiLrZwRxiYaxmaqxpCFBnxbrWu6CjG1pbckiwpTSp4OT0BBWNQF79q4%2FM4IK632VM6QXygICdASgaHDLaup%2Btf4pISMCjdcrXmk0O4TkgxBS7buD%2BVCLPWWXEv%2FX3cI8v7zqkrbyN8z1hej5w6mj6%2FdA7rm3M1f4Xd9lEOjkJblI%2FmjCGXW7300cVEYtanIrGY236AFFIjXH735zslDPlbBuxHUKQVK4G2SYaPet9aH%2BRpe7TR58c8Az3tWDnFiNYCE4m8zXn2t5kX%2BzlM6iqTtH0TJ4jyMcaKQbL8NmvgFF9KiU0xGRI2JpUOHoVE6wrhbjItCXyFK9ivE%2BapNJJd0alYNbjNqS8LTZVY5qu7JIcFMrOPXUbptZdoqq6VbQXnFpDy9k0opxMMthLiFI%2Frewnhj7JCM771EMrxaKmJA3xT0w%2B4q0vgY6pgHl8llV2ST6dGpgsioe49gRYGuoo83QDwXiTO4yQA%2B10Orr%2FrQJQuqGJzPJr3qVeziXE3tc2%2Bp9qfJjyc83DW15r4zMHYGwjs5Hx3sm99hGzLQ5pNGDg2zQftx%2F4rjUC5%2FsfIuU2Rss4FhPerGEoHqcyrqLXAzSCePr4nI2xL4vjaKWjckS1m4p2SGk8RXlLU8peZkbuaTB%2B5s7mDgGsfOrW%2F7rKCbv&X-Amz-Signature=9568ff0db8ba1d4cc12ba6de9de66e689630f5747d5bf1223533da0db18ec77d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

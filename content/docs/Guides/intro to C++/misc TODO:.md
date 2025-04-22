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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GDQOF4S%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T110736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQC5m5RkQW%2FcTF6F1Q%2B5cW9Nmq0Q38suqIotHzbxo0VGMwIhANwUhHHgyM9%2FwzixZj1tnyBuXx%2BjFVir8224IpaptzkqKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXouAhv8zDc6pixosq3ANvH%2BQ0L4vaiJoxlYW8vbDnZI%2BfhLU5lqvZ7u4Q2xCkiJuvfNRakyqhROV1tRb8ipSjAEbUdeI5D9IxXeoWjvhTJlrDzArUJKn2l7tCl7VmI6DBnXjBHWP0%2BzrOGyykuJ5klonpGv%2F0eVuHB3ItUxBLRiEIdNkZ2LIdp34zZhwdSfIWs4%2BDHA8s0PhZVw9g2PMZ1OCMrwI7rdD15JJZ8pr4F2YS8jcvOpw6QWiBy6bTl%2Bh2ZyjsiD3E6s0RXJ%2BDxB6mqbgmhAbp%2BeKU7BcslYPxdbkXbO7Ql0jkLrXBFPAFqAQ2u4ZZT7Svg5O1Wd69SJVt34%2FKoqRQyWQG8KnndbUlvbvSyNfZZM7ipPBze1O172urth0O6UD9yP%2FvSQE79xRTkqA%2Bug0Kvi5B6cJq%2B054LHQIyoXGFH1SclVf2022is1LGngMF6IvWtgFRLhwSNHf1xRdLGEbdnrkPvgr%2FjK7rFBDGJCpqdrrklKtOYkhjBJlJPGlhrALvlTm5lI7DpmSZFGdYEci72jbWn9Qb6wKYg1vd5TWfROdNJZnTH0zu3xGfg3gnwZVgUAGkNO8Al7S6kC5oocX44Y2Gsxr%2BGpHwz4WF9tjsp0z5oY1wnmwl3VM1ernlG9MI4cs9TCVwp3ABjqkAYDrkRUOrHxlboc1Q4Qw3P2XqktlBJyo1eMCnHhSUamJI3SQuCWwn4ca3jBJq30Ni8eXgE9Zduto0MKTDR5WN2cZd0iJrA3wVuk0IES1Vmqb%2BOWhwHriW556LVfKuNQmVvK%2B0ralkPdMGmIjJU4UuS%2Fiammh2mcVsOMCn9w%2FTtVbz6Ye8qz71U1rOgSLC1JCR9rSfSf%2BVIYjXDjOBQ2n9ZNusjbP&X-Amz-Signature=e9a8e433db6bd59d283ae8fc3d4c5aa26a1e955be49b945ac01e761ee645dcf9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GDQOF4S%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T110736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQC5m5RkQW%2FcTF6F1Q%2B5cW9Nmq0Q38suqIotHzbxo0VGMwIhANwUhHHgyM9%2FwzixZj1tnyBuXx%2BjFVir8224IpaptzkqKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXouAhv8zDc6pixosq3ANvH%2BQ0L4vaiJoxlYW8vbDnZI%2BfhLU5lqvZ7u4Q2xCkiJuvfNRakyqhROV1tRb8ipSjAEbUdeI5D9IxXeoWjvhTJlrDzArUJKn2l7tCl7VmI6DBnXjBHWP0%2BzrOGyykuJ5klonpGv%2F0eVuHB3ItUxBLRiEIdNkZ2LIdp34zZhwdSfIWs4%2BDHA8s0PhZVw9g2PMZ1OCMrwI7rdD15JJZ8pr4F2YS8jcvOpw6QWiBy6bTl%2Bh2ZyjsiD3E6s0RXJ%2BDxB6mqbgmhAbp%2BeKU7BcslYPxdbkXbO7Ql0jkLrXBFPAFqAQ2u4ZZT7Svg5O1Wd69SJVt34%2FKoqRQyWQG8KnndbUlvbvSyNfZZM7ipPBze1O172urth0O6UD9yP%2FvSQE79xRTkqA%2Bug0Kvi5B6cJq%2B054LHQIyoXGFH1SclVf2022is1LGngMF6IvWtgFRLhwSNHf1xRdLGEbdnrkPvgr%2FjK7rFBDGJCpqdrrklKtOYkhjBJlJPGlhrALvlTm5lI7DpmSZFGdYEci72jbWn9Qb6wKYg1vd5TWfROdNJZnTH0zu3xGfg3gnwZVgUAGkNO8Al7S6kC5oocX44Y2Gsxr%2BGpHwz4WF9tjsp0z5oY1wnmwl3VM1ernlG9MI4cs9TCVwp3ABjqkAYDrkRUOrHxlboc1Q4Qw3P2XqktlBJyo1eMCnHhSUamJI3SQuCWwn4ca3jBJq30Ni8eXgE9Zduto0MKTDR5WN2cZd0iJrA3wVuk0IES1Vmqb%2BOWhwHriW556LVfKuNQmVvK%2B0ralkPdMGmIjJU4UuS%2Fiammh2mcVsOMCn9w%2FTtVbz6Ye8qz71U1rOgSLC1JCR9rSfSf%2BVIYjXDjOBQ2n9ZNusjbP&X-Amz-Signature=d3502172a0c2e33c5fbce9686b53443758331e91f7e39955aa08e78094295f61&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NOT4RGG%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T210802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9%2BlvbocBdG%2BzRaHBjq2jchvQ5yj%2BD%2BIerSkQHk0DeuAiEA99pvtzcjRfMIvoounnkKkLsCZqociR40uhCl6bxdbMMqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAo8fp2n7Y3nGOdACrcA1Hzpk2kn01EV0e6hPvDwhNIYiEiCYNvcI%2BQTAjU0%2F7UoMyD6bJ8UebkxQKfZD4%2Fl7Ak4QjwaBlQsAysBA6iXQ16tiiDfJiQuPLy6za89Unq35ezPZhtlzDNjD0d4v9v5aEmEPb5L9d2BYhtzyRo7917ustJ1JWN%2BVk0M1LF9%2BzJVOFLaVe42W1QBVWGoPPtB7dSEFDNssdt47MiEeiMUd4E6tmcRfIj4Y9aDRDCugMfFDegfllzGRto7hrtY4ZyjSvH%2FEzheJ8X0ap%2F%2FQHnakNPCnCqm5lDm4cRsgjV4xB0ZkXDj6iIQfUG3Ll5IZFbhttXT4okUvxKg6c9f7sAhw0CWB2fP01w3bMm7IKnmF%2FLk81CoiWY6mIjx06iuFiJkjYLI%2Fe3HVSC%2FsduuO%2FYQQ4nxuzvhpZL4XRADFlk3zTCxqrN4KTVBziUcW%2Bnybq8LqlYBSTv1JxY9sTb1%2BsLkt9BvlB2cwT31OIphJXVq1remNu5Tpg2VGI5lREZObRWu%2B3szta3XY%2BSwfIVo4na56nM4N%2BJdo0hCTJ%2FAmedcXApVkP38MbDzvWTEqEF8b8ZCxoBHUCadaMWmnjEWAMeiQP9OGDjdlocPlnn7zc%2BdvV0C4%2BprZ0HZbOO82soMLLFzMIGOqUBsLZYTy79RhyHn6qH%2BBxocZvLLkxaIUaaA09eIBzxVj31zn%2Fbz1wj2RJA1UKmBJ39dVNe5wGyoznlhUcQ5pFJiW%2BZ%2FsQ4yxHyeIbNvx2dJ%2BzjVUr3%2BvYUZg1n%2BBo3tu1FWf%2B1zzy%2B5526xxa9NH6cJzFybWOCs4p38f2DwAtIVvY4egzxMKMzC0a%2FHO6hv0zwyPQWDBx8LO%2FkEq8K74Z7CS3eTvA2&X-Amz-Signature=1363b9c8a1c30624153705da80b4798ccd2ba954d2fdffff9dac19e9d814cb8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NOT4RGG%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T210802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9%2BlvbocBdG%2BzRaHBjq2jchvQ5yj%2BD%2BIerSkQHk0DeuAiEA99pvtzcjRfMIvoounnkKkLsCZqociR40uhCl6bxdbMMqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAo8fp2n7Y3nGOdACrcA1Hzpk2kn01EV0e6hPvDwhNIYiEiCYNvcI%2BQTAjU0%2F7UoMyD6bJ8UebkxQKfZD4%2Fl7Ak4QjwaBlQsAysBA6iXQ16tiiDfJiQuPLy6za89Unq35ezPZhtlzDNjD0d4v9v5aEmEPb5L9d2BYhtzyRo7917ustJ1JWN%2BVk0M1LF9%2BzJVOFLaVe42W1QBVWGoPPtB7dSEFDNssdt47MiEeiMUd4E6tmcRfIj4Y9aDRDCugMfFDegfllzGRto7hrtY4ZyjSvH%2FEzheJ8X0ap%2F%2FQHnakNPCnCqm5lDm4cRsgjV4xB0ZkXDj6iIQfUG3Ll5IZFbhttXT4okUvxKg6c9f7sAhw0CWB2fP01w3bMm7IKnmF%2FLk81CoiWY6mIjx06iuFiJkjYLI%2Fe3HVSC%2FsduuO%2FYQQ4nxuzvhpZL4XRADFlk3zTCxqrN4KTVBziUcW%2Bnybq8LqlYBSTv1JxY9sTb1%2BsLkt9BvlB2cwT31OIphJXVq1remNu5Tpg2VGI5lREZObRWu%2B3szta3XY%2BSwfIVo4na56nM4N%2BJdo0hCTJ%2FAmedcXApVkP38MbDzvWTEqEF8b8ZCxoBHUCadaMWmnjEWAMeiQP9OGDjdlocPlnn7zc%2BdvV0C4%2BprZ0HZbOO82soMLLFzMIGOqUBsLZYTy79RhyHn6qH%2BBxocZvLLkxaIUaaA09eIBzxVj31zn%2Fbz1wj2RJA1UKmBJ39dVNe5wGyoznlhUcQ5pFJiW%2BZ%2FsQ4yxHyeIbNvx2dJ%2BzjVUr3%2BvYUZg1n%2BBo3tu1FWf%2B1zzy%2B5526xxa9NH6cJzFybWOCs4p38f2DwAtIVvY4egzxMKMzC0a%2FHO6hv0zwyPQWDBx8LO%2FkEq8K74Z7CS3eTvA2&X-Amz-Signature=e1ddd53836f693c0a3735a7d05da5594713ba0b12a3e2ac66e877be50830df59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

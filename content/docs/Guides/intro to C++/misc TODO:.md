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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466326YDWXU%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T220249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCdKNrvMJzFQVA3CkHPzJzaanFzUt8k2Orm3Wm%2B5WAT5AIgAaL092s6yO9b%2BZmUZDyRVLiHxSMSXEI%2BW%2B8SEv7Ra9oq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOEBvWgC1AoVx0VyRSrcA7alQkRNol56IjBBncVLmyG%2FYElJDvnMq6RgdLVrLx5fyeFYuPDiFvBCyOGfTjeWIU6Vq1NBPALd%2FDO35zexUn25PJu%2BDF6fLj3x%2BRt%2B7mii6ieGcHMMsprQSwH7pS%2Be367G6WUgU59yFehZ6IO9XvLDSrz5zSW30ez2mNp%2FpK6RspdGBQXHGoeMD%2FVZ5bPHGeCtqDSZ0D6J%2FTInVq8nS1C6jz44c4586L3wMCUbA48WeaZt1ONQrGhq0nrybBccz%2B%2Fq6QOdZoa9u79iWv6NmbnPyRYIsfpQ0Qs%2FyypFCkKX28g0bfE1hVj9ZRquPd3UB55RmtEE0wswKKdp6gFiSDqDry9NllrCSdpAP24qY5ceBYVdxq%2B6xa%2FlmHPI0WY73Ct6oBhrDGBFFeYxtmGrd3UZPh0jnYYtEVFd2kdqSqvULoMZlV7Gtslg11Y3hM4MZbAGbdolxfoy0Pt1rhqUGJWyDKCCx9PVSxJfkM1tGRv1yQo02rcGiEX9EoM9RVvMZ6Y2EaWr6KdO2DHfKywC1eL8ECQA46xMKSICh9lpINqmcfUX2AJMn8of%2Fm9hKMTTJaiwIF5D1gUvy%2FN4kODzQYMxbzpOK8qIi%2FFu1k3Hh7r5lJ4xmmdu15KQ5fitMNSkyb0GOqUBEEtjPRcWl1uBqgDuIy2GYvTTAzdYjm0QJ7oKZhN0Br8p%2BZCRKGDVWhr4FbnMoSc3mTmYBRjqETQIPcATHeDQUpaURpfqFJcXHATDMpdEj2EPKW8v34Oe%2BiURK68l9Ael%2F8PiIrFWv%2B2E7UdHO6VTV1HZibBDjvwx61fyde3F2j3cISI8vve79w9l5E1q2fyp1zUZCuPHopfcVWONe%2BWcdxkSVMY5&X-Amz-Signature=b888fe40522ca6a303ad6285ea4291737441d3512001506efc677b1fb982a18d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466326YDWXU%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T220249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCdKNrvMJzFQVA3CkHPzJzaanFzUt8k2Orm3Wm%2B5WAT5AIgAaL092s6yO9b%2BZmUZDyRVLiHxSMSXEI%2BW%2B8SEv7Ra9oq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOEBvWgC1AoVx0VyRSrcA7alQkRNol56IjBBncVLmyG%2FYElJDvnMq6RgdLVrLx5fyeFYuPDiFvBCyOGfTjeWIU6Vq1NBPALd%2FDO35zexUn25PJu%2BDF6fLj3x%2BRt%2B7mii6ieGcHMMsprQSwH7pS%2Be367G6WUgU59yFehZ6IO9XvLDSrz5zSW30ez2mNp%2FpK6RspdGBQXHGoeMD%2FVZ5bPHGeCtqDSZ0D6J%2FTInVq8nS1C6jz44c4586L3wMCUbA48WeaZt1ONQrGhq0nrybBccz%2B%2Fq6QOdZoa9u79iWv6NmbnPyRYIsfpQ0Qs%2FyypFCkKX28g0bfE1hVj9ZRquPd3UB55RmtEE0wswKKdp6gFiSDqDry9NllrCSdpAP24qY5ceBYVdxq%2B6xa%2FlmHPI0WY73Ct6oBhrDGBFFeYxtmGrd3UZPh0jnYYtEVFd2kdqSqvULoMZlV7Gtslg11Y3hM4MZbAGbdolxfoy0Pt1rhqUGJWyDKCCx9PVSxJfkM1tGRv1yQo02rcGiEX9EoM9RVvMZ6Y2EaWr6KdO2DHfKywC1eL8ECQA46xMKSICh9lpINqmcfUX2AJMn8of%2Fm9hKMTTJaiwIF5D1gUvy%2FN4kODzQYMxbzpOK8qIi%2FFu1k3Hh7r5lJ4xmmdu15KQ5fitMNSkyb0GOqUBEEtjPRcWl1uBqgDuIy2GYvTTAzdYjm0QJ7oKZhN0Br8p%2BZCRKGDVWhr4FbnMoSc3mTmYBRjqETQIPcATHeDQUpaURpfqFJcXHATDMpdEj2EPKW8v34Oe%2BiURK68l9Ael%2F8PiIrFWv%2B2E7UdHO6VTV1HZibBDjvwx61fyde3F2j3cISI8vve79w9l5E1q2fyp1zUZCuPHopfcVWONe%2BWcdxkSVMY5&X-Amz-Signature=1f21380e53c74c46b66a83b0b771d551c621ddae5a84bfe1c7862c7e88a5153b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

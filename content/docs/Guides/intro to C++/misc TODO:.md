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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HBITETQ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbrH8P4mM7Iq8TUGCsQXVkYJu7MQM9HgK0KsnHufl2MAIgIYG3WcodksacS9c1UvN193Y9485fQJW7iecz6JpKpAoq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDKOQv7nVes1VARMTbCrcAzVdnjwq54Ay7fhDI8d2WlPw%2BZ7kCSDDJ1cW3%2Fuu6mQn1lP77AgC%2BQ%2BKYZH4f0EztxszSaghRuQ9chCo7cgZY4Jl7e12AKj4V1ZccaZ8Mzi235Q3jDLy5qEwslKOIXP8adMSoMRlk7HXslbjagOTxx1Pygvp%2F1BBIvhpEYZRg5Ny6K5fazvWY%2BdjDPKVKFglQg3P1HzBcUqI5bA5%2FObB6TW%2BJ2s2CiG5tomeUuHnngijWDtbAou70s6HtDhrYI5hXMYqeZlWwtKAmS8F%2F3CLJMg1oMRmrnoNV3VlzhecP5RnNb4v00qkfZ7P2OZ0ZR%2FjNKiJ3GDY8L3ig6iqjNQyd3FiwW0wFIBc9BmlVa2g%2FF9o302K5VaXam544X%2FPbBU8KHLaDJUvsx4ODAuOsOQ8IvOpNt5saVeQ%2FcwmOQEInAUY1IFz6KXJ38G2Zsb9kK1dGpMfjEEf2Im6VRBgboxwTx9fQY2RvajOBMxEWG20qN99DKox2Pcahp8d1ZyaVAW1Caqwb65wtZXGjH41Lef1sGiOEgPcdPjDS%2FDCxhz7Go%2FvWLCg4cYlnQ4YDcB7%2BDbq%2BXoafYfGRGSazJm8fifFiXpnNXeh0z8HcdUiq%2FDZF0uXCkIhzzVsTaLFCV8XMJzlir8GOqUBgqdRX%2BlpA2WQKxy%2BECAKEd66ZCYd%2FFUL18WNm1l%2FaWLkjW2X4OrhmpF2MjCeBq4S3tXy%2Bvkjtz6Cw53ni9O4zP9v%2B3ylpFljyLeFHOaq2QWjiLWc5zMjXwXeP477mZ2qn0bwwqDa2k5%2BGbkZ68H8otV6V5%2F5TBXkBhMfG5QbXVyr5yYkKT9rsfLEOE%2Fo0BaUBkSBHNgZ6yjc4rbz28RGliYIMG0l&X-Amz-Signature=c17f7bb1d19493917b31b518d06b40b505b09022a74fae76b3243143f09ce720&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HBITETQ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbrH8P4mM7Iq8TUGCsQXVkYJu7MQM9HgK0KsnHufl2MAIgIYG3WcodksacS9c1UvN193Y9485fQJW7iecz6JpKpAoq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDKOQv7nVes1VARMTbCrcAzVdnjwq54Ay7fhDI8d2WlPw%2BZ7kCSDDJ1cW3%2Fuu6mQn1lP77AgC%2BQ%2BKYZH4f0EztxszSaghRuQ9chCo7cgZY4Jl7e12AKj4V1ZccaZ8Mzi235Q3jDLy5qEwslKOIXP8adMSoMRlk7HXslbjagOTxx1Pygvp%2F1BBIvhpEYZRg5Ny6K5fazvWY%2BdjDPKVKFglQg3P1HzBcUqI5bA5%2FObB6TW%2BJ2s2CiG5tomeUuHnngijWDtbAou70s6HtDhrYI5hXMYqeZlWwtKAmS8F%2F3CLJMg1oMRmrnoNV3VlzhecP5RnNb4v00qkfZ7P2OZ0ZR%2FjNKiJ3GDY8L3ig6iqjNQyd3FiwW0wFIBc9BmlVa2g%2FF9o302K5VaXam544X%2FPbBU8KHLaDJUvsx4ODAuOsOQ8IvOpNt5saVeQ%2FcwmOQEInAUY1IFz6KXJ38G2Zsb9kK1dGpMfjEEf2Im6VRBgboxwTx9fQY2RvajOBMxEWG20qN99DKox2Pcahp8d1ZyaVAW1Caqwb65wtZXGjH41Lef1sGiOEgPcdPjDS%2FDCxhz7Go%2FvWLCg4cYlnQ4YDcB7%2BDbq%2BXoafYfGRGSazJm8fifFiXpnNXeh0z8HcdUiq%2FDZF0uXCkIhzzVsTaLFCV8XMJzlir8GOqUBgqdRX%2BlpA2WQKxy%2BECAKEd66ZCYd%2FFUL18WNm1l%2FaWLkjW2X4OrhmpF2MjCeBq4S3tXy%2Bvkjtz6Cw53ni9O4zP9v%2B3ylpFljyLeFHOaq2QWjiLWc5zMjXwXeP477mZ2qn0bwwqDa2k5%2BGbkZ68H8otV6V5%2F5TBXkBhMfG5QbXVyr5yYkKT9rsfLEOE%2Fo0BaUBkSBHNgZ6yjc4rbz28RGliYIMG0l&X-Amz-Signature=fa946cf4225f38073bd4cf32645751f220e69521a975f0d5d421048cc764cc15&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IIT4OJ5%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICX4o%2FLuOuC%2FuqEI7abY1a9zksEOTSY2Rm1pYkJBQYviAiEAzIUgKKdqQcOvm3yR0Paxn%2BXDjP6EuiZcn%2BqilrLLcu8q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDBSJ7n3t9C5sZ3zo2ircA6fDWqivFsYGWhMImpi3B7PGjusbl8z0njKFg3IXlW7CrZOIY%2BjvRTZPCnYN8gLNeRbtbjUmjeYwRIHl%2FZnDfDhGmAQ93vuFXbJo16AmIys%2FIj6sqB1tWZBVH9xdiwUCjBThsZzZIDEBJf7uv17phoHSHdLqzf9J7dSHnPsmjwP%2BfXpAnjFACLl%2B3fUCjg4BeJgE272XsNVgrC%2B0R3lAwjWdtitTFWE3F3W3Vj6RmiPsGhiEfXhx0EKn2JJrpuUrDJPvH9lkI3L5JoigYQVR2F%2B2gVlYSJ97Cbu2NFx6WUz6%2BD0hcy3J5vnD%2BHwRlXf4MnXuuVXrPU8Df01nEGG0pa%2B3Zd39%2FV8OLz78bBJf%2Bay6ZMxKTy4vaEER5%2BUQVJPZeT78uJFO2818G1BeIy3NSsL0%2FXnEJkFeaFvlJ1kUsTPjnD6yTnQ%2BnTk2jnNd8MKczuwwVAB9dWz7AT0Umoa6cdpo1v7vbii8aaJgVtlLCRGrT7zhVPU9MDn9M5Ghs4PFG26cKVdz2vYMKj%2FFCH3AimCpZZsD2DFWbiw%2BUkZqvO4xHgs0VOXKz3mehnkwWDFhuhvR2kB5rrM5JTYy2aiJFKOoqWyf3YUMqhW6u4RDbUb6q9GOVPXt2BtTp4XIMJuj4r4GOqUBrWpV1Dxst9g%2BTpgU8HpKKUPvVyamuqiDnKHmMdRVvnvCxelp7RIBwgn7Z4layvKUKw9Da3Xq2V%2F3Li6JQ9sSvc4ZoLAsMLeeS%2FvOvWrhWnKmE1J4qFp3P8HiMd81uj8MBpRRudN9zWwCU1bg2tRdaSc8G2gI4klupHF1n5CSvpKFa2EFkRtrdd2MsbuXBuWB9wu37ZK5ddgJPoTiqkXR2987N0w8&X-Amz-Signature=b3c5497bfdeee9ca6f6d3e6dfd2bd1208be81f99e8e73c71fc3da750fb1e17dd&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IIT4OJ5%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICX4o%2FLuOuC%2FuqEI7abY1a9zksEOTSY2Rm1pYkJBQYviAiEAzIUgKKdqQcOvm3yR0Paxn%2BXDjP6EuiZcn%2BqilrLLcu8q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDBSJ7n3t9C5sZ3zo2ircA6fDWqivFsYGWhMImpi3B7PGjusbl8z0njKFg3IXlW7CrZOIY%2BjvRTZPCnYN8gLNeRbtbjUmjeYwRIHl%2FZnDfDhGmAQ93vuFXbJo16AmIys%2FIj6sqB1tWZBVH9xdiwUCjBThsZzZIDEBJf7uv17phoHSHdLqzf9J7dSHnPsmjwP%2BfXpAnjFACLl%2B3fUCjg4BeJgE272XsNVgrC%2B0R3lAwjWdtitTFWE3F3W3Vj6RmiPsGhiEfXhx0EKn2JJrpuUrDJPvH9lkI3L5JoigYQVR2F%2B2gVlYSJ97Cbu2NFx6WUz6%2BD0hcy3J5vnD%2BHwRlXf4MnXuuVXrPU8Df01nEGG0pa%2B3Zd39%2FV8OLz78bBJf%2Bay6ZMxKTy4vaEER5%2BUQVJPZeT78uJFO2818G1BeIy3NSsL0%2FXnEJkFeaFvlJ1kUsTPjnD6yTnQ%2BnTk2jnNd8MKczuwwVAB9dWz7AT0Umoa6cdpo1v7vbii8aaJgVtlLCRGrT7zhVPU9MDn9M5Ghs4PFG26cKVdz2vYMKj%2FFCH3AimCpZZsD2DFWbiw%2BUkZqvO4xHgs0VOXKz3mehnkwWDFhuhvR2kB5rrM5JTYy2aiJFKOoqWyf3YUMqhW6u4RDbUb6q9GOVPXt2BtTp4XIMJuj4r4GOqUBrWpV1Dxst9g%2BTpgU8HpKKUPvVyamuqiDnKHmMdRVvnvCxelp7RIBwgn7Z4layvKUKw9Da3Xq2V%2F3Li6JQ9sSvc4ZoLAsMLeeS%2FvOvWrhWnKmE1J4qFp3P8HiMd81uj8MBpRRudN9zWwCU1bg2tRdaSc8G2gI4klupHF1n5CSvpKFa2EFkRtrdd2MsbuXBuWB9wu37ZK5ddgJPoTiqkXR2987N0w8&X-Amz-Signature=3d57b6fc87acd6f9f6be989785bfa7c6e46849a1ed54f380022030d0b0078111&X-Amz-SignedHeaders=host&x-id=GetObject)

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

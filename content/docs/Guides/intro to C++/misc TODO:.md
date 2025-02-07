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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XYOVOQC%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T081032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIDRgK%2FLB0x%2F4WSi1bKWPWctnjQ%2B%2FZoUAZXtZcByuVxzeAiEAtuFuoqTzmkV9SUbOzgDl0O3XYHOJiXwzl0C8jCieWEQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDGGxoQdP4dKk39MCQircA0Vohvxiq7T2bWgotUDXdNTIwm1segkPH9BOSNtzaszTvwX%2Fsp6QJmL9dMQAfl%2FUY5saOAVf5f9ixLtmLVnVRJeRObXugpmKnwXH8ikAYMVCEw7%2B%2FkP9iXpXVkQ7Ppd9kg4NycHdRF2kJo6qTq2mYSNBPCx5f1L7ZJD8HJHRmmNOYbIE8UUx7%2F4OhD%2FH0coLzDH5tYtxT5UYRJeru%2Fvu6V8DuNU%2BY89kPJe2Hq8MXdHy80FaAv31BSw5Opa6b2gcJ2AekFQziZHfzPLr6e1nfq8lqzBLvepQKKzNTOLsZthEa4B6GpvY8qT8Jy3zewEp0bDFIX%2BCZMVrSwF7kG3GQkGe9xucKc0k%2FmvY1CuKzLUg%2BxmbsDCB8%2B1s0im2kqlUQ7FlEIVJNSbEp9%2BlsADSav9PGZrjxyFRBu45LmRif3usswf4G5bATj3b9JutDTDeT%2BZfj8xxwz3D0YjKALMz5GNW%2BwHqA9BsbI7%2BPHfQ9iPePFhj02nxW9TsgbgWpROienonwjMGn5cwdbBtyV7dOdupxnOzoZT4SyELkANWJGSL1qRZWJ5QrJi%2Fan48%2BJ0XxyTv8eEWdetNAy%2FPvUMZic9I5hOrW6kZTfhKDr4aRX8LFO1BgbwLLziTjM8rMMH7lr0GOqUBqh2MJN0vgwuRD62l1T%2FzbIfz0R89do1Q2Njtb%2FASvvNdt6Qnsr3c6Dntpdrlqc3VbuEYiZWVkX1UYRVoKidXhywf7PFiENOxmT0etUquz42n1YZ9YPcPiSG58w8GTdQX9pyKP83FQ4IXzg4ox8b%2FUnKRxbTGBs3jBeVMXtghrZPs%2B20U3DSueyLB3GYQ0azdtAW1vPm04nvpMN7H%2FeApaPL5RBVh&X-Amz-Signature=516f00ef282e2a51e444ae03db154ae4b55998f2572128669d480b1a7cf37cc2&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XYOVOQC%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T081032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIDRgK%2FLB0x%2F4WSi1bKWPWctnjQ%2B%2FZoUAZXtZcByuVxzeAiEAtuFuoqTzmkV9SUbOzgDl0O3XYHOJiXwzl0C8jCieWEQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDGGxoQdP4dKk39MCQircA0Vohvxiq7T2bWgotUDXdNTIwm1segkPH9BOSNtzaszTvwX%2Fsp6QJmL9dMQAfl%2FUY5saOAVf5f9ixLtmLVnVRJeRObXugpmKnwXH8ikAYMVCEw7%2B%2FkP9iXpXVkQ7Ppd9kg4NycHdRF2kJo6qTq2mYSNBPCx5f1L7ZJD8HJHRmmNOYbIE8UUx7%2F4OhD%2FH0coLzDH5tYtxT5UYRJeru%2Fvu6V8DuNU%2BY89kPJe2Hq8MXdHy80FaAv31BSw5Opa6b2gcJ2AekFQziZHfzPLr6e1nfq8lqzBLvepQKKzNTOLsZthEa4B6GpvY8qT8Jy3zewEp0bDFIX%2BCZMVrSwF7kG3GQkGe9xucKc0k%2FmvY1CuKzLUg%2BxmbsDCB8%2B1s0im2kqlUQ7FlEIVJNSbEp9%2BlsADSav9PGZrjxyFRBu45LmRif3usswf4G5bATj3b9JutDTDeT%2BZfj8xxwz3D0YjKALMz5GNW%2BwHqA9BsbI7%2BPHfQ9iPePFhj02nxW9TsgbgWpROienonwjMGn5cwdbBtyV7dOdupxnOzoZT4SyELkANWJGSL1qRZWJ5QrJi%2Fan48%2BJ0XxyTv8eEWdetNAy%2FPvUMZic9I5hOrW6kZTfhKDr4aRX8LFO1BgbwLLziTjM8rMMH7lr0GOqUBqh2MJN0vgwuRD62l1T%2FzbIfz0R89do1Q2Njtb%2FASvvNdt6Qnsr3c6Dntpdrlqc3VbuEYiZWVkX1UYRVoKidXhywf7PFiENOxmT0etUquz42n1YZ9YPcPiSG58w8GTdQX9pyKP83FQ4IXzg4ox8b%2FUnKRxbTGBs3jBeVMXtghrZPs%2B20U3DSueyLB3GYQ0azdtAW1vPm04nvpMN7H%2FeApaPL5RBVh&X-Amz-Signature=c1c37c9ed104232912e64eb210b6093798d81cb389bca5f9dbc5b296b4615488&X-Amz-SignedHeaders=host&x-id=GetObject)

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

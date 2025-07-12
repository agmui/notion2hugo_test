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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AVDFID3%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T004455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0pJsGyLHiWGDnxXn%2B0PeBTlPhqr2SAu4irsvklNQe1AiEAhcb1wdjR0li3cZ9B%2FbS6M2JKitO7uGgdHMSYioh2bUIqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOzd%2B8AWsDrXw9PaDircA2POvgNAJIDBSHfRNSwZjeLjdXutPrmUBJEWfCNA6fvNN2eIiRv0o5T%2BHaKyO6fi9zdZk%2FlV5H7bxmTJWlxLNBFbul2bhbuU7v%2FXXlOLkcXIaG0YcoMED21676RoDhtWdFxkBAz9jKT0onhgchRvu0NVfJMFJiX86q3GES3qN8O9Iyz28FWtuWKB06gRaUYsM5AQk7uSB7XGmxa4I9k69G3swlpOtjQ0FqxT%2Fr0gewd2%2B5e0SWBNo0Bwe%2Fl52dE%2FGRzUP0yhyAuqD2Euvq1hlD8Mvz7CKAxgLj4Nz4tbWSQizUNRH%2FVCAjvuo7T9WXKMkHSx59B8HpovTkqTjOIWfCsidBJlQPRyqw2ZSP37WvrP9p7QIE%2BJsRYdD4P%2FpE5PoG%2BPlC8oweKvYpbiAtyX5ipAcZQrv9pWmuLRPA5uhuxDXbxc0OCavIzT8fYsVhjUIaIIwQGySWMHkPn193%2BDXNsoxiycz2Z%2Ft%2FJlgYownt9Y7EoY36Sc9jPdv%2BJ3f3TPq0ATWWYagBeDQbfhoz0vUxfy6oCploVeLFrLX4tn0uF5zOPZGjG8HjwEo11IejPoAVFtGriDHlP1kAwoF8N5fO0lOpIcdD9rq%2F8gZq6ifRtQm3NuZTBSIgbkrIxAMLC1xsMGOqUBTH4SV9qDC2a68YpCLgTC63gesrp4D130RkhItuy6Vh0PSCMOurLLA2vr6DHxAuZJLpvRjfgdLNfQyKKe1XNkwynq3EgpPbUDRU5NxZ3BHJxa6xy2AvdFgAfpBFe64T7tdrMovu6EbgBKDqKfaRqJICpSrhLTIy3CzTJIG5K5CBr530BxRwIxqO%2F6dNjFLkfsS5UTMeRxvXy5ERxElBSeNrdiOS6V&X-Amz-Signature=aa8c97fdb88ae7e349ea439032c3a910336c1fd13cf66eff93e27522ff567b2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AVDFID3%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T004455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0pJsGyLHiWGDnxXn%2B0PeBTlPhqr2SAu4irsvklNQe1AiEAhcb1wdjR0li3cZ9B%2FbS6M2JKitO7uGgdHMSYioh2bUIqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOzd%2B8AWsDrXw9PaDircA2POvgNAJIDBSHfRNSwZjeLjdXutPrmUBJEWfCNA6fvNN2eIiRv0o5T%2BHaKyO6fi9zdZk%2FlV5H7bxmTJWlxLNBFbul2bhbuU7v%2FXXlOLkcXIaG0YcoMED21676RoDhtWdFxkBAz9jKT0onhgchRvu0NVfJMFJiX86q3GES3qN8O9Iyz28FWtuWKB06gRaUYsM5AQk7uSB7XGmxa4I9k69G3swlpOtjQ0FqxT%2Fr0gewd2%2B5e0SWBNo0Bwe%2Fl52dE%2FGRzUP0yhyAuqD2Euvq1hlD8Mvz7CKAxgLj4Nz4tbWSQizUNRH%2FVCAjvuo7T9WXKMkHSx59B8HpovTkqTjOIWfCsidBJlQPRyqw2ZSP37WvrP9p7QIE%2BJsRYdD4P%2FpE5PoG%2BPlC8oweKvYpbiAtyX5ipAcZQrv9pWmuLRPA5uhuxDXbxc0OCavIzT8fYsVhjUIaIIwQGySWMHkPn193%2BDXNsoxiycz2Z%2Ft%2FJlgYownt9Y7EoY36Sc9jPdv%2BJ3f3TPq0ATWWYagBeDQbfhoz0vUxfy6oCploVeLFrLX4tn0uF5zOPZGjG8HjwEo11IejPoAVFtGriDHlP1kAwoF8N5fO0lOpIcdD9rq%2F8gZq6ifRtQm3NuZTBSIgbkrIxAMLC1xsMGOqUBTH4SV9qDC2a68YpCLgTC63gesrp4D130RkhItuy6Vh0PSCMOurLLA2vr6DHxAuZJLpvRjfgdLNfQyKKe1XNkwynq3EgpPbUDRU5NxZ3BHJxa6xy2AvdFgAfpBFe64T7tdrMovu6EbgBKDqKfaRqJICpSrhLTIy3CzTJIG5K5CBr530BxRwIxqO%2F6dNjFLkfsS5UTMeRxvXy5ERxElBSeNrdiOS6V&X-Amz-Signature=f8bf5844c9eeb20114ecd66f32d6ca4013ca9e989f38bf4425a354f37a53e960&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

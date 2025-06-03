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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGUDBCJ7%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCfvCeD9v5x7ua5KrC%2B9%2FEvmDJ2Q7KC98sVBIA4KUXfIwIgGeP6H7WEj5yTeWJXXsnoObxQvADv%2Bj9i7pjzvmY6yBoq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDMRyp0ONw4vKiNnORircAxXEg5RL7gWe53gHCzGOMmqTR2HL5q7H05UXrv%2FKwYdTfJpMxLMcr6WZ3XQnTUHsuHtorqZYwJgf5uUUHulEdfESlckqBZqKqvI0lpLIJAZJqz73dMTla9R9olK3GUfSayIz1GE5%2BcvdrWsF%2B6NnojADX5%2B%2FwwrIeWRTobtieRsQYrlYiHLsEFDdEEq9TVO79WCQDH4%2F6vAQCM%2FP2ftJwxexim7aVWcstuyNsiAj8vjvBGmb%2BvCFrwrGCr0LzBw7TeFxJEsOUsrz2Fismdm7YwJVo4sSnSRx3SoLAoU0YogZt4B9bALkDOUJwM19ujVbCs2S3TtLqXX5qUgspWLFUodYckTo3toG3ttRfeP%2F6AAYPNuWR60stH%2FGoZplub8VXxpW4iPHNWN9WIRNznzM3IfgtaD6zuJKej2jqEyzELl12Lh4wOcx0pxWA1PrIA429M0pTCZYE7IdBSNH4KOaPWZFkXHYht5nYxlyQk0G1E6Q%2FPO5WDJPK1w1yEHpI2hzJMa6dLIjE2IahF0MNqYJ%2F9aDBOqlzb1njfm4c4WNtwtKfe4F7dsatpuL0xD52GvjbtthW%2BWnQWWo0%2FZmJhWY%2FQMPFprC03j4Aa8X%2B62cfIyF%2Bgp4VHot%2BJc03j7nMKaF%2FcEGOqUBesdQikoeVjMv%2FG0YdcZ3oQpvkDNHPWTHd%2FN6KQicpom7rKWyb735teDDu%2BtqSctS72574JKGyuU1wMNpEoi0sP9SUjueB%2F5oeIBhOr1MdGh2Qaj3n0%2FlExAhn8xdrn9wxijTEJBnR80s8C0%2F9NQy2VjQJD8533lvrD1EumCvYbX2J%2FwPSth6SugFeBLZKR8v9h7uYNbXDSCtn3ymmw5tvB6bov2i&X-Amz-Signature=7742d7376a1e7d260aa3aa528c97199e51d691229d669006488755e273f66244&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGUDBCJ7%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCfvCeD9v5x7ua5KrC%2B9%2FEvmDJ2Q7KC98sVBIA4KUXfIwIgGeP6H7WEj5yTeWJXXsnoObxQvADv%2Bj9i7pjzvmY6yBoq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDMRyp0ONw4vKiNnORircAxXEg5RL7gWe53gHCzGOMmqTR2HL5q7H05UXrv%2FKwYdTfJpMxLMcr6WZ3XQnTUHsuHtorqZYwJgf5uUUHulEdfESlckqBZqKqvI0lpLIJAZJqz73dMTla9R9olK3GUfSayIz1GE5%2BcvdrWsF%2B6NnojADX5%2B%2FwwrIeWRTobtieRsQYrlYiHLsEFDdEEq9TVO79WCQDH4%2F6vAQCM%2FP2ftJwxexim7aVWcstuyNsiAj8vjvBGmb%2BvCFrwrGCr0LzBw7TeFxJEsOUsrz2Fismdm7YwJVo4sSnSRx3SoLAoU0YogZt4B9bALkDOUJwM19ujVbCs2S3TtLqXX5qUgspWLFUodYckTo3toG3ttRfeP%2F6AAYPNuWR60stH%2FGoZplub8VXxpW4iPHNWN9WIRNznzM3IfgtaD6zuJKej2jqEyzELl12Lh4wOcx0pxWA1PrIA429M0pTCZYE7IdBSNH4KOaPWZFkXHYht5nYxlyQk0G1E6Q%2FPO5WDJPK1w1yEHpI2hzJMa6dLIjE2IahF0MNqYJ%2F9aDBOqlzb1njfm4c4WNtwtKfe4F7dsatpuL0xD52GvjbtthW%2BWnQWWo0%2FZmJhWY%2FQMPFprC03j4Aa8X%2B62cfIyF%2Bgp4VHot%2BJc03j7nMKaF%2FcEGOqUBesdQikoeVjMv%2FG0YdcZ3oQpvkDNHPWTHd%2FN6KQicpom7rKWyb735teDDu%2BtqSctS72574JKGyuU1wMNpEoi0sP9SUjueB%2F5oeIBhOr1MdGh2Qaj3n0%2FlExAhn8xdrn9wxijTEJBnR80s8C0%2F9NQy2VjQJD8533lvrD1EumCvYbX2J%2FwPSth6SugFeBLZKR8v9h7uYNbXDSCtn3ymmw5tvB6bov2i&X-Amz-Signature=b71abe133e5cf28778bd2d8819b7765508964dfc44d297afa4c0c8d1c219e4c6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUZUTYYT%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T121639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDUDd%2BfBkN1AuTLhrDe9tF7Emuxj%2FQcMB6ORjU0YB6X%2FwIgLccGhA9tgVMNWBkiOCVB4S11MG2wC5Ngm1PsxxyUfnEq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDGUSojkXh6fi6eq%2BXCrcAwCGKPVmzoq0N7Fc96hBKtXUIN%2BzQB0RjVbVT7xCAkHYLXMwvJ063BIlcFoHCqANFXA4O7%2FRw8D8R2VBL48rl9mRfdcHMB6Sj6zaTq4QpoPGQDa38eyQcitNZqe70G8%2BMYytHlfkKHSj2JCtm0sunLL9JneVfSBzC4YukqxBiai3GREwT7Vke1JNDasVdSfcXD%2FsD06RkmvGk%2BLt84NvsU3R6RDUDR1udPMCnwWbm6ipMlA9TqKcfj3IeWPfMcu9u1mWULZDWu9HFqxAJ7GdoKIO%2Buw%2F%2BRHkFXvXCbuUcqFTV4HOkJ%2FwwO5u7pKqPJw9sKkOvsa2apObePrlZXWXDGs%2FJ%2Bk2hb7Lw2nOt%2Fjf9PH0eKLVC2lM98D70ajuWwcWZc6WGnm6eqrHU5IxvGroR8sze8tIrlsiRc9%2FAfsWEvvKPWncFevSFwLAP6nwm1SwH6TAgPHSzO5eS4eOo8%2BsF9bKqpbsD46UZWXrAeJ%2BaDVNQG83Z7d8uiXcEJf%2FWvNIib7uegL6sJ3wyCdBWGGHcJ%2FxksIplKYmNTQQUtpr7e2nOyb6msvYWOkyy8KcVLDvE1pMFZGjk8UG7gv%2BcgvbK6cbgwJLWllsYILCfGuZ1dngRZS0jyMe%2FGtKIF1HMMuMhsIGOqUBCfulIWnTKJ4I6d4hnPU485DyWwxSuzZELRTX8ZD6q7n7IaENr7tdGp29Xm0THmc3g7EPhObTwfZgBn67Uj8KmzzLZOJ93nci85p6HvpOn2NuunhCWWcTbCs6KoqdxxTqhmvjN8Hev44arOZXSxsNuVpTJKIzJNUBBNZCHzRNmMJatvYaHg2j1znCFEyIfP1OnK9jpcMTv%2FC5a3YV5rsOx1iURSwv&X-Amz-Signature=ad54be3ed8c2fb95e1654621a4e8bfd61232501150726e910dfb71d11c26acce&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUZUTYYT%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T121639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDUDd%2BfBkN1AuTLhrDe9tF7Emuxj%2FQcMB6ORjU0YB6X%2FwIgLccGhA9tgVMNWBkiOCVB4S11MG2wC5Ngm1PsxxyUfnEq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDGUSojkXh6fi6eq%2BXCrcAwCGKPVmzoq0N7Fc96hBKtXUIN%2BzQB0RjVbVT7xCAkHYLXMwvJ063BIlcFoHCqANFXA4O7%2FRw8D8R2VBL48rl9mRfdcHMB6Sj6zaTq4QpoPGQDa38eyQcitNZqe70G8%2BMYytHlfkKHSj2JCtm0sunLL9JneVfSBzC4YukqxBiai3GREwT7Vke1JNDasVdSfcXD%2FsD06RkmvGk%2BLt84NvsU3R6RDUDR1udPMCnwWbm6ipMlA9TqKcfj3IeWPfMcu9u1mWULZDWu9HFqxAJ7GdoKIO%2Buw%2F%2BRHkFXvXCbuUcqFTV4HOkJ%2FwwO5u7pKqPJw9sKkOvsa2apObePrlZXWXDGs%2FJ%2Bk2hb7Lw2nOt%2Fjf9PH0eKLVC2lM98D70ajuWwcWZc6WGnm6eqrHU5IxvGroR8sze8tIrlsiRc9%2FAfsWEvvKPWncFevSFwLAP6nwm1SwH6TAgPHSzO5eS4eOo8%2BsF9bKqpbsD46UZWXrAeJ%2BaDVNQG83Z7d8uiXcEJf%2FWvNIib7uegL6sJ3wyCdBWGGHcJ%2FxksIplKYmNTQQUtpr7e2nOyb6msvYWOkyy8KcVLDvE1pMFZGjk8UG7gv%2BcgvbK6cbgwJLWllsYILCfGuZ1dngRZS0jyMe%2FGtKIF1HMMuMhsIGOqUBCfulIWnTKJ4I6d4hnPU485DyWwxSuzZELRTX8ZD6q7n7IaENr7tdGp29Xm0THmc3g7EPhObTwfZgBn67Uj8KmzzLZOJ93nci85p6HvpOn2NuunhCWWcTbCs6KoqdxxTqhmvjN8Hev44arOZXSxsNuVpTJKIzJNUBBNZCHzRNmMJatvYaHg2j1znCFEyIfP1OnK9jpcMTv%2FC5a3YV5rsOx1iURSwv&X-Amz-Signature=6758dde19cf4601505440a0434b110d7e2ff38f6f27ef6409e21e208aa186340&X-Amz-SignedHeaders=host&x-id=GetObject)

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

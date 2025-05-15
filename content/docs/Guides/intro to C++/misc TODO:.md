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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KKNKCP6%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T161055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDn4%2FM0b1rc%2By95%2FILimjTqhlk7ZJOoo%2FOQHDIp6mZDpgIgIBtRigCCwI%2BtWqO9z1V51h0m2KPVOMJIEYqf5o3Cn5Eq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDLzOJh2a8lN2tlCzZSrcA1bIylK6h%2B0hm0Tb1Bjk8YmWQfwx1%2BHOY0GrXp5ISiHRBKZ%2BKzXeVj1tvA4bUhVVO4YKoGjsgFMrHYl2IF908XxoqifFhb6zq3obZ669EYDUYWIDGgohxui%2Fy0N%2B6T8dCLAPqkt9Q6KnkDFXgq3bv0GzY0F4sJFM2dbwbkpTWF0EidQPUGgmQPx%2FsUdLejpTBJXr3oTF%2F4F3KwUGv4IDsv24Gg055998FcFWvWPxcJATTm86XZVvguEhlyMcWPOCBZcQ%2BXB3%2FRUUsyZRYdxuLweET6SeqapS2PgH6NntgC%2Bv13NhLhhGvzdGhJIvh3mmSDPvtHY1bwFS9oZ58H83Y%2BRdg3wjOYluBvMBtAnDqEH%2F1uWt1f35Yzu6cF7xz6xy1MyGhhHNTTi9vBMRp7gR%2FOfR2RWybsZUYePzNoiUX7LGKbZImr%2F%2FeH7R8%2BTjWUoHIxWnds68TCzUS8MZPbsk2dD2MY57I6x6QoYPrqqxAGhSdL%2FlhB2xanfAHl8DZ1%2BTFVPlG6J%2BaORuteRi1uk0HAQKQTqOqYsz03%2Fbt9MiHd4AI5Aasp8QQ8ODUe1oQc%2BmCFiCOy3uW9A9Vmy0TbIUV0ewScPj5eG%2F5Xh8vWfz4Ph0jsNVzF8ktyuRThfwMI%2BRmMEGOqUBsc0%2BSGS%2BXW2uyUDFD88kwJZ%2F7vL4FdiLFj9HEak8LqsAxPlffmaUpTE9IE3ikujW63vlJCf2egck94nwqSCtYzgdM2KsenWFY1bh6VEI6lM0Y7IbptEdxF3gznMao7Mo%2Fh32LeJdY0a5RnERfAqczM9r%2BdjejJqHUV8%2FEjUaEUqxu6rDxXu2DsHInTTZoVrZR5XZfNLOW6vahVM%2Fa3aJeFboVbq8&X-Amz-Signature=e8f4660ce564aa77e4e33ee2d8153e34b18f0560259d95199e4487e458fb100b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KKNKCP6%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T161055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDn4%2FM0b1rc%2By95%2FILimjTqhlk7ZJOoo%2FOQHDIp6mZDpgIgIBtRigCCwI%2BtWqO9z1V51h0m2KPVOMJIEYqf5o3Cn5Eq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDLzOJh2a8lN2tlCzZSrcA1bIylK6h%2B0hm0Tb1Bjk8YmWQfwx1%2BHOY0GrXp5ISiHRBKZ%2BKzXeVj1tvA4bUhVVO4YKoGjsgFMrHYl2IF908XxoqifFhb6zq3obZ669EYDUYWIDGgohxui%2Fy0N%2B6T8dCLAPqkt9Q6KnkDFXgq3bv0GzY0F4sJFM2dbwbkpTWF0EidQPUGgmQPx%2FsUdLejpTBJXr3oTF%2F4F3KwUGv4IDsv24Gg055998FcFWvWPxcJATTm86XZVvguEhlyMcWPOCBZcQ%2BXB3%2FRUUsyZRYdxuLweET6SeqapS2PgH6NntgC%2Bv13NhLhhGvzdGhJIvh3mmSDPvtHY1bwFS9oZ58H83Y%2BRdg3wjOYluBvMBtAnDqEH%2F1uWt1f35Yzu6cF7xz6xy1MyGhhHNTTi9vBMRp7gR%2FOfR2RWybsZUYePzNoiUX7LGKbZImr%2F%2FeH7R8%2BTjWUoHIxWnds68TCzUS8MZPbsk2dD2MY57I6x6QoYPrqqxAGhSdL%2FlhB2xanfAHl8DZ1%2BTFVPlG6J%2BaORuteRi1uk0HAQKQTqOqYsz03%2Fbt9MiHd4AI5Aasp8QQ8ODUe1oQc%2BmCFiCOy3uW9A9Vmy0TbIUV0ewScPj5eG%2F5Xh8vWfz4Ph0jsNVzF8ktyuRThfwMI%2BRmMEGOqUBsc0%2BSGS%2BXW2uyUDFD88kwJZ%2F7vL4FdiLFj9HEak8LqsAxPlffmaUpTE9IE3ikujW63vlJCf2egck94nwqSCtYzgdM2KsenWFY1bh6VEI6lM0Y7IbptEdxF3gznMao7Mo%2Fh32LeJdY0a5RnERfAqczM9r%2BdjejJqHUV8%2FEjUaEUqxu6rDxXu2DsHInTTZoVrZR5XZfNLOW6vahVM%2Fa3aJeFboVbq8&X-Amz-Signature=121b86213cb86edc54ae40b591a8e10de22ea8e86e8221eb3a0d0d8aedd08594&X-Amz-SignedHeaders=host&x-id=GetObject)

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

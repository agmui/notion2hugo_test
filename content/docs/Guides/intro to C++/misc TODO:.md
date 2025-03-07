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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGUH4HP7%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T150807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFpbUWj%2FkM0lgVAIVX2st5EOASXNT77qhPz76J6qLw2sAiEAzMnp6W%2BOkN4Awy97UpiJcacb37oM0w2hCjgW2s3vfEIq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDMQArCNw3QmEu3RDhyrcA6tMi99RI%2BHzS6ZOqqzce72CLW6OVY%2BAMjrdBFokZmnlk0RuoXqLt0bGsI6%2BKYSV1h3OurFt8dhXeD1NJt%2F2qN2rymiJR1V%2BZupglSF%2FHYhFAYSnGPUISIJxxF%2B295FJFZAlINxMulo9Q0kyA9WfxVRGln5v1GSbZbiXJ8k2FEjwIWRN2J5CmiaymuFeY79X3C2nosn1k3F%2FrXX9jVIqPYrJSndwzaOpdAI5vTDhoed4aBezgaIztHglScdfGrYiIuQ7Y7qnkZ0UhDcKjeeilfro0Hvlx9VzyFueeUwysFuhN7dKVCO%2BAwRDHKqwbfFM3w9svtS4owavLZVNDbStFOqP9BACPDbAs3qGFcUPKcqxYNWc0YSoMFf5IYQSWT02qf%2BxLCDadqbb%2F0RXLnJvqAp5HgnXbtZLS3yuuglFMcbQh2Mntjwo7kNkqpIamGo1WBgYryQzjovx6%2BeNKW6jYgwQc5pjbtMvlAHVLzoXsn0W%2FBDlc5jTelsx4rn34MthCPnhwRS9IxDWFtSCko5Cx7GMytCt%2FsP4caREvC5FjkcFXNlGuJ6kBZmEp%2B3cbKBRVK0UjCLoEQkK5Pa2rsoLQpNvkJn7oIbcCqpX0OIWVI52Gm9kPAGb2oJpa4ukMID%2Bq74GOqUBwj0%2BHcqEtyj2YizTHqZ8DJ5O%2FyrH4TQVrkLuzH4zNKEasD%2FhAWsXcACs3FszZIfg3jZxm%2BMKgSu8PXIfM5h25TgIh728xbkZQKeyuRNATKGKWqPYM1F%2BizKu2JMJGwQop06QDdIjkh%2BvTV0YVznF8CalL2cubFZGjlQtfrPMOw2fnv5Q2xWmoakJlXWhFBhhqyGIfdg8TaPJYhDLU3zDVvFTcRPi&X-Amz-Signature=300348dbe6ca6a836a1771a8646b0c97115485c71357128d5a33119ade465a69&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGUH4HP7%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T150807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFpbUWj%2FkM0lgVAIVX2st5EOASXNT77qhPz76J6qLw2sAiEAzMnp6W%2BOkN4Awy97UpiJcacb37oM0w2hCjgW2s3vfEIq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDMQArCNw3QmEu3RDhyrcA6tMi99RI%2BHzS6ZOqqzce72CLW6OVY%2BAMjrdBFokZmnlk0RuoXqLt0bGsI6%2BKYSV1h3OurFt8dhXeD1NJt%2F2qN2rymiJR1V%2BZupglSF%2FHYhFAYSnGPUISIJxxF%2B295FJFZAlINxMulo9Q0kyA9WfxVRGln5v1GSbZbiXJ8k2FEjwIWRN2J5CmiaymuFeY79X3C2nosn1k3F%2FrXX9jVIqPYrJSndwzaOpdAI5vTDhoed4aBezgaIztHglScdfGrYiIuQ7Y7qnkZ0UhDcKjeeilfro0Hvlx9VzyFueeUwysFuhN7dKVCO%2BAwRDHKqwbfFM3w9svtS4owavLZVNDbStFOqP9BACPDbAs3qGFcUPKcqxYNWc0YSoMFf5IYQSWT02qf%2BxLCDadqbb%2F0RXLnJvqAp5HgnXbtZLS3yuuglFMcbQh2Mntjwo7kNkqpIamGo1WBgYryQzjovx6%2BeNKW6jYgwQc5pjbtMvlAHVLzoXsn0W%2FBDlc5jTelsx4rn34MthCPnhwRS9IxDWFtSCko5Cx7GMytCt%2FsP4caREvC5FjkcFXNlGuJ6kBZmEp%2B3cbKBRVK0UjCLoEQkK5Pa2rsoLQpNvkJn7oIbcCqpX0OIWVI52Gm9kPAGb2oJpa4ukMID%2Bq74GOqUBwj0%2BHcqEtyj2YizTHqZ8DJ5O%2FyrH4TQVrkLuzH4zNKEasD%2FhAWsXcACs3FszZIfg3jZxm%2BMKgSu8PXIfM5h25TgIh728xbkZQKeyuRNATKGKWqPYM1F%2BizKu2JMJGwQop06QDdIjkh%2BvTV0YVznF8CalL2cubFZGjlQtfrPMOw2fnv5Q2xWmoakJlXWhFBhhqyGIfdg8TaPJYhDLU3zDVvFTcRPi&X-Amz-Signature=8e33fa54f7766446f720c1d4c445cd2634af724418b1234a480feac60ff0ae63&X-Amz-SignedHeaders=host&x-id=GetObject)

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

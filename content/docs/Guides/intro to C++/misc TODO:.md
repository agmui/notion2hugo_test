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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVBSNKCE%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHw%2Fs1cMdzluRs3jrbGwSTk8Pu08Q5VPo8SN%2FRl%2B2ywAiEAj%2F35%2FLpqJnIGqWnLxB2VHQbeu5Hvhs10N6SM%2BdPpzicq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDD3%2BuJOGaxcridxdyCrcA%2BAF1z%2FPJBbeiUok1g9TvUrTyo9hKRmhNGy2HIuJtjrWnal%2Fa3klyiSSE4sZH4xDOU5j5%2FGGR2nzNqeQ1QI4FdZaLhW6PseeZT50Lf%2BtzEB5qglhX9lh4KrAGGxPSRIKECbnhGOT8aB15a%2FHjDemrZ8g25PWr3rJW42JJCJsSAhxbjbEMdRmy7h38P5YliktcQy9f7F4UIgkRNzlubyIrp44pdpigmvJ8Rk6aHZOcr8peoyPHLulI8DdmEMK1SSh0VBQXhx7cNtU509O40Ghg6g3Ja5sr4zia9mDpzxk5jK42pXJcQts3ld%2FlfX2%2B7BVo80ph6ekktRMQIRPzB2XCI0sot8hnZ2uvDs7mce1upJOFRie2DKNrVzB2A2cQ0yk0DUDBBZcJ%2F6S75c1iVHwoLlhS2ZYvM1SG9qHp8jW%2FIxIWB3EWsNBukI6NBIf2Qykd3VczVebvFhhwGmdp8bJaUU0sUsUCuBIavih2uVnUOL2lHaHYUTd87%2FQZiueV0id91UglJXeZqUee%2BAE1nSK2%2FRdoLU%2BDz4QGRP179aSbfb5HGB7wJ6FHrOmbWkRCGyX1eZSD625ymbfgsGPSw4Mj%2BWsB1FcLtQ5VQkd36pY6twkNZhXa3No%2FKtyJcSXMMrKk8kGOqUBuUZrEQlq%2FbthLxW2GYHvPrM52dgZHSwO7sQ1xeGWy0cLh9FmdQu3elRdCI3CdolchLT2aPLYV%2F3o9A8iyyVtixVyxNrCXmRZoWfuTFPbqOHva75xnEjmYRh9MvwWGlQAfQcWplfvR45GYkI8XYsAaaO3sfjyFgDPnnZiF1i2bZSR2mUtzX2vCbs79zlwk2703sVaafrgs%2BsQvaPUZ3hxBDDrASnA&X-Amz-Signature=2d6bb786375203bf9d59b5d8635e0b4847a2325977f068389c270102c378b30f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVBSNKCE%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHw%2Fs1cMdzluRs3jrbGwSTk8Pu08Q5VPo8SN%2FRl%2B2ywAiEAj%2F35%2FLpqJnIGqWnLxB2VHQbeu5Hvhs10N6SM%2BdPpzicq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDD3%2BuJOGaxcridxdyCrcA%2BAF1z%2FPJBbeiUok1g9TvUrTyo9hKRmhNGy2HIuJtjrWnal%2Fa3klyiSSE4sZH4xDOU5j5%2FGGR2nzNqeQ1QI4FdZaLhW6PseeZT50Lf%2BtzEB5qglhX9lh4KrAGGxPSRIKECbnhGOT8aB15a%2FHjDemrZ8g25PWr3rJW42JJCJsSAhxbjbEMdRmy7h38P5YliktcQy9f7F4UIgkRNzlubyIrp44pdpigmvJ8Rk6aHZOcr8peoyPHLulI8DdmEMK1SSh0VBQXhx7cNtU509O40Ghg6g3Ja5sr4zia9mDpzxk5jK42pXJcQts3ld%2FlfX2%2B7BVo80ph6ekktRMQIRPzB2XCI0sot8hnZ2uvDs7mce1upJOFRie2DKNrVzB2A2cQ0yk0DUDBBZcJ%2F6S75c1iVHwoLlhS2ZYvM1SG9qHp8jW%2FIxIWB3EWsNBukI6NBIf2Qykd3VczVebvFhhwGmdp8bJaUU0sUsUCuBIavih2uVnUOL2lHaHYUTd87%2FQZiueV0id91UglJXeZqUee%2BAE1nSK2%2FRdoLU%2BDz4QGRP179aSbfb5HGB7wJ6FHrOmbWkRCGyX1eZSD625ymbfgsGPSw4Mj%2BWsB1FcLtQ5VQkd36pY6twkNZhXa3No%2FKtyJcSXMMrKk8kGOqUBuUZrEQlq%2FbthLxW2GYHvPrM52dgZHSwO7sQ1xeGWy0cLh9FmdQu3elRdCI3CdolchLT2aPLYV%2F3o9A8iyyVtixVyxNrCXmRZoWfuTFPbqOHva75xnEjmYRh9MvwWGlQAfQcWplfvR45GYkI8XYsAaaO3sfjyFgDPnnZiF1i2bZSR2mUtzX2vCbs79zlwk2703sVaafrgs%2BsQvaPUZ3hxBDDrASnA&X-Amz-Signature=7e7e34f350b27a6b05e21b21085e87e256591039fe6029aa249c4445ddb16f0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

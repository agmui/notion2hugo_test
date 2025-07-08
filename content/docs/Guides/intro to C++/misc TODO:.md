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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X5FMOOD%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T061357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCKiJVcx3H4XVdAnJTNrAx8IgLiYbuZjqzjB2dwViFLxwIgBGHMP6h6SYHNA%2Fq3emM%2B5C0kHdnAREXJndQgul7wIrkqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPn1mCW8qVoNu2ZfMCrcAzlC4Y%2BwxnGZ%2B2DwUvxrta2k5iOLagJ%2FLBoU6cxQjc9cgTrLiwlmmH2Pf7%2FvbWX8Ul3KI2jDerMtR1weavgL%2BJM880BWmbnmOVBopH9uo%2FuaZvtruArebutXy5JTwp9gMImrGn738m7NrCv9FUGUXMZTk33EJhswAhj7t7%2F5NVaM5RDyvCaaT0r8HncTnGLvGFe8Y42ozn6aGq8rIVChy4EcoB0Mfkt%2BSigNeU8PWRW6M2dWVHehj9PXCri9KOFwZ%2FuEIgcztX7FeQinLDI7GnVC9fbp0lh2qn5cs9JtMCs8c%2BYjr1sa3d1i2SN5UjOb6meMykCuZjfZ2ETg%2BaFGKvxDMTIrIamKiSGaJEUthN4oCLwn2acYGfzuRB8GijXHEdWQAsp9KZs5of4lpA6dR23A6fmyj5jK5RZaDEbQN0CYnuDly151Cw4dLsIPwOTHGYffINSIA8dqF9Xn3fidBPp14LxrQeKYS6Q1smrMyEahSbqbXt5wnhITtTwWaU7smMPsuNTjSMakTljMO503SR9EU9elQzJzLqWIeIr11ZkNAoySFoSb2RwmUvWzlawKb8XFcNSPkpPZcFkVAivlP1jsNC88UHE4p01uzQgjgBH1ENKS9Kyeu9TFUwyQMKCDssMGOqUBW1J6EYvZcD5ioJ89g%2FBHfFuJoJ9qpANN4xxPEjqDqmq66K7Cw2Dt89ATTesAT9%2BzioLNPZ2po73J6ryJ3iUH4D7M3orW2Xiz7l6rZa%2BL8C3Gg%2Ffx9rrJ24veHCqtQxbdm69tQAdPqBY4rm44vHrbD2sHRJhUAdK6HJrZve2rG3jkZacFluKgz5HAUpCcAk%2BuVIdKHALYXSw3LfMQJF3NAAI%2BfA%2F%2B&X-Amz-Signature=fd500f281f0cd3b4269d5f01b1f5484b9e62ca27a70da22520baeb45e47a276d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X5FMOOD%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T061357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCKiJVcx3H4XVdAnJTNrAx8IgLiYbuZjqzjB2dwViFLxwIgBGHMP6h6SYHNA%2Fq3emM%2B5C0kHdnAREXJndQgul7wIrkqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPn1mCW8qVoNu2ZfMCrcAzlC4Y%2BwxnGZ%2B2DwUvxrta2k5iOLagJ%2FLBoU6cxQjc9cgTrLiwlmmH2Pf7%2FvbWX8Ul3KI2jDerMtR1weavgL%2BJM880BWmbnmOVBopH9uo%2FuaZvtruArebutXy5JTwp9gMImrGn738m7NrCv9FUGUXMZTk33EJhswAhj7t7%2F5NVaM5RDyvCaaT0r8HncTnGLvGFe8Y42ozn6aGq8rIVChy4EcoB0Mfkt%2BSigNeU8PWRW6M2dWVHehj9PXCri9KOFwZ%2FuEIgcztX7FeQinLDI7GnVC9fbp0lh2qn5cs9JtMCs8c%2BYjr1sa3d1i2SN5UjOb6meMykCuZjfZ2ETg%2BaFGKvxDMTIrIamKiSGaJEUthN4oCLwn2acYGfzuRB8GijXHEdWQAsp9KZs5of4lpA6dR23A6fmyj5jK5RZaDEbQN0CYnuDly151Cw4dLsIPwOTHGYffINSIA8dqF9Xn3fidBPp14LxrQeKYS6Q1smrMyEahSbqbXt5wnhITtTwWaU7smMPsuNTjSMakTljMO503SR9EU9elQzJzLqWIeIr11ZkNAoySFoSb2RwmUvWzlawKb8XFcNSPkpPZcFkVAivlP1jsNC88UHE4p01uzQgjgBH1ENKS9Kyeu9TFUwyQMKCDssMGOqUBW1J6EYvZcD5ioJ89g%2FBHfFuJoJ9qpANN4xxPEjqDqmq66K7Cw2Dt89ATTesAT9%2BzioLNPZ2po73J6ryJ3iUH4D7M3orW2Xiz7l6rZa%2BL8C3Gg%2Ffx9rrJ24veHCqtQxbdm69tQAdPqBY4rm44vHrbD2sHRJhUAdK6HJrZve2rG3jkZacFluKgz5HAUpCcAk%2BuVIdKHALYXSw3LfMQJF3NAAI%2BfA%2F%2B&X-Amz-Signature=4e21767b5778dbe4bdd850d4218cd0ac4d950141f4aa3b22e0b56cb7e5afa66b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

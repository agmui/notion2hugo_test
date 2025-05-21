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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LQVY2BD%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T022755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDrjQDd04lPy7s33%2BjN2dwi%2FcFELVwvpmI5uBvcJ0caVAiAU5DgPbzNDYkdmCRnSPA6NJcYVNy9NjUK9td1s01qPaCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAfrk%2F9PJzuLFB0zfKtwDpOJ6hItYaep1voiMvoIhhmXXNT2GXX2vFFXdMVIfoZge4aCOpveN63LLOyXP5%2BfRlqk%2BOvmLOZXBxl2EVMaE2t0ncGLzo7jmOdEloOaN1OIctN4s%2BI48gXnnxVmaZ%2FiIbI9oDmlidbhzl41E%2BEz3ptMFX3PX1l27J2AYrI0Xo2este%2BFJMmFkgqOBW%2FAODezGjGYsvflu98vTFfen0008CbHGmbqSDqUXcS9IPg8fhO9svtjHauyQcJ0m%2FBbJuripE8WZW1wlS62QR%2BqmUdOicNsPlo8oDn04k%2F5BUbt4FfuRQF6HuPT%2FaYomFVrkiIy0ysB1EzqbHI%2BrVpPvDRDHL9P%2Ba%2FXwPnbfQFJOPE770GBe7fOZLKcp95bJuxTBnBmIcKe%2BQJE42HCjCLmddwcEjGpGpYM6dopAgbtYb18PKw1oVDMP55%2Bdksq%2B%2F6lOVdtLt%2FxpcXv19qJ53bEY3fn8MnzoSSmdFcq3g5%2BRwOCNQUCf2oLMLG6NsR3ZrmCWH71PsiJwmFym77o1uHWlTxjjBGquIakMePFkJgF8ohaa2mLrt3l1yXKwLxAURSNsqS0sa3%2BhjGL4PV7gSQW3dtEErpHRQjuQ527HZMCwSwK9O53v4iGyps%2BxpSghcYwsKK0wQY6pgGOmY7K8KNO%2FzkP%2BaroilW%2FVhlSkjY8%2FbhzJkfoOvPwsfmqxPlG1vyZMkcy3do%2BTJoc8CcNuBSshRN9Ogn9z4Pkg3l%2FbVmD7lOU12qYFcGQ736THzEZRUkeiR%2FAK2bbqu5qcivrVpMOoQamt4x2%2FD5wrWdK6PUwSQkRE9tHObLtdKOwP8sKPKKW4wbg4%2BFVJmHEhaZq9QBVuorzbKTuoRQY9TfmsCC4&X-Amz-Signature=cf630ae87deca6f72ff5f20edb0efee9059acf6ba1bc1827b8abe2d8fe94210e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LQVY2BD%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T022755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDrjQDd04lPy7s33%2BjN2dwi%2FcFELVwvpmI5uBvcJ0caVAiAU5DgPbzNDYkdmCRnSPA6NJcYVNy9NjUK9td1s01qPaCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAfrk%2F9PJzuLFB0zfKtwDpOJ6hItYaep1voiMvoIhhmXXNT2GXX2vFFXdMVIfoZge4aCOpveN63LLOyXP5%2BfRlqk%2BOvmLOZXBxl2EVMaE2t0ncGLzo7jmOdEloOaN1OIctN4s%2BI48gXnnxVmaZ%2FiIbI9oDmlidbhzl41E%2BEz3ptMFX3PX1l27J2AYrI0Xo2este%2BFJMmFkgqOBW%2FAODezGjGYsvflu98vTFfen0008CbHGmbqSDqUXcS9IPg8fhO9svtjHauyQcJ0m%2FBbJuripE8WZW1wlS62QR%2BqmUdOicNsPlo8oDn04k%2F5BUbt4FfuRQF6HuPT%2FaYomFVrkiIy0ysB1EzqbHI%2BrVpPvDRDHL9P%2Ba%2FXwPnbfQFJOPE770GBe7fOZLKcp95bJuxTBnBmIcKe%2BQJE42HCjCLmddwcEjGpGpYM6dopAgbtYb18PKw1oVDMP55%2Bdksq%2B%2F6lOVdtLt%2FxpcXv19qJ53bEY3fn8MnzoSSmdFcq3g5%2BRwOCNQUCf2oLMLG6NsR3ZrmCWH71PsiJwmFym77o1uHWlTxjjBGquIakMePFkJgF8ohaa2mLrt3l1yXKwLxAURSNsqS0sa3%2BhjGL4PV7gSQW3dtEErpHRQjuQ527HZMCwSwK9O53v4iGyps%2BxpSghcYwsKK0wQY6pgGOmY7K8KNO%2FzkP%2BaroilW%2FVhlSkjY8%2FbhzJkfoOvPwsfmqxPlG1vyZMkcy3do%2BTJoc8CcNuBSshRN9Ogn9z4Pkg3l%2FbVmD7lOU12qYFcGQ736THzEZRUkeiR%2FAK2bbqu5qcivrVpMOoQamt4x2%2FD5wrWdK6PUwSQkRE9tHObLtdKOwP8sKPKKW4wbg4%2BFVJmHEhaZq9QBVuorzbKTuoRQY9TfmsCC4&X-Amz-Signature=edb7d1e87535e3baa1625b8a6b3268f3522f2df352f7f8a505d76dfd319634a8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

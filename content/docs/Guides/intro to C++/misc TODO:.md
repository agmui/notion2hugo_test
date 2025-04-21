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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDKHKYKC%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T022625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCilVxROsSwEtPVGlmt4iM27S3ehqoS0l6HLRLR1tuJQgIgO7NXUYsTidpa%2Bjv2hdeINbajazsmLljtPbUFx38A%2F5YqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqY%2F5QZjA06BxhxDCrcA%2Fr%2BgH46Rx24p7%2BJ2hEeBM%2F8e4zhbPIO4tfTmo3TvPAI0MpH4L%2B5uHKPcpFKfFNw1VMTYtHMygmdZ8vJ1RfKNudX0VxGUsYNDBmbdVMyITawLpnSbj2FhcrYghf3xBu0duYvPTEqSamsTT8YiV%2Byy4qKOyHWJomMiOdv23KAOPPysHo9FnMv%2FI3hBt83SL0t6wxBKrxwccz8zHLIBw%2FufK6ARn3kGagM%2FiT6eFDCNgSRJWT1aBSCp5uc%2BdmR6eSIe1T4GIMwCuOmfQZEjQq7hNq6U%2FoXa5gywKuuzIjlCGxZZw0t755XLOhEUXAR3Wxe7bx7UvD7o4ZZ647Dce1BdaMDzIblfEWX1tPvc%2BRm3NJlZslzQ9XH618szebAA72X9jOsD6lKMnlQo6Kcykvs3SxZSsZBwio9bmix3WnUn%2FmOdsr8AsuyPHgEZKe47WbfEYHdLHMO2b7pDZ%2Fn0Iic9zM%2BluTFrHR05cJ1e6WBwmqmsTeNEl6y6yt%2FAsrwaBnA88mJO7uUXhtzHAgDYKxuSs4%2BNZU6Mf59Gt6dRtbsTRZjsGzn6U77BulXB3nqd798Pla2lrcJZekwPL%2BUVPc0M94zktX5osaNG8M5McjyUz82JQWLMk7GUHfj%2Bz%2FMMLbalcAGOqUBgddmpWrEqbn0PwauIRln45CZvKkoxZpICFTAAum8z4Yh4vuyneiMIb47DhsiSw4%2BxN8kEiRvQ7wYXnit0HGJBE9Qhw3TMLVilJhCddyBVMG614JtBm6AZFevjpgaNMSrdvIsoRrSXvxQdJIs8aDci%2F%2Bk%2BFQBdqH%2B8OXAzz7fKpunZt7WKU1BMcNWiM6k1VxrU3%2F3yO6YFbrb64A%2FPqHQMoUqThdS&X-Amz-Signature=fe8369f4807e603186add1116958b90e3aed8de8cc4316535140d290f4df97cf&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDKHKYKC%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T022625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCilVxROsSwEtPVGlmt4iM27S3ehqoS0l6HLRLR1tuJQgIgO7NXUYsTidpa%2Bjv2hdeINbajazsmLljtPbUFx38A%2F5YqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqY%2F5QZjA06BxhxDCrcA%2Fr%2BgH46Rx24p7%2BJ2hEeBM%2F8e4zhbPIO4tfTmo3TvPAI0MpH4L%2B5uHKPcpFKfFNw1VMTYtHMygmdZ8vJ1RfKNudX0VxGUsYNDBmbdVMyITawLpnSbj2FhcrYghf3xBu0duYvPTEqSamsTT8YiV%2Byy4qKOyHWJomMiOdv23KAOPPysHo9FnMv%2FI3hBt83SL0t6wxBKrxwccz8zHLIBw%2FufK6ARn3kGagM%2FiT6eFDCNgSRJWT1aBSCp5uc%2BdmR6eSIe1T4GIMwCuOmfQZEjQq7hNq6U%2FoXa5gywKuuzIjlCGxZZw0t755XLOhEUXAR3Wxe7bx7UvD7o4ZZ647Dce1BdaMDzIblfEWX1tPvc%2BRm3NJlZslzQ9XH618szebAA72X9jOsD6lKMnlQo6Kcykvs3SxZSsZBwio9bmix3WnUn%2FmOdsr8AsuyPHgEZKe47WbfEYHdLHMO2b7pDZ%2Fn0Iic9zM%2BluTFrHR05cJ1e6WBwmqmsTeNEl6y6yt%2FAsrwaBnA88mJO7uUXhtzHAgDYKxuSs4%2BNZU6Mf59Gt6dRtbsTRZjsGzn6U77BulXB3nqd798Pla2lrcJZekwPL%2BUVPc0M94zktX5osaNG8M5McjyUz82JQWLMk7GUHfj%2Bz%2FMMLbalcAGOqUBgddmpWrEqbn0PwauIRln45CZvKkoxZpICFTAAum8z4Yh4vuyneiMIb47DhsiSw4%2BxN8kEiRvQ7wYXnit0HGJBE9Qhw3TMLVilJhCddyBVMG614JtBm6AZFevjpgaNMSrdvIsoRrSXvxQdJIs8aDci%2F%2Bk%2BFQBdqH%2B8OXAzz7fKpunZt7WKU1BMcNWiM6k1VxrU3%2F3yO6YFbrb64A%2FPqHQMoUqThdS&X-Amz-Signature=ec001cdf4cf17a22dc0656bebbc5c581afd5f3f95bb619efd7672140406266b0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663375C6SO%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T003707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDV%2BVYF779BHfJiCTy0bwAzo46P%2Fsqv7V%2BKTivi6XNPgIgDcExZXnz6L4OTWZlgLXUhKro4Y1aBe9onqQ%2BPBUC2UcqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAcpJmPpCtAW7KPuircA8x5eJDcGfTBucrkRxPTeHfvlmnU7%2BYJR%2BQPXqlm5SJlHF98veI0CyatVsAur1MtzxXpcoYtYm9GB0sx%2BuJUKbg%2BATl%2BxtSTQ8xFvVKULZUYktflYiRU%2BbS%2FORStrSbTJKrbS%2FhkbYt7S995CgpXm50TotsH33gqP825bOUPqUsECIRJxiXjAxPPsq7TQ2RCn%2FQldh5Xw73G2dsFp%2BSehrG%2FIMyIkXp1tgP4QZbVKbvZMyQQMx3xtoLIi5GH40XjdcvrFvhX%2Fd0Bm%2Bavz1GI9MFt6mXKO2SK6QQrb3uYq2iPuMBkM90GpxU6VcBHhEwiFKorkOct8muHvk%2BHH7Sx6HXd6Mmo1yVLh%2Bl2ZuCySvsxiVrRGuNe1rpXvo8bXEY5Ur8zlD73NfFwMyEAoSHUqn%2FJYL8ZdbeLvudf8AoDY4Xtqvmp3ay8KxIVllelCyXKMoLPocqJcf3%2BwomcTr0nUsNVU5YZGYaLbGMUWQEJ%2BAYqD1SjGhwnPcAFPMrYjPopcdayd33Uqp3B4uso8Rsq9CDtI63yWcvKvLH%2Fqnfdcg430hDQAOor5VqZLrR%2F07ibpW%2Fif506f3WCGsKD69JtTs1aK%2BSHwTI8oeKdFrCmVQu3t4X6H0zPKmfkmvHNMJuN074GOqUB5q2TFKlIS%2BNVizXDvREOwTiDYdcoN9aa0aiXYEC9zDbc6sWyV2VN%2F47cnm803mS%2BAUSHb%2BzfXD9nrsl9y7tuYEhaL0SfrqgStI3F%2BV3%2BiaKlCmJ%2BC3ais3ZURyG4DB19frVCzGvpYh9o7oXEfik5QOGB6s9qHD%2BmGCym9QWfTVd%2BZDTDONDYhkhsCC0GQjmHg4zUk%2FullEnHfoehNPOW33ygCDFm&X-Amz-Signature=0b0b4658029b4db8aacd1da41c76a1a15e05542fe2dcc2c0197039976ed968b5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663375C6SO%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T003707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDV%2BVYF779BHfJiCTy0bwAzo46P%2Fsqv7V%2BKTivi6XNPgIgDcExZXnz6L4OTWZlgLXUhKro4Y1aBe9onqQ%2BPBUC2UcqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAcpJmPpCtAW7KPuircA8x5eJDcGfTBucrkRxPTeHfvlmnU7%2BYJR%2BQPXqlm5SJlHF98veI0CyatVsAur1MtzxXpcoYtYm9GB0sx%2BuJUKbg%2BATl%2BxtSTQ8xFvVKULZUYktflYiRU%2BbS%2FORStrSbTJKrbS%2FhkbYt7S995CgpXm50TotsH33gqP825bOUPqUsECIRJxiXjAxPPsq7TQ2RCn%2FQldh5Xw73G2dsFp%2BSehrG%2FIMyIkXp1tgP4QZbVKbvZMyQQMx3xtoLIi5GH40XjdcvrFvhX%2Fd0Bm%2Bavz1GI9MFt6mXKO2SK6QQrb3uYq2iPuMBkM90GpxU6VcBHhEwiFKorkOct8muHvk%2BHH7Sx6HXd6Mmo1yVLh%2Bl2ZuCySvsxiVrRGuNe1rpXvo8bXEY5Ur8zlD73NfFwMyEAoSHUqn%2FJYL8ZdbeLvudf8AoDY4Xtqvmp3ay8KxIVllelCyXKMoLPocqJcf3%2BwomcTr0nUsNVU5YZGYaLbGMUWQEJ%2BAYqD1SjGhwnPcAFPMrYjPopcdayd33Uqp3B4uso8Rsq9CDtI63yWcvKvLH%2Fqnfdcg430hDQAOor5VqZLrR%2F07ibpW%2Fif506f3WCGsKD69JtTs1aK%2BSHwTI8oeKdFrCmVQu3t4X6H0zPKmfkmvHNMJuN074GOqUB5q2TFKlIS%2BNVizXDvREOwTiDYdcoN9aa0aiXYEC9zDbc6sWyV2VN%2F47cnm803mS%2BAUSHb%2BzfXD9nrsl9y7tuYEhaL0SfrqgStI3F%2BV3%2BiaKlCmJ%2BC3ais3ZURyG4DB19frVCzGvpYh9o7oXEfik5QOGB6s9qHD%2BmGCym9QWfTVd%2BZDTDONDYhkhsCC0GQjmHg4zUk%2FullEnHfoehNPOW33ygCDFm&X-Amz-Signature=fd44d3e5e8367f2d6365491661438ef70e461548f299d748215b1cdbb4e27570&X-Amz-SignedHeaders=host&x-id=GetObject)

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

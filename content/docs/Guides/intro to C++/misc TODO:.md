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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2RZYDY6%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEyTcSu2g2OorENbECHkwtXQiEmtzxnxQbP46bmmBAa%2FAiEAhGKIf0WxIx%2BMysoP4gkOZFr3XVEWMwstYlAZw3AEg7YqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3zIOf7b7khi%2B5K3yrcA5gtzD8hejyAsCgQ1mShBVmMBuHZmLzl9kfua5ZeShhYV25dDY9PjrdFnnHyAu7MZ2Nz%2BXiqUYwl8F1YKBZySMrljAqn5rp7JcjkcV169NgDmQvRPGMzTcn2x62%2BI95d9dOYhHCBRQ0k9ParEP%2BemZM62H2cOlZsLHqyeg1FzE2FNY9oZi%2BvUHSAHpSxfPzUaoezmKrDcYmIrGt4NHKvYXaFrvrHdKbSioFBoTrjQo2tuG%2FM3dIAgh2EPYdJZwPu%2Fk68dCO8w1C3ZSfqSaYC6NTLMxWnFmSNklGBVPZoJjIZTqK3v2CN4uPjwj%2BNgCC%2FDaw1P7%2BcN6qvg7OWmAnnCNGiHwvh26AfIgIXd5V9xXqT7WUEmj3gBV3yw3sInk4jAn4NPArk5WamufwW7lq4fasGg4EsEH5i%2B5jPnparLRcPrc7QJLHhCaG9qFqq%2F0JuYm%2BeYLP%2FfrU43R0AwUg3dNuGwUFDAoZGSgXVxMeEdAV85VrmVs%2FYPC6jvoO%2BH6BS7o9U1LjUDMOhMhjzSbOlBFh%2FLc%2F52w8F8mXL1mjg3wR%2FJznmaH2eHzTR3l1fMZHwUc9Ugs9T2FlXn6yKEaeBsza0C%2BYVpgUztFs1nTSYJKR%2BONE0kMODIm00tCzLMMetscEGOqUB4neipM%2BAIm2FTat%2FDPhzNGdtplLHialmbZW3FzdRvNbEZR54xAW4R%2BFCdwvXUbrjK7%2FT4k7BjdzDzoR7Q3f5V%2FGoqhU52%2BLBIPnfoNaqzR6s7wQPZLqx3kqadTOnYZyF72V6tEmxBE6yuKT%2BvkLKxM6PvQkbWXioyrJ5izNv3tgPhXTraAEQG0NnrYgJz2VXs8fGo%2FItZlvP7ftB8PW1mCnJgWFu&X-Amz-Signature=5616ec7e7ca5230ad0378c9f65cb02fdb11b595bf17c79b2d1e8b86b168688b8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2RZYDY6%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEyTcSu2g2OorENbECHkwtXQiEmtzxnxQbP46bmmBAa%2FAiEAhGKIf0WxIx%2BMysoP4gkOZFr3XVEWMwstYlAZw3AEg7YqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3zIOf7b7khi%2B5K3yrcA5gtzD8hejyAsCgQ1mShBVmMBuHZmLzl9kfua5ZeShhYV25dDY9PjrdFnnHyAu7MZ2Nz%2BXiqUYwl8F1YKBZySMrljAqn5rp7JcjkcV169NgDmQvRPGMzTcn2x62%2BI95d9dOYhHCBRQ0k9ParEP%2BemZM62H2cOlZsLHqyeg1FzE2FNY9oZi%2BvUHSAHpSxfPzUaoezmKrDcYmIrGt4NHKvYXaFrvrHdKbSioFBoTrjQo2tuG%2FM3dIAgh2EPYdJZwPu%2Fk68dCO8w1C3ZSfqSaYC6NTLMxWnFmSNklGBVPZoJjIZTqK3v2CN4uPjwj%2BNgCC%2FDaw1P7%2BcN6qvg7OWmAnnCNGiHwvh26AfIgIXd5V9xXqT7WUEmj3gBV3yw3sInk4jAn4NPArk5WamufwW7lq4fasGg4EsEH5i%2B5jPnparLRcPrc7QJLHhCaG9qFqq%2F0JuYm%2BeYLP%2FfrU43R0AwUg3dNuGwUFDAoZGSgXVxMeEdAV85VrmVs%2FYPC6jvoO%2BH6BS7o9U1LjUDMOhMhjzSbOlBFh%2FLc%2F52w8F8mXL1mjg3wR%2FJznmaH2eHzTR3l1fMZHwUc9Ugs9T2FlXn6yKEaeBsza0C%2BYVpgUztFs1nTSYJKR%2BONE0kMODIm00tCzLMMetscEGOqUB4neipM%2BAIm2FTat%2FDPhzNGdtplLHialmbZW3FzdRvNbEZR54xAW4R%2BFCdwvXUbrjK7%2FT4k7BjdzDzoR7Q3f5V%2FGoqhU52%2BLBIPnfoNaqzR6s7wQPZLqx3kqadTOnYZyF72V6tEmxBE6yuKT%2BvkLKxM6PvQkbWXioyrJ5izNv3tgPhXTraAEQG0NnrYgJz2VXs8fGo%2FItZlvP7ftB8PW1mCnJgWFu&X-Amz-Signature=409637f093af06e532bdf3befdaa97259914f1b6453cd15419bed90bbecf6581&X-Amz-SignedHeaders=host&x-id=GetObject)

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

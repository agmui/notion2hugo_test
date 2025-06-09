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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7POPTYF%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T190657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCMi5RbhobeZadxNp3TeyhAKmbg%2FQ5adfvKezVPPpb2QIgB2LGgpLgJq9UiQDI6mK6zsIrhqKYtv%2BSX6k%2BApVnveEqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFu5p2hn5BrqeJiPoircAzICNOqwD6DnWS7UryaMswFjM8WeAdzrxvSk4AZs7kMU2cMDEcVq0jcMy6OxDuMbKIOBXy0tnpu0XH0jC%2Bsu5fcTDTvFUoANFGrOMzGx3iHWzXd%2B%2FlcDubnAigGtH2%2F6TmcmE%2BdHHLU%2FBIj1xoTBmCGfYlMcHwTUFNrXzNY6I8WJtIohQVLzwZq3ulc4ajQkeEu3d8Da8WeJffx2jCQ2Yb%2BCvjBBcmiK2yYbOQyHxyKWNsKSGSyk1NZLqBz0Hjoa8yQfMbtK%2Fu8CfCsxM54R2Y708p%2FiMJQGq6yTSuinu2IxRFFwK6vtPfj4Nwu04zqUP39PPqtNSNofdlV4hFTosuoTWswkdyS%2B2YDKoHudvk1vKiWuoOMUB5KhlScHDiGshuOjuJc4k1VsyiclSAILzfqJGpMYjvdjvwYdBTpDHfFBtMtg9a31dStnTfb%2BlZ0H7XpdN3wHneawSUjPo6u7hcSWYEbu2ETB5BZ%2BrimvrW9GHH%2FzfsFepvHhs2OeajdeYnSVbl7T3xnUO2bwLQ6y%2BZJ6L5wME46VC%2FnUQUgImWTtLqrftNumbiLL5OngpizzkwQDRU1ILPz1YcBxHJHPC%2BRBtnl0YXHl3Pmb8UzR%2B2UeDJV2TlOOd3k3hrNwMK%2FLnMIGOqUBfKauRzuNXfh2vqcWjWDeEaSLJGPO3zqNCe9c28cZJ052ab%2Fyv1pTEhYhxgemDHjO4UUjGJm8sno1zSu9jsLkgLsFLX5rmqtV4MqMxrW%2FBbja9A4mnT7Tm6CgSX%2F%2Bo9Fmnjn7vcrl53%2FskLQro%2BK%2Fv4wlASv3JEtmsA2jq3Za4vFOjDPyKzJPRQRbE0zfjFMNRRCAeb0zAuPTNHta3gUFxpSVdzXo&X-Amz-Signature=067989e33ed25876339e8a695ae1dfa982590ba7c8c33c026af57cbbcc7dc529&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7POPTYF%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T190657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCMi5RbhobeZadxNp3TeyhAKmbg%2FQ5adfvKezVPPpb2QIgB2LGgpLgJq9UiQDI6mK6zsIrhqKYtv%2BSX6k%2BApVnveEqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFu5p2hn5BrqeJiPoircAzICNOqwD6DnWS7UryaMswFjM8WeAdzrxvSk4AZs7kMU2cMDEcVq0jcMy6OxDuMbKIOBXy0tnpu0XH0jC%2Bsu5fcTDTvFUoANFGrOMzGx3iHWzXd%2B%2FlcDubnAigGtH2%2F6TmcmE%2BdHHLU%2FBIj1xoTBmCGfYlMcHwTUFNrXzNY6I8WJtIohQVLzwZq3ulc4ajQkeEu3d8Da8WeJffx2jCQ2Yb%2BCvjBBcmiK2yYbOQyHxyKWNsKSGSyk1NZLqBz0Hjoa8yQfMbtK%2Fu8CfCsxM54R2Y708p%2FiMJQGq6yTSuinu2IxRFFwK6vtPfj4Nwu04zqUP39PPqtNSNofdlV4hFTosuoTWswkdyS%2B2YDKoHudvk1vKiWuoOMUB5KhlScHDiGshuOjuJc4k1VsyiclSAILzfqJGpMYjvdjvwYdBTpDHfFBtMtg9a31dStnTfb%2BlZ0H7XpdN3wHneawSUjPo6u7hcSWYEbu2ETB5BZ%2BrimvrW9GHH%2FzfsFepvHhs2OeajdeYnSVbl7T3xnUO2bwLQ6y%2BZJ6L5wME46VC%2FnUQUgImWTtLqrftNumbiLL5OngpizzkwQDRU1ILPz1YcBxHJHPC%2BRBtnl0YXHl3Pmb8UzR%2B2UeDJV2TlOOd3k3hrNwMK%2FLnMIGOqUBfKauRzuNXfh2vqcWjWDeEaSLJGPO3zqNCe9c28cZJ052ab%2Fyv1pTEhYhxgemDHjO4UUjGJm8sno1zSu9jsLkgLsFLX5rmqtV4MqMxrW%2FBbja9A4mnT7Tm6CgSX%2F%2Bo9Fmnjn7vcrl53%2FskLQro%2BK%2Fv4wlASv3JEtmsA2jq3Za4vFOjDPyKzJPRQRbE0zfjFMNRRCAeb0zAuPTNHta3gUFxpSVdzXo&X-Amz-Signature=d70298af3ff7cabcfd4fb1bc6e3fa5739896d27e306d9a75e27e70f65d45fa08&X-Amz-SignedHeaders=host&x-id=GetObject)

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

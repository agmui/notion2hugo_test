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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP2E6FFL%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T200723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIB1%2FgVm0DkA823mY7bTAghHUEXHvu1upssLDs1L6irQ6AiATmsmTy8FAt9hp001SEdx8CZ1Uz86ZO33b8spsQqvWhyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLPBvRy5%2BKV5kcABdKtwDcfImVP7xLPsUny904Zr6rm87FF2h4X9vTERsIMX9fq3M6ImVIcmFTs9Iyb4sc6WJNp1AU%2B%2BqvmmG15P6VcB%2F6XgoBQgx%2Fgnrps5N1SdZM2%2BLPnX2jp4Ira8%2BjLNDJtDvGe8cK9HWnua6DY8ebYLXDU2nSsxeebzK487Q8dbv77LNtfl0BcATNxzT12TUC%2Bflp0%2BRc14pFf1Q6o9mqXxYsL3G2gPjBFpMbaG4g4SvoQoMzVCMIYWkZLaYkIZUIs1gbCpPZOUjab83gMD9l2fBTYQI%2FYg3i9czhWjSPdr3ugIlYDo3IvNECvMgRUB%2FaTDbMt3dZVyUO8PBAKM9He2Y82T0MtSPeNaux9GtOvjqNsSGoWP4g%2BSu36xEBJXOVspMSTdl%2F6AdzVbVLswntOBporA0nh3ow0Efp1cbc4W%2BE3MK0tCnDBaX%2FEFWyLG6YL%2F1tqk1N7cWwWiTtUQXAmej1d3KfWtT8VmpF11pok%2Fm3ng%2F1oEHNU9X%2FvdZKbkoT1%2FoaxxrIrjHz0wKcbPfNkueB5YlBx7nCgQ9Qxo5ZeuK5gljqRnRZ9xjQ5F1fBauA%2BTuVaaZ7U2YAEJ5znPH%2FJQWHgyHmyK9Sa5KVvY9ECalqEDWbrmM%2F5YAsDTSFzcwk8eNvgY6pgEc%2BkQUJOWn3p%2B%2B4q6AHDeY66dm3cpkCypyADPlgK0P%2BM08glw7y2xe1qHvsLM%2BG9%2Fue835VkJ2vaCfDleIidnUoutcGtp1V7GQFuhr1KZdcoZk87bI45VMgTnMW7pn0xjDeffezyzMRgH47qcS7wB4Rl7kKO%2BNRQLA8QWE4cXFQ5rwyHMJYQY91jcHO8Ml9IUlAxzfGNbiJ3YWZ%2FzeD%2BNVlcki9YKc&X-Amz-Signature=2396c69d9015d71c78e9efd3ccc1f4ddcc64ac93112986b69e74026ec529eead&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP2E6FFL%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T200723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIB1%2FgVm0DkA823mY7bTAghHUEXHvu1upssLDs1L6irQ6AiATmsmTy8FAt9hp001SEdx8CZ1Uz86ZO33b8spsQqvWhyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLPBvRy5%2BKV5kcABdKtwDcfImVP7xLPsUny904Zr6rm87FF2h4X9vTERsIMX9fq3M6ImVIcmFTs9Iyb4sc6WJNp1AU%2B%2BqvmmG15P6VcB%2F6XgoBQgx%2Fgnrps5N1SdZM2%2BLPnX2jp4Ira8%2BjLNDJtDvGe8cK9HWnua6DY8ebYLXDU2nSsxeebzK487Q8dbv77LNtfl0BcATNxzT12TUC%2Bflp0%2BRc14pFf1Q6o9mqXxYsL3G2gPjBFpMbaG4g4SvoQoMzVCMIYWkZLaYkIZUIs1gbCpPZOUjab83gMD9l2fBTYQI%2FYg3i9czhWjSPdr3ugIlYDo3IvNECvMgRUB%2FaTDbMt3dZVyUO8PBAKM9He2Y82T0MtSPeNaux9GtOvjqNsSGoWP4g%2BSu36xEBJXOVspMSTdl%2F6AdzVbVLswntOBporA0nh3ow0Efp1cbc4W%2BE3MK0tCnDBaX%2FEFWyLG6YL%2F1tqk1N7cWwWiTtUQXAmej1d3KfWtT8VmpF11pok%2Fm3ng%2F1oEHNU9X%2FvdZKbkoT1%2FoaxxrIrjHz0wKcbPfNkueB5YlBx7nCgQ9Qxo5ZeuK5gljqRnRZ9xjQ5F1fBauA%2BTuVaaZ7U2YAEJ5znPH%2FJQWHgyHmyK9Sa5KVvY9ECalqEDWbrmM%2F5YAsDTSFzcwk8eNvgY6pgEc%2BkQUJOWn3p%2B%2B4q6AHDeY66dm3cpkCypyADPlgK0P%2BM08glw7y2xe1qHvsLM%2BG9%2Fue835VkJ2vaCfDleIidnUoutcGtp1V7GQFuhr1KZdcoZk87bI45VMgTnMW7pn0xjDeffezyzMRgH47qcS7wB4Rl7kKO%2BNRQLA8QWE4cXFQ5rwyHMJYQY91jcHO8Ml9IUlAxzfGNbiJ3YWZ%2FzeD%2BNVlcki9YKc&X-Amz-Signature=6f4493f3944416f2ed8f932bfab42d0be8f97adfc4e2cec18c99bd790c022259&X-Amz-SignedHeaders=host&x-id=GetObject)

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

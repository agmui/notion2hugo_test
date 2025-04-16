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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPCJBICF%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLDJKjs%2BR5IHGvt1uYyU4acBgMSKVKHjjS3%2BB4qgEuTAiA0cF2RbuhGL9OcWfx%2BtGE4QFOMqPttf%2FLsOd90I41DLCr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMm9mvJYD0HuyN0BCCKtwDBW91EMlCALocQbP1%2FPWp2nnOA5J6XUhCGz7olRJ95%2FfxC5HJH2BjP6hMY5lElh%2FAnL3sFhJRq1WqRXqtLFkjq1rOqghteUy8euKFGoFr6KslvyAM4yJusTKUz2tAH0%2Fv4kAWPM1OiI5eZR0HyrjNCDZtCYbVwQ9CW7ACzp7IwHodtsNhKQbQNf2GemxgJxFUi6ffUpgbXjLlPzs48eYx6rN2z4ECjoEAC8ObQpeuLFtJAAjhLTAYsk5XqXPDDBLHNoiHuPaOKKfX5IsZer14G49%2B0rYV5bLAOlhJ4By63n1dqc%2FtCPM37bhV503fchYxeCuQlv%2FJXZ9OoXE%2BK%2FqwuVF5NXaLh3bXZ6K8SF7YEHvMt1WUFDSNuSlyl1t7mM97DRX%2F0kInb1%2BjWmdgm%2BrfkYDCv6k%2B2jidND4Zn4CrH1WQ%2BU5aJT25mX%2FDRaYdnPh8D9%2Br0K2xF599gUi%2BI%2FGId7To%2FpaDBx0SOKMNcFX1b4NSqa%2BzHeIrWtURuGK71AVgyyPDVICYwEKj8OHJ%2BtqFV89lmGhd3yGnQoRrrhAzUjoMbPACXPD%2Fbu14YeS3izFq1R3OZ4tbRE80ZAWs3jMI3AxNfuGvimkGNTbZVzMTq7%2FjHf%2FNXlqTor%2B2P7Awz5KAwAY6pgG3Y3BxIprtWlCLXvMrqTxES82Z69gQlZZR%2BzB9SXHTonfL6mThyv4g46x3%2Fry%2B4Sb4yS%2FJxZ3%2Fq3tamLcAXVRUuAFbOx6oCoGSySL5I73xbTeddA8thMCzN2sJYU7QlZDa48iMlXUCE2bgZgxIllv8faHt3q8CBk1GBzu6qRZPg9CQuHBIxJ%2FSnOL8OKuKcbYGfxxmpRWoahLaBdSDXups4%2Fk4oV2w&X-Amz-Signature=84b94a58f88f4b23f3c1409166f1fae5584028a50fbc66cc6ba7a65e888219fc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPCJBICF%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLDJKjs%2BR5IHGvt1uYyU4acBgMSKVKHjjS3%2BB4qgEuTAiA0cF2RbuhGL9OcWfx%2BtGE4QFOMqPttf%2FLsOd90I41DLCr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMm9mvJYD0HuyN0BCCKtwDBW91EMlCALocQbP1%2FPWp2nnOA5J6XUhCGz7olRJ95%2FfxC5HJH2BjP6hMY5lElh%2FAnL3sFhJRq1WqRXqtLFkjq1rOqghteUy8euKFGoFr6KslvyAM4yJusTKUz2tAH0%2Fv4kAWPM1OiI5eZR0HyrjNCDZtCYbVwQ9CW7ACzp7IwHodtsNhKQbQNf2GemxgJxFUi6ffUpgbXjLlPzs48eYx6rN2z4ECjoEAC8ObQpeuLFtJAAjhLTAYsk5XqXPDDBLHNoiHuPaOKKfX5IsZer14G49%2B0rYV5bLAOlhJ4By63n1dqc%2FtCPM37bhV503fchYxeCuQlv%2FJXZ9OoXE%2BK%2FqwuVF5NXaLh3bXZ6K8SF7YEHvMt1WUFDSNuSlyl1t7mM97DRX%2F0kInb1%2BjWmdgm%2BrfkYDCv6k%2B2jidND4Zn4CrH1WQ%2BU5aJT25mX%2FDRaYdnPh8D9%2Br0K2xF599gUi%2BI%2FGId7To%2FpaDBx0SOKMNcFX1b4NSqa%2BzHeIrWtURuGK71AVgyyPDVICYwEKj8OHJ%2BtqFV89lmGhd3yGnQoRrrhAzUjoMbPACXPD%2Fbu14YeS3izFq1R3OZ4tbRE80ZAWs3jMI3AxNfuGvimkGNTbZVzMTq7%2FjHf%2FNXlqTor%2B2P7Awz5KAwAY6pgG3Y3BxIprtWlCLXvMrqTxES82Z69gQlZZR%2BzB9SXHTonfL6mThyv4g46x3%2Fry%2B4Sb4yS%2FJxZ3%2Fq3tamLcAXVRUuAFbOx6oCoGSySL5I73xbTeddA8thMCzN2sJYU7QlZDa48iMlXUCE2bgZgxIllv8faHt3q8CBk1GBzu6qRZPg9CQuHBIxJ%2FSnOL8OKuKcbYGfxxmpRWoahLaBdSDXups4%2Fk4oV2w&X-Amz-Signature=5ef4dae3b21ff0154145036f65a756db4a80af07148b304d47522c9dae5f6672&X-Amz-SignedHeaders=host&x-id=GetObject)

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

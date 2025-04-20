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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKXG7L65%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T080940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIBv%2B4eFtbMyyF%2BneaFdsrRAbnzDeyVSyA9pmRhhAzVg8AiEAtRanBJ%2Fy9t3CruceskGVpLuyJcmtFO9ppNzh%2F2Tb2Y0qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzbXZq2mfwkLzJbYircA1ciLqs7lznuOG%2B3w8iHqw4wtvooA43cKFlHVxaW%2BfEtvZJrGO2SVXMJX9ZjjKLOwzH9gFevaZZLcIAQmIgNL6ugV0NUMkrRk7M8UYflSq%2BncfG%2Fz3iApxEytFolHyJCfmkMd8utRt7tYyomIqIFOZxAF%2FqWdvdWpuG3JdSDUXm2Z8Ko%2BJrNOA6QtGTEvJaWKnO3qFTXPG%2BHmq7G7k11G0kx84j8X2Jm2SOyxFZVLm%2BCTosom33y62PrfYvM070OjtvBUILz3jmDupPnOFI0uNYHfAXhNUMgukxXnzimqVcp3f8TXEZEc3snqQSKC%2FlaZarV%2FqWme%2F%2FxAIaPwFC0Q5GITuP69%2FAiBD7reKoT84OgvDUK2znyJ73X6Qzx3pRaoGRjtrlzy0187yIhoZa0rdQkCmFpH9ti%2FJm7eqgA9D9jOto7kaFSFwhKsaj8fQnQ6fDpbd4PRQ8%2FsIYlY1vZWB8EPuEM0Nn1LVRz95AxUBRBIbl4ocjs6GxFFvabcPF6yUf4IDWdGhz3xKWTNmw0yrU5WxXNKNjeug0TZLWzyDZl8My3DC9GGgGXTv8lcpJHCrudHzI5QYS9WSebaI%2FFtRek7J%2BV8djpgsI3Xe%2Fhbaw3pzCqnwVWTC%2FrY5OfMPmjksAGOqUBED9ZFzVsSI1BOXrMxeH0ay6Er85qkHhfoX916LpvRkvFnQ6zAfygiQjoEcZ3Up5ZOx%2Bl8G6LXeF6ssij6QZwgrIG6McHUX%2FL%2BzXG06a99jKNRdtGG9iwXOVqOC%2BlcRsULOYMDfU72m6kEIcpfrHXD32y6v3CaPxyxuQaJL3RosduNZhCBUXFq7VVM8Qjk9KBY8Zxd43ntxGLO26mViEkR5RPGCI0&X-Amz-Signature=8b885882ff11d197276fe324bfa13e13ae337ac0d90fbb8974eafa07e30ecbb9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKXG7L65%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T080940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIBv%2B4eFtbMyyF%2BneaFdsrRAbnzDeyVSyA9pmRhhAzVg8AiEAtRanBJ%2Fy9t3CruceskGVpLuyJcmtFO9ppNzh%2F2Tb2Y0qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzbXZq2mfwkLzJbYircA1ciLqs7lznuOG%2B3w8iHqw4wtvooA43cKFlHVxaW%2BfEtvZJrGO2SVXMJX9ZjjKLOwzH9gFevaZZLcIAQmIgNL6ugV0NUMkrRk7M8UYflSq%2BncfG%2Fz3iApxEytFolHyJCfmkMd8utRt7tYyomIqIFOZxAF%2FqWdvdWpuG3JdSDUXm2Z8Ko%2BJrNOA6QtGTEvJaWKnO3qFTXPG%2BHmq7G7k11G0kx84j8X2Jm2SOyxFZVLm%2BCTosom33y62PrfYvM070OjtvBUILz3jmDupPnOFI0uNYHfAXhNUMgukxXnzimqVcp3f8TXEZEc3snqQSKC%2FlaZarV%2FqWme%2F%2FxAIaPwFC0Q5GITuP69%2FAiBD7reKoT84OgvDUK2znyJ73X6Qzx3pRaoGRjtrlzy0187yIhoZa0rdQkCmFpH9ti%2FJm7eqgA9D9jOto7kaFSFwhKsaj8fQnQ6fDpbd4PRQ8%2FsIYlY1vZWB8EPuEM0Nn1LVRz95AxUBRBIbl4ocjs6GxFFvabcPF6yUf4IDWdGhz3xKWTNmw0yrU5WxXNKNjeug0TZLWzyDZl8My3DC9GGgGXTv8lcpJHCrudHzI5QYS9WSebaI%2FFtRek7J%2BV8djpgsI3Xe%2Fhbaw3pzCqnwVWTC%2FrY5OfMPmjksAGOqUBED9ZFzVsSI1BOXrMxeH0ay6Er85qkHhfoX916LpvRkvFnQ6zAfygiQjoEcZ3Up5ZOx%2Bl8G6LXeF6ssij6QZwgrIG6McHUX%2FL%2BzXG06a99jKNRdtGG9iwXOVqOC%2BlcRsULOYMDfU72m6kEIcpfrHXD32y6v3CaPxyxuQaJL3RosduNZhCBUXFq7VVM8Qjk9KBY8Zxd43ntxGLO26mViEkR5RPGCI0&X-Amz-Signature=9409cf6a7f51e53e8ace6888de61321f764f00d286013849e7ad7d8cc103c931&X-Amz-SignedHeaders=host&x-id=GetObject)

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

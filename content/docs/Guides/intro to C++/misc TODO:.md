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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQTEDQGN%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBlJTSt%2FeVqrqJdLYCRW7kHfasZnndewkhT1PBooGAQfAiEA0qhh96W%2Fb1E27%2FoK0%2BUddg38vNgvdLiXq%2BMvnEDXpZAqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuKn0xHNXxy785IFyrcAyQAWdba5%2Bff9zmeGFfbNn1%2Fg2zxLwyJXCLGcou%2Fjilr6zUNzHhNuIzo1dhnjYxR4dHzJp641i5NklN61C33o79QwQJ7IMPKAMESicrFZSyBtZIiNkIsc7%2BN%2BdXHiG1hrAirkG0Inb8lNv6PbpXOsjt6O7nGXfu2ThRqqYzNEMIar7j7NwWAsrJrJbl8eEEHo2BhWhneIcFPBxMf3cd389jHc1uwDFDxmTYLsFqv6l7sKVheBvWAtv2kUt56RdJarFU5OGlR4IYzKF9GfllSrZ7yLXHsvsEYR89f4AiYN1OnD9yNp9JdrryKX0SRa8l409wtdPVI6XFqgBcUus99N4Kgi2M5Zr3gn7YcjWXzdA5wnD1EiewVn%2BypXl7ebXdYMD%2BT%2FPk72OoV3ZJskwFmvkl6k78%2BbfRgq3U2w8Q0s9efCdMTaP%2F2r1hD5hhFknBXrVvRhZJ4I8GxJNFVj2IfzX%2Fbuf3EcR%2FZe30c0USKm%2F6VRXnAkH75Y3pGqGKuIkWgEr%2FCYBl68X4epk61yZJVPts5n8CPGajSUqz%2FnIbOLsWCIVaA9ggvbWBfIup%2Fpo6e4CzmxWJCi8hTj70zPvEAo4Ng0MMtBE84qAKpNRv25uQCFDgsjb24Fc25ZxmFMK%2FLs8EGOqUBfndRlf0eoFdE6cIvIaVny15B7GDD0xHXikQVS%2BhnbmOUhVRt%2FR0U%2Bvn40vbq2etZ8vTZGtQw%2Fouf5ysspyN%2Fedf3eScIcesugvprDYdcfbVB7doH3vlFVq8J6GdIjBT7lY19b0Dsz5H8SlKSPqkfimNcMGll0v5bpNdAqsbQ%2FlU0HNKLj5A%2BuD5JxeyqP1hHEsve8TBBnE0DdfGP5j3XP%2BkZpMlH&X-Amz-Signature=29faa456eda67c076ab7d12ce82b1f56f0ae753c1c336b946957475412e7416a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQTEDQGN%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBlJTSt%2FeVqrqJdLYCRW7kHfasZnndewkhT1PBooGAQfAiEA0qhh96W%2Fb1E27%2FoK0%2BUddg38vNgvdLiXq%2BMvnEDXpZAqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuKn0xHNXxy785IFyrcAyQAWdba5%2Bff9zmeGFfbNn1%2Fg2zxLwyJXCLGcou%2Fjilr6zUNzHhNuIzo1dhnjYxR4dHzJp641i5NklN61C33o79QwQJ7IMPKAMESicrFZSyBtZIiNkIsc7%2BN%2BdXHiG1hrAirkG0Inb8lNv6PbpXOsjt6O7nGXfu2ThRqqYzNEMIar7j7NwWAsrJrJbl8eEEHo2BhWhneIcFPBxMf3cd389jHc1uwDFDxmTYLsFqv6l7sKVheBvWAtv2kUt56RdJarFU5OGlR4IYzKF9GfllSrZ7yLXHsvsEYR89f4AiYN1OnD9yNp9JdrryKX0SRa8l409wtdPVI6XFqgBcUus99N4Kgi2M5Zr3gn7YcjWXzdA5wnD1EiewVn%2BypXl7ebXdYMD%2BT%2FPk72OoV3ZJskwFmvkl6k78%2BbfRgq3U2w8Q0s9efCdMTaP%2F2r1hD5hhFknBXrVvRhZJ4I8GxJNFVj2IfzX%2Fbuf3EcR%2FZe30c0USKm%2F6VRXnAkH75Y3pGqGKuIkWgEr%2FCYBl68X4epk61yZJVPts5n8CPGajSUqz%2FnIbOLsWCIVaA9ggvbWBfIup%2Fpo6e4CzmxWJCi8hTj70zPvEAo4Ng0MMtBE84qAKpNRv25uQCFDgsjb24Fc25ZxmFMK%2FLs8EGOqUBfndRlf0eoFdE6cIvIaVny15B7GDD0xHXikQVS%2BhnbmOUhVRt%2FR0U%2Bvn40vbq2etZ8vTZGtQw%2Fouf5ysspyN%2Fedf3eScIcesugvprDYdcfbVB7doH3vlFVq8J6GdIjBT7lY19b0Dsz5H8SlKSPqkfimNcMGll0v5bpNdAqsbQ%2FlU0HNKLj5A%2BuD5JxeyqP1hHEsve8TBBnE0DdfGP5j3XP%2BkZpMlH&X-Amz-Signature=faa92e2bdaf98871d57534feff3e07af32a04d1a906f2a26a8e4396898c8c354&X-Amz-SignedHeaders=host&x-id=GetObject)

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

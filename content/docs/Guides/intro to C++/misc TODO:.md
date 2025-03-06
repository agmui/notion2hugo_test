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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626SDNQ6S%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHS8fvA7PlmijugObb9ehzBmkaQ8MkUxw5oFfACQAp1UAiEA4RuBIgPAOd%2B7SnBMLuubEYqu9ZfAzRxbQ1c3HY2TaFkq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDJRndbunepozaSdE5yrcA04ovEHWWBdzUCbhpUA%2Ffv5f86KwvYPEsXZY%2BDK9UpX1OfaFTHTBjI5ZL6U6qWYW55PJG8V4ecR376KNUcvDHrxP8wXbrx%2BlSkYWd4N0eOdi7ECI3f%2B6O3k0SjDrDWVPi%2BFdG2PCfk2aFWMtmP9FdfnFlrubEPCxA9tTQmgWm4FepjDcDkIgTfnP%2F6HYnKu%2BEuH%2FSUnNFwbZrrp6CYSYyCtd8Ic0Z3Kqow31wYhRrnKlJ242qqupqt2fEJqRelA26locFhE355TLs7LgtfKnSGLXpedwcebkMYB0qEmFhdDWMGXwOfMa%2B%2FjGUb46O07YK84PL5GYsFAO9ZVDMvSRMYOD7cSa32i3%2BWamajkMzrfBDYAHOi2prSKVaQjeaC5PSdRROSV%2BDMAbIQLb%2FDyVOwvTHLnMBjW6oRmTvkj%2BmITKuagQ%2F4%2BIDZCcyPh1odagMhcrr%2FbGzRpJDwOmIiOkpQuTK0b7EecW7jGiD2zNm2kcgq6KKL%2BsP45udJ0%2ByqIwkM1MxpY2Km8pgMnLuQZTzSuk97XlBh7KK3RCtCJkZSO84FmAq4pTJ77rnYo2WkksIWsYn3EX%2ByeP4EpfIUCMpsmNGpqZFfCGnfhkurqc7hoV3FO%2FR1F0G77VwY6sMMn2pL4GOqUBL0lJ4LOe6l4ZvR3tOOoY7otbXv6OF0xLmgxhPUH1y1EWTt%2BRTQoDYRZk4kDwmYwVyWYBStJYcus39XOQeAF5PlsWP%2BlI3pGkexyvEx%2BnYpxpB287MqtKfXhf21CPw2AJr%2FIGh38xpjBy%2B0MFa4k3Fllo%2Fu38bS9M0yOqkxcd5YEOvF1fhfaLFV%2F8UyKeeN0Dl1%2F7kY4qAHmhPZpaRmTbIirk8bmE&X-Amz-Signature=f092ce636c32c1ed3711ca889962d6f32f2a81c1985bc18ab626ac9be08bb3f1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626SDNQ6S%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHS8fvA7PlmijugObb9ehzBmkaQ8MkUxw5oFfACQAp1UAiEA4RuBIgPAOd%2B7SnBMLuubEYqu9ZfAzRxbQ1c3HY2TaFkq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDJRndbunepozaSdE5yrcA04ovEHWWBdzUCbhpUA%2Ffv5f86KwvYPEsXZY%2BDK9UpX1OfaFTHTBjI5ZL6U6qWYW55PJG8V4ecR376KNUcvDHrxP8wXbrx%2BlSkYWd4N0eOdi7ECI3f%2B6O3k0SjDrDWVPi%2BFdG2PCfk2aFWMtmP9FdfnFlrubEPCxA9tTQmgWm4FepjDcDkIgTfnP%2F6HYnKu%2BEuH%2FSUnNFwbZrrp6CYSYyCtd8Ic0Z3Kqow31wYhRrnKlJ242qqupqt2fEJqRelA26locFhE355TLs7LgtfKnSGLXpedwcebkMYB0qEmFhdDWMGXwOfMa%2B%2FjGUb46O07YK84PL5GYsFAO9ZVDMvSRMYOD7cSa32i3%2BWamajkMzrfBDYAHOi2prSKVaQjeaC5PSdRROSV%2BDMAbIQLb%2FDyVOwvTHLnMBjW6oRmTvkj%2BmITKuagQ%2F4%2BIDZCcyPh1odagMhcrr%2FbGzRpJDwOmIiOkpQuTK0b7EecW7jGiD2zNm2kcgq6KKL%2BsP45udJ0%2ByqIwkM1MxpY2Km8pgMnLuQZTzSuk97XlBh7KK3RCtCJkZSO84FmAq4pTJ77rnYo2WkksIWsYn3EX%2ByeP4EpfIUCMpsmNGpqZFfCGnfhkurqc7hoV3FO%2FR1F0G77VwY6sMMn2pL4GOqUBL0lJ4LOe6l4ZvR3tOOoY7otbXv6OF0xLmgxhPUH1y1EWTt%2BRTQoDYRZk4kDwmYwVyWYBStJYcus39XOQeAF5PlsWP%2BlI3pGkexyvEx%2BnYpxpB287MqtKfXhf21CPw2AJr%2FIGh38xpjBy%2B0MFa4k3Fllo%2Fu38bS9M0yOqkxcd5YEOvF1fhfaLFV%2F8UyKeeN0Dl1%2F7kY4qAHmhPZpaRmTbIirk8bmE&X-Amz-Signature=cd2c2d22284410e63d3de438d2e8da734b8df9eeb32bd861545a5420c1649ab0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

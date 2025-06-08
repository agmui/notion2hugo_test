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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654ZDB2DV%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T042036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOm3vFVF5vU3VF9FkGOWtV8D6LYb63TewiVP1UEen84AiBxYlsa0NemFQb%2BWhrY9oXl4GLPXenkPmzWEWIewd0YRyqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy8bhQKPd2jvRvRlEKtwDwOeabtRzYJFTtJCtcUFZ7HMWeAg4p18iqTYVItOhBDVseoioQX11E6TBPf5vh%2BQE2a8CsqkE7AVlVXCqpbrkOVDT5FRKxvxYWrNg%2B4AIwRjrn51CXIh4u33UTrZY7lDFr6Bcu5DbdEAoZ9usE7T2m9AMDMyODnYVNwyirq00XxRSe4K6HHxgtEEnt7E2NNhcwbb7Y7Gz3UbIzTjjkvK2SMlVXoyCMcG3JmJDOaFQJlkktU9%2BXcsF1%2FwDwFMcY8HkSNnhz%2FDDdRoYwanZFmb6iiU%2FuiCPJG88Hkjwme9Apm29Ul%2Fr8KdUt6deiZEN%2BxliAMHZ1KOF2SalVnmhpsShtstGkJTQVv8d8AfpOJZrEWUD0S5aacmznYwfpJ0oYK%2FsHLTBPVkpw6WmZgMmfmCi7isrVjruQenX5Mf6d1WDN%2Bx3qFOsJijH2Eoq4JcLC2tQ1ZcgQVGPXsj1I3pmsqhv40M%2BmrHc8aSuPe6lzQYuKhbsIs7LeKw6%2FKAxq5hEwixddIR20PSYNRt%2BFMUFe0HnrWaO464MJQa%2BmTwMUBB5FB8kNbHJZJxM%2F%2F%2B%2BZXvIbvBl%2FAvyLQaz21TxD%2F0vtWIf3%2BY8z5G9ozNdETl40dmIkN%2FKBu2uJ1Nryb2clRYw4MeTwgY6pgEtUrs98c%2B9TDoSBUFM0CPEylKYOeIbIQizUUliCek%2Fc30oIyXgBcARLsl7%2F0hcK0TND5sN121mb9Q9ZobTEsr8I7W%2B4JSQwyFBg%2BxhruHCQ4CRSoR5ThIamnAsttRy15Y1E7ppdPLD%2FHt2vsduoEBZCteRBbUwTDfjjAcRc%2BtPv7z%2BpZewmx2t0MJs3d6FSURPypbHTD5vXBta%2F9J3Z9Ezoz9TbwbD&X-Amz-Signature=3e63a3fb4d1d67e9157951ca92c1555a0352d333c8abc04ec7cd3abd971213ce&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654ZDB2DV%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T042036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOm3vFVF5vU3VF9FkGOWtV8D6LYb63TewiVP1UEen84AiBxYlsa0NemFQb%2BWhrY9oXl4GLPXenkPmzWEWIewd0YRyqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy8bhQKPd2jvRvRlEKtwDwOeabtRzYJFTtJCtcUFZ7HMWeAg4p18iqTYVItOhBDVseoioQX11E6TBPf5vh%2BQE2a8CsqkE7AVlVXCqpbrkOVDT5FRKxvxYWrNg%2B4AIwRjrn51CXIh4u33UTrZY7lDFr6Bcu5DbdEAoZ9usE7T2m9AMDMyODnYVNwyirq00XxRSe4K6HHxgtEEnt7E2NNhcwbb7Y7Gz3UbIzTjjkvK2SMlVXoyCMcG3JmJDOaFQJlkktU9%2BXcsF1%2FwDwFMcY8HkSNnhz%2FDDdRoYwanZFmb6iiU%2FuiCPJG88Hkjwme9Apm29Ul%2Fr8KdUt6deiZEN%2BxliAMHZ1KOF2SalVnmhpsShtstGkJTQVv8d8AfpOJZrEWUD0S5aacmznYwfpJ0oYK%2FsHLTBPVkpw6WmZgMmfmCi7isrVjruQenX5Mf6d1WDN%2Bx3qFOsJijH2Eoq4JcLC2tQ1ZcgQVGPXsj1I3pmsqhv40M%2BmrHc8aSuPe6lzQYuKhbsIs7LeKw6%2FKAxq5hEwixddIR20PSYNRt%2BFMUFe0HnrWaO464MJQa%2BmTwMUBB5FB8kNbHJZJxM%2F%2F%2B%2BZXvIbvBl%2FAvyLQaz21TxD%2F0vtWIf3%2BY8z5G9ozNdETl40dmIkN%2FKBu2uJ1Nryb2clRYw4MeTwgY6pgEtUrs98c%2B9TDoSBUFM0CPEylKYOeIbIQizUUliCek%2Fc30oIyXgBcARLsl7%2F0hcK0TND5sN121mb9Q9ZobTEsr8I7W%2B4JSQwyFBg%2BxhruHCQ4CRSoR5ThIamnAsttRy15Y1E7ppdPLD%2FHt2vsduoEBZCteRBbUwTDfjjAcRc%2BtPv7z%2BpZewmx2t0MJs3d6FSURPypbHTD5vXBta%2F9J3Z9Ezoz9TbwbD&X-Amz-Signature=28288ff8a2fcf5083609beed22bc7c91ee94a7e19d9ae09c4e71875e891a25c9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

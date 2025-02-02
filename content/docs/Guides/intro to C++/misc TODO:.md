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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VITMEW4%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T140154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOpB6z12fvptna4BDLnCkg1SOqFvIeggEQfUxhL59AZAiEAujsPQGsHcZPYj4NiwZP7YBXweL0USC4ITfCT6u0y6NUqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABMGFQT%2FpY8rIDb4SrcAxDwawZVMYyR78QsQrD3vyaRsqwLn123FALGXrU%2BJClx6QjurBJdSl6TTWBYOjEoWVl%2FYfURdK0qD9xdvDVOOkryg%2FpPImtyaPtYUuY3HNA1NRRCKNWhQBFK9fKCzfDoElYvKcB4jM5KiTNvZeorIGBLTOy5Mibys2nfMBTtpc8zEj3yrh39SgcyjhauN2g6xh8GksCpcY7zhvWj1%2FvGUNAWQI5Ld7MntIrJgpb%2F6i1akkfpRxtT6DoUsHfCVtrWRvRNDt05UjVfN4C4duSbprcWpfbGpSkTIdPb%2BzLA%2FqmCFi76vjK9FQZbYrD0qv7nOC5AI348%2FIjREr8PYsrVaQizpMWq5Sd69vLjhLKz3JleA5vFU9MD0A1tND7naCsWAdpLj21r%2BU961ERUlHg1vFvfpAJOdzi%2F65GidkP73mgW16Epn5GhER582UuNAD%2BFAJgjWwORSxOpNDUej%2B9At9qFyX4SEyOMHqxkdbzhvewFohbY%2BCIfEn9o%2BfIkwxtw46sqRYaWa24t7a4wxJxmRvA%2Bgz63v7Q787evXmwwlsfJWCRQ4yvBb3jPlYOWY%2BG8mMvqGp1fOo7mGw3mQgMujNVZXIMdNmYm%2FZ9upyh82tjnB1xsUqT%2BE2gDw8BOMOC9%2FbwGOqUBuUizM1S9wGKojTEn6RI5%2BaoHv0PgcaLAkYS2nid2emFQbMYJrKET%2F5IGKesN2KWADD6ZiBCq2eHv6U3do9ePqSxTMGpthBxsXR2q%2Fitp1QhNoeLvFP5y1RdrVhx5%2B1UAKFiimrA0ZfRrXWyzg03jMN7GGiB2aGgSB%2BMeAyD2Pmo%2BlRjFxYNLx9gQjxoeWdw8vGnkwCcUDwAutpimO55VMxRktR72&X-Amz-Signature=d486c5c0c4b7914fe2923df809da57d6a4c2ecffb056fede41cb8d216b676ecc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VITMEW4%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T140154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOpB6z12fvptna4BDLnCkg1SOqFvIeggEQfUxhL59AZAiEAujsPQGsHcZPYj4NiwZP7YBXweL0USC4ITfCT6u0y6NUqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABMGFQT%2FpY8rIDb4SrcAxDwawZVMYyR78QsQrD3vyaRsqwLn123FALGXrU%2BJClx6QjurBJdSl6TTWBYOjEoWVl%2FYfURdK0qD9xdvDVOOkryg%2FpPImtyaPtYUuY3HNA1NRRCKNWhQBFK9fKCzfDoElYvKcB4jM5KiTNvZeorIGBLTOy5Mibys2nfMBTtpc8zEj3yrh39SgcyjhauN2g6xh8GksCpcY7zhvWj1%2FvGUNAWQI5Ld7MntIrJgpb%2F6i1akkfpRxtT6DoUsHfCVtrWRvRNDt05UjVfN4C4duSbprcWpfbGpSkTIdPb%2BzLA%2FqmCFi76vjK9FQZbYrD0qv7nOC5AI348%2FIjREr8PYsrVaQizpMWq5Sd69vLjhLKz3JleA5vFU9MD0A1tND7naCsWAdpLj21r%2BU961ERUlHg1vFvfpAJOdzi%2F65GidkP73mgW16Epn5GhER582UuNAD%2BFAJgjWwORSxOpNDUej%2B9At9qFyX4SEyOMHqxkdbzhvewFohbY%2BCIfEn9o%2BfIkwxtw46sqRYaWa24t7a4wxJxmRvA%2Bgz63v7Q787evXmwwlsfJWCRQ4yvBb3jPlYOWY%2BG8mMvqGp1fOo7mGw3mQgMujNVZXIMdNmYm%2FZ9upyh82tjnB1xsUqT%2BE2gDw8BOMOC9%2FbwGOqUBuUizM1S9wGKojTEn6RI5%2BaoHv0PgcaLAkYS2nid2emFQbMYJrKET%2F5IGKesN2KWADD6ZiBCq2eHv6U3do9ePqSxTMGpthBxsXR2q%2Fitp1QhNoeLvFP5y1RdrVhx5%2B1UAKFiimrA0ZfRrXWyzg03jMN7GGiB2aGgSB%2BMeAyD2Pmo%2BlRjFxYNLx9gQjxoeWdw8vGnkwCcUDwAutpimO55VMxRktR72&X-Amz-Signature=1d988d716af91fc2907ce765edf398daa083731b398ec2ebc802bbab5898b2e9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

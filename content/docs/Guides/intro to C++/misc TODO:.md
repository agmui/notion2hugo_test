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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH7D6H3H%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T020638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDnGMaltuHYlXAMKvwsY3QOVLLYBSCuuqYGBujRdxLofgIgbP3XEso1u31n2iUG9wkvTMiDnA471YI7F%2BSK5cGuevkqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsNgGSCeY0k4eh2oyrcAzIcxWXxEOkoNQz6X29vxxCSByoY5z%2B%2B2cLbv0oGz6VUkt6DBiwvQKVLzG%2B3A2zT%2FAQnB64GvJVGxv%2B%2FdT4MMl1oHeyd12qB8OFtvL%2B%2FQw6%2FBrBTm2wNY3cG9pOUmn0P%2B60sL4%2FLO3cwKNzhcsAaTy9TtiXnaGW7NmwMcMza4%2FKzS4HDdNRbm%2BVZ6CPoeyP5iI0CslpVQPg8AL0JOQ76XDeWnkGzTQOWlNkNqa5ZooDEakSxQZuPII9pZ2yi7HCZQLedqKvTZfpn9rIATkANwS6uHZHNE2XMFX%2Bh7D%2F6rooCTCJztB%2BNuyrqtw2%2BjwlCK8gWUyJkw4IeZn%2BDKyM2M2eyPyiF%2FfEGOBTb0TD8O8%2FuYvF1QfgngWKKJZMBvGF6PvCbrcLnvIG4Vjuzp6EWJbyrsQOlIWIC2ifHyP%2Blm50OCIzPznRiOHyc5fC%2BZRH6krDaYTeRDElzlSJM2iwSZ7WRvBZe9bjtcwYnHQa2PAPSBrMN4QubpsmopOt1tJBFpZLdZ1VFGMz2u5ob%2FM208RD%2FQPoWF9z5znJL%2FnxgHm0wfGMN5EQoD6mnO50EMgnPkfpE8cdzitr%2B4LuBuMVc0VUurjWMVU%2BR%2BGtbzeawFbEX3tmmcWEfEk%2FvWfwZMPaw678GOqUBIYnSPovsZ31vO4WqCKCXk%2FSFaSNOZNWPZ5YUP27Btr7w1aK9GZPFbxSKTWE%2Bi8tUb%2F%2B9mpg%2FrWxzGWLYpzwcTa0NupZhWsDlYdRk57z7rU2i7RP7HlPIxFLF8VJHefn3BZ6K%2F%2BAFNiEa1Uufd%2FeK2aYDdBlMKTK69GLXpL5f6EkbAyFEL3N4%2Bdd6LXuYmEJV%2BUqtFRJ%2FnLFQeTW%2FWfOr%2FrnUijy0&X-Amz-Signature=5e4a74fbd7f6ec07e7cbdca346e561b48b203f4c1aaef48ab725fa95a98cc0c5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH7D6H3H%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T020638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDnGMaltuHYlXAMKvwsY3QOVLLYBSCuuqYGBujRdxLofgIgbP3XEso1u31n2iUG9wkvTMiDnA471YI7F%2BSK5cGuevkqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsNgGSCeY0k4eh2oyrcAzIcxWXxEOkoNQz6X29vxxCSByoY5z%2B%2B2cLbv0oGz6VUkt6DBiwvQKVLzG%2B3A2zT%2FAQnB64GvJVGxv%2B%2FdT4MMl1oHeyd12qB8OFtvL%2B%2FQw6%2FBrBTm2wNY3cG9pOUmn0P%2B60sL4%2FLO3cwKNzhcsAaTy9TtiXnaGW7NmwMcMza4%2FKzS4HDdNRbm%2BVZ6CPoeyP5iI0CslpVQPg8AL0JOQ76XDeWnkGzTQOWlNkNqa5ZooDEakSxQZuPII9pZ2yi7HCZQLedqKvTZfpn9rIATkANwS6uHZHNE2XMFX%2Bh7D%2F6rooCTCJztB%2BNuyrqtw2%2BjwlCK8gWUyJkw4IeZn%2BDKyM2M2eyPyiF%2FfEGOBTb0TD8O8%2FuYvF1QfgngWKKJZMBvGF6PvCbrcLnvIG4Vjuzp6EWJbyrsQOlIWIC2ifHyP%2Blm50OCIzPznRiOHyc5fC%2BZRH6krDaYTeRDElzlSJM2iwSZ7WRvBZe9bjtcwYnHQa2PAPSBrMN4QubpsmopOt1tJBFpZLdZ1VFGMz2u5ob%2FM208RD%2FQPoWF9z5znJL%2FnxgHm0wfGMN5EQoD6mnO50EMgnPkfpE8cdzitr%2B4LuBuMVc0VUurjWMVU%2BR%2BGtbzeawFbEX3tmmcWEfEk%2FvWfwZMPaw678GOqUBIYnSPovsZ31vO4WqCKCXk%2FSFaSNOZNWPZ5YUP27Btr7w1aK9GZPFbxSKTWE%2Bi8tUb%2F%2B9mpg%2FrWxzGWLYpzwcTa0NupZhWsDlYdRk57z7rU2i7RP7HlPIxFLF8VJHefn3BZ6K%2F%2BAFNiEa1Uufd%2FeK2aYDdBlMKTK69GLXpL5f6EkbAyFEL3N4%2Bdd6LXuYmEJV%2BUqtFRJ%2FnLFQeTW%2FWfOr%2FrnUijy0&X-Amz-Signature=176bf23cac01d027571ebff0ff05ccf82c2fef237698b86bfb69dd4d80a6d088&X-Amz-SignedHeaders=host&x-id=GetObject)

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

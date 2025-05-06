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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFBTPBWI%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXSCROGKqedJkXSeCJeSbZyz2HpeGRMXyFGS7%2BGh5%2F0AIgK2j1KkgtDvQ0ZoHbdDgezImHUwamHteJuTe%2B9g7RSuEq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJJwc77RnA%2BkEnPLvCrcA%2BTJ263BFY5j6n8tAHjmEn%2BFBYuyhf1%2F88uyUJ%2B3nOOorPuun%2FlozUUwZnm8FxUY9wVWKnGuIPPqa6IT%2B6DvtKNuP9yDNzQjWNCK%2FSpq3L%2F9U4GVSrpnDa6Z6YGP3MYRkzF1S5iupRs0NAZ3HoAtz%2BzwO4Ju6ZSH8CKXoj2kqbFs0lyhaGZT23qhbVryjAah7i%2Fb4R40MpbV7PKVlYqSODkLQw%2ByU7GLgP1%2BzejUP%2FEILPgRL2Qt08losxpAJ%2FH03Q9R6FNMxDR%2FKkpXUY2T3BK3hPBYWSI7UHp8kpCtINc4u4EfhyP%2BAwXZ9ux27%2Fw3J3EJL3S5i57xUl0c0teLXwtgPmxS6rzBSu4jZ%2Fzk2omCBItg7aQgEA20n9kgb5Gjts%2BsYj5NL6iZ6jDEgV9IgI2yezX%2FrGtCwp4gzTqfyhcufUqVHHmArFwhOzl2tk0b99jC5PetrLZEs6g8D0AWMK9H7AqOBBB24j0LjYp5G%2FozlH5COcf%2FwZjFaosnRks%2B7UraJR9gKfZn030bQboz2hmXG1EJj8XUQ6Xktc4n8hk9NmVpIhV9ztZUem%2FE5j4Y%2BuYUcPB1c1kgtCbMyQozlafzhG2yMYgi4lvcxdU%2BVjWw58Ob%2B%2FUV0Ep1Q%2F4bMJy06cAGOqUBSCCmGWK8ct%2FiWrPVIrh349MskHx1ECUwhgtuxqfWXjp88DBMdK%2FzCmcTTh0Sg3Xi4AIoRSz6xnlA9sRBCDKQxza7xMhuTzAGYrN5ZIPuDDaWiRVZAkI2u%2B1nohifBYusMq7TvBrYrtX%2F4WU4FbWX%2FoB48NHILQnyyYYQFn9xfXBrKpymSAx4V6%2F24S68eLUmdUUTaHnJU5EdeTLI5kqTk509Qz8p&X-Amz-Signature=0ebb4bb0d44897668abe61faf762cb3af08719fd77d0e778cade18ecbe207bea&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFBTPBWI%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXSCROGKqedJkXSeCJeSbZyz2HpeGRMXyFGS7%2BGh5%2F0AIgK2j1KkgtDvQ0ZoHbdDgezImHUwamHteJuTe%2B9g7RSuEq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJJwc77RnA%2BkEnPLvCrcA%2BTJ263BFY5j6n8tAHjmEn%2BFBYuyhf1%2F88uyUJ%2B3nOOorPuun%2FlozUUwZnm8FxUY9wVWKnGuIPPqa6IT%2B6DvtKNuP9yDNzQjWNCK%2FSpq3L%2F9U4GVSrpnDa6Z6YGP3MYRkzF1S5iupRs0NAZ3HoAtz%2BzwO4Ju6ZSH8CKXoj2kqbFs0lyhaGZT23qhbVryjAah7i%2Fb4R40MpbV7PKVlYqSODkLQw%2ByU7GLgP1%2BzejUP%2FEILPgRL2Qt08losxpAJ%2FH03Q9R6FNMxDR%2FKkpXUY2T3BK3hPBYWSI7UHp8kpCtINc4u4EfhyP%2BAwXZ9ux27%2Fw3J3EJL3S5i57xUl0c0teLXwtgPmxS6rzBSu4jZ%2Fzk2omCBItg7aQgEA20n9kgb5Gjts%2BsYj5NL6iZ6jDEgV9IgI2yezX%2FrGtCwp4gzTqfyhcufUqVHHmArFwhOzl2tk0b99jC5PetrLZEs6g8D0AWMK9H7AqOBBB24j0LjYp5G%2FozlH5COcf%2FwZjFaosnRks%2B7UraJR9gKfZn030bQboz2hmXG1EJj8XUQ6Xktc4n8hk9NmVpIhV9ztZUem%2FE5j4Y%2BuYUcPB1c1kgtCbMyQozlafzhG2yMYgi4lvcxdU%2BVjWw58Ob%2B%2FUV0Ep1Q%2F4bMJy06cAGOqUBSCCmGWK8ct%2FiWrPVIrh349MskHx1ECUwhgtuxqfWXjp88DBMdK%2FzCmcTTh0Sg3Xi4AIoRSz6xnlA9sRBCDKQxza7xMhuTzAGYrN5ZIPuDDaWiRVZAkI2u%2B1nohifBYusMq7TvBrYrtX%2F4WU4FbWX%2FoB48NHILQnyyYYQFn9xfXBrKpymSAx4V6%2F24S68eLUmdUUTaHnJU5EdeTLI5kqTk509Qz8p&X-Amz-Signature=e8870cfc291e3ebedf0d7d7e8e47266021798fe8f414a5c40f2b7a391a8c9154&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F7CHUIA%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T081027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQMnAP79lxJWohmAi66NyNDE4G72tLs%2Fvl1Pj5wf1LCAiEAuWv1DFRX4mHc72D4K7Ix%2Fvle5gkG29KmTi7jgvBUk%2Fwq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDB4CPRU7GnVxuFbOsCrcA0K6U7UTqslzcZYN5eLgPyZzbhbixQSGzB87KAqmorIAXmUmkqHY9E0fgZksS4cF6TG%2FkMU7A6hCoAsGfisHVJQ6TjKr5ZlJ8qdk1gvT2Hv3St2712sQ25G5pJKl5lNmNjnR5FESEkgb7uSy7WEE5fvOmiJ5owZ%2FZq9S%2FzBBDDA7CpHwn68J2Bf8Wwgg9gH5Sm%2FSEcvc4S40xNsDdlQEQ57JooUBIzao9wqfKCTyvSm3tH5AhmG%2FouS6WeZJRiuyh1ZLPQapO%2BWQnJ%2BVlLEgXXsY%2FEExpvFQkTMFKhmwCq7WZ7R%2F1lEOn%2BQb5E6x7RsV5EU%2F0s5dVskJJKdtfM5L3X8mD%2FYNr8VJ2bRzsP4v6mwOSeMWeRoF%2BXxdAnhFfE8MliL1kpeRVIJjeuG%2F9NrTGYF%2BJHUIrMJgL%2BaVqjUxPCy4dGNBQ8sP8i1rmZ%2BFxKgV1xFpPY%2FVrhEBlSPjCeODaPIFghvDmVFqWKiMBpMLVtRFw2iQCbIheu47%2Ft1J%2Fihx2WGkedkbTYEYjNpqZcGqdT65mmSYzTDGwhJ6%2FkqCeh5q1boRDzhHwg0i3pns1tDWzUh4UGOIkExa67Vo7PqMoPZV9%2FJ%2Bwf4NtKGRWB6JK1bso2XZQoXT%2BPScGfVdML23j8IGOqUBoqLKlNAvpDdP%2BFlF%2BFQK%2BGnEAaBd%2FmkHlWAW1oncyqjMsEuiK2IGKFdxoIK0fx7%2FjmclI59XDXO6mszKhj4fHNu5Plr78o466Kc2aJjYBefvIhUuql4vZpI4DJPlWV6e%2Bhvuojtj2MuqUlp6BfaNzrsttnMapvxP5ZbB0%2BOsjd%2F4zB01n7cA5rnfmz%2BgRGKTEEIAq3a92LXA6tPscl2M9KKhHmrB&X-Amz-Signature=e75b7512ed83dc68c1e808426b8baf01eca9d4b2b56c418e00cadba3c93ce465&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F7CHUIA%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T081027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQMnAP79lxJWohmAi66NyNDE4G72tLs%2Fvl1Pj5wf1LCAiEAuWv1DFRX4mHc72D4K7Ix%2Fvle5gkG29KmTi7jgvBUk%2Fwq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDB4CPRU7GnVxuFbOsCrcA0K6U7UTqslzcZYN5eLgPyZzbhbixQSGzB87KAqmorIAXmUmkqHY9E0fgZksS4cF6TG%2FkMU7A6hCoAsGfisHVJQ6TjKr5ZlJ8qdk1gvT2Hv3St2712sQ25G5pJKl5lNmNjnR5FESEkgb7uSy7WEE5fvOmiJ5owZ%2FZq9S%2FzBBDDA7CpHwn68J2Bf8Wwgg9gH5Sm%2FSEcvc4S40xNsDdlQEQ57JooUBIzao9wqfKCTyvSm3tH5AhmG%2FouS6WeZJRiuyh1ZLPQapO%2BWQnJ%2BVlLEgXXsY%2FEExpvFQkTMFKhmwCq7WZ7R%2F1lEOn%2BQb5E6x7RsV5EU%2F0s5dVskJJKdtfM5L3X8mD%2FYNr8VJ2bRzsP4v6mwOSeMWeRoF%2BXxdAnhFfE8MliL1kpeRVIJjeuG%2F9NrTGYF%2BJHUIrMJgL%2BaVqjUxPCy4dGNBQ8sP8i1rmZ%2BFxKgV1xFpPY%2FVrhEBlSPjCeODaPIFghvDmVFqWKiMBpMLVtRFw2iQCbIheu47%2Ft1J%2Fihx2WGkedkbTYEYjNpqZcGqdT65mmSYzTDGwhJ6%2FkqCeh5q1boRDzhHwg0i3pns1tDWzUh4UGOIkExa67Vo7PqMoPZV9%2FJ%2Bwf4NtKGRWB6JK1bso2XZQoXT%2BPScGfVdML23j8IGOqUBoqLKlNAvpDdP%2BFlF%2BFQK%2BGnEAaBd%2FmkHlWAW1oncyqjMsEuiK2IGKFdxoIK0fx7%2FjmclI59XDXO6mszKhj4fHNu5Plr78o466Kc2aJjYBefvIhUuql4vZpI4DJPlWV6e%2Bhvuojtj2MuqUlp6BfaNzrsttnMapvxP5ZbB0%2BOsjd%2F4zB01n7cA5rnfmz%2BgRGKTEEIAq3a92LXA6tPscl2M9KKhHmrB&X-Amz-Signature=b44c6093666d9fe71b09cef80bd28cb84efe13cc813a162ca7436fb66a6dccd7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

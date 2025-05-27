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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV5KCU4V%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgyItLVnb3XZPniDVhYVmhG39h9mpMDMjogQ2Xj0r5FAiEAnW6DSDo1VPGLQoFeglCfAMMykmW3E46r0C5%2FICzfoEQq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDH87hJVv7wFYZWufOircAy0YWpm5ze%2F3QABemACVB8%2FEdnBlacm9s3H4onyBC2EGf0mGYvwkC37oEiZ3SpDHN7CbHHkBm0hk9ZCVNaOwpiG4qnkc5Q1vxXfjkjNO76HX%2BUHBR7qv2W8sqH4hWXzQFjfb%2BWnTEXgQlKh6hSxd8jEy9POf6VTJphA9Ok%2FUOmvsdTeqCmyOg%2BBCwRZqjNPJVU22gNy%2FY4fn4JjZtX1wGxxvoXPRTqhDEcQZgBifsN1096iXNDwbL7QC2lNLw4GqmMPB0pxRZsCJIZAtua%2BWoOFv6ZxMiI03tS8S0N30MeiC7VPT1cuwx7DqKsA1vrPv%2FdyAOu3oiq%2BXBU7b2IPuAkg0O%2FeHld8OaOhAn7VMJGHK9yK2o%2FbPg19UsClGuVvlqdWe0Via4vfRZ0vsj%2FTME%2F5u9AygbrhJ9CiCtSIqvoqnDionwWqDFcND8F%2F%2BxguNUpSALQpBDJUkAG48lEgbt6E7WFbG%2BQ2UQuq%2Flzlwds5XFOKgMvKT%2FSoByLURNi7lXTNm9H%2BPH9kCrAHQZTKvGxJ%2Bm75DCssXyLzgzazApDVsnFRDHsIVMQd9r83yB%2BLglg7hxeyZw%2Fz5mrQuYBHFGLsAW%2BFL1qcYP0%2FWiT4pB7O9LiLHNDhL79qix5G%2FMLmB1sEGOqUB1N3LpBBSP3zxXt2G9A%2B0NQV2fOVf8vMUeHrv7s%2FVNBTIVbhikxr1UZIicISfsouFFF5EPvIcw1R6PmOa4xgEp%2FwmnnkmqrEiEa%2FbzjdjLQJRtJovzHELAmxaHE8CVR%2FRomCXFL7XocaSL2rJM5c46GhUnjQ6GDdJMjMKHhKd2Tnyxl83AUcOdp4t0iTZn6QEMxHjWPWJApvPG%2BXrrM5y8yJuPeLj&X-Amz-Signature=8e2f8bf2f3551480bfbfedf5eb46ba81d142cab0a0d5ee6976c71f1e6fb7d9ef&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV5KCU4V%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgyItLVnb3XZPniDVhYVmhG39h9mpMDMjogQ2Xj0r5FAiEAnW6DSDo1VPGLQoFeglCfAMMykmW3E46r0C5%2FICzfoEQq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDH87hJVv7wFYZWufOircAy0YWpm5ze%2F3QABemACVB8%2FEdnBlacm9s3H4onyBC2EGf0mGYvwkC37oEiZ3SpDHN7CbHHkBm0hk9ZCVNaOwpiG4qnkc5Q1vxXfjkjNO76HX%2BUHBR7qv2W8sqH4hWXzQFjfb%2BWnTEXgQlKh6hSxd8jEy9POf6VTJphA9Ok%2FUOmvsdTeqCmyOg%2BBCwRZqjNPJVU22gNy%2FY4fn4JjZtX1wGxxvoXPRTqhDEcQZgBifsN1096iXNDwbL7QC2lNLw4GqmMPB0pxRZsCJIZAtua%2BWoOFv6ZxMiI03tS8S0N30MeiC7VPT1cuwx7DqKsA1vrPv%2FdyAOu3oiq%2BXBU7b2IPuAkg0O%2FeHld8OaOhAn7VMJGHK9yK2o%2FbPg19UsClGuVvlqdWe0Via4vfRZ0vsj%2FTME%2F5u9AygbrhJ9CiCtSIqvoqnDionwWqDFcND8F%2F%2BxguNUpSALQpBDJUkAG48lEgbt6E7WFbG%2BQ2UQuq%2Flzlwds5XFOKgMvKT%2FSoByLURNi7lXTNm9H%2BPH9kCrAHQZTKvGxJ%2Bm75DCssXyLzgzazApDVsnFRDHsIVMQd9r83yB%2BLglg7hxeyZw%2Fz5mrQuYBHFGLsAW%2BFL1qcYP0%2FWiT4pB7O9LiLHNDhL79qix5G%2FMLmB1sEGOqUB1N3LpBBSP3zxXt2G9A%2B0NQV2fOVf8vMUeHrv7s%2FVNBTIVbhikxr1UZIicISfsouFFF5EPvIcw1R6PmOa4xgEp%2FwmnnkmqrEiEa%2FbzjdjLQJRtJovzHELAmxaHE8CVR%2FRomCXFL7XocaSL2rJM5c46GhUnjQ6GDdJMjMKHhKd2Tnyxl83AUcOdp4t0iTZn6QEMxHjWPWJApvPG%2BXrrM5y8yJuPeLj&X-Amz-Signature=0acd18f6d2494f283989247bd6087689b14af3f060794f3f61f91baac5508202&X-Amz-SignedHeaders=host&x-id=GetObject)

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

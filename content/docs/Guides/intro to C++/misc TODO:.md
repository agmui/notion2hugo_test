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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKU6UPGV%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T100816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDeHChca5SmkkMO6deC5IpSJP1BYOMmD2UoEp7RbofqQAIhAJkaqyQXb9cqVVU2RMGdT9STxaXeh5J27K%2BJr6CbB2LuKv8DCEIQABoMNjM3NDIzMTgzODA1Igzz2s5FrQM5ot4J0pQq3AMUoSP5Bdvl8040cpDWaxt2Ugc1Wdj9roX%2FbXkunnPaheS5yINM3LZgc%2BighswqFvBYO3cnhNG%2BIEX5Iq%2BhWStLLrA3%2FLIiMxMIajSS2amJQOMZ6jbE3lWSgIRfiBU5bsCqSD3TCYiABtYKz4oHZzXsomI6kMzdodVC7PWYyGBlunm3mByGpXaKpgtoQ7m8YR2dpjRdN7G8ZsyzOkIfl2EkI1SEAO78WaY%2Fz5mn218XiD4eztqFi23lkYBHa5eQnBqM9mD6eTy9zqnSfEYTJtqOeohFaChSBtAayO0s06Jnaax1V6VePojqj7dFWYXtfQCKy6V2ElFtvg%2BcFTi07cmrKiNRIevP%2BWA3RKLi%2FpXeTHKVPqYbFSEIrLZbYX0cTH8d5MvbL6QKeNN64SAj2lBqgRA1eeVR5rBrHYz7PpSZGzBJVEZFritU9RwGw0I49BQjOkcT3sV0agm41z8W6dHos%2FkHMEtPI4qrcgUca49gud5J0d2SWZQmc87Vjxsu3UcZhRA8O%2BDErvKndzDMJ%2BPHXC%2BZcvTYm3gqKUy%2F7fB%2BQHMDcLthjtASflIFEzotuF%2FGnhqEeJiuGIC8RhwMH6nKRn7zqAtC9XGr5yldfAvGQEwJfQmvPOmOjfcg9zCy0Iy9BjqkAf2O8fkzyH9Q8DE0NsRjJCTHWtZUOAItV%2BYvyLvZfjdfy68Ai5DRULFT7XAdNMz7BmVd3TA%2BF0h2VKIUACQ0tvN0zTuWMrm4zLGPIeeSxX8IlUEHbQWCz8fNvA3h3yAfhSGZAYcF5iHf1JpPHkBxDF58raTy8BAZtp%2FniVHYTdPNw1vHlRiSm3qa%2FVlucwzAHIPe%2F840Nvs65qr7dTGgboa1%2Fnif&X-Amz-Signature=d20d131f2313d9ecdfb653f9c71d393707cb08f2d13680504f20d35aed3f5680&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKU6UPGV%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T100816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDeHChca5SmkkMO6deC5IpSJP1BYOMmD2UoEp7RbofqQAIhAJkaqyQXb9cqVVU2RMGdT9STxaXeh5J27K%2BJr6CbB2LuKv8DCEIQABoMNjM3NDIzMTgzODA1Igzz2s5FrQM5ot4J0pQq3AMUoSP5Bdvl8040cpDWaxt2Ugc1Wdj9roX%2FbXkunnPaheS5yINM3LZgc%2BighswqFvBYO3cnhNG%2BIEX5Iq%2BhWStLLrA3%2FLIiMxMIajSS2amJQOMZ6jbE3lWSgIRfiBU5bsCqSD3TCYiABtYKz4oHZzXsomI6kMzdodVC7PWYyGBlunm3mByGpXaKpgtoQ7m8YR2dpjRdN7G8ZsyzOkIfl2EkI1SEAO78WaY%2Fz5mn218XiD4eztqFi23lkYBHa5eQnBqM9mD6eTy9zqnSfEYTJtqOeohFaChSBtAayO0s06Jnaax1V6VePojqj7dFWYXtfQCKy6V2ElFtvg%2BcFTi07cmrKiNRIevP%2BWA3RKLi%2FpXeTHKVPqYbFSEIrLZbYX0cTH8d5MvbL6QKeNN64SAj2lBqgRA1eeVR5rBrHYz7PpSZGzBJVEZFritU9RwGw0I49BQjOkcT3sV0agm41z8W6dHos%2FkHMEtPI4qrcgUca49gud5J0d2SWZQmc87Vjxsu3UcZhRA8O%2BDErvKndzDMJ%2BPHXC%2BZcvTYm3gqKUy%2F7fB%2BQHMDcLthjtASflIFEzotuF%2FGnhqEeJiuGIC8RhwMH6nKRn7zqAtC9XGr5yldfAvGQEwJfQmvPOmOjfcg9zCy0Iy9BjqkAf2O8fkzyH9Q8DE0NsRjJCTHWtZUOAItV%2BYvyLvZfjdfy68Ai5DRULFT7XAdNMz7BmVd3TA%2BF0h2VKIUACQ0tvN0zTuWMrm4zLGPIeeSxX8IlUEHbQWCz8fNvA3h3yAfhSGZAYcF5iHf1JpPHkBxDF58raTy8BAZtp%2FniVHYTdPNw1vHlRiSm3qa%2FVlucwzAHIPe%2F840Nvs65qr7dTGgboa1%2Fnif&X-Amz-Signature=8d00a0a83dc622a7355357c560e5a60812c1e8654042f8f6ef2e9724fb51fb71&X-Amz-SignedHeaders=host&x-id=GetObject)

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

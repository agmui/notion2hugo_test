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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOZL3V5Z%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T220111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIEHNf%2BH9CWSkd7I1SO3Y%2BXsnSvJkjdznVWIGUn0uinshAiEAmf2NoEqDnnSwC4dJtbt6Biey4D4q5xFW4BoeSOt%2FL0wq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDGJInHpTCP2wkI%2B%2FiSrcA%2BUjfVtQR6IfC25XQWG0b7jqKYEU1F%2ByAliqSZhoZm6T7EUKBrKcfHYu1YFTEYO1zWKJ5%2FfHOpjC%2BrmKQN5kPxYvS4GJXC8AkjCkS4Kw84XJZBt2HHgohhPD6Ft4CnXQlXh1eCuDX67okCfaZX%2BrrVDWOrOBZawv6AeBbkIfa85InAiIyaz4Pf1PqD07Fy6duMB6Dz7cdAzuiWXn5R%2BCQeYNrGBzY7wUhCNFVQjcc1PMHgqfXDmrRvGUZUOiia%2BSCVFrUTpNl99vrSmnIgIahrlS%2BoMzaU7gG%2BwmeYyWlJbv5XtBsKpslcIEKU%2BztaemjgEH2kVDdDluk%2Bowyb0L8nsJZcIN%2Bi%2FjKouWom8MLNZhgedzPnBxCS13W5xMtzUos59Xb6EFtLgWHl3tFox35%2FeLcYfnTkyxuJe5qjaGgdCAMoCS6TofMGSQBWtZHalLdHbtXJarX6uL5ofnUc7WwQeorXzAbif26eIDXjwhYmjQzau%2Bfox9cPuDDdw0%2F4PBUfql29aVDNyZ73PVLqedKllVTD%2FnsSzVgy0eQoDdXX76vJd7X%2BGzB3EsLxtpbKnWzt2bUOP%2BmPMIQxtDZ4ixQ9uvzBN%2BnD%2FbhmPUk30BzwCOkgF%2Bp7PmM4v%2FgKXgMP3qgsIGOqUBikO7dQATDBxODZsJWIOb%2BFHiopT8dm%2Fi6YrWz6KxDF4kksSZJKutN1A4ro%2FxzETSGyLYqpqCkQ33xMa38GdraPSRz0VWfTWkMt1CApE3FnyE8iMuJ77sNGOH9gOuJgOXWvWUtoPB8vVOyeJd10b9PD09wpQW5Qb93zeioi2cAjhppVMWGXnl87DUrnRkJJKgmjWgEn7Jn7ikQTjQ6bWh3ckErz8E&X-Amz-Signature=64de43a7fdcc67775c73e0a61a08f3e9e96394a79f828aee99735a762d672c48&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOZL3V5Z%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T220111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIEHNf%2BH9CWSkd7I1SO3Y%2BXsnSvJkjdznVWIGUn0uinshAiEAmf2NoEqDnnSwC4dJtbt6Biey4D4q5xFW4BoeSOt%2FL0wq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDGJInHpTCP2wkI%2B%2FiSrcA%2BUjfVtQR6IfC25XQWG0b7jqKYEU1F%2ByAliqSZhoZm6T7EUKBrKcfHYu1YFTEYO1zWKJ5%2FfHOpjC%2BrmKQN5kPxYvS4GJXC8AkjCkS4Kw84XJZBt2HHgohhPD6Ft4CnXQlXh1eCuDX67okCfaZX%2BrrVDWOrOBZawv6AeBbkIfa85InAiIyaz4Pf1PqD07Fy6duMB6Dz7cdAzuiWXn5R%2BCQeYNrGBzY7wUhCNFVQjcc1PMHgqfXDmrRvGUZUOiia%2BSCVFrUTpNl99vrSmnIgIahrlS%2BoMzaU7gG%2BwmeYyWlJbv5XtBsKpslcIEKU%2BztaemjgEH2kVDdDluk%2Bowyb0L8nsJZcIN%2Bi%2FjKouWom8MLNZhgedzPnBxCS13W5xMtzUos59Xb6EFtLgWHl3tFox35%2FeLcYfnTkyxuJe5qjaGgdCAMoCS6TofMGSQBWtZHalLdHbtXJarX6uL5ofnUc7WwQeorXzAbif26eIDXjwhYmjQzau%2Bfox9cPuDDdw0%2F4PBUfql29aVDNyZ73PVLqedKllVTD%2FnsSzVgy0eQoDdXX76vJd7X%2BGzB3EsLxtpbKnWzt2bUOP%2BmPMIQxtDZ4ixQ9uvzBN%2BnD%2FbhmPUk30BzwCOkgF%2Bp7PmM4v%2FgKXgMP3qgsIGOqUBikO7dQATDBxODZsJWIOb%2BFHiopT8dm%2Fi6YrWz6KxDF4kksSZJKutN1A4ro%2FxzETSGyLYqpqCkQ33xMa38GdraPSRz0VWfTWkMt1CApE3FnyE8iMuJ77sNGOH9gOuJgOXWvWUtoPB8vVOyeJd10b9PD09wpQW5Qb93zeioi2cAjhppVMWGXnl87DUrnRkJJKgmjWgEn7Jn7ikQTjQ6bWh3ckErz8E&X-Amz-Signature=75e242117f9441da57c6b772bd256f41eb69267bae718b1c15ad56b76eacfef9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

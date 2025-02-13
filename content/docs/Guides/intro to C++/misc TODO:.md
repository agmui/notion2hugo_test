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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDYS7K6N%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJzNsl1YBzfoY1ruQMxwprASAf8xld9PQBQt3MKQV9ywIgD98S9XA3OQShoKts36zUQrrv%2B%2B8GXPB5NaGSwaFWQfAq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDAeWlKkx%2BLDyuQy26SrcA%2BECWvm473fSMNT3qBSAsRLklVfqjnhvmSiywcHnyo4ayMmjYUM9k4%2FtiwpesMMAjvJKov71OnQGp7UuxKBtI6RQFwrmDimotS8665kljS53iW%2FjXsjOnTUm6trbSahlALzEZfA11%2F3aAuGxmjPMwBWV4KkKcC8XhInYbIifc0SAY0e%2BfJ%2B3LX601NJbK7Mkd%2FF4dWKV0dqtCFVp05TuUdSgb7qsIs9PcodbRsWSoS%2F0GQTkY3sUN4jgiELjGlihnBCw0VZKJHdWtVzzz6ZuoikonWFboBw1oltgC29%2BfkvhFKpH7lV86o6RiMvTu3hBMZYtiebSZCGWd8D6aZ2DuY5bXzkwAvwNZ0rduvUEl4Y%2FUnilo3f%2Brf6e%2FTs6jqxOTgSvxff9c8kV%2BJNoDHp7dpQq9oMAIM6ifW5GXLhGjMOTAMD7Ahirs%2FHZNjcpFDsHUzDWIDcLr9uSzcf6APakQlu%2F4KWHCIJHwVq1M4cDryt5EF%2BuKBPPrfqaHYdWOPGhy1dgKm%2Fcqx3sb3mKc76Dwt5WZTarQIb2GnzNcvVEDhMTkxEeunv6K5e7aWjjPtE%2B8aF5C1S9KSCWCP3XdJvB46jx9xl%2BtzDHy6HBCRa3W6NQlid8nXwu6Gp0hMbMMPyrub0GOqUBux9sHe7579Xae5VEIQI2BSJ%2Bvuz4cVVSPHkPJVpghu1XkN%2FNBFn7t%2BzOwIIrTVoIo6zWRffB8t8ZP9SyTxtiQ%2B03vNe0QXt4wyFhUL%2B0OYauTENEGFaUZsiOAf00SJr%2FJVeUESAXxAIZdaYRtTCxj7qhJkjyDNX7mHniSYz%2FAzKAqqPL%2FNFwjGxkI98UfX7Jd6jX%2Fna5%2B4nVyVf9FHE862S0nbJz&X-Amz-Signature=08b09de8025d102a63c00e1c4adfd592f648310b2420f3bd3d9c56ce80c8ce62&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDYS7K6N%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJzNsl1YBzfoY1ruQMxwprASAf8xld9PQBQt3MKQV9ywIgD98S9XA3OQShoKts36zUQrrv%2B%2B8GXPB5NaGSwaFWQfAq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDAeWlKkx%2BLDyuQy26SrcA%2BECWvm473fSMNT3qBSAsRLklVfqjnhvmSiywcHnyo4ayMmjYUM9k4%2FtiwpesMMAjvJKov71OnQGp7UuxKBtI6RQFwrmDimotS8665kljS53iW%2FjXsjOnTUm6trbSahlALzEZfA11%2F3aAuGxmjPMwBWV4KkKcC8XhInYbIifc0SAY0e%2BfJ%2B3LX601NJbK7Mkd%2FF4dWKV0dqtCFVp05TuUdSgb7qsIs9PcodbRsWSoS%2F0GQTkY3sUN4jgiELjGlihnBCw0VZKJHdWtVzzz6ZuoikonWFboBw1oltgC29%2BfkvhFKpH7lV86o6RiMvTu3hBMZYtiebSZCGWd8D6aZ2DuY5bXzkwAvwNZ0rduvUEl4Y%2FUnilo3f%2Brf6e%2FTs6jqxOTgSvxff9c8kV%2BJNoDHp7dpQq9oMAIM6ifW5GXLhGjMOTAMD7Ahirs%2FHZNjcpFDsHUzDWIDcLr9uSzcf6APakQlu%2F4KWHCIJHwVq1M4cDryt5EF%2BuKBPPrfqaHYdWOPGhy1dgKm%2Fcqx3sb3mKc76Dwt5WZTarQIb2GnzNcvVEDhMTkxEeunv6K5e7aWjjPtE%2B8aF5C1S9KSCWCP3XdJvB46jx9xl%2BtzDHy6HBCRa3W6NQlid8nXwu6Gp0hMbMMPyrub0GOqUBux9sHe7579Xae5VEIQI2BSJ%2Bvuz4cVVSPHkPJVpghu1XkN%2FNBFn7t%2BzOwIIrTVoIo6zWRffB8t8ZP9SyTxtiQ%2B03vNe0QXt4wyFhUL%2B0OYauTENEGFaUZsiOAf00SJr%2FJVeUESAXxAIZdaYRtTCxj7qhJkjyDNX7mHniSYz%2FAzKAqqPL%2FNFwjGxkI98UfX7Jd6jX%2Fna5%2B4nVyVf9FHE862S0nbJz&X-Amz-Signature=a5254702dfcdc563e95eafa37eeed819e760a6d823cf8fd76a5a6568003c9809&X-Amz-SignedHeaders=host&x-id=GetObject)

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

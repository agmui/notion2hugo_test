---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "null/Guides/intro to C++/misc TODO:.md"
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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSOML3L2%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIHMXD%2BEw5oXdAoc3flvYZKVuXqs8507%2F1aGc0pjidsTBAiEA7ahKB9Z5ovMvfuEFx%2B7wMdSJYDz91pr03dYsH8JGmTkq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDMQwCRPxu22q0t%2BM9ircAwtrzOIO5xOPXEs0w9t0PtbVsbgShINxhfKbcq6JyQShk64lxLPpgzErMmSiq1WYe7qghA0KKBO8XHBhtgtd%2BSerf%2BfnMges5h8XA8DAslNxTsnjSzICloCuN8e2%2BdiXKGLN1uBWEXzZTUn42qdC9SWom5l8vaXTd59nBZp4n7Y1a8tiE%2BOqh82KA5RFSSyQc8Lc%2F9mQ7ZUJL9mypqwZjaLBvkUqIE4MGJBITgEQws1VU4mdBJxiEGvxww5esRIuDfkclBv484Ho8XMWbxDP0JtdORJAfuyaYvKpoz36l1FTSdeiXd%2BjCKE1zwJVDqwv5pZdTT8s0Kkql%2BXU3B8Jj2x0hVQFmMB7o%2F2kdMak9NwV3uMlQ63eXKUM87R%2BQdUvHSpk07q9sMkafoxtQS67kEad3WCJwx0k7rdBu5vGZKuDjJlZ3rjtUeSSpo9tvihi72kuliaD7j%2FgobsOL%2F7zABtxi9DcQxPgb1InwgqbLbibXX0A7I0ohC423mHwhlVPJ77JKLFdNBD%2B5HYBbs%2BZFTiQz4HEprFp%2FoOd2pI8q%2FrrIl7ywH4rBUKck65bMfSBDstx8obD0gX3cD4PrBmahsOXFLaTjOxFq2yf4WJmfhRrdMiSHrq5ixx%2FJ4vtMJeVir0GOqUBQO8O6IW32MyPmA675EzriIfeLuhPdwKFwEM3YcfWriwiuSXq4iKAj3RSTjFWvhSplpOadq8iRUPJqeCmGRFbzESW175E80U2DSLmk9TjpzT9lI9ZCp5HGXp8IWDmLW5PZyr0Y5opmtEDZm3OPxUSIUHtMbE3ZIkxHzFdMjIAjI2U9ykhMwYbZO0sZc9fLBanz30Rtr0oWFHLc7SBQ0kR6kzkTIQf&X-Amz-Signature=6115344ee69f88fcc0bdcb127653e34ec374e814d40fc252cd36d9e2a2b303cf&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSOML3L2%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIHMXD%2BEw5oXdAoc3flvYZKVuXqs8507%2F1aGc0pjidsTBAiEA7ahKB9Z5ovMvfuEFx%2B7wMdSJYDz91pr03dYsH8JGmTkq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDMQwCRPxu22q0t%2BM9ircAwtrzOIO5xOPXEs0w9t0PtbVsbgShINxhfKbcq6JyQShk64lxLPpgzErMmSiq1WYe7qghA0KKBO8XHBhtgtd%2BSerf%2BfnMges5h8XA8DAslNxTsnjSzICloCuN8e2%2BdiXKGLN1uBWEXzZTUn42qdC9SWom5l8vaXTd59nBZp4n7Y1a8tiE%2BOqh82KA5RFSSyQc8Lc%2F9mQ7ZUJL9mypqwZjaLBvkUqIE4MGJBITgEQws1VU4mdBJxiEGvxww5esRIuDfkclBv484Ho8XMWbxDP0JtdORJAfuyaYvKpoz36l1FTSdeiXd%2BjCKE1zwJVDqwv5pZdTT8s0Kkql%2BXU3B8Jj2x0hVQFmMB7o%2F2kdMak9NwV3uMlQ63eXKUM87R%2BQdUvHSpk07q9sMkafoxtQS67kEad3WCJwx0k7rdBu5vGZKuDjJlZ3rjtUeSSpo9tvihi72kuliaD7j%2FgobsOL%2F7zABtxi9DcQxPgb1InwgqbLbibXX0A7I0ohC423mHwhlVPJ77JKLFdNBD%2B5HYBbs%2BZFTiQz4HEprFp%2FoOd2pI8q%2FrrIl7ywH4rBUKck65bMfSBDstx8obD0gX3cD4PrBmahsOXFLaTjOxFq2yf4WJmfhRrdMiSHrq5ixx%2FJ4vtMJeVir0GOqUBQO8O6IW32MyPmA675EzriIfeLuhPdwKFwEM3YcfWriwiuSXq4iKAj3RSTjFWvhSplpOadq8iRUPJqeCmGRFbzESW175E80U2DSLmk9TjpzT9lI9ZCp5HGXp8IWDmLW5PZyr0Y5opmtEDZm3OPxUSIUHtMbE3ZIkxHzFdMjIAjI2U9ykhMwYbZO0sZc9fLBanz30Rtr0oWFHLc7SBQ0kR6kzkTIQf&X-Amz-Signature=8440cb5d073a6d9a9681073681e14c5883a684225d094972e5d8719f9c3805e9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

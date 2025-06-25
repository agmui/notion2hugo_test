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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633GIS54A%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T004337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQD4eJcnfYmg5emTEg20Ts%2BddJMBaIAyXn02rmWWxWELlgIgc2or%2F9cf%2FG54gRwqPOOluAkZ1wVyP3hd72m6r4L%2B48sq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDHejQyPALSwAs7xIJircA2KyDma1wJIZQdimgS%2FYtkXKzejhFPaZYmmcvOteH%2Fg1xGgetLbQoONU8ku19FF39KPnc9vfAG8681sE8eEBJto5olsxEKODJL7hXWjTKGmuBUAnuxQ57y4iMT%2B0sbRkiQse3GxsQT7RU7UG75ZSMxjlX9Au0jTw8bNi1V%2F4FQtGu7adE4gkZ7st2JmocoYXsClhIwl4QKxECJLe0Y2iRjHJasM%2BKA1ZVEJDq9dT9oUvG002yUvDSiZFZiZ2XDKfUKfZ7tR16SCbfh6G1VP9VCOftkHg5pjTE%2BJK75ev9WGY8oXodc7L7eT9oEc1nW%2Bwoo6NgIeAOShxj%2BWHWpgnjsnOLPH3ggw3LnUfjZbqHa4dVKft18gqByn9c%2FoiFrry9XemPCz7nuoNCkTpCEM4cDJI1nODTcRN872c8PY07Xn67GzgghrmcAnH0JQUisucEJ66M3UzMwGugtwsNH1uRJq236E0kv%2B7WusyYswoUGDAgr%2F%2B0BDlIR6%2BtJJ0kmLSNgyr7%2FLrJ%2BmQw1N3wC%2BQzYgSnKotAtgyd3Vys95mKXSNs3rGDLkNzvPO6vkxzBHksyfiORAUeSkFoVb29GsBVbQJoJ1ovV1tCOxilzFqcLIkFB7btkRAYL2xfLioMPfu7MIGOqUB7jbK3%2F1a5YFR9EJXw%2BwbtGYh43%2FNSTR39Pju5s4X7FyxMJP%2F2YdxXNoWILoPy3F0Ba%2BB5eleKhEJPoGqUzTlU2RptKTuV4Hc2ahtvHgr96iDdfkMJMMWnvDWBd1pCfYj%2FtRJBNPex7nMX%2BIAyWKEcp0L%2FXfy9MZQhTZXegGWIqTwHLwNb2UeW8bvBuAHjBgKyoMC9XOIJZ%2BNFcjWgMo5auMjIz1l&X-Amz-Signature=9d4a00cd5703fdd4904c6d87713684474dfc6fa15fdf222def8742cbe2f2c9af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633GIS54A%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T004337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQD4eJcnfYmg5emTEg20Ts%2BddJMBaIAyXn02rmWWxWELlgIgc2or%2F9cf%2FG54gRwqPOOluAkZ1wVyP3hd72m6r4L%2B48sq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDHejQyPALSwAs7xIJircA2KyDma1wJIZQdimgS%2FYtkXKzejhFPaZYmmcvOteH%2Fg1xGgetLbQoONU8ku19FF39KPnc9vfAG8681sE8eEBJto5olsxEKODJL7hXWjTKGmuBUAnuxQ57y4iMT%2B0sbRkiQse3GxsQT7RU7UG75ZSMxjlX9Au0jTw8bNi1V%2F4FQtGu7adE4gkZ7st2JmocoYXsClhIwl4QKxECJLe0Y2iRjHJasM%2BKA1ZVEJDq9dT9oUvG002yUvDSiZFZiZ2XDKfUKfZ7tR16SCbfh6G1VP9VCOftkHg5pjTE%2BJK75ev9WGY8oXodc7L7eT9oEc1nW%2Bwoo6NgIeAOShxj%2BWHWpgnjsnOLPH3ggw3LnUfjZbqHa4dVKft18gqByn9c%2FoiFrry9XemPCz7nuoNCkTpCEM4cDJI1nODTcRN872c8PY07Xn67GzgghrmcAnH0JQUisucEJ66M3UzMwGugtwsNH1uRJq236E0kv%2B7WusyYswoUGDAgr%2F%2B0BDlIR6%2BtJJ0kmLSNgyr7%2FLrJ%2BmQw1N3wC%2BQzYgSnKotAtgyd3Vys95mKXSNs3rGDLkNzvPO6vkxzBHksyfiORAUeSkFoVb29GsBVbQJoJ1ovV1tCOxilzFqcLIkFB7btkRAYL2xfLioMPfu7MIGOqUB7jbK3%2F1a5YFR9EJXw%2BwbtGYh43%2FNSTR39Pju5s4X7FyxMJP%2F2YdxXNoWILoPy3F0Ba%2BB5eleKhEJPoGqUzTlU2RptKTuV4Hc2ahtvHgr96iDdfkMJMMWnvDWBd1pCfYj%2FtRJBNPex7nMX%2BIAyWKEcp0L%2FXfy9MZQhTZXegGWIqTwHLwNb2UeW8bvBuAHjBgKyoMC9XOIJZ%2BNFcjWgMo5auMjIz1l&X-Amz-Signature=c661a96e5dd33a76bc6cdd3c4d662cad9cf01a90c2de76e466e8c30b1d0013c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

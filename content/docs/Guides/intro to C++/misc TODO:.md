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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6Y3P4DP%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T181017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDW7GkvTmHOTaUWvkwMe47EE%2BynLecLozNV1%2BephhhJ%2FAiBbAJiZD4Iwb6eh6roawLIdotAMQiAQZaogajFeIZYK9yqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNbaw0NRNER0%2F3pd0KtwDIbw4eThtMS9Kiecrx5EFHZHWyrVwvYlIRQL3BBS5KxdQb9EjHaCJVRpH3AD5sKU0eOwDGGFncT1%2B3j3uiYuSGyJskzpAd750rG1s2ig7rK36ROQDcnenoe23FjINSS5F1%2FIBxwD0eqzn48pnZeXtndGIiOr9G3x4h6V6hlQEFU4WGk4JIug%2FFF%2BIoM9Hz33nSEz5CaY8%2FCmPhNGZnmF3x6qb1Iz0IqHMW8pADzznJhKVOWxtCFy7%2BBGkKULrG3bKHc3R8njqQhhIZFn%2Bvou4NDvZdJnHjw7xrxJYYxk6d9NyZxkOcRFEALKZFH1vRhJVtelRtK9dyqzDUq84fgRJwGib2C8H2sfQJ2FDBmRrg2RnjbKlTvtflrnBfV7BqVMaHLSbkbLJYhb4BNaInmwL%2BHhnP2h%2BaLiuTlc3nPIQr4qTQsbaMztoek1qNcG9%2B3sjn5YEWP1y%2BV11hjFzmwBTg7hViAMLjPGa8efVEaVWCITxWJrwXlIh%2Fjj5LUzjtuHXWRH4pQ4kOLwLXrADClP%2FYc44Z9xVxXt4Z3OIGNEf3OpqIZvfoyymvCXmLVRJrgEvd83Vq1%2B369XvUNtSDCyBZ7sknquvux2%2F%2BCQMZKKAWcplS9nFwCuB356TEoMw3Y%2FbwgY6pgEjuiFTVlma%2Fj1joac%2Bdd1NnaQalRVS5qlQB4On%2FtWO6m5diBfBftouAfR6f2JkUKxLKenFBy6XuZsI%2B4QgsSGwWUeSM8leqEhLxjlS97Aj7ss3K0N5%2BrNRuSUvAbAoklu8FVRlhgJxD%2FMgSdXGUZ2XkG5FJMAMitgA5u4wTCVQJ8YSbL2A83BWeiLUTBUZGEWhbV9C736BxicHsNggPOn1E4Yu8qA1&X-Amz-Signature=8ffbc47383b0a323c281ab48ea9f5bede5dbbe5dbe8edbfa674e3250b32c81bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6Y3P4DP%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T181017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDW7GkvTmHOTaUWvkwMe47EE%2BynLecLozNV1%2BephhhJ%2FAiBbAJiZD4Iwb6eh6roawLIdotAMQiAQZaogajFeIZYK9yqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNbaw0NRNER0%2F3pd0KtwDIbw4eThtMS9Kiecrx5EFHZHWyrVwvYlIRQL3BBS5KxdQb9EjHaCJVRpH3AD5sKU0eOwDGGFncT1%2B3j3uiYuSGyJskzpAd750rG1s2ig7rK36ROQDcnenoe23FjINSS5F1%2FIBxwD0eqzn48pnZeXtndGIiOr9G3x4h6V6hlQEFU4WGk4JIug%2FFF%2BIoM9Hz33nSEz5CaY8%2FCmPhNGZnmF3x6qb1Iz0IqHMW8pADzznJhKVOWxtCFy7%2BBGkKULrG3bKHc3R8njqQhhIZFn%2Bvou4NDvZdJnHjw7xrxJYYxk6d9NyZxkOcRFEALKZFH1vRhJVtelRtK9dyqzDUq84fgRJwGib2C8H2sfQJ2FDBmRrg2RnjbKlTvtflrnBfV7BqVMaHLSbkbLJYhb4BNaInmwL%2BHhnP2h%2BaLiuTlc3nPIQr4qTQsbaMztoek1qNcG9%2B3sjn5YEWP1y%2BV11hjFzmwBTg7hViAMLjPGa8efVEaVWCITxWJrwXlIh%2Fjj5LUzjtuHXWRH4pQ4kOLwLXrADClP%2FYc44Z9xVxXt4Z3OIGNEf3OpqIZvfoyymvCXmLVRJrgEvd83Vq1%2B369XvUNtSDCyBZ7sknquvux2%2F%2BCQMZKKAWcplS9nFwCuB356TEoMw3Y%2FbwgY6pgEjuiFTVlma%2Fj1joac%2Bdd1NnaQalRVS5qlQB4On%2FtWO6m5diBfBftouAfR6f2JkUKxLKenFBy6XuZsI%2B4QgsSGwWUeSM8leqEhLxjlS97Aj7ss3K0N5%2BrNRuSUvAbAoklu8FVRlhgJxD%2FMgSdXGUZ2XkG5FJMAMitgA5u4wTCVQJ8YSbL2A83BWeiLUTBUZGEWhbV9C736BxicHsNggPOn1E4Yu8qA1&X-Amz-Signature=3db0eef873da785e4485e4103b3ddc0bbb0c01e9097dee888ab7dda148b50433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

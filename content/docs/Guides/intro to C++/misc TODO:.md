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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S2BMO4X%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnVWTiKN1qjr5kdxU3saSG5hSl%2BiPDaJcsqPC2tY2e9AiEAyt7LwHg%2FW2T6QN9bJASMH%2FpAypcdGhDpKoouLrGcTdEqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2FkON84nA834DnQxircA00SsQqAaRul%2F79qep44CjPWN8i%2FCKBJYMGEGPXgQGMYvGESfEpXHpSHdK9jqfCZ04Acepl4mfnmLyJ3iJkGDWSQlrqSXn15%2FLGF7npYTcRjp3BoQmIfgwXrDfF3P4z9iZdtMsYM1O8t2v%2FXFk8EjZBafb1RPhGQ2TMOJgpoSsm%2BzMbisc%2Bz1Gmof6O2OePb92aiGSubZi%2FbufaYpDWj1JdWw2BdPAr4sU7T9cYOxLUWqiQI5B2zkCCc%2F882sDSgJLWKWObzRqeJRIJ%2F3EMPZoar2bJIiFogPKTedP9moqQtkq5OkTs4SpUiUe5LovRzr9Bddwjt%2BDZuN7sOyhpBsi5sPppkdkoskdH3Ab2%2BKz%2BKR8C6bM3WG9aoRncRuW2xTV2OQeABHGTsbbVgyRFGkkn%2BXx8hVX3NdRjb86RZcPJKYZmlkujUdOxPsGGC5AEW%2BTo0nuWYcJ3Lq0MOErOD35i7B8lTA8qo3Va3FA0OGKZbhrUdXBCAC%2F1j4z7v2C0A%2BLXJVEBJltACz5I5ptKtp5QRuHGI0h%2FYwMIPbpRFXqrgqW1qvi6ldd0TMj0V5YuH%2B1axUAepFJPqy3mN00Csa4JjxflABgrRiIosNNuOVj4yM1ggnkwlC8idUaCeMJLE4skGOqUB1ajmKuj7wRTAOTfmHC9ZOpxXyk5KNkHKD%2BFgqn9kAVUQuNbP4LqXRIczJ2F2FxcWwK9AlO4u27OHxJ6mgse1scDhsHmIPc3UqtfsF2sKGxQHbjYsOyJznKRhQW8xMHMCTtq%2FIWY%2BFitjvkCP%2F2PLIp2l%2FLwq1hy9GdwPVDzE5%2FpWbaaRFudliI2YkfT6QZ%2FmhJar3VgzlRHcGnBBZWeQYessRKEj&X-Amz-Signature=11f1bcdc0e0fb1a65c0e2c47b212c992f5c1bc7f27650c977b1a528c73af8841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S2BMO4X%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnVWTiKN1qjr5kdxU3saSG5hSl%2BiPDaJcsqPC2tY2e9AiEAyt7LwHg%2FW2T6QN9bJASMH%2FpAypcdGhDpKoouLrGcTdEqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2FkON84nA834DnQxircA00SsQqAaRul%2F79qep44CjPWN8i%2FCKBJYMGEGPXgQGMYvGESfEpXHpSHdK9jqfCZ04Acepl4mfnmLyJ3iJkGDWSQlrqSXn15%2FLGF7npYTcRjp3BoQmIfgwXrDfF3P4z9iZdtMsYM1O8t2v%2FXFk8EjZBafb1RPhGQ2TMOJgpoSsm%2BzMbisc%2Bz1Gmof6O2OePb92aiGSubZi%2FbufaYpDWj1JdWw2BdPAr4sU7T9cYOxLUWqiQI5B2zkCCc%2F882sDSgJLWKWObzRqeJRIJ%2F3EMPZoar2bJIiFogPKTedP9moqQtkq5OkTs4SpUiUe5LovRzr9Bddwjt%2BDZuN7sOyhpBsi5sPppkdkoskdH3Ab2%2BKz%2BKR8C6bM3WG9aoRncRuW2xTV2OQeABHGTsbbVgyRFGkkn%2BXx8hVX3NdRjb86RZcPJKYZmlkujUdOxPsGGC5AEW%2BTo0nuWYcJ3Lq0MOErOD35i7B8lTA8qo3Va3FA0OGKZbhrUdXBCAC%2F1j4z7v2C0A%2BLXJVEBJltACz5I5ptKtp5QRuHGI0h%2FYwMIPbpRFXqrgqW1qvi6ldd0TMj0V5YuH%2B1axUAepFJPqy3mN00Csa4JjxflABgrRiIosNNuOVj4yM1ggnkwlC8idUaCeMJLE4skGOqUB1ajmKuj7wRTAOTfmHC9ZOpxXyk5KNkHKD%2BFgqn9kAVUQuNbP4LqXRIczJ2F2FxcWwK9AlO4u27OHxJ6mgse1scDhsHmIPc3UqtfsF2sKGxQHbjYsOyJznKRhQW8xMHMCTtq%2FIWY%2BFitjvkCP%2F2PLIp2l%2FLwq1hy9GdwPVDzE5%2FpWbaaRFudliI2YkfT6QZ%2FmhJar3VgzlRHcGnBBZWeQYessRKEj&X-Amz-Signature=96fe09a0a2e9035aa321b418da8c03a1f537bbde41923825afd57380eca4b7ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

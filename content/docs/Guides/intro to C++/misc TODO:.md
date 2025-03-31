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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMEVV3IQ%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIEGd8GE9nDpCzOOTZ5EHTCByq8pMZv36A3%2FOyGoY64F1AiAkouSCuPVSqFWrHPA%2Byi%2BCqB0S3nv2RyjdNdhQl256kiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhOUqVSF2iToaGvaHKtwDxqTFGXwJ%2FdFRZsJdURbNYs5jMZVe5XRT8kGS1vq24cvbnNJWQIYU%2BJJbbfhsmlt%2FxvOV2LRY055uSH7i0CoOZ5VFWScqUffrFM9oSyCCa7h7lU2eMb%2B29aLt4eyogAS9dOvJqL5jpLZP%2BveWzyvKEVa4hFAp%2FgOXXd%2BH8HAi96POR7AgRU125PpF%2BetiiYL%2BvyhWphHhIcWAW5VGZNZYcX7i12yED7DE%2Fk0koWAP8p9ZGKVVjHL0%2F1EObNN6CTiFjzknPysUNp5VBxhUwzFO9JhW9gOQSntoEPsrJkNC6YZYqdFfKJaD4DrvLRc5QL4%2FffnrQTpdRd5dvcX9apFWR%2B9JJPFpSygoPfd%2Bo6XuJI%2BNk0cf1clPWWI2MRmq2J3SScFat9t2iXCmP2CHz4CgEdJnvjZvIsSGHHS3DKCfJwYLDYWjVli7b8Z%2FoO6yyHPs7z13I4egNRJTx9QwrKBGuF4BgUdZdeFu6GcCyYNL6YIgHGBRQK0N06K9i4zVHOKgL6Zxe2EQrnC4MxkgLgvD38%2BHr1vpFOCssixCC%2BZXDRwDJzl8gkhUUp6EBC3hgrCs2%2BcKsHDnKqkR461YwnLpSHyAeQhqMGZv94uY5q3x3SVg9P%2Fh2rHOYyVaMEowzbirvwY6pgEo0i82LjY2UydFalWbFdngbAFBLAX0TbVRomlB1tDuPIGBwtmbjk7Eq%2BVMqm53M0VrYCGpa%2F2MFUU2oJkEiEJJ94kP6TXpFUa9UGPHWOTt1XHav1OfYeTB12O4QKQVbevXES%2F%2B3%2BVcM6jMuhYXt0M6ETlhWBZ7o13SSGv07z9aFGkfotqI%2BaFj8NnuTx2Zo29rQ9nQsdYcXHweKNF5ejHTVI68%2FDLY&X-Amz-Signature=8b896ead3168e67a2820d180dfedc28b1afc78467717bde5c931bfdf4142710d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMEVV3IQ%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIEGd8GE9nDpCzOOTZ5EHTCByq8pMZv36A3%2FOyGoY64F1AiAkouSCuPVSqFWrHPA%2Byi%2BCqB0S3nv2RyjdNdhQl256kiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhOUqVSF2iToaGvaHKtwDxqTFGXwJ%2FdFRZsJdURbNYs5jMZVe5XRT8kGS1vq24cvbnNJWQIYU%2BJJbbfhsmlt%2FxvOV2LRY055uSH7i0CoOZ5VFWScqUffrFM9oSyCCa7h7lU2eMb%2B29aLt4eyogAS9dOvJqL5jpLZP%2BveWzyvKEVa4hFAp%2FgOXXd%2BH8HAi96POR7AgRU125PpF%2BetiiYL%2BvyhWphHhIcWAW5VGZNZYcX7i12yED7DE%2Fk0koWAP8p9ZGKVVjHL0%2F1EObNN6CTiFjzknPysUNp5VBxhUwzFO9JhW9gOQSntoEPsrJkNC6YZYqdFfKJaD4DrvLRc5QL4%2FffnrQTpdRd5dvcX9apFWR%2B9JJPFpSygoPfd%2Bo6XuJI%2BNk0cf1clPWWI2MRmq2J3SScFat9t2iXCmP2CHz4CgEdJnvjZvIsSGHHS3DKCfJwYLDYWjVli7b8Z%2FoO6yyHPs7z13I4egNRJTx9QwrKBGuF4BgUdZdeFu6GcCyYNL6YIgHGBRQK0N06K9i4zVHOKgL6Zxe2EQrnC4MxkgLgvD38%2BHr1vpFOCssixCC%2BZXDRwDJzl8gkhUUp6EBC3hgrCs2%2BcKsHDnKqkR461YwnLpSHyAeQhqMGZv94uY5q3x3SVg9P%2Fh2rHOYyVaMEowzbirvwY6pgEo0i82LjY2UydFalWbFdngbAFBLAX0TbVRomlB1tDuPIGBwtmbjk7Eq%2BVMqm53M0VrYCGpa%2F2MFUU2oJkEiEJJ94kP6TXpFUa9UGPHWOTt1XHav1OfYeTB12O4QKQVbevXES%2F%2B3%2BVcM6jMuhYXt0M6ETlhWBZ7o13SSGv07z9aFGkfotqI%2BaFj8NnuTx2Zo29rQ9nQsdYcXHweKNF5ejHTVI68%2FDLY&X-Amz-Signature=9d0c61c793be157302307f8a0e56e8cc387b49f82fb3af143aa64af8b18d29b6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

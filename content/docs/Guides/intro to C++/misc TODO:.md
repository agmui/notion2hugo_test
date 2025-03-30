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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJODGRJI%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T090720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIB%2FzDhMLQ6syYUT11oirRQDHlGRcr8tw%2FrBtVjYfTiY6AiASHVisYsT98cyPmWT8DLGDfqZLkadcJ1TUp6rDhhTquiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX4PakKbSb8vr4G4vKtwDLDDdRr73QyxV1Y%2FPClULUCupmTNZ%2FeqEji%2BgKr24kPk1ckxDjr2nnj%2BgVNeOH8H7Fc59NZ96ahe90nESWG1QW5%2FJZZq50YzsgLBc7ZnCPFDcoETy9EFcR6Xb7pJyf%2B8PjtGrc5IOta4CaBr2mDJErpFS42w6Rf1xY7Q0RtSLS7T6nbvXZGkoPbygCQdebhZaxzHWBO%2B1hQxhdy%2BwWEFFh0EL8hnuiRG6vnYX7i67CWeVd%2FW6W95So9xYscrSpFTlqjY%2FAjN1aawGTgSyFiygE27rxxcpBYSwwbqnWplUTpTKXRGXarQsEgptxqkZwiziZdrMOov5gmwidq%2Fa%2BvKTM%2FaZKcxAb1PEqzk23wwmdlFz35EwUXEMVXnFIqKWwO4nw%2Fa6EZaMOe7sudgEIHP4I4jkaf%2F1VcKy2AASAZ1ex4iayd3boK7z3P0TT19K4oFjNQQMnHDAtP1Glt%2B1LqFpCc9H1B9ACloGN1ljuT2QykpW%2BJ%2F%2FL%2BqhbV2lcELYIlBLhAATO%2BO60Jl1ttMHORhIFcDS1wHBa2Wi%2F4ld%2B5sIbF5JwgQsXkKoxIJlr4ArYzE9AbHz8dATAd4yVEdTfe9%2BOQ0Hy5eMlUzXQIggv3T4N28g6RR9Slb21ANlLtMwxfCjvwY6pgFfm120a2UD3PgZzKxxFSliaUI%2F%2FDlmapZPm2jrLwnHwvr2WHENaZzYrxOAdFd8PdionNIS6HtsA%2Fv%2Fjkp1C79KD%2FQA%2BBuagLxdeLp%2FEOoL5dVlz01KLIQmbVZD5Ypxt5ycaAzri6hKZUM%2Fg7UqAHRbVL28czFzJjffvjAz0aGACse3FpE66J%2F49m%2FoDuucsnHKVwdmWPnsFzeLla7t7Mfpp18W9k7z&X-Amz-Signature=f48ecc9421ff1281b818f4389ea26b1864e2baf5fb2f2df51da7d342e7e940f7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJODGRJI%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T090720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIB%2FzDhMLQ6syYUT11oirRQDHlGRcr8tw%2FrBtVjYfTiY6AiASHVisYsT98cyPmWT8DLGDfqZLkadcJ1TUp6rDhhTquiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX4PakKbSb8vr4G4vKtwDLDDdRr73QyxV1Y%2FPClULUCupmTNZ%2FeqEji%2BgKr24kPk1ckxDjr2nnj%2BgVNeOH8H7Fc59NZ96ahe90nESWG1QW5%2FJZZq50YzsgLBc7ZnCPFDcoETy9EFcR6Xb7pJyf%2B8PjtGrc5IOta4CaBr2mDJErpFS42w6Rf1xY7Q0RtSLS7T6nbvXZGkoPbygCQdebhZaxzHWBO%2B1hQxhdy%2BwWEFFh0EL8hnuiRG6vnYX7i67CWeVd%2FW6W95So9xYscrSpFTlqjY%2FAjN1aawGTgSyFiygE27rxxcpBYSwwbqnWplUTpTKXRGXarQsEgptxqkZwiziZdrMOov5gmwidq%2Fa%2BvKTM%2FaZKcxAb1PEqzk23wwmdlFz35EwUXEMVXnFIqKWwO4nw%2Fa6EZaMOe7sudgEIHP4I4jkaf%2F1VcKy2AASAZ1ex4iayd3boK7z3P0TT19K4oFjNQQMnHDAtP1Glt%2B1LqFpCc9H1B9ACloGN1ljuT2QykpW%2BJ%2F%2FL%2BqhbV2lcELYIlBLhAATO%2BO60Jl1ttMHORhIFcDS1wHBa2Wi%2F4ld%2B5sIbF5JwgQsXkKoxIJlr4ArYzE9AbHz8dATAd4yVEdTfe9%2BOQ0Hy5eMlUzXQIggv3T4N28g6RR9Slb21ANlLtMwxfCjvwY6pgFfm120a2UD3PgZzKxxFSliaUI%2F%2FDlmapZPm2jrLwnHwvr2WHENaZzYrxOAdFd8PdionNIS6HtsA%2Fv%2Fjkp1C79KD%2FQA%2BBuagLxdeLp%2FEOoL5dVlz01KLIQmbVZD5Ypxt5ycaAzri6hKZUM%2Fg7UqAHRbVL28czFzJjffvjAz0aGACse3FpE66J%2F49m%2FoDuucsnHKVwdmWPnsFzeLla7t7Mfpp18W9k7z&X-Amz-Signature=21c6c1dad8e69ecdab9b3cb8d2deecbbb3e98e6c3e6beca60083a5529cb04b74&X-Amz-SignedHeaders=host&x-id=GetObject)

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

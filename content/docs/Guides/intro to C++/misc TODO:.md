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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623WOAPEZ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T200845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQC48H1ITblC1ffiIfQnX%2FdkV466Tna5dSTb5ukUnvo5mgIgSplZsrPIbBdaprsE%2FuYiscFlOPTOzqnXCQrRBgHGpH8qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIaxX6IWI%2FPQdX%2BYnSrcAwvYMQ3rDbQ1qxdDYnpQgaQVxMI3HDBh1ta6Fz2xkT73fk%2F8gZOClnPvQbT4rUkifSnG3cquK%2F9ooHspTby9VsaXaLqkVD9%2BBmAB71TDE7J99jR1JwpoDstJwLy1PRRKqgURa92EgmsafoNXxz6essqNiJ1CZvS7S16jhb7V87jFhEFp5OBv2jqZY0q%2BpG9dyUYmIcZjVf185ShcDfEyg5XyPn9bxsjeSMqcNSSQElLvqVdZaahXjR4rtuKd6M9SZ4Ea52%2FF9996pC5D4h5%2B9F2YbEdaDjZ0p7AQa%2Byt4CPQlM%2FJVp99n7MeXyXnY2zdIrx%2FVajXpDko%2BQ8aVVByvi%2FMAB%2FqajYcxYhtlm7wTRrQPbATvTaoWJTe45Ln8ZBJ0ys2XjCwZvu0ZpxAJxZGVwfkvzLqwdMdGFuorvZpcIO6pdwQO3LHWymlNrvtXX3CZhVWNBF2LV0J0pd5HoBNbW2oFFEZiHps6YsHRQV%2FGESNZZe3wNOlNMIrGynEUV3SvmPNQSg9C1hMTPEX34HncLPabpee232k3VOLMywvVtvHZw2D6RVlXm%2FNtjbdaU6h8FtYiJtpF2n0psEWoFuaHGTRYffPedVsNwOciQF0tSPZ%2F9LVhIfF3CgKG3oMML%2FDx74GOqUBDR0dJ%2BCMZCU16RgD6XUjph0iLiUObDDaeOuUm6WIfAGgvTsa9bgecdvzyCtceT4Frj3vdS7SE%2FOIbPyZXPi9izCOtMBs6lz7bkmGn7NrKAS8yn6RgLUe7Tb%2Bge7yUCkY5hksMH%2BEjViIKRBYAnTpbOj7TSByvLVLG6pJO9N33NApPG9UKARM2d2NgoPXVOyYyENLFlLLwufq7Do2DCTKusbpcFUE&X-Amz-Signature=407c4c08e27a6f9c2b8c028709ef6294df4c7c02f0cab5bc9147addfdb4b4298&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623WOAPEZ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T200845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQC48H1ITblC1ffiIfQnX%2FdkV466Tna5dSTb5ukUnvo5mgIgSplZsrPIbBdaprsE%2FuYiscFlOPTOzqnXCQrRBgHGpH8qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIaxX6IWI%2FPQdX%2BYnSrcAwvYMQ3rDbQ1qxdDYnpQgaQVxMI3HDBh1ta6Fz2xkT73fk%2F8gZOClnPvQbT4rUkifSnG3cquK%2F9ooHspTby9VsaXaLqkVD9%2BBmAB71TDE7J99jR1JwpoDstJwLy1PRRKqgURa92EgmsafoNXxz6essqNiJ1CZvS7S16jhb7V87jFhEFp5OBv2jqZY0q%2BpG9dyUYmIcZjVf185ShcDfEyg5XyPn9bxsjeSMqcNSSQElLvqVdZaahXjR4rtuKd6M9SZ4Ea52%2FF9996pC5D4h5%2B9F2YbEdaDjZ0p7AQa%2Byt4CPQlM%2FJVp99n7MeXyXnY2zdIrx%2FVajXpDko%2BQ8aVVByvi%2FMAB%2FqajYcxYhtlm7wTRrQPbATvTaoWJTe45Ln8ZBJ0ys2XjCwZvu0ZpxAJxZGVwfkvzLqwdMdGFuorvZpcIO6pdwQO3LHWymlNrvtXX3CZhVWNBF2LV0J0pd5HoBNbW2oFFEZiHps6YsHRQV%2FGESNZZe3wNOlNMIrGynEUV3SvmPNQSg9C1hMTPEX34HncLPabpee232k3VOLMywvVtvHZw2D6RVlXm%2FNtjbdaU6h8FtYiJtpF2n0psEWoFuaHGTRYffPedVsNwOciQF0tSPZ%2F9LVhIfF3CgKG3oMML%2FDx74GOqUBDR0dJ%2BCMZCU16RgD6XUjph0iLiUObDDaeOuUm6WIfAGgvTsa9bgecdvzyCtceT4Frj3vdS7SE%2FOIbPyZXPi9izCOtMBs6lz7bkmGn7NrKAS8yn6RgLUe7Tb%2Bge7yUCkY5hksMH%2BEjViIKRBYAnTpbOj7TSByvLVLG6pJO9N33NApPG9UKARM2d2NgoPXVOyYyENLFlLLwufq7Do2DCTKusbpcFUE&X-Amz-Signature=caa9e04260c2ab5d9aa24e7d24dd16f7e183d684a85d672b3698506e6cb6c137&X-Amz-SignedHeaders=host&x-id=GetObject)

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

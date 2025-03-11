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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAVBC5MU%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T081116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIH7EmdkNK4wrkR83UD4MnFk8PN1ToreoSpKARxWszu60AiEAwjpq%2B5RDPlWcJIIiuvJlKJzXYpRy3RGVVKMUHo%2Bmbh0qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2FRiXPH9LvmXb1rPyrcA%2FvkjdOsafV2DeOWjGNk11oZIgx%2BNTGuv%2F4n5d2yQAJQAFSFm27W6wsafuNsXpnM3N9UN3CWl1v6eEwPnah19d3R2BaRvMITof0GrJV2MGHJYMylwOeQK6pFWkgEAExBU7zFWv3lL2smtrDe7INBn9NQUB%2BeL%2FYirsvXLsol9OUQzJThrc%2Fzucsr7XWKWCTVMPk4Baw%2FcuWjX2x2Wj3pWZRMC9TdHZCE14vg%2BeO76bS9KsKXk%2BeCsCF5TzU1u5jyKpiFY8ugAahw%2FVjfGYb9J41BMKztECbdhpAQFSwO6soXK4pZ8%2BjBSVRBe4pXczv4HulE5nLIIqQzskTEpqcD1TTpZt5%2B7K0H0%2BsherLienx2fLEdZzQ0coaJKZRpK24OQqmu0Kp9GT5aJab1SUw%2FChqwvEgmBddy8rN9ySqSPC7nZSXz8mfwuDuvrVspmwoN9TUUc1lQLM9C2W31pxitYsaLyiAmRvtvKydTUgyavT1uo%2Fs8aJnx%2BtbCdb7YD%2FXbKJEmNzEfi7AnE0HI2q0KJgNjb4JkoDyjeSbwFQ%2FhIHHvf7oXlNFcysp0x99OmhbK%2Fh0akqBoPjWRaC9KddTkYds7BhGVBa9vUso8%2FvK8fV%2B4%2FKT0fVVcX0ioSBf0MN7Qv74GOqUBfk%2FESdWTUDiucLYIPS8QSF%2Bzp0Rt0L8Vp%2F68qiDQWZjthIRoTCKG2u0zDkkQm1xCSNn1%2FG6crAPimc5QLo4id8rSsuB%2BisOXpPY19izCAm90J5ZSl5V6q6LW7oY7jspNQT6S%2BiVL3ZjNJ276DTjFZYqa02we2vsThEx1F5y5JMX51el2y7LX%2Bya61XNHtksZmohc4upUuq%2B3x3IohzXPCNyowYXv&X-Amz-Signature=9748e9a1a672b069407053265550b0bc1d473b265c3954df1a8c26b1bda71acd&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAVBC5MU%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T081116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIH7EmdkNK4wrkR83UD4MnFk8PN1ToreoSpKARxWszu60AiEAwjpq%2B5RDPlWcJIIiuvJlKJzXYpRy3RGVVKMUHo%2Bmbh0qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2FRiXPH9LvmXb1rPyrcA%2FvkjdOsafV2DeOWjGNk11oZIgx%2BNTGuv%2F4n5d2yQAJQAFSFm27W6wsafuNsXpnM3N9UN3CWl1v6eEwPnah19d3R2BaRvMITof0GrJV2MGHJYMylwOeQK6pFWkgEAExBU7zFWv3lL2smtrDe7INBn9NQUB%2BeL%2FYirsvXLsol9OUQzJThrc%2Fzucsr7XWKWCTVMPk4Baw%2FcuWjX2x2Wj3pWZRMC9TdHZCE14vg%2BeO76bS9KsKXk%2BeCsCF5TzU1u5jyKpiFY8ugAahw%2FVjfGYb9J41BMKztECbdhpAQFSwO6soXK4pZ8%2BjBSVRBe4pXczv4HulE5nLIIqQzskTEpqcD1TTpZt5%2B7K0H0%2BsherLienx2fLEdZzQ0coaJKZRpK24OQqmu0Kp9GT5aJab1SUw%2FChqwvEgmBddy8rN9ySqSPC7nZSXz8mfwuDuvrVspmwoN9TUUc1lQLM9C2W31pxitYsaLyiAmRvtvKydTUgyavT1uo%2Fs8aJnx%2BtbCdb7YD%2FXbKJEmNzEfi7AnE0HI2q0KJgNjb4JkoDyjeSbwFQ%2FhIHHvf7oXlNFcysp0x99OmhbK%2Fh0akqBoPjWRaC9KddTkYds7BhGVBa9vUso8%2FvK8fV%2B4%2FKT0fVVcX0ioSBf0MN7Qv74GOqUBfk%2FESdWTUDiucLYIPS8QSF%2Bzp0Rt0L8Vp%2F68qiDQWZjthIRoTCKG2u0zDkkQm1xCSNn1%2FG6crAPimc5QLo4id8rSsuB%2BisOXpPY19izCAm90J5ZSl5V6q6LW7oY7jspNQT6S%2BiVL3ZjNJ276DTjFZYqa02we2vsThEx1F5y5JMX51el2y7LX%2Bya61XNHtksZmohc4upUuq%2B3x3IohzXPCNyowYXv&X-Amz-Signature=115ee141f1200f456d1ef64961c782a74d434adaaabab38cae4f9caf86305bf8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

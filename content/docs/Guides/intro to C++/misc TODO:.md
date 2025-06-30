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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665KRISHU%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T051226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHkEGjUaYMUVgtwmJdEBxA87jNcvhfF55e2ZQ9%2BD4zQKAiAM%2FKp9G0D6LPjwpRrlGTAPx5Ojbe8kXU2I15HSzKA34CqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZiYxisSJL%2Fz3u4GGKtwD3KaTSQTCspIOVulytnUC7JvVLsBoY8bkVT0YVyXZGrVv4dg1mulMpLL5R808EbGpfbLYx5qGt%2Ba5unLb8zsdts%2FiBNrTgJVdVaHqQbDb5rdCgXgqKKhuMix%2FDguhQOBIJUgAAyri777I2zEL0ldmU4%2BlODLlTsPMR9KrDd5kyqid%2FKp0GPeAXDP6kNvAy1MngcasQlmjOxK%2BO2OYJPocjDkI8WiW5FmFnABpgIt7vN87WgAxP3dbY%2BoCiXPKeXOXyT%2FJSnA3T5VYwuiGpzpZvssQg%2B8yOcyAfRBzOoW3%2BSXeBpZrtf42eWqfXN6xo%2FLxHFsmAFx7arGRf6lLj5LTeIcpGvvHpCqfPsYseAq4B34xsgKkIMCUR71VspaGDIhLhql3QALddX%2F261N4XJy5k%2F0QAwUZB38ku0RVQjQM5DFwm%2FrHuhEvcMzRtO3M5mhyy93wPbBM8iZWt%2Fk0RPekyuFSxDl9%2B4G%2FNsj%2FVzQdqlmKr6J6jzYUaP%2FhGDE35oXF1YIN87bZz%2FaPyHZmnwy8XLLby8hhWR6ZOFAS6GwdQXPh55XUSG4%2BRLNBdiGmhmpazD79zkn16pqtzRG9T0D0HJW3jcJzYYUbeO4T5VDWV%2FXaehVrUdPTWgX2MSUw4baIwwY6pgGI8mzU6k0A%2Fd7ZAtnakL6AjtMSMo4G8zNFWaxeFu1sggb6o6arjICLm1PHE79tKHesVWxcaAmbz1AGWBOcy70t6Tw9pEqhTghTrKzhwiIc%2Fl%2FDq4cTC2k10orRaR68p6ejny4Ht0M%2BXuUJBzwxkdiTR5H0YbN%2FBgOTZrElGC8Aa%2BAv77l2G5UY6Lc4efef67N10J32MjcdagflPTn3E9Dxc6dO26X0&X-Amz-Signature=76118b0e5ec30530a18292ed5a10f510559ed6f58f87da451fd9d8687173bf71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665KRISHU%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T051226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHkEGjUaYMUVgtwmJdEBxA87jNcvhfF55e2ZQ9%2BD4zQKAiAM%2FKp9G0D6LPjwpRrlGTAPx5Ojbe8kXU2I15HSzKA34CqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZiYxisSJL%2Fz3u4GGKtwD3KaTSQTCspIOVulytnUC7JvVLsBoY8bkVT0YVyXZGrVv4dg1mulMpLL5R808EbGpfbLYx5qGt%2Ba5unLb8zsdts%2FiBNrTgJVdVaHqQbDb5rdCgXgqKKhuMix%2FDguhQOBIJUgAAyri777I2zEL0ldmU4%2BlODLlTsPMR9KrDd5kyqid%2FKp0GPeAXDP6kNvAy1MngcasQlmjOxK%2BO2OYJPocjDkI8WiW5FmFnABpgIt7vN87WgAxP3dbY%2BoCiXPKeXOXyT%2FJSnA3T5VYwuiGpzpZvssQg%2B8yOcyAfRBzOoW3%2BSXeBpZrtf42eWqfXN6xo%2FLxHFsmAFx7arGRf6lLj5LTeIcpGvvHpCqfPsYseAq4B34xsgKkIMCUR71VspaGDIhLhql3QALddX%2F261N4XJy5k%2F0QAwUZB38ku0RVQjQM5DFwm%2FrHuhEvcMzRtO3M5mhyy93wPbBM8iZWt%2Fk0RPekyuFSxDl9%2B4G%2FNsj%2FVzQdqlmKr6J6jzYUaP%2FhGDE35oXF1YIN87bZz%2FaPyHZmnwy8XLLby8hhWR6ZOFAS6GwdQXPh55XUSG4%2BRLNBdiGmhmpazD79zkn16pqtzRG9T0D0HJW3jcJzYYUbeO4T5VDWV%2FXaehVrUdPTWgX2MSUw4baIwwY6pgGI8mzU6k0A%2Fd7ZAtnakL6AjtMSMo4G8zNFWaxeFu1sggb6o6arjICLm1PHE79tKHesVWxcaAmbz1AGWBOcy70t6Tw9pEqhTghTrKzhwiIc%2Fl%2FDq4cTC2k10orRaR68p6ejny4Ht0M%2BXuUJBzwxkdiTR5H0YbN%2FBgOTZrElGC8Aa%2BAv77l2G5UY6Lc4efef67N10J32MjcdagflPTn3E9Dxc6dO26X0&X-Amz-Signature=dd0de3e006a49f7b0c7820e322c4f08431b1efaa54d5262889b2e3cc4102452f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

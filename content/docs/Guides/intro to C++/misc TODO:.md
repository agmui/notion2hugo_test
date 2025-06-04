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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKCZGS66%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T100934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFxdxVBpmlc1ORCNzMoA2YEZdzTms0Sx%2BqIT7h5nKEzqAiEA8444Wiy%2BA3A8TpT5zqdq6AElpVvJaxlDb3DLqmI2N2sq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFJX0pKnVXa9J%2Bm7ByrcA7vZbJBc3aH%2FKSG9I3puPoMSl%2BrNF6DCUte0syytXD4TQlwq5Qwbk91w8gn%2BDy4Gtfxc%2F85A4Mt32QWKn0R4O42UZMO1raz2sa%2BblMZJcI0fe0bXu4%2BmaopdQC1jI%2B2EXjtflosUW2UnbANZvZB%2BL0gzmRVyiv8DYhcL7os%2Br0eYsETiAzfOJADHgGVj7D3gYZKR%2Fnl2sMuGl3UkrUhut4J6XYkCdfl20cPEtixNbxj3M2JoiRrOnWPenCWSWaxLAJ8Og5fS%2FpVhm%2BxZaWP0tmVVNPucoli5HMJIDAaMHx5FuHB7X23Cy93ESAnWvRqZy41K9XDb%2BLhe6BoUICLL065TjBsRBtAD7%2FKx4pG8KhF%2BmA120%2Fl6o5w5pRT%2BVfwbPkmuyn6VsPf93eqwu17UhKxwMG0O28sVIPmYBEcWd7SLQiptMDb7cgv5mUFUmEkqR1IHvaUxzcZ5UrB5to387sbmT1MEIUAUsH3quO6hX3mROV%2FeujIkjoYMG%2B1EJnoqHOqGAdDWhDykOJ9FHhW6U%2FfgGXgxsvO6hA%2FfIM3%2F3GyQHRoAxN%2F4LTZQVfQpMLH5BHxCLK8ckzaTpJrdxXEk5EFHcf8EZKT6HZgbIOeLRN6w4qEZ5EgnwUdzVrTqMNSfgMIGOqUBIOqkg0r6Zzyg5dIHirjE0yO%2BNOioXp21ZmCUB1%2BENWsGWdxmKgU%2B%2FL0n38DEJRBOluTGBgnsd4WOfpv3CmAh58pswRFMYXLaULokebECf7eJ0%2FnuIP2rMGVmTZRoOd5LW2dChSmsynRYtSWDORxK%2BvBwRGt%2FEC%2BgvI4lVnY6nBRc27bcJ%2F2EP0wAwgRWsu6jrYHiK3CPjY7h%2BOLPij%2BwKRcMYwMn&X-Amz-Signature=cba2b1904a7a20bd7fb325a500eedbbe42ea9c58d04d7c92d1394a8b1967dca3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKCZGS66%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T100934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFxdxVBpmlc1ORCNzMoA2YEZdzTms0Sx%2BqIT7h5nKEzqAiEA8444Wiy%2BA3A8TpT5zqdq6AElpVvJaxlDb3DLqmI2N2sq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFJX0pKnVXa9J%2Bm7ByrcA7vZbJBc3aH%2FKSG9I3puPoMSl%2BrNF6DCUte0syytXD4TQlwq5Qwbk91w8gn%2BDy4Gtfxc%2F85A4Mt32QWKn0R4O42UZMO1raz2sa%2BblMZJcI0fe0bXu4%2BmaopdQC1jI%2B2EXjtflosUW2UnbANZvZB%2BL0gzmRVyiv8DYhcL7os%2Br0eYsETiAzfOJADHgGVj7D3gYZKR%2Fnl2sMuGl3UkrUhut4J6XYkCdfl20cPEtixNbxj3M2JoiRrOnWPenCWSWaxLAJ8Og5fS%2FpVhm%2BxZaWP0tmVVNPucoli5HMJIDAaMHx5FuHB7X23Cy93ESAnWvRqZy41K9XDb%2BLhe6BoUICLL065TjBsRBtAD7%2FKx4pG8KhF%2BmA120%2Fl6o5w5pRT%2BVfwbPkmuyn6VsPf93eqwu17UhKxwMG0O28sVIPmYBEcWd7SLQiptMDb7cgv5mUFUmEkqR1IHvaUxzcZ5UrB5to387sbmT1MEIUAUsH3quO6hX3mROV%2FeujIkjoYMG%2B1EJnoqHOqGAdDWhDykOJ9FHhW6U%2FfgGXgxsvO6hA%2FfIM3%2F3GyQHRoAxN%2F4LTZQVfQpMLH5BHxCLK8ckzaTpJrdxXEk5EFHcf8EZKT6HZgbIOeLRN6w4qEZ5EgnwUdzVrTqMNSfgMIGOqUBIOqkg0r6Zzyg5dIHirjE0yO%2BNOioXp21ZmCUB1%2BENWsGWdxmKgU%2B%2FL0n38DEJRBOluTGBgnsd4WOfpv3CmAh58pswRFMYXLaULokebECf7eJ0%2FnuIP2rMGVmTZRoOd5LW2dChSmsynRYtSWDORxK%2BvBwRGt%2FEC%2BgvI4lVnY6nBRc27bcJ%2F2EP0wAwgRWsu6jrYHiK3CPjY7h%2BOLPij%2BwKRcMYwMn&X-Amz-Signature=8bee4c051c610f4828884c90df33c671c6a7b13e8819edc1c9faa86b822fcb07&X-Amz-SignedHeaders=host&x-id=GetObject)

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

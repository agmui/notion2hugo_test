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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSPTM3WX%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T070734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDv%2Bf%2FtAg%2BN54TueTyXkpRaoRvufGu03HRQMzw0wEU01gIhAJn5g130qf5uPX%2F3WiGeBcgeHbNAw9ysAWVA0pzUPy6qKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BLklV0i4MmahPGl8q3ANPLrczXG79mQ9kAA%2FzNZsP60Z4Q1O83Fj9K81ga2C6iUsJqnDR%2BtNMprD%2F100Xx98Rp4g6aXl7udyyfDYqBHy5jbwVH0xsrQGHZm3jnbSdJCGWk3zW9E6JGUFi4DzXP7ewY7BRJx5mwyUUwBrXoxDgsy%2BsDaBM0XiltECRNq0zhlAL2gLlEYsY7rjvoNzl9hgO7LKBgGhK743UWwCAcWUcbdKAUq3RV%2B0fCP3NKMgF17zUuAK6Itnm9XPgAp%2BRDstCNuugNQoVR3wuVn7x8mOnE3AqyMIF2wBhK4Tq8UGF%2BuFwVcRtZdrfpwCIH6q%2FSXO3RlVhj6Zc72KCOdFhPX8SNCsqCJOPiESugua%2BNsxlpwIm3Lqx6EQ76FXaNHSEVU52Wdf4giAg6tylhOALvWfEy8tglScgFwqDoyMnoTmX8%2F%2BOZn7htZocAkCj368U93Woy4fljpVYCJ7oBVDPkhQS6DgZ10bteMvuVlOHMy2GaGmlE5uv5peSAWriUolF3vuauGmBCUmVxEq6RAriP8tDTuQUGViE3lDUNuL%2BuQ56E9tQcGXhjbiQFozmiOkMvPBJvRZP7R91nCZPK5RouXA4UCw%2BqtQ5aj%2Bz6QPsvxLVKLQsXCp7I5HcbOpnzjDkhtbABjqkAUVx%2Bzn1u6XHK%2FLDr78zZo49Xr%2FQ8bmlvt5VN%2FVeLuOu%2FipKXnHjjaUAiX62dVq3LKqAEECLQvTPc0dKwz0jftZs4Rcme%2BZP5SW%2Fw%2FM05PNa4S5nNCUJZxeqQdtbpVf2novSQ%2BktqkTKeE0WqRihrFVpee6tr3bATC6OT3RA4WBY2XXgrxZz5u%2BpKYbMsFHw8ptzbWzJujfdJeUmFPKGUvU8GiGG&X-Amz-Signature=d697e1298d157b90dd495b979c56a09e36f2a8e8d514a93cc8e702df95e215be&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSPTM3WX%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T070734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDv%2Bf%2FtAg%2BN54TueTyXkpRaoRvufGu03HRQMzw0wEU01gIhAJn5g130qf5uPX%2F3WiGeBcgeHbNAw9ysAWVA0pzUPy6qKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BLklV0i4MmahPGl8q3ANPLrczXG79mQ9kAA%2FzNZsP60Z4Q1O83Fj9K81ga2C6iUsJqnDR%2BtNMprD%2F100Xx98Rp4g6aXl7udyyfDYqBHy5jbwVH0xsrQGHZm3jnbSdJCGWk3zW9E6JGUFi4DzXP7ewY7BRJx5mwyUUwBrXoxDgsy%2BsDaBM0XiltECRNq0zhlAL2gLlEYsY7rjvoNzl9hgO7LKBgGhK743UWwCAcWUcbdKAUq3RV%2B0fCP3NKMgF17zUuAK6Itnm9XPgAp%2BRDstCNuugNQoVR3wuVn7x8mOnE3AqyMIF2wBhK4Tq8UGF%2BuFwVcRtZdrfpwCIH6q%2FSXO3RlVhj6Zc72KCOdFhPX8SNCsqCJOPiESugua%2BNsxlpwIm3Lqx6EQ76FXaNHSEVU52Wdf4giAg6tylhOALvWfEy8tglScgFwqDoyMnoTmX8%2F%2BOZn7htZocAkCj368U93Woy4fljpVYCJ7oBVDPkhQS6DgZ10bteMvuVlOHMy2GaGmlE5uv5peSAWriUolF3vuauGmBCUmVxEq6RAriP8tDTuQUGViE3lDUNuL%2BuQ56E9tQcGXhjbiQFozmiOkMvPBJvRZP7R91nCZPK5RouXA4UCw%2BqtQ5aj%2Bz6QPsvxLVKLQsXCp7I5HcbOpnzjDkhtbABjqkAUVx%2Bzn1u6XHK%2FLDr78zZo49Xr%2FQ8bmlvt5VN%2FVeLuOu%2FipKXnHjjaUAiX62dVq3LKqAEECLQvTPc0dKwz0jftZs4Rcme%2BZP5SW%2Fw%2FM05PNa4S5nNCUJZxeqQdtbpVf2novSQ%2BktqkTKeE0WqRihrFVpee6tr3bATC6OT3RA4WBY2XXgrxZz5u%2BpKYbMsFHw8ptzbWzJujfdJeUmFPKGUvU8GiGG&X-Amz-Signature=07ea62269d5a69c9f419269f46bf54ec7386adca6bad0c4379e748e5f6ebdf03&X-Amz-SignedHeaders=host&x-id=GetObject)

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

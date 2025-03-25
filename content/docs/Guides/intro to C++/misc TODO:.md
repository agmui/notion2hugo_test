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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D5XHVOG%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T150846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOpL7xMmIW%2BC%2B%2Byu0bFFge2tHr6e%2BH1UaiwNnsZH2ncgIgQp%2BfDUCwR%2FjKfPh3auiXNM03MBtO7Tm72Td5EBAoBWYq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDEfLDYZh532hQTcF6yrcA3IaXzm6TbbU7kVTTrrWiRwgVlvg4kwkGFFjOVHlr7hi6GGu3%2FzDNqV6TxnY5tRHnTIlbbvuWiJT8JEP8%2BQ%2FTyj7fbs%2FzjAh%2BPpPmqCIisD6fhuzj5kgV3J%2FRq82E7gsTllpsxysRpjFERWwRqvM7wzzmFoQep0ng9tIVH%2FqKMh9LDMaroc6ah1wlyK59VN54BMIJKviGg4%2Bcmy%2BhpgY0zTZtAYWdScnMVAB%2BI7HD2xycpu9CZc%2FvEuqKGCFkmdILO4Be1JoQ5Koq3Gp6mmpgIHKh4Y48fCOdaY34AaBZbN%2BQg2I4r0y2sYonhvs%2FgSZ725CUEMvuWOxP%2BhOm1gKdMLLHUXD4fxBh0zLBSmrueMaSOro0qJdkKaAJv2q%2FKD63PMkd52vVce%2BoIUBm6gxEkNIQMUUoo4v1KYdz4RC7O0H9v1fa9RCV%2FRvEEHA%2FvobNL9yhyBW80HrEhedoF9iyeKz0Ig8p6HNLEHRwmfHK5fwjbwR9S9p5EBZ0X3g5PZaddZY%2F3%2Fzit1iV74B3hQPuixMNXNKhf%2Bdq8v0Ff6NSbR5EDtmBKIsERpGerb%2FV62XgM2GiYtY65TCuNxNgLZrZHxzlh5TaMnh3y2I3VbXyJnxK9gGIZsC1DHJacCcMMiFi78GOqUB5JugwOc1DqEpwgnR6LyIqPWd6lk0IQHX6VlkWKgjWGhIS3XPoy8egb2uAoNvNwe5ZbXqaLhlastfS3QagE%2BaPpxn1TYAhDMfbF5lhVpsl17D1gt0xBSV2ySMTVyvNdmWkYyMwNxac2uNWwR6yNOUKqQrzIMPkC%2BAxgKZWINQ30IdwAxYxUu9V6aS5ikGUuwtn0dUxGQF1aFha6IBHbZrb%2BWEauhD&X-Amz-Signature=ebc810d8fdb00c245472a9789894302761738d9dc9cbe3cafaf9f6e5a39c4c22&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D5XHVOG%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T150846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOpL7xMmIW%2BC%2B%2Byu0bFFge2tHr6e%2BH1UaiwNnsZH2ncgIgQp%2BfDUCwR%2FjKfPh3auiXNM03MBtO7Tm72Td5EBAoBWYq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDEfLDYZh532hQTcF6yrcA3IaXzm6TbbU7kVTTrrWiRwgVlvg4kwkGFFjOVHlr7hi6GGu3%2FzDNqV6TxnY5tRHnTIlbbvuWiJT8JEP8%2BQ%2FTyj7fbs%2FzjAh%2BPpPmqCIisD6fhuzj5kgV3J%2FRq82E7gsTllpsxysRpjFERWwRqvM7wzzmFoQep0ng9tIVH%2FqKMh9LDMaroc6ah1wlyK59VN54BMIJKviGg4%2Bcmy%2BhpgY0zTZtAYWdScnMVAB%2BI7HD2xycpu9CZc%2FvEuqKGCFkmdILO4Be1JoQ5Koq3Gp6mmpgIHKh4Y48fCOdaY34AaBZbN%2BQg2I4r0y2sYonhvs%2FgSZ725CUEMvuWOxP%2BhOm1gKdMLLHUXD4fxBh0zLBSmrueMaSOro0qJdkKaAJv2q%2FKD63PMkd52vVce%2BoIUBm6gxEkNIQMUUoo4v1KYdz4RC7O0H9v1fa9RCV%2FRvEEHA%2FvobNL9yhyBW80HrEhedoF9iyeKz0Ig8p6HNLEHRwmfHK5fwjbwR9S9p5EBZ0X3g5PZaddZY%2F3%2Fzit1iV74B3hQPuixMNXNKhf%2Bdq8v0Ff6NSbR5EDtmBKIsERpGerb%2FV62XgM2GiYtY65TCuNxNgLZrZHxzlh5TaMnh3y2I3VbXyJnxK9gGIZsC1DHJacCcMMiFi78GOqUB5JugwOc1DqEpwgnR6LyIqPWd6lk0IQHX6VlkWKgjWGhIS3XPoy8egb2uAoNvNwe5ZbXqaLhlastfS3QagE%2BaPpxn1TYAhDMfbF5lhVpsl17D1gt0xBSV2ySMTVyvNdmWkYyMwNxac2uNWwR6yNOUKqQrzIMPkC%2BAxgKZWINQ30IdwAxYxUu9V6aS5ikGUuwtn0dUxGQF1aFha6IBHbZrb%2BWEauhD&X-Amz-Signature=a945968083df9ce678d5e87723379566cb9139478a063b1bf6b73a7b012370f1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IGXCZKC%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T025518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRC5ebqjJVQudW2nXW0lfWBsXH0%2BVIXBheYvARW4XyyAiBbyK9mZ9pWNlr8SHcr2XoZ4fCTn7Q2SZGJo8taimn2giqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0frbH9k4bXEsC1NvKtwDI0smrj5F9%2FxGTB%2BrKjn0dMzZ0GQ%2BfiB71bII2nFT2Ysj7y5KPVVH%2B04rXQt3Xxj%2BgEKP88LQwjvAx%2BqsJaVdq91yQVjlNgC0V4gRwJ5Lk4ZDtlbDTB8mrFoJ0pggDjFqxJyFNX5iuFFXDgP%2FxmYLuYILMIuAKqaXkG9jPNZnwxAMk221ZpVHI%2B6HuO0Sm%2F%2BxB3%2BFZKy2kmakbTzmF%2BTPqfwy7xNLR75y%2FvFcAC28%2FciXLSvB%2FyFqNs7PVTcSNyzTsqLQgmroGkQLKKZIikCmPLU9g3tCKRo9V4HZkjJ52P8EpHklaXc1%2F7DBNyEuQ5%2Fj3mwRvBGrAxgpuMQHglyCpFmjBDCiVIn01fF9XUxMKtLg2JIG5zt9guj0DDTFRHeUd5g9pPsimAjtRKhKLnUv9i%2FvF6zeioVmg6iP0BKCZzXkllTBCj6Dvl3952Q4lMZe4P8ks3oQRi2oOXETLAQ8thwU%2Bv9Z095HMpMEOudI0vThRrygQnB%2BptbhNTYhJU8iiZPkfYYQ2C9u2aGWBvi0UCHtRyYqHRo%2BAv0vY2fnoks2F1KgQSgwT6DCrTNnhDug%2Fqzit%2BRmQHm5pDXW80IXzNIx7DF6TTrxw6wpZPsZtOkjlcNxzhmpTlnkaLIwgu7twQY6pgEdwvfCJSCkBTy632GLpcJQbUEH3sEfQrDUDZRKNRQ%2FXxNAjigB7tQnXR9qMr6YX3rJQCfLLS%2FzyOU57F8C1dR5jKwXSd5%2FYTzmOTkMea95%2B2RimyYXgHDMPsdVVZLhEPRyuR2ENiNWIHuQ0AUkwEUvB6jkHzjAma%2FxemeoCdEUMffzVAbERNi2BeLllUc04HVPCy%2BMGfrJNo4I2hNXU4%2BnCwEDcCau&X-Amz-Signature=207ac8ca9bdf68750a6599a74279e6ee3ae2477bf9914c2ad96126a097230490&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IGXCZKC%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T025519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRC5ebqjJVQudW2nXW0lfWBsXH0%2BVIXBheYvARW4XyyAiBbyK9mZ9pWNlr8SHcr2XoZ4fCTn7Q2SZGJo8taimn2giqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0frbH9k4bXEsC1NvKtwDI0smrj5F9%2FxGTB%2BrKjn0dMzZ0GQ%2BfiB71bII2nFT2Ysj7y5KPVVH%2B04rXQt3Xxj%2BgEKP88LQwjvAx%2BqsJaVdq91yQVjlNgC0V4gRwJ5Lk4ZDtlbDTB8mrFoJ0pggDjFqxJyFNX5iuFFXDgP%2FxmYLuYILMIuAKqaXkG9jPNZnwxAMk221ZpVHI%2B6HuO0Sm%2F%2BxB3%2BFZKy2kmakbTzmF%2BTPqfwy7xNLR75y%2FvFcAC28%2FciXLSvB%2FyFqNs7PVTcSNyzTsqLQgmroGkQLKKZIikCmPLU9g3tCKRo9V4HZkjJ52P8EpHklaXc1%2F7DBNyEuQ5%2Fj3mwRvBGrAxgpuMQHglyCpFmjBDCiVIn01fF9XUxMKtLg2JIG5zt9guj0DDTFRHeUd5g9pPsimAjtRKhKLnUv9i%2FvF6zeioVmg6iP0BKCZzXkllTBCj6Dvl3952Q4lMZe4P8ks3oQRi2oOXETLAQ8thwU%2Bv9Z095HMpMEOudI0vThRrygQnB%2BptbhNTYhJU8iiZPkfYYQ2C9u2aGWBvi0UCHtRyYqHRo%2BAv0vY2fnoks2F1KgQSgwT6DCrTNnhDug%2Fqzit%2BRmQHm5pDXW80IXzNIx7DF6TTrxw6wpZPsZtOkjlcNxzhmpTlnkaLIwgu7twQY6pgEdwvfCJSCkBTy632GLpcJQbUEH3sEfQrDUDZRKNRQ%2FXxNAjigB7tQnXR9qMr6YX3rJQCfLLS%2FzyOU57F8C1dR5jKwXSd5%2FYTzmOTkMea95%2B2RimyYXgHDMPsdVVZLhEPRyuR2ENiNWIHuQ0AUkwEUvB6jkHzjAma%2FxemeoCdEUMffzVAbERNi2BeLllUc04HVPCy%2BMGfrJNo4I2hNXU4%2BnCwEDcCau&X-Amz-Signature=283eb2bce9f0dfc5662756bc5dbb188c8ea5b9a5aaa157409357f1d74e1455d5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

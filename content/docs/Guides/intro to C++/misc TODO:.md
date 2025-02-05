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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4KDW53B%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T220646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCW1IZBCmTM40CxkxnUIM6oCAfUdxl%2BqEmDXcbfHPblPwIhALgbp2V4KFKY7ErI1VBGvecB2N2xIHWF3lLFhgGzrE4bKv8DCEoQABoMNjM3NDIzMTgzODA1IgybT1MePZiLBHzHJkEq3ANDQR94v3y0GGjdrky42HKkjbsyLY7Ylu8T9CENTvR3ZwiAkAfOmiNPBvJwW%2F%2FWJqqEuFw21sca8lxjNGphmk3ZtmZ9CGNK8FGMVOl8VhTIpGIcSTXEf%2BNQn1f6ueoX6w42KHvrFozpPAJG5NDQs0Cw1E7%2FEVFJjat%2Behrp8bdyl3lXOF8ZXq5lwxdYl%2FKqWZev172G%2BPgYJQSETu0mZnjroSDQjMm5MTc24o3w2jgwEgbXr3%2Bcz5xk2C2ubHosMoDaeNOWfZ2zVO4bOKnO1BkIsU787vg5NiSoCZx8Dt8i5EQklTy4UDSlybx9SLF1Lozzu9Esq4gTNqNJLSChrzjVadcpWoFjfNFRrBF1Yft4X5Qh%2BwknLjunAGzZYWVsEyXw9lHjC6VdUr0LxyshW0KnFS0YM6WVf5KH9WuIq6zzl9TXRLKo3Ya2nBv1EXiVNuOWEkwOkdTEE%2B61sEP4vsrvqXL2A72OI84hJnwuiUSSs2L%2BMB3JzKa7RdllucAQ%2FEZYdZl0oLVC2dB6ws6nZS5gD0Ax6NIsBDw0s72M%2FhIn8LjncjtQ1%2B6im1WFYFsCyQARZoAwNotG75yxjlXpsiWE61K84iTEmK56ESC5NzXYgD1m8EPJb%2Fmf9NJNZzD%2Bu469BjqkAVDMxYgaScr341nk0%2FJ8jAm3Ivcx4HtAdYKa5N11mq5PWdsvcQuUUvSfpd86LmjqHzeq79GxkKntbYWfxUf9FADUKtXp3vAzHXiNsAwhfJ3n9US3pWh9YxkILbqItjtrq7NRNM3kp%2BT%2BwrkpmZNc5uj%2Fv6PEmrWuwBvSBAk3j0o7nhTkAiBiRKkpRVM6RrDBWiiG9NC%2F5rOTCIUgyAEn95%2BOio7r&X-Amz-Signature=7d1f565e79a77fce39486c73cbc76e8e07d874d3dfc2bb92be2140a98023d89d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4KDW53B%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T220646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCW1IZBCmTM40CxkxnUIM6oCAfUdxl%2BqEmDXcbfHPblPwIhALgbp2V4KFKY7ErI1VBGvecB2N2xIHWF3lLFhgGzrE4bKv8DCEoQABoMNjM3NDIzMTgzODA1IgybT1MePZiLBHzHJkEq3ANDQR94v3y0GGjdrky42HKkjbsyLY7Ylu8T9CENTvR3ZwiAkAfOmiNPBvJwW%2F%2FWJqqEuFw21sca8lxjNGphmk3ZtmZ9CGNK8FGMVOl8VhTIpGIcSTXEf%2BNQn1f6ueoX6w42KHvrFozpPAJG5NDQs0Cw1E7%2FEVFJjat%2Behrp8bdyl3lXOF8ZXq5lwxdYl%2FKqWZev172G%2BPgYJQSETu0mZnjroSDQjMm5MTc24o3w2jgwEgbXr3%2Bcz5xk2C2ubHosMoDaeNOWfZ2zVO4bOKnO1BkIsU787vg5NiSoCZx8Dt8i5EQklTy4UDSlybx9SLF1Lozzu9Esq4gTNqNJLSChrzjVadcpWoFjfNFRrBF1Yft4X5Qh%2BwknLjunAGzZYWVsEyXw9lHjC6VdUr0LxyshW0KnFS0YM6WVf5KH9WuIq6zzl9TXRLKo3Ya2nBv1EXiVNuOWEkwOkdTEE%2B61sEP4vsrvqXL2A72OI84hJnwuiUSSs2L%2BMB3JzKa7RdllucAQ%2FEZYdZl0oLVC2dB6ws6nZS5gD0Ax6NIsBDw0s72M%2FhIn8LjncjtQ1%2B6im1WFYFsCyQARZoAwNotG75yxjlXpsiWE61K84iTEmK56ESC5NzXYgD1m8EPJb%2Fmf9NJNZzD%2Bu469BjqkAVDMxYgaScr341nk0%2FJ8jAm3Ivcx4HtAdYKa5N11mq5PWdsvcQuUUvSfpd86LmjqHzeq79GxkKntbYWfxUf9FADUKtXp3vAzHXiNsAwhfJ3n9US3pWh9YxkILbqItjtrq7NRNM3kp%2BT%2BwrkpmZNc5uj%2Fv6PEmrWuwBvSBAk3j0o7nhTkAiBiRKkpRVM6RrDBWiiG9NC%2F5rOTCIUgyAEn95%2BOio7r&X-Amz-Signature=d2ac39c5b62585763c1b5a8ed7401a4a258c9f128d8172d6e7e5f1da5501c9f9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

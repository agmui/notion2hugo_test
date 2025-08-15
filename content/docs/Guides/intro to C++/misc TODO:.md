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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RZE57DU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCTuj3ZpfqJO98lIp375HSezAef6nBSMttH1%2BAh1rvEwwIhAMc2UzJBN7i1eIzhSCUzUCA6uzT5FNEwASfX3FST2IeDKv8DCFkQABoMNjM3NDIzMTgzODA1Igw5yXn1kz0wXclneY8q3AOhw654dZNb%2FSZv62Re3gkHpVACcRmVcwux%2FV%2FZxE%2Fclw8z9wNxcBzifgjwRAFAdtTFM%2BSEQUgTWdys2ctKs56pLxxlQFCmjv5%2BvTFlOWdT7YjrUDvY4vht2UsyO4BzB%2BsOs6xWi9IoYDorpiNQYo1N9y5NmTup1%2F3WddxQ72lcSM9FGnxkbadvzYgLVnPD%2F57N38R0MqIhUD1fUIwsrUo%2BCHw%2BXfZI667VCAPNchLD76T8CSIQacaWPhhEdzbXxPwfbq9fvVYfEiO8pYRpZ95AI53WrzzLG1lkWUhDTHrem1wZH4j9m%2Fj6O7Lt%2Bln1NLOmVrZ4ksF1FoU2t2iu%2BB6vkHtXHx96GZj0a4iCLIX1wgav5fDVeCIXeXsNrVI3GUbLfI83ocXJLzA%2FUtG9TMLeB%2BjTRTWkfw9pHQ3oSa6NVWfXcfuW3CBnNf%2BO4SOyQizk5M9UHKnhTCqCwl12KZ0Ec2xSfJDqn9s4FG7wDz7N%2F3r%2BDKsf4oCSLpVaO1I%2FyvnJRniNG%2FR6jv55VALsaU9qtaUNBZei2z75U3kPWvN3Bf5rzSlpAhHRs8n7XSCPKKElTvuehGD15laS3DAlndkL22LgVw7gl3m91njMzmZXA5YSw%2BjQmC0%2BULRMNjCLyvvEBjqkAWeG4FR9%2Fu3Mx3oLqTxQ6Ad6cc4vjYnao4FF1IgP8XBkfIBnGDq2qXYIs55Cr51504bP9RIHin0Klx12%2BF%2B8FK01QivS55IqrDuC3N6YzB5JTFmu0R8an3L%2Ft%2B1vJXHWI9BoSvg56Nd8Rz3Rp0vT1dMiLcTnn2bNuVkQLlwIqSBucxo0dzulCESH5XxmTNQ0xJnX6Aq4DYaepsFPBCtrtWRUxFPm&X-Amz-Signature=6cb5184cce929278435caecb35773e3e011a900ffe568c72493a1d3ec8c43e6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RZE57DU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCTuj3ZpfqJO98lIp375HSezAef6nBSMttH1%2BAh1rvEwwIhAMc2UzJBN7i1eIzhSCUzUCA6uzT5FNEwASfX3FST2IeDKv8DCFkQABoMNjM3NDIzMTgzODA1Igw5yXn1kz0wXclneY8q3AOhw654dZNb%2FSZv62Re3gkHpVACcRmVcwux%2FV%2FZxE%2Fclw8z9wNxcBzifgjwRAFAdtTFM%2BSEQUgTWdys2ctKs56pLxxlQFCmjv5%2BvTFlOWdT7YjrUDvY4vht2UsyO4BzB%2BsOs6xWi9IoYDorpiNQYo1N9y5NmTup1%2F3WddxQ72lcSM9FGnxkbadvzYgLVnPD%2F57N38R0MqIhUD1fUIwsrUo%2BCHw%2BXfZI667VCAPNchLD76T8CSIQacaWPhhEdzbXxPwfbq9fvVYfEiO8pYRpZ95AI53WrzzLG1lkWUhDTHrem1wZH4j9m%2Fj6O7Lt%2Bln1NLOmVrZ4ksF1FoU2t2iu%2BB6vkHtXHx96GZj0a4iCLIX1wgav5fDVeCIXeXsNrVI3GUbLfI83ocXJLzA%2FUtG9TMLeB%2BjTRTWkfw9pHQ3oSa6NVWfXcfuW3CBnNf%2BO4SOyQizk5M9UHKnhTCqCwl12KZ0Ec2xSfJDqn9s4FG7wDz7N%2F3r%2BDKsf4oCSLpVaO1I%2FyvnJRniNG%2FR6jv55VALsaU9qtaUNBZei2z75U3kPWvN3Bf5rzSlpAhHRs8n7XSCPKKElTvuehGD15laS3DAlndkL22LgVw7gl3m91njMzmZXA5YSw%2BjQmC0%2BULRMNjCLyvvEBjqkAWeG4FR9%2Fu3Mx3oLqTxQ6Ad6cc4vjYnao4FF1IgP8XBkfIBnGDq2qXYIs55Cr51504bP9RIHin0Klx12%2BF%2B8FK01QivS55IqrDuC3N6YzB5JTFmu0R8an3L%2Ft%2B1vJXHWI9BoSvg56Nd8Rz3Rp0vT1dMiLcTnn2bNuVkQLlwIqSBucxo0dzulCESH5XxmTNQ0xJnX6Aq4DYaepsFPBCtrtWRUxFPm&X-Amz-Signature=4c9f8ce85057d13b604f2a59fa5a8bbefe872725fdc25065ce2ebf40067074a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

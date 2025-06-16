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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SRCQPNS%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T150949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIC%2F2I8PKozwtSQue9%2Bu4NbsxWhT5PwoxigpB1yPYp0ZQAiByw1lTakcOX6GT%2FoX8Ag57FwLCxT8NJ7%2FgzsvI7hYE0yr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM5orbRk0koVme%2FEGaKtwDbdJKddENKGnddtcHudZAkdEiIp2b%2Bp9tby8Ve0UwYD3L9f%2FELB%2B2bp0rZmjNno%2FgYbmA7pqOuop4ZfBzvt2HABYbgjEfDtBouF3%2B0lLaX61IKQoz4ecaVEwTbm%2BQKENn2Grv1ZH7RHNW971DXM4Xn1Pt3EkseO5YVnJpa72g3UtGtyEVZhLF04hK4sUx%2FNTRGf4l6ZQcbWDp1PfSMh0O5g1txC9Opk3EppBE3T0GM%2FE6IgnjS7KBo6TjT6jvvHE2dkY99iF7D5AVYK54e2FtRMb34WC9fwWU5z%2BCPPk2KQ10ZwwrVyC8xfB4cDm1EB7%2F5cmxdlPl%2FPnKrxvL1FKDwHzj%2B1QNFEZnIdKD6278yrvhpzVCq89%2BsK8mi18lrBFcAzrbPdfXeJ0jBjKymnyEjJiK8lqO8RfFqxI%2FTOOzvqIa6NEWrZSMEf2kSVHgIILzEHt6lae9wvi7A2L0ujJHtcJ4GSniImhacr%2Ft9H44LaMeSP6mYoONVDhrLYvv%2BCz%2FivPQmBm2dh1%2F98VyEjmDSq8N2c8emv9eqD00aPMgT6tzGKw0WeThQuxYqMsvad1tVZ8c53mfTny3vYjtzhQ5cEzxL6OaZqJBssf1BqvNBXJmX%2Bx%2BKr1%2FuJP7Q5wwyMnAwgY6pgEJtFlhmnekuq0823%2BJlvCWEduVvC3%2Bi%2BiV2U%2BEwPXd%2BhWzF%2FvNSHr4UrBIyexO3OW%2FmadrGjx88EkzAga7svgoiskbmzetZkhNXq9k32cjKmQUg%2Fi9WCnh7JstEBar4yASBGn%2BVxKfnRlu3N8uYrtzBG2vWY61KPCBGdR3yR4xdlR5i2RxcJIu6Hdfl2y%2BiDe0HjtcgLBntDulQY99Kicue93jzDnG&X-Amz-Signature=8fceec00f11d7170465984910419db81889ea6087aa4f7fe9a10eaad79df6ee0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SRCQPNS%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T150949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIC%2F2I8PKozwtSQue9%2Bu4NbsxWhT5PwoxigpB1yPYp0ZQAiByw1lTakcOX6GT%2FoX8Ag57FwLCxT8NJ7%2FgzsvI7hYE0yr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM5orbRk0koVme%2FEGaKtwDbdJKddENKGnddtcHudZAkdEiIp2b%2Bp9tby8Ve0UwYD3L9f%2FELB%2B2bp0rZmjNno%2FgYbmA7pqOuop4ZfBzvt2HABYbgjEfDtBouF3%2B0lLaX61IKQoz4ecaVEwTbm%2BQKENn2Grv1ZH7RHNW971DXM4Xn1Pt3EkseO5YVnJpa72g3UtGtyEVZhLF04hK4sUx%2FNTRGf4l6ZQcbWDp1PfSMh0O5g1txC9Opk3EppBE3T0GM%2FE6IgnjS7KBo6TjT6jvvHE2dkY99iF7D5AVYK54e2FtRMb34WC9fwWU5z%2BCPPk2KQ10ZwwrVyC8xfB4cDm1EB7%2F5cmxdlPl%2FPnKrxvL1FKDwHzj%2B1QNFEZnIdKD6278yrvhpzVCq89%2BsK8mi18lrBFcAzrbPdfXeJ0jBjKymnyEjJiK8lqO8RfFqxI%2FTOOzvqIa6NEWrZSMEf2kSVHgIILzEHt6lae9wvi7A2L0ujJHtcJ4GSniImhacr%2Ft9H44LaMeSP6mYoONVDhrLYvv%2BCz%2FivPQmBm2dh1%2F98VyEjmDSq8N2c8emv9eqD00aPMgT6tzGKw0WeThQuxYqMsvad1tVZ8c53mfTny3vYjtzhQ5cEzxL6OaZqJBssf1BqvNBXJmX%2Bx%2BKr1%2FuJP7Q5wwyMnAwgY6pgEJtFlhmnekuq0823%2BJlvCWEduVvC3%2Bi%2BiV2U%2BEwPXd%2BhWzF%2FvNSHr4UrBIyexO3OW%2FmadrGjx88EkzAga7svgoiskbmzetZkhNXq9k32cjKmQUg%2Fi9WCnh7JstEBar4yASBGn%2BVxKfnRlu3N8uYrtzBG2vWY61KPCBGdR3yR4xdlR5i2RxcJIu6Hdfl2y%2BiDe0HjtcgLBntDulQY99Kicue93jzDnG&X-Amz-Signature=3ec35591eb64f2225e3cdadb338dae9230e44587fa7417ff24a29f3de07e66dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

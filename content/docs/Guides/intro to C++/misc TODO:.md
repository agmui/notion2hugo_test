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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A54JYLX%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T061339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCDMiqpYLUC3OeZAuMlG2BeB%2BZeNxOGOimT7%2FPQZGr3vwIgBa0UxNju8cFEUaApOuRDcq8jOOnMk6cpgXJSbXIKBGIq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDBU7nVbfPdD7O%2FfK%2FircA0MUI0qEXS3l7ExU72d1dBtpU5jcMu9VP4hu9EQwuPlP1OwZaxeNggMC6NLIrtVevxaiInuv2G952mf6gqLk9QT6IoBAkbqLvGRBMueaHD5hbk%2FZcB8cxvLNcM045BL7EuW%2FNFWWpapFbunxlQe87xvFgQdYHPMZO%2BBeVlE9y7TpsKe53tq20Hpfs0CKwqQKtBnvPYh8OUu14BGZT11AGb0jnlcxBV1ej9B98rV7LWOGWII6MGrF3GH2cD5TcxQiMUhcutY%2F%2FIBPy5tjRtGECpSD7DE5UOy0DUsPKyerLtn14SmyiwZ1IOBvp92836irFD0v1QMDnx7c31yT%2BMUrSf%2BoZ4XPhiH6GuJ57MfN2v9klHQa8%2BvdQGjX0VrZQWCK26EGMifdC6fIeNIypOELHARXNeug1trdbozH%2B0oa7qRJMQVgyTHOkgT%2Bj7XaFp9khPdccOrAqDVnD38usgKMZVEBtoBwttOFrOPAG6yW7LFAPjeUWwgEemoEIcJ8VhygAneo1MttIE6vukbKRR9gmxvbPEpGwRnRM58rj12I3Eg%2Bou52PLrXfWtkT02yiOT%2F35Z%2Fho0M01vGrFrQ2zsFfHqfVyn0GZn7Poq9A%2FpzYwVbS9C4mPp%2B3uwLcOsaMKb4iMIGOqUBZ7UnGQEqncSi0PZXGexPQTOkMXHmdi%2FKccfHjWSn1VUB1kzqjCNu6iKR6GQSR3vCyptmX14v6HVQrknwv8X4fXsosnSq1p8ZAojalqFEt5a4q%2BebiO2TUTJ90GZkgQi55mXwe23ptohgHy5O8esh2AlDxXXKoRqATaWJ27XHKw3Ir0s%2BZI3D9KXKPyyE4EreQGOCwDpFEaQC6ybxHg0uOzQ2EQE1&X-Amz-Signature=01078320760ede45e05d88cd29cc5856c6e010427f69d2d6f9b2466139d9d0a9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A54JYLX%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T061339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCDMiqpYLUC3OeZAuMlG2BeB%2BZeNxOGOimT7%2FPQZGr3vwIgBa0UxNju8cFEUaApOuRDcq8jOOnMk6cpgXJSbXIKBGIq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDBU7nVbfPdD7O%2FfK%2FircA0MUI0qEXS3l7ExU72d1dBtpU5jcMu9VP4hu9EQwuPlP1OwZaxeNggMC6NLIrtVevxaiInuv2G952mf6gqLk9QT6IoBAkbqLvGRBMueaHD5hbk%2FZcB8cxvLNcM045BL7EuW%2FNFWWpapFbunxlQe87xvFgQdYHPMZO%2BBeVlE9y7TpsKe53tq20Hpfs0CKwqQKtBnvPYh8OUu14BGZT11AGb0jnlcxBV1ej9B98rV7LWOGWII6MGrF3GH2cD5TcxQiMUhcutY%2F%2FIBPy5tjRtGECpSD7DE5UOy0DUsPKyerLtn14SmyiwZ1IOBvp92836irFD0v1QMDnx7c31yT%2BMUrSf%2BoZ4XPhiH6GuJ57MfN2v9klHQa8%2BvdQGjX0VrZQWCK26EGMifdC6fIeNIypOELHARXNeug1trdbozH%2B0oa7qRJMQVgyTHOkgT%2Bj7XaFp9khPdccOrAqDVnD38usgKMZVEBtoBwttOFrOPAG6yW7LFAPjeUWwgEemoEIcJ8VhygAneo1MttIE6vukbKRR9gmxvbPEpGwRnRM58rj12I3Eg%2Bou52PLrXfWtkT02yiOT%2F35Z%2Fho0M01vGrFrQ2zsFfHqfVyn0GZn7Poq9A%2FpzYwVbS9C4mPp%2B3uwLcOsaMKb4iMIGOqUBZ7UnGQEqncSi0PZXGexPQTOkMXHmdi%2FKccfHjWSn1VUB1kzqjCNu6iKR6GQSR3vCyptmX14v6HVQrknwv8X4fXsosnSq1p8ZAojalqFEt5a4q%2BebiO2TUTJ90GZkgQi55mXwe23ptohgHy5O8esh2AlDxXXKoRqATaWJ27XHKw3Ir0s%2BZI3D9KXKPyyE4EreQGOCwDpFEaQC6ybxHg0uOzQ2EQE1&X-Amz-Signature=18d7b6e7253edc8ae9cadaaebf892f7889ed31e177a7f2085ac50acd52d7534d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

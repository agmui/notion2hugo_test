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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RSPAA2Z%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHr%2B35tRJ6E8hDwraNa3ZWfGqoPUVjHk6et%2FhVshk9jVAiEAzLTXoTRyAo7z4kBK7yKzhmK9%2B3knjWohrDuxyVltZYsqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKA0cUpeY9sofV3axyrcAzJWxdcm4rv7GBepmSm9%2FuUAxpx3G6UYREfZymcnmSIEa77a76RMeEXDSwRmrfDPtd%2BK4VmyzDffRCMTjtQKYhhmxpQvsj%2F6IHY6Cyk%2B3%2Fj0pro%2FWKx5%2BCCB%2BCnWBH%2FZynjk8CvAqrGb78Iuf1GuMs%2FWdfPahR2k3KcmdyiW20hSMYMlxuidpM9xSrRjGw1tRZXu8o391vEE41sqWq6Iysfi%2FDc0NUEDJKn22NDUYDNKCv7vdNxyIYwS8vDRIbZmjuY6%2FJ1IGuzx3aypynYtyJS%2BY8pOESYzVDkNmRXs2pzE3RExmuNjenjnEEODUU5qg6jIUUezhEZfNlucKFh%2B%2F3OMKPm1NLMcscqZh4jHRhDSLC%2B1fw0En6zeHPaxJxqnW6mTsHBz1MIVu7YrGd8ggU049eC5iF8xfFtN6ncW32ez8e90PD7EJM2%2BYVh50tyNEPZRr9bN%2FZpNML3EnpQX6EUh%2FvVuXQ96JwL%2B5hu0btLnIHt99ttnljYISTPw%2BkN3OzKib6t6oDFnPvcKOAPqXCUjfxGDACI0iPNRzb1g5D76mP1W93MfsXRdug5PiA82kcpl64xkVNgcZQy%2FWk9x2MQFhbVjGeXuWdLzF4B3YkimRxZO6dGIxpKu05MzMOKuqL8GOqUB3PAv5VaFEcCJAHf7niLGLgIbmVuU5awXel3nzwxItPGlL1kMt2eD%2FvCirHvzNnHJviK5q80cucCRA9b4WszkvS%2BuzZnRXoe3Ju2xMU9UTV%2FGP43TNib9LNnCsVfwyFZDe73WszbWgQgDaVtaXp6pL2TdPUNKtXH9%2BONWajBfVCjSJpyX1Tg0m5bjdgVgkopoVAp5p62u53otVJHmNkk1oTkbKFa9&X-Amz-Signature=5f90a8e706a6e15677ef4b73406ac27b40f9e3bd73920ce7fb9828b950a746d2&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RSPAA2Z%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHr%2B35tRJ6E8hDwraNa3ZWfGqoPUVjHk6et%2FhVshk9jVAiEAzLTXoTRyAo7z4kBK7yKzhmK9%2B3knjWohrDuxyVltZYsqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKA0cUpeY9sofV3axyrcAzJWxdcm4rv7GBepmSm9%2FuUAxpx3G6UYREfZymcnmSIEa77a76RMeEXDSwRmrfDPtd%2BK4VmyzDffRCMTjtQKYhhmxpQvsj%2F6IHY6Cyk%2B3%2Fj0pro%2FWKx5%2BCCB%2BCnWBH%2FZynjk8CvAqrGb78Iuf1GuMs%2FWdfPahR2k3KcmdyiW20hSMYMlxuidpM9xSrRjGw1tRZXu8o391vEE41sqWq6Iysfi%2FDc0NUEDJKn22NDUYDNKCv7vdNxyIYwS8vDRIbZmjuY6%2FJ1IGuzx3aypynYtyJS%2BY8pOESYzVDkNmRXs2pzE3RExmuNjenjnEEODUU5qg6jIUUezhEZfNlucKFh%2B%2F3OMKPm1NLMcscqZh4jHRhDSLC%2B1fw0En6zeHPaxJxqnW6mTsHBz1MIVu7YrGd8ggU049eC5iF8xfFtN6ncW32ez8e90PD7EJM2%2BYVh50tyNEPZRr9bN%2FZpNML3EnpQX6EUh%2FvVuXQ96JwL%2B5hu0btLnIHt99ttnljYISTPw%2BkN3OzKib6t6oDFnPvcKOAPqXCUjfxGDACI0iPNRzb1g5D76mP1W93MfsXRdug5PiA82kcpl64xkVNgcZQy%2FWk9x2MQFhbVjGeXuWdLzF4B3YkimRxZO6dGIxpKu05MzMOKuqL8GOqUB3PAv5VaFEcCJAHf7niLGLgIbmVuU5awXel3nzwxItPGlL1kMt2eD%2FvCirHvzNnHJviK5q80cucCRA9b4WszkvS%2BuzZnRXoe3Ju2xMU9UTV%2FGP43TNib9LNnCsVfwyFZDe73WszbWgQgDaVtaXp6pL2TdPUNKtXH9%2BONWajBfVCjSJpyX1Tg0m5bjdgVgkopoVAp5p62u53otVJHmNkk1oTkbKFa9&X-Amz-Signature=28b54d22ee05e3dba071b6816d1c8b24fcd86fc91e7e9936ee97b2b9355bcba4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

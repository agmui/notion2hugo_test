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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD3MF5QZ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T160728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIENZvmtKU0raGQJ2E2FGNQR%2FzUmGqrFClS5ZSgTs2EPzAiEA%2BSq8Q9rmikx43nvuZwYqBu6WH4ABIrMargKCdHFtxqsq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDM0rcuJFUs5v%2FtdLayrcA%2FFqFUArpEa1W5vOw5NH38CDr6WfCfTbJ6JKaOHpD0JFcNNZ2UlSZkhrM0tjYAn2bRdRZb7hNbEmrgJPzIquCx8WL46VdJdGp9NDhJ1DwwWy2%2B0Qour5cfjo%2FbClAIQvvlla7J2%2BSeNuiTjFoKnbnVmKOZ8ikXC7EUt5KL5aktejh1ANE8%2FiuNZMnCt%2FkmyrWs5nleqtGD%2FClWKyqmhZONl24BSBauYim3%2BY%2FuB91yeLsiGwuUk58bHxp8nBAbu%2FOlkRq%2FbE3M%2FZ86a4CUnTlA%2FzP%2FdKa%2F5tBABEGS1SLkeu96F0jTF83V09AF647Vj3lV%2FOoWOYsPNfXhqImT7CpkuhqaSUCjmw%2F4EAE1LeuuzdqoicVO6Mb4f90q9b2r9DR9gvDr4Hhd%2FbtgJ7RZjZWEO67bTWngGKVlSXYroHRluQPaxnFgewgDnsd0LW7DlxIkvNx07ZfI4htSbk19mWuADRHbu%2F9leijYQBjAjzKN%2Bc8R71ebhEXCkeW0EJCEC3ekZprPfqmihJXJRC8ymmWzd%2F%2BFJfSa%2FxC7zWU8hZhrMnc8hiDfdVTxU0KJ5yak2uFGYIF%2FgwZ%2Fqx4R3K%2FhEt%2BHohKaaRsbUEbaXshLs2bbBJygO2MZsp%2FYWvBeBoMJiix70GOqUB90M4Ysbjh0Ldpl%2BLBgCv5%2B2w%2BjtpK7MrRm%2FP7SKXrGWNZd%2BuPi8peC3hNtzrlFoQVds%2FNFbGFKeUFx%2BcpQV8o0mIdIpRRsna3AnpPB4KJB%2BquRiMKLfct70z39XEka3jayPwUSGQCi3omMY2UqxB6Vype6KsK2n2MzfQapJXgkhHO8EiUD3LWbB2eQZDESm8%2F8yGd3bNk0SJscdAB5%2FL%2FWZxV9o6&X-Amz-Signature=f5cacedeb05cb948ea25d14a2786988e9a7a4a063bc9e14fb7326035193d6b6e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD3MF5QZ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T160728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIENZvmtKU0raGQJ2E2FGNQR%2FzUmGqrFClS5ZSgTs2EPzAiEA%2BSq8Q9rmikx43nvuZwYqBu6WH4ABIrMargKCdHFtxqsq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDM0rcuJFUs5v%2FtdLayrcA%2FFqFUArpEa1W5vOw5NH38CDr6WfCfTbJ6JKaOHpD0JFcNNZ2UlSZkhrM0tjYAn2bRdRZb7hNbEmrgJPzIquCx8WL46VdJdGp9NDhJ1DwwWy2%2B0Qour5cfjo%2FbClAIQvvlla7J2%2BSeNuiTjFoKnbnVmKOZ8ikXC7EUt5KL5aktejh1ANE8%2FiuNZMnCt%2FkmyrWs5nleqtGD%2FClWKyqmhZONl24BSBauYim3%2BY%2FuB91yeLsiGwuUk58bHxp8nBAbu%2FOlkRq%2FbE3M%2FZ86a4CUnTlA%2FzP%2FdKa%2F5tBABEGS1SLkeu96F0jTF83V09AF647Vj3lV%2FOoWOYsPNfXhqImT7CpkuhqaSUCjmw%2F4EAE1LeuuzdqoicVO6Mb4f90q9b2r9DR9gvDr4Hhd%2FbtgJ7RZjZWEO67bTWngGKVlSXYroHRluQPaxnFgewgDnsd0LW7DlxIkvNx07ZfI4htSbk19mWuADRHbu%2F9leijYQBjAjzKN%2Bc8R71ebhEXCkeW0EJCEC3ekZprPfqmihJXJRC8ymmWzd%2F%2BFJfSa%2FxC7zWU8hZhrMnc8hiDfdVTxU0KJ5yak2uFGYIF%2FgwZ%2Fqx4R3K%2FhEt%2BHohKaaRsbUEbaXshLs2bbBJygO2MZsp%2FYWvBeBoMJiix70GOqUB90M4Ysbjh0Ldpl%2BLBgCv5%2B2w%2BjtpK7MrRm%2FP7SKXrGWNZd%2BuPi8peC3hNtzrlFoQVds%2FNFbGFKeUFx%2BcpQV8o0mIdIpRRsna3AnpPB4KJB%2BquRiMKLfct70z39XEka3jayPwUSGQCi3omMY2UqxB6Vype6KsK2n2MzfQapJXgkhHO8EiUD3LWbB2eQZDESm8%2F8yGd3bNk0SJscdAB5%2FL%2FWZxV9o6&X-Amz-Signature=b0cbee33eb4d8116088da2446d8da6d887e174177da2734886c2291e1b05e875&X-Amz-SignedHeaders=host&x-id=GetObject)

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

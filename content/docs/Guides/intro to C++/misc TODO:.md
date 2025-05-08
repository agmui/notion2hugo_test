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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CCWCP2T%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T041241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEg2ke0wR7uLzZgTQRVd8MAnDLlbT5BLvstDuXvvBVm3AiBbgl0RmqwDrp8fetZmsQEoKod4C263m%2FJ96FFJ%2FksZmyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMVlzSyJmhTmj8EUcoKtwDtVRyntyHzyFArP%2FqMufPv010%2B1U7ZuyIMNYJeGyz9zVIqjRLUc%2BVaRNpGoL8frrViu5hC4Pvv1%2BZ0tHy5Zm1S0y%2F46vDCC1DTfz96h2QmZDapIm56KHLiq7RZLY6lMPFGKV8zAzFCw8cFsP%2BIgiWT0e7lec%2FJogDtqpy8u1LS1UglxmP2lOej8foUKexQ87w2WrGfPk58tGVmkNRQumW6wQ%2BqNwK9%2F3oM0n%2FKXar40%2FhmKHJf%2BICXC2obyaGhA%2BukwpvAuJOl678TasJvAHdv8AHWS3wPPcaikBN1JaJ76KTGVWKSIYlwuZG%2BdYTJ0Ektt7QtM2pB5mEOIsFrOAiPS%2F7c9yY05KxsLjFpr3Evxw0IYhubzh7wSFnLgr%2FGSHIEeX672Ebo4rI%2B4OjfPxggiN%2BHKfqSLlBARz49F39GE7wHHkepBPhL66svFIF9m5aUs0aU7ZuGSJTybKYFw7%2B2l4fUo29jDSTIT1BhqFE%2BLg%2BWBFvO49Q78JlVA%2BUjhpL6N9MB%2FIEpjdPmSjQU%2Fl45kTscyyS2W1YNgSVXvGWbqL%2BxnW4J3aJyoxgZMZVjUlVa85cOPFDTOjoJ7cGm9opqNMXZTFMzFUS%2Bn9MsEpIIpkceltPzYayh6%2FY03gwpdfwwAY6pgHH3X5iXyC3dj%2BWCaaTX2MIaYdx183PoU17HcGgw4nNrSpBjSeOGjzH3Wmcs71XqiXgoZwQGrUSKwpAVhwAFLJPN7M0dClxPXIQFc8vksqktByQCtaOsZp3b%2FD5KIAX6D2zF1dLNc2ALW4P6pQkaABSl4DzP6PJAybxgBfyZFkf4fmUTm0hb4voGaE9A838EexnQNefh3t5PUiC%2FaPeS84evDPrQt6E&X-Amz-Signature=12d236b36facc84899b0105ca3a522173984f891f8d8044857e44d7d4937eb46&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CCWCP2T%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T041241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEg2ke0wR7uLzZgTQRVd8MAnDLlbT5BLvstDuXvvBVm3AiBbgl0RmqwDrp8fetZmsQEoKod4C263m%2FJ96FFJ%2FksZmyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMVlzSyJmhTmj8EUcoKtwDtVRyntyHzyFArP%2FqMufPv010%2B1U7ZuyIMNYJeGyz9zVIqjRLUc%2BVaRNpGoL8frrViu5hC4Pvv1%2BZ0tHy5Zm1S0y%2F46vDCC1DTfz96h2QmZDapIm56KHLiq7RZLY6lMPFGKV8zAzFCw8cFsP%2BIgiWT0e7lec%2FJogDtqpy8u1LS1UglxmP2lOej8foUKexQ87w2WrGfPk58tGVmkNRQumW6wQ%2BqNwK9%2F3oM0n%2FKXar40%2FhmKHJf%2BICXC2obyaGhA%2BukwpvAuJOl678TasJvAHdv8AHWS3wPPcaikBN1JaJ76KTGVWKSIYlwuZG%2BdYTJ0Ektt7QtM2pB5mEOIsFrOAiPS%2F7c9yY05KxsLjFpr3Evxw0IYhubzh7wSFnLgr%2FGSHIEeX672Ebo4rI%2B4OjfPxggiN%2BHKfqSLlBARz49F39GE7wHHkepBPhL66svFIF9m5aUs0aU7ZuGSJTybKYFw7%2B2l4fUo29jDSTIT1BhqFE%2BLg%2BWBFvO49Q78JlVA%2BUjhpL6N9MB%2FIEpjdPmSjQU%2Fl45kTscyyS2W1YNgSVXvGWbqL%2BxnW4J3aJyoxgZMZVjUlVa85cOPFDTOjoJ7cGm9opqNMXZTFMzFUS%2Bn9MsEpIIpkceltPzYayh6%2FY03gwpdfwwAY6pgHH3X5iXyC3dj%2BWCaaTX2MIaYdx183PoU17HcGgw4nNrSpBjSeOGjzH3Wmcs71XqiXgoZwQGrUSKwpAVhwAFLJPN7M0dClxPXIQFc8vksqktByQCtaOsZp3b%2FD5KIAX6D2zF1dLNc2ALW4P6pQkaABSl4DzP6PJAybxgBfyZFkf4fmUTm0hb4voGaE9A838EexnQNefh3t5PUiC%2FaPeS84evDPrQt6E&X-Amz-Signature=6222f7ce9aa1091d47e54936f2fc16952b773ac127ae6d6c4250b01840a733c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

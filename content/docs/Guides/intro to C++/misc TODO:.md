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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665372RUFV%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIDixfaARCUxE7H62pjX5BqQH2mojKj4BRx%2FLGVFkInDkAiEAlV%2BNhkRbhui4F8tbKhRLsKPDEyFu7U%2F6a52m0IJIWqAqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLPhw%2BU6%2FhP6QyGkryrcA5Y9I1xhNEUR0XYTdtSwu8NgSdr2b95dxAVplrEN%2BcCp7RTPNiGFCYgoQf00hM3Jk5u5AKlWWvslkFdZ5RRtu%2BDcp9GzcbxqTpprDifPIY%2BQZsIFCkUJ7%2F%2Fv3P%2BCl8Dy8F5jV%2BYOsh1bYkYjPEyvbnkLJMEvCN4CpnNp3J9bmiH7Mav5yaWQ70hTnL680aRyX%2B9iFHKHJPFLqadRATQ%2BpTQSEpsGlaQjjX8t%2B1UxTWcSJ4z77%2Bpnyu%2FiPhfW3LGnNX27gE%2BVCIXziU1mWF0xSM2SlPmmXnioFJnH8fX1AjQHVZxaNdN9ygKzSx2Lehcpbr3oLqngkWgzq8Qa54hZCUhMxxyUCqG7ZLHOeJ1fgoV6BwB7ZqA643BpXcSpJAEcTlpiRJ0V71dgSQM0D%2FjwKxIQuxI59rMb1gL7zgAKYcK2ojLC3MTCAs3RA36pNh4jFq0FGfMI2ggqXD53s36L%2FYqytS2ZWoMBQcq%2B1CaMo5pgyxnyove5rdhZbd6QbFplwXlmXx7wRB%2F99OWv4srXGBnvF5p6VaRMdd5mwmXnsdbgoXW0fzMfiO3WP1lPwl4nClRNxs%2F8Y8UKxjXWVr%2FRthD%2F480ZujJMwFPrRvGxRUCNa4IH06T3v7w%2BC5ZyMMy79L4GOqUBgJO%2Futvw%2BglP%2BcycRz%2FoBfthMyZ0yVizem4Z%2Ba4Qja6f6c5D36945%2BuKJCM1f2bwgIKrMolMYbHcAQtYPvMXIAuUw9sO4PKbJpkNe9dmmoBvcTj%2FhpRvKu6sc5lEw162u0LdlM%2BImddVZXWOpFv4uo14G2AMc%2B1nyxO3%2F0NYijtbj1gpYC4zoscK2FoSVELZMpmYRbQ9CS6WGbfUgaH%2FcmSXfFXO&X-Amz-Signature=7584b8e1ceb8c246950b1829dd558250c168e26a81dc2d96a6a6bb7493314b51&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665372RUFV%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIDixfaARCUxE7H62pjX5BqQH2mojKj4BRx%2FLGVFkInDkAiEAlV%2BNhkRbhui4F8tbKhRLsKPDEyFu7U%2F6a52m0IJIWqAqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLPhw%2BU6%2FhP6QyGkryrcA5Y9I1xhNEUR0XYTdtSwu8NgSdr2b95dxAVplrEN%2BcCp7RTPNiGFCYgoQf00hM3Jk5u5AKlWWvslkFdZ5RRtu%2BDcp9GzcbxqTpprDifPIY%2BQZsIFCkUJ7%2F%2Fv3P%2BCl8Dy8F5jV%2BYOsh1bYkYjPEyvbnkLJMEvCN4CpnNp3J9bmiH7Mav5yaWQ70hTnL680aRyX%2B9iFHKHJPFLqadRATQ%2BpTQSEpsGlaQjjX8t%2B1UxTWcSJ4z77%2Bpnyu%2FiPhfW3LGnNX27gE%2BVCIXziU1mWF0xSM2SlPmmXnioFJnH8fX1AjQHVZxaNdN9ygKzSx2Lehcpbr3oLqngkWgzq8Qa54hZCUhMxxyUCqG7ZLHOeJ1fgoV6BwB7ZqA643BpXcSpJAEcTlpiRJ0V71dgSQM0D%2FjwKxIQuxI59rMb1gL7zgAKYcK2ojLC3MTCAs3RA36pNh4jFq0FGfMI2ggqXD53s36L%2FYqytS2ZWoMBQcq%2B1CaMo5pgyxnyove5rdhZbd6QbFplwXlmXx7wRB%2F99OWv4srXGBnvF5p6VaRMdd5mwmXnsdbgoXW0fzMfiO3WP1lPwl4nClRNxs%2F8Y8UKxjXWVr%2FRthD%2F480ZujJMwFPrRvGxRUCNa4IH06T3v7w%2BC5ZyMMy79L4GOqUBgJO%2Futvw%2BglP%2BcycRz%2FoBfthMyZ0yVizem4Z%2Ba4Qja6f6c5D36945%2BuKJCM1f2bwgIKrMolMYbHcAQtYPvMXIAuUw9sO4PKbJpkNe9dmmoBvcTj%2FhpRvKu6sc5lEw162u0LdlM%2BImddVZXWOpFv4uo14G2AMc%2B1nyxO3%2F0NYijtbj1gpYC4zoscK2FoSVELZMpmYRbQ9CS6WGbfUgaH%2FcmSXfFXO&X-Amz-Signature=8162cf5f841ff398a03134fc352128341f403146311dc501b90b2a526f4d71ab&X-Amz-SignedHeaders=host&x-id=GetObject)

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

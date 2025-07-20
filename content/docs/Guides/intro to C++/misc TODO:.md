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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROTNMPPU%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAx09XSNmZ7G40p0HvqgGZkSttvV40nMN7gIxAnxngiuAiEA2Ji3GAr0TR2ASXor764s%2FMOpjYtMB6moxmGhbVPDx1kqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDgJ947IhVME%2FytXhSrcA6T5ShUmJXTSXCtdVw1k69ixaNuLn5IwTpyQW4CGoPv8SZrEsEfCKaTRV8R2xFU8F3F24YZRRznNfntLiFeld%2B8FY8cqJpTJTCiBXRvTrnPT92nRl2CZ1jk75pIyrXsq4A4G9jfJzQmnlOIrE3f6lDAXcnCMuW7DJfT%2FcWi20KBX4%2Fo%2BXHoddgPUn4bv8q1Ql%2FC7Ovys1brKRN3at7%2BFt7Zzw9dJFRm6hvt5U7uhQFlur0qCjq%2BNHnt2ppa%2Bk9iWL00rRV%2FAFZksN%2FE7%2FiKCxsg1526gwy68rCEx9%2BEl495ysB3rmeqf0i0ri75cR5ryMwQbWKtKRgVS%2Fssse7nrtYDY%2Fqjza26%2FMUDQ9ZaQRzWPLcQOMPnlxY69sIik9HvBjqezaesDKbceif9A2pUoESn96zfkMr%2FPxe%2FhPXwlUjjY8hUbp0lzSIBUXrjrJpm4halDw4ZUrytTY9b5lbEIwRsxULQRwH%2BSMpSAral9C0vbGEqfG5ZbyBbPrXi%2BANLSLefdHTvtSzW7DxTeUrwy2SGhV%2BGMRtIfrXMUWNzC1JZRHhKNKN76SS1vDPUT01ikZAOHRJ3Pu4AlJODyoYGMJn7j3hPRLKX7bSpjNF%2FiEGsGuQA7Fq2uSQIya2c5MLHZ88MGOqUBTKBqzYfg%2BU4tkfg%2BTPDmbjsiL3FlWEIGh7Lf0t5qTpkzA0kyXXNQjvJED8Bay%2F7ez8qAEWP%2BR01wFhCdNQNKP9pBfzgtie3Fr1iGvKAj6clYx4EJ9Q2O3kKRH4aQo8nXfO%2FSHDOrwoL%2FcW73Ql%2BlfP%2BczJr%2BfFIgok6lVvniqei3Cpb4HOm2amXnaZbJCdr7o0v9iOvzZ89GZZhE8KzrB6uewod9&X-Amz-Signature=f4b058eba8cc88ecfb14aa3f25c8bfb161f3473cf45ab00e9dd08bef705612ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROTNMPPU%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAx09XSNmZ7G40p0HvqgGZkSttvV40nMN7gIxAnxngiuAiEA2Ji3GAr0TR2ASXor764s%2FMOpjYtMB6moxmGhbVPDx1kqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDgJ947IhVME%2FytXhSrcA6T5ShUmJXTSXCtdVw1k69ixaNuLn5IwTpyQW4CGoPv8SZrEsEfCKaTRV8R2xFU8F3F24YZRRznNfntLiFeld%2B8FY8cqJpTJTCiBXRvTrnPT92nRl2CZ1jk75pIyrXsq4A4G9jfJzQmnlOIrE3f6lDAXcnCMuW7DJfT%2FcWi20KBX4%2Fo%2BXHoddgPUn4bv8q1Ql%2FC7Ovys1brKRN3at7%2BFt7Zzw9dJFRm6hvt5U7uhQFlur0qCjq%2BNHnt2ppa%2Bk9iWL00rRV%2FAFZksN%2FE7%2FiKCxsg1526gwy68rCEx9%2BEl495ysB3rmeqf0i0ri75cR5ryMwQbWKtKRgVS%2Fssse7nrtYDY%2Fqjza26%2FMUDQ9ZaQRzWPLcQOMPnlxY69sIik9HvBjqezaesDKbceif9A2pUoESn96zfkMr%2FPxe%2FhPXwlUjjY8hUbp0lzSIBUXrjrJpm4halDw4ZUrytTY9b5lbEIwRsxULQRwH%2BSMpSAral9C0vbGEqfG5ZbyBbPrXi%2BANLSLefdHTvtSzW7DxTeUrwy2SGhV%2BGMRtIfrXMUWNzC1JZRHhKNKN76SS1vDPUT01ikZAOHRJ3Pu4AlJODyoYGMJn7j3hPRLKX7bSpjNF%2FiEGsGuQA7Fq2uSQIya2c5MLHZ88MGOqUBTKBqzYfg%2BU4tkfg%2BTPDmbjsiL3FlWEIGh7Lf0t5qTpkzA0kyXXNQjvJED8Bay%2F7ez8qAEWP%2BR01wFhCdNQNKP9pBfzgtie3Fr1iGvKAj6clYx4EJ9Q2O3kKRH4aQo8nXfO%2FSHDOrwoL%2FcW73Ql%2BlfP%2BczJr%2BfFIgok6lVvniqei3Cpb4HOm2amXnaZbJCdr7o0v9iOvzZ89GZZhE8KzrB6uewod9&X-Amz-Signature=bfbe8ea1f9b454671b6102fdea9e3c292eec993960df7674dc89ebf86ba01a79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF3YGFDG%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T041443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDuyEu%2FinyWfJDXegmkwMYcpwuAZOPTlRGzlha7It0pwwIgT0SGjn0Gyxblp5rLtvn9o5a8QCo0F9%2B4QRYbTMIfPC4qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFyKs%2F5fXxHZlG5iyrcA6MFpoWPmSHQ2OP76EKQ2ejCV%2FT785Aj8aTb9bQWC5TExS2l5BhjAKJ3ioD1UHQARH53ivttN%2BnYzyc3Q0Ve3j4%2FbjqTln4XRPR39V%2Bfgh%2F5YTxC%2BYslAKuAxCqFFR1H2XxDWCwYiFOo66BogkJKRknbd2YSRyp68qDqDhXiI%2FBA0%2FHSos9u2%2FJSgCI2sq297LjHSOZpSQj9FB2xuyOROjL1tX0RRauZxuJeIBz6rQNSmzsVDEKOTalx5eZYgi6IDSRDIHV9Ikh5Zxb6eKHaV%2BfEbnGE%2B2m4H%2F1cwYV7GRlvxajrez1NFbXPjs4wW8ykcYH%2BQWOx%2Bkdd2uVtoQ9uVR%2Ft2LrOr%2Fxt5%2FaVoLmFU9dMBEcN2fcFEo7tpvzTnP4%2BjeOXki3K4omXT4e1t25GgRZkUXBAXjQ5Ujbdv0TQZ3HaCL9Dj1gXvL1WKi%2FiJhq%2FvN1ePUB%2Fn2J8ipizHtn%2FMP0fUkyeu64T6chuxrxymXOF4OZ7U8AuKZeW%2BroQ1e6cyDdqWfepaNm2fBHM7F%2F01XFaZmKrHq1qExUVP4TQ40kzfIB2eIuYJ2tjQkU4%2F7FrrEdQts%2B3pRZ%2BOzRXK5HmxwTHJjRp2V4V1%2BNHHwO0Yn%2B2eUetTTNqfR84Ur4HMNTZy8AGOqUBcaIyAApzpUIT5xXTqaYnv916hLHUgQALlLkmeAD9iPjzZKbCEho0RDU607rs8tCbf6gV0KCrtZvaOOEXbcFedhxi80WMI15G9RTafWeOS5JT2TGupKR5OtvwtaNl%2Bg4pU0uT0EdIJ9SmaHuGbvs1JESBiSfitzBzKRsHZJkI442q9Lr3GRxM9oTG0g4VFjnn2g1CF51C%2FN3TmUvzuHR64e5bibZ1&X-Amz-Signature=45c1e4f3aa6a15a87fc8e1d67fab8fb77163304bea4a352a28a00d0c483ffa7d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF3YGFDG%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T041443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDuyEu%2FinyWfJDXegmkwMYcpwuAZOPTlRGzlha7It0pwwIgT0SGjn0Gyxblp5rLtvn9o5a8QCo0F9%2B4QRYbTMIfPC4qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFyKs%2F5fXxHZlG5iyrcA6MFpoWPmSHQ2OP76EKQ2ejCV%2FT785Aj8aTb9bQWC5TExS2l5BhjAKJ3ioD1UHQARH53ivttN%2BnYzyc3Q0Ve3j4%2FbjqTln4XRPR39V%2Bfgh%2F5YTxC%2BYslAKuAxCqFFR1H2XxDWCwYiFOo66BogkJKRknbd2YSRyp68qDqDhXiI%2FBA0%2FHSos9u2%2FJSgCI2sq297LjHSOZpSQj9FB2xuyOROjL1tX0RRauZxuJeIBz6rQNSmzsVDEKOTalx5eZYgi6IDSRDIHV9Ikh5Zxb6eKHaV%2BfEbnGE%2B2m4H%2F1cwYV7GRlvxajrez1NFbXPjs4wW8ykcYH%2BQWOx%2Bkdd2uVtoQ9uVR%2Ft2LrOr%2Fxt5%2FaVoLmFU9dMBEcN2fcFEo7tpvzTnP4%2BjeOXki3K4omXT4e1t25GgRZkUXBAXjQ5Ujbdv0TQZ3HaCL9Dj1gXvL1WKi%2FiJhq%2FvN1ePUB%2Fn2J8ipizHtn%2FMP0fUkyeu64T6chuxrxymXOF4OZ7U8AuKZeW%2BroQ1e6cyDdqWfepaNm2fBHM7F%2F01XFaZmKrHq1qExUVP4TQ40kzfIB2eIuYJ2tjQkU4%2F7FrrEdQts%2B3pRZ%2BOzRXK5HmxwTHJjRp2V4V1%2BNHHwO0Yn%2B2eUetTTNqfR84Ur4HMNTZy8AGOqUBcaIyAApzpUIT5xXTqaYnv916hLHUgQALlLkmeAD9iPjzZKbCEho0RDU607rs8tCbf6gV0KCrtZvaOOEXbcFedhxi80WMI15G9RTafWeOS5JT2TGupKR5OtvwtaNl%2Bg4pU0uT0EdIJ9SmaHuGbvs1JESBiSfitzBzKRsHZJkI442q9Lr3GRxM9oTG0g4VFjnn2g1CF51C%2FN3TmUvzuHR64e5bibZ1&X-Amz-Signature=d6c3e3854d39b376af1e5fdd016d8ffd3012d9b6c9d7a6a91b6efb0fce5bd70b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

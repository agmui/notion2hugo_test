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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTCBBSFJ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T160752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRqO%2B35xsUC7aT6n7CRR7gAQv3KkchtPiUTnx2YDMekAiEAqPPG4oRFOvLrYGs1LargoQ56KVxftU%2BccWu1eq%2BQbFkq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDJYf7IR6FzJLdDRg9ircA66YoNjtkYRPsr%2BJDTH1RizPNTQRIqzLZ6lDb9y6gwJFcsjAakbrmWt3R1kMJRgW2bYSCZxvgCNmE0I1mGjoaACDTbLYzpMhDmuG3Pxpv4ldMDQOUEQ88nhbQFIDpdEugDqwc2XLcwqscPuYA7JSGbI4TLT9relG6l7O3CSv03seK2SmvXh%2BptPvPzUw%2FFyZH9yNgBqbIm5Y1WFotVnMe3CXBzammazKxZGVcUKkEvwZoZfZKOqtPTBBqf%2FDUdw6h8RFJpTPVXjTS3n5Z8T%2F2XpvQeBlMLuojhW1kEQfhp5jufeDHWbxyv84IrsQdCRGXAs7j%2B17g9Rie%2FXsOOUoYEe069ZrxYluhng8Ft%2FPvrf7%2F51%2FbUSUzDBn%2BQ7vPebmA%2B19ZdpyDQf2gd7gR28rnG2MK8Mf7F%2FYCHyoRN0Lbvb3NTFxLaMQj7SMZv7TMFd4D6r5J0W2oB6FGjWi5mOLCNxmS%2Bytt%2Fmxn%2F%2F4manW09%2B8N7Sp6lEygE1gUvTKjmgMSAmOCJO02d6dT5WRFQ1hwfFtAm8kMxAKvUUVaYEa5X2ao3uPMw6dfHn98%2FJMIkQvUgOIXPgfLPA6nEqfEJhIKzyqhzo0RDOWAbVTqrf5YSkvHv%2BqzhczLUMBvlYnMJrx670GOqUBILWvS5Vm89iSk046ClxYwSZJiGRZBOVyIFmijy0igYvEDmiSH1cHbqMEoCfpzQs%2B2knOJnZvQGQDqjNmEOAST8RVBK%2BsUGuN6ub5Hya2LthIwpO5FREm2yrtM%2FgZDN71OwjDXygF%2BiCIGJFE2S7a1w7WnGVkktvKOTmgkl2IVXJdc8NIzea7Dou3PZ6GKOcZprb7CIrSXOLDsepuy4x%2Bl8xjptzm&X-Amz-Signature=5059bf74e2fb64bda61b271a74d4dfa86b992ffd97de67805ea5f53c0a894dc0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTCBBSFJ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T160752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRqO%2B35xsUC7aT6n7CRR7gAQv3KkchtPiUTnx2YDMekAiEAqPPG4oRFOvLrYGs1LargoQ56KVxftU%2BccWu1eq%2BQbFkq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDJYf7IR6FzJLdDRg9ircA66YoNjtkYRPsr%2BJDTH1RizPNTQRIqzLZ6lDb9y6gwJFcsjAakbrmWt3R1kMJRgW2bYSCZxvgCNmE0I1mGjoaACDTbLYzpMhDmuG3Pxpv4ldMDQOUEQ88nhbQFIDpdEugDqwc2XLcwqscPuYA7JSGbI4TLT9relG6l7O3CSv03seK2SmvXh%2BptPvPzUw%2FFyZH9yNgBqbIm5Y1WFotVnMe3CXBzammazKxZGVcUKkEvwZoZfZKOqtPTBBqf%2FDUdw6h8RFJpTPVXjTS3n5Z8T%2F2XpvQeBlMLuojhW1kEQfhp5jufeDHWbxyv84IrsQdCRGXAs7j%2B17g9Rie%2FXsOOUoYEe069ZrxYluhng8Ft%2FPvrf7%2F51%2FbUSUzDBn%2BQ7vPebmA%2B19ZdpyDQf2gd7gR28rnG2MK8Mf7F%2FYCHyoRN0Lbvb3NTFxLaMQj7SMZv7TMFd4D6r5J0W2oB6FGjWi5mOLCNxmS%2Bytt%2Fmxn%2F%2F4manW09%2B8N7Sp6lEygE1gUvTKjmgMSAmOCJO02d6dT5WRFQ1hwfFtAm8kMxAKvUUVaYEa5X2ao3uPMw6dfHn98%2FJMIkQvUgOIXPgfLPA6nEqfEJhIKzyqhzo0RDOWAbVTqrf5YSkvHv%2BqzhczLUMBvlYnMJrx670GOqUBILWvS5Vm89iSk046ClxYwSZJiGRZBOVyIFmijy0igYvEDmiSH1cHbqMEoCfpzQs%2B2knOJnZvQGQDqjNmEOAST8RVBK%2BsUGuN6ub5Hya2LthIwpO5FREm2yrtM%2FgZDN71OwjDXygF%2BiCIGJFE2S7a1w7WnGVkktvKOTmgkl2IVXJdc8NIzea7Dou3PZ6GKOcZprb7CIrSXOLDsepuy4x%2Bl8xjptzm&X-Amz-Signature=5e9b1db21d992f14d48925da49615f384182c236564d77257ae34469a6bb4c46&X-Amz-SignedHeaders=host&x-id=GetObject)

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

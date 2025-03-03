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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5W6LGUR%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T021521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjHcuSTvNYck8V5M0emRrCOlQk8uvR3Hum1d95kQkQJAiB3XOhud3DmOEZX7ILlXW9oygKsDqabnczEfzx0f2cW8SqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0CvGh25%2BRBx7wzHFKtwDe5NbeCeXJ9sHiehaQ6FKA78JFhgbo9anVphUPE1w%2Bq3cMINP%2F2D4IPm3WjiiyHe3QlNCrhaR7BexRNr2Yf5%2BozgWdhuqk%2FSwqJfsruleZD5GkmBx6X7r5BncVfjWy3ORuwJn3GCLE2goz0MMrPWCDn%2FHNkrwcU%2FKf%2Fv%2FatVyZAbdYqEa0n8%2FjVCs3wFz%2BSJiuYDQm%2FBnc0omfAdhk0DYvr8omlH10STK3JnbkdcG1ZIT7C5rIbFPbjwqJ2qhQBpOSpyKVZyyo%2FXDEM40Nlw6ig0h4CtvH6%2B4ud0iBXZ7Lc8L%2BWe0i8N3rxIiPrW%2BbkPvFMondA8ptqUdhCNfIEp8WVSTg4lIcZovlJdhe%2F7vYKW9aRt67WEic1xUK7ITgL4Hw17MRLLtZ%2B0EUR5Gcrb5eNO31A3a2u0L79BYo0iLLfveyWMpSBynIVbDbRsg4oybKcrmqxUTAFYL6Kq0lHSDdXpYEN6sN9EP4WLle5w0fx1hhbxkhFL%2B3CPhorEUrjHsI55yZvQX%2FU4T0WCJduMhZkGEMBEj8je8BybPDVsszr%2FBtbnwG4wb%2Bt9F%2B6IcBK770rzASM8iGEor0gZeLd5ipcJdO9b2psXWCRdvKcaNKSYFmyfqfSDdDP0%2BqIswz4KUvgY6pgED5dPAk6G2nyNu%2FtMjqdnhrqcLDiYPasak14Q2R0NpGT%2B1XFghxZhRAnlymGULQSWG%2BaKEIZHzsx4x%2FU3d7mJ4BW3A7g%2Bu9NzG0fvu%2FC8j27mMj%2BVQmWgScDkjS8%2F9MVAEt%2BC%2B09HIAexYmCR54TxVoezmgFpsdZ1gr9ZzNl7wsEHV6WFfjeHkqlxpAQikdS%2BqVrxikol4FhHXiChA%2ByRaig0WMBjR&X-Amz-Signature=1395ef408929e6dd347ddd58d162a67ca23fcdac34930ff6c26ccf0eec8ea584&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5W6LGUR%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T021521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjHcuSTvNYck8V5M0emRrCOlQk8uvR3Hum1d95kQkQJAiB3XOhud3DmOEZX7ILlXW9oygKsDqabnczEfzx0f2cW8SqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0CvGh25%2BRBx7wzHFKtwDe5NbeCeXJ9sHiehaQ6FKA78JFhgbo9anVphUPE1w%2Bq3cMINP%2F2D4IPm3WjiiyHe3QlNCrhaR7BexRNr2Yf5%2BozgWdhuqk%2FSwqJfsruleZD5GkmBx6X7r5BncVfjWy3ORuwJn3GCLE2goz0MMrPWCDn%2FHNkrwcU%2FKf%2Fv%2FatVyZAbdYqEa0n8%2FjVCs3wFz%2BSJiuYDQm%2FBnc0omfAdhk0DYvr8omlH10STK3JnbkdcG1ZIT7C5rIbFPbjwqJ2qhQBpOSpyKVZyyo%2FXDEM40Nlw6ig0h4CtvH6%2B4ud0iBXZ7Lc8L%2BWe0i8N3rxIiPrW%2BbkPvFMondA8ptqUdhCNfIEp8WVSTg4lIcZovlJdhe%2F7vYKW9aRt67WEic1xUK7ITgL4Hw17MRLLtZ%2B0EUR5Gcrb5eNO31A3a2u0L79BYo0iLLfveyWMpSBynIVbDbRsg4oybKcrmqxUTAFYL6Kq0lHSDdXpYEN6sN9EP4WLle5w0fx1hhbxkhFL%2B3CPhorEUrjHsI55yZvQX%2FU4T0WCJduMhZkGEMBEj8je8BybPDVsszr%2FBtbnwG4wb%2Bt9F%2B6IcBK770rzASM8iGEor0gZeLd5ipcJdO9b2psXWCRdvKcaNKSYFmyfqfSDdDP0%2BqIswz4KUvgY6pgED5dPAk6G2nyNu%2FtMjqdnhrqcLDiYPasak14Q2R0NpGT%2B1XFghxZhRAnlymGULQSWG%2BaKEIZHzsx4x%2FU3d7mJ4BW3A7g%2Bu9NzG0fvu%2FC8j27mMj%2BVQmWgScDkjS8%2F9MVAEt%2BC%2B09HIAexYmCR54TxVoezmgFpsdZ1gr9ZzNl7wsEHV6WFfjeHkqlxpAQikdS%2BqVrxikol4FhHXiChA%2ByRaig0WMBjR&X-Amz-Signature=986a212e6d94be28aec8fb7d1a7b6f3fa9ad72fbdff3dd237ef6662c367f70c6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

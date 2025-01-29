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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EQEBP74%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T220642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6A4eLIEO7lLoAz6YgoCoZ5LcL%2BxbIHo3ZA0XmFp0I2gIhAN3R5IgU%2BNjx2XxOvoSizpVMwOlrlMNF07CiajhrHyApKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3QLsVu6sVNYysHbEq3AMGwkJW7HGeVGG0KrUoZ7LdDm4UC65yhymJEKhxgZ9yiMf4%2FbxBMnoRYrPFmmIEL%2B30yP9TxiRs4YcpB3O1Xiov6sqSMDck4%2FEdNzBTbN8cUJZIkXi0TeehhbSSYm25boa5hWmPw7uO6IFut9gMhT5jrxhiiXd7HTo%2FtBHhMyUQ6LnD7BZ7aWWsBSn3xRoBbExXQhd30AwNFbiWdr8sHnqcvg4hFtIZZjTDZMjDALVUlbyCRf0VFwrfvyE%2B%2BcwP92tLjvT%2FP5rDVqu0dhT1QGSYMImOkc5h08bb9gbTKYhhqIi9JGsRq4h1uB0YDLTBiLgB3sTMQDh6e1CXZqMxGMk5R%2FEJ8kM3WsYa9n6ZSSkrkZgkPDrHzhkR%2FPvCx3%2FzVpk65%2BUHiB1O%2FtwLA2Cfmx1XX3Bb7Uy9pKCJ1MeeUnI2z399Nk5r7B3UnuS%2Fcc9qyf1%2B9uuWgV4qwHtpPY6afo4GYOsdo75SaqVgcX5CSELDngtSFeOrwRQLXWhygFpTnNCDuDFaDhfEQEwvZaUUSa7LlX4Pm3dtbkRhiDz3b1rQdw7pPVxevDi3U4wiGvz5hYl3jN14AOKEM%2FkvTITGsvcZQfwEIgCa3ZTTBtlHp4lC7LQod2bmeKmdvwmSODCsx%2Bq8BjqkAZXYnPxOMeRFuAY%2FlxB1dxu7PwUk%2B0hnHTM3%2BTfiX9ASbPpvW0tOTJmR5oj6EnCDbhrnUmiOkbPXE12IRerTfCw6YOvYNM9ns6nqR3MNmDAFSkeLMxfyIW%2BIQNZt5WQzlcO0uGKESknMlO9%2BkiIAi2lEHJo5qVKMlx0eim8LJo3EUDZDBrWWmM7vc4CfP1eszBHMFDh1l5FODM71AXDVjizzaWyR&X-Amz-Signature=20adc4c0a2e7dece811b4e59045ba41027b692c753ad4da8cc9a39447c534598&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EQEBP74%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T220642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6A4eLIEO7lLoAz6YgoCoZ5LcL%2BxbIHo3ZA0XmFp0I2gIhAN3R5IgU%2BNjx2XxOvoSizpVMwOlrlMNF07CiajhrHyApKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3QLsVu6sVNYysHbEq3AMGwkJW7HGeVGG0KrUoZ7LdDm4UC65yhymJEKhxgZ9yiMf4%2FbxBMnoRYrPFmmIEL%2B30yP9TxiRs4YcpB3O1Xiov6sqSMDck4%2FEdNzBTbN8cUJZIkXi0TeehhbSSYm25boa5hWmPw7uO6IFut9gMhT5jrxhiiXd7HTo%2FtBHhMyUQ6LnD7BZ7aWWsBSn3xRoBbExXQhd30AwNFbiWdr8sHnqcvg4hFtIZZjTDZMjDALVUlbyCRf0VFwrfvyE%2B%2BcwP92tLjvT%2FP5rDVqu0dhT1QGSYMImOkc5h08bb9gbTKYhhqIi9JGsRq4h1uB0YDLTBiLgB3sTMQDh6e1CXZqMxGMk5R%2FEJ8kM3WsYa9n6ZSSkrkZgkPDrHzhkR%2FPvCx3%2FzVpk65%2BUHiB1O%2FtwLA2Cfmx1XX3Bb7Uy9pKCJ1MeeUnI2z399Nk5r7B3UnuS%2Fcc9qyf1%2B9uuWgV4qwHtpPY6afo4GYOsdo75SaqVgcX5CSELDngtSFeOrwRQLXWhygFpTnNCDuDFaDhfEQEwvZaUUSa7LlX4Pm3dtbkRhiDz3b1rQdw7pPVxevDi3U4wiGvz5hYl3jN14AOKEM%2FkvTITGsvcZQfwEIgCa3ZTTBtlHp4lC7LQod2bmeKmdvwmSODCsx%2Bq8BjqkAZXYnPxOMeRFuAY%2FlxB1dxu7PwUk%2B0hnHTM3%2BTfiX9ASbPpvW0tOTJmR5oj6EnCDbhrnUmiOkbPXE12IRerTfCw6YOvYNM9ns6nqR3MNmDAFSkeLMxfyIW%2BIQNZt5WQzlcO0uGKESknMlO9%2BkiIAi2lEHJo5qVKMlx0eim8LJo3EUDZDBrWWmM7vc4CfP1eszBHMFDh1l5FODM71AXDVjizzaWyR&X-Amz-Signature=773df5f19267434a52d287735c117842caeb6300a7474217ecc510393d3fecb4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

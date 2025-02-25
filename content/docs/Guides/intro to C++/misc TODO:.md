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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VOXSA52%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T070816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCzCpylc0V5yxBoE3QOw6RYRCsgJJNqlGuA6euVeEN5aQIhAKfKf6%2BnNoz1OeIggIj6emRpnODs%2BejnvqX3OMFotczlKv8DCEAQABoMNjM3NDIzMTgzODA1IgwaNZVwuP6S23dpT%2Boq3AMrihMrgQ4ZWjJyZfdpun5%2FpGnBrd2jM7Yq9sumrXMD8ClhpTqkQ1I8%2Bqr6e70rYGeh1%2FE6UV6u4PVFvm2WoKRfvOv1WNIvIxAVcfOKr5%2FBrgj3ZczJnY4yoCNRIuPoqn4Mtt7YgL0o9qL%2F9EK%2BkUF71iUfARoRtn83D10cdVMgDiWMEGulCNodJksN1sgYz2ktIBrd2PdvXZ9a5UasVuctKiO8M0TePtxNmjNZq1aSkk46klnTfFiPlxea1CrLfxHRyTTMgJhkBjnem59AtPmjiiHtjXI7PtM50bvuBtug2USxFguj8%2Bw9FCqZR4mz9Be8s8cSHJdB8qlKfONfHOpEUx0xtVgeNgQLdGdoBI9HNcCJjRACamOjrJs3gPi7%2BQNy380o1AUgU7PLNAayDgSDBf8ZPw9ZaNhN12Q%2BYK3wqdSb20QNMWonzbqCKumB%2BKjxv2zL2Mo%2FcZxsrkCAX0Ivp9CczH9qPZQjQbkcdSGyTBjheXh6NM6ovQdoS90ebW%2F%2FhPPoONtw%2B3HAGDUfUMy2wsvL1nTlqiNseKNEt4U%2FC7rosuPJ8dc5e2F8d56WYdZhLxw6317k5mFR%2FScB%2Ftvg8lIyWzK8JX%2FioCpnFdsb0b9%2Fuk2P3%2B7OYc5hvzCRyvW9BjqkAQDGyFhoh%2F3Wc%2BKjitOQZcKPpNuFpuvz0cPUlvW8TKyTuWwno8%2BT0KF8nZLIrbS9DaP%2By4IVQc5yp3HIU6WAoWpz5gkiA%2BKSrYWbgriQz%2BKyAt8v4cbXsaW%2FXhFoKdW32jC%2FSxZ71dG2pHmRb4za2E3Bkxk4G%2Fx3Y3bLEsSkHj4IR70c9Uo5%2BBrHcVBL7CoQu1ubWePxO0ZQmgr%2Fb2N4C9MqRhIN&X-Amz-Signature=4f4630508359790019a499090c940403a66551f506739af0eba7a301d2ea5ce1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VOXSA52%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T070816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCzCpylc0V5yxBoE3QOw6RYRCsgJJNqlGuA6euVeEN5aQIhAKfKf6%2BnNoz1OeIggIj6emRpnODs%2BejnvqX3OMFotczlKv8DCEAQABoMNjM3NDIzMTgzODA1IgwaNZVwuP6S23dpT%2Boq3AMrihMrgQ4ZWjJyZfdpun5%2FpGnBrd2jM7Yq9sumrXMD8ClhpTqkQ1I8%2Bqr6e70rYGeh1%2FE6UV6u4PVFvm2WoKRfvOv1WNIvIxAVcfOKr5%2FBrgj3ZczJnY4yoCNRIuPoqn4Mtt7YgL0o9qL%2F9EK%2BkUF71iUfARoRtn83D10cdVMgDiWMEGulCNodJksN1sgYz2ktIBrd2PdvXZ9a5UasVuctKiO8M0TePtxNmjNZq1aSkk46klnTfFiPlxea1CrLfxHRyTTMgJhkBjnem59AtPmjiiHtjXI7PtM50bvuBtug2USxFguj8%2Bw9FCqZR4mz9Be8s8cSHJdB8qlKfONfHOpEUx0xtVgeNgQLdGdoBI9HNcCJjRACamOjrJs3gPi7%2BQNy380o1AUgU7PLNAayDgSDBf8ZPw9ZaNhN12Q%2BYK3wqdSb20QNMWonzbqCKumB%2BKjxv2zL2Mo%2FcZxsrkCAX0Ivp9CczH9qPZQjQbkcdSGyTBjheXh6NM6ovQdoS90ebW%2F%2FhPPoONtw%2B3HAGDUfUMy2wsvL1nTlqiNseKNEt4U%2FC7rosuPJ8dc5e2F8d56WYdZhLxw6317k5mFR%2FScB%2Ftvg8lIyWzK8JX%2FioCpnFdsb0b9%2Fuk2P3%2B7OYc5hvzCRyvW9BjqkAQDGyFhoh%2F3Wc%2BKjitOQZcKPpNuFpuvz0cPUlvW8TKyTuWwno8%2BT0KF8nZLIrbS9DaP%2By4IVQc5yp3HIU6WAoWpz5gkiA%2BKSrYWbgriQz%2BKyAt8v4cbXsaW%2FXhFoKdW32jC%2FSxZ71dG2pHmRb4za2E3Bkxk4G%2Fx3Y3bLEsSkHj4IR70c9Uo5%2BBrHcVBL7CoQu1ubWePxO0ZQmgr%2Fb2N4C9MqRhIN&X-Amz-Signature=5b1c5e5d6be78dfd4c1a254beb5e0683aed81d5f1a39cdd0c89de7c8060260bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GL7PVMR%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDPSCsHpLehVsOwErREmen3eoBf6PYaQ55ozhTw2NNyggIhAKhPle%2FZQscwZ4YxgovP0KwBrLFMpqjoIE7NVY7torKvKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7Dmv4%2BNDpjG4laDgq3ANZDUpdf32eY8Vc7dsaVjexZRcNTjKEJJ2S3W4Cs0aZ8%2FCwOYFtvjqP4XjVeIOLUC5rDEyvdEOt03%2BYZo9Hzdst9yxTUSu15BEMSknrfWpH52HJp8jpM0xqesazmU7LawyUpGx%2FETtm22KY7uo57SgebYXiycy%2FW%2FVyhQ%2Fliyj5EHvV%2BsSnNgMK6FeOTRsBL61uFLcs0UnNUAJbX3%2B6lTRhXLkJBRpbsHmNa2kRGn6k2MW3J7lEyYMYf6czc4zB5WRHxVRmyifPCcwqDCo96fou2TjsbiheaoCQIZKSI41YAc0xXxVgxqSCpoo2lZl0VQHRUg9lhzOF0n2dXJWNnKj4bvS2Q47T6b5gIpR0DWyRoj%2Fb9i6ngRy9Uv32rGJWwbA11aYTGGemDpbohehG9Gu%2BAV3FlLvVFR0B6KZhjL1berkGj%2B5zHHft9eh37OORbCU%2BCj%2Fb0zWHmogi3N3nuPHmS%2BMRGkrBbPV1z2JKIDWdcKt1qjD3jLJ1cxQEncQOupMZuMukV69AJcT5NMpsSw%2BvnWksOEtY8IaX%2F1AKP9Dj5Hvy%2F7bIAxmAhsws91p%2F8D28OaTL2GMHf41jGB9GoQyVFWDk2iO6Y90AGrzxgdBVMTg8zLEZ%2B61p2DCvxjCk2%2FW%2BBjqkAaU529tmJQJ37ujUaEzZOOK8n9IB6cTo3i3QVhrnldHd7I9DWx1wGWe3z6rIk7mT4rfmcFBJQNF%2FAdl%2F2Mkd4QwCwQMQ2Fx5iM9bdWdvHyFhVa7l3PO0hwqwEfS4Y9vZAccaHp5Pyjg4kKZpH04f%2BfgXu45VmPK67O4GaqGQF2UI7MPmVYbjjPZH3AINvFIviRBfRYX0MWdGosGhGe43lVuxIjQ8&X-Amz-Signature=e0a7a8c1c1cbb884c5bc4345bc2848ef9d75b5c92f4a4f00ce2bd902dabdc9d6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GL7PVMR%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDPSCsHpLehVsOwErREmen3eoBf6PYaQ55ozhTw2NNyggIhAKhPle%2FZQscwZ4YxgovP0KwBrLFMpqjoIE7NVY7torKvKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7Dmv4%2BNDpjG4laDgq3ANZDUpdf32eY8Vc7dsaVjexZRcNTjKEJJ2S3W4Cs0aZ8%2FCwOYFtvjqP4XjVeIOLUC5rDEyvdEOt03%2BYZo9Hzdst9yxTUSu15BEMSknrfWpH52HJp8jpM0xqesazmU7LawyUpGx%2FETtm22KY7uo57SgebYXiycy%2FW%2FVyhQ%2Fliyj5EHvV%2BsSnNgMK6FeOTRsBL61uFLcs0UnNUAJbX3%2B6lTRhXLkJBRpbsHmNa2kRGn6k2MW3J7lEyYMYf6czc4zB5WRHxVRmyifPCcwqDCo96fou2TjsbiheaoCQIZKSI41YAc0xXxVgxqSCpoo2lZl0VQHRUg9lhzOF0n2dXJWNnKj4bvS2Q47T6b5gIpR0DWyRoj%2Fb9i6ngRy9Uv32rGJWwbA11aYTGGemDpbohehG9Gu%2BAV3FlLvVFR0B6KZhjL1berkGj%2B5zHHft9eh37OORbCU%2BCj%2Fb0zWHmogi3N3nuPHmS%2BMRGkrBbPV1z2JKIDWdcKt1qjD3jLJ1cxQEncQOupMZuMukV69AJcT5NMpsSw%2BvnWksOEtY8IaX%2F1AKP9Dj5Hvy%2F7bIAxmAhsws91p%2F8D28OaTL2GMHf41jGB9GoQyVFWDk2iO6Y90AGrzxgdBVMTg8zLEZ%2B61p2DCvxjCk2%2FW%2BBjqkAaU529tmJQJ37ujUaEzZOOK8n9IB6cTo3i3QVhrnldHd7I9DWx1wGWe3z6rIk7mT4rfmcFBJQNF%2FAdl%2F2Mkd4QwCwQMQ2Fx5iM9bdWdvHyFhVa7l3PO0hwqwEfS4Y9vZAccaHp5Pyjg4kKZpH04f%2BfgXu45VmPK67O4GaqGQF2UI7MPmVYbjjPZH3AINvFIviRBfRYX0MWdGosGhGe43lVuxIjQ8&X-Amz-Signature=569f3a6df47e2016704175a1a9e491323d1c2793d733678394b03f4c0463118d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

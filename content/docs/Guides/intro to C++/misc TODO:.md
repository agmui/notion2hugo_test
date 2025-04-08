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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653ODY5ZO%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJwnuQy9ma45P0z%2Fm1rw4lWqvR3UNxtuvjdF1IFUYBMQIhAPYFgsKJ%2B3k3pzqiOxTyQNgzFJbYJQ2BKV2UtTurfN2XKv8DCHcQABoMNjM3NDIzMTgzODA1IgwdIWhaGXL857seTYUq3ANdpDDilt0Y17XEtbIbldpkzUFCxXfsUMXb3aziQgjAZYusV2TBcX8ZobkHUucAry22HOGq7QB1zbnTYmCD94FUTl%2BcMmgFfMGcd7XuKdUyPfp5TD3G%2Br3l5oYMe57m8qaEPlZubrDRedXBKIgNaarc0SkdhM0KoML%2B5jIe8XqrgNbLJPA64cunpluTr3sjtNSc3qy2Jw7wnpxU2F0S2Pez%2BS8pLOWWX43wQ5tdSwjjopEBHZxPt1w9pbmkQBjZ57k8ep%2FsI6ihqpa92I6l6Hsf%2FTFlZHfO%2FbRts7QKbkruJ%2FlVTalyo8GFvqo2ypu5UGkqPM0m5TwPTOkYXBj%2Bi7gaqyPWts%2B2x3O5pngd8LUohg5wEgHhOLC9GNsthKCS2IrN6Snqy14zIOMYjaVYgfFaLepo36AUKxYq3khbP%2BXM2eFApALvdS3FFX1ESwpArSZ6O7B3eqPn6zjyaC6HnltBQektkvntdbj9MwSHm3ZUhpC6EWkPC9SDWZOb8Hha2JCTHnv1lyYqS28VBryfUdLU%2FoYRpcpu6KmdW26E0cvqmJUQRHdbWCywAdTjme4ZtSAH1edvFWGvsZKa1P7ncjEfnxLm8gbumAXKnz09nvmaGMom4hzk9lVJ3XAHwTD919S%2FBjqkAYZPtrdlxtTLjQqtxWcv%2BEaCMCjX5nN3B2XYlt5MxnKYhcibRv%2BufuDgW7Lp%2Fmn52il3Y0ph8C9VmBvJsxMHPGUaKYGFAW%2FdUC%2FaL8EOp8EnYt31XWKA7pSqoOrycqnnJUHcV44bJEuKBetb7FhyQCbvARjHCyxdrgbNal0b6UJlZW2AbbLOW57DcWrP8Hx89uWArCKbP2p4EjzbYt0r8w7amNZu&X-Amz-Signature=9159dbf8c363bc1478f8d028ddb6151bf68d679a79e741419e02d0e27ec50639&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653ODY5ZO%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJwnuQy9ma45P0z%2Fm1rw4lWqvR3UNxtuvjdF1IFUYBMQIhAPYFgsKJ%2B3k3pzqiOxTyQNgzFJbYJQ2BKV2UtTurfN2XKv8DCHcQABoMNjM3NDIzMTgzODA1IgwdIWhaGXL857seTYUq3ANdpDDilt0Y17XEtbIbldpkzUFCxXfsUMXb3aziQgjAZYusV2TBcX8ZobkHUucAry22HOGq7QB1zbnTYmCD94FUTl%2BcMmgFfMGcd7XuKdUyPfp5TD3G%2Br3l5oYMe57m8qaEPlZubrDRedXBKIgNaarc0SkdhM0KoML%2B5jIe8XqrgNbLJPA64cunpluTr3sjtNSc3qy2Jw7wnpxU2F0S2Pez%2BS8pLOWWX43wQ5tdSwjjopEBHZxPt1w9pbmkQBjZ57k8ep%2FsI6ihqpa92I6l6Hsf%2FTFlZHfO%2FbRts7QKbkruJ%2FlVTalyo8GFvqo2ypu5UGkqPM0m5TwPTOkYXBj%2Bi7gaqyPWts%2B2x3O5pngd8LUohg5wEgHhOLC9GNsthKCS2IrN6Snqy14zIOMYjaVYgfFaLepo36AUKxYq3khbP%2BXM2eFApALvdS3FFX1ESwpArSZ6O7B3eqPn6zjyaC6HnltBQektkvntdbj9MwSHm3ZUhpC6EWkPC9SDWZOb8Hha2JCTHnv1lyYqS28VBryfUdLU%2FoYRpcpu6KmdW26E0cvqmJUQRHdbWCywAdTjme4ZtSAH1edvFWGvsZKa1P7ncjEfnxLm8gbumAXKnz09nvmaGMom4hzk9lVJ3XAHwTD919S%2FBjqkAYZPtrdlxtTLjQqtxWcv%2BEaCMCjX5nN3B2XYlt5MxnKYhcibRv%2BufuDgW7Lp%2Fmn52il3Y0ph8C9VmBvJsxMHPGUaKYGFAW%2FdUC%2FaL8EOp8EnYt31XWKA7pSqoOrycqnnJUHcV44bJEuKBetb7FhyQCbvARjHCyxdrgbNal0b6UJlZW2AbbLOW57DcWrP8Hx89uWArCKbP2p4EjzbYt0r8w7amNZu&X-Amz-Signature=17f8b63719f69edd9b4f7e77952fe076560a80d1ff89b9c14927170347ac113e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

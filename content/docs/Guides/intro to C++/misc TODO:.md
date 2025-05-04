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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBAK2ECT%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIEX%2BLZDD%2B1duvwLRv3PtNTWKwSxuc3815XrAOpNak6QvAiAUomYWxqqRlbGhwly%2FHQ65DZw9aEpNE0TRzrs0Z8lZjyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMeu8QnZ9b07XtmrKoKtwD6uKt%2B3gb6aM1cWO1xhebVQSk083EiVGIzicmpUVcbytg9sMrx9qDo9QCYfT02tKvGcOgh2YAoAX839ygippYGxYfQf0HxnxZ7K4iAymCJZvq6U1%2FmWBC6N8oqJ4aT11c%2Fg9unM%2FwQoQAXnA7ZcOZwSIiKrmSLHI40mgr8zllCaUcgf4mBnbrkPwY3q5yVryCjaRL%2FIamDXq%2FkTJ%2BSenOra%2FmLtHSDVweZN8S2vgS%2FzvOL%2F4eaN1FDR3DgAKLEShY6PXzizQiKVrxtOTERygQmmBvcNqtdLsOpmV9CeOI%2FBHNmJ3grWcI5wMU%2BSZgJi32xOzjhXLC211KHLf7%2FYGL%2FS%2FcweX3ArWt86Rsa4B6peFqE9U%2FNWJHknSGjMRnN6mqeDmXk1k9G4SM4Rd%2Fd07tq0L5kCx8grxl2soLVcJ2tgMM9YMQ3h9vTuVr92pQGhxf5epqX0HlJxw%2BvXRrLk1nZB11CbbFrLwX32IQMoGsQQAt1MXqOLphvhvMkrCQy0OHKi%2FL3JkZw75hMqQ8JWt2KXBvn%2F%2ByayT3wJko356TjabIDVawY%2Fc9wyXxN%2BIdS5vvH%2FKi4ua9Ze9UmbxrgGyNUSfBNgrcdKi4xoF7ylSd8KDalngnu3qFW4mKgjUw4ajdwAY6pgELKKj3diYUS3jfYb4GUtSNFy9O9tA9jNXlVJ5K5Tiluw7yy9c%2BIiFQT3VRHFImc1IpPXw%2F%2FbjKo6zgAf4SYAxlqKIF2Wz2q3dA23eLeWUHkHrAAYfTQja2P1NgZ2Ad4sOqSiQAcmMJkUTxjTdh%2FcDjamS%2Fh8d0EVSSdscbZuDhiitPScLbbrOfzE8W%2Bnh7zYud2i7rwn3KYCAk1C%2FYvVZc%2FfQZ2lha&X-Amz-Signature=0f5d5977a7dd6fab79daa8c0180f4b5ad08e9965fc9bc2628b29c0ebd9957d1b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBAK2ECT%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIEX%2BLZDD%2B1duvwLRv3PtNTWKwSxuc3815XrAOpNak6QvAiAUomYWxqqRlbGhwly%2FHQ65DZw9aEpNE0TRzrs0Z8lZjyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMeu8QnZ9b07XtmrKoKtwD6uKt%2B3gb6aM1cWO1xhebVQSk083EiVGIzicmpUVcbytg9sMrx9qDo9QCYfT02tKvGcOgh2YAoAX839ygippYGxYfQf0HxnxZ7K4iAymCJZvq6U1%2FmWBC6N8oqJ4aT11c%2Fg9unM%2FwQoQAXnA7ZcOZwSIiKrmSLHI40mgr8zllCaUcgf4mBnbrkPwY3q5yVryCjaRL%2FIamDXq%2FkTJ%2BSenOra%2FmLtHSDVweZN8S2vgS%2FzvOL%2F4eaN1FDR3DgAKLEShY6PXzizQiKVrxtOTERygQmmBvcNqtdLsOpmV9CeOI%2FBHNmJ3grWcI5wMU%2BSZgJi32xOzjhXLC211KHLf7%2FYGL%2FS%2FcweX3ArWt86Rsa4B6peFqE9U%2FNWJHknSGjMRnN6mqeDmXk1k9G4SM4Rd%2Fd07tq0L5kCx8grxl2soLVcJ2tgMM9YMQ3h9vTuVr92pQGhxf5epqX0HlJxw%2BvXRrLk1nZB11CbbFrLwX32IQMoGsQQAt1MXqOLphvhvMkrCQy0OHKi%2FL3JkZw75hMqQ8JWt2KXBvn%2F%2ByayT3wJko356TjabIDVawY%2Fc9wyXxN%2BIdS5vvH%2FKi4ua9Ze9UmbxrgGyNUSfBNgrcdKi4xoF7ylSd8KDalngnu3qFW4mKgjUw4ajdwAY6pgELKKj3diYUS3jfYb4GUtSNFy9O9tA9jNXlVJ5K5Tiluw7yy9c%2BIiFQT3VRHFImc1IpPXw%2F%2FbjKo6zgAf4SYAxlqKIF2Wz2q3dA23eLeWUHkHrAAYfTQja2P1NgZ2Ad4sOqSiQAcmMJkUTxjTdh%2FcDjamS%2Fh8d0EVSSdscbZuDhiitPScLbbrOfzE8W%2Bnh7zYud2i7rwn3KYCAk1C%2FYvVZc%2FfQZ2lha&X-Amz-Signature=9d4fb668ea74fe7aa8d90a82e7a7e783d97ac80078d92b7f526f45de6ecb9e16&X-Amz-SignedHeaders=host&x-id=GetObject)

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

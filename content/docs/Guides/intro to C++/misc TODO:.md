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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAEUBI7R%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIAr3XAY09f0p6M2hOBg1%2FFHtdo4D4deMin%2Fh3NcKVG%2BPAiA6jx9NzhOTDcUec650F%2BhHaPw%2B2KFaVMBOMHQKsBR9QiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiS1U6aiahhbLx4oNKtwDcCoFa2HyaFEZ%2BTVE4qXdeGuDzd9G3FJCWUtSywGUGWnCrki4%2F9UE5lYp6%2F8sJl%2BIkzYKpYq21FmP1cWPQViRMgM%2FwD8h9etzYucF0uZ284PPTOdmW1BZgWdhsAOCVA0TDn2t8cA40NA0M0qJUNc6V2ejGcpk0vq%2F6%2BDv3ou4uhh7qwpoRMjE22iKZgvwn7BwwuPd64mR6TaGqUFkNyP6X3tCRaKLH8UiStfZFzsgsjpv%2B8R8G1ok%2FlfTx5fv%2B0uUOfth1iOtx44XaRcOIQ%2B0qDOqIUIbXzKIMrcnYfTKOynrbephR8Wv5ByNBL00E79hfoKBIKa25dds9VPfAkn57E1Tk5ieTXIvZpG0lNP8Y1BLZUt0dQAlfX2O35ulgCn%2FToLJ2vohgTM23vqlXYpCN9FwnTqlDU72WigdC12AKWxqjGXBtpU6D9liJgQwgt4F3Ed17V3a%2FwTRjvLKh46qeotwKRjWrXrJFQXMM2QN4XEfrNdkuourFH5mzubix6pDTnTK4m9DUsmSSi3C4txpqJ1opvz8mWPp98oNNJ9G5tOXL7as8kMBZ%2F45i4uTaQnR%2FQ59yIOiRJzPMlUuXf3r1K87JuhlckAwAOw%2FMiwbLpHJjRYiZ7HB2HKm%2B90w%2BpKGvgY6pgGHLLZm8EaBY6XQliG8ARIOfHFApPxZLtkXcFSJPKm74Nac7uOvmFVtG4338kv7CoABGSju8WsfcjIB%2BpbSljyUUAKOp8GxgKJBdDu7uFDVgXFVZ244sQMUdGxqN3SQ1mmb0hP8r%2Bbi76qq6ymfuKhSpCgfSzDPKoklj9pB2PxggQGuLtzoDYNpzWkfjZ9BsVJr3tE6Dv9CXvzJfsYHpSiToBXw0%2FGl&X-Amz-Signature=a9c3bb98631ce52a9ec5fdae2321981055385692bdd388f2425f3d8f928b3beb&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAEUBI7R%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIAr3XAY09f0p6M2hOBg1%2FFHtdo4D4deMin%2Fh3NcKVG%2BPAiA6jx9NzhOTDcUec650F%2BhHaPw%2B2KFaVMBOMHQKsBR9QiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiS1U6aiahhbLx4oNKtwDcCoFa2HyaFEZ%2BTVE4qXdeGuDzd9G3FJCWUtSywGUGWnCrki4%2F9UE5lYp6%2F8sJl%2BIkzYKpYq21FmP1cWPQViRMgM%2FwD8h9etzYucF0uZ284PPTOdmW1BZgWdhsAOCVA0TDn2t8cA40NA0M0qJUNc6V2ejGcpk0vq%2F6%2BDv3ou4uhh7qwpoRMjE22iKZgvwn7BwwuPd64mR6TaGqUFkNyP6X3tCRaKLH8UiStfZFzsgsjpv%2B8R8G1ok%2FlfTx5fv%2B0uUOfth1iOtx44XaRcOIQ%2B0qDOqIUIbXzKIMrcnYfTKOynrbephR8Wv5ByNBL00E79hfoKBIKa25dds9VPfAkn57E1Tk5ieTXIvZpG0lNP8Y1BLZUt0dQAlfX2O35ulgCn%2FToLJ2vohgTM23vqlXYpCN9FwnTqlDU72WigdC12AKWxqjGXBtpU6D9liJgQwgt4F3Ed17V3a%2FwTRjvLKh46qeotwKRjWrXrJFQXMM2QN4XEfrNdkuourFH5mzubix6pDTnTK4m9DUsmSSi3C4txpqJ1opvz8mWPp98oNNJ9G5tOXL7as8kMBZ%2F45i4uTaQnR%2FQ59yIOiRJzPMlUuXf3r1K87JuhlckAwAOw%2FMiwbLpHJjRYiZ7HB2HKm%2B90w%2BpKGvgY6pgGHLLZm8EaBY6XQliG8ARIOfHFApPxZLtkXcFSJPKm74Nac7uOvmFVtG4338kv7CoABGSju8WsfcjIB%2BpbSljyUUAKOp8GxgKJBdDu7uFDVgXFVZ244sQMUdGxqN3SQ1mmb0hP8r%2Bbi76qq6ymfuKhSpCgfSzDPKoklj9pB2PxggQGuLtzoDYNpzWkfjZ9BsVJr3tE6Dv9CXvzJfsYHpSiToBXw0%2FGl&X-Amz-Signature=abeb93eac3363891b1c4a2beb15212440545d7b9b4112fe2108df6ed48549f12&X-Amz-SignedHeaders=host&x-id=GetObject)

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

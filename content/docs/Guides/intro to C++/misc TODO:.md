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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EVUM3B2%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T050752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCKv7BM2vAAMf6yahjeZgMEq3HU79MdwR%2B1E49ckPilSQIhALhzhQ%2FL4O1LtB4xxA9Yy8BMzzDqd32vjbE7zSTS1CAJKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsB2uYtLdqFN44J3kq3AMdsFuVQSw2npnD8FhCwH4tRDOvdKzBaXCyp%2BXp9xgewRQwnHTGl3DBsZkJf6vCIfzK%2BhsnG0MvTCRjrZwtqED8PnxD93hpnqkocA2lInOfHE9PVrZWO%2B7pVLCNvgQ3%2BYnlEWPMmmhiglg4NJsuJt7qD7dm00dEIAtPykizZyg5iaEI8CE6SGO58dae0VNxIDGtvhPIoQ%2FYsJw6RrxxyV3OQb1RfHykKZHXNl9kKYy0bKIRnZicGHodI1Dt1tvaSJjYRsXknAKgRHwoMYjfwLzjQaz8TgIJyc0v%2BQy38brZW6RI6fQlDdvy0z7bg%2FGiOs2LYCP%2F1oqTpsSjXBZn5v8XVjFwwj%2FdWVa2evBVE9WBCy7eOZ%2BI0gPlET53TW2gBslzdBwitIf11HTShIz7jYrF7IgEe5kxTXyUqyD7ywPpcCVRiOFU1Uu8DslmMNAoLfv5Ktx7sU9PeHNVm2Xzi1hu5N2dUxxGAzkP4RZZHdKcJrYxoOfHsvVkf2X0ssmN0I%2B4P2NfouFWV9KSBZ6mVSJLt4adjiQKDOMCVDwpM4bu%2B4CNJaJ8gXr2HgolpnlsCvBKNUSCKqnd0b5tDB%2Boz8bGXOLhJFUmrvQwR1%2FkCrTmYRsdpDR1Wej83gsCzDCQ4%2F2%2BBjqkAa80IsSkGBP3FbYwi8tKLVGLmwNALor3z%2FtzIzo45RY%2B%2FqS3Gnv0P5F2SmNk8Gx%2BA4yc2qsr3UnTbpZ8kiuXTGp8XTGlDtbPxKfQLwGzrWwS%2Bi9z6sJazDadSX1kTw0pnDfliVdgBr2A0gqAo3h%2FcQ511oDxTvKsSWS9ATPqzPjZ9D6INK9W4S72r3dMisV4wCRsPYuYbD8RCVJAVyF0aUlb%2F3uC&X-Amz-Signature=75c99992129a9b56ebc161cd4dfb64679ad2ad63d35b777f659c7b8e8d7324e0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EVUM3B2%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T050752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCKv7BM2vAAMf6yahjeZgMEq3HU79MdwR%2B1E49ckPilSQIhALhzhQ%2FL4O1LtB4xxA9Yy8BMzzDqd32vjbE7zSTS1CAJKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsB2uYtLdqFN44J3kq3AMdsFuVQSw2npnD8FhCwH4tRDOvdKzBaXCyp%2BXp9xgewRQwnHTGl3DBsZkJf6vCIfzK%2BhsnG0MvTCRjrZwtqED8PnxD93hpnqkocA2lInOfHE9PVrZWO%2B7pVLCNvgQ3%2BYnlEWPMmmhiglg4NJsuJt7qD7dm00dEIAtPykizZyg5iaEI8CE6SGO58dae0VNxIDGtvhPIoQ%2FYsJw6RrxxyV3OQb1RfHykKZHXNl9kKYy0bKIRnZicGHodI1Dt1tvaSJjYRsXknAKgRHwoMYjfwLzjQaz8TgIJyc0v%2BQy38brZW6RI6fQlDdvy0z7bg%2FGiOs2LYCP%2F1oqTpsSjXBZn5v8XVjFwwj%2FdWVa2evBVE9WBCy7eOZ%2BI0gPlET53TW2gBslzdBwitIf11HTShIz7jYrF7IgEe5kxTXyUqyD7ywPpcCVRiOFU1Uu8DslmMNAoLfv5Ktx7sU9PeHNVm2Xzi1hu5N2dUxxGAzkP4RZZHdKcJrYxoOfHsvVkf2X0ssmN0I%2B4P2NfouFWV9KSBZ6mVSJLt4adjiQKDOMCVDwpM4bu%2B4CNJaJ8gXr2HgolpnlsCvBKNUSCKqnd0b5tDB%2Boz8bGXOLhJFUmrvQwR1%2FkCrTmYRsdpDR1Wej83gsCzDCQ4%2F2%2BBjqkAa80IsSkGBP3FbYwi8tKLVGLmwNALor3z%2FtzIzo45RY%2B%2FqS3Gnv0P5F2SmNk8Gx%2BA4yc2qsr3UnTbpZ8kiuXTGp8XTGlDtbPxKfQLwGzrWwS%2Bi9z6sJazDadSX1kTw0pnDfliVdgBr2A0gqAo3h%2FcQ511oDxTvKsSWS9ATPqzPjZ9D6INK9W4S72r3dMisV4wCRsPYuYbD8RCVJAVyF0aUlb%2F3uC&X-Amz-Signature=8ca4339b133fa03917bf9ee7162956626b661e90fe44af01b4dd6b23a798cfda&X-Amz-SignedHeaders=host&x-id=GetObject)

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

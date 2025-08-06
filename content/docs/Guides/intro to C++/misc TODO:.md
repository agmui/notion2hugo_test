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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LVA3YEF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDXt%2BQz4pTBfJWcccv0VbGWDXDPmkDepGnCWwGBj1mTQQIhAOWQ8h55X04mfCmyw%2FlCNP0iAFCyAiPLl2mrzRtjyQCUKv8DCHwQABoMNjM3NDIzMTgzODA1IgwQ9oLw9T7pk9EiwZEq3AMdW8sK6gpFINgcHOj6EjzvMh1hO6uAurQIxvREWC7avGvoSqOifCnuInMleLlfLQJab3cgx5rtRQYfb5QpmphA0RlO%2B0lvWt7uXtqWaRFetM9H3Y6UADWxuV6bjTnwU34XJ5BtXogCWwqIc0aQ5fPIZO6pG68v6I2UkFQoL9zMDuQE96yJQpNs4aXmBcJd%2BzaVFxFosSYHELhHvw%2Fy%2Bydhr2PkRDD11OEIw4Kz0SDmbwnfud44qpHk0ZI5ZTwYX0qCsnc%2By0g3dzD%2BbLZ7rr75ppmp5E0cvrg0Gtg30KrYgvac%2B1iHjrK91UqRIUn1eG0Box2oSP8cM66r18iBPVkG3AgYGRbrEyQUjvxOUhp1DnbXC6YOcQ6zdl%2BcgvfDmU1b3qZgODg%2BAEfFDhv5iR2rzSsytWPz%2FNGIhDzUJG%2FFY%2Bt%2Bvb%2F7nhWMSZ0HoTWzL9IZyG8eaFimwK7flELsN8feiuvxvOLEIkfNlnymErxI7zoYsx%2FDlmiFCbKoOXlRcbs4C4NCYEuXPjJtL3T0orJpl2k13yiaZ2OOBrY1rxmuXOLWaUsaHo2lBPvrlCIUpQqPcaax8D2Mbb0UyQ%2Bd%2BHE69u47ADY%2B%2BmofHrdtcfN7G0oFmEGgBJnX87X8VDCuxc7EBjqkAT9nAW6wvoRAC68izKC4XgmLEPyHhwJRY%2B17POsTZur%2BylSTtQiuiLe0nvVGnvMZyM1mIvXnmZgsDA43RdbuQ%2FU5CFVJCwGJ4IGXCJrxxC%2F5dtQpqw%2B1DR0biGW4K%2FER2L03z12XS8ltAlv9FGuV2h3EJ5wPBEiGuaOxkPHL6m0f4pJOGcOuqQQW5ZUP1phupG9vPpJzCTWg5oy7wuQ19IuZ76cL&X-Amz-Signature=5dabc36a19ad7aab391406e9cf1f304e7db1387c505a7bfafa7b94f9893a092c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LVA3YEF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDXt%2BQz4pTBfJWcccv0VbGWDXDPmkDepGnCWwGBj1mTQQIhAOWQ8h55X04mfCmyw%2FlCNP0iAFCyAiPLl2mrzRtjyQCUKv8DCHwQABoMNjM3NDIzMTgzODA1IgwQ9oLw9T7pk9EiwZEq3AMdW8sK6gpFINgcHOj6EjzvMh1hO6uAurQIxvREWC7avGvoSqOifCnuInMleLlfLQJab3cgx5rtRQYfb5QpmphA0RlO%2B0lvWt7uXtqWaRFetM9H3Y6UADWxuV6bjTnwU34XJ5BtXogCWwqIc0aQ5fPIZO6pG68v6I2UkFQoL9zMDuQE96yJQpNs4aXmBcJd%2BzaVFxFosSYHELhHvw%2Fy%2Bydhr2PkRDD11OEIw4Kz0SDmbwnfud44qpHk0ZI5ZTwYX0qCsnc%2By0g3dzD%2BbLZ7rr75ppmp5E0cvrg0Gtg30KrYgvac%2B1iHjrK91UqRIUn1eG0Box2oSP8cM66r18iBPVkG3AgYGRbrEyQUjvxOUhp1DnbXC6YOcQ6zdl%2BcgvfDmU1b3qZgODg%2BAEfFDhv5iR2rzSsytWPz%2FNGIhDzUJG%2FFY%2Bt%2Bvb%2F7nhWMSZ0HoTWzL9IZyG8eaFimwK7flELsN8feiuvxvOLEIkfNlnymErxI7zoYsx%2FDlmiFCbKoOXlRcbs4C4NCYEuXPjJtL3T0orJpl2k13yiaZ2OOBrY1rxmuXOLWaUsaHo2lBPvrlCIUpQqPcaax8D2Mbb0UyQ%2Bd%2BHE69u47ADY%2B%2BmofHrdtcfN7G0oFmEGgBJnX87X8VDCuxc7EBjqkAT9nAW6wvoRAC68izKC4XgmLEPyHhwJRY%2B17POsTZur%2BylSTtQiuiLe0nvVGnvMZyM1mIvXnmZgsDA43RdbuQ%2FU5CFVJCwGJ4IGXCJrxxC%2F5dtQpqw%2B1DR0biGW4K%2FER2L03z12XS8ltAlv9FGuV2h3EJ5wPBEiGuaOxkPHL6m0f4pJOGcOuqQQW5ZUP1phupG9vPpJzCTWg5oy7wuQ19IuZ76cL&X-Amz-Signature=1baaa590e13b4a29afef295b6f05edd7b4255e4fe243644e754f9ef2dd5c7afa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

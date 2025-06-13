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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGI4BZI6%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T090947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIAbxGoLuemoJ5ViskIKoJOroST3S4cqnKi6zJYA5IGSZAiEAreelrm%2FR%2BeLEvDOZc9AAyj%2Bv9W%2BXEhOypoUaLuUsM9kq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDD5wskGfq50JGF2r0SrcAwajogTxtahNE7rMblrb74hMkCE1Mjpx8colc9HbsIRnIAE3qD3oKKW4fBW98dNBd0MC9FI00nkYttZbVQH2k2rsJPwzPzH4tDFmL62q67fUUcg3HjaVGOjD9x1xzA5XH%2BT8iEDMuaR9Ywzv0FZqFJZdaUK5jiIg%2FAuZUyMI2F4jDWflJjHI8O282tVNVxBYHEgZLu61z8YatHh5ePEoH5cYceSMBdrQsAWv7O8tpsSED%2BM9lJqJKtxBJIs76lhKscFZyz95SJ%2FvpWGRN7Nmzmi2nwDKRyrI791%2BFUV%2BMeJM%2B%2BkgRGtCk3RZSThVfV6OjBNQZRTf31rgWzlWJt%2FRdzEIIr6Kli%2FBGL%2BWbGJLSihU1sZ%2Bv%2FopK2r4mE19XbzIOsTXCbEqMuJLynpP5Zb%2BBDVYDNU7KXnTJ6hnJN2D484ihQ5iS%2FukiNa7D2WBvxa0oJkXtOUKjTh%2Fjkq%2B3jxWO78Ym6fFVTdaQZ9WCa2qgimqtyATLuru1Nh9ckCXmT06UmK5xkhLnQ3DiCjUvj4PbvExLzq%2BtPKSXeMuHC3fnc9CgcAbhb86X9gGAQiUtxEJtqRbHH65i3afvuSmNl7OoWRirpGu0XrSV7PQmPVQvTYdKOLjLtePZTh6zM%2FOMNzFr8IGOqUBzK%2BsGjMC7db5BgYGsaJcMW4Y4hDy4C51aSo%2FW%2Fh%2FIFvfhA7wTnEG%2B8jsrgRDDcXNTavpVT1xdZ9DgqIDWd1JtwZVS13Hfc%2BPEwejW%2F6T99N3iFqqQ8R0r4jtNhiPgwtmdzQhBFQ4TavncJBPmIl2zRHqKGgXdMvbnVCHhbYxjYdJcLlxuhab0%2BXkdyC9z5NNkJUVKLB9da3eRSXEPz01DkyM9vEm&X-Amz-Signature=5e52e9a8d2d69f1f4abd0911061dd4cb73676a53bf2663276cd21c29769402bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGI4BZI6%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T090947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIAbxGoLuemoJ5ViskIKoJOroST3S4cqnKi6zJYA5IGSZAiEAreelrm%2FR%2BeLEvDOZc9AAyj%2Bv9W%2BXEhOypoUaLuUsM9kq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDD5wskGfq50JGF2r0SrcAwajogTxtahNE7rMblrb74hMkCE1Mjpx8colc9HbsIRnIAE3qD3oKKW4fBW98dNBd0MC9FI00nkYttZbVQH2k2rsJPwzPzH4tDFmL62q67fUUcg3HjaVGOjD9x1xzA5XH%2BT8iEDMuaR9Ywzv0FZqFJZdaUK5jiIg%2FAuZUyMI2F4jDWflJjHI8O282tVNVxBYHEgZLu61z8YatHh5ePEoH5cYceSMBdrQsAWv7O8tpsSED%2BM9lJqJKtxBJIs76lhKscFZyz95SJ%2FvpWGRN7Nmzmi2nwDKRyrI791%2BFUV%2BMeJM%2B%2BkgRGtCk3RZSThVfV6OjBNQZRTf31rgWzlWJt%2FRdzEIIr6Kli%2FBGL%2BWbGJLSihU1sZ%2Bv%2FopK2r4mE19XbzIOsTXCbEqMuJLynpP5Zb%2BBDVYDNU7KXnTJ6hnJN2D484ihQ5iS%2FukiNa7D2WBvxa0oJkXtOUKjTh%2Fjkq%2B3jxWO78Ym6fFVTdaQZ9WCa2qgimqtyATLuru1Nh9ckCXmT06UmK5xkhLnQ3DiCjUvj4PbvExLzq%2BtPKSXeMuHC3fnc9CgcAbhb86X9gGAQiUtxEJtqRbHH65i3afvuSmNl7OoWRirpGu0XrSV7PQmPVQvTYdKOLjLtePZTh6zM%2FOMNzFr8IGOqUBzK%2BsGjMC7db5BgYGsaJcMW4Y4hDy4C51aSo%2FW%2Fh%2FIFvfhA7wTnEG%2B8jsrgRDDcXNTavpVT1xdZ9DgqIDWd1JtwZVS13Hfc%2BPEwejW%2F6T99N3iFqqQ8R0r4jtNhiPgwtmdzQhBFQ4TavncJBPmIl2zRHqKGgXdMvbnVCHhbYxjYdJcLlxuhab0%2BXkdyC9z5NNkJUVKLB9da3eRSXEPz01DkyM9vEm&X-Amz-Signature=d5f3ad580be202c409c79fc61bb5e5508376024d3b6d26879329d4bf6b46ba29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

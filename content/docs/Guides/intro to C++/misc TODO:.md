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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT67T6QU%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrjdTe9CqJlELLRB%2BzQULQMHybIbNN5v5jUOIbzxOdBAIhALtkB7lnoFXFVnrZNCPqtIvUs8yGE%2Blj1PlMMPOlUzdQKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPxJNca%2BKp6XKvvKIq3AP4xO5WyVt3QZSwzsHvY43QzwSIQ8aadioWMnomQV05ds42AVXmsB%2FNG0SnqcfG%2FDFpaG6ncTkI5za0n3frpQcHf%2FL1txzcSmjG%2FqavBftIOZUF4J42VU%2F1IZOZuV62vjakSF6hXQBfZi0iUXaKPhbAFfBu21AOIajKX2CnX6c6xZ5syUIUM9mJoWX4oldNjz20mEQDT421QMN5F2jJyuOA94NxvDP7Q9b%2B4LfjE4vyMNveSLSO6lPXtPO%2BWsVc8l2ZjBvWXcQN4uQFc%2BL8SskukbgSbLYwfruVA3pj1x9t99QGKh10SAQkZ1Os65M9T4a68EJL8evCt9JdGt9mxxjByBiNW2ryv6JKCx5nDHhyItj17abL6u%2BQUaRjgomV7mNXTXPvIvwj7HnY9kYS5vpRe%2FjR2V0ey%2B6cTUqFIFCfUUXk5W2GkWO1cmaYMBMC0%2BJpE0pEcQSg3eAJ19vr%2BV4ZXdS50OXywhLz7VF%2B5h4ClsUnIDEe9cGBEN8gAvTygWVRyCQnAtNEi10H5aHYtiJsi4jkBnENnvNLUbTEBabQnuQe9xZo9Uziv2RMHq4FsvJcz5NgrqCblltoq2Bn4olLqp0RN6g26ci5WrKBcRZu7%2Fw%2BtnQekZQV41svHDD%2Bxa3EBjqkAV9P%2BervzA%2BxRCBRsd0IHCpXrjILnUb02SoidbXXet%2FNBMaS%2FA78PXzRqW1meLAn55I5oO9y%2FcC%2FYQ8NAFUQD4vpng%2F%2BzQ6fhpQUzj8YxaYwK46wZxHvysrerP5YDQ0hOdR34kQvP9IWBSgQa%2FcxRUGm9qGUHUEsILEgUJMmXYXFSifE%2BXXQ4Amc8fO0s%2BQDJhE82Gl7LhNDC3gd3AA5nsNdMKYw&X-Amz-Signature=591353bc4b36935af10648b43ebf5e66d204ef5f560260dcdcebf5f5bbc073d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT67T6QU%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrjdTe9CqJlELLRB%2BzQULQMHybIbNN5v5jUOIbzxOdBAIhALtkB7lnoFXFVnrZNCPqtIvUs8yGE%2Blj1PlMMPOlUzdQKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPxJNca%2BKp6XKvvKIq3AP4xO5WyVt3QZSwzsHvY43QzwSIQ8aadioWMnomQV05ds42AVXmsB%2FNG0SnqcfG%2FDFpaG6ncTkI5za0n3frpQcHf%2FL1txzcSmjG%2FqavBftIOZUF4J42VU%2F1IZOZuV62vjakSF6hXQBfZi0iUXaKPhbAFfBu21AOIajKX2CnX6c6xZ5syUIUM9mJoWX4oldNjz20mEQDT421QMN5F2jJyuOA94NxvDP7Q9b%2B4LfjE4vyMNveSLSO6lPXtPO%2BWsVc8l2ZjBvWXcQN4uQFc%2BL8SskukbgSbLYwfruVA3pj1x9t99QGKh10SAQkZ1Os65M9T4a68EJL8evCt9JdGt9mxxjByBiNW2ryv6JKCx5nDHhyItj17abL6u%2BQUaRjgomV7mNXTXPvIvwj7HnY9kYS5vpRe%2FjR2V0ey%2B6cTUqFIFCfUUXk5W2GkWO1cmaYMBMC0%2BJpE0pEcQSg3eAJ19vr%2BV4ZXdS50OXywhLz7VF%2B5h4ClsUnIDEe9cGBEN8gAvTygWVRyCQnAtNEi10H5aHYtiJsi4jkBnENnvNLUbTEBabQnuQe9xZo9Uziv2RMHq4FsvJcz5NgrqCblltoq2Bn4olLqp0RN6g26ci5WrKBcRZu7%2Fw%2BtnQekZQV41svHDD%2Bxa3EBjqkAV9P%2BervzA%2BxRCBRsd0IHCpXrjILnUb02SoidbXXet%2FNBMaS%2FA78PXzRqW1meLAn55I5oO9y%2FcC%2FYQ8NAFUQD4vpng%2F%2BzQ6fhpQUzj8YxaYwK46wZxHvysrerP5YDQ0hOdR34kQvP9IWBSgQa%2FcxRUGm9qGUHUEsILEgUJMmXYXFSifE%2BXXQ4Amc8fO0s%2BQDJhE82Gl7LhNDC3gd3AA5nsNdMKYw&X-Amz-Signature=7e20389efd6b7c2323546d1c2bbbd7bce91d48b3780d939554e34275463031eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

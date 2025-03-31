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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXE7F3DF%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCOT3MTS7nBMFx3XEw2qOnzPwP1IJ8a%2Ft3%2BijVuyVjGsQIgbA5aTSP0U8h7KHx2fzL0%2F%2B7WkKYqHMQ2qeCeAYCrO8MqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNG89GLocuYp2VX9LCrcA2Qoz1ZlzeELxbayX%2FMuPbW97dmTZ8o%2BWpY8tJQow6QUbVJbUpxCmzHAPfSJkarVoZ0%2BMMuchTr0FHNqDtWAPmVVqqcyD6Z1XQSOAnBcwqAhOIUGKg7kckIq6l7WBSObwu1EWiiImp4SyiX84xz%2FWjD2DoGZfZ9%2F4z%2BOVcwwrglhw7A2lL2tbnJqooggeyXsrG3lepqUVUREQjgsCM%2FvBNt23RMZjdeQiITow5Cw9wte%2F3PRgvXp7FFX9JKB%2FmOBe3qk4rtQIPK%2FvLHt60neadZ%2BxJ0Qz57mN4TVAEgL21hHy8SWuYJ5z9nsHAeoruUcxK%2BRL%2Bt3XLrDa574p%2FadzAPtKvDsBqvYZlnOkuK5tIdXFIaWz3SNFM46%2F4LYU99inTNNZWgUGtqAkYhnHzixFyDTK4HelMBtqbxXuz25CcwbDflaVJKHSO3U6jvWHrJ9u7acpXDAPASqfCQh%2B2oIfDxNassAzQdsFgxBMQIiHXTEzACQL%2BGffU3ZQkuZa9r%2BDaftWFqG8aPyLpJJPf%2F5cjJUCMtlPYI2BxRQkZuK37vEVoO6RBW0FyEYFsJWiawXWwZJizWS68u3K9qCISilT6PRSBA3iU%2FjeHQJubGB%2B4Rbiw%2BtrnVe7lY%2Fp%2BcMMO7JqL8GOqUBPb8So6SQg1r174JhZQyaCIsCo4mZOk0g0d34dHt%2FpJIxeJlIHulUiDMV7yrz37GxX2%2BVIClnwh38zgSAtbnUxfdnhWIGGZZcJc5f%2FMGLG%2FTTKateqsxOGUjFaQtNk3Vg0Z%2BsHLJrRfZUKys4MkfINrLjaFkBtEu9X9BY1bjCD1K1GWjleeDsvNeXvkhO%2FHMUfOp1lg57v4R13MlFa9tTJ%2BsgO7wx&X-Amz-Signature=74a3408513bcf40a358503178771aaca626d22481b7f11aa6da4375fcdb37046&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXE7F3DF%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCOT3MTS7nBMFx3XEw2qOnzPwP1IJ8a%2Ft3%2BijVuyVjGsQIgbA5aTSP0U8h7KHx2fzL0%2F%2B7WkKYqHMQ2qeCeAYCrO8MqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNG89GLocuYp2VX9LCrcA2Qoz1ZlzeELxbayX%2FMuPbW97dmTZ8o%2BWpY8tJQow6QUbVJbUpxCmzHAPfSJkarVoZ0%2BMMuchTr0FHNqDtWAPmVVqqcyD6Z1XQSOAnBcwqAhOIUGKg7kckIq6l7WBSObwu1EWiiImp4SyiX84xz%2FWjD2DoGZfZ9%2F4z%2BOVcwwrglhw7A2lL2tbnJqooggeyXsrG3lepqUVUREQjgsCM%2FvBNt23RMZjdeQiITow5Cw9wte%2F3PRgvXp7FFX9JKB%2FmOBe3qk4rtQIPK%2FvLHt60neadZ%2BxJ0Qz57mN4TVAEgL21hHy8SWuYJ5z9nsHAeoruUcxK%2BRL%2Bt3XLrDa574p%2FadzAPtKvDsBqvYZlnOkuK5tIdXFIaWz3SNFM46%2F4LYU99inTNNZWgUGtqAkYhnHzixFyDTK4HelMBtqbxXuz25CcwbDflaVJKHSO3U6jvWHrJ9u7acpXDAPASqfCQh%2B2oIfDxNassAzQdsFgxBMQIiHXTEzACQL%2BGffU3ZQkuZa9r%2BDaftWFqG8aPyLpJJPf%2F5cjJUCMtlPYI2BxRQkZuK37vEVoO6RBW0FyEYFsJWiawXWwZJizWS68u3K9qCISilT6PRSBA3iU%2FjeHQJubGB%2B4Rbiw%2BtrnVe7lY%2Fp%2BcMMO7JqL8GOqUBPb8So6SQg1r174JhZQyaCIsCo4mZOk0g0d34dHt%2FpJIxeJlIHulUiDMV7yrz37GxX2%2BVIClnwh38zgSAtbnUxfdnhWIGGZZcJc5f%2FMGLG%2FTTKateqsxOGUjFaQtNk3Vg0Z%2BsHLJrRfZUKys4MkfINrLjaFkBtEu9X9BY1bjCD1K1GWjleeDsvNeXvkhO%2FHMUfOp1lg57v4R13MlFa9tTJ%2BsgO7wx&X-Amz-Signature=76f4debbbdc38567c2b20dfb10f259faa0efb224b297a6297a485de62361f9cc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

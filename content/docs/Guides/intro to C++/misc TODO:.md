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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VZULKH7%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T022256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCtsjvjqqyWQuyaHTNsb%2FaZ2mA5fK8MZ5aJP5OPBIDePwIgVixAefIQHwil9tv7evc%2F%2BIXfNNjIgej7zo%2FfSLDPlCoqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvslCp8GTVwpYUHlyrcA8M22RSymvcDM7V0f1QUN%2Bp6gUoZNJx%2FcmYvkIbYHtg2bn3O3AmBV160YqdPOhV1hUUn5LidDpu8BLh3Ew6nygLOFXvA0NRo6B5rieFNcBdvE7gEZifXiRyz%2BNlyOrqtM5pw6qT6kbUs09maDJGE6gWHBZWnDm5ol9LdSmGMec3mT%2BCxbThr%2F4AHqj6Cwtlc3iuUIyTkfQogn89h47RMI4DGtXCOKRk2JHDiRZk5aJMvLgU0sRKipZ9V1EnZIpMIkY87132A34WR6ChgiiYY9IaKhMBCj0yExjwz9DP04KrlNhaMmkIs6RqEiX3%2FTae2jkT1pja7Q%2FeKGojN%2FOTuC4TosGfFz0wL5xCyV2I7B1XKt%2FTwKGZLJl1fL2%2FJ2yx3ywEFp6q2SO1sAXWSoL%2F3hM8BlvAL%2Fuzbh9NX7HvB0bmXDLct2Ms5jy4RfzjI7QGHj4juze5%2Fr%2Fs7ETDtJ%2BJXnQjtdlK7AO87CXbzdg4qaIFERA1GTwCxweB%2Bsz2jSmFlrG8%2Fzmyoo2bFwiung7g%2F4lfCQHFZzjGqa90fRB24%2BhzbJ%2FEiFGO6uM0UP%2FT6NvRBpYntNTTTYygZ1QCs8v0NXuopfeXfZcb3lDgQR9ScGUOuRkhiDwZRbj0tAqdmMLKwpsAGOqUBTvc1w0yd5%2B1vIN2XtTnRQvADyU0h6HRtxZcnXx%2FJp8%2Frq%2FZBcAiDFM8MxTwY4ciGoCmG4F0dCMR%2B6fGekhpybSUSZk6PoEyfhVU2QShY8cuOgFkAOsT6EN9XNhXKabGfGgKdpGtVbt9pgQ3Nu%2BDSt5wQekS%2FvL3zoDP4x7Tfa5Kfxs%2BJF3ZaMwGSHOqJVK2B0E40osGx%2BBCPwFiLHQO%2FCLboFk7p&X-Amz-Signature=b25c0048456cb9ad2cbee87cc8d545c3c187629a29d9aa0cd6fd7097dfce2100&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VZULKH7%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T022256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCtsjvjqqyWQuyaHTNsb%2FaZ2mA5fK8MZ5aJP5OPBIDePwIgVixAefIQHwil9tv7evc%2F%2BIXfNNjIgej7zo%2FfSLDPlCoqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvslCp8GTVwpYUHlyrcA8M22RSymvcDM7V0f1QUN%2Bp6gUoZNJx%2FcmYvkIbYHtg2bn3O3AmBV160YqdPOhV1hUUn5LidDpu8BLh3Ew6nygLOFXvA0NRo6B5rieFNcBdvE7gEZifXiRyz%2BNlyOrqtM5pw6qT6kbUs09maDJGE6gWHBZWnDm5ol9LdSmGMec3mT%2BCxbThr%2F4AHqj6Cwtlc3iuUIyTkfQogn89h47RMI4DGtXCOKRk2JHDiRZk5aJMvLgU0sRKipZ9V1EnZIpMIkY87132A34WR6ChgiiYY9IaKhMBCj0yExjwz9DP04KrlNhaMmkIs6RqEiX3%2FTae2jkT1pja7Q%2FeKGojN%2FOTuC4TosGfFz0wL5xCyV2I7B1XKt%2FTwKGZLJl1fL2%2FJ2yx3ywEFp6q2SO1sAXWSoL%2F3hM8BlvAL%2Fuzbh9NX7HvB0bmXDLct2Ms5jy4RfzjI7QGHj4juze5%2Fr%2Fs7ETDtJ%2BJXnQjtdlK7AO87CXbzdg4qaIFERA1GTwCxweB%2Bsz2jSmFlrG8%2Fzmyoo2bFwiung7g%2F4lfCQHFZzjGqa90fRB24%2BhzbJ%2FEiFGO6uM0UP%2FT6NvRBpYntNTTTYygZ1QCs8v0NXuopfeXfZcb3lDgQR9ScGUOuRkhiDwZRbj0tAqdmMLKwpsAGOqUBTvc1w0yd5%2B1vIN2XtTnRQvADyU0h6HRtxZcnXx%2FJp8%2Frq%2FZBcAiDFM8MxTwY4ciGoCmG4F0dCMR%2B6fGekhpybSUSZk6PoEyfhVU2QShY8cuOgFkAOsT6EN9XNhXKabGfGgKdpGtVbt9pgQ3Nu%2BDSt5wQekS%2FvL3zoDP4x7Tfa5Kfxs%2BJF3ZaMwGSHOqJVK2B0E40osGx%2BBCPwFiLHQO%2FCLboFk7p&X-Amz-Signature=c77cd01e1ae5f385e242df3a15766407f5058f87ef99eee5fc5949ffdbd510b9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

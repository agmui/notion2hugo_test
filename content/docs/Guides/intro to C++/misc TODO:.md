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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K22HWRA%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBx3d0w4xoN2WHEXhxeK%2BmWdlHKZhvKxec4ZmEy%2FoRLnAiEA1Ew7D7TOgTTBY3uai0ZsNUMMiqu3jtDlxeSpFlftd6cqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7KNlPBQ9viXGLHlSrcA1KpZiV7itzK581enU%2B6oLUPlfVj4Unli%2B9UPAvOhKYIJr8RJvriuWde0VdlfgjP%2F6AsBc0vfRChlHl4f%2BgkHHRhCqdR9Bn6n7Bh3O5I9ooH%2BCZs%2FXHaU9jnQBQOt5SzIQQC3ClncPNDBa4V5FO7bPDDEO64SfL9P9gGpC7uKLt7head78C%2BX2Ir9S0Y0Kf6wf4OZ0jJdY5nlHbFuWdemJFT4hzkI3HeHpzaWBl1Qo34HUeQaJbcjIlyBga5yLtKITJmdozWXO8lxXBe%2BdWGRi7a0MjHKfrLkCJ29wjCWpJnuex15YJUCG4dCgOCuWNUPpPU70ZByD%2FPawTbUjGqNxWcppj1RZ%2Flcpte4UldkM3ybaYfXsZ5i804nxqf45rCbwZX3xLzl4RXZI1arQvDZyjxeTA%2BITgqhbEbBocR3dj8JqfNdJiHenrPDWue8qJthC7nbK01HdORVUcCu2iDCDec57xNj2QfRBoFUzQR6n4ethqVCFWffYjOLgB2J4C5U8190wg16OG%2FPrtVxnqpwbquGV3%2BhPwfuPS0lDU0CGJewvQzHKv%2FiZDyqb4MZIA4exPZ7l53XnKvYqnaq0e69vShRAcwjBEo%2BB19lzUVEt6IOE3N0v6HlKAG8Jb4ML%2B6nb4GOqUB3j0xn09ov8uiEY1cW6wCGDrP0wxn6KBbKuMfxRvJYw1744%2BlGT%2Fllg3OGdxzUHL7gbJmOy47wxVDrVULjlHEvNCL2Hxc1YpYirwMZCsTpw1316bQNXuWdyft66RFeIQpnzzMo1t%2F0kSNqYpulPj9BQl1weeb%2F8CivhyewX0jkAN%2Ba0%2FO9DuPVGlWHHV%2B45rHW1pIoSL2qrt9%2FC2jU0X%2BAyYBYYjF&X-Amz-Signature=6c03fa2ef72798398f7f3dc1d11d018bf40a700d36d52a203800cde7e8ff457d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K22HWRA%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBx3d0w4xoN2WHEXhxeK%2BmWdlHKZhvKxec4ZmEy%2FoRLnAiEA1Ew7D7TOgTTBY3uai0ZsNUMMiqu3jtDlxeSpFlftd6cqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7KNlPBQ9viXGLHlSrcA1KpZiV7itzK581enU%2B6oLUPlfVj4Unli%2B9UPAvOhKYIJr8RJvriuWde0VdlfgjP%2F6AsBc0vfRChlHl4f%2BgkHHRhCqdR9Bn6n7Bh3O5I9ooH%2BCZs%2FXHaU9jnQBQOt5SzIQQC3ClncPNDBa4V5FO7bPDDEO64SfL9P9gGpC7uKLt7head78C%2BX2Ir9S0Y0Kf6wf4OZ0jJdY5nlHbFuWdemJFT4hzkI3HeHpzaWBl1Qo34HUeQaJbcjIlyBga5yLtKITJmdozWXO8lxXBe%2BdWGRi7a0MjHKfrLkCJ29wjCWpJnuex15YJUCG4dCgOCuWNUPpPU70ZByD%2FPawTbUjGqNxWcppj1RZ%2Flcpte4UldkM3ybaYfXsZ5i804nxqf45rCbwZX3xLzl4RXZI1arQvDZyjxeTA%2BITgqhbEbBocR3dj8JqfNdJiHenrPDWue8qJthC7nbK01HdORVUcCu2iDCDec57xNj2QfRBoFUzQR6n4ethqVCFWffYjOLgB2J4C5U8190wg16OG%2FPrtVxnqpwbquGV3%2BhPwfuPS0lDU0CGJewvQzHKv%2FiZDyqb4MZIA4exPZ7l53XnKvYqnaq0e69vShRAcwjBEo%2BB19lzUVEt6IOE3N0v6HlKAG8Jb4ML%2B6nb4GOqUB3j0xn09ov8uiEY1cW6wCGDrP0wxn6KBbKuMfxRvJYw1744%2BlGT%2Fllg3OGdxzUHL7gbJmOy47wxVDrVULjlHEvNCL2Hxc1YpYirwMZCsTpw1316bQNXuWdyft66RFeIQpnzzMo1t%2F0kSNqYpulPj9BQl1weeb%2F8CivhyewX0jkAN%2Ba0%2FO9DuPVGlWHHV%2B45rHW1pIoSL2qrt9%2FC2jU0X%2BAyYBYYjF&X-Amz-Signature=a9131f8b7aac7de0f06ec699240fa278260591fa516676d5119a0a1645435140&X-Amz-SignedHeaders=host&x-id=GetObject)

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

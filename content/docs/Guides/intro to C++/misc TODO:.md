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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z77PUGC3%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T021651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDQckjx1igiaKSriXdNhUE1UTEvNgem0MlsFpbpgvouyAIgcIR98ZM2hyqTZiH87ovJoo9Ge5%2FB%2BhuFz7ylayzlTYYqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHYfOVtPeBgz6LnvMyrcA9lteB3KiA7%2FUwDuqi321%2Bh7%2FjGVqFJuyw0XOuTxGpZFtF%2BHtLo0X%2Fdx1Jf2XfRh%2F80qvt3rxjjz09%2BxO3OmmV%2FgLslUWaod03RXB73uoj5ijzUEY8qogsWmHeR3C5tHZNTafGtoklZ5f84DITqDlpLYo7kAz4MdB9ODMa8bQoi3SKQUqkgMkBDt12DifcJ4MMne5CKRB9KLudYiq0%2BMetfmmQsUQ9NF9XDaKbv9UvjvBbCEwRi9yDTeZbuJUFVrzemMy3qZE18UHvlL9mEff3EJbOJJ8HtDm5yV7yYPs4r1TyRIqaOHgkteVD3FdZwfVgkcRWo8QsF8TvaAVu9wyWsvvsueqtX9iiRcBLu0vAEeMup%2BV7VY0mtDpxzU1YHI5Lc5sO0V8jT2B%2FRFMViw4NU6KgionPBa%2FCOraMSB9Cijh47ETiLVGKxGXDVyntUCgtYXMAuBZuodgSG9ESHTRIVT5EkCvA4d5jEl6MYPGVjlhFOiTt%2BASGoRlOFUWp0%2BRbbOrodrMKRMRqYXT3pNLZiM9IcNnKnuNXzVt6SYXw1joICioTiT5wRyVZ5IoYbPbtigPy4B9Nln%2F5jbpjB6Jk%2B%2Bn3049GK4wYCFNV32RuUVBN4eIzQhN%2By3C1BoMMb2jr4GOqUB4AM4J7iYJ2I5f7Duu3w%2B8s5XIVH4tucLVw8W5UMaQgRpoi%2B94Jz%2BUl9f%2BIMrvOc5TruFSve4J79Rplwb88oXFMN0YX2zjUv0is1onaHES9b0N4Yhpc%2F9YF2XN7ozewGpRvHZbQ2Lqz7lx0uY4fA4KcUXwQNARkZqhSUf%2FK0IWWxkhQSKoWWi0omNN9BHA4PXY6lMeuSUwY%2F80zVfJALrjAVfjZZv&X-Amz-Signature=d50411c4f25e3d7ed69dbc74c90a990ad874db5c77bbb46bab1078b90b0adf14&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z77PUGC3%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T021651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDQckjx1igiaKSriXdNhUE1UTEvNgem0MlsFpbpgvouyAIgcIR98ZM2hyqTZiH87ovJoo9Ge5%2FB%2BhuFz7ylayzlTYYqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHYfOVtPeBgz6LnvMyrcA9lteB3KiA7%2FUwDuqi321%2Bh7%2FjGVqFJuyw0XOuTxGpZFtF%2BHtLo0X%2Fdx1Jf2XfRh%2F80qvt3rxjjz09%2BxO3OmmV%2FgLslUWaod03RXB73uoj5ijzUEY8qogsWmHeR3C5tHZNTafGtoklZ5f84DITqDlpLYo7kAz4MdB9ODMa8bQoi3SKQUqkgMkBDt12DifcJ4MMne5CKRB9KLudYiq0%2BMetfmmQsUQ9NF9XDaKbv9UvjvBbCEwRi9yDTeZbuJUFVrzemMy3qZE18UHvlL9mEff3EJbOJJ8HtDm5yV7yYPs4r1TyRIqaOHgkteVD3FdZwfVgkcRWo8QsF8TvaAVu9wyWsvvsueqtX9iiRcBLu0vAEeMup%2BV7VY0mtDpxzU1YHI5Lc5sO0V8jT2B%2FRFMViw4NU6KgionPBa%2FCOraMSB9Cijh47ETiLVGKxGXDVyntUCgtYXMAuBZuodgSG9ESHTRIVT5EkCvA4d5jEl6MYPGVjlhFOiTt%2BASGoRlOFUWp0%2BRbbOrodrMKRMRqYXT3pNLZiM9IcNnKnuNXzVt6SYXw1joICioTiT5wRyVZ5IoYbPbtigPy4B9Nln%2F5jbpjB6Jk%2B%2Bn3049GK4wYCFNV32RuUVBN4eIzQhN%2By3C1BoMMb2jr4GOqUB4AM4J7iYJ2I5f7Duu3w%2B8s5XIVH4tucLVw8W5UMaQgRpoi%2B94Jz%2BUl9f%2BIMrvOc5TruFSve4J79Rplwb88oXFMN0YX2zjUv0is1onaHES9b0N4Yhpc%2F9YF2XN7ozewGpRvHZbQ2Lqz7lx0uY4fA4KcUXwQNARkZqhSUf%2FK0IWWxkhQSKoWWi0omNN9BHA4PXY6lMeuSUwY%2F80zVfJALrjAVfjZZv&X-Amz-Signature=869ceb1934736c3aafe2e9896fb6c4c6afb00abeb2acc35ee7f4d87a5ec55df8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

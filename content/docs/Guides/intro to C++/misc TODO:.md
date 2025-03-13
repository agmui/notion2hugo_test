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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYKGXLGG%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnK7T560X9NrR1CCtbjtfIoHbnGe7H%2FlH6AxycvxI1XQIhAOo4I5G6g%2Bp50w4ByWVvyezDFRSYGDS7YPxeAPXrwDGTKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9Hvkln4jU6f%2BCJR0q3AOa9IwV1rXNzA0o1gMZvCZrsshB%2BPVySWvu08SyBXUogYZ8aY6G36X9Fr57N4t5%2Fs%2FriWW07Kwb75gFBcDYl2WZsyOPCaprZAS9ufbRcowTlu1csOyh8H%2F826kHvL1J0BK9gxBEjn0PbzBTQHA4ieqShLYliQacTlL9gHA50f4Z4qMpNU%2BbFWeVznueRYpVsaeIhrmhUJVf%2BZKtc4pcJGZsG6Z%2FmSqimAgX79py11J12WTUNvCjrNIwzOj6IN2onMkR6lEfxU06hwTowlJNhj7h7cTysUMWNRUEZdtfUcFiBYFNRThbQzHs1jLIiy1jCO315eAr8hsrtgd2BaJbsdgi%2BEI7rHeL8gxFi4c87XAt9Wbo0gkvqhTzRRYa7KtWX4Ulu2%2FZLC9AcI0mMbso3fUP%2B52dkSks1PtMtJ0EgidujdZDVihAxnvpYMIY204A1U12NnXP7sQXl6IMIkvTBhe2LZYCdw1h3dZb5SVBLKiaeJdxsra%2F0%2BT58iM%2FJHaCQQXFwHBt5kHqj4fLupr2MXN9Ntg4T25Ti1gvJQftTfbuHoW0FK1tr39N12S%2FzF0Pq3oHIhIZQAzUlXtFNFqxupeptU%2BGp0o2e%2BDuaTC%2BvlRzTT68NzPRJabd2vzwcDCv1cy%2BBjqkAZL5Y7FoqzxwAuCnDGgrd4I%2BwPYkRBjGtzEgHZptaQhf6I6jaQe2sqpg7iHOs2GkMA3MOHRi6itldBy9359oXClq6BLNehXVtyELCSAM9WH0cVoyaP9Hr4dpWw%2F1SH44l%2FvVZSJSC1p37kwYQ4s32FG88%2BJZj8CV14NdKVeJbVB0xmLt6UHynvCvafOarARZajVTG0pDg7wfK4%2F%2FJjRELXOMPDGl&X-Amz-Signature=d815593b875346ee9efda8d19019501bad813bb79713c6d80d2850fe02c52351&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYKGXLGG%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnK7T560X9NrR1CCtbjtfIoHbnGe7H%2FlH6AxycvxI1XQIhAOo4I5G6g%2Bp50w4ByWVvyezDFRSYGDS7YPxeAPXrwDGTKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9Hvkln4jU6f%2BCJR0q3AOa9IwV1rXNzA0o1gMZvCZrsshB%2BPVySWvu08SyBXUogYZ8aY6G36X9Fr57N4t5%2Fs%2FriWW07Kwb75gFBcDYl2WZsyOPCaprZAS9ufbRcowTlu1csOyh8H%2F826kHvL1J0BK9gxBEjn0PbzBTQHA4ieqShLYliQacTlL9gHA50f4Z4qMpNU%2BbFWeVznueRYpVsaeIhrmhUJVf%2BZKtc4pcJGZsG6Z%2FmSqimAgX79py11J12WTUNvCjrNIwzOj6IN2onMkR6lEfxU06hwTowlJNhj7h7cTysUMWNRUEZdtfUcFiBYFNRThbQzHs1jLIiy1jCO315eAr8hsrtgd2BaJbsdgi%2BEI7rHeL8gxFi4c87XAt9Wbo0gkvqhTzRRYa7KtWX4Ulu2%2FZLC9AcI0mMbso3fUP%2B52dkSks1PtMtJ0EgidujdZDVihAxnvpYMIY204A1U12NnXP7sQXl6IMIkvTBhe2LZYCdw1h3dZb5SVBLKiaeJdxsra%2F0%2BT58iM%2FJHaCQQXFwHBt5kHqj4fLupr2MXN9Ntg4T25Ti1gvJQftTfbuHoW0FK1tr39N12S%2FzF0Pq3oHIhIZQAzUlXtFNFqxupeptU%2BGp0o2e%2BDuaTC%2BvlRzTT68NzPRJabd2vzwcDCv1cy%2BBjqkAZL5Y7FoqzxwAuCnDGgrd4I%2BwPYkRBjGtzEgHZptaQhf6I6jaQe2sqpg7iHOs2GkMA3MOHRi6itldBy9359oXClq6BLNehXVtyELCSAM9WH0cVoyaP9Hr4dpWw%2F1SH44l%2FvVZSJSC1p37kwYQ4s32FG88%2BJZj8CV14NdKVeJbVB0xmLt6UHynvCvafOarARZajVTG0pDg7wfK4%2F%2FJjRELXOMPDGl&X-Amz-Signature=57829c159e150eed8e9df647ba1297d6bd575fdad1b92d91e371b6358c0a59cc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

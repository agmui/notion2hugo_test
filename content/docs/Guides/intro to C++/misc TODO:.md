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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RYGZYNB%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T004013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIGbaHpQY5cHxEQkAdgkixwew1E7gh57DxaeTmJev%2B%2Fv9AiEA%2FWFpCJqSADGJfXk%2FGhvJ3fG1Z4LHFAXPH8vnzQ5flQAqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaBrf4vGwo9DtaOZircA374saEDVlNKYixjG6EDCYVPR5ErVezeI%2FmBtVlOis9JUNQyKt6RYQY5YE4roFSdWR%2Fl7aGn02igaqg%2FcZyCDFsRrQ2CrxCnPVEO3gZVrHEFg5fpMFrFN8NRr8Bd0fahU2uqXWxNW%2FpVIAi9bvOvviponaWlKvVT2y6T1oD%2B%2F8IJE6TdG18s4zMAnX4huKjs5WGVSxt0LngkePqXjndZz36EA9MDM2DuOipDUJdMDXapTVJmuzD8uo5d24WWVPo5K%2F6N4r%2BP0kjI0z8etKse5Y7YYoY9n29D5JylANvD6zkuYC%2B85UBOKf0w0UlKMLcbYqwpmDA%2FpJG7PGLJcopBGhPR9tshbCdUX44rdmEfeLqrz6fe2OeA4scD6DvZIewPkiwWSB9bIUdt%2BCfTQPEVNmlGAhkkTdL%2FwDTRyVAtnQQGTfTva6fPOIAt5MMYVE5foRsz8idxWtoAz8Hw2uWFXvE2mZ9MuVqo0vzPrsQVIuKmCO80AS80ugD6dW090lhfGsnLILLGp8kYnhJObjLwzcmQ4ayfRnNSs5WxkH53W968mBU%2B6cDhaBUAxRwUbOUyVdpX40KkdsHe7xIskPVX1Zl5YOGlQLMAQq945IaIlbgmrsZAGKgcAtygx5uWMKqFib4GOqUBE5EG4%2FY8bP9I0NM3CcyJL4RjSpWGxUvZSrV4LllpaJi%2FBbiR2q%2BtaR6O%2FNMAOuKVRQuXFI0HUa%2BXHKDRZPHcQM19z02KJ2ZehIzkGjRT8vdf%2BlPLcsFDfk%2B0jymcZFUS%2Br4bzIdwM2FXhvr1bea3htdE3oxhQwf9MYXK5woV%2B2jIZ0hKpbG9pORu2JPFXiswasHK%2BOuS2r6vWM6vz8GWP6pOkhCV&X-Amz-Signature=dff7cd8415cf6d5ae4f29738295171d06e06dba01de2612ee4f2302b6af79f3b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RYGZYNB%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T004013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIGbaHpQY5cHxEQkAdgkixwew1E7gh57DxaeTmJev%2B%2Fv9AiEA%2FWFpCJqSADGJfXk%2FGhvJ3fG1Z4LHFAXPH8vnzQ5flQAqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaBrf4vGwo9DtaOZircA374saEDVlNKYixjG6EDCYVPR5ErVezeI%2FmBtVlOis9JUNQyKt6RYQY5YE4roFSdWR%2Fl7aGn02igaqg%2FcZyCDFsRrQ2CrxCnPVEO3gZVrHEFg5fpMFrFN8NRr8Bd0fahU2uqXWxNW%2FpVIAi9bvOvviponaWlKvVT2y6T1oD%2B%2F8IJE6TdG18s4zMAnX4huKjs5WGVSxt0LngkePqXjndZz36EA9MDM2DuOipDUJdMDXapTVJmuzD8uo5d24WWVPo5K%2F6N4r%2BP0kjI0z8etKse5Y7YYoY9n29D5JylANvD6zkuYC%2B85UBOKf0w0UlKMLcbYqwpmDA%2FpJG7PGLJcopBGhPR9tshbCdUX44rdmEfeLqrz6fe2OeA4scD6DvZIewPkiwWSB9bIUdt%2BCfTQPEVNmlGAhkkTdL%2FwDTRyVAtnQQGTfTva6fPOIAt5MMYVE5foRsz8idxWtoAz8Hw2uWFXvE2mZ9MuVqo0vzPrsQVIuKmCO80AS80ugD6dW090lhfGsnLILLGp8kYnhJObjLwzcmQ4ayfRnNSs5WxkH53W968mBU%2B6cDhaBUAxRwUbOUyVdpX40KkdsHe7xIskPVX1Zl5YOGlQLMAQq945IaIlbgmrsZAGKgcAtygx5uWMKqFib4GOqUBE5EG4%2FY8bP9I0NM3CcyJL4RjSpWGxUvZSrV4LllpaJi%2FBbiR2q%2BtaR6O%2FNMAOuKVRQuXFI0HUa%2BXHKDRZPHcQM19z02KJ2ZehIzkGjRT8vdf%2BlPLcsFDfk%2B0jymcZFUS%2Br4bzIdwM2FXhvr1bea3htdE3oxhQwf9MYXK5woV%2B2jIZ0hKpbG9pORu2JPFXiswasHK%2BOuS2r6vWM6vz8GWP6pOkhCV&X-Amz-Signature=76db44ee8293cfed83668d1f3737f419f81ef152fb02f79054310398b76b0e03&X-Amz-SignedHeaders=host&x-id=GetObject)

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

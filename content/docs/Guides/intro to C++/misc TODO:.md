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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VJXPSSU%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T081118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKHULj4wS%2Bwks3fvj85G8H0GuXGtZ%2Fjh9eWGvavgTQ0QIhAJZxplnZ%2BeODuJ625kYazgRQEvmh%2BOSuiph4CyrzUpQlKv8DCFgQABoMNjM3NDIzMTgzODA1IgywHK9P51wBR4%2BirPkq3ANky4y%2FrTStY8NqZoMBXoGHqXsaSBcCiiytFdHdWrYf43BZC1Y%2B9mdG1ttKpuELlCF4Z7js0%2FAnwoAlTTK1N7IwjlxRlZVywjhSGfNVG1L%2F4OyJdHMJvOaICmJfXetTXRPevuoOy%2FJbD5p%2BvU%2FnVIdc2nxHz1rh2amJ4jf46ssJWPO3qwg1yKIKlrB5SUvVhPeIqX4%2B%2Fs5jvn6dShQgzR5m7WuWWychOl6NhOPEYGQ2lXyJD%2FpZVhXLdfQ5JqNz5ExT8qt4NXtxmE2A6NIBlyC9Fwhe15G%2FKNt%2BXN6eOo98wfKK%2BEuEwdaEmdtFAFX50nqb4%2BcCgg4On08GTAdaaQL1oMFDytsP8smvf%2BMi77SnI2zBK9ooJ%2BRYIRAemeIsXPwdQXKkvfYSsWs1PyL2tUUpj6MnxH9BwTlwEUmRZwdJ1EGDbReEetRdN9ad%2FtY0hfyUobPxEkfNvN5Ug%2BGZfJApNisz%2B7fD3mljlDJexG7e2luqON7RTyxagdioLGvW%2B%2FPGzAHcVUEcqfOY6iVm5EBzIHt%2BZlbqiv9QTRkbWj28O9F%2FKUryfCoBCsIA2Fs6noj9%2FEZu6cxwS5JkmAEZdNIy5uVVwSQNFKhx%2BXCeUV%2BLLOWLIYZBM6Gf1dDCuzCituS%2BBjqkAe9nCeAP2uvEVrWqwwkXH23CpiXDyeFy%2BND0qiwMWaSy%2BwtVtn40Rn2LkukD571O6X7XGtbUsoEq2A%2FMLlLU2thLGxAiJfPtYL5Qk3hku1%2FrDKYnQCJ9T2BZBa1zoQl9L82zcHeDyk3wi%2Bm3mQaZe9%2Fv1VQAoORKx8qXxykWmmT2zVFjEWCLH0VhxfBu9U%2BBt95lo88DYAClz5O4x7rEmoShYvC8&X-Amz-Signature=b645e116339d9dcccbb4e735fda06e8c70c05d274ccdea88fbacf6971f895b65&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VJXPSSU%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T081117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKHULj4wS%2Bwks3fvj85G8H0GuXGtZ%2Fjh9eWGvavgTQ0QIhAJZxplnZ%2BeODuJ625kYazgRQEvmh%2BOSuiph4CyrzUpQlKv8DCFgQABoMNjM3NDIzMTgzODA1IgywHK9P51wBR4%2BirPkq3ANky4y%2FrTStY8NqZoMBXoGHqXsaSBcCiiytFdHdWrYf43BZC1Y%2B9mdG1ttKpuELlCF4Z7js0%2FAnwoAlTTK1N7IwjlxRlZVywjhSGfNVG1L%2F4OyJdHMJvOaICmJfXetTXRPevuoOy%2FJbD5p%2BvU%2FnVIdc2nxHz1rh2amJ4jf46ssJWPO3qwg1yKIKlrB5SUvVhPeIqX4%2B%2Fs5jvn6dShQgzR5m7WuWWychOl6NhOPEYGQ2lXyJD%2FpZVhXLdfQ5JqNz5ExT8qt4NXtxmE2A6NIBlyC9Fwhe15G%2FKNt%2BXN6eOo98wfKK%2BEuEwdaEmdtFAFX50nqb4%2BcCgg4On08GTAdaaQL1oMFDytsP8smvf%2BMi77SnI2zBK9ooJ%2BRYIRAemeIsXPwdQXKkvfYSsWs1PyL2tUUpj6MnxH9BwTlwEUmRZwdJ1EGDbReEetRdN9ad%2FtY0hfyUobPxEkfNvN5Ug%2BGZfJApNisz%2B7fD3mljlDJexG7e2luqON7RTyxagdioLGvW%2B%2FPGzAHcVUEcqfOY6iVm5EBzIHt%2BZlbqiv9QTRkbWj28O9F%2FKUryfCoBCsIA2Fs6noj9%2FEZu6cxwS5JkmAEZdNIy5uVVwSQNFKhx%2BXCeUV%2BLLOWLIYZBM6Gf1dDCuzCituS%2BBjqkAe9nCeAP2uvEVrWqwwkXH23CpiXDyeFy%2BND0qiwMWaSy%2BwtVtn40Rn2LkukD571O6X7XGtbUsoEq2A%2FMLlLU2thLGxAiJfPtYL5Qk3hku1%2FrDKYnQCJ9T2BZBa1zoQl9L82zcHeDyk3wi%2Bm3mQaZe9%2Fv1VQAoORKx8qXxykWmmT2zVFjEWCLH0VhxfBu9U%2BBt95lo88DYAClz5O4x7rEmoShYvC8&X-Amz-Signature=da605675f03370a748cce018236fb6201a6a727ee220078a03c5f866c7abb3a2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

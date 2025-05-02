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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3Q7RHNE%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T022414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDGAM70rHxplZA6Nugcqtt4Yo2ie2xFv1%2F%2FgS8uoDq61AIgW5TMX59TR3M8cK1nOviEJHNfSJxnxJ3ZmInwCpjgpVwqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPzlDEMkhBtgk6EU4ircA8D8E4VzsS2kTYjLnD5yX70EH%2FAGF8P4tanpPUIvSFd9E5LRQwnCKiQLFaDcLog656AAf2jlDfeKMmfRcBIRl73ATss6mXUE0aXR%2FtOhIvp0sYxDrjdyNLN%2BZOuOoXPSmwZ8Q8kiJQrISSkUNbKpEEpj2ACuA4iWO6onqRyayepj%2FORuo0P9EBmb%2FNNPY7VK7kQ5TfbkQ8l7n61YQDZEzmqGLpJFsCk4dIfHPZnClI1m4HpHm3tjU96u9282KFNkh1qanf6UhLiNk%2FlYqeIO6CqXIsAkCBxcbtmwAdmYY6gyRmWzzGdMcZW32GJKObRqo9lJoPSny4fEy6NYlJYuPOwWg5UM5cukOa1obLLLpkJE4peaIEswY4L0lcPh2MzUjvPPMBvUPekBg6IQjsK5ZO6278UysuUM0b07MW1WlviH46LkMtwtMU%2FyJ0vLpMt0Ly9vZAfM%2BbsURuonY3%2BDHH7BuhDr%2FHWfxC3NoLacoUtUjYoIfIebT2treNml2ezZ0PO3IOJwgzLgrUeEvkD%2Bk0pDx1DBKtAONYFRZd9CGiObq0sdjUatGQSu4VBUQAAyADoX%2Bzn800BIwz5k7u60Udu0KqHoFSbMeDKVeu3U5Hiv82RJAOa798%2FKaMj0MNzQ0MAGOqUBg2Yrs4fyCvNAc1JjBaly1CdfUMVE%2FpjWo9iUtbibKi2khQx0VxHzAMwkFhow%2BPkle1Lia35ATYvdj1LKwZdbiYp1HrVMf%2FNhLbrA%2BcR9OxNrUPFGZBCU4eksTL6ixMVjcCArfyh1ArcLXXSMbERNu6WFUlHj0l%2FZLM21iW0CdXYiiX7%2BB0ijnczCY26lyztwIV%2FKRJu8wwtBrogZLo1fJlsnEETx&X-Amz-Signature=18dbf8c200929fa40da46cc08cd7d43b67df52d2703168a2779a75067b22e4d7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3Q7RHNE%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T022414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDGAM70rHxplZA6Nugcqtt4Yo2ie2xFv1%2F%2FgS8uoDq61AIgW5TMX59TR3M8cK1nOviEJHNfSJxnxJ3ZmInwCpjgpVwqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPzlDEMkhBtgk6EU4ircA8D8E4VzsS2kTYjLnD5yX70EH%2FAGF8P4tanpPUIvSFd9E5LRQwnCKiQLFaDcLog656AAf2jlDfeKMmfRcBIRl73ATss6mXUE0aXR%2FtOhIvp0sYxDrjdyNLN%2BZOuOoXPSmwZ8Q8kiJQrISSkUNbKpEEpj2ACuA4iWO6onqRyayepj%2FORuo0P9EBmb%2FNNPY7VK7kQ5TfbkQ8l7n61YQDZEzmqGLpJFsCk4dIfHPZnClI1m4HpHm3tjU96u9282KFNkh1qanf6UhLiNk%2FlYqeIO6CqXIsAkCBxcbtmwAdmYY6gyRmWzzGdMcZW32GJKObRqo9lJoPSny4fEy6NYlJYuPOwWg5UM5cukOa1obLLLpkJE4peaIEswY4L0lcPh2MzUjvPPMBvUPekBg6IQjsK5ZO6278UysuUM0b07MW1WlviH46LkMtwtMU%2FyJ0vLpMt0Ly9vZAfM%2BbsURuonY3%2BDHH7BuhDr%2FHWfxC3NoLacoUtUjYoIfIebT2treNml2ezZ0PO3IOJwgzLgrUeEvkD%2Bk0pDx1DBKtAONYFRZd9CGiObq0sdjUatGQSu4VBUQAAyADoX%2Bzn800BIwz5k7u60Udu0KqHoFSbMeDKVeu3U5Hiv82RJAOa798%2FKaMj0MNzQ0MAGOqUBg2Yrs4fyCvNAc1JjBaly1CdfUMVE%2FpjWo9iUtbibKi2khQx0VxHzAMwkFhow%2BPkle1Lia35ATYvdj1LKwZdbiYp1HrVMf%2FNhLbrA%2BcR9OxNrUPFGZBCU4eksTL6ixMVjcCArfyh1ArcLXXSMbERNu6WFUlHj0l%2FZLM21iW0CdXYiiX7%2BB0ijnczCY26lyztwIV%2FKRJu8wwtBrogZLo1fJlsnEETx&X-Amz-Signature=aa88e65e51f4003c4f778626ec28752a580f84a06fd0d82f4eec839d51773d8b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

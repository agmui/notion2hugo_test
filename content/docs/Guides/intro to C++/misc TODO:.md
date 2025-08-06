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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B4ZZD27%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDqqjH6ksu9hsun6vR05Cip5D2fRb8kaSWx3e2ZrCW7NgIhALDSSJ9cjjbm29g7zXCWZskxYewtHzR38sI%2B64Nd%2B5fGKv8DCHUQABoMNjM3NDIzMTgzODA1IgwngCz%2B8P7bhkxx4iYq3AMl29%2BnKVJsNYmANjUkaib2t1jmwr97LYkF5h7X2xYvzVutZOZfAK%2BMgn0EICsNAK5SWLjHJqDQHbaq57lt1VEUWGVCGKJVLT2hmOlSQgrW2IwRQYtl2Pkhr%2FbyaW9Ei1%2BGmHxg7qZ5nKeJA0UPEiqVltbDtPXJeQLabSMQyKrlvPFJXBone0kJnE6pSWqSXikOY8GJyceraN6Kg%2By5eW8kikqwo8PbUXk5WLyeA%2BvmjkK6KX9Rbnl3gd6Orq8TD1LPilvl9Zba3caFN7Ft4E9V7%2BeJbTl0FxkBihxx4BVGBgwIEN%2FMdPQ2gXVfeigPs7tw3MD6d4MiwDt9i8dmlRHjV5ETSKxYNU2ONgNXdCfm8ierDoQ85FeoGBKTreqlPp6qsjDxh7OpWbZUJXMzK0FIaPX0K3NN3pgbXa92jkAo%2B8GfDBxJH3AW%2F3cLC6yriOvmCrfDX8eNjPp2eTiXw12QuQ7NnfCwoHT61Q6Cwqstk6Qa3yxIOPSUExBGPtcY80kZlokEwQPyIUYgt5C22tWIUPh2NvRj%2FkXICF5xQHfc%2B2lIKcsviES4gAMYfXxXdtw%2Fl9xCbc%2F%2BzM3QNLMOi%2BimLby9CQEaa7DYem%2FRFb%2BB0PAJgeOODPkgDUU5GjDGhM3EBjqkAXos%2BKGaf6kEITMmp7ii7LcloyL0Tfl5cysfa%2BdAXW1FtPJ6H8WQhF9HjTaxLRpEF6%2Fd4mmbFA0p%2FNpy2olFEjh8tIrYbmYvJQjjM5XdA1Qa%2B39%2BE0bO3LR6SrUjrHojaRjl3TaMNaOtze1HTgyiiHg0zP3%2FZgAPU6%2BgmMs2nW27zTzPBnyAU6bmZpJ0inHOHPOE8fO4qA9pT9oGZ1VpUh%2FGh1JE&X-Amz-Signature=ecff61315bec40a42f4b92fc7fb61a298f36c7464c735193d77e02caecb46b3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B4ZZD27%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDqqjH6ksu9hsun6vR05Cip5D2fRb8kaSWx3e2ZrCW7NgIhALDSSJ9cjjbm29g7zXCWZskxYewtHzR38sI%2B64Nd%2B5fGKv8DCHUQABoMNjM3NDIzMTgzODA1IgwngCz%2B8P7bhkxx4iYq3AMl29%2BnKVJsNYmANjUkaib2t1jmwr97LYkF5h7X2xYvzVutZOZfAK%2BMgn0EICsNAK5SWLjHJqDQHbaq57lt1VEUWGVCGKJVLT2hmOlSQgrW2IwRQYtl2Pkhr%2FbyaW9Ei1%2BGmHxg7qZ5nKeJA0UPEiqVltbDtPXJeQLabSMQyKrlvPFJXBone0kJnE6pSWqSXikOY8GJyceraN6Kg%2By5eW8kikqwo8PbUXk5WLyeA%2BvmjkK6KX9Rbnl3gd6Orq8TD1LPilvl9Zba3caFN7Ft4E9V7%2BeJbTl0FxkBihxx4BVGBgwIEN%2FMdPQ2gXVfeigPs7tw3MD6d4MiwDt9i8dmlRHjV5ETSKxYNU2ONgNXdCfm8ierDoQ85FeoGBKTreqlPp6qsjDxh7OpWbZUJXMzK0FIaPX0K3NN3pgbXa92jkAo%2B8GfDBxJH3AW%2F3cLC6yriOvmCrfDX8eNjPp2eTiXw12QuQ7NnfCwoHT61Q6Cwqstk6Qa3yxIOPSUExBGPtcY80kZlokEwQPyIUYgt5C22tWIUPh2NvRj%2FkXICF5xQHfc%2B2lIKcsviES4gAMYfXxXdtw%2Fl9xCbc%2F%2BzM3QNLMOi%2BimLby9CQEaa7DYem%2FRFb%2BB0PAJgeOODPkgDUU5GjDGhM3EBjqkAXos%2BKGaf6kEITMmp7ii7LcloyL0Tfl5cysfa%2BdAXW1FtPJ6H8WQhF9HjTaxLRpEF6%2Fd4mmbFA0p%2FNpy2olFEjh8tIrYbmYvJQjjM5XdA1Qa%2B39%2BE0bO3LR6SrUjrHojaRjl3TaMNaOtze1HTgyiiHg0zP3%2FZgAPU6%2BgmMs2nW27zTzPBnyAU6bmZpJ0inHOHPOE8fO4qA9pT9oGZ1VpUh%2FGh1JE&X-Amz-Signature=2dc50ac55351c39b7451a1377c0a5faa03f16d5a82d2f0a25c36d33595f6e416&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

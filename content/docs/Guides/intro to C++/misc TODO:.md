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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPZ6ES64%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T050951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIFj3kbdOm8TD7%2BBs8BqXoS2AEC%2FFD49Vg05xCXJFK792AiEArL8ng14pU4F2foyX9L4HT0HIl8xXMDFazw52FOdOd2Aq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDCYsP0VcvA8%2BJv4oESrcA%2BeZVwNuaY788tnialir4UbACY5NQ15CPXKr6RveZqQRSDF0zbMABZVHbcjuh7EOUgGYHlgZ0BH8dlZkIrarBzxnMRmvWH8Pl3S7BEAyAL0TATCNt6JGguiGd7bXdV1vz5byQatQf8ptus99QucbyhnG7puWzfAvSpEwHDMafT2AR0PAhs94wRJnkp8uWr1PmNHHVcXXLXFbODVpoNQWr3ToCwpzYtJkG5dThrrOKBk5ONnDFx%2BA5UlwvIIFiu3AYTcdHy%2BaNh9XGxnxPya%2F2uA%2FXkngB7EOMxc02RZFxd9UyCfZPYQak2b4QIssLIccfy6mk%2BYpSc3ZwglwMd%2FQXbJnHbeMQZk73cuLpmGmPjqJP%2BhlMK7LKAQU3NHOJo4Huhqnain%2F3JzhaXDZpr2fAIIGnUobWMiIASUrd0ThsGlC6kcgrse3sg3V9i8v8yoJywhJukMjiFzuvAXGRv0GJyHcI9UjbZgzH7qG1nGhPSepJb%2FQDpqgX%2FJxfHIM8Om6iCk9xAqxbnubTtpplLoP6RLohMrxrTEE0I131YF%2FMXSY3EMUpsoPLFnnrBpS79Z%2BIzZGfpxr40e2J40qjqDP6ldBMgePHxF24xcFNfO7RD0Hcvbpra2MEie6%2Fy7sMMWI%2F8EGOqUBbmCw6%2FzknZdwHpAK8nPieg%2B7GvxjWmmclmPJh4rfaFqz8lAAC%2F75iX7fnxafCIyFPbgjXlNt%2B3iEr36KjQf652Xee25LPgRhKljC0bNrQf0B3zg%2B8axnW60BZJoDWMAZenUK5LLPOq05dg4UlCbxXl7TAKU6p1lmYr48VUZJVPhtgCX6%2BPEETdgpu3BwZFsNdVwYjHRh5WgzCWbL1duCqCZGCbAl&X-Amz-Signature=afdce0b1e9c4c70cb8bfa759fa7365db851c4c9165e833e569337c1a34da0d9c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPZ6ES64%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T050951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIFj3kbdOm8TD7%2BBs8BqXoS2AEC%2FFD49Vg05xCXJFK792AiEArL8ng14pU4F2foyX9L4HT0HIl8xXMDFazw52FOdOd2Aq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDCYsP0VcvA8%2BJv4oESrcA%2BeZVwNuaY788tnialir4UbACY5NQ15CPXKr6RveZqQRSDF0zbMABZVHbcjuh7EOUgGYHlgZ0BH8dlZkIrarBzxnMRmvWH8Pl3S7BEAyAL0TATCNt6JGguiGd7bXdV1vz5byQatQf8ptus99QucbyhnG7puWzfAvSpEwHDMafT2AR0PAhs94wRJnkp8uWr1PmNHHVcXXLXFbODVpoNQWr3ToCwpzYtJkG5dThrrOKBk5ONnDFx%2BA5UlwvIIFiu3AYTcdHy%2BaNh9XGxnxPya%2F2uA%2FXkngB7EOMxc02RZFxd9UyCfZPYQak2b4QIssLIccfy6mk%2BYpSc3ZwglwMd%2FQXbJnHbeMQZk73cuLpmGmPjqJP%2BhlMK7LKAQU3NHOJo4Huhqnain%2F3JzhaXDZpr2fAIIGnUobWMiIASUrd0ThsGlC6kcgrse3sg3V9i8v8yoJywhJukMjiFzuvAXGRv0GJyHcI9UjbZgzH7qG1nGhPSepJb%2FQDpqgX%2FJxfHIM8Om6iCk9xAqxbnubTtpplLoP6RLohMrxrTEE0I131YF%2FMXSY3EMUpsoPLFnnrBpS79Z%2BIzZGfpxr40e2J40qjqDP6ldBMgePHxF24xcFNfO7RD0Hcvbpra2MEie6%2Fy7sMMWI%2F8EGOqUBbmCw6%2FzknZdwHpAK8nPieg%2B7GvxjWmmclmPJh4rfaFqz8lAAC%2F75iX7fnxafCIyFPbgjXlNt%2B3iEr36KjQf652Xee25LPgRhKljC0bNrQf0B3zg%2B8axnW60BZJoDWMAZenUK5LLPOq05dg4UlCbxXl7TAKU6p1lmYr48VUZJVPhtgCX6%2BPEETdgpu3BwZFsNdVwYjHRh5WgzCWbL1duCqCZGCbAl&X-Amz-Signature=4cecae61c04fa8407b3c7ea54277144484b1154cbc79fb80a54470dff4e6e78c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

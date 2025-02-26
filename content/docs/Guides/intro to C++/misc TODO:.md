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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626D35W36%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T061157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIAZzpJuH5nzdehduZ4GQmymGk5Z%2FYdCUkn4i3sH7jbQ5AiEAyHcK6zp0TztVoUKZkrichNqwAy13FYV2qIFK2tta3UUq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDN0t3bXdV%2FMOo0ZL8SrcAyw9QHFWCgn7QWF1r%2FXjZkidn2PNcYh08fiMh7CheOcVbvW3Gv1L5vcjTFJP8yQlj1Ni%2F275k%2F8GBC%2FZTxIsaWMBkeQNnkGXeS6UgnorGqVyPpZ07wmOjI8SD5U%2B0Mh7pwVJvZ37F4NvKlKmOkZPRiKiakPVWZvaux8YCwiP9cux0Zn7IhmpyehzlFPQbCa52pjvxw9DoaTyOMLJ6uLTVPvA4uxNtxKuLBnYBkpUQsNIrKY8293w04DIwZr1CyjK1SdQkahLCZUEhhVvPRMpWfvmAS7A%2B8n%2FbuYv5YgVdSTESetDNRXtHwxi6wcPK9P7i0pwGpv%2FroFVle6OdJf03UCSaK%2Brgv34aJolrTynk27yyMLqIdv7SRfzNvLtLpBpG5dknplF3%2FQmJKB4u%2BTwInninGQ1BOoTPjXZLJwdFgWOP43JsZbUIPL1njf6RgIzZvYNS0ACShMarJfsjDo5Kimb1Yx3jMbbWlPwkLdk13TnrqA%2FoAJLINPzMBkvowO13%2FxWJdZjJVz7UsH6xxTrQ2gPDyfMkbQeTlxsG%2BN0czGbysO1mojt%2Fyt7dHDEBvmJhz00nN3R4JGbc%2Bhiy7IczcO%2BZIVdGH3XBtYzeDgg0zQ1mlXzz%2B0A7m3CyuW%2BMKf%2B%2Bb0GOqUBf%2BLKb8ByAcdY%2BYPc1%2F4sd6Z8EFlXntH55IQ6scB3e0r4h6xYHt1zrNQ0Wfklw6aLC6IB5jL2bLh8abASCzlfXg2eT4fRDzUc%2B2wMMxcxguVws8DtIx40r8KrqYcIRteN9hW4WtdzCkXs%2BBrTMkmVlQy%2FtORCSVHXqu3kycM0mshtDkpWZm5CVUXvEDILkgS5ZbV4fK%2BjUIvJtu5U0RoY1n1lLNMv&X-Amz-Signature=604cff700184f9c9a3d0928a450106369a9719b62ce65a58b11646066b8174d7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626D35W36%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T061157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIAZzpJuH5nzdehduZ4GQmymGk5Z%2FYdCUkn4i3sH7jbQ5AiEAyHcK6zp0TztVoUKZkrichNqwAy13FYV2qIFK2tta3UUq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDN0t3bXdV%2FMOo0ZL8SrcAyw9QHFWCgn7QWF1r%2FXjZkidn2PNcYh08fiMh7CheOcVbvW3Gv1L5vcjTFJP8yQlj1Ni%2F275k%2F8GBC%2FZTxIsaWMBkeQNnkGXeS6UgnorGqVyPpZ07wmOjI8SD5U%2B0Mh7pwVJvZ37F4NvKlKmOkZPRiKiakPVWZvaux8YCwiP9cux0Zn7IhmpyehzlFPQbCa52pjvxw9DoaTyOMLJ6uLTVPvA4uxNtxKuLBnYBkpUQsNIrKY8293w04DIwZr1CyjK1SdQkahLCZUEhhVvPRMpWfvmAS7A%2B8n%2FbuYv5YgVdSTESetDNRXtHwxi6wcPK9P7i0pwGpv%2FroFVle6OdJf03UCSaK%2Brgv34aJolrTynk27yyMLqIdv7SRfzNvLtLpBpG5dknplF3%2FQmJKB4u%2BTwInninGQ1BOoTPjXZLJwdFgWOP43JsZbUIPL1njf6RgIzZvYNS0ACShMarJfsjDo5Kimb1Yx3jMbbWlPwkLdk13TnrqA%2FoAJLINPzMBkvowO13%2FxWJdZjJVz7UsH6xxTrQ2gPDyfMkbQeTlxsG%2BN0czGbysO1mojt%2Fyt7dHDEBvmJhz00nN3R4JGbc%2Bhiy7IczcO%2BZIVdGH3XBtYzeDgg0zQ1mlXzz%2B0A7m3CyuW%2BMKf%2B%2Bb0GOqUBf%2BLKb8ByAcdY%2BYPc1%2F4sd6Z8EFlXntH55IQ6scB3e0r4h6xYHt1zrNQ0Wfklw6aLC6IB5jL2bLh8abASCzlfXg2eT4fRDzUc%2B2wMMxcxguVws8DtIx40r8KrqYcIRteN9hW4WtdzCkXs%2BBrTMkmVlQy%2FtORCSVHXqu3kycM0mshtDkpWZm5CVUXvEDILkgS5ZbV4fK%2BjUIvJtu5U0RoY1n1lLNMv&X-Amz-Signature=8eb6ed1fb788c39957bc9b7ac654e082f3cf77bee8235db4be1b53a2d5e5f451&X-Amz-SignedHeaders=host&x-id=GetObject)

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

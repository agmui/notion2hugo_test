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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3W7U3FW%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T031620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWCIt8hA4Px8NbCmSTfAssmgbRPpHHGKH3TlKOXjnhEAiEAjLkk7nfEpj7jWVGTEVUOA2fQdViU1jbj%2BhZGgfp%2FsrkqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYYjnuvsAWVuJqYuSrcA%2B8q%2F3PDGD%2FXIrEMB%2FZaiQwUPAzMR72R%2Fgp8TPzntcVU3r8xUXCZp7OObmJNgOEebSIJtDZv8KLX%2FE%2FB9wdqpiwAxSdZpMkTpKJDcPwDnEP3I7rwJLk1tAhMFNgtTY4LKPDu%2BcIp61d%2FFGTSg6EKeWgZpCuCFdHbkXs7Nry5jgAIvnzzva1Q7pzrkQyEHV9zpF%2FeLNNCWTxNVfzORZcZxsazyKfYBpZvtnZ9C1d5G80vaFChsOeRx%2Fsv0m%2BdDP3Io9y2TV8bSVDn8IfiRQyeLfmwiilyoO7kZsc0up02lJSEfp6WE4ucqoIJR90gDlj8nUp8JMihFfyQPkp7zQWc69g%2B61NypLGSWLQF%2BTI9CNdZgTDQSjGSHSnEWB3aS%2FBd4Y1fR3KSEiW6NkFROqnpt5zmSx%2FpeHpUuoB9zhKM5gBWzX7KSxvqBCVW1wABARJgk2Sf1BjVp72W3ZvSG9u6o6Yu6tLOhUdt26WCEqwRS0WY0inHqchVtAfitkdKlWsha45QzR%2BjtHVC4CH%2BGh%2Fdrfmie39GQlBKN2fC3zJVrrmqcBxfZCFPsnxjERYOG%2BqertmVX0s0xqFkcaVoQ2oGzuUWxG1izcYng%2FKifP9Sz1TuFiZGlCas5WzL%2BEcQMMPL074GOqUBYYfT1cpnN%2BLIEktsg6BMn%2FrkmoLdqBS6pQM%2F8Ijn7bcVcNOUH91c9kV3%2F6unqQakIT7atECM9CN4%2BbVaOcJlGzEVpUhKY3b%2BDt5%2FphbwcRxKonXHxU%2Fl2cgpIH68TCblPsMftKhEpV%2FkiOBNitKVF0sE5M%2FRRQQ19cQlHCkDahKZXFeLdjySdZYSr%2FUKKLuyQIeRv%2F84lnKu%2Bh8BLxuTGtn2Pcku&X-Amz-Signature=25f33e2f08dfb56cced75a9415e45d3ce2453f140daf692e3fc20b6fce30bc85&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3W7U3FW%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T031620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWCIt8hA4Px8NbCmSTfAssmgbRPpHHGKH3TlKOXjnhEAiEAjLkk7nfEpj7jWVGTEVUOA2fQdViU1jbj%2BhZGgfp%2FsrkqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYYjnuvsAWVuJqYuSrcA%2B8q%2F3PDGD%2FXIrEMB%2FZaiQwUPAzMR72R%2Fgp8TPzntcVU3r8xUXCZp7OObmJNgOEebSIJtDZv8KLX%2FE%2FB9wdqpiwAxSdZpMkTpKJDcPwDnEP3I7rwJLk1tAhMFNgtTY4LKPDu%2BcIp61d%2FFGTSg6EKeWgZpCuCFdHbkXs7Nry5jgAIvnzzva1Q7pzrkQyEHV9zpF%2FeLNNCWTxNVfzORZcZxsazyKfYBpZvtnZ9C1d5G80vaFChsOeRx%2Fsv0m%2BdDP3Io9y2TV8bSVDn8IfiRQyeLfmwiilyoO7kZsc0up02lJSEfp6WE4ucqoIJR90gDlj8nUp8JMihFfyQPkp7zQWc69g%2B61NypLGSWLQF%2BTI9CNdZgTDQSjGSHSnEWB3aS%2FBd4Y1fR3KSEiW6NkFROqnpt5zmSx%2FpeHpUuoB9zhKM5gBWzX7KSxvqBCVW1wABARJgk2Sf1BjVp72W3ZvSG9u6o6Yu6tLOhUdt26WCEqwRS0WY0inHqchVtAfitkdKlWsha45QzR%2BjtHVC4CH%2BGh%2Fdrfmie39GQlBKN2fC3zJVrrmqcBxfZCFPsnxjERYOG%2BqertmVX0s0xqFkcaVoQ2oGzuUWxG1izcYng%2FKifP9Sz1TuFiZGlCas5WzL%2BEcQMMPL074GOqUBYYfT1cpnN%2BLIEktsg6BMn%2FrkmoLdqBS6pQM%2F8Ijn7bcVcNOUH91c9kV3%2F6unqQakIT7atECM9CN4%2BbVaOcJlGzEVpUhKY3b%2BDt5%2FphbwcRxKonXHxU%2Fl2cgpIH68TCblPsMftKhEpV%2FkiOBNitKVF0sE5M%2FRRQQ19cQlHCkDahKZXFeLdjySdZYSr%2FUKKLuyQIeRv%2F84lnKu%2Bh8BLxuTGtn2Pcku&X-Amz-Signature=55800ee811b3a242c27b3c75797669d4d56994f467d40132f72903e77354e063&X-Amz-SignedHeaders=host&x-id=GetObject)

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

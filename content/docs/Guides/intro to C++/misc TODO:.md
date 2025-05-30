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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZRLF6BI%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T081215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjVfT7D3iKHEJPKgp14DXt7fgHxsLHq7iHMPXNdQS6TAIgMTHQI6VqBIOamsbGCyHuoQStcDmk%2FXAGYYZGQnAPMLEqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcH8dlb8DqefuUCgSrcAyo%2FY9yjlnnlm42HKIRdkR%2BF5X%2FKNYvDf9I5jXEh9FcJitNSXApKcRFiMjsz6NlDu3yRKmAnItHQk8nVECA5Tnf1H1wTXqMfVBms3x%2FkcmNYh%2B5p%2Fa3qFnEkl1jVKn%2FlX98F%2BwaZvvVbs4mkS8HUf2GQu0abQhA18o2E%2F8zMMlg1QbkyKJrW8DuE5ktGdYuaR%2FgOqQtJB3fmADmdQEGfht9rRu8m0DdOK0fF%2BoVPgfOga0z75BhxdTVC%2Bd2mYU8yAFj3XJNnQ%2BvldnhdYjFc5Q3rw2uK0l3YcdhJn1uEMzsj6Ns2absPso60zIDqYFxinRZRfEzRDNrZSRI1Mx69Paam26qrBqS%2BZ6tW8ihh%2BnvrajECLbLtEcqPupDEKB5C32%2FM2VJCLafNIoTY%2FvYtPo4kESNdGl5i%2Br1iU8EJORAfssO0F9%2FifsJ1f1DAvR1As8CpKrXTjFUdzXQzvMjXGoayi99EcjRUJ7h32daR1NaCFWP7clG9MSfihLro5AaEHE2vdtZvu5lw%2BUKQZWMfGif2BvvgdLkpIS9pO1c0ZX1LnuXU%2FFwzu55M5aAuOy1wZ1JbPMTkK%2FWHM8V7Q9xLBqdhRC40WIJRRxnMgj2i63Kfrqly41yPjy%2BX8jU9MIzL5cEGOqUBH1AGvd%2FJgWwu6GPLHiZ3BtuG9r6k7hlif%2FhjW45r4fOLRXEJDwFQ3GOkC1zpakkZB%2FWftWjix3qU4Hu8%2B63G6WLKK4oi0JIpMw5oKqymY%2FOxNunEn6rGlQISsnp%2B8ujwLIM40Mr6kRc%2BK5m6QiJpbJjBOX%2BA0GdqlEuTuKwSUQKLUfJdrPGLt7JaKhYb%2BwTcOC8vyvQDB1KzYKN%2BqgsFTuArtPKo&X-Amz-Signature=0448e3fefbf1e96df31fb29ae494f297ce5f6b70041fbd2ec69c8a7d960cbfac&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZRLF6BI%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T081215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjVfT7D3iKHEJPKgp14DXt7fgHxsLHq7iHMPXNdQS6TAIgMTHQI6VqBIOamsbGCyHuoQStcDmk%2FXAGYYZGQnAPMLEqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcH8dlb8DqefuUCgSrcAyo%2FY9yjlnnlm42HKIRdkR%2BF5X%2FKNYvDf9I5jXEh9FcJitNSXApKcRFiMjsz6NlDu3yRKmAnItHQk8nVECA5Tnf1H1wTXqMfVBms3x%2FkcmNYh%2B5p%2Fa3qFnEkl1jVKn%2FlX98F%2BwaZvvVbs4mkS8HUf2GQu0abQhA18o2E%2F8zMMlg1QbkyKJrW8DuE5ktGdYuaR%2FgOqQtJB3fmADmdQEGfht9rRu8m0DdOK0fF%2BoVPgfOga0z75BhxdTVC%2Bd2mYU8yAFj3XJNnQ%2BvldnhdYjFc5Q3rw2uK0l3YcdhJn1uEMzsj6Ns2absPso60zIDqYFxinRZRfEzRDNrZSRI1Mx69Paam26qrBqS%2BZ6tW8ihh%2BnvrajECLbLtEcqPupDEKB5C32%2FM2VJCLafNIoTY%2FvYtPo4kESNdGl5i%2Br1iU8EJORAfssO0F9%2FifsJ1f1DAvR1As8CpKrXTjFUdzXQzvMjXGoayi99EcjRUJ7h32daR1NaCFWP7clG9MSfihLro5AaEHE2vdtZvu5lw%2BUKQZWMfGif2BvvgdLkpIS9pO1c0ZX1LnuXU%2FFwzu55M5aAuOy1wZ1JbPMTkK%2FWHM8V7Q9xLBqdhRC40WIJRRxnMgj2i63Kfrqly41yPjy%2BX8jU9MIzL5cEGOqUBH1AGvd%2FJgWwu6GPLHiZ3BtuG9r6k7hlif%2FhjW45r4fOLRXEJDwFQ3GOkC1zpakkZB%2FWftWjix3qU4Hu8%2B63G6WLKK4oi0JIpMw5oKqymY%2FOxNunEn6rGlQISsnp%2B8ujwLIM40Mr6kRc%2BK5m6QiJpbJjBOX%2BA0GdqlEuTuKwSUQKLUfJdrPGLt7JaKhYb%2BwTcOC8vyvQDB1KzYKN%2BqgsFTuArtPKo&X-Amz-Signature=e1b67c9059911823a75b1a461f27214e676577d63c9e9c9122b64931511bdbfe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

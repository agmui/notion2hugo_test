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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEKYLLDU%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXUm0aE4kkirleQr5JmSFLMjeY9rBcX5LSVv13z5H1GAIhAJIkYdKexi6M8Y%2BUJH2hdraFgTVvBEnSx6sSCVopTS%2BTKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyadZ2OOWAWHQFblR8q3AOXSiZ2F46dqHJZQFONMBvO7Bt0zeo4ZU41W2V418fQMFC30SG55z6h%2BcoEYnCPb3wAzEsXja9aGVoxBax%2BsqMk7JBb99%2BvWlDHeH1pKEiZSWvqMMU1iKS1px4pXFpf6roeO1Je5s8cyJqQOlt7Ji6RzQxt4d7pcG9s%2Fr%2BaazNSItHs1OO%2Bssh6dGgnc6emTo8oiWfFKRE6VDNmcXPs5D4GLgwqI7%2B6V8S2%2BJDa%2B433nfgRJ1AebCOZwHLTcPM23DFbMrpAoQ2wLdGIDKST%2FTJyyasTkgwTT1K4rTB%2FuFeavYS39f%2FusG0bwYsHpiuj%2BN6Oq0etMcnzYFLTyTU3mTivYUHV50Z27RTxbWqzv6B3SViGzajkRcZDUpR%2Bji1ylwjaxVv5xpb%2BqFKDFyUo4uT9lhP6nr%2Br6BNHvFB3TemL2oU3COSYo8Mzh5e0vNUmqVstE71xO%2FkNeN39j8c3i7NGh4pA6WL2a38Pk44uxvBk%2F8fQITWm5arBWpd6TfTx3sDS9HYxU2ZzHg5UGKofpjllZR4PRuEn4CifJ8bm8RMtIE54XFqvLdwvrwTyRpKmqqeRSFQiyChzSmxJ9TAuwU1JeaGF4kslnrX8t7EXbL5Bjh%2F0N%2BJDkjCXZWKdjjChzYbDBjqkAdXIG1uyGs32pt80%2Bu01qMffROPpPLit7O64cVyeGz64MKXoBJG1F%2Fx1Tj%2F0%2BR9GnJQB%2Byj%2FHqt6l%2B76OqOY0oGR6TpVyJ6LvDLfemBoXteb2vrSkt%2B%2BPDmP9Vs5mnAgl6K6CsjV7lgimmb0SVEGpL6GzQbV5ivwumA50ZpQxKhmD0TtWA2gKTpqeXM34BALnRSN0NFt6JXEEOcLWUxF9V696Ofk&X-Amz-Signature=e57bafa8c5d7e9b0ab5b10de73ea448f102ef7517dedc14c61f73064621e386f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEKYLLDU%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXUm0aE4kkirleQr5JmSFLMjeY9rBcX5LSVv13z5H1GAIhAJIkYdKexi6M8Y%2BUJH2hdraFgTVvBEnSx6sSCVopTS%2BTKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyadZ2OOWAWHQFblR8q3AOXSiZ2F46dqHJZQFONMBvO7Bt0zeo4ZU41W2V418fQMFC30SG55z6h%2BcoEYnCPb3wAzEsXja9aGVoxBax%2BsqMk7JBb99%2BvWlDHeH1pKEiZSWvqMMU1iKS1px4pXFpf6roeO1Je5s8cyJqQOlt7Ji6RzQxt4d7pcG9s%2Fr%2BaazNSItHs1OO%2Bssh6dGgnc6emTo8oiWfFKRE6VDNmcXPs5D4GLgwqI7%2B6V8S2%2BJDa%2B433nfgRJ1AebCOZwHLTcPM23DFbMrpAoQ2wLdGIDKST%2FTJyyasTkgwTT1K4rTB%2FuFeavYS39f%2FusG0bwYsHpiuj%2BN6Oq0etMcnzYFLTyTU3mTivYUHV50Z27RTxbWqzv6B3SViGzajkRcZDUpR%2Bji1ylwjaxVv5xpb%2BqFKDFyUo4uT9lhP6nr%2Br6BNHvFB3TemL2oU3COSYo8Mzh5e0vNUmqVstE71xO%2FkNeN39j8c3i7NGh4pA6WL2a38Pk44uxvBk%2F8fQITWm5arBWpd6TfTx3sDS9HYxU2ZzHg5UGKofpjllZR4PRuEn4CifJ8bm8RMtIE54XFqvLdwvrwTyRpKmqqeRSFQiyChzSmxJ9TAuwU1JeaGF4kslnrX8t7EXbL5Bjh%2F0N%2BJDkjCXZWKdjjChzYbDBjqkAdXIG1uyGs32pt80%2Bu01qMffROPpPLit7O64cVyeGz64MKXoBJG1F%2Fx1Tj%2F0%2BR9GnJQB%2Byj%2FHqt6l%2B76OqOY0oGR6TpVyJ6LvDLfemBoXteb2vrSkt%2B%2BPDmP9Vs5mnAgl6K6CsjV7lgimmb0SVEGpL6GzQbV5ivwumA50ZpQxKhmD0TtWA2gKTpqeXM34BALnRSN0NFt6JXEEOcLWUxF9V696Ofk&X-Amz-Signature=9441cea9f9052652aa876920dba52cafdd6d16a09e500f4e9b0ad89fc5e6e019&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

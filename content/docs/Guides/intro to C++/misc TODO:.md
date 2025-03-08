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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHW25TER%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T014515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQC%2BOgWggxXqKIT08E6brWQwcjfpwR6TbrYQ2LbSvGtFUwIgYNH8Fcmfzy2P0kARBTTS7UhV4txhq5s7khpcudx2p3Uq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDNC%2F8ckDe5crCElaVyrcAxLvaYHbZHPrpuM5sgk4wr533SgtvQdtXN7F8VwpHi4MyNWlMmY0o5sljYPPTxHBYOebyMzZDx6f0Nl3SBDEope7m1zsbtR5lVUGFkyxMbC3R81z1ynqlwOOVD4Tq2kRKXrF6WyzNvm52fYuevPs0ipzvYRLlsT76qvO19AFWCA8FU51uJfyiUejd9kMpT6gg4%2BIVrdQnbsuft1CUeUA%2FCr9utMYxpUZSwjnHVjbpGxKX9UZXhm%2FrMlDf589JLgSn2JB6UoumR%2F3Xz0%2F4iVj5pL3mLzjLbMvj%2F9GsLnBh%2Bahm0A3Wa5%2BElmKT%2BtDt5uNAt81WW8786weiIH3HKbc8fyt0RoPm%2BhETZBBXQE81wAD0m93HbKSgHDRy9ELNS%2B9q%2FK8TMPqIN%2BmcHO1itmQmFdka7CoxwBvOUSgxXfJJ%2FgzrHiHk7RAHQNVbV5HTLDbhxoSinURimUjpEQBC142rCh%2BOaxvNIwllxh6nqeBWFyYpURHCkmv4mESusfNPc8BQ79lUkwKuYV37ZtCWLljRjWtRzfSXJjnjrtISlou8VIJLVoRRSWg7i44swof%2Fzj5sTalu2fWWeFzHh9YPNos5MKlnrdE4gZQ9HkkaCirfSGQSSn%2BZFu1LywjNQpJMIu9rr4GOqUBolQfWnRer3k9SuC4TrWqxLeuh%2FAkDw%2BNCLrFsft7Fj5u%2Bjvkv8IyYcDMVr1zXv6JggrdfXWXLz4oz9GFN%2F9Wdp27sQg3Oj0AGIDXwYBhYsoIOia8MWlOuT3mZuCOeSAjG%2FTXAuDLALH19GKDIEFjrY3IwUgoaRElPJPQhh8KQx7MPBspe8nX6NpdZLBKoQpjiPR2dn%2B5gMyOWlAJzRyMPBs1uv8Q&X-Amz-Signature=de2f899a8d691b513b50d5a24c109615e41c4934444e9fccc1f45c65008f2a5d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHW25TER%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T014515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQC%2BOgWggxXqKIT08E6brWQwcjfpwR6TbrYQ2LbSvGtFUwIgYNH8Fcmfzy2P0kARBTTS7UhV4txhq5s7khpcudx2p3Uq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDNC%2F8ckDe5crCElaVyrcAxLvaYHbZHPrpuM5sgk4wr533SgtvQdtXN7F8VwpHi4MyNWlMmY0o5sljYPPTxHBYOebyMzZDx6f0Nl3SBDEope7m1zsbtR5lVUGFkyxMbC3R81z1ynqlwOOVD4Tq2kRKXrF6WyzNvm52fYuevPs0ipzvYRLlsT76qvO19AFWCA8FU51uJfyiUejd9kMpT6gg4%2BIVrdQnbsuft1CUeUA%2FCr9utMYxpUZSwjnHVjbpGxKX9UZXhm%2FrMlDf589JLgSn2JB6UoumR%2F3Xz0%2F4iVj5pL3mLzjLbMvj%2F9GsLnBh%2Bahm0A3Wa5%2BElmKT%2BtDt5uNAt81WW8786weiIH3HKbc8fyt0RoPm%2BhETZBBXQE81wAD0m93HbKSgHDRy9ELNS%2B9q%2FK8TMPqIN%2BmcHO1itmQmFdka7CoxwBvOUSgxXfJJ%2FgzrHiHk7RAHQNVbV5HTLDbhxoSinURimUjpEQBC142rCh%2BOaxvNIwllxh6nqeBWFyYpURHCkmv4mESusfNPc8BQ79lUkwKuYV37ZtCWLljRjWtRzfSXJjnjrtISlou8VIJLVoRRSWg7i44swof%2Fzj5sTalu2fWWeFzHh9YPNos5MKlnrdE4gZQ9HkkaCirfSGQSSn%2BZFu1LywjNQpJMIu9rr4GOqUBolQfWnRer3k9SuC4TrWqxLeuh%2FAkDw%2BNCLrFsft7Fj5u%2Bjvkv8IyYcDMVr1zXv6JggrdfXWXLz4oz9GFN%2F9Wdp27sQg3Oj0AGIDXwYBhYsoIOia8MWlOuT3mZuCOeSAjG%2FTXAuDLALH19GKDIEFjrY3IwUgoaRElPJPQhh8KQx7MPBspe8nX6NpdZLBKoQpjiPR2dn%2B5gMyOWlAJzRyMPBs1uv8Q&X-Amz-Signature=28f1f7087c2e2a1778409a92f7e7b9d130476e605050855cee5e2bdb1f8d2bf2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

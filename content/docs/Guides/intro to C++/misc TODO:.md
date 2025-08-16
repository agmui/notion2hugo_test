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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TKD2JZW%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDYBhQ%2BZBgOng2oINua%2FdwDLKjJUnIIVmANZrSts7d1wgIhAME9UGuE0FtqtWDt0RXtR5HnTxPitUzU1%2B2fhU3epH%2FgKv8DCHcQABoMNjM3NDIzMTgzODA1IgytbJpv68D0V9db3e0q3ANVlCbWLwejagBTkgHoRa7CmACwP6qRyJATxsIcE%2F55wBxzIeXhMdmfQtgT%2FN90TpgDAVtJCA3B7TCPJUjOssOXgOYtimOqyC8HGv7%2FLfmnrCJE2jksFxPG6F5P3XU9I4h1MZfCpy2VC%2FE8Fpys%2BiieFeDbrsRIan1eTFAeJBkEL1MpqfyucdTnqsi5vIKwg7lvtNAFhhz9vIjKi9nXMhP2x%2BOjLbVYDycOmfrscDk%2BdezczYxriJy1J%2FkP%2Fx%2Fm%2BjI3BDaENyjPetLgfVCuVV6rSv0fya%2BocPgUlvCgPRVKXFvEx%2F3CWVQojRMlXPJuJxjahBdd49PTRC%2Byk%2F%2Br227aEzlnse94bXZtJIjt499P9woy8pkWPYsQrfktibmUzO5p76Tke19yfNkxJ9ctx78p%2B5H1lP7Tl3ohTSUATG1Tl7swt23tbGt1F%2BE81SvwXIu2ZRgw7%2B8161xeVsg2S9ta%2B4RS6EsXC6pthJDw%2BOXBuKjpSmaMYxdZ%2Bw91%2FfXT0iKDjOfnGXXe2Qif5OlviCBFRB37%2F92WKWYFTcF2ekAQ31UDvcdxZBwMJ8K7XMLLDplG82KVuLOogJC3159XU%2FJXUgTcCOaKvb5ebSMsvuF6n3997B1Q9q95yjSSrDDlm4LFBjqkAbLSeUAq8rWbPp44CnQBCxXu57bev8qplilFHhVg3XdSMLtlHMDIgMcafcj3qIj9rCmPsoy5O5AkmOciOyZEUSCTCeAyJeBPVJfLO01uLAoea0Rte01TaD5dRcFAzUWKfCPNmCLFjUkKhCcWiEjpxJCxSqHHJtYGb3aEGyBxcdlrqM5AKHmpL%2BYyoQqT%2BM43UW29697D5oBoh7eLTwBhLDkPWP4q&X-Amz-Signature=f0a91ed9a402f31e5403de8b6126b09c32ed04bfc3d48c63945f77ad3ca99069&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TKD2JZW%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDYBhQ%2BZBgOng2oINua%2FdwDLKjJUnIIVmANZrSts7d1wgIhAME9UGuE0FtqtWDt0RXtR5HnTxPitUzU1%2B2fhU3epH%2FgKv8DCHcQABoMNjM3NDIzMTgzODA1IgytbJpv68D0V9db3e0q3ANVlCbWLwejagBTkgHoRa7CmACwP6qRyJATxsIcE%2F55wBxzIeXhMdmfQtgT%2FN90TpgDAVtJCA3B7TCPJUjOssOXgOYtimOqyC8HGv7%2FLfmnrCJE2jksFxPG6F5P3XU9I4h1MZfCpy2VC%2FE8Fpys%2BiieFeDbrsRIan1eTFAeJBkEL1MpqfyucdTnqsi5vIKwg7lvtNAFhhz9vIjKi9nXMhP2x%2BOjLbVYDycOmfrscDk%2BdezczYxriJy1J%2FkP%2Fx%2Fm%2BjI3BDaENyjPetLgfVCuVV6rSv0fya%2BocPgUlvCgPRVKXFvEx%2F3CWVQojRMlXPJuJxjahBdd49PTRC%2Byk%2F%2Br227aEzlnse94bXZtJIjt499P9woy8pkWPYsQrfktibmUzO5p76Tke19yfNkxJ9ctx78p%2B5H1lP7Tl3ohTSUATG1Tl7swt23tbGt1F%2BE81SvwXIu2ZRgw7%2B8161xeVsg2S9ta%2B4RS6EsXC6pthJDw%2BOXBuKjpSmaMYxdZ%2Bw91%2FfXT0iKDjOfnGXXe2Qif5OlviCBFRB37%2F92WKWYFTcF2ekAQ31UDvcdxZBwMJ8K7XMLLDplG82KVuLOogJC3159XU%2FJXUgTcCOaKvb5ebSMsvuF6n3997B1Q9q95yjSSrDDlm4LFBjqkAbLSeUAq8rWbPp44CnQBCxXu57bev8qplilFHhVg3XdSMLtlHMDIgMcafcj3qIj9rCmPsoy5O5AkmOciOyZEUSCTCeAyJeBPVJfLO01uLAoea0Rte01TaD5dRcFAzUWKfCPNmCLFjUkKhCcWiEjpxJCxSqHHJtYGb3aEGyBxcdlrqM5AKHmpL%2BYyoQqT%2BM43UW29697D5oBoh7eLTwBhLDkPWP4q&X-Amz-Signature=b17700e12b85f064e308af8de5b858472439ce764a0b32f2065b0a119dc0de59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

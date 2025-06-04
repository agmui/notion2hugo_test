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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXM5QFBS%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T161123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIDqU%2F8bfUzqO201IMmYjozIqtWrdwi8QZ8nLo4qi5U9dAiAixXkEEIpis8QWabznMOWIkHwmCN%2B%2BrmN9v77RH6RJ5yr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMZdtGOuc9rfh844F3KtwDMY0qlxo43iNgQocssrOcPG6OBfGFjISyzBJ6lRUgAZ1Fr%2Bh5nmlt5XiGdKQr%2Bhy%2Bm0D7EbKXLGSHOaMfFu0dhhnJF%2BrVvTPAlTIqT0tm41DXt%2BF63ClCw5cSi0wd%2BzgLOxdmJPStq44RzSQv%2FtCxWERF0z1WhG9f7RiTiwsbQVd3qZ0cT1dhkhh845Dupt8i3RncfwTxLyX8%2FjrYqhjneZeu4jGHt%2BTH7S3%2FUpnbmW53hlQKKzfeWXLLzR%2FgEJV3HMAKDiHter4NKCsH8MFij%2Bs3kls%2BFtuZfTKuZhirfhM1RcXbrkNxJMa1dUYdKk8nqvZbYHF6Yar8IvD05J9RDtim%2FtdWKW6lre3xZIAGMPpf78fgUGsEHXT7viE1F%2FYBM1gxm%2B%2FA5MUlQnXU8%2BLstPySC3%2F%2BX6lYly1HydwaII0MZamK0bfBzWXXp6%2FOB2R8qZS76%2B88SJX0WQAcl3TmybJ1Zh%2F6%2BTeuYmxkWkIXobDIgDLoRVTZEySv4ckq26vc3a%2FzhF9lIngV032C15orh7u%2Fq1hD%2BF9LQGwd0Xq4TwjdIc89GKABYM%2FyP6Kj616Ijobcbv6MXvvhL1JH6KKvlA2uZKW2XQXmSQPdzqZTrA07sMUyEhco8JpFwvowk96BwgY6pgGwe3On42FkmMA16DFy4BB%2FUeKIe0ZXHuSuGq%2BOkLcF%2BxWidvv7UWUARs1DlWyp67HeIKDfmj4H%2BrNFxbfbMuxmXeDvo2K2Blf7860eBhVj1L3bhbp%2FL9Th4u5BwqnJN5bJJpnlskTQUshNnOhETJi9T0Yfq2SWvONUXiyheZStyY5ARxbGVSCqtmJBo7NztN9Lx47hIUgTfak6P4jiX1NglzP0g0Ni&X-Amz-Signature=53008f8a069797a53c9f7be9be2bc3de78847af413221a27e666ccc2cfa1a0da&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXM5QFBS%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T161123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIDqU%2F8bfUzqO201IMmYjozIqtWrdwi8QZ8nLo4qi5U9dAiAixXkEEIpis8QWabznMOWIkHwmCN%2B%2BrmN9v77RH6RJ5yr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMZdtGOuc9rfh844F3KtwDMY0qlxo43iNgQocssrOcPG6OBfGFjISyzBJ6lRUgAZ1Fr%2Bh5nmlt5XiGdKQr%2Bhy%2Bm0D7EbKXLGSHOaMfFu0dhhnJF%2BrVvTPAlTIqT0tm41DXt%2BF63ClCw5cSi0wd%2BzgLOxdmJPStq44RzSQv%2FtCxWERF0z1WhG9f7RiTiwsbQVd3qZ0cT1dhkhh845Dupt8i3RncfwTxLyX8%2FjrYqhjneZeu4jGHt%2BTH7S3%2FUpnbmW53hlQKKzfeWXLLzR%2FgEJV3HMAKDiHter4NKCsH8MFij%2Bs3kls%2BFtuZfTKuZhirfhM1RcXbrkNxJMa1dUYdKk8nqvZbYHF6Yar8IvD05J9RDtim%2FtdWKW6lre3xZIAGMPpf78fgUGsEHXT7viE1F%2FYBM1gxm%2B%2FA5MUlQnXU8%2BLstPySC3%2F%2BX6lYly1HydwaII0MZamK0bfBzWXXp6%2FOB2R8qZS76%2B88SJX0WQAcl3TmybJ1Zh%2F6%2BTeuYmxkWkIXobDIgDLoRVTZEySv4ckq26vc3a%2FzhF9lIngV032C15orh7u%2Fq1hD%2BF9LQGwd0Xq4TwjdIc89GKABYM%2FyP6Kj616Ijobcbv6MXvvhL1JH6KKvlA2uZKW2XQXmSQPdzqZTrA07sMUyEhco8JpFwvowk96BwgY6pgGwe3On42FkmMA16DFy4BB%2FUeKIe0ZXHuSuGq%2BOkLcF%2BxWidvv7UWUARs1DlWyp67HeIKDfmj4H%2BrNFxbfbMuxmXeDvo2K2Blf7860eBhVj1L3bhbp%2FL9Th4u5BwqnJN5bJJpnlskTQUshNnOhETJi9T0Yfq2SWvONUXiyheZStyY5ARxbGVSCqtmJBo7NztN9Lx47hIUgTfak6P4jiX1NglzP0g0Ni&X-Amz-Signature=f9ec4fb239d1274ee66de487ac622e71f2b30a6c251aa49d21ce1eee3cd23af3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

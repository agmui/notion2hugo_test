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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKEF7JOD%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T210619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPOMb0RaWCZ645v3SeElDMhNozmu9ugecksjmDZpICgwIhAIYVqesRnJdcMlwrTbr4YgKSrsoIui6k6X%2F5dxFwFrT0KogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3%2BcqnaNHrvebd7Usq3ANZeZN1wbbl%2BiyCitc72FY0pDWXj2M5lEZSlMB7Wl2Bcp2ZwMiuiF1nonvxz2DGAyk4U0BFxJpCWsfQDUxPaOSiDgvdf8q6zaqO2qQLfwZHut9b%2Fgyel%2FuF04RRCIDTGk29Xn1hpgai2CNzmWos1QX%2B7jY%2FURaCU5ui4KZgNB3B0eQW%2BoTvTe8MAACczvIaTmAPe5jBkhLN%2FJO5%2F%2BzOG%2B5BYun6ZRodpok3ath0J40FemZLLiw4EAKvdZ8OHCcXXqJfDCfZpHIxD9NuL6ro5juJVPak9ZHmBYuFqzUrPJ33tGBjzBgNLz27PDFax7k%2BzxQpdP5syFG%2B3f9e8TKz5p%2FDSz4%2F0HXVcXGDZBZO8K12W0Om7yuzltTbeHHaWRaKiTQ%2FB9UFTmCU%2FzV5KIYuQJ%2FWDTjo7DOpJdJetOlxysGo6mDTXn3bFrZ9ihd8m0yQANzojnY5xMC7czDMvLhNk1umb2f1UMmyDNViNrzfeS8VnoUu4NXNypSvxIUUC2QJM%2B8zTajEqX26zO0phKc3LNTel7zdpoT2JwoCpCtKJJGsSGqtjHQiVo6KWV%2FVql6ITqpyBz32T1XH756RkTh7P5DTiCIFoffte%2BTxN3Dt0BMEwC4MRGOPRzF7nA82BTDGjd69BjqkATUKGdEwicQJBoFvfuuT4R67TRLhoo7kvnRHIFuoCugDsHT5KmuuJ3AKdXzTwRpSEA87otVAhRSH3MLbV%2BaY%2Bmmmgg%2Fs11a3ACIXR1j1yaptv5JA%2FfRU3nc6On%2BXIBI9Kd611cELX09oDRwL8IF6heBGV%2FdTDR9U0UFZUIWIimNntbFy7o1Ta1MM58%2Fjg%2F5UHvrV9j44dgeukzYEpTdkOIF1JmKD&X-Amz-Signature=a9d9691365eec9cfebdf318ea99b54b6a8b4491f6c3607c6fff2855d200b7bed&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKEF7JOD%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T210619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPOMb0RaWCZ645v3SeElDMhNozmu9ugecksjmDZpICgwIhAIYVqesRnJdcMlwrTbr4YgKSrsoIui6k6X%2F5dxFwFrT0KogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3%2BcqnaNHrvebd7Usq3ANZeZN1wbbl%2BiyCitc72FY0pDWXj2M5lEZSlMB7Wl2Bcp2ZwMiuiF1nonvxz2DGAyk4U0BFxJpCWsfQDUxPaOSiDgvdf8q6zaqO2qQLfwZHut9b%2Fgyel%2FuF04RRCIDTGk29Xn1hpgai2CNzmWos1QX%2B7jY%2FURaCU5ui4KZgNB3B0eQW%2BoTvTe8MAACczvIaTmAPe5jBkhLN%2FJO5%2F%2BzOG%2B5BYun6ZRodpok3ath0J40FemZLLiw4EAKvdZ8OHCcXXqJfDCfZpHIxD9NuL6ro5juJVPak9ZHmBYuFqzUrPJ33tGBjzBgNLz27PDFax7k%2BzxQpdP5syFG%2B3f9e8TKz5p%2FDSz4%2F0HXVcXGDZBZO8K12W0Om7yuzltTbeHHaWRaKiTQ%2FB9UFTmCU%2FzV5KIYuQJ%2FWDTjo7DOpJdJetOlxysGo6mDTXn3bFrZ9ihd8m0yQANzojnY5xMC7czDMvLhNk1umb2f1UMmyDNViNrzfeS8VnoUu4NXNypSvxIUUC2QJM%2B8zTajEqX26zO0phKc3LNTel7zdpoT2JwoCpCtKJJGsSGqtjHQiVo6KWV%2FVql6ITqpyBz32T1XH756RkTh7P5DTiCIFoffte%2BTxN3Dt0BMEwC4MRGOPRzF7nA82BTDGjd69BjqkATUKGdEwicQJBoFvfuuT4R67TRLhoo7kvnRHIFuoCugDsHT5KmuuJ3AKdXzTwRpSEA87otVAhRSH3MLbV%2BaY%2Bmmmgg%2Fs11a3ACIXR1j1yaptv5JA%2FfRU3nc6On%2BXIBI9Kd611cELX09oDRwL8IF6heBGV%2FdTDR9U0UFZUIWIimNntbFy7o1Ta1MM58%2Fjg%2F5UHvrV9j44dgeukzYEpTdkOIF1JmKD&X-Amz-Signature=9abf678b732391a04b2e360ce1e022453372cfa2a52e8b4c036d7c4f4cadb256&X-Amz-SignedHeaders=host&x-id=GetObject)

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

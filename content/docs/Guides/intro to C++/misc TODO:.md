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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y73WK73W%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T061220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIALgYhMl7yvb1wPFYjTC%2FByHR3R6FdxGyF6d8HE8k1PWAiAGuDoDjm0fNB838OdYb1gFs51oSKHqrE45CpJI3bIV3yqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyuMhrBFKXPSWkO0fKtwDvlAsr%2BbNOcrMXMG4k1hG5oEZrG1DE55nlp0NfZ4Xt4i9lG1X07lumM0Gjy6uj7L3pw4yRZWrQf4z9yF4LmTuvZ6F03%2BN2ldaZi2LiLlayzYO%2FtbBXicqYBwPYQEhTC1j42ScTUSBf2Fhzbj%2BNgsFFZ4R%2B8scKKn6itCMhDj2OuZUbIQ1mUV7v8vwASLrFqFT7qGDmZOm80KgsIuV9M%2B0p%2FgkkEdMgfZCMJlxtw%2B7qyatwO9xm0Lp5asXUZCRtHc80BDPmkM2hNhMoDBMZHCoTRigc%2BvzQuMBUqV2Mg1gqMFnEF0YjdR48NUYDIprZWVt54ptx%2Fun3ex%2F6bOmBpNHzjxSvECbw3eqUQrR89qjl3Ls95eJ9VyPPRzfeVjhFsuBq8QOuxm6%2F%2Fq6m3q%2BByn%2FJG2%2B2PWPgvjiAsVrTcIEjeYi7xw1K89ywW8PzGsO5EzTsbzI2CGw5pfclliNtOhTnvTAi2SoyXbg1sJ1r8%2FRawwxWe5hpQGOE5ilROfWoaFWhgZ553TMwWprSWORwGV%2FaGjPzyq4dhSzwSo0bCHz%2BqJPb6rlR5CTdUrDju1nIeN5nIal9aaNmpxJe3471CIyCdNQciVnGyTMKhZSsxvNj0ACkIsD3ScB%2FdlPIowwpt3ivwY6pgGFYXnkuBccGpvaoBq%2BauAo%2Fv9YiGGo8x20xxl4oMCiLePR8MhuUfKzaDqUyI1EJr7iTZX0cxVzqqrcJg8m76PAfcDvNILrRm6IkCVAvZ4vktjzPxjJNwIM%2B8GpPxUsMrLm78%2F1JJeWxBaBxcZRLcDYeHyWIfTyPmZllqd0bJ7zswjUeg%2FtYEwLQ6MNGTg3LkS40BVzaDt%2FKVH%2B7OrZW6EarP9AdFfk&X-Amz-Signature=073dcafc7962f38733de57f0f5f8d7f2ba0b19e493a92fc308d1a7415d3e172b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y73WK73W%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T061220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIALgYhMl7yvb1wPFYjTC%2FByHR3R6FdxGyF6d8HE8k1PWAiAGuDoDjm0fNB838OdYb1gFs51oSKHqrE45CpJI3bIV3yqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyuMhrBFKXPSWkO0fKtwDvlAsr%2BbNOcrMXMG4k1hG5oEZrG1DE55nlp0NfZ4Xt4i9lG1X07lumM0Gjy6uj7L3pw4yRZWrQf4z9yF4LmTuvZ6F03%2BN2ldaZi2LiLlayzYO%2FtbBXicqYBwPYQEhTC1j42ScTUSBf2Fhzbj%2BNgsFFZ4R%2B8scKKn6itCMhDj2OuZUbIQ1mUV7v8vwASLrFqFT7qGDmZOm80KgsIuV9M%2B0p%2FgkkEdMgfZCMJlxtw%2B7qyatwO9xm0Lp5asXUZCRtHc80BDPmkM2hNhMoDBMZHCoTRigc%2BvzQuMBUqV2Mg1gqMFnEF0YjdR48NUYDIprZWVt54ptx%2Fun3ex%2F6bOmBpNHzjxSvECbw3eqUQrR89qjl3Ls95eJ9VyPPRzfeVjhFsuBq8QOuxm6%2F%2Fq6m3q%2BByn%2FJG2%2B2PWPgvjiAsVrTcIEjeYi7xw1K89ywW8PzGsO5EzTsbzI2CGw5pfclliNtOhTnvTAi2SoyXbg1sJ1r8%2FRawwxWe5hpQGOE5ilROfWoaFWhgZ553TMwWprSWORwGV%2FaGjPzyq4dhSzwSo0bCHz%2BqJPb6rlR5CTdUrDju1nIeN5nIal9aaNmpxJe3471CIyCdNQciVnGyTMKhZSsxvNj0ACkIsD3ScB%2FdlPIowwpt3ivwY6pgGFYXnkuBccGpvaoBq%2BauAo%2Fv9YiGGo8x20xxl4oMCiLePR8MhuUfKzaDqUyI1EJr7iTZX0cxVzqqrcJg8m76PAfcDvNILrRm6IkCVAvZ4vktjzPxjJNwIM%2B8GpPxUsMrLm78%2F1JJeWxBaBxcZRLcDYeHyWIfTyPmZllqd0bJ7zswjUeg%2FtYEwLQ6MNGTg3LkS40BVzaDt%2FKVH%2B7OrZW6EarP9AdFfk&X-Amz-Signature=1ca0b10d9a1247b529e143198fd67bc2d2024db2c36cdfb3216c3077830694be&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ7J5MLP%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T081218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIGYPor2VtxduotLYQa9zUI0fppwroTGpt3ZPfMfd5iBQAiBch%2B4oMklHu9yWXSNzrZ2pubNsYReXAqt0cDjm8HGKFCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwj6Vgx8g7jgGyE2PKtwDxREhqF6os7uVtX8FnzCoAGQsG4Tjbk07zl9d4np0MkVId%2BQoD4rdREWzzMeQC4cVIvuPRSxWMLzNFl0fz9%2F02IsndognifiNiahkoe0Powj1mnMluos4m95ExC3vSJ56SVPnm55oZ5%2Bq%2FifHv%2Fq1PL714ddbHygP7%2FYdRFzhozIFL2G3A14vgMUUf%2FZuniaIIegKsYBHPx9ggZfuNqr7SaEyxtRV4VyEgbJUIKgRIJEqkzcpPmGW6f7XDCZ0sh5i5qzwjyHISl5U5qxoTRotQOwPOCRuURtLbLsDTymg234iSoxo6ZgNxVBxO7%2BJ6xLT%2Bgm2rYZRTjsmwgDparSp4WPJPK6ItBHnI02n3OYbzrvKE8JHSOPljoUlz8RYk0C18cUW1J2VPs2cfu3YWgz%2BUFwTxiWm%2Fp3gcpubSGK65iT9fcbIQk6W7u7t0XqcFcH5ZYvLRcVUc4JUxTjo868O89zNbxKcha%2FzfSYfGaf47XYSVuAKn1fZYQ0iby2iMIGh7B34BfbIJLLK5yjbgNPv0GDmEU4z7%2BYuk4i9MQEXqn77Rrc7oRNYgBd%2Fhl1n0rQzfsPR2W%2FRTQEtN%2FlVedv%2Bz5wlSp5wIU1JL5si%2FvnpcziDCq8UFvwI6deybRAw2bGuvwY6pgFe3XsRdMYIOHIGArD5xk55KMhfXMrdHMcW%2F2isgPZPhgpJh8iMuJw%2FuQRvCz0ODn%2B5sBL%2B2%2FTnm2R8a6O0NoHMvK0lyFaVgSD8UlQ1aP9qh4tHxyMw4hoM0IXzmbXJWlyiUUq7eT9udn%2FMoExMEV%2F%2Bt4iNIdVJIW6Kh%2FjY9j1WxIWq8GiGk78hdAV70nWju7UaatuBAu54ztVditIWOIW1QzyAwHzI&X-Amz-Signature=fd356e62ef32d363903e459c482eccdaa6448e081eb5435651a1c679766237ec&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ7J5MLP%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T081218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIGYPor2VtxduotLYQa9zUI0fppwroTGpt3ZPfMfd5iBQAiBch%2B4oMklHu9yWXSNzrZ2pubNsYReXAqt0cDjm8HGKFCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwj6Vgx8g7jgGyE2PKtwDxREhqF6os7uVtX8FnzCoAGQsG4Tjbk07zl9d4np0MkVId%2BQoD4rdREWzzMeQC4cVIvuPRSxWMLzNFl0fz9%2F02IsndognifiNiahkoe0Powj1mnMluos4m95ExC3vSJ56SVPnm55oZ5%2Bq%2FifHv%2Fq1PL714ddbHygP7%2FYdRFzhozIFL2G3A14vgMUUf%2FZuniaIIegKsYBHPx9ggZfuNqr7SaEyxtRV4VyEgbJUIKgRIJEqkzcpPmGW6f7XDCZ0sh5i5qzwjyHISl5U5qxoTRotQOwPOCRuURtLbLsDTymg234iSoxo6ZgNxVBxO7%2BJ6xLT%2Bgm2rYZRTjsmwgDparSp4WPJPK6ItBHnI02n3OYbzrvKE8JHSOPljoUlz8RYk0C18cUW1J2VPs2cfu3YWgz%2BUFwTxiWm%2Fp3gcpubSGK65iT9fcbIQk6W7u7t0XqcFcH5ZYvLRcVUc4JUxTjo868O89zNbxKcha%2FzfSYfGaf47XYSVuAKn1fZYQ0iby2iMIGh7B34BfbIJLLK5yjbgNPv0GDmEU4z7%2BYuk4i9MQEXqn77Rrc7oRNYgBd%2Fhl1n0rQzfsPR2W%2FRTQEtN%2FlVedv%2Bz5wlSp5wIU1JL5si%2FvnpcziDCq8UFvwI6deybRAw2bGuvwY6pgFe3XsRdMYIOHIGArD5xk55KMhfXMrdHMcW%2F2isgPZPhgpJh8iMuJw%2FuQRvCz0ODn%2B5sBL%2B2%2FTnm2R8a6O0NoHMvK0lyFaVgSD8UlQ1aP9qh4tHxyMw4hoM0IXzmbXJWlyiUUq7eT9udn%2FMoExMEV%2F%2Bt4iNIdVJIW6Kh%2FjY9j1WxIWq8GiGk78hdAV70nWju7UaatuBAu54ztVditIWOIW1QzyAwHzI&X-Amz-Signature=a2919f81364248b0aa43bb69f1b9acaf38af59dc827bfddfdbd973a84221355a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

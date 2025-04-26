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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666C5DYWL%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T121308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDeaVqRniqZ8Z2kWxq2%2FFS4y4EcNKELp3VgPYyQe%2FJ8iAiBhf1tEcm9aX2JrBtMsEDNd2Z9VnY4NYJtLfwOZszt7Lir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMLRRcmCY%2FfSrZnCz9KtwDjoHW8hXes9uNetCwr7lfU6eUKUUeeegB3wfLz32j5XBtgJIxYaLj96kgS6zIO0F4%2F53VvPMxj5vJcdCBzgf5ob%2BMThGiX5kp5zI7nCUBgdBBji8LMIGCMGL0Cp%2BSGtr32AdRVsBl94ht7AEf0XjYAO5kUpqkNBevsGlA2wZiOec%2FEf8ti9c8hvx13OLRaAsdSpZGK%2F3Zax7G02zXjnaeDwiP5fSV3jEF5QLzbEfigo%2FUEKcHn9SS9auHObIO89HKM6kl%2FregG53RCJ0Glko%2FnS6qCjT6ZZJ73fxuv7TAia5fPdqFw4EqDYzOSbqexytdJBW2xu%2Fc8W1ySXzLFgB6b0UjM8HLD7AiDlsWwnmkO92ec%2BD%2Bmz0aRW84nVCzgF4aYhAQNJH0%2BuT2rdB1ytl1tIq82IWvCitZJfYwleD454p1AJIiQtDERxuzpaP2XDERwj%2BsF4OlvUOdqRcW2CweG6A6mPDzpks%2Fz05KtGVpKZZtR89W7%2FAjcUGiJIA2rfmnH5cO%2BkOeOz9Zoic2B7lqSYnvoaCHD29QhgsJpdH1X7GnQ5gfK8E%2BuCD%2F4x1BJYMrXVUmDBtfkfmgamxn7G6jHnSZOrx1XTrr7ZpAh%2BhhUwk3vR1og3oFdYqIga8wq4SywAY6pgE9SU06xqozkBrzP%2BaRVZPXMTSg6J7Qtpuem5JjsCxtdWYTlU7YqsTJz3DMW6zlANFHX4sRgLmNE7klolk6QkujNhSP8bv2%2B822o%2FNm%2FNK5jcazCEMvmFCIwgaijmdCm%2FIfkYXqgQyx%2FGSYEA2JHhoswmSCVJyGEF3rqsdn0dFftqKL5FqBTcK3cjuAn%2B1f3ju7GjSszGRisR%2Brq3twXMjxe02LczEl&X-Amz-Signature=17811a4b3179b4080ad27f167c47c057b1ad109f559c508379bde9aec8856f03&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666C5DYWL%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T121308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDeaVqRniqZ8Z2kWxq2%2FFS4y4EcNKELp3VgPYyQe%2FJ8iAiBhf1tEcm9aX2JrBtMsEDNd2Z9VnY4NYJtLfwOZszt7Lir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMLRRcmCY%2FfSrZnCz9KtwDjoHW8hXes9uNetCwr7lfU6eUKUUeeegB3wfLz32j5XBtgJIxYaLj96kgS6zIO0F4%2F53VvPMxj5vJcdCBzgf5ob%2BMThGiX5kp5zI7nCUBgdBBji8LMIGCMGL0Cp%2BSGtr32AdRVsBl94ht7AEf0XjYAO5kUpqkNBevsGlA2wZiOec%2FEf8ti9c8hvx13OLRaAsdSpZGK%2F3Zax7G02zXjnaeDwiP5fSV3jEF5QLzbEfigo%2FUEKcHn9SS9auHObIO89HKM6kl%2FregG53RCJ0Glko%2FnS6qCjT6ZZJ73fxuv7TAia5fPdqFw4EqDYzOSbqexytdJBW2xu%2Fc8W1ySXzLFgB6b0UjM8HLD7AiDlsWwnmkO92ec%2BD%2Bmz0aRW84nVCzgF4aYhAQNJH0%2BuT2rdB1ytl1tIq82IWvCitZJfYwleD454p1AJIiQtDERxuzpaP2XDERwj%2BsF4OlvUOdqRcW2CweG6A6mPDzpks%2Fz05KtGVpKZZtR89W7%2FAjcUGiJIA2rfmnH5cO%2BkOeOz9Zoic2B7lqSYnvoaCHD29QhgsJpdH1X7GnQ5gfK8E%2BuCD%2F4x1BJYMrXVUmDBtfkfmgamxn7G6jHnSZOrx1XTrr7ZpAh%2BhhUwk3vR1og3oFdYqIga8wq4SywAY6pgE9SU06xqozkBrzP%2BaRVZPXMTSg6J7Qtpuem5JjsCxtdWYTlU7YqsTJz3DMW6zlANFHX4sRgLmNE7klolk6QkujNhSP8bv2%2B822o%2FNm%2FNK5jcazCEMvmFCIwgaijmdCm%2FIfkYXqgQyx%2FGSYEA2JHhoswmSCVJyGEF3rqsdn0dFftqKL5FqBTcK3cjuAn%2B1f3ju7GjSszGRisR%2Brq3twXMjxe02LczEl&X-Amz-Signature=8c25b007a5d3e738c3422ee23ff632724bf3a7c5e6b0c919dde3eb9fd5982e8b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z22US7BF%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T050835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDZJZSa0atTTMrTv%2FpqK7KLqxVgn1dCves7GUOAIJSu3AiEA0Ld8OjaPZ8VvdW0Zv0DcrueAQbEfBs%2B9qPMAxwoycT4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxBqN47hGdhTd7juCrcA2RSzn2yfy%2B2ugdMnL6w%2BS0A9TAWA%2FcCI3k5uSQE9NKxytEUq4qT5kEz%2F5mnKsgVH5Ln%2FqV1lvkwZOYfJMbdauq%2FbvsF79U%2FlAqntpsJ8zkaer7I78LMOE5HhLoFWBRrDz2MNfjGPaifxamEW%2F3sX67WBUWw9qmwpzUUHaYgCJnl7qCrLEtXH0cCK0MpRo%2BvjlSBsdp%2BWoyfqv9Wm474KjEATnXumdyIfV99fCTXat2h%2B9dFy8BMYReMIPgO6E7MP1GX%2FybfAmOHv2wwiu%2FEnZGLjAUtmV9tiiyp%2BiO4lAwVe14FyBntZxfgs2C41UgWxZ2F2j%2BaqyaJKggmEMWnvuNgGAIua%2Fdm6gzI8sjhBRlwQatN6fnWT3GGdnRx7LHcHvSUA66HPn94W684GgtmtGOSA5oqp829p8cXcmVvWzHzPqL7n%2BgL7a3E9%2FMDy0Icuva%2Bba6xjvH7BkGAL1AaSmoSvGIJ1Omoci2RmEmzEo%2Bl6s0qQP8%2Ffs59TZ9nflyu9bOU9JROVi%2Fyd%2BnL0iRqfw6%2BDaK8y55RCVqrkoUttldE1oNvma4ewtdIa7ZY14c2yp5GRwNVXxts6VETu5v94BBBrXn2BL9kBrqazLHqZB2e2iekTWK8ScoDPLL%2FMKX4mL4GOqUB5o8LX6RkL0DtEcr5QSxOd6H1sBRHW2gNmmpzOK0qyLxvPMm67drY8G4mt2HF%2FFMNk%2BAg5Dmv4ig%2FB7UVsSV%2FRXf%2B73RgMiIT%2BQWanRwirRBAxqANJ9D9tK8pDy6Ajx1baRcBTr%2BuvhhHnGR5oDL05DB4eqd6822ZnmQNSvmO5OUE3Yw1I9WTHAyYLS2qBQxXBOFNOpqY5hfdfGNP3vW2dCItMrwO&X-Amz-Signature=b74dc7f53e6c57fde916e806ce6e13277997178eefbe105327a9fff0281209e4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z22US7BF%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T050835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDZJZSa0atTTMrTv%2FpqK7KLqxVgn1dCves7GUOAIJSu3AiEA0Ld8OjaPZ8VvdW0Zv0DcrueAQbEfBs%2B9qPMAxwoycT4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxBqN47hGdhTd7juCrcA2RSzn2yfy%2B2ugdMnL6w%2BS0A9TAWA%2FcCI3k5uSQE9NKxytEUq4qT5kEz%2F5mnKsgVH5Ln%2FqV1lvkwZOYfJMbdauq%2FbvsF79U%2FlAqntpsJ8zkaer7I78LMOE5HhLoFWBRrDz2MNfjGPaifxamEW%2F3sX67WBUWw9qmwpzUUHaYgCJnl7qCrLEtXH0cCK0MpRo%2BvjlSBsdp%2BWoyfqv9Wm474KjEATnXumdyIfV99fCTXat2h%2B9dFy8BMYReMIPgO6E7MP1GX%2FybfAmOHv2wwiu%2FEnZGLjAUtmV9tiiyp%2BiO4lAwVe14FyBntZxfgs2C41UgWxZ2F2j%2BaqyaJKggmEMWnvuNgGAIua%2Fdm6gzI8sjhBRlwQatN6fnWT3GGdnRx7LHcHvSUA66HPn94W684GgtmtGOSA5oqp829p8cXcmVvWzHzPqL7n%2BgL7a3E9%2FMDy0Icuva%2Bba6xjvH7BkGAL1AaSmoSvGIJ1Omoci2RmEmzEo%2Bl6s0qQP8%2Ffs59TZ9nflyu9bOU9JROVi%2Fyd%2BnL0iRqfw6%2BDaK8y55RCVqrkoUttldE1oNvma4ewtdIa7ZY14c2yp5GRwNVXxts6VETu5v94BBBrXn2BL9kBrqazLHqZB2e2iekTWK8ScoDPLL%2FMKX4mL4GOqUB5o8LX6RkL0DtEcr5QSxOd6H1sBRHW2gNmmpzOK0qyLxvPMm67drY8G4mt2HF%2FFMNk%2BAg5Dmv4ig%2FB7UVsSV%2FRXf%2B73RgMiIT%2BQWanRwirRBAxqANJ9D9tK8pDy6Ajx1baRcBTr%2BuvhhHnGR5oDL05DB4eqd6822ZnmQNSvmO5OUE3Yw1I9WTHAyYLS2qBQxXBOFNOpqY5hfdfGNP3vW2dCItMrwO&X-Amz-Signature=0e222a6be761b11f69219ffcea6e51fabfabaa0b261f094053be51b851c7cb52&X-Amz-SignedHeaders=host&x-id=GetObject)

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

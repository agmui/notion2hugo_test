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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAGLH4CR%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T031029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1b9Pauqm%2Bfh3Oio8kwi46E7On3LQKVy45SCNakATEmAIhANGRFRktTPU5soQvYTyDEwiHArpJDwGEp%2F1SZE0M7VEwKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyj6JyN0CV75cQUVJUq3AOg2d6afuPAwEKvA3r01WrKtY2YyDC3F6tp82gpf%2BSEhnJkIm3suPhyE5hyHSnIu7QWwauZCEziOtDEpoZ3B0E7M%2B85MTDwuma%2F%2BgDH3drJaaE6F442OFhYyWQa1PQdm9KfMeh%2Bbd%2F8JnzbJE1k0BG9G4EaFseKUjjykVZN6wj28wKlUvEkzMi4f7Z8r%2BN9f3nKPcoyCIZ7OzQNfY7l8afdVnV%2FApkNAqd2pHVlkLu5ohqu2tZlcAy2g8jeN7xZZhfHXhqqlvQuMohGRisMeB0bScnILClNNfmhlOOuDGtSZiPTOOGY8gZ26qBT1GcWiSMOq16rluTwMQY%2BGYkO%2FJWbrRLgHtPDQtoN2PZVZkm%2B%2BqGg8hhKia4C%2FvE2P5RgYsEo0D6wINIDkNrztTcQy8hBBR%2Fu9Dynd1KL6rzT0gtSKQYUCLPW%2Fo6oNpsQ92KIb1YkRM3vZs1T88tI5zHJzZtnVqhBex1El%2FWz4VuK26251vF5GPKksRTDFqwc7RGTY2ghx8dtn%2Bmaj8qL1lrWleXYqunfUt0av3K%2BUK1ZW6KM1pX9H%2BojwQtC8wjyKU2GwoRuJt%2BJDMdr%2BPknhVveIupGOY8wri7FuulXJ47PkNaJApy4NmPiJzpzlAV47DCQ7OS9BjqkAV8TtC4joLWsqbXqK6URw942oJzAcVnpYuQCIQ2pI6NXEu6fb01BCN0PR54KIWHtWsakeqelfWfYDBo3r241ypjZZXQUHela%2B1iRA0snXJoUJ9%2F78uAY6AHTxBkpWNDuBcbgab0Z%2BMkUVUUKS%2BKtdjSH7Wj5K63j36vdIeCxjjUpYxJBGFA6TLILMeNLDQieLd6EJBxwrX1x3S7lUShRs7EJGr3e&X-Amz-Signature=a99f45de4d53dcbac3a43631b0168a11409c089ad46e705b56c47fff4660956f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAGLH4CR%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T031029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1b9Pauqm%2Bfh3Oio8kwi46E7On3LQKVy45SCNakATEmAIhANGRFRktTPU5soQvYTyDEwiHArpJDwGEp%2F1SZE0M7VEwKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyj6JyN0CV75cQUVJUq3AOg2d6afuPAwEKvA3r01WrKtY2YyDC3F6tp82gpf%2BSEhnJkIm3suPhyE5hyHSnIu7QWwauZCEziOtDEpoZ3B0E7M%2B85MTDwuma%2F%2BgDH3drJaaE6F442OFhYyWQa1PQdm9KfMeh%2Bbd%2F8JnzbJE1k0BG9G4EaFseKUjjykVZN6wj28wKlUvEkzMi4f7Z8r%2BN9f3nKPcoyCIZ7OzQNfY7l8afdVnV%2FApkNAqd2pHVlkLu5ohqu2tZlcAy2g8jeN7xZZhfHXhqqlvQuMohGRisMeB0bScnILClNNfmhlOOuDGtSZiPTOOGY8gZ26qBT1GcWiSMOq16rluTwMQY%2BGYkO%2FJWbrRLgHtPDQtoN2PZVZkm%2B%2BqGg8hhKia4C%2FvE2P5RgYsEo0D6wINIDkNrztTcQy8hBBR%2Fu9Dynd1KL6rzT0gtSKQYUCLPW%2Fo6oNpsQ92KIb1YkRM3vZs1T88tI5zHJzZtnVqhBex1El%2FWz4VuK26251vF5GPKksRTDFqwc7RGTY2ghx8dtn%2Bmaj8qL1lrWleXYqunfUt0av3K%2BUK1ZW6KM1pX9H%2BojwQtC8wjyKU2GwoRuJt%2BJDMdr%2BPknhVveIupGOY8wri7FuulXJ47PkNaJApy4NmPiJzpzlAV47DCQ7OS9BjqkAV8TtC4joLWsqbXqK6URw942oJzAcVnpYuQCIQ2pI6NXEu6fb01BCN0PR54KIWHtWsakeqelfWfYDBo3r241ypjZZXQUHela%2B1iRA0snXJoUJ9%2F78uAY6AHTxBkpWNDuBcbgab0Z%2BMkUVUUKS%2BKtdjSH7Wj5K63j36vdIeCxjjUpYxJBGFA6TLILMeNLDQieLd6EJBxwrX1x3S7lUShRs7EJGr3e&X-Amz-Signature=432fb38491f666483c3cd6805bf584d81c1ae2c70624a6a575891aae99b7e92b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

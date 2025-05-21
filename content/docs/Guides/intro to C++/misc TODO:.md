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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3OU73TZ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T004210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCL50z2e92VY6rzNKWEbwBa7TnBnPDU4xjCE%2FP9LK23LwIgXhNfTM5sDzy3FFu2oel8Oxp3jVhrMjEPozUqh7UiawwqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5sKrPM9FaVzVneeyrcA8R%2BJcDdT61v2yVZjDVaJKf4vsxRBAq1DIDAixZAKkHhbrutn0xTh8rF0VCZ4ArjW7kQMhUoTFh5fD%2B4M4AFsim1Y7nh93knqFCOVFJfd7Uam6b23ghcx6Nu4%2FeVgiTQbrmyzoFPvBNo%2Bq63LlyjZuVRy4cEf57%2BKeiMdg4PzBgPCkKR9SvKYBPNIw9IiWY4prAE1aUC9UQbckOIqv0646BxbRiKNmrUwStS2NVGiqUgn3jc1FgL%2BIzWJeD%2Fem0FyXH5feCwTjmOtyp4kgm7ocrexrW450gG1GA4aP4KuH8Pn7a2cdbe3pDjgpO2hEe5lNR92p%2FUxoTFlS6WlntWK2ISpvag3mzV0BGSQn7vHVUShTyjGykObmKaMUMN4n2Jflzy9nYEKzN6pVqjVayk0TYKIkgpce2YiOO6a4w3UDV30VdXEOyeX6Z83JgXSJjpZPxcuiZxiAoCqbSd9xBAfPuNNbZDNYLECL9E84SinDamPZjDhUQmKs8dWfCKb7o1mB9WZg62oWomm%2BOpVyuRFp7NIvNqs7%2F6HJJfjb3H6ekK8baUK15WCfaELhCIv5uOv7dP%2FUJszDDxE5qo9Aep71f%2F%2BGjH9chKgp3exTIoW5XOMMI19CWqXc5%2ByMaMMKmjtMEGOqUBdn4TrWTzlYt8LCyNcACr4stjoFRFbZyEQxrWfvvnsCM7h4j3NxczqwJhBKPmiFzHu7u3OxalVbFn0Upb0SFJxBfM3uy32q2PWC2D4jaIHa1HRSRccobJ3B%2Bz3ndRe121cmiYlL%2BDnj%2BWHB056f%2FxB57vnUbBuS2Gif0AeziuT42SLMSproUQC%2FZHSTEILiIFoPTtdPOn3dhhejnZHHG1S0t%2FbLXk&X-Amz-Signature=bd61b4c1c0d6f012abaf9dcad0d84271e2cba327aeb77496383c11ed8b43c991&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3OU73TZ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T004209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCL50z2e92VY6rzNKWEbwBa7TnBnPDU4xjCE%2FP9LK23LwIgXhNfTM5sDzy3FFu2oel8Oxp3jVhrMjEPozUqh7UiawwqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5sKrPM9FaVzVneeyrcA8R%2BJcDdT61v2yVZjDVaJKf4vsxRBAq1DIDAixZAKkHhbrutn0xTh8rF0VCZ4ArjW7kQMhUoTFh5fD%2B4M4AFsim1Y7nh93knqFCOVFJfd7Uam6b23ghcx6Nu4%2FeVgiTQbrmyzoFPvBNo%2Bq63LlyjZuVRy4cEf57%2BKeiMdg4PzBgPCkKR9SvKYBPNIw9IiWY4prAE1aUC9UQbckOIqv0646BxbRiKNmrUwStS2NVGiqUgn3jc1FgL%2BIzWJeD%2Fem0FyXH5feCwTjmOtyp4kgm7ocrexrW450gG1GA4aP4KuH8Pn7a2cdbe3pDjgpO2hEe5lNR92p%2FUxoTFlS6WlntWK2ISpvag3mzV0BGSQn7vHVUShTyjGykObmKaMUMN4n2Jflzy9nYEKzN6pVqjVayk0TYKIkgpce2YiOO6a4w3UDV30VdXEOyeX6Z83JgXSJjpZPxcuiZxiAoCqbSd9xBAfPuNNbZDNYLECL9E84SinDamPZjDhUQmKs8dWfCKb7o1mB9WZg62oWomm%2BOpVyuRFp7NIvNqs7%2F6HJJfjb3H6ekK8baUK15WCfaELhCIv5uOv7dP%2FUJszDDxE5qo9Aep71f%2F%2BGjH9chKgp3exTIoW5XOMMI19CWqXc5%2ByMaMMKmjtMEGOqUBdn4TrWTzlYt8LCyNcACr4stjoFRFbZyEQxrWfvvnsCM7h4j3NxczqwJhBKPmiFzHu7u3OxalVbFn0Upb0SFJxBfM3uy32q2PWC2D4jaIHa1HRSRccobJ3B%2Bz3ndRe121cmiYlL%2BDnj%2BWHB056f%2FxB57vnUbBuS2Gif0AeziuT42SLMSproUQC%2FZHSTEILiIFoPTtdPOn3dhhejnZHHG1S0t%2FbLXk&X-Amz-Signature=3284b616ba59b729d5fadfa4108c6423e6691d993c0982074b1f7faa8e951537&X-Amz-SignedHeaders=host&x-id=GetObject)

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

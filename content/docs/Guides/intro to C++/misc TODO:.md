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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF5UZFFA%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T181047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZ43IUIdJu7A0hkJcCrQ9SL39aUT6MOjPZ%2BRAHKyzF%2BAIhAL3KZKxSoeR1q5UPuAjbWGkPzV8%2F%2BH19a4UfXNJJ9jogKv8DCHoQABoMNjM3NDIzMTgzODA1Igx0TeyvpHyi3%2Bw5wi8q3AOeEBgAhZfmpSj5vIZNbutROAOSsbgJC7FO4FBYmSG9cgSQhC%2FrS4S0Ac7O6cMISfzufySNZUs%2FoRP9uuwNBtVZjoLsdwC%2BRZD5AjcFVIrYTBeLUd1A%2BOpNaxU72vwES%2Fate0hLWtHzJJIn0YEsipceAkdgzUg4jZ%2Bp8og1puSabrOA2t18K2T4kaqBsOt1stsl%2F%2BLDwfRmAdBl2Rf52%2FQ6PC%2BbQlueC1pSFSF6FRkXpbQquhDRYeVOs6IRLpt0q12kK%2B2D3XJ6UJ6cYRTjjGQoXV5LU%2BI2YuWSKC2wfw7GvxCtr64orVQ6cpGXNWVRefYjAvMSQNwrMvYme7DEEgMFMXvMQtF2TdlnlWGXbiVI7wNUo409pnM5L3nuQMYfmQxO2jvbwPlRzh%2FLlM81yzuxyuUmPIWzvT8lenefuvQir2eu3Gm6%2B%2FUAR6KGyhxY9tDy9h6EglW6u%2BdLj99vko6R4Vbsk6n6MT4%2F4UD3DbmtIN4MXUCveN88%2BOjZMw%2BFLmxgVclpfEii2ncd9SH2%2F%2FAg3keqW9BKjKCNqVcxIqCrZi17mp6n%2FZ0y7CJAEDYvXUPQMvMPP6bImxgFtN0yWsn91%2FQL3qvrz0N42V8vWSa7xYiOBmI9wQaHzXnFEzDek4rABjqkATW%2BrXnlTodF2GbBtsCCHufVSpxZN1JH6RflVC3SkDbA3WmTuZ5wF9pekEXtAES4EEZG6ed5oKWEJOl74OtXDIPDfRYjnxMNHZDHYqabcbt4bD3bVtk%2F0r8nYI7ciQqcyOUSm1iQNWNCa2zymScIaF6repQYHP4p0hemluEMYGU19f2lB6DOPl%2FEwWNpFm15p5VhiErsT921MjCO26i9v4Cu0xAV&X-Amz-Signature=0e07316f20f0ec12a7db9bd3c27264138cd579e0c43c50324385b50893bbd092&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF5UZFFA%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T181047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZ43IUIdJu7A0hkJcCrQ9SL39aUT6MOjPZ%2BRAHKyzF%2BAIhAL3KZKxSoeR1q5UPuAjbWGkPzV8%2F%2BH19a4UfXNJJ9jogKv8DCHoQABoMNjM3NDIzMTgzODA1Igx0TeyvpHyi3%2Bw5wi8q3AOeEBgAhZfmpSj5vIZNbutROAOSsbgJC7FO4FBYmSG9cgSQhC%2FrS4S0Ac7O6cMISfzufySNZUs%2FoRP9uuwNBtVZjoLsdwC%2BRZD5AjcFVIrYTBeLUd1A%2BOpNaxU72vwES%2Fate0hLWtHzJJIn0YEsipceAkdgzUg4jZ%2Bp8og1puSabrOA2t18K2T4kaqBsOt1stsl%2F%2BLDwfRmAdBl2Rf52%2FQ6PC%2BbQlueC1pSFSF6FRkXpbQquhDRYeVOs6IRLpt0q12kK%2B2D3XJ6UJ6cYRTjjGQoXV5LU%2BI2YuWSKC2wfw7GvxCtr64orVQ6cpGXNWVRefYjAvMSQNwrMvYme7DEEgMFMXvMQtF2TdlnlWGXbiVI7wNUo409pnM5L3nuQMYfmQxO2jvbwPlRzh%2FLlM81yzuxyuUmPIWzvT8lenefuvQir2eu3Gm6%2B%2FUAR6KGyhxY9tDy9h6EglW6u%2BdLj99vko6R4Vbsk6n6MT4%2F4UD3DbmtIN4MXUCveN88%2BOjZMw%2BFLmxgVclpfEii2ncd9SH2%2F%2FAg3keqW9BKjKCNqVcxIqCrZi17mp6n%2FZ0y7CJAEDYvXUPQMvMPP6bImxgFtN0yWsn91%2FQL3qvrz0N42V8vWSa7xYiOBmI9wQaHzXnFEzDek4rABjqkATW%2BrXnlTodF2GbBtsCCHufVSpxZN1JH6RflVC3SkDbA3WmTuZ5wF9pekEXtAES4EEZG6ed5oKWEJOl74OtXDIPDfRYjnxMNHZDHYqabcbt4bD3bVtk%2F0r8nYI7ciQqcyOUSm1iQNWNCa2zymScIaF6repQYHP4p0hemluEMYGU19f2lB6DOPl%2FEwWNpFm15p5VhiErsT921MjCO26i9v4Cu0xAV&X-Amz-Signature=182a32d0859f684d18fb60df7a9583b1dffff03cee33e012c7cda9c076d92f9a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

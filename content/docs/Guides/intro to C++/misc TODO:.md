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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDQAHXLV%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T070742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQDh8L2iXxrUUYSBiyxmsuSsOdoONlpiDOjXWfgbjiHmIgIhALBLD%2FveIJNSlNySi6IClK0c9%2FIc54hPt%2FHDaUJl6Ol%2BKv8DCBAQABoMNjM3NDIzMTgzODA1IgzmVZi%2FEn%2FJYvdKpW4q3AMx%2BTOdpdDbNTOPvtxbZsN091slwWp%2Ft98rkaOwTCCusgyGsWHptts7VEry13Fvqgv52SR6li%2F5YtfrsRitaVjkzi4M0FZeWat4CDmTxJyUGEsKPMvgD1RYOkl6%2BXPBXAifDde8TgqNfzVg%2FnOM4GcfnhDxFoZJEGSUJCPTUnWK%2BOqS6Fu5CSyFddqJUWQQDdy%2BWkkdUNpWeaMM92QQRVp76FWhvNpMqTSwkPoJPRQXvXwAlp978KzOrqibv7u%2BEfqtbDQKqwYwfSUKGTFRi%2B1tgHuh%2F7RDT%2FqCcVi845mz3rGTn7fxEG%2BRPxxrxWZhXvFESlcosp3XGbjYbDL%2Bs%2Biz7V4mhdGu2zO%2FIl%2FnKfEHCxxZFUT3fPR%2F13V%2FxNK212lrts2HL7%2FX7DCLWEXDR6w54lmRC9RqXY3q%2BUUd5RhswlUiOmuFZi8Fs7E3XqzKjPlhZ7%2B%2FvqTIU2KdBgVkpW6iw3RXcfGbsRKTUF6agx1gMjshsjx1DVOVstol5h%2Fi9VCYLprEzj8urYUlR6DRlWmr2rBseY5b89n9ZvVteb6OBWvm5ksXlDfNGyv2sl8I%2B4aI7MHTWsPT%2Byralru32WDH8ooPzNEYpYx5F27AfXlb3EcrWZqk%2FCH2BZIVmjDS0cXBBjqkAUc6UC9Yhkcflz%2BUMZp58fEha9dWA9YiIcZmxNaOoR9dt5WrwlWUvj%2Fd%2Fi%2Bw090tFDVtOgmaSti6dSEVwOd0m9eQwfwC06nscCd0zVIcqWzVounV024ks3fi1Cm9NCuB3%2FgEhktKn4rdhUUoFghfDbIv9TFcG%2FMGG8DYV42H%2B8RGbj1dpiOfOnhNVEcE%2BZstXMoD4gqy8Vw%2FMQomfxc81lDzSYub&X-Amz-Signature=f1436e354eb4fc832090395a4aaaa43432377b38deb432a49a637f9e8e24fd32&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDQAHXLV%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T070742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQDh8L2iXxrUUYSBiyxmsuSsOdoONlpiDOjXWfgbjiHmIgIhALBLD%2FveIJNSlNySi6IClK0c9%2FIc54hPt%2FHDaUJl6Ol%2BKv8DCBAQABoMNjM3NDIzMTgzODA1IgzmVZi%2FEn%2FJYvdKpW4q3AMx%2BTOdpdDbNTOPvtxbZsN091slwWp%2Ft98rkaOwTCCusgyGsWHptts7VEry13Fvqgv52SR6li%2F5YtfrsRitaVjkzi4M0FZeWat4CDmTxJyUGEsKPMvgD1RYOkl6%2BXPBXAifDde8TgqNfzVg%2FnOM4GcfnhDxFoZJEGSUJCPTUnWK%2BOqS6Fu5CSyFddqJUWQQDdy%2BWkkdUNpWeaMM92QQRVp76FWhvNpMqTSwkPoJPRQXvXwAlp978KzOrqibv7u%2BEfqtbDQKqwYwfSUKGTFRi%2B1tgHuh%2F7RDT%2FqCcVi845mz3rGTn7fxEG%2BRPxxrxWZhXvFESlcosp3XGbjYbDL%2Bs%2Biz7V4mhdGu2zO%2FIl%2FnKfEHCxxZFUT3fPR%2F13V%2FxNK212lrts2HL7%2FX7DCLWEXDR6w54lmRC9RqXY3q%2BUUd5RhswlUiOmuFZi8Fs7E3XqzKjPlhZ7%2B%2FvqTIU2KdBgVkpW6iw3RXcfGbsRKTUF6agx1gMjshsjx1DVOVstol5h%2Fi9VCYLprEzj8urYUlR6DRlWmr2rBseY5b89n9ZvVteb6OBWvm5ksXlDfNGyv2sl8I%2B4aI7MHTWsPT%2Byralru32WDH8ooPzNEYpYx5F27AfXlb3EcrWZqk%2FCH2BZIVmjDS0cXBBjqkAUc6UC9Yhkcflz%2BUMZp58fEha9dWA9YiIcZmxNaOoR9dt5WrwlWUvj%2Fd%2Fi%2Bw090tFDVtOgmaSti6dSEVwOd0m9eQwfwC06nscCd0zVIcqWzVounV024ks3fi1Cm9NCuB3%2FgEhktKn4rdhUUoFghfDbIv9TFcG%2FMGG8DYV42H%2B8RGbj1dpiOfOnhNVEcE%2BZstXMoD4gqy8Vw%2FMQomfxc81lDzSYub&X-Amz-Signature=2a153ec929ca781fa5c1c9ff7b65c999da41c166d6539d7e3bdd24baf3feba20&X-Amz-SignedHeaders=host&x-id=GetObject)

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

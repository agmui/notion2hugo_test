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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQIMWTWX%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T024022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKT0Mtu1eonim0TIF3dfIQSOqok0p7TaWjvQCFXGmDqwIhALKexiY4j83mT0MU8TmaYyYNaitLXs7BKmIMsdVyCQ8QKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzO2OPK6lSpQOu0mZUq3AOO3yUI%2B0AmWn6ySJ6ZBA%2B28T9lX1SZD%2F581nJxxR42Eu59uc%2FVyXCptSD22lb0RANThPVvMkpTwMW4Pr8B%2BOC5Z1bR9wbuvAOW45c4g2B4Gtvjp%2BBkIe5dIoOhxZhotxrkJ0HuhxmzGb97tTcmvA%2F%2BWh%2FXWrgdt35DGH4RKtohS25mUUvV%2FC54szsXkxMwHG0jyQacWKk1i5rCmKXYmhgjz9pOsDZGXJBRDlpllC4%2BK%2Fo4BcXn%2Fe0GtrG63RYXWNf2F16yaUuQJq%2BCYiDuaH4bf4YLXE%2FXsEsRaaci99maAYMWB5Fwu%2BfIxfATihnwaiRktNvohKS1OUAnou6fl2m9GsqL5HgpgbVz9KsTx8ymPchPxmE0bXznAWWmb1FX2KI91I12KVs3FCAXgnZVzJpZMM7rJ7humGYd0OWJDjWbRggSvj5RdkE%2FU7eXm%2FYWY3ganvl1UXMcERAYOJrnhcfFFDZ8iq%2FsHePnbLDs6wW7JtnNYe5SeY0QHjIppP6ge8u9mtoMtHYGAO3D80VrEqLjbcIcAwQbGDUwQEwkec9Ei4L9uUA%2F6oGzgxmxdk0Z6Ioz9CaRv7pv1y9Y6mIGT1YxTQY%2BVylEQndN%2ByNcb%2Beh8gpzT3DDjhL0BrzRXTDun57CBjqkAfjHIqOC9C7BZRNRMzVv3yBbC8hg3juZ21NntBlBuuyTTdb%2B863jg%2BVehxjadvUm%2BvoiUG%2BRGrAH%2Ba1oe1UCxkViOxANFHe6gcmnS0L2H0Ep1BanNcHvRGpW%2BIIKK2752wwelLZMaTqQ5UvLAwALbb1qRm7UBE4aVnVZRZ7RCCj4F81hUw7qDDia%2F3F40G%2Fs0LZxAdYcQ%2BEOmNhmUN9SZzZCwb8Q&X-Amz-Signature=5cf341e9ee04783225be8842f496f267ae2807010c3b51b762ef99885df46a8e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQIMWTWX%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T024022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKT0Mtu1eonim0TIF3dfIQSOqok0p7TaWjvQCFXGmDqwIhALKexiY4j83mT0MU8TmaYyYNaitLXs7BKmIMsdVyCQ8QKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzO2OPK6lSpQOu0mZUq3AOO3yUI%2B0AmWn6ySJ6ZBA%2B28T9lX1SZD%2F581nJxxR42Eu59uc%2FVyXCptSD22lb0RANThPVvMkpTwMW4Pr8B%2BOC5Z1bR9wbuvAOW45c4g2B4Gtvjp%2BBkIe5dIoOhxZhotxrkJ0HuhxmzGb97tTcmvA%2F%2BWh%2FXWrgdt35DGH4RKtohS25mUUvV%2FC54szsXkxMwHG0jyQacWKk1i5rCmKXYmhgjz9pOsDZGXJBRDlpllC4%2BK%2Fo4BcXn%2Fe0GtrG63RYXWNf2F16yaUuQJq%2BCYiDuaH4bf4YLXE%2FXsEsRaaci99maAYMWB5Fwu%2BfIxfATihnwaiRktNvohKS1OUAnou6fl2m9GsqL5HgpgbVz9KsTx8ymPchPxmE0bXznAWWmb1FX2KI91I12KVs3FCAXgnZVzJpZMM7rJ7humGYd0OWJDjWbRggSvj5RdkE%2FU7eXm%2FYWY3ganvl1UXMcERAYOJrnhcfFFDZ8iq%2FsHePnbLDs6wW7JtnNYe5SeY0QHjIppP6ge8u9mtoMtHYGAO3D80VrEqLjbcIcAwQbGDUwQEwkec9Ei4L9uUA%2F6oGzgxmxdk0Z6Ioz9CaRv7pv1y9Y6mIGT1YxTQY%2BVylEQndN%2ByNcb%2Beh8gpzT3DDjhL0BrzRXTDun57CBjqkAfjHIqOC9C7BZRNRMzVv3yBbC8hg3juZ21NntBlBuuyTTdb%2B863jg%2BVehxjadvUm%2BvoiUG%2BRGrAH%2Ba1oe1UCxkViOxANFHe6gcmnS0L2H0Ep1BanNcHvRGpW%2BIIKK2752wwelLZMaTqQ5UvLAwALbb1qRm7UBE4aVnVZRZ7RCCj4F81hUw7qDDia%2F3F40G%2Fs0LZxAdYcQ%2BEOmNhmUN9SZzZCwb8Q&X-Amz-Signature=060bbda69f6418c41e3dcd4af51a12cdf5cbea60ea4da251d5e074845c3addbb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

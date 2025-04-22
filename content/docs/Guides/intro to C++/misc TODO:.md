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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YQXPJHK%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T041051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCF7glaOe9ax%2FxzZBvYQOCCa62As%2B1mavdmk84EZ%2BCTawIgTunDVWbBfWCpU8ZLLjX5UZjArkAWPnyWN0TrHsk%2BkuYqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImMXKaPtHRc9vOfBSrcA6dhStPstld9lCLo35BX1eyHQz4uJA3WQHsjETUi4k8Pt9lStglzP6BFwjbX8fFsP0ZpXwWXBaapXOjYHdiYoDZALPmc5EF5ovWxPnePFyg0Kg43XYrA7NyzqvYfPJibnia2ejRWq%2FvF6UIV0XBKdT3PXbRqgWuKBGoVkVg1orQV%2BbJSLSvjFIRhFJG6Kg7PQh%2B5spA%2BSIdQ49IKmdeG9F5MWU%2Fu0ABFyLubZxfqZlllZXWmOnzqVSSswBwwGCTICCM3WmIsoFScYrLxXpNsKftm0y8j8b4%2FxhlWnXphHZ9vT86mNW01wWvMFl7wn1WoLWrxt%2FxHaVd8YsBlAYpRnHcc2WrZHc1EBiZy4SeDZNxMPcSeYg%2B7VPaxMcNKhvR4V3nYAdaPBllIL4nEBTiD1EtLtK%2FQ%2BGuI7dbVDa12QRamylQWwGKwk8Yle9Jzq3wP8DWNYsu4LHzufsWUBwsSe9qdNY3GETVHZg02i%2BP80zWQpVcz9BfNLfOygpBR8IUmgRQuRaO%2FBktulXizUHLckdZADVMdNQcs3daiTTGpfgsaMfKj7S%2F0xitBzpjFmC%2BznY9HzwZL3XDfDqY1%2FTDlweAycAav3mCseA%2BM4IffcW9Q7HjUWpEZRO87UMlKMJqinMAGOqUBgp%2BVIts1E3AxiVLNwP36IN3%2FQRmt47qJuCJZxqVwZI%2BNTTc2XQSwLCYBDeNTTtYs29RUoMbrRvrAYTT05B3rBtAO12pyJzbMfehG5YJtIJttdx9TPWA8tI5wOxXXm0qaDJtuZhgRnoNHXP%2Bn%2Boag02IEqQ92VWH9YH1Y1Mu2%2FH4aXhXT6gzrXjHCoZvGYpaBrw0ECe9FnWNK%2Bzx75GAoQA1Ao0Z%2F&X-Amz-Signature=f6e3285ecd41f8afb115955d6305e2a13c816b9d7f9f20c77b0293a2b2835c48&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YQXPJHK%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T041051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCF7glaOe9ax%2FxzZBvYQOCCa62As%2B1mavdmk84EZ%2BCTawIgTunDVWbBfWCpU8ZLLjX5UZjArkAWPnyWN0TrHsk%2BkuYqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImMXKaPtHRc9vOfBSrcA6dhStPstld9lCLo35BX1eyHQz4uJA3WQHsjETUi4k8Pt9lStglzP6BFwjbX8fFsP0ZpXwWXBaapXOjYHdiYoDZALPmc5EF5ovWxPnePFyg0Kg43XYrA7NyzqvYfPJibnia2ejRWq%2FvF6UIV0XBKdT3PXbRqgWuKBGoVkVg1orQV%2BbJSLSvjFIRhFJG6Kg7PQh%2B5spA%2BSIdQ49IKmdeG9F5MWU%2Fu0ABFyLubZxfqZlllZXWmOnzqVSSswBwwGCTICCM3WmIsoFScYrLxXpNsKftm0y8j8b4%2FxhlWnXphHZ9vT86mNW01wWvMFl7wn1WoLWrxt%2FxHaVd8YsBlAYpRnHcc2WrZHc1EBiZy4SeDZNxMPcSeYg%2B7VPaxMcNKhvR4V3nYAdaPBllIL4nEBTiD1EtLtK%2FQ%2BGuI7dbVDa12QRamylQWwGKwk8Yle9Jzq3wP8DWNYsu4LHzufsWUBwsSe9qdNY3GETVHZg02i%2BP80zWQpVcz9BfNLfOygpBR8IUmgRQuRaO%2FBktulXizUHLckdZADVMdNQcs3daiTTGpfgsaMfKj7S%2F0xitBzpjFmC%2BznY9HzwZL3XDfDqY1%2FTDlweAycAav3mCseA%2BM4IffcW9Q7HjUWpEZRO87UMlKMJqinMAGOqUBgp%2BVIts1E3AxiVLNwP36IN3%2FQRmt47qJuCJZxqVwZI%2BNTTc2XQSwLCYBDeNTTtYs29RUoMbrRvrAYTT05B3rBtAO12pyJzbMfehG5YJtIJttdx9TPWA8tI5wOxXXm0qaDJtuZhgRnoNHXP%2Bn%2Boag02IEqQ92VWH9YH1Y1Mu2%2FH4aXhXT6gzrXjHCoZvGYpaBrw0ECe9FnWNK%2Bzx75GAoQA1Ao0Z%2F&X-Amz-Signature=5efff77fcf071ca47299c1b40d88d4f219282fd59dd6398773d60452ebd16b32&X-Amz-SignedHeaders=host&x-id=GetObject)

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

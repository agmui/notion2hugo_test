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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M72BMQ6%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDtpoaD0X12ZViREI2KUS%2BhiGmedUKTnpNL8xUTxorJQIhALTjOj6P2jIFJp%2BYprEh5K15i1ftUqhB7wspDQB4MkFAKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy55gCF2ykhKa05yjsq3AMU7RpXzgkBbcK2TJIndAO5oZMHoHAD%2FDeWVxZdKcxlMms2NY27jaHypo%2BPP%2BMh%2B4qHlxMGY0qoxzPTSfbOMxszH%2F%2BH1mqRsE9ulNsiYRH0l1cST2x5OyPhI%2FKYqIm7ovwQo43opV7JA8tUTtk%2BtBe0Z%2B9gfR18LwRdxigP6pdyeayV7EbtStj%2F4fgc4%2FxEFvyEASXF%2F4MRI70Q5XUO8O7MBo8JTRU69dcLLJc3GLj6oyy84ukCKiR8PMn29rr34urB98mVJ0B02IfzBV0oW5GdeTGGjHbv7uKSPFEHif5b4khL4T6BRqW20sCWAyCV6POdj20Vc6DN%2FEcUp6q0XbX7ZeR1ArNd%2FjJ2NMHiT0iNsy8VwbNowhxquF8GRpYjYhofO4U6vhBsJ6X4pu7kIMuhiZYbysRjQNAf5x2xz5mOXx%2BEZa3vpzC2%2F3FKJ2ISUgk%2FMmnCUAEDP%2F5WO7XDByYrinIPVufkkOtlW2%2FsrS3bk4Z8FH00PTlRek4x%2B9f1YyFC5lJuAV%2BYgaRm4Y7hFUY2S0ttYXiNEBhWMcJ8fBSSBW%2FdgGsBlqN42wWago9Eoe%2BkSjB6i86lroYaXMoDx8pYquvzkzU8HzInX%2F4UpxgwB7QTmR%2B7pwZ%2FcpBRHDCm0%2BzBBjqkAcOGEr9gC1SjrzS6q6Mgx5H9gh6nVKM037eVHMBp%2BcwwcuCzRnf7YKBFURfdHjvRwK66sLAjSOdBf7AfHDpdK8rHPhWzKOqBTrEX785P7UIE6xtHEiFealhw0GEtxmlj4qelXo6jT40xWrxt6j2O2PInYxUpib74teoAinEWJkU%2BPKLcNoIUIFoHywrNgCU28oFgBa14L1SLuK67112mxUhAHojT&X-Amz-Signature=39286322c885828b1709f48556e2d25e31596577862e64c461d55151f73b83c8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M72BMQ6%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDtpoaD0X12ZViREI2KUS%2BhiGmedUKTnpNL8xUTxorJQIhALTjOj6P2jIFJp%2BYprEh5K15i1ftUqhB7wspDQB4MkFAKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy55gCF2ykhKa05yjsq3AMU7RpXzgkBbcK2TJIndAO5oZMHoHAD%2FDeWVxZdKcxlMms2NY27jaHypo%2BPP%2BMh%2B4qHlxMGY0qoxzPTSfbOMxszH%2F%2BH1mqRsE9ulNsiYRH0l1cST2x5OyPhI%2FKYqIm7ovwQo43opV7JA8tUTtk%2BtBe0Z%2B9gfR18LwRdxigP6pdyeayV7EbtStj%2F4fgc4%2FxEFvyEASXF%2F4MRI70Q5XUO8O7MBo8JTRU69dcLLJc3GLj6oyy84ukCKiR8PMn29rr34urB98mVJ0B02IfzBV0oW5GdeTGGjHbv7uKSPFEHif5b4khL4T6BRqW20sCWAyCV6POdj20Vc6DN%2FEcUp6q0XbX7ZeR1ArNd%2FjJ2NMHiT0iNsy8VwbNowhxquF8GRpYjYhofO4U6vhBsJ6X4pu7kIMuhiZYbysRjQNAf5x2xz5mOXx%2BEZa3vpzC2%2F3FKJ2ISUgk%2FMmnCUAEDP%2F5WO7XDByYrinIPVufkkOtlW2%2FsrS3bk4Z8FH00PTlRek4x%2B9f1YyFC5lJuAV%2BYgaRm4Y7hFUY2S0ttYXiNEBhWMcJ8fBSSBW%2FdgGsBlqN42wWago9Eoe%2BkSjB6i86lroYaXMoDx8pYquvzkzU8HzInX%2F4UpxgwB7QTmR%2B7pwZ%2FcpBRHDCm0%2BzBBjqkAcOGEr9gC1SjrzS6q6Mgx5H9gh6nVKM037eVHMBp%2BcwwcuCzRnf7YKBFURfdHjvRwK66sLAjSOdBf7AfHDpdK8rHPhWzKOqBTrEX785P7UIE6xtHEiFealhw0GEtxmlj4qelXo6jT40xWrxt6j2O2PInYxUpib74teoAinEWJkU%2BPKLcNoIUIFoHywrNgCU28oFgBa14L1SLuK67112mxUhAHojT&X-Amz-Signature=15381405e4a48de2a622190527d113f20ddcbf52257fa8ef18647c94fd68c694&X-Amz-SignedHeaders=host&x-id=GetObject)

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

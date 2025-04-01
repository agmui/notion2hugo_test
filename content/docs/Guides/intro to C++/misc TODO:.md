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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFT2WSJF%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T041134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCICRh%2F1OsZUm%2B0n0aSKOlgognaJLwjJtpdTFjkQ5%2BAuv6AiEAlYALkgKXoqh07e4OCuCkGRL450TVqDWH33oEgvBZklgqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAiM7GCbCPc7JOvPtSrcA%2BydGr2XR7JPUKDgzEsV688ljUWhO1lfNfsPxcbtfbIzK2LNxcK0n3ktyIt6LpsxaTWQ8CdhX9BrpiAX5v46G6UGm%2FHkrGxDAKqaagSym3dmkYoYJSEgc%2FVbxdMoLCjPAZL2SazM8pTBqQjHmxdwlyq0V0VCJT8Wh9usQ78QfsjidOhj4lVxdHR6FB7vbiIBfQY0GZ7WM3553OKYD46UMZvzYBzmfafOAudAE9WgvkKY8%2BtGKtc3DuRy85UFlIi3dm5zZ6WFMDY28%2FveuTnztMiaK5wZpzTU%2Fpri3RuloKGxMRQGyRanczKnBkJvPm3qy3uEoLIoeRTPmztNOInVCXVur81YiwlW8NRA5BMhq1FmC2h6OR1oemlAkKGaxxGhqMxDC1cM55%2Bbq31MENDomePAxjwHpLPtO1C0Q601s87gESn%2Bcqcz4vCWQwHemB%2F3FYKzggkF8crxeg%2FxfX8i4arph3g38KXMccOGWPy%2Fo7e7oQHUUjVBk2YtBsKtkHNAiYEqdcfTGZNdG8%2F7QhPlfka5QGrn6k12Pgi1U9NQqkNsMlWd7PQ1S2RsIUM2il5Mx9mrUw2xD5YaGADzhioF0LL2D1S9q8rSmwMA9l5QkOhX6YsSiTrxCpfe40oKMPakrb8GOqUBYSXqk%2FpDaUWWA%2BUPoXqrMk6KYhmeJo%2FMi2eyyLwm4tmw9DM2UJPglwjPoTOxORS6%2BhWrphj58EWMuj%2FqQWBiX%2BxMLGiJYfrWe01G2iCO102SGLL17uijy8CavU2tDj4U0NLN5PFom0SGjKQU%2F9%2FcR%2BBcyGbgtn%2B9DugLtVboozTeDHs44x8%2BXZxuG3XfsOjJW3qygOa7QedPbogBiI12iCtzaly9&X-Amz-Signature=5d77eb1561bc9289daef50f691cb482b9340a5a2ec68e5eecb4f578acabecdb4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFT2WSJF%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T041134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCICRh%2F1OsZUm%2B0n0aSKOlgognaJLwjJtpdTFjkQ5%2BAuv6AiEAlYALkgKXoqh07e4OCuCkGRL450TVqDWH33oEgvBZklgqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAiM7GCbCPc7JOvPtSrcA%2BydGr2XR7JPUKDgzEsV688ljUWhO1lfNfsPxcbtfbIzK2LNxcK0n3ktyIt6LpsxaTWQ8CdhX9BrpiAX5v46G6UGm%2FHkrGxDAKqaagSym3dmkYoYJSEgc%2FVbxdMoLCjPAZL2SazM8pTBqQjHmxdwlyq0V0VCJT8Wh9usQ78QfsjidOhj4lVxdHR6FB7vbiIBfQY0GZ7WM3553OKYD46UMZvzYBzmfafOAudAE9WgvkKY8%2BtGKtc3DuRy85UFlIi3dm5zZ6WFMDY28%2FveuTnztMiaK5wZpzTU%2Fpri3RuloKGxMRQGyRanczKnBkJvPm3qy3uEoLIoeRTPmztNOInVCXVur81YiwlW8NRA5BMhq1FmC2h6OR1oemlAkKGaxxGhqMxDC1cM55%2Bbq31MENDomePAxjwHpLPtO1C0Q601s87gESn%2Bcqcz4vCWQwHemB%2F3FYKzggkF8crxeg%2FxfX8i4arph3g38KXMccOGWPy%2Fo7e7oQHUUjVBk2YtBsKtkHNAiYEqdcfTGZNdG8%2F7QhPlfka5QGrn6k12Pgi1U9NQqkNsMlWd7PQ1S2RsIUM2il5Mx9mrUw2xD5YaGADzhioF0LL2D1S9q8rSmwMA9l5QkOhX6YsSiTrxCpfe40oKMPakrb8GOqUBYSXqk%2FpDaUWWA%2BUPoXqrMk6KYhmeJo%2FMi2eyyLwm4tmw9DM2UJPglwjPoTOxORS6%2BhWrphj58EWMuj%2FqQWBiX%2BxMLGiJYfrWe01G2iCO102SGLL17uijy8CavU2tDj4U0NLN5PFom0SGjKQU%2F9%2FcR%2BBcyGbgtn%2B9DugLtVboozTeDHs44x8%2BXZxuG3XfsOjJW3qygOa7QedPbogBiI12iCtzaly9&X-Amz-Signature=0f3391321a15b6a08d235622bcc64e01284d5ae32cb927a280cd6b77a21cd739&X-Amz-SignedHeaders=host&x-id=GetObject)

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

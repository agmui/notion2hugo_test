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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L4OVFYU%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T150742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQD60Tk2SE8qEmBCJH2b2vVpbN%2BkSfcDqjjC%2F%2FoNSWiWswIhAOwcfKNGisRGTnr5YL42GwRjhBOlzn%2Fjuipt6KANFrL2Kv8DCC0QABoMNjM3NDIzMTgzODA1IgxIR41vVyuedz%2BiKcEq3ANScS3kD%2F%2FOAmWFYlK5i2pdUy%2FE%2FGNEuUxyte74h0lie4E1FmJz68nPv6chj9uSc657ajsmQNkgHb5e1KtqS8p4crFYSP4M%2B5YfVIn9kBDwpx88edJD7akjE50yddBXnwuQipMyvl5uyFrmtRRtUrUtNpdGn2ez1AOjFAeSZtUoBGbMh%2FcZnDqsbQcyZArz6a35bA66YbEG2T%2FNOY%2BbupYDBSha%2BgPs6W2gwnkC3Q70ObKZ%2FQ1eERb0Cbz3v3vo5LeHlJ8UhXGN1FssUTvTXN6dD6ODm2b5EQkJPOfJzHsnisGbMpN9NycfgDuybv2akK5tTOvzrXHlaBtS0EYIKB3IzqZ7a9GZh95WvIDdgT6I5VVMx%2BQSLU%2BPIbicsw8po%2FWvZ8hLU4x5h%2F9r15lZuTFY1yIvlEcVy61g6adrCMnQfTaglsf6tBb9Lm5bixLvMxdj65Y6oiGJ6K5c6xMhL6n6PxMbX8UFzrUkdqkHpGECnEs0xdozWLgpEwEN3aFmW5Icr7jqDi5k0x7MU3rzCIQKWmzKxrDgYg55hROByJv3RGrO6%2FNosO46%2B9Bi6qh9aSvQ7%2FsnBJL72qY0qKC74vyPuOD4sdEBZ7EcJC%2BTXcW8heQKihWjXYvh062k1TDr6ry9BjqkAQBfDEXTzsKflb7wCJAEcv8c8eZvpV6yNthAJVf%2F%2BXilEuykPGS%2FW8zRZIUo3Am1hUW27yn5wBsF7DV9DRPQ6AN%2F9Gj96GLFpU8a6VGveualrlLz04aC93bMZmBLUrWiFbpxPaEz1XYORy0r2vTBKWKnyqvny0kN3r3kh57NekTaHVTGse8wLfi1K0bkC345WphuAysVwvfFv%2BKWq4AstEy4mnDw&X-Amz-Signature=490849858f5e6ad99b6a85c896549dfed55ff3b14bcf174bec5b6f2c2561606b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L4OVFYU%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T150742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQD60Tk2SE8qEmBCJH2b2vVpbN%2BkSfcDqjjC%2F%2FoNSWiWswIhAOwcfKNGisRGTnr5YL42GwRjhBOlzn%2Fjuipt6KANFrL2Kv8DCC0QABoMNjM3NDIzMTgzODA1IgxIR41vVyuedz%2BiKcEq3ANScS3kD%2F%2FOAmWFYlK5i2pdUy%2FE%2FGNEuUxyte74h0lie4E1FmJz68nPv6chj9uSc657ajsmQNkgHb5e1KtqS8p4crFYSP4M%2B5YfVIn9kBDwpx88edJD7akjE50yddBXnwuQipMyvl5uyFrmtRRtUrUtNpdGn2ez1AOjFAeSZtUoBGbMh%2FcZnDqsbQcyZArz6a35bA66YbEG2T%2FNOY%2BbupYDBSha%2BgPs6W2gwnkC3Q70ObKZ%2FQ1eERb0Cbz3v3vo5LeHlJ8UhXGN1FssUTvTXN6dD6ODm2b5EQkJPOfJzHsnisGbMpN9NycfgDuybv2akK5tTOvzrXHlaBtS0EYIKB3IzqZ7a9GZh95WvIDdgT6I5VVMx%2BQSLU%2BPIbicsw8po%2FWvZ8hLU4x5h%2F9r15lZuTFY1yIvlEcVy61g6adrCMnQfTaglsf6tBb9Lm5bixLvMxdj65Y6oiGJ6K5c6xMhL6n6PxMbX8UFzrUkdqkHpGECnEs0xdozWLgpEwEN3aFmW5Icr7jqDi5k0x7MU3rzCIQKWmzKxrDgYg55hROByJv3RGrO6%2FNosO46%2B9Bi6qh9aSvQ7%2FsnBJL72qY0qKC74vyPuOD4sdEBZ7EcJC%2BTXcW8heQKihWjXYvh062k1TDr6ry9BjqkAQBfDEXTzsKflb7wCJAEcv8c8eZvpV6yNthAJVf%2F%2BXilEuykPGS%2FW8zRZIUo3Am1hUW27yn5wBsF7DV9DRPQ6AN%2F9Gj96GLFpU8a6VGveualrlLz04aC93bMZmBLUrWiFbpxPaEz1XYORy0r2vTBKWKnyqvny0kN3r3kh57NekTaHVTGse8wLfi1K0bkC345WphuAysVwvfFv%2BKWq4AstEy4mnDw&X-Amz-Signature=13049aaf9570711a80c06a9bdc740bfa097d2b0b0285e664ac5baa99eb404e3b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

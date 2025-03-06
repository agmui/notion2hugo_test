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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676QGJG3L%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKQ25oHsMG46%2BRDm%2BVPsaWpM2%2BVR4pMHWLPmFnBgcN4AIhAIKRmKjWBpU7PYl2OcGfY58%2BDOw1YW6Q8wDjBZkjx3x%2BKv8DCDMQABoMNjM3NDIzMTgzODA1IgxdCNwaJVvan3IgFh8q3AMDrlrCXQDTVFgMvqqOlRskLqZNz4bKIh413hszZxY%2FNzsPY51OxVstb7rPbfG1rxmVnWTuzAl4hlgj%2BuUdQ%2B0tTX6Ykc%2Bp%2Fixj%2FAmdjTxdD2s8u9B1pGuGDlCMgscjXpUoG3rvu3ZhDpn6cpt6Fy6pcixHebsR6exdtSZM9EDQ7s6mZJWgkSqkmVnXKjpTNdy%2FPsKwJENRJdQAN0wiQUU2j8DUz%2FGxhubvhM1RIyOxm1amQTuU5N%2BcAULDglhKcNiFgDci0GgBlOh%2B9y1EofueR6BMThpOFygfqNIL%2FbxOgojDdA4NqxapfDJm9%2Byw8WToS1%2B7gb2UOJ%2FfZXQ%2BePpn%2FwaA4HPKerSXFKy5Ck1N4p4UT%2FY6%2BMAhb7foas1zYPU0UwkkpTHh%2F3DxrGhyrtqLdC2JsaumPepeijRGBeLM7RbqU9vIVckB2rnuXvTIETqMkIjOFANcyvuYzDy%2BTSbAg%2BH3GvL%2Bp9Hm4A4tgxgdxS8fLoFiBtuJITP%2BMSx1%2BPyM1T77537f9QHtyc8tThzWrpPpq0laQOt5a5fGFUtZWK2q6IiXsa9OzbPGNTJdP0jWNz5tGr6UqDFLO1kRk5zCfH0syF9MVOR5fWA3DtK5%2FtPA18C9fgaB4t5JZTCQzqe%2BBjqkARCMf%2BrMx40%2B0K%2B8yp3Nzly9XZMuDLBWz0bpkxTDQDY73BKSWurKdMEXyYMbj69elWR44JNKV%2BEVDEewR0AYRagnLore2gLBm53GwYGCxb8k69VB17IcMGulthOClXnVD8WPlfJUN955cz9WNnZZ6p%2Fc7v7cNk1LI%2BtcfFeKDRJfQajwKgJKIcnjK%2FA1xj9SM7HIV0jJkkStlwbY35oTHfuKTSVh&X-Amz-Signature=f7f3dcabeef6edd59b5d83c86fabd216544cf85c5858b2817d393b9a36fbfdba&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676QGJG3L%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKQ25oHsMG46%2BRDm%2BVPsaWpM2%2BVR4pMHWLPmFnBgcN4AIhAIKRmKjWBpU7PYl2OcGfY58%2BDOw1YW6Q8wDjBZkjx3x%2BKv8DCDMQABoMNjM3NDIzMTgzODA1IgxdCNwaJVvan3IgFh8q3AMDrlrCXQDTVFgMvqqOlRskLqZNz4bKIh413hszZxY%2FNzsPY51OxVstb7rPbfG1rxmVnWTuzAl4hlgj%2BuUdQ%2B0tTX6Ykc%2Bp%2Fixj%2FAmdjTxdD2s8u9B1pGuGDlCMgscjXpUoG3rvu3ZhDpn6cpt6Fy6pcixHebsR6exdtSZM9EDQ7s6mZJWgkSqkmVnXKjpTNdy%2FPsKwJENRJdQAN0wiQUU2j8DUz%2FGxhubvhM1RIyOxm1amQTuU5N%2BcAULDglhKcNiFgDci0GgBlOh%2B9y1EofueR6BMThpOFygfqNIL%2FbxOgojDdA4NqxapfDJm9%2Byw8WToS1%2B7gb2UOJ%2FfZXQ%2BePpn%2FwaA4HPKerSXFKy5Ck1N4p4UT%2FY6%2BMAhb7foas1zYPU0UwkkpTHh%2F3DxrGhyrtqLdC2JsaumPepeijRGBeLM7RbqU9vIVckB2rnuXvTIETqMkIjOFANcyvuYzDy%2BTSbAg%2BH3GvL%2Bp9Hm4A4tgxgdxS8fLoFiBtuJITP%2BMSx1%2BPyM1T77537f9QHtyc8tThzWrpPpq0laQOt5a5fGFUtZWK2q6IiXsa9OzbPGNTJdP0jWNz5tGr6UqDFLO1kRk5zCfH0syF9MVOR5fWA3DtK5%2FtPA18C9fgaB4t5JZTCQzqe%2BBjqkARCMf%2BrMx40%2B0K%2B8yp3Nzly9XZMuDLBWz0bpkxTDQDY73BKSWurKdMEXyYMbj69elWR44JNKV%2BEVDEewR0AYRagnLore2gLBm53GwYGCxb8k69VB17IcMGulthOClXnVD8WPlfJUN955cz9WNnZZ6p%2Fc7v7cNk1LI%2BtcfFeKDRJfQajwKgJKIcnjK%2FA1xj9SM7HIV0jJkkStlwbY35oTHfuKTSVh&X-Amz-Signature=07c0d29559753d7336507efbf00210f8501e1c1f1cca687f6c74458b22c25a63&X-Amz-SignedHeaders=host&x-id=GetObject)

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

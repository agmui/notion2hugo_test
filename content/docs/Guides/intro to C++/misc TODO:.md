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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQJJGIZW%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T200957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICvXfiAanNupcYCdkGVFKEU2VlDn6DSlpNyWo7Cx4yZcAiBvAQ%2B3PRWFArxApZIqYZ%2BkPVtxQOolKkHq7FCWNhW2Dir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMJSV68q8Erj5hIPNMKtwDRok%2BNYGrA373dBI2QjlGbuzTwUSjajOQNJhJ2yvBidrAmSQ3qRWFElspwtSxqSUthiTOqx41kImA33qCZL8%2BNufsQx%2FH28Pf0%2BVwnKren1yZtAHefGwpczhQtBuuwah%2FJCc7x4XYp2D5SYCT65B2%2BkPglraHCFlPiWsI2lnSYeobUluh5VePxerzpsF0wjTz7GsErZxA%2Bka3uZaUZu0MLPZIyNl8Kqsne1VOCRaRg6lLLmlDSA2P%2FnPoumtAvyoNB63DHw0y%2BflAXoAtRddqutujlmOaV8QQrL4GvbRC73MdDVOTzD2PyD1hcJeTDuaETfrXHPZfyTUy%2FLIUjP%2B6KbvxLhXwqadg2hMQmIHnwrskjdwDnmCIkR5rUEC5mUxbGZJxZ7w1RE7mne1HQkcXSGmLJc1RCloS4DCfJomQXgZweLVTe1%2BbmVW3eTZq%2F7n%2FHmayBc6CFbOh49YkoJzxSmWLY%2FU%2Fm3pkBiX3SJ4nWr0xRAn5RAugUR3cTTyBF1DkbHaaDC4LdK%2FpveifwAdkv0GIMJ0mnbhGL4cWRwjSefSJNjW%2BDd6wfpYDtGP2fmGrCMfwSU6sULNaI0PoG%2BB%2B2kjU6NjXj%2BEX2FehAPXMSGWufn6U1sPxE42uNR8w1%2FuYwQY6pgH1mfP%2FulOEY73%2FkNCfUyrc07trzXh4aLG4O3NDg5LJuUJVi1JUgu2KnlKtHCCHjNgIls21KNOtNC0VaiSIlehTBNs6zo4ySBI5hSthLsSV3%2BFJogz9pXprBGgIAFhQH%2BbdaWyhV0DjvdVVAyz9JlJckPIslvbN%2BTLJ80qPGRvIdGG0%2FzIIooufDxMLLyjruBzt1xMuvT6FOB4bvO3rUzlHKTrpll%2BB&X-Amz-Signature=0fd6c787da220789351cd2020c23c7f2b3fb3f293731298d7215b84b2add40db&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQJJGIZW%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T200957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICvXfiAanNupcYCdkGVFKEU2VlDn6DSlpNyWo7Cx4yZcAiBvAQ%2B3PRWFArxApZIqYZ%2BkPVtxQOolKkHq7FCWNhW2Dir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMJSV68q8Erj5hIPNMKtwDRok%2BNYGrA373dBI2QjlGbuzTwUSjajOQNJhJ2yvBidrAmSQ3qRWFElspwtSxqSUthiTOqx41kImA33qCZL8%2BNufsQx%2FH28Pf0%2BVwnKren1yZtAHefGwpczhQtBuuwah%2FJCc7x4XYp2D5SYCT65B2%2BkPglraHCFlPiWsI2lnSYeobUluh5VePxerzpsF0wjTz7GsErZxA%2Bka3uZaUZu0MLPZIyNl8Kqsne1VOCRaRg6lLLmlDSA2P%2FnPoumtAvyoNB63DHw0y%2BflAXoAtRddqutujlmOaV8QQrL4GvbRC73MdDVOTzD2PyD1hcJeTDuaETfrXHPZfyTUy%2FLIUjP%2B6KbvxLhXwqadg2hMQmIHnwrskjdwDnmCIkR5rUEC5mUxbGZJxZ7w1RE7mne1HQkcXSGmLJc1RCloS4DCfJomQXgZweLVTe1%2BbmVW3eTZq%2F7n%2FHmayBc6CFbOh49YkoJzxSmWLY%2FU%2Fm3pkBiX3SJ4nWr0xRAn5RAugUR3cTTyBF1DkbHaaDC4LdK%2FpveifwAdkv0GIMJ0mnbhGL4cWRwjSefSJNjW%2BDd6wfpYDtGP2fmGrCMfwSU6sULNaI0PoG%2BB%2B2kjU6NjXj%2BEX2FehAPXMSGWufn6U1sPxE42uNR8w1%2FuYwQY6pgH1mfP%2FulOEY73%2FkNCfUyrc07trzXh4aLG4O3NDg5LJuUJVi1JUgu2KnlKtHCCHjNgIls21KNOtNC0VaiSIlehTBNs6zo4ySBI5hSthLsSV3%2BFJogz9pXprBGgIAFhQH%2BbdaWyhV0DjvdVVAyz9JlJckPIslvbN%2BTLJ80qPGRvIdGG0%2FzIIooufDxMLLyjruBzt1xMuvT6FOB4bvO3rUzlHKTrpll%2BB&X-Amz-Signature=bdcd8b48248181545496995b034295aa485e0c2c44a3aaf9d76d87f9b76e2501&X-Amz-SignedHeaders=host&x-id=GetObject)

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

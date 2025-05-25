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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZBSTYOG%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T170154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCLtgszl9sP7iBdR8skV66h5O4Ay5onmHEZMGWLk0IJrQIhANB%2B9g9IKtS53LWzBebjsX%2FW8p%2FZNLukNUGhvvjTpYWTKv8DCDEQABoMNjM3NDIzMTgzODA1IgzWmxzn%2Fon8sO%2BtWAEq3AONBg8T7CFjPEIVnRr88BpAq5BiarcsiFvRVPRLlQe0Qa0irQkcXA4Wb5cTDFZsE%2FhY7izLNF0jDSM1IOblNBrCmhGUjYRJ2Sjk24GmnSAzOmjKMGMaJbMnmCEgVwrDAtqUKA8K59NEmG8SbAL21tbcScDLiSOPliqA8KB2USaAyNBMhSoHlp40rGwODIttrbSfadtxUVODgYyo4PasagGvTbs9HqfJgrBmZkPY%2FNvc9hP19wPHkOlzK0EvWz%2FQw3w9PUDkXgsreHMTW55S2doFY7AXSVu7m%2B7mpfh%2FwE2mqzOuQRd6KUy65M%2BPhVEMPrlbz%2B3bY4ewDQWc1XfDUv03%2Fu8meDGMdMrN3hJqbJPHV2c1rvmHv6lEY%2BZjpyVyda0jqvjCGDSFYYLUmDn%2Bhc7VGgUdJDITkkPjLijgv2qFhXdK90nGaqqDhRHpJ1zGrOJJDUEs2T5W%2BahikhD1O%2BUToaObWu5TliC4kUDtTtQ3YjyHkE47zVztfsAA9Zok29pPRhI4QZnCRez6EFKGecLf2u9Te%2BXsdimiKr3fFJAkV86NuEMXVNcsWs%2FVrDP5mceUBJ1IYAXH65RZ%2BHh8EFZJrnfVwxeAWIYftAB8fir9bSdOjvYYBqRmI9LENzCK%2F8zBBjqkAdcxnRO91VCATBfcMZ4Uq2%2F%2FTEdKhIZ42sr96WbRaVw%2FxorWdSXc1QapW2PKAuwbI9Sfh%2BKq8XIuIfofkROT7RVCTUfjOBhKmtqSA9YNqwY7c3bCkmq9%2BWwL5tWC4vjqWS1QZn17cjgw%2FTEpFJQIdziJssLUePS6iw50wiQg%2FsDrLOrFv%2BJaJuN6KE5sjssFfxYaqElu%2BkJl%2BqyhF1aNmo1iximR&X-Amz-Signature=412949f55d858a03a6d0c7d2194338c4b421dce9cbfccf5b9d460a54b3226afd&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZBSTYOG%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T170154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCLtgszl9sP7iBdR8skV66h5O4Ay5onmHEZMGWLk0IJrQIhANB%2B9g9IKtS53LWzBebjsX%2FW8p%2FZNLukNUGhvvjTpYWTKv8DCDEQABoMNjM3NDIzMTgzODA1IgzWmxzn%2Fon8sO%2BtWAEq3AONBg8T7CFjPEIVnRr88BpAq5BiarcsiFvRVPRLlQe0Qa0irQkcXA4Wb5cTDFZsE%2FhY7izLNF0jDSM1IOblNBrCmhGUjYRJ2Sjk24GmnSAzOmjKMGMaJbMnmCEgVwrDAtqUKA8K59NEmG8SbAL21tbcScDLiSOPliqA8KB2USaAyNBMhSoHlp40rGwODIttrbSfadtxUVODgYyo4PasagGvTbs9HqfJgrBmZkPY%2FNvc9hP19wPHkOlzK0EvWz%2FQw3w9PUDkXgsreHMTW55S2doFY7AXSVu7m%2B7mpfh%2FwE2mqzOuQRd6KUy65M%2BPhVEMPrlbz%2B3bY4ewDQWc1XfDUv03%2Fu8meDGMdMrN3hJqbJPHV2c1rvmHv6lEY%2BZjpyVyda0jqvjCGDSFYYLUmDn%2Bhc7VGgUdJDITkkPjLijgv2qFhXdK90nGaqqDhRHpJ1zGrOJJDUEs2T5W%2BahikhD1O%2BUToaObWu5TliC4kUDtTtQ3YjyHkE47zVztfsAA9Zok29pPRhI4QZnCRez6EFKGecLf2u9Te%2BXsdimiKr3fFJAkV86NuEMXVNcsWs%2FVrDP5mceUBJ1IYAXH65RZ%2BHh8EFZJrnfVwxeAWIYftAB8fir9bSdOjvYYBqRmI9LENzCK%2F8zBBjqkAdcxnRO91VCATBfcMZ4Uq2%2F%2FTEdKhIZ42sr96WbRaVw%2FxorWdSXc1QapW2PKAuwbI9Sfh%2BKq8XIuIfofkROT7RVCTUfjOBhKmtqSA9YNqwY7c3bCkmq9%2BWwL5tWC4vjqWS1QZn17cjgw%2FTEpFJQIdziJssLUePS6iw50wiQg%2FsDrLOrFv%2BJaJuN6KE5sjssFfxYaqElu%2BkJl%2BqyhF1aNmo1iximR&X-Amz-Signature=eec7c4d19abd0d66391b56d531c310545c030ee5a54f51204d401503bfc94b20&X-Amz-SignedHeaders=host&x-id=GetObject)

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

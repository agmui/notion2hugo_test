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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBWXSE6Y%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T051415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNfsU%2Bdeqe5Nnc9V3SVC%2B%2FPMnEDhipuw2LUjyqPrTssgIhAKTxhCldp%2FNPG39uxkIZRxzrJbsNmHF89%2FeNJJZwrLpWKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywDA%2BsEjC7kWTpvBQq3AP23nAIBEOTBdYCjmgy0SX%2BZOk9aFCvDXqE05jMC0xqlBScnwq9WAOkmbfUuiPIBoxACYWN5Yee1YEolOZFttgjhoD1%2B0ioWGLr4yaBJxJeHVDRCtoemLyVxPbLE6cXHoYVv%2ByFXP%2FJedlbQo4Aqp0fJ2FYvpL9igBJAPmcYF%2FLCDZIhK9aF9N2%2FQ%2Bua6C9%2FArGCHL9IFk7dRNy%2BHilzEOzFnlfiIlCAUwQ1dUDXYsMv%2BZDnBAcHkK%2BEdsFgC3g2rzRR2Ntysi21jEnr19O%2BSN5efNzBDv3oz%2FmZAnV%2FWznu9WQOKnR4Qh0zPLTT17X7qv7BWYXhFfxm2iR%2FWrigFiMxkB%2FMipck75iK%2BDZ8W2TrZQTrdDFIyQwyApjJjlAhQFLa%2Boe6X9P0oHYfDWGC%2BW3Fo1Lj2avEDgpXXp%2BpM%2BPR2nAORp%2B8IWbmRGc6UCQcOKx1KcpzsxqGwPwfbuLNEHT7fvaiPFewFpO6KjrDKYPzdoLZg%2B0TBYYxdjd7ahatTRsExWd9qtTpMVftFn1NodJfu1QBIHhpyCPT0MR7GKN4RP9B1rb%2FnYFG1NM%2B1RD74B%2ForZEZX86O3nfsbhVCSKYajIYQtBLrHGrJqOeTOxSdVp4pY%2F4%2FmstJkdGzDCTpsLDBjqkAaSjOb92Yp5TRzwpwKyjkkqIhCRvz8qH1M%2FZWuxS4sbYLgSYq%2BYQ8gdioLy5cZSv1bWQNZa3gHMrTJCCMigQrgH4bCWXC7Kch%2FYOU0qwalgoWNDaB3sxD6bQp9KARlriBF6asCcjhOwfF6hCvWrPEfY%2F6KuVSO5pQP8%2B30eTY0szAm1aUHEtHguWlMfiDvVj5KZZORQjZYypIHZuvxNgb%2BbqY5EB&X-Amz-Signature=fa42bd3652770f96d8b0775905541262a639271ede060d5f2d4fd2ed62cf8df0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBWXSE6Y%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T051414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNfsU%2Bdeqe5Nnc9V3SVC%2B%2FPMnEDhipuw2LUjyqPrTssgIhAKTxhCldp%2FNPG39uxkIZRxzrJbsNmHF89%2FeNJJZwrLpWKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywDA%2BsEjC7kWTpvBQq3AP23nAIBEOTBdYCjmgy0SX%2BZOk9aFCvDXqE05jMC0xqlBScnwq9WAOkmbfUuiPIBoxACYWN5Yee1YEolOZFttgjhoD1%2B0ioWGLr4yaBJxJeHVDRCtoemLyVxPbLE6cXHoYVv%2ByFXP%2FJedlbQo4Aqp0fJ2FYvpL9igBJAPmcYF%2FLCDZIhK9aF9N2%2FQ%2Bua6C9%2FArGCHL9IFk7dRNy%2BHilzEOzFnlfiIlCAUwQ1dUDXYsMv%2BZDnBAcHkK%2BEdsFgC3g2rzRR2Ntysi21jEnr19O%2BSN5efNzBDv3oz%2FmZAnV%2FWznu9WQOKnR4Qh0zPLTT17X7qv7BWYXhFfxm2iR%2FWrigFiMxkB%2FMipck75iK%2BDZ8W2TrZQTrdDFIyQwyApjJjlAhQFLa%2Boe6X9P0oHYfDWGC%2BW3Fo1Lj2avEDgpXXp%2BpM%2BPR2nAORp%2B8IWbmRGc6UCQcOKx1KcpzsxqGwPwfbuLNEHT7fvaiPFewFpO6KjrDKYPzdoLZg%2B0TBYYxdjd7ahatTRsExWd9qtTpMVftFn1NodJfu1QBIHhpyCPT0MR7GKN4RP9B1rb%2FnYFG1NM%2B1RD74B%2ForZEZX86O3nfsbhVCSKYajIYQtBLrHGrJqOeTOxSdVp4pY%2F4%2FmstJkdGzDCTpsLDBjqkAaSjOb92Yp5TRzwpwKyjkkqIhCRvz8qH1M%2FZWuxS4sbYLgSYq%2BYQ8gdioLy5cZSv1bWQNZa3gHMrTJCCMigQrgH4bCWXC7Kch%2FYOU0qwalgoWNDaB3sxD6bQp9KARlriBF6asCcjhOwfF6hCvWrPEfY%2F6KuVSO5pQP8%2B30eTY0szAm1aUHEtHguWlMfiDvVj5KZZORQjZYypIHZuvxNgb%2BbqY5EB&X-Amz-Signature=713aad634db77e0b45e9b86fddd5cbd8976530becc2d66e9fe0123a75b8dc701&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

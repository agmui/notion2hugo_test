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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H45RH5W%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T090936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCICaw9Ia0uRrnpF5TXzFkro7JuAFMjloc6o6omAqXfYBzAiEAsel3nVxGqYQpLGeGQMDPlm7Pt6hEmYBUtgZdZdwD6%2Bsq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDESzRb1mp6SBOiDABCrcA3JZBwP%2F%2BaEUvV8bSEqYeNURSdlOgAA62CT7p8ZniEZ%2FsIChHQjcfcu%2FDv8YYWe1Fp6hUoZeLH0diC306DB9nW6ppOUMVNpj2Bp%2Fnev7L%2FOqX1A3k4wVm4tE5jj6COHmbblBMBYKVBUjfzOizvD%2FhNNV%2BeuQMsUh58pWbnHaycGc8Ro9qMibzUcqBpn%2FrbK9Y30Jbzvc3PNxgqOoiZjmpikog1j4R0SCwGFR3U8nMeziELkCxcWAzz3qdKcxGcgO6Ua2WtZu0RTxOfuOU6TWyF1UPcvhDR5dCDzvHfE0b%2BPCvOx49z4Jz0j0NY6vev1EVnzeVx8Oy10FqfaPukXnbvz%2BQrWut4HzMvwXFXTJqsBQ7%2FzU3HvWIGgqD4WJxHqZjzgv5wjMHnGM%2FCaCrq5gRkPupBnuLuqEYO0zC34IMuvLVJRAukmo9jxJictWgHPHAGShL7laF6c5uYC5iUBTnpdILhpk370ERQnUF6dSkauxKKY3R9DKUUOHkisYDWPCXeg0tfO6R8lGEUf7fZexGujEshLlLN87Mc9zP4b29dSEOdNIz2z5quDFU%2FA1TkU9aQ9p4uAi4ta2SjjRVJg1bODuoo8O65rTD4ED0851yXMXF99Ws1OpCC5msQHFMPaRisIGOqUBC1lklSVLV54WaUoFkYHdof0sfD8l7yB%2FCyQvqZrrnBFHlFje2kQwCIDE0QY8N1050WIMBg7KfxAM4UQlu8YV8471HJFZZQCQy8IlOnQx8fVx%2Fj0zEZD1b%2FUqft83yScAGja0ovwHGlWYC3WvZ5r6Ai9HM5d60Jfnhnb26lbeikDfBNWvcSjUyqPQpkK9YYCfEJyNlk5c2favhjWns25CcsGVZpE0&X-Amz-Signature=fb77f91c0a34de618a2977fd7988ef1ccc83e4769ecd7524a7712b0c1dcc76b1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H45RH5W%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T090936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCICaw9Ia0uRrnpF5TXzFkro7JuAFMjloc6o6omAqXfYBzAiEAsel3nVxGqYQpLGeGQMDPlm7Pt6hEmYBUtgZdZdwD6%2Bsq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDESzRb1mp6SBOiDABCrcA3JZBwP%2F%2BaEUvV8bSEqYeNURSdlOgAA62CT7p8ZniEZ%2FsIChHQjcfcu%2FDv8YYWe1Fp6hUoZeLH0diC306DB9nW6ppOUMVNpj2Bp%2Fnev7L%2FOqX1A3k4wVm4tE5jj6COHmbblBMBYKVBUjfzOizvD%2FhNNV%2BeuQMsUh58pWbnHaycGc8Ro9qMibzUcqBpn%2FrbK9Y30Jbzvc3PNxgqOoiZjmpikog1j4R0SCwGFR3U8nMeziELkCxcWAzz3qdKcxGcgO6Ua2WtZu0RTxOfuOU6TWyF1UPcvhDR5dCDzvHfE0b%2BPCvOx49z4Jz0j0NY6vev1EVnzeVx8Oy10FqfaPukXnbvz%2BQrWut4HzMvwXFXTJqsBQ7%2FzU3HvWIGgqD4WJxHqZjzgv5wjMHnGM%2FCaCrq5gRkPupBnuLuqEYO0zC34IMuvLVJRAukmo9jxJictWgHPHAGShL7laF6c5uYC5iUBTnpdILhpk370ERQnUF6dSkauxKKY3R9DKUUOHkisYDWPCXeg0tfO6R8lGEUf7fZexGujEshLlLN87Mc9zP4b29dSEOdNIz2z5quDFU%2FA1TkU9aQ9p4uAi4ta2SjjRVJg1bODuoo8O65rTD4ED0851yXMXF99Ws1OpCC5msQHFMPaRisIGOqUBC1lklSVLV54WaUoFkYHdof0sfD8l7yB%2FCyQvqZrrnBFHlFje2kQwCIDE0QY8N1050WIMBg7KfxAM4UQlu8YV8471HJFZZQCQy8IlOnQx8fVx%2Fj0zEZD1b%2FUqft83yScAGja0ovwHGlWYC3WvZ5r6Ai9HM5d60Jfnhnb26lbeikDfBNWvcSjUyqPQpkK9YYCfEJyNlk5c2favhjWns25CcsGVZpE0&X-Amz-Signature=84026cf44fc5a989a48c1311835a79985af197e883194cdc599f6561c4e059b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

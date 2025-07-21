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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIWUQDHR%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyZb%2F3DBnefkrHLSm2zGKn394oid3D2Nw7kEc3CMPGcgIhAKm4Zvb0qzPSqfuHVcXVr93%2BSV2l2Hz1%2B1GeDR5RR7XkKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6FkHEWxBXpPu7NGQq3AN42ZBflaMHQh%2Fom2zRDQJJdygiA2TbEfK40I4PcL2s%2FDvXmfLykdmqeRYCgOpGdLzK5ZXqopLSOwwFwyJMm8vRRLPCjDXpDG7x02MxOP4aBY9sDx%2FYcHUgnrr9wyy%2FH6lRYCPR%2FECodcLydFuoAQlMAolQQkAsxaRmnYVXp9tkPRWaTw8VefWkl0rbrDEO9spqgGZ9WyhwnlfKJFgKvJ2fRP3Q4gq4sjmfen%2FkkZq1JXz1gkq0TKBla59T4swOqhTdvMcQzNyU3gBYPaO3fwPLc4gVS6MENnucOlS3bH6Cvvo4CaaDAzM1uuK0LTSXeae38VMQhgYrdQXJbqTO3INdmySXxH44%2Fris0Geb%2FFqVfKobJRRXF13WPXlUOSPdvCpew3bm%2BXM91lp37qjJpf69QaGSumkqTfR%2BBN%2FXRBoQblFxcGoDMj8Uyv544RjGePErqkzB9xr0wJBl6jES5G5jyFwJPVcSWr4ol5ozciAvK11MIEiVKVKar%2Bi4TQNZl7AIXI1DoyupxkihqqDYCaGizWaiSFFhzAVADYxomQ%2FgAnv41un2X060jQ6uq%2BtA3LWm0AhPOr1c0bJveXfadrZwiQBLV6U5lwswHcwr1u%2Bu45o1Zhl8AKo8tgRWbzDak%2FfDBjqkAUx%2F1IkjL27Bt9oI89tY84sQXdhBnziKdE7Zq1D4PobiMjR%2F2FUYnvW45vBzh0P%2BZxreJBVH1jE7S95QzILIV6Vh9a6W%2BxMG6u4FvSQKa4Q32Ue7V80JEfKK%2BsmVbn6bexExwCr7agO%2BUFWR5kvlMA4R56KJgYvYMAgRX%2BAuQKFC9EHPsFT4%2BNPQFf5CnrDX6aUgD9jjbjreTjsXY7DL%2FtI%2BtLKt&X-Amz-Signature=e5eb4b9c48fb0f468dc668940698072351635a20bfbc920287916a89b8560a22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIWUQDHR%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyZb%2F3DBnefkrHLSm2zGKn394oid3D2Nw7kEc3CMPGcgIhAKm4Zvb0qzPSqfuHVcXVr93%2BSV2l2Hz1%2B1GeDR5RR7XkKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6FkHEWxBXpPu7NGQq3AN42ZBflaMHQh%2Fom2zRDQJJdygiA2TbEfK40I4PcL2s%2FDvXmfLykdmqeRYCgOpGdLzK5ZXqopLSOwwFwyJMm8vRRLPCjDXpDG7x02MxOP4aBY9sDx%2FYcHUgnrr9wyy%2FH6lRYCPR%2FECodcLydFuoAQlMAolQQkAsxaRmnYVXp9tkPRWaTw8VefWkl0rbrDEO9spqgGZ9WyhwnlfKJFgKvJ2fRP3Q4gq4sjmfen%2FkkZq1JXz1gkq0TKBla59T4swOqhTdvMcQzNyU3gBYPaO3fwPLc4gVS6MENnucOlS3bH6Cvvo4CaaDAzM1uuK0LTSXeae38VMQhgYrdQXJbqTO3INdmySXxH44%2Fris0Geb%2FFqVfKobJRRXF13WPXlUOSPdvCpew3bm%2BXM91lp37qjJpf69QaGSumkqTfR%2BBN%2FXRBoQblFxcGoDMj8Uyv544RjGePErqkzB9xr0wJBl6jES5G5jyFwJPVcSWr4ol5ozciAvK11MIEiVKVKar%2Bi4TQNZl7AIXI1DoyupxkihqqDYCaGizWaiSFFhzAVADYxomQ%2FgAnv41un2X060jQ6uq%2BtA3LWm0AhPOr1c0bJveXfadrZwiQBLV6U5lwswHcwr1u%2Bu45o1Zhl8AKo8tgRWbzDak%2FfDBjqkAUx%2F1IkjL27Bt9oI89tY84sQXdhBnziKdE7Zq1D4PobiMjR%2F2FUYnvW45vBzh0P%2BZxreJBVH1jE7S95QzILIV6Vh9a6W%2BxMG6u4FvSQKa4Q32Ue7V80JEfKK%2BsmVbn6bexExwCr7agO%2BUFWR5kvlMA4R56KJgYvYMAgRX%2BAuQKFC9EHPsFT4%2BNPQFf5CnrDX6aUgD9jjbjreTjsXY7DL%2FtI%2BtLKt&X-Amz-Signature=8d8afdc2312f2e748c2ca94c320e170df0973dbaa138d47ec768b9eb83628904&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

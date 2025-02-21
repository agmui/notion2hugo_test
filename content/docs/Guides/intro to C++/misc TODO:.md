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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G46PQJQ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T220714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Fm4eiZbnqmDDy%2BPZmdREWv6av5%2FJKisuTHsLtYlna4QIhANIOwQoGHWrRb%2BHX846i4QAIVaIwP%2FVo2gaorx%2FSSQLPKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxM%2FSXWRclCvmiP8l8q3ANV2LTaUn3M58GU2Hm02i3jZd8IqZiOiNydcnVlHCRsFxWmwoDzND3WX9PD81yXLJuqijz8b%2FEM5%2FkKTRVbcXjnG%2FYkfFuhQ97Zl3POTyC7vTnVv1i1WjwVCamACJdYhCZdmmupeqN11x0d3UViSR8SBww4BgvyZY313OFIhcCo3Qzo3bMXUQUvTV10TbzsEAPco3CbgPWkcBsMYSDDE%2BUUSuhyn%2FdbCzOZ2ji%2F6eeJV%2B2fKDl7NeKu%2BjWiSjUoKdHeXQpOm4V3mpkJRigWvPlFNPK9CBsMYn6y4PH8hRFmJJSSlbI%2BLm%2Bq12djcen1a3ql3qioSQZ2mNASnr4LlbHa4Xqa1ZItODoEnW%2BVKC12pFZfluqNid272%2BVa%2FdVbTFYaahq%2FN1ZuVJJNL4z6wttKVgMFJngGVq6eW0kgkXoVhuTETjSBGeCTpAzUtv1PGTPyjomVMVl7UN3emk4uHmHnHFjuGX8Sutg4qLsiMGovZyOkuxQHBtY3CNMrWOZ8Y2awu0tdYquOnmF7DzV6ZaYkISH8vrKtQh196xndLEuoDD9wXVsTZaKAIJEE%2FY1%2FG%2BJCpL32nu9wtvLgxinByJEp5foVACAJXzjB0qqCsYQUSK3cnywvG5Oa14jaajCE2eO9BjqkAcEo9sKqm7cz2Ml5bN2p7fAZZa95tmtqwYU9ICtQsynBtXJRo%2B4%2BEljo50KcgNVFSeoiW1PCzvhQFY6uBIyn2I3hFa4KhW7UWCTbCgSDj6894uXHqyJ%2FAkVQulUZvLPBRI6%2BVC2sA5QS6U%2FY7aa01ycpzx%2BLwnechT3Nl2hIPVC0gmE8u4H9HduqvIdPWY4fcM7y2EJTHlBCHb%2BU3%2B%2FqxEG0rLN2&X-Amz-Signature=40e0f77632b5e6f63c29553afce6cc15b75350aac5ff8826324b6a88759d5619&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G46PQJQ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T220714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Fm4eiZbnqmDDy%2BPZmdREWv6av5%2FJKisuTHsLtYlna4QIhANIOwQoGHWrRb%2BHX846i4QAIVaIwP%2FVo2gaorx%2FSSQLPKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxM%2FSXWRclCvmiP8l8q3ANV2LTaUn3M58GU2Hm02i3jZd8IqZiOiNydcnVlHCRsFxWmwoDzND3WX9PD81yXLJuqijz8b%2FEM5%2FkKTRVbcXjnG%2FYkfFuhQ97Zl3POTyC7vTnVv1i1WjwVCamACJdYhCZdmmupeqN11x0d3UViSR8SBww4BgvyZY313OFIhcCo3Qzo3bMXUQUvTV10TbzsEAPco3CbgPWkcBsMYSDDE%2BUUSuhyn%2FdbCzOZ2ji%2F6eeJV%2B2fKDl7NeKu%2BjWiSjUoKdHeXQpOm4V3mpkJRigWvPlFNPK9CBsMYn6y4PH8hRFmJJSSlbI%2BLm%2Bq12djcen1a3ql3qioSQZ2mNASnr4LlbHa4Xqa1ZItODoEnW%2BVKC12pFZfluqNid272%2BVa%2FdVbTFYaahq%2FN1ZuVJJNL4z6wttKVgMFJngGVq6eW0kgkXoVhuTETjSBGeCTpAzUtv1PGTPyjomVMVl7UN3emk4uHmHnHFjuGX8Sutg4qLsiMGovZyOkuxQHBtY3CNMrWOZ8Y2awu0tdYquOnmF7DzV6ZaYkISH8vrKtQh196xndLEuoDD9wXVsTZaKAIJEE%2FY1%2FG%2BJCpL32nu9wtvLgxinByJEp5foVACAJXzjB0qqCsYQUSK3cnywvG5Oa14jaajCE2eO9BjqkAcEo9sKqm7cz2Ml5bN2p7fAZZa95tmtqwYU9ICtQsynBtXJRo%2B4%2BEljo50KcgNVFSeoiW1PCzvhQFY6uBIyn2I3hFa4KhW7UWCTbCgSDj6894uXHqyJ%2FAkVQulUZvLPBRI6%2BVC2sA5QS6U%2FY7aa01ycpzx%2BLwnechT3Nl2hIPVC0gmE8u4H9HduqvIdPWY4fcM7y2EJTHlBCHb%2BU3%2B%2FqxEG0rLN2&X-Amz-Signature=6bc6deeea49aa7bbf117b5a57a0f11e6fde981faf9701f5f1b05f1dbe3f73c2e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647J3BL2G%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T042024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIFO9G46oxMBW%2BPj2hHtVNVLIvX85oNaQirT2FsRyGI2RAiEA5ovKXX%2FlOh44cBQH2tkL8rfkCYXWRNHAMSfNPp8jmtgqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0d1qnAO%2Fha7b4uzCrcA3Vq6SoIUk2ncU6h%2FRlOriTowvacud4uI%2BqmlEKmL1HI0jE5KSfe0aaDi6S7gU%2BKN6NvC3Y00n%2BKfraoMuPWO3B0dB5yefOaIz%2BZaKArT%2FmRPcnXyM%2F%2FaAXVt5bFpLkziKhvPJ25zJFWYTZ0InR3DjLAZXXz5XZgG%2FbYmPEmjj0o0ijVi0Kz5LJaBnRjpn98ZnBG9aGjdzbrlJ1OEsaGYj0cKzJEtklcg5VhS4TEeSoi9Tiv1sbKBGPBJyurKSN%2FbNydpZpgBYH33RlbvNlqpegpRcT%2BoEmGFYDnwIsJOi3kSMl5rbmivAkss3iKVb%2Fw08cpSmyrcCsKS%2B0hMyOAPW2vkwqStyw%2FR5yZKOi2xr8fgG4XKrXOM2oG4EbdH20lJFnIaEvY9xmpUtlwSEhecZ%2BxFTENUyoFOr%2FPsWHXP2xMyAgpS6GuTfR2SJWrFlsfuZ%2BR9XuEAcvYE1TUhjO3IQ9EKIEFaejZvbv7OAYdHlW14Sp3ABK%2FAGb87Gw03qC0pCllIVreQ0xrhe%2FKS%2BX8HfVh8a6ow0PKN4e2r6YTDg4t7nSyi49T4BmUUTwCw8jWHW74tOyxEz0kDLnD297QIREHS0cLJ8RxGJ5MGTxh79CbJf75fGLYRyThyP4%2FMO6v9MEGOqUBhW6sbcbgHPOJ%2Fgg1BGsRiP1%2BQnlR02UtwX6LosItArKDW7M6zJLnKQnuzPpagliJ3uKEqehR%2BClJz6pS9OzefFknhUeK4o6E8FSpw5K7WzvJzHd7oYM4zzlTyUu5ZIDUeO8cVpBr1pjbqSEHK3Lm1SQ%2FSiWCQVgSrNlNyeE%2FYPrQQai%2BswpHuH6VFxM8fo6nzWgBJS10UY0NauxGhNrVtH7F%2FF2p&X-Amz-Signature=e5299bcdf3d4826d0d3c0a68ace3cd481b6a64ad1ae8e7c0c73cbc2dba97c312&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647J3BL2G%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T042024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIFO9G46oxMBW%2BPj2hHtVNVLIvX85oNaQirT2FsRyGI2RAiEA5ovKXX%2FlOh44cBQH2tkL8rfkCYXWRNHAMSfNPp8jmtgqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0d1qnAO%2Fha7b4uzCrcA3Vq6SoIUk2ncU6h%2FRlOriTowvacud4uI%2BqmlEKmL1HI0jE5KSfe0aaDi6S7gU%2BKN6NvC3Y00n%2BKfraoMuPWO3B0dB5yefOaIz%2BZaKArT%2FmRPcnXyM%2F%2FaAXVt5bFpLkziKhvPJ25zJFWYTZ0InR3DjLAZXXz5XZgG%2FbYmPEmjj0o0ijVi0Kz5LJaBnRjpn98ZnBG9aGjdzbrlJ1OEsaGYj0cKzJEtklcg5VhS4TEeSoi9Tiv1sbKBGPBJyurKSN%2FbNydpZpgBYH33RlbvNlqpegpRcT%2BoEmGFYDnwIsJOi3kSMl5rbmivAkss3iKVb%2Fw08cpSmyrcCsKS%2B0hMyOAPW2vkwqStyw%2FR5yZKOi2xr8fgG4XKrXOM2oG4EbdH20lJFnIaEvY9xmpUtlwSEhecZ%2BxFTENUyoFOr%2FPsWHXP2xMyAgpS6GuTfR2SJWrFlsfuZ%2BR9XuEAcvYE1TUhjO3IQ9EKIEFaejZvbv7OAYdHlW14Sp3ABK%2FAGb87Gw03qC0pCllIVreQ0xrhe%2FKS%2BX8HfVh8a6ow0PKN4e2r6YTDg4t7nSyi49T4BmUUTwCw8jWHW74tOyxEz0kDLnD297QIREHS0cLJ8RxGJ5MGTxh79CbJf75fGLYRyThyP4%2FMO6v9MEGOqUBhW6sbcbgHPOJ%2Fgg1BGsRiP1%2BQnlR02UtwX6LosItArKDW7M6zJLnKQnuzPpagliJ3uKEqehR%2BClJz6pS9OzefFknhUeK4o6E8FSpw5K7WzvJzHd7oYM4zzlTyUu5ZIDUeO8cVpBr1pjbqSEHK3Lm1SQ%2FSiWCQVgSrNlNyeE%2FYPrQQai%2BswpHuH6VFxM8fo6nzWgBJS10UY0NauxGhNrVtH7F%2FF2p&X-Amz-Signature=e9124c974dd6b11febd495865865bdcf422cdcdaeee6b601bff730965be0e346&X-Amz-SignedHeaders=host&x-id=GetObject)

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

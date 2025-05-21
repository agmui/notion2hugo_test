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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA2MIKGM%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIBMPJcEk%2BEkBd6QB84YK69h8mouuh14MwfaoE3BwZPXrAiAzyLu2Rxynu4iqH3oJOoE7mUPgEHCsKwNZ7oNDtDp7dCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMazbEJ9W43bN4xuWKtwDRUqvqmNDmVeN85DldxsE4BxGPQre7DoFKVRx9Js7b9LmThIzwMHWxzyZSsclvzkwDvVsSzELE0CArcbhlqpQgkbbh404ww0p0Ee%2B2Bg6xfU5Ou8uNu72WUiNPNXJIjCeykr44be8aPjMVwEdIxEsxCOS5zcmLUVBCo6qKkLyGAYRntxFs7vCn28WAARziYdmmpIsyHwDzeyeGWspY6UgIHMjPYMGCjHvxZ65Q5JgHsLbn%2Btuw5BwLazljTo6ASy79lRwgORHjcxzv97whL7Tg39KwvVMf3fZTQPAxAwSJS1RVSIbLuKAlfYw3APQCI%2F91QZLQOVH7hjIeTQ%2BliUSCsuEN80cqFmFJdqxbIkz%2Blv4GJJHFjTLEnUAiR3hMEKkmYpmaFCRQPTcN5I7t5XNff582smOMsT2Ri0Koq87IcqqdZAe8B1ePpKhlqkSnY3opbIJUHOgnd9KhuijaTbu4zydm482To4uxpGZJoFBj5gTA3DdHlTOrnwErSlp%2BcA27I3yPNQtcGfQ8bE1cQx7PKWF53d5dUr1lfX91wcI5JY3of98qE4v1SpVQRQIL%2BVGlzg4n2UCW4e44u9QPfVuY4%2B2Y%2FY58GmXeaYMQVOSn6eNqEF7SXdA00eSPBUw0qG5wQY6pgGWRKQ0IKtCMjJdomym7UVY7qYVTH%2F%2BpO6QaUGbEQxrAINB1pSjG0o8%2BDwXv%2BtBy8rfKqEisHoQ2B8eNoZ%2Bsss7Dvc2BODHEQEVNnuFmGIoU4a1IHHXPgV0agLGEMW30ig%2BQn5AGGrsLxzgtV0f7oZIvSaY%2BKYOSIPi0%2Fm%2BGwND8WVTes8cF4kRjDELwEFaj6ysIlqnEKeGfR78pWEtlrwCzkaXtPn2&X-Amz-Signature=98fbe453a8f4606a3ab37caceec068ead354dfa7c36947d14a2372ab4474b12f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA2MIKGM%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIBMPJcEk%2BEkBd6QB84YK69h8mouuh14MwfaoE3BwZPXrAiAzyLu2Rxynu4iqH3oJOoE7mUPgEHCsKwNZ7oNDtDp7dCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMazbEJ9W43bN4xuWKtwDRUqvqmNDmVeN85DldxsE4BxGPQre7DoFKVRx9Js7b9LmThIzwMHWxzyZSsclvzkwDvVsSzELE0CArcbhlqpQgkbbh404ww0p0Ee%2B2Bg6xfU5Ou8uNu72WUiNPNXJIjCeykr44be8aPjMVwEdIxEsxCOS5zcmLUVBCo6qKkLyGAYRntxFs7vCn28WAARziYdmmpIsyHwDzeyeGWspY6UgIHMjPYMGCjHvxZ65Q5JgHsLbn%2Btuw5BwLazljTo6ASy79lRwgORHjcxzv97whL7Tg39KwvVMf3fZTQPAxAwSJS1RVSIbLuKAlfYw3APQCI%2F91QZLQOVH7hjIeTQ%2BliUSCsuEN80cqFmFJdqxbIkz%2Blv4GJJHFjTLEnUAiR3hMEKkmYpmaFCRQPTcN5I7t5XNff582smOMsT2Ri0Koq87IcqqdZAe8B1ePpKhlqkSnY3opbIJUHOgnd9KhuijaTbu4zydm482To4uxpGZJoFBj5gTA3DdHlTOrnwErSlp%2BcA27I3yPNQtcGfQ8bE1cQx7PKWF53d5dUr1lfX91wcI5JY3of98qE4v1SpVQRQIL%2BVGlzg4n2UCW4e44u9QPfVuY4%2B2Y%2FY58GmXeaYMQVOSn6eNqEF7SXdA00eSPBUw0qG5wQY6pgGWRKQ0IKtCMjJdomym7UVY7qYVTH%2F%2BpO6QaUGbEQxrAINB1pSjG0o8%2BDwXv%2BtBy8rfKqEisHoQ2B8eNoZ%2Bsss7Dvc2BODHEQEVNnuFmGIoU4a1IHHXPgV0agLGEMW30ig%2BQn5AGGrsLxzgtV0f7oZIvSaY%2BKYOSIPi0%2Fm%2BGwND8WVTes8cF4kRjDELwEFaj6ysIlqnEKeGfR78pWEtlrwCzkaXtPn2&X-Amz-Signature=ad9f10f878b74556b34105852b2249446efb212bdaa29c87a4a2d16df355566e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

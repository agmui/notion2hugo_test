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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YTQ7XXR%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T161056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMI7dTh66G0AJFbIAK7wwPRNokWXpJQODEIEqoHjApNAIga15wiz6TbDb14X2zUGwuF0fsHJnfNT8eS061gqpSqFIqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGsrxEG0QyKFzLHSKCrcA5MWTPRQEz7iGjb3MDdxpv7Yk864Y%2BX1s14gjgIHQ5MRBwlb8Zx3KVNDb4fNGp0TOHmTsYy48KBn%2BppXPDclSUTCjEsg%2BcTIhhBL37oJH9ifj6SpnfqNPfitlO%2ButNlbTBBc3ZhoHl2pzOJQ4Nz3070CVoRS5b3es9OgH5RKqJMo%2FcHKETwROuvT6ApGHHcdZCHeiVVkyiOUf6lZuSehjznkCsmJcg0iH6nni%2FNQ7Ywboh0k1sLMgb095u5O%2BLkb3lxHO580dVRd5gfeuN3WpzIz88BO7L2lCQ9AOIF%2F8loqGU%2BKd4dFPOlrDS39JGRGy%2FrOkWaeo4S6j%2BbYwbgMXbosH6kLineykfqrgOUu3lIGISIgb5QMUuT7y5mUpo%2BRR2aB5fdGHfld25e3%2BTeNHzgAL87QqRUPJXMTigCVXrHMmCrVfJpDOiHmA5ySdOtHP6b32BIi2sWFfcPQhoml2YoEEB1mZwlMhT2694vzaxgb3rUkO1FvR2y5d47tjjea6eXD%2FQCX0dC%2Fo5y515p%2FtLEum9ysag5god6YjaPpco8XC5kzqg3IpcLVAuyLLtGz1dGKRmMcujJP9ezUfAWaVIsiE49rEyB0idtTfWX%2FpJjqI2MPaPCfx5uREKp7MJHUxMMGOqUBOUWBTgsLtpo6bV2f%2BAFiaHa7jW6b7PhbbO43fYQ8T8MSeZckFDVT%2B3JAU7GE0xr3Bp8W80CK%2Bns5bO5bR8anHhx7wsp92tlYRnzWRMHdB8P3%2BqBx81Scm%2BiDKAMa6o7BillfjYwJjTRkTk8VjmTnjG4Z4rUrDQuWbjzJgOjdMgRbHIXLZdxhj09S6PitmEFp9OhXJJN00F8%2BNNmgzan%2F2j5HN%2B1O&X-Amz-Signature=0f0a6ac3f0a4fa38d96656544a6e6fde2c3081ea5164ea876306c9a5282d5360&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YTQ7XXR%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T161056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMI7dTh66G0AJFbIAK7wwPRNokWXpJQODEIEqoHjApNAIga15wiz6TbDb14X2zUGwuF0fsHJnfNT8eS061gqpSqFIqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGsrxEG0QyKFzLHSKCrcA5MWTPRQEz7iGjb3MDdxpv7Yk864Y%2BX1s14gjgIHQ5MRBwlb8Zx3KVNDb4fNGp0TOHmTsYy48KBn%2BppXPDclSUTCjEsg%2BcTIhhBL37oJH9ifj6SpnfqNPfitlO%2ButNlbTBBc3ZhoHl2pzOJQ4Nz3070CVoRS5b3es9OgH5RKqJMo%2FcHKETwROuvT6ApGHHcdZCHeiVVkyiOUf6lZuSehjznkCsmJcg0iH6nni%2FNQ7Ywboh0k1sLMgb095u5O%2BLkb3lxHO580dVRd5gfeuN3WpzIz88BO7L2lCQ9AOIF%2F8loqGU%2BKd4dFPOlrDS39JGRGy%2FrOkWaeo4S6j%2BbYwbgMXbosH6kLineykfqrgOUu3lIGISIgb5QMUuT7y5mUpo%2BRR2aB5fdGHfld25e3%2BTeNHzgAL87QqRUPJXMTigCVXrHMmCrVfJpDOiHmA5ySdOtHP6b32BIi2sWFfcPQhoml2YoEEB1mZwlMhT2694vzaxgb3rUkO1FvR2y5d47tjjea6eXD%2FQCX0dC%2Fo5y515p%2FtLEum9ysag5god6YjaPpco8XC5kzqg3IpcLVAuyLLtGz1dGKRmMcujJP9ezUfAWaVIsiE49rEyB0idtTfWX%2FpJjqI2MPaPCfx5uREKp7MJHUxMMGOqUBOUWBTgsLtpo6bV2f%2BAFiaHa7jW6b7PhbbO43fYQ8T8MSeZckFDVT%2B3JAU7GE0xr3Bp8W80CK%2Bns5bO5bR8anHhx7wsp92tlYRnzWRMHdB8P3%2BqBx81Scm%2BiDKAMa6o7BillfjYwJjTRkTk8VjmTnjG4Z4rUrDQuWbjzJgOjdMgRbHIXLZdxhj09S6PitmEFp9OhXJJN00F8%2BNNmgzan%2F2j5HN%2B1O&X-Amz-Signature=b1c3391dc2819785b7cd2b3871d69a4cfee7607f60c3dd662b2cc97a0cb18bc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

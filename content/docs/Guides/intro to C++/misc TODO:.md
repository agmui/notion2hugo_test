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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T46AOVP%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T110156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCG68TeE9%2FKG0Dwu8lvoS7t41O1L2Pa8VFLA0mERxqR3wIgGKjRFY7IxXysemu2sLx4ZfqIgFfimIo7S0e3JdI6bnIqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrljPXXBbPPjBNp8SrcAw5JrqrNg7JMf4xWdbUpATH92KZKdkJumO3Oz1rLOpVajo7Ym2Al6sjIIecAfRFwDFwdc7mmGe%2Buyxbo2r%2FG7DKrr7TkjeGhzwZCeckoxYf1l6nC%2FYh0ycIr6ZJ4ku9FzpK0BZShIoPH5oXH39BqtkdMT4snNx02oIN1mTM7nTYne9gTPMcQ3W4cVeO9pexCn053dY9rKbu3ekokoqaQ66xi7UiuU%2BR5VOT0rUmABghlV1WymIv2Rpi9CkPswtL4CIq8d4GWsNpHCRLWtyyp5Uq%2BLAX0CgtPyHvLkGZljj63%2BbLucr3lYLSEtObcnnmgawe2GiBWoddk6AuQ%2BS5W%2FR8dZPHnA7B6zIIq332gHTRwLbn0%2FMLUx8C6V4Ym9E8YWvOqsiWT9DHylkDOPApfMkoPSosfLT%2FeR8lrjpYbmfMikFZzEEAS4ofpdYjKFa0eyr8XmdZti4RjdSoQAt0eVBEzXvZYDWOZGgJC%2B7dfzUR7dGCinMkipdYd4S6%2F7EekTCPDRnkdmOtmJ29VqN6%2Bnrb7H%2FG41S%2FPZBFVA14kIOXD56vB8MzY9FtC%2BiZpZQfpsOVaVpe3m1Z0FFOnikYevkkDyZpt1%2F4%2BoEBQ01DpLv2xqc1PO4X%2F3nBJaZ7gMP77jMAGOqUBmj7NgQsoouEwtnj%2B7vVVbP1lc%2BCQlcPpb7pinnE28MfGdw1SYWyw4U54Aj37TY%2B3kuhYIKEcP1377TR%2FompFA1ht1PmB4ujJQB3u8%2FvVtrVeoDvyffXgjrlb15BofmnYQl%2Bp1q5idXFe%2BfzW7wYNeVYpT9u2djmL1CTTVPnFen1bXX88H2S6xQacFJ1B8DF%2FGQHQ6Wv6%2F9frdccTxtT3XKh8%2Bwh%2F&X-Amz-Signature=34cba93388c4e0fc286a50b6da0f42ab627e6b6171f486d2e975e47ad68e04d2&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T46AOVP%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T110156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCG68TeE9%2FKG0Dwu8lvoS7t41O1L2Pa8VFLA0mERxqR3wIgGKjRFY7IxXysemu2sLx4ZfqIgFfimIo7S0e3JdI6bnIqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrljPXXBbPPjBNp8SrcAw5JrqrNg7JMf4xWdbUpATH92KZKdkJumO3Oz1rLOpVajo7Ym2Al6sjIIecAfRFwDFwdc7mmGe%2Buyxbo2r%2FG7DKrr7TkjeGhzwZCeckoxYf1l6nC%2FYh0ycIr6ZJ4ku9FzpK0BZShIoPH5oXH39BqtkdMT4snNx02oIN1mTM7nTYne9gTPMcQ3W4cVeO9pexCn053dY9rKbu3ekokoqaQ66xi7UiuU%2BR5VOT0rUmABghlV1WymIv2Rpi9CkPswtL4CIq8d4GWsNpHCRLWtyyp5Uq%2BLAX0CgtPyHvLkGZljj63%2BbLucr3lYLSEtObcnnmgawe2GiBWoddk6AuQ%2BS5W%2FR8dZPHnA7B6zIIq332gHTRwLbn0%2FMLUx8C6V4Ym9E8YWvOqsiWT9DHylkDOPApfMkoPSosfLT%2FeR8lrjpYbmfMikFZzEEAS4ofpdYjKFa0eyr8XmdZti4RjdSoQAt0eVBEzXvZYDWOZGgJC%2B7dfzUR7dGCinMkipdYd4S6%2F7EekTCPDRnkdmOtmJ29VqN6%2Bnrb7H%2FG41S%2FPZBFVA14kIOXD56vB8MzY9FtC%2BiZpZQfpsOVaVpe3m1Z0FFOnikYevkkDyZpt1%2F4%2BoEBQ01DpLv2xqc1PO4X%2F3nBJaZ7gMP77jMAGOqUBmj7NgQsoouEwtnj%2B7vVVbP1lc%2BCQlcPpb7pinnE28MfGdw1SYWyw4U54Aj37TY%2B3kuhYIKEcP1377TR%2FompFA1ht1PmB4ujJQB3u8%2FvVtrVeoDvyffXgjrlb15BofmnYQl%2Bp1q5idXFe%2BfzW7wYNeVYpT9u2djmL1CTTVPnFen1bXX88H2S6xQacFJ1B8DF%2FGQHQ6Wv6%2F9frdccTxtT3XKh8%2Bwh%2F&X-Amz-Signature=95b0c56c670c51682f1ce7e1634efea2880cf98091be9a6ee9370c06eeb68c15&X-Amz-SignedHeaders=host&x-id=GetObject)

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

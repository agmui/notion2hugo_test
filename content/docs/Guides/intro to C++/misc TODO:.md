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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7KJIIHQ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPbTXd5uLzu4%2BizINf60xZ3Os4YJlgsZWkFwS1VHaEHwIhAN96QGDAh38lvpqiIfPoeAsy9ybZaAAxfK3OzmjmvwLjKv8DCBcQABoMNjM3NDIzMTgzODA1IgyWbI0v75%2FcpruxbAsq3ANyhu6%2F%2BwJ2E1h8SH54urJZzU9pdeKlCzHsRTcS1h%2Bkcgooikwacl1dQExFzFkCNVbUjzggOx3Qz9wNYKOIUsZaM1lPffyijEck5q5CBYpta041oAagBZF0yT%2BzM7f3p%2FCIFnivHoXWw%2BLCsHBDq9epuNLXRxbDd5AIr4uA4hmU%2B7YaP1ikP%2FWwp1ri5qc8Y1tQSCb8kSUseOfqpsUHgkzQ7KgDxLrts4IygH7rBcYkD4HCMXyiksK7KhX7mxbaI1HIu0dx%2BDonUVEOBE76ajNaXax6ab%2F7WpTp9SV4uxupnZ8ct3fV7Ts8BRnvS04Egip9uQiT94q%2FBAi1W6CJELEhR2szQhtPO7DwEmCwd0mEow2phFBtcYBCph9aR%2BuwfE9K3w2Ts82FePhDOYA%2B88redLc7dD2C67gzX3jzxz%2B4ON6QXBusdtE3E5jySFygS6CEgg5140JhRI3F88YKk0Unsm7PUCd54Q%2FfvIQ6pyFo%2Be%2B55CTLVkMMMQv%2Bd7NoplM3AUvJTBpcqISdilH4EPOVVF7xPjN6emA6NebCSovPyMtQciYMgPEjEzuCm%2BEZWzwGBS4TftAYG7SF5JUBTcF3kQS1ERCXRzwCoFbE8C9Fug%2Bs6BN%2FU0rHaMcJxDDluKG%2BBjqkAY%2BbHWSnDeGgA74AA%2FTH5ufAXcZGFRoFm4Ak4JyZvM4gXP7KDfscXIQG7Tme82uxApgtzI6%2BdiX4De0cTQqKZQXM2WvRD6EuJcewY12OSVCld2ln3lGIhlukv7pXd09ppc8tEUfsocglGpSksWy3pl74u1%2F6rBGOEACh8FYfwMQ%2BKfUEb4fKiw5%2BSmC5yULSS%2B5ohsLehpxgSRvSHRp6ROUoXJhj&X-Amz-Signature=68d4c6e276e3b4a52df1e6a260d0215e63ea3f10bc0d1a36aaa21b09006f7ba6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7KJIIHQ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPbTXd5uLzu4%2BizINf60xZ3Os4YJlgsZWkFwS1VHaEHwIhAN96QGDAh38lvpqiIfPoeAsy9ybZaAAxfK3OzmjmvwLjKv8DCBcQABoMNjM3NDIzMTgzODA1IgyWbI0v75%2FcpruxbAsq3ANyhu6%2F%2BwJ2E1h8SH54urJZzU9pdeKlCzHsRTcS1h%2Bkcgooikwacl1dQExFzFkCNVbUjzggOx3Qz9wNYKOIUsZaM1lPffyijEck5q5CBYpta041oAagBZF0yT%2BzM7f3p%2FCIFnivHoXWw%2BLCsHBDq9epuNLXRxbDd5AIr4uA4hmU%2B7YaP1ikP%2FWwp1ri5qc8Y1tQSCb8kSUseOfqpsUHgkzQ7KgDxLrts4IygH7rBcYkD4HCMXyiksK7KhX7mxbaI1HIu0dx%2BDonUVEOBE76ajNaXax6ab%2F7WpTp9SV4uxupnZ8ct3fV7Ts8BRnvS04Egip9uQiT94q%2FBAi1W6CJELEhR2szQhtPO7DwEmCwd0mEow2phFBtcYBCph9aR%2BuwfE9K3w2Ts82FePhDOYA%2B88redLc7dD2C67gzX3jzxz%2B4ON6QXBusdtE3E5jySFygS6CEgg5140JhRI3F88YKk0Unsm7PUCd54Q%2FfvIQ6pyFo%2Be%2B55CTLVkMMMQv%2Bd7NoplM3AUvJTBpcqISdilH4EPOVVF7xPjN6emA6NebCSovPyMtQciYMgPEjEzuCm%2BEZWzwGBS4TftAYG7SF5JUBTcF3kQS1ERCXRzwCoFbE8C9Fug%2Bs6BN%2FU0rHaMcJxDDluKG%2BBjqkAY%2BbHWSnDeGgA74AA%2FTH5ufAXcZGFRoFm4Ak4JyZvM4gXP7KDfscXIQG7Tme82uxApgtzI6%2BdiX4De0cTQqKZQXM2WvRD6EuJcewY12OSVCld2ln3lGIhlukv7pXd09ppc8tEUfsocglGpSksWy3pl74u1%2F6rBGOEACh8FYfwMQ%2BKfUEb4fKiw5%2BSmC5yULSS%2B5ohsLehpxgSRvSHRp6ROUoXJhj&X-Amz-Signature=824734761d8060cf5bc9d01b018e9d2c689db9863936e3f4d2afb4cd23a7dfbb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

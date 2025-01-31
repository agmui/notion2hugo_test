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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PUGOUWT%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T050739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFbpP27yGg%2BzBA%2FIwHsPUhQMf2K99ygN%2B0bE0Hmo8tFwIhAMOPsuMgn7UMEY8ecttFi%2BRPD7rvY18D80SUtwq3cCxiKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2F1VFVPzvpZr6vJkcq3AMzkayws5I89XBqGBrblvpe0XL4Edm81Tustcp57wzVTNM%2F378iUv3fOzFWLXC1cqHSpShKkb4E0KcVs%2BpfNiTuvyRGiEtDCFZFmYanVDN0MW9tB5wZgL4OwNmmzktnNXa4gf9BXSNaoLP5lCEqqLwwDYyGUfCUgjQ37Ne%2FC6O%2FQYoWIlAUmGVBzOpp9Jz%2BDtOBeAv4MJCMf%2FbeqLaSiJSgtGD4bWpnmyTk7wicZ%2BV9zYgYV41RriQVWTHbz9wML%2BfLslOlfJskyhyEpAvxE0%2B6BD%2BNwvBwM0HmMm59jh%2BSUAoOciNf1IGhu5IgPjlxcYQnDtRUiBT%2BGsBNGP%2B%2Bhb9NrRC4gc3GKsN%2B186dsAzL0Z3qIZNrSYEWv2cMRA5%2Fe4aZT7%2FwnN34D8R4WWsfFTWpW5X8ouxqnvX0%2B6BguP009D7bJVkb9FeERc2furBI%2F3JLNLC2c%2FCeJaKgn%2Bd4iL4Axa9NMdE9vnpRJyAg8fwCcb2%2B%2BXa0fFNOqHFtBfIA5o%2FcfHwBizS34Eooh%2FKvvA%2Bh%2FRthcWaa0P8hzuLQg3EaDd4bn0q45ITLfJVfsfGQpiOzfa1oYZPuiGNtVWaYBdA5zbKMPM1vYdy0GOLwtgnBJmrYznSM1KkgBaLiCDDc0fC8BjqkAdx4mw0sHC3jNKhlg7nf0dVY0kVbOy%2Bne90Oy5jbBUFzBJvjBEy1N5oHzObm9z%2Bxj05V3bVP7Tr4af9KQQoa4%2BoQvdvgr4FUH8cMsq2Aw6pjdNypeUUIAS9U2STeBNB6w8Wv7Dh5huTna1Bic9LPIJ0Ps8fsRfIZWF6ybTJy%2BqBzEjCyXVzKcOwk617tIsXHP0h6NCFRuLEvMf16Qk46fU33KMCJ&X-Amz-Signature=cf78919e8a57ffa592981035a6d759b2f41e3420583555e1689580221baaa127&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PUGOUWT%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T050739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFbpP27yGg%2BzBA%2FIwHsPUhQMf2K99ygN%2B0bE0Hmo8tFwIhAMOPsuMgn7UMEY8ecttFi%2BRPD7rvY18D80SUtwq3cCxiKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2F1VFVPzvpZr6vJkcq3AMzkayws5I89XBqGBrblvpe0XL4Edm81Tustcp57wzVTNM%2F378iUv3fOzFWLXC1cqHSpShKkb4E0KcVs%2BpfNiTuvyRGiEtDCFZFmYanVDN0MW9tB5wZgL4OwNmmzktnNXa4gf9BXSNaoLP5lCEqqLwwDYyGUfCUgjQ37Ne%2FC6O%2FQYoWIlAUmGVBzOpp9Jz%2BDtOBeAv4MJCMf%2FbeqLaSiJSgtGD4bWpnmyTk7wicZ%2BV9zYgYV41RriQVWTHbz9wML%2BfLslOlfJskyhyEpAvxE0%2B6BD%2BNwvBwM0HmMm59jh%2BSUAoOciNf1IGhu5IgPjlxcYQnDtRUiBT%2BGsBNGP%2B%2Bhb9NrRC4gc3GKsN%2B186dsAzL0Z3qIZNrSYEWv2cMRA5%2Fe4aZT7%2FwnN34D8R4WWsfFTWpW5X8ouxqnvX0%2B6BguP009D7bJVkb9FeERc2furBI%2F3JLNLC2c%2FCeJaKgn%2Bd4iL4Axa9NMdE9vnpRJyAg8fwCcb2%2B%2BXa0fFNOqHFtBfIA5o%2FcfHwBizS34Eooh%2FKvvA%2Bh%2FRthcWaa0P8hzuLQg3EaDd4bn0q45ITLfJVfsfGQpiOzfa1oYZPuiGNtVWaYBdA5zbKMPM1vYdy0GOLwtgnBJmrYznSM1KkgBaLiCDDc0fC8BjqkAdx4mw0sHC3jNKhlg7nf0dVY0kVbOy%2Bne90Oy5jbBUFzBJvjBEy1N5oHzObm9z%2Bxj05V3bVP7Tr4af9KQQoa4%2BoQvdvgr4FUH8cMsq2Aw6pjdNypeUUIAS9U2STeBNB6w8Wv7Dh5huTna1Bic9LPIJ0Ps8fsRfIZWF6ybTJy%2BqBzEjCyXVzKcOwk617tIsXHP0h6NCFRuLEvMf16Qk46fU33KMCJ&X-Amz-Signature=a402e33aab1c9a44179b75bed06636799f3c78e5b7705415134d3102493fc2d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

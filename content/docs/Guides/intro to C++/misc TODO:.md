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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FK54OOK%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T004717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGi%2BAyt%2BBRNM9ruBhpAs0FQWIaSeW%2FtGVT7lDnmokg4SAiB8cT%2B4jdlTDT9uyKsQgaI%2Fctd8%2FFmwVStTGYVTCuTC%2BiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML16CfjmOHViHPcnHKtwDgy%2FbclX4cuiHANUvvluztiiL2q8Uj%2Fdj%2FqagVFd3WTITT5SYqKyfi8UGdlGvx8J%2BLcpVaBV8NwpyEJhH1DMCGumb%2FL6%2FiwhB6HkHUy5JTh%2Bk62BJ%2BvRD%2BYasNy%2FptiS1kIb%2FkxCpJ9EFapyyyAH0GaNNj5sunoI777ogJWNvyh2fnOtXmKF8%2FOZu6VnTqVGvOfsNkxFntY4oZqFjgVzzM%2FqMkLjGooNjb8egH0xf%2B6Jm4fr3WmoKjdE83oWpPqv4RbcHjqz8sQbzH2XbxZVoWpSc4cjfyqb8PaiO3GhP5phlO881hOV5dsV4VqoKT7LBWhTGqUr13nsvWk0pymG6Mdspxm9C%2FxI6H3HHODdTGLSk3HCP8EndGhkhbxWK7ta2LGV7SIR9%2BtMLAIcqexI3kraobTRRCmQTwl3JhDCir9KpUExvrR2V6Us1I1jBpZQvuHU6BLEtJDSyplTAAFNSyW0peJ5Gc%2FR3JmgW4U18%2FyZ4LQV9rp3L7j9DCos%2FFU9VQXiCLG8Db4e9%2FJ1m7v1ZEW18DY24g1n2JYG1f2ifoEofDZYC3E2YmEKMYvA69xz9hCAzpSgAUxSAEp9ZopHVbHVwWFAXs2g1QybRN9V9ZAVe2oXefLAhOW1gwHEwjJ2TwgY6pgF9dXbHUOSjgr1Q1xucp1ddI%2BizR6RG%2FWlp9mGsCgYH6e43AoqQ2f%2FuBBt66qSVGlJSC7zKRglJDYhBKXS9aObtaWHTlgCYSkIvk%2BFXZ2zRiYu0xJJkEFQ%2B0pwHeckDIzUxrs8ULmmKb4SsyEI1VNSVFVoC%2F8mFJu8aFLZh0ZL5ivs5UDMjbhfRAo3xRasy9b9vMf229z7Juw0ILR4ravaJL3tH3BXZ&X-Amz-Signature=c872e2ef014943955f3f7ea597658b3814c0a6ff724abcd5877fbf65af228ae9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FK54OOK%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T004717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGi%2BAyt%2BBRNM9ruBhpAs0FQWIaSeW%2FtGVT7lDnmokg4SAiB8cT%2B4jdlTDT9uyKsQgaI%2Fctd8%2FFmwVStTGYVTCuTC%2BiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML16CfjmOHViHPcnHKtwDgy%2FbclX4cuiHANUvvluztiiL2q8Uj%2Fdj%2FqagVFd3WTITT5SYqKyfi8UGdlGvx8J%2BLcpVaBV8NwpyEJhH1DMCGumb%2FL6%2FiwhB6HkHUy5JTh%2Bk62BJ%2BvRD%2BYasNy%2FptiS1kIb%2FkxCpJ9EFapyyyAH0GaNNj5sunoI777ogJWNvyh2fnOtXmKF8%2FOZu6VnTqVGvOfsNkxFntY4oZqFjgVzzM%2FqMkLjGooNjb8egH0xf%2B6Jm4fr3WmoKjdE83oWpPqv4RbcHjqz8sQbzH2XbxZVoWpSc4cjfyqb8PaiO3GhP5phlO881hOV5dsV4VqoKT7LBWhTGqUr13nsvWk0pymG6Mdspxm9C%2FxI6H3HHODdTGLSk3HCP8EndGhkhbxWK7ta2LGV7SIR9%2BtMLAIcqexI3kraobTRRCmQTwl3JhDCir9KpUExvrR2V6Us1I1jBpZQvuHU6BLEtJDSyplTAAFNSyW0peJ5Gc%2FR3JmgW4U18%2FyZ4LQV9rp3L7j9DCos%2FFU9VQXiCLG8Db4e9%2FJ1m7v1ZEW18DY24g1n2JYG1f2ifoEofDZYC3E2YmEKMYvA69xz9hCAzpSgAUxSAEp9ZopHVbHVwWFAXs2g1QybRN9V9ZAVe2oXefLAhOW1gwHEwjJ2TwgY6pgF9dXbHUOSjgr1Q1xucp1ddI%2BizR6RG%2FWlp9mGsCgYH6e43AoqQ2f%2FuBBt66qSVGlJSC7zKRglJDYhBKXS9aObtaWHTlgCYSkIvk%2BFXZ2zRiYu0xJJkEFQ%2B0pwHeckDIzUxrs8ULmmKb4SsyEI1VNSVFVoC%2F8mFJu8aFLZh0ZL5ivs5UDMjbhfRAo3xRasy9b9vMf229z7Juw0ILR4ravaJL3tH3BXZ&X-Amz-Signature=ee26d7d5d0532c9a77b9714966922738d77181d70bd3ffef14fe849152bad581&X-Amz-SignedHeaders=host&x-id=GetObject)

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

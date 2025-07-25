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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NBSWLLL%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCdZMpIVMmZ2hr9zIGqi0SjoKxNhP%2FpiO38tAlEheqhxAIhAIeCpxNE3rcQdyP4Q7p5A4EcSIiSBfl7wOBJsL2f%2BZ8qKv8DCD4QABoMNjM3NDIzMTgzODA1IgzAuiS8HUvDYjjyfYMq3AO6DnV3I9lwJ3eZMmHTXEhjvn%2FdkslgexH0xrW4m%2BIuLL7WKT4f8kwikmzdrmQQ3U9dWmd%2FYemBjGtXsfffBzwYpyaHsGBhn3BZGIzVBfiZFdH0o%2BCOWEtcpQWuLo1syygP4wUk3SQ3FGJ8v%2FRKoEwEGJHXGfNCqZSw6DrUMTqFD4d%2BQajwMpBNl0zgjALQ60aqQLCjZKD7mLbWZuY%2BllNUFk3nJ4gqTCT2wr3GsRgX%2BB8gC%2Bl0UG6u6f%2F5UkgYmFkpvs5Dy5t%2F45Es70EcEx8wtQuaiX%2BkzZR28Pw9B5DZto3CGB0YRhC3QZbhkO3sVlcAiu0FI7RRniETuNcu4CuzRiYNMgSKk%2FrcNCQhoVEmTujivALyvtVz%2FaVbOv9IM29fGXCDLtdH9DQEkVsBPHqT%2B3ar556VuveKPsJSR4PMHopdrLKyk9hqMGIw0RxFtRfGY%2FFWvCvAVwma5Ew4sLuwzzDukUdh8HIxkcKPG2i9Evzy7OMiAOIUikUxDEdRsPrQ%2BIIH2Z1MTXAb1i01Jf1pAFhk%2BcN1EQGauLJYBOdghPyF3UC%2Byug7GNZqtaGduh%2F676%2BVxQUXWJl3va%2FzyKrAHeo5%2BsYhI04gJis9ASjU3p9QDIebG%2BH4pus9LjDBnIzEBjqkAXSVNlor6R2qeXCfgZK2ubxpPaYz99KIXOeHVlW3BT%2BR3gLl6wYpgs8Q6Y9l2F24ilr3QJEv9rhKv2sK27QBD8ZIOuozBgNPFYNzBHfHth097leFG25A0YyXHQeVy3Dkz7BgqRK0WyUmm1wOVnSVjHh3tb11UHGusnCCq90cGf6zwnwCfzbseSa9eE9t%2B8Dz2pA8kiHYJ17ArgTjyD8vuX4dNcfg&X-Amz-Signature=ea66acd8a805f91dce66613766b166e6c6dd8bbf32adfc34213f80793e0d1fbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NBSWLLL%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCdZMpIVMmZ2hr9zIGqi0SjoKxNhP%2FpiO38tAlEheqhxAIhAIeCpxNE3rcQdyP4Q7p5A4EcSIiSBfl7wOBJsL2f%2BZ8qKv8DCD4QABoMNjM3NDIzMTgzODA1IgzAuiS8HUvDYjjyfYMq3AO6DnV3I9lwJ3eZMmHTXEhjvn%2FdkslgexH0xrW4m%2BIuLL7WKT4f8kwikmzdrmQQ3U9dWmd%2FYemBjGtXsfffBzwYpyaHsGBhn3BZGIzVBfiZFdH0o%2BCOWEtcpQWuLo1syygP4wUk3SQ3FGJ8v%2FRKoEwEGJHXGfNCqZSw6DrUMTqFD4d%2BQajwMpBNl0zgjALQ60aqQLCjZKD7mLbWZuY%2BllNUFk3nJ4gqTCT2wr3GsRgX%2BB8gC%2Bl0UG6u6f%2F5UkgYmFkpvs5Dy5t%2F45Es70EcEx8wtQuaiX%2BkzZR28Pw9B5DZto3CGB0YRhC3QZbhkO3sVlcAiu0FI7RRniETuNcu4CuzRiYNMgSKk%2FrcNCQhoVEmTujivALyvtVz%2FaVbOv9IM29fGXCDLtdH9DQEkVsBPHqT%2B3ar556VuveKPsJSR4PMHopdrLKyk9hqMGIw0RxFtRfGY%2FFWvCvAVwma5Ew4sLuwzzDukUdh8HIxkcKPG2i9Evzy7OMiAOIUikUxDEdRsPrQ%2BIIH2Z1MTXAb1i01Jf1pAFhk%2BcN1EQGauLJYBOdghPyF3UC%2Byug7GNZqtaGduh%2F676%2BVxQUXWJl3va%2FzyKrAHeo5%2BsYhI04gJis9ASjU3p9QDIebG%2BH4pus9LjDBnIzEBjqkAXSVNlor6R2qeXCfgZK2ubxpPaYz99KIXOeHVlW3BT%2BR3gLl6wYpgs8Q6Y9l2F24ilr3QJEv9rhKv2sK27QBD8ZIOuozBgNPFYNzBHfHth097leFG25A0YyXHQeVy3Dkz7BgqRK0WyUmm1wOVnSVjHh3tb11UHGusnCCq90cGf6zwnwCfzbseSa9eE9t%2B8Dz2pA8kiHYJ17ArgTjyD8vuX4dNcfg&X-Amz-Signature=be87f43ff19b5bea66fb8d123642c7c5203149bbb380f1654ceade93e6894af0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

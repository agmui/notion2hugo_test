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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NXFS3E4%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T132349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCsUeL7lld1r2I0zHlir5ok6%2FKpQLcVy94OqIEePpTuQAIhANi0RvRw8qLD3jxAW6Fv0PT%2BSPNKozZsTaISFjKc7LT9KogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRCaBgURK86BdyBL8q3APfK3hEtfPv6Snwmj7TqwmmY5yGt9Z6pbWOEvY9%2B%2BRcbYwydqhfxmtuQBMu0Ld%2BFNS2aEJDZEibf%2BRvpoRNHtVe580swCP3Kl9rTJeRPBaDhN3YUQPP3fzVgMeANibcu7bHyxDEvtP3770om8URiFBpR%2B0kfYz9ytMRj5bsdt9cLj12cUIAuYaWVGtFR5wxH0G7XWNlP4m5qO1pe6gisCrQXq51Ema5Y4H8x6DbTaIi%2FejtzVi4tr411WRml5ultBsta9SnXHsXnHX2JvWgWZKs2vTrpdejwsN%2BCtrB5QL3kVt0zHKJDxS7ca4EcUnLbXlShoiCaLAZk5X%2BU8oZ7Q8gapwiiK4rYaFmamm9gRT8nz5U4O0wkWeRTzQt6E7YXnp6H4vvE3AMamWXqOL%2BQyqTHuPrULTiM4J%2BnT1vTLrx%2B7bOTKlBev%2B0eKAO3zPEUXv30J2cUG4gDvH6nWLPL7BnkcP6IcYxotZ96ZAh2f4%2Bg1aE64DmT1Ynb1A%2BQnZWQFIS1rJzQT%2FIm2G%2BGbKeOEet6iJCEATpNSstUlo%2F%2FkycVduyzW6ISc3erx%2ByUAC92KBoN1z4MfcAqdaqjKwZXYh6l76wmICq22qr%2B98Mx0toT%2Fz6UkKfuoFGwmLlfDCQxbzBBjqkAaILhpdKQY294gMNZa86PpfwroB8%2BuYwgg%2BNEs1enOSOyAhErH1LFcBwlbT52LmGD%2FZ7hM3vBcLL8XIKMbsz2c1uSAihg0ncLRilQgYHs2wZVj%2BIEzaW3rtPqSV%2BVpE4vIitFJ3jgc%2FH3aYXylVyxHz%2BwTpVemGZVYJQTTrH1eE6Ur958gMD4oagiLZvms1m144jsVSIyRk9EgzOR0qU3rU0ns82&X-Amz-Signature=ca4b20982d124bafe16a35b8103d600976215342363f75ddbdda6eef0511c841&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NXFS3E4%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T132349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCsUeL7lld1r2I0zHlir5ok6%2FKpQLcVy94OqIEePpTuQAIhANi0RvRw8qLD3jxAW6Fv0PT%2BSPNKozZsTaISFjKc7LT9KogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRCaBgURK86BdyBL8q3APfK3hEtfPv6Snwmj7TqwmmY5yGt9Z6pbWOEvY9%2B%2BRcbYwydqhfxmtuQBMu0Ld%2BFNS2aEJDZEibf%2BRvpoRNHtVe580swCP3Kl9rTJeRPBaDhN3YUQPP3fzVgMeANibcu7bHyxDEvtP3770om8URiFBpR%2B0kfYz9ytMRj5bsdt9cLj12cUIAuYaWVGtFR5wxH0G7XWNlP4m5qO1pe6gisCrQXq51Ema5Y4H8x6DbTaIi%2FejtzVi4tr411WRml5ultBsta9SnXHsXnHX2JvWgWZKs2vTrpdejwsN%2BCtrB5QL3kVt0zHKJDxS7ca4EcUnLbXlShoiCaLAZk5X%2BU8oZ7Q8gapwiiK4rYaFmamm9gRT8nz5U4O0wkWeRTzQt6E7YXnp6H4vvE3AMamWXqOL%2BQyqTHuPrULTiM4J%2BnT1vTLrx%2B7bOTKlBev%2B0eKAO3zPEUXv30J2cUG4gDvH6nWLPL7BnkcP6IcYxotZ96ZAh2f4%2Bg1aE64DmT1Ynb1A%2BQnZWQFIS1rJzQT%2FIm2G%2BGbKeOEet6iJCEATpNSstUlo%2F%2FkycVduyzW6ISc3erx%2ByUAC92KBoN1z4MfcAqdaqjKwZXYh6l76wmICq22qr%2B98Mx0toT%2Fz6UkKfuoFGwmLlfDCQxbzBBjqkAaILhpdKQY294gMNZa86PpfwroB8%2BuYwgg%2BNEs1enOSOyAhErH1LFcBwlbT52LmGD%2FZ7hM3vBcLL8XIKMbsz2c1uSAihg0ncLRilQgYHs2wZVj%2BIEzaW3rtPqSV%2BVpE4vIitFJ3jgc%2FH3aYXylVyxHz%2BwTpVemGZVYJQTTrH1eE6Ur958gMD4oagiLZvms1m144jsVSIyRk9EgzOR0qU3rU0ns82&X-Amz-Signature=8ff3c0845ac3c2d93c71defa9d40dabef1c44ff2c951d01a1d0e77a769e165fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

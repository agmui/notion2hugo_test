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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D3R5YNK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEQJYjC2s6RKma8Pru93vQfmQ%2Brc6HiR4z3li7QSOxTwIhAJ99WNa%2Bu6zO8QWRP21Mhw8eQeb2zV9Qq7AqsFQpn9nSKv8DCCoQABoMNjM3NDIzMTgzODA1IgzRMuAi4x1Bin3Q%2FoMq3AOqV1HlPGFu3YqdIk04PRUcqSco%2BFwKubaAjcahBByePWG3nG9te%2Buodnhqc%2FHlmnboGStDqNfXo4rc2ehSGnZtMQvPd4RHBvGEFZ8pD7S9oCggB%2BMf3r%2FILCdo%2BhoKRZwVnxBn8wfr55H6xVlaRfWuQ6I1Yc0khrrc629XBXLwg3buryEeyNpkSg1oioizktCxpMHWJjUrnCGDtkXyf6%2BBmHDRcN3mZ3cCmTNqTweqisiT%2Bh0YLkxjJf2mgB%2BY0%2Bay9Euj8JTm584QoB%2FIpFJbdOrv5gILTGyAIBGbS7IQe1x124EkHwh3dstJnsGDGrw1tjxRCMoejtB5QV3kS6XzmB%2FmLLpcLOmaDWCl0BDg%2BwYuHOUwIUcVmNW4mM%2BP5pCJG9po0eXRxHsBI2aKDCUEJ%2FshIMn8BflJu44mt0rjU%2FLKDy%2BbN0Fz1gpZumTZU7zNow1HoRDrU%2FkCrNX6LtSK3HX9egSnlTzHCQj0QuxFM1ww9N60lNNwmCPsFnpU8QYafELNHLLv1BjSVDplKtAiRy%2FrbQZTdemAlSRvFpDOiog34EnBQvRn5HiiEHlPbGf0a86OGJ7eR3%2FIfJLwSx0ZgsmW3XE3Z9ykpo0nZWwH06bbSyffX4F9Tf%2BvpDDfv7zEBjqkAWHyO%2BpOQevDnu%2FO%2B00LOCax09SGvFyiVcJFJPL9%2FnmDeYc%2FEmFy5rJxCIvo9eSa%2F1MmzycB1zmHTuw6GebCG8At01WYXjwcZVBEqMaCgO2WQyANz5N5m8rBVAHKBtn%2B4BTx%2FueiSBn%2FfahohQXgA6BAuxrqBAAI%2B8fMo9vjd%2FbnF0p%2BRdW29nZK8P28e53os7q%2B3QZYHaOEgOoqpwYHQJVXJPKs&X-Amz-Signature=1f9ea6ec4919785edd45d7142bbccedcc9e641fa91376e7c64b88eb18ee49528&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D3R5YNK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEQJYjC2s6RKma8Pru93vQfmQ%2Brc6HiR4z3li7QSOxTwIhAJ99WNa%2Bu6zO8QWRP21Mhw8eQeb2zV9Qq7AqsFQpn9nSKv8DCCoQABoMNjM3NDIzMTgzODA1IgzRMuAi4x1Bin3Q%2FoMq3AOqV1HlPGFu3YqdIk04PRUcqSco%2BFwKubaAjcahBByePWG3nG9te%2Buodnhqc%2FHlmnboGStDqNfXo4rc2ehSGnZtMQvPd4RHBvGEFZ8pD7S9oCggB%2BMf3r%2FILCdo%2BhoKRZwVnxBn8wfr55H6xVlaRfWuQ6I1Yc0khrrc629XBXLwg3buryEeyNpkSg1oioizktCxpMHWJjUrnCGDtkXyf6%2BBmHDRcN3mZ3cCmTNqTweqisiT%2Bh0YLkxjJf2mgB%2BY0%2Bay9Euj8JTm584QoB%2FIpFJbdOrv5gILTGyAIBGbS7IQe1x124EkHwh3dstJnsGDGrw1tjxRCMoejtB5QV3kS6XzmB%2FmLLpcLOmaDWCl0BDg%2BwYuHOUwIUcVmNW4mM%2BP5pCJG9po0eXRxHsBI2aKDCUEJ%2FshIMn8BflJu44mt0rjU%2FLKDy%2BbN0Fz1gpZumTZU7zNow1HoRDrU%2FkCrNX6LtSK3HX9egSnlTzHCQj0QuxFM1ww9N60lNNwmCPsFnpU8QYafELNHLLv1BjSVDplKtAiRy%2FrbQZTdemAlSRvFpDOiog34EnBQvRn5HiiEHlPbGf0a86OGJ7eR3%2FIfJLwSx0ZgsmW3XE3Z9ykpo0nZWwH06bbSyffX4F9Tf%2BvpDDfv7zEBjqkAWHyO%2BpOQevDnu%2FO%2B00LOCax09SGvFyiVcJFJPL9%2FnmDeYc%2FEmFy5rJxCIvo9eSa%2F1MmzycB1zmHTuw6GebCG8At01WYXjwcZVBEqMaCgO2WQyANz5N5m8rBVAHKBtn%2B4BTx%2FueiSBn%2FfahohQXgA6BAuxrqBAAI%2B8fMo9vjd%2FbnF0p%2BRdW29nZK8P28e53os7q%2B3QZYHaOEgOoqpwYHQJVXJPKs&X-Amz-Signature=c822ebcbe2052d305dd1fb80e54cd4f2b746ab111d988d35208bb85f6df7e358&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P63W4IQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIGZloT8wde3lZyLcCM5i6SPFRw%2FwfLEUe8tJzZ0QIyfBAiB6PykTxvApX%2BURLRFvgsVBBsHZnses%2BvywZch7flKqJiqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0GkqIsme7CEzuAxcKtwDF2NJ%2FrHq1USLSaE1%2BcIjhPY4KbYkVTrcIWD4vGOnqCmZSaNMJeCpudMojKjGMVsgC3CsUrRH0HL4Senc0%2BUkxEOQhIEIqyIm0K2Kk6sLPT4T5UgkCpPPJmSseX1QSEiupJDjJQZKfBtrix9raReVHmzEhIGuTw%2F7lj5gAgJyZUlO%2FeIbvlvzwPAnkLg8UdGJK0tjAD8InbD7RAoZb44bboaNSJMQuvjfQLv%2BoYAMY8CzTPUMqJijvuazVkHA2jQe4gKCo4XKng0xB4EeFM3vvYhzm5osvmDc6mdR%2FlLXa%2Fy1RjWR4TA2X77YdgOnaACnqq85iSdJeKcoUdiTrKHYrVthyE5Edfc7vdTKadHctbVObhUmrTyHZCP8nAz6wk9ldM3Ho9b2%2F5fyMNHgU%2Bq8JszFuLhTmWwHls9c3ijJ6sSVFHdpDY0wNnDuHhkDz6ie%2F4S6vSrtlF9%2BD96lTPSk735ZQXzj8ySkx0JZYbtg8SDLRzUBPZguH2N51sAIiK44906A9QI0AK7Jya3KjjU2zNIMIoM5wzKhPb1iAVI8wZanSaul0XSE9DvKyd2nRnDgEUrbCQ41ny5h6TyWMSBhPZFe5ZLPZFcm2P2yDB4XceS%2F3Ry4NiE7f%2Byad%2F0w3fudxAY6pgExzNDmRjLPn6p4Ij2XQbdWLxbzwqpJUWF9N5OGDftmHifob4UChBdVZgvd9Yc6YiEp4rv5h%2Brha16DEy2DBLqtTU6zUbd1ORsEVOhLK3scPI7UHp96e%2FH7MFaKs2%2BTNyMsspRTS7eGfRdaJwIUycTZ9%2FMRm0f6Xu4w9sUHyBx9GP0MAt1Ru%2B7o37IF8bszkyk%2BBTGWFOZT0athNzeGgJbPkbg9jmm6&X-Amz-Signature=175865d3ff0b61341c8d8d99d5af48a990554bdac16847a423e60aa6e1bbb385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P63W4IQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIGZloT8wde3lZyLcCM5i6SPFRw%2FwfLEUe8tJzZ0QIyfBAiB6PykTxvApX%2BURLRFvgsVBBsHZnses%2BvywZch7flKqJiqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0GkqIsme7CEzuAxcKtwDF2NJ%2FrHq1USLSaE1%2BcIjhPY4KbYkVTrcIWD4vGOnqCmZSaNMJeCpudMojKjGMVsgC3CsUrRH0HL4Senc0%2BUkxEOQhIEIqyIm0K2Kk6sLPT4T5UgkCpPPJmSseX1QSEiupJDjJQZKfBtrix9raReVHmzEhIGuTw%2F7lj5gAgJyZUlO%2FeIbvlvzwPAnkLg8UdGJK0tjAD8InbD7RAoZb44bboaNSJMQuvjfQLv%2BoYAMY8CzTPUMqJijvuazVkHA2jQe4gKCo4XKng0xB4EeFM3vvYhzm5osvmDc6mdR%2FlLXa%2Fy1RjWR4TA2X77YdgOnaACnqq85iSdJeKcoUdiTrKHYrVthyE5Edfc7vdTKadHctbVObhUmrTyHZCP8nAz6wk9ldM3Ho9b2%2F5fyMNHgU%2Bq8JszFuLhTmWwHls9c3ijJ6sSVFHdpDY0wNnDuHhkDz6ie%2F4S6vSrtlF9%2BD96lTPSk735ZQXzj8ySkx0JZYbtg8SDLRzUBPZguH2N51sAIiK44906A9QI0AK7Jya3KjjU2zNIMIoM5wzKhPb1iAVI8wZanSaul0XSE9DvKyd2nRnDgEUrbCQ41ny5h6TyWMSBhPZFe5ZLPZFcm2P2yDB4XceS%2F3Ry4NiE7f%2Byad%2F0w3fudxAY6pgExzNDmRjLPn6p4Ij2XQbdWLxbzwqpJUWF9N5OGDftmHifob4UChBdVZgvd9Yc6YiEp4rv5h%2Brha16DEy2DBLqtTU6zUbd1ORsEVOhLK3scPI7UHp96e%2FH7MFaKs2%2BTNyMsspRTS7eGfRdaJwIUycTZ9%2FMRm0f6Xu4w9sUHyBx9GP0MAt1Ru%2B7o37IF8bszkyk%2BBTGWFOZT0athNzeGgJbPkbg9jmm6&X-Amz-Signature=15a326ad5a84e089c33039f6f5cc9669f5a951db999221b6e439694ffdcc5b64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT4N25MF%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T081130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDXxwitZa6LcTzzA90PmaVwLNsoq%2BC7XOPF12oT%2B8G3cAiBgkPqIE08tGFkr4gJgFWv9i6oKg9SGYGFrf%2F%2Fc8z0XyyqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSwjzdwmLH%2Bz8a8M6KtwDQZYoatwRzvzYW9enIlI36QtoNUgaYrtPGVemn74QsP9IvjTQlj9GjI5eJcSjriXvu6ivMJHhfIzGQr9EsxeU4s8cT49ACsu%2Fy6oHgFXyZAXArTkkv7FE9iPhCDcA57pBileCax7hrD2kQd6Im7SA1BPM0DZQhVibCF1x7N1QJ4W2R5kkRYKJCNNoFAlr0iVRxx0jSLo85QTmTiZR%2FoDeR4%2BVW4z%2BRpC70WsQmOdwzBWoSIxPAOBkVZs5OklgflZRkFeM0i2Kb4DSm0Enwc47iuZrgWg2keJ5VUCaK5XMRTBwmFQXzU3smWlFQ1bC2MN%2BzmnobduJqyU8JKH8irsEBvKSNWPfQQFT16N56TYwKPOLtcVt%2F2H2ghC0GNWECQUz94KI6qj%2B7VzB2AgSHNMQIcu23XAE0USa4F4qN%2B%2BoisDEjlk3vYGA2AaOG38FcXxmzEIpQ9lPfFrzCTIjaG2hSBXHSqlV8CagCLp681WmIIsLa7a094p62AhJ10jvu3Q3mzf0fBgQ7QVUdHjpkyolNvstpkX%2F%2FD2jXguUp%2FPfPdxmCew%2Fa8Rr%2BeTHXSQZl%2BiYHvCrrALIpt5FyPWg3Whh12OON9a%2FZh2AWPWYF60fzKXEX48nZ1ma2SCzwZ0wu7rywwY6pgFqHR7v4U0huQUKYvObOCq4aENKfsXqtRbmTJgcAHoRZ9F%2BTDRT07R8z6pjeuM8nrSNf5hbm1a8qf8o1CJmDXTClznMyGA%2FDD%2Fwx1xSol6B9a6Y%2BgqhD6wbZypBnRXfsKnnT2IiDgC%2BJyV0j2JWG0DNMpsNXdKayxZtuuvw5TFF169S9wnD202rYDXbL%2FFtjhD1iOZKfrD4oQE3RQe1HPnQeP578hXv&X-Amz-Signature=bdc8f588337894149c6e0ac4a795ead111b83c509160944edc3dad459233128b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT4N25MF%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T081130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDXxwitZa6LcTzzA90PmaVwLNsoq%2BC7XOPF12oT%2B8G3cAiBgkPqIE08tGFkr4gJgFWv9i6oKg9SGYGFrf%2F%2Fc8z0XyyqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSwjzdwmLH%2Bz8a8M6KtwDQZYoatwRzvzYW9enIlI36QtoNUgaYrtPGVemn74QsP9IvjTQlj9GjI5eJcSjriXvu6ivMJHhfIzGQr9EsxeU4s8cT49ACsu%2Fy6oHgFXyZAXArTkkv7FE9iPhCDcA57pBileCax7hrD2kQd6Im7SA1BPM0DZQhVibCF1x7N1QJ4W2R5kkRYKJCNNoFAlr0iVRxx0jSLo85QTmTiZR%2FoDeR4%2BVW4z%2BRpC70WsQmOdwzBWoSIxPAOBkVZs5OklgflZRkFeM0i2Kb4DSm0Enwc47iuZrgWg2keJ5VUCaK5XMRTBwmFQXzU3smWlFQ1bC2MN%2BzmnobduJqyU8JKH8irsEBvKSNWPfQQFT16N56TYwKPOLtcVt%2F2H2ghC0GNWECQUz94KI6qj%2B7VzB2AgSHNMQIcu23XAE0USa4F4qN%2B%2BoisDEjlk3vYGA2AaOG38FcXxmzEIpQ9lPfFrzCTIjaG2hSBXHSqlV8CagCLp681WmIIsLa7a094p62AhJ10jvu3Q3mzf0fBgQ7QVUdHjpkyolNvstpkX%2F%2FD2jXguUp%2FPfPdxmCew%2Fa8Rr%2BeTHXSQZl%2BiYHvCrrALIpt5FyPWg3Whh12OON9a%2FZh2AWPWYF60fzKXEX48nZ1ma2SCzwZ0wu7rywwY6pgFqHR7v4U0huQUKYvObOCq4aENKfsXqtRbmTJgcAHoRZ9F%2BTDRT07R8z6pjeuM8nrSNf5hbm1a8qf8o1CJmDXTClznMyGA%2FDD%2Fwx1xSol6B9a6Y%2BgqhD6wbZypBnRXfsKnnT2IiDgC%2BJyV0j2JWG0DNMpsNXdKayxZtuuvw5TFF169S9wnD202rYDXbL%2FFtjhD1iOZKfrD4oQE3RQe1HPnQeP578hXv&X-Amz-Signature=bb0ba1fe861f28e71746916a9c04f1a8e60f6d54a491ea254f1b5357548bf66a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

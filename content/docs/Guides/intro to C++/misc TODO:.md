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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AAHB7ZV%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChPjhtGziqnJPKrGn1XJus%2FXM0tzOXaLLBDxhUVGcyTAiEAsEYtQgJ9v85gp%2B56Is%2FJAivARgaUjJRfS0aDXRU5NtYqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5xYBWkBoEuHPKJ1yrcA%2Fv6vEX2gq4Yhepd7KOhfcMsd3R%2FquNqlNHecq%2FFoSbwQYVNJ69PBjotogwKDl3Cr4%2BBiJwj3O9cBybVs4L8Av18netXhN5DUOz6ywp3GNj1Yqr3r7OExmjVpFAhaBPEwZYjWMQ1Dn227i%2BaFGU%2FAU9RwAhC1RR%2Be%2BIHY2fqCfy8tie34U67Uwe1momOuyqswwjmdJfsN%2BEpkMnC1kCxHk0U%2FZei1Wy5wZ%2F%2FUt0l4w8aTfQWxn%2F2FNgTkSW5Ed1CnpWTCbJPKK7IFvfh3nNSzgoTdgCl12RWfMXKrLBC3d46hdf9lNbp9iNnxP7ojY%2B4kSDaS2xD%2BWXolshl9vs6hqJVQ7%2FSMF5VyLgHunb4PKpJuh%2BedghS8WjDlHvWYGkzOI7crPthUjNq2qkEQh69fBabG2xHvO3BuxCQUH3oEwFlVGNTgMa%2BMnjG2PB1ly%2BjRo%2BFBazRJS9Ph2jfGbJpktJOsx%2BwJBql%2BIXIDy6lGvboUVOCHKg5FlCBGpq44%2F2jpX5tIrwygULpIFvUMg0hPJfT4azIqMWT1I9WKQfJ2jC3fHiwHbjEgQRXzHb6ANT02SOHArdZeD0AByXvm6T0dmc3y2uKgG7W%2B4lSQNbPJ7S2h73WtcLXb8qq0ygGMJTK%2BLwGOqUBqBCRp0y4iNkuQ%2FJHN3206623xjCKMfvIDrNZZ1v5xQ9AS8BEi4UV0LeZBNFOYe2Y%2Bre7nhyolhNw%2FvPHf0hr4LIWGyObDfGMU4cjgrTQAUpFH6mUpKtSFHs3LKJMQNSKpqRIrWPxdp%2BOAsUISdcWa3W2SrnL%2FyshKoiwtqIKiyON1em8MsRbmwsT%2B4Pski0EEAs1Ff1aU7xelVZafJ89rBgODUgc&X-Amz-Signature=19a5a6490fc596de0456a96c885442aa6b4ddc11dfc6a0c3af64388e3c096b08&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AAHB7ZV%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChPjhtGziqnJPKrGn1XJus%2FXM0tzOXaLLBDxhUVGcyTAiEAsEYtQgJ9v85gp%2B56Is%2FJAivARgaUjJRfS0aDXRU5NtYqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5xYBWkBoEuHPKJ1yrcA%2Fv6vEX2gq4Yhepd7KOhfcMsd3R%2FquNqlNHecq%2FFoSbwQYVNJ69PBjotogwKDl3Cr4%2BBiJwj3O9cBybVs4L8Av18netXhN5DUOz6ywp3GNj1Yqr3r7OExmjVpFAhaBPEwZYjWMQ1Dn227i%2BaFGU%2FAU9RwAhC1RR%2Be%2BIHY2fqCfy8tie34U67Uwe1momOuyqswwjmdJfsN%2BEpkMnC1kCxHk0U%2FZei1Wy5wZ%2F%2FUt0l4w8aTfQWxn%2F2FNgTkSW5Ed1CnpWTCbJPKK7IFvfh3nNSzgoTdgCl12RWfMXKrLBC3d46hdf9lNbp9iNnxP7ojY%2B4kSDaS2xD%2BWXolshl9vs6hqJVQ7%2FSMF5VyLgHunb4PKpJuh%2BedghS8WjDlHvWYGkzOI7crPthUjNq2qkEQh69fBabG2xHvO3BuxCQUH3oEwFlVGNTgMa%2BMnjG2PB1ly%2BjRo%2BFBazRJS9Ph2jfGbJpktJOsx%2BwJBql%2BIXIDy6lGvboUVOCHKg5FlCBGpq44%2F2jpX5tIrwygULpIFvUMg0hPJfT4azIqMWT1I9WKQfJ2jC3fHiwHbjEgQRXzHb6ANT02SOHArdZeD0AByXvm6T0dmc3y2uKgG7W%2B4lSQNbPJ7S2h73WtcLXb8qq0ygGMJTK%2BLwGOqUBqBCRp0y4iNkuQ%2FJHN3206623xjCKMfvIDrNZZ1v5xQ9AS8BEi4UV0LeZBNFOYe2Y%2Bre7nhyolhNw%2FvPHf0hr4LIWGyObDfGMU4cjgrTQAUpFH6mUpKtSFHs3LKJMQNSKpqRIrWPxdp%2BOAsUISdcWa3W2SrnL%2FyshKoiwtqIKiyON1em8MsRbmwsT%2B4Pski0EEAs1Ff1aU7xelVZafJ89rBgODUgc&X-Amz-Signature=96ed203555e7a590f9df52d3d04961fb802e670c4472a1cf2bf4c32f51b0f9dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

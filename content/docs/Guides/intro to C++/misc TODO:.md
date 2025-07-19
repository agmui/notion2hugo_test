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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2TOUKFF%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T061236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzyhCynWx6Gmd7AZ7ivm%2BkNxR1NXSBK3mr4%2BJ9Nl1FdAIgDBd5EE%2FGCBzQgWsq15DzY1s77JXe%2BXKvnMGW7L3UinoqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIV3nA3M60CDJddYYircAwffei%2BqzLBudhZfXOdq5nVP9TMhkfTm%2FWAsqGrGdO6O%2F%2BDJdFf59a%2F9Gj%2FCejZ9yb6guleVxKDOPz49cDs8VjvMegFwqP5xmz8ukBtX%2Fr0zZN5XNflQx5%2BDBxpqwFQtvSJn8sF6FOLUuOh5C4Vp7ZRiAKLo%2FSXY8u9t7RSUYY8jOnvmCQXo%2F887O6pnMetgD9f0LNdJRcVjdK2I320bGuKQZ9wyY1kCWh6ua2pAqcA5C6CeI21ScsJ9hM%2FnaVUao9%2B0CRu5iW7d9BA%2Bo1cAra%2F76FbYfuvadLtpounpKCc1m5u5rH9EeHX%2Fb94iUy6tg4SVSnafq4zpFdNUeVFS6rkYTH%2FuJWJrBH82dWIrPnhogMazfjFrpsS0rXCckAF5WQnuDSZ5N4VugAVRWZ%2B8bqgvV55odQwXTSxlM0%2Fk8e9J1QYvwT0josXFQ%2FCrooYg7ZMRxUipaSQ7EzSxjJlE8O%2Fg8EyPoQbHY%2FChNqJoRgPCYMdyxCn2PUrCBmr6A2fB%2FEES8ls9BwThsTQPKm8DGzSBs9DjlV3tZoieY5j8eqfWli0u7GBxIcN2MMQ%2Bno0K1I6SmHxjvLV9i%2Fj13hEeZT0jnYzfxRV%2B8A3upexIP%2FbCYbRg4YDM9y20BrTwMIbF7MMGOqUBBZHJMZY0tdJIAn8kORBDBOrAFvt73pnHt%2BLTYUBT4%2BJGgMDQ0XonABtxQP9OwH29R4Gwy%2F%2Fx%2BRKDITCIExMGt8H5qsKX3RQu8lI27wAexPdzDxRdbgJ%2FgA6B1pwPlZ6JzjaqXD0z9VfA%2BPpcEiyz3IPCoyBMXyKDjw%2FTQBjWnrBUViIC1aZGNY0DKEekt%2FvcJVf%2BBDD8td7jLajGQ4xAwx9P6Qfc&X-Amz-Signature=7a681124ba5ed72b1cde0444ebeb4d05b5596435b0367c0a01f7f550f0f6ac74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2TOUKFF%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T061236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzyhCynWx6Gmd7AZ7ivm%2BkNxR1NXSBK3mr4%2BJ9Nl1FdAIgDBd5EE%2FGCBzQgWsq15DzY1s77JXe%2BXKvnMGW7L3UinoqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIV3nA3M60CDJddYYircAwffei%2BqzLBudhZfXOdq5nVP9TMhkfTm%2FWAsqGrGdO6O%2F%2BDJdFf59a%2F9Gj%2FCejZ9yb6guleVxKDOPz49cDs8VjvMegFwqP5xmz8ukBtX%2Fr0zZN5XNflQx5%2BDBxpqwFQtvSJn8sF6FOLUuOh5C4Vp7ZRiAKLo%2FSXY8u9t7RSUYY8jOnvmCQXo%2F887O6pnMetgD9f0LNdJRcVjdK2I320bGuKQZ9wyY1kCWh6ua2pAqcA5C6CeI21ScsJ9hM%2FnaVUao9%2B0CRu5iW7d9BA%2Bo1cAra%2F76FbYfuvadLtpounpKCc1m5u5rH9EeHX%2Fb94iUy6tg4SVSnafq4zpFdNUeVFS6rkYTH%2FuJWJrBH82dWIrPnhogMazfjFrpsS0rXCckAF5WQnuDSZ5N4VugAVRWZ%2B8bqgvV55odQwXTSxlM0%2Fk8e9J1QYvwT0josXFQ%2FCrooYg7ZMRxUipaSQ7EzSxjJlE8O%2Fg8EyPoQbHY%2FChNqJoRgPCYMdyxCn2PUrCBmr6A2fB%2FEES8ls9BwThsTQPKm8DGzSBs9DjlV3tZoieY5j8eqfWli0u7GBxIcN2MMQ%2Bno0K1I6SmHxjvLV9i%2Fj13hEeZT0jnYzfxRV%2B8A3upexIP%2FbCYbRg4YDM9y20BrTwMIbF7MMGOqUBBZHJMZY0tdJIAn8kORBDBOrAFvt73pnHt%2BLTYUBT4%2BJGgMDQ0XonABtxQP9OwH29R4Gwy%2F%2Fx%2BRKDITCIExMGt8H5qsKX3RQu8lI27wAexPdzDxRdbgJ%2FgA6B1pwPlZ6JzjaqXD0z9VfA%2BPpcEiyz3IPCoyBMXyKDjw%2FTQBjWnrBUViIC1aZGNY0DKEekt%2FvcJVf%2BBDD8td7jLajGQ4xAwx9P6Qfc&X-Amz-Signature=882e335382084369ab913729be48b887c1e5bab57acf3e8d82dc3e3f27b4675c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

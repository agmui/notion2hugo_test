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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ATEQKJN%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T081304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3hVqLvT1nb0lX6s%2FyQ72K9JxTPBqZnH1Wm7ZRGLElMgIhALeJSyd59EXbSz%2FWusbn0fEpTKNHGUJendX7s1MTdP4%2FKv8DCCkQABoMNjM3NDIzMTgzODA1IgzU9KfJ2Zda3Ew4CFoq3APmOVVvT9zkx%2FAz8EdNOs%2BVAOFT43EJwtoADv2WA8MXIZkX4zcrbIGuvGym%2FtlE9A3yYXLDwiLPWlxo197asEbBOeIw78z9AWCBvP4PE7gIBmX8VYeF0qIBT4YC3526IredAHzo28UZhlcjeM2gjnQeKWNGYQk9QdBf3mM2neXP5RWzoHQXVKMy11Sh1u%2BVZe2nFHLF9C56IiR2%2FFuJMxoLqZwO15M8WuwmUiJJ1jikSbkYg1SKB4jzhMQTITV2nk0DoOYzih42OQhGd5TblLtkr%2F%2BpC2pQOSQg%2Bx%2B51Sg7henLgOInSujlu33edZncQfSeE3dhepPkOAJhHd%2BTsP4H5AgRkEE8DA%2BUAqBae8ZyO9%2FCV2FEi8jGkbtpcKhupoy7ZphBT9R93vGJ%2BABslxLOcBjsnzAofM0MXpm1wdkG523rU4KqJg3hjeJfqWxj%2FLDpqxySAQvrkOo2P8iTgr3GgTw5Mc1Q0OhrhlxUSmEFAHo2UTjRShNnzbQrJzf68h5jk7h26te2oH7uc0p%2BdUu%2Bw5HhjvL77xSlL0yVBmpzqgZF3Vy5Y1non%2F%2FVw7hrU%2B59C%2BlQeY57EG6L1vr7biXgOcIlZx3VHXb65KhSeC59sLKx3JVmrZ7ll0RF6jD6z%2BHABjqkAcpy5Q6Sj98Tv0HwV9XJd2nTIap0wB82Sgx7HYSbd9vPxh5PimsWxqQQLoi1rMeEaBGB%2FuSpQCNCXAO%2F0TLkqdKFPt7EFzPvb8RtG1q5MX1fXMHuZ6LObkDFY6MLAellIGZ57IgUlH5ho7appp5puK2Heah%2BmdrXGRc78vKgfKo3aaIIxjuPDPd4c%2BU5lTnrS9lzKBcbmfeSzs8XQKg%2BZAdU8xBH&X-Amz-Signature=08642c2b51034e79e0d3ab1451de89b96177bfd32ef7639f445e93b430a4ab6c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ATEQKJN%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T081304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3hVqLvT1nb0lX6s%2FyQ72K9JxTPBqZnH1Wm7ZRGLElMgIhALeJSyd59EXbSz%2FWusbn0fEpTKNHGUJendX7s1MTdP4%2FKv8DCCkQABoMNjM3NDIzMTgzODA1IgzU9KfJ2Zda3Ew4CFoq3APmOVVvT9zkx%2FAz8EdNOs%2BVAOFT43EJwtoADv2WA8MXIZkX4zcrbIGuvGym%2FtlE9A3yYXLDwiLPWlxo197asEbBOeIw78z9AWCBvP4PE7gIBmX8VYeF0qIBT4YC3526IredAHzo28UZhlcjeM2gjnQeKWNGYQk9QdBf3mM2neXP5RWzoHQXVKMy11Sh1u%2BVZe2nFHLF9C56IiR2%2FFuJMxoLqZwO15M8WuwmUiJJ1jikSbkYg1SKB4jzhMQTITV2nk0DoOYzih42OQhGd5TblLtkr%2F%2BpC2pQOSQg%2Bx%2B51Sg7henLgOInSujlu33edZncQfSeE3dhepPkOAJhHd%2BTsP4H5AgRkEE8DA%2BUAqBae8ZyO9%2FCV2FEi8jGkbtpcKhupoy7ZphBT9R93vGJ%2BABslxLOcBjsnzAofM0MXpm1wdkG523rU4KqJg3hjeJfqWxj%2FLDpqxySAQvrkOo2P8iTgr3GgTw5Mc1Q0OhrhlxUSmEFAHo2UTjRShNnzbQrJzf68h5jk7h26te2oH7uc0p%2BdUu%2Bw5HhjvL77xSlL0yVBmpzqgZF3Vy5Y1non%2F%2FVw7hrU%2B59C%2BlQeY57EG6L1vr7biXgOcIlZx3VHXb65KhSeC59sLKx3JVmrZ7ll0RF6jD6z%2BHABjqkAcpy5Q6Sj98Tv0HwV9XJd2nTIap0wB82Sgx7HYSbd9vPxh5PimsWxqQQLoi1rMeEaBGB%2FuSpQCNCXAO%2F0TLkqdKFPt7EFzPvb8RtG1q5MX1fXMHuZ6LObkDFY6MLAellIGZ57IgUlH5ho7appp5puK2Heah%2BmdrXGRc78vKgfKo3aaIIxjuPDPd4c%2BU5lTnrS9lzKBcbmfeSzs8XQKg%2BZAdU8xBH&X-Amz-Signature=68763168dabc58d9edfc64cb28abe31153907d5c23904fb914e7c5c40aff9ab4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

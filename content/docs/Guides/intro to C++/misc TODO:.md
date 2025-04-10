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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBPWTXU3%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T070858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDU5UHDLR7W4RtrCR54UiAqSRBtuA0xIYiTOABXg0ojOwIgU%2FstolC96PzGtcaHGUhQXq6KHKsj8UXYYFDUtr%2BomzoqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHa%2Fw2bXNNSpIeWO1CrcAwVDqvqrxmBMR51WgpRCvTamj0x%2FRIrLy%2FV1yhYoEwy%2BsYdwDHBTIau%2BxSNJA5Q4H%2BgOu11sDo0zo2XxrtFgD5mxsxPGDzbXp3W3UbNXZpVTTJNyaEh8Ud5r%2FcckSM0jiJ6xUBsAKj%2FGyEV0FSIq7Eg%2FMnCvMM9KxmwRB9q0fU553zk2cbZ5uJs%2F4%2BAEBYT23W5JyN9teGtFXKCmpEddJ8nPTPOfL8vMNKCodeSy%2B%2F4paE5M%2FTVyhroaH2l1GBUTPhJNWTRLHrTpp57WXwqgfDkvQmYEOGNT1TLqTueFlfRfvCO8DdBwFRcE6y29lcT3KKZwRBPq8w9Hni3%2Bmia5nasOsrYcTgQ9k%2BwyblQudd40K1b1XFnD3sM4g3KwVDH%2FcuGdsX8It1bX0coND%2F8U1hHXxjq0RY6NklnQvjN4kONykKTqfJ6wVdFogGS6cV6UiChcDol0XA32i1M5jmgmyN6tnaLzzzXqqvdl%2FICldSay33l3dNb89p0vCvZZYHIbQszbGRzMwAblW1M%2F%2B2%2B98oQAk%2Fu%2FNHtpqqjIFGshu6v4Y56eYSTW3CSrQ1ITCLNhLd0auJzf9GC9nwGIH0g7RRvd%2Fiie0pcYnjQDiZKoiP8D0I08YSFRyrn9STa7MMXa3b8GOqUByXY7bTXfnKMsxcqEq5UlN8gfyWrEGcQPOs9PE8rHx3QD5iDCJ%2BZtsokIGC9zuEUhmgHyQnMpid6VqfofIVMGGveQc3%2F0PGmelAAYwu7uj6tnI1MCJ2lWZ27eOqqwQwzqoZbM7uVU0FbGIuUfd8FYmzrqH5axuuU8CX4VKI2219w93vnU0Jkuij0Yan8XShe1PgciF1M%2BEMtuyN1Mz4faorXn%2Fbdy&X-Amz-Signature=1f24575a083476a668014c77f3848f5759bb058a2238984117746bfe7d8df0b8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBPWTXU3%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T070858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDU5UHDLR7W4RtrCR54UiAqSRBtuA0xIYiTOABXg0ojOwIgU%2FstolC96PzGtcaHGUhQXq6KHKsj8UXYYFDUtr%2BomzoqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHa%2Fw2bXNNSpIeWO1CrcAwVDqvqrxmBMR51WgpRCvTamj0x%2FRIrLy%2FV1yhYoEwy%2BsYdwDHBTIau%2BxSNJA5Q4H%2BgOu11sDo0zo2XxrtFgD5mxsxPGDzbXp3W3UbNXZpVTTJNyaEh8Ud5r%2FcckSM0jiJ6xUBsAKj%2FGyEV0FSIq7Eg%2FMnCvMM9KxmwRB9q0fU553zk2cbZ5uJs%2F4%2BAEBYT23W5JyN9teGtFXKCmpEddJ8nPTPOfL8vMNKCodeSy%2B%2F4paE5M%2FTVyhroaH2l1GBUTPhJNWTRLHrTpp57WXwqgfDkvQmYEOGNT1TLqTueFlfRfvCO8DdBwFRcE6y29lcT3KKZwRBPq8w9Hni3%2Bmia5nasOsrYcTgQ9k%2BwyblQudd40K1b1XFnD3sM4g3KwVDH%2FcuGdsX8It1bX0coND%2F8U1hHXxjq0RY6NklnQvjN4kONykKTqfJ6wVdFogGS6cV6UiChcDol0XA32i1M5jmgmyN6tnaLzzzXqqvdl%2FICldSay33l3dNb89p0vCvZZYHIbQszbGRzMwAblW1M%2F%2B2%2B98oQAk%2Fu%2FNHtpqqjIFGshu6v4Y56eYSTW3CSrQ1ITCLNhLd0auJzf9GC9nwGIH0g7RRvd%2Fiie0pcYnjQDiZKoiP8D0I08YSFRyrn9STa7MMXa3b8GOqUByXY7bTXfnKMsxcqEq5UlN8gfyWrEGcQPOs9PE8rHx3QD5iDCJ%2BZtsokIGC9zuEUhmgHyQnMpid6VqfofIVMGGveQc3%2F0PGmelAAYwu7uj6tnI1MCJ2lWZ27eOqqwQwzqoZbM7uVU0FbGIuUfd8FYmzrqH5axuuU8CX4VKI2219w93vnU0Jkuij0Yan8XShe1PgciF1M%2BEMtuyN1Mz4faorXn%2Fbdy&X-Amz-Signature=fc8ee89a1007a12644635a5a6c16f8614bd73f94a10d0c930f6e32ead0943069&X-Amz-SignedHeaders=host&x-id=GetObject)

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

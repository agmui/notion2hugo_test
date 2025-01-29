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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OKU2QM3%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T150746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDVPMS1qRof1MqZf%2Bh8agIzaNP0EbYc43rd4TDKfNsKAiEAsEpjkkC6nXAYhO6Jd4d0kzvDLjTw%2FdILRIIkPD9%2ByGEqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHA1nyyrAhJkMwB2SrcA3EfIo28L0cVu%2F%2B26Q2b5dEIKA%2BRB7LUhZhLv2fZaCxHFCipz2l15UAIqIibINJtrKIR0OHT2nf6NlteY9P5fUrxxWCAGWnkNjzmbuaRPN%2FqLtYxXNbZ7LIlSYhYMHi0BCgRde5VU7ak7cjTfGkxZOa53w4K%2B3uDMFrA8aoMNBaxn%2FMCLfZ0S3HXDHbbNSuEGt%2BVB9oiY6VCdSWAUdJs6Zi878tNVmncmr6HSF1q8JlUHcalyFWdxtHZcoabQtOFJbzemnnKnG2JFuSA5sMryG4LJhKUZOzSmkJzUk08OlyyMfbQfD8fb7tz2jfrBvWlyJTWHf1HRIgZSdnC0EjeAIbJL3mioo52A2ffFTrD6dmDybtqSL3kgR%2FAqjzjI44PZgFWPe0Y6pxabyoH6ljjwkx%2BpRIw8btUeEWSvnnIdvq%2F0%2FLToFWrCx4ZKtUiOiio0w3NL7uOGmoypUR4r4zeQ8EcG4Ip0yk8DL5wfHNdEWBmsbbjAX2GsiTTdB0bnnBsw8eRLba10GDmFcCfs82IMw83fG4eeHXLRR%2FeNHofOGuVfnMXppfhOiVY7Vi40l8x4yB2BmzlqAvy5eHDeLb1DBfK77S7PR%2FoUYJGomTfVLtMcu5SJNZMhPDeb6O%2BMJOF6bwGOqUBwZAPYWNhTofL31YdpNUSLAWPLZ5nrHiGvVLEWYiK%2BCU%2BAWaoOp93OAlnH8iSQhII5PJL2LkywlAKUIloypXFUF8V8%2F3bbYdfHHlVF7RnTw3%2BWuHQvhQcSK35WiObAQpbjExWV%2FcWsPtIhovf8HygUYui%2BsoQH925NV4QIrLDjnddqhtthKo7%2FL5Nj6Y7boMjmO49aRqHVFpATvFAn6pZJr%2FgTWNH&X-Amz-Signature=13aa705e51c37304bfc70776ff9234e3a0360646dbf9afa1238ff1ee346aa861&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OKU2QM3%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T150746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDVPMS1qRof1MqZf%2Bh8agIzaNP0EbYc43rd4TDKfNsKAiEAsEpjkkC6nXAYhO6Jd4d0kzvDLjTw%2FdILRIIkPD9%2ByGEqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHA1nyyrAhJkMwB2SrcA3EfIo28L0cVu%2F%2B26Q2b5dEIKA%2BRB7LUhZhLv2fZaCxHFCipz2l15UAIqIibINJtrKIR0OHT2nf6NlteY9P5fUrxxWCAGWnkNjzmbuaRPN%2FqLtYxXNbZ7LIlSYhYMHi0BCgRde5VU7ak7cjTfGkxZOa53w4K%2B3uDMFrA8aoMNBaxn%2FMCLfZ0S3HXDHbbNSuEGt%2BVB9oiY6VCdSWAUdJs6Zi878tNVmncmr6HSF1q8JlUHcalyFWdxtHZcoabQtOFJbzemnnKnG2JFuSA5sMryG4LJhKUZOzSmkJzUk08OlyyMfbQfD8fb7tz2jfrBvWlyJTWHf1HRIgZSdnC0EjeAIbJL3mioo52A2ffFTrD6dmDybtqSL3kgR%2FAqjzjI44PZgFWPe0Y6pxabyoH6ljjwkx%2BpRIw8btUeEWSvnnIdvq%2F0%2FLToFWrCx4ZKtUiOiio0w3NL7uOGmoypUR4r4zeQ8EcG4Ip0yk8DL5wfHNdEWBmsbbjAX2GsiTTdB0bnnBsw8eRLba10GDmFcCfs82IMw83fG4eeHXLRR%2FeNHofOGuVfnMXppfhOiVY7Vi40l8x4yB2BmzlqAvy5eHDeLb1DBfK77S7PR%2FoUYJGomTfVLtMcu5SJNZMhPDeb6O%2BMJOF6bwGOqUBwZAPYWNhTofL31YdpNUSLAWPLZ5nrHiGvVLEWYiK%2BCU%2BAWaoOp93OAlnH8iSQhII5PJL2LkywlAKUIloypXFUF8V8%2F3bbYdfHHlVF7RnTw3%2BWuHQvhQcSK35WiObAQpbjExWV%2FcWsPtIhovf8HygUYui%2BsoQH925NV4QIrLDjnddqhtthKo7%2FL5Nj6Y7boMjmO49aRqHVFpATvFAn6pZJr%2FgTWNH&X-Amz-Signature=15eeb1d6371ec911dbdf120ccad0d047a4ee385fbc2bbb56d714616eb59f44fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

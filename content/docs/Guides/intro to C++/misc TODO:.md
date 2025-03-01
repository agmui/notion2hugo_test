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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOOZXYZR%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T040924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDtzcLfwuW6A8osT7%2BbB7Oihi7zAf09U7fRs6yQbM7PewIgWZlDObggZDZQytQ2KiM%2FysYFpKuUJy%2BvhJ0GgIvYvU4qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLSXuE7pBTl25bniSrcA8D0nw4Bxk8j7n%2FKXNgkKjVwUHBg6qKKkktgFKEnIUpcinbESMlWuxdgxMv8PFZYxRyX2x8STK7xAjKiltnNeirpxaqufDIBlhw%2FJCuvb42fgHNMvZy3SHsS3Ov5zubF1zKCso33sudk%2BAMZuXAYYPLtfrSBQlWQlZJEdyiQA%2Fnh1lVJLv26u8EP18O4KVLfFnRFhcDFmCBQRKvwJQ2vZDBp5TiWMxsXzqft2GqNljp3HCnm6oJzS9DOE9eTAzxuKnlyV8JaUV6VHnBtYp1n1srhXxvOd9ZPkOHjhk%2F2l6IDRnbx%2FxOYgRpEUFVLuJiMJCxFvFdLdl8ITlHs4bXTXs9KWEIbaUcjCHz%2FE1IOVH4X7jLOv0ZKanX3iI%2FNESBCNcG%2BTX6823k1LkBMmm6UYdzz6BIDrkTpGchbi7%2Fkeqoj7G5I7ZMC%2BzWq5oM2AoCCc48L0PQS5Nvxlrr35EzBbOTItsHeJi1kr5zoGKU5OAZ4zD8gyxd5IZEg70OUs7ds1U%2FidFLfEJ9U5TYjNUqsYxOvqe%2FCDOYpm79CI2NZrjt616LIgcbkeLBehTrMXuUAg%2BhKVU9e6n%2FOtdAiMet1dNJkFNfVee6Z64zEHmGenTjBAOH5ixPJb712Nq61MKfyib4GOqUBVdvAM68h9S95Sm36Ds89hjgwEfNcDIEcUgrsQBoorIb4V4yNV%2FnwHWP%2FcwX%2FUNbyNO00cldMp9oZQtSbSOf%2BxtNACHVWkT6tAG6FLmydlSwSDOP7hXtmijQRtlhxoQApRmXcngJMj3WyGxbW%2Beh2rXg%2FNMlx4wcBID7jbawW7mQGhfH2RmDlmryrPn2qAYPktJzfsmA2w1dgY4YG5F8rld7HjUpw&X-Amz-Signature=c4cad840d1031a9420d148ed6d9bd1d42a117155a8ec4127b2a8e82146085a53&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOOZXYZR%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T040924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDtzcLfwuW6A8osT7%2BbB7Oihi7zAf09U7fRs6yQbM7PewIgWZlDObggZDZQytQ2KiM%2FysYFpKuUJy%2BvhJ0GgIvYvU4qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLSXuE7pBTl25bniSrcA8D0nw4Bxk8j7n%2FKXNgkKjVwUHBg6qKKkktgFKEnIUpcinbESMlWuxdgxMv8PFZYxRyX2x8STK7xAjKiltnNeirpxaqufDIBlhw%2FJCuvb42fgHNMvZy3SHsS3Ov5zubF1zKCso33sudk%2BAMZuXAYYPLtfrSBQlWQlZJEdyiQA%2Fnh1lVJLv26u8EP18O4KVLfFnRFhcDFmCBQRKvwJQ2vZDBp5TiWMxsXzqft2GqNljp3HCnm6oJzS9DOE9eTAzxuKnlyV8JaUV6VHnBtYp1n1srhXxvOd9ZPkOHjhk%2F2l6IDRnbx%2FxOYgRpEUFVLuJiMJCxFvFdLdl8ITlHs4bXTXs9KWEIbaUcjCHz%2FE1IOVH4X7jLOv0ZKanX3iI%2FNESBCNcG%2BTX6823k1LkBMmm6UYdzz6BIDrkTpGchbi7%2Fkeqoj7G5I7ZMC%2BzWq5oM2AoCCc48L0PQS5Nvxlrr35EzBbOTItsHeJi1kr5zoGKU5OAZ4zD8gyxd5IZEg70OUs7ds1U%2FidFLfEJ9U5TYjNUqsYxOvqe%2FCDOYpm79CI2NZrjt616LIgcbkeLBehTrMXuUAg%2BhKVU9e6n%2FOtdAiMet1dNJkFNfVee6Z64zEHmGenTjBAOH5ixPJb712Nq61MKfyib4GOqUBVdvAM68h9S95Sm36Ds89hjgwEfNcDIEcUgrsQBoorIb4V4yNV%2FnwHWP%2FcwX%2FUNbyNO00cldMp9oZQtSbSOf%2BxtNACHVWkT6tAG6FLmydlSwSDOP7hXtmijQRtlhxoQApRmXcngJMj3WyGxbW%2Beh2rXg%2FNMlx4wcBID7jbawW7mQGhfH2RmDlmryrPn2qAYPktJzfsmA2w1dgY4YG5F8rld7HjUpw&X-Amz-Signature=58611e48ef183dc44a07a2b8cdd3ca4e25f0d9c847e36339dbfe8a60db9c7acd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

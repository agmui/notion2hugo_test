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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JCCYAXT%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQCsWFyPxUscQUezV0w%2FNHN5fcpCPKzHcilPFmkxHSXqVgIga3wViT18%2FE8tBIzbogdSq6Tiaw2Tdvya%2FcwcwmdJRg8q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDMImhwYpCDKORXR6%2BSrcA1P7Y0LbsKL5uaHMI14Vo08%2BlOgiAejanhVMVjznh8EbnqVe9z3jYC7pKGtckMMk38270uaQyrnTxVtXy%2Bef7h6wd1alLVJ9YvYmJa0b0gUIUMPtFBwS%2FZ77D3kRcrmSSpgsHHgCZPqx2YrAh6wPwsvMbQvxsDAlkxeSaM0RMhv9EblIYIFvW87GvE3vWuQFaHkAHBa%2F0dw90l%2FmsKZNTiHI4rToovfnU9kFKnrLwzlDx9tRustVsHAkGkWfj9SRNlE6eG3ZuYuoBjboTJ%2BmJOiS5I3Nd1VyaVBu0O%2BGolaQ9iT2gkPVtnnAfbtvEaJfyJEKCslD7x7XtIxcFhr04IQpn2mnJ%2F4fqEndCqidQo7xaYu6U%2BQi6EZCr2a8I09e3S02btBU9LughQFJF8UU4t956VhUauCllsncv0So56DVrrSXvbqcS8xjDBFfk17ntt3kenHgJs%2BBo35tQGZbjlid9gLZ1y6kQ%2F3cFk44LwhYPFRqRR7UwlrzxAvffL8bGHUrxFNWDZc6jl0CEBUpCzrJ4FON4giVufR%2FQ83iXgszz4PwSQA5vxUeqkpFf3uHJt2qgPXb5HYwfkRPe3YOBKkTzUheGMxB3%2FksigHZeHtpyAIycLdl1Ib6hJQpMJat%2B8EGOqUBJLHcFjisJNd6cbwqOPKkaFwb4i3Gx%2F%2FUZHYt%2BhhOHX2WePKpUYwEDNvlmdOaACLHrMi7EiY3ssKvv6g9gr5lcwt9jyHAqs7m673J%2F1%2Be%2BUZ28ewGsn0Ovfz5WXRHvOkl%2B4U7deTt6C0TV1rMxCR5fmFBomi5D%2BlqSTKa5bzHddUMmWxg1WY9LnFuKL48kQJb3%2B1kmDre%2BUYCxbDGgnBpFUlz%2Fs8%2B&X-Amz-Signature=1b12001485f7d3863d55be59a111c05b8e32a78658147bb8fc8157b78727c3dc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JCCYAXT%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQCsWFyPxUscQUezV0w%2FNHN5fcpCPKzHcilPFmkxHSXqVgIga3wViT18%2FE8tBIzbogdSq6Tiaw2Tdvya%2FcwcwmdJRg8q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDMImhwYpCDKORXR6%2BSrcA1P7Y0LbsKL5uaHMI14Vo08%2BlOgiAejanhVMVjznh8EbnqVe9z3jYC7pKGtckMMk38270uaQyrnTxVtXy%2Bef7h6wd1alLVJ9YvYmJa0b0gUIUMPtFBwS%2FZ77D3kRcrmSSpgsHHgCZPqx2YrAh6wPwsvMbQvxsDAlkxeSaM0RMhv9EblIYIFvW87GvE3vWuQFaHkAHBa%2F0dw90l%2FmsKZNTiHI4rToovfnU9kFKnrLwzlDx9tRustVsHAkGkWfj9SRNlE6eG3ZuYuoBjboTJ%2BmJOiS5I3Nd1VyaVBu0O%2BGolaQ9iT2gkPVtnnAfbtvEaJfyJEKCslD7x7XtIxcFhr04IQpn2mnJ%2F4fqEndCqidQo7xaYu6U%2BQi6EZCr2a8I09e3S02btBU9LughQFJF8UU4t956VhUauCllsncv0So56DVrrSXvbqcS8xjDBFfk17ntt3kenHgJs%2BBo35tQGZbjlid9gLZ1y6kQ%2F3cFk44LwhYPFRqRR7UwlrzxAvffL8bGHUrxFNWDZc6jl0CEBUpCzrJ4FON4giVufR%2FQ83iXgszz4PwSQA5vxUeqkpFf3uHJt2qgPXb5HYwfkRPe3YOBKkTzUheGMxB3%2FksigHZeHtpyAIycLdl1Ib6hJQpMJat%2B8EGOqUBJLHcFjisJNd6cbwqOPKkaFwb4i3Gx%2F%2FUZHYt%2BhhOHX2WePKpUYwEDNvlmdOaACLHrMi7EiY3ssKvv6g9gr5lcwt9jyHAqs7m673J%2F1%2Be%2BUZ28ewGsn0Ovfz5WXRHvOkl%2B4U7deTt6C0TV1rMxCR5fmFBomi5D%2BlqSTKa5bzHddUMmWxg1WY9LnFuKL48kQJb3%2B1kmDre%2BUYCxbDGgnBpFUlz%2Fs8%2B&X-Amz-Signature=e69721f3f57bd3e2bfa84540e183210e697eb7f81593f5f78889f182c1c172a7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

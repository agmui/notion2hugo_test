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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YTK6HCZ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T090712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEdT5sewYZq2vGP60Msb9qEJ036U8QQ9SSaxRT4tIO2NAiEAtxzuxV%2FVG%2B0LLQvfTkXqR6GeNm6L2Wc06vgf%2FSmwNlQqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2mHWirCWgw%2BS9ezircA%2BnGKXYWrknTifw81MH2fmNU2MJ1z0EQbL1gajsSrCUGQAYCWXSshBTGz2DfIwSlfd5Xe2%2BEmWOfGbh1On9rsSvzwMg%2BxRCgcRigFRtol0zFh%2FApEnKCRmy0Jlq%2FNh1ol%2B4wlgFDJICJu7eDC9P%2B9AfIHlMjq5gHtU%2BZT7Jaw7gb2hELMbqYdrgeijGrk%2FWWjEPQXOre4h2%2F6wkqroF4nEr3LxiguFoSSNoOgt8NtVOumzNOzX0Ele%2F%2FaQLN7HhyLs3YrINXDLkk%2Bqb3R%2FhzhGu%2FRc7cpL9pzWcM2GDC4AL5JtNapEffKFUeB7q8iLJv8YMAXq%2B8c26QPb90q6x87FPrv%2FI3IHYGW6bQRcAAZOrvC5SUfLCO%2FSBIml4eP%2BKgTo9%2BMwK5ih%2F3ycYpixsSYA91yywPvhzVnCLuEre5sQhOvd9KNLDxvmqXlniaJKcSEbouhmkRsCeuB9Vq8olepv6tIn6k3rLA6hY6Wx5pbiIrjpsWq2jns071A8ahzQ%2Frof3gIyyKGn832%2FBP1fqy4arVFiI1h5SQOoHkatGMt%2BG7i6L11KNdZlABk7qbycnYJtnoOMKyKoww71QeQBHOGzTLK6Nnx4yVYuBIRET4xd9XCIIw%2BQWcDDLSJL%2F7MI7X6r0GOqUBQirMllRz7ekY9T%2ForNcy7XHl7VKDZcZ5gApRvvnZWyizBEUaSY9mWGfod5%2F9LsW6%2B8gai4JEuPeUCxkwQRsQIPjGrHQqGp0oxXB6QUSjkgiDUAk7EBGEcmXxUH4rUxWe5R2%2FRU6VgDr7D3Ry3OiQwaZPq6kjOxAE17b5%2B8jXJX3KVQ6ChXb0uF%2BqmYbBXHIuMimSvebUjXcLwlQ3Om1mDfvu%2BawT&X-Amz-Signature=bd5823663e42324121a5d2c0bf549a84fdd6275140c294c18588e2a57ba0b4ed&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YTK6HCZ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T090711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEdT5sewYZq2vGP60Msb9qEJ036U8QQ9SSaxRT4tIO2NAiEAtxzuxV%2FVG%2B0LLQvfTkXqR6GeNm6L2Wc06vgf%2FSmwNlQqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2mHWirCWgw%2BS9ezircA%2BnGKXYWrknTifw81MH2fmNU2MJ1z0EQbL1gajsSrCUGQAYCWXSshBTGz2DfIwSlfd5Xe2%2BEmWOfGbh1On9rsSvzwMg%2BxRCgcRigFRtol0zFh%2FApEnKCRmy0Jlq%2FNh1ol%2B4wlgFDJICJu7eDC9P%2B9AfIHlMjq5gHtU%2BZT7Jaw7gb2hELMbqYdrgeijGrk%2FWWjEPQXOre4h2%2F6wkqroF4nEr3LxiguFoSSNoOgt8NtVOumzNOzX0Ele%2F%2FaQLN7HhyLs3YrINXDLkk%2Bqb3R%2FhzhGu%2FRc7cpL9pzWcM2GDC4AL5JtNapEffKFUeB7q8iLJv8YMAXq%2B8c26QPb90q6x87FPrv%2FI3IHYGW6bQRcAAZOrvC5SUfLCO%2FSBIml4eP%2BKgTo9%2BMwK5ih%2F3ycYpixsSYA91yywPvhzVnCLuEre5sQhOvd9KNLDxvmqXlniaJKcSEbouhmkRsCeuB9Vq8olepv6tIn6k3rLA6hY6Wx5pbiIrjpsWq2jns071A8ahzQ%2Frof3gIyyKGn832%2FBP1fqy4arVFiI1h5SQOoHkatGMt%2BG7i6L11KNdZlABk7qbycnYJtnoOMKyKoww71QeQBHOGzTLK6Nnx4yVYuBIRET4xd9XCIIw%2BQWcDDLSJL%2F7MI7X6r0GOqUBQirMllRz7ekY9T%2ForNcy7XHl7VKDZcZ5gApRvvnZWyizBEUaSY9mWGfod5%2F9LsW6%2B8gai4JEuPeUCxkwQRsQIPjGrHQqGp0oxXB6QUSjkgiDUAk7EBGEcmXxUH4rUxWe5R2%2FRU6VgDr7D3Ry3OiQwaZPq6kjOxAE17b5%2B8jXJX3KVQ6ChXb0uF%2BqmYbBXHIuMimSvebUjXcLwlQ3Om1mDfvu%2BawT&X-Amz-Signature=e015907c660deb5da0d7075646eba2f963afb7949740887901b65751072c5016&X-Amz-SignedHeaders=host&x-id=GetObject)

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

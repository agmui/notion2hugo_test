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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK2WJNGS%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T160925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICg1fV0KAYsIWPQffoJAuOE1cEyC%2FcJWcidCPT0Xq4JIAiEAsHN5Em7jDPqaiMX5rhwMW7vuU%2BQ6C5np2kXKddIl7EMqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFcELY78GjZQOTH7%2FircAy%2BL0ATJAp8GxoxBoG0iMEJn25JFGDZcylQggpq%2F7Gk1zfCu0WQj%2FA58GA6XpXj6d2pvwTY0RcRbQxyGo5lLnuvG%2BeJHzQZJ4JroZ9%2BY9s4KR20aez1PDI7sZ6Pqkj39QD007%2FxqiEGCU0tYdnA1aFRLM0F%2F02vj1iNj6U42QiLVqnx%2FR%2FTbSHjsBFkojAacQ334U%2BviU34FAmTuIfsYHYN0BdBeb6WEzwCh6RUUcIko4fsjYXtDVv%2Buhs5TdegJDLSFMpVyNRa8X9foNnVCv12BxxPT%2Fmr2VF4YLbEdWwSk94Pa8Wyo66x%2BLpsxjuyejwytjH4AoyWDWB1cCuWpivSKJsrn3i97nddXtQWMxkedtINpz%2FDMUQi07ZY5GiXQ6Xg3zrHaejIkjsVDE6z15GS3EHJaiPnsmGM3o4C9uiMYqo9GEoiWFMJ%2FBSLm0%2Bn9fetrYP9%2BylW3WI3LxoKIAzfFF3wAw%2FYp92ZV0aoTrKly%2BI42mGmR1z5qmjD%2Bm4EexS0d%2BGn8ruBT9nXvgsj7eOLpTZpmNsohtE6PZ%2BXH8M87bg5UAJ72xwf8AdQ5BK7czjEw54Wy0Xcwzo3CDLpE2ftbn0KmEaTKprdqkH0x%2BYvooXlB9wer9XWZXjOYMJP71r0GOqUBwwIIYDMi7IFSSqB2palJrRPGyjGYMzQEov9MeNQBZF6Zf5mQTnIb7sC3RtHXhw5Gt6ii59HRHp7x0uCPcBEpMXuAcZBgIq%2BeRzT7zFTI9R3jquD%2FSDAnY1KDqE6zis%2BTB8vuvp1cpVzZ2Jz9CfbG8mh1wfAE15w4HbtQdXMocHHssJ27008cGN8v9MfisyOlrchzohR3lw8oP0%2BsDDiBaZics0hs&X-Amz-Signature=945988ca5441ba6ac7d1c332e7ba5f838a7d531ce4b3fc525eb8892815b15fbe&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK2WJNGS%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T160925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICg1fV0KAYsIWPQffoJAuOE1cEyC%2FcJWcidCPT0Xq4JIAiEAsHN5Em7jDPqaiMX5rhwMW7vuU%2BQ6C5np2kXKddIl7EMqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFcELY78GjZQOTH7%2FircAy%2BL0ATJAp8GxoxBoG0iMEJn25JFGDZcylQggpq%2F7Gk1zfCu0WQj%2FA58GA6XpXj6d2pvwTY0RcRbQxyGo5lLnuvG%2BeJHzQZJ4JroZ9%2BY9s4KR20aez1PDI7sZ6Pqkj39QD007%2FxqiEGCU0tYdnA1aFRLM0F%2F02vj1iNj6U42QiLVqnx%2FR%2FTbSHjsBFkojAacQ334U%2BviU34FAmTuIfsYHYN0BdBeb6WEzwCh6RUUcIko4fsjYXtDVv%2Buhs5TdegJDLSFMpVyNRa8X9foNnVCv12BxxPT%2Fmr2VF4YLbEdWwSk94Pa8Wyo66x%2BLpsxjuyejwytjH4AoyWDWB1cCuWpivSKJsrn3i97nddXtQWMxkedtINpz%2FDMUQi07ZY5GiXQ6Xg3zrHaejIkjsVDE6z15GS3EHJaiPnsmGM3o4C9uiMYqo9GEoiWFMJ%2FBSLm0%2Bn9fetrYP9%2BylW3WI3LxoKIAzfFF3wAw%2FYp92ZV0aoTrKly%2BI42mGmR1z5qmjD%2Bm4EexS0d%2BGn8ruBT9nXvgsj7eOLpTZpmNsohtE6PZ%2BXH8M87bg5UAJ72xwf8AdQ5BK7czjEw54Wy0Xcwzo3CDLpE2ftbn0KmEaTKprdqkH0x%2BYvooXlB9wer9XWZXjOYMJP71r0GOqUBwwIIYDMi7IFSSqB2palJrRPGyjGYMzQEov9MeNQBZF6Zf5mQTnIb7sC3RtHXhw5Gt6ii59HRHp7x0uCPcBEpMXuAcZBgIq%2BeRzT7zFTI9R3jquD%2FSDAnY1KDqE6zis%2BTB8vuvp1cpVzZ2Jz9CfbG8mh1wfAE15w4HbtQdXMocHHssJ27008cGN8v9MfisyOlrchzohR3lw8oP0%2BsDDiBaZics0hs&X-Amz-Signature=4ff4bca05df4e4a3276ccb64a82ffcd9feffd675b1c13ab8f73f7c48c61d9e7b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

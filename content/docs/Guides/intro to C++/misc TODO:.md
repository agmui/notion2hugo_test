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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QWYZEON%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCaxUObuQcMwUVdLA3zEc%2BGY6XD0gxaIcJ3BVU6wIUBsAIgH799H%2F4ZyHym22Qy6Hv5AtpUKhQbRwuLkdkj3TTEOOIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCe9XUADNVPkirYTHSrcAzEtdCvmmqGvYkOCYh9t8uhQxdIRIKsIVfxZY%2Fgs085d%2BDqefqZYaoeAkZnSXIy%2B4wFxGLc%2F8NK9XJOHIT6f6y5mpdzxkk8EzF00Oqyb5RVJPC1eU2cwGPPfR3GNHkza5BpMeXg5FsgL%2BcxPW75JuxU%2B6103CX0U8INVt0kr%2Fi5E3%2BxcSUIbO%2FsOjfaBkgtrRLQvFPkshiticmwly6o%2FrWe6Db%2FGWTVxGz%2BUz1TKpC9d2YXF3O3g9yEAHOhPHc2p44tvHf8RnmClG6%2BOufnJjpmQK9mq%2BRmG2si6ixZm8P%2Bon9RwKhUAEGATgzSLOEiyXCc9Q3CJsHSt%2BQNXB%2Boms%2FI0x%2B802yAVekuxktHyTpyEXlstEY0D76nTubhKgWYknmMad5vMpuChRTfyn2MpFqBNI1G3wZ7G0%2BMlCrpaLYwBwGqxx%2F%2BEr9YnmXcNflHTNJVHIelLvKWIVVBtZBUsrvFoDd9YF2caJGURp84BDIYg%2Bt1VNEqCvkO4khCsBXUSdSUUE4gCr5lFffCMGmUwIafHoO0DjgVXTx3VpJJlcEnt39e5uQZv6N72%2BX8NqOVAo7osZxHxW%2F1uCAQNJQhZ%2BI%2BASlqM%2BVa3ISC%2B%2F4VJDHgVWkc7OvwQ8PFMr%2FWdMI7J1c8GOqUBkhgg9IOHHa5GzaF3rnNen8jhDbhKXqHsyp4AYwl0tU5t6SjKgU05u%2FFBcz%2FXB%2B2GCaditA3G8eAj8Ty1h0STugTA9nejW6RWXH0mORVnxXGByFMsqjryBwotogKefUryWrHAYuJRyyrlDNehde0VQQumsmnUNk74Z2QP5IuAzBUgHg9IG1CLTKfTW04ufvp30vxk4kki%2FUVS5R%2FmbEWv7OZgPXV6&X-Amz-Signature=00298cf7ab388b9baa5f28836bd3b5f76887628ec4b60d6f234d72638a44f707&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QWYZEON%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCaxUObuQcMwUVdLA3zEc%2BGY6XD0gxaIcJ3BVU6wIUBsAIgH799H%2F4ZyHym22Qy6Hv5AtpUKhQbRwuLkdkj3TTEOOIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCe9XUADNVPkirYTHSrcAzEtdCvmmqGvYkOCYh9t8uhQxdIRIKsIVfxZY%2Fgs085d%2BDqefqZYaoeAkZnSXIy%2B4wFxGLc%2F8NK9XJOHIT6f6y5mpdzxkk8EzF00Oqyb5RVJPC1eU2cwGPPfR3GNHkza5BpMeXg5FsgL%2BcxPW75JuxU%2B6103CX0U8INVt0kr%2Fi5E3%2BxcSUIbO%2FsOjfaBkgtrRLQvFPkshiticmwly6o%2FrWe6Db%2FGWTVxGz%2BUz1TKpC9d2YXF3O3g9yEAHOhPHc2p44tvHf8RnmClG6%2BOufnJjpmQK9mq%2BRmG2si6ixZm8P%2Bon9RwKhUAEGATgzSLOEiyXCc9Q3CJsHSt%2BQNXB%2Boms%2FI0x%2B802yAVekuxktHyTpyEXlstEY0D76nTubhKgWYknmMad5vMpuChRTfyn2MpFqBNI1G3wZ7G0%2BMlCrpaLYwBwGqxx%2F%2BEr9YnmXcNflHTNJVHIelLvKWIVVBtZBUsrvFoDd9YF2caJGURp84BDIYg%2Bt1VNEqCvkO4khCsBXUSdSUUE4gCr5lFffCMGmUwIafHoO0DjgVXTx3VpJJlcEnt39e5uQZv6N72%2BX8NqOVAo7osZxHxW%2F1uCAQNJQhZ%2BI%2BASlqM%2BVa3ISC%2B%2F4VJDHgVWkc7OvwQ8PFMr%2FWdMI7J1c8GOqUBkhgg9IOHHa5GzaF3rnNen8jhDbhKXqHsyp4AYwl0tU5t6SjKgU05u%2FFBcz%2FXB%2B2GCaditA3G8eAj8Ty1h0STugTA9nejW6RWXH0mORVnxXGByFMsqjryBwotogKefUryWrHAYuJRyyrlDNehde0VQQumsmnUNk74Z2QP5IuAzBUgHg9IG1CLTKfTW04ufvp30vxk4kki%2FUVS5R%2FmbEWv7OZgPXV6&X-Amz-Signature=75bf74747b800e2fdd5ebd8e4a34638e8aded1c792b08d090e488333e04f6744&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

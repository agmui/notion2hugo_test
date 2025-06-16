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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGAPHCFD%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCSXirRRb97zbfsL9pmbUSD7bWvzVfOm%2FSjA8S57qNjQwIhANENKcHCdRv46G0pn5lvB0YEm3JIt3qoKaOlrROELo1mKv8DCFgQABoMNjM3NDIzMTgzODA1IgyNSerPDzu637E0zFcq3AMIRx4lWF163VRDWu1BfnmLkPAi8poGhM0fE%2FRgecIRiocq5d%2B35PxfJblyESr3lkW6e2dyI3jmMszE3dzu3O30qgJCNY3FJMCg%2Fk54yItc0UANGOru%2BD64pEqltyAWgCGihigJ%2FQb1PheSTZFeGLhdAXWgEp6pFNUnvu7Ha9SVWzFfyNs1q3rrJkuA9elUr9tkuMe0Adc%2B0%2Fd2LXZsiGRP0rz5jgtSirjf41wyo7wwsI7RRM5yVUgNleYNjTIvAF7vgGuqOQuKC7ybTudp4KwfZeSRHJItNkPnP0hwHaBZndBTDa7LIQo6QbUVcehqMNFFwIRSsziRzH%2F3s%2BkGCIpvWSgToiWLAjSF1tZTUVnBoUu%2Bk5Q2gkVbDx70Btcs0JGF6dpQJ%2FfnNOvxh1DDLByGVlzy9DSQd95REYqLKOasroc%2BK2OYfUPcy5YmKjSZnuAdLYmy735p4lyxJDshPZz%2FJcTdHB7AjkhYZ5W0hI0UIzZEYtNG8NPOQ4pZl%2B3Cd3F1KPoQgAocQidKJ8pZW%2FQV8Dj5YtQdeu63A8s0DMbcXtfjo%2BtBjv%2BgtJ%2FCw%2FXiAyPmqj9Rq0XmpMudpRXlkG8IWlWMH6co1FrCThC053cxojr8%2FsjBDYxTIU9J8jDIib%2FCBjqkAahCxCazuas%2B9t4l%2Bxyo08uKSOD06uqNxNeNhfl4X5IKN6x17lh7OpDLT4U3bB15JYbmQ0nObFTmIWaD2oFXExLrZslmofbHjmFLiPLB4M%2F7KHsXiE4S2W2rOlQmAY%2Fa4K4%2FqrV4JsJry8gB38qmDeYsY%2FH6F771Y7FxB2dd%2B09HlpZvUd0IXM9NnDRQrni%2FBSR01dtK8nI5w8qORCmbL6Zangxo&X-Amz-Signature=db1e33efd6bf18e9460be631529aecc8131bd83aa95cc4484936b09ccb3fcc2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGAPHCFD%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCSXirRRb97zbfsL9pmbUSD7bWvzVfOm%2FSjA8S57qNjQwIhANENKcHCdRv46G0pn5lvB0YEm3JIt3qoKaOlrROELo1mKv8DCFgQABoMNjM3NDIzMTgzODA1IgyNSerPDzu637E0zFcq3AMIRx4lWF163VRDWu1BfnmLkPAi8poGhM0fE%2FRgecIRiocq5d%2B35PxfJblyESr3lkW6e2dyI3jmMszE3dzu3O30qgJCNY3FJMCg%2Fk54yItc0UANGOru%2BD64pEqltyAWgCGihigJ%2FQb1PheSTZFeGLhdAXWgEp6pFNUnvu7Ha9SVWzFfyNs1q3rrJkuA9elUr9tkuMe0Adc%2B0%2Fd2LXZsiGRP0rz5jgtSirjf41wyo7wwsI7RRM5yVUgNleYNjTIvAF7vgGuqOQuKC7ybTudp4KwfZeSRHJItNkPnP0hwHaBZndBTDa7LIQo6QbUVcehqMNFFwIRSsziRzH%2F3s%2BkGCIpvWSgToiWLAjSF1tZTUVnBoUu%2Bk5Q2gkVbDx70Btcs0JGF6dpQJ%2FfnNOvxh1DDLByGVlzy9DSQd95REYqLKOasroc%2BK2OYfUPcy5YmKjSZnuAdLYmy735p4lyxJDshPZz%2FJcTdHB7AjkhYZ5W0hI0UIzZEYtNG8NPOQ4pZl%2B3Cd3F1KPoQgAocQidKJ8pZW%2FQV8Dj5YtQdeu63A8s0DMbcXtfjo%2BtBjv%2BgtJ%2FCw%2FXiAyPmqj9Rq0XmpMudpRXlkG8IWlWMH6co1FrCThC053cxojr8%2FsjBDYxTIU9J8jDIib%2FCBjqkAahCxCazuas%2B9t4l%2Bxyo08uKSOD06uqNxNeNhfl4X5IKN6x17lh7OpDLT4U3bB15JYbmQ0nObFTmIWaD2oFXExLrZslmofbHjmFLiPLB4M%2F7KHsXiE4S2W2rOlQmAY%2Fa4K4%2FqrV4JsJry8gB38qmDeYsY%2FH6F771Y7FxB2dd%2B09HlpZvUd0IXM9NnDRQrni%2FBSR01dtK8nI5w8qORCmbL6Zangxo&X-Amz-Signature=258f2b0d08afe45d754dc5044e98824a8d091ae6b26173dfe5c2987306884944&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

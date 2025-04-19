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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NDLLMUV%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T230729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCvNr794IeWYUzjyPP3kaxUHqp4tm8QH0cBEFbOGRCllAIhAIGSfDxO6ezs9xC7Qze8v1fNFSl6DmeET5ufUQ5As556KogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzP%2FbjquV4QQolKkP8q3AOcNrI7lDNsG4r1H2zOQnY86rHsSa02hRECNn6rISxj770PuxJpWY%2BWXawoZM15O%2F8QrxfnuTUOTH%2FuJBAB3MPsxdlKgCbt5IAkH%2FPK%2FM3NF3ei40tMVP04OWG0Ny9mlMVJLeoSGFfE8z6fxUEy8oWUD%2BbfAZd98fKfBjBeobaJSKfTk%2Bzw6uYgsshsLmfR%2B8gUyRcwz3qCXHDjsvKP6SKEqYQvoJI28%2BRp7M%2FhYVa8wIagYl1ZFCjYijM85zP22KjijFyYysObDCjuQ3aaRAtWVnIkdEmgYw56jJpUj5jaGFglLf0V00cAFpKIWfCq8vRZDnxUDGtmHGBYc8OdAF4V3KSbEd%2BzmMnPU5dlMXGQBVClhqVmULEamc2XF3%2Bg7FLH7Nvdc22f6uOKTlOkPu%2Bu%2BlpAg62AjbcRp0aCjlK%2F4j%2F93L3yHF8c63kGEDT74bTYLNc5q9acG41CIY09zMV1tlFLTwq1ifSgCFBe4iAhouDJKy86zzR3sDE%2BvdB%2B7YDV4MPnFYUu3bxrb5yR605ivc48HpPnxVrR6%2BeA5ahcABF1lSpABhK2LjxKdrzNW9i5X9GErg%2Bh7239IH7a%2FrivTQ%2F7nwuznm97SlyYj5V1TSzf0BTCo%2F%2Bmb2ZBfzDyzJDABjqkAb73FHpOg%2B7QiV1c5BwUMqTlvjiTPZSGTg%2FEMLbT8tiG1NXltU5ZHnPxJEt8pXSZVFjp95j8iVAs5EnBprDzScjjCC6SJH%2BBDjXAUIKx25zsxNg7W%2FejnOEXCfcfwtZQ%2BZgQzQUZxnu5jF2%2B5n1NnH1YXKWYShWy2NEc%2BYZyRXVMpjSGHQ2b0n8g7nPzgDzFzMiXHYnhBqd180cFUK%2F3Q2xAiFZW&X-Amz-Signature=61f6b49acb348c8c3fb0a47e9cd5aa3a05419151f2b3bbb91aac7c47da648f78&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NDLLMUV%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T230729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCvNr794IeWYUzjyPP3kaxUHqp4tm8QH0cBEFbOGRCllAIhAIGSfDxO6ezs9xC7Qze8v1fNFSl6DmeET5ufUQ5As556KogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzP%2FbjquV4QQolKkP8q3AOcNrI7lDNsG4r1H2zOQnY86rHsSa02hRECNn6rISxj770PuxJpWY%2BWXawoZM15O%2F8QrxfnuTUOTH%2FuJBAB3MPsxdlKgCbt5IAkH%2FPK%2FM3NF3ei40tMVP04OWG0Ny9mlMVJLeoSGFfE8z6fxUEy8oWUD%2BbfAZd98fKfBjBeobaJSKfTk%2Bzw6uYgsshsLmfR%2B8gUyRcwz3qCXHDjsvKP6SKEqYQvoJI28%2BRp7M%2FhYVa8wIagYl1ZFCjYijM85zP22KjijFyYysObDCjuQ3aaRAtWVnIkdEmgYw56jJpUj5jaGFglLf0V00cAFpKIWfCq8vRZDnxUDGtmHGBYc8OdAF4V3KSbEd%2BzmMnPU5dlMXGQBVClhqVmULEamc2XF3%2Bg7FLH7Nvdc22f6uOKTlOkPu%2Bu%2BlpAg62AjbcRp0aCjlK%2F4j%2F93L3yHF8c63kGEDT74bTYLNc5q9acG41CIY09zMV1tlFLTwq1ifSgCFBe4iAhouDJKy86zzR3sDE%2BvdB%2B7YDV4MPnFYUu3bxrb5yR605ivc48HpPnxVrR6%2BeA5ahcABF1lSpABhK2LjxKdrzNW9i5X9GErg%2Bh7239IH7a%2FrivTQ%2F7nwuznm97SlyYj5V1TSzf0BTCo%2F%2Bmb2ZBfzDyzJDABjqkAb73FHpOg%2B7QiV1c5BwUMqTlvjiTPZSGTg%2FEMLbT8tiG1NXltU5ZHnPxJEt8pXSZVFjp95j8iVAs5EnBprDzScjjCC6SJH%2BBDjXAUIKx25zsxNg7W%2FejnOEXCfcfwtZQ%2BZgQzQUZxnu5jF2%2B5n1NnH1YXKWYShWy2NEc%2BYZyRXVMpjSGHQ2b0n8g7nPzgDzFzMiXHYnhBqd180cFUK%2F3Q2xAiFZW&X-Amz-Signature=d849043f31b27769d1220ca6006d666ff357bc30d0a12b0ff9972a2af5e20e60&X-Amz-SignedHeaders=host&x-id=GetObject)

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

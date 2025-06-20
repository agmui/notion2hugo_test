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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOOGPJO6%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBo6FmIRyP%2FOHk5i5LXUdM%2Bx64clhwiHmF8otFbzCEn0AiAxx88hRvpIFifwAr9gYKmVb6r46L9Jpjz%2BtvKAY5iNmCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrz3LCo%2Fs6LU8jR19KtwDSzyS3B3HDqXARn4KuJMLa5PUI5any0rWkPPfMr89FdQtcEUNREratMvUfOxDpcYdLbq3pKoxux%2FRpX4x1axTKvFQuXsJEHHdUc6mVyi3%2BBiKgK419mpWmVerr5oc8omPEFhGUKK3JOQ03X5N5ChbGHud3DOUmQ9TX1oVu2QJCbzf5n6xU%2BssfqlgwxPgHZXkkuyxf5NEWdaQhRdF5xML273fP%2FzaiYNuGA0N9qu%2Fdh0aNLCLCD0Pl8QPWdC8wQpf6a2HRqUwUjjq5CHWoGc1oQelBkfJPOCiwcR%2BA40s%2BWGWEvJwGBRrTYRoDZH8pdCylkuRHZBXmNyed1EGPAF6AQ3o2oxuEh8x9NGZzANz6rGsJzZA9SDwx8mcJqJsahQFmAiJ4eOvXPaBnQcCAAoET%2Fzaeade9FzZo01OZoTGS4nuOfpqnIUKhTKNz9VD7poz3VjP7PNB83U2iOZYwG9B8DYA5r1xsin%2FWIS0n2G5XXguthKYTvBBk4raXTcMpgCIgfo44y6Yg8RK2jUFprARSVdbSA7fYPqsPphdupiUmNsTv1F1%2BbjZ6qW6TqybMZkLKYx6MjqfbJSxfI60AIFVKb8GFMOGawuv0xTjnU9N65DTE6Y8PE9NPyLV0QMw0qTVwgY6pgHtSJ%2BDH6IM9XHKK2LSGDnzpswSMoiaBBOsutjfoZl3e%2FKdtbMzNDl%2FKom5fnPXtSO5UOn1rdtFEnAlQeTUVqlimizkQDGj7kM2T460CSOvNYhNdF5ZIiDudcLztqCzfHg%2BcmrRFOlwa2VqAvQMgsYZ1a56CqsGgTXZeQwQ%2Fia49vvHqVBg%2FSmURg6aj8SKsx75Eq2OjesNsHx07hQB26J227PBGJIb&X-Amz-Signature=e1a5143456d9ebf3e03ce348e4a4d56e54b79ca9e4882f3b9dbe26305a022401&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOOGPJO6%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBo6FmIRyP%2FOHk5i5LXUdM%2Bx64clhwiHmF8otFbzCEn0AiAxx88hRvpIFifwAr9gYKmVb6r46L9Jpjz%2BtvKAY5iNmCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrz3LCo%2Fs6LU8jR19KtwDSzyS3B3HDqXARn4KuJMLa5PUI5any0rWkPPfMr89FdQtcEUNREratMvUfOxDpcYdLbq3pKoxux%2FRpX4x1axTKvFQuXsJEHHdUc6mVyi3%2BBiKgK419mpWmVerr5oc8omPEFhGUKK3JOQ03X5N5ChbGHud3DOUmQ9TX1oVu2QJCbzf5n6xU%2BssfqlgwxPgHZXkkuyxf5NEWdaQhRdF5xML273fP%2FzaiYNuGA0N9qu%2Fdh0aNLCLCD0Pl8QPWdC8wQpf6a2HRqUwUjjq5CHWoGc1oQelBkfJPOCiwcR%2BA40s%2BWGWEvJwGBRrTYRoDZH8pdCylkuRHZBXmNyed1EGPAF6AQ3o2oxuEh8x9NGZzANz6rGsJzZA9SDwx8mcJqJsahQFmAiJ4eOvXPaBnQcCAAoET%2Fzaeade9FzZo01OZoTGS4nuOfpqnIUKhTKNz9VD7poz3VjP7PNB83U2iOZYwG9B8DYA5r1xsin%2FWIS0n2G5XXguthKYTvBBk4raXTcMpgCIgfo44y6Yg8RK2jUFprARSVdbSA7fYPqsPphdupiUmNsTv1F1%2BbjZ6qW6TqybMZkLKYx6MjqfbJSxfI60AIFVKb8GFMOGawuv0xTjnU9N65DTE6Y8PE9NPyLV0QMw0qTVwgY6pgHtSJ%2BDH6IM9XHKK2LSGDnzpswSMoiaBBOsutjfoZl3e%2FKdtbMzNDl%2FKom5fnPXtSO5UOn1rdtFEnAlQeTUVqlimizkQDGj7kM2T460CSOvNYhNdF5ZIiDudcLztqCzfHg%2BcmrRFOlwa2VqAvQMgsYZ1a56CqsGgTXZeQwQ%2Fia49vvHqVBg%2FSmURg6aj8SKsx75Eq2OjesNsHx07hQB26J227PBGJIb&X-Amz-Signature=bc2ea7c99a54beaf3c21f9ee1ff22491d5c5b9e4a5ef1dafa84855c6887b6c7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

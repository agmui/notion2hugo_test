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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JYU36ES%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T090826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICl25dvvmDDRDMe3o4opySFpDzMuUfNi5QRqSoRumP5jAiEA6slORWks2qE7Deio8%2FtU7Ksm8eOjB6j3sRzyes7KxUsqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDFoDQehmISidHXnKircA%2F%2FNY1esxEYHtPp%2BHd2QIRIG2exTe%2FPeSD2RHmqWM6jLea2BXtI10jjJXJjFVA4g1YZoZHxKD%2BlDw75fu1X4btOzVUH4Vh9LJyf7CdhqfAelr9RUmPSzcEyblUSjt3O%2F9lFJVVcgEhCsWQDEFBTVhofaCnjNZYpG9jsK99DFTFlTQAvbxca5508m%2B6pgJfHAxgeQ3t%2BhQbxTl%2B7lUxqhMrcWgazRL9H0yrOzz%2BOevENunBtNAzIDA8t95ZiOg16mUMtozXkX7W%2FOIzozoKDwnDkRqAhAWmZb4kSj%2BSI7IvVEenRMV6kDpB791ptNWvpv4moHIb7GgQYiflzcDJcG7vY0wDWiza9Uh5oD1AHjRxemc%2FaGk8DLgIPGLLEhV5ZsSIjU3bR4vbqU2viWCbeocPErGByt6VrIINweG5vW0XTAYqj6I7vDuVpCwDAI5zIKAmbedUkum0OuUnX9E%2FH42al1xnclpN5ElmBHeI4CM%2FrlWrnHPIuqjztXo6W9bmO9nI8c3Q7M03JvJ5%2BBwbOLrAkJbgYFbqrxoa6059BbVGcZ%2BNIYOXsTXmZ0RFCC4PORxcCPd8KepErqOLv0KHHeu4QunPUGOqT3IJ8GeEGYubMkl0FyzkZMMH0SwCUWMNe83sIGOqUBL0qlQIyInOi22zMiTIPRJnqIJdSPRZR6RlInp1wtyIOlZn1RkcP7sN9UKx0mb9O2lw2RpnHv%2BB%2B4ymauXzxIdIfVjLoKukDO5ERaoCdJL8lB9cqlN%2FytMMFTWdgTM5h1Iq041e9RlPNJf8op08cgQNjIYgf%2FWjoh4bNhVqPAunwq5hyIwcuFjgHt2E7KbJD9ZmEWEpxyHjHGw7ixfBlBBoARPVj7&X-Amz-Signature=d61e12ff6e9720008b3510c602088b7465af3a40aebbbb78e2dbb2de72fbac8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JYU36ES%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T090826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICl25dvvmDDRDMe3o4opySFpDzMuUfNi5QRqSoRumP5jAiEA6slORWks2qE7Deio8%2FtU7Ksm8eOjB6j3sRzyes7KxUsqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDFoDQehmISidHXnKircA%2F%2FNY1esxEYHtPp%2BHd2QIRIG2exTe%2FPeSD2RHmqWM6jLea2BXtI10jjJXJjFVA4g1YZoZHxKD%2BlDw75fu1X4btOzVUH4Vh9LJyf7CdhqfAelr9RUmPSzcEyblUSjt3O%2F9lFJVVcgEhCsWQDEFBTVhofaCnjNZYpG9jsK99DFTFlTQAvbxca5508m%2B6pgJfHAxgeQ3t%2BhQbxTl%2B7lUxqhMrcWgazRL9H0yrOzz%2BOevENunBtNAzIDA8t95ZiOg16mUMtozXkX7W%2FOIzozoKDwnDkRqAhAWmZb4kSj%2BSI7IvVEenRMV6kDpB791ptNWvpv4moHIb7GgQYiflzcDJcG7vY0wDWiza9Uh5oD1AHjRxemc%2FaGk8DLgIPGLLEhV5ZsSIjU3bR4vbqU2viWCbeocPErGByt6VrIINweG5vW0XTAYqj6I7vDuVpCwDAI5zIKAmbedUkum0OuUnX9E%2FH42al1xnclpN5ElmBHeI4CM%2FrlWrnHPIuqjztXo6W9bmO9nI8c3Q7M03JvJ5%2BBwbOLrAkJbgYFbqrxoa6059BbVGcZ%2BNIYOXsTXmZ0RFCC4PORxcCPd8KepErqOLv0KHHeu4QunPUGOqT3IJ8GeEGYubMkl0FyzkZMMH0SwCUWMNe83sIGOqUBL0qlQIyInOi22zMiTIPRJnqIJdSPRZR6RlInp1wtyIOlZn1RkcP7sN9UKx0mb9O2lw2RpnHv%2BB%2B4ymauXzxIdIfVjLoKukDO5ERaoCdJL8lB9cqlN%2FytMMFTWdgTM5h1Iq041e9RlPNJf8op08cgQNjIYgf%2FWjoh4bNhVqPAunwq5hyIwcuFjgHt2E7KbJD9ZmEWEpxyHjHGw7ixfBlBBoARPVj7&X-Amz-Signature=dec1ade4902bc40601efe7a7c92d6c252cc514319f8726864e07d16bd30839e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

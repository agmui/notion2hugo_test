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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNEDMYBE%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T100943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqg6ShmhrhWsmn3ZJBsa9uuiuinntsLovbxbfrvDKJlAIgcfstA288YGEllMp8DU4U6egESQ5NshhRv8AWd2JrSZ0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCJYWBWHWvCfUySTyrcA0vHZm0LyBkE4QB1r0CWxSD8ZN4uwLZVYwpC6mkVygISuWYpONFBEUuJvhAWyEiPXXLH3CEoPzWFI8MKNBH0kwVSubIBGB%2FdFU1Dc15tsHNv6qJQwnkDeJPbpzQgfKNZtui%2BzHVbZc%2Fi6kaBhZqEtx0Rbw8vqq7sUuNrmi%2FQkzmRvM6ZTOO5NO%2B3HxjCdP5a%2FMRVw469t8pPGuXoyTCYIxgHyHVXpgvv3lOnuFUlSOLTD9k3hR2DcLSYyuaD64z4QJ%2FSCi1ZzAhaQ4KWd%2Bewx341eJsgY%2FzhPyNKGOTl1Ct6i2YAVyx%2BBv8bhJoiyIjDxi4vNiM79s4V43XtTgjufmjSma0GA33FaxZxhLRVUiAsoHKhXSUncOxuv720L5cd6Fe1wNSwoh9XjUJfkbzsxr8tqS2Hy%2BfagRI3gSlfhok7GyLxnWpd8UwnzTWVZWkhsYCNq7Oa%2BeHOdrJkYHOVftw%2BAx3lWOyTjFTZcLoXNoDz1Ezv%2BqRWgN5%2FEClKl7rW3ytnGnMXr%2Fyua1l2TDY15HRUU%2F%2BPVbKdV3pb0Wyz7vH%2Fa%2FBD1VycOV7eFw92hM1x0sqs%2BRdU4jBbFtv44TKSc59%2F6M%2BhIuyv9YPu%2B4FRGbEaCLl5Fi%2FFKXrKkwMgMNLDwsAGOqUBQuPGvrkbgGhgtUqyz8mjQC46%2B218Fk%2B6e6GXHc7gFLomcN%2FUc8mAoEnbW35jRUXzMMiL2d0IMI0GtDjd%2FsYEB4CM12eJ8gCJYTrVbJT7R%2F1dFYqdw9q0AKXrMlTBrs%2B7oEE1g3JpMFkMtcbICxlD%2FeAXcgEuXBOkdaKrucYMZyKi%2FB7V6SINKDRZm589C1Xx2rGjuUBIJN6lL6HYRfwgyUw4gzUI&X-Amz-Signature=cbafa20e92d1cb1392a52eba3c4996ee06c4b13ebd0e81f2d07a72aed49f2bbb&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNEDMYBE%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T100943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqg6ShmhrhWsmn3ZJBsa9uuiuinntsLovbxbfrvDKJlAIgcfstA288YGEllMp8DU4U6egESQ5NshhRv8AWd2JrSZ0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCJYWBWHWvCfUySTyrcA0vHZm0LyBkE4QB1r0CWxSD8ZN4uwLZVYwpC6mkVygISuWYpONFBEUuJvhAWyEiPXXLH3CEoPzWFI8MKNBH0kwVSubIBGB%2FdFU1Dc15tsHNv6qJQwnkDeJPbpzQgfKNZtui%2BzHVbZc%2Fi6kaBhZqEtx0Rbw8vqq7sUuNrmi%2FQkzmRvM6ZTOO5NO%2B3HxjCdP5a%2FMRVw469t8pPGuXoyTCYIxgHyHVXpgvv3lOnuFUlSOLTD9k3hR2DcLSYyuaD64z4QJ%2FSCi1ZzAhaQ4KWd%2Bewx341eJsgY%2FzhPyNKGOTl1Ct6i2YAVyx%2BBv8bhJoiyIjDxi4vNiM79s4V43XtTgjufmjSma0GA33FaxZxhLRVUiAsoHKhXSUncOxuv720L5cd6Fe1wNSwoh9XjUJfkbzsxr8tqS2Hy%2BfagRI3gSlfhok7GyLxnWpd8UwnzTWVZWkhsYCNq7Oa%2BeHOdrJkYHOVftw%2BAx3lWOyTjFTZcLoXNoDz1Ezv%2BqRWgN5%2FEClKl7rW3ytnGnMXr%2Fyua1l2TDY15HRUU%2F%2BPVbKdV3pb0Wyz7vH%2Fa%2FBD1VycOV7eFw92hM1x0sqs%2BRdU4jBbFtv44TKSc59%2F6M%2BhIuyv9YPu%2B4FRGbEaCLl5Fi%2FFKXrKkwMgMNLDwsAGOqUBQuPGvrkbgGhgtUqyz8mjQC46%2B218Fk%2B6e6GXHc7gFLomcN%2FUc8mAoEnbW35jRUXzMMiL2d0IMI0GtDjd%2FsYEB4CM12eJ8gCJYTrVbJT7R%2F1dFYqdw9q0AKXrMlTBrs%2B7oEE1g3JpMFkMtcbICxlD%2FeAXcgEuXBOkdaKrucYMZyKi%2FB7V6SINKDRZm589C1Xx2rGjuUBIJN6lL6HYRfwgyUw4gzUI&X-Amz-Signature=7a71e2cbd2850dac5a8ba31d55d0e9eeae3947149ec601521d2421472c303246&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EMHKYZR%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzyqoVduAGShItKC3lT6kwKew1uFYTUx%2F5Gn4ZEysDLQIhAMKISmVM8aqg9WtBb26eNzOukUT5GMG6GvDuaB4qyE2iKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYDkePNLq471GtZV8q3APAthtRw8ZLzM5SZ5hadgF%2BVcKBQMovbYvhJmPHcm6jF4OgCusOvDXLrgqbvMzRzKQk3RnGEUOHZaA2LqDJd4d81iRS2GpCamPQX1%2FSHSnW2BABwFBKaq5VKq3Z7ytI7m9T9WdotiVTKonvk39Mahp8bXDyTIoTh%2FrqjGfAdMGGU1b0dINP7yha1jNDjG0ccXuDP9%2FMw4clCMBoJirymeN5kVhAenTyAydbkANOMBD1T%2BQ30W4FGik8n7D6wwOOPD6QYuO7Yr%2B2IkuCzW5YsJNs2eX2hTMKNmEvgGqp7yVcmtv8fxK%2F04El179uuvCwEnExUr5rjIy9ui7rroBdLW%2BWLTfYG1l70%2ByDmgLW6EwTdFQy1TdftaGDM%2BQrIa1rJTSJGVjkxdU58Y7RjZjUVvCVorckkKtZCfL4LzmlgcFvlGvePhCg9qF7U8BzKwHAjm323bX5mEJujUdkKxq1akpC%2ByWlQArmkFd9qwMGfPy12Kav7K2q%2FIMl1IsV7yLFJL6sltQ64wwXoN%2F27zG8mD34WAp15QCL1vqar%2BhmO%2Ff1ou1Dw6qBLW5UpVRwoAAaw9kYCiRP9xZO%2B2usWMF7pJ2kJ1iWUdJFfR%2BMcwoF9rRJ5uJNLjValgQh7IgfZDCn7LHEBjqkAW2DuX1as%2BhCgSv7z4DqcrQy1a5hFqhE0kCHsZJrH4XuvaEKe3C4N2jvYYrIMEKj3fY32O6GaDtOTCgyC0j%2FUfKJbOW4EqeY6uJzFmIL5M8ebKMDT1dHtvOIZ474XTZWh%2BUbidc9M79xVIGgmQxzAe0Ut1YkuHvyLdp9gvThla3hR5SozT9vaqaZAPXwA6bODIfbL%2BF6eYa0dtGzH7Aeiu%2FY5ESK&X-Amz-Signature=e9dd38883ca837e53bd47e4acf9820d3715a5275b6b321c83b6119cc2aba053c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EMHKYZR%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzyqoVduAGShItKC3lT6kwKew1uFYTUx%2F5Gn4ZEysDLQIhAMKISmVM8aqg9WtBb26eNzOukUT5GMG6GvDuaB4qyE2iKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYDkePNLq471GtZV8q3APAthtRw8ZLzM5SZ5hadgF%2BVcKBQMovbYvhJmPHcm6jF4OgCusOvDXLrgqbvMzRzKQk3RnGEUOHZaA2LqDJd4d81iRS2GpCamPQX1%2FSHSnW2BABwFBKaq5VKq3Z7ytI7m9T9WdotiVTKonvk39Mahp8bXDyTIoTh%2FrqjGfAdMGGU1b0dINP7yha1jNDjG0ccXuDP9%2FMw4clCMBoJirymeN5kVhAenTyAydbkANOMBD1T%2BQ30W4FGik8n7D6wwOOPD6QYuO7Yr%2B2IkuCzW5YsJNs2eX2hTMKNmEvgGqp7yVcmtv8fxK%2F04El179uuvCwEnExUr5rjIy9ui7rroBdLW%2BWLTfYG1l70%2ByDmgLW6EwTdFQy1TdftaGDM%2BQrIa1rJTSJGVjkxdU58Y7RjZjUVvCVorckkKtZCfL4LzmlgcFvlGvePhCg9qF7U8BzKwHAjm323bX5mEJujUdkKxq1akpC%2ByWlQArmkFd9qwMGfPy12Kav7K2q%2FIMl1IsV7yLFJL6sltQ64wwXoN%2F27zG8mD34WAp15QCL1vqar%2BhmO%2Ff1ou1Dw6qBLW5UpVRwoAAaw9kYCiRP9xZO%2B2usWMF7pJ2kJ1iWUdJFfR%2BMcwoF9rRJ5uJNLjValgQh7IgfZDCn7LHEBjqkAW2DuX1as%2BhCgSv7z4DqcrQy1a5hFqhE0kCHsZJrH4XuvaEKe3C4N2jvYYrIMEKj3fY32O6GaDtOTCgyC0j%2FUfKJbOW4EqeY6uJzFmIL5M8ebKMDT1dHtvOIZ474XTZWh%2BUbidc9M79xVIGgmQxzAe0Ut1YkuHvyLdp9gvThla3hR5SozT9vaqaZAPXwA6bODIfbL%2BF6eYa0dtGzH7Aeiu%2FY5ESK&X-Amz-Signature=2c6636c9d38a438a70c149f1963d917541bcb2f933acc7417bae62e6e9e0752c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

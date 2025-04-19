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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYYLLRBN%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T200823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDg8IubHgTixZa49xE26amTqdhWGP27Ui6pn8AHR7exwAIgGmms2qGilpbgJMR6AH1KIwky4xzwWxjbmLaDD7yFYXoqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1avWTF8v51kL8a%2FyrcA%2FZuoTVKI91pSbcO%2FgAYgho%2FwpzIIJUm07P%2F3h5C%2BHDqh%2B1lrPoBusfMfKBPvnhCHmHhH8RzOhWxAT0XjBz1ARyWr3dkfBS7bv3onhwxTQs5ZXFJq1oEfHwefCMcE16rRgj0%2BQAxpwXe92eYlf19i0c1HmbPiPTsNZFoJfEkwgGqNLu1%2FLJ6CFHHP4RwT6lXaFwuG8lubo8N2n4mA1GZW2sze%2BdPBWS8nWTKx0NbGurFYJvX6HQOe1GZWesgKPaVPU7590kJUmhP0UAsz9X9LlqG4Lew9BeFaR9hjCu0MsRuO6gAHdRW%2F2VtO%2BIbbgEj6LDeWXrFYipZUc1nAeBv07QpSvpu0rvC8cyTOsscFotvM6WoOMhwqQi7n9Fs6AIZ2b7Q9E%2FhDy2Oi7zhj3%2BAF82LsDug4wYq7vtB3odPBBUhQaBphByLalOCIDd9OIJHJhEL5QeGrAOZDMdKTj8l8KRLVH%2F9WMtHaEmPBdbYf%2BGMk0OY%2FqqIOWS%2BhfKy%2BljTQylbGWt1qE9l0Ik4PLcRGaa%2BZhbjpxiiRcu4l6jmraJ%2Fc6kJ7t9djiXNOTQ7oQt%2FGvkJI5Qu4p5cQxEVyqhDB0uQ6bK5d6lIGHYx6dQK%2F7C948dDhdRFnU%2BAgxL5MLegj8AGOqUBXQQkVZaod8Ma%2FzdsgGrg0PxKxJ6FoCpn0A6SPmzRWJScPWLoVfP9Fwf0d40KWXJvW4EkxBfaVlhgPAoQkmPjAkZvZYqmzakVrShpBEoUArAX1zdt6gWWqyNx%2FGQnpBZ6sUVXojuS3KA3M3%2FWMZDWySIskVoUxBItmrcIO3GrZs42dBkXu7ppM7YAasQTS%2FLr0PLwfY9qgZmI9IjeSvmGjse8YmK2&X-Amz-Signature=cc45fbfcfade5129ffce0559a69c924213434f9b20077993fb41ae760b19ef26&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYYLLRBN%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T200823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDg8IubHgTixZa49xE26amTqdhWGP27Ui6pn8AHR7exwAIgGmms2qGilpbgJMR6AH1KIwky4xzwWxjbmLaDD7yFYXoqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1avWTF8v51kL8a%2FyrcA%2FZuoTVKI91pSbcO%2FgAYgho%2FwpzIIJUm07P%2F3h5C%2BHDqh%2B1lrPoBusfMfKBPvnhCHmHhH8RzOhWxAT0XjBz1ARyWr3dkfBS7bv3onhwxTQs5ZXFJq1oEfHwefCMcE16rRgj0%2BQAxpwXe92eYlf19i0c1HmbPiPTsNZFoJfEkwgGqNLu1%2FLJ6CFHHP4RwT6lXaFwuG8lubo8N2n4mA1GZW2sze%2BdPBWS8nWTKx0NbGurFYJvX6HQOe1GZWesgKPaVPU7590kJUmhP0UAsz9X9LlqG4Lew9BeFaR9hjCu0MsRuO6gAHdRW%2F2VtO%2BIbbgEj6LDeWXrFYipZUc1nAeBv07QpSvpu0rvC8cyTOsscFotvM6WoOMhwqQi7n9Fs6AIZ2b7Q9E%2FhDy2Oi7zhj3%2BAF82LsDug4wYq7vtB3odPBBUhQaBphByLalOCIDd9OIJHJhEL5QeGrAOZDMdKTj8l8KRLVH%2F9WMtHaEmPBdbYf%2BGMk0OY%2FqqIOWS%2BhfKy%2BljTQylbGWt1qE9l0Ik4PLcRGaa%2BZhbjpxiiRcu4l6jmraJ%2Fc6kJ7t9djiXNOTQ7oQt%2FGvkJI5Qu4p5cQxEVyqhDB0uQ6bK5d6lIGHYx6dQK%2F7C948dDhdRFnU%2BAgxL5MLegj8AGOqUBXQQkVZaod8Ma%2FzdsgGrg0PxKxJ6FoCpn0A6SPmzRWJScPWLoVfP9Fwf0d40KWXJvW4EkxBfaVlhgPAoQkmPjAkZvZYqmzakVrShpBEoUArAX1zdt6gWWqyNx%2FGQnpBZ6sUVXojuS3KA3M3%2FWMZDWySIskVoUxBItmrcIO3GrZs42dBkXu7ppM7YAasQTS%2FLr0PLwfY9qgZmI9IjeSvmGjse8YmK2&X-Amz-Signature=ea180089c5c5102ad0c63ff4a8a8ae22ca3195ffde3f73448f06cd85ee373808&X-Amz-SignedHeaders=host&x-id=GetObject)

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

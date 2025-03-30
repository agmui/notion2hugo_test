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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOU2HXBN%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T230702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIC61qDuhGU4v3uTtfPOLjskoh8I39zAxUihT9J8XUE0GAiEAkghjriLJV4gKE6bxKgXg%2BmllugE4S2xgAY7EZan7DzgqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO1Pq6gECPNvL0sD9yrcA4lUx77jXbBwcY3%2F9fkhpm0cJAsoO4dbwsy0CNB0LWT5CXAfGiHmiXOLFLJnZvds%2BKUu7T%2FPu62J3MzeibSbCouVx0hUDs4rT1ZOSt4WzD%2FMQDvAYAbmh2opC8yo7eoN%2Bgfn5v2pixaLXfX%2FUF8FHTKauV%2FaNDQtjSdHWwmJ1wdfuwhDO7KrIpA745n6qr%2Bee8Zr5XrSFNjZNm3rI801cnSa9z0%2BLDpNf04LCpQrcxs10TsKgkbJqc4Q1w8Y36VJsqU9dRtVd57plwLtBIg9YEWF6DMn2tovN7PAn8f4agz2M255VUd4vN2QWxzHZVqOMbfEOQCVT4xSpH2QpKamRP4ER%2F5wZLZNYf22NlMfJc%2FOM0H3%2FhMejRzK6rPrqIo8p%2F6qNNcKLUOPCtNRYOGKuSzTR4KITb3YXVWAWguRzOJDyNJ3N6YKv5VXuwDmKzvfHzkckdACEPGTmkOgy8W%2BVq8AL6Gq2%2Bxjbyo90pwIsVfSZIkK3YvF%2BO%2FAIOO9miX9qAWEvzRnRh7Rrmja%2FQhgV45l7zOLBsQ8FujeyGzgnVBcp8aA2SyHJQLWQGQ%2FW9GvzFoTSzlWxq8Nu0ILyg%2FMm%2BRgI8OOEAUzyCipZK4XR%2Bx8%2B9Lmz1k3phENiS3DMO6Fp78GOqUB5ZyfnTrlzbfmyQ9OwjZr3PXQtdk%2FD0EMpxrYg71pnyY02xaEKr8onvrols3hZlzy%2BRSxG9MDU63CvO%2Fd6sXrX55kULLMMweAiyF3eI3Wi6gahqnlwa%2FVyEliIu7GXb%2BtwxL2IeJYF8Ea%2FsoNx1cJwGfVXnuQjt3rZyA3o77tJHlqxEiagZ88lANFt2IaQDJtwRGh1eoNZfYcseC%2F8RIU2igJHIR5&X-Amz-Signature=bf7ac47da2de9a350e9fc51c8bc0b4c3a5036648d58a7c876dc75abb81d46026&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOU2HXBN%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T230702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIC61qDuhGU4v3uTtfPOLjskoh8I39zAxUihT9J8XUE0GAiEAkghjriLJV4gKE6bxKgXg%2BmllugE4S2xgAY7EZan7DzgqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO1Pq6gECPNvL0sD9yrcA4lUx77jXbBwcY3%2F9fkhpm0cJAsoO4dbwsy0CNB0LWT5CXAfGiHmiXOLFLJnZvds%2BKUu7T%2FPu62J3MzeibSbCouVx0hUDs4rT1ZOSt4WzD%2FMQDvAYAbmh2opC8yo7eoN%2Bgfn5v2pixaLXfX%2FUF8FHTKauV%2FaNDQtjSdHWwmJ1wdfuwhDO7KrIpA745n6qr%2Bee8Zr5XrSFNjZNm3rI801cnSa9z0%2BLDpNf04LCpQrcxs10TsKgkbJqc4Q1w8Y36VJsqU9dRtVd57plwLtBIg9YEWF6DMn2tovN7PAn8f4agz2M255VUd4vN2QWxzHZVqOMbfEOQCVT4xSpH2QpKamRP4ER%2F5wZLZNYf22NlMfJc%2FOM0H3%2FhMejRzK6rPrqIo8p%2F6qNNcKLUOPCtNRYOGKuSzTR4KITb3YXVWAWguRzOJDyNJ3N6YKv5VXuwDmKzvfHzkckdACEPGTmkOgy8W%2BVq8AL6Gq2%2Bxjbyo90pwIsVfSZIkK3YvF%2BO%2FAIOO9miX9qAWEvzRnRh7Rrmja%2FQhgV45l7zOLBsQ8FujeyGzgnVBcp8aA2SyHJQLWQGQ%2FW9GvzFoTSzlWxq8Nu0ILyg%2FMm%2BRgI8OOEAUzyCipZK4XR%2Bx8%2B9Lmz1k3phENiS3DMO6Fp78GOqUB5ZyfnTrlzbfmyQ9OwjZr3PXQtdk%2FD0EMpxrYg71pnyY02xaEKr8onvrols3hZlzy%2BRSxG9MDU63CvO%2Fd6sXrX55kULLMMweAiyF3eI3Wi6gahqnlwa%2FVyEliIu7GXb%2BtwxL2IeJYF8Ea%2FsoNx1cJwGfVXnuQjt3rZyA3o77tJHlqxEiagZ88lANFt2IaQDJtwRGh1eoNZfYcseC%2F8RIU2igJHIR5&X-Amz-Signature=4b33e3276bbe3c1f1ee3e70e1ccaecaef5f67a79666e1af386fbb40a82020eec&X-Amz-SignedHeaders=host&x-id=GetObject)

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

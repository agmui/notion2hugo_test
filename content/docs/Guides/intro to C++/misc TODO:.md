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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTRXXSNA%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7%2FEXYueYAvTUJ3RpNMFzobq8Pf1D8WlrgN3mrMwgJjAiB6FynV%2FzkE6TWzjK3OPnUFjFar4%2BZN%2BjUrLvDbcmoTQyr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMyysJZ4d9Y0nJt4hgKtwDrkXlhbO%2BSjvbYJcx6QwAmWfZX9I2%2FzEb5uks9bzjzdXXT6yInrFMlWy%2FnTU91uHY5RsAJLa6Rp1OcGA72LOJP2jJFSUKZXfLGXoA%2FMSNbKttVcGt6e6qmMuhB99PaZPWGtEkJxhIyQZ%2B8%2Fft%2BLI8Phn9CXsIMtHA3%2B085CRABuFpYLSAoyfgX5RV9rWIqn7dQtrdAZGaPHazzji8fQUr7jbHIUErqOIFpD0dfKssq1sxu6ARyuZn%2BtMclxrw3XFoy2%2BO%2FY3a23xsJ3cUeyyr3%2FmbySZ2kdJ284SgfeTZEoaO7PdRqFqqtaUXM1onnjEigjuWXdIxU59myoqFVxXkGCjrJELVpsQCWeg%2FAXc0%2Bx2uYnusq9s0gR2CYHVkMRLheh05tiU6cTmrOaA%2Bjl4KZPAxRlFNB7jlHmvovlDIwGVqmdX2XnTO0vPAN5GFamFf7b1oglOd23ULHAFGb737kF4HebEKtZiB%2B%2F0PrNBhUQYV7UQ9O14goCaEF2WeT1JPEovSxKIELXhAG1hllqUtGpH7Lm28SMu7l72rb%2BGjDyhaZz7CWG669XtFTB%2Ffysy0fGSkDJTkO4kDoQ6x9wMKg6mUabGiXQsH1v4CLMrbw0uC9dkxpeQpoTKRtIowrJGNwgY6pgGMIsHJZDSPz4EmUqP1Q%2BqLJBoHRTjaa73OePcdjyZAaHEWwAILWd7ePUrzhB37ohykwk0p082QBvcSY2fqKjDox9WpPmZzEEnh60W0yo2tk8O0qfW6%2B%2BczVkBXYfOQGDaJxT%2B8o8db8GVMBuwuYz%2BSHxRTdxjsiS3Dhbv4ECAoDwVGWNK7m7rOK%2FDzj4pXY5KNRMz7Lxh%2BsrJBFuet3kXmJ5rS8IL4&X-Amz-Signature=0b769a09c0dd141cc929583c859b7e3ad2d82e3977d15e68452e26626974eb5b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTRXXSNA%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7%2FEXYueYAvTUJ3RpNMFzobq8Pf1D8WlrgN3mrMwgJjAiB6FynV%2FzkE6TWzjK3OPnUFjFar4%2BZN%2BjUrLvDbcmoTQyr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMyysJZ4d9Y0nJt4hgKtwDrkXlhbO%2BSjvbYJcx6QwAmWfZX9I2%2FzEb5uks9bzjzdXXT6yInrFMlWy%2FnTU91uHY5RsAJLa6Rp1OcGA72LOJP2jJFSUKZXfLGXoA%2FMSNbKttVcGt6e6qmMuhB99PaZPWGtEkJxhIyQZ%2B8%2Fft%2BLI8Phn9CXsIMtHA3%2B085CRABuFpYLSAoyfgX5RV9rWIqn7dQtrdAZGaPHazzji8fQUr7jbHIUErqOIFpD0dfKssq1sxu6ARyuZn%2BtMclxrw3XFoy2%2BO%2FY3a23xsJ3cUeyyr3%2FmbySZ2kdJ284SgfeTZEoaO7PdRqFqqtaUXM1onnjEigjuWXdIxU59myoqFVxXkGCjrJELVpsQCWeg%2FAXc0%2Bx2uYnusq9s0gR2CYHVkMRLheh05tiU6cTmrOaA%2Bjl4KZPAxRlFNB7jlHmvovlDIwGVqmdX2XnTO0vPAN5GFamFf7b1oglOd23ULHAFGb737kF4HebEKtZiB%2B%2F0PrNBhUQYV7UQ9O14goCaEF2WeT1JPEovSxKIELXhAG1hllqUtGpH7Lm28SMu7l72rb%2BGjDyhaZz7CWG669XtFTB%2Ffysy0fGSkDJTkO4kDoQ6x9wMKg6mUabGiXQsH1v4CLMrbw0uC9dkxpeQpoTKRtIowrJGNwgY6pgGMIsHJZDSPz4EmUqP1Q%2BqLJBoHRTjaa73OePcdjyZAaHEWwAILWd7ePUrzhB37ohykwk0p082QBvcSY2fqKjDox9WpPmZzEEnh60W0yo2tk8O0qfW6%2B%2BczVkBXYfOQGDaJxT%2B8o8db8GVMBuwuYz%2BSHxRTdxjsiS3Dhbv4ECAoDwVGWNK7m7rOK%2FDzj4pXY5KNRMz7Lxh%2BsrJBFuet3kXmJ5rS8IL4&X-Amz-Signature=67f4a5675f305eeafd4b039bc9011de1348f067a97d06229fe4678fe006ed779&X-Amz-SignedHeaders=host&x-id=GetObject)

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

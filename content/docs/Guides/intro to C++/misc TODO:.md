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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ7ZBAL6%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD9l6l4senY8trX8NvNWhxV6g0LfqKTWus4DIgV8Hy%2FOAIhAJinwSsYJ6zEOKoyDfRP5wCSfL5EC9YdXSty3qWwjbKvKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyq3RRpxkP2n%2BtQZNsq3APn%2Btuapx4yq35OEiNDvjz%2F8SjPxCpFu2GXrS8sr%2Bd6BthBp3dKWvG%2FiDQ9HQsx5pttwSvyfXxV32YmgZEff%2Fbvc0A4B5Dz2KGRYaIE1iDrrdIYdfX9WGjErcfLBzh3OrHd%2BiNYXIbjeBAg%2Ff3cWpQpC3FrWaNaxZNTLKGe3WiTCIYeE8kphu%2FDGaWG9CGaBmLAqFDdxEycnJZDwDh0mgp%2FUW6qAcPPEnDF9zQ7U91BednJu1nENIVfXu%2B3cxOzjvcKpqp57oAc6cFMBiLeSQFBvF3mAw6E%2BJrY1gIYw3W0yOY%2BhW3HOCFPrhF8GqusT%2F3UsSc019j4JS6%2FzG4EWmkzqA2%2Bc1ohHRqXof%2Bt8VtOa5L3BxEjrPPRRsksE1%2FuIlaiLD%2FM9K3ER3rmK9dt9eYgmkkEQlL%2F%2F%2FpY0o%2FhTnYd%2FUKGI9KIeH2MXgIJSQB4O1dHdW6j4C0z%2BSSvxuyQhwjdKFzpSIaqQifiHl%2B3cBi6QPj02qY34CgOUIXHhBcKNi14G%2BPssm1iYHqJQYdb%2BDDt6lLCDePc99A8LbBacYhXTB67GY9I8r%2F6pgTGwclQtuD1Ei6OtB2iEPMxepiaXKlEbA7%2BnSxGlUPVcrivjmRZ3GIRzIQZRNJPpyfEQTC00bPUBjqkAbYbQM52JbT7KkQxkFbBOF5H4zCEt%2B6d3na3sXMrc3Ru8YIIAh3x7IZIEO7pqVRknVR1cRShPU1wuv2NI8S30dcYt0BGHomz0gn3hKxMvVgtNWrRVYjyUB7A6uTaAPsZT0Ha7SYI5SpuwFFe6TWtCoKVkIB1Pn3%2BWbYSd%2Fd4gsoTIRvMiFQt4apZ7At6sA3ShrvtKS5AMKT3a1D6jQsUOo%2BQt7BJ&X-Amz-Signature=82e9a10685746d54159bbf804e20a23f6e3282fa8bc42a4908a04bf91bf23520&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ7ZBAL6%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD9l6l4senY8trX8NvNWhxV6g0LfqKTWus4DIgV8Hy%2FOAIhAJinwSsYJ6zEOKoyDfRP5wCSfL5EC9YdXSty3qWwjbKvKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyq3RRpxkP2n%2BtQZNsq3APn%2Btuapx4yq35OEiNDvjz%2F8SjPxCpFu2GXrS8sr%2Bd6BthBp3dKWvG%2FiDQ9HQsx5pttwSvyfXxV32YmgZEff%2Fbvc0A4B5Dz2KGRYaIE1iDrrdIYdfX9WGjErcfLBzh3OrHd%2BiNYXIbjeBAg%2Ff3cWpQpC3FrWaNaxZNTLKGe3WiTCIYeE8kphu%2FDGaWG9CGaBmLAqFDdxEycnJZDwDh0mgp%2FUW6qAcPPEnDF9zQ7U91BednJu1nENIVfXu%2B3cxOzjvcKpqp57oAc6cFMBiLeSQFBvF3mAw6E%2BJrY1gIYw3W0yOY%2BhW3HOCFPrhF8GqusT%2F3UsSc019j4JS6%2FzG4EWmkzqA2%2Bc1ohHRqXof%2Bt8VtOa5L3BxEjrPPRRsksE1%2FuIlaiLD%2FM9K3ER3rmK9dt9eYgmkkEQlL%2F%2F%2FpY0o%2FhTnYd%2FUKGI9KIeH2MXgIJSQB4O1dHdW6j4C0z%2BSSvxuyQhwjdKFzpSIaqQifiHl%2B3cBi6QPj02qY34CgOUIXHhBcKNi14G%2BPssm1iYHqJQYdb%2BDDt6lLCDePc99A8LbBacYhXTB67GY9I8r%2F6pgTGwclQtuD1Ei6OtB2iEPMxepiaXKlEbA7%2BnSxGlUPVcrivjmRZ3GIRzIQZRNJPpyfEQTC00bPUBjqkAbYbQM52JbT7KkQxkFbBOF5H4zCEt%2B6d3na3sXMrc3Ru8YIIAh3x7IZIEO7pqVRknVR1cRShPU1wuv2NI8S30dcYt0BGHomz0gn3hKxMvVgtNWrRVYjyUB7A6uTaAPsZT0Ha7SYI5SpuwFFe6TWtCoKVkIB1Pn3%2BWbYSd%2Fd4gsoTIRvMiFQt4apZ7At6sA3ShrvtKS5AMKT3a1D6jQsUOo%2BQt7BJ&X-Amz-Signature=2d92e1f24aac9845d8c91427ac1d979756d0713a28d05740127a901e0d24a6ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

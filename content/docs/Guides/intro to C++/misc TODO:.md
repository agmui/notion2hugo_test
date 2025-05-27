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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJOQ4XKU%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T061250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1IT2s4AFHVu0CWhZdKs9NEbA7my15HU1kUbB%2FChl0sQIhALh%2Fq0qn3MQP9jNbGh7f0piANdejf2sogRL3RvKY5xFhKv8DCFYQABoMNjM3NDIzMTgzODA1IgyNfz7BewbuwiMB33Eq3AMD%2BF5dtrL9P45g5OGR0C8tNbdelC7DHooa8uQBKAL%2BPcoy0yW2sxx44IkX3dGPGsVjeEyclN928QSD1KAoP6Aexy9oRcHlgYiQdTzhK9hGxK%2F2Ko26D0JA2xz%2BIHk6VhRHO4YlRSjxAt1Zr3GFziBV1a7R8qsiP%2BGaCk%2F8SqiPLJqPnPIZZoux3EAiDaNEsQRNK55g%2BhFfz1dnq3Tp%2Bl%2BhQx9YbW5w6SIlOP6xpbyrlDKVfrnlzaUVvJzAMFJUIsMMCxwz442tsy%2FVZQs1ukbt5Ib4Qc5M%2FmgktSBxtMlu6MF%2BQP9%2BCK176unHmwAVDH2TNCyIIBLOiz7LAuhjZetYUiBFfH8lsZxJqJTCL3MHir%2BK%2FCZCUOndrSjgTJ31HodY2tYhVAbJuPaNKIfMCNCOHY7O8VOioJiWyGEkCfrlWlBebVmaxhJ4rSCuV6kV79K0fNirPJ60wumJeYBSpBGeGzdhCRA0ojjwK1venKoqFVFDUE%2Fs37yoehaqYmeCV6sGLHpfFldQImzbBpUknSQvWzFPUiXtamMaBuIOH2rXq32oVddQStFJkTLiP16Pv5GdBYdM1okbV2%2BkjiTqFrFhq2NRkpRM5fBl2Jiwkp0xyPsYtLTDyg%2FTmWw0nzDZkNXBBjqkAQ%2BGgYYeyfE849LdTHJxRT37RXcr3%2FGoMlYoVMRFm4w8kSEJgxN9EGugYN5Q7qSLnt9mKxeA7mZTOA4blY3%2BTtmMQz49JejgzBF3xPQfeUyyQPloYKYZSK78DH4xNDrn8PBYdAN28AVgRfVhHrHm57%2BaAPETbGwoWxfDyRoxL9Jz9soFAWoBWGFAcmj5Dc7KK0TN6OZ2cZiZim7W3n29Ur4PLXGZ&X-Amz-Signature=7dc8c0c7fac41ab7dcca8640c950ba5c0ce28bebdebe70c69c4ba830ad94728a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJOQ4XKU%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T061250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1IT2s4AFHVu0CWhZdKs9NEbA7my15HU1kUbB%2FChl0sQIhALh%2Fq0qn3MQP9jNbGh7f0piANdejf2sogRL3RvKY5xFhKv8DCFYQABoMNjM3NDIzMTgzODA1IgyNfz7BewbuwiMB33Eq3AMD%2BF5dtrL9P45g5OGR0C8tNbdelC7DHooa8uQBKAL%2BPcoy0yW2sxx44IkX3dGPGsVjeEyclN928QSD1KAoP6Aexy9oRcHlgYiQdTzhK9hGxK%2F2Ko26D0JA2xz%2BIHk6VhRHO4YlRSjxAt1Zr3GFziBV1a7R8qsiP%2BGaCk%2F8SqiPLJqPnPIZZoux3EAiDaNEsQRNK55g%2BhFfz1dnq3Tp%2Bl%2BhQx9YbW5w6SIlOP6xpbyrlDKVfrnlzaUVvJzAMFJUIsMMCxwz442tsy%2FVZQs1ukbt5Ib4Qc5M%2FmgktSBxtMlu6MF%2BQP9%2BCK176unHmwAVDH2TNCyIIBLOiz7LAuhjZetYUiBFfH8lsZxJqJTCL3MHir%2BK%2FCZCUOndrSjgTJ31HodY2tYhVAbJuPaNKIfMCNCOHY7O8VOioJiWyGEkCfrlWlBebVmaxhJ4rSCuV6kV79K0fNirPJ60wumJeYBSpBGeGzdhCRA0ojjwK1venKoqFVFDUE%2Fs37yoehaqYmeCV6sGLHpfFldQImzbBpUknSQvWzFPUiXtamMaBuIOH2rXq32oVddQStFJkTLiP16Pv5GdBYdM1okbV2%2BkjiTqFrFhq2NRkpRM5fBl2Jiwkp0xyPsYtLTDyg%2FTmWw0nzDZkNXBBjqkAQ%2BGgYYeyfE849LdTHJxRT37RXcr3%2FGoMlYoVMRFm4w8kSEJgxN9EGugYN5Q7qSLnt9mKxeA7mZTOA4blY3%2BTtmMQz49JejgzBF3xPQfeUyyQPloYKYZSK78DH4xNDrn8PBYdAN28AVgRfVhHrHm57%2BaAPETbGwoWxfDyRoxL9Jz9soFAWoBWGFAcmj5Dc7KK0TN6OZ2cZiZim7W3n29Ur4PLXGZ&X-Amz-Signature=969e59c8be515d70d1eddbd050b38033f9f4158c1eb836c59a9a2b1bab572ef9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI6GITFT%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDMrivkCJPXXVUfk8C4GFdf5UI5S%2BZ7sxFZH9AJ1ZHwlQIgDdLthilpoa%2F4%2F%2FPiJgUCMOGQtWFj7PdnEjAGlZ9T43gqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXNNuZo6HPEzL6n4CrcA11xHCGJq47Bqvf0ExrITOs8ryOIVpCqwG%2Fgbw5Uer%2F6mVTiYsLog8KCqQWB25JO%2B%2F8b8182yTI3fEUAYnQjvtRRPm7ru76tpYEmBpfy0eRYt9SmXDG5hHYGwbFXbZu0vajm676%2BTkIhRbdNuWEtZUy2doisCQRwNe9B0R9jjYyuo%2BHyRPup8y3OQNdEd%2Bx%2FkxOrp2SkT1C%2FDM9vjB2aJCvQ1UdlIgd%2FDTjAqOUL1scg2HFbPEaNV991VyrKastpF4RaqEpwz1w7jmHxH5J%2Fb2q0hZo9j9Wtr20u9zZ21fbm5G9fejxx9O5g5nZo7O%2F0B0DKD%2FBJCSSWSXB2JQ%2BexNHpSW2wIJt5nEZMYcb2UU38tqzTqBtc%2FiIH5%2FN2RaJnH10FcUeJpwzwyOWE%2FtllJCEpjh2FF%2BKeF2OWMrWBGAovlx9N%2FSE18%2Bid79TjrHuexKQKK1ik7zJwLaFrE1%2FLyIdQnzfhpS373Bd7CEpAvbb%2Fnk59ySetoyRfVRHaB%2FcPtJ%2BTzVKq3R%2BpiAn9elHJpEVJWrt4EAwOjxWOCRyA7muMJFj2U5A4vTT0p6O6dU%2B%2BTdXfYFueKl1mbOa1svz9vQ9XSGUMt5UsHr54aZUuegloMpSsCvzi%2FkKN7JC0MIf2%2Br4GOqUBI8HKL3JshbeQE6SDExhLRqXfEvgEDim3INbTDn2zIZaiqcOUpOtuRPvdM8R3pyo3GYA%2BQ0ZdLG1QUJPcF2T5Ct93NnGer0tmi1TjsI9UPg7VVSZZVZYJHyXAPJZMJamYbw8Kuvv8SHrgCB7rJYROcKEi3wjKMbp4k1mZtNJ0HRF3dNwUTvY21jVLqyKwzXIA9pPbLkRcaZIG0ReWtJtlcOQUdv2P&X-Amz-Signature=8859820cfdb1745ce304a4f69413ed0b76e6263adc69d958bc52f67ef57dd7ed&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI6GITFT%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDMrivkCJPXXVUfk8C4GFdf5UI5S%2BZ7sxFZH9AJ1ZHwlQIgDdLthilpoa%2F4%2F%2FPiJgUCMOGQtWFj7PdnEjAGlZ9T43gqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXNNuZo6HPEzL6n4CrcA11xHCGJq47Bqvf0ExrITOs8ryOIVpCqwG%2Fgbw5Uer%2F6mVTiYsLog8KCqQWB25JO%2B%2F8b8182yTI3fEUAYnQjvtRRPm7ru76tpYEmBpfy0eRYt9SmXDG5hHYGwbFXbZu0vajm676%2BTkIhRbdNuWEtZUy2doisCQRwNe9B0R9jjYyuo%2BHyRPup8y3OQNdEd%2Bx%2FkxOrp2SkT1C%2FDM9vjB2aJCvQ1UdlIgd%2FDTjAqOUL1scg2HFbPEaNV991VyrKastpF4RaqEpwz1w7jmHxH5J%2Fb2q0hZo9j9Wtr20u9zZ21fbm5G9fejxx9O5g5nZo7O%2F0B0DKD%2FBJCSSWSXB2JQ%2BexNHpSW2wIJt5nEZMYcb2UU38tqzTqBtc%2FiIH5%2FN2RaJnH10FcUeJpwzwyOWE%2FtllJCEpjh2FF%2BKeF2OWMrWBGAovlx9N%2FSE18%2Bid79TjrHuexKQKK1ik7zJwLaFrE1%2FLyIdQnzfhpS373Bd7CEpAvbb%2Fnk59ySetoyRfVRHaB%2FcPtJ%2BTzVKq3R%2BpiAn9elHJpEVJWrt4EAwOjxWOCRyA7muMJFj2U5A4vTT0p6O6dU%2B%2BTdXfYFueKl1mbOa1svz9vQ9XSGUMt5UsHr54aZUuegloMpSsCvzi%2FkKN7JC0MIf2%2Br4GOqUBI8HKL3JshbeQE6SDExhLRqXfEvgEDim3INbTDn2zIZaiqcOUpOtuRPvdM8R3pyo3GYA%2BQ0ZdLG1QUJPcF2T5Ct93NnGer0tmi1TjsI9UPg7VVSZZVZYJHyXAPJZMJamYbw8Kuvv8SHrgCB7rJYROcKEi3wjKMbp4k1mZtNJ0HRF3dNwUTvY21jVLqyKwzXIA9pPbLkRcaZIG0ReWtJtlcOQUdv2P&X-Amz-Signature=44742d52facc52ab14c4a1d41481ba3db6f6b4785003e9e37c98e90644c7c969&X-Amz-SignedHeaders=host&x-id=GetObject)

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

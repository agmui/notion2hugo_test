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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULS2NP45%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQD%2Bs2MbpeqxTQBC%2F2t6%2BLCEvz3Oey2SHkQ2O5jx5p5asgIgIRt%2B6kpRGTVVbd7SXi0YFOGxJqpsnfmBvMxVJgZRNiIqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQyxItEaNL%2Bu1vh0yrcA12bLFapQqSW253q1%2FH9vzX4tctQpAIGOsD9v3HZn30xErgdELAebhAaPWHTU6ccApGa7aX%2FLOjVE%2F8DAE91dJTIdRdGLALUgRM%2FFq9QyrwWTN6Hx%2BoiLi7%2FaBcwrvDU1l0T9Dqd42T%2BNihBA%2F0XY5cQK8%2FbtJ4%2B2nRxyuOSUl8CcA8SIRXwzH%2Bzjx9B3XkdCzBmIdr6odGjdvgCB%2FufsatvPe8nIG3A7Z3PrJK8OjamqBE9wS34EDgjA03lKNB5D95HFyL5n24SbEXeT0zQwVycOdM1M91V%2Br%2F1tTXFOVbp2%2BZpQxG7A1NliS2JI4HNFQ4OT4JY%2FnvesnOqQwZ7jzcZLnGUxSQ7%2FUmhISs9ABGwf8BqJxKMX04lGwbe8%2FLQoDRFLyfRSkwW8j%2BLt69ydR61Cxmv4fKCuvQc1MMKGMrFBNIeA1soq9%2F151gJZXI2C2UxQllvvKTHGOBxQS%2B%2Bx3vlNJtDa071obWiOcP9ims3Aq8pfiTC3IB85ly1iHyZj%2FBpb8M6kB6Vazeadx%2F%2FuFJquvaEw5gFUVXw%2FEFf80NdxdBrXo3KM8qubyac%2FruMipnk2kQVsc7tdbAw8h0LcGy48Y%2Fv%2B96fsSVcYSIfDHsj0LyHqcBId8Kzz0XmMJKH1sAGOqUB4ywkt%2FmY2enhD38H87YoRK%2FsGFkN2zoqZWF0tL9mqanzAatpScfiN0gPMPgig9zeYze9cw0qR%2FNcFo0KdLfncjWIqkvEqFUjHg%2B5dR0vjvLVjjJ5edk0mJqpTd4xx%2Bbd7aj9ifB8uc9l0nGmd4nEbnvSRjMiDtQKUlnJkARCVCANc9JfuG%2FVLLERdxkkG1j%2FQcnx%2BbyPsRq7eUUY3fN0dls0IzDO&X-Amz-Signature=608c814facd1087ebe68fab3c1bbd27b40d466078414360e8aac58c13d3b3a16&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULS2NP45%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQD%2Bs2MbpeqxTQBC%2F2t6%2BLCEvz3Oey2SHkQ2O5jx5p5asgIgIRt%2B6kpRGTVVbd7SXi0YFOGxJqpsnfmBvMxVJgZRNiIqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQyxItEaNL%2Bu1vh0yrcA12bLFapQqSW253q1%2FH9vzX4tctQpAIGOsD9v3HZn30xErgdELAebhAaPWHTU6ccApGa7aX%2FLOjVE%2F8DAE91dJTIdRdGLALUgRM%2FFq9QyrwWTN6Hx%2BoiLi7%2FaBcwrvDU1l0T9Dqd42T%2BNihBA%2F0XY5cQK8%2FbtJ4%2B2nRxyuOSUl8CcA8SIRXwzH%2Bzjx9B3XkdCzBmIdr6odGjdvgCB%2FufsatvPe8nIG3A7Z3PrJK8OjamqBE9wS34EDgjA03lKNB5D95HFyL5n24SbEXeT0zQwVycOdM1M91V%2Br%2F1tTXFOVbp2%2BZpQxG7A1NliS2JI4HNFQ4OT4JY%2FnvesnOqQwZ7jzcZLnGUxSQ7%2FUmhISs9ABGwf8BqJxKMX04lGwbe8%2FLQoDRFLyfRSkwW8j%2BLt69ydR61Cxmv4fKCuvQc1MMKGMrFBNIeA1soq9%2F151gJZXI2C2UxQllvvKTHGOBxQS%2B%2Bx3vlNJtDa071obWiOcP9ims3Aq8pfiTC3IB85ly1iHyZj%2FBpb8M6kB6Vazeadx%2F%2FuFJquvaEw5gFUVXw%2FEFf80NdxdBrXo3KM8qubyac%2FruMipnk2kQVsc7tdbAw8h0LcGy48Y%2Fv%2B96fsSVcYSIfDHsj0LyHqcBId8Kzz0XmMJKH1sAGOqUB4ywkt%2FmY2enhD38H87YoRK%2FsGFkN2zoqZWF0tL9mqanzAatpScfiN0gPMPgig9zeYze9cw0qR%2FNcFo0KdLfncjWIqkvEqFUjHg%2B5dR0vjvLVjjJ5edk0mJqpTd4xx%2Bbd7aj9ifB8uc9l0nGmd4nEbnvSRjMiDtQKUlnJkARCVCANc9JfuG%2FVLLERdxkkG1j%2FQcnx%2BbyPsRq7eUUY3fN0dls0IzDO&X-Amz-Signature=7d87953bb694006bca38531b9cd1eb192b63bfc33e409af38d4d255f490caead&X-Amz-SignedHeaders=host&x-id=GetObject)

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

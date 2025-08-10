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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QPVYBRJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAiEuc%2B4lpyNErouNCIY50wu%2FyP2xnD1iOsGZTIovD86AiEAlyHdThWS5ovyVc9sITzKzhJHwvbTHGI4%2FBqqKbLd3oYqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBgr2GmOuNy8OssxhircAz3%2Bg%2BJh54FdPN%2BzMWKqO5%2BxeyPp05Pxkhm0R2T8BpLNreLgslELbLCToB1ZmAC2Xlz%2BiZndJFKwISJ20UAfRrb8Iu9Mn%2BLC4rKgW9ctJ55yD1Yo%2FK5NgdfArCwyiopcoOpL1cAunro0Qxy1CJGgAlPak5hNjbPig8ETvjOjp%2BHx1K9WwLDfH%2BriBL9ryvrBy2zOBbVutqht1uJgH3lH8yiTJdPcwdJpfz31CFKIBtNa7Kp%2FutLOpVRzp0yk5fdldRylUKKI%2Ft8FXarDl7u%2F92qleGuN9jBE4JpLYuf450vFlQ8RB76GssaO5uCB0TC3GyqzCbMqN9ypsnglb4Wj0O7qmECVVc73kOD3xRfFKY6gUxVhbN4ntbdDpr9EDCTdjdodNYIZEHvVAGRog3VUbfcjw5KtAl31YcmhhwYQJWq8O3Lgm266g33N5O5Jg9redMiB5Be0gs3TjZtWHm7qo4oBXpa5zQD%2BUQCGPxlJcMrfQlDhDwfzcgGON6kYx%2F6g92W3xs%2B5CaZRdOqYjBLjDaALcyC%2BCOv0M8i8nPlgA1RZrGZdkcNrM1Kz2OJT17YsW9uNN5mj6Z%2BRYhUAYtWlv8V0bIXDCwtzf3vR%2B4OlG%2FCdwPqwxzBXgtabPW%2B8MO%2F14MQGOqUB6sCUd3gtmm5GrX%2FDzHo6TXntyQikHLXil4OyXemUx65ckbN0%2BtJOUv9xK8BoQiZpLXCR1zan5qZOf%2BBmfHv8%2BruWWz97R9w9XY%2BZ6vNeIbZfNPEATkAvZEftx8QKhn8ho%2FYO1HLHvMBUNVMM6rSUy80N%2BJyxfOLXKrdlTUVhGW1YwcZ5pS2pbIU%2B9Wp6ddUwy8gT7wTYDlLX5XBSnIIOX0prXb4O&X-Amz-Signature=dafce0a0492818e1f97b6dae30544d039505e4f95574dc1b17799c3ceda84e53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QPVYBRJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAiEuc%2B4lpyNErouNCIY50wu%2FyP2xnD1iOsGZTIovD86AiEAlyHdThWS5ovyVc9sITzKzhJHwvbTHGI4%2FBqqKbLd3oYqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBgr2GmOuNy8OssxhircAz3%2Bg%2BJh54FdPN%2BzMWKqO5%2BxeyPp05Pxkhm0R2T8BpLNreLgslELbLCToB1ZmAC2Xlz%2BiZndJFKwISJ20UAfRrb8Iu9Mn%2BLC4rKgW9ctJ55yD1Yo%2FK5NgdfArCwyiopcoOpL1cAunro0Qxy1CJGgAlPak5hNjbPig8ETvjOjp%2BHx1K9WwLDfH%2BriBL9ryvrBy2zOBbVutqht1uJgH3lH8yiTJdPcwdJpfz31CFKIBtNa7Kp%2FutLOpVRzp0yk5fdldRylUKKI%2Ft8FXarDl7u%2F92qleGuN9jBE4JpLYuf450vFlQ8RB76GssaO5uCB0TC3GyqzCbMqN9ypsnglb4Wj0O7qmECVVc73kOD3xRfFKY6gUxVhbN4ntbdDpr9EDCTdjdodNYIZEHvVAGRog3VUbfcjw5KtAl31YcmhhwYQJWq8O3Lgm266g33N5O5Jg9redMiB5Be0gs3TjZtWHm7qo4oBXpa5zQD%2BUQCGPxlJcMrfQlDhDwfzcgGON6kYx%2F6g92W3xs%2B5CaZRdOqYjBLjDaALcyC%2BCOv0M8i8nPlgA1RZrGZdkcNrM1Kz2OJT17YsW9uNN5mj6Z%2BRYhUAYtWlv8V0bIXDCwtzf3vR%2B4OlG%2FCdwPqwxzBXgtabPW%2B8MO%2F14MQGOqUB6sCUd3gtmm5GrX%2FDzHo6TXntyQikHLXil4OyXemUx65ckbN0%2BtJOUv9xK8BoQiZpLXCR1zan5qZOf%2BBmfHv8%2BruWWz97R9w9XY%2BZ6vNeIbZfNPEATkAvZEftx8QKhn8ho%2FYO1HLHvMBUNVMM6rSUy80N%2BJyxfOLXKrdlTUVhGW1YwcZ5pS2pbIU%2B9Wp6ddUwy8gT7wTYDlLX5XBSnIIOX0prXb4O&X-Amz-Signature=a8136eb14cae59d29c138dc0affd15670d144c2eaa062cd78026199001f24855&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

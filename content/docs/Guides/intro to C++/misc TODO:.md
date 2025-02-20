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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPCRR34H%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRaOSjiIF%2Fs4pT8EeE%2BPl%2BHP6KDxwVMh81xdJoFvnYdAIhAMQCJUAPNqOZCZPMgdJNpy1TzJD2KAskD91rkHgJyC7XKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaAguX3iuNUrz087Mq3ANqwWiseoCLwqezlTHt%2FRC47np8CwHZf%2Fn9oWllF0Vhv3aoWJkOXiBw40ZRftGEbTDyngwNVu9BhFmvcjBMWQkF7yRpDXWdXgbftsBK0IJDTKPkUOiRpU1pMbl5umP5WWq1CudLQ9SCkheOkUQbpHk0xysBCVEQ%2BCM7wkQGE%2BaHkVzzSqggdP%2Fc1lQ7situwKsbyb7fcxO9FK9CxIhzAzly2Hlfm50efZyUIm2MC%2F279VFgkX5iB2fRMupQCTHMYeLAI3tb2EZc0r6r%2F2VzmhwBoExBw2DSU4B8Flhzh%2FzpUmxxkDDascoK79ONLT7xU4xPx1GIM3PadG%2Fhw9jpwlV%2BlZGQoLNZoODRaYsl%2FdU34%2FkBsLgvhV9Qlmi%2Fy6W52%2FVtMvF57Dth88swsLQwu6lt8Geuwj3JOd%2Bkhf5SqaV%2BQAyzRhrWiCoD1mQZqWhzuSM2IZ%2B3KiB4UYWhUAFUGFa2Z2bjWY8aQNu2ScobY7WC%2FUOPOoDO%2F1nxw4dRi0cjxtwcORroMOYGdaOsyUi%2B6fLmNkuh%2B6c328w5BIb3ojnxYa0Y7adovzysq7V5u1nwj2zVViL4uB6fzOaOXo76oB7f%2F508D8KJ%2BiwD17lqY4HX03oo8tlkGM1s7XLV%2BDDrjd69BjqkATvHgWrv0i5YHmOkPUx4JXSF1%2B5p51Kx%2Fw9JqxlAopf6kaggL%2BZ81RbJ7UlVcMFcDix%2BtDceS2YBnL777kUPkTZFA8vhOqDZYyX8HastaiESRGfj7zy8lnsDauml0HyKGuLaFZvoHrt0F8e4PeooJv0%2FuxJnciXtJxrF8VRoFzG6NqyimWvLoq4XUcXIes6iBn5t9XsjcWibVXxDOUqfxy3VkbJw&X-Amz-Signature=106a43ecbce1720581ea191fe4130180cf14637bc6d5623978b48b6be20494c1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPCRR34H%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRaOSjiIF%2Fs4pT8EeE%2BPl%2BHP6KDxwVMh81xdJoFvnYdAIhAMQCJUAPNqOZCZPMgdJNpy1TzJD2KAskD91rkHgJyC7XKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaAguX3iuNUrz087Mq3ANqwWiseoCLwqezlTHt%2FRC47np8CwHZf%2Fn9oWllF0Vhv3aoWJkOXiBw40ZRftGEbTDyngwNVu9BhFmvcjBMWQkF7yRpDXWdXgbftsBK0IJDTKPkUOiRpU1pMbl5umP5WWq1CudLQ9SCkheOkUQbpHk0xysBCVEQ%2BCM7wkQGE%2BaHkVzzSqggdP%2Fc1lQ7situwKsbyb7fcxO9FK9CxIhzAzly2Hlfm50efZyUIm2MC%2F279VFgkX5iB2fRMupQCTHMYeLAI3tb2EZc0r6r%2F2VzmhwBoExBw2DSU4B8Flhzh%2FzpUmxxkDDascoK79ONLT7xU4xPx1GIM3PadG%2Fhw9jpwlV%2BlZGQoLNZoODRaYsl%2FdU34%2FkBsLgvhV9Qlmi%2Fy6W52%2FVtMvF57Dth88swsLQwu6lt8Geuwj3JOd%2Bkhf5SqaV%2BQAyzRhrWiCoD1mQZqWhzuSM2IZ%2B3KiB4UYWhUAFUGFa2Z2bjWY8aQNu2ScobY7WC%2FUOPOoDO%2F1nxw4dRi0cjxtwcORroMOYGdaOsyUi%2B6fLmNkuh%2B6c328w5BIb3ojnxYa0Y7adovzysq7V5u1nwj2zVViL4uB6fzOaOXo76oB7f%2F508D8KJ%2BiwD17lqY4HX03oo8tlkGM1s7XLV%2BDDrjd69BjqkATvHgWrv0i5YHmOkPUx4JXSF1%2B5p51Kx%2Fw9JqxlAopf6kaggL%2BZ81RbJ7UlVcMFcDix%2BtDceS2YBnL777kUPkTZFA8vhOqDZYyX8HastaiESRGfj7zy8lnsDauml0HyKGuLaFZvoHrt0F8e4PeooJv0%2FuxJnciXtJxrF8VRoFzG6NqyimWvLoq4XUcXIes6iBn5t9XsjcWibVXxDOUqfxy3VkbJw&X-Amz-Signature=b1436464af2e7bee80f9ef95eb90845aa065a02882c5cb3df9c9d36cc3b42af2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

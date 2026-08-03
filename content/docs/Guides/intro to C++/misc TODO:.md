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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW77N46T%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCnFpf%2BSRFKrb%2FS1qdaSPqNYhghQKnMSmlCrdzcrmTCvAIgUPteMquDrbUsx5EicWF%2F1N%2Fw43XfVYj5siV9cOiVCBQqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2LZGqD5NYUQ0zXoyrcAzYXOJ61Lry0b1kvstkgRQ2OtVma%2BReTkwULXhLy7hC1McV73SRtNk8eLz3QXvXrRHkXLgkTi1TD%2BrJv24VTYbMOFR6J5vbT%2FOSt7Hxbbph9tWVt2d33pD6LXJxJV75KmJBVsc4j%2B0BQiXRW4Iyjlmwyw0fOv%2FXvfSSb14Z6bIcCbr9L%2FTqWkH9ByqhI2a%2BzJZdS2UaHQGmXPeD44mlSlq48PaV%2FTN23zy8XO1hYD8ySJd8YgRm9O142wCvnt2X0fBxnOWWSDfn5k957kRwZTsF0pLHDkNJ0YkpVis%2Fau2u%2BmylHldLzhpW9g9sKkinA58LTKzkEjjFEsCx3Aeb9IpDx8u5MLFSur76aerRwMfFhdpdJQLgHDb3BeQLB6QLvPTXqKEX14hKy4CDWhG2cZosaYyf9%2F1DOlcNmTARaMrKfe7Z1lcbkBbFlhYJu5OlsM%2FxCJwDYEYDCW3amw5H9zII%2BL9ZvX7%2BkTGw4KHsIcgNbY7S1vO8i713MTIoPC0ju7%2BkeH1lYkmhRebECt3r0cPh9Sndpyezb9lMMudOf9tR6irJLz9UpC3sZL03gaPS3vHsvg%2F878VrEusQpO7KLZgge5AlHTAjgd0nhDanBVFq5s8S1oncITufURWyNMLXkv9MGOqUBAsflbbavyb31hhgbG4NOcAQg7l9AaI6pdNRp7e8%2BGdWxnZJ%2F1k80dUTwJyyzFjzOLAeGWfSVZ439d9pr9qWnsKW6S05EFhQJ4nHmy%2BFwVqjfue20g3Pt%2BZq3EhCQNVue1O%2FyBS4pWR6N%2F5D%2FgGi%2Bc4bajW25QEYzI%2FfwRUA07fmrWVN2Fju5jZjpZtFs%2FS9T81Gweh1CSbIlDWVgtjdtez5eBjJw&X-Amz-Signature=57d493b1920d51caf62335a5c864c6f6a0295c7ebbc477c1519ceaa10addb658&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW77N46T%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCnFpf%2BSRFKrb%2FS1qdaSPqNYhghQKnMSmlCrdzcrmTCvAIgUPteMquDrbUsx5EicWF%2F1N%2Fw43XfVYj5siV9cOiVCBQqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2LZGqD5NYUQ0zXoyrcAzYXOJ61Lry0b1kvstkgRQ2OtVma%2BReTkwULXhLy7hC1McV73SRtNk8eLz3QXvXrRHkXLgkTi1TD%2BrJv24VTYbMOFR6J5vbT%2FOSt7Hxbbph9tWVt2d33pD6LXJxJV75KmJBVsc4j%2B0BQiXRW4Iyjlmwyw0fOv%2FXvfSSb14Z6bIcCbr9L%2FTqWkH9ByqhI2a%2BzJZdS2UaHQGmXPeD44mlSlq48PaV%2FTN23zy8XO1hYD8ySJd8YgRm9O142wCvnt2X0fBxnOWWSDfn5k957kRwZTsF0pLHDkNJ0YkpVis%2Fau2u%2BmylHldLzhpW9g9sKkinA58LTKzkEjjFEsCx3Aeb9IpDx8u5MLFSur76aerRwMfFhdpdJQLgHDb3BeQLB6QLvPTXqKEX14hKy4CDWhG2cZosaYyf9%2F1DOlcNmTARaMrKfe7Z1lcbkBbFlhYJu5OlsM%2FxCJwDYEYDCW3amw5H9zII%2BL9ZvX7%2BkTGw4KHsIcgNbY7S1vO8i713MTIoPC0ju7%2BkeH1lYkmhRebECt3r0cPh9Sndpyezb9lMMudOf9tR6irJLz9UpC3sZL03gaPS3vHsvg%2F878VrEusQpO7KLZgge5AlHTAjgd0nhDanBVFq5s8S1oncITufURWyNMLXkv9MGOqUBAsflbbavyb31hhgbG4NOcAQg7l9AaI6pdNRp7e8%2BGdWxnZJ%2F1k80dUTwJyyzFjzOLAeGWfSVZ439d9pr9qWnsKW6S05EFhQJ4nHmy%2BFwVqjfue20g3Pt%2BZq3EhCQNVue1O%2FyBS4pWR6N%2F5D%2FgGi%2Bc4bajW25QEYzI%2FfwRUA07fmrWVN2Fju5jZjpZtFs%2FS9T81Gweh1CSbIlDWVgtjdtez5eBjJw&X-Amz-Signature=506a16c1dd8f105f3cfef5dc67902b3181a3ad5a7032f0b9dc5a343d4206a8de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

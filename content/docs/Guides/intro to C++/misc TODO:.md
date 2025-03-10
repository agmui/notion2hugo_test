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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REQTKKSS%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T131825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQD0j5Co8TWrxjbJPUtG712fc0riPFVn%2FrCkMY0UDcKHkgIgZYcO75PnMHAity9Wn%2FsiJSzvEegRFkeUcmjuK2ZBpOQqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCOEl3xlLD8JwGGZSrcA2bbHe%2FXEw9Brj18%2Fn7QVRrKsvuMQkvUZ5zQs5dmpTmOZVgfk7r0XCtSh4yCfHfMOYTNIRacqI9gR6Q24eoV1o8gUYAuAR2tcymcy2nUSoWQhu9cFBDc7l1snHMrD5iQPuM0xrjQANrLhJTkfff1ps8E1hrjfedYV%2FM%2BfYBTU3YT7svWQZH6Nor1kTOXjQWmN3TiWrnQnhs6uFPPvztQVXx3mdX1bQ%2F%2BeoC3NS3M9paTXfetVHwHoWSPMRpK6OeC6%2F0naQqHfG08EQF9XWIMulQBrjiMNkdHvii13a2b6BIZp0%2FRwyMGFSveI%2BERQJ3KfOQok1DGsolEDSqkV7qicDgQI1IxFXLMGWcxSc9RAulsdbRDVbA1xD5TTibSutcpxDi323sbysQMx0ALmYyTihJC0hFHk1fgYt%2F4FhS3z%2BAWgY9ZM93%2F90EXyJnWZtxHzTbh09GkdK%2FQhgwCmrOsaL%2FDA7UxEAPzu3u%2BbuW7FUPRrUt3CC1VHaxFa9QOBUe3th4d83daI4jLytg355dAmzoaSVC5FEYDfoZBM51oetsP3ALJP0MHKVbAWyDfMtWveauXESBwErr4xrNx%2Bti3drbFxhR1q3Py0RKNXJYeSHGfZ90DN8c1hADkBOfoMJnLu74GOqUBq0iMLtWlBkWwvj6nfmup2x521CXKLZ7FVshfBpzQcqCKZQotngD7wDWs2C7foTOM0xjplHk%2BABNrPfB6yQaMCzJkFhah6maJfo7ZzWi2x16FIhMd9t9ZJV7%2BAoYJcbh4kpYQlITjQsknEWXLxLrg7Wej3GX3VDmbCf%2FYncKBe8hehyzzD5sCsLu8GmRAxaV2tV965Vs3Lz7l9jw1osWqJRgEoA8G&X-Amz-Signature=7e67e436879adb5759571f15353635055fb0a0a53a6afa7ebc1be4ddca278af3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REQTKKSS%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T131825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQD0j5Co8TWrxjbJPUtG712fc0riPFVn%2FrCkMY0UDcKHkgIgZYcO75PnMHAity9Wn%2FsiJSzvEegRFkeUcmjuK2ZBpOQqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCOEl3xlLD8JwGGZSrcA2bbHe%2FXEw9Brj18%2Fn7QVRrKsvuMQkvUZ5zQs5dmpTmOZVgfk7r0XCtSh4yCfHfMOYTNIRacqI9gR6Q24eoV1o8gUYAuAR2tcymcy2nUSoWQhu9cFBDc7l1snHMrD5iQPuM0xrjQANrLhJTkfff1ps8E1hrjfedYV%2FM%2BfYBTU3YT7svWQZH6Nor1kTOXjQWmN3TiWrnQnhs6uFPPvztQVXx3mdX1bQ%2F%2BeoC3NS3M9paTXfetVHwHoWSPMRpK6OeC6%2F0naQqHfG08EQF9XWIMulQBrjiMNkdHvii13a2b6BIZp0%2FRwyMGFSveI%2BERQJ3KfOQok1DGsolEDSqkV7qicDgQI1IxFXLMGWcxSc9RAulsdbRDVbA1xD5TTibSutcpxDi323sbysQMx0ALmYyTihJC0hFHk1fgYt%2F4FhS3z%2BAWgY9ZM93%2F90EXyJnWZtxHzTbh09GkdK%2FQhgwCmrOsaL%2FDA7UxEAPzu3u%2BbuW7FUPRrUt3CC1VHaxFa9QOBUe3th4d83daI4jLytg355dAmzoaSVC5FEYDfoZBM51oetsP3ALJP0MHKVbAWyDfMtWveauXESBwErr4xrNx%2Bti3drbFxhR1q3Py0RKNXJYeSHGfZ90DN8c1hADkBOfoMJnLu74GOqUBq0iMLtWlBkWwvj6nfmup2x521CXKLZ7FVshfBpzQcqCKZQotngD7wDWs2C7foTOM0xjplHk%2BABNrPfB6yQaMCzJkFhah6maJfo7ZzWi2x16FIhMd9t9ZJV7%2BAoYJcbh4kpYQlITjQsknEWXLxLrg7Wej3GX3VDmbCf%2FYncKBe8hehyzzD5sCsLu8GmRAxaV2tV965Vs3Lz7l9jw1osWqJRgEoA8G&X-Amz-Signature=7e6eba0904ed57e124191560dcb7901c008c44c6fb620ba017193190777093fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6O4PLHT%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T070839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDH4kLcJgvVMAMLeLqeBTM0o2EqcRIMehlQTGdTFGuUogIhAPr3YUQR1D69p2v6RoZl8bTViJjF5fAcYIPTP2TkfHnmKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysKe3V3OuQycaNxREq3AMeu%2BFADuHCH3ez9LoEXzAbTPBPoIyiWHBESp1VPY7AAccslz4QIgXm3c6vhcBhumaVPXcwmo0g6Fv7JlmGUNdUmPkacZI6LZW%2FHouDI9xArKMuRBhmxg2DXlVYP0psBanIJp5y7KiBf3xvIYrHAMa6QuU2NM1v3jRbs70%2Bk2IbMdk5wLcuRES7%2FOA6Bq6yzzvXI6j74jhVwF7z52bC0lQS%2BLZ4J6bkcpRAOWI8c8wA5gXT6xLG7faYgE7AvyVl7cgY%2BpGlRRKY1HYqH%2FKd3tGffGQhQyIh527VkD2TnoECs9zijQi9RAwvxZm4SnEHor7psqcJ5De9CXy8dQc3xmkXtm54fUuS8jlbpK0RoaVOBsQO1DZsOBWHs3Y0YlhiglA0cld27%2FbqB1d10ztXHD3kC5LsviWevL2GOO0vHrRQwSuJrcpAl2wgMbLiFo5HMyV10gcmqJtj8AevqWxaXdxSj5zt6I0pFcEeAWpF99fIsdtCvMoEAT6T1BMXyFzf1QaRFfnMQUFhUffjpejR0g6m50JqaJ5cPCJtLPQ4aRQupLNRZ1iFykEyW8xZBvOfdeau%2B3m%2FK%2FTuDdrGj1PJXtOu1g%2ByPrhiw4S7t0%2BaJTs8rGXys3na7ZzYmvA7FzC%2B9uK%2FBjqkAfEE2iOUQq0QhDrXQGkTFUbpjmi3%2FuUOXfT2N7yo9P3ZEmCiVkqdBIqpDDSYlc0T8KIJ588dTTwtgKpvSz1%2FC95xMo0Mxq09K%2Fq12hg5V84BGmUOA%2BdFD106%2FC0Ul1r0Wgq5nOYTTd8LMd76YN0LpNlm%2FQYWBup04Dl2%2BTZoq9DFd1afn0hcrkgoa4NAAkPhOhqEFOOcFrSu0bzVd%2B2musM5b1QJ&X-Amz-Signature=b8b14ea1a83e0b684cb9054169380667265bd2cde5574c9311862299ade20371&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6O4PLHT%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T070839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDH4kLcJgvVMAMLeLqeBTM0o2EqcRIMehlQTGdTFGuUogIhAPr3YUQR1D69p2v6RoZl8bTViJjF5fAcYIPTP2TkfHnmKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysKe3V3OuQycaNxREq3AMeu%2BFADuHCH3ez9LoEXzAbTPBPoIyiWHBESp1VPY7AAccslz4QIgXm3c6vhcBhumaVPXcwmo0g6Fv7JlmGUNdUmPkacZI6LZW%2FHouDI9xArKMuRBhmxg2DXlVYP0psBanIJp5y7KiBf3xvIYrHAMa6QuU2NM1v3jRbs70%2Bk2IbMdk5wLcuRES7%2FOA6Bq6yzzvXI6j74jhVwF7z52bC0lQS%2BLZ4J6bkcpRAOWI8c8wA5gXT6xLG7faYgE7AvyVl7cgY%2BpGlRRKY1HYqH%2FKd3tGffGQhQyIh527VkD2TnoECs9zijQi9RAwvxZm4SnEHor7psqcJ5De9CXy8dQc3xmkXtm54fUuS8jlbpK0RoaVOBsQO1DZsOBWHs3Y0YlhiglA0cld27%2FbqB1d10ztXHD3kC5LsviWevL2GOO0vHrRQwSuJrcpAl2wgMbLiFo5HMyV10gcmqJtj8AevqWxaXdxSj5zt6I0pFcEeAWpF99fIsdtCvMoEAT6T1BMXyFzf1QaRFfnMQUFhUffjpejR0g6m50JqaJ5cPCJtLPQ4aRQupLNRZ1iFykEyW8xZBvOfdeau%2B3m%2FK%2FTuDdrGj1PJXtOu1g%2ByPrhiw4S7t0%2BaJTs8rGXys3na7ZzYmvA7FzC%2B9uK%2FBjqkAfEE2iOUQq0QhDrXQGkTFUbpjmi3%2FuUOXfT2N7yo9P3ZEmCiVkqdBIqpDDSYlc0T8KIJ588dTTwtgKpvSz1%2FC95xMo0Mxq09K%2Fq12hg5V84BGmUOA%2BdFD106%2FC0Ul1r0Wgq5nOYTTd8LMd76YN0LpNlm%2FQYWBup04Dl2%2BTZoq9DFd1afn0hcrkgoa4NAAkPhOhqEFOOcFrSu0bzVd%2B2musM5b1QJ&X-Amz-Signature=e2df67ebab23f961400dfd9079759dc676965be4e0852fc75bd89ca353199550&X-Amz-SignedHeaders=host&x-id=GetObject)

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

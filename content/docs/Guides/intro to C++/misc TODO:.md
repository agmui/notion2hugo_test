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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRXJT6HN%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T100814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbS6tkDXS5h9BlHtXMAeHNdANqAqoxu%2BnUaNT7%2F5o6iQIgHz3xW%2B5481WGCgQ3q9FcI%2FqtRjQ4BR3QU0CpmoFP76oq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDOHuBYFRHyt0RYyX4SrcA0fmhmu%2FmduTj5WW1NNjCTDKbNqWjdzidJ%2BjyLD47S2wjbTn7uxqNz8kJqggQ6evma8Ad7K7QqqN%2BLRXAqaBpOdLoT5N56TzYDtjznGLlSwngx02dfRdmRCYZePSB9fSwPqFdNJaH0YdOUiS6tO%2BOOQPz3UISGKSWinkeW9oSJ7eMihUFTn1tRSG52kLNukvO4hBQi5u0ZSaMqHDBg8b8Oh7haIu%2Fgbs%2Bj%2F%2BdFTUvWWUdAUHQODNBTie7KsgnkBv0aC1zBXzWU79k46vSvPNf%2Bh5QEPxK2OzsTi6KEyYpVRbozoc5%2FfqTysOnmrVM9AhNjHtnLUyk1Ff0TvluJUC4cWMo4O%2B4KmseCkn6QdLtgRZIROmo7IcMIoMilW102deGzjsg%2F1Eb8309TzI05%2B%2BaDj7%2Bz%2B%2BPq7FhRG2JlQrmxJNeTNSLbQpkxsojBl9PQZzdZ%2BtXBhE4w7N7T%2F%2BdxQvzvlfhoELnlv7RrWLhTD0yWP0MfC0ZPcLNIa5Q0iV01AloZX%2BwDM3G1tlM9%2Ft%2BX8dyj%2BzA9UIfPI1jcTcHu%2FwuFBjKsxdWUG3cM4doz4FTuwUkvE4Xg3yFUGdJH65%2F%2BgB0r6d%2Fq54X25Tz6326wulAJyyiAgaMkE7J6BWhnOjMOb%2FyL8GOqUBjQd8%2BVOE6TSd0CAp9uTqMS7QK79uuw4G5S5oRTpAW%2FhP4mqHHigZSb1oX7OjGrEmY8z%2BVGPdRVcyCw%2FA%2Bb5HxgMnXzMXCMxfS49yu60spVMDAYd1eo2WzSQzPoGupqI3n7L3IxDRfmjtwl3KqSZYq1yzKSRKO3O%2B2wB30CE5Uo0R%2Fh6wQlFpjgiEnVRqmp4zc0DTlFfk6kfalnSWELLL41EddZLC&X-Amz-Signature=9e0f69faca3a599b1f1fbfd1f826aab1c7915e3be157837a67caf127d6c5a783&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRXJT6HN%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T100814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbS6tkDXS5h9BlHtXMAeHNdANqAqoxu%2BnUaNT7%2F5o6iQIgHz3xW%2B5481WGCgQ3q9FcI%2FqtRjQ4BR3QU0CpmoFP76oq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDOHuBYFRHyt0RYyX4SrcA0fmhmu%2FmduTj5WW1NNjCTDKbNqWjdzidJ%2BjyLD47S2wjbTn7uxqNz8kJqggQ6evma8Ad7K7QqqN%2BLRXAqaBpOdLoT5N56TzYDtjznGLlSwngx02dfRdmRCYZePSB9fSwPqFdNJaH0YdOUiS6tO%2BOOQPz3UISGKSWinkeW9oSJ7eMihUFTn1tRSG52kLNukvO4hBQi5u0ZSaMqHDBg8b8Oh7haIu%2Fgbs%2Bj%2F%2BdFTUvWWUdAUHQODNBTie7KsgnkBv0aC1zBXzWU79k46vSvPNf%2Bh5QEPxK2OzsTi6KEyYpVRbozoc5%2FfqTysOnmrVM9AhNjHtnLUyk1Ff0TvluJUC4cWMo4O%2B4KmseCkn6QdLtgRZIROmo7IcMIoMilW102deGzjsg%2F1Eb8309TzI05%2B%2BaDj7%2Bz%2B%2BPq7FhRG2JlQrmxJNeTNSLbQpkxsojBl9PQZzdZ%2BtXBhE4w7N7T%2F%2BdxQvzvlfhoELnlv7RrWLhTD0yWP0MfC0ZPcLNIa5Q0iV01AloZX%2BwDM3G1tlM9%2Ft%2BX8dyj%2BzA9UIfPI1jcTcHu%2FwuFBjKsxdWUG3cM4doz4FTuwUkvE4Xg3yFUGdJH65%2F%2BgB0r6d%2Fq54X25Tz6326wulAJyyiAgaMkE7J6BWhnOjMOb%2FyL8GOqUBjQd8%2BVOE6TSd0CAp9uTqMS7QK79uuw4G5S5oRTpAW%2FhP4mqHHigZSb1oX7OjGrEmY8z%2BVGPdRVcyCw%2FA%2Bb5HxgMnXzMXCMxfS49yu60spVMDAYd1eo2WzSQzPoGupqI3n7L3IxDRfmjtwl3KqSZYq1yzKSRKO3O%2B2wB30CE5Uo0R%2Fh6wQlFpjgiEnVRqmp4zc0DTlFfk6kfalnSWELLL41EddZLC&X-Amz-Signature=3396c08af6dba3c4fc378aa14b2ef2c31400d7758d411ca11c0268ccd97e3d63&X-Amz-SignedHeaders=host&x-id=GetObject)

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

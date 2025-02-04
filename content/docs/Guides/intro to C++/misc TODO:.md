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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HBHM2IV%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T140744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCID1PsxwOC3wC%2B%2FRF8%2FyjGc3%2BZ38%2Be%2F0rkzkxpn3ke78vAiBmV%2BdRvHWuMyrp4jeQNKc1b8rSaHwVBg5CNXf8RkxDiyr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMeqbxm0pl227ap3dRKtwDgdxR2i7YaOWDuDwX8DAAN1V0glz9WS4E4N2j4qL0y3PGg6zMOZux6TunyXrIzJWGdd2y3DWYugTgGJGZ5okDl%2BIKHADqDa3oIcRd8YwPNM2bIhigPE2m91Fwou4CNuYyMR7BIorycMB84A0m35mmaVngQE4I1xetiEw%2Blnj6aV%2FcGcPW%2BlSf%2F9bbm6sKvoXXwd0ByuAnj%2FCWFF8qj%2F5XQPUGsz3zgtPcJ5oXmJh%2Bai6GoasVBRtX8vNS4iXoaLaZPvgFk93mLzdqxEA6Rt%2B4DSsg%2BV003S07VhgMzQZpusUbEK%2Fosn5v%2FqLgfwA3Ou%2Bza%2FE%2BJKCdfcewCuD1Z%2FF0EENAhaK2ACXrparFuc3UPvd2fB2ZWukf4BU4Q9nKz25XM39u6Eeiq3n1%2F1In8cO8SPZ%2FOIY3J%2FZg%2BxzNPtpN%2FUQny2QtyCQVVrOZObV7HoZxq3Qp1e5dxtLlLdTmnN2pzYfYkHpWlYeU9k95SPupGX%2FFxVH%2BG94pq9%2Bs8ZstVX5huFb5hUBsSJ%2BwWvdgW71a7SQB6UcC44FWRAC7O0uX8RsXUOZ5o85s712f9X80K31mM5QAbkpyNImVxyW2AwkZLAFVwdMrcZHeEYk6Z9%2BcGn2VChHeXrz1pqy0wjMwqJ%2BIvQY6pgHwXP4tjhoK4dtlC%2FRGev%2FffsJTuWFIG59%2BHvWJn4hXtxBpAy1GMx%2FxTk2R11VwHOWPYkoS1biXf%2Bxnju7OEXj%2Fb8%2BKIfK2YCtn1grcclbAP%2Bi3xbO0GIHgxZjqbwPMaIOSFkMIjPePX8vCPhcBqrzhT9rm27rKZlZiThTZspwoq%2F1bml7ceUj6ht73YgTe4bmToGWUP3wD22gEG%2BYOXfkLyz5RLyXL&X-Amz-Signature=0f93ab98e59ebebd8cf81ae8c32caa3f4007751008d8f5103d8e9bf64c9c0f49&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HBHM2IV%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T140744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCID1PsxwOC3wC%2B%2FRF8%2FyjGc3%2BZ38%2Be%2F0rkzkxpn3ke78vAiBmV%2BdRvHWuMyrp4jeQNKc1b8rSaHwVBg5CNXf8RkxDiyr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMeqbxm0pl227ap3dRKtwDgdxR2i7YaOWDuDwX8DAAN1V0glz9WS4E4N2j4qL0y3PGg6zMOZux6TunyXrIzJWGdd2y3DWYugTgGJGZ5okDl%2BIKHADqDa3oIcRd8YwPNM2bIhigPE2m91Fwou4CNuYyMR7BIorycMB84A0m35mmaVngQE4I1xetiEw%2Blnj6aV%2FcGcPW%2BlSf%2F9bbm6sKvoXXwd0ByuAnj%2FCWFF8qj%2F5XQPUGsz3zgtPcJ5oXmJh%2Bai6GoasVBRtX8vNS4iXoaLaZPvgFk93mLzdqxEA6Rt%2B4DSsg%2BV003S07VhgMzQZpusUbEK%2Fosn5v%2FqLgfwA3Ou%2Bza%2FE%2BJKCdfcewCuD1Z%2FF0EENAhaK2ACXrparFuc3UPvd2fB2ZWukf4BU4Q9nKz25XM39u6Eeiq3n1%2F1In8cO8SPZ%2FOIY3J%2FZg%2BxzNPtpN%2FUQny2QtyCQVVrOZObV7HoZxq3Qp1e5dxtLlLdTmnN2pzYfYkHpWlYeU9k95SPupGX%2FFxVH%2BG94pq9%2Bs8ZstVX5huFb5hUBsSJ%2BwWvdgW71a7SQB6UcC44FWRAC7O0uX8RsXUOZ5o85s712f9X80K31mM5QAbkpyNImVxyW2AwkZLAFVwdMrcZHeEYk6Z9%2BcGn2VChHeXrz1pqy0wjMwqJ%2BIvQY6pgHwXP4tjhoK4dtlC%2FRGev%2FffsJTuWFIG59%2BHvWJn4hXtxBpAy1GMx%2FxTk2R11VwHOWPYkoS1biXf%2Bxnju7OEXj%2Fb8%2BKIfK2YCtn1grcclbAP%2Bi3xbO0GIHgxZjqbwPMaIOSFkMIjPePX8vCPhcBqrzhT9rm27rKZlZiThTZspwoq%2F1bml7ceUj6ht73YgTe4bmToGWUP3wD22gEG%2BYOXfkLyz5RLyXL&X-Amz-Signature=2b2737d2f75b0b43dc82889b154a28de1145ee790a497d915e7de43045ab0f18&X-Amz-SignedHeaders=host&x-id=GetObject)

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

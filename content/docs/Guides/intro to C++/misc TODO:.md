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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZOT7TVY%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T022244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDThm56P79fm9rlCmAyW%2FOxsl09fcRQDW3s%2F%2F2Mu0A%2FJQIgJurENHDk8C%2Fm43COGNs%2BVKckBsuOV7ftBYAtro4C8Ekq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDC8G62WKNodiHberqSrcA5QwWQcbOE6%2FOtp3Blc3Elw4WkKEhbQ68S3aTQvSM1UPGSZnxsnQD%2F%2Foiz7XsEh%2BVSvEc5J53VH597kXjPFJrz0%2Fd%2BsGhBQFFThStiuAinDDlVsUvW3BHIzhwJ6KErhd%2F%2BPLtlWc3CUdDWhhko3is8xBn4CvYHkVBHZX4A3loznFDVv3pMHrQGX2x6%2F%2Fh4KKmOyWQwz%2FnBcpZ6HRb5P0qHU6O9w0U3zcdvUYk56vS%2FewooI3sU2LUiOpvJ9WkojJFtkCh66f0U6WeOVO80ttWLJJcABQjblCJO%2FAoFSXhIpmM5b5VPS%2BcdPckSe9f1RUlCd1siFMRn1UvbiXs6AMwjtt3XA6nrYphV2ZoBGLg3qIffkqG4QvD9WTa5B1g7KWgJQ6GZLQbg%2BXx92Eu9mWjz3DWX41WrW5Y%2BajCpgWmQ3m3Hl%2FuJxWsIVvfM4bnl9rm3m0xxDF14RFz8PydbSEdd0hbtElAZ5LA8rC6963QU0jeng9TsWYa7fINfGpyCYlrabX2gLHBrO5ueHZ74nY5Swju%2Fix1oyhjQCeo1UuiMyvhvrtKutEKcqsUueah74fVuZznLM4K6vg4zi6BFT9pFryqinuy1Imon5IPp%2FlAJgwpRSdPl7%2BIu%2BRFcexMNXr9r8GOqUBAaXYjq9TG7SRmg%2BDuEDuc0zToQ346cRVecf34y505%2FBA8lD5ufnkywW3n8jUjlBiYBiHF82rAH0hUEqcIbLz1W0yMzqWQ9af5wuy8t3zbCt6JhODUgsGgD7xsSTiD3JP2t%2Bpns9QqNd2qx4zKmxKUMqvlExs74ddk6d2grKNZZJYZS4Y%2FDWI%2BRDi4p6X%2BarzB%2BCOE%2Bh3sRXlcbQ%2B8P8TtmqmIvMB&X-Amz-Signature=662297d2827357ee6c025b5ed3923fc9de763278e176bb1c705ad6bdf371e481&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZOT7TVY%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T022244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDThm56P79fm9rlCmAyW%2FOxsl09fcRQDW3s%2F%2F2Mu0A%2FJQIgJurENHDk8C%2Fm43COGNs%2BVKckBsuOV7ftBYAtro4C8Ekq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDC8G62WKNodiHberqSrcA5QwWQcbOE6%2FOtp3Blc3Elw4WkKEhbQ68S3aTQvSM1UPGSZnxsnQD%2F%2Foiz7XsEh%2BVSvEc5J53VH597kXjPFJrz0%2Fd%2BsGhBQFFThStiuAinDDlVsUvW3BHIzhwJ6KErhd%2F%2BPLtlWc3CUdDWhhko3is8xBn4CvYHkVBHZX4A3loznFDVv3pMHrQGX2x6%2F%2Fh4KKmOyWQwz%2FnBcpZ6HRb5P0qHU6O9w0U3zcdvUYk56vS%2FewooI3sU2LUiOpvJ9WkojJFtkCh66f0U6WeOVO80ttWLJJcABQjblCJO%2FAoFSXhIpmM5b5VPS%2BcdPckSe9f1RUlCd1siFMRn1UvbiXs6AMwjtt3XA6nrYphV2ZoBGLg3qIffkqG4QvD9WTa5B1g7KWgJQ6GZLQbg%2BXx92Eu9mWjz3DWX41WrW5Y%2BajCpgWmQ3m3Hl%2FuJxWsIVvfM4bnl9rm3m0xxDF14RFz8PydbSEdd0hbtElAZ5LA8rC6963QU0jeng9TsWYa7fINfGpyCYlrabX2gLHBrO5ueHZ74nY5Swju%2Fix1oyhjQCeo1UuiMyvhvrtKutEKcqsUueah74fVuZznLM4K6vg4zi6BFT9pFryqinuy1Imon5IPp%2FlAJgwpRSdPl7%2BIu%2BRFcexMNXr9r8GOqUBAaXYjq9TG7SRmg%2BDuEDuc0zToQ346cRVecf34y505%2FBA8lD5ufnkywW3n8jUjlBiYBiHF82rAH0hUEqcIbLz1W0yMzqWQ9af5wuy8t3zbCt6JhODUgsGgD7xsSTiD3JP2t%2Bpns9QqNd2qx4zKmxKUMqvlExs74ddk6d2grKNZZJYZS4Y%2FDWI%2BRDi4p6X%2BarzB%2BCOE%2Bh3sRXlcbQ%2B8P8TtmqmIvMB&X-Amz-Signature=d158aec537a9fe150166fa6aadf1714f9a098962e1e55afd597fae4e16baf0c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

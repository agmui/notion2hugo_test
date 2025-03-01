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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDEKRF3F%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T110135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCM8dqxA%2BZdfOiibAt3xZ%2BPMz7Y3zWFwjipvKLCXdUV6wIhAPWO%2FzCKqpGnVRDM06Ul9aUse%2FKPS2Cd%2BKbe5d0lAcRpKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtaR50oeUSgfYjyv0q3AOThECRSMa5VFjeNKNzbWa6nEjEPBv79NOD1Eop8qRTQjQO97SgE%2BdtMDJ0PKo3HglE3Xz0P7kIQbyNsQxW17dOMjQj0P%2B4%2FLf1nw1ibO%2B9EnbBJ41lAfci3RLm3VmGLqxHQoRnQldcI5dM6sGAO1BjF1FpCeReZ%2BpxTYzb3cjKkYX5CwT9ZdKR3HzJpSK02zsMIRa8SceFRidG8KPXmrqVLToPVxVhcw1FbYb7jfTNuZx0WDzOd2ycgwP4oDDtf%2FWlR1T1fu0KetfHsgiZ5X3%2BPTt7fZ6eAq%2FziDzBDYjXtjYB62isVWpCxzmGmIF2GJUldsmOxMJCruy%2F%2BiEt9ry9jSAHi3H9gFSEOxyjhqJHhJEuHmvzmPyqaI7qUQVFeV3fMrgm9HP%2BC%2BmZhhEIuwEFdVKLCYH6MJTJcb6DV39GQbZCNXicfAujDC3vpvmGmLyZQoaazbV%2BQIfaJI7HCCAA9wVbzvrb1mrQCaxvwtTJHEGzN3V8cpmx5Pk4hU06woomqwcPMfOX04VWBt2H3zmai0JHpYsPwPWXdpf4NjYGpuTMawErSuJP2SVPxY2LZX788IrEonjVmyV8QsT2cp%2FLYW5XniZWZn7WFg6gOMX9r3JhCObbdjmu%2FTRyKjDPuou%2BBjqkAXHaJJ8AOyAp1PetqVhMfuzzUsT8zwQ4XjYieq0sw3nk8C5qJhXeHaT0drLxtWWafIZzQDwFbz4d4YoZYA%2BBmksvo2sNSndxEEeU%2F2n6HoWT7bdKpfZVY02QnYL62yZoWYrV56Im1KVQQFOmL5AW%2BTzNpxLGK2rI4VpxRD%2BzVGeKt4EYrWH%2F9miondqBlys38OD%2BTXMdGtuBD%2BWmp3YYeQ%2FIqmOJ&X-Amz-Signature=ff2a2ca9c65671e207cae139d387f3f486ae6f7d40194ef49dbb86bed6534226&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDEKRF3F%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T110135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCM8dqxA%2BZdfOiibAt3xZ%2BPMz7Y3zWFwjipvKLCXdUV6wIhAPWO%2FzCKqpGnVRDM06Ul9aUse%2FKPS2Cd%2BKbe5d0lAcRpKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtaR50oeUSgfYjyv0q3AOThECRSMa5VFjeNKNzbWa6nEjEPBv79NOD1Eop8qRTQjQO97SgE%2BdtMDJ0PKo3HglE3Xz0P7kIQbyNsQxW17dOMjQj0P%2B4%2FLf1nw1ibO%2B9EnbBJ41lAfci3RLm3VmGLqxHQoRnQldcI5dM6sGAO1BjF1FpCeReZ%2BpxTYzb3cjKkYX5CwT9ZdKR3HzJpSK02zsMIRa8SceFRidG8KPXmrqVLToPVxVhcw1FbYb7jfTNuZx0WDzOd2ycgwP4oDDtf%2FWlR1T1fu0KetfHsgiZ5X3%2BPTt7fZ6eAq%2FziDzBDYjXtjYB62isVWpCxzmGmIF2GJUldsmOxMJCruy%2F%2BiEt9ry9jSAHi3H9gFSEOxyjhqJHhJEuHmvzmPyqaI7qUQVFeV3fMrgm9HP%2BC%2BmZhhEIuwEFdVKLCYH6MJTJcb6DV39GQbZCNXicfAujDC3vpvmGmLyZQoaazbV%2BQIfaJI7HCCAA9wVbzvrb1mrQCaxvwtTJHEGzN3V8cpmx5Pk4hU06woomqwcPMfOX04VWBt2H3zmai0JHpYsPwPWXdpf4NjYGpuTMawErSuJP2SVPxY2LZX788IrEonjVmyV8QsT2cp%2FLYW5XniZWZn7WFg6gOMX9r3JhCObbdjmu%2FTRyKjDPuou%2BBjqkAXHaJJ8AOyAp1PetqVhMfuzzUsT8zwQ4XjYieq0sw3nk8C5qJhXeHaT0drLxtWWafIZzQDwFbz4d4YoZYA%2BBmksvo2sNSndxEEeU%2F2n6HoWT7bdKpfZVY02QnYL62yZoWYrV56Im1KVQQFOmL5AW%2BTzNpxLGK2rI4VpxRD%2BzVGeKt4EYrWH%2F9miondqBlys38OD%2BTXMdGtuBD%2BWmp3YYeQ%2FIqmOJ&X-Amz-Signature=6baec56605cff92fb0b9c49addc60a949f23e3bdf84ecb4d9400e63d276baaaf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

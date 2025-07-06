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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NAF4FOJ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDrhl9zawOiAlq7SA1WY3%2BacJCqwDCx6efHTbVjE8weyQIhAIwKl7zLkf2MT7S68G5OJ%2F%2BWlEWU5B5E%2FK5Qr1ywdxesKv8DCGMQABoMNjM3NDIzMTgzODA1IgzIct7upDgpu5cVJNQq3AOvwzn0LLIU9VPyO29VSXYq%2Fms3tjzqDNGKnjjZLsjuHKEczhaXNrXufr5J0aHLdU30obt5kMFTQD0LpGsx163ykMJltJ78%2F7GmTMZMVD%2BmmREx8FdSt4q6%2Bpdj2TIhARMl623mRdR1zZVsozpM%2BnRN0qROhzp9ub7MiHjTVI2%2B0OuWmPUycV36GQZdiNKmgj17NY68gQhM7c3EVjZlJoT6QJZK1UF5EghF6Taub6hKmnM3tNWe3VUm56HnxcCjrwd2WaP%2BVOBL6fu%2B4W6GXOpMJOV0y%2FMRRW%2BoLFHoTuAUfSa50ntJWAvVukT06HcCtnsSMEuah0jabnRag4GchnDGSXKJJuOn9oR%2F4vqhovMo%2FIvi%2F9IiOJSQ3yykDCe%2B%2Fd0c0qbDWSAxriqFu6Nc2EIxWlMT2Dm5h4FcGxl3Mb3IYWsaCaWxNjGw0doncy6UYcJsibnxIaZagUg1Q%2Fy4aQ4DFxLWxRQDWymvzPbxsQTrItdCzD%2FWFjs5XE9gvi55o026jKraje5KC8xm%2BgCDU3X3xA9XAThT2fr%2BvY9qaqUu2Nr6Sd5Qe5veyvlDmsQKC3vvZBMat5F94J5kKVXKDIjIFaHvXfihY5NiUnkb8s4WzblboU524czHvwaylTCk5qrDBjqkAepW1XNofEKcntQN6U3GKcjl7OcGDFM4S9%2B0mf7lPfWOF0l3CoFgpOfLkGEIzFEZHRw7qcGb7%2BpAJ2%2Fap5IxdAvtb%2FmNr97R4G1d%2BsHqHx55ZAo5QltVm724RRyioUDICDTH0G4QrQCFSujlVX7NvzHxpO0MZciqHHiMrqzg2H7AmbpSQc3ik3oLwBcLQY9n22vWaSnEXU071pVIayrhkzAtC8uW&X-Amz-Signature=769238ee7ca7911b72b5650d9cbe0b6baa05088f82c29a95c77869d9019c5827&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NAF4FOJ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDrhl9zawOiAlq7SA1WY3%2BacJCqwDCx6efHTbVjE8weyQIhAIwKl7zLkf2MT7S68G5OJ%2F%2BWlEWU5B5E%2FK5Qr1ywdxesKv8DCGMQABoMNjM3NDIzMTgzODA1IgzIct7upDgpu5cVJNQq3AOvwzn0LLIU9VPyO29VSXYq%2Fms3tjzqDNGKnjjZLsjuHKEczhaXNrXufr5J0aHLdU30obt5kMFTQD0LpGsx163ykMJltJ78%2F7GmTMZMVD%2BmmREx8FdSt4q6%2Bpdj2TIhARMl623mRdR1zZVsozpM%2BnRN0qROhzp9ub7MiHjTVI2%2B0OuWmPUycV36GQZdiNKmgj17NY68gQhM7c3EVjZlJoT6QJZK1UF5EghF6Taub6hKmnM3tNWe3VUm56HnxcCjrwd2WaP%2BVOBL6fu%2B4W6GXOpMJOV0y%2FMRRW%2BoLFHoTuAUfSa50ntJWAvVukT06HcCtnsSMEuah0jabnRag4GchnDGSXKJJuOn9oR%2F4vqhovMo%2FIvi%2F9IiOJSQ3yykDCe%2B%2Fd0c0qbDWSAxriqFu6Nc2EIxWlMT2Dm5h4FcGxl3Mb3IYWsaCaWxNjGw0doncy6UYcJsibnxIaZagUg1Q%2Fy4aQ4DFxLWxRQDWymvzPbxsQTrItdCzD%2FWFjs5XE9gvi55o026jKraje5KC8xm%2BgCDU3X3xA9XAThT2fr%2BvY9qaqUu2Nr6Sd5Qe5veyvlDmsQKC3vvZBMat5F94J5kKVXKDIjIFaHvXfihY5NiUnkb8s4WzblboU524czHvwaylTCk5qrDBjqkAepW1XNofEKcntQN6U3GKcjl7OcGDFM4S9%2B0mf7lPfWOF0l3CoFgpOfLkGEIzFEZHRw7qcGb7%2BpAJ2%2Fap5IxdAvtb%2FmNr97R4G1d%2BsHqHx55ZAo5QltVm724RRyioUDICDTH0G4QrQCFSujlVX7NvzHxpO0MZciqHHiMrqzg2H7AmbpSQc3ik3oLwBcLQY9n22vWaSnEXU071pVIayrhkzAtC8uW&X-Amz-Signature=2abb2d638e463720243ca187e1a6ddf25d6e3b307c5430a323226662b3c74dc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

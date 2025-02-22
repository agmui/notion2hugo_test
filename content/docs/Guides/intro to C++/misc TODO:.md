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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRX6NIH4%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T180840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Bb8w5cBS%2FQCHHUa80kdCznHez55VgZFbHAY0Hp7tc6gIgXKuYQDtJ5xVW3WwBM2jcDiu5chOuY2QdcFpbsVXGtwsqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPq2QZmq4HLq48I43SrcA2lCuD9Uz3vbiHdxrcZSYawIcbxb7OwB%2FuTV6Q64QLAiHadcexuxKRRdW9djC8V%2ByvgJuvrfo5%2FdMwEiQdIIqosR0zA17u%2FzZICjxWNMSS3kj8VxhIBsBsh1SgqD9t7MXG8d6vu7wO9hosSO4xE36RyGqh%2BCENWxMBYVBgyOni02WD7AeUKKFmx8VOsLwbdNowFPcBjSIW0BT1RMmGJBnqdDVK25RiH97E8pxG5Bw8st%2BeULaiYlId9c1mzaIZ5CyIaDz%2FGo%2BBsTW5np2oStOHFJObHhZxq3tjRmdE02S0gyfllvC0FsG59J16lCf66ClW3Gl7qeWV%2BpaytbdegWwxgKIOhl76n2%2B%2F7t8KdyupDIcSVn9%2B9AHJ1dWKDG49NwBM9PhQT%2F3Z3iPXzLq4VFsunlcq57q5rU4DTONJNGqaepFr9h4%2BkKbXPDL6vE7g75pYgwnMbTFdT3EOeVRb4FQrM8v8KrEITa6QrJo3PUTSZ%2FwLR%2BDcn0ch4uRZ7x%2BgmO3cSM0M%2BXZ4H2iQGQIyU7zanqXmLp0Q02Lxb%2F5ckhZkkKbjhaj%2B2xRpePAJIAskkIPN32QmSrEK32BBJtiptaYY9vMWNqPyDOQWot%2FlkzMaRgMqUouce5MdY7iaszMInn570GOqUBV7bj%2FL4oUdAFRAmG%2BDVcw19x00UP%2BVudw%2FEWe7jqwtUd0YyzBZJ2acUAaMWL5NFUrOhT%2BFb5tnKgBaRCou7ZCsXpM4UAqNcI8GG17RyQkNscaq5%2BQK4YNt8tSFqOBSG036pdZL2wsJACDNqyziuFIoO0qBgIz6ER9rYDOmo30sqnYKAFcRff9DQh9KLvFEl4q7TeyWfGopaNV7EVkDXxiZQ7heB%2B&X-Amz-Signature=862b430128162c53bf76f72bd1f36e5bc914326941d10e317dce4c74705da8e9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRX6NIH4%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T180840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Bb8w5cBS%2FQCHHUa80kdCznHez55VgZFbHAY0Hp7tc6gIgXKuYQDtJ5xVW3WwBM2jcDiu5chOuY2QdcFpbsVXGtwsqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPq2QZmq4HLq48I43SrcA2lCuD9Uz3vbiHdxrcZSYawIcbxb7OwB%2FuTV6Q64QLAiHadcexuxKRRdW9djC8V%2ByvgJuvrfo5%2FdMwEiQdIIqosR0zA17u%2FzZICjxWNMSS3kj8VxhIBsBsh1SgqD9t7MXG8d6vu7wO9hosSO4xE36RyGqh%2BCENWxMBYVBgyOni02WD7AeUKKFmx8VOsLwbdNowFPcBjSIW0BT1RMmGJBnqdDVK25RiH97E8pxG5Bw8st%2BeULaiYlId9c1mzaIZ5CyIaDz%2FGo%2BBsTW5np2oStOHFJObHhZxq3tjRmdE02S0gyfllvC0FsG59J16lCf66ClW3Gl7qeWV%2BpaytbdegWwxgKIOhl76n2%2B%2F7t8KdyupDIcSVn9%2B9AHJ1dWKDG49NwBM9PhQT%2F3Z3iPXzLq4VFsunlcq57q5rU4DTONJNGqaepFr9h4%2BkKbXPDL6vE7g75pYgwnMbTFdT3EOeVRb4FQrM8v8KrEITa6QrJo3PUTSZ%2FwLR%2BDcn0ch4uRZ7x%2BgmO3cSM0M%2BXZ4H2iQGQIyU7zanqXmLp0Q02Lxb%2F5ckhZkkKbjhaj%2B2xRpePAJIAskkIPN32QmSrEK32BBJtiptaYY9vMWNqPyDOQWot%2FlkzMaRgMqUouce5MdY7iaszMInn570GOqUBV7bj%2FL4oUdAFRAmG%2BDVcw19x00UP%2BVudw%2FEWe7jqwtUd0YyzBZJ2acUAaMWL5NFUrOhT%2BFb5tnKgBaRCou7ZCsXpM4UAqNcI8GG17RyQkNscaq5%2BQK4YNt8tSFqOBSG036pdZL2wsJACDNqyziuFIoO0qBgIz6ER9rYDOmo30sqnYKAFcRff9DQh9KLvFEl4q7TeyWfGopaNV7EVkDXxiZQ7heB%2B&X-Amz-Signature=6f29a63ce0ccfa7ee94a92c8e52a978f8069f4ef4318011c13f9e1c918f7fb09&X-Amz-SignedHeaders=host&x-id=GetObject)

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

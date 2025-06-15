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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPNLP5PD%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T200913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCc79%2B8SYtMUCUdjA%2BzibJoyWSqSALSMFO9D0PvP9VYawIhAKfMmClYTJjgVCM0CeGdZ4jf6K5aSArzbzhXjS0qIlqRKv8DCE0QABoMNjM3NDIzMTgzODA1IgwG6zzJXiJ8DM%2FoULAq3ANdiVMIg%2BSk0uJrAr68Nouuq60Xzuu4Pf%2FyfvmbpFKv2LmqfsgGnuOhywliU2eTwSujBv%2B%2BCCbwb5R008gTDG9iV4X1u94%2FYl2ztfIg201MI1J18MdK%2BrmNGMrSb1rknIatVpdxFIsj1C4Yig6HDcnY%2BDgbAAcrq49m%2F4zZgtLlejA696PzDpekYh5ur2TjIuuupfYoxNr2%2BlCfiV8C7zQP2fBSGtfnx84geNEUl5Eim6qlzXu8SdUsMsVPOVRjU%2B3iWEQM3hTANfMrH%2BRQLsnzCmU3CY4knSbIHR1AvQ1cLv38XWz1fJCrS584dY2OtiwK8SxSmjcKdNx6p9PJHXKXtbiDaVsD6UDp6eTQ4rXR5Zw7oOmllmq09b4grCq4GGYfpxsXcrTB4HW8Zj53YWIsQlmEuD%2FiOS9EkrQavhRiLuvi9GIemW1pXlpbElSLUdldwQu04JeL96s7L18JWkSHT1FMlsfwfLuuNt%2BfmpQqS8IW6pNM%2F1rgOQ%2F%2FWp1OwdzQCrRAELKj8ghT0AjKXNhW4hP8VJkBan1kT3g81uONr6uJHsXzInVykk2%2FSekEo9Cq4qwos0biJ8hg2BwqOiyY7r8n0fG69KQKEeYY7Xf0XuTf9j5imsUjXG9ILzCZz7zCBjqkAeLwn55T8WxYcm7GWigBruz4aUTY3lVRY4g0QadLSKBSjgcEEUNlF08lhkrzbXgUjZD2MYHIUbHvMqwTsQma8Cg7KbdwRRfeFFx%2BTzA9YGzLeO9Azs1RW6H7F8ioPCfCegfkyzpLW8Ay83qFva7akd0mxddfgHI60JUyrZ6zcwo16V5PnDREr59I198MDJzs2VkLFSBHy6a4uNbuC60EHoU9ooll&X-Amz-Signature=590c38aad11c04c3f8133d44fa56cd0e04a30c3cfd0752e60cdae4230897147f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPNLP5PD%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T200913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCc79%2B8SYtMUCUdjA%2BzibJoyWSqSALSMFO9D0PvP9VYawIhAKfMmClYTJjgVCM0CeGdZ4jf6K5aSArzbzhXjS0qIlqRKv8DCE0QABoMNjM3NDIzMTgzODA1IgwG6zzJXiJ8DM%2FoULAq3ANdiVMIg%2BSk0uJrAr68Nouuq60Xzuu4Pf%2FyfvmbpFKv2LmqfsgGnuOhywliU2eTwSujBv%2B%2BCCbwb5R008gTDG9iV4X1u94%2FYl2ztfIg201MI1J18MdK%2BrmNGMrSb1rknIatVpdxFIsj1C4Yig6HDcnY%2BDgbAAcrq49m%2F4zZgtLlejA696PzDpekYh5ur2TjIuuupfYoxNr2%2BlCfiV8C7zQP2fBSGtfnx84geNEUl5Eim6qlzXu8SdUsMsVPOVRjU%2B3iWEQM3hTANfMrH%2BRQLsnzCmU3CY4knSbIHR1AvQ1cLv38XWz1fJCrS584dY2OtiwK8SxSmjcKdNx6p9PJHXKXtbiDaVsD6UDp6eTQ4rXR5Zw7oOmllmq09b4grCq4GGYfpxsXcrTB4HW8Zj53YWIsQlmEuD%2FiOS9EkrQavhRiLuvi9GIemW1pXlpbElSLUdldwQu04JeL96s7L18JWkSHT1FMlsfwfLuuNt%2BfmpQqS8IW6pNM%2F1rgOQ%2F%2FWp1OwdzQCrRAELKj8ghT0AjKXNhW4hP8VJkBan1kT3g81uONr6uJHsXzInVykk2%2FSekEo9Cq4qwos0biJ8hg2BwqOiyY7r8n0fG69KQKEeYY7Xf0XuTf9j5imsUjXG9ILzCZz7zCBjqkAeLwn55T8WxYcm7GWigBruz4aUTY3lVRY4g0QadLSKBSjgcEEUNlF08lhkrzbXgUjZD2MYHIUbHvMqwTsQma8Cg7KbdwRRfeFFx%2BTzA9YGzLeO9Azs1RW6H7F8ioPCfCegfkyzpLW8Ay83qFva7akd0mxddfgHI60JUyrZ6zcwo16V5PnDREr59I198MDJzs2VkLFSBHy6a4uNbuC60EHoU9ooll&X-Amz-Signature=75510e740f0556ec2b700de79e9299c3ba81cc3fc1f0cb76c458588022ba956a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

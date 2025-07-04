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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674QJ5KBU%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T061353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDGcIBRXpR0eXhxNPXLpJ2Sv4OZqHNiuKTyNIC3T1MzmQIhAKEj8tsy3kQyqDwnlxE34dy0sljO4rqrjUnyOz8MALUCKv8DCCYQABoMNjM3NDIzMTgzODA1IgzmErbdECyHp3QhwVgq3AMYTwZUD4SSkx8Vksosbbdo6UOKVNCR8Rhm33lYDdfCC2WuCkXA4K3rCvIic1liX8NBNEY6aK8ojD2DdyQ3oFbIxgPE0AR%2F6rsqWb%2BfHgnut%2BTar4aqbYov%2FWtiibj7Kveqej9D5GOQwYzs3rIgD9fGqI%2FeH5rfYvz2wAT61S0SXr%2BA%2BwRjvJ1bMsd4HBVXTohlsb6yTc0Fgv2kIJpWENHtS4%2FAjYGQnRnZdPvk%2F4ne6LczZ1cZsZwuIaKt%2FIg2Mtl%2BJIc0%2B0JAvycaVi2ejA%2FJZ%2FOpEz%2FyhkWPyCjzHE1XUNluuAiqB72pcr0WQb8AMIVzvd%2BUBLJIE%2BGpgeIlYnnHWHJoi8%2BoYiP6uQFwboX%2BPE4dfLtG4IG9GyjDtJz1atsjYipjZvlh4NUjVRfYqvFa%2FATAiEGXZzoAEhV2eHq850nG7GRhwQY2JrgtWHZmPFXR2fkSPYeNm6yKBd9GFzTnXSkcVtWJV2KANiVUGj8dJKxSpxkWI6HXNttmQ4OR%2FF1yrHZ6rp1SbmjRsEW4%2FdvykYjkaVKAX6eecK3U9mOt0nP2iHIsI9De99vxhFjlwm%2BWUkRqmIG9DZl2U1Fx9CUqojim2whezdE22%2BRRiINvQDsnuusyNeQQ4eNcsDDVtp3DBjqkASvYLHHCDIBzRA%2BpCxQTRp%2Bvo2bTAoZQV8lRrdtMrv4%2ByCdU92T5iqZDbLKHqFPKwiexXVLLIoBnPPklk6oHA0rdZezVsWCKgs9jVCp%2BhWdmM2I9Os0Sn84r%2BZ503sLJtgFtVT%2BWXalALESH4cqBgD6JYRNPSr7YW%2Fk2G%2F%2FdurpgXqT%2BIrZ7y%2FY5YPZhn%2Fb2FCi304dvXu0GB6JdaJPUJDCYSnQm&X-Amz-Signature=95dac9a2bb32c40a219dc783c55fb97fa7af47dd9c500ce11cbe34d2589fc824&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674QJ5KBU%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T061353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDGcIBRXpR0eXhxNPXLpJ2Sv4OZqHNiuKTyNIC3T1MzmQIhAKEj8tsy3kQyqDwnlxE34dy0sljO4rqrjUnyOz8MALUCKv8DCCYQABoMNjM3NDIzMTgzODA1IgzmErbdECyHp3QhwVgq3AMYTwZUD4SSkx8Vksosbbdo6UOKVNCR8Rhm33lYDdfCC2WuCkXA4K3rCvIic1liX8NBNEY6aK8ojD2DdyQ3oFbIxgPE0AR%2F6rsqWb%2BfHgnut%2BTar4aqbYov%2FWtiibj7Kveqej9D5GOQwYzs3rIgD9fGqI%2FeH5rfYvz2wAT61S0SXr%2BA%2BwRjvJ1bMsd4HBVXTohlsb6yTc0Fgv2kIJpWENHtS4%2FAjYGQnRnZdPvk%2F4ne6LczZ1cZsZwuIaKt%2FIg2Mtl%2BJIc0%2B0JAvycaVi2ejA%2FJZ%2FOpEz%2FyhkWPyCjzHE1XUNluuAiqB72pcr0WQb8AMIVzvd%2BUBLJIE%2BGpgeIlYnnHWHJoi8%2BoYiP6uQFwboX%2BPE4dfLtG4IG9GyjDtJz1atsjYipjZvlh4NUjVRfYqvFa%2FATAiEGXZzoAEhV2eHq850nG7GRhwQY2JrgtWHZmPFXR2fkSPYeNm6yKBd9GFzTnXSkcVtWJV2KANiVUGj8dJKxSpxkWI6HXNttmQ4OR%2FF1yrHZ6rp1SbmjRsEW4%2FdvykYjkaVKAX6eecK3U9mOt0nP2iHIsI9De99vxhFjlwm%2BWUkRqmIG9DZl2U1Fx9CUqojim2whezdE22%2BRRiINvQDsnuusyNeQQ4eNcsDDVtp3DBjqkASvYLHHCDIBzRA%2BpCxQTRp%2Bvo2bTAoZQV8lRrdtMrv4%2ByCdU92T5iqZDbLKHqFPKwiexXVLLIoBnPPklk6oHA0rdZezVsWCKgs9jVCp%2BhWdmM2I9Os0Sn84r%2BZ503sLJtgFtVT%2BWXalALESH4cqBgD6JYRNPSr7YW%2Fk2G%2F%2FdurpgXqT%2BIrZ7y%2FY5YPZhn%2Fb2FCi304dvXu0GB6JdaJPUJDCYSnQm&X-Amz-Signature=eef5f23834518d9451daf59655cc6b0c8d22aa0f2ddb602ef15073b325b8b97d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

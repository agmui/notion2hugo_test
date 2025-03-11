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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HUTGLRW%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T070834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCw07H61BvKYYL4HcJipRc2QNgXJObqGd658hurtt2EzQIgH7xo%2BPJy8tsmQSL20eZM4QWwXF8l5MfCKAZ2LEouVW0qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIqROSJ6hlO1xAYOYircA53zBjgdzyFySTDixj5GmrTRsd9sQbdFt7hKTIZe%2F4duU4XTrZIcPTfFJCCN2xJ%2FqfacpkbeB4IcGqpvaNMlAJU9oZt7R0KCSQCpVCdSzxFCaqHv21Up1ntXlkgw374lctasCiCzTaTSKbANtfWIAxtL1myZQBD0R9jYaKzJ7Vg7shgV5XFewyJ21VBAA7awHNZfjj0EM1kYHEkTN%2BB3%2B0YVHqt973KGJny1rScbbgdtiBv1PMbI3yt9jKe4j6tLeOZDOhw32vbQGixg08ZHiRhyElatK2zi%2B37Onq2U3MySpsXcmEzFk7bOl%2B4MHI1DFPI%2FZ1p1defxLY8ebPQ2%2FqK9mbEaKcG6X%2Bf1mQ%2BHVm%2BHm%2BdbO3Po39r3Ev2w2bF%2FpCxHkOAYSjJ0JGzlB9rYgagEVno2ae98vQ5t5Ak%2FfLClToSm8iVJehgbdYOqclsXtU9W2YxdGF0dNHjLuNR47XYNUyftRCVtOlJe5%2Fa1sCo66c%2BqtrEXxL9NBsxw3hFeifhg60gk%2FBjCZTFDFyjSL1kKls44YOzaVRaFZc7oByBj%2FvF222ITQweA94rxaapEWtKRDLkr93LNOJcXrEG3FQKmrwy88waPWayPlprNtbUoKwjXPK5HyEoBSQe%2FMJewv74GOqUBXqLb6fTWMiUonhuDo2SEMob68JgzG3hxMjRce8qrir6jungFIi9zgecV0%2BLktCkehgQP%2FAetdBNwuq4LCAfXflQejOguCooeeKwM8HHM%2FM9T2gbig51SN21XMTIXt19G5KDiCH%2BLdBs%2BW1FN0EIqa89gFy72ENcBgpVeqxP1Cz7wA%2FEzwt%2FPz7b17wuhcNuyb3K66CYPUTwg%2BdidNZlK0La%2BbBqE&X-Amz-Signature=3176173d653b6a215258590075e4719e0e80d0055e54a5cdb6b1d571f92f39ed&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HUTGLRW%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T070834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCw07H61BvKYYL4HcJipRc2QNgXJObqGd658hurtt2EzQIgH7xo%2BPJy8tsmQSL20eZM4QWwXF8l5MfCKAZ2LEouVW0qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIqROSJ6hlO1xAYOYircA53zBjgdzyFySTDixj5GmrTRsd9sQbdFt7hKTIZe%2F4duU4XTrZIcPTfFJCCN2xJ%2FqfacpkbeB4IcGqpvaNMlAJU9oZt7R0KCSQCpVCdSzxFCaqHv21Up1ntXlkgw374lctasCiCzTaTSKbANtfWIAxtL1myZQBD0R9jYaKzJ7Vg7shgV5XFewyJ21VBAA7awHNZfjj0EM1kYHEkTN%2BB3%2B0YVHqt973KGJny1rScbbgdtiBv1PMbI3yt9jKe4j6tLeOZDOhw32vbQGixg08ZHiRhyElatK2zi%2B37Onq2U3MySpsXcmEzFk7bOl%2B4MHI1DFPI%2FZ1p1defxLY8ebPQ2%2FqK9mbEaKcG6X%2Bf1mQ%2BHVm%2BHm%2BdbO3Po39r3Ev2w2bF%2FpCxHkOAYSjJ0JGzlB9rYgagEVno2ae98vQ5t5Ak%2FfLClToSm8iVJehgbdYOqclsXtU9W2YxdGF0dNHjLuNR47XYNUyftRCVtOlJe5%2Fa1sCo66c%2BqtrEXxL9NBsxw3hFeifhg60gk%2FBjCZTFDFyjSL1kKls44YOzaVRaFZc7oByBj%2FvF222ITQweA94rxaapEWtKRDLkr93LNOJcXrEG3FQKmrwy88waPWayPlprNtbUoKwjXPK5HyEoBSQe%2FMJewv74GOqUBXqLb6fTWMiUonhuDo2SEMob68JgzG3hxMjRce8qrir6jungFIi9zgecV0%2BLktCkehgQP%2FAetdBNwuq4LCAfXflQejOguCooeeKwM8HHM%2FM9T2gbig51SN21XMTIXt19G5KDiCH%2BLdBs%2BW1FN0EIqa89gFy72ENcBgpVeqxP1Cz7wA%2FEzwt%2FPz7b17wuhcNuyb3K66CYPUTwg%2BdidNZlK0La%2BbBqE&X-Amz-Signature=879f3d72a6a7fbdc75325c1581a4ce88cd9e1b3c3e39d42e7dfac3b858fe3c6f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW3KHZQN%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIGpSPb1NnhsjtP9eQr2sFUsnT%2BzRXalXmbF4bJL1vscFAiEA1SsWo4E%2FTbnQSYqGRAdZbJe58KKWwaDP6l4nrBoq%2FoAqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHA1MdA0rI0Sg16KFircA9qogYPWimx0Xb3Hvxq%2BLTj4OPOv29W2pH0Hy1E6ez%2BhwA2hvTeBJl4YyqXksArRCMHoRMiR1fstKJYj9ezbbh%2BbjORrUUXeyIk06wuwRC2%2Bjf6VW5PISumfdE8sdLssKKD0t8EJ8BPKFT7PByd2sRYp5SJjv7aF7hiRwTIP1OY59AqiHRXLx82ktYJHHNuK5iaQWvV7HL%2FA%2FpV0mTrDwClen4AM6sVZz7xlnMx8incof3moz9I2vQwZTLBVFfnw22Dcvu06h482GDs8viAR5cNEYc8btI4YAZkb%2BFDTJ3S1rusLw1xf6%2BuKCY6PNCEaXtAqG3eEfFKTYD4NoR6%2Bwc6wlxe764nY6PBo95ziW1q3OsCKDUlxKIHnqD2TaG5griCzhELTnXI6q4n3A7zufHMxFw5c3Z4QPhy9lB40SaMW6xPIVdTv7ebGEw6xlUDwBm92PQNBNjLIWTlxPpQJavIvFpLFV7kqu8Li0MgLBXQOjv8c9wkrc50NdhZGwVH2VbgRykZU%2FxJNBkE%2Bu1QYl3FvCXFa92ii5T0mKRVShMjdo3iOjnJsvAaAmFqNjgCdUL0HlbJxxJzVjEbLgNtlGPmyhxqgqSQtxOgMIymV6uAdf3C7IGMk4lAxNqRxMI%2FDicEGOqUBAcJCrN4LxXzJ0bcGv3vjb%2FHyBqihIgGkJdXTk%2BfGyKYZFBL5wfrW7BgvitNfm37jCyeS%2F2APwm95lhnyQrBOmp2wbxLVADcRhkBOhFNHp4RtLqq3WVYwGsjUOkLEa4jy%2FPbHzcp0h486iHOw9h7t4%2FPSbGrIKEtZKOUmJh%2F7iv4XP%2BSdetO9PpySBLrCHnqwlzzC4VvRHpAYZRGgtOCv%2BK7ekuSo&X-Amz-Signature=f9169ecfa4f723c528ab2a2dfb00eda5f524470b6ebdd34f21fec69029d07e87&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW3KHZQN%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIGpSPb1NnhsjtP9eQr2sFUsnT%2BzRXalXmbF4bJL1vscFAiEA1SsWo4E%2FTbnQSYqGRAdZbJe58KKWwaDP6l4nrBoq%2FoAqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHA1MdA0rI0Sg16KFircA9qogYPWimx0Xb3Hvxq%2BLTj4OPOv29W2pH0Hy1E6ez%2BhwA2hvTeBJl4YyqXksArRCMHoRMiR1fstKJYj9ezbbh%2BbjORrUUXeyIk06wuwRC2%2Bjf6VW5PISumfdE8sdLssKKD0t8EJ8BPKFT7PByd2sRYp5SJjv7aF7hiRwTIP1OY59AqiHRXLx82ktYJHHNuK5iaQWvV7HL%2FA%2FpV0mTrDwClen4AM6sVZz7xlnMx8incof3moz9I2vQwZTLBVFfnw22Dcvu06h482GDs8viAR5cNEYc8btI4YAZkb%2BFDTJ3S1rusLw1xf6%2BuKCY6PNCEaXtAqG3eEfFKTYD4NoR6%2Bwc6wlxe764nY6PBo95ziW1q3OsCKDUlxKIHnqD2TaG5griCzhELTnXI6q4n3A7zufHMxFw5c3Z4QPhy9lB40SaMW6xPIVdTv7ebGEw6xlUDwBm92PQNBNjLIWTlxPpQJavIvFpLFV7kqu8Li0MgLBXQOjv8c9wkrc50NdhZGwVH2VbgRykZU%2FxJNBkE%2Bu1QYl3FvCXFa92ii5T0mKRVShMjdo3iOjnJsvAaAmFqNjgCdUL0HlbJxxJzVjEbLgNtlGPmyhxqgqSQtxOgMIymV6uAdf3C7IGMk4lAxNqRxMI%2FDicEGOqUBAcJCrN4LxXzJ0bcGv3vjb%2FHyBqihIgGkJdXTk%2BfGyKYZFBL5wfrW7BgvitNfm37jCyeS%2F2APwm95lhnyQrBOmp2wbxLVADcRhkBOhFNHp4RtLqq3WVYwGsjUOkLEa4jy%2FPbHzcp0h486iHOw9h7t4%2FPSbGrIKEtZKOUmJh%2F7iv4XP%2BSdetO9PpySBLrCHnqwlzzC4VvRHpAYZRGgtOCv%2BK7ekuSo&X-Amz-Signature=dba3b32bd5a4e38611ad65bf7ac20a0b7f990617b6ad54d18ca9be5043fd285a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

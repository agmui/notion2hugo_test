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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZIOLU2G%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQC%2FRtaxWXdFgjq%2FtTf1ApPH7IqBoRLHDIhILTVh9F%2BClgIgRwD0UHWT7Cfe2F7Ul4d2EbplaGGrufEzqgdnsuIfSNkqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGnLDCrzrghEUv0K3yrcA1INq7CgmKEnSagYhz74Tp25%2FsxM%2B9D6ciSut7yLs9zHNVPvm30vu5jr7D09JJnC90pqy2NJ3AvR95tuieLEy%2BfPUJjdB2XtwaCzIiO0TrbYaxiMK1LMsDW%2Fix6noFCOT8sTMyLjqVlVcKWe6JOl10dyxOBI%2Bm%2F%2Bb1AQh2ECwXpyVrPyCASfk2Tx22mgRWGFUSYfdHME80XAqw1Tnqvd8ndP4L4UL3%2F1CIy2u00xE8PH%2BXPMTWnRotILidkvNAhDUCrUXucn%2Bg6PMoI8s7%2FbzGAEPBPf%2FNtg9Ch7xMq9RMr80s3gSbmjw34we84VqhCenhuWQxSlVARgsTAcoA0o0fqp3bQ65pDY8D8KktoDS5TOQwcmXIvAT0BM08ysyYwseKngDQH3VUUjL7lft72gMqapjsqIafzEDQA86R9TW8FGIFyr9bmP2JnJaETeuH9%2Bk%2FX1u1bu6fO2KRddIDy2L2vAiAAe5qr3vAmXY%2FrtwCrormqO0XR%2FxM%2BDAYd3aBM5uBokb7eiStMl0InygSE4x3g3YHCjMuPz9O6YRplzz%2B9XbJfowfM8Kk%2B%2FKBPEBgiFAwdnvFI2l29tT7fq3A4dq9LFNegPbsYtaH8z0gLmEGiH20fP5SlVmv%2FVqD%2FQMP%2FY5b8GOqUBwhz%2FEhkmFD1crQESwPteFXEMbm1ftIUMwMV1z74fpxPY395lQI15sOjLKTha1RIbyUyFB4rcm9l22rSycZssz4sK55LJkeV8QkPAhHn2dqr0vPpdHQ0UqQz74FdcdehNZa7sOWHj7VACd%2F0eO9N8IkDp7NO%2FsDX0%2B5C0xq%2FF7q%2F%2F9YhbJChL9BJVmFYHE5Y%2BsGzsxdOBPVqSA5liInaZ46aHRZUd&X-Amz-Signature=03fcaabfcd4cc2f14765e2fbc7c17ba4cd43e2372019b59066df2508bf49e35a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZIOLU2G%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQC%2FRtaxWXdFgjq%2FtTf1ApPH7IqBoRLHDIhILTVh9F%2BClgIgRwD0UHWT7Cfe2F7Ul4d2EbplaGGrufEzqgdnsuIfSNkqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGnLDCrzrghEUv0K3yrcA1INq7CgmKEnSagYhz74Tp25%2FsxM%2B9D6ciSut7yLs9zHNVPvm30vu5jr7D09JJnC90pqy2NJ3AvR95tuieLEy%2BfPUJjdB2XtwaCzIiO0TrbYaxiMK1LMsDW%2Fix6noFCOT8sTMyLjqVlVcKWe6JOl10dyxOBI%2Bm%2F%2Bb1AQh2ECwXpyVrPyCASfk2Tx22mgRWGFUSYfdHME80XAqw1Tnqvd8ndP4L4UL3%2F1CIy2u00xE8PH%2BXPMTWnRotILidkvNAhDUCrUXucn%2Bg6PMoI8s7%2FbzGAEPBPf%2FNtg9Ch7xMq9RMr80s3gSbmjw34we84VqhCenhuWQxSlVARgsTAcoA0o0fqp3bQ65pDY8D8KktoDS5TOQwcmXIvAT0BM08ysyYwseKngDQH3VUUjL7lft72gMqapjsqIafzEDQA86R9TW8FGIFyr9bmP2JnJaETeuH9%2Bk%2FX1u1bu6fO2KRddIDy2L2vAiAAe5qr3vAmXY%2FrtwCrormqO0XR%2FxM%2BDAYd3aBM5uBokb7eiStMl0InygSE4x3g3YHCjMuPz9O6YRplzz%2B9XbJfowfM8Kk%2B%2FKBPEBgiFAwdnvFI2l29tT7fq3A4dq9LFNegPbsYtaH8z0gLmEGiH20fP5SlVmv%2FVqD%2FQMP%2FY5b8GOqUBwhz%2FEhkmFD1crQESwPteFXEMbm1ftIUMwMV1z74fpxPY395lQI15sOjLKTha1RIbyUyFB4rcm9l22rSycZssz4sK55LJkeV8QkPAhHn2dqr0vPpdHQ0UqQz74FdcdehNZa7sOWHj7VACd%2F0eO9N8IkDp7NO%2FsDX0%2B5C0xq%2FF7q%2F%2F9YhbJChL9BJVmFYHE5Y%2BsGzsxdOBPVqSA5liInaZ46aHRZUd&X-Amz-Signature=4e5268c8a714f28b9cfbb723f063a4f64607c9b000904a76d3974c1fd2dff4e4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

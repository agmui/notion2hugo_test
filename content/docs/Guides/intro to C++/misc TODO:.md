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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGS7IDWM%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T061223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCG9m6aocjzp220C7GHWF3Vfu0CfolK%2FEIeAcbLeyqhcgIhAJ34GpY8LBMaVOQtPEuSReXWQIS4kZKtL3KQJvYF%2F1PJKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKQAf252do971Oj74q3AMyOu%2Fm8gpQlRmrw7EEFBcM34WHFcqic1VLdfUjMFpaovUtcZI1sZh8GshVBbMQS2QmqFo8bGbsMFE%2BmH8bsnUC1djF1RbQ6Z17QiwO4zRFSg%2BlTO4HYzRIyoSunoxVq55Wpy%2BOrwf2e19gTcymQ7kC2%2BOjpZtAweEQVYqbEaNukDqusXwEfnlufOeZLq2xubKF%2FXUT1UDBqy3Nj2CRFwRSI294lpxjF5dm1Zus6eou9rvp%2B5CvfYeaJzaM5RIydwt6ZHJEVQ%2BdaUVAAFv4dZbeq78NrgbJn48F%2FSZzfA13Xc85rp5N4H628ZiS04TjzfqB53aHMkOcqvni5%2BW53cKN4JcIiGjr2CiAUq9RNiXySuupxEqeDrUWyS59y4nMoIOG4kSFNiSGRsXCOrc2srRMZaQuvW%2F0hsDukbzOf1sLCkkeMo0xsf1zmvGvdZBRqNb%2FmeJhb9oiqoJOCbZWxWYETsUbCNil98q6SY6atZz8a7jvp2h3bydEIrjD%2BZSldGfi74jetuYneRM2AP6Es%2Bi68P3AdpNGmu0pWUF%2Fl3rcPURbY1yBgbunBTvnMSFQ61SqaQDx3BqZd8cdwQUFluXggdVlWhle%2BHXiYUlgTcu0NsAUui%2BrxMU9jjikrjDii7O%2FBjqkAWovMuDalhUdRTCiMTqjZUhKlmfV1Wg4QxYNKphnD0fb5K1Oqts2bQYm1JXzY2CN0gZio9OvjDrmiaWr5jyFJMPpzCM4umpLQocc8W%2FJsvdwVwdO6S%2BWF2aBSqX%2B4ovCtWDGPnF%2B04sJh%2B8jpZR8JqyRfneGi9r1prXxlpFKLx6jv4LV39F%2BvY2hROXNsYrOEf8C8TpgBV4%2B%2B4sNku1asXwQHP6r&X-Amz-Signature=50f792c644948ea2147d1999eb47969fc56ed0afdd606724906c9c7a941f6992&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGS7IDWM%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T061223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCG9m6aocjzp220C7GHWF3Vfu0CfolK%2FEIeAcbLeyqhcgIhAJ34GpY8LBMaVOQtPEuSReXWQIS4kZKtL3KQJvYF%2F1PJKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKQAf252do971Oj74q3AMyOu%2Fm8gpQlRmrw7EEFBcM34WHFcqic1VLdfUjMFpaovUtcZI1sZh8GshVBbMQS2QmqFo8bGbsMFE%2BmH8bsnUC1djF1RbQ6Z17QiwO4zRFSg%2BlTO4HYzRIyoSunoxVq55Wpy%2BOrwf2e19gTcymQ7kC2%2BOjpZtAweEQVYqbEaNukDqusXwEfnlufOeZLq2xubKF%2FXUT1UDBqy3Nj2CRFwRSI294lpxjF5dm1Zus6eou9rvp%2B5CvfYeaJzaM5RIydwt6ZHJEVQ%2BdaUVAAFv4dZbeq78NrgbJn48F%2FSZzfA13Xc85rp5N4H628ZiS04TjzfqB53aHMkOcqvni5%2BW53cKN4JcIiGjr2CiAUq9RNiXySuupxEqeDrUWyS59y4nMoIOG4kSFNiSGRsXCOrc2srRMZaQuvW%2F0hsDukbzOf1sLCkkeMo0xsf1zmvGvdZBRqNb%2FmeJhb9oiqoJOCbZWxWYETsUbCNil98q6SY6atZz8a7jvp2h3bydEIrjD%2BZSldGfi74jetuYneRM2AP6Es%2Bi68P3AdpNGmu0pWUF%2Fl3rcPURbY1yBgbunBTvnMSFQ61SqaQDx3BqZd8cdwQUFluXggdVlWhle%2BHXiYUlgTcu0NsAUui%2BrxMU9jjikrjDii7O%2FBjqkAWovMuDalhUdRTCiMTqjZUhKlmfV1Wg4QxYNKphnD0fb5K1Oqts2bQYm1JXzY2CN0gZio9OvjDrmiaWr5jyFJMPpzCM4umpLQocc8W%2FJsvdwVwdO6S%2BWF2aBSqX%2B4ovCtWDGPnF%2B04sJh%2B8jpZR8JqyRfneGi9r1prXxlpFKLx6jv4LV39F%2BvY2hROXNsYrOEf8C8TpgBV4%2B%2B4sNku1asXwQHP6r&X-Amz-Signature=956556066aec2d2b662a1c8c77220c9f2b55b24d04e64b6284fe8fe7bce694e9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBLIFBPA%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T100838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8gZEQ%2BlThYXE7%2B9rDihz591ueEJOgLdkGdAupgBy7VAiEA1w5R5ixqYONgU%2F8WWxbZHhUITIE8MRtsFOz6MpPHZFYqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEi0vGC2%2BiIyFYC62yrcAwFBihmBDtSwJHkOZ%2BMmJmNZbXx%2FN9KU4coTQta6sPFS5Kki%2BwpUAro1pqttHFYhYSe1Dfcc9rW043VfPzx1hj17zvds7q6eEviyQieL39VShPAurneA6yQFI2Dze0YmVtZj1hIgc9P0ts1exrJxL7d8TrSjDVRqKKyl1ZTgjPkopC6T6fcP7Mctzl0k%2BWgBTJ9GaIBmUlWWWk7iflbGbtFnN542ydmGo5CvhVbmSdgTvXCMraQJYCzRHqMjNkZAIL3Kf0xf7baAAf6bbMgV%2FY2ZFxi9hrfzfDnSYPAbeo1ZkseNhMlBbXTdPnZrAAbYTM6cXtwJt%2BNjHLS9QH1220ozfjYleSlBGHx3BArRSM%2FOVD9vE6fpCFs6d%2FBOEKU1d7tuB9erFJMiAPBCf0LR8D2kRI7VztxrfZS1SsZwh%2Fdx2exYZcLU19PohGsISEd3z0R4TFgzip8VrvscP1Wielmq5BcohmykC%2Fm94XXVzgIK09BehyZXFd9jFERbusQFJ4zg5QsmnOrfjDq698sk9fZJebOSf3DhxwrAyNtrsTyvGwfrmBt0MnfCWyC9HrqK7y4No7cvJ5wY8uc5xaDwlL68pDpBFxS6fHcP6TEjY5X97jS7D1a8CLIUSWU7MJuSp70GOqUB5k5%2FzV43qIKV%2BU%2F7OfS48QyLAOhE7XsSIvAXYr6N9SJqtoTgl7taBAiXNaWpORdAeheR8gdS3yu5PEuGuFSimszoGU0VHfxWGj%2FFBdltcvcSXoqaQkozzah%2F%2BhanoJ%2B5J7MpUDOV5zWaj3InaicrCFZDfyodK0BW%2FTc8S9txTDdJOwx9lbgqRKjYVP7ClkFM2et2o7oHp%2FyhUm40f11C9vc%2FDuoL&X-Amz-Signature=5824dd02e4ca28fe6364770c97ea3e75d387ab77b3f2a3cd072b673e90077bff&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBLIFBPA%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T100838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8gZEQ%2BlThYXE7%2B9rDihz591ueEJOgLdkGdAupgBy7VAiEA1w5R5ixqYONgU%2F8WWxbZHhUITIE8MRtsFOz6MpPHZFYqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEi0vGC2%2BiIyFYC62yrcAwFBihmBDtSwJHkOZ%2BMmJmNZbXx%2FN9KU4coTQta6sPFS5Kki%2BwpUAro1pqttHFYhYSe1Dfcc9rW043VfPzx1hj17zvds7q6eEviyQieL39VShPAurneA6yQFI2Dze0YmVtZj1hIgc9P0ts1exrJxL7d8TrSjDVRqKKyl1ZTgjPkopC6T6fcP7Mctzl0k%2BWgBTJ9GaIBmUlWWWk7iflbGbtFnN542ydmGo5CvhVbmSdgTvXCMraQJYCzRHqMjNkZAIL3Kf0xf7baAAf6bbMgV%2FY2ZFxi9hrfzfDnSYPAbeo1ZkseNhMlBbXTdPnZrAAbYTM6cXtwJt%2BNjHLS9QH1220ozfjYleSlBGHx3BArRSM%2FOVD9vE6fpCFs6d%2FBOEKU1d7tuB9erFJMiAPBCf0LR8D2kRI7VztxrfZS1SsZwh%2Fdx2exYZcLU19PohGsISEd3z0R4TFgzip8VrvscP1Wielmq5BcohmykC%2Fm94XXVzgIK09BehyZXFd9jFERbusQFJ4zg5QsmnOrfjDq698sk9fZJebOSf3DhxwrAyNtrsTyvGwfrmBt0MnfCWyC9HrqK7y4No7cvJ5wY8uc5xaDwlL68pDpBFxS6fHcP6TEjY5X97jS7D1a8CLIUSWU7MJuSp70GOqUB5k5%2FzV43qIKV%2BU%2F7OfS48QyLAOhE7XsSIvAXYr6N9SJqtoTgl7taBAiXNaWpORdAeheR8gdS3yu5PEuGuFSimszoGU0VHfxWGj%2FFBdltcvcSXoqaQkozzah%2F%2BhanoJ%2B5J7MpUDOV5zWaj3InaicrCFZDfyodK0BW%2FTc8S9txTDdJOwx9lbgqRKjYVP7ClkFM2et2o7oHp%2FyhUm40f11C9vc%2FDuoL&X-Amz-Signature=3bcd41753da1572fb4c17d29be95be435231753e7598258564df85cf6807db33&X-Amz-SignedHeaders=host&x-id=GetObject)

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

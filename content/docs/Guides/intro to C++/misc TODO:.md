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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMWA4DS7%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T091031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2BZFuxPMh8vrYj%2FcEerJTh8096eI1%2BEPiXuhVP%2BdL%2FEAiAM0R1fiOf3GKGB57n9NPDS9S9BmfAJZalEmrI%2BcnWY7yqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGr0Wp%2FFMl1YYSwrUKtwDi0YCdBkbvNPlbCEo5m%2B1%2Bi7dqLFmLvjrG7oyRh3axdkQS9JzPjlz5tYUhjNu90lawB%2BaYCownhqv8sO4C%2BxAO2DnFnl6iRHqUkYI3JNmxabPiynSvqylad90qZJ6hz9MT9sb3UVRHq%2FtBwvnmt5bHZBMm%2BxmbaNDWdxOLe8WwAvYQJWX9mLZM121OU6%2BlDgcKk%2FjmcoBDSwDO4FXw8IvT0s9N4lQrq4pJoYXjQdJESpoFagJ5dr84kMjpT38A7yzvc8m5KtDqSqq8reWoX43pmEA3yNwrGLGOvAsGAzj7dyPq3cpKsa2Ce0IxVrKo8CyrxzVD70KEAfWBd%2F5nhJQdVX0g%2B9LlrjQ8oo800Iqh3rDpzCyYysx24IQ2Xc6smoVOZHJm%2BzeaTmHgup4vjtzlfVCtj6A0SnuZO7njbe%2FbxjIr7Q%2BHtGHjVO0J3FRQoYPgzMiA7WyB7lvQBPYzMCUBlNSiNA1mAYqg6J9VRKv83pEJ4AwNFug3shP4fYXGlNzB2L6ONlFKTvxsOAi3mmuror%2BWkFNiHd8v%2B5YNKbCb8hkBTsFeZ5An9mQLxJTJReN6mvoLxwH7LkpC0oMf15KIh1lT3SlpkPRIBwpsE01gr60N%2FLiaCBgUSK%2FqCYw%2FdTJwgY6pgEAR0OpPQBN3l9JLT93alBMyqyNixjYs8VOtVg9ZSTRRaGZn4AO9S1lpHj%2Buh7yV4CW%2BH2d6AHViZl7mOlM5UjhcrvAaS3yZPkNxo0QMZzW5S6nx4Z4nF7E4xslnWeeXVFL8hEO3eW29kiEvvHbIcqcdnbxlFG7LFcjSp%2FLB2smpFQI9fxJvW3CBqgFgTGJOnQEGBMbt4eL81XyDVydAAsgEsh9JJDA&X-Amz-Signature=8efa73f996dd5b7714eab03b42b5ac4b01426f91f66bf8878dce71abaf7e134a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMWA4DS7%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T091031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2BZFuxPMh8vrYj%2FcEerJTh8096eI1%2BEPiXuhVP%2BdL%2FEAiAM0R1fiOf3GKGB57n9NPDS9S9BmfAJZalEmrI%2BcnWY7yqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGr0Wp%2FFMl1YYSwrUKtwDi0YCdBkbvNPlbCEo5m%2B1%2Bi7dqLFmLvjrG7oyRh3axdkQS9JzPjlz5tYUhjNu90lawB%2BaYCownhqv8sO4C%2BxAO2DnFnl6iRHqUkYI3JNmxabPiynSvqylad90qZJ6hz9MT9sb3UVRHq%2FtBwvnmt5bHZBMm%2BxmbaNDWdxOLe8WwAvYQJWX9mLZM121OU6%2BlDgcKk%2FjmcoBDSwDO4FXw8IvT0s9N4lQrq4pJoYXjQdJESpoFagJ5dr84kMjpT38A7yzvc8m5KtDqSqq8reWoX43pmEA3yNwrGLGOvAsGAzj7dyPq3cpKsa2Ce0IxVrKo8CyrxzVD70KEAfWBd%2F5nhJQdVX0g%2B9LlrjQ8oo800Iqh3rDpzCyYysx24IQ2Xc6smoVOZHJm%2BzeaTmHgup4vjtzlfVCtj6A0SnuZO7njbe%2FbxjIr7Q%2BHtGHjVO0J3FRQoYPgzMiA7WyB7lvQBPYzMCUBlNSiNA1mAYqg6J9VRKv83pEJ4AwNFug3shP4fYXGlNzB2L6ONlFKTvxsOAi3mmuror%2BWkFNiHd8v%2B5YNKbCb8hkBTsFeZ5An9mQLxJTJReN6mvoLxwH7LkpC0oMf15KIh1lT3SlpkPRIBwpsE01gr60N%2FLiaCBgUSK%2FqCYw%2FdTJwgY6pgEAR0OpPQBN3l9JLT93alBMyqyNixjYs8VOtVg9ZSTRRaGZn4AO9S1lpHj%2Buh7yV4CW%2BH2d6AHViZl7mOlM5UjhcrvAaS3yZPkNxo0QMZzW5S6nx4Z4nF7E4xslnWeeXVFL8hEO3eW29kiEvvHbIcqcdnbxlFG7LFcjSp%2FLB2smpFQI9fxJvW3CBqgFgTGJOnQEGBMbt4eL81XyDVydAAsgEsh9JJDA&X-Amz-Signature=6540fcd981b2d6cbbe00746ec569f661ae79477bb091dcf1abff2da75608c542&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

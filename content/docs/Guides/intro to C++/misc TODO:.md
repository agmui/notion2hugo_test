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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ43HNJZ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T110713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVeeWGUCoAVg1cI4Y9opB6BVp50L5D5HQ7V%2F%2F49S8pvAiAJ1q%2B9UnkeqskuZ0isHzMWX6HjRNnwhAZv32F5jZlz0yr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMgiZ%2BVl2%2Bv9q60GzoKtwD9Zej8rLlgVaW1Z96hcdPnep55bkq3SVinoM8O8VozNArWYVp0wixEsyum9icWm7TbrN2REZde%2B%2B6vfULjH6MuGvMFua0MiVtitlGRZp5Va6zSaC7Bf99nR1l7p8Gj6AEMfC2Xm74LxN32y3s62UQjpgeudpy0iyf857g3xzUbMEhyw2%2ByzYfFfLbne5CJ%2FqWyHu3bbomJhgcARRQ%2BsObOzgTN735VQVLueFgdEsPp%2BQyC762J7lfs6MKvEqp4iv3ktAxmUvu3nUYqlcpBDwKCP%2BAlpN1O8RWvpmSEDVlUYWuUEhEBwVyuRgiQkSXilHUTGcNn%2FDqqQ7Lp7C7FUUcNDnE2NlRJcIwexEkDL67PqVbowbu921xa1nUXp4330LEQyxXpl5xvEst48BnKORmAyDiwmxhusHl31F21pJ7JUv4IZ1k2JHVWdFPjOAgVLflLCdkTixyKSjzfD30Gzb8UMzAnl5DXf1%2Blbp66nn%2B1VCQ3Hi3FLIeGYq8cMtXxjx6witV3NqvwUGAexsWSEO3ByvSeT0NHYCwAc9oBZ0cmYSyohJd44153r4qCoF0F1%2BKILO4X41pHkdlxUhlLYnwAGzW4hthNMRzKcrFRsag%2FF5hULYNTlITOABH22owkK%2BDwAY6pgE1uOd2EivDKYRZ0AJOzj15KuNFFxxdcf4JyEMpzdwQmOtdHPJnC%2BVxYiCWnMAEaSsoV3wMo5HyHRolUT5jNLTbzSa1K41clN2Or32FgSgKFnsF6uY9dlge2O7pEW4IHYfD8XsOIqRvYtJUi2XrLEjf5u%2FZgjQoj0W4TdWdPtmpnnh4msNfwvc4gILPAS93ND9uGYVO0E2482C8VbAcbxFGYYCMWM52&X-Amz-Signature=9b33bec3e0af29126d34e191c1cb0edfbe4cef7e443f457f8d959cb8ea6f4e13&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ43HNJZ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T110713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVeeWGUCoAVg1cI4Y9opB6BVp50L5D5HQ7V%2F%2F49S8pvAiAJ1q%2B9UnkeqskuZ0isHzMWX6HjRNnwhAZv32F5jZlz0yr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMgiZ%2BVl2%2Bv9q60GzoKtwD9Zej8rLlgVaW1Z96hcdPnep55bkq3SVinoM8O8VozNArWYVp0wixEsyum9icWm7TbrN2REZde%2B%2B6vfULjH6MuGvMFua0MiVtitlGRZp5Va6zSaC7Bf99nR1l7p8Gj6AEMfC2Xm74LxN32y3s62UQjpgeudpy0iyf857g3xzUbMEhyw2%2ByzYfFfLbne5CJ%2FqWyHu3bbomJhgcARRQ%2BsObOzgTN735VQVLueFgdEsPp%2BQyC762J7lfs6MKvEqp4iv3ktAxmUvu3nUYqlcpBDwKCP%2BAlpN1O8RWvpmSEDVlUYWuUEhEBwVyuRgiQkSXilHUTGcNn%2FDqqQ7Lp7C7FUUcNDnE2NlRJcIwexEkDL67PqVbowbu921xa1nUXp4330LEQyxXpl5xvEst48BnKORmAyDiwmxhusHl31F21pJ7JUv4IZ1k2JHVWdFPjOAgVLflLCdkTixyKSjzfD30Gzb8UMzAnl5DXf1%2Blbp66nn%2B1VCQ3Hi3FLIeGYq8cMtXxjx6witV3NqvwUGAexsWSEO3ByvSeT0NHYCwAc9oBZ0cmYSyohJd44153r4qCoF0F1%2BKILO4X41pHkdlxUhlLYnwAGzW4hthNMRzKcrFRsag%2FF5hULYNTlITOABH22owkK%2BDwAY6pgE1uOd2EivDKYRZ0AJOzj15KuNFFxxdcf4JyEMpzdwQmOtdHPJnC%2BVxYiCWnMAEaSsoV3wMo5HyHRolUT5jNLTbzSa1K41clN2Or32FgSgKFnsF6uY9dlge2O7pEW4IHYfD8XsOIqRvYtJUi2XrLEjf5u%2FZgjQoj0W4TdWdPtmpnnh4msNfwvc4gILPAS93ND9uGYVO0E2482C8VbAcbxFGYYCMWM52&X-Amz-Signature=2f90518afa11c4ae072b5960b56ed001f5ba12e9772e7eda749a6842a6ebc817&X-Amz-SignedHeaders=host&x-id=GetObject)

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

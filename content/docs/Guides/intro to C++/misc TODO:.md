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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CCFL22B%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T003525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIGkoPVmnvZ2SR5xVAo869Mh7c6lfJMk5qJJ42AXEwqZJAiAh8juf2p8y1ZHO%2FjYpZSUp%2F%2B0ZteQmNBRqD0pSU6N%2FZir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM5%2BRNjw2suu5nVgt2KtwDF%2Bc4BbLa%2BhVP3f%2FrjYvYeDNDdpu9NNjyQy4TSjSQ46aZgWJpS4aN8hUBCb%2Bd%2F8646rhNqSOzDiPUSGL7VGTowcuwyXhi%2B4LKsKynxgheuxtrYRSEvqYj0Z%2Fc5l6maNDd2tBvPKhZrmiYCUc2IcbpQBlsbzp9DA6hU7KFqO4updht75uZkbnx%2BMXiozlJ8ebD0nrC9KnIfjcRl%2FSUB8rs%2BBosYXQStGIr9vbTA1%2F7d4vr6y5ObwlpmOcVZE1h3g%2FNzb5WjJBX8r3v3lVYJuR%2Fn5TGy41LMTaSLYn10mG0v5JyyROw4AiF%2FUGjUguLRq9iizUx2N66D6dOZVup6C2IK%2FH%2FEfp2X4%2FPVGl%2B%2BvREo8JSzrRh%2FjfR4Yzdv7ovKy8VgmcmcWlipfkEN0RCZ0zpomEb%2BhAsgiW5GNjTaKRfVcEDrQ7w%2FQ2IkhDGHApGIXIWqVPZ40HoX9Ve9CzOOBTBIwk91bU99PnPfMiVazVQSQr3gDJAdTJinywTs3EqzFt%2FDiMYX%2F%2BoUsgXKvimqyD1NLM4JMhPQbzzubIykOpFdWZXL2XA%2BInC7JuWhgZTzW%2B%2FjdO7coBbza5PwuRHaOxPMWMUeLGLtIHDynlykntyiU8NfrwIfBCGUUAe0N4wo7S%2FvQY6pgHL%2B%2BvcK7QFjYNBRrbhznLurivj6q54nwU4DBWaHfEGQGIO4D72daSjIcgKvtyDipSY5qLrMN%2FHPadPH5RjJeNFIw972IVFMY9ebCwISqk33PJTRK3hWjqbhxeGXaTX6IKCytNRqSar1M%2FUoENXJJDgyyOMTZurqYFztpwn%2BdE2RQ2g3PZZgO1CCxKXCkir5gceQ4AXU0gCfm2PLfu6EDtMKyszEt3m&X-Amz-Signature=dd57d1c61705f3c2494393c3ec56133b97cdbacb9099a3b06cd8bca3d5c57669&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CCFL22B%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T003525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIGkoPVmnvZ2SR5xVAo869Mh7c6lfJMk5qJJ42AXEwqZJAiAh8juf2p8y1ZHO%2FjYpZSUp%2F%2B0ZteQmNBRqD0pSU6N%2FZir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM5%2BRNjw2suu5nVgt2KtwDF%2Bc4BbLa%2BhVP3f%2FrjYvYeDNDdpu9NNjyQy4TSjSQ46aZgWJpS4aN8hUBCb%2Bd%2F8646rhNqSOzDiPUSGL7VGTowcuwyXhi%2B4LKsKynxgheuxtrYRSEvqYj0Z%2Fc5l6maNDd2tBvPKhZrmiYCUc2IcbpQBlsbzp9DA6hU7KFqO4updht75uZkbnx%2BMXiozlJ8ebD0nrC9KnIfjcRl%2FSUB8rs%2BBosYXQStGIr9vbTA1%2F7d4vr6y5ObwlpmOcVZE1h3g%2FNzb5WjJBX8r3v3lVYJuR%2Fn5TGy41LMTaSLYn10mG0v5JyyROw4AiF%2FUGjUguLRq9iizUx2N66D6dOZVup6C2IK%2FH%2FEfp2X4%2FPVGl%2B%2BvREo8JSzrRh%2FjfR4Yzdv7ovKy8VgmcmcWlipfkEN0RCZ0zpomEb%2BhAsgiW5GNjTaKRfVcEDrQ7w%2FQ2IkhDGHApGIXIWqVPZ40HoX9Ve9CzOOBTBIwk91bU99PnPfMiVazVQSQr3gDJAdTJinywTs3EqzFt%2FDiMYX%2F%2BoUsgXKvimqyD1NLM4JMhPQbzzubIykOpFdWZXL2XA%2BInC7JuWhgZTzW%2B%2FjdO7coBbza5PwuRHaOxPMWMUeLGLtIHDynlykntyiU8NfrwIfBCGUUAe0N4wo7S%2FvQY6pgHL%2B%2BvcK7QFjYNBRrbhznLurivj6q54nwU4DBWaHfEGQGIO4D72daSjIcgKvtyDipSY5qLrMN%2FHPadPH5RjJeNFIw972IVFMY9ebCwISqk33PJTRK3hWjqbhxeGXaTX6IKCytNRqSar1M%2FUoENXJJDgyyOMTZurqYFztpwn%2BdE2RQ2g3PZZgO1CCxKXCkir5gceQ4AXU0gCfm2PLfu6EDtMKyszEt3m&X-Amz-Signature=5decce6e177c96ff159ba85e87aa961cbcde634e1310a1aaf8cbcefb49236405&X-Amz-SignedHeaders=host&x-id=GetObject)

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

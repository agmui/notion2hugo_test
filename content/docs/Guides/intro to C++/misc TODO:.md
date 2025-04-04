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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCY56BU4%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T181058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuYbVTqq8VtVdEfLKuV9KnkgN1N7VFwMij5h%2FCbuXxVwIhALCA3WUGV%2BBcEPSKkZXqGvr3wt7h%2BCE2%2Bpaxfu5f6xOnKv8DCBsQABoMNjM3NDIzMTgzODA1Igw8snvBwBtB8Yzl9GIq3AOoolST%2FeWIUHj%2BfHa1FgqTBrah7umApNxxHsLcXAEHl%2FNJEyBj%2B99uIV8rQvE%2BxOkO2rtNMvFKrvyP%2FzWqcDGttuVXzKn8GEXEU4zXa0hmpzVM79u%2Fo3jIT0G%2FmNrC5gTRrbKa8CHL3gsdmi7b4zqCEKHxYDLGaogM8Qq3RJBkGKRkj%2BPulLaARWNFgj4mssBjLSgHWjJ87bh3CXUBK5Jn3G0QalGQlF6DFRmvDmaLslhc%2FnhBnDFWc3bnXt9BwAYes5bDDSXjzU%2BivZdP4dQHfKiYr7%2BmK7xk8Y3IOhJikU8W64slalE15L28YaJ5Kd8UAkH4u%2FTuBOUnYVh9009908y8Q5v63hNx1vJFCpirlqcjd3QHrEfIOk1miz2me5KYrlTQugpR7cJ75CccBG7HUO4SW5RkeJc9BW3N71OtgcWeiDD4keDZ4l5FnA7jmQuH7wtrfSCADs6a%2BBJRcSipma9UBUxJ%2F3ox7K2PBXOuW%2FnSFLbBSZiuQ0mTkKnMSjfMT5darcj2spiPrifTIz9Rrhiw5xCJV7MZdM26lDpXXEkoDU2ODrDA77oscKoru7IML6ZoMxuaHERvGmP5aQ%2FqBB3U6VRrP92gBkMSnS8A9LUUG9XYsorXz5%2BzbzCTuMC%2FBjqkAVA%2BBPbLVmCWhKrNeGJEZ7ZhKQkjUL7OkNY6q9AZalShrL%2Fsc0UK7hdWLk5dO0boZWo6FJr8ltRTTr%2FSLwzScCBpAqszMWbD%2FfJ8DHGrp5nDA0qTRotjYfqaSjP5IrsdUAMpbDCGkYyeO%2FCc6n6gCI%2FogWpG2HBMRSMViozQSEtJ78mXzs9FXQV5ShyYyLtgO8JZ43X6Svdq8Rci4KuNfxeA5it1&X-Amz-Signature=d165b51b792c2f199b2a92f0055914118016a49339be7151143cddd5e4afe608&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCY56BU4%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T181058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuYbVTqq8VtVdEfLKuV9KnkgN1N7VFwMij5h%2FCbuXxVwIhALCA3WUGV%2BBcEPSKkZXqGvr3wt7h%2BCE2%2Bpaxfu5f6xOnKv8DCBsQABoMNjM3NDIzMTgzODA1Igw8snvBwBtB8Yzl9GIq3AOoolST%2FeWIUHj%2BfHa1FgqTBrah7umApNxxHsLcXAEHl%2FNJEyBj%2B99uIV8rQvE%2BxOkO2rtNMvFKrvyP%2FzWqcDGttuVXzKn8GEXEU4zXa0hmpzVM79u%2Fo3jIT0G%2FmNrC5gTRrbKa8CHL3gsdmi7b4zqCEKHxYDLGaogM8Qq3RJBkGKRkj%2BPulLaARWNFgj4mssBjLSgHWjJ87bh3CXUBK5Jn3G0QalGQlF6DFRmvDmaLslhc%2FnhBnDFWc3bnXt9BwAYes5bDDSXjzU%2BivZdP4dQHfKiYr7%2BmK7xk8Y3IOhJikU8W64slalE15L28YaJ5Kd8UAkH4u%2FTuBOUnYVh9009908y8Q5v63hNx1vJFCpirlqcjd3QHrEfIOk1miz2me5KYrlTQugpR7cJ75CccBG7HUO4SW5RkeJc9BW3N71OtgcWeiDD4keDZ4l5FnA7jmQuH7wtrfSCADs6a%2BBJRcSipma9UBUxJ%2F3ox7K2PBXOuW%2FnSFLbBSZiuQ0mTkKnMSjfMT5darcj2spiPrifTIz9Rrhiw5xCJV7MZdM26lDpXXEkoDU2ODrDA77oscKoru7IML6ZoMxuaHERvGmP5aQ%2FqBB3U6VRrP92gBkMSnS8A9LUUG9XYsorXz5%2BzbzCTuMC%2FBjqkAVA%2BBPbLVmCWhKrNeGJEZ7ZhKQkjUL7OkNY6q9AZalShrL%2Fsc0UK7hdWLk5dO0boZWo6FJr8ltRTTr%2FSLwzScCBpAqszMWbD%2FfJ8DHGrp5nDA0qTRotjYfqaSjP5IrsdUAMpbDCGkYyeO%2FCc6n6gCI%2FogWpG2HBMRSMViozQSEtJ78mXzs9FXQV5ShyYyLtgO8JZ43X6Svdq8Rci4KuNfxeA5it1&X-Amz-Signature=2fa80057eb365d5506ba9a9f447e9e997bc696bf79085c841db6f47d3d218f7d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

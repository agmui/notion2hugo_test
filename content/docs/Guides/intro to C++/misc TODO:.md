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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK2KWNMG%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T090806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuC7R4dWseFVcAqzcd5XT7XEwcqKYj06TiGMb3gFxcOAiEAtomqUq09i%2FcC6cvleSGrj5UepnUl0aOAG7%2F8vhJNHVwq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDNNyQv3%2BjnB8vhJ8pyrcAzyUdub8Mpp7JVSfpLUUqTwM4xQnPuPC8wl28Kdp2M0G2md1K9y1%2BJjEL5AY2wO3IQjWiRYEIHQQ7KDh%2F%2FVOTMat2wxvj28rEk18Q4AtpIzLnapYwBAEudigbAavc0WhY7C36NDE%2F9vnnYxoc6F%2Bu5KsbjmSlT6oo3BdG1zuS5j2LstEPEgjllugmvdZHyQCGeSLjcSyH1Qyqu1OHYAmR5CJT6J9kxkOuWrEB3lKXVw2%2FOH%2Ft%2B%2F%2FdXMbyhVa%2BpwWhyWJKjc%2FqJsGPPP%2FjlCKJp38leeJypVq4WJTQI21%2B2R2YuUxZSwFiFlzqqy72nl3kTq2IxwHYuY52sG237U6e6I6PbuUpHG5p2uPIgA804eI9%2Fa7mwMyvkT93OkpJO1PSdsSj27tu%2FuhzPnYXBv7O2aPIURHG5yd%2BxSovCPEzMREsHm6K4J1Xlt53ch3CFsrtl%2Fmy%2Fh7QDKqCNVWrjGXefWfViqHlmDlUnaSIrkmkgEE6oDj7Oe%2BfS6RLYLbEJSX8iOImgke%2F%2FbciniB1vdMTcRhnCo3GhyFYZWMtNSRRtpOzCg6Ao%2FwQvgMrVkm%2Bwe6nYwkngCnItAK1x3EaTEbuwRlPNkOwfkoW%2FMFvUz3XjtKxhdTdnSB1EnbQwAFMPHgoMEGOqUBWVVFFg%2F49o87zJzq1KO4JZtj9M9Opbbm2BkMoS2rWTav8Ewn%2Bj%2B26Kp9dSfvf5FgP6FCLa%2F9hkjnVMVi6sStllwrsOYOLnL0e%2FcEapPua0ihY%2FzXi2UVd4BsvgyBoYfCC8KQdR4V%2Fm74fiM0GDcA2UFhMg1VYYo1BwjIsTN5fHCS9ybSPuDaCUO9Tpjgx8P3lPwbM0b5iKuvcSTRpiBNgR4KBCZf&X-Amz-Signature=ec07fe0e6a6623b206fdd276a5810623a7aca455e7b1ad4960ee932094dcc79a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK2KWNMG%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T090806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuC7R4dWseFVcAqzcd5XT7XEwcqKYj06TiGMb3gFxcOAiEAtomqUq09i%2FcC6cvleSGrj5UepnUl0aOAG7%2F8vhJNHVwq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDNNyQv3%2BjnB8vhJ8pyrcAzyUdub8Mpp7JVSfpLUUqTwM4xQnPuPC8wl28Kdp2M0G2md1K9y1%2BJjEL5AY2wO3IQjWiRYEIHQQ7KDh%2F%2FVOTMat2wxvj28rEk18Q4AtpIzLnapYwBAEudigbAavc0WhY7C36NDE%2F9vnnYxoc6F%2Bu5KsbjmSlT6oo3BdG1zuS5j2LstEPEgjllugmvdZHyQCGeSLjcSyH1Qyqu1OHYAmR5CJT6J9kxkOuWrEB3lKXVw2%2FOH%2Ft%2B%2F%2FdXMbyhVa%2BpwWhyWJKjc%2FqJsGPPP%2FjlCKJp38leeJypVq4WJTQI21%2B2R2YuUxZSwFiFlzqqy72nl3kTq2IxwHYuY52sG237U6e6I6PbuUpHG5p2uPIgA804eI9%2Fa7mwMyvkT93OkpJO1PSdsSj27tu%2FuhzPnYXBv7O2aPIURHG5yd%2BxSovCPEzMREsHm6K4J1Xlt53ch3CFsrtl%2Fmy%2Fh7QDKqCNVWrjGXefWfViqHlmDlUnaSIrkmkgEE6oDj7Oe%2BfS6RLYLbEJSX8iOImgke%2F%2FbciniB1vdMTcRhnCo3GhyFYZWMtNSRRtpOzCg6Ao%2FwQvgMrVkm%2Bwe6nYwkngCnItAK1x3EaTEbuwRlPNkOwfkoW%2FMFvUz3XjtKxhdTdnSB1EnbQwAFMPHgoMEGOqUBWVVFFg%2F49o87zJzq1KO4JZtj9M9Opbbm2BkMoS2rWTav8Ewn%2Bj%2B26Kp9dSfvf5FgP6FCLa%2F9hkjnVMVi6sStllwrsOYOLnL0e%2FcEapPua0ihY%2FzXi2UVd4BsvgyBoYfCC8KQdR4V%2Fm74fiM0GDcA2UFhMg1VYYo1BwjIsTN5fHCS9ybSPuDaCUO9Tpjgx8P3lPwbM0b5iKuvcSTRpiBNgR4KBCZf&X-Amz-Signature=10ef8f3fdacbf4717900aa004b57333e048ad44f4780f603fa74a2b023bdab9b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN7J7TRP%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T070924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIGTBceHLbBJa4qZTP5%2FcN%2FKpqsfrhccQ%2BXWff3N1J4Q2AiEA1XyAxCaF5FJ1YUQq3%2FqqUS2zTpXU4v24kbG0YN2JNxcqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOfwwhrxo7Z8OUvJDircA2erUK1NMxWIPvPZO0bX0t%2F56bpaBMBTZkmZ1HXCgpC2%2BJoKCn0Xm%2Fa8ez0oq26Th6nF1uT17GcOwWeTFfR01uQoxdpcjigsyVzMnhCdFWCXxQoKGrUa0q%2BL2%2B66duLyzrs%2FREVfe12LCC5Gv5JYuIQxm4Tx5%2BCH044ZsCtjDfCDTMZSC4k%2FDNqtWSP3IggxuyM6LXgzgaTnetbK6%2Fl4B%2B7VutwuVonaCSpH5c1FpGEVYkPuGQPUFU%2FoBIy8IlcGEoj1edoGndZMVpQ07aGvbbCpNFEHE9gf3J%2FQ4juH10nsx69AfYKbgr4DVevd0McLbvkxziboesdZW0m8oduFa8%2Bnb5JIO0SdKn1wDTN077w1vy6i0fU9Kp%2FZwqv7swj6%2BUlwOxrezsLb4mBzYSUaRarjblUaS5OEOqnhQDO8YggI%2Fc8pJfO1oJziPVri5bOIEMskqt5X3uME13jLNXS9lUzAvziiL5QaRcub2aDQQDHu636VDl8uPAmNqRsZrMHVprV%2FXAQf8jGeyYjPLr%2BGbPtPan9V6PVqWpurlZoz6kvutFWPfOYiDIRh5ZVCflHiNEoBqlZqqmQ2t%2FISSC6aLMNsNyVyALYGiodeMwBjsp9GE4uSohQG%2BK4MApXbMPPYl8AGOqUBcPqeVczGARWDEx6xLC6BtD8g67dF9S%2BxkenmYVUJN7z0EkGEusmK7Yzy5mmZOP1jmcGV6ZA01UZcNRO9b47EClXYkCm9EoAZ%2F98dEfsDbwnhjG9dYeL1mkHa7bCVEdJX4803q%2FBNpqNP%2FVWrCSSlbIY1X8OhZ%2FBeiLcBQT3JigOMOHZF2H0fUZENWt8EdsKsG%2F5RolfF35TMGBEzlora9T%2Fd8z4%2F&X-Amz-Signature=8ac9f8b8e2b427cf61107df3fa9b118fa7a1853e7cc7acd1ec7aa0068ca92773&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN7J7TRP%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T070924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIGTBceHLbBJa4qZTP5%2FcN%2FKpqsfrhccQ%2BXWff3N1J4Q2AiEA1XyAxCaF5FJ1YUQq3%2FqqUS2zTpXU4v24kbG0YN2JNxcqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOfwwhrxo7Z8OUvJDircA2erUK1NMxWIPvPZO0bX0t%2F56bpaBMBTZkmZ1HXCgpC2%2BJoKCn0Xm%2Fa8ez0oq26Th6nF1uT17GcOwWeTFfR01uQoxdpcjigsyVzMnhCdFWCXxQoKGrUa0q%2BL2%2B66duLyzrs%2FREVfe12LCC5Gv5JYuIQxm4Tx5%2BCH044ZsCtjDfCDTMZSC4k%2FDNqtWSP3IggxuyM6LXgzgaTnetbK6%2Fl4B%2B7VutwuVonaCSpH5c1FpGEVYkPuGQPUFU%2FoBIy8IlcGEoj1edoGndZMVpQ07aGvbbCpNFEHE9gf3J%2FQ4juH10nsx69AfYKbgr4DVevd0McLbvkxziboesdZW0m8oduFa8%2Bnb5JIO0SdKn1wDTN077w1vy6i0fU9Kp%2FZwqv7swj6%2BUlwOxrezsLb4mBzYSUaRarjblUaS5OEOqnhQDO8YggI%2Fc8pJfO1oJziPVri5bOIEMskqt5X3uME13jLNXS9lUzAvziiL5QaRcub2aDQQDHu636VDl8uPAmNqRsZrMHVprV%2FXAQf8jGeyYjPLr%2BGbPtPan9V6PVqWpurlZoz6kvutFWPfOYiDIRh5ZVCflHiNEoBqlZqqmQ2t%2FISSC6aLMNsNyVyALYGiodeMwBjsp9GE4uSohQG%2BK4MApXbMPPYl8AGOqUBcPqeVczGARWDEx6xLC6BtD8g67dF9S%2BxkenmYVUJN7z0EkGEusmK7Yzy5mmZOP1jmcGV6ZA01UZcNRO9b47EClXYkCm9EoAZ%2F98dEfsDbwnhjG9dYeL1mkHa7bCVEdJX4803q%2FBNpqNP%2FVWrCSSlbIY1X8OhZ%2FBeiLcBQT3JigOMOHZF2H0fUZENWt8EdsKsG%2F5RolfF35TMGBEzlora9T%2Fd8z4%2F&X-Amz-Signature=5d7e8e61620a4b8d2707c10dcd1e228707f1b3750d2c09f16aa1f757b8d80f25&X-Amz-SignedHeaders=host&x-id=GetObject)

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

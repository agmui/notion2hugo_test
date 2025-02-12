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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZCODAB5%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T081030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxNU22hV8ufIfmRM7HlDzDuRVMeAQq5EKgHJ5kozNvrAIgJkrQq8KFCV8ITryMXNptqcNmh1FGWeOvH7cCEpymb6YqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPDH9J8YCKh7r2PGYCrcAw5lWvEm38qlwsPPvxLMazdxPbZeMqTR2UE7afkBCXRMD4mapi62TOFUoDFJKb8JlIOUHg2xZQRXr53pzXoUp4dEVifJnip8igGnLVlbTD%2FVqhf4q3pLD1eNtAShn9mK3stho54eWYS3wrNGjeI8turklvAGPxX1zEuNh4FkwbobME8KjLWYJuoSzSrIA9VRJsvaP%2FPgxKdOJv5FGLmEVNSuhvoWmQDPY3xGLr94U8vzp1L7qsg4%2BF22wnH%2Bb18a9xWBDVUcZA78oem33q5ErJHAm2qX6IdPadxi0nhRNGuB6fhOcI4LSHntB14Tnjhaw6xf4UzW6aPR%2FuLrJ6Hr6g0lsngmgu9CjVRx83HgfQzk5uX6wpcGsGncXFDKZbapjclAPVZkuolMmiaaq3Rd6TJCcHm38JKj7d2i77kf9Lh%2F%2Fur2lnDdFFT2P%2FW2n%2FZjy7yficU35OpmOIuxkAtBoUW0rluSAlee3OAO1L9bZdYvV3DZhSYJnKeO5KNjUBPWEbEAcZdcBBnPrFvHQBavXb4P2yPJ7jhXrhdU54Ghw2Krd%2FwzW8eWhPGt5LLsvE8JDncjLgaKA6GeGL5LQ9SQ1P7%2FLN%2BkGy%2FFnEMT2meNnAi8B0Iyg0NbXh3%2Bc3SMMLSLsb0GOqUBHC5V%2BRjHDxFbgG%2FnxUy5Lr9nvgFtvTzICUdsVZmkyEXgkM5chfTXRJfgwpe%2BkCDcWLLUiAhewe%2BSiWzZKtvqYPwgQ0cBrSWAjSCYPooLiGIu5HhswhL6gvyO35upkwk7UtUu4R%2FmKrkH8vKEy2xI7N4RJfeZ3u9rXK6b6d%2BcojkqhG%2FahT6aI8YS47P7pMxjm88rYNhko7ZgA9DbWPu41%2BSmExS5&X-Amz-Signature=1600eb38d5643580953e3f6522cc0ef956b2c94010539fb2b557becb7bd6e78e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZCODAB5%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T081030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxNU22hV8ufIfmRM7HlDzDuRVMeAQq5EKgHJ5kozNvrAIgJkrQq8KFCV8ITryMXNptqcNmh1FGWeOvH7cCEpymb6YqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPDH9J8YCKh7r2PGYCrcAw5lWvEm38qlwsPPvxLMazdxPbZeMqTR2UE7afkBCXRMD4mapi62TOFUoDFJKb8JlIOUHg2xZQRXr53pzXoUp4dEVifJnip8igGnLVlbTD%2FVqhf4q3pLD1eNtAShn9mK3stho54eWYS3wrNGjeI8turklvAGPxX1zEuNh4FkwbobME8KjLWYJuoSzSrIA9VRJsvaP%2FPgxKdOJv5FGLmEVNSuhvoWmQDPY3xGLr94U8vzp1L7qsg4%2BF22wnH%2Bb18a9xWBDVUcZA78oem33q5ErJHAm2qX6IdPadxi0nhRNGuB6fhOcI4LSHntB14Tnjhaw6xf4UzW6aPR%2FuLrJ6Hr6g0lsngmgu9CjVRx83HgfQzk5uX6wpcGsGncXFDKZbapjclAPVZkuolMmiaaq3Rd6TJCcHm38JKj7d2i77kf9Lh%2F%2Fur2lnDdFFT2P%2FW2n%2FZjy7yficU35OpmOIuxkAtBoUW0rluSAlee3OAO1L9bZdYvV3DZhSYJnKeO5KNjUBPWEbEAcZdcBBnPrFvHQBavXb4P2yPJ7jhXrhdU54Ghw2Krd%2FwzW8eWhPGt5LLsvE8JDncjLgaKA6GeGL5LQ9SQ1P7%2FLN%2BkGy%2FFnEMT2meNnAi8B0Iyg0NbXh3%2Bc3SMMLSLsb0GOqUBHC5V%2BRjHDxFbgG%2FnxUy5Lr9nvgFtvTzICUdsVZmkyEXgkM5chfTXRJfgwpe%2BkCDcWLLUiAhewe%2BSiWzZKtvqYPwgQ0cBrSWAjSCYPooLiGIu5HhswhL6gvyO35upkwk7UtUu4R%2FmKrkH8vKEy2xI7N4RJfeZ3u9rXK6b6d%2BcojkqhG%2FahT6aI8YS47P7pMxjm88rYNhko7ZgA9DbWPu41%2BSmExS5&X-Amz-Signature=bd0ebc34d25e2e9e2930753805fdf60dfc29238a514bdec4d4b7cd7f47fb9851&X-Amz-SignedHeaders=host&x-id=GetObject)

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

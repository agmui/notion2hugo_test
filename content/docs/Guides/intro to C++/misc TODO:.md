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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ODY5J45%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICITyN3He%2B3WRKR4r96RnCS%2FRDKfE4vOqnqB%2Fy3szf%2BEAiASyphNWsBFHfg%2Bb%2BpC1Cae8Z%2F9Vwn50QRhWc4k1f3r%2ByqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGvJH9kUij%2Bjv89jCKtwDG8PNJlCRH5zFRlenTacGaITDBjLJAqedMLuoKHoWXuhOL1DnK4AuP5VZ2VogrwV%2FTsq%2BTcxRLw1ZPDfEJteKG4GJRRCOnZQF1%2BUUE%2FQuuSOihedQIzW1A7EWoI%2BgrAncmLldGA6xQkMG31Bz7gJi9QQWQTetvtGpLWzjj44fzRV1Rq7teKV5SOcP8qM0UT6Q3XyDC7pFfVFo4Rfwj1V0Mzu0iJRvc7kfCNNBW7y6zeOKxchtVoVL%2FePKYZ04IjK0ERuRz%2FNtlK8zJGyGeMI1U7E6Rkeo%2FHwV9hZ1jxtIIXVqkh3SBGck5q6eU%2BMQj7INvY85aCi9JmJo%2FW7JwSap1m3DU9KtIPZ3pRJjW15I9g%2B7TXLYvoVydQ10ciakXsqRaryRUHNjlP%2FHJq3Ai27wdreY9EySqeEnC0nnATDgR48mgKQcrvSfzzM7eyK5hUJUA7d5kHj1wIf01eD1u917h5Svlg4MXRVTgGh49uqC4p5OVaJ224%2F0LAuZFwk1ehGLmiPjtirB1SReb5LmL2C3kkECPgl4zuarpmgqCP5HZZDRMT0Wx2CBWWYLGnEeiuPNYhBS8ud6tOFOYfqmF3sVXF%2BklA%2BwQ2fzbFiz9I4lcyQxBJM%2Ff7pTvHHgagMwm57OxQY6pgFPBC1S7tvIkdkn%2BE6nbLeFOo9h%2BiJASGSUtzKEXDkKHRHGEQIWZ2eNq0QzR6aEKO3qI9OfOL%2FK1gwCEHS0QE76CXL%2BRZv%2FL8Ysr97p5H19dtj0jX8FxZIyi8tEoR0Wi2sdSv5caR0tJA9k57WSNy2eWS0m3CN7Xeng1gyFu3kmLa3gYlB8aA%2Bk%2Ft8g9EYMThIT6SlFiynUb%2BlDZV8mR336XrfZsCnB&X-Amz-Signature=23eee2db6d0b3b8ee0927f9da5e25749ccfa2048f362289c1d7d886ee28df120&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ODY5J45%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICITyN3He%2B3WRKR4r96RnCS%2FRDKfE4vOqnqB%2Fy3szf%2BEAiASyphNWsBFHfg%2Bb%2BpC1Cae8Z%2F9Vwn50QRhWc4k1f3r%2ByqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGvJH9kUij%2Bjv89jCKtwDG8PNJlCRH5zFRlenTacGaITDBjLJAqedMLuoKHoWXuhOL1DnK4AuP5VZ2VogrwV%2FTsq%2BTcxRLw1ZPDfEJteKG4GJRRCOnZQF1%2BUUE%2FQuuSOihedQIzW1A7EWoI%2BgrAncmLldGA6xQkMG31Bz7gJi9QQWQTetvtGpLWzjj44fzRV1Rq7teKV5SOcP8qM0UT6Q3XyDC7pFfVFo4Rfwj1V0Mzu0iJRvc7kfCNNBW7y6zeOKxchtVoVL%2FePKYZ04IjK0ERuRz%2FNtlK8zJGyGeMI1U7E6Rkeo%2FHwV9hZ1jxtIIXVqkh3SBGck5q6eU%2BMQj7INvY85aCi9JmJo%2FW7JwSap1m3DU9KtIPZ3pRJjW15I9g%2B7TXLYvoVydQ10ciakXsqRaryRUHNjlP%2FHJq3Ai27wdreY9EySqeEnC0nnATDgR48mgKQcrvSfzzM7eyK5hUJUA7d5kHj1wIf01eD1u917h5Svlg4MXRVTgGh49uqC4p5OVaJ224%2F0LAuZFwk1ehGLmiPjtirB1SReb5LmL2C3kkECPgl4zuarpmgqCP5HZZDRMT0Wx2CBWWYLGnEeiuPNYhBS8ud6tOFOYfqmF3sVXF%2BklA%2BwQ2fzbFiz9I4lcyQxBJM%2Ff7pTvHHgagMwm57OxQY6pgFPBC1S7tvIkdkn%2BE6nbLeFOo9h%2BiJASGSUtzKEXDkKHRHGEQIWZ2eNq0QzR6aEKO3qI9OfOL%2FK1gwCEHS0QE76CXL%2BRZv%2FL8Ysr97p5H19dtj0jX8FxZIyi8tEoR0Wi2sdSv5caR0tJA9k57WSNy2eWS0m3CN7Xeng1gyFu3kmLa3gYlB8aA%2Bk%2Ft8g9EYMThIT6SlFiynUb%2BlDZV8mR336XrfZsCnB&X-Amz-Signature=8098b9630d2b0e84ec09b9082ddbab54014b74192969057a31ca460f0e3d3059&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

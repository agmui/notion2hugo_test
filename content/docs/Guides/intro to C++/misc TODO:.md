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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPTEC7EB%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T035419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH2VJtAcIMVf66Z28uDSh0gTCplYGUtmE4azWrVL8onICIAhAx64q8PMelThZro%2FUqPWm55Ifn6jK74hIXdxTRxRrKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3JrUHwYV0VkJW0owq3APCxWVpYrrWMAA9cC3rtlI6B3hS%2FLBkxcwRSqfa7DacGOtp1rBnzAIDaEw%2B2nwhbKUBqhBNyNs0xjTnBlBstHJh10Ctf2IzJn7zO%2Fa9STfdLmG0H1KA7%2FVCbyrbHz3LdiRSKQCb6Qp%2FlRH0gaEpWdNNRTU1pShGKtWC1fHG%2Bnek8vVwAq%2F1a1UpJ1Pxc0xTLK4ttiUIzPBWYdhB5w95%2Bs7jJNOjz%2FYCML3v8p61dqGIV3yPdSeyqgfPXmvWUcYbNUPMIvTFc5niUI8mij7X5k13DRFxjeNJYzzgji%2B75J%2B98ofL9WllfnxB8s8Lc%2Btmq1AQ3XkBsd%2FQW4q0n%2F7acnttC5L96DfFje7iDihbcKMODDQwxMe%2B2P3mSI2DDLCvx7QDtuA6dP7fedFKAMnXLQ1wwJqMbvXrzWGfcE4zpZ3edDTT5ZMB765v1MXV1nWqNE%2FLxqwKSeB%2Be9wzRZYZKWzXKqTaOF%2Fn%2FdNyHMTMlS2IKMPuUVoN7CzAnJww%2BInAMweM%2BZcVUFQT799j9oRx2ZPdceN2C2wS2ybr6tBf9imh%2BlpW4mPliqp4SxzAGAm7geYCVLS8rs7UI0JoxjhPwlMayyYQb33IhyGYDiyV25UqGypFwBD0fL0gto6mLzCSpI3DBjqnAZnIEzzbuyIlmb5AFe%2F6WZ7pmGDoqxpKpvC0DiFFEIU3Ettqr%2BW3hRIpYWpCXvU3FOQUvqYA%2BpKbAAbiEbjZcRL7ALVhl8DTJwYATG1LVkhICHydHYq6omE6MUx79aC5iiUfwyhzXlPqv1fgS7N%2FbkDxgfnqu%2B8Lv%2BnBcMzF%2Fb%2FXsGch4kDZoOhc%2FMgHgbJYmQ0aKN%2FM4p5PD70VmPaggmvvtEl1Ku5D&X-Amz-Signature=ee3862d3f19e6823210d8bb09186c5ab35873e03938c578dd6c16d3bbc5db618&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPTEC7EB%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T035419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH2VJtAcIMVf66Z28uDSh0gTCplYGUtmE4azWrVL8onICIAhAx64q8PMelThZro%2FUqPWm55Ifn6jK74hIXdxTRxRrKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3JrUHwYV0VkJW0owq3APCxWVpYrrWMAA9cC3rtlI6B3hS%2FLBkxcwRSqfa7DacGOtp1rBnzAIDaEw%2B2nwhbKUBqhBNyNs0xjTnBlBstHJh10Ctf2IzJn7zO%2Fa9STfdLmG0H1KA7%2FVCbyrbHz3LdiRSKQCb6Qp%2FlRH0gaEpWdNNRTU1pShGKtWC1fHG%2Bnek8vVwAq%2F1a1UpJ1Pxc0xTLK4ttiUIzPBWYdhB5w95%2Bs7jJNOjz%2FYCML3v8p61dqGIV3yPdSeyqgfPXmvWUcYbNUPMIvTFc5niUI8mij7X5k13DRFxjeNJYzzgji%2B75J%2B98ofL9WllfnxB8s8Lc%2Btmq1AQ3XkBsd%2FQW4q0n%2F7acnttC5L96DfFje7iDihbcKMODDQwxMe%2B2P3mSI2DDLCvx7QDtuA6dP7fedFKAMnXLQ1wwJqMbvXrzWGfcE4zpZ3edDTT5ZMB765v1MXV1nWqNE%2FLxqwKSeB%2Be9wzRZYZKWzXKqTaOF%2Fn%2FdNyHMTMlS2IKMPuUVoN7CzAnJww%2BInAMweM%2BZcVUFQT799j9oRx2ZPdceN2C2wS2ybr6tBf9imh%2BlpW4mPliqp4SxzAGAm7geYCVLS8rs7UI0JoxjhPwlMayyYQb33IhyGYDiyV25UqGypFwBD0fL0gto6mLzCSpI3DBjqnAZnIEzzbuyIlmb5AFe%2F6WZ7pmGDoqxpKpvC0DiFFEIU3Ettqr%2BW3hRIpYWpCXvU3FOQUvqYA%2BpKbAAbiEbjZcRL7ALVhl8DTJwYATG1LVkhICHydHYq6omE6MUx79aC5iiUfwyhzXlPqv1fgS7N%2FbkDxgfnqu%2B8Lv%2BnBcMzF%2Fb%2FXsGch4kDZoOhc%2FMgHgbJYmQ0aKN%2FM4p5PD70VmPaggmvvtEl1Ku5D&X-Amz-Signature=aa326359cbb83db3ae5a5f8b0a401e075552531fdfc96c5c0809d70fcd35e8b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

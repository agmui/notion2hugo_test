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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DBVQJDP%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIFzQX0o8DXBKOwZ7Hm1OM%2BmQ7o1EwEjAW39NdCEZZPKtAiEA5w2qKRzTqX5XQ7plPBBh1c2dViRK8p%2BxMB7WBFtTUUQqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLSEnx7Ggi9B5YQTjircAwJ0U73mEtL6BUsu8whd6OiBBRks%2FW8pbF7VkQVdc%2FD1bbmWzbSBM7T3GByrNom44sDQeom1cUcOuaX50OyPuqwR6qYZNnSj8ff%2BaiROs%2Fjn47WS0uoRE3d%2FeFeFz41%2FGfZw6SH%2Bi9dH4BHo2I3JPo6JxIjazgDUtippemlXX5QKp3YU64QMT01cdYglMxOob3zWM2qzNWte8mC%2F7foqvx9SghQJL8VRf0goEeYhcDdecfU2SJrCFR0cM6WbAm%2FQCqFaDLDrZsCFjCxs98t9jSyqYcSNrmuKkWxkTrTjvDPv6sLcwS0v19NXWmy4y6p1u830P%2BF4xvnk5pKq0a1KHN2RkouZFlPvE055BM61wDj3vgKHZrlYPYACzV%2FgdEkawngafmHsjrUibCmTZQZ0Rdb4qvgbf%2FCUY82RIOoo4%2FTj%2FmIQ93YrABv8oVZQsPC1m%2BNiokmodEXIsDZf7loHoiLmprm5zY0UqvzKBlRXnJjZufF6OJY5edrEKqHBaDSUjv35RzqL8Kk7yMUUsUoV1Wn3lqgsQ3Yaj7nYNli9%2BweR1En33o1Y11Z%2Bwv97dOZxkOpKqPUO6scKoIfrQbfufZioAj0X%2BEzyeBL5UpdVRW7%2FTFB7mL1lExn6FN%2BCMJ7sls4GOqUB%2BbEZXDxdk9QCVwDAlu4FfE4TpgL7ICMV25%2BfCxgn1KIkS%2FGDiitR%2FL3N2%2B4isxp26X6xRZ0QzkUs6t7pyT0yQZL55GQoRgJnE4Szm6PsgAHcqmcFT90wa5yeW%2F3BkOrZu4DTww9Xb%2BI9iCk6nM76GJDiT2C5Pgil611041EWnVPIA%2Ft%2BmonvRdqnKpnKeLXV7BVAuF1idztLXub4dAUF20BzerY%2B&X-Amz-Signature=308ba0376026734c34d75669c6bef85c1abf0871e6f5a4f2e7811f9c2107bc6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DBVQJDP%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIFzQX0o8DXBKOwZ7Hm1OM%2BmQ7o1EwEjAW39NdCEZZPKtAiEA5w2qKRzTqX5XQ7plPBBh1c2dViRK8p%2BxMB7WBFtTUUQqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLSEnx7Ggi9B5YQTjircAwJ0U73mEtL6BUsu8whd6OiBBRks%2FW8pbF7VkQVdc%2FD1bbmWzbSBM7T3GByrNom44sDQeom1cUcOuaX50OyPuqwR6qYZNnSj8ff%2BaiROs%2Fjn47WS0uoRE3d%2FeFeFz41%2FGfZw6SH%2Bi9dH4BHo2I3JPo6JxIjazgDUtippemlXX5QKp3YU64QMT01cdYglMxOob3zWM2qzNWte8mC%2F7foqvx9SghQJL8VRf0goEeYhcDdecfU2SJrCFR0cM6WbAm%2FQCqFaDLDrZsCFjCxs98t9jSyqYcSNrmuKkWxkTrTjvDPv6sLcwS0v19NXWmy4y6p1u830P%2BF4xvnk5pKq0a1KHN2RkouZFlPvE055BM61wDj3vgKHZrlYPYACzV%2FgdEkawngafmHsjrUibCmTZQZ0Rdb4qvgbf%2FCUY82RIOoo4%2FTj%2FmIQ93YrABv8oVZQsPC1m%2BNiokmodEXIsDZf7loHoiLmprm5zY0UqvzKBlRXnJjZufF6OJY5edrEKqHBaDSUjv35RzqL8Kk7yMUUsUoV1Wn3lqgsQ3Yaj7nYNli9%2BweR1En33o1Y11Z%2Bwv97dOZxkOpKqPUO6scKoIfrQbfufZioAj0X%2BEzyeBL5UpdVRW7%2FTFB7mL1lExn6FN%2BCMJ7sls4GOqUB%2BbEZXDxdk9QCVwDAlu4FfE4TpgL7ICMV25%2BfCxgn1KIkS%2FGDiitR%2FL3N2%2B4isxp26X6xRZ0QzkUs6t7pyT0yQZL55GQoRgJnE4Szm6PsgAHcqmcFT90wa5yeW%2F3BkOrZu4DTww9Xb%2BI9iCk6nM76GJDiT2C5Pgil611041EWnVPIA%2Ft%2BmonvRdqnKpnKeLXV7BVAuF1idztLXub4dAUF20BzerY%2B&X-Amz-Signature=876cae71b89d4489e11ebaa7f9a172cf798c5d0e64ba6eb096a4dc26abe0681c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

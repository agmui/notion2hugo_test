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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMCBYVFL%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T121442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAR1dskwHEN2ODtS3m1ERUwh7CboJrLBlawHGibfbXkVAiEA%2Ft8IcLV8iluIy3G%2BpP5w5yJjj2nd8g0K4rKAGQQKFVEq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDNq4joPzvByF%2FlfCtyrcA3msT3RmkDTscwT1YuNahUn3jf171NNq%2BchOEot3pmgEa9Ck%2FziDy91FNymWXKyTpS4KrtFjQhq7R7vIbw4Y2%2Fk0jOXt69BlA0wZsISshHxCihNIShqsKBeV22JCw%2BH%2BMvV6EEszEGpUVcbJvTykhDXDJUM1ILEdkvL0KXfscN2J6NOt%2FSKWdwLWa4RQgypr%2FMYPMRa5uQmvoHyG%2FAJblAp1tou9WicaAH8%2F9H6rTx%2Bn3Pq6cGEYr7K%2Fp%2BI9Nc95U3NXcf7D4SuKWo0yuPYGsFCej3DKRiqh8hmj2BU5YVjNeP9LWCknvSgILlv5XGlxCj%2BjW017V%2FYz4%2FMXG86Jr81QBWehYCGAjmZ7YhhtN7s45RXSa%2FoGqDUTYS1aAmktrEnU7X4CRIQAUmxQDvPy4Lg0VEMj9JN%2BJlQP27d%2FYU7Qb3jfZ3S2whSRhNiTUj5fYN9pYd%2Ftt66oNcrNB%2FMh6VyUOeg0PI6YNFdQQUenfRhr3Bhq6Nkqe39Tlf1Tf5my1n2XdyB926d%2Bx18%2FbvghZuF76Kv90BeFuJI581zwP5HyvydWeda%2FARBCTYmfxs5Qs57B0q%2F2cMUs0BU2adOn7qiiu6dYpzunO1JeLnwmP551yW7LFm2wTUajKEcvMNDHg8AGOqUB12fwv0CFbO%2Fa2V1EjY3rpG9s6Z47LI4GHJKRqAprWffgCFfocS8rbFWUznag9UfZlGY%2FprTHYQvPC4VfP9vHRlfHzAnVxbPQR5d7GfYMxIbWxIuvFzlS4fq9Wx8ShVH1JuxBJa3gk8rmCvpyh%2BsjoEorvC3tyZDD1uB9%2Bgwbb5tiLwhwNI3EOnmVxi6P5yuEEyyCzbPEKJhfq8m5ibyBMscXzYBl&X-Amz-Signature=985284dd64712e690abdb8146a49cc87876ea84e2e248c310066ee94b5bb9a6e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMCBYVFL%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T121442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAR1dskwHEN2ODtS3m1ERUwh7CboJrLBlawHGibfbXkVAiEA%2Ft8IcLV8iluIy3G%2BpP5w5yJjj2nd8g0K4rKAGQQKFVEq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDNq4joPzvByF%2FlfCtyrcA3msT3RmkDTscwT1YuNahUn3jf171NNq%2BchOEot3pmgEa9Ck%2FziDy91FNymWXKyTpS4KrtFjQhq7R7vIbw4Y2%2Fk0jOXt69BlA0wZsISshHxCihNIShqsKBeV22JCw%2BH%2BMvV6EEszEGpUVcbJvTykhDXDJUM1ILEdkvL0KXfscN2J6NOt%2FSKWdwLWa4RQgypr%2FMYPMRa5uQmvoHyG%2FAJblAp1tou9WicaAH8%2F9H6rTx%2Bn3Pq6cGEYr7K%2Fp%2BI9Nc95U3NXcf7D4SuKWo0yuPYGsFCej3DKRiqh8hmj2BU5YVjNeP9LWCknvSgILlv5XGlxCj%2BjW017V%2FYz4%2FMXG86Jr81QBWehYCGAjmZ7YhhtN7s45RXSa%2FoGqDUTYS1aAmktrEnU7X4CRIQAUmxQDvPy4Lg0VEMj9JN%2BJlQP27d%2FYU7Qb3jfZ3S2whSRhNiTUj5fYN9pYd%2Ftt66oNcrNB%2FMh6VyUOeg0PI6YNFdQQUenfRhr3Bhq6Nkqe39Tlf1Tf5my1n2XdyB926d%2Bx18%2FbvghZuF76Kv90BeFuJI581zwP5HyvydWeda%2FARBCTYmfxs5Qs57B0q%2F2cMUs0BU2adOn7qiiu6dYpzunO1JeLnwmP551yW7LFm2wTUajKEcvMNDHg8AGOqUB12fwv0CFbO%2Fa2V1EjY3rpG9s6Z47LI4GHJKRqAprWffgCFfocS8rbFWUznag9UfZlGY%2FprTHYQvPC4VfP9vHRlfHzAnVxbPQR5d7GfYMxIbWxIuvFzlS4fq9Wx8ShVH1JuxBJa3gk8rmCvpyh%2BsjoEorvC3tyZDD1uB9%2Bgwbb5tiLwhwNI3EOnmVxi6P5yuEEyyCzbPEKJhfq8m5ibyBMscXzYBl&X-Amz-Signature=3dbb97507d1556018f469d19073540a09aa1a6aacd3f48bbbcc9545e23519d01&X-Amz-SignedHeaders=host&x-id=GetObject)

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

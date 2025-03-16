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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2UG3PFR%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T040859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfNMbksixu4uvNDVDyNnt%2F3P9bR6scT%2BO6KToLVAWOIAiEAvnHM4uz%2F8698PchaE09%2BXnZJH%2FTVPXC75yrq0DRBXD8q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDDegJg%2FuoKwPS2M1iSrcAwcsVcW%2B7Fvmy4bNKgFFrgZXpQk%2FHPxDd1LjONAnV5zIpdqjm1e%2FFY2B9eeX1CpxPDBeJk5zjHdEuHTtuX9g4RSz6fDPyUyKwoZfb9TQx6mBQvW2MDp4j8XrYq5Eqt2%2FEYwXknVnhmeWc%2BYu%2FDGzO9meMxPT1PJgOd673%2Bn2MJoxZuS%2F6di06D%2Bn8hekvevBRdBC4%2FWRgWwjXx51Pgb5f%2FETShi6HyWnNuQQasXYvlEN%2Bkr4RCrgBg5Myjgdvyzt3JvHBiGDwZTxrKGF37EyI5GaieL3hoczvmqJEpA4TlLGj8o04F6w%2BWYOD%2B4U%2FBrFQXq9JfcCxry3%2F4%2B0NSfcTDjuwqAlBwYPOtN8yV5QbG0HVk1to2WwJ1W4BAJVDdA2uZMwCUOCn6RX8rzQnnMbqbzp4pJgdpuFGbULnfd2Zvi3%2B%2Ffvf9uj2rDeVsPjqARWetofX3NmhZADlvzDxS6FTlrsWPNt%2BBIw2GtEpSmdZhb57hKoMjE50z1dGbfJnpkxx5k71RzKmru6R6eqA0ZVVgDPQ%2BYY0JNiAH8GYmRBW5xHZYwk1LXCAj4fK4RyLOqXhJbvRSOSVP7DekLCZTfXRgIvel7dHIrsbUushr5vltavJIqOuS3BZAOO5o0hMMT32L4GOqUBSKrOQnA4q2E6HlqeVQLLthlrPPJ1F13Qy0l4lp3MQ4jSf8iYdJmRTiBG0MoAX1gXnmQnlVC6md0e2THp1HhZC9XxOVKqR9IYHMUEG2ajVZJ8j1XTjzWaiRLozcrlirKLaUyww5TX1cSDiXa07%2FxcuTKJ9mrTTAGvRmlPL7cLmNI258%2FbF2ZTCX1ywr3sF6fKpjYlo59myXiiHn%2BrsKb46FeGH8Ha&X-Amz-Signature=70a13aa3fc5f63189a0403efd2cf0d3d848f331ef8eb5a42d29f5488b589bc61&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2UG3PFR%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T040859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfNMbksixu4uvNDVDyNnt%2F3P9bR6scT%2BO6KToLVAWOIAiEAvnHM4uz%2F8698PchaE09%2BXnZJH%2FTVPXC75yrq0DRBXD8q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDDegJg%2FuoKwPS2M1iSrcAwcsVcW%2B7Fvmy4bNKgFFrgZXpQk%2FHPxDd1LjONAnV5zIpdqjm1e%2FFY2B9eeX1CpxPDBeJk5zjHdEuHTtuX9g4RSz6fDPyUyKwoZfb9TQx6mBQvW2MDp4j8XrYq5Eqt2%2FEYwXknVnhmeWc%2BYu%2FDGzO9meMxPT1PJgOd673%2Bn2MJoxZuS%2F6di06D%2Bn8hekvevBRdBC4%2FWRgWwjXx51Pgb5f%2FETShi6HyWnNuQQasXYvlEN%2Bkr4RCrgBg5Myjgdvyzt3JvHBiGDwZTxrKGF37EyI5GaieL3hoczvmqJEpA4TlLGj8o04F6w%2BWYOD%2B4U%2FBrFQXq9JfcCxry3%2F4%2B0NSfcTDjuwqAlBwYPOtN8yV5QbG0HVk1to2WwJ1W4BAJVDdA2uZMwCUOCn6RX8rzQnnMbqbzp4pJgdpuFGbULnfd2Zvi3%2B%2Ffvf9uj2rDeVsPjqARWetofX3NmhZADlvzDxS6FTlrsWPNt%2BBIw2GtEpSmdZhb57hKoMjE50z1dGbfJnpkxx5k71RzKmru6R6eqA0ZVVgDPQ%2BYY0JNiAH8GYmRBW5xHZYwk1LXCAj4fK4RyLOqXhJbvRSOSVP7DekLCZTfXRgIvel7dHIrsbUushr5vltavJIqOuS3BZAOO5o0hMMT32L4GOqUBSKrOQnA4q2E6HlqeVQLLthlrPPJ1F13Qy0l4lp3MQ4jSf8iYdJmRTiBG0MoAX1gXnmQnlVC6md0e2THp1HhZC9XxOVKqR9IYHMUEG2ajVZJ8j1XTjzWaiRLozcrlirKLaUyww5TX1cSDiXa07%2FxcuTKJ9mrTTAGvRmlPL7cLmNI258%2FbF2ZTCX1ywr3sF6fKpjYlo59myXiiHn%2BrsKb46FeGH8Ha&X-Amz-Signature=b566a0c2fbd7cbd5f6b233b9d57ccc7904cafd33a9d0a80a26410b03c47ea38b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

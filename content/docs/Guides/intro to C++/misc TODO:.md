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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ5AYLVG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8itwA4L0DIGMV7i%2FmjCsYEThdYYa9us2SeuMhQ4BojAIgWRvDf7RXd%2FvwDbANBp%2FG7F5jC2eY%2BQp5dJdK0d2WYpgqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKjB72rxLrUlpaablSrcAxn4LWLzqr1YGnMrTvYhcUPQzs5SqiSnCRWirQqz2SW2cHhsW5rj%2FMQWC4%2BQBfCR1z2Wmm%2BP43KZ0Pqb5zqlHmjmjKDAfsnKQSGpTWwzUZYQwLK7DS0gQBCgONKwjkUoTnxQlKNQM3bbLtt9XVsaHLZ%2Be5gG3JuYs80%2B6XoMND82gWRulKVFqZVJOtIbI8P0atNEOD5QVQ6L4dEymK%2By3ZBiKFX1XHKfbt3sIey038xoZQ41Y6E5jNFpCstQxB%2Bh0woSIrgsk1o2uY19rsP78cE5j0h4nUWrlCod3IZ79eHfHn%2FwHUvdrvhaeprJqxGB%2FWrCL4snSyfnhS2FAy9ZN%2BOM09l9WYLDFQTfMAuhXoaape8fhUfBEWYGAUcwCXAzR9pHftJweRvadhvGd6YAEnAGAh%2FbQUWMPkFpA%2BfisHxG0VYTuSYUdRLgmmpTkZInyIR%2FbX1GxV2YJaZdoSelxFQ5QNNtPYlE2AtTUInZSKJeHT9TYT08mnNun%2B%2Fh4wLT8h31R2yyj6nd4BVOvT4UB9uuOQ%2BHaR4rGHibtjaUncMNtFuTF6veMa42hygRpAUDjcu347QJtGVfU6AcHZAUiu0dxUd%2B3Ww5TC%2BDMJJ1OkdXt5VRxJqWcZOCB%2FIkMNnbrsQGOqUBUfjxIVIzV8K4HI%2F2nu5P6Gw2a1li%2FU2sQ6D47o8wR4rApui76uiiKfSvGx4kRZpdVNnDs%2Bt4r0rlwqWIdKMOXiNugj8Em%2BcKMno9JCYlUvWPvmeGPptUm5veqkYR2IefBL1nQLwb6YQ%2FP0d%2FfHxuuzY%2BUTLqiIa3Lj1BAFgDwbSbhsExjuO5VEc%2FnYREv3G1jxGJHGrqWWqICO3HY8h7tMZbltcO&X-Amz-Signature=b885aaf2600a8076e9d2306fce53e361321f2b8a9fb5040661dd8173942d219e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ5AYLVG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8itwA4L0DIGMV7i%2FmjCsYEThdYYa9us2SeuMhQ4BojAIgWRvDf7RXd%2FvwDbANBp%2FG7F5jC2eY%2BQp5dJdK0d2WYpgqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKjB72rxLrUlpaablSrcAxn4LWLzqr1YGnMrTvYhcUPQzs5SqiSnCRWirQqz2SW2cHhsW5rj%2FMQWC4%2BQBfCR1z2Wmm%2BP43KZ0Pqb5zqlHmjmjKDAfsnKQSGpTWwzUZYQwLK7DS0gQBCgONKwjkUoTnxQlKNQM3bbLtt9XVsaHLZ%2Be5gG3JuYs80%2B6XoMND82gWRulKVFqZVJOtIbI8P0atNEOD5QVQ6L4dEymK%2By3ZBiKFX1XHKfbt3sIey038xoZQ41Y6E5jNFpCstQxB%2Bh0woSIrgsk1o2uY19rsP78cE5j0h4nUWrlCod3IZ79eHfHn%2FwHUvdrvhaeprJqxGB%2FWrCL4snSyfnhS2FAy9ZN%2BOM09l9WYLDFQTfMAuhXoaape8fhUfBEWYGAUcwCXAzR9pHftJweRvadhvGd6YAEnAGAh%2FbQUWMPkFpA%2BfisHxG0VYTuSYUdRLgmmpTkZInyIR%2FbX1GxV2YJaZdoSelxFQ5QNNtPYlE2AtTUInZSKJeHT9TYT08mnNun%2B%2Fh4wLT8h31R2yyj6nd4BVOvT4UB9uuOQ%2BHaR4rGHibtjaUncMNtFuTF6veMa42hygRpAUDjcu347QJtGVfU6AcHZAUiu0dxUd%2B3Ww5TC%2BDMJJ1OkdXt5VRxJqWcZOCB%2FIkMNnbrsQGOqUBUfjxIVIzV8K4HI%2F2nu5P6Gw2a1li%2FU2sQ6D47o8wR4rApui76uiiKfSvGx4kRZpdVNnDs%2Bt4r0rlwqWIdKMOXiNugj8Em%2BcKMno9JCYlUvWPvmeGPptUm5veqkYR2IefBL1nQLwb6YQ%2FP0d%2FfHxuuzY%2BUTLqiIa3Lj1BAFgDwbSbhsExjuO5VEc%2FnYREv3G1jxGJHGrqWWqICO3HY8h7tMZbltcO&X-Amz-Signature=3587eaed0cb7af609f458dfae4e1580776145a98ad10d922959771b492759717&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

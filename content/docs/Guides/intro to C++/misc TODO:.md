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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GX5XJA4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T133014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCJA9GyOvE%2FgdC2RRrrhUzc7JmBp1KnemGrpgIitBWmsQIgJz8l7jAgVMFNh9QuuNQkI3J%2BjYBB3Of4vIsZouzSkhoq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDHidhPf4hX3UtU9XHSrcAz5bj3PUupxpHOmqD3radUwN1AZfyhQeIHhVZ7cKV3T%2F5fhyC903v2P0k4hXRDNekoRp24U9Rmd7ZXRFx3xy%2Bhx%2BNWOJViN1eICcdIjd3ci8Tjlzgd3wfy6aKPn%2FMG5I69jmk0k6oDH7StGWCV2prUl%2B7W8pH6l8JkfuSPZ182wrJFEYK2s%2FZGM1iqUyNBynlG5a4lhACUQpY0gqsTdO3KxdZtVkpD5m%2FEOQRlU9d0eDgKKin91ol%2B5%2FdJPgcInweyCg%2FxZuRiMH63xVlt7QP1hhcegd6LsZ8fC1GzG48k12gv2DNZMOGR4pGE91brDTriYJfmovcnQzPYMaATakaojuxPrl1kYTrG3v%2B68daDzfPlHDT%2FklsAmhP8qnUhvsLxvmA469kDmz2hnkSucPBJXG3r58a1L%2FUnAkENFjaSUNuirMov6MfET2pQwYvtfkWPCu3yQYB09YTQ6ihtNUYjJpECLsKtRGzM8r6VC5P2xX67dhKWPgXdIWcjgyAcztCjw8oHhQDHX%2B13an2skq7cJI%2BDuu4LS81gCrT9%2FqKCxNVdN9cSPFBS2RAk3Y5fVtuHiyOSlXdrbtdUzuJ5ctWLPqugg68eW26snq6D2F8nyA6CZvtF9a8fsZaNrkMP2S3sMGOqUBE6gK%2Blo6DGspp8g3bZBrGVX85PLB8WT7hrVS8Q3w2ldpqUHt2vp%2Bg73Y8vCe6ywZRNrkf6V5Z83CCSOUvCkh4t8ektuiqxBv7f00up4ahs%2FPuYCcXlNnaAmcMb8TXf%2FyyFyedqkG%2FP5LwV5lqngDpG88f1v%2FafSX%2Fj0Cs6Gs1Jm4bd6FJn%2B9K0o2e4H25Oq2H4jfSt0Bo3zs1%2BBhZ4ClEKrgs16d&X-Amz-Signature=0b5081a0b1c13538f31c5565a72e98781167be71e5ad82377597535c2bbd508c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GX5XJA4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T133014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCJA9GyOvE%2FgdC2RRrrhUzc7JmBp1KnemGrpgIitBWmsQIgJz8l7jAgVMFNh9QuuNQkI3J%2BjYBB3Of4vIsZouzSkhoq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDHidhPf4hX3UtU9XHSrcAz5bj3PUupxpHOmqD3radUwN1AZfyhQeIHhVZ7cKV3T%2F5fhyC903v2P0k4hXRDNekoRp24U9Rmd7ZXRFx3xy%2Bhx%2BNWOJViN1eICcdIjd3ci8Tjlzgd3wfy6aKPn%2FMG5I69jmk0k6oDH7StGWCV2prUl%2B7W8pH6l8JkfuSPZ182wrJFEYK2s%2FZGM1iqUyNBynlG5a4lhACUQpY0gqsTdO3KxdZtVkpD5m%2FEOQRlU9d0eDgKKin91ol%2B5%2FdJPgcInweyCg%2FxZuRiMH63xVlt7QP1hhcegd6LsZ8fC1GzG48k12gv2DNZMOGR4pGE91brDTriYJfmovcnQzPYMaATakaojuxPrl1kYTrG3v%2B68daDzfPlHDT%2FklsAmhP8qnUhvsLxvmA469kDmz2hnkSucPBJXG3r58a1L%2FUnAkENFjaSUNuirMov6MfET2pQwYvtfkWPCu3yQYB09YTQ6ihtNUYjJpECLsKtRGzM8r6VC5P2xX67dhKWPgXdIWcjgyAcztCjw8oHhQDHX%2B13an2skq7cJI%2BDuu4LS81gCrT9%2FqKCxNVdN9cSPFBS2RAk3Y5fVtuHiyOSlXdrbtdUzuJ5ctWLPqugg68eW26snq6D2F8nyA6CZvtF9a8fsZaNrkMP2S3sMGOqUBE6gK%2Blo6DGspp8g3bZBrGVX85PLB8WT7hrVS8Q3w2ldpqUHt2vp%2Bg73Y8vCe6ywZRNrkf6V5Z83CCSOUvCkh4t8ektuiqxBv7f00up4ahs%2FPuYCcXlNnaAmcMb8TXf%2FyyFyedqkG%2FP5LwV5lqngDpG88f1v%2FafSX%2Fj0Cs6Gs1Jm4bd6FJn%2B9K0o2e4H25Oq2H4jfSt0Bo3zs1%2BBhZ4ClEKrgs16d&X-Amz-Signature=344d5ae7f324beee4890deaa935bbfe68523682b7f4830b080ccf954291020ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

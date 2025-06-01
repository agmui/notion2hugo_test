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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W5P6PRH%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T051003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIGkczq%2F9el8qai%2FiuvXfC7SzmQjuPcDCAGPBHJoao0M6AiAzB5oPePBOAzWk0HP73WJN%2F9EzWfr4Fq83gMWBsjH8FCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRuhHzxSwj7%2BZGtyXKtwDvGIxhAqqu%2BSnaD74vdC4IRxExLiOdRpgmQ0eQulR0ogOO5l5tMqlMjIBY%2FcXTnbXU%2BBWfRxfpYnIsU78t%2FTeOznI88iTTOeFET557Irq8kazXjegx1%2BqR2TNu%2FuUeBARgRxI3NCIv9lZKDJLFKtxGlXFPwTs%2BfFtpZwrFEMI3H9Iqfwkti8ZTcMDp%2FggM%2B4rYv%2BKsQtklSAQChpTLwD3akCjFDuH%2BiHiB%2BfLDpeEMG%2BKyitFMvsnn6usLbFcHYE0trhZRLoQD8iP48YFI6s5k5txreTLzq3hJuiDUeI%2B4YY8Q6gyrCXzxf%2FtXJfP0JcmVh6dsA65pDeAJjSGy%2FUsdK35JLOmx8ilOg2%2Fdp%2BtCw35JBWvSZBMpIeOasizHaqiHkt%2FSb5X9RqYP2fFWhPifIhcBlguSCVrNu5KV1uftMEqLp4Phn9hQjSNlUsiqg9z3ddEapywu5MqvndFYqA6gwJ%2FjJM29e2R8d6sC52r%2BmUiHNLbVZeDcQjU0nrEOpiA%2Fxq0ow9YFbxPYbTksY2Lo41O%2FLYyLYTERbIab6uxMl7f3DRf3ZAQ%2F18HU51gTVit%2FbOyHX9E1V%2Fseid80IxMYZyP8wJltECvpFvU%2BGe5wE182fNGpMbrDUVuqQswkIbvwQY6pgH0mrxVbCilXsAJLwfuzmOr9Tp9l%2B9s6ooAetmjTLFPF%2F7Bxsta%2FFy4JG9tMEITX9S4BtezI3CNwEVa2OOAS2Yd1dsEuOZ6HiSEiIs9I72%2Bp4ho0coFteloeMlBUhWbcyTDF9%2F0K%2B7o2m%2BsNwhaskJXrOBLjVGvRiWv%2BOoayoI16SZ%2B6HSPux%2BEqR%2FlyuZ4to5%2BD0RZlSJS6ExMzqPh74kM5bpdtBDY&X-Amz-Signature=c9c15cee5e7190b11abd6f88d6dab9cd06f6e9f419a0ce1e2c41c808643b404b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W5P6PRH%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T051003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIGkczq%2F9el8qai%2FiuvXfC7SzmQjuPcDCAGPBHJoao0M6AiAzB5oPePBOAzWk0HP73WJN%2F9EzWfr4Fq83gMWBsjH8FCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRuhHzxSwj7%2BZGtyXKtwDvGIxhAqqu%2BSnaD74vdC4IRxExLiOdRpgmQ0eQulR0ogOO5l5tMqlMjIBY%2FcXTnbXU%2BBWfRxfpYnIsU78t%2FTeOznI88iTTOeFET557Irq8kazXjegx1%2BqR2TNu%2FuUeBARgRxI3NCIv9lZKDJLFKtxGlXFPwTs%2BfFtpZwrFEMI3H9Iqfwkti8ZTcMDp%2FggM%2B4rYv%2BKsQtklSAQChpTLwD3akCjFDuH%2BiHiB%2BfLDpeEMG%2BKyitFMvsnn6usLbFcHYE0trhZRLoQD8iP48YFI6s5k5txreTLzq3hJuiDUeI%2B4YY8Q6gyrCXzxf%2FtXJfP0JcmVh6dsA65pDeAJjSGy%2FUsdK35JLOmx8ilOg2%2Fdp%2BtCw35JBWvSZBMpIeOasizHaqiHkt%2FSb5X9RqYP2fFWhPifIhcBlguSCVrNu5KV1uftMEqLp4Phn9hQjSNlUsiqg9z3ddEapywu5MqvndFYqA6gwJ%2FjJM29e2R8d6sC52r%2BmUiHNLbVZeDcQjU0nrEOpiA%2Fxq0ow9YFbxPYbTksY2Lo41O%2FLYyLYTERbIab6uxMl7f3DRf3ZAQ%2F18HU51gTVit%2FbOyHX9E1V%2Fseid80IxMYZyP8wJltECvpFvU%2BGe5wE182fNGpMbrDUVuqQswkIbvwQY6pgH0mrxVbCilXsAJLwfuzmOr9Tp9l%2B9s6ooAetmjTLFPF%2F7Bxsta%2FFy4JG9tMEITX9S4BtezI3CNwEVa2OOAS2Yd1dsEuOZ6HiSEiIs9I72%2Bp4ho0coFteloeMlBUhWbcyTDF9%2F0K%2B7o2m%2BsNwhaskJXrOBLjVGvRiWv%2BOoayoI16SZ%2B6HSPux%2BEqR%2FlyuZ4to5%2BD0RZlSJS6ExMzqPh74kM5bpdtBDY&X-Amz-Signature=fed64ac508a26db8f2c2b05ba521ba51aefb30773099868c02f0a42ea4f325f6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

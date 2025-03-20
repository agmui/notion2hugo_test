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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM5SJTD6%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T041001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIBl9Rv%2FQXSx1QQepIRW%2FA2yGyImzTnoWZGJvkX8ZEAlqAiEAkmnNegvgB6TTvls3BsNxuSo6%2F9aIL3s07mey2%2F9hOWMqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoCgal2PWEBJpv5SSrcAxW0t19PaUSQd5CZ6NfyEnLD%2FwZwTPgEKs5TfSQrOa4uiyhkTjErvkNGZI72YrodRR8DsXWaj%2B7gxQU3UffWZYsoyJfkoic%2FDIpvF51R73IBflgi0YOC6LEaMOgYfNB5bdQl%2F9xDxz5o9bYn7Xs7oH16dczBxTb0oyk58UwuL%2BbKn6sAmavfmzOReOlBULDqzfjiZ%2FKJRFMMUlM74Y3iBuKI6hh49r7CBXyyMUmjiWSYFldX0E%2B8g82uGmEuSAUuh26bzMxSF3NpreBUC%2BmjFISqzC1Y%2Bjy8hfqAJQ3KFaQbyWyzTOHlKqnTTNIR%2B3DWq4wG0KiaCK8DD86MVBvSuJnaJ7946afV2QtCo0hnkfDodP8fMkzHsmZHivUvuBo9D%2FOvFdkVdZWemRTRXofzIRE4ymYTi4HaMQgjsQAOBjtaCMVf6%2FdjS3vlcSPuB36zFyv3yC84GRSh%2B%2FvNpxs05c8sfPl5lg33KIkYmVD4en5qoHMkdYI1Eu1OlWyVBLtysAmsozi4h3WNLr70yyd6S7Z6%2Bv5DE%2BqH%2FqiRDaiGQMm9UnZeo3f1nMCqN2qL1rsmsSeFXAjryI%2B8tFssmsjqr9hQzJ0aivb8K1AFXzDP1dUI1HJV4%2BwORKPt9vWBMOim7r4GOqUBzJ4HaOxBzjkXF3KpoijD23UDSKaTmlxGddEubO5riptqwUls8AD6tYn1rVgYGmuC30e2rkHl%2BcZMBGDABNT0hQeCrU%2FoSKNKTT%2BBxxLA454K5nFxUaZ4oImGLVeYsdwNUlGs42n65DuRT9rBKPrBIXkI61DkkT5Hd37ZCqE9N1iKHHVpt%2FLnX3gjL5kmH8Yj2ubEFJpKV58KTQ2mA5CcGhh9NmMw&X-Amz-Signature=75978c026f43043ac4b7e58cd8ed3b53b9e9774f0f53a24a618a51fbcadecf35&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM5SJTD6%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T041001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIBl9Rv%2FQXSx1QQepIRW%2FA2yGyImzTnoWZGJvkX8ZEAlqAiEAkmnNegvgB6TTvls3BsNxuSo6%2F9aIL3s07mey2%2F9hOWMqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoCgal2PWEBJpv5SSrcAxW0t19PaUSQd5CZ6NfyEnLD%2FwZwTPgEKs5TfSQrOa4uiyhkTjErvkNGZI72YrodRR8DsXWaj%2B7gxQU3UffWZYsoyJfkoic%2FDIpvF51R73IBflgi0YOC6LEaMOgYfNB5bdQl%2F9xDxz5o9bYn7Xs7oH16dczBxTb0oyk58UwuL%2BbKn6sAmavfmzOReOlBULDqzfjiZ%2FKJRFMMUlM74Y3iBuKI6hh49r7CBXyyMUmjiWSYFldX0E%2B8g82uGmEuSAUuh26bzMxSF3NpreBUC%2BmjFISqzC1Y%2Bjy8hfqAJQ3KFaQbyWyzTOHlKqnTTNIR%2B3DWq4wG0KiaCK8DD86MVBvSuJnaJ7946afV2QtCo0hnkfDodP8fMkzHsmZHivUvuBo9D%2FOvFdkVdZWemRTRXofzIRE4ymYTi4HaMQgjsQAOBjtaCMVf6%2FdjS3vlcSPuB36zFyv3yC84GRSh%2B%2FvNpxs05c8sfPl5lg33KIkYmVD4en5qoHMkdYI1Eu1OlWyVBLtysAmsozi4h3WNLr70yyd6S7Z6%2Bv5DE%2BqH%2FqiRDaiGQMm9UnZeo3f1nMCqN2qL1rsmsSeFXAjryI%2B8tFssmsjqr9hQzJ0aivb8K1AFXzDP1dUI1HJV4%2BwORKPt9vWBMOim7r4GOqUBzJ4HaOxBzjkXF3KpoijD23UDSKaTmlxGddEubO5riptqwUls8AD6tYn1rVgYGmuC30e2rkHl%2BcZMBGDABNT0hQeCrU%2FoSKNKTT%2BBxxLA454K5nFxUaZ4oImGLVeYsdwNUlGs42n65DuRT9rBKPrBIXkI61DkkT5Hd37ZCqE9N1iKHHVpt%2FLnX3gjL5kmH8Yj2ubEFJpKV58KTQ2mA5CcGhh9NmMw&X-Amz-Signature=263131e61239b0458268358fd030ca69c2123b8a18eca324f948c9a2fa680a5b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

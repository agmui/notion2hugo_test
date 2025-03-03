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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KERX3XC%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9cB67h%2BDsBdg2MPni3G5%2B%2BuOhpEuf5boYplpHuYGM%2FAiA%2FFMPjn4k%2FjPvWK0pjmOC6lwb8bspjNEcW4%2B04CPkr8SqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9Xgv71mu%2F7Jw7%2Bd%2BKtwDMP591qySmt8h4Rtc0ew2w2mQxnORc%2BReba34XJjbN3VH6l0ilSaTFlYzEa2DHZccBd5RGp%2BS0vyun7Ws4GQKIDx6Ea8G2iFXwyrT6%2BmvDjzg3D1h09taUaTYpqkwaAQCQWwWjC70Ko7E8ioyBhCBOibu%2BLHLcE4euOOL5zJFv46s8FcwdIktD4kQz17OTaueBSxd8tCknMT6otwPrv1JE5ifssRbVmWruRBpRwjOLjyhg29ncjnCifOxMbvFekPJGpxXzb%2FBO0zmW%2BEgzXgRFx67RoUGGfzEulctMUg7szS7e306T2lXCNLDjIjjOSAjAnr4rczRgWKG1bGKyi%2F3xEzbYfjpf6ILqV%2BIBlt66YoAEtVYDa4NqaqeZD6ouUeQIncDfiGGglF84mLSmnWYK1DvDS31Tv0TBYEM3gJ0K8DIzBHKhQU2kF39PV6gg1uhh2CRnwKN3dNAPhAYBaiaBQia8BI%2FG1irwVCqIkjp%2F1e2S0U4M1t11Ug6bVtZg73lRKsBPE3V5HfimfG3Krh0Blm1TKGRfHy500AhPQ62FMFfc3CRBeuQUOVyMUyWCIap8ROlO09hPsnx9f5kpI%2BiA%2B6ESTeAg3B0rNhsvpdBqj%2FYlKVp7Y3h1BP9Iicw19qYvgY6pgEVl%2FXyBnWiGuW9c9aT09cDxd%2B7VMWasECvxaEElTsBn2Wculhw08jFdQdUsBC%2FmrvdGnw3zVIzJYF1HrN01MNsEhSEsX3CMZswtag%2F48ZKt%2BhR1CBle97KKS5CjP8rpdVeWgRU9SlkEHmxGieGRqgm0fEvS0YOQtX48exyHO5EAK52dLK5IOUWwXg6vJoihmZnHoB4OCnH5HH1OZnEi60Ft8ua%2Bo3v&X-Amz-Signature=70823f6398a46e9222f50468ce35f70dc8efb626dfbd7c3c40dc9a96d4939f95&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KERX3XC%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9cB67h%2BDsBdg2MPni3G5%2B%2BuOhpEuf5boYplpHuYGM%2FAiA%2FFMPjn4k%2FjPvWK0pjmOC6lwb8bspjNEcW4%2B04CPkr8SqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9Xgv71mu%2F7Jw7%2Bd%2BKtwDMP591qySmt8h4Rtc0ew2w2mQxnORc%2BReba34XJjbN3VH6l0ilSaTFlYzEa2DHZccBd5RGp%2BS0vyun7Ws4GQKIDx6Ea8G2iFXwyrT6%2BmvDjzg3D1h09taUaTYpqkwaAQCQWwWjC70Ko7E8ioyBhCBOibu%2BLHLcE4euOOL5zJFv46s8FcwdIktD4kQz17OTaueBSxd8tCknMT6otwPrv1JE5ifssRbVmWruRBpRwjOLjyhg29ncjnCifOxMbvFekPJGpxXzb%2FBO0zmW%2BEgzXgRFx67RoUGGfzEulctMUg7szS7e306T2lXCNLDjIjjOSAjAnr4rczRgWKG1bGKyi%2F3xEzbYfjpf6ILqV%2BIBlt66YoAEtVYDa4NqaqeZD6ouUeQIncDfiGGglF84mLSmnWYK1DvDS31Tv0TBYEM3gJ0K8DIzBHKhQU2kF39PV6gg1uhh2CRnwKN3dNAPhAYBaiaBQia8BI%2FG1irwVCqIkjp%2F1e2S0U4M1t11Ug6bVtZg73lRKsBPE3V5HfimfG3Krh0Blm1TKGRfHy500AhPQ62FMFfc3CRBeuQUOVyMUyWCIap8ROlO09hPsnx9f5kpI%2BiA%2B6ESTeAg3B0rNhsvpdBqj%2FYlKVp7Y3h1BP9Iicw19qYvgY6pgEVl%2FXyBnWiGuW9c9aT09cDxd%2B7VMWasECvxaEElTsBn2Wculhw08jFdQdUsBC%2FmrvdGnw3zVIzJYF1HrN01MNsEhSEsX3CMZswtag%2F48ZKt%2BhR1CBle97KKS5CjP8rpdVeWgRU9SlkEHmxGieGRqgm0fEvS0YOQtX48exyHO5EAK52dLK5IOUWwXg6vJoihmZnHoB4OCnH5HH1OZnEi60Ft8ua%2Bo3v&X-Amz-Signature=874143e8ef832108f43c3bab97181d37999fcf68f524e3956abd6ce9fb268929&X-Amz-SignedHeaders=host&x-id=GetObject)

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

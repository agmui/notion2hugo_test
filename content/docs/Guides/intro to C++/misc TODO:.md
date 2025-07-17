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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I4RHKH7%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T024915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDvzygD3OYP672oBBaRxD5qxi%2FpkKu0mM2%2F0hubs934CAIhAKF5v5INx9%2FfZFzfgkhzq6UIfZc5aqsuokV%2BZ6bF2ThqKv8DCGoQABoMNjM3NDIzMTgzODA1IgycP%2BJ1DaSs3FyORWUq3APJi%2BgvipkEpogSkBgK02meepQQPVV0G2VCPZMDvQFNej4S%2FlJlAR2MS3yiBQ9WQ38CtMjF7MiIl3ChmWbMAflO8%2FA3CtHcjgPy4fk2bj0%2BVoTHqxkIEJRX7dipflV06SPS75E0fDDEMeBwEno06e%2BzSlKzglK1oRK4TIL%2FxmEfA07YBJP3KNlyLABQpI3rb4H5Yuxxp2DxnKgkJ0IYabPySkLG6%2BUr0D8UuF%2BzFuU%2BtDCjj%2Fz2UwL1BaDZ5ai%2Fl5ycB1gq7CLJnrQIig2ZRwzJxBG2gqPtCfW1shDllyALjCQ6Ahr%2F0leGTvISdQKKagyJ2w8fnyZBRGdtzuiG3ZYp6TMX2VxU%2F2XU2l6k9J7iqS9wOEcXnsdtLOrcyxlKI2TzriIg1Y5o1G2lyaihCiU4bRhtIxIK8zmHL7gkqkpOhZQp3n2FCc%2BmPStI%2B7QFgaLQuHYRRk%2F9LRVDWfLAAlB4aTgPOnQ1lGaJWup3P4wEiQGg97mFAcL1JMtGiTXUu9F%2F8AkyJa96RaVptgbaxmzcAN%2F0II20Yvkydt30c1yJ0tvQSgBn7lftzH7QNYZzVNOobeYHUh1yVCKKZdp33xWqiwBCy8qchPg3fxk5vT5y8wDOgrEQYxtDe1jNgjDyoOHDBjqkAQM9yxRH%2BbkJwIwHs2Z6M8BK3NZwj7MyBuLzmDr2YirK%2F28A1dFpbp7zAwX8pp1lVq76VJ9BS9GfznoX3FRmVbU3ibezYiHLh7MSunLi1yjwl8Xq%2B88zxzcLmMKBxkRvNQzMJheU0J24j6baXcWwZffH8LQa11QrgK0qbhZ6D0frYR8q9lrhsRgRklP5nENP5ux5CF3ORhtHEOJOkBly6JMiEPZo&X-Amz-Signature=6afce6d9ab48c5d421366094bf76f9634702d233f5d4cb61e55f0f236dbe3a70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I4RHKH7%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T024915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDvzygD3OYP672oBBaRxD5qxi%2FpkKu0mM2%2F0hubs934CAIhAKF5v5INx9%2FfZFzfgkhzq6UIfZc5aqsuokV%2BZ6bF2ThqKv8DCGoQABoMNjM3NDIzMTgzODA1IgycP%2BJ1DaSs3FyORWUq3APJi%2BgvipkEpogSkBgK02meepQQPVV0G2VCPZMDvQFNej4S%2FlJlAR2MS3yiBQ9WQ38CtMjF7MiIl3ChmWbMAflO8%2FA3CtHcjgPy4fk2bj0%2BVoTHqxkIEJRX7dipflV06SPS75E0fDDEMeBwEno06e%2BzSlKzglK1oRK4TIL%2FxmEfA07YBJP3KNlyLABQpI3rb4H5Yuxxp2DxnKgkJ0IYabPySkLG6%2BUr0D8UuF%2BzFuU%2BtDCjj%2Fz2UwL1BaDZ5ai%2Fl5ycB1gq7CLJnrQIig2ZRwzJxBG2gqPtCfW1shDllyALjCQ6Ahr%2F0leGTvISdQKKagyJ2w8fnyZBRGdtzuiG3ZYp6TMX2VxU%2F2XU2l6k9J7iqS9wOEcXnsdtLOrcyxlKI2TzriIg1Y5o1G2lyaihCiU4bRhtIxIK8zmHL7gkqkpOhZQp3n2FCc%2BmPStI%2B7QFgaLQuHYRRk%2F9LRVDWfLAAlB4aTgPOnQ1lGaJWup3P4wEiQGg97mFAcL1JMtGiTXUu9F%2F8AkyJa96RaVptgbaxmzcAN%2F0II20Yvkydt30c1yJ0tvQSgBn7lftzH7QNYZzVNOobeYHUh1yVCKKZdp33xWqiwBCy8qchPg3fxk5vT5y8wDOgrEQYxtDe1jNgjDyoOHDBjqkAQM9yxRH%2BbkJwIwHs2Z6M8BK3NZwj7MyBuLzmDr2YirK%2F28A1dFpbp7zAwX8pp1lVq76VJ9BS9GfznoX3FRmVbU3ibezYiHLh7MSunLi1yjwl8Xq%2B88zxzcLmMKBxkRvNQzMJheU0J24j6baXcWwZffH8LQa11QrgK0qbhZ6D0frYR8q9lrhsRgRklP5nENP5ux5CF3ORhtHEOJOkBly6JMiEPZo&X-Amz-Signature=bad7e0b87692dd7560a169783edfaa9514d91e2221a1c4679a6b986e3165e4a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

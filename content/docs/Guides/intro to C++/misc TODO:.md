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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QSQAJYY%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T132703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIDmR8yBGGxafbL7fXL3RUmyV1CvkmcYJbocRpyc%2Fa7xSAiBsJswlTCWiy0apx3rOpJpy1BMjEUVJPN2ujWl%2FZ3xITyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMVog2SkQWXLAo%2FldRKtwD1FfmRdb86lv2X7QBchkcY4UN3tmAy6WXCpjOi%2F8BXALM4%2Fy2AL2O1ux2OtKeO0UY67ut6o0diPksEfqkCbASktc9MtcZq9tRZ1yaigB1ktLZ6N1YL21baf28mxL6Tn2xwO2SCmYSwLcAFKHFjVodI8MMK3%2FXuSbAoj7kkwlxBTWNEAD%2B5%2BgJQn963GMTDOyaSE%2FajJjeRP8MuI%2FB2EOdq5qrN%2FcnJnkZxbNYdB3lkT5%2B2odsD3IXmmPASffEj6BnaRmR7DjYgOvak3wEroIO4KU8U%2B%2B8oBAKx6MUFhSfu1l9uWxdlUoxig2aQnEvEXvI1l4YA1Mq9MNJMPTBV1nBIgp%2F6BgBpOEhOGXaZRuyGUris0DymvJWWwWHcKEfes%2FOQHbdmYq6mL247V0g1SS4%2BQGrGwXNYmQ85gP99aNGGLUhjoJHRFd5viHmIqFBoS%2FBVMM1a6rbZtJCfndq1xBH7MKgH%2FKlc%2FL5IdD440JelYOb0RAEPh16fvyDccxEfA77h35Q62Yd02BSQl81sMMUS4fSLLEpAtP7Wg8qBqjMyli%2FIclEAI3nZjcDEZ4aSlUyHvJuSbfmfCh8ZEUzbVVFBjPVW4r7njxe5keOBXfv08jcyBqFtnRZ07uL5dkww%2B7vwgY6pgGUN24UoiBC5Nx3lwhwAlyvfyvtyn5YqCfUtqG1qmO1VmTWvWurABJhjDMOmY3oUD4XKj3hEyyTE%2FV7QZu8C0MC3H44eBuE0sio41wR7EqSPE1Hy5j9SG%2BD3WmIC7hx5eITnhkHcx7Z46mFrTgXsnnCg2qHk4KDfsa8S5dERnAyLWTJDxw%2FkNMFoE2l7Y5ZeElnX0p6%2BIdkwGPyKYS%2B7XWqe6%2FEPNWd&X-Amz-Signature=924a439fc043bd57646712a5f7e1f3a327e34d04d1ede26882f914990b6f61f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QSQAJYY%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T132703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIDmR8yBGGxafbL7fXL3RUmyV1CvkmcYJbocRpyc%2Fa7xSAiBsJswlTCWiy0apx3rOpJpy1BMjEUVJPN2ujWl%2FZ3xITyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMVog2SkQWXLAo%2FldRKtwD1FfmRdb86lv2X7QBchkcY4UN3tmAy6WXCpjOi%2F8BXALM4%2Fy2AL2O1ux2OtKeO0UY67ut6o0diPksEfqkCbASktc9MtcZq9tRZ1yaigB1ktLZ6N1YL21baf28mxL6Tn2xwO2SCmYSwLcAFKHFjVodI8MMK3%2FXuSbAoj7kkwlxBTWNEAD%2B5%2BgJQn963GMTDOyaSE%2FajJjeRP8MuI%2FB2EOdq5qrN%2FcnJnkZxbNYdB3lkT5%2B2odsD3IXmmPASffEj6BnaRmR7DjYgOvak3wEroIO4KU8U%2B%2B8oBAKx6MUFhSfu1l9uWxdlUoxig2aQnEvEXvI1l4YA1Mq9MNJMPTBV1nBIgp%2F6BgBpOEhOGXaZRuyGUris0DymvJWWwWHcKEfes%2FOQHbdmYq6mL247V0g1SS4%2BQGrGwXNYmQ85gP99aNGGLUhjoJHRFd5viHmIqFBoS%2FBVMM1a6rbZtJCfndq1xBH7MKgH%2FKlc%2FL5IdD440JelYOb0RAEPh16fvyDccxEfA77h35Q62Yd02BSQl81sMMUS4fSLLEpAtP7Wg8qBqjMyli%2FIclEAI3nZjcDEZ4aSlUyHvJuSbfmfCh8ZEUzbVVFBjPVW4r7njxe5keOBXfv08jcyBqFtnRZ07uL5dkww%2B7vwgY6pgGUN24UoiBC5Nx3lwhwAlyvfyvtyn5YqCfUtqG1qmO1VmTWvWurABJhjDMOmY3oUD4XKj3hEyyTE%2FV7QZu8C0MC3H44eBuE0sio41wR7EqSPE1Hy5j9SG%2BD3WmIC7hx5eITnhkHcx7Z46mFrTgXsnnCg2qHk4KDfsa8S5dERnAyLWTJDxw%2FkNMFoE2l7Y5ZeElnX0p6%2BIdkwGPyKYS%2B7XWqe6%2FEPNWd&X-Amz-Signature=2a9ce41bf8e8cdc109960e6d49e3e7781033f168e7209d37be4a9fc732415dd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

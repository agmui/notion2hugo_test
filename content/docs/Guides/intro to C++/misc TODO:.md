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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2RTQAXP%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG7VG3UJw1fOFaLzLADM1CtRfz9NDqnBLFs17RjQRxRgIhAJ%2B%2FhJ4bzO0VWiP0xx5Rm080HmE%2FE9rjD6Qj1xTVT%2ByLKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4PMxV1ysAWGcsAzYq3APERpv2Jk6pEUoA5vPkVW3Fd73SwVWMvfdRkFKQ38N1%2BwbRjg4eZa9iJeh0H5U%2FPKxnljdo5T%2BMPFUa8eI%2BtTjent%2FcXdRLYwzT7vB28CxcJzKiulRxwuykCzkNI6OMg8r0CaefD2ccJXY%2Bqi7x6PYgOVcOpNoQpLfOFiNo5HUbfbMRA3KxOuSZ5%2FPIpOenXYotXUVvvOE6IhpPduAMG0RlnNJ3emhjSWiyX4ncMVnR9Kv%2F1JeCkBzjx46ZXPHPttLm5QEFc8vHZEqvW1jDM8ocopUQluBsI59lolSQQUyszj73uklJPWAKxZGkcjPCIJN0lsTyk2OTbtaTEUow4hmriAUFARIieJ3kvovcDxNGFa5NZhmv4R7lKHTocLhk3NXdKU%2FzUoMFNcpVwenXZqfaVDSVbSC%2BcgW5uDCoVa%2BvrRVoV%2FZx4ONDOZ%2ByUB01Kgnx4gY%2BUS8OClsuVlIIh4HB66a1nv0SItNsJunLEJLr7MCyvGiNa%2Fn2b4P3NXV0w1ZQLktk1SJyyZFIPXF6tX5SYDEIlLhGMSJtW6t7io7EuJAuZYIhdoLAapY0x8OnqTv5Xh%2BD%2FJWxeU7a4bbXn8LZYnvAXWrGuekrfOZDYXZPenY726Sp73aLePk1FTCIgqzBBjqkAfYZfRAsXvTf0YUzbiI5Q9wnPlYuNt7kfH04ASfQyhJRw86aaduYZJtPw2zj8Hnct%2F%2FRNfJLuinmz6fT4Lemb51%2BGNp2XiMsy4OxjdGr%2FbGQs4DwXV3OfOL5XfZ74pBCA8SQWStwk44JYWxf6Omy4gPNetByVXRxkfpCgSG%2BTcYSB3AYKTCBo3jKFhc7TxShYF7LB1tqPoM9fdTuZB9BYH4bB8U0&X-Amz-Signature=04334408c09e380440d62377d026fd06a27f7849953b6b6cb451dc78e6fe98f0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2RTQAXP%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG7VG3UJw1fOFaLzLADM1CtRfz9NDqnBLFs17RjQRxRgIhAJ%2B%2FhJ4bzO0VWiP0xx5Rm080HmE%2FE9rjD6Qj1xTVT%2ByLKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4PMxV1ysAWGcsAzYq3APERpv2Jk6pEUoA5vPkVW3Fd73SwVWMvfdRkFKQ38N1%2BwbRjg4eZa9iJeh0H5U%2FPKxnljdo5T%2BMPFUa8eI%2BtTjent%2FcXdRLYwzT7vB28CxcJzKiulRxwuykCzkNI6OMg8r0CaefD2ccJXY%2Bqi7x6PYgOVcOpNoQpLfOFiNo5HUbfbMRA3KxOuSZ5%2FPIpOenXYotXUVvvOE6IhpPduAMG0RlnNJ3emhjSWiyX4ncMVnR9Kv%2F1JeCkBzjx46ZXPHPttLm5QEFc8vHZEqvW1jDM8ocopUQluBsI59lolSQQUyszj73uklJPWAKxZGkcjPCIJN0lsTyk2OTbtaTEUow4hmriAUFARIieJ3kvovcDxNGFa5NZhmv4R7lKHTocLhk3NXdKU%2FzUoMFNcpVwenXZqfaVDSVbSC%2BcgW5uDCoVa%2BvrRVoV%2FZx4ONDOZ%2ByUB01Kgnx4gY%2BUS8OClsuVlIIh4HB66a1nv0SItNsJunLEJLr7MCyvGiNa%2Fn2b4P3NXV0w1ZQLktk1SJyyZFIPXF6tX5SYDEIlLhGMSJtW6t7io7EuJAuZYIhdoLAapY0x8OnqTv5Xh%2BD%2FJWxeU7a4bbXn8LZYnvAXWrGuekrfOZDYXZPenY726Sp73aLePk1FTCIgqzBBjqkAfYZfRAsXvTf0YUzbiI5Q9wnPlYuNt7kfH04ASfQyhJRw86aaduYZJtPw2zj8Hnct%2F%2FRNfJLuinmz6fT4Lemb51%2BGNp2XiMsy4OxjdGr%2FbGQs4DwXV3OfOL5XfZ74pBCA8SQWStwk44JYWxf6Omy4gPNetByVXRxkfpCgSG%2BTcYSB3AYKTCBo3jKFhc7TxShYF7LB1tqPoM9fdTuZB9BYH4bB8U0&X-Amz-Signature=571341adcad77cc2dabc393391432d80c94bc6c3c795f8b5e9e8156b2e4e9af6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

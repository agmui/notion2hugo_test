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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FVGUV4L%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T200703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDTqLLOOXixM9O3NEGz1oS4gRqS0KDv3IgqVHaoZ0JGzgIhAK4IvkxmOzlQUBC2TKvgRb1gFJOVfc%2FeSVJhtjfFvYNzKv8DCGUQABoMNjM3NDIzMTgzODA1IgyPqp%2FRQO5%2BG5wA0JYq3AN%2BZhxlm%2B%2F1mrCnk3%2BqI5hEK1X9ILNX%2BwcUpzXbh4VIOrelMAUJXmoYCctYcv%2BPrZUSMTPSpMnH9DDZeIa2yqbsDmXaQs6Pz1bM6e9yjm%2FCfbI0j25ajJKzcQmqoeq2s%2B6XLVXeq%2FsW0BElPV0iAEaYBBssjFhuoVzkEDasXy15crkkWI6Tn5Q43afKaB%2FSo6Bhl91We2%2FNEEWzgXz9SGXwqgNzkf9IS%2FxdEZbzQpuHB3Nx1vkyWNhS2RAyhIBV1abRsAxU580V92KsDu8HyBHlqOwej%2FOfWFT0aps17IIX7U3nrY%2Fure7vu7WKU%2B%2FjIaZThri4WyjJOtRjHRpLwtP1K1yYY57pRkkQKYJSThQ4k9MEbyuzAsOjFiKQBfIE1DVQYVl%2B361oye1aFspyebLNWp7Y7bmkrWRHkwc1YKzxs9xJ5Yum7nCCegrFFYz1WE4UJnHiiUh4aNdqe1jI%2BOT5Efcz18JOwGe2Tgm5eaf0%2FjGBpj5RuqcH1z6H7FWKhoAC%2BEsp%2B6nITBHulNx2R4JZD3%2Fykc6gB6hVwsjiqeU%2BX3U5kYL%2BQ%2Fa9YMNXl5W5tHxO1E7l37F2QvKD11w7uamA58zzjUecHNs5N3Omeo8HGjBikawp1e78XsWETDC1kee%2BBjqkAScOoMxiSi5f5fNe9YuY2%2FvI9XMct5y%2FhIS2zzzWPMUhiitMtVO5%2FMSGdvQEjqId8uXPnM907%2BgY%2Bji4Z7dZvZa3xXkG%2FRhG5HyyZmUU0Rs2mCeLMsoMojk7qn1kFpM7KfeK277lrBP2wM2dZQoboie8Q9dyZiJemKJOyVFM7o6qXgc7Qa%2FITCK%2FXygYaPFoI1sEEQRcdB3y%2Bu6hhf3Ovq0NAmUW&X-Amz-Signature=3f9ae498015d7f601b0ec968522a7fbf39faed6c57808de3e53dd2e49e7920e6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FVGUV4L%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T200703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDTqLLOOXixM9O3NEGz1oS4gRqS0KDv3IgqVHaoZ0JGzgIhAK4IvkxmOzlQUBC2TKvgRb1gFJOVfc%2FeSVJhtjfFvYNzKv8DCGUQABoMNjM3NDIzMTgzODA1IgyPqp%2FRQO5%2BG5wA0JYq3AN%2BZhxlm%2B%2F1mrCnk3%2BqI5hEK1X9ILNX%2BwcUpzXbh4VIOrelMAUJXmoYCctYcv%2BPrZUSMTPSpMnH9DDZeIa2yqbsDmXaQs6Pz1bM6e9yjm%2FCfbI0j25ajJKzcQmqoeq2s%2B6XLVXeq%2FsW0BElPV0iAEaYBBssjFhuoVzkEDasXy15crkkWI6Tn5Q43afKaB%2FSo6Bhl91We2%2FNEEWzgXz9SGXwqgNzkf9IS%2FxdEZbzQpuHB3Nx1vkyWNhS2RAyhIBV1abRsAxU580V92KsDu8HyBHlqOwej%2FOfWFT0aps17IIX7U3nrY%2Fure7vu7WKU%2B%2FjIaZThri4WyjJOtRjHRpLwtP1K1yYY57pRkkQKYJSThQ4k9MEbyuzAsOjFiKQBfIE1DVQYVl%2B361oye1aFspyebLNWp7Y7bmkrWRHkwc1YKzxs9xJ5Yum7nCCegrFFYz1WE4UJnHiiUh4aNdqe1jI%2BOT5Efcz18JOwGe2Tgm5eaf0%2FjGBpj5RuqcH1z6H7FWKhoAC%2BEsp%2B6nITBHulNx2R4JZD3%2Fykc6gB6hVwsjiqeU%2BX3U5kYL%2BQ%2Fa9YMNXl5W5tHxO1E7l37F2QvKD11w7uamA58zzjUecHNs5N3Omeo8HGjBikawp1e78XsWETDC1kee%2BBjqkAScOoMxiSi5f5fNe9YuY2%2FvI9XMct5y%2FhIS2zzzWPMUhiitMtVO5%2FMSGdvQEjqId8uXPnM907%2BgY%2Bji4Z7dZvZa3xXkG%2FRhG5HyyZmUU0Rs2mCeLMsoMojk7qn1kFpM7KfeK277lrBP2wM2dZQoboie8Q9dyZiJemKJOyVFM7o6qXgc7Qa%2FITCK%2FXygYaPFoI1sEEQRcdB3y%2Bu6hhf3Ovq0NAmUW&X-Amz-Signature=3313514a817edfa44c391618aed4be9310ab506584131238971e92f4f0bf8a4d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

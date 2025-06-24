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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUIMGYWU%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T140944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCI6dH8cYuoMVGxx8fO2P%2Bmj92Y1ImvP4RUJK5lfD9e4wIhALUKjFZ3mPGO00Eg9%2FzPLsb0kcsUz0gc2jtdEXEfrH2JKv8DCC8QABoMNjM3NDIzMTgzODA1IgxhZk4IszE3BOVATFIq3AOCkVTGyb8Qvy8Y7qeLqc0SpWDzYEUIdjJLuwgWXUYMAzVGAZqACOEHKnZ7Al4DPZ0zafAfD0wFKfwbdFyAowaKedMRn6B3HbyIFZ2xfQMfkLSEfZjQSQ7AGauzokiQZ5hpUH01lxdiSZqwO%2FSK5%2BjoZckaq7%2Bbs7N3r49IYVRmMNRCAgAFjfkxR%2BUHD%2Bp6sIsSVWKdmRxDbyLpUnsRKLC%2Bf%2FNaKZs8XMg4aTJuborZ8NcFW%2FEWsjhTQTXklkdFxAkiOCnIUgjYk7jG%2B0ZXaJrjNx5h7MD%2FOvFV93iiL1saeSNFPPMZPGAvR5NV1fT4WMNMNF%2BqfZdgD1FIoqryPhQpThOrDx2V%2BlMNBTN%2FGS7eVYbVZkQfuYAQh%2BkECqtveqhWqr1%2FEbldPbAmvlRwvm5G9bUOsPYw%2Fj0XyCZiMLJifoTStf4p6j%2F83vd8Fec1dpeh5rh1129V53gJwkSmdgtTndd5N4ryOYf8ehtg8T%2FASd0JDDEUEYC6bWQUKXj0mouLjHNYLuS2%2FZnLINl1ovsCelyEg9CRryvLOKeHXGvSKxUlaAiCPXg9b358EL0H8%2FmlTgpqCsuUpn8veaCb3vzrm6wcsOm5sn0m%2BrGikPzkK%2FcAb%2BnpeKWjcVxRZDC%2F3OrCBjqkAWD2nvEJhv4LvN%2Fe9Nrm7IqexEftM7Vt0CeI9X4O2cYQx09mQokreZ%2FAlZjf0vFaTGkiAKv83iqPwAMe50UiOTrWG85nhrdsCKCxH2ixz2dXBjZH2DYJEAaA0SlwfKGC9yGSHU5FOnyNAutuPYGo7QTSkLAMcmKc8NJ29SUa7Q0QpY1qicuMK8YXzJC4igPqK6jIKZ%2FbFHDLUZHgZ%2BnZEkI%2BbkR5&X-Amz-Signature=7aa1bdda7f6567e74540333cdce4f98c69da7856f430429bc8e8a16ce3b1f05c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUIMGYWU%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T140944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCI6dH8cYuoMVGxx8fO2P%2Bmj92Y1ImvP4RUJK5lfD9e4wIhALUKjFZ3mPGO00Eg9%2FzPLsb0kcsUz0gc2jtdEXEfrH2JKv8DCC8QABoMNjM3NDIzMTgzODA1IgxhZk4IszE3BOVATFIq3AOCkVTGyb8Qvy8Y7qeLqc0SpWDzYEUIdjJLuwgWXUYMAzVGAZqACOEHKnZ7Al4DPZ0zafAfD0wFKfwbdFyAowaKedMRn6B3HbyIFZ2xfQMfkLSEfZjQSQ7AGauzokiQZ5hpUH01lxdiSZqwO%2FSK5%2BjoZckaq7%2Bbs7N3r49IYVRmMNRCAgAFjfkxR%2BUHD%2Bp6sIsSVWKdmRxDbyLpUnsRKLC%2Bf%2FNaKZs8XMg4aTJuborZ8NcFW%2FEWsjhTQTXklkdFxAkiOCnIUgjYk7jG%2B0ZXaJrjNx5h7MD%2FOvFV93iiL1saeSNFPPMZPGAvR5NV1fT4WMNMNF%2BqfZdgD1FIoqryPhQpThOrDx2V%2BlMNBTN%2FGS7eVYbVZkQfuYAQh%2BkECqtveqhWqr1%2FEbldPbAmvlRwvm5G9bUOsPYw%2Fj0XyCZiMLJifoTStf4p6j%2F83vd8Fec1dpeh5rh1129V53gJwkSmdgtTndd5N4ryOYf8ehtg8T%2FASd0JDDEUEYC6bWQUKXj0mouLjHNYLuS2%2FZnLINl1ovsCelyEg9CRryvLOKeHXGvSKxUlaAiCPXg9b358EL0H8%2FmlTgpqCsuUpn8veaCb3vzrm6wcsOm5sn0m%2BrGikPzkK%2FcAb%2BnpeKWjcVxRZDC%2F3OrCBjqkAWD2nvEJhv4LvN%2Fe9Nrm7IqexEftM7Vt0CeI9X4O2cYQx09mQokreZ%2FAlZjf0vFaTGkiAKv83iqPwAMe50UiOTrWG85nhrdsCKCxH2ixz2dXBjZH2DYJEAaA0SlwfKGC9yGSHU5FOnyNAutuPYGo7QTSkLAMcmKc8NJ29SUa7Q0QpY1qicuMK8YXzJC4igPqK6jIKZ%2FbFHDLUZHgZ%2BnZEkI%2BbkR5&X-Amz-Signature=b53b2d8fda0f70ab209fbe03ed309240280ecb57821ac5896ec3b9525244970a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

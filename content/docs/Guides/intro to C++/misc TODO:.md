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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOEX56C6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T200902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQC8Ruan5TIrAfzUr9UTln8afJJaE%2FuePhmLOATeJiTZugIhAKaLQiP9nIQIc8mRHN%2FrkTh44w13s2stnpGRsWzZRKIUKv8DCGUQABoMNjM3NDIzMTgzODA1IgxhatROFe13CVeamNIq3AMprmfmlBU9VnYdJZp05Ex%2BBCSyfpiB9KXsKoS14IrGazyaK%2FcAHGynRHM%2BlCb2gYRqBq9tfpjhbF3B0ks%2F5GmlPH66TlaqHaMK8A4gGtk1BjpMLiOskrjDJr3KMMhpAnf8IXKbvjZzlAL47XKneQpWOLTObKT5H85UjyU9yMPFqSGCidE6IBohK%2Fhqj3v%2B%2BVEFff2akFPJvMi9E0rsi8bxnJUjGxk%2Bacic8vfK5pEj8WSB6wtdjoquxrISYosjoa7NvjqtJ34CTaDK8Caem7SqlQW4OaCUVAYOZj%2FIexkFqALHTZZv0fGfyaPc6jH44odSXnCA6CjAq7I4FmnTTLr%2Fk3GhswXYedCPUropnzt0HuEyjz6o1SfsLfAplfb7cTA0vkOFlnc%2FkEFYKR%2BO%2FxGTlR7v8E%2BaE3VxBo5KbT%2BvRm0L0l%2Bkp9VkN10bEilVWfkAZGfwTI7%2Fyz%2BqXVJUQC%2B%2FajKQzGulQ8gfsr7Oa75Rm8JAvPQaDiPJwuPqY64npN24YOQp4qXhfCdenU%2FNmYpQ8jY3npDaLPxh%2B8lPW0776W%2FzYE63BcusZaw%2B3dpkEzWUKLQ4ud%2FHv9I3xgQYcEC94d4apAyd77SrgPFwvwnArq26jFmsz1u2A9bi0zCm2ZTEBjqkAQNfGcD%2FU4XYJgsE%2B%2BsWgNBWrQTiwOSF%2F5YZaD%2FMsaXSF5tlrkZkCWQSJTKnQg6lMsvysuKYzcFUwxf0LGNDfqImmcmroVmMSOCRR5h0xcuwSsA33TdfdJSejZ45caw7XySij3BmI0gxmyaadDUgsxE2QrD%2Bv7GYp04wq4DoxXiN2sA8zrgQxhXn6ZY4tqmaZPO7hAAv08SURbUnFph67IU%2B39il&X-Amz-Signature=f71d08e99b6cbee47c950c387e798e482889741c5851d5562ee00c3a3bb10711&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOEX56C6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T200902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQC8Ruan5TIrAfzUr9UTln8afJJaE%2FuePhmLOATeJiTZugIhAKaLQiP9nIQIc8mRHN%2FrkTh44w13s2stnpGRsWzZRKIUKv8DCGUQABoMNjM3NDIzMTgzODA1IgxhatROFe13CVeamNIq3AMprmfmlBU9VnYdJZp05Ex%2BBCSyfpiB9KXsKoS14IrGazyaK%2FcAHGynRHM%2BlCb2gYRqBq9tfpjhbF3B0ks%2F5GmlPH66TlaqHaMK8A4gGtk1BjpMLiOskrjDJr3KMMhpAnf8IXKbvjZzlAL47XKneQpWOLTObKT5H85UjyU9yMPFqSGCidE6IBohK%2Fhqj3v%2B%2BVEFff2akFPJvMi9E0rsi8bxnJUjGxk%2Bacic8vfK5pEj8WSB6wtdjoquxrISYosjoa7NvjqtJ34CTaDK8Caem7SqlQW4OaCUVAYOZj%2FIexkFqALHTZZv0fGfyaPc6jH44odSXnCA6CjAq7I4FmnTTLr%2Fk3GhswXYedCPUropnzt0HuEyjz6o1SfsLfAplfb7cTA0vkOFlnc%2FkEFYKR%2BO%2FxGTlR7v8E%2BaE3VxBo5KbT%2BvRm0L0l%2Bkp9VkN10bEilVWfkAZGfwTI7%2Fyz%2BqXVJUQC%2B%2FajKQzGulQ8gfsr7Oa75Rm8JAvPQaDiPJwuPqY64npN24YOQp4qXhfCdenU%2FNmYpQ8jY3npDaLPxh%2B8lPW0776W%2FzYE63BcusZaw%2B3dpkEzWUKLQ4ud%2FHv9I3xgQYcEC94d4apAyd77SrgPFwvwnArq26jFmsz1u2A9bi0zCm2ZTEBjqkAQNfGcD%2FU4XYJgsE%2B%2BsWgNBWrQTiwOSF%2F5YZaD%2FMsaXSF5tlrkZkCWQSJTKnQg6lMsvysuKYzcFUwxf0LGNDfqImmcmroVmMSOCRR5h0xcuwSsA33TdfdJSejZ45caw7XySij3BmI0gxmyaadDUgsxE2QrD%2Bv7GYp04wq4DoxXiN2sA8zrgQxhXn6ZY4tqmaZPO7hAAv08SURbUnFph67IU%2B39il&X-Amz-Signature=bede5c37daf7dd5e11a17430bd54bcdd105f875219581c0463bdd9e1d15fcbc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

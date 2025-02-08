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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J5QAXK6%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T100420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCeyV2zDcBR7np6D%2FaOyhAYjwqlZpS2MsKMEgIFIbPZjgIhAOZ8sZh8mpK9BoCIU%2BtIxrp%2F9N3FGlPmc227WxwsUCYYKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDLTNEZxwNp53G1goq3AMUr7CKvjczjpYgxMrLLs5s7dX2Yf3hGTTcTgVof2ol%2BBNxoOkqVxfYPyNpFO%2FtPrSk27OxwNCett5s4s00ztA7kEQPJZH4Dnj1XG%2Fm9EslrLMb%2F1wtGBAbzcAAo2S4rTkkji3Wwm8mtRtMQDchIRLfrfV6ZYqcTLY%2BAMc%2Frbpwx10FGb0qhC1Mkh%2BnrYZuS%2BGC1PNRTxHzIdllLY92C8VzGTqz7BRr5AUorVnN87Rw%2B1FQ%2B7gjfrOU1HNvad%2Bn7xqH3SHBTZ3%2BByVEOvLcFm%2BXZPK0yk%2FzyovBOgxMpZABx93MeWjzUZImnERqYLdL2Z7onbX7e8JaT3L4WUP8zAOgQrfp76vXGh8GWcfPPKSpPP1jqAXAa0v29DV0dlH6le2WWShXNKYnuDVxW9YbLWPIHiFpCAEqiVViTaMYyatgXGcFS7z1In6q3S7RRwpAz7lCzbkqyPo8jJ3z4IIZsoLV6fD7w0sBZGnmaO4rwZ%2B5oECYvDldn%2FK%2FYPrdT8E3pcObAQkY9xxszfZYuTNzRav1c4Dbhuj9z3F99d9AyA%2B9NgjCgUcUCGsihYyL5zHOxB0EHVSk%2Bb032e7jxyF%2FMbo%2FVvbjhXSpuoS18%2BlPVgRerYrp5HE70we7%2FQzmtTCUkJy9BjqkAXinIkMTqm4I4qa3WUB%2BrKU%2B5PqWneKZiXZb4cYtt5MPjGq1ekpahWB4LEeuKuHm3SpEXfBaqCJp2mdicrCSnBjZUnBRZER47EbRtX7qzzTUTKIDZQr5RHSew3y55zrJM4CWrRcft0n%2FZ8CW4jWEJ1Y4NJneodY3uefQBlmKg5q81Ed9ygYyZdxLA1iczz1faRKlib1wmaB2DfY07xtJjNmwtZF0&X-Amz-Signature=3899e4bd98f1599842b2e608675762c54f6d481d7764559fa70dfe50cc9bee6f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J5QAXK6%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T100420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCeyV2zDcBR7np6D%2FaOyhAYjwqlZpS2MsKMEgIFIbPZjgIhAOZ8sZh8mpK9BoCIU%2BtIxrp%2F9N3FGlPmc227WxwsUCYYKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDLTNEZxwNp53G1goq3AMUr7CKvjczjpYgxMrLLs5s7dX2Yf3hGTTcTgVof2ol%2BBNxoOkqVxfYPyNpFO%2FtPrSk27OxwNCett5s4s00ztA7kEQPJZH4Dnj1XG%2Fm9EslrLMb%2F1wtGBAbzcAAo2S4rTkkji3Wwm8mtRtMQDchIRLfrfV6ZYqcTLY%2BAMc%2Frbpwx10FGb0qhC1Mkh%2BnrYZuS%2BGC1PNRTxHzIdllLY92C8VzGTqz7BRr5AUorVnN87Rw%2B1FQ%2B7gjfrOU1HNvad%2Bn7xqH3SHBTZ3%2BByVEOvLcFm%2BXZPK0yk%2FzyovBOgxMpZABx93MeWjzUZImnERqYLdL2Z7onbX7e8JaT3L4WUP8zAOgQrfp76vXGh8GWcfPPKSpPP1jqAXAa0v29DV0dlH6le2WWShXNKYnuDVxW9YbLWPIHiFpCAEqiVViTaMYyatgXGcFS7z1In6q3S7RRwpAz7lCzbkqyPo8jJ3z4IIZsoLV6fD7w0sBZGnmaO4rwZ%2B5oECYvDldn%2FK%2FYPrdT8E3pcObAQkY9xxszfZYuTNzRav1c4Dbhuj9z3F99d9AyA%2B9NgjCgUcUCGsihYyL5zHOxB0EHVSk%2Bb032e7jxyF%2FMbo%2FVvbjhXSpuoS18%2BlPVgRerYrp5HE70we7%2FQzmtTCUkJy9BjqkAXinIkMTqm4I4qa3WUB%2BrKU%2B5PqWneKZiXZb4cYtt5MPjGq1ekpahWB4LEeuKuHm3SpEXfBaqCJp2mdicrCSnBjZUnBRZER47EbRtX7qzzTUTKIDZQr5RHSew3y55zrJM4CWrRcft0n%2FZ8CW4jWEJ1Y4NJneodY3uefQBlmKg5q81Ed9ygYyZdxLA1iczz1faRKlib1wmaB2DfY07xtJjNmwtZF0&X-Amz-Signature=d518aa2f863e0e280cc4bdb1ab6fa0f992dda310ad65a89df8085fddaaadae97&X-Amz-SignedHeaders=host&x-id=GetObject)

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

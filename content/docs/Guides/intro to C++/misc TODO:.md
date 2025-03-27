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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7DFKQ2M%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T100846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClEqUbQLUtnD27AiL8hdxTDAga3WHnm2GrdpHBDhzEJAIhANw9tCbCGcMDxSBBK69VEJdgpvWP3wUgNCJ9SbdZIzgyKv8DCEMQABoMNjM3NDIzMTgzODA1IgxJT5N1qHcqgWzM6Zcq3ANlwvy%2F2ErKfWAFi2lSSQxapxY4Q1v95DCsytxpjsQPoQ61u1%2Bi2LDcfTYQ6hMdtNqfXyZ%2BWPpKZMS4PkcsdYkPc8nVoaWa79bdeJbrrNLziVM2am3NTcn6xQT9NJPxWze6tYqNe7MLwgWiDDLhbluhuMZnJb8Yh4NMzAD8jBYWk1uKL0a8%2FfCmOo6E%2BFbfkGxcijEwIziB6rUC83zMJPLH9g%2FAk4iQPefU0IJc2QgduxBrMha0kBeEQj%2FyuouBJ7z84SL73wlacTqH8AgKjmcv972aaIFUkUE4vDSrxiUidJGkZXQU0cFSRE2rkQD9H6HcBg985Rnow3l%2FpDatsH1D%2FmBz%2FoJh4ED7FOHi9oaKSRg3%2BbWyPSi14nFld1FixUhRGeL7%2BaLXf%2B9zljxwec%2FJk9yVcr6XqXowgltkVaHxUNfwv0lLMNq07j%2FkfRs5doTFj5Q97ZyDVbFDgrxL5%2BXZlYTjOPBxJkwwv5js%2BF1QAS7bNujWPneL3cZUfuwE2BIc3k5fl%2B1J6UqZ%2FGGVVzqCV4TM5rNet8jFyZJjipxX7oE8cafVcKAXjIV8%2FxPYC81NfSemI4XmG4IOC6uIcCAV7MfKUIzn%2BoTWitHgHpFSVXC21HFePxBoyssH6jCdv5S%2FBjqkAeZFfxZOeJPOFj6xE2YLnNfA3K%2FAtsIXkkp5nreX0%2B4emy3yr5yMIRsgoK%2BxflvCk%2FMa93ATRufxWbbCvSTRME8CEaXNtqiDWGVPS7bVXcvX65JwZdXHoxuH9%2F0Igaci8pF%2B9pzDktF4Czc3vTwpm%2FjrHoH9iBt1QqZVl7doqAriwROvOCsZluDmMOdg7JZ6qI3K0gP09%2FhQXQK8UPBm8scmUJ1f&X-Amz-Signature=109e0f6563b236ad2f868c2118b09258de805843d2f26682121459663bb26f2c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7DFKQ2M%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T100846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClEqUbQLUtnD27AiL8hdxTDAga3WHnm2GrdpHBDhzEJAIhANw9tCbCGcMDxSBBK69VEJdgpvWP3wUgNCJ9SbdZIzgyKv8DCEMQABoMNjM3NDIzMTgzODA1IgxJT5N1qHcqgWzM6Zcq3ANlwvy%2F2ErKfWAFi2lSSQxapxY4Q1v95DCsytxpjsQPoQ61u1%2Bi2LDcfTYQ6hMdtNqfXyZ%2BWPpKZMS4PkcsdYkPc8nVoaWa79bdeJbrrNLziVM2am3NTcn6xQT9NJPxWze6tYqNe7MLwgWiDDLhbluhuMZnJb8Yh4NMzAD8jBYWk1uKL0a8%2FfCmOo6E%2BFbfkGxcijEwIziB6rUC83zMJPLH9g%2FAk4iQPefU0IJc2QgduxBrMha0kBeEQj%2FyuouBJ7z84SL73wlacTqH8AgKjmcv972aaIFUkUE4vDSrxiUidJGkZXQU0cFSRE2rkQD9H6HcBg985Rnow3l%2FpDatsH1D%2FmBz%2FoJh4ED7FOHi9oaKSRg3%2BbWyPSi14nFld1FixUhRGeL7%2BaLXf%2B9zljxwec%2FJk9yVcr6XqXowgltkVaHxUNfwv0lLMNq07j%2FkfRs5doTFj5Q97ZyDVbFDgrxL5%2BXZlYTjOPBxJkwwv5js%2BF1QAS7bNujWPneL3cZUfuwE2BIc3k5fl%2B1J6UqZ%2FGGVVzqCV4TM5rNet8jFyZJjipxX7oE8cafVcKAXjIV8%2FxPYC81NfSemI4XmG4IOC6uIcCAV7MfKUIzn%2BoTWitHgHpFSVXC21HFePxBoyssH6jCdv5S%2FBjqkAeZFfxZOeJPOFj6xE2YLnNfA3K%2FAtsIXkkp5nreX0%2B4emy3yr5yMIRsgoK%2BxflvCk%2FMa93ATRufxWbbCvSTRME8CEaXNtqiDWGVPS7bVXcvX65JwZdXHoxuH9%2F0Igaci8pF%2B9pzDktF4Czc3vTwpm%2FjrHoH9iBt1QqZVl7doqAriwROvOCsZluDmMOdg7JZ6qI3K0gP09%2FhQXQK8UPBm8scmUJ1f&X-Amz-Signature=621805373206589626c756ff6903a46438cd82398ba5baeaa2fb218f8fe6fabb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

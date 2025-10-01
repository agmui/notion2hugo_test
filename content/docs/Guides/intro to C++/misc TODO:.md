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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W43OCZU%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCoBL9bEfgXYju%2FZz027oAVRc5PZlTrojEZwEMW7JLXuAIhAICQMm%2BN5ndOouHYuURRW0lfPPtpSJIgmTmO%2Fm1o0vQJKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0xSvQHKUqHXRYPhwq3ANUgZPNthMYibX9qkbvET%2F3D5gRZFSdyso1gb3IK51uYgcvjwneNTLD%2FrV7P3EwqoPbpNrTgRJYFJJnDKEIYxslY6FMzVssYF2xPKG6ooIdWyC5DD11xoygsY4eeLU9MiFXpRKxovMtMpvf710IyuyECF75WFK9xZ18%2F7k7U9ByyXrlDbTj5%2BQop77WHBbMaCz%2B4l4mE2IChuY4UYf1CRdAD9MwVPMk%2Fn8t6spK3UMi51G8EICXTfGbVB81EBsvNq6TCj%2BjzC5fqWo9OiE1YsmVjtfP211BwXqWVsUwaX6raKSjhRpyvy1FWTG8m03BDWXNrWjRR5EjWxKLmxre85dTahBswqnMeSTUPIswHWHo4FmUtekqj8oSHdWBaSCh3tfTCDqFEgz9%2FwI8npHlim6NZg93jeJ62RaEPSG4Cfm%2BE63pIcHw8xbWcZ8zYWbKubyYU%2F%2B8uu%2BX5Q0zq4SyGlKFPwMl3%2BupJeblOTo%2FlkQ8NYy%2FmmmJDcUNH3qsJhYORrM5fdyo5FoYREmvb%2Bsgrd5wq%2FZYR9oCMPzGRqiFEF6RAad7PibJY7Up8SLL9dn2RcCl%2Fp11RkmAT%2F0LqqlJyFw0oHeeyJ8RQBWlC6BeePjk3WLI4E7bx5j3LmMG9DCUifLGBjqkAfEACnCfemU0Ml72onEpdllWAimNWXfIdEbvT0sRBQ9SfH%2FwYfjij5FfcYCbY0boVKeGIx0R3h1aFlIGwhYTgBdbY%2FRy01zOLvlRXgPiks766R550Hio0Egb9gb1lCz0vvxrOVAA6gSa3i5Vk3WeoDij6gJNa4QYlXirM4RJSbQgWl4ILtxrfoTZqck89mxQ0FQ49bNe5KuovTaqxyy3qGPXWc6i&X-Amz-Signature=08a5ee73e75c50afd1b25be07bd0e301dcdbbb5dcf8c37ad30711198dce5d3f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W43OCZU%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCoBL9bEfgXYju%2FZz027oAVRc5PZlTrojEZwEMW7JLXuAIhAICQMm%2BN5ndOouHYuURRW0lfPPtpSJIgmTmO%2Fm1o0vQJKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0xSvQHKUqHXRYPhwq3ANUgZPNthMYibX9qkbvET%2F3D5gRZFSdyso1gb3IK51uYgcvjwneNTLD%2FrV7P3EwqoPbpNrTgRJYFJJnDKEIYxslY6FMzVssYF2xPKG6ooIdWyC5DD11xoygsY4eeLU9MiFXpRKxovMtMpvf710IyuyECF75WFK9xZ18%2F7k7U9ByyXrlDbTj5%2BQop77WHBbMaCz%2B4l4mE2IChuY4UYf1CRdAD9MwVPMk%2Fn8t6spK3UMi51G8EICXTfGbVB81EBsvNq6TCj%2BjzC5fqWo9OiE1YsmVjtfP211BwXqWVsUwaX6raKSjhRpyvy1FWTG8m03BDWXNrWjRR5EjWxKLmxre85dTahBswqnMeSTUPIswHWHo4FmUtekqj8oSHdWBaSCh3tfTCDqFEgz9%2FwI8npHlim6NZg93jeJ62RaEPSG4Cfm%2BE63pIcHw8xbWcZ8zYWbKubyYU%2F%2B8uu%2BX5Q0zq4SyGlKFPwMl3%2BupJeblOTo%2FlkQ8NYy%2FmmmJDcUNH3qsJhYORrM5fdyo5FoYREmvb%2Bsgrd5wq%2FZYR9oCMPzGRqiFEF6RAad7PibJY7Up8SLL9dn2RcCl%2Fp11RkmAT%2F0LqqlJyFw0oHeeyJ8RQBWlC6BeePjk3WLI4E7bx5j3LmMG9DCUifLGBjqkAfEACnCfemU0Ml72onEpdllWAimNWXfIdEbvT0sRBQ9SfH%2FwYfjij5FfcYCbY0boVKeGIx0R3h1aFlIGwhYTgBdbY%2FRy01zOLvlRXgPiks766R550Hio0Egb9gb1lCz0vvxrOVAA6gSa3i5Vk3WeoDij6gJNa4QYlXirM4RJSbQgWl4ILtxrfoTZqck89mxQ0FQ49bNe5KuovTaqxyy3qGPXWc6i&X-Amz-Signature=70f64c849c3c84158143f5c286a826b5d3517973e42215f4c6957ae144be13a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

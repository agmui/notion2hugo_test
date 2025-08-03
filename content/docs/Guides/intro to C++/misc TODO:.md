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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYN66GGK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVM9yGkw6Jmy%2BZwBRWlV0w71T3A%2FjBdB3u46o08Ih8XAiAht3T4GkhSfMY9IyoICMoiMX7AbPuoKZUJP%2FhpxFePaCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMmpumnVF4PuRRsFrzKtwDux%2BxDCADCCFxoqPu1kW%2BMuGKRnGm5%2F8jPp99VY2V2bAzC6AJRcE5W1uqoz1xsPDS0Ay%2FMNB3m%2F%2FappkjKuDPHKQV3pVtVUlCcOongSFOGmVHKveILrA1vf%2Bs0gl4pB9EJ6M6riYenOPWvTbMXJBOzff53ZXfI%2BVz5UZSZT3xZOIZLH3tUlrmn%2Bp5Kz9FGYghlSZ5xKz4Ir7Oa76MD50ZIndR%2FXi0LzBOYC4%2BcCbEvRnARn2byENLF9V%2BF32PAz1QvaLvuEjV63%2BueUbwtqlBXOzBaRfwR6PJ0a%2B%2FCIdDfHBMLmPNuagkA2RPKAoRasUqXwlUmIn%2FMNihU5by%2F7HQTbED7%2BT9Un15Lv67BvEKbSvCFk0nGsEVKlPftNYGE0XkRdvKghxOa2RSQ6hI7exkE7gFg3EkZA%2BkCos5Lp3QiPCTQujH5gJFinKjqMWD5Z8SosAUp250m65q31llpmWVLxOBm7jbykOF94u8gutlGF%2FiDCT0AFGnJzz5j%2FlEZLBib1kOR7tXamIL55O3euDhRFQqTRzjciUepNtAI5bpFM2yURls9gDwAzQwbgpHXYq5LGVbkYrJNIKAI3h10a687spvVUGufrXCRqoJnHoAqBP8y8vlkft6oDTaAMIwxJ67xAY6pgH16VXOXEm%2FbYMRjhcAAxQKMObNj%2FMTH6HZWdAYaRDWW8ggMdzQ50M3t%2BMOW594v1A%2BVuf5JUMCjZuO56s910RbGAwaSdTlFS9Fx%2FLSIvYziVNWpChNMpzcjuv2gorXlAIxwjHBNFJdUQcp%2FCm0K8uOlph0TtsiDJz5CU%2F9Wyplc2pkUAmZ6RiCMlaqjRqbRuWqKgXQEzQ7CPncS2QmHdaXCSOgWbZb&X-Amz-Signature=83b8ed5d6bbc67b5dccf9075da3b337d1bff97a570028e2f4c66402f423ee18e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYN66GGK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVM9yGkw6Jmy%2BZwBRWlV0w71T3A%2FjBdB3u46o08Ih8XAiAht3T4GkhSfMY9IyoICMoiMX7AbPuoKZUJP%2FhpxFePaCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMmpumnVF4PuRRsFrzKtwDux%2BxDCADCCFxoqPu1kW%2BMuGKRnGm5%2F8jPp99VY2V2bAzC6AJRcE5W1uqoz1xsPDS0Ay%2FMNB3m%2F%2FappkjKuDPHKQV3pVtVUlCcOongSFOGmVHKveILrA1vf%2Bs0gl4pB9EJ6M6riYenOPWvTbMXJBOzff53ZXfI%2BVz5UZSZT3xZOIZLH3tUlrmn%2Bp5Kz9FGYghlSZ5xKz4Ir7Oa76MD50ZIndR%2FXi0LzBOYC4%2BcCbEvRnARn2byENLF9V%2BF32PAz1QvaLvuEjV63%2BueUbwtqlBXOzBaRfwR6PJ0a%2B%2FCIdDfHBMLmPNuagkA2RPKAoRasUqXwlUmIn%2FMNihU5by%2F7HQTbED7%2BT9Un15Lv67BvEKbSvCFk0nGsEVKlPftNYGE0XkRdvKghxOa2RSQ6hI7exkE7gFg3EkZA%2BkCos5Lp3QiPCTQujH5gJFinKjqMWD5Z8SosAUp250m65q31llpmWVLxOBm7jbykOF94u8gutlGF%2FiDCT0AFGnJzz5j%2FlEZLBib1kOR7tXamIL55O3euDhRFQqTRzjciUepNtAI5bpFM2yURls9gDwAzQwbgpHXYq5LGVbkYrJNIKAI3h10a687spvVUGufrXCRqoJnHoAqBP8y8vlkft6oDTaAMIwxJ67xAY6pgH16VXOXEm%2FbYMRjhcAAxQKMObNj%2FMTH6HZWdAYaRDWW8ggMdzQ50M3t%2BMOW594v1A%2BVuf5JUMCjZuO56s910RbGAwaSdTlFS9Fx%2FLSIvYziVNWpChNMpzcjuv2gorXlAIxwjHBNFJdUQcp%2FCm0K8uOlph0TtsiDJz5CU%2F9Wyplc2pkUAmZ6RiCMlaqjRqbRuWqKgXQEzQ7CPncS2QmHdaXCSOgWbZb&X-Amz-Signature=e22dffcf3863ee6312ccdcd7f3811facc2f3f7bf27d72e5e06b5afc249b8976a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647Q4SLOW%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T070724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCO%2Fc9aV6LDOeYztZJ3vHrdDw6tQ9B37B5PJMXEKvwdEAIhAIZ1UgJDPu91P5dgeOT0zHWacvxAd6GeaQnfH30Gq697KogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbDD3Ld4E5ZnrsdRgq3APSgJ6iYgM4yZ9u07B3jcfLoTYDMRrhFWjgu3ZcKiMFTpDkyoMEpyAKCPMEXH68F6rs4STeWw3vBi7Jaf7n%2FSeBjZwnZkv6618BmVnuXHZIcFsHV0ccGzveYo%2B4reZs%2F6Hs1oqztpLz%2B81emqKWAYgKt%2BTJExA67RO0HRCvCwhvRVqsiLvjxuNrGCH%2BTvCfA%2BRsd33KOq1nhWy8bOZ53pfmLsJRd4SJ2XEVhYxCjQvM%2B0umK7dw%2Fc1uj%2FoL1VYruwsl%2FEY7iay%2B9wdbrLb8TS6GtNu%2FiYYzFA22YkNLN4CYoSeOTCZfhXGpRlzgUlYWfOPNZ9D7Ac0cfr%2FYnBQ05OE2Jv2WV0%2BVShJb%2FLKh0xsraI%2BSZdfk3YjZHY%2BlJqm%2FOc9dvzTBSnlVPlMbQKksFaWuCHt6OheJdMogVc4W7FKVUHmjaCSmOxa3EbNY8AR67DYQPBKWgDbhkhy3nGO12OaMNpfz%2FcKdTwG6643v9OgB2FSkv%2FGphaCkXQ7mtpeNyCbW%2FPsXgJXtzDjp9WGz7VWYkoJ9DBRqm7CfMYq5ZRacOnxmCR3k%2Fw23kMZntk3rY3czrXugTKOsX3P7DiMn1VApIQEUis0Bbt5yiVApiy%2Fc10pLDGPKvsIjWMgaoTCA4%2FG8BjqkAfvJljXJwJsbFmVsTFC%2FBMtqrCypmjHEaakkHW5F5Dt%2BEFF6uuU4%2BK1X0sCYZ7ECY2KyckT%2BiFJCVnp4x2Gi8%2FNpHgi%2FI%2BbtWSe%2FPlxMcD8SzO0YBGWqj2TleBnfkDvnk1MdAYSduwrX7OHk3FaXK%2BamnSC%2FRCsCoCh4j7lrRsDfdxbXDLoR9Esygiy5uop%2FY2iefz9EvVKzWzXuuQuNFCVDdspc&X-Amz-Signature=3ccb81e6c0aec0febd11671358ddace9f540e1a9709d7199ecb883896f101688&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647Q4SLOW%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T070724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCO%2Fc9aV6LDOeYztZJ3vHrdDw6tQ9B37B5PJMXEKvwdEAIhAIZ1UgJDPu91P5dgeOT0zHWacvxAd6GeaQnfH30Gq697KogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbDD3Ld4E5ZnrsdRgq3APSgJ6iYgM4yZ9u07B3jcfLoTYDMRrhFWjgu3ZcKiMFTpDkyoMEpyAKCPMEXH68F6rs4STeWw3vBi7Jaf7n%2FSeBjZwnZkv6618BmVnuXHZIcFsHV0ccGzveYo%2B4reZs%2F6Hs1oqztpLz%2B81emqKWAYgKt%2BTJExA67RO0HRCvCwhvRVqsiLvjxuNrGCH%2BTvCfA%2BRsd33KOq1nhWy8bOZ53pfmLsJRd4SJ2XEVhYxCjQvM%2B0umK7dw%2Fc1uj%2FoL1VYruwsl%2FEY7iay%2B9wdbrLb8TS6GtNu%2FiYYzFA22YkNLN4CYoSeOTCZfhXGpRlzgUlYWfOPNZ9D7Ac0cfr%2FYnBQ05OE2Jv2WV0%2BVShJb%2FLKh0xsraI%2BSZdfk3YjZHY%2BlJqm%2FOc9dvzTBSnlVPlMbQKksFaWuCHt6OheJdMogVc4W7FKVUHmjaCSmOxa3EbNY8AR67DYQPBKWgDbhkhy3nGO12OaMNpfz%2FcKdTwG6643v9OgB2FSkv%2FGphaCkXQ7mtpeNyCbW%2FPsXgJXtzDjp9WGz7VWYkoJ9DBRqm7CfMYq5ZRacOnxmCR3k%2Fw23kMZntk3rY3czrXugTKOsX3P7DiMn1VApIQEUis0Bbt5yiVApiy%2Fc10pLDGPKvsIjWMgaoTCA4%2FG8BjqkAfvJljXJwJsbFmVsTFC%2FBMtqrCypmjHEaakkHW5F5Dt%2BEFF6uuU4%2BK1X0sCYZ7ECY2KyckT%2BiFJCVnp4x2Gi8%2FNpHgi%2FI%2BbtWSe%2FPlxMcD8SzO0YBGWqj2TleBnfkDvnk1MdAYSduwrX7OHk3FaXK%2BamnSC%2FRCsCoCh4j7lrRsDfdxbXDLoR9Esygiy5uop%2FY2iefz9EvVKzWzXuuQuNFCVDdspc&X-Amz-Signature=35013e19978e966a6cf5a919668385e76949fb7792ece19fa9cfd7ecfd95ef9d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

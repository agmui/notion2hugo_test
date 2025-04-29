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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SJRTIAG%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCWm0v%2FTvUW3gCQzfTekS2S%2FCRYYnNEeabjPnuney88AiBn49VDCI9jx3FjkzDRY33fR5KjBII87UzBD1RJqOoNkiqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAqeXTcDsfEX7okLgKtwD0s2cEWWEKaRgsE4RUTl9afQABSpV4aRNETRGbFBloi%2BPkvUV4%2BznpcOsVv5t0fWm0tCxc7pkDjOXKXkIOLoRgZqAonXXIVzN4vn%2BAVH9YD5GSVtKH1VXje4EbD2H0%2FW3vUwZHBlrSZMEK62uEbqCf5vKO4AzjdQRP1%2Bx1JQMxxlLzSsUEz0Pd%2FpI84JUJBfdWrN0xgWqA3l4ZvTX5RHcTnM8oaeO5jBOwiVdVGSwgWNDIZAExQNviKQhijdCgkWvYp4TAxRe61A9%2FHDnIKdT025ryhl0Gd3N7MekKBWM%2BCvn8s%2BxP5vYZarf9HYNNUUKTVHuJnskgfpchZpXEjzFRaJ1dMjmCaVkXFB%2FlPOm6puBXSQH1d2FQYMNXVODEo1Yeb8ha9X8jl5NUjk5fZw7kKdVtT7CSpZGDOYi6TU4OvsqPhYxfMt11V1GoBcYHkkKq64awa6oHfyHP2c%2BR5D%2BpUX6G5%2BfA0zgJQH5p3uzFIygOXbyFyKkLC9ws3TFC8xJKGPFVyuy7K7EUJGrfm8KGGfQbvhYQq%2FnUsqn77WlL%2FJ7I%2Bhf9cVZ8i7tpZI78Jeh%2Fs1RKOIpzR%2FNqA%2BiMI7Xh1z2M20fajDaXa%2FZW0eJHBOMLpcWdqu3cb9uGxAw4u3BwAY6pgEXNDoy11sFJSXJbNzmEqN1Jh0E5CycisWWKskVyqOMKG6QvzuwKs5SP772cOLuWUjXahjxnmZ9RPNjzTI6kRoc2J%2BWnBvCOhZZDlVm21iLqJQpr6qazUyGJ3wBt23p3BH378wf76QjVXk0dkFcqH8Sd%2FxCREuI2SIl2u3KiO3jsCAP%2FylnNOoSqP0MBPDVpgaDZ8lCCp5ZfuLWbb81aYCiQWMqRW6g&X-Amz-Signature=06d0784afdfd37468a01cd7eee339df6e54d546de0e89b3952c2f65f7bfaa622&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SJRTIAG%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCWm0v%2FTvUW3gCQzfTekS2S%2FCRYYnNEeabjPnuney88AiBn49VDCI9jx3FjkzDRY33fR5KjBII87UzBD1RJqOoNkiqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAqeXTcDsfEX7okLgKtwD0s2cEWWEKaRgsE4RUTl9afQABSpV4aRNETRGbFBloi%2BPkvUV4%2BznpcOsVv5t0fWm0tCxc7pkDjOXKXkIOLoRgZqAonXXIVzN4vn%2BAVH9YD5GSVtKH1VXje4EbD2H0%2FW3vUwZHBlrSZMEK62uEbqCf5vKO4AzjdQRP1%2Bx1JQMxxlLzSsUEz0Pd%2FpI84JUJBfdWrN0xgWqA3l4ZvTX5RHcTnM8oaeO5jBOwiVdVGSwgWNDIZAExQNviKQhijdCgkWvYp4TAxRe61A9%2FHDnIKdT025ryhl0Gd3N7MekKBWM%2BCvn8s%2BxP5vYZarf9HYNNUUKTVHuJnskgfpchZpXEjzFRaJ1dMjmCaVkXFB%2FlPOm6puBXSQH1d2FQYMNXVODEo1Yeb8ha9X8jl5NUjk5fZw7kKdVtT7CSpZGDOYi6TU4OvsqPhYxfMt11V1GoBcYHkkKq64awa6oHfyHP2c%2BR5D%2BpUX6G5%2BfA0zgJQH5p3uzFIygOXbyFyKkLC9ws3TFC8xJKGPFVyuy7K7EUJGrfm8KGGfQbvhYQq%2FnUsqn77WlL%2FJ7I%2Bhf9cVZ8i7tpZI78Jeh%2Fs1RKOIpzR%2FNqA%2BiMI7Xh1z2M20fajDaXa%2FZW0eJHBOMLpcWdqu3cb9uGxAw4u3BwAY6pgEXNDoy11sFJSXJbNzmEqN1Jh0E5CycisWWKskVyqOMKG6QvzuwKs5SP772cOLuWUjXahjxnmZ9RPNjzTI6kRoc2J%2BWnBvCOhZZDlVm21iLqJQpr6qazUyGJ3wBt23p3BH378wf76QjVXk0dkFcqH8Sd%2FxCREuI2SIl2u3KiO3jsCAP%2FylnNOoSqP0MBPDVpgaDZ8lCCp5ZfuLWbb81aYCiQWMqRW6g&X-Amz-Signature=c87922ac6e702ad68a64641c9a9e0744828c755db1243c44da7ded1a7cd225f5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK3MIHAO%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGkeHWcnG8Ar9sJZIlY2frvuwfgFtBh5%2BAjtu%2BqokWSeAiAJqQm4d94dgml8vlOUMw5kE7kFf43aoDzwwGcu1JfD6ir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM%2BCIygIvRTaL6OgDnKtwDckMBES%2FXtbElEWC%2B%2FyskJNs31AA1mR4UAVONBjUKG0N7oHtyThbzXQdZBROgYb4q2JonBcWxVCGWWJ6mzh8oo4QHxkkiRyI%2BPOMM3VUvXZq0olhHPo%2FXjMr1dRtDaFqLMgdeFSHdWGpTNY2w2ZZ90UuD2yCXtFTvHaipHpszh6wXPUvYlR6JINw32lKjNXhW2CLlH1Me8fuGbVrdz7X994zUnN92DWzYIqX%2FGTaJQ88yOAdWq7VUoYEvYcUkUQyflNlphNdHyMIYSVc6S%2BEi9TQ%2FQvsdncmvKSnW6QpB9WzrR4z0Mf3mV26YMeywgUwUhkcxH3q8Qon8NwLWOEJktuvQsGSV%2BGXQKsYeUDT3uiIqL1stIGPUN8UkuBExkHZxdC5XICG95uEUfI9DwnqSZDiHukcW5T87i42ZIw%2BBPEpjw0tU%2Bs8z7MwvH26KlKJHab9fqSYn9Tu0elWbAMf99orf7t7ksxdxYNVqO%2B730H%2BFlxU8Sh%2FPRtlwR5vhw0K6lJSl54Ybj8K85kvFIZssuWFpWo3BMqeyQ42kavUHcO%2FUEy%2FBHfXRvmoxxHyYB%2FgRwcknRQc%2B1dbcX2VnvJsOBSNvATMPS7AKI%2Bfn84hkjYrM%2FJsY0vz1FX%2BBiV4w75SRvwY6pgETdPKcoyId8kDJNoN7eVHybrwM%2FO%2FrSohVF4zRfrTcDQieCoWl7DoPUAWqAJZf7IGzAvjeN2zdxQ0AfMPxOie%2BlBLWQOuYBTelPhNarv01coTLVPqnm8KbcnaakOxvuLPaOpoxSxWImnocdZc3ZNVI%2B%2FrlUSg9%2BPJFva%2Bv8c2gQ9BaGrEjg0HXV33457kawK12r5a%2BHsGrLRhJM8P%2FtZfA9N1pzEWr&X-Amz-Signature=cf6e5f32969bb3637c0b2a02838539f508fb88ac3a1c45e01b1bb3f66b7dc8e7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK3MIHAO%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGkeHWcnG8Ar9sJZIlY2frvuwfgFtBh5%2BAjtu%2BqokWSeAiAJqQm4d94dgml8vlOUMw5kE7kFf43aoDzwwGcu1JfD6ir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM%2BCIygIvRTaL6OgDnKtwDckMBES%2FXtbElEWC%2B%2FyskJNs31AA1mR4UAVONBjUKG0N7oHtyThbzXQdZBROgYb4q2JonBcWxVCGWWJ6mzh8oo4QHxkkiRyI%2BPOMM3VUvXZq0olhHPo%2FXjMr1dRtDaFqLMgdeFSHdWGpTNY2w2ZZ90UuD2yCXtFTvHaipHpszh6wXPUvYlR6JINw32lKjNXhW2CLlH1Me8fuGbVrdz7X994zUnN92DWzYIqX%2FGTaJQ88yOAdWq7VUoYEvYcUkUQyflNlphNdHyMIYSVc6S%2BEi9TQ%2FQvsdncmvKSnW6QpB9WzrR4z0Mf3mV26YMeywgUwUhkcxH3q8Qon8NwLWOEJktuvQsGSV%2BGXQKsYeUDT3uiIqL1stIGPUN8UkuBExkHZxdC5XICG95uEUfI9DwnqSZDiHukcW5T87i42ZIw%2BBPEpjw0tU%2Bs8z7MwvH26KlKJHab9fqSYn9Tu0elWbAMf99orf7t7ksxdxYNVqO%2B730H%2BFlxU8Sh%2FPRtlwR5vhw0K6lJSl54Ybj8K85kvFIZssuWFpWo3BMqeyQ42kavUHcO%2FUEy%2FBHfXRvmoxxHyYB%2FgRwcknRQc%2B1dbcX2VnvJsOBSNvATMPS7AKI%2Bfn84hkjYrM%2FJsY0vz1FX%2BBiV4w75SRvwY6pgETdPKcoyId8kDJNoN7eVHybrwM%2FO%2FrSohVF4zRfrTcDQieCoWl7DoPUAWqAJZf7IGzAvjeN2zdxQ0AfMPxOie%2BlBLWQOuYBTelPhNarv01coTLVPqnm8KbcnaakOxvuLPaOpoxSxWImnocdZc3ZNVI%2B%2FrlUSg9%2BPJFva%2Bv8c2gQ9BaGrEjg0HXV33457kawK12r5a%2BHsGrLRhJM8P%2FtZfA9N1pzEWr&X-Amz-Signature=c8970f17b805162f902ba255b2687c9d51592951b7324ec64685f4843eb1955f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

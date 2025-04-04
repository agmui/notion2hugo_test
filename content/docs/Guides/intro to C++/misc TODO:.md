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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRJ7TLDJ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T121445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBseldn3w%2BBrK702wtLbhWSofH3JKbZ2rLIOGVi4SBpPAiEA2pbl794Dk1yY1Dv1W%2FFmv%2FYk00PkkavE4zoz5Xi%2F4z4q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDDacVvOpb%2BT5B0AZUyrcA6uq0yyOM9JXuiebEWDMbF2sAKYGeHmR7b7ekXeKqbHTkYTuzoKrFD2hEUr7KJ9mNE0NjMplpcPddfL2GeNQ4dlRFQN9jy9BSOrATGi9sNFjCeOxpvsm7xz1RVEkDAvdLoXOGDrLMJytgj5Dh8xX2cPQvekGDFbN55bfGBHk0oqk2K%2Fguey%2Bt3y5tbmmzuwKNRsG2D31ogDHnNqy0HZtzxQPMze1Hlm2VQw583hYRSmgav2w%2FL3luFR%2BBQOJqPjU2tp4r6aXZW7HwEs7qb6wD1Pg1eoYs4EYoEiUcGBwmwwXyCF9EZh3%2BAv2d9k7IDexaD46yyoNMgAELt6Yp3dB8%2FyRsqDWaQ%2Bl4reQhlUDQBh9qqKHeZZlWQ2l2kgsqhSuqGeq7zzwravOqKxLdeOiLu7FfD4QwUAO4eTdD82cl3i4wtRUn60fNAJqKsdiJm1aX9FJVOUqcG7EyMdqNxkdSKvookq82UJlr6%2FicMPGvVxvzjrweu6l7EAOhOk%2FJaCWmUWKDfa4KZlOuQ3mE6qW1B4JJyvmcE8L5fpyZKS8eEEHSf4zlmFP6lSwMqYqHPUuCYIG317xplatomA%2BiwOe2eMXQTWrqcu2f5s8bcZ%2BCuK3ir7x7RYEIUubO9mEMNuYv78GOqUBWN9js1YxiByE7GemO8hRGtBCeEYbhDDjMtwAOwpoC%2FMeGCNVLiWqwsN%2BoItnDCz592wKP40rqku3cqoe9CD%2Fd%2Fo%2ByjFd3zuZkkHb3fFwhFBMAJGwLhK%2B2%2FInQyb7deKhR9to9O5T1BD1PCQmyAmxPoCWno8KBMob86ufn8V%2FCm1FBmErxztsFgeHsywb2HkJAYDbgDEwEinc7MPNwAMiEGmoo1sU&X-Amz-Signature=3b868bdc2a399503b5a3b2f6e857fdc9c11dde261b67720531774e741be0691c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRJ7TLDJ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T121445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBseldn3w%2BBrK702wtLbhWSofH3JKbZ2rLIOGVi4SBpPAiEA2pbl794Dk1yY1Dv1W%2FFmv%2FYk00PkkavE4zoz5Xi%2F4z4q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDDacVvOpb%2BT5B0AZUyrcA6uq0yyOM9JXuiebEWDMbF2sAKYGeHmR7b7ekXeKqbHTkYTuzoKrFD2hEUr7KJ9mNE0NjMplpcPddfL2GeNQ4dlRFQN9jy9BSOrATGi9sNFjCeOxpvsm7xz1RVEkDAvdLoXOGDrLMJytgj5Dh8xX2cPQvekGDFbN55bfGBHk0oqk2K%2Fguey%2Bt3y5tbmmzuwKNRsG2D31ogDHnNqy0HZtzxQPMze1Hlm2VQw583hYRSmgav2w%2FL3luFR%2BBQOJqPjU2tp4r6aXZW7HwEs7qb6wD1Pg1eoYs4EYoEiUcGBwmwwXyCF9EZh3%2BAv2d9k7IDexaD46yyoNMgAELt6Yp3dB8%2FyRsqDWaQ%2Bl4reQhlUDQBh9qqKHeZZlWQ2l2kgsqhSuqGeq7zzwravOqKxLdeOiLu7FfD4QwUAO4eTdD82cl3i4wtRUn60fNAJqKsdiJm1aX9FJVOUqcG7EyMdqNxkdSKvookq82UJlr6%2FicMPGvVxvzjrweu6l7EAOhOk%2FJaCWmUWKDfa4KZlOuQ3mE6qW1B4JJyvmcE8L5fpyZKS8eEEHSf4zlmFP6lSwMqYqHPUuCYIG317xplatomA%2BiwOe2eMXQTWrqcu2f5s8bcZ%2BCuK3ir7x7RYEIUubO9mEMNuYv78GOqUBWN9js1YxiByE7GemO8hRGtBCeEYbhDDjMtwAOwpoC%2FMeGCNVLiWqwsN%2BoItnDCz592wKP40rqku3cqoe9CD%2Fd%2Fo%2ByjFd3zuZkkHb3fFwhFBMAJGwLhK%2B2%2FInQyb7deKhR9to9O5T1BD1PCQmyAmxPoCWno8KBMob86ufn8V%2FCm1FBmErxztsFgeHsywb2HkJAYDbgDEwEinc7MPNwAMiEGmoo1sU&X-Amz-Signature=08930368653dce8dd05340065969b38b75cd224b7471517b2935b0a6e4496884&X-Amz-SignedHeaders=host&x-id=GetObject)

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

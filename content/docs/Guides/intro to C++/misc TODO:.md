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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6TMLAHH%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T070828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICb0i8dlkqHQUZB9Zmkew5XOO3%2B7tqb%2FalR73M12JybEAiBxqI%2FVFuUkbTE3zEPRO2ZU%2B1hrdWmvrBIIrcNj5JoQtyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM2OuLqxZfvDls3demKtwDPhJF5DVfJjM3IHukYVCdmS9IcucOcRL2kLSnAk0dk4%2BrpnAGAmNJNTdnvDpsrQVnCF8sE6iFQREVwZIf4SbJm81m%2B%2FcCZ93lpqtJ3H7GN9B8RiYuxRulLwTQKs96kgZ2PuXtovEE7dncGtWM1Mc6gZAUhF%2Bs8AqP2onVTdCE%2F22xQCuDcWuXaJqQ22lnFPWHhaeI83t%2BKLVtP4TAWA6cTGcCrFNJEnqJO1wilE8rZSkdxnZKA%2By6%2FYzUS3KJFutzxDUQqZBNBixycNPEJx8YpyvPclXD4yJjNmV%2B7qa2YanEAyQIUS1akTCXAh06xp93p%2F0idrlow8BvHEZkKO4wPQSbxbCB9i5ADZJmBIwpjgOXqloInWrUqJUhc1M%2BCrCBm0UpfW%2FDVwVtACBSbnxZNlh%2F%2Bgiz2XWSNcP67GQKiSKFc8Jbn6RlvJIqJCvfGOytNYWcChFb35E5xfsZ6iD0anTraGEu2fDVn33jLUohOnD55hPIFSrSswRcxJtJiiUTv1D8%2FiGZ0K1do42BQv2w0Z7crz4HH7Wybxllpnz5rLvRyoPxtIs7hfDOaSY5toQuLI4GRyjyeeMiFsym%2B2VsLRPai3LZ44SXLngxqb16CNMsh%2FOn0c83rlpaEpYwrvi9vwY6pgFMHlGW2EL6NZ9j4fyyOUK%2BNHew%2BUAmrh%2F9NjjXxdp8vHCi66xRur0dE8OiYpnVDzojwk7x1Y0UO2nhC597yJKcdiOEAs2N1jxMhbE7DiLfrx6bVx%2B0rduU5rfK%2BpK7OgrgRZt4wbvDKjIoCoPbsN8lCh8Npb0WXT71g9PV7wV03ITMw1oNvMpPrbfeoKucj7JzjhxuYb55tdfP7dsLXo63oEoAjL41&X-Amz-Signature=e3bc83ac91355b1a9636b21b1db8a4e576971e5df1bedbd0ecf7780adc106c23&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6TMLAHH%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T070828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICb0i8dlkqHQUZB9Zmkew5XOO3%2B7tqb%2FalR73M12JybEAiBxqI%2FVFuUkbTE3zEPRO2ZU%2B1hrdWmvrBIIrcNj5JoQtyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM2OuLqxZfvDls3demKtwDPhJF5DVfJjM3IHukYVCdmS9IcucOcRL2kLSnAk0dk4%2BrpnAGAmNJNTdnvDpsrQVnCF8sE6iFQREVwZIf4SbJm81m%2B%2FcCZ93lpqtJ3H7GN9B8RiYuxRulLwTQKs96kgZ2PuXtovEE7dncGtWM1Mc6gZAUhF%2Bs8AqP2onVTdCE%2F22xQCuDcWuXaJqQ22lnFPWHhaeI83t%2BKLVtP4TAWA6cTGcCrFNJEnqJO1wilE8rZSkdxnZKA%2By6%2FYzUS3KJFutzxDUQqZBNBixycNPEJx8YpyvPclXD4yJjNmV%2B7qa2YanEAyQIUS1akTCXAh06xp93p%2F0idrlow8BvHEZkKO4wPQSbxbCB9i5ADZJmBIwpjgOXqloInWrUqJUhc1M%2BCrCBm0UpfW%2FDVwVtACBSbnxZNlh%2F%2Bgiz2XWSNcP67GQKiSKFc8Jbn6RlvJIqJCvfGOytNYWcChFb35E5xfsZ6iD0anTraGEu2fDVn33jLUohOnD55hPIFSrSswRcxJtJiiUTv1D8%2FiGZ0K1do42BQv2w0Z7crz4HH7Wybxllpnz5rLvRyoPxtIs7hfDOaSY5toQuLI4GRyjyeeMiFsym%2B2VsLRPai3LZ44SXLngxqb16CNMsh%2FOn0c83rlpaEpYwrvi9vwY6pgFMHlGW2EL6NZ9j4fyyOUK%2BNHew%2BUAmrh%2F9NjjXxdp8vHCi66xRur0dE8OiYpnVDzojwk7x1Y0UO2nhC597yJKcdiOEAs2N1jxMhbE7DiLfrx6bVx%2B0rduU5rfK%2BpK7OgrgRZt4wbvDKjIoCoPbsN8lCh8Npb0WXT71g9PV7wV03ITMw1oNvMpPrbfeoKucj7JzjhxuYb55tdfP7dsLXo63oEoAjL41&X-Amz-Signature=ad5ed5aeadef3a26a3eee1a2848b6415dd54ec27fdf94d4c651deb7493816e7f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

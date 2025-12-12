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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3CAWOYY%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDi%2BxLNlLPTUSAOUsvCNeFfo1qCim97n8Nyu8QsZPGE9AIhALu7I1BDkEt09WgiK100T%2BXkXjBQDhgmqVVkFMCac4C4KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfvzJ0bEkV3l9TwaMq3APKLfQVemurAMiB5tXDjsWwFHVEdEFoeHCONorXMf%2B3lPHaIfM6tk8DLxGSmM%2F16ODl0am0EaR01cyAoPO88AlpZAhAsvk3WPGOfjNUvuryvl%2BM6kfgJynCVSEIZDUcJba2yujjoHNcD6%2F7DK0S1cHwLs2WSv52ssjXjQcKBZk8K0NtSS%2BwbDgq%2BV%2FqusnC1XYUy9s04FpMFh7jmBT7VVjq%2F9lTo6p3txkQCRvIx8HXo5IOde5FgGT%2BeFrYtkDDZyuqH3KbOch2lT%2BbrPN4H2E30BY0Q1FniXHeD7RlqOxBsG97Hjf8jGi2yRPV1uBWk8wXsCnLLrAORIoA3Ruu4%2BmRWGpbYAO1uudv4g6MhCadEOZIMmYdZ7A2c%2F%2Bb%2BF4UlzbCTJ%2B222K9%2BckWlgc9gKCXZbDhixZ1nOEQwbI6DbK62%2BOUr57Jng8qpCoswk3KBTPPIggOk3F9oHfyQObYCoXuB6O3oeF%2BwY%2BuHw0aiXBX4nUPcs4FhTF6y43BH5wPPUrzVDVbUDIwjDcc4UBqbScAAuG%2FtRQ7RzMjg9pmh4UoDvSsG1DMmnpbIWREx%2FOld5o9hdGvC68prBThnwuZVlYIc3CXl5qXVhOrsw0z4TKkXYRUgGH8B%2FTnjkIw5TDM1O3JBjqkAZRwhCiGCIbfxeKVJWmvsBv1TSgSr2vcQwEkfkmlRNh7UU9lWpZy5va6ILX8JP4U9l7%2FPOUv8smJ5zJ7MWTkLZ2k07aYeUS%2Fz%2B599DH2zKWDsR7wSs5jJSWpRov7l%2FitHOfwGa0NKaEzaLT%2BCgF3d9rLgC%2Bs4FtJZZkTEtjL6mlX1wfBOUwEe6nLo99wel8mCRHu5wN25AAASVZND9AfANMuQGU6&X-Amz-Signature=375e2a6b99e5611b9923ca2244c1efd7af97725351ac0997231487ba86314ec8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3CAWOYY%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDi%2BxLNlLPTUSAOUsvCNeFfo1qCim97n8Nyu8QsZPGE9AIhALu7I1BDkEt09WgiK100T%2BXkXjBQDhgmqVVkFMCac4C4KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfvzJ0bEkV3l9TwaMq3APKLfQVemurAMiB5tXDjsWwFHVEdEFoeHCONorXMf%2B3lPHaIfM6tk8DLxGSmM%2F16ODl0am0EaR01cyAoPO88AlpZAhAsvk3WPGOfjNUvuryvl%2BM6kfgJynCVSEIZDUcJba2yujjoHNcD6%2F7DK0S1cHwLs2WSv52ssjXjQcKBZk8K0NtSS%2BwbDgq%2BV%2FqusnC1XYUy9s04FpMFh7jmBT7VVjq%2F9lTo6p3txkQCRvIx8HXo5IOde5FgGT%2BeFrYtkDDZyuqH3KbOch2lT%2BbrPN4H2E30BY0Q1FniXHeD7RlqOxBsG97Hjf8jGi2yRPV1uBWk8wXsCnLLrAORIoA3Ruu4%2BmRWGpbYAO1uudv4g6MhCadEOZIMmYdZ7A2c%2F%2Bb%2BF4UlzbCTJ%2B222K9%2BckWlgc9gKCXZbDhixZ1nOEQwbI6DbK62%2BOUr57Jng8qpCoswk3KBTPPIggOk3F9oHfyQObYCoXuB6O3oeF%2BwY%2BuHw0aiXBX4nUPcs4FhTF6y43BH5wPPUrzVDVbUDIwjDcc4UBqbScAAuG%2FtRQ7RzMjg9pmh4UoDvSsG1DMmnpbIWREx%2FOld5o9hdGvC68prBThnwuZVlYIc3CXl5qXVhOrsw0z4TKkXYRUgGH8B%2FTnjkIw5TDM1O3JBjqkAZRwhCiGCIbfxeKVJWmvsBv1TSgSr2vcQwEkfkmlRNh7UU9lWpZy5va6ILX8JP4U9l7%2FPOUv8smJ5zJ7MWTkLZ2k07aYeUS%2Fz%2B599DH2zKWDsR7wSs5jJSWpRov7l%2FitHOfwGa0NKaEzaLT%2BCgF3d9rLgC%2Bs4FtJZZkTEtjL6mlX1wfBOUwEe6nLo99wel8mCRHu5wN25AAASVZND9AfANMuQGU6&X-Amz-Signature=f90cfb1c4980902517fae1fa2379d87e4ab1a9a7f5fbbc4e2594e039a5a478a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT547KVJ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T160901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9xRDrOdhvo%2FU40zGKMz9UVB%2B14%2FXyGhiE0glpItksDAIhAO0HQgXQVkpw4T9%2Fzzk0GS8bj4mROe1YSbUZLYupAFsjKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BOlRUWDe2Ng4w%2FfAq3AMuZ1zoDPaLMcS4P6xC4ejOj%2BMmNgD6iCyLx%2Bwug49NSG%2FtJo9fSz7uDijOzC0BtWM4koSwcn2khbTiQn5270nfDg1Zzd6OB899RLOe5IZVoKD6yAvUsWMiE4kXQx%2BmG7GTUypnWC1lfjYn%2FFQfyHyKihQLKcwgP1ME1BakUuUCKBAWQatb5EsW42a58MeAkSyLWmSkRRMxIq75eHppX2a0w5e6yJLHI6uARSH9%2FywY0bgkT8Zia5Iy0kPSkfYvJj0alE8LOHf%2FgzVooyf1kmzcEwqWwcQ7DhZpbOPs0PGkrB17sncuJje%2Ffxfij5jy8gXqwhjiDu3wuxr2cTKcC1nmhuAT5FpXMwJuwIyxKBdpOmYyBE9X9old%2B8AsYEh%2Fb8%2FbYjJ65b4QgxiIppwBcVQNRmPLVU0l5wLUvQbTnHux%2BfDxIsAy4UyY%2FCQg%2FKZ7KltCDkcHihPWc5QNeAmmxty5A0%2FukIiErab1iTxqw5aiqUZ5dXx%2B1ZoWNaPb6gBgt8caQYS2jc%2FQL%2Bvk4y0qML0%2B0r4j29QOEBgdPW6dDHMm66YwGMg7hQFTb198A2y56ochKvtwNIJdskgz1waWVTw2xJx3kNe26aqu6NcJtye%2FNRcQptESwVGPyQQLODDaj9vCBjqkAdyt48qqyvtQW8QEL2z6%2FNI3jgZOvxPcyHYhyX6lDf1V1ZxvmuEhFu5OKDmvsThmQechbR6hGcsObndJj1fP7uoFackvP3tKF0We4I9OQZAMVAfwLShs30efffrF8cvuiGdxUmsF%2FricblGbKLX%2FnrFasH7%2FKxvUv5ZUYBknVRS9WKg33bvmfhS1Yrfuk5y2wzxYAssDpz7zqGt%2FIRnFOEARMyvw&X-Amz-Signature=e394dff445fb227b9b47c08eb8602f37e7d5aa58559d706a6a35aa1ff131e370&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT547KVJ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T160901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9xRDrOdhvo%2FU40zGKMz9UVB%2B14%2FXyGhiE0glpItksDAIhAO0HQgXQVkpw4T9%2Fzzk0GS8bj4mROe1YSbUZLYupAFsjKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BOlRUWDe2Ng4w%2FfAq3AMuZ1zoDPaLMcS4P6xC4ejOj%2BMmNgD6iCyLx%2Bwug49NSG%2FtJo9fSz7uDijOzC0BtWM4koSwcn2khbTiQn5270nfDg1Zzd6OB899RLOe5IZVoKD6yAvUsWMiE4kXQx%2BmG7GTUypnWC1lfjYn%2FFQfyHyKihQLKcwgP1ME1BakUuUCKBAWQatb5EsW42a58MeAkSyLWmSkRRMxIq75eHppX2a0w5e6yJLHI6uARSH9%2FywY0bgkT8Zia5Iy0kPSkfYvJj0alE8LOHf%2FgzVooyf1kmzcEwqWwcQ7DhZpbOPs0PGkrB17sncuJje%2Ffxfij5jy8gXqwhjiDu3wuxr2cTKcC1nmhuAT5FpXMwJuwIyxKBdpOmYyBE9X9old%2B8AsYEh%2Fb8%2FbYjJ65b4QgxiIppwBcVQNRmPLVU0l5wLUvQbTnHux%2BfDxIsAy4UyY%2FCQg%2FKZ7KltCDkcHihPWc5QNeAmmxty5A0%2FukIiErab1iTxqw5aiqUZ5dXx%2B1ZoWNaPb6gBgt8caQYS2jc%2FQL%2Bvk4y0qML0%2B0r4j29QOEBgdPW6dDHMm66YwGMg7hQFTb198A2y56ochKvtwNIJdskgz1waWVTw2xJx3kNe26aqu6NcJtye%2FNRcQptESwVGPyQQLODDaj9vCBjqkAdyt48qqyvtQW8QEL2z6%2FNI3jgZOvxPcyHYhyX6lDf1V1ZxvmuEhFu5OKDmvsThmQechbR6hGcsObndJj1fP7uoFackvP3tKF0We4I9OQZAMVAfwLShs30efffrF8cvuiGdxUmsF%2FricblGbKLX%2FnrFasH7%2FKxvUv5ZUYBknVRS9WKg33bvmfhS1Yrfuk5y2wzxYAssDpz7zqGt%2FIRnFOEARMyvw&X-Amz-Signature=27b693641c42f14ac14a7bd50672e24348befa6bdbf7dbfba928937f5feb7c28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

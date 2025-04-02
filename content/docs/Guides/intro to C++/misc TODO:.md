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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VKKV4GO%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIQD2vXwGo3MQcmoKUfMjk9JTSqgcBWsscTDmJ8PSZKc0hAIfCfvL4hKxiUjrgeKAxPAAFJjauU4k37QdM3K40t%2BwoyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPrVoYmzPOLF%2BVY87KtwDvhpEActoAG%2F5eW%2FhHQvIdytf%2F3DD1OlaMnh%2FfCp%2Fd3x%2FTiiGRoCrnKxih07mfjaHa92ETGCrApGTyRQkUxvBhtU0TvrrjktXcgYJ0Il1GpugYWLl96Ty%2F2Ym0xvws0jzjuBbXmQLo2g99uEsEX57SWLWPHQ1bXFUf2IHuSca8telxHdedbYUS8tOpy9%2F5EXZeCNal49RIuH2Xq4nUxgnrjZPoObvPFFleW8zoIyAUn61%2B2cTlZSLdHISLWAMyKPnys%2FgFM0h3xFYmqP%2Fkdj%2F9VFN8MwPNkqVO3OuJJWEq4UzDJ4zqA%2B1gKZlxBtQbpZBWZowr0doayMvsy71uTAfwde1LbDJfd9BfQACZVow5P78wt%2FMnvdNsmHWCnaitUB%2BXx51AdrsmekzOjgvNysTuKaCCsDxblOBOh6j0ERoE9O6rEFDZ%2FG92bWqL%2FUuLFfkmzS4L%2BvSaDSKUIe0f13CTpa6nvJ0OEzYz6613fdQIzGZ1q%2BYKObMAmp0MXPvcainJjj%2BGisAi2rvp5UXcauFktu62F1rY6oLi3%2FDyptNZcLxoMyzoqb3e%2BdrzoLn00PYQpKm68yUKbtGKS90HSKi6EcTz%2FuiEVsQm5lJXXJbUBG%2B5airKi8M68NqEi0wi%2Fu0vwY6pgH39G%2B9%2FrBMQBfPA0h6KgCWpJ1H4HtLGuGRJJ4TsRAkolAAOBFFgptsfWm7lH8Kii2HKQXzV7oABN5Pzc8vii%2BKgsWc2WBFGRuXZokCBSG42NvNgyEpbR1RMuK8vrG5y%2FQsUQDsLot2QZlTQihHtneXRVU3KSmvDk9KeLECKcj1%2BEIp2GxE1eXJDdQYHGeg8DebC1Yy2TmFhV9ZpB5qArGZLXwf%2FZ7S&X-Amz-Signature=2c70005a14d5039e776329632b35339a3a60b90d1bfe42e7134c0ededc59068b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VKKV4GO%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIQD2vXwGo3MQcmoKUfMjk9JTSqgcBWsscTDmJ8PSZKc0hAIfCfvL4hKxiUjrgeKAxPAAFJjauU4k37QdM3K40t%2BwoyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPrVoYmzPOLF%2BVY87KtwDvhpEActoAG%2F5eW%2FhHQvIdytf%2F3DD1OlaMnh%2FfCp%2Fd3x%2FTiiGRoCrnKxih07mfjaHa92ETGCrApGTyRQkUxvBhtU0TvrrjktXcgYJ0Il1GpugYWLl96Ty%2F2Ym0xvws0jzjuBbXmQLo2g99uEsEX57SWLWPHQ1bXFUf2IHuSca8telxHdedbYUS8tOpy9%2F5EXZeCNal49RIuH2Xq4nUxgnrjZPoObvPFFleW8zoIyAUn61%2B2cTlZSLdHISLWAMyKPnys%2FgFM0h3xFYmqP%2Fkdj%2F9VFN8MwPNkqVO3OuJJWEq4UzDJ4zqA%2B1gKZlxBtQbpZBWZowr0doayMvsy71uTAfwde1LbDJfd9BfQACZVow5P78wt%2FMnvdNsmHWCnaitUB%2BXx51AdrsmekzOjgvNysTuKaCCsDxblOBOh6j0ERoE9O6rEFDZ%2FG92bWqL%2FUuLFfkmzS4L%2BvSaDSKUIe0f13CTpa6nvJ0OEzYz6613fdQIzGZ1q%2BYKObMAmp0MXPvcainJjj%2BGisAi2rvp5UXcauFktu62F1rY6oLi3%2FDyptNZcLxoMyzoqb3e%2BdrzoLn00PYQpKm68yUKbtGKS90HSKi6EcTz%2FuiEVsQm5lJXXJbUBG%2B5airKi8M68NqEi0wi%2Fu0vwY6pgH39G%2B9%2FrBMQBfPA0h6KgCWpJ1H4HtLGuGRJJ4TsRAkolAAOBFFgptsfWm7lH8Kii2HKQXzV7oABN5Pzc8vii%2BKgsWc2WBFGRuXZokCBSG42NvNgyEpbR1RMuK8vrG5y%2FQsUQDsLot2QZlTQihHtneXRVU3KSmvDk9KeLECKcj1%2BEIp2GxE1eXJDdQYHGeg8DebC1Yy2TmFhV9ZpB5qArGZLXwf%2FZ7S&X-Amz-Signature=ffc90facbc8b08888f113ae5241aa48b7cd873d1e95c11096a074cf3df5db144&X-Amz-SignedHeaders=host&x-id=GetObject)

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

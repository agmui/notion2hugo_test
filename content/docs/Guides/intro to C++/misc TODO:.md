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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GDTY4TD%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T061018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDpv%2F7zyv23vpn1pOuzhKtu5BGGur3rEZz3NOTcOYRNjAIgMFDQCADucP765Al8eOOZ4kUXZ6Wh%2FvWXp%2BAa5svpxXIqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmKQzctzjy44zCg4ircA%2BWWlDZfpdAMnZwNtad4QGN%2Fnn%2BNtDBe7wcq3x30LLQVfuRiHHtsW5oXhWANmzU7N9rMPDJkQtioMGVPtoHjxii7X4JDPohsjUPseUmYkat95cvoYArbapl4o1wf9XjzpGDIxZQCd859ZYy5AtY9FC2pZiFQkIsyNkeEZ2y2x5CcEIZnzWwyuD4w%2BKyqi9R29YtPhilKa%2FdPxZSny%2FHQa7Fq4%2BSZq3AyCuMd0lkOMs2xgfXI7K10%2BdYKaEEmYsSRfXXT%2FgOs5VmLHhAoXcQG%2FrfRVfnRP8W5MaFIVy%2FveOm5M1mSPcEpyt4AsGjdyRaPh3MLle5Y421FPGgg6layX2jRMqrMmHxkZ7B3LiUQsdP3CCZrKKj9AULLAW9BLn1tqhUncWYz3papEl6blqiW%2F%2BkFArr7t7dYd1cw%2B8e4u3OyRd0dMyMDEWeubx9XTm%2B2buwKeZwYvYohsoyaSgk8Zq5TjdE%2FBsefUeIuZCcldfOtE8teHU2VI94uiGxKV2v%2Bga%2BzmS9kUsXeAX%2FUWD5X%2FnvjEUQGNn2wlrh3QWP6oYrknJutpQVevJk1mzg6Fdp%2FfaEcFMWaMbiYbjQayq3P8t1Y2onwkLb0UnxZAnZZMdNQtQPrifkdc%2FU11%2FG7MJPqub4GOqUB8a7uGhwYJ3AVvAIyb8ISYLBOLUqyDhesxkPYcbwcouiYAsbXO8iiGE6CixGBQCMlte%2BznYm0xf4YU83j35xtkyl6eYthZzupI6bJw2Hy8XA4k63ZIumIO5u5KGu%2F8ny%2Besaye2yKuTHZIX8GAH24x6DJo%2BWiVYeyLcZC4TD6NnStlIOxURyu0LwwWMQjE3vhlIJUoPfWRaylwssKduXwQRP1xO8H&X-Amz-Signature=0648c4015c45269e2cdca98fb32a77a19be622c8e34b7ad1c488a869e3a7a1a4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GDTY4TD%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T061018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDpv%2F7zyv23vpn1pOuzhKtu5BGGur3rEZz3NOTcOYRNjAIgMFDQCADucP765Al8eOOZ4kUXZ6Wh%2FvWXp%2BAa5svpxXIqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmKQzctzjy44zCg4ircA%2BWWlDZfpdAMnZwNtad4QGN%2Fnn%2BNtDBe7wcq3x30LLQVfuRiHHtsW5oXhWANmzU7N9rMPDJkQtioMGVPtoHjxii7X4JDPohsjUPseUmYkat95cvoYArbapl4o1wf9XjzpGDIxZQCd859ZYy5AtY9FC2pZiFQkIsyNkeEZ2y2x5CcEIZnzWwyuD4w%2BKyqi9R29YtPhilKa%2FdPxZSny%2FHQa7Fq4%2BSZq3AyCuMd0lkOMs2xgfXI7K10%2BdYKaEEmYsSRfXXT%2FgOs5VmLHhAoXcQG%2FrfRVfnRP8W5MaFIVy%2FveOm5M1mSPcEpyt4AsGjdyRaPh3MLle5Y421FPGgg6layX2jRMqrMmHxkZ7B3LiUQsdP3CCZrKKj9AULLAW9BLn1tqhUncWYz3papEl6blqiW%2F%2BkFArr7t7dYd1cw%2B8e4u3OyRd0dMyMDEWeubx9XTm%2B2buwKeZwYvYohsoyaSgk8Zq5TjdE%2FBsefUeIuZCcldfOtE8teHU2VI94uiGxKV2v%2Bga%2BzmS9kUsXeAX%2FUWD5X%2FnvjEUQGNn2wlrh3QWP6oYrknJutpQVevJk1mzg6Fdp%2FfaEcFMWaMbiYbjQayq3P8t1Y2onwkLb0UnxZAnZZMdNQtQPrifkdc%2FU11%2FG7MJPqub4GOqUB8a7uGhwYJ3AVvAIyb8ISYLBOLUqyDhesxkPYcbwcouiYAsbXO8iiGE6CixGBQCMlte%2BznYm0xf4YU83j35xtkyl6eYthZzupI6bJw2Hy8XA4k63ZIumIO5u5KGu%2F8ny%2Besaye2yKuTHZIX8GAH24x6DJo%2BWiVYeyLcZC4TD6NnStlIOxURyu0LwwWMQjE3vhlIJUoPfWRaylwssKduXwQRP1xO8H&X-Amz-Signature=7f599a0b0869f34a9a10a8f81e50bbce41d335e1cbf6803640116cada1ce411b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

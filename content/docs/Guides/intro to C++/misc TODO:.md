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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOQFJCMQ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFu6jbalS3A1dTb4fsNT%2Fzq12kl%2FntMP6RwU78SOc5xAiEA0GUgrj5QohNKZ8Cm6CMUzbuWK894VhohD8xEg42XUiMq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDH6plykFjIL2o0krxCrcA4dsV3t8Qf0Ey1WCpddvJDG7CgAm6liXFc13ZArkPEdi%2BfyvTJchKyxkadYn1z3U6updeLGS33dTpfyaYDZzUYIEB9zfxY8HhDWAuqlhEDZFkkNgReUFrNHDQoThBDdhTDO3rgDRa5mHMuRUEh%2FNQqb9NSCNzsoG3PCwvVNYPqsEMBf1Q2plU0%2BZkInJAOY6N%2FR%2FCLpQBxB8Hz6VnLtha3v5o2X4MK%2F42CfGQ4S3LWkmyvttXhCWPYzybJTqgXr28mJ4AvCoy%2FSrKTui3hXQkxHFs8%2FavsLtRv0xFmibDVQ0mS2MBRWhuUH3E3E4AsC%2BmRri9WPcePC6HRcoxVkHSLYCS44vr9pOqjBJzrMeARA19i8RuNbDavrQU0YjcQsK%2Bb%2B7ulxlQ5rWkdA%2F53jkSqaEPd1UxgsXTZvXNIQD7JzTen3H3Z1qAmJkmFgThU5QvyqtNHxXnT%2BwDZS5I7kU4ZS9Zt%2BoXx9PJEJwR4QCxf53l8EhCTfwt5dvfpnzDboVaz48TfvVfqP%2FdAntLVPd%2BRqH9CmJLBiwHvOQsspPgZfsvbAss%2FGAo7fbEXcHiEX7PGL2y%2BqTUMu5OkW9CGQ2M1v7tm5bGXE47%2BaX5uiKj55dA07a9lJxNgnjkDjYMLT91sEGOqUBynl1Emo2ggHSbM9icrhX8DHvwsIzv77LQ5AtZfgw49t84pMd8THA5TaHNB%2BGdrOP09rhDv3NCxNGfSwL%2Bt8VwubOyPVmUdygA34p365VxXdMUMIeY0Kf0bknlSDVIJBWmU3smWcKbh4x0Kg1OE8ttEw6SL5fHa4JXCXRYcF3B%2BBTSC%2BMAZBbOyNm2x%2B%2F5KVU40Zujov3f4y9w2HhG2UGz2v%2BXNjd&X-Amz-Signature=0500e67529e63e2faecc5b4c535a1aa1546dd18a73ecd83abf5b467572225ade&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOQFJCMQ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFu6jbalS3A1dTb4fsNT%2Fzq12kl%2FntMP6RwU78SOc5xAiEA0GUgrj5QohNKZ8Cm6CMUzbuWK894VhohD8xEg42XUiMq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDH6plykFjIL2o0krxCrcA4dsV3t8Qf0Ey1WCpddvJDG7CgAm6liXFc13ZArkPEdi%2BfyvTJchKyxkadYn1z3U6updeLGS33dTpfyaYDZzUYIEB9zfxY8HhDWAuqlhEDZFkkNgReUFrNHDQoThBDdhTDO3rgDRa5mHMuRUEh%2FNQqb9NSCNzsoG3PCwvVNYPqsEMBf1Q2plU0%2BZkInJAOY6N%2FR%2FCLpQBxB8Hz6VnLtha3v5o2X4MK%2F42CfGQ4S3LWkmyvttXhCWPYzybJTqgXr28mJ4AvCoy%2FSrKTui3hXQkxHFs8%2FavsLtRv0xFmibDVQ0mS2MBRWhuUH3E3E4AsC%2BmRri9WPcePC6HRcoxVkHSLYCS44vr9pOqjBJzrMeARA19i8RuNbDavrQU0YjcQsK%2Bb%2B7ulxlQ5rWkdA%2F53jkSqaEPd1UxgsXTZvXNIQD7JzTen3H3Z1qAmJkmFgThU5QvyqtNHxXnT%2BwDZS5I7kU4ZS9Zt%2BoXx9PJEJwR4QCxf53l8EhCTfwt5dvfpnzDboVaz48TfvVfqP%2FdAntLVPd%2BRqH9CmJLBiwHvOQsspPgZfsvbAss%2FGAo7fbEXcHiEX7PGL2y%2BqTUMu5OkW9CGQ2M1v7tm5bGXE47%2BaX5uiKj55dA07a9lJxNgnjkDjYMLT91sEGOqUBynl1Emo2ggHSbM9icrhX8DHvwsIzv77LQ5AtZfgw49t84pMd8THA5TaHNB%2BGdrOP09rhDv3NCxNGfSwL%2Bt8VwubOyPVmUdygA34p365VxXdMUMIeY0Kf0bknlSDVIJBWmU3smWcKbh4x0Kg1OE8ttEw6SL5fHa4JXCXRYcF3B%2BBTSC%2BMAZBbOyNm2x%2B%2F5KVU40Zujov3f4y9w2HhG2UGz2v%2BXNjd&X-Amz-Signature=da7470b40fa350c226f76c3e5494a7f79b84ae857289392e1fbf8d3b45969e31&X-Amz-SignedHeaders=host&x-id=GetObject)

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

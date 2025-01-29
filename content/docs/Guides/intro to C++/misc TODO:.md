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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NYNKOUH%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwR%2F6I2qhJJ%2BCv7qtUkVzsau26yj47fKnUOz5Bj27ysAiEAmkn1gDLEReLvsjmV7v%2F7wPKtofl2U4ORmWEfGFGmfkUqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqqQ38Cs1YOwEBYqircA8337ibFfn6GHEAb9YzExdlN4lys%2BZiJzeJka9mLNyfcE3dNvPoL4lgCEN0hj4NFZx3Oeb5Vgc3ncs7XEnwoEYgaCz9ELb9oBklMqRISb5LakrHVfG12LfEHrwRNfEiKHYzgbUcENYGdNqwubqHJCmMxs581PqUKBuGSC8hIddLYaaoz2Xsoz9rWDfxk7MGqZ1lUOQCGUupJuhPNz2zAIaU4bdZB3mUt5gAYY%2FzRrlrKSs8taNii1VSxebVF5mU011WiqnDaCnDp7epdZARIS3WNqY%2B57jP9D8CaBBJDQABoivHDkgSalfTWHrV%2Fx5oQR42y%2BAntzLvnqZNo%2Bgh1gBzq4VEeaQMso5a4uchTILNjJn1AVjyd8PznkQuDMKCN93hmXV1gAs%2FBFopdvyAEDmuo%2BoZNYqtxHTggBS%2F0qOqbk0RrByEbtmULJPlTxGjUc60z7FnMXBza4IriYhOSpYkTDnu2BBNLvTq%2BWy4s1EgjBaBndT1RTuAFdQKdg5rFHBaLtY5zU1uchUgYdu4UoWgYOPdOVOpV3ujwmXOgLYvEr4Me5zD4B%2BAtlb26r%2BYAVI8WY8f3iHPad%2FWKJHO24ksFVwl8FhIRAY0s56Ewnu5fzEuQtT10xv7%2Fy4WZMK7Z6bwGOqUB9YFyX%2BWcvTY5PL9zmiNp7wKHOLpGPoiIZ7LGeRtuKr2vJBNML9ro5clkM8aZPm3w8Z5GLG9Dv2lSapR84L1BUuPfJlkCXEu1%2BYY7kAQb%2FM%2Fj4N58hMrANlgTBKlCsuE0zNFvaCcVFcxustr8uz3GMxDwITBa8v%2FNShAw2ijVVsyX610ALMeC8%2FNXeQkeH4QJWfV%2BkpkEXFJhlHvzuM59HQYq5I%2Bp&X-Amz-Signature=c158c8849517277ba0d1f4340dca52fe797e16ac181eb2e869e8dd0047e97a24&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NYNKOUH%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwR%2F6I2qhJJ%2BCv7qtUkVzsau26yj47fKnUOz5Bj27ysAiEAmkn1gDLEReLvsjmV7v%2F7wPKtofl2U4ORmWEfGFGmfkUqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqqQ38Cs1YOwEBYqircA8337ibFfn6GHEAb9YzExdlN4lys%2BZiJzeJka9mLNyfcE3dNvPoL4lgCEN0hj4NFZx3Oeb5Vgc3ncs7XEnwoEYgaCz9ELb9oBklMqRISb5LakrHVfG12LfEHrwRNfEiKHYzgbUcENYGdNqwubqHJCmMxs581PqUKBuGSC8hIddLYaaoz2Xsoz9rWDfxk7MGqZ1lUOQCGUupJuhPNz2zAIaU4bdZB3mUt5gAYY%2FzRrlrKSs8taNii1VSxebVF5mU011WiqnDaCnDp7epdZARIS3WNqY%2B57jP9D8CaBBJDQABoivHDkgSalfTWHrV%2Fx5oQR42y%2BAntzLvnqZNo%2Bgh1gBzq4VEeaQMso5a4uchTILNjJn1AVjyd8PznkQuDMKCN93hmXV1gAs%2FBFopdvyAEDmuo%2BoZNYqtxHTggBS%2F0qOqbk0RrByEbtmULJPlTxGjUc60z7FnMXBza4IriYhOSpYkTDnu2BBNLvTq%2BWy4s1EgjBaBndT1RTuAFdQKdg5rFHBaLtY5zU1uchUgYdu4UoWgYOPdOVOpV3ujwmXOgLYvEr4Me5zD4B%2BAtlb26r%2BYAVI8WY8f3iHPad%2FWKJHO24ksFVwl8FhIRAY0s56Ewnu5fzEuQtT10xv7%2Fy4WZMK7Z6bwGOqUB9YFyX%2BWcvTY5PL9zmiNp7wKHOLpGPoiIZ7LGeRtuKr2vJBNML9ro5clkM8aZPm3w8Z5GLG9Dv2lSapR84L1BUuPfJlkCXEu1%2BYY7kAQb%2FM%2Fj4N58hMrANlgTBKlCsuE0zNFvaCcVFcxustr8uz3GMxDwITBa8v%2FNShAw2ijVVsyX610ALMeC8%2FNXeQkeH4QJWfV%2BkpkEXFJhlHvzuM59HQYq5I%2Bp&X-Amz-Signature=5d446263bc80b9ac9515aa0dd9479c5f7659b9e3e9082b9dd8b94425874d00cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

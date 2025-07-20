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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMVYOZFV%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T132315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgC3GmYSXPBMpMR6ZpHPz19gqs3M3ShzzKfgLNWV3fKAiBZiR4R8WOLonjb2CKFjutTUU3jGR6xNTuW8vZwZiWiySqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFgB0p%2F6bYU%2BhKK27KtwDO0wYAv0Dqxbl0OEG8z0TuwCD%2Fa7jImg1G86gPzoRoilNzpkLtqtkl2wBNoHCTZl5NYCPhLCuM8Bu1ZkWSbtv6NzSNBZdwEtgRbAaGAs2%2BZy8zKbzLcOEN0F%2F4uEbZbOyeFBOv9y%2BUcKHXgCupcJlevZKic4%2FCDV05ZUJthw6awqcbm3ed%2Flobo539Qc3QylN%2FV%2BLwm5Xtus3oZoyvt9BLtXfsLTM70lRW0f3iK73JGOeXMlckR28Op3TejxfiM%2Bo%2FJeluqs2r%2FtDsC%2B%2FBZXNMjLfNM2JH1wa4y%2BR4rICZIgOrg9HLq9LAPJ%2BbqCRtpa3Jp31qTATE7NX%2BgMcrb9dumEK1a96WK1yw%2BvHlypBtZNPR8gabLp%2BUCLG21jVYtopteRVGjvfxDsTYI6jN895LqA4KNqO1RhnCnyIAGBRHJhvbySpbqWBefUmBc7szLrWu1IMxo4Y9TgAEiuu2S6Qo5bx9mIIdjFhHBgBIBkuRwRU4%2BfQSHwH3%2FwC13TY02z%2B%2F1g9LBvzhKQYLtwgvGjIxp4sEK6aW0rJ2rzN%2FGNbKLnzKcEMJ9gmt0%2FeKJ8RFq28PmG1nFwWoyo0aqo6Ylp9oYGSkM3jIwu5oECquf1GtLxP4Y6fIJ0WnxhA900w3dfzwwY6pgGD6irzHLBBA8eldJDhRzsYALIcG1gBKN1cau%2Bu6DRyjigherSQrpJU1YG9uWkdS2m2cN6He2wOFjnAFHH7u%2B4R2JjrJjVAKyBpGBQ4pwy4jKLWMV9OUy%2B%2B%2Fe6zlofz5kvU345cItq3yrR%2FZHph1egKl6bVJKx868DZDiZmfsvB2P1Ja4Po2aEGb%2BPtsm25aOXbdWBC9tBrU0NljHJ5AvkmTPWMsfSV&X-Amz-Signature=6e4fef2d5dffa1a85bd1338c236fb4cc3f9f7edc5a084424c5c06762f5dfd330&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMVYOZFV%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T132315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgC3GmYSXPBMpMR6ZpHPz19gqs3M3ShzzKfgLNWV3fKAiBZiR4R8WOLonjb2CKFjutTUU3jGR6xNTuW8vZwZiWiySqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFgB0p%2F6bYU%2BhKK27KtwDO0wYAv0Dqxbl0OEG8z0TuwCD%2Fa7jImg1G86gPzoRoilNzpkLtqtkl2wBNoHCTZl5NYCPhLCuM8Bu1ZkWSbtv6NzSNBZdwEtgRbAaGAs2%2BZy8zKbzLcOEN0F%2F4uEbZbOyeFBOv9y%2BUcKHXgCupcJlevZKic4%2FCDV05ZUJthw6awqcbm3ed%2Flobo539Qc3QylN%2FV%2BLwm5Xtus3oZoyvt9BLtXfsLTM70lRW0f3iK73JGOeXMlckR28Op3TejxfiM%2Bo%2FJeluqs2r%2FtDsC%2B%2FBZXNMjLfNM2JH1wa4y%2BR4rICZIgOrg9HLq9LAPJ%2BbqCRtpa3Jp31qTATE7NX%2BgMcrb9dumEK1a96WK1yw%2BvHlypBtZNPR8gabLp%2BUCLG21jVYtopteRVGjvfxDsTYI6jN895LqA4KNqO1RhnCnyIAGBRHJhvbySpbqWBefUmBc7szLrWu1IMxo4Y9TgAEiuu2S6Qo5bx9mIIdjFhHBgBIBkuRwRU4%2BfQSHwH3%2FwC13TY02z%2B%2F1g9LBvzhKQYLtwgvGjIxp4sEK6aW0rJ2rzN%2FGNbKLnzKcEMJ9gmt0%2FeKJ8RFq28PmG1nFwWoyo0aqo6Ylp9oYGSkM3jIwu5oECquf1GtLxP4Y6fIJ0WnxhA900w3dfzwwY6pgGD6irzHLBBA8eldJDhRzsYALIcG1gBKN1cau%2Bu6DRyjigherSQrpJU1YG9uWkdS2m2cN6He2wOFjnAFHH7u%2B4R2JjrJjVAKyBpGBQ4pwy4jKLWMV9OUy%2B%2B%2Fe6zlofz5kvU345cItq3yrR%2FZHph1egKl6bVJKx868DZDiZmfsvB2P1Ja4Po2aEGb%2BPtsm25aOXbdWBC9tBrU0NljHJ5AvkmTPWMsfSV&X-Amz-Signature=3f0b91ccaf41734dee9d9ff692227feb5b60d43d2bf4282afee749b9dd86bb17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

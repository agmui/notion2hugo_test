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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644IELM67%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T021649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIFqXEAd1U8dHzW193bVcnjHI%2BUCEUtU66oc8aVokLc3kAiAJmPyBQzU9xSqbQuVQkvVKrKDJ01WnKNVys%2FpAqpM0gCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvS56MB7DcJhWcG9HKtwDPu8dqjB%2BPZmJ5aWfBgsse2TaWs%2BXNAHmuFad39L8KQKJdGTIcZUBIRudo689%2FCNjiIwdqyAuj9kVfzxF4PTU8MJAARFtMzi4b6ht2OkQp5ngcEDdECCaqVNP%2Bm38h%2BuakC4aFNg2XSDbQ0qA1HPRSoaNEMCojHGvKz0oPN81hjq0XRs9Ub5o0H%2FYMQDcfs7SjHtuoTA0kXsUtTuse%2F81tHN74iqmzk2OQW2ylctQ0rfWjf9fVFEu6V2%2F4ArRyakzUZ4amX1rtfMdmBb7gWuF3TryEJzWaww7i4WzxIMwoRB%2FkGelwNdXcBIHqEPnqQeH3ViSX5DxNFkcMVZBYIs70BiToFY3BMFm1mgm8yZJW4QmFM1uxd9e6vsmedgO4Q3aqIFyaJ47C7uSHMSz9Q4oOUWcay%2F3xeEmjUoLCd1jTsjXT6vwHNiFGZ8fKK%2Fafkl9FHDSuacqMAP8DmHooew6q%2BRStGKleI5qcsfG%2B4uTSKDJrLcrfCoshPx5lfehF7YGVuympP%2FNkSdYd6wnR30NS%2Fp7TxHLW9m13JhqAcaQ90jCifD0BIHQ2MIMO3RUWtez76dYJgJWYlGLpTcEPx0eTzLS5i6n3ze07Z9LMBqBUpVXrcr05SHKzsaZ0TMw%2BoTnvwY6pgEN0vYxBJ3hqzmvfnTcbeytqfSqQsv8x2JLgS7F2KZJI4zaEIyCYvgqa50XW8zl1bhydqUqV3gioVVvttJdalgk6trcPm4HlEnnlnHqLcVqIWWkHVbwjI68VC3j7EByszpmmFsBi%2Fd3dsHv8%2B8T5uxqBqWlGY1lOuieP%2Bn7wFvcmIFtmv21N9%2BFMbBgEj%2BY28ebb%2FinSAmvY9dmW%2B8ZcIAxdRV9brDc&X-Amz-Signature=1b85619aa2e15f3b5350fd6d012c13f9ac988964a947065429925b23e145eaf8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644IELM67%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T021649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIFqXEAd1U8dHzW193bVcnjHI%2BUCEUtU66oc8aVokLc3kAiAJmPyBQzU9xSqbQuVQkvVKrKDJ01WnKNVys%2FpAqpM0gCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvS56MB7DcJhWcG9HKtwDPu8dqjB%2BPZmJ5aWfBgsse2TaWs%2BXNAHmuFad39L8KQKJdGTIcZUBIRudo689%2FCNjiIwdqyAuj9kVfzxF4PTU8MJAARFtMzi4b6ht2OkQp5ngcEDdECCaqVNP%2Bm38h%2BuakC4aFNg2XSDbQ0qA1HPRSoaNEMCojHGvKz0oPN81hjq0XRs9Ub5o0H%2FYMQDcfs7SjHtuoTA0kXsUtTuse%2F81tHN74iqmzk2OQW2ylctQ0rfWjf9fVFEu6V2%2F4ArRyakzUZ4amX1rtfMdmBb7gWuF3TryEJzWaww7i4WzxIMwoRB%2FkGelwNdXcBIHqEPnqQeH3ViSX5DxNFkcMVZBYIs70BiToFY3BMFm1mgm8yZJW4QmFM1uxd9e6vsmedgO4Q3aqIFyaJ47C7uSHMSz9Q4oOUWcay%2F3xeEmjUoLCd1jTsjXT6vwHNiFGZ8fKK%2Fafkl9FHDSuacqMAP8DmHooew6q%2BRStGKleI5qcsfG%2B4uTSKDJrLcrfCoshPx5lfehF7YGVuympP%2FNkSdYd6wnR30NS%2Fp7TxHLW9m13JhqAcaQ90jCifD0BIHQ2MIMO3RUWtez76dYJgJWYlGLpTcEPx0eTzLS5i6n3ze07Z9LMBqBUpVXrcr05SHKzsaZ0TMw%2BoTnvwY6pgEN0vYxBJ3hqzmvfnTcbeytqfSqQsv8x2JLgS7F2KZJI4zaEIyCYvgqa50XW8zl1bhydqUqV3gioVVvttJdalgk6trcPm4HlEnnlnHqLcVqIWWkHVbwjI68VC3j7EByszpmmFsBi%2Fd3dsHv8%2B8T5uxqBqWlGY1lOuieP%2Bn7wFvcmIFtmv21N9%2BFMbBgEj%2BY28ebb%2FinSAmvY9dmW%2B8ZcIAxdRV9brDc&X-Amz-Signature=8c9c7cfb18672243c67dc646d2db782540296fd11fd84a5b58500b82da7be75e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

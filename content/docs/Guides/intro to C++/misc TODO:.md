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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQUMJQDL%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T041724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHVoZ%2FFsbxltOHMpX0Ya6ZoP4Hba9msQpSJFO%2Fj2aIndAiBa7grYbX0tq1tOTp1mbC8xQUzLW5rxpS9J%2Fs52BZptcyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMQ9he9XxNFJIWItf2KtwD5seSXVBP7urvYtAgC8xGlD0NC%2BcKzmxf%2FNDXwQ0NtNJTEkL8ZnG6AQo%2BPJcRyoA1Trk7T2iHQF9ZelUeghvBF%2B6lCXFCz7ipXFOiBAPXuy07CT0eC4fVn4GwGwQz84mTatmILxydNk1lpkjaefXv3shrhvsOYzaikgd4wocP9upNJRD9xBYuNTWd4n15EKRzXFuSbccKgnFBFq6ZrbuG7ne7M24XecTvL3yEGBbg57N68KAmdTTWKV6Sb0dupwJQatTPi92hSE2mW79zP9HqLYUDoRZ8FDSaWOHJC9uQABGk23agQuEiRIatt%2BTG96G2MzUp%2BRAqAFTF27C%2B6a0nAd61io9%2FkIkybRwCRy7CfDpaly7WaI%2BmWJZv0ys9RTCJ6YnZypDHI7OGPPzUrZywWjvy5W%2FonLqtASi9U9%2FTKZMgIj6nhd%2F5IMG2eTRdivFYg5TEXJEkO74IymGLCJkCjGmatYh0sjU4%2Blbusk4kF7OboJXaKh4B2Ije1BRhFnezkzSWZ1iJ729YIntNHDscz7B9fMAbm%2FA6Es%2BxS2LbBGt1okPwzPfqCo4e3bDTHL19Q8gP%2FGZTuO7mibWV9FEAwTNHQ8YphS6hKabwLQbfyTC2SoiCjjgoyg5STXUw7aaEwgY6pgFabiVzdc0SfuqWkSjktrWbTTrAmEGFu%2B4uS2V8x5UBfoU%2FsrzMq5dtBY2kjB2Ck%2F8jxqmpf6Zq%2FNATGiKAomlWMK1UKuomKZdkkP1AyHCgzJ8QdJ8PcGbP3MBOfDg3vWD9Bv%2BCD4p11VWix3gC38x4%2F7LSgEnX6chKr0Azp6%2BuvCcaeW7oO7zEh3QTm8o0IuGA9qDeovN7PUthh2Loc4mrJpN4PdI7&X-Amz-Signature=88b92498b566e9bcffa2b0098b5f3b5f1dbe47ac050d601454998e29d0a620df&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQUMJQDL%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T041724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHVoZ%2FFsbxltOHMpX0Ya6ZoP4Hba9msQpSJFO%2Fj2aIndAiBa7grYbX0tq1tOTp1mbC8xQUzLW5rxpS9J%2Fs52BZptcyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMQ9he9XxNFJIWItf2KtwD5seSXVBP7urvYtAgC8xGlD0NC%2BcKzmxf%2FNDXwQ0NtNJTEkL8ZnG6AQo%2BPJcRyoA1Trk7T2iHQF9ZelUeghvBF%2B6lCXFCz7ipXFOiBAPXuy07CT0eC4fVn4GwGwQz84mTatmILxydNk1lpkjaefXv3shrhvsOYzaikgd4wocP9upNJRD9xBYuNTWd4n15EKRzXFuSbccKgnFBFq6ZrbuG7ne7M24XecTvL3yEGBbg57N68KAmdTTWKV6Sb0dupwJQatTPi92hSE2mW79zP9HqLYUDoRZ8FDSaWOHJC9uQABGk23agQuEiRIatt%2BTG96G2MzUp%2BRAqAFTF27C%2B6a0nAd61io9%2FkIkybRwCRy7CfDpaly7WaI%2BmWJZv0ys9RTCJ6YnZypDHI7OGPPzUrZywWjvy5W%2FonLqtASi9U9%2FTKZMgIj6nhd%2F5IMG2eTRdivFYg5TEXJEkO74IymGLCJkCjGmatYh0sjU4%2Blbusk4kF7OboJXaKh4B2Ije1BRhFnezkzSWZ1iJ729YIntNHDscz7B9fMAbm%2FA6Es%2BxS2LbBGt1okPwzPfqCo4e3bDTHL19Q8gP%2FGZTuO7mibWV9FEAwTNHQ8YphS6hKabwLQbfyTC2SoiCjjgoyg5STXUw7aaEwgY6pgFabiVzdc0SfuqWkSjktrWbTTrAmEGFu%2B4uS2V8x5UBfoU%2FsrzMq5dtBY2kjB2Ck%2F8jxqmpf6Zq%2FNATGiKAomlWMK1UKuomKZdkkP1AyHCgzJ8QdJ8PcGbP3MBOfDg3vWD9Bv%2BCD4p11VWix3gC38x4%2F7LSgEnX6chKr0Azp6%2BuvCcaeW7oO7zEh3QTm8o0IuGA9qDeovN7PUthh2Loc4mrJpN4PdI7&X-Amz-Signature=03c044c2dc0f7cb4d9c776aa23ba199e6d1bb5b4d752a83ce6dbd7ee79a5aa95&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666ATLEMO%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T022825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnuBu147mSPVQf%2FT%2BJbuIh6%2BT53e7OtyUXKdUsEs65pAIgAjcNoV9F2G7QtFXW5KyeJk8av8vm92%2FcJ5J7BspdZ1gqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUJz9jYxM6cynnfQSrcAy5hPV5FyayT09HqIycRavu3ai51HAVP8%2Fy9mUh7g7ImR%2BQSFfXKP3OqUKI18y9BkMXLdBNZhDD69%2BIAtjvXltZDx%2Bf%2F6PRoqprXOl0VWj0md3ZpnoROg1nEo6xw0MZ3zwaEM2sjDtz2DEjld3lJc4ESoDgDxg3uBUJnfoiqDY%2BwvTBBaHjvCEgtdMKu7XdDg7E3%2BvGv4ClV0JbIAEnjaX%2B56YSfcBCnGrR2uAXQO2kUCas00yH2Ix0LJw5f0dGE7KWFz9Du5753hMsnSfyTxV7To8%2Ba7EJoIArMTsjoZRhsPEJCcPEHrJcLb%2BRZYP0yvxHNb%2FDUatpOvA0L1QYkgIIcf95Jf5xc43WnccqRYxwamSaR4tvjJ8JfxviSgSYXLDtqSzGoIHIJv1ZYKfB%2FfhPrH3e2Ti7KBTFx%2FklNkJmISdZqsuWQFZ%2BeMqXz58sTdZVoagtcDmfSd9clBFMM3G9%2BAPitZEujmDCxJY19dQnbbYstmQCI%2BG6s7a84zKOl0gq0XeLSTE4uORW0%2FVCD4ZbU9i7OQsQUAEruHnpwVMQDar4VcrpUJRY1ElSDXca1R6TeTGinLDtY9LFFUW4ZQ6wdYTQFUjbkpX0ACwND5txILL%2Bv%2Fqh%2Bqbc6aiq9MLHLr8EGOqUBI%2BlYupNjz4f2nJIt1VXFprmclZHVjzXEfSqxZDJNpMcmbhpN4CUKG9Zq4Fg%2BahRLCWeXUgSW1Q0Le47enesVNhB9RxRHmkddUSoPMNA2YORHi4jlZcQWLAd%2BW6DJUsgT7tOGIclM2gqkKN9papQFzIHHNb6qxFoQxrPpt4Wm1RvXmc4qkgGVOS1AEZuC2Qb4bgqodmB670ud%2F9VD%2FhOP9%2BhPx6hf&X-Amz-Signature=d244031727f34f223734a965a6c67a1c8bed5f415c36c2ada857d1d5bb8abff8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666ATLEMO%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T022825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnuBu147mSPVQf%2FT%2BJbuIh6%2BT53e7OtyUXKdUsEs65pAIgAjcNoV9F2G7QtFXW5KyeJk8av8vm92%2FcJ5J7BspdZ1gqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUJz9jYxM6cynnfQSrcAy5hPV5FyayT09HqIycRavu3ai51HAVP8%2Fy9mUh7g7ImR%2BQSFfXKP3OqUKI18y9BkMXLdBNZhDD69%2BIAtjvXltZDx%2Bf%2F6PRoqprXOl0VWj0md3ZpnoROg1nEo6xw0MZ3zwaEM2sjDtz2DEjld3lJc4ESoDgDxg3uBUJnfoiqDY%2BwvTBBaHjvCEgtdMKu7XdDg7E3%2BvGv4ClV0JbIAEnjaX%2B56YSfcBCnGrR2uAXQO2kUCas00yH2Ix0LJw5f0dGE7KWFz9Du5753hMsnSfyTxV7To8%2Ba7EJoIArMTsjoZRhsPEJCcPEHrJcLb%2BRZYP0yvxHNb%2FDUatpOvA0L1QYkgIIcf95Jf5xc43WnccqRYxwamSaR4tvjJ8JfxviSgSYXLDtqSzGoIHIJv1ZYKfB%2FfhPrH3e2Ti7KBTFx%2FklNkJmISdZqsuWQFZ%2BeMqXz58sTdZVoagtcDmfSd9clBFMM3G9%2BAPitZEujmDCxJY19dQnbbYstmQCI%2BG6s7a84zKOl0gq0XeLSTE4uORW0%2FVCD4ZbU9i7OQsQUAEruHnpwVMQDar4VcrpUJRY1ElSDXca1R6TeTGinLDtY9LFFUW4ZQ6wdYTQFUjbkpX0ACwND5txILL%2Bv%2Fqh%2Bqbc6aiq9MLHLr8EGOqUBI%2BlYupNjz4f2nJIt1VXFprmclZHVjzXEfSqxZDJNpMcmbhpN4CUKG9Zq4Fg%2BahRLCWeXUgSW1Q0Le47enesVNhB9RxRHmkddUSoPMNA2YORHi4jlZcQWLAd%2BW6DJUsgT7tOGIclM2gqkKN9papQFzIHHNb6qxFoQxrPpt4Wm1RvXmc4qkgGVOS1AEZuC2Qb4bgqodmB670ud%2F9VD%2FhOP9%2BhPx6hf&X-Amz-Signature=15bcabd3cb277321b42c766357c7059334cbd43fcae2ad94c61e692f3d64985f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

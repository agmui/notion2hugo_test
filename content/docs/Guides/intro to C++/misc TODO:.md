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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDLWN2PZ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T110711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIAKy5eBmmJUtdQzVZYCACRM%2BF%2F89t8ucZHAXpPFEDKF3AiEA2Bci%2B0%2BPcamD5u0E8u8AO4vJKT%2FIc9PHracz%2B790TqcqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3fMo7M5s7IFzsqrCrcA5zdeK0uAB3ZPeQ1OE9QvMYXrZ4Cn3%2Fgi40V1Sl4IvVpZVk8jeCmWJtJUs%2FFIpcRrYnoCYDk8TaigFouACgS3aKvMTCPX8SwIgrPFASXodeFPBwMzsV0hE8hgmlMnjzjF0UbIvRb4bCd9ub%2BOzq3s8JWsIs7BBJlhVo%2FHbaz3Sv%2BRv0iESv8KRGleFdzkukZRYMYiigdSFp6epK1BVhTqWN1IrueLm8UgUWYv%2Fiq1d%2FZfwRwuZ4zlU7quyP0cLFsXX%2FQ3Z7%2BcyBRJrGX4alXfvqD%2B38V8AGJSxORt0Te6dHTWZ%2BOLSa4DUt9nVasarZFp0Iek1sGEPAo99ltLMAL8xhr5xI511F20He6G0k9J6rr8rVsfzqjp8WmGOAm4Os%2BExZQ2js7qxuSAuRrV7JDJOxegtS4Ux50NTeR5acbFdboTaDUp0St72PUx9B4cFtUen%2F8JxZcXy5NRHlTWJ9UcUdSkilCj2DUhOiiDammaWuzAwAs7pq3rkQuVlqqD4Wem5%2FIqcik6HdTMFYadrH4R8gbFGGmgVqCgvte5XebgvKRbJZfgsO7G6PjartuBaac1YwTFtY8x%2FQa5pdxDFHstbgQyBaoXvVAxGD%2F5DWlFMw5rsuRtPrScUtUeAQGMOydzcAGOqUB5aCXNA2yfNF5bvWd6YZD9XW0WzP6RK2ooRwe6Zd7hnNLFMgHmhwKPHV0Fvj%2BPYdGJy1mfViBHMYNO6yQn7GSmc1bACZU67oqVzIQdHFoaAP2NIJi1kJEs2GdVL2WHX0mNFUNZkyiTRaQQOuYNt5rXpW7UOOVINVUKRw3GY09odXYmU%2FzYzuDZqbTIOgWPvd59%2FPTXNjJifS%2Fdwm9pp71o2LPmx43&X-Amz-Signature=bad621a4e0bc164377484efc355893d49078cc5fded29de48cf7118d3d4c51fa&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDLWN2PZ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T110711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIAKy5eBmmJUtdQzVZYCACRM%2BF%2F89t8ucZHAXpPFEDKF3AiEA2Bci%2B0%2BPcamD5u0E8u8AO4vJKT%2FIc9PHracz%2B790TqcqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3fMo7M5s7IFzsqrCrcA5zdeK0uAB3ZPeQ1OE9QvMYXrZ4Cn3%2Fgi40V1Sl4IvVpZVk8jeCmWJtJUs%2FFIpcRrYnoCYDk8TaigFouACgS3aKvMTCPX8SwIgrPFASXodeFPBwMzsV0hE8hgmlMnjzjF0UbIvRb4bCd9ub%2BOzq3s8JWsIs7BBJlhVo%2FHbaz3Sv%2BRv0iESv8KRGleFdzkukZRYMYiigdSFp6epK1BVhTqWN1IrueLm8UgUWYv%2Fiq1d%2FZfwRwuZ4zlU7quyP0cLFsXX%2FQ3Z7%2BcyBRJrGX4alXfvqD%2B38V8AGJSxORt0Te6dHTWZ%2BOLSa4DUt9nVasarZFp0Iek1sGEPAo99ltLMAL8xhr5xI511F20He6G0k9J6rr8rVsfzqjp8WmGOAm4Os%2BExZQ2js7qxuSAuRrV7JDJOxegtS4Ux50NTeR5acbFdboTaDUp0St72PUx9B4cFtUen%2F8JxZcXy5NRHlTWJ9UcUdSkilCj2DUhOiiDammaWuzAwAs7pq3rkQuVlqqD4Wem5%2FIqcik6HdTMFYadrH4R8gbFGGmgVqCgvte5XebgvKRbJZfgsO7G6PjartuBaac1YwTFtY8x%2FQa5pdxDFHstbgQyBaoXvVAxGD%2F5DWlFMw5rsuRtPrScUtUeAQGMOydzcAGOqUB5aCXNA2yfNF5bvWd6YZD9XW0WzP6RK2ooRwe6Zd7hnNLFMgHmhwKPHV0Fvj%2BPYdGJy1mfViBHMYNO6yQn7GSmc1bACZU67oqVzIQdHFoaAP2NIJi1kJEs2GdVL2WHX0mNFUNZkyiTRaQQOuYNt5rXpW7UOOVINVUKRw3GY09odXYmU%2FzYzuDZqbTIOgWPvd59%2FPTXNjJifS%2Fdwm9pp71o2LPmx43&X-Amz-Signature=c521a95f9837b99288be7754eec5f9a7b8823e68b68dd4b00e001035a101d19a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IPPX7LS%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIESyDxgNxSnFynMXPFAFD5Cn4ZBY5UvPlXXgKvZqC1rBAiEArN6uY81Dj4nLL0qEA1wIDCw56h8IroYmXkfX3X9LLZYqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFSwA5JiXwwMYY8eMircA0q70jduuuLPYBNfsjexgu6cnravHq5vSn4j1UQXQIr3UYHkmfe7TgfZbB1LOLcajrLeQA0EJRo0LYCyH4y94zvEOvYA1voGCEA31Tt0P%2F5RNpLMj1bR3jC7lwqytwUfRSr91lnxNVLVz26kx8UP%2FJx9NTGydFKuOLlfnisvuqT7rvFJNFSxZk%2BJ61XMM1D4tJZqCsP6K5pVhi19i0t571ou%2B0ibtYAe9ID1oMJEcRq36zNrr%2B9R2sr6plCbO8qpBh9dGmSzjanQQutZzC021FotzSPTQZudwwlJmrJVo4fD3UIWmkeL5SIsdThUfns6YmubM1msOS%2FPEnO37yjFwVlxTWNXOtTvhbv0VpSXdPvcIaQxhOH%2BWDmpZ67yjZPlwO%2FLb0tZVUpaCnCfYXzkK4TZPmBEpO8nCqTz%2BrP8gYKlNxqFTML%2B3FW17fsoOa7w%2BRAdPU2zlEkCdTMRc%2Fhyv5wOzoSoYoddcCYwV4oyeTqvS01o5dlatBKw%2F2CEeAMasMgjYYsBg7MKMtTm3tT1YwaWZZhbe0QLEZYe458sZYUgNBb%2FTQvJafbJZ55fB5lSZa6TpeBCbWer%2FSOMtBqF35X06M17c1Ywn0%2BpyDyoQ7ZlQO9M7vHp8dOO0sscMKD%2Bhb8GOqUBbbMm2w1FPVJ9lKeRTvAe4iOkRJoT6FJS2qR7zF%2B5KQD10Jk%2BVmOwqjfcOfedPMXjKEzM162V648x%2F3Nu2Ew5knvydEDRrXlKxizES2rhqW7ZOfDCc%2FH9qMTiArf9EnlY6w1UDW1khjOBlTsS7h0NPN7dYRGYZtqpNXvuzkXZaEeD1Z1r94g5K4K%2FLGit5FIUoXRVIOI6%2BsrhUunDn6Kw%2BR1lXPl0&X-Amz-Signature=95c29b51bae5586a77769cfeb4c3089a19c08ca2a5e193ef54b4e8726ed2020e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IPPX7LS%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIESyDxgNxSnFynMXPFAFD5Cn4ZBY5UvPlXXgKvZqC1rBAiEArN6uY81Dj4nLL0qEA1wIDCw56h8IroYmXkfX3X9LLZYqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFSwA5JiXwwMYY8eMircA0q70jduuuLPYBNfsjexgu6cnravHq5vSn4j1UQXQIr3UYHkmfe7TgfZbB1LOLcajrLeQA0EJRo0LYCyH4y94zvEOvYA1voGCEA31Tt0P%2F5RNpLMj1bR3jC7lwqytwUfRSr91lnxNVLVz26kx8UP%2FJx9NTGydFKuOLlfnisvuqT7rvFJNFSxZk%2BJ61XMM1D4tJZqCsP6K5pVhi19i0t571ou%2B0ibtYAe9ID1oMJEcRq36zNrr%2B9R2sr6plCbO8qpBh9dGmSzjanQQutZzC021FotzSPTQZudwwlJmrJVo4fD3UIWmkeL5SIsdThUfns6YmubM1msOS%2FPEnO37yjFwVlxTWNXOtTvhbv0VpSXdPvcIaQxhOH%2BWDmpZ67yjZPlwO%2FLb0tZVUpaCnCfYXzkK4TZPmBEpO8nCqTz%2BrP8gYKlNxqFTML%2B3FW17fsoOa7w%2BRAdPU2zlEkCdTMRc%2Fhyv5wOzoSoYoddcCYwV4oyeTqvS01o5dlatBKw%2F2CEeAMasMgjYYsBg7MKMtTm3tT1YwaWZZhbe0QLEZYe458sZYUgNBb%2FTQvJafbJZ55fB5lSZa6TpeBCbWer%2FSOMtBqF35X06M17c1Ywn0%2BpyDyoQ7ZlQO9M7vHp8dOO0sscMKD%2Bhb8GOqUBbbMm2w1FPVJ9lKeRTvAe4iOkRJoT6FJS2qR7zF%2B5KQD10Jk%2BVmOwqjfcOfedPMXjKEzM162V648x%2F3Nu2Ew5knvydEDRrXlKxizES2rhqW7ZOfDCc%2FH9qMTiArf9EnlY6w1UDW1khjOBlTsS7h0NPN7dYRGYZtqpNXvuzkXZaEeD1Z1r94g5K4K%2FLGit5FIUoXRVIOI6%2BsrhUunDn6Kw%2BR1lXPl0&X-Amz-Signature=484f0f5c0b6513613dfcc86be37ce25422ea07c2f9819ecf70305b76b5fa3070&X-Amz-SignedHeaders=host&x-id=GetObject)

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

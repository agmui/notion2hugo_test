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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPVPJVH6%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICYEbc%2F9OpDKT6UQWZxoGHymk4vq0nlFeq2AylZsg1O%2BAiA1hyM%2FRm4sUjT6jF6eZUufegXRC45fGe1mmkhANB%2FQkiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4gRftmFtdlqFWPyaKtwD7fhGA425D4TePCpI77SsickWfSuQNafl0UB%2BCxJBGdWT1%2BcXS2sdXGnFAinY%2FIMA%2Fz8KRldEkVUvjDOaJSs5HB%2B291StUyqTfkLo%2Fkc26Gk%2F7IsphWrETfJA%2FcYpb8PLgxJlUU2ayp1GWOleXqZ83obn2EG%2BPGtAcXAiMNQC4akmCCHcVf4%2BYIzDYgLjGiEYzFTcGapW8Vjn0zkGKQWC6bVwrMu52vSjbtOy5yWU3OOc2bikew6OFx9mOBwQsKlkal%2BukGnlEwSYH6FWjjvdnXRWCALJuqzPXZUmkYbHH6J8s9%2FC9uShHBce6loFIWAOQPMM%2BXnPj%2BsZ6kItOgILQogne3MrCPjDfG5PXb0isJ3W1vvc4Q9rQPMXvDWU50BrACZ7drY5vD%2BcSJ8RBkgdf9tzEkmOB16c4HztIl%2F1xmfM3Anga%2BG6zuKsBkxtxli4FwDzv7lZ93gnvWArnS2%2FmBJnDpZPF8ysqO4ELC3L%2Bxh4h%2Bjr4aNa0s4HhhgPekTv9lKOnwKYqtnQ7KRyDaXbx3IE21e4%2B4v76YTJMbjl8%2FVIH1SdTZFOKlxkINam9J0HUvlEBtKFb5VjoBC6XWMUmuS62H1sLJwkILh%2Bz6EoaydgO6JW7OhJ013AWKQwzrnB0gY6pgFdSTkwDbeHMiczdhBFYpMWw0c%2FGpA4L7pzXddLOdPHk0Y%2FqIp%2F6oHB4Z6poiv%2FNyH%2BCYqAOBcOZXHCMsy05JWXmZFLFCLnur52zuJY%2B1czqHavHk2qH2lghIZhSVkjDk4zT4X%2FBd8rGF6uK4eEpoJtG23hfDLB2GA7zkvuBXzjm38gSA%2BZapeOwJbft741wI%2F98RwI2Cg02vH%2Brn867LNXVhl1RyDb&X-Amz-Signature=f03fbb841a491883e2e3a266251c9f51effcbc7faa90e6f9068edf41a049d6bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPVPJVH6%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICYEbc%2F9OpDKT6UQWZxoGHymk4vq0nlFeq2AylZsg1O%2BAiA1hyM%2FRm4sUjT6jF6eZUufegXRC45fGe1mmkhANB%2FQkiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4gRftmFtdlqFWPyaKtwD7fhGA425D4TePCpI77SsickWfSuQNafl0UB%2BCxJBGdWT1%2BcXS2sdXGnFAinY%2FIMA%2Fz8KRldEkVUvjDOaJSs5HB%2B291StUyqTfkLo%2Fkc26Gk%2F7IsphWrETfJA%2FcYpb8PLgxJlUU2ayp1GWOleXqZ83obn2EG%2BPGtAcXAiMNQC4akmCCHcVf4%2BYIzDYgLjGiEYzFTcGapW8Vjn0zkGKQWC6bVwrMu52vSjbtOy5yWU3OOc2bikew6OFx9mOBwQsKlkal%2BukGnlEwSYH6FWjjvdnXRWCALJuqzPXZUmkYbHH6J8s9%2FC9uShHBce6loFIWAOQPMM%2BXnPj%2BsZ6kItOgILQogne3MrCPjDfG5PXb0isJ3W1vvc4Q9rQPMXvDWU50BrACZ7drY5vD%2BcSJ8RBkgdf9tzEkmOB16c4HztIl%2F1xmfM3Anga%2BG6zuKsBkxtxli4FwDzv7lZ93gnvWArnS2%2FmBJnDpZPF8ysqO4ELC3L%2Bxh4h%2Bjr4aNa0s4HhhgPekTv9lKOnwKYqtnQ7KRyDaXbx3IE21e4%2B4v76YTJMbjl8%2FVIH1SdTZFOKlxkINam9J0HUvlEBtKFb5VjoBC6XWMUmuS62H1sLJwkILh%2Bz6EoaydgO6JW7OhJ013AWKQwzrnB0gY6pgFdSTkwDbeHMiczdhBFYpMWw0c%2FGpA4L7pzXddLOdPHk0Y%2FqIp%2F6oHB4Z6poiv%2FNyH%2BCYqAOBcOZXHCMsy05JWXmZFLFCLnur52zuJY%2B1czqHavHk2qH2lghIZhSVkjDk4zT4X%2FBd8rGF6uK4eEpoJtG23hfDLB2GA7zkvuBXzjm38gSA%2BZapeOwJbft741wI%2F98RwI2Cg02vH%2Brn867LNXVhl1RyDb&X-Amz-Signature=0e37cb28234bcfd2fd743645cdcf016762ee7eff3ce2f106b167c389817eb4da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

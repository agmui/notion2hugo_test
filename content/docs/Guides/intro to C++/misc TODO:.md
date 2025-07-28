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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XPAZNGH%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDi%2Fvhu%2BOSLL0Eqh%2FL46mGfW1jZhGlRycxoeIphn8OH1QIhAJGimfql%2FOxPkdm1c6iK3xEexZkvhVI42Ibc4aa%2Bv1EAKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwA%2BB7CAN5KsFWWricq3AMHAs0ToOjtZz31Tgc7kiSWOa2ey8wa6xaN1oSbPLdhnZQ3mhzwmQDVnn2K4PajV%2FV7OrYPSKpkZcHwnCl0zwavUiV5gnqNBb6iXyZFc9xY%2FwBkgtQw6UZ%2FXS9nVEpstf3PA%2Fe0SUwOyfAiT9w%2BO3JVKDa8rzyxv%2BN239LXULM17yNPIjihPX9Z2PMeghWnN5AuW7APadkdiWrzMTULMhPyUT0tiJVLDQl3gjjpm%2FBsNVl03LR3x6QsJ6DVawyv3snTAGbfoY%2B3F22FmTGluOd6KApswqif3Mg%2BRfsPkrL9yR9y%2Fe80nY87IFCTLdnho13dbdZeCb%2FTTmz6mK99%2F2f0b4BoBq%2FUzirKiu2xNqar4oPtE3hSEUfPtdYPsSgUU1I0DRMId5LjmeqgK4XahyypcBJ5UnZlHqZ46UyMRnX0V8qdHXIcxTJ6v8jz8lrB38s9umhLu7qvF2lsyAIcnxYUs2t4szmiKQmuXkJNKb8Jgn%2BQutT1Eo5Jcm71OU9rvfbRtgft7bJMlFs73dv2WuwoTM%2BPdRpN9qDsxGZB%2BikLaPX3Zyc9uCLZ2T5Q7w7x%2BMlMIMp8QWiPowMK6pbKmSZFso2iHmmm6Pvxhl%2FMjnVXpOqClY0Yf7KnFC30vTC80Z7EBjqkAZTuhYLC6abMuGRmLiFzZItiK4ff4ueMreqSAlAc37BH6qm5cD9MjeGrkNyWvyOsPLfGzihBdGhrEupOnbyH%2Bd4r7K3QQuMWuFbneyutewXHqlP6VTIlbVrnbBGPrTsw3ShCjp4cEtuAn80ijqmXNhFJ%2BjmzdUGltXIprrz2v1X1PDrSAhz5NtBbWDJaH2RLTelOjZdLef0UZVLpEzJPTYRwwdz6&X-Amz-Signature=1ef1bd540a5179f8140e7ef14f69fee10a84c7ef151af1cc7d78f8c77e8cc38f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XPAZNGH%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDi%2Fvhu%2BOSLL0Eqh%2FL46mGfW1jZhGlRycxoeIphn8OH1QIhAJGimfql%2FOxPkdm1c6iK3xEexZkvhVI42Ibc4aa%2Bv1EAKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwA%2BB7CAN5KsFWWricq3AMHAs0ToOjtZz31Tgc7kiSWOa2ey8wa6xaN1oSbPLdhnZQ3mhzwmQDVnn2K4PajV%2FV7OrYPSKpkZcHwnCl0zwavUiV5gnqNBb6iXyZFc9xY%2FwBkgtQw6UZ%2FXS9nVEpstf3PA%2Fe0SUwOyfAiT9w%2BO3JVKDa8rzyxv%2BN239LXULM17yNPIjihPX9Z2PMeghWnN5AuW7APadkdiWrzMTULMhPyUT0tiJVLDQl3gjjpm%2FBsNVl03LR3x6QsJ6DVawyv3snTAGbfoY%2B3F22FmTGluOd6KApswqif3Mg%2BRfsPkrL9yR9y%2Fe80nY87IFCTLdnho13dbdZeCb%2FTTmz6mK99%2F2f0b4BoBq%2FUzirKiu2xNqar4oPtE3hSEUfPtdYPsSgUU1I0DRMId5LjmeqgK4XahyypcBJ5UnZlHqZ46UyMRnX0V8qdHXIcxTJ6v8jz8lrB38s9umhLu7qvF2lsyAIcnxYUs2t4szmiKQmuXkJNKb8Jgn%2BQutT1Eo5Jcm71OU9rvfbRtgft7bJMlFs73dv2WuwoTM%2BPdRpN9qDsxGZB%2BikLaPX3Zyc9uCLZ2T5Q7w7x%2BMlMIMp8QWiPowMK6pbKmSZFso2iHmmm6Pvxhl%2FMjnVXpOqClY0Yf7KnFC30vTC80Z7EBjqkAZTuhYLC6abMuGRmLiFzZItiK4ff4ueMreqSAlAc37BH6qm5cD9MjeGrkNyWvyOsPLfGzihBdGhrEupOnbyH%2Bd4r7K3QQuMWuFbneyutewXHqlP6VTIlbVrnbBGPrTsw3ShCjp4cEtuAn80ijqmXNhFJ%2BjmzdUGltXIprrz2v1X1PDrSAhz5NtBbWDJaH2RLTelOjZdLef0UZVLpEzJPTYRwwdz6&X-Amz-Signature=0555054120a318f34719d631922c8dcd7d2577b6a45ec13830006cb9c50549af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

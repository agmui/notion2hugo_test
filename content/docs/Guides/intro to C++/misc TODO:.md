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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674XV5OLH%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFRMYsnvIwbozabennhj%2BdNY0nWBH5B%2FXH5f1fjMBdGxAiA5MzN8zkUf%2Bb52Q9zCaf%2FDaFwBPuXB4H5uAbQynCa66yr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIM1xPrX5isYkKOqJNMKtwDM9O5XGmVEjnTaGXKdzMIcKOPgcm9IiSKGq3mwbEE8%2FTkMbgKQy5K9vqOnzIsDps96bGOJMAck787nEAMWkXeVOZcb8PpViOwfSVigqf%2F8RiKiuYPkYrlJwRvhkvkcdT1fhBAsrxNtS9fbr9py447bVIkY5gexXLOQjT0PWN5E66OwVdGeOq07LHk0pPRlyi36HMHe9NqqTJ1%2BWpaUvlEtVgsMPJI4fb3Fw1nxk3vUJ%2BZichoRlXdut6hcb3%2BF5wa%2FRLiN4SLiosO9P%2FiTFeq%2Fl5TsYpOGUqXW6pYOmQa3d7eVXhe7ahRtXeWTN3TKFmm2A4q%2F27Clf9HuW3HwrEqBvM4%2F%2FwdejoECLdRWEOXOgW18RZK1FfHOWhiFg%2Bpj6kwA0GJU9pI3YUfPgRnz2Er4q3zITsKLLHQFjkh6aFtZPQ0uTm7vc7Chl75UHFzpYDjsE2EKlQclkpFqkcCNAJWwU4XnALRlaG2KcBUnx2dItW9RUwWe2ITqG3FiHMXN0xUT1C1ZR0GMJbe4BmdcWSsAXP6RcF%2Fe8HMvNxwqwxPh9G%2BxO4Tqt2IFj6%2BTjdsMCeQVvcZCDi81%2BrdvQkyrnU%2F5kW%2FI8FFceHJgEEmO1r5HzdXvaO%2Frlz4VWrNwjYwzJbYwQY6pgHqvdUx%2BrptmT5ssGqOFGVKPGg3qOevJlH%2BN5F30SEsZBAFltVFZwmIVlRRhNZ8rPp2s%2FeMH%2BFOd06sefnDc%2F5gVNzhrfToyUaKVfw%2BNFzG7TsmSkS0v71UHTeZc1VvwEELyHlZI20DgS9hcFwdFu%2BpBENHL4zPTnxy07cXCwCgO%2Fg6dLmiWD02hggGwOI24o342lyY%2FTjc6d6c5tRpxuZBNtO8SVvH&X-Amz-Signature=c75bf96c874a17d1ffdb1798115bcb6284b1086aac5567e01829b8278f1fb393&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674XV5OLH%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFRMYsnvIwbozabennhj%2BdNY0nWBH5B%2FXH5f1fjMBdGxAiA5MzN8zkUf%2Bb52Q9zCaf%2FDaFwBPuXB4H5uAbQynCa66yr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIM1xPrX5isYkKOqJNMKtwDM9O5XGmVEjnTaGXKdzMIcKOPgcm9IiSKGq3mwbEE8%2FTkMbgKQy5K9vqOnzIsDps96bGOJMAck787nEAMWkXeVOZcb8PpViOwfSVigqf%2F8RiKiuYPkYrlJwRvhkvkcdT1fhBAsrxNtS9fbr9py447bVIkY5gexXLOQjT0PWN5E66OwVdGeOq07LHk0pPRlyi36HMHe9NqqTJ1%2BWpaUvlEtVgsMPJI4fb3Fw1nxk3vUJ%2BZichoRlXdut6hcb3%2BF5wa%2FRLiN4SLiosO9P%2FiTFeq%2Fl5TsYpOGUqXW6pYOmQa3d7eVXhe7ahRtXeWTN3TKFmm2A4q%2F27Clf9HuW3HwrEqBvM4%2F%2FwdejoECLdRWEOXOgW18RZK1FfHOWhiFg%2Bpj6kwA0GJU9pI3YUfPgRnz2Er4q3zITsKLLHQFjkh6aFtZPQ0uTm7vc7Chl75UHFzpYDjsE2EKlQclkpFqkcCNAJWwU4XnALRlaG2KcBUnx2dItW9RUwWe2ITqG3FiHMXN0xUT1C1ZR0GMJbe4BmdcWSsAXP6RcF%2Fe8HMvNxwqwxPh9G%2BxO4Tqt2IFj6%2BTjdsMCeQVvcZCDi81%2BrdvQkyrnU%2F5kW%2FI8FFceHJgEEmO1r5HzdXvaO%2Frlz4VWrNwjYwzJbYwQY6pgHqvdUx%2BrptmT5ssGqOFGVKPGg3qOevJlH%2BN5F30SEsZBAFltVFZwmIVlRRhNZ8rPp2s%2FeMH%2BFOd06sefnDc%2F5gVNzhrfToyUaKVfw%2BNFzG7TsmSkS0v71UHTeZc1VvwEELyHlZI20DgS9hcFwdFu%2BpBENHL4zPTnxy07cXCwCgO%2Fg6dLmiWD02hggGwOI24o342lyY%2FTjc6d6c5tRpxuZBNtO8SVvH&X-Amz-Signature=8effd3e75c4c62c7b10ad1f719ec0f01902dc6e456ee5077a781f753e82c6d15&X-Amz-SignedHeaders=host&x-id=GetObject)

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

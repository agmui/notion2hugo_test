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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBCCSECY%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCQhqjIQsD7w1E7M%2FUqxvbIgVHI8gF2511zgxGNinjflwIhAJdAmnoi3XgkStwnxj6ai3m21T5sGeb2ZWhCcutTtTctKv8DCCYQABoMNjM3NDIzMTgzODA1IgxkzEjUsSMzfSpLkAIq3AMP3S2O2mAj%2BVIsiqWhfLca32L2fInIGTjj6GlRQ7lwKJ7bAxdmL5XpYoBYhdP1IoRdLuqYZms%2BcPrcwRlt4RJqYNxAk28iiBEI%2B8B%2BcCOTYw8YVOu1IGzFW64QU%2FsAyCu8pH1Llm89OkvBvn9i9oaUfNoGEUnoPrzDDmbwhn68nci2bamDscJ81gjkjrUrNn5Q75svYI4FyGK3G9gKvm2iZv6BObA06sx86HoN%2BiRzqIpdzrZ9K%2BKYojele9bpLeEnaEKyWakn6o22p6uQM5IgVFFzPyVZGTehH5wKiEO3QgJCat8H9xajdZuxz9IvFZOEiDRdEmcI%2F4mxF%2BT5Oo%2F%2F30q%2BCjBPod3EzLLpQjrxOjjsrk65dkjyfsy1YaNdJCqGdpQUXqbfcVAaoRHGWvbuVydl1%2FKWxwT8%2F7Gb0hsTdq14lZOnaSkm0UpEWhrnwm4mArmfZGVK7vUjdv3Op9rejBtRjVVcCT%2Fowk%2F9EDHcKweO8Rjg%2BastUkAb7Eseyo%2FsoHHLwmU6Ftjq2w0xh70o6QbgoGYJvmAf7ZpVEDCUWdkTdXxH9wy4Q7zOB7tvmjsaZaEacXxkOsBmqFSxU%2F%2Fd3iP9QNQUQCswNpVnmoXK0n1RQnLvf77lNjf7ZzCoucrBBjqkAUJGC5xACGTMBLDrOpztAb1Z0VYoV%2BtVLaoBFYZhC61RrfXn9QbezYco5T%2BA%2FfDy7ZYH1T0%2FI4S9EfrXhmUEp6oOwNSLF2BqebIDcyz9ufNOltTDGU2cP909BD2XNrhSP6ZIu3mtz0QtkT758tC2%2FMCoH%2FCcFQP7qxOrH9hm8N0KRHUROjckMVvCtANf9Y%2Bo9bHdARdOkLKCmyRDW6%2FBSzI5Si%2FV&X-Amz-Signature=205e5232c2bc08c218ed1374f6f5314b2039fdb71503d2874c82417bcdc708f8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBCCSECY%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCQhqjIQsD7w1E7M%2FUqxvbIgVHI8gF2511zgxGNinjflwIhAJdAmnoi3XgkStwnxj6ai3m21T5sGeb2ZWhCcutTtTctKv8DCCYQABoMNjM3NDIzMTgzODA1IgxkzEjUsSMzfSpLkAIq3AMP3S2O2mAj%2BVIsiqWhfLca32L2fInIGTjj6GlRQ7lwKJ7bAxdmL5XpYoBYhdP1IoRdLuqYZms%2BcPrcwRlt4RJqYNxAk28iiBEI%2B8B%2BcCOTYw8YVOu1IGzFW64QU%2FsAyCu8pH1Llm89OkvBvn9i9oaUfNoGEUnoPrzDDmbwhn68nci2bamDscJ81gjkjrUrNn5Q75svYI4FyGK3G9gKvm2iZv6BObA06sx86HoN%2BiRzqIpdzrZ9K%2BKYojele9bpLeEnaEKyWakn6o22p6uQM5IgVFFzPyVZGTehH5wKiEO3QgJCat8H9xajdZuxz9IvFZOEiDRdEmcI%2F4mxF%2BT5Oo%2F%2F30q%2BCjBPod3EzLLpQjrxOjjsrk65dkjyfsy1YaNdJCqGdpQUXqbfcVAaoRHGWvbuVydl1%2FKWxwT8%2F7Gb0hsTdq14lZOnaSkm0UpEWhrnwm4mArmfZGVK7vUjdv3Op9rejBtRjVVcCT%2Fowk%2F9EDHcKweO8Rjg%2BastUkAb7Eseyo%2FsoHHLwmU6Ftjq2w0xh70o6QbgoGYJvmAf7ZpVEDCUWdkTdXxH9wy4Q7zOB7tvmjsaZaEacXxkOsBmqFSxU%2F%2Fd3iP9QNQUQCswNpVnmoXK0n1RQnLvf77lNjf7ZzCoucrBBjqkAUJGC5xACGTMBLDrOpztAb1Z0VYoV%2BtVLaoBFYZhC61RrfXn9QbezYco5T%2BA%2FfDy7ZYH1T0%2FI4S9EfrXhmUEp6oOwNSLF2BqebIDcyz9ufNOltTDGU2cP909BD2XNrhSP6ZIu3mtz0QtkT758tC2%2FMCoH%2FCcFQP7qxOrH9hm8N0KRHUROjckMVvCtANf9Y%2Bo9bHdARdOkLKCmyRDW6%2FBSzI5Si%2FV&X-Amz-Signature=aa89d5bd80c6840aa646926a4f29eac64b153d39cdd4d4971c97e3fc663eae6f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

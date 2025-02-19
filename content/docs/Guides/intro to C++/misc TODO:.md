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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N4CHU77%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T003613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIHe%2BBXdPDBwdgXRlscAq8T7Phy5PjxCLWMdPMzblSNIEAiBdGxpiqWHvnQQhn%2Bf49swyOYNz5IHbMkldt8nHfecFZiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRFNPONqnaKI5VSN0KtwDyjqfLXj%2BvYXMqtpkCFAo8bPoGrqkgl6QFjpNxWhsPNxdc2%2BMzc53jFUtmbvm25NTqKp1dG6DawFqgVtzb2l4kokg%2B2p5QpaLdixBcCMYxWsQyHk8DE1q97Kv%2F8kHV0szqE3Vo6lbyefpHpiI04cAtM9cluuWEZ7a3EOXNtGPTJ0l4YbCRmUGd8xfd4D79TWSL9aHnwaOg3Q8SJNVCzxRVmgf%2B90RCfVUaZQ59WJiMYkCK5lviXz9bp9zPmyDNZ617cILao8aw%2Ftinv1lW3Wg7ZlUJTfPbu6rhYgYfMWuMh0LAo7mPJhMo%2BikTfq56VYEWJPaJg%2FfMK5gzoc9O8jbaH7b214VXy5UsYce3tOu3q5wgh8vuDxe0gzeSpATPyacyGA4ZfbtMRIp6tR9L0fTLMwbOpEV3Fa%2F7AmVxHV1QjX1Gulz3O9TAw%2F47VetElpADb6c4orammhvXHMqNkdTXypob6MJX3sxb4BSZmJTU52LPs5nB31LO2Oqmp3XzvAa8Scef3xf%2F5PWrSvFPEA3HC1337aYEP5CdCjGhhUtwTFPPibFbRuK%2FeGGr6Y29Mq2HguvxTYwVQiS9y8Bu%2Fps0KThLipJ0CpQyoJR5zYjXdTLncAYXex09pieGp4wyszUvQY6pgHX1QUwYfZCt7FaPq%2BKZaan%2B%2BdZDk1ZsOhbqFgV7NpgiQxqMnCQmzO9r0sKXaSUHNf7ScWrh3b0u5RJWIvSP%2BA9BYLX%2FgZSxvutkmQLtpJin7GEk%2FCYas6kzR8VrRsJn2X16vg%2B2KTTqAyNhIdS1rVqpP07UJuvNJqKoa1yJu2RNi4IsQSmewpNqvdrnhs8TTxPZOFNTiKsO%2B7k76sZKUeU5Jtd38PT&X-Amz-Signature=9b9cd4fda20b92b22b3d690b2149d7bb77f9114271ee3a583849094d6c9c02ba&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N4CHU77%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T003613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIHe%2BBXdPDBwdgXRlscAq8T7Phy5PjxCLWMdPMzblSNIEAiBdGxpiqWHvnQQhn%2Bf49swyOYNz5IHbMkldt8nHfecFZiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRFNPONqnaKI5VSN0KtwDyjqfLXj%2BvYXMqtpkCFAo8bPoGrqkgl6QFjpNxWhsPNxdc2%2BMzc53jFUtmbvm25NTqKp1dG6DawFqgVtzb2l4kokg%2B2p5QpaLdixBcCMYxWsQyHk8DE1q97Kv%2F8kHV0szqE3Vo6lbyefpHpiI04cAtM9cluuWEZ7a3EOXNtGPTJ0l4YbCRmUGd8xfd4D79TWSL9aHnwaOg3Q8SJNVCzxRVmgf%2B90RCfVUaZQ59WJiMYkCK5lviXz9bp9zPmyDNZ617cILao8aw%2Ftinv1lW3Wg7ZlUJTfPbu6rhYgYfMWuMh0LAo7mPJhMo%2BikTfq56VYEWJPaJg%2FfMK5gzoc9O8jbaH7b214VXy5UsYce3tOu3q5wgh8vuDxe0gzeSpATPyacyGA4ZfbtMRIp6tR9L0fTLMwbOpEV3Fa%2F7AmVxHV1QjX1Gulz3O9TAw%2F47VetElpADb6c4orammhvXHMqNkdTXypob6MJX3sxb4BSZmJTU52LPs5nB31LO2Oqmp3XzvAa8Scef3xf%2F5PWrSvFPEA3HC1337aYEP5CdCjGhhUtwTFPPibFbRuK%2FeGGr6Y29Mq2HguvxTYwVQiS9y8Bu%2Fps0KThLipJ0CpQyoJR5zYjXdTLncAYXex09pieGp4wyszUvQY6pgHX1QUwYfZCt7FaPq%2BKZaan%2B%2BdZDk1ZsOhbqFgV7NpgiQxqMnCQmzO9r0sKXaSUHNf7ScWrh3b0u5RJWIvSP%2BA9BYLX%2FgZSxvutkmQLtpJin7GEk%2FCYas6kzR8VrRsJn2X16vg%2B2KTTqAyNhIdS1rVqpP07UJuvNJqKoa1yJu2RNi4IsQSmewpNqvdrnhs8TTxPZOFNTiKsO%2B7k76sZKUeU5Jtd38PT&X-Amz-Signature=6d6df5e10f16ecd4b93b8a2ebab57b4591983d277b0e011eb5455307b1709aa1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

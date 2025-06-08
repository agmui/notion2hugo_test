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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKV74USW%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T081031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIogp8vNY%2F1aoW9SfBJB8AJqPi4gUPZtXwp7lgrw4%2BvAiAJqXazYIkRNvQ4Bqj1HaBSWqYM9Us37lPv38zCX7LtwSqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtUkS2xvQVciArQrzKtwDPnsuGSAEyhc1C9fMAPd3Ee4vGjlMfaBDZKEvNQPt28t2barvlZ5RpPE%2BbnN0pOwGG%2FJM%2FeonAl573alwBVcEOLWZZuQrNXpz4RbQH491GjXCrHZz%2BWRVq2ojEI1aVBs6hTK0TZPplrSKRT4nkvco40rys00AJTEdmCUFPMOboHorDOzu1gCrI6OJ7kIfm4%2BOaYaiFO9e0KWFwl%2Fi3TzBCg54bwGWzllTFMpLeqwuXKIz0sWgJ22cAIiX7urUMXj2xk9ZRemc6J2i2zvO%2F1ceyJ6C%2B2bC%2Fv3B9wOTF8YWOlE9V9EqAXINd6wfQj78td%2BdWSIVWXEIYc%2FB1DsO2NPTW48VuxPEIV5%2BD0Ze2QzDqQ6LANjvEzu1wyV5F%2BD2udmfjRprcraIMNhpTMcb5nd%2FbQwjRvGaqVhefgpX73YpblbXE21mWtxRJ6v5U93o0zNBGtALvWuM8xkFaE2e60DMLf9j1uR7ovRSMsm8PFGy7ashTGzHBUEGvkfgZfIOTlRD%2BDVP9C3FI%2B7moFjJVJtPvCXMhmjHlYb%2FhfIvhyUstoN7NBPQGnZ9XZrugVuU3FTpSHv6U%2Ffgx%2BTqX%2B6r83NPOe7e0vv%2FxhBTgNMyEhrm%2BWDDYEUKGwbvxwHy3QMwuvKUwgY6pgEjU71naLu6OqXTMYPmtkV5QgQG7R3UDhZIff6HBrhK2RENo4E%2BmAhEYUPxhUnyJUqZuXEalsVxs%2B709KhFsLJCkq0MYAOklc59Z%2BLnG4f8f51oAvz%2BoKSdZCpkp94g9eClL%2F8nU4L%2FvE4Yq4L56hAwZFGWkWWb4jfsJj2ECGlvhwcKz5r0FrqjFB5OTuOMID6RCgrzI7Q84RR2JDDKS6OU5xmZwxBC&X-Amz-Signature=c1865278334822fe343d2f6ce266ac073fc2bd6cbd940886460b2119bf16f614&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKV74USW%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T081031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIogp8vNY%2F1aoW9SfBJB8AJqPi4gUPZtXwp7lgrw4%2BvAiAJqXazYIkRNvQ4Bqj1HaBSWqYM9Us37lPv38zCX7LtwSqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtUkS2xvQVciArQrzKtwDPnsuGSAEyhc1C9fMAPd3Ee4vGjlMfaBDZKEvNQPt28t2barvlZ5RpPE%2BbnN0pOwGG%2FJM%2FeonAl573alwBVcEOLWZZuQrNXpz4RbQH491GjXCrHZz%2BWRVq2ojEI1aVBs6hTK0TZPplrSKRT4nkvco40rys00AJTEdmCUFPMOboHorDOzu1gCrI6OJ7kIfm4%2BOaYaiFO9e0KWFwl%2Fi3TzBCg54bwGWzllTFMpLeqwuXKIz0sWgJ22cAIiX7urUMXj2xk9ZRemc6J2i2zvO%2F1ceyJ6C%2B2bC%2Fv3B9wOTF8YWOlE9V9EqAXINd6wfQj78td%2BdWSIVWXEIYc%2FB1DsO2NPTW48VuxPEIV5%2BD0Ze2QzDqQ6LANjvEzu1wyV5F%2BD2udmfjRprcraIMNhpTMcb5nd%2FbQwjRvGaqVhefgpX73YpblbXE21mWtxRJ6v5U93o0zNBGtALvWuM8xkFaE2e60DMLf9j1uR7ovRSMsm8PFGy7ashTGzHBUEGvkfgZfIOTlRD%2BDVP9C3FI%2B7moFjJVJtPvCXMhmjHlYb%2FhfIvhyUstoN7NBPQGnZ9XZrugVuU3FTpSHv6U%2Ffgx%2BTqX%2B6r83NPOe7e0vv%2FxhBTgNMyEhrm%2BWDDYEUKGwbvxwHy3QMwuvKUwgY6pgEjU71naLu6OqXTMYPmtkV5QgQG7R3UDhZIff6HBrhK2RENo4E%2BmAhEYUPxhUnyJUqZuXEalsVxs%2B709KhFsLJCkq0MYAOklc59Z%2BLnG4f8f51oAvz%2BoKSdZCpkp94g9eClL%2F8nU4L%2FvE4Yq4L56hAwZFGWkWWb4jfsJj2ECGlvhwcKz5r0FrqjFB5OTuOMID6RCgrzI7Q84RR2JDDKS6OU5xmZwxBC&X-Amz-Signature=0b2cdb4e9f0e841b22d7aeb4c8ec9161d0c77924f6d2d78c03371089af92d2d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

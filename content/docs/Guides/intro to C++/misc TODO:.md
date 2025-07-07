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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMLOGHF2%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDg5rOgLG5lTUEMRNipGa3z5H7Sf8QuQudZ87HSuzxC9wIhAL2Kb1muj%2FhVo%2FQm%2BvjfRRwmtNqupbXuO%2FjWTTsvat0oKv8DCH4QABoMNjM3NDIzMTgzODA1IgyfYvjbu1pmFnm9nZMq3ANlkCTWGmeARO5nwd5%2BdPJzH6%2ForzNYMbd4cjm9udlZD7bgfrzf%2FqG6I7Kv%2F3NeI0XhBDPfHeEquJiMqA0sMpELoc31uxANUTUwLdp1UrNCLXt2jKnJAUwrN3qIPcDrviUfJQztvFE7Vc4HcecfsxU4JWzmgTQne5DB%2FVbcRQKGVFAATBHYL1I1j%2F2zMObQS7Xi2kXG7iURismoh3Jr1S3eOpaUIC%2FgCXhGrR2rHUNSgjLOZjRDNdnPvJRHEaQ%2F9rp3NDj6ZQaDcZx52coiWGKBo9oTqxx4wvf1RX5S0w4ZC1BxZem%2F6DqHXUU96khU1Cf9JaFRCNnq7y4zeGrdE3Y83Om5Pod9hVXYQHjZvYM%2Ftyj5oMTqwOGA9qxeF%2BqRk93Bz1nV8n4lfHxBFK2aAhIXrHPrP6%2F4qsg9Uv3umSwZcjOvJITzNTr3msOm8%2B9%2BOv8cFIf0QiWNdLqtxkMuKilk0LApwQaFN9zp4VDa8cKargLP%2BetowMD5vsriYCXAKYWDFV%2FkYmqHDAc2cy6NMB%2F9mjFwZrjgK5BI0TvW2VnZX8Oe9RGj0P1Xmyt0f7OIgZsBYItVS2mhzJLbIjbZ4iNT9yzyBmSUkRC0Kixq0dgSNfdIDLyDbtMoENZKjjDj6bDDBjqkAbIbeQouHLNX3XMVfrPWXxpxIPCEuCgipB1HBpuSw9C4QJq%2BuHNcHuTFNIee6mjhv4CzIvpCFK4j4NAUiVl%2FbQZWvdyw6HlaK6eteEymWd56FNio3D69%2B4nS5nNupsY4VIF6d4xxOC%2B4IXQrckjQ60P7ktZWZr%2BBq378CZGxSssOEvpNqrsG9OmCRYQLOEQHhA3PV29dNkpaCkBXNL7PyBFJi8%2FC&X-Amz-Signature=929422bbe0ba449916434f0d35c484f4e3e30927b0d974718b32ed31149e81bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMLOGHF2%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDg5rOgLG5lTUEMRNipGa3z5H7Sf8QuQudZ87HSuzxC9wIhAL2Kb1muj%2FhVo%2FQm%2BvjfRRwmtNqupbXuO%2FjWTTsvat0oKv8DCH4QABoMNjM3NDIzMTgzODA1IgyfYvjbu1pmFnm9nZMq3ANlkCTWGmeARO5nwd5%2BdPJzH6%2ForzNYMbd4cjm9udlZD7bgfrzf%2FqG6I7Kv%2F3NeI0XhBDPfHeEquJiMqA0sMpELoc31uxANUTUwLdp1UrNCLXt2jKnJAUwrN3qIPcDrviUfJQztvFE7Vc4HcecfsxU4JWzmgTQne5DB%2FVbcRQKGVFAATBHYL1I1j%2F2zMObQS7Xi2kXG7iURismoh3Jr1S3eOpaUIC%2FgCXhGrR2rHUNSgjLOZjRDNdnPvJRHEaQ%2F9rp3NDj6ZQaDcZx52coiWGKBo9oTqxx4wvf1RX5S0w4ZC1BxZem%2F6DqHXUU96khU1Cf9JaFRCNnq7y4zeGrdE3Y83Om5Pod9hVXYQHjZvYM%2Ftyj5oMTqwOGA9qxeF%2BqRk93Bz1nV8n4lfHxBFK2aAhIXrHPrP6%2F4qsg9Uv3umSwZcjOvJITzNTr3msOm8%2B9%2BOv8cFIf0QiWNdLqtxkMuKilk0LApwQaFN9zp4VDa8cKargLP%2BetowMD5vsriYCXAKYWDFV%2FkYmqHDAc2cy6NMB%2F9mjFwZrjgK5BI0TvW2VnZX8Oe9RGj0P1Xmyt0f7OIgZsBYItVS2mhzJLbIjbZ4iNT9yzyBmSUkRC0Kixq0dgSNfdIDLyDbtMoENZKjjDj6bDDBjqkAbIbeQouHLNX3XMVfrPWXxpxIPCEuCgipB1HBpuSw9C4QJq%2BuHNcHuTFNIee6mjhv4CzIvpCFK4j4NAUiVl%2FbQZWvdyw6HlaK6eteEymWd56FNio3D69%2B4nS5nNupsY4VIF6d4xxOC%2B4IXQrckjQ60P7ktZWZr%2BBq378CZGxSssOEvpNqrsG9OmCRYQLOEQHhA3PV29dNkpaCkBXNL7PyBFJi8%2FC&X-Amz-Signature=fa1271014675df47700a21ee67ad96ebd497a145256969fa07967e74e3371f5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

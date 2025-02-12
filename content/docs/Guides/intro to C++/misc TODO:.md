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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLOGA6SG%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T200833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBOgJweokR1Dii5YEpSK%2FU44z2NLyz5XK3Vn27W1FlYAIhAONK3Tzl3FQnpO%2FuICPVxWwT%2B76eGXwUdsiCy8B52DxzKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzw4r6fWQIRmwQTVdQq3AOWAUDzkXL%2BI3bUr85BrsYS1KIC3zbDpNppRORvLVwfNfd%2BPyGQF8rrtt0dmt%2FbJvitf%2FHnaQT03CecXX6RHTw3JeRxpkB8WzylSc%2Fox%2FgbtsP6YfRTD6T7SMEZJespApr%2Ffqtm5SLeVXFNAWkDGbV1on3Cc7k8hwyMC5V8%2BMTZgMv2VHLFrsnOBef9%2B%2BiRbwxtzMTOj47gYJZ59gz58lL6BG%2BM56agmXKEgy515fm55iO1FT1CeXZyvvVrFKge5kiYmn428C6JEVVvEsQSbHMpdmyw5C2JpxM3sNR1bd0K88R85UPE%2Botl0GtUbofQJiYsz4i75%2F8PTMimtwMD8Gdb%2B7kcFD9N2NwhJi8UwiW5e%2F1%2FWAzAIMkXjUnSDS23Un5W%2Fetb2Gj6130sOpI3gGu36eGyIstTMI5X8iUUrm6oBeH7I64re%2BnW58s17byIGFuNuigb6%2Ft7mBozqaDZcZFaanyoAmIbYhfjbG7pZMdjhYWaIfGAWJkazREw%2BmmH6irjudhnFc5XKAIrf2QSnN0DroifGkpzhd1IAxrWHsgTPMFr5LMQn%2Fm5HdnM9xKONK45tbKRu2Y34yphdq63ym3v1m5k4v3LUrOgVZMAHLcakGO3jDh2e8etrTxEsTDl87O9BjqkAVBI7X7Mzkd3SSii%2FLSNLDbQKNh0ywIZJlFTfEWeqe0Nax7Imm%2BsU%2BSCLiucP%2F%2FvxcSOFYRE%2F1R4xORLTH1K2VKrBImObKh%2FrmC5BAAGgba1VjS3NjxQZ80w5nq%2BcLTAyb7wRxsOQTPQkmqEik59ZZX3LGDpCUUsg8NP%2F12nXatzmGFfpmzD2y0gNehTUXPkAVGKLaA9DOdONyl4aR9RBUAjpzQw&X-Amz-Signature=e4dc5f1a42e4f70b0a42a5f5cdd174690abb1168e54f950664370f5c99d9a104&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLOGA6SG%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T200833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBOgJweokR1Dii5YEpSK%2FU44z2NLyz5XK3Vn27W1FlYAIhAONK3Tzl3FQnpO%2FuICPVxWwT%2B76eGXwUdsiCy8B52DxzKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzw4r6fWQIRmwQTVdQq3AOWAUDzkXL%2BI3bUr85BrsYS1KIC3zbDpNppRORvLVwfNfd%2BPyGQF8rrtt0dmt%2FbJvitf%2FHnaQT03CecXX6RHTw3JeRxpkB8WzylSc%2Fox%2FgbtsP6YfRTD6T7SMEZJespApr%2Ffqtm5SLeVXFNAWkDGbV1on3Cc7k8hwyMC5V8%2BMTZgMv2VHLFrsnOBef9%2B%2BiRbwxtzMTOj47gYJZ59gz58lL6BG%2BM56agmXKEgy515fm55iO1FT1CeXZyvvVrFKge5kiYmn428C6JEVVvEsQSbHMpdmyw5C2JpxM3sNR1bd0K88R85UPE%2Botl0GtUbofQJiYsz4i75%2F8PTMimtwMD8Gdb%2B7kcFD9N2NwhJi8UwiW5e%2F1%2FWAzAIMkXjUnSDS23Un5W%2Fetb2Gj6130sOpI3gGu36eGyIstTMI5X8iUUrm6oBeH7I64re%2BnW58s17byIGFuNuigb6%2Ft7mBozqaDZcZFaanyoAmIbYhfjbG7pZMdjhYWaIfGAWJkazREw%2BmmH6irjudhnFc5XKAIrf2QSnN0DroifGkpzhd1IAxrWHsgTPMFr5LMQn%2Fm5HdnM9xKONK45tbKRu2Y34yphdq63ym3v1m5k4v3LUrOgVZMAHLcakGO3jDh2e8etrTxEsTDl87O9BjqkAVBI7X7Mzkd3SSii%2FLSNLDbQKNh0ywIZJlFTfEWeqe0Nax7Imm%2BsU%2BSCLiucP%2F%2FvxcSOFYRE%2F1R4xORLTH1K2VKrBImObKh%2FrmC5BAAGgba1VjS3NjxQZ80w5nq%2BcLTAyb7wRxsOQTPQkmqEik59ZZX3LGDpCUUsg8NP%2F12nXatzmGFfpmzD2y0gNehTUXPkAVGKLaA9DOdONyl4aR9RBUAjpzQw&X-Amz-Signature=7743382dd5c69bee6222507ce5bac4a9951df1be6e47e573f5c8613c5f8674f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

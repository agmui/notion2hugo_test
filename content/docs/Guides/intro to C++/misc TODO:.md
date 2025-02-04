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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G55TO52%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T050800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIHTft%2BbktfPBiW%2Fe%2BD9dr8x0VHQW6L20HQ4CmwEpK%2B9GAiAf42q25fbGglEd0SR5A58Qxb7571kKJgOa0q9RYgMduSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMoEGMgffaIUsywzYIKtwDbDs80D%2BnAECAOs%2BKfsNMr6i6XZeTLByfAPH47Mn1v49pdqz6%2BInJ3hquKqziOuRuG%2BKl4jjR6j3PZi8s1ZIjcwdk24xlaZC3H3xVniz5n8gDpmG%2FT3DjtyvHR1Ckfl9sVxfVHiAtdnJZ1Qc%2FZiCffwC%2FmLVzawPV%2F%2B7yns38IsLavTpaCpOwRxa6PQPXH8GY94SQ21E4d3I8B46nosk5TdAIOtBVUBEdmVktle%2B0kkTfF26HViLgvayTZikFGP9lnKtL5J7j0mqD0bgNypRW592MykDs%2B0BZEJBNIGnxBTzsCz7sx4UtfoCgQf%2FO9d8pB5I%2BmftNN5HjkfuRoDj2EY2NYH4uD5jB6fRXo8gVvIPWuhAx5RmUrIjtJuqIiSXCwbKOXeoHX1EYHOoF%2FBgVXkGH4TUeiEr6JiZzsuFimHa4OtbRfzwxQtF3cDUbZwfnaDCV8JaUaLvjbqJG6bcTSGinP%2BZhPJoHieZwd4yDhd7PhSK4JaXBa4DmdQMM6rBeCJehTPMtLMMcJg3ZMcjDHRcyaoGc6jV7DXcgrDurlZylVlbkiSpNYJCgiPhZGJnmIXgBpUs3VAa674gMoesUWnhOLirxNmphSZDO0olX7Mo6gsaR46H1PsFzFHkwmcCGvQY6pgESGiI4a%2FsRwP4UrqHoOk7weW1z%2FJEAjMhg%2F7csmYRe6E1%2FQJhVKmokuRYzbXiV95dwuod%2FF99p62Et13gmGWv8uZxfAzSNG8Z1uIDB4U%2BQyn3vBag9xzZXvXcLkzwEjJnm3nBRgbgA0PrunklS7J%2BVCbihJxMzfn%2BmZLHj2iWrlRWfzvvHNrvtjr0aCEVniNyb8XsS%2FtOO6dbRUJchiUPq%2FbW60vTw&X-Amz-Signature=50165447e0efb178b6a866480bd080673316ce3ed4585dd34320e3fa627bd034&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G55TO52%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T050800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIHTft%2BbktfPBiW%2Fe%2BD9dr8x0VHQW6L20HQ4CmwEpK%2B9GAiAf42q25fbGglEd0SR5A58Qxb7571kKJgOa0q9RYgMduSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMoEGMgffaIUsywzYIKtwDbDs80D%2BnAECAOs%2BKfsNMr6i6XZeTLByfAPH47Mn1v49pdqz6%2BInJ3hquKqziOuRuG%2BKl4jjR6j3PZi8s1ZIjcwdk24xlaZC3H3xVniz5n8gDpmG%2FT3DjtyvHR1Ckfl9sVxfVHiAtdnJZ1Qc%2FZiCffwC%2FmLVzawPV%2F%2B7yns38IsLavTpaCpOwRxa6PQPXH8GY94SQ21E4d3I8B46nosk5TdAIOtBVUBEdmVktle%2B0kkTfF26HViLgvayTZikFGP9lnKtL5J7j0mqD0bgNypRW592MykDs%2B0BZEJBNIGnxBTzsCz7sx4UtfoCgQf%2FO9d8pB5I%2BmftNN5HjkfuRoDj2EY2NYH4uD5jB6fRXo8gVvIPWuhAx5RmUrIjtJuqIiSXCwbKOXeoHX1EYHOoF%2FBgVXkGH4TUeiEr6JiZzsuFimHa4OtbRfzwxQtF3cDUbZwfnaDCV8JaUaLvjbqJG6bcTSGinP%2BZhPJoHieZwd4yDhd7PhSK4JaXBa4DmdQMM6rBeCJehTPMtLMMcJg3ZMcjDHRcyaoGc6jV7DXcgrDurlZylVlbkiSpNYJCgiPhZGJnmIXgBpUs3VAa674gMoesUWnhOLirxNmphSZDO0olX7Mo6gsaR46H1PsFzFHkwmcCGvQY6pgESGiI4a%2FsRwP4UrqHoOk7weW1z%2FJEAjMhg%2F7csmYRe6E1%2FQJhVKmokuRYzbXiV95dwuod%2FF99p62Et13gmGWv8uZxfAzSNG8Z1uIDB4U%2BQyn3vBag9xzZXvXcLkzwEjJnm3nBRgbgA0PrunklS7J%2BVCbihJxMzfn%2BmZLHj2iWrlRWfzvvHNrvtjr0aCEVniNyb8XsS%2FtOO6dbRUJchiUPq%2FbW60vTw&X-Amz-Signature=27846ef29c4799f48ebc22d2a30d90490ae8a18a1c8e6ca044245d7ec8af67bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

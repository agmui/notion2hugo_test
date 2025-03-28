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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI3QE57R%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEz4vVyxjX3EvJaqGDs4COGMKyThgvuY8D3g8z7cr6CiAiA6VJSe4x8qdNBzH6r9FFic%2BxteyvXe5OFu1ZZXw8ZlsCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMeUDJ4lIFANNie9ccKtwDntAzU8obFWyzAy1X%2BjEL0fulXvBAuQ3%2FgroHzXxl2rwHN7xQWLH4nXKXXnYFOgYRQ1EZIyrfbOM5tgnbG5kES%2F5cCdEpswlHYEje76c4zl6AViyhDrqQPY2jtFomZAI5YCzY9nE1D5D0zQ5DHk52jGP%2B3NXnTPJhNuc%2BbAwTiQ7F4arbMt4X7bQ8rRYh5siP%2Ftf8slcaTFMIyF3nyTU9vYoKeXki1ASdO8sSvuzoayy%2BiqHYh9seB5L9sfNJhupSHFb0RkxhcIyNEsTbvrN3JVT0nj6pXzhf6ZVPa8AOGuE%2FkP9w2aPiJhEnW90DQik6uzT6XTuwRTw0Za3c1DLgGs7%2FgVC2yZHT85BAzoc2bsdZ7ednnp9Zmwgr7xyS1j2HuE7jV3eMsuprOPBq1r3DKop55jIu%2FXb2EAFIV928NgDjs2kmNjDYXhUuT3N9EpZHGUZduW8BJ%2BbDHT2vLoUVE22xRmAt9kkBR7xYbUuxtlSj8Q4Djmjqc32ojxxiImCahgeYuKvn4XhUDzBuILjsyO92Yvoq9e4nB3fT4eidiCOUieb6JjTbIgTMl%2Fwsc3Ex5CBP3H2rHZ7UE9ffCyicOZRtXhUgAQrDWw%2FnPAhYQbY%2BfiaAF9E%2B%2ForKFkgw1r%2BbvwY6pgHi3LByi789jARPNU7baLDRW87X7AZxrbOPdthkJqXROBct9cQ5z3Mb95fzmNXmvd%2FIrIKebqDxi%2FNbZPceUFq%2FbJEV2AFCVcGNlfurkImm34lm%2BcHiOjSNgNfF5VBGb8NDIwSsmkBwj02KPAtLXSuS4cb%2FvFqFtDsGRqaFGnPUft0%2BBb2XGk3V5NKWQSYfgDTKHY3AyQKNWBEzyNZiSWEHC8tNP%2BEG&X-Amz-Signature=c8e3f99a21141bab4709eba2ee6dee035e1c53e2f08f91b9eaaa3a5f34066a21&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI3QE57R%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEz4vVyxjX3EvJaqGDs4COGMKyThgvuY8D3g8z7cr6CiAiA6VJSe4x8qdNBzH6r9FFic%2BxteyvXe5OFu1ZZXw8ZlsCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMeUDJ4lIFANNie9ccKtwDntAzU8obFWyzAy1X%2BjEL0fulXvBAuQ3%2FgroHzXxl2rwHN7xQWLH4nXKXXnYFOgYRQ1EZIyrfbOM5tgnbG5kES%2F5cCdEpswlHYEje76c4zl6AViyhDrqQPY2jtFomZAI5YCzY9nE1D5D0zQ5DHk52jGP%2B3NXnTPJhNuc%2BbAwTiQ7F4arbMt4X7bQ8rRYh5siP%2Ftf8slcaTFMIyF3nyTU9vYoKeXki1ASdO8sSvuzoayy%2BiqHYh9seB5L9sfNJhupSHFb0RkxhcIyNEsTbvrN3JVT0nj6pXzhf6ZVPa8AOGuE%2FkP9w2aPiJhEnW90DQik6uzT6XTuwRTw0Za3c1DLgGs7%2FgVC2yZHT85BAzoc2bsdZ7ednnp9Zmwgr7xyS1j2HuE7jV3eMsuprOPBq1r3DKop55jIu%2FXb2EAFIV928NgDjs2kmNjDYXhUuT3N9EpZHGUZduW8BJ%2BbDHT2vLoUVE22xRmAt9kkBR7xYbUuxtlSj8Q4Djmjqc32ojxxiImCahgeYuKvn4XhUDzBuILjsyO92Yvoq9e4nB3fT4eidiCOUieb6JjTbIgTMl%2Fwsc3Ex5CBP3H2rHZ7UE9ffCyicOZRtXhUgAQrDWw%2FnPAhYQbY%2BfiaAF9E%2B%2ForKFkgw1r%2BbvwY6pgHi3LByi789jARPNU7baLDRW87X7AZxrbOPdthkJqXROBct9cQ5z3Mb95fzmNXmvd%2FIrIKebqDxi%2FNbZPceUFq%2FbJEV2AFCVcGNlfurkImm34lm%2BcHiOjSNgNfF5VBGb8NDIwSsmkBwj02KPAtLXSuS4cb%2FvFqFtDsGRqaFGnPUft0%2BBb2XGk3V5NKWQSYfgDTKHY3AyQKNWBEzyNZiSWEHC8tNP%2BEG&X-Amz-Signature=e60402d32482e7f5d5c306f8e338c2e6b390f5d04b1567701b8f2c645157dc48&X-Amz-SignedHeaders=host&x-id=GetObject)

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

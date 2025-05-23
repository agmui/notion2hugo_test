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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBCYRFNV%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T061251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCID9mRGSm%2Bmiv8g7QEVPo9Un9eU0jj4gCp2cpbINd2NJUAiAx%2Fxk3aaHWqrQw6i5mQSrB%2BZ8zl2rjYMqK8hpppFYdgSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJGFpsNh4jE7OjDJMKtwDzTq8jLppK9xKSqeDR8BVq2S03wPMPzZESrw4SfBvXOn3FB2nr%2F3WUocdCTRfG%2B8z9BeRnpDRAkabdPN1URjcyw1t%2FxTyxIPjZygsegJw%2F6prw3PqqHNGVyBumVoCaDaIyD%2FNlX%2BWRnGrOcdA7l1vTBvrTEX75o08qINv4yD%2FDQa9eWfK0A43ePvmSPGJe2kRs5ftr%2BriixYb64BPjyEMDsLEQC588qcXUQHjHLhVfB0C1kX1psyip7As%2F5ULwDRqbg3PM%2F96XVoq3FAZ16pKdJjXJ4aKyTa%2B79qI6XNu4UdW%2FGqTpD8hJTP2UpaLIPRd6qkdDVtscxxUpL%2BVqerqigh%2BQW2hpxrxf3ngKswq4oUOibmyb03ek6%2B8GOoW9xgQ5OOimYbPzf97dEaP3xLUGBjJLzQWgoSfL4k9Cmd7HffOBT4u2CsjlwCcpYgdgKRp6I%2Bg2sxpp2z%2BpgqZ32iq1n1SLpkXTadOWagrcf7IzVF1czIF6jmiHYztgLq3xg3qU77C3%2F%2Flz1yjFcBI5PopOn3EIapStS1UI72rreSj8xSzEZZF5pDqJJ%2BZNDsrQHJVt7lgdvcEQMFJDSAC1FAVI7uFuY%2F%2ByUzgTcma9ZWiC%2Fdl5%2FVbCSPm0LqGGAkwu8K%2FwQY6pgGdJVDFBve5DXPvc7ZIwfggyECv1Ao5OFUSxUZY0zki%2FWYzogGHfQc0knIVoG0o2Gajstl3JxOb5xLhL2T9c4I6GkN7y6W%2BX3TSgojv9Z7ldOFtL91gG2TBZqRcfiM7EfpInD%2B0%2Fip4wqQHtkrATwqNTrv9m8Adx2d%2F1dEP%2FVlYmbhfOzxiilWnYXuAcIgiRyxewmgt2C%2Fhfe3MtXP9HMiNTzuN8%2Fr9&X-Amz-Signature=dce5d4cdba6bf2a7267253c4647940470f029d41a06db20fafbcc61a6baa4abc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBCYRFNV%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T061250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCID9mRGSm%2Bmiv8g7QEVPo9Un9eU0jj4gCp2cpbINd2NJUAiAx%2Fxk3aaHWqrQw6i5mQSrB%2BZ8zl2rjYMqK8hpppFYdgSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJGFpsNh4jE7OjDJMKtwDzTq8jLppK9xKSqeDR8BVq2S03wPMPzZESrw4SfBvXOn3FB2nr%2F3WUocdCTRfG%2B8z9BeRnpDRAkabdPN1URjcyw1t%2FxTyxIPjZygsegJw%2F6prw3PqqHNGVyBumVoCaDaIyD%2FNlX%2BWRnGrOcdA7l1vTBvrTEX75o08qINv4yD%2FDQa9eWfK0A43ePvmSPGJe2kRs5ftr%2BriixYb64BPjyEMDsLEQC588qcXUQHjHLhVfB0C1kX1psyip7As%2F5ULwDRqbg3PM%2F96XVoq3FAZ16pKdJjXJ4aKyTa%2B79qI6XNu4UdW%2FGqTpD8hJTP2UpaLIPRd6qkdDVtscxxUpL%2BVqerqigh%2BQW2hpxrxf3ngKswq4oUOibmyb03ek6%2B8GOoW9xgQ5OOimYbPzf97dEaP3xLUGBjJLzQWgoSfL4k9Cmd7HffOBT4u2CsjlwCcpYgdgKRp6I%2Bg2sxpp2z%2BpgqZ32iq1n1SLpkXTadOWagrcf7IzVF1czIF6jmiHYztgLq3xg3qU77C3%2F%2Flz1yjFcBI5PopOn3EIapStS1UI72rreSj8xSzEZZF5pDqJJ%2BZNDsrQHJVt7lgdvcEQMFJDSAC1FAVI7uFuY%2F%2ByUzgTcma9ZWiC%2Fdl5%2FVbCSPm0LqGGAkwu8K%2FwQY6pgGdJVDFBve5DXPvc7ZIwfggyECv1Ao5OFUSxUZY0zki%2FWYzogGHfQc0knIVoG0o2Gajstl3JxOb5xLhL2T9c4I6GkN7y6W%2BX3TSgojv9Z7ldOFtL91gG2TBZqRcfiM7EfpInD%2B0%2Fip4wqQHtkrATwqNTrv9m8Adx2d%2F1dEP%2FVlYmbhfOzxiilWnYXuAcIgiRyxewmgt2C%2Fhfe3MtXP9HMiNTzuN8%2Fr9&X-Amz-Signature=ea98a451e321ea2514fbfe76c21c2ecec47c9149fc2ae9cfd12ea2a9c7e6647a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

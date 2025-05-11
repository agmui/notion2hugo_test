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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653MLIB6Q%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T081058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIFGCW6fcDpqIKbPBPk6EGuY8KRaXcSyjv35gX91qmQ9ZAiA%2BETYAWFQJRTW9qeA3WX3o5kh0w1Y8ZgYVMBFsJOl82iqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjF7W43cGdI29ifndKtwD40jUUHE9z0Ha7aXe1kVQCN6JgFJ%2Bm0T4PhhmqglGKxlnFlqFYDIujsfOuzHZEwLn4yWYVqd%2BFlRYnzFZk3a88ob7Fjj21s40tY9N8fuiyvaiEER%2BSKd9uneSd7YZ48KaM5Q4xdC3Pevq8Cz%2FOJZWX3aHFB0MXTpWCfGq2ReYQZmtyP4OFgrHoFTiA0DgQBwk2aYeuqL%2FmuggJPD6CErDGQ85p5SVGdfMOTjKY5iDmqI8b20JRs4HqHanNncRu2xf8vFw%2FHSN%2F0knKJS%2FkjicoNWgBvMLECU6BOh05vy90%2Fs9saO3GPmcNjvLk1auKdKdyx5hgwvfcPl7ycvxWMAjYYfJ0rCHv6HR7AEJF6%2B4FZIFCIjtbeVAYl16gFORM4UjaeHrSPBL7HQyH3oSyVpNnM7013rOWhQdqsuMlqHftecX7rahGdn3F0zP29yuZ6HA2dZRxGYcASEFrJ548MF0dDxvifnJG1Y0qH1LCuInmeU0r6B1%2FL3E43sRq2radJVRZxkmCN37WiP31TDa87lttODx3RxbL%2F5jjsIMWJL%2BTjOMsauCmsAl5w0lznRocGh1%2BRZt9bd0rbVo9g6Ep%2BGFnzIRAcHOECJVz%2Bcrspq3JGk8t9Dfdm7rxADoOVgwvt6AwQY6pgEnLUX%2BmP0UeHqZe7wNXBkBpn5PYW3CzFr89SIXe0dSmOW2SN859%2B1hJ602cergfWeG2JZUT6e1BKe39VM1UojfER9Cgspieiy31Dv%2BVa3OrmLszwCwwPcJrjMjvN71ExA8U0%2BhMVyOXaSnvLltGjLEFrs27kKOvFORVt3I5CT1swPbeDTvt0Yg7vX1Xp%2BNavmckJFvgwpZqBv968ZVbwfuTkeYvqZ6&X-Amz-Signature=41f2ee5dbc9c020ffd2f96f1dba5633cae2e6aeeb21abb913c5dfb1e1d34d1af&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653MLIB6Q%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T081058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIFGCW6fcDpqIKbPBPk6EGuY8KRaXcSyjv35gX91qmQ9ZAiA%2BETYAWFQJRTW9qeA3WX3o5kh0w1Y8ZgYVMBFsJOl82iqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjF7W43cGdI29ifndKtwD40jUUHE9z0Ha7aXe1kVQCN6JgFJ%2Bm0T4PhhmqglGKxlnFlqFYDIujsfOuzHZEwLn4yWYVqd%2BFlRYnzFZk3a88ob7Fjj21s40tY9N8fuiyvaiEER%2BSKd9uneSd7YZ48KaM5Q4xdC3Pevq8Cz%2FOJZWX3aHFB0MXTpWCfGq2ReYQZmtyP4OFgrHoFTiA0DgQBwk2aYeuqL%2FmuggJPD6CErDGQ85p5SVGdfMOTjKY5iDmqI8b20JRs4HqHanNncRu2xf8vFw%2FHSN%2F0knKJS%2FkjicoNWgBvMLECU6BOh05vy90%2Fs9saO3GPmcNjvLk1auKdKdyx5hgwvfcPl7ycvxWMAjYYfJ0rCHv6HR7AEJF6%2B4FZIFCIjtbeVAYl16gFORM4UjaeHrSPBL7HQyH3oSyVpNnM7013rOWhQdqsuMlqHftecX7rahGdn3F0zP29yuZ6HA2dZRxGYcASEFrJ548MF0dDxvifnJG1Y0qH1LCuInmeU0r6B1%2FL3E43sRq2radJVRZxkmCN37WiP31TDa87lttODx3RxbL%2F5jjsIMWJL%2BTjOMsauCmsAl5w0lznRocGh1%2BRZt9bd0rbVo9g6Ep%2BGFnzIRAcHOECJVz%2Bcrspq3JGk8t9Dfdm7rxADoOVgwvt6AwQY6pgEnLUX%2BmP0UeHqZe7wNXBkBpn5PYW3CzFr89SIXe0dSmOW2SN859%2B1hJ602cergfWeG2JZUT6e1BKe39VM1UojfER9Cgspieiy31Dv%2BVa3OrmLszwCwwPcJrjMjvN71ExA8U0%2BhMVyOXaSnvLltGjLEFrs27kKOvFORVt3I5CT1swPbeDTvt0Yg7vX1Xp%2BNavmckJFvgwpZqBv968ZVbwfuTkeYvqZ6&X-Amz-Signature=a3874472140474a444340361e55c8a5a3b0d96083799447f36e6a11e889d8878&X-Amz-SignedHeaders=host&x-id=GetObject)

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

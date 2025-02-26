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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVETLFX2%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T021219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIDv9KDGm0%2FnW8o0MzjpG8IJNboEGndhikbdmdBhcO1RXAiBsoIw7iNk1CcXTBTiZXdDR7qYrikzgrV%2B2w0UJa4Tutyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMDWsCnpdcZ3rC0EEgKtwDo26XIdQtZ9zNv2RmXHanWHgVdqhTWBv6D4cC9d1vscc13k%2BFbiKnQuzii%2FpvxvQfZOEpw6S1DI79shhG2cJYXr7UIGq%2FY%2FnWZFiOKoQmtqxxLvUoqGHV9eVTv1MwWXfz%2B9HVAeI4QDeRA5Q7W54RAc362zakXQzD6B7OSGVQqqbbAavpaoyL9tdst1UoJ5fTsoUKbMoQeSY3acmpVXN63lHSdfcjA%2B2K0%2By9A5jKwhoEYakH1tBpz8P%2BKJe5uvFCAyM8LHPamOYWQHH6nbloqtSYO5bKGw3YrH4XWM08nXm34w25gjgAj2Q9B1burqfzJBquOy1t1ZVUAuHA3GthUgTv0MWAhjgX1mUrCPp9XFc10XDMkXN%2FYV1q9JyQ9FVV2fVtiPTTOAE6NNTEAKw3JViwVzBt0M%2BnvYfOGoeP6OLYxfvHKcWrVkJFCt8q69qsNEKFEyUEFrB98FS5WBluF7UWO4J7STD69Dy5m4rTLTEDPO1hZF37eUVix32jvDpAUgZhygGK%2BdVFa%2B2min0dtv7ktRAXtxNH8EH7m5EAVXPjjnEkC04wR8y6j72SqDWaRyFewpEoZw5S8vc17HqI4fTAVl9dZkSgxb2Xne0s7F3BWP7rjLQXfIIjxU4w%2Fbz5vQY6pgH9J5pup14xNrjVaLKmYzBZym3C8Q0PpQK%2BxgRVaO%2BrqlH1erTrLnONa%2FczPvAumQDKMSgXzosqENU0yVelqFeZETvByJa7eMjlIIsMiB9njmOSAf7aWS6%2B33vVVTNOXjq3UUk1l5g4AqKpchtR3F72rK8OzFfUOkQIdjor4GY0cxRmhB%2BtBCJKJqmSY7DxbNwtdSbXbStdjV%2FXuxrHsU7%2Ba753TivT&X-Amz-Signature=98e9bba32b888695fa72235a8c9231334036afd048158e17f32db2edc59e2f7f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVETLFX2%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T021219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIDv9KDGm0%2FnW8o0MzjpG8IJNboEGndhikbdmdBhcO1RXAiBsoIw7iNk1CcXTBTiZXdDR7qYrikzgrV%2B2w0UJa4Tutyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMDWsCnpdcZ3rC0EEgKtwDo26XIdQtZ9zNv2RmXHanWHgVdqhTWBv6D4cC9d1vscc13k%2BFbiKnQuzii%2FpvxvQfZOEpw6S1DI79shhG2cJYXr7UIGq%2FY%2FnWZFiOKoQmtqxxLvUoqGHV9eVTv1MwWXfz%2B9HVAeI4QDeRA5Q7W54RAc362zakXQzD6B7OSGVQqqbbAavpaoyL9tdst1UoJ5fTsoUKbMoQeSY3acmpVXN63lHSdfcjA%2B2K0%2By9A5jKwhoEYakH1tBpz8P%2BKJe5uvFCAyM8LHPamOYWQHH6nbloqtSYO5bKGw3YrH4XWM08nXm34w25gjgAj2Q9B1burqfzJBquOy1t1ZVUAuHA3GthUgTv0MWAhjgX1mUrCPp9XFc10XDMkXN%2FYV1q9JyQ9FVV2fVtiPTTOAE6NNTEAKw3JViwVzBt0M%2BnvYfOGoeP6OLYxfvHKcWrVkJFCt8q69qsNEKFEyUEFrB98FS5WBluF7UWO4J7STD69Dy5m4rTLTEDPO1hZF37eUVix32jvDpAUgZhygGK%2BdVFa%2B2min0dtv7ktRAXtxNH8EH7m5EAVXPjjnEkC04wR8y6j72SqDWaRyFewpEoZw5S8vc17HqI4fTAVl9dZkSgxb2Xne0s7F3BWP7rjLQXfIIjxU4w%2Fbz5vQY6pgH9J5pup14xNrjVaLKmYzBZym3C8Q0PpQK%2BxgRVaO%2BrqlH1erTrLnONa%2FczPvAumQDKMSgXzosqENU0yVelqFeZETvByJa7eMjlIIsMiB9njmOSAf7aWS6%2B33vVVTNOXjq3UUk1l5g4AqKpchtR3F72rK8OzFfUOkQIdjor4GY0cxRmhB%2BtBCJKJqmSY7DxbNwtdSbXbStdjV%2FXuxrHsU7%2Ba753TivT&X-Amz-Signature=89eb461df517b07650147aa0925f2b132428658b6a680f26e10ce475ad0522a8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

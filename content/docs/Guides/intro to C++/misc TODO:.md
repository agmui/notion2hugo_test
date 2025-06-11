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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4XDZDNL%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T034106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGejpIHxFK1XMCAaLtTPVGE1oMJI2myyVmtANJHuiHfoAiAtendb3ziEcmdiP%2FI0oIlvUiDb1NBVbO29LnvKZew4rCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp2U97tz9ub6hdUKUKtwDeUN95smQtqOVrxw7jnfY7CBwTFgDnAndayEcvA9eEvCKjqCa9iLdCjX2UdBvKalw717nmvTIdke0BunIBN9mJXcxvBslnnx8eup7H%2FY%2BXZHExa5vFGMKg%2BAdWece7mqVxpWqZkOF0PO9zphFeMSKBESHSI%2BxfXk%2BhnUfp%2FOBeEx9obfRnIKMH942Ril2MVMy9NYiKEoSXQD9M%2FHbx9ZMvXy5anTK846z1PFcXB9GMFu%2BIH%2BO5E1UzSSBoxAhtjDTcoQB78X4%2FQsN2Q9ZHB0tK6PZcQHodA5PRBvq3nDK9diJxV0fS1YKFVJqREV4EYiVOo4%2FmseUvCRTK%2BM2hdKzna6musWaQnvRIhOKkTYu2p6xyF%2FRW2TWjPVlaFPhAquzXWBTXjxIpjeDOU8foeULirMWLPgHSHz9ODN3%2FET1tgWIEu%2B0p9N5%2BDJL7H31VJ6Q%2BriCahZ%2FPkX0DoVLLzMieQ7aL3l5u5qMB8wg9QQUFErS2gQfeSZZIu3bF7KMvLnP2ZBD%2BeHsgrd9PfjGjwZ3i4JB9bG1iNLks7pbq0oavwuM4aSA4Q3e43h6JQ7dUMGCL8psCbgdkFP3idoQsdq9dRDvDJBtRyoKNOomJwgvHG1L%2B91EzroeOLCVJDwwoN%2BjwgY6pgEHHFgfzyEsSmfrxfW%2BOANsSXy%2FKo52sLipJwzi3lm5ywBM6I1DsOMkmphqSVOvlbxHEKmNDMyAVSzZjjinwZISAZNb1L7hSQJ05aALYQeXZp8Tbue%2FXHep17NYAgPY6f7SGljS7B7BQMASp9%2BiqQpOONa4qDpQjQvtFcb01vfTJwEkZSBqAXBWAV7uoddoHXjUfJ%2Bo2AChzL0wsrTpvKxeirRaNMYv&X-Amz-Signature=e60eb4e8a5651aab24e21810153dde4a2a0afffdb901583c6063862df9054d7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4XDZDNL%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T034106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGejpIHxFK1XMCAaLtTPVGE1oMJI2myyVmtANJHuiHfoAiAtendb3ziEcmdiP%2FI0oIlvUiDb1NBVbO29LnvKZew4rCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp2U97tz9ub6hdUKUKtwDeUN95smQtqOVrxw7jnfY7CBwTFgDnAndayEcvA9eEvCKjqCa9iLdCjX2UdBvKalw717nmvTIdke0BunIBN9mJXcxvBslnnx8eup7H%2FY%2BXZHExa5vFGMKg%2BAdWece7mqVxpWqZkOF0PO9zphFeMSKBESHSI%2BxfXk%2BhnUfp%2FOBeEx9obfRnIKMH942Ril2MVMy9NYiKEoSXQD9M%2FHbx9ZMvXy5anTK846z1PFcXB9GMFu%2BIH%2BO5E1UzSSBoxAhtjDTcoQB78X4%2FQsN2Q9ZHB0tK6PZcQHodA5PRBvq3nDK9diJxV0fS1YKFVJqREV4EYiVOo4%2FmseUvCRTK%2BM2hdKzna6musWaQnvRIhOKkTYu2p6xyF%2FRW2TWjPVlaFPhAquzXWBTXjxIpjeDOU8foeULirMWLPgHSHz9ODN3%2FET1tgWIEu%2B0p9N5%2BDJL7H31VJ6Q%2BriCahZ%2FPkX0DoVLLzMieQ7aL3l5u5qMB8wg9QQUFErS2gQfeSZZIu3bF7KMvLnP2ZBD%2BeHsgrd9PfjGjwZ3i4JB9bG1iNLks7pbq0oavwuM4aSA4Q3e43h6JQ7dUMGCL8psCbgdkFP3idoQsdq9dRDvDJBtRyoKNOomJwgvHG1L%2B91EzroeOLCVJDwwoN%2BjwgY6pgEHHFgfzyEsSmfrxfW%2BOANsSXy%2FKo52sLipJwzi3lm5ywBM6I1DsOMkmphqSVOvlbxHEKmNDMyAVSzZjjinwZISAZNb1L7hSQJ05aALYQeXZp8Tbue%2FXHep17NYAgPY6f7SGljS7B7BQMASp9%2BiqQpOONa4qDpQjQvtFcb01vfTJwEkZSBqAXBWAV7uoddoHXjUfJ%2Bo2AChzL0wsrTpvKxeirRaNMYv&X-Amz-Signature=25b8f6ca003b5776682ecc74c2b970cf1e8ab4fc8fc389cba790ea9efc9b8a68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

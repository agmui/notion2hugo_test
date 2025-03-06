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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVJOQ2B2%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T031847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6M9rXZwSzIfJwSDMO1%2B2wNk7hoRJzqd%2Fjb%2FX4ZptJKAIhAPQOTYFBcXw4vX9bX48qkxqQLjFzGTGkHJgXTNsShphKKv8DCCQQABoMNjM3NDIzMTgzODA1IgxbdSkfTkXwL5633Bsq3AO%2FYDMJz1eWhqkRujQbvASWvV25bKNI9kjT1a5MHrCbStkzrBX3JO69GpcVJNSoCEDYrbRy3WUT8cMx63xRdm%2FZ0MWt4lqUulQMiF%2F%2FrvPwArKSABWKmuIvTo1g6sGjMvnHwZDdkVakPZIU5exS3CrlpRzEAELINmOP49frCBiw4iXlWWeYD1hoiX4Eg6xwi4%2FP20KyFpvK%2BOoI8t8PcL9Y6ZdhcRcR8mSSo3iqPIRZyY6GEreWlF4DrWGOVMF%2BKPj0JFDRcpBKZMRnBKjPLO%2BpYfkISCLWQJs2kBYvlxk7iRWN%2BDdhgRGRuoy8pzn2B5PRQr%2BERec6XOnCSCmlmCICdTeXiAEW0WOegfxCIqPpEQTgK9YANMFLZ1GJFv1cF6kdFdKQ3GrwGn%2BW%2FVHy1%2FZgZmg10eds2GadGQ4SfsauKN3hlg1gL0ruKp4sW%2FS1mMl8AIwutdxbM%2Bw4LNR0z6yX82rWDng66fnAqcyCsn9v2z1vTTOU5AGG4BUP6EnDlKZnyzPRE4t6vwNLUj3cl2nFh9%2BLTWXUON7N6nbcx2F87eT8LaxvBiyEDkFhM6qUvh72xq4q2RYfAnvzAs%2BZgYnwj9Oll%2BAr%2BEcADLlzqZzzG9ZrkFD9al1qoNwdVjColaS%2BBjqkAeHvan6N0c6NUvX3qGtFtTOyszRw94OrEip2GeVO8Pgl0uBjrLWfg3YKqu4PVUSZ%2B5E7E9rKW8rTXtNjVk5xsjuNtzQOSM%2Fmh1v14TuzF9my99mqXGTyRypvIdD%2BDW4T9a%2F7c5clJGy0Wxl%2FguBM%2BamH%2BMVkr9NgRinS%2BspxxH5SR8cN4g2dfukOP4fTUN9EVON8aCKE7HEEWQbpesWJJQKCmqDI&X-Amz-Signature=0694dda350d710bf1117278561e4fb609d05df9eafedaeb87af9aefc0c21ff7f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVJOQ2B2%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T031847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6M9rXZwSzIfJwSDMO1%2B2wNk7hoRJzqd%2Fjb%2FX4ZptJKAIhAPQOTYFBcXw4vX9bX48qkxqQLjFzGTGkHJgXTNsShphKKv8DCCQQABoMNjM3NDIzMTgzODA1IgxbdSkfTkXwL5633Bsq3AO%2FYDMJz1eWhqkRujQbvASWvV25bKNI9kjT1a5MHrCbStkzrBX3JO69GpcVJNSoCEDYrbRy3WUT8cMx63xRdm%2FZ0MWt4lqUulQMiF%2F%2FrvPwArKSABWKmuIvTo1g6sGjMvnHwZDdkVakPZIU5exS3CrlpRzEAELINmOP49frCBiw4iXlWWeYD1hoiX4Eg6xwi4%2FP20KyFpvK%2BOoI8t8PcL9Y6ZdhcRcR8mSSo3iqPIRZyY6GEreWlF4DrWGOVMF%2BKPj0JFDRcpBKZMRnBKjPLO%2BpYfkISCLWQJs2kBYvlxk7iRWN%2BDdhgRGRuoy8pzn2B5PRQr%2BERec6XOnCSCmlmCICdTeXiAEW0WOegfxCIqPpEQTgK9YANMFLZ1GJFv1cF6kdFdKQ3GrwGn%2BW%2FVHy1%2FZgZmg10eds2GadGQ4SfsauKN3hlg1gL0ruKp4sW%2FS1mMl8AIwutdxbM%2Bw4LNR0z6yX82rWDng66fnAqcyCsn9v2z1vTTOU5AGG4BUP6EnDlKZnyzPRE4t6vwNLUj3cl2nFh9%2BLTWXUON7N6nbcx2F87eT8LaxvBiyEDkFhM6qUvh72xq4q2RYfAnvzAs%2BZgYnwj9Oll%2BAr%2BEcADLlzqZzzG9ZrkFD9al1qoNwdVjColaS%2BBjqkAeHvan6N0c6NUvX3qGtFtTOyszRw94OrEip2GeVO8Pgl0uBjrLWfg3YKqu4PVUSZ%2B5E7E9rKW8rTXtNjVk5xsjuNtzQOSM%2Fmh1v14TuzF9my99mqXGTyRypvIdD%2BDW4T9a%2F7c5clJGy0Wxl%2FguBM%2BamH%2BMVkr9NgRinS%2BspxxH5SR8cN4g2dfukOP4fTUN9EVON8aCKE7HEEWQbpesWJJQKCmqDI&X-Amz-Signature=831dea13f95cdb191bca8caf5791295756f233735b2c7a0bc3483d5447ef9193&X-Amz-SignedHeaders=host&x-id=GetObject)

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

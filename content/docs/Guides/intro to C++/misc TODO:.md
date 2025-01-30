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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOS6OSC6%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T030852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BLKMF7QMgl%2B3TlHErujnOkqnQUqoNPQBmIaOQUoTTGgIhAKoOl6N9U2kr5EAQgWF%2BuD41y62XZC%2FaLZfAGHt7j8IfKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygX3DGpN19g4OSRxIq3ANHJPjC0VUkyVqwo3W49cdUpDg57O69kTskYnRglZFXkR7Axc65%2FUZDD2FwTxHFypL4mg0HNfbNQ1PTixgaSNyz%2FGs%2FO5G1ByganZDo9jhGW%2Bprc1jFT%2B2G%2Bywl2wnLbBo5RW6xj1msja1dL%2BkMI%2B%2BBXK7iHGOi5SC%2B2TQFIV44w8h1n5C6YmDpdxDPjT4dVrTgof9wYUC5PnfvPJRQTfrQs2e8HaEzRO4CD26L2LbBfNQZCEvvfT3hVmrbvLlkIEJHxt9ENM3kGrTxoRE2HYOFOQZ12fSGZ4xGT56s3P1WUq887fhkLJjwCAYvbW%2BVLrq0aag9k4WXyrCnUtHx0VHy%2BXjIxIO2%2Bz%2BDVQqk5nz3Ks8b2R4TizamZUSxlvsaGYeNABfajjep7GpkU5tjxVQlrd8sb5FSzvcbAef0aXLfKGBVaPHN3D1s8whR6sQAjzEHCINk23wwB3WPyImpRFeIF22spNdXojuo64hB5yPg7OkBngXfNm5jNAhwB3y5trcfmB20k48c8p%2BoNGrLfegH7qJYd%2FiJHbFpPk5HSmFgVrYKafnshiaGcS28d7mVV3GFSVyYcdWZAcGmYht2yHwzyPLLJFRFityfqDHEVUKwOrq6p%2BToNZYdcLdoYzDTz%2Bu8BjqkAQrQ2KxTiAxD6jbAljCDwqvHPcYbTiwqaNO%2BMAV6PGehQ%2BsLLL3D%2Fl1TJ%2B%2FVXvYdRJjxgOnjw58Xu%2FJOBjickNA4iVdR1t6Fiot89VxCSHoCha220QnUVkR3%2BANlXuJPN18AI1YkFZ0jZO%2FSFaUHtLCXmXpYRMySuKWwyudzTrawMS4rKGxwh8UJfW7dQ%2FGEdaFP8ywczzSMJRUyG7%2F5Aj8t1c9c&X-Amz-Signature=013db9c1df23c7a12de5612d1252263bb0ebf7594d5a3e7a06f067214b7f975c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOS6OSC6%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T030852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BLKMF7QMgl%2B3TlHErujnOkqnQUqoNPQBmIaOQUoTTGgIhAKoOl6N9U2kr5EAQgWF%2BuD41y62XZC%2FaLZfAGHt7j8IfKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygX3DGpN19g4OSRxIq3ANHJPjC0VUkyVqwo3W49cdUpDg57O69kTskYnRglZFXkR7Axc65%2FUZDD2FwTxHFypL4mg0HNfbNQ1PTixgaSNyz%2FGs%2FO5G1ByganZDo9jhGW%2Bprc1jFT%2B2G%2Bywl2wnLbBo5RW6xj1msja1dL%2BkMI%2B%2BBXK7iHGOi5SC%2B2TQFIV44w8h1n5C6YmDpdxDPjT4dVrTgof9wYUC5PnfvPJRQTfrQs2e8HaEzRO4CD26L2LbBfNQZCEvvfT3hVmrbvLlkIEJHxt9ENM3kGrTxoRE2HYOFOQZ12fSGZ4xGT56s3P1WUq887fhkLJjwCAYvbW%2BVLrq0aag9k4WXyrCnUtHx0VHy%2BXjIxIO2%2Bz%2BDVQqk5nz3Ks8b2R4TizamZUSxlvsaGYeNABfajjep7GpkU5tjxVQlrd8sb5FSzvcbAef0aXLfKGBVaPHN3D1s8whR6sQAjzEHCINk23wwB3WPyImpRFeIF22spNdXojuo64hB5yPg7OkBngXfNm5jNAhwB3y5trcfmB20k48c8p%2BoNGrLfegH7qJYd%2FiJHbFpPk5HSmFgVrYKafnshiaGcS28d7mVV3GFSVyYcdWZAcGmYht2yHwzyPLLJFRFityfqDHEVUKwOrq6p%2BToNZYdcLdoYzDTz%2Bu8BjqkAQrQ2KxTiAxD6jbAljCDwqvHPcYbTiwqaNO%2BMAV6PGehQ%2BsLLL3D%2Fl1TJ%2B%2FVXvYdRJjxgOnjw58Xu%2FJOBjickNA4iVdR1t6Fiot89VxCSHoCha220QnUVkR3%2BANlXuJPN18AI1YkFZ0jZO%2FSFaUHtLCXmXpYRMySuKWwyudzTrawMS4rKGxwh8UJfW7dQ%2FGEdaFP8ywczzSMJRUyG7%2F5Aj8t1c9c&X-Amz-Signature=5bcd08dbee2c7c388b58a599b0e5cebcfada7981d641fac36b48a0a91d63747a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

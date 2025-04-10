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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URXVT7HQ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIDbO7Z81MEsSqUWmzATvPR8t1y4Nd5Q8Vye3X3HuejA4AiEAnTbVowxbwHD%2BeaKjX3%2BsUYpFporDoVsLeWhkBScC1IcqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKp8E1oRhzIVstbUrircA1A%2FIMfxvhbr0sZNSqCa%2F7sgHTf%2Bi7kFwEphfk34kg05YhZU149aUsXBL14f6xGjgIblbfe0F0MugOWS4gwEOf8ksLm159MgfVuQEmp6jGW7Y5pjG%2BAZmUpWNqRnfwv3A5Kr1hNZGLXSCKIKLWUl5xKruEQ%2FcLxVqIy0c8W%2BOEIxaA4U3cQ%2B4UW8OVgHOaUr06HKCCbj0zQKUA8q0lFEG1vaGsy%2FqcWc2hSyTU0XpEdGjQzNe3cvv71FzKq383GwEM%2FJPwFzKpuJFjD1HUHPjiFXyc39t67ulrQpvCHzEar5UH8W3IiBvA6fs5LZAjJt4SDHx0OTMkB7Z5ZAcf8kB4mzbQGYiK98hnNg8nAEi2QIj%2FW44pdX9p8fRLu%2B9Crc7zgLWKf05QpgsKh8wUQvrMTZiJdqpqty0CKwhUEsLlsK2sgFRU8UpMfQqd7q0omIJFKn4eD%2B6p7cA35TwxTL7%2BurJJl%2BIh6LmGX7jNvxiFwHanXtLgUXe7YgijGPInK2sChfNKGrM5XBpVGrlJHmICLhDaRG0dIgub5JQ4VrRiz0SGdBijUuUZCo9jIPQaNj6VLYfGAGiTsRyLODboCrcnjTnH2df0FmCisRwhFdd2uNpKKbmcxIQEbRg%2FWZMLnu378GOqUB3q6P6C22qihedYJVxE4qSBMDN3O3ca9eaJyXdUNKAUfnbITJ6FD1Lp8zp2OxJd9Tdg2wmJP1iL7JbKXQU19CWcq%2BfNC1ZoLBOIDyFatTbRAeZbn4DH7sqKMAyIrWy%2FwMASgnJ%2B93Uh3oW1BS%2ByQo3tjNW42nP5aJfj3kfR538cCLUKq58e8HgS%2BkiCwHeHCziS%2Fk6Xw9O1kZ4TlpRrDgZMxgVJ%2FV&X-Amz-Signature=3ca11e6660bc23c8aa8aa3bb940b8cf600b36871452dca889cfdfa89620b6695&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URXVT7HQ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIDbO7Z81MEsSqUWmzATvPR8t1y4Nd5Q8Vye3X3HuejA4AiEAnTbVowxbwHD%2BeaKjX3%2BsUYpFporDoVsLeWhkBScC1IcqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKp8E1oRhzIVstbUrircA1A%2FIMfxvhbr0sZNSqCa%2F7sgHTf%2Bi7kFwEphfk34kg05YhZU149aUsXBL14f6xGjgIblbfe0F0MugOWS4gwEOf8ksLm159MgfVuQEmp6jGW7Y5pjG%2BAZmUpWNqRnfwv3A5Kr1hNZGLXSCKIKLWUl5xKruEQ%2FcLxVqIy0c8W%2BOEIxaA4U3cQ%2B4UW8OVgHOaUr06HKCCbj0zQKUA8q0lFEG1vaGsy%2FqcWc2hSyTU0XpEdGjQzNe3cvv71FzKq383GwEM%2FJPwFzKpuJFjD1HUHPjiFXyc39t67ulrQpvCHzEar5UH8W3IiBvA6fs5LZAjJt4SDHx0OTMkB7Z5ZAcf8kB4mzbQGYiK98hnNg8nAEi2QIj%2FW44pdX9p8fRLu%2B9Crc7zgLWKf05QpgsKh8wUQvrMTZiJdqpqty0CKwhUEsLlsK2sgFRU8UpMfQqd7q0omIJFKn4eD%2B6p7cA35TwxTL7%2BurJJl%2BIh6LmGX7jNvxiFwHanXtLgUXe7YgijGPInK2sChfNKGrM5XBpVGrlJHmICLhDaRG0dIgub5JQ4VrRiz0SGdBijUuUZCo9jIPQaNj6VLYfGAGiTsRyLODboCrcnjTnH2df0FmCisRwhFdd2uNpKKbmcxIQEbRg%2FWZMLnu378GOqUB3q6P6C22qihedYJVxE4qSBMDN3O3ca9eaJyXdUNKAUfnbITJ6FD1Lp8zp2OxJd9Tdg2wmJP1iL7JbKXQU19CWcq%2BfNC1ZoLBOIDyFatTbRAeZbn4DH7sqKMAyIrWy%2FwMASgnJ%2B93Uh3oW1BS%2ByQo3tjNW42nP5aJfj3kfR538cCLUKq58e8HgS%2BkiCwHeHCziS%2Fk6Xw9O1kZ4TlpRrDgZMxgVJ%2FV&X-Amz-Signature=5223a4e53387494f9aa3062dc74b96343314892d4d9e5fa221761f764bb9e5f6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

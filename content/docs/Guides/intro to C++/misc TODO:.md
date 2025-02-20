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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKHOLQBL%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLz73wOK91qhsYRAMoFT9ifiq6vxRymZMHzNMWWQJeKwIhAN1%2Fo6swKbHisjlwzwLq9%2BoQri5wgupYmROsUoUwmzliKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4%2BhwFFACtkk45mgkq3APZE%2BF55U6EqKqirq0gE7NthYgZVd9FcSo7RJb%2FNwemyzitRE05tg0%2BaYvXIWJ7nt0zeZjuMUyJFk6Qk%2F8rs24vdL4PlnmwUwXKbTujdLhjaJ3Q8ZPQLxvwgFmoxXQqTnGEhy5Dr92ESKsWWw8w0plCZLxCxBCJQzCoB0KO2WLwrEBMhyREREh7xP26%2FzuaDNIlNKLbB%2FPzakQHI81Y0dB45D1W26lj39BLGVVKVY2eqOB1scGZuwIpWt3yDPqmqdJTHJUtZkhONP3zq5usIzBGJTpr1QD6jCZWc%2FgffwYFlFSPBjHXZDAAuvV9mcmQAWqPwbgae%2FzCA0wwtTI6Ml4mOiYNrwzaNfeSyHos4w2p6zoLmMyJHkDz%2BxwAk6b8mgnrPdEmQzY8ZPMv2hDgJIHFme3aSLCMKyZn6pEqhcsSBUZfr6NGD5Nz9msuZjdwgXaSA7RO4QUp4Hxspr6IV7fJm1V2997fIAPL4x0aeDmahoTwehuwB6kpt2I2rTRja66ygqAfDO6KCFNoSTZ%2BdPQ6l9JBjPUR9ShHX2qqE4dGEeAaLHHr3Qhpm89ec4FyU2kRy98o2uF07HVGt%2BQQ5rZ6h1tCQ0cVsekV6JhWinYIlxTXnEH2LDxUzOWP5jDYjd69BjqkAXNFt4fZTN6DoRQWjJ6vSsV5k4HI8F3uzoVfTpEJhk0WtBHQps6Tc6kMs3WrABDEOoAZlhxFaf8qvOJd1FzFf11UZVCyhwEkqTOhb2hALDSlAnSqGbqkgyp5ZdKScv5KohODZrZOWS65niJleSS6kmCiMuAD1AC3KUIiqq8h2VBE5XCDwbILSzKnMhjgGrsRBvJuk5Pl%2BE7E4BOpqyFPGw6exHaH&X-Amz-Signature=89af65cfa8378ee8e73126a4f25c6d6e1b3a05be95319147a79c1fb06ffbb953&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKHOLQBL%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLz73wOK91qhsYRAMoFT9ifiq6vxRymZMHzNMWWQJeKwIhAN1%2Fo6swKbHisjlwzwLq9%2BoQri5wgupYmROsUoUwmzliKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4%2BhwFFACtkk45mgkq3APZE%2BF55U6EqKqirq0gE7NthYgZVd9FcSo7RJb%2FNwemyzitRE05tg0%2BaYvXIWJ7nt0zeZjuMUyJFk6Qk%2F8rs24vdL4PlnmwUwXKbTujdLhjaJ3Q8ZPQLxvwgFmoxXQqTnGEhy5Dr92ESKsWWw8w0plCZLxCxBCJQzCoB0KO2WLwrEBMhyREREh7xP26%2FzuaDNIlNKLbB%2FPzakQHI81Y0dB45D1W26lj39BLGVVKVY2eqOB1scGZuwIpWt3yDPqmqdJTHJUtZkhONP3zq5usIzBGJTpr1QD6jCZWc%2FgffwYFlFSPBjHXZDAAuvV9mcmQAWqPwbgae%2FzCA0wwtTI6Ml4mOiYNrwzaNfeSyHos4w2p6zoLmMyJHkDz%2BxwAk6b8mgnrPdEmQzY8ZPMv2hDgJIHFme3aSLCMKyZn6pEqhcsSBUZfr6NGD5Nz9msuZjdwgXaSA7RO4QUp4Hxspr6IV7fJm1V2997fIAPL4x0aeDmahoTwehuwB6kpt2I2rTRja66ygqAfDO6KCFNoSTZ%2BdPQ6l9JBjPUR9ShHX2qqE4dGEeAaLHHr3Qhpm89ec4FyU2kRy98o2uF07HVGt%2BQQ5rZ6h1tCQ0cVsekV6JhWinYIlxTXnEH2LDxUzOWP5jDYjd69BjqkAXNFt4fZTN6DoRQWjJ6vSsV5k4HI8F3uzoVfTpEJhk0WtBHQps6Tc6kMs3WrABDEOoAZlhxFaf8qvOJd1FzFf11UZVCyhwEkqTOhb2hALDSlAnSqGbqkgyp5ZdKScv5KohODZrZOWS65niJleSS6kmCiMuAD1AC3KUIiqq8h2VBE5XCDwbILSzKnMhjgGrsRBvJuk5Pl%2BE7E4BOpqyFPGw6exHaH&X-Amz-Signature=83c03b36b6bebcb55cb231f8a235aa338ef820a21834612f1320d03d57c5cf0e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

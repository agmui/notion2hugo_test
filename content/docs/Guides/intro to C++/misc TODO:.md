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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCME2M4E%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T004159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4KWNHi3GpCT%2FzzaX%2FfukI%2FBnf5HFEHHz2m7hhOhAmyQIhAOZLrfcfXEY%2ByKaYwlhMepjXXBNQP%2FekoLBDUSuQ8HW5KogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2%2ButdbLNpzA23V9gq3APVcjS%2BcE91dg6YrpUTsd%2B%2BXCaatIvsU7kCli1K96pYWUjyu1%2B3ogpPmLd9xv2DUedEIgMZAQOyV3wDIv4UxnIpO9L1u4XKq9E%2FOyR6a3F6DVYOTC34Wbq9wsguzb5O4yMbCoXKbVqWjuF8Gk7MN27F05zHmO%2BdK1orH%2Fh32LJmPedDZJbbBYKdCnqIQULayat1wMlvLEXM9UZ0NT7%2B3SiOeuesrxStohmvAH%2BnzSAP7A1DtnSohe10wFqtZElTQNb4DO73etjzuBwai%2BcZtms7%2Fk3LGrqbV%2FwBzpy7PehwFotWjSq6UO%2FJgUdi9NUp%2F4GqB2DcLP8fjXr07OBVXRLunNKKlZjcPAur4U7sSnNW%2FzV%2FEohF5CSzHL1qy03lBzATrI9zH4r0Y%2Bw1zghGFHLbd2GcAjftELfYA2swy3dfwkYYYziVVwOCW%2FUCzB%2BRcZy2kE6g7nU0ywbjAMcyXfcnIxk9pZ1xeP1Ddwcs3wl7TIkaldfUUAs2xpG45Y9AhRDk9kZvciVtfX4EqwL%2ByyK4C%2B46zRIypjwJt59D%2BU9eY6MjJFQ4caUsF8wa%2FIyRrPghaR%2FKNAfJfArUGwOA67qKis2%2B1y8%2BMg7%2FUeaVgc7OV2vF4uvYTfP4wfGJjTCF3uPBBjqkAbpaclzG92Euxts9%2BdiHGKgv9%2FMNHpSNKC5kHvC6y7cgjZc4TPrOyEz38cW5UfY9d5Bi2U%2BHTgq4kJ5aKe544dfJrtxoZDJ8idSLhQdqCOtRuN7gwWI4FzdT0fBtbda3P3XKkr%2Bf%2BVRnTYCOWyey05qFoKJsSPLc9qlHL536nPM70BiT7qx3T%2Fd4wGDdu9TDn7w3LnaayQf%2Bd0VMZura9cvNfPgY&X-Amz-Signature=bbf2cda0c255ee288f43cb1ad4e9a82ff30602b9340dddfd594605e1d9ca2aa4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCME2M4E%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T004159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4KWNHi3GpCT%2FzzaX%2FfukI%2FBnf5HFEHHz2m7hhOhAmyQIhAOZLrfcfXEY%2ByKaYwlhMepjXXBNQP%2FekoLBDUSuQ8HW5KogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2%2ButdbLNpzA23V9gq3APVcjS%2BcE91dg6YrpUTsd%2B%2BXCaatIvsU7kCli1K96pYWUjyu1%2B3ogpPmLd9xv2DUedEIgMZAQOyV3wDIv4UxnIpO9L1u4XKq9E%2FOyR6a3F6DVYOTC34Wbq9wsguzb5O4yMbCoXKbVqWjuF8Gk7MN27F05zHmO%2BdK1orH%2Fh32LJmPedDZJbbBYKdCnqIQULayat1wMlvLEXM9UZ0NT7%2B3SiOeuesrxStohmvAH%2BnzSAP7A1DtnSohe10wFqtZElTQNb4DO73etjzuBwai%2BcZtms7%2Fk3LGrqbV%2FwBzpy7PehwFotWjSq6UO%2FJgUdi9NUp%2F4GqB2DcLP8fjXr07OBVXRLunNKKlZjcPAur4U7sSnNW%2FzV%2FEohF5CSzHL1qy03lBzATrI9zH4r0Y%2Bw1zghGFHLbd2GcAjftELfYA2swy3dfwkYYYziVVwOCW%2FUCzB%2BRcZy2kE6g7nU0ywbjAMcyXfcnIxk9pZ1xeP1Ddwcs3wl7TIkaldfUUAs2xpG45Y9AhRDk9kZvciVtfX4EqwL%2ByyK4C%2B46zRIypjwJt59D%2BU9eY6MjJFQ4caUsF8wa%2FIyRrPghaR%2FKNAfJfArUGwOA67qKis2%2B1y8%2BMg7%2FUeaVgc7OV2vF4uvYTfP4wfGJjTCF3uPBBjqkAbpaclzG92Euxts9%2BdiHGKgv9%2FMNHpSNKC5kHvC6y7cgjZc4TPrOyEz38cW5UfY9d5Bi2U%2BHTgq4kJ5aKe544dfJrtxoZDJ8idSLhQdqCOtRuN7gwWI4FzdT0fBtbda3P3XKkr%2Bf%2BVRnTYCOWyey05qFoKJsSPLc9qlHL536nPM70BiT7qx3T%2Fd4wGDdu9TDn7w3LnaayQf%2Bd0VMZura9cvNfPgY&X-Amz-Signature=af3eec25233a872e5e045d686189c4f0833d1f65acd83313611c1e320de2df85&X-Amz-SignedHeaders=host&x-id=GetObject)

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

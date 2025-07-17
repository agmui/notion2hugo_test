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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676J65PBS%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T230938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCUTRBkoTuJAT8QMeGlnoXNoXQ%2FDzvg9IRd3oSuDi5IBQIgTPOVR3iZQOMODvengLViWt%2FTeONaW1Pjh6fi3ZWIq7cqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJdVU4JyD7npeZxcuircA%2BxfFLjKe8M%2Buu2pW8QP8xyvJLptmcO3tnPbungftuqBrxxyvIU1BJhSEnCeWD5CdB%2F803M6BR5eIAO2Zq83SjkNL4jDzdVr2PAlC6THqS76TwS8luLhZ6bzAyyZsMK49LcxBN%2BEBvE%2FS4rxgxLJTqxN3BDfejXZEoowILcPjKJE1K6Xo%2FNGFcJzlcz3QMxCJNCDiEGYJm7pMAvCVLbfQyt1L3YsWfdXX3z5KA34wtnvPoOqAx6HaxibjsHOZ0L2DpmbErEmFBSX1T72vCvbXzzHVym6YtIhLekQ7gEe1UmSYs%2F2Al5Jfa0caLZrlOeAiD4wKp45hdHH%2F355%2B%2F42DxdwSe2eVj%2FfynAq3O3JmIecuqpBaQ%2Bcpa3jk2aZkZ35dKWBqwHkGxVCqYCely1TARZcPl7fECxpZ9irlmQ8x8RHFEWGNIDAGyRmqk1Pqzk%2B1TnnkvP1xJJQgT%2BhUkxvDVvDT0ao6w05Pu35kL7UKu%2Br5A7PGt8tuamMkmnBkNs4PIi1zQ9OxkvmQZqNXhSbpcq3p2K99B7wJVfjZUG5PCRVb8gblFjHud3N5ESMH8Al8fEzB6kQLo2mI6CiYqKyMjZAN%2Fqd3tN6qLsO2dTjgV3zG93I7q1cDFbo7MMOMP765cMGOqUBVQBP2tSQfLJBZxvpXTh7d%2Fo%2FVIMIIHtiAs3ZxfTU6v86lZFBniqKsUshuk71oEZdU7b4zwvahpBcQvuMzZiDeqvmfZCiWlyEH3x9R0pbi2ngQxS3vTkDoZbbCTIx7UnLL5JyHi%2BFHjvu1vImysY0xZ3wUbFlKy1jcz5IuIKC%2BQavSAvvD%2FkIkyhMBP%2BwyBW74Sff3C%2Bg1IQbhG4ltSJHo0koYhuB&X-Amz-Signature=77f79629a15f9aeac357f347b2c1b2dfc2cebfff59b4a9db5aa607d98f555a18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676J65PBS%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T230938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCUTRBkoTuJAT8QMeGlnoXNoXQ%2FDzvg9IRd3oSuDi5IBQIgTPOVR3iZQOMODvengLViWt%2FTeONaW1Pjh6fi3ZWIq7cqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJdVU4JyD7npeZxcuircA%2BxfFLjKe8M%2Buu2pW8QP8xyvJLptmcO3tnPbungftuqBrxxyvIU1BJhSEnCeWD5CdB%2F803M6BR5eIAO2Zq83SjkNL4jDzdVr2PAlC6THqS76TwS8luLhZ6bzAyyZsMK49LcxBN%2BEBvE%2FS4rxgxLJTqxN3BDfejXZEoowILcPjKJE1K6Xo%2FNGFcJzlcz3QMxCJNCDiEGYJm7pMAvCVLbfQyt1L3YsWfdXX3z5KA34wtnvPoOqAx6HaxibjsHOZ0L2DpmbErEmFBSX1T72vCvbXzzHVym6YtIhLekQ7gEe1UmSYs%2F2Al5Jfa0caLZrlOeAiD4wKp45hdHH%2F355%2B%2F42DxdwSe2eVj%2FfynAq3O3JmIecuqpBaQ%2Bcpa3jk2aZkZ35dKWBqwHkGxVCqYCely1TARZcPl7fECxpZ9irlmQ8x8RHFEWGNIDAGyRmqk1Pqzk%2B1TnnkvP1xJJQgT%2BhUkxvDVvDT0ao6w05Pu35kL7UKu%2Br5A7PGt8tuamMkmnBkNs4PIi1zQ9OxkvmQZqNXhSbpcq3p2K99B7wJVfjZUG5PCRVb8gblFjHud3N5ESMH8Al8fEzB6kQLo2mI6CiYqKyMjZAN%2Fqd3tN6qLsO2dTjgV3zG93I7q1cDFbo7MMOMP765cMGOqUBVQBP2tSQfLJBZxvpXTh7d%2Fo%2FVIMIIHtiAs3ZxfTU6v86lZFBniqKsUshuk71oEZdU7b4zwvahpBcQvuMzZiDeqvmfZCiWlyEH3x9R0pbi2ngQxS3vTkDoZbbCTIx7UnLL5JyHi%2BFHjvu1vImysY0xZ3wUbFlKy1jcz5IuIKC%2BQavSAvvD%2FkIkyhMBP%2BwyBW74Sff3C%2Bg1IQbhG4ltSJHo0koYhuB&X-Amz-Signature=6c535904ab29c78fc515f31a998b99916d243b8254ae3ae776d2459c1972b6df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

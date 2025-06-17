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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7YZCIEX%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs7QaM5r6T8HYqxcrkjz3FcsqfEHvNTv66XNLYN2kQEgIhAJ84tJN%2FLz%2BSsQyOZAQ3ZxxWwQlGcLsvwonNHncTaUcFKv8DCH0QABoMNjM3NDIzMTgzODA1IgykZfbqCnEsQyO6e%2Fwq3AO0In%2BEnojh%2F8OoM4cFtELEzfjMVPoBtn9pcIjF2EU68SYWlB3%2Fow%2F2icJ5gss3LTeqvDritlw7HOrA%2FBX1%2BZqrNz2hpdDd5IfGVUGqvHhxT1JeB8CKcO7ADunl2w5jm77x9bEXWcenjXDIaIQqMDxVL%2F71zd9n8DkKU5kxeIRMGJk2cIYy2g1i74PfADetqQI7JLixn8Mcp0jjdK1j4WJMmGOE%2BVkfk7KYuXkN18DJ9cVt%2Bt0xCNQXq9iJD1B9xS9gxuqTVQxiUcLoKIAFHs8xIMEY%2Bg5570LcC%2FVrJ%2F9CuT2%2FVSuRdta9VPD9wy%2F3ZL9330xMi6KV%2B%2FefgWmf9USwja31S4fMzRwcFNYErBFOL0CfyZC9pf7yrG1g6ihdCQNbA0UDK6XrAFbQSEcT6wrkyiqQbm7qERSiOh9TdRdGUiqahsulqkRdI4G8e6XAZUgib3bscaOGBT27dx3GyxHxQTnCChFlsPQlF7ML8LOi4iEhLfcG%2BCT0vxd0b3oPimaS9%2F%2BrTdAy77pupiHxBIJYmpKlxnY9Ox2uSlYeg4hcJaIe%2Ft%2FxwhsIL9nvrX4HAubS6327ZBnV32eQWMVP3fM0EkrGMobfihIOAGb4FJ9IyDxKNRwmcN04kar04jDyiMfCBjqkAbM%2Bh%2BJh1wUx8ke5ZOHaSK93mFK%2FK9YEDY8KlIOCi%2BCesJgj8GEM2sWbZorED1NpfjfNnvNsptJ3SrfRFYe2kGZsLxHosFVydA%2FPwQaPDOajpFcotPBLcmp0dwcMMO5xc0rI1zun6IA%2BN4J2HYaS0LbOh8xCWgcCOuUEb3%2FDuk80SlV6J28SKoQMyN9NYWghvloSeL56jte%2FIQh6KZFgZma4BTI1&X-Amz-Signature=222aac0b9192d00bdde88cce302bce8ccb27d3146570b13ffb9375b270d01d39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7YZCIEX%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs7QaM5r6T8HYqxcrkjz3FcsqfEHvNTv66XNLYN2kQEgIhAJ84tJN%2FLz%2BSsQyOZAQ3ZxxWwQlGcLsvwonNHncTaUcFKv8DCH0QABoMNjM3NDIzMTgzODA1IgykZfbqCnEsQyO6e%2Fwq3AO0In%2BEnojh%2F8OoM4cFtELEzfjMVPoBtn9pcIjF2EU68SYWlB3%2Fow%2F2icJ5gss3LTeqvDritlw7HOrA%2FBX1%2BZqrNz2hpdDd5IfGVUGqvHhxT1JeB8CKcO7ADunl2w5jm77x9bEXWcenjXDIaIQqMDxVL%2F71zd9n8DkKU5kxeIRMGJk2cIYy2g1i74PfADetqQI7JLixn8Mcp0jjdK1j4WJMmGOE%2BVkfk7KYuXkN18DJ9cVt%2Bt0xCNQXq9iJD1B9xS9gxuqTVQxiUcLoKIAFHs8xIMEY%2Bg5570LcC%2FVrJ%2F9CuT2%2FVSuRdta9VPD9wy%2F3ZL9330xMi6KV%2B%2FefgWmf9USwja31S4fMzRwcFNYErBFOL0CfyZC9pf7yrG1g6ihdCQNbA0UDK6XrAFbQSEcT6wrkyiqQbm7qERSiOh9TdRdGUiqahsulqkRdI4G8e6XAZUgib3bscaOGBT27dx3GyxHxQTnCChFlsPQlF7ML8LOi4iEhLfcG%2BCT0vxd0b3oPimaS9%2F%2BrTdAy77pupiHxBIJYmpKlxnY9Ox2uSlYeg4hcJaIe%2Ft%2FxwhsIL9nvrX4HAubS6327ZBnV32eQWMVP3fM0EkrGMobfihIOAGb4FJ9IyDxKNRwmcN04kar04jDyiMfCBjqkAbM%2Bh%2BJh1wUx8ke5ZOHaSK93mFK%2FK9YEDY8KlIOCi%2BCesJgj8GEM2sWbZorED1NpfjfNnvNsptJ3SrfRFYe2kGZsLxHosFVydA%2FPwQaPDOajpFcotPBLcmp0dwcMMO5xc0rI1zun6IA%2BN4J2HYaS0LbOh8xCWgcCOuUEb3%2FDuk80SlV6J28SKoQMyN9NYWghvloSeL56jte%2FIQh6KZFgZma4BTI1&X-Amz-Signature=dc6f2456a1e188ce9ecf30ec7a2701f86c101539634f3a5e962bf0d88a1d5c9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

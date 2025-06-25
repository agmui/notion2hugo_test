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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCAY7IGH%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T071104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIASqHM3WTLbNnZl2NHGGpRpkrBxNFYsoscK85MnQJfttAiEAqBAfmUBHz10nPU6lZ54U2XbPOPu7mNGw9GBe07RMbccq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDABAETDmh0RwxGE6BircA9ulQIyiGc6yJwebONsux4MK7HmpXjuasG50S5m5YV7EtL0Zcu72QynOH7vHtNAo%2BrYMXdbwuCWm2TGOW%2F4EQyIc1wKYd2v8%2FxVL7zJ9hZhnPE9R1LCFYc%2FIEG0a6Hz30Kkcl3cox%2FSDqMQOXrawo8P66Iqi%2BwyAaR7Ti5%2BL%2BUvvi%2F4RO68H0%2FCdAn2QOqnwlrHByuKXeH5fVRH0WCMxpDpzHjRqwNXy5Jg8x%2FeJ5JjvVKyZDsveytAoRTniJHYkBa6OGASMG6WkiU7TXO5yMjcK7HzvAJowiK13MItEKg3K3p6B91M8CvmT4SImgKrU9VwY%2F5LkZxzza8lkiZ3QBh8gC0ngddN%2Bse0vRJadX18R2ZDbuX51w0zweN0mi4KiS%2FLcCVALDR6VeModkPdUxRe0w2czFf4cpr4R%2BtjqVpS8YLoCyA0v%2FR%2FnRLMuU4jnPJ0jfuFIzGDnWfdSiRmoLIOW5feo0aGiGDFPj7voNbiRRYvFGMU%2BRAu%2BphUkLbR8NO%2B3DR7lLC1uaRrr4cXSpOc1qDgtcqdUHOjEnmKi%2B7hQSRAozd35hpb8ysaPk9EZED8iDwnEjaZXeNuK5VjpajHZUf0VT3lTBR8ZHHr6o%2BGK3z9t7nqVTQkTuddfMNql7sIGOqUBgi%2FCw0FPR5Rr0p5Ubh5u1qGgyMzL9SjGorw%2FbaNZlbMyxzQKWvbaEe6uyQJFx1rLaskQkCP9gZ0wamO1bduU0T%2BDUZf9CPeN3mxRxI0DD2cj06TBbbIhjsE7fbXSn6JYpg06CJOuLB6Vlk92r%2Brab4ZVb95%2F8TM%2BDudsZ6SeF9iMVtPDkf7qj1gTmdUat5kqKABTzlwA%2BgqITvOUo4KF3sgr5CFe&X-Amz-Signature=f4a4f475f70e18afdcef82010a6279152a030fb278a8dac08d2b8ebd640fea5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCAY7IGH%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T071104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIASqHM3WTLbNnZl2NHGGpRpkrBxNFYsoscK85MnQJfttAiEAqBAfmUBHz10nPU6lZ54U2XbPOPu7mNGw9GBe07RMbccq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDABAETDmh0RwxGE6BircA9ulQIyiGc6yJwebONsux4MK7HmpXjuasG50S5m5YV7EtL0Zcu72QynOH7vHtNAo%2BrYMXdbwuCWm2TGOW%2F4EQyIc1wKYd2v8%2FxVL7zJ9hZhnPE9R1LCFYc%2FIEG0a6Hz30Kkcl3cox%2FSDqMQOXrawo8P66Iqi%2BwyAaR7Ti5%2BL%2BUvvi%2F4RO68H0%2FCdAn2QOqnwlrHByuKXeH5fVRH0WCMxpDpzHjRqwNXy5Jg8x%2FeJ5JjvVKyZDsveytAoRTniJHYkBa6OGASMG6WkiU7TXO5yMjcK7HzvAJowiK13MItEKg3K3p6B91M8CvmT4SImgKrU9VwY%2F5LkZxzza8lkiZ3QBh8gC0ngddN%2Bse0vRJadX18R2ZDbuX51w0zweN0mi4KiS%2FLcCVALDR6VeModkPdUxRe0w2czFf4cpr4R%2BtjqVpS8YLoCyA0v%2FR%2FnRLMuU4jnPJ0jfuFIzGDnWfdSiRmoLIOW5feo0aGiGDFPj7voNbiRRYvFGMU%2BRAu%2BphUkLbR8NO%2B3DR7lLC1uaRrr4cXSpOc1qDgtcqdUHOjEnmKi%2B7hQSRAozd35hpb8ysaPk9EZED8iDwnEjaZXeNuK5VjpajHZUf0VT3lTBR8ZHHr6o%2BGK3z9t7nqVTQkTuddfMNql7sIGOqUBgi%2FCw0FPR5Rr0p5Ubh5u1qGgyMzL9SjGorw%2FbaNZlbMyxzQKWvbaEe6uyQJFx1rLaskQkCP9gZ0wamO1bduU0T%2BDUZf9CPeN3mxRxI0DD2cj06TBbbIhjsE7fbXSn6JYpg06CJOuLB6Vlk92r%2Brab4ZVb95%2F8TM%2BDudsZ6SeF9iMVtPDkf7qj1gTmdUat5kqKABTzlwA%2BgqITvOUo4KF3sgr5CFe&X-Amz-Signature=37599fdc49f6c512d8f3a8f040748d36f9a36a27ed731aef736f8a0cb29179c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657AYFVQI%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T110828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQD%2BGWntnDjyZBe%2BJ%2BFqbscg3qDdSYliEZupvX4g27WcXwIhAN7UgzrGm9lBO96%2F8ceJTVUFIvx51qZGMzAgwEtWxGIXKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBZTLKa7whG%2BcUDEIq3ANWRjlu6DHAZlnRv64dMec0Ib4XcEAU4Con5bMq4lJEgHqz2F69szU9XQ0c%2Fsca%2BpDn2hxJS3U2VJkdkN7jft9BN9zgGtWjjvXkZk0fSW5H9ufHa6ODhQcH6eQ8Y%2Bbd9Ln7pDw8kGPBWE0KVs%2F2MUoew%2F4geoAGm9rjuNwGXo4sHpAWPNrCVMPA6BnoxmNNHfBLmlL0Vmswsqhqvvqy9gkpUXA4huDdH0jIISGYJhFNiikyvzo3d2MexWFviOqf6lL5bNbDwnNIgEngfWkssEqYe7ic0U3CHtoFAGBhZl60gw1slIGm6bDg1CufwTinXkhPL0rPzoLbBI%2FFObvUxPjdgWuldY5w4OkPLdbETDsLGh1%2B1tztw%2BqNBw4Lgpa%2FlGYqbHv1TQ%2BAMcM%2FdIGFO9hPwDXOFqJwJ2t%2BAbUjgicW9QrdxXHZ8NzSUmUfEoKIjjQL58%2BUM0iSDYqbkyMRSHstIKf90scPAogvoZfX1mozL%2BYZb4eZxE4Qg%2FVuGw7Za6SAepAtjtxNOUf1KFfk1pPyRJVzpgoyjHdcvR%2BuB66MQ1QhHkeca%2FUksVfBjt5ewOLCzclRzAUAKB%2FWJJr3eRID9pLVvZtPbvhDdr8PdjbLG2sppCeK7V9LllZugDC8z%2BjDBjqkATRr6wZx4kYyPGjsTfl5L8Jkskd5RNYOweZpxVMmVcBxq2r%2BsKUDj8nkhUsmw2z%2F71iJQS8Oo41%2B%2Fl8032lBLyR%2BCCPO%2BAlffZPVvVeASvs108HvkQ04XgSG8IzyuKWJwPRaHtc1KWff8bPlSV55n1ljWOcPymJLuCPn2dO9K4kTp4Kultx3wt%2FzhXTCw%2FAg5kTys78v16%2BmEnRiEYdboytAoNT2&X-Amz-Signature=af65285db488268cd42c67c16eb77a78071bce6d4f7eba845508601dac0fa1fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657AYFVQI%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T110828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQD%2BGWntnDjyZBe%2BJ%2BFqbscg3qDdSYliEZupvX4g27WcXwIhAN7UgzrGm9lBO96%2F8ceJTVUFIvx51qZGMzAgwEtWxGIXKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBZTLKa7whG%2BcUDEIq3ANWRjlu6DHAZlnRv64dMec0Ib4XcEAU4Con5bMq4lJEgHqz2F69szU9XQ0c%2Fsca%2BpDn2hxJS3U2VJkdkN7jft9BN9zgGtWjjvXkZk0fSW5H9ufHa6ODhQcH6eQ8Y%2Bbd9Ln7pDw8kGPBWE0KVs%2F2MUoew%2F4geoAGm9rjuNwGXo4sHpAWPNrCVMPA6BnoxmNNHfBLmlL0Vmswsqhqvvqy9gkpUXA4huDdH0jIISGYJhFNiikyvzo3d2MexWFviOqf6lL5bNbDwnNIgEngfWkssEqYe7ic0U3CHtoFAGBhZl60gw1slIGm6bDg1CufwTinXkhPL0rPzoLbBI%2FFObvUxPjdgWuldY5w4OkPLdbETDsLGh1%2B1tztw%2BqNBw4Lgpa%2FlGYqbHv1TQ%2BAMcM%2FdIGFO9hPwDXOFqJwJ2t%2BAbUjgicW9QrdxXHZ8NzSUmUfEoKIjjQL58%2BUM0iSDYqbkyMRSHstIKf90scPAogvoZfX1mozL%2BYZb4eZxE4Qg%2FVuGw7Za6SAepAtjtxNOUf1KFfk1pPyRJVzpgoyjHdcvR%2BuB66MQ1QhHkeca%2FUksVfBjt5ewOLCzclRzAUAKB%2FWJJr3eRID9pLVvZtPbvhDdr8PdjbLG2sppCeK7V9LllZugDC8z%2BjDBjqkATRr6wZx4kYyPGjsTfl5L8Jkskd5RNYOweZpxVMmVcBxq2r%2BsKUDj8nkhUsmw2z%2F71iJQS8Oo41%2B%2Fl8032lBLyR%2BCCPO%2BAlffZPVvVeASvs108HvkQ04XgSG8IzyuKWJwPRaHtc1KWff8bPlSV55n1ljWOcPymJLuCPn2dO9K4kTp4Kultx3wt%2FzhXTCw%2FAg5kTys78v16%2BmEnRiEYdboytAoNT2&X-Amz-Signature=fee261a74baa53ba5e8236dee6cc845a4b080258c2d9e2bbc343ecebb2e69b74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

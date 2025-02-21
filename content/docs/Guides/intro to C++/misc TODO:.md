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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z5YLVH7%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T021032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqbDEOjqfNu%2BR8FW%2FTR7ek1uZJb6tb62lEsfC3Q5t2ggIhAJ2o8Zpun%2BSsos3AeCeywEMUrBYLw8EUimH1fOfRk1x%2FKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcoqDWl3aIA%2B%2B1k24q3AOqPjcP%2F1%2FU40KhPfPCZU4wRMKXoglsAkV3Xkr9Ou4PyuWJVa%2FrAs5odWAF3ve2DPQV3ciBEUL97o7K5oWifU2NhwW3eUKUcmQ2bx8Xl9bexSA7izDjWxCE%2Frv9xhnVwi0lsvRBoCdmy5gZiEU9EKaOaZURdjl7QADCHTWnB0Mi3gqqtmc7Dl7cvhPNp13y%2BiY5omV%2BI0W8wGNgQAcfQj%2F7zUibwNOqvshlyHXpClA0lsv4leKfkAMqGunUGKI92vWxyyoWITza69xOGL7Q3bKJaPNxoDADr8tW3BQMSQFZIBgQ2LL6S3Eb%2Ft67t685qmVpMOgORatByqEyFb9nd3%2B3K343%2FEDi2YziRCGHYYx7Xvhy0BJlfdq5P4KMhFpdcrDHUA%2BeSmaBkr1adbVMOHf7aBSDAztIxSjgeuEwbe6MvzgMqY3n0GBpR1kiYJPLeq7f%2BZRgYMi%2BNCSu2RJEsUJF70K3WDOSze5HCAlGmoabIWKRdZpii9Je9fOo5VscInju5tDnhhcRhMp%2FmTCWdPQTer2JKVM%2BBpLst4YjoOQstl0wVOAetiQVncaSmaMyrlqzQE0zxC9DNQqPnFVJ8Zp6B9qhgKYtqfF%2BEWzEhjDmk7IwCR6vUxRGoQiZljC2hN%2B9BjqkAYddt5bmq1WPzkxm6l1CkvK%2B1KTWUr%2BaO2WDeL4lXV%2FovyketZaMU8YLDzXIyXzuJJU71n9GhwMUFIeuFhWJMkiUiFiDFGFSSNEIRjLxhE1tt%2B%2FXMne5%2BgqzjxR%2BT962HuAhc3gxmoKx0V099UqHQmghm4W89zrTkqo9t7iL%2FJih2QTTxqaHkGHbr8YKTgTY%2BWp0nAQEpYAXJ3iCuOMpOSZQUI9C&X-Amz-Signature=3a0c6fe8c2f95d7f57df465ac73a9a446a8292aa6a07806489785e91eabdd91d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z5YLVH7%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T021032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqbDEOjqfNu%2BR8FW%2FTR7ek1uZJb6tb62lEsfC3Q5t2ggIhAJ2o8Zpun%2BSsos3AeCeywEMUrBYLw8EUimH1fOfRk1x%2FKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcoqDWl3aIA%2B%2B1k24q3AOqPjcP%2F1%2FU40KhPfPCZU4wRMKXoglsAkV3Xkr9Ou4PyuWJVa%2FrAs5odWAF3ve2DPQV3ciBEUL97o7K5oWifU2NhwW3eUKUcmQ2bx8Xl9bexSA7izDjWxCE%2Frv9xhnVwi0lsvRBoCdmy5gZiEU9EKaOaZURdjl7QADCHTWnB0Mi3gqqtmc7Dl7cvhPNp13y%2BiY5omV%2BI0W8wGNgQAcfQj%2F7zUibwNOqvshlyHXpClA0lsv4leKfkAMqGunUGKI92vWxyyoWITza69xOGL7Q3bKJaPNxoDADr8tW3BQMSQFZIBgQ2LL6S3Eb%2Ft67t685qmVpMOgORatByqEyFb9nd3%2B3K343%2FEDi2YziRCGHYYx7Xvhy0BJlfdq5P4KMhFpdcrDHUA%2BeSmaBkr1adbVMOHf7aBSDAztIxSjgeuEwbe6MvzgMqY3n0GBpR1kiYJPLeq7f%2BZRgYMi%2BNCSu2RJEsUJF70K3WDOSze5HCAlGmoabIWKRdZpii9Je9fOo5VscInju5tDnhhcRhMp%2FmTCWdPQTer2JKVM%2BBpLst4YjoOQstl0wVOAetiQVncaSmaMyrlqzQE0zxC9DNQqPnFVJ8Zp6B9qhgKYtqfF%2BEWzEhjDmk7IwCR6vUxRGoQiZljC2hN%2B9BjqkAYddt5bmq1WPzkxm6l1CkvK%2B1KTWUr%2BaO2WDeL4lXV%2FovyketZaMU8YLDzXIyXzuJJU71n9GhwMUFIeuFhWJMkiUiFiDFGFSSNEIRjLxhE1tt%2B%2FXMne5%2BgqzjxR%2BT962HuAhc3gxmoKx0V099UqHQmghm4W89zrTkqo9t7iL%2FJih2QTTxqaHkGHbr8YKTgTY%2BWp0nAQEpYAXJ3iCuOMpOSZQUI9C&X-Amz-Signature=74320d0863e6f99593928496ee22811bbcd5850fb0e4aa6b1f8b7e3942b91851&X-Amz-SignedHeaders=host&x-id=GetObject)

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

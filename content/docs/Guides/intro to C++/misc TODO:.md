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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CC4GWQQ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T161110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIB5h8rWNMtQ4XEAcO1pnmhMPDagzIvwEljpXtX7Q6XBhAiAU7VsmtcwpOum31QNrt10K%2B27lCuWqRMX3yqidFkemqir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM8qkxEK9ACppMUV7sKtwD1qvBFLBV5jYm%2B1a7%2FWxvgpoPFDq0RQB1L72ojxk5H8gpz7p2mEJ7pt24rtNMYhrNFU0N%2B9Ej64F4r1S9a0TYYcW2Nm%2FhEh1QGdKNAYJHrcEvlODQ0iJlLl3m9UZriBILiGJ7dKAbciJ0fpeAv9E%2FH8mc1JeWmHucbOmYaPpYNxCBqXwBbitmD0PHIHDB18oC6%2FAij%2BvOlPJ65KDYEcQ9dL5JBfy69gyewJAZSBMihTGtxnfZqTe5ZyTM9Q8JCkMrpyVWQbLgSM4od5OzpDTrd%2B6PWkaFymGtEpA3NOe4rrxcGTZd1eD85g2v%2F9IGFWAf2kuwn3jXtOcObx9Byel1V1c7ytp4UK9NW3Hhq6a8lkA7OY0gKJHo%2B89CMzCpMrZL%2BSXnCXWGNwrQA9q642ZqV7hhbkKgVO%2FKFJR9uOzX8pULcd2F50UvIpvHRMWdqt0OZuXjKTgIYCubYp2%2BGCwZJLqz%2BJnfKO%2Bax72FyCYTCkmoIU1hNYRetLcRQ9qlfvQTcOvXS0iOuG9pklNMgEGfeJqUSQ9kkZfsESMPbcGDiVcbgXx5eLFKDI8NJ7bOdvi4WR4CRdKXn0KahO3dgzEghCOtyUwtISL%2FfP4eza6dbBwfgfUoUPh8onrpQHYwxITUwwY6pgHfFEOMqNzIoV%2FtORIn9U7mkhyzS1lWoZduAzEY1mG1bjFMwbjfV6coAlyFz3MCcPJOvcsrB%2FVy7SoeNT3bf9JY2S8vOCi0aSj1Uw01q%2BP%2FSvjZpTaoOki3pc0HLpbKLLUsKGlamwtmt%2BX5vEDRrThKIdVUKvF0xMe3qjqHDB0%2FsbIE6ZZbAKSD0UK29LfvRaWVY3JjVj%2B8oyK5yOS6chjQ5y35J48g&X-Amz-Signature=77fa5bfb6ef0ea76e6a71361abe96ea3fa81c19cbbd63c838cb40bc526d54cca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CC4GWQQ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T161110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIB5h8rWNMtQ4XEAcO1pnmhMPDagzIvwEljpXtX7Q6XBhAiAU7VsmtcwpOum31QNrt10K%2B27lCuWqRMX3yqidFkemqir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM8qkxEK9ACppMUV7sKtwD1qvBFLBV5jYm%2B1a7%2FWxvgpoPFDq0RQB1L72ojxk5H8gpz7p2mEJ7pt24rtNMYhrNFU0N%2B9Ej64F4r1S9a0TYYcW2Nm%2FhEh1QGdKNAYJHrcEvlODQ0iJlLl3m9UZriBILiGJ7dKAbciJ0fpeAv9E%2FH8mc1JeWmHucbOmYaPpYNxCBqXwBbitmD0PHIHDB18oC6%2FAij%2BvOlPJ65KDYEcQ9dL5JBfy69gyewJAZSBMihTGtxnfZqTe5ZyTM9Q8JCkMrpyVWQbLgSM4od5OzpDTrd%2B6PWkaFymGtEpA3NOe4rrxcGTZd1eD85g2v%2F9IGFWAf2kuwn3jXtOcObx9Byel1V1c7ytp4UK9NW3Hhq6a8lkA7OY0gKJHo%2B89CMzCpMrZL%2BSXnCXWGNwrQA9q642ZqV7hhbkKgVO%2FKFJR9uOzX8pULcd2F50UvIpvHRMWdqt0OZuXjKTgIYCubYp2%2BGCwZJLqz%2BJnfKO%2Bax72FyCYTCkmoIU1hNYRetLcRQ9qlfvQTcOvXS0iOuG9pklNMgEGfeJqUSQ9kkZfsESMPbcGDiVcbgXx5eLFKDI8NJ7bOdvi4WR4CRdKXn0KahO3dgzEghCOtyUwtISL%2FfP4eza6dbBwfgfUoUPh8onrpQHYwxITUwwY6pgHfFEOMqNzIoV%2FtORIn9U7mkhyzS1lWoZduAzEY1mG1bjFMwbjfV6coAlyFz3MCcPJOvcsrB%2FVy7SoeNT3bf9JY2S8vOCi0aSj1Uw01q%2BP%2FSvjZpTaoOki3pc0HLpbKLLUsKGlamwtmt%2BX5vEDRrThKIdVUKvF0xMe3qjqHDB0%2FsbIE6ZZbAKSD0UK29LfvRaWVY3JjVj%2B8oyK5yOS6chjQ5y35J48g&X-Amz-Signature=57ec09a11d7dc9eadeecdde479c436da3fbc5be26f58834cb409d7e1b215cd88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

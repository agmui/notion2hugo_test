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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVKTHCRO%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T003851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkCWB6xL0hi0elVb2%2B16zMAYUu4C6gZptNaTcJARosvAIhAOQ9Ap5d6RYWWzxg4TYqGQ8ueboQ0UkCL0%2Bv0oPv5DnJKv8DCGgQABoMNjM3NDIzMTgzODA1Igx61wRwJS70pAi2i%2F8q3ANiyPQUijTfJCQM05Ei2mIH8dfdq%2FuhfNr3JLEKe5yVqHRAYO%2B03e1gU5zAn2KPjlSR4SMIhqpxa8fYpkkBQkxwztauxVBE5LdrifVqrJZGxlVbi8aON3KX6%2BGojygdNREvkXfomTXXwd%2FMrz0mimHselhtAppDmEP4xRAqLfk0jPZqJaFjrNESh3QagEsdd3OEgVEUke6QCzsUOeTPc24YCC4YYgwi7WqC7gzXZtBjnwlzBIkkpM%2F5LDMdvqibyByEF7PmDWzC23xe9DcaVZXq9jN39aOPPrOP%2F7GxsUb1ceClwEUdZ2pMdsufePd2mczxBLYstG9i5AAq3da8LWGivbqdUz3sTyOX2JQKgsfwG61X70VU%2FO2onUhTwVIszCKRw9TTlIAVsEkPhirhRJ6BU2k71QTdXG77J5hX5E6QH%2B3Hhzd9ch8H75pArO8JM3oO2UWT8HhvzoH2slYrmUfLoMMJWRjkSrkHs32OHt1fZzfIa2QzGOi61PYWrhzQ7oKoxqzJ8eyAam82QM4QoFRd8WcmpJmZS6oilSn%2BV%2BGvvhqKjZx9C4yU4BEd0JGJ5Otuh1RW0dqWERiqABykeVGWwZjnAxpPbkX6K9JkCbS0k9%2F6UoKg%2FXULue%2BkUDCbu9G%2FBjqkATFUmJ%2BKno0mkYcYWhsq8IUyOOznNdEb7C5YcBCX%2BcN3LMqHLDC%2BfxupH4V1BaWEPTmrYAfPnOGUsVoKwz9I6ywAXc1hi5DurnhJZ%2FUbioo%2BG10x%2B9No%2BUDKR%2Bkvi4GhulUpuF%2FEQU3ZVysEKJI02G07roSjLsWw7Gl0ZFaCyXWKoRl%2FZC8k2xsV0V9FK4EBGHY3z8YsvW%2Fa4%2BjMNQfNoJceY%2FW9&X-Amz-Signature=b6d06eac4848b0cc9e2358d9f518149feca39040834297c0fa68cdb15e9ba1f7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVKTHCRO%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T003851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkCWB6xL0hi0elVb2%2B16zMAYUu4C6gZptNaTcJARosvAIhAOQ9Ap5d6RYWWzxg4TYqGQ8ueboQ0UkCL0%2Bv0oPv5DnJKv8DCGgQABoMNjM3NDIzMTgzODA1Igx61wRwJS70pAi2i%2F8q3ANiyPQUijTfJCQM05Ei2mIH8dfdq%2FuhfNr3JLEKe5yVqHRAYO%2B03e1gU5zAn2KPjlSR4SMIhqpxa8fYpkkBQkxwztauxVBE5LdrifVqrJZGxlVbi8aON3KX6%2BGojygdNREvkXfomTXXwd%2FMrz0mimHselhtAppDmEP4xRAqLfk0jPZqJaFjrNESh3QagEsdd3OEgVEUke6QCzsUOeTPc24YCC4YYgwi7WqC7gzXZtBjnwlzBIkkpM%2F5LDMdvqibyByEF7PmDWzC23xe9DcaVZXq9jN39aOPPrOP%2F7GxsUb1ceClwEUdZ2pMdsufePd2mczxBLYstG9i5AAq3da8LWGivbqdUz3sTyOX2JQKgsfwG61X70VU%2FO2onUhTwVIszCKRw9TTlIAVsEkPhirhRJ6BU2k71QTdXG77J5hX5E6QH%2B3Hhzd9ch8H75pArO8JM3oO2UWT8HhvzoH2slYrmUfLoMMJWRjkSrkHs32OHt1fZzfIa2QzGOi61PYWrhzQ7oKoxqzJ8eyAam82QM4QoFRd8WcmpJmZS6oilSn%2BV%2BGvvhqKjZx9C4yU4BEd0JGJ5Otuh1RW0dqWERiqABykeVGWwZjnAxpPbkX6K9JkCbS0k9%2F6UoKg%2FXULue%2BkUDCbu9G%2FBjqkATFUmJ%2BKno0mkYcYWhsq8IUyOOznNdEb7C5YcBCX%2BcN3LMqHLDC%2BfxupH4V1BaWEPTmrYAfPnOGUsVoKwz9I6ywAXc1hi5DurnhJZ%2FUbioo%2BG10x%2B9No%2BUDKR%2Bkvi4GhulUpuF%2FEQU3ZVysEKJI02G07roSjLsWw7Gl0ZFaCyXWKoRl%2FZC8k2xsV0V9FK4EBGHY3z8YsvW%2Fa4%2BjMNQfNoJceY%2FW9&X-Amz-Signature=0dfdc28ac80ea0f1c14cf0a1ef2db78a76d752142457ec57216851295ed73550&X-Amz-SignedHeaders=host&x-id=GetObject)

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

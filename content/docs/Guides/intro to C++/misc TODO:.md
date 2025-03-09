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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSD6IONP%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T160712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCID1c60ROUxPDZXRA%2F0CZBTFkfOS9b3du7gzGESE4XCteAiEA%2BXB8hAYHTvAcXuQyZUR1%2Fk9Rc9UDHr795xt1tiq7n6Aq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDMkCg0hlCDVngJxKjCrcAxxTPJ04Sq4yJchjXHzHY6Pm7BpGFPNY1Vbr%2BHwekktfrTOJFfH9dmDCmuIdheDO669vd97E1HGMYP7tnlXlfjZu8RxpUAdfv81UQNq6IPNZeUeXs%2FoT8djrfkaTGBy25ScZ3svCaOHKZle4cr3Q8T2EYTZvLM8Zg%2BzZmMYa98k00caYMQ24iPtkPdYw2aOMuLZEZTWjGzKnIpmkjumhuncRBcGpy%2BytCA9BdxPc61sc6eS9EpxhN9VqZ%2FseHi4Sn7hAZFgnq470DqTPHf25xdfm%2BaQxKlh4tRy3L6OKCh7Ww9rIpIQXBXlNvUonJ4TRM%2FtewlwkiAT0lQujdy7ZfU4RCGuJCpw7heQ%2FwDok7iyTlLQZUa09DLpemgyJ20V1JHYF02jGDV2yk86gDq4%2FeKzNYGEHItX5ZfQckL%2FyIcDLM02UsyZkTQH6nrV9DxDwhbK4vkCn7Mkmq6oStvnNXmczoIIy8xxn76w%2B3weF5tZ93%2FB8LTUx%2B%2FLmV%2BEdnLWsSKp%2BjhYCoKns3jOXUw1zKLOWA%2BImLT0t8uUw03pOHtW9rm2x11fVfkqddBmCtSpzpT4k2FrnTnVMovvRXutzKj80k1sPO6shVQTmqLToSHpwZyt17b8xizNQns7BMITatr4GOqUB3gIp7RzdF%2BHYdWC9XAMg8gMKud4kMmJyAt4i%2BReF0WPZLdS2Wzuux0%2FFANUPF6EZ9nN6f90RJX3B89ucPHGf1V12JmD%2BQE6j6m83HQ5kZJsbAcGhVon0sy%2B6aNZVqAaHVGoLnP7zRm88r2W3oa1dsjOnNP1UqE2GQuOujMhot8Gj1tZy0mr1xMmzDrgQhBqCRl17OBPK9p96LELxiG8Ybn6pLoN1&X-Amz-Signature=b189871b2ff26d3aec63fe74d7e8a708e00654a8e1db113343ae84521b4baa2d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSD6IONP%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T160712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCID1c60ROUxPDZXRA%2F0CZBTFkfOS9b3du7gzGESE4XCteAiEA%2BXB8hAYHTvAcXuQyZUR1%2Fk9Rc9UDHr795xt1tiq7n6Aq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDMkCg0hlCDVngJxKjCrcAxxTPJ04Sq4yJchjXHzHY6Pm7BpGFPNY1Vbr%2BHwekktfrTOJFfH9dmDCmuIdheDO669vd97E1HGMYP7tnlXlfjZu8RxpUAdfv81UQNq6IPNZeUeXs%2FoT8djrfkaTGBy25ScZ3svCaOHKZle4cr3Q8T2EYTZvLM8Zg%2BzZmMYa98k00caYMQ24iPtkPdYw2aOMuLZEZTWjGzKnIpmkjumhuncRBcGpy%2BytCA9BdxPc61sc6eS9EpxhN9VqZ%2FseHi4Sn7hAZFgnq470DqTPHf25xdfm%2BaQxKlh4tRy3L6OKCh7Ww9rIpIQXBXlNvUonJ4TRM%2FtewlwkiAT0lQujdy7ZfU4RCGuJCpw7heQ%2FwDok7iyTlLQZUa09DLpemgyJ20V1JHYF02jGDV2yk86gDq4%2FeKzNYGEHItX5ZfQckL%2FyIcDLM02UsyZkTQH6nrV9DxDwhbK4vkCn7Mkmq6oStvnNXmczoIIy8xxn76w%2B3weF5tZ93%2FB8LTUx%2B%2FLmV%2BEdnLWsSKp%2BjhYCoKns3jOXUw1zKLOWA%2BImLT0t8uUw03pOHtW9rm2x11fVfkqddBmCtSpzpT4k2FrnTnVMovvRXutzKj80k1sPO6shVQTmqLToSHpwZyt17b8xizNQns7BMITatr4GOqUB3gIp7RzdF%2BHYdWC9XAMg8gMKud4kMmJyAt4i%2BReF0WPZLdS2Wzuux0%2FFANUPF6EZ9nN6f90RJX3B89ucPHGf1V12JmD%2BQE6j6m83HQ5kZJsbAcGhVon0sy%2B6aNZVqAaHVGoLnP7zRm88r2W3oa1dsjOnNP1UqE2GQuOujMhot8Gj1tZy0mr1xMmzDrgQhBqCRl17OBPK9p96LELxiG8Ybn6pLoN1&X-Amz-Signature=a9b6be5f0a2ffbe8aff67d8620ea562a256673129d94add20580259a87523976&X-Amz-SignedHeaders=host&x-id=GetObject)

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

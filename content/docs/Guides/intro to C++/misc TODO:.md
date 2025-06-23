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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJNAQXO2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T091232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCID2UOi1h3sW6GfJ%2BSEr2Xt25h5HJPykQQgPB1lgALu3aAiEA4a9KDKOJlOeKgzDPt13dpvKbJUjOWO3BkBR0rr8gxuwq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDDk4V0FQq1eW0fddYCrcA84p0jf4QBaVy%2B9hkJkkIhBTkv44TfiB%2ByVydqPga90JHaowvbHGb8kTpx%2FKp%2FqbIHeuk%2FT%2F0TTnBNotMkb3%2FLKUr44Ilhx%2FY0TY1F6%2FxHxuGzKklRUeCEPCG%2F%2Bc3oLu4B51fTrFU0ua8xzPRaeIQncw%2Fa5FvfXw8NBcK4pi9SpuOALa%2Bx9hi%2FEJHqK4VEMhqqCSJ9TeNPo2UuSMOMl08L6M7JGyfS7y5je5fy5oNAwDloU1y%2B1Y5mab2WPosJ7FzgTvcFtz51BejbXUzbu%2FB86PHzYuoh0y0u3OtMxqmCUlYGVfuFZlVDjDgH0raxCYD3aMmHSUQsasLvvBirBDndf%2BuLbNhJGmmw7Ul0nIsS4ASC63oOygHnlNMLlHJqtfhxO4h55YyI5rYI4IHURBzEuYk9wpyvcRAmmt%2FbLQahxkkij%2BxtJxXQk8HdUcMwxa5uKUcVgwKIgdb8IxzLsoSuqIm%2FQhsqo6FW57utYQ8us8Q%2FrrsVlNUkvU5mO6k2O7o5Dl4tbm%2FL%2BpwKlyPgDBWzhMAQcBLakI4M%2BKNM0Z5WFYFIVG%2Bo3QwCWbaKmLspDqYuv%2F1LqjCWPkf0cePZuI9fXniFmMqW3YupJn4Gc835ic7HdsF4nE59Zl82ifMIXt48IGOqUBw2UDXETGzBanTNS2e1tcigYLFHSweMVC87sQu5jr8wcml01hwX9T%2FV2XliE4q53bEN%2FAyGICJtPWsLTXAGWW0BGd%2Bo8KtX3QrelSJgUpvsi8KZZV6Cpom0IXZZxZPWhVxgO5wDUBGGBY9yC4n5Sis2Xa7wFq1jMM5%2BEfwQkbWnb8dMv8Yl4IiK8U3hCym8IemXtFs7FXbNKTQAg6Xmq98RD%2BEMYW&X-Amz-Signature=08ac7b711087b252accae0569f1fd09885ffc02334f92dd214a9c082780aba82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJNAQXO2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T091232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCID2UOi1h3sW6GfJ%2BSEr2Xt25h5HJPykQQgPB1lgALu3aAiEA4a9KDKOJlOeKgzDPt13dpvKbJUjOWO3BkBR0rr8gxuwq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDDk4V0FQq1eW0fddYCrcA84p0jf4QBaVy%2B9hkJkkIhBTkv44TfiB%2ByVydqPga90JHaowvbHGb8kTpx%2FKp%2FqbIHeuk%2FT%2F0TTnBNotMkb3%2FLKUr44Ilhx%2FY0TY1F6%2FxHxuGzKklRUeCEPCG%2F%2Bc3oLu4B51fTrFU0ua8xzPRaeIQncw%2Fa5FvfXw8NBcK4pi9SpuOALa%2Bx9hi%2FEJHqK4VEMhqqCSJ9TeNPo2UuSMOMl08L6M7JGyfS7y5je5fy5oNAwDloU1y%2B1Y5mab2WPosJ7FzgTvcFtz51BejbXUzbu%2FB86PHzYuoh0y0u3OtMxqmCUlYGVfuFZlVDjDgH0raxCYD3aMmHSUQsasLvvBirBDndf%2BuLbNhJGmmw7Ul0nIsS4ASC63oOygHnlNMLlHJqtfhxO4h55YyI5rYI4IHURBzEuYk9wpyvcRAmmt%2FbLQahxkkij%2BxtJxXQk8HdUcMwxa5uKUcVgwKIgdb8IxzLsoSuqIm%2FQhsqo6FW57utYQ8us8Q%2FrrsVlNUkvU5mO6k2O7o5Dl4tbm%2FL%2BpwKlyPgDBWzhMAQcBLakI4M%2BKNM0Z5WFYFIVG%2Bo3QwCWbaKmLspDqYuv%2F1LqjCWPkf0cePZuI9fXniFmMqW3YupJn4Gc835ic7HdsF4nE59Zl82ifMIXt48IGOqUBw2UDXETGzBanTNS2e1tcigYLFHSweMVC87sQu5jr8wcml01hwX9T%2FV2XliE4q53bEN%2FAyGICJtPWsLTXAGWW0BGd%2Bo8KtX3QrelSJgUpvsi8KZZV6Cpom0IXZZxZPWhVxgO5wDUBGGBY9yC4n5Sis2Xa7wFq1jMM5%2BEfwQkbWnb8dMv8Yl4IiK8U3hCym8IemXtFs7FXbNKTQAg6Xmq98RD%2BEMYW&X-Amz-Signature=1a9760decea19f318f15b09dbd18ba5266a7ac47ad3368e2b7816cb178e7d487&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

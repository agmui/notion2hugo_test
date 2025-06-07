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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM4A2ZUE%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T070759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0950KX5Z7CUjaBOE4FWmNZrmWCs%2F%2Fvav7M7wpMkzZRgIhANPZ8mhICJ3UMz%2B89e4T7ueG0q0oygN3L4e6FnKNySeiKv8DCHAQABoMNjM3NDIzMTgzODA1Igy2xaoWsdgNk%2BT0mWoq3AMjx%2FL9BXZMcxmrPkyqg2zRNr7N%2FJ99qsLcsAiO38FeoPh5xsdQc7hqBMQc4a35AEolNlh32ltcvhQrDWGE1KaTRsp%2Bo5XYhKtIfynkXIEhSv0VVMa9zpeF2m9VYSujNTLDXaAG4zvcGUTd5KezJv9r1hb5tfEums2NoH8OfCG9hs%2FjIeUNr1js2m0OYVaBqXPTPzGJxUMgZ0vx6gNDxAn7NdPkH9MbtMUa%2Fr1Lr8tUv6rUF3TdX1%2FmPNXJyiixul7IJTdYKIWyjj9VJHnewfSGVSg4z7Ffb0M6vZ8cZY9%2BGccNNqyfBHlnyPMCvEg4lk8cPwIcLnh0%2Bjtqls%2F43SJOA%2BvXzmDqyHwM6E%2FK1o5v8Tn5nZCcMVyAokgYXLhr8Gq6us4c3AMZ9VdmpqwORTjwcYngIn6g3XQaDYYs7%2BpiXAqyCFK5fDdMrU5OFEepbl%2BeLftJEWdR4pj9A749oLLTwR4lAP0azKBcBJWIitYaym0lK7ONCuGbXOQWMzgDwkSgb3tj1Tm9hbTyaOr5Tfszt7gx4wFmCpH8UPavERdpCKXyA7NHJOVPJX60owE0FwdfJY1FJrft8koRxBTMRqJ2DcELPJUP0nE2JaiI59yUm8GdsCm7TYjLjiEDrTC1t4%2FCBjqkAZjTOAmb2DO%2BZ5pnXFd%2BYgvfzpl%2B9w7wiUsDx3aEYYb%2Bi9CpJ0lBusEj29uvN9IgFC8J7NekudCnoKD7MQ3CcdnLvz2J4FzxqVyDJWHXdYwpJwcme5U5xXYRacYVG5fZ%2BMFrQsPLoCekw4mQGqwh3b0I8%2BVI6OHJZqg55Mr9pt8tGciVKNqYnrTsUqwKlGuE60yhdE9bpN8rsDRU9OvQI2Dtlgk1&X-Amz-Signature=1955f156ce236522c6ba7a2888956a13ad0e3ceb1b40507aaf8fa08290ece76e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM4A2ZUE%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T070759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0950KX5Z7CUjaBOE4FWmNZrmWCs%2F%2Fvav7M7wpMkzZRgIhANPZ8mhICJ3UMz%2B89e4T7ueG0q0oygN3L4e6FnKNySeiKv8DCHAQABoMNjM3NDIzMTgzODA1Igy2xaoWsdgNk%2BT0mWoq3AMjx%2FL9BXZMcxmrPkyqg2zRNr7N%2FJ99qsLcsAiO38FeoPh5xsdQc7hqBMQc4a35AEolNlh32ltcvhQrDWGE1KaTRsp%2Bo5XYhKtIfynkXIEhSv0VVMa9zpeF2m9VYSujNTLDXaAG4zvcGUTd5KezJv9r1hb5tfEums2NoH8OfCG9hs%2FjIeUNr1js2m0OYVaBqXPTPzGJxUMgZ0vx6gNDxAn7NdPkH9MbtMUa%2Fr1Lr8tUv6rUF3TdX1%2FmPNXJyiixul7IJTdYKIWyjj9VJHnewfSGVSg4z7Ffb0M6vZ8cZY9%2BGccNNqyfBHlnyPMCvEg4lk8cPwIcLnh0%2Bjtqls%2F43SJOA%2BvXzmDqyHwM6E%2FK1o5v8Tn5nZCcMVyAokgYXLhr8Gq6us4c3AMZ9VdmpqwORTjwcYngIn6g3XQaDYYs7%2BpiXAqyCFK5fDdMrU5OFEepbl%2BeLftJEWdR4pj9A749oLLTwR4lAP0azKBcBJWIitYaym0lK7ONCuGbXOQWMzgDwkSgb3tj1Tm9hbTyaOr5Tfszt7gx4wFmCpH8UPavERdpCKXyA7NHJOVPJX60owE0FwdfJY1FJrft8koRxBTMRqJ2DcELPJUP0nE2JaiI59yUm8GdsCm7TYjLjiEDrTC1t4%2FCBjqkAZjTOAmb2DO%2BZ5pnXFd%2BYgvfzpl%2B9w7wiUsDx3aEYYb%2Bi9CpJ0lBusEj29uvN9IgFC8J7NekudCnoKD7MQ3CcdnLvz2J4FzxqVyDJWHXdYwpJwcme5U5xXYRacYVG5fZ%2BMFrQsPLoCekw4mQGqwh3b0I8%2BVI6OHJZqg55Mr9pt8tGciVKNqYnrTsUqwKlGuE60yhdE9bpN8rsDRU9OvQI2Dtlgk1&X-Amz-Signature=130ec1fa9123a11b84efb02c41cfb3c1ef6832c080a4d4ce0b1edcf5c5c6264f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

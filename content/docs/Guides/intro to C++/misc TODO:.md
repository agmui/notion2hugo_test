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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3NI2JFD%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T210108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQC1XerLW%2BfrdPQZ1j7ctR3X2uf6rYoZWBLpN1%2FGh1pWwwIhAPjFDaMl49XamwNLh1EAgGiONWrTlAjGIy0CwxxgBz1NKv8DCE0QABoMNjM3NDIzMTgzODA1IgxTIRyECg%2FrTer0Y7kq3APn98i%2FJ8YPqwrKd5%2FNVQNOCCbFZB7mNr%2Fq4mIluylMmAoqELHE5oRV%2B0g754CG6qgIX8uUOgyFTjJCSdILyFwSi9j79tB6BVV1i%2BMGoFtoL7fPHLx%2FOqZAe7s%2B7dQIPpr0zKxcheA56oZW7HYRBMu6nCg0qHhxMRt9eweW3FjM1WYBuT8ez48da%2BVniXxvjyEEJmqjHTo1Vszy0EmvdMVjnaQWkh0zm6TxsV9Na2%2Bynn84f0U6FhwfgpdiJ%2FDZxdKLwKGZd0qKuEW5W1QIt1AAOHII%2B47q3B7Sc%2F4onK48pWlnBqnuaYt0GaGSVaAxVjP6Un4SY7dRu5198Dsl9qxSxlkXrC9XJkR0xN20LcmMS291xUSez6kDwFv3IGhQnd14fdQi2zocya0rkvQcHY0kno%2FHY8AJGMs2dcDg%2BbmwAKfK%2Fp6LQdXWzd3sK0G6N8ZbkkyKbKZ8N8mdTo9yDQ2p3TNQun8QBoCLdlo%2Bf7NgZ4Xx1mpA234GXIUHyPoY%2F8xTkv0gEsePu5BuV5u22uV1UY3%2BkpyPvphFxhdxf4oyBaESgxPSrqKILha539b2Wib3ntNF8SavVVs2T%2B%2BHLiR0quiYMPV58cxFtwLjlODVZ9QYDt2rKjbyuVR5DTC8oK2%2BBjqkAYKKOP4xv8GIGWgjMjtdPWh1sv%2FJRboqHviFrF%2FXWKj75QnbN3YJQbYm30G4mp9xQYTQ7Uuba90srBzjF2WHQNGgZ%2BrcJVE89Wn6QTCun84eDi3L3YuTPyi9j%2BWekSxRvrKyNzXHV%2B%2B38e5fW4dVfW8XqB1p2hc8cg3sUjG8WsbRYle7J7OofPGGPLtJfHzoyWbKYwdRYxsX1t0hO7KWSMKCoSXm&X-Amz-Signature=b9c06812fd46d20796f39e6cbfceb8998c2a1720147248897e15e4753e310a1b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3NI2JFD%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T210108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQC1XerLW%2BfrdPQZ1j7ctR3X2uf6rYoZWBLpN1%2FGh1pWwwIhAPjFDaMl49XamwNLh1EAgGiONWrTlAjGIy0CwxxgBz1NKv8DCE0QABoMNjM3NDIzMTgzODA1IgxTIRyECg%2FrTer0Y7kq3APn98i%2FJ8YPqwrKd5%2FNVQNOCCbFZB7mNr%2Fq4mIluylMmAoqELHE5oRV%2B0g754CG6qgIX8uUOgyFTjJCSdILyFwSi9j79tB6BVV1i%2BMGoFtoL7fPHLx%2FOqZAe7s%2B7dQIPpr0zKxcheA56oZW7HYRBMu6nCg0qHhxMRt9eweW3FjM1WYBuT8ez48da%2BVniXxvjyEEJmqjHTo1Vszy0EmvdMVjnaQWkh0zm6TxsV9Na2%2Bynn84f0U6FhwfgpdiJ%2FDZxdKLwKGZd0qKuEW5W1QIt1AAOHII%2B47q3B7Sc%2F4onK48pWlnBqnuaYt0GaGSVaAxVjP6Un4SY7dRu5198Dsl9qxSxlkXrC9XJkR0xN20LcmMS291xUSez6kDwFv3IGhQnd14fdQi2zocya0rkvQcHY0kno%2FHY8AJGMs2dcDg%2BbmwAKfK%2Fp6LQdXWzd3sK0G6N8ZbkkyKbKZ8N8mdTo9yDQ2p3TNQun8QBoCLdlo%2Bf7NgZ4Xx1mpA234GXIUHyPoY%2F8xTkv0gEsePu5BuV5u22uV1UY3%2BkpyPvphFxhdxf4oyBaESgxPSrqKILha539b2Wib3ntNF8SavVVs2T%2B%2BHLiR0quiYMPV58cxFtwLjlODVZ9QYDt2rKjbyuVR5DTC8oK2%2BBjqkAYKKOP4xv8GIGWgjMjtdPWh1sv%2FJRboqHviFrF%2FXWKj75QnbN3YJQbYm30G4mp9xQYTQ7Uuba90srBzjF2WHQNGgZ%2BrcJVE89Wn6QTCun84eDi3L3YuTPyi9j%2BWekSxRvrKyNzXHV%2B%2B38e5fW4dVfW8XqB1p2hc8cg3sUjG8WsbRYle7J7OofPGGPLtJfHzoyWbKYwdRYxsX1t0hO7KWSMKCoSXm&X-Amz-Signature=25521b88e6673b58931c1765f330a612dbeeb26a5d28a637c14019dac3d503bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

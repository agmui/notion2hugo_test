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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV4XL24X%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T031141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsmi4a1um05fVWW4muO0BQ2XfeRjDc7I%2BynJ%2BJusNB%2FAIhAKgLn%2B59ilGNEJ7Cws3e%2BYqDFIXd3kspbHGaI6y5BMeRKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzfd2zxVLSjIkXSFosq3AMpJYqQYw7OZfC%2BRIbpjlWV54FxW9%2FlWBQxwvzz713rfEqpCo8V%2BQucfC65DoIZfWY7C5QlaCH1IjeQyFQ5f%2B03ovcDQZMP2M0t4orvHITXVC%2BwQQJ26LV8%2FuUnZWh%2FvzBWdqF22Km4oi1EcK6fD2rzvkvLKk2M0dgl0AA0kck6DycK4O6Hjh%2B1TM%2BzuOLhZbIIeB8Dls4gvQWzyXmgQ%2B6Z43V2g%2B6yzytZePFinooy89FhVse62LCb%2FkUFlyBx%2BllH60bcU%2FD%2BO%2F8mX4yP4ddf9x7OHkcIz7G2YnoiY9utYqai9W%2Bde5oN0srSlVPl8mQzUUcg%2FvDYhBYG3waRwCBy15oDGaXvL96oXt8X5TbUYQaL09UPQvN%2FVTuPQYDZPdCpnFqplN4YCSn8iGSzeEltLOups9hYaWPE%2BbYcXATUl8AitRlvGDBJ1MvmHSaKPpvDeZHNlqW14ua0Nnn%2FjfiT2cB44oc1BSJ0OwO%2FyC%2F3kZTL4FSD22kh4rsQHnmpylCPDaejsIX1bCSddeWQwNpIP8jsjMlSx3NFfRzpEkX3GNYl2htwt6sUzBT04fIbVvmUxSsYg%2F1eYjoRXnVOC0i1NUcmugBzesh2%2BsJYGe6hKOuRZCU8%2Fj3X%2F1LdzzCB7q%2B9BjqkAatuWzqnFa%2BDg3hmlkGBWwXOth8RQI1bL4JjvHI600ZDEuTIsxp77WQpZ%2Fbv6XHIPDItFRGSOalKDNjdn8n5nBXUUM6nAzFUBjygcqB95RvvKMGy3J4rG6qPr5gmDfNs%2FmdY68g9lbxq2lFw5gkDDqJoeKrMxYq%2Bph%2FUDtjR8u%2FSH9NMcrkkXbzAhhS09smjyp2n97Ww%2B5Z3Iial20Zc7hAbu%2FOA&X-Amz-Signature=9796eb8b5ebdfc377e7b778567b3dbb59554b1a60ed15c458850abd777e183a9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV4XL24X%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T031141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsmi4a1um05fVWW4muO0BQ2XfeRjDc7I%2BynJ%2BJusNB%2FAIhAKgLn%2B59ilGNEJ7Cws3e%2BYqDFIXd3kspbHGaI6y5BMeRKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzfd2zxVLSjIkXSFosq3AMpJYqQYw7OZfC%2BRIbpjlWV54FxW9%2FlWBQxwvzz713rfEqpCo8V%2BQucfC65DoIZfWY7C5QlaCH1IjeQyFQ5f%2B03ovcDQZMP2M0t4orvHITXVC%2BwQQJ26LV8%2FuUnZWh%2FvzBWdqF22Km4oi1EcK6fD2rzvkvLKk2M0dgl0AA0kck6DycK4O6Hjh%2B1TM%2BzuOLhZbIIeB8Dls4gvQWzyXmgQ%2B6Z43V2g%2B6yzytZePFinooy89FhVse62LCb%2FkUFlyBx%2BllH60bcU%2FD%2BO%2F8mX4yP4ddf9x7OHkcIz7G2YnoiY9utYqai9W%2Bde5oN0srSlVPl8mQzUUcg%2FvDYhBYG3waRwCBy15oDGaXvL96oXt8X5TbUYQaL09UPQvN%2FVTuPQYDZPdCpnFqplN4YCSn8iGSzeEltLOups9hYaWPE%2BbYcXATUl8AitRlvGDBJ1MvmHSaKPpvDeZHNlqW14ua0Nnn%2FjfiT2cB44oc1BSJ0OwO%2FyC%2F3kZTL4FSD22kh4rsQHnmpylCPDaejsIX1bCSddeWQwNpIP8jsjMlSx3NFfRzpEkX3GNYl2htwt6sUzBT04fIbVvmUxSsYg%2F1eYjoRXnVOC0i1NUcmugBzesh2%2BsJYGe6hKOuRZCU8%2Fj3X%2F1LdzzCB7q%2B9BjqkAatuWzqnFa%2BDg3hmlkGBWwXOth8RQI1bL4JjvHI600ZDEuTIsxp77WQpZ%2Fbv6XHIPDItFRGSOalKDNjdn8n5nBXUUM6nAzFUBjygcqB95RvvKMGy3J4rG6qPr5gmDfNs%2FmdY68g9lbxq2lFw5gkDDqJoeKrMxYq%2Bph%2FUDtjR8u%2FSH9NMcrkkXbzAhhS09smjyp2n97Ww%2B5Z3Iial20Zc7hAbu%2FOA&X-Amz-Signature=b0d4b750ce793534956f56a441a52983902e68eb799567056fc0b8642b83a751&X-Amz-SignedHeaders=host&x-id=GetObject)

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

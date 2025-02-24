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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTZTZYKZ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T220106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAURg4AlM0PK9w7VGON3OuIsbDwl2ljgVciRG3yq5K9ZAiEAuuLYn6MK5BOLrZCk3QxUo5kIwL7SlZdENJVymQAcgQgq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDOxhmYNM7J9EsziXVSrcA2l9rj5itadRyQt6nercUqFvoQlU9MZTpYEp44c5THUnuYGHeZZOeE4Meel4RaiXrbWLAQCulI5QZI0uSntFqcRg1tet%2BNgX1Kc9CfUmMoV8Gbi1aUhQzWtGuzXKdIr%2FevGu6aYzmP5ffviQgsS8%2BRBDxzCtAXsm76HiNsgGCF%2B5joM2D48QCfxUdpU9QaFVFvXdIbW7e3PIDiF3NZoLW7grOwa7arA7DYbgEfdVZZUviX8Brt9FozHp4V82eSrAwkjYbyt4HW5UELHTQdKIoIio%2B%2FM9FKEAO7kN5csffYxi2SvtjXJcCioI9Q6Y5tbmVkZZk0uucs7yH%2B28g74CP3TAI5%2B9J8TCjBIdPL2xL4AjwgEbX2gHb4ooexzc6WmLRJpUilzJPk%2BEvlx4qE6cZxie3fwZDGsznDp89RNAeuIelKuhndi5xWiNXcph%2BiZLMHEFfbjcPNCoIPovpv5F9BvM2BjBpslkrFk9v2Ek%2BcyQZ9RKXnLQ5bxZEewirfay6b7WV0c9S3xklniQuYIiPkwmVK%2F6ngwQpzLdYHJCsZXOMi8gdRg9xNysbg6uZ%2BdEz02n%2BhK0B%2FgF8LWjO0q9seYTN6b2yPH0gmTZdhakuFAgJZ1ybMOqZt%2FVTtwmMNPV870GOqUBF1fjsOCr0G5hJ32Yq8WkTNUvlypsHmzeckrgm21vwXQi%2FMLZSGphhWaK%2BQ4eB1PWwAGyYvbEtKPjAiNG2zRg5hUuD%2F2%2F1awjgF%2Bhr5H14v3cDhCh3pRi%2F%2BJvguDvVbedhwkOGQQlQbQ0pDYqA%2FfNIcnG3VmTPvjWZ0u9mJbjJj%2BG%2FtwNILlyBCPz1rcALKjyD2%2FaH6%2B3jk%2BqQILfCy3G3fllNx6S&X-Amz-Signature=965023f9d01a6134c48f802502256daf47906e1919a7edd075b8018ad41df87e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTZTZYKZ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T220106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAURg4AlM0PK9w7VGON3OuIsbDwl2ljgVciRG3yq5K9ZAiEAuuLYn6MK5BOLrZCk3QxUo5kIwL7SlZdENJVymQAcgQgq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDOxhmYNM7J9EsziXVSrcA2l9rj5itadRyQt6nercUqFvoQlU9MZTpYEp44c5THUnuYGHeZZOeE4Meel4RaiXrbWLAQCulI5QZI0uSntFqcRg1tet%2BNgX1Kc9CfUmMoV8Gbi1aUhQzWtGuzXKdIr%2FevGu6aYzmP5ffviQgsS8%2BRBDxzCtAXsm76HiNsgGCF%2B5joM2D48QCfxUdpU9QaFVFvXdIbW7e3PIDiF3NZoLW7grOwa7arA7DYbgEfdVZZUviX8Brt9FozHp4V82eSrAwkjYbyt4HW5UELHTQdKIoIio%2B%2FM9FKEAO7kN5csffYxi2SvtjXJcCioI9Q6Y5tbmVkZZk0uucs7yH%2B28g74CP3TAI5%2B9J8TCjBIdPL2xL4AjwgEbX2gHb4ooexzc6WmLRJpUilzJPk%2BEvlx4qE6cZxie3fwZDGsznDp89RNAeuIelKuhndi5xWiNXcph%2BiZLMHEFfbjcPNCoIPovpv5F9BvM2BjBpslkrFk9v2Ek%2BcyQZ9RKXnLQ5bxZEewirfay6b7WV0c9S3xklniQuYIiPkwmVK%2F6ngwQpzLdYHJCsZXOMi8gdRg9xNysbg6uZ%2BdEz02n%2BhK0B%2FgF8LWjO0q9seYTN6b2yPH0gmTZdhakuFAgJZ1ybMOqZt%2FVTtwmMNPV870GOqUBF1fjsOCr0G5hJ32Yq8WkTNUvlypsHmzeckrgm21vwXQi%2FMLZSGphhWaK%2BQ4eB1PWwAGyYvbEtKPjAiNG2zRg5hUuD%2F2%2F1awjgF%2Bhr5H14v3cDhCh3pRi%2F%2BJvguDvVbedhwkOGQQlQbQ0pDYqA%2FfNIcnG3VmTPvjWZ0u9mJbjJj%2BG%2FtwNILlyBCPz1rcALKjyD2%2FaH6%2B3jk%2BqQILfCy3G3fllNx6S&X-Amz-Signature=a58cabb5d6140b977e4335809b8b8f300a4f456c52035aa07f2268907c2c593c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

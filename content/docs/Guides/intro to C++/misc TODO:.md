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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KQW5QXV%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T033506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3itReZGVHyWkjDPvITMZEopxl21WvzAViTtIdd1SMNQIgXIPE9Wg8HjM4bPyed9B19EcntZ4yMFV8yyj48BYXQAwq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDPt9nHRvs1XTwIK7PSrcA5%2BgnWCzK%2F9Gz6PRAPHoeo4YilY%2FjfVJcuWsUtU6wdSx2DuDLMYXMrVsZvhDuLv6mWD1Lcs08gKEGEshWK7ADbNcT%2F0d9PluQBmLpDqoff%2BM%2FoY9vlnotNZwW5tVOHUt6SmxqZFuqLfGmkED2DeLoKfio62LlKxNFGuOzOsWhoZTDNNEM%2FQ0jCkEClviBJu%2FzOyXO8O73uDVP986Br%2B%2F%2FFrHGPm3e2oIaIqsL%2BonPU%2FcQChAzwuCyYChEILgmBpx6CJfOAPnzRYiN0PTL8zn6ErwVOfEr2GELBuoClAeunVNs8iXlfHnZ%2Bemw5Xa3dJjyI%2FbADzu01GjrdNTJAqkT9cct0BBeYcf54%2F5t8jah%2FI4UI52aW0fxXkVg%2FEkwJVYKjwXoVLtU0aXHQCavx1jsPTFe7MFEsEEyck8bk7h2b3gKGgDnw3nhCZmuKRXrNLs6Y6wGR7nlJQVgIrruWSn2kLwzYK%2By008eAwNCRnYDzSvtt0n%2FxPjaDYlSRYC6txF62u30%2F1E2gw%2BxZhjnMOlTBMgoO3jFcW1QzMInHlfr2wmBC9IcgvCKwNG9qANZJCsISY38iiQ4%2BVnXB7gRVJgSaU2eoAdb%2B15BC3YasfOCuNcknXSB7hOBhfXyw%2B%2BMJjC8MAGOqUB8IV8hhcZmSQ%2B6VQcTzSO1%2BCm2gi09gZSteygX9sgIOtFPwrNusC1H%2BJFzBXJE%2B3jv3FLvHxBcbrzdQOqWvocVOUuqoz%2FlbBkxaMYWw%2F80faytA0ABKVqoMDRG4FE1UU6BGWsxytoPBiHJqCIuTISDgHqn2Umb860GVZr%2BGzhgkzL%2F9di4xy%2FHmtpgulsmmjLA1BAu91Dja2UE2lyD1rWxOFk6l1k&X-Amz-Signature=d0801268f628930b481dafbe73518732044708b3cd530999c78fc8eb61924dc6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KQW5QXV%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T033506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3itReZGVHyWkjDPvITMZEopxl21WvzAViTtIdd1SMNQIgXIPE9Wg8HjM4bPyed9B19EcntZ4yMFV8yyj48BYXQAwq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDPt9nHRvs1XTwIK7PSrcA5%2BgnWCzK%2F9Gz6PRAPHoeo4YilY%2FjfVJcuWsUtU6wdSx2DuDLMYXMrVsZvhDuLv6mWD1Lcs08gKEGEshWK7ADbNcT%2F0d9PluQBmLpDqoff%2BM%2FoY9vlnotNZwW5tVOHUt6SmxqZFuqLfGmkED2DeLoKfio62LlKxNFGuOzOsWhoZTDNNEM%2FQ0jCkEClviBJu%2FzOyXO8O73uDVP986Br%2B%2F%2FFrHGPm3e2oIaIqsL%2BonPU%2FcQChAzwuCyYChEILgmBpx6CJfOAPnzRYiN0PTL8zn6ErwVOfEr2GELBuoClAeunVNs8iXlfHnZ%2Bemw5Xa3dJjyI%2FbADzu01GjrdNTJAqkT9cct0BBeYcf54%2F5t8jah%2FI4UI52aW0fxXkVg%2FEkwJVYKjwXoVLtU0aXHQCavx1jsPTFe7MFEsEEyck8bk7h2b3gKGgDnw3nhCZmuKRXrNLs6Y6wGR7nlJQVgIrruWSn2kLwzYK%2By008eAwNCRnYDzSvtt0n%2FxPjaDYlSRYC6txF62u30%2F1E2gw%2BxZhjnMOlTBMgoO3jFcW1QzMInHlfr2wmBC9IcgvCKwNG9qANZJCsISY38iiQ4%2BVnXB7gRVJgSaU2eoAdb%2B15BC3YasfOCuNcknXSB7hOBhfXyw%2B%2BMJjC8MAGOqUB8IV8hhcZmSQ%2B6VQcTzSO1%2BCm2gi09gZSteygX9sgIOtFPwrNusC1H%2BJFzBXJE%2B3jv3FLvHxBcbrzdQOqWvocVOUuqoz%2FlbBkxaMYWw%2F80faytA0ABKVqoMDRG4FE1UU6BGWsxytoPBiHJqCIuTISDgHqn2Umb860GVZr%2BGzhgkzL%2F9di4xy%2FHmtpgulsmmjLA1BAu91Dja2UE2lyD1rWxOFk6l1k&X-Amz-Signature=55396764e6f120d322322f7668c7e9651a24a72a647b36d6ec8dc390a0aaffb0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

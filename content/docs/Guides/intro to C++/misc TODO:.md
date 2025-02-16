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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R4PGAD4%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T140158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQD9oNqRuoWvKgXz%2Bp2V%2BDxGCjeBUqlDC%2FRppx4ar93C5AIgMUO9J%2FD6QbVvQIcjyhTGfeYS0AyK0BJm3%2B3upsQyqAIq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDGp3Wfxv4qwXXKNkdSrcA%2BltjwLatgYgBTmB3L1XiatKhUyOdCh3Z5ePqeztKtILuUDT8nBnOQea7leIHZOCKyItQBFONTl6uObQtkTk3Hsz4MXxOphqmDFOC30odg5lQfXR5ZV9RJye%2B%2F1bMLeYierkGaRw04zBsUWQlnHr%2B1Qqs6kriluK4tcJ9KnkQanitRKkMz501RmeXbNvCEymEBfSvumfJwooboWnk8AvNcOHfzCPlkPSNPhvcjpeD5RlhjKIqAu4IFenGjTjQwCYv57C6y%2Fpyxx2q2lSD7CXlBni3C93T37HKTCRSpi9F9b%2B7MwQNRVuv%2BYHX5laYWERdCkPU6GOnGsoH%2BeUYRjSq3SUaNtXixHNE6EgIkvR%2BMslNPzYJaK%2Fi9MwH59IXZCsIVj4YYm09Ye8LDqgRNi3cv1Ng1uSIJUrb%2Fyt8fTaAfDyVBZByXwgST2traCXdLKXY90vXfUEeGCqTSnz0lWt2gn4l5lbp7r1ljeXShuNz%2BRUf%2BnY0fMOivcRxQAmrduZWenuLZrCIfQJmahfP2d1L0qZoS39xB9mEjm751sh3JZ0d1GNkmp8t6wrmymKu8wVK46aiJ2zEDPbrGfte7MjHsRA7vuAYJV%2F3mw0bhFM7B9fvNKnjtkXZ7pwEExUMIKdx70GOqUB8D2D%2BOtCROM%2Bfav0JX4s1KufTHme1RpxEoOJ9%2BCZhMcB4ArgILDQHZDD1wZ4QWKAN5LMQf3%2B5XE%2BADWdtIbAK6yWxY0u9%2BX%2Fh92C5XocWMrOIsOoBB%2Fq1Z0Mz7TQ9LAcRwS4dQnw2AZZOAof%2BTOs3zYnT3QMh0MNsvBeZLbJfb%2FlovJ%2B4b1thNvWii0WbzBcC84%2B6SAd9rYL%2FyMLNbtim8wnUJq%2B&X-Amz-Signature=fcce2782e88924d37bd14d956dd33cd323a29cd065f8cbb055f0cafdf9904a00&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R4PGAD4%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T140158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQD9oNqRuoWvKgXz%2Bp2V%2BDxGCjeBUqlDC%2FRppx4ar93C5AIgMUO9J%2FD6QbVvQIcjyhTGfeYS0AyK0BJm3%2B3upsQyqAIq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDGp3Wfxv4qwXXKNkdSrcA%2BltjwLatgYgBTmB3L1XiatKhUyOdCh3Z5ePqeztKtILuUDT8nBnOQea7leIHZOCKyItQBFONTl6uObQtkTk3Hsz4MXxOphqmDFOC30odg5lQfXR5ZV9RJye%2B%2F1bMLeYierkGaRw04zBsUWQlnHr%2B1Qqs6kriluK4tcJ9KnkQanitRKkMz501RmeXbNvCEymEBfSvumfJwooboWnk8AvNcOHfzCPlkPSNPhvcjpeD5RlhjKIqAu4IFenGjTjQwCYv57C6y%2Fpyxx2q2lSD7CXlBni3C93T37HKTCRSpi9F9b%2B7MwQNRVuv%2BYHX5laYWERdCkPU6GOnGsoH%2BeUYRjSq3SUaNtXixHNE6EgIkvR%2BMslNPzYJaK%2Fi9MwH59IXZCsIVj4YYm09Ye8LDqgRNi3cv1Ng1uSIJUrb%2Fyt8fTaAfDyVBZByXwgST2traCXdLKXY90vXfUEeGCqTSnz0lWt2gn4l5lbp7r1ljeXShuNz%2BRUf%2BnY0fMOivcRxQAmrduZWenuLZrCIfQJmahfP2d1L0qZoS39xB9mEjm751sh3JZ0d1GNkmp8t6wrmymKu8wVK46aiJ2zEDPbrGfte7MjHsRA7vuAYJV%2F3mw0bhFM7B9fvNKnjtkXZ7pwEExUMIKdx70GOqUB8D2D%2BOtCROM%2Bfav0JX4s1KufTHme1RpxEoOJ9%2BCZhMcB4ArgILDQHZDD1wZ4QWKAN5LMQf3%2B5XE%2BADWdtIbAK6yWxY0u9%2BX%2Fh92C5XocWMrOIsOoBB%2Fq1Z0Mz7TQ9LAcRwS4dQnw2AZZOAof%2BTOs3zYnT3QMh0MNsvBeZLbJfb%2FlovJ%2B4b1thNvWii0WbzBcC84%2B6SAd9rYL%2FyMLNbtim8wnUJq%2B&X-Amz-Signature=758aedef4d9fc1b41ef859138cc67176912f2acfb827295ec66d07241f5ab055&X-Amz-SignedHeaders=host&x-id=GetObject)

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

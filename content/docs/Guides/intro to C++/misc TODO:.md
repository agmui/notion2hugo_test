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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFKZ63CA%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T150240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0nBzVgT5lBwCiz53JHTuyW%2Bs4JP15Cw4gVGahj%2FeYhQIhAOdrIWtvqFt82vdBcAfLPG98FgbxYbburZ9RBe7gGBqTKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7C80sKZyduYyN8Fsq3AO%2F6Tol8OUFqJPdlhi5NNax2OtvffQsj99ZaUV%2F6RLOGKCOns9ANEvAwyc0DTNwO6kyobyvuwYpVDZ85CR7ZdHWELMNuO7PLZ1yCOWkerLMdNlluqka%2BxrOgY4NaXBsW3p0SCJZq4Czog6he9PGK%2FJAvKY3hy3f7%2BKCYkzcc4GDtZCRMxDe%2F9IQSl6hfYhEL1vzUgwAwM%2Fhw1KFqGSh9BJGShobwgIWiz45OzTyReYLLUH9O7s4hRkTOb89qjPtUKApcRGh8D8BcHsiezuonAQnW6mjY03YwjXyitTlxM3ovBIiMV0Wo1S0egFj7%2FQOqZlKew5AqaxRZZ1iKw7lmDl4AvyCSM1wfyfDQd1XEpOES7%2BljBg%2FwLzc6r4K8dQclkrOHO8ooAEIq4leVZOM%2B8ww%2FSeK23F3h1E1J7ni5WB4hzCJTzwRpukUiWIyghtzj7bYklOjW%2FjdvV8Xg3gpGs2miqTciDghznLi5%2FP6ApbQe%2FB9d%2B2MSlYrKaFCe2%2BdaOCatMRnAIa4SsAJHz693k6OxGKNy7iEQAbL6HyKXhBu5oghMcBpeoBylrmjZiwJPfuqq1%2BBq5D1otxneCN8%2B9LVoiiAxyPIbYwFFp40lEkFkyXz2U%2BG4jzgaVCaIjC26ua9BjqkARp%2BUi1lFqf2AlNiVBMEEtJvdEPkYugI7X5CtAkasKaj4JJZOc8I36uYC49jtduu8EuK%2FHPQ0LyAfFCToKLlV1G8gXGcGtc%2BWyUCvez1CUZhhmjCGWVR4MbZzZGfKCzafektPMpzH2o92SCakuKsaYgEUqtDRxiSl4%2Bu7rQWoQSeOZjVAMHTLr622kqOkJ%2BgJqrGBK1gB5KJm%2B9qO%2BTbgRNY0MRX&X-Amz-Signature=7d63cf69d1d5da7ad0b3f5ead0104652cd08795fa40891fe263548d43e957b34&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFKZ63CA%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T150240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0nBzVgT5lBwCiz53JHTuyW%2Bs4JP15Cw4gVGahj%2FeYhQIhAOdrIWtvqFt82vdBcAfLPG98FgbxYbburZ9RBe7gGBqTKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7C80sKZyduYyN8Fsq3AO%2F6Tol8OUFqJPdlhi5NNax2OtvffQsj99ZaUV%2F6RLOGKCOns9ANEvAwyc0DTNwO6kyobyvuwYpVDZ85CR7ZdHWELMNuO7PLZ1yCOWkerLMdNlluqka%2BxrOgY4NaXBsW3p0SCJZq4Czog6he9PGK%2FJAvKY3hy3f7%2BKCYkzcc4GDtZCRMxDe%2F9IQSl6hfYhEL1vzUgwAwM%2Fhw1KFqGSh9BJGShobwgIWiz45OzTyReYLLUH9O7s4hRkTOb89qjPtUKApcRGh8D8BcHsiezuonAQnW6mjY03YwjXyitTlxM3ovBIiMV0Wo1S0egFj7%2FQOqZlKew5AqaxRZZ1iKw7lmDl4AvyCSM1wfyfDQd1XEpOES7%2BljBg%2FwLzc6r4K8dQclkrOHO8ooAEIq4leVZOM%2B8ww%2FSeK23F3h1E1J7ni5WB4hzCJTzwRpukUiWIyghtzj7bYklOjW%2FjdvV8Xg3gpGs2miqTciDghznLi5%2FP6ApbQe%2FB9d%2B2MSlYrKaFCe2%2BdaOCatMRnAIa4SsAJHz693k6OxGKNy7iEQAbL6HyKXhBu5oghMcBpeoBylrmjZiwJPfuqq1%2BBq5D1otxneCN8%2B9LVoiiAxyPIbYwFFp40lEkFkyXz2U%2BG4jzgaVCaIjC26ua9BjqkARp%2BUi1lFqf2AlNiVBMEEtJvdEPkYugI7X5CtAkasKaj4JJZOc8I36uYC49jtduu8EuK%2FHPQ0LyAfFCToKLlV1G8gXGcGtc%2BWyUCvez1CUZhhmjCGWVR4MbZzZGfKCzafektPMpzH2o92SCakuKsaYgEUqtDRxiSl4%2Bu7rQWoQSeOZjVAMHTLr622kqOkJ%2BgJqrGBK1gB5KJm%2B9qO%2BTbgRNY0MRX&X-Amz-Signature=28729ee9cdb7be1bfef3a1ea9c7f27d146966571a98caaa3432bb4a843547da3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

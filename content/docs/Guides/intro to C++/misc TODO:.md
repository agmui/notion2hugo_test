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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LKQLPQA%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCQb6WWYLwQlou%2BM1YQhBIxxqRX0pGCY%2FCFm%2FfQlqEaMAIgLkjiin5Q9BBzq6CXVZUuEd4mbUK0DsLNmfDoZkPITyYq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDGWM9rqJa7qPM40COircA7jstCaKnbv3Ac6CC91vH9MC5uvPcT1tBgosh9jZQgpOD3gaslaKdt5haLjATOaDItKpSOcQssEmytyYNRMbPhJliOLf4w3GT5nM6QKaFMq1WMXBMkcz3Mx0KX%2BTWe1r%2BFcZQlmdxiFCJqz20x6oFWWJM9qrQYerRzLuU0DcOli4iW%2F5%2FfeAqLieB9b5CSA%2BpJFMaBLdqqxq%2F5LmXcHpU%2FjEQRFWj416L%2Brv9ZnUopV17PREGQetadxPYntEBvqw%2BBvVyLot4vvTOaeYsTXe03vNRQuc2jv1b%2BHon7pV9oPAQ8GhbUKtATbrCAuAIdJOX9knnMMVlWlREzoLIUR9%2BXeMfFmNgp24j2e4LjXxcjvqBlx%2BM8zVq1YjG3ow0UmkFXyiGGCFX7YJOX%2Fw%2Fk2QOVgU9aoRrcGxoE0eR8edlorTwNsS70SzVBB%2BfNwjZtZKcwvafzdcX71u6ShFFQbbVbDq3toQyfoEVoYpyRSc4KosrxOlSyJV%2F92808N7sO0%2Bh4%2BncfGe9RaLofbd4ZMvcL61aoYDRjb6yS%2FokpaSXOqJG%2BST5pfiC2URGWXyxQNT6HWjR2pnRC%2FX1v3td4cNPVaywOYqMH6rexNM%2BjrQCIr%2BbXWuiyPTQlV8V3CpMOLk%2BL0GOqUBw0FDkqSPenCeJJwQQLpsyNhNMcQuHG4UZAIfjE3Srpl5ZW1xsbdiBqFavHzhR5nnta%2FNeYr6Ln4vdGfZ129EiGyPHzZOPDF%2FCFDHV2ktZyRmCITmw2nGe1wKZIUtAbhxqEnz%2BC6bbUfkDkCzzakhBQVOCuuoawq0eS1ri43URhA3yGF9IooepiNfPI%2F0jsaH5grOiRqf78v0VvSBnW8yWJal%2FCTK&X-Amz-Signature=3ce050e82c369d95eb007ef0e02e48d2847c1727fa20cc1bd58af862cfc9c6f2&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LKQLPQA%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCQb6WWYLwQlou%2BM1YQhBIxxqRX0pGCY%2FCFm%2FfQlqEaMAIgLkjiin5Q9BBzq6CXVZUuEd4mbUK0DsLNmfDoZkPITyYq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDGWM9rqJa7qPM40COircA7jstCaKnbv3Ac6CC91vH9MC5uvPcT1tBgosh9jZQgpOD3gaslaKdt5haLjATOaDItKpSOcQssEmytyYNRMbPhJliOLf4w3GT5nM6QKaFMq1WMXBMkcz3Mx0KX%2BTWe1r%2BFcZQlmdxiFCJqz20x6oFWWJM9qrQYerRzLuU0DcOli4iW%2F5%2FfeAqLieB9b5CSA%2BpJFMaBLdqqxq%2F5LmXcHpU%2FjEQRFWj416L%2Brv9ZnUopV17PREGQetadxPYntEBvqw%2BBvVyLot4vvTOaeYsTXe03vNRQuc2jv1b%2BHon7pV9oPAQ8GhbUKtATbrCAuAIdJOX9knnMMVlWlREzoLIUR9%2BXeMfFmNgp24j2e4LjXxcjvqBlx%2BM8zVq1YjG3ow0UmkFXyiGGCFX7YJOX%2Fw%2Fk2QOVgU9aoRrcGxoE0eR8edlorTwNsS70SzVBB%2BfNwjZtZKcwvafzdcX71u6ShFFQbbVbDq3toQyfoEVoYpyRSc4KosrxOlSyJV%2F92808N7sO0%2Bh4%2BncfGe9RaLofbd4ZMvcL61aoYDRjb6yS%2FokpaSXOqJG%2BST5pfiC2URGWXyxQNT6HWjR2pnRC%2FX1v3td4cNPVaywOYqMH6rexNM%2BjrQCIr%2BbXWuiyPTQlV8V3CpMOLk%2BL0GOqUBw0FDkqSPenCeJJwQQLpsyNhNMcQuHG4UZAIfjE3Srpl5ZW1xsbdiBqFavHzhR5nnta%2FNeYr6Ln4vdGfZ129EiGyPHzZOPDF%2FCFDHV2ktZyRmCITmw2nGe1wKZIUtAbhxqEnz%2BC6bbUfkDkCzzakhBQVOCuuoawq0eS1ri43URhA3yGF9IooepiNfPI%2F0jsaH5grOiRqf78v0VvSBnW8yWJal%2FCTK&X-Amz-Signature=96b2969968961aae4146114d81a95ce49c05b3696e4aa2525a7589a87d1c8067&X-Amz-SignedHeaders=host&x-id=GetObject)

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

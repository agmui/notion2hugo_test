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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677DZBPEZ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDXa63sFXITc%2B%2F5CXV2JCXw0apPB1WjH9vF3%2Bpkmj4d0wIgZxCJ1IM%2FJSATfkB1u30HgHCxCuyOnnY30MtOovuuul4q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDAG%2FL%2FVI%2B5WOWESwsyrcA%2FzEyfFAQkAevyVGoSp8gVztNS3ku3I9xGrwLP72Cz4E1i5yriOCWB9RSeaYf%2B4%2BcSvYPInJep5W6QyeTSrDrEB%2BBa5kT3sgjo06nYBlavIWM8SzJoeY9oYIaBK0%2FovBX0ieLMcgkX5cqUNvwSMF4uqqz5TIaGVfFKHo823OB3KeSO8Yfj1dFKSdf85LV7ebLWVh2XQltcPRQM1TP7gckGNyMsxTD1koRcKsfnAC3ijArHb1S%2B5JpsSFC8MmkoGXy%2Bqha9Dot2u0Mo78touO1J7zqHmD%2BxuXIioGyToZX4dKf%2FFsmQC80pWjLMXxnsdj9owl%2BQuMEJbVA1QUxIGNNUxq4IQfuMinaW7RQzwv%2FPhs92uH%2BoNOriiCymWb4EQev%2Fv9lARPO8pNOnC0cJ2BTZuawRhPhIHd3jaL9P8blVfecQ1t8euvlaIs2ZkQujVZ3NEd90%2FSveDNb3iQ7TTBSHly50zeczkSkNKyHuOvn00b55TUBPozzu0qk0nCSfbEoEenXmTFqRDxq6xGljdgvkitG%2BjDY4e4FB3fMVdoFL4iPSc%2Bz33l64ZoNNJYxYqGMxupX3g82%2BFjBQ5smHp8qe5AeNAQPGIgZSWkJuPVY32f8GJAcWL670xFvH7yMJPk%2F8QGOqUBP6XCR1GGuOvyCfglKXgWMC%2FAF4dntavo64rLLLjRYWTQG1WEdTFDtlNdWyN%2BPEtcsiaZh7d%2BKuhmznfm2DhuajScJCYC%2FcSyjkFi144TA8WmdTdD6nU8gZBiKUZr6zHqOan27sihMneaKRxx2NJ68UIozFyqH%2FMOsP6aUcaHV4eYJp%2FGkQ2z4NZzzTyZLh0Bs2BiQ%2F7vjA9%2FnGdVHlmgu2Hrioja&X-Amz-Signature=e6f399da4f5c6c6fd44a7b894dbf3440d04737601b278c79192206a2c1e4aeb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677DZBPEZ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDXa63sFXITc%2B%2F5CXV2JCXw0apPB1WjH9vF3%2Bpkmj4d0wIgZxCJ1IM%2FJSATfkB1u30HgHCxCuyOnnY30MtOovuuul4q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDAG%2FL%2FVI%2B5WOWESwsyrcA%2FzEyfFAQkAevyVGoSp8gVztNS3ku3I9xGrwLP72Cz4E1i5yriOCWB9RSeaYf%2B4%2BcSvYPInJep5W6QyeTSrDrEB%2BBa5kT3sgjo06nYBlavIWM8SzJoeY9oYIaBK0%2FovBX0ieLMcgkX5cqUNvwSMF4uqqz5TIaGVfFKHo823OB3KeSO8Yfj1dFKSdf85LV7ebLWVh2XQltcPRQM1TP7gckGNyMsxTD1koRcKsfnAC3ijArHb1S%2B5JpsSFC8MmkoGXy%2Bqha9Dot2u0Mo78touO1J7zqHmD%2BxuXIioGyToZX4dKf%2FFsmQC80pWjLMXxnsdj9owl%2BQuMEJbVA1QUxIGNNUxq4IQfuMinaW7RQzwv%2FPhs92uH%2BoNOriiCymWb4EQev%2Fv9lARPO8pNOnC0cJ2BTZuawRhPhIHd3jaL9P8blVfecQ1t8euvlaIs2ZkQujVZ3NEd90%2FSveDNb3iQ7TTBSHly50zeczkSkNKyHuOvn00b55TUBPozzu0qk0nCSfbEoEenXmTFqRDxq6xGljdgvkitG%2BjDY4e4FB3fMVdoFL4iPSc%2Bz33l64ZoNNJYxYqGMxupX3g82%2BFjBQ5smHp8qe5AeNAQPGIgZSWkJuPVY32f8GJAcWL670xFvH7yMJPk%2F8QGOqUBP6XCR1GGuOvyCfglKXgWMC%2FAF4dntavo64rLLLjRYWTQG1WEdTFDtlNdWyN%2BPEtcsiaZh7d%2BKuhmznfm2DhuajScJCYC%2FcSyjkFi144TA8WmdTdD6nU8gZBiKUZr6zHqOan27sihMneaKRxx2NJ68UIozFyqH%2FMOsP6aUcaHV4eYJp%2FGkQ2z4NZzzTyZLh0Bs2BiQ%2F7vjA9%2FnGdVHlmgu2Hrioja&X-Amz-Signature=8f403d0d5463cc1a9a4134a9a31d21c7054128c830576c20645d2f2edf692e98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

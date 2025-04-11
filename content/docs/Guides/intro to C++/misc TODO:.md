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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z3CXJPE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCgX1grow1mmrkKvESH2UUqi39fDx9zl05Cm79NlEyiXQIgS9cqt664gyB1mKh72wm6IBnw4MAUsjKpMfGQ%2BVMGH04qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZ2YdQ5GhS83HJ4gircA0wWYjm0LWVsZk%2BstZhchvx8CAj2Z0BFPEx2oggdG5Y6cYFk8wzVO1twVh5DYV7TnfAwa%2B3U7rKkkYazPhmVeLpwsZrh%2FYzsTb3Aa7UuNTflMPxM%2F3cMB8mhXdf0vS8ZvYSXyinT%2BwNdKfJ4Ytc6VRWfsGUN57phnoodTKyhpjXpR3fq3wF6IO9nHomWqk8EqJUSsZmTQfCcXrzpHw4iyA6MohLaAwa6EKAmrsbsKzV1o6HWMEbMkJTpGVireVa5K%2B3cz%2BQ%2FRDDMbSNsyK3QNfBeW5B1Ml7S0QyJhg8EQriH2VBwlat5rggE8NrRevQUpDgjIMLfL9yahPHAK2D1LUWE2rJAqn8RTnD9qZQg1lZHU4RVHZpb4gVktjnn77PrPoj7rqGCp29y%2F9m3SvGrWXOz70eFTkVhVCbqkC4mehZe8nEyX3AnxNPXqT%2Bd7XDP53j2NoxaJGk2o74RBSCb5sSD1oT7ajfypsQzMKgPDahRnSt1DGTve3XMceN6Nrzacm3kzr1ua7yis5uvm1fFiev5Nw0lNEpD%2FGyYb9q4yQd%2B2y9qq9w%2BCa4w9szS%2FhglfGHQFuX%2Byp4tdV20MvZ0WRDEWzwjehvQOBD05A3pmDBzR1eLWvcMntzoh5unMJrQ5L8GOqUBloUsuib2khIC4Prl7EyE6xfS140xu0UiaBB%2FEIjDp%2F0JG8rUzJSj53jD4ApsXDGNdmLKjIlkR%2BnzPdzTtWjK5hw2%2BcFCp4C2s%2F175pHuwrBznuKp7Ylp%2Bo5WaPaEdjwgDlcakHKhlSEvdMMlGo2R7UkXPTfHm0dcO%2Fpex6rSzVhu6NPdSQfeUY5K%2FdF7lKdRinWWwZLhHHi635bs1fyQ%2B2AynQfd&X-Amz-Signature=a65a221744d22c057a2250adeb232cee038cb4f98c5a748d5dcce5f3351e7ddc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z3CXJPE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCgX1grow1mmrkKvESH2UUqi39fDx9zl05Cm79NlEyiXQIgS9cqt664gyB1mKh72wm6IBnw4MAUsjKpMfGQ%2BVMGH04qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZ2YdQ5GhS83HJ4gircA0wWYjm0LWVsZk%2BstZhchvx8CAj2Z0BFPEx2oggdG5Y6cYFk8wzVO1twVh5DYV7TnfAwa%2B3U7rKkkYazPhmVeLpwsZrh%2FYzsTb3Aa7UuNTflMPxM%2F3cMB8mhXdf0vS8ZvYSXyinT%2BwNdKfJ4Ytc6VRWfsGUN57phnoodTKyhpjXpR3fq3wF6IO9nHomWqk8EqJUSsZmTQfCcXrzpHw4iyA6MohLaAwa6EKAmrsbsKzV1o6HWMEbMkJTpGVireVa5K%2B3cz%2BQ%2FRDDMbSNsyK3QNfBeW5B1Ml7S0QyJhg8EQriH2VBwlat5rggE8NrRevQUpDgjIMLfL9yahPHAK2D1LUWE2rJAqn8RTnD9qZQg1lZHU4RVHZpb4gVktjnn77PrPoj7rqGCp29y%2F9m3SvGrWXOz70eFTkVhVCbqkC4mehZe8nEyX3AnxNPXqT%2Bd7XDP53j2NoxaJGk2o74RBSCb5sSD1oT7ajfypsQzMKgPDahRnSt1DGTve3XMceN6Nrzacm3kzr1ua7yis5uvm1fFiev5Nw0lNEpD%2FGyYb9q4yQd%2B2y9qq9w%2BCa4w9szS%2FhglfGHQFuX%2Byp4tdV20MvZ0WRDEWzwjehvQOBD05A3pmDBzR1eLWvcMntzoh5unMJrQ5L8GOqUBloUsuib2khIC4Prl7EyE6xfS140xu0UiaBB%2FEIjDp%2F0JG8rUzJSj53jD4ApsXDGNdmLKjIlkR%2BnzPdzTtWjK5hw2%2BcFCp4C2s%2F175pHuwrBznuKp7Ylp%2Bo5WaPaEdjwgDlcakHKhlSEvdMMlGo2R7UkXPTfHm0dcO%2Fpex6rSzVhu6NPdSQfeUY5K%2FdF7lKdRinWWwZLhHHi635bs1fyQ%2B2AynQfd&X-Amz-Signature=e208a2f4673fde6b8ea108f263f6109040470611866b2d6bceb132580bfa6947&X-Amz-SignedHeaders=host&x-id=GetObject)

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

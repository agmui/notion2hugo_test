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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5E2NSAO%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIEgO0HYVxiEDa2If68kFSpKzgYbKcAlNWROxXPYyJaJ7AiEAvYHAOdckKqUsL3Qr77tGo7cBRjwc4BzaXWoSv1vjep4qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNmSY8t643dBeaGR4CrcA73xKBeSTiGxAmKNL22TdFcVDyFsiM6HKKe2ZcOm8ivpcxJHb9JT5cLjEy3qSIUHNEC0yMhc75bYfajZAVe0bLBmmKV%2BUC%2B5WTRotcDIC0Ouj2uNO0BlKXBNe7s6vwLUwAqoxFpQz0swklhMdbll7k%2BUXrrReL9YNd2Jg3Y9TOMaDoSjqCvW46MRMtyJLwyBvS6sOVviAYJLrCsjAO1m6CxdUtQhVtLu2gPuzzgeT0Jq2SQdbQunxmPFXJ87cRzxfezZB3cfilHIPHj0bZHP6LcEVK3paWZ56UoQmKS9qyttC8p%2FXJvpfokrS5Nct6q3MWBEoT0tbklWQE3t1M7eOOiOHAhqC8U4ou0ztEAubK7ysCQZlHNWJdoAewa6JccNsxAhy8eFf5LNHHgO7JrhxHc3A1tRK0EuqGaFKdUY5Xj%2BxbStsivChE4L5A%2FZ18AW5xb882xLl7%2F4KuXsal4t21wzg1G25oLMbCx0aXZrd4v0q%2FY5YTTpD%2Bif5Rb5lFr8eTORx9HuXJTTpuSwa%2BHq%2BHojRwpONPACOhKv994PFZetUfFqVSRNnBm7BIZqy9IKa%2Fbza%2FAg8VRkfHgXsk%2F%2BODHCU4GMxLCd3EinWDa8BOfattYw2XMkMOOXnbsvMK%2By4L8GOqUBqIuLsqfAR%2BJKRmd3SaXeI%2FWC1E9W4M%2Bn47hT2GqfXMJXRleCMVuVNWgEVtQPHuJZ9Pn1ImR7AsFOimzMFb6Ifaj36SOn47SFdtm1p5snubUPqIh8sRGiELsbUHaQNbXvMSTQzPIuXdFYFxoSPRfcUNR4FybLWKRhnilGhUTLKAM6n7rP9NLRecDL0NWCK4EgSNE42AGy6vx0YNPe8QmTVlzi9GhX&X-Amz-Signature=2db82a44deab5c00ea4854401a1398b4f0ee7c581b5d59e30ed6a7586d306777&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5E2NSAO%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIEgO0HYVxiEDa2If68kFSpKzgYbKcAlNWROxXPYyJaJ7AiEAvYHAOdckKqUsL3Qr77tGo7cBRjwc4BzaXWoSv1vjep4qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNmSY8t643dBeaGR4CrcA73xKBeSTiGxAmKNL22TdFcVDyFsiM6HKKe2ZcOm8ivpcxJHb9JT5cLjEy3qSIUHNEC0yMhc75bYfajZAVe0bLBmmKV%2BUC%2B5WTRotcDIC0Ouj2uNO0BlKXBNe7s6vwLUwAqoxFpQz0swklhMdbll7k%2BUXrrReL9YNd2Jg3Y9TOMaDoSjqCvW46MRMtyJLwyBvS6sOVviAYJLrCsjAO1m6CxdUtQhVtLu2gPuzzgeT0Jq2SQdbQunxmPFXJ87cRzxfezZB3cfilHIPHj0bZHP6LcEVK3paWZ56UoQmKS9qyttC8p%2FXJvpfokrS5Nct6q3MWBEoT0tbklWQE3t1M7eOOiOHAhqC8U4ou0ztEAubK7ysCQZlHNWJdoAewa6JccNsxAhy8eFf5LNHHgO7JrhxHc3A1tRK0EuqGaFKdUY5Xj%2BxbStsivChE4L5A%2FZ18AW5xb882xLl7%2F4KuXsal4t21wzg1G25oLMbCx0aXZrd4v0q%2FY5YTTpD%2Bif5Rb5lFr8eTORx9HuXJTTpuSwa%2BHq%2BHojRwpONPACOhKv994PFZetUfFqVSRNnBm7BIZqy9IKa%2Fbza%2FAg8VRkfHgXsk%2F%2BODHCU4GMxLCd3EinWDa8BOfattYw2XMkMOOXnbsvMK%2By4L8GOqUBqIuLsqfAR%2BJKRmd3SaXeI%2FWC1E9W4M%2Bn47hT2GqfXMJXRleCMVuVNWgEVtQPHuJZ9Pn1ImR7AsFOimzMFb6Ifaj36SOn47SFdtm1p5snubUPqIh8sRGiELsbUHaQNbXvMSTQzPIuXdFYFxoSPRfcUNR4FybLWKRhnilGhUTLKAM6n7rP9NLRecDL0NWCK4EgSNE42AGy6vx0YNPe8QmTVlzi9GhX&X-Amz-Signature=1858660f5627ace44a8ed85bdd22672463debc38b6c15477c11ee5d296bae5ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

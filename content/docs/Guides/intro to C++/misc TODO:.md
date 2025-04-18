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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4FH2FFY%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9ETdl%2BVpsGlKq0EdOoLjUU4jNmbAs6dlkqbxir8HweAiEA7eUHX2%2Bosm9XMUSXrCxbqZhj9YoKX9UjB74q%2F0nKL1gq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDI%2BABUViKg0m%2FjpLECrcA3doXAti7y%2B77Pbhe47hz33uxo7je8vkNCTE5EY5jPpPVlLpaTRhdoDjIJsDeJOHeALYqQwPMvjNWs7p11E79%2FHXuHejPY4ETRrvGui%2FPaKoxQaBuwfwfbI8vR%2B4EseKummicRYB4dSw5iIiJTfbCVH%2Bsk%2B%2Fmr1xmgeq9pdwNlaSH90YVhAMW6EpMKrLbK7aMXJ1vhA8H1MVT3wYqhk92JHcAwP73%2FCqgZVgmxtz7UlAndSidwnPMA2n%2BpYIhl0n%2BfX%2FeCsdeZ4IqOsgGACHNF6r4zrfv4AChgTwar%2B%2FbUcsdW%2B4FyrlL%2BJgM0qYvaYqUFDLWw6MIVS089k3aDtPi9qU8XPbPpTmV9yJYAfLZxrsy7GVMEs7BP6ZlmBd7Antwb848NhaObGy%2Buv3DA6MEuDTvp05zyhVsSn2DGRkdQZZWfpEJ6sWpZ8zYmvNAncmsO7PqG%2FEgvqMmx8sJdE%2FEw0Kl4Kr7rr7dTLFqocOv2jXJo7%2BtNPateoy1xEm3ZH6onPeeAP3yTUEgZlNuZcQiabIu72r9ySZvbquuUi1QYhKTc43D74nu3yFbrN%2B%2FdbFLqo%2F3VwBoNgQNb677skR3CZAfGaRwCNk2NIouWHFX30HNnJd8%2FYWk3Eg1hFfMIuOicAGOqUB4k%2FyS5zHVNOWYXRAJ4jl7hQaAyEbs81i01RzbdOPwtekd2ausR%2Fsj1gE%2BQL9NN%2BcuhBVYcEXVr%2FYIS8q8Pi7MxwsWV4viLEH7tYBQvqW72eQFoV%2F8G%2BJfSEjkHzbssjiuwLXzWlzLqIGaGFeLafyHvhpmJ4y02vvleimV2eLoQ2VR0Jl1KdnHhjZ4ULDrb2Lknnw4Gop63rdZWH0M9LWyltmb8ys&X-Amz-Signature=90cadf378ad7de4c6858aaeb586c6f7056c7118579764f2284f9f26f15f61cac&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4FH2FFY%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9ETdl%2BVpsGlKq0EdOoLjUU4jNmbAs6dlkqbxir8HweAiEA7eUHX2%2Bosm9XMUSXrCxbqZhj9YoKX9UjB74q%2F0nKL1gq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDI%2BABUViKg0m%2FjpLECrcA3doXAti7y%2B77Pbhe47hz33uxo7je8vkNCTE5EY5jPpPVlLpaTRhdoDjIJsDeJOHeALYqQwPMvjNWs7p11E79%2FHXuHejPY4ETRrvGui%2FPaKoxQaBuwfwfbI8vR%2B4EseKummicRYB4dSw5iIiJTfbCVH%2Bsk%2B%2Fmr1xmgeq9pdwNlaSH90YVhAMW6EpMKrLbK7aMXJ1vhA8H1MVT3wYqhk92JHcAwP73%2FCqgZVgmxtz7UlAndSidwnPMA2n%2BpYIhl0n%2BfX%2FeCsdeZ4IqOsgGACHNF6r4zrfv4AChgTwar%2B%2FbUcsdW%2B4FyrlL%2BJgM0qYvaYqUFDLWw6MIVS089k3aDtPi9qU8XPbPpTmV9yJYAfLZxrsy7GVMEs7BP6ZlmBd7Antwb848NhaObGy%2Buv3DA6MEuDTvp05zyhVsSn2DGRkdQZZWfpEJ6sWpZ8zYmvNAncmsO7PqG%2FEgvqMmx8sJdE%2FEw0Kl4Kr7rr7dTLFqocOv2jXJo7%2BtNPateoy1xEm3ZH6onPeeAP3yTUEgZlNuZcQiabIu72r9ySZvbquuUi1QYhKTc43D74nu3yFbrN%2B%2FdbFLqo%2F3VwBoNgQNb677skR3CZAfGaRwCNk2NIouWHFX30HNnJd8%2FYWk3Eg1hFfMIuOicAGOqUB4k%2FyS5zHVNOWYXRAJ4jl7hQaAyEbs81i01RzbdOPwtekd2ausR%2Fsj1gE%2BQL9NN%2BcuhBVYcEXVr%2FYIS8q8Pi7MxwsWV4viLEH7tYBQvqW72eQFoV%2F8G%2BJfSEjkHzbssjiuwLXzWlzLqIGaGFeLafyHvhpmJ4y02vvleimV2eLoQ2VR0Jl1KdnHhjZ4ULDrb2Lknnw4Gop63rdZWH0M9LWyltmb8ys&X-Amz-Signature=825f6f4c8def6c235fa79156a4314782ab6f1f13f4f7c6f822622660dda3ee07&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4EUM6KU%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T150911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCICUESFzZ3kxsklK8yS2WDIzsHMiH2w7VvREa3dcoPfqtAiEAwTWE%2FfqbF8y3prAnDHgxGMNvOFUPb6qFsnSyxgxBCf8qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK0Ci2MotCK5KmhDXSrcA2NNsAydw3pm44R5E1ZF0JpWA3wUWXCmAhz1KfCiM0wnXiw2qu7gOKZvVAl4LqK2o2MmlGmJSvxr%2F3jNP5SWht6uzCjOsVKWLqw6qXK16E%2Fq%2Fiu9Sv7RaRYAO6DrJkMGE%2FV3h9OPhDuLybyOcemEitHBs2wjj1BT8Vi9hGKaNx6ng2BRrHRumb41oAGv8xQpmJR5fk2gvgTm5pchUchTpZZNx2C3hBcNZFIrSYnF4T01eitVWgLQQv0xRF1e8Ja7LQHL0gJK4pBD8BuJdsVc%2FjLNTbDhJCQ6vrq2QT3tOAmdogOWs%2BR5fkCjef%2BnICgOqEWLm21VRkOqhtBeLdtt8J8y8iike3GEoe8An0BP8ThT5v8SGv68ugbiLMBVD8D0KvU2fvq3uYX2dVkX7guFet6qgZLGA8lqAMTkOdE0UmjBgkDDS709Jhqk0CvKTTSz5QGHIycN2qYMpk%2FwjnV1k0RznnPyAn0Njg4stDE70MY%2FM0%2B5Hd3g6OtxaWMcIRE3sD8lWpXGH9ZVoZDD8TkvrpJVJAhSRYkzLIIoH4RdAICAAy8h1qCAhJ1rKMyHZbmDZphsBzuexMnQJoCv3G1VM%2FEpPQFSrGDiBGqOFaJdQQvJVAzNFXMe54vhaqTNMOvDt8EGOqUB3miVj9mvd8br07nuJ1qML1P0jbzOKLsaYLcooXJd4HTLXe3RrmKVo2xX%2BohIPwCrcDjSk4OAl4bXEvoAHSQ4ZcNngprvHGV0LAgcdUiDkknMvn3VUZY%2FlKiaaBnwKIeIZCxKQ3HKxANDP5oWa23ntwhj8aAaE79tkJLxgHT7frnLWtHcxNY6jFA2T6Q8pTdu6kf8SAAYumIok2R6WqHPC65CK3TP&X-Amz-Signature=96139bdfc84e78f2b79b3c2db01a319ae33a85810af076aabf328d2658b64711&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4EUM6KU%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T150911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCICUESFzZ3kxsklK8yS2WDIzsHMiH2w7VvREa3dcoPfqtAiEAwTWE%2FfqbF8y3prAnDHgxGMNvOFUPb6qFsnSyxgxBCf8qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK0Ci2MotCK5KmhDXSrcA2NNsAydw3pm44R5E1ZF0JpWA3wUWXCmAhz1KfCiM0wnXiw2qu7gOKZvVAl4LqK2o2MmlGmJSvxr%2F3jNP5SWht6uzCjOsVKWLqw6qXK16E%2Fq%2Fiu9Sv7RaRYAO6DrJkMGE%2FV3h9OPhDuLybyOcemEitHBs2wjj1BT8Vi9hGKaNx6ng2BRrHRumb41oAGv8xQpmJR5fk2gvgTm5pchUchTpZZNx2C3hBcNZFIrSYnF4T01eitVWgLQQv0xRF1e8Ja7LQHL0gJK4pBD8BuJdsVc%2FjLNTbDhJCQ6vrq2QT3tOAmdogOWs%2BR5fkCjef%2BnICgOqEWLm21VRkOqhtBeLdtt8J8y8iike3GEoe8An0BP8ThT5v8SGv68ugbiLMBVD8D0KvU2fvq3uYX2dVkX7guFet6qgZLGA8lqAMTkOdE0UmjBgkDDS709Jhqk0CvKTTSz5QGHIycN2qYMpk%2FwjnV1k0RznnPyAn0Njg4stDE70MY%2FM0%2B5Hd3g6OtxaWMcIRE3sD8lWpXGH9ZVoZDD8TkvrpJVJAhSRYkzLIIoH4RdAICAAy8h1qCAhJ1rKMyHZbmDZphsBzuexMnQJoCv3G1VM%2FEpPQFSrGDiBGqOFaJdQQvJVAzNFXMe54vhaqTNMOvDt8EGOqUB3miVj9mvd8br07nuJ1qML1P0jbzOKLsaYLcooXJd4HTLXe3RrmKVo2xX%2BohIPwCrcDjSk4OAl4bXEvoAHSQ4ZcNngprvHGV0LAgcdUiDkknMvn3VUZY%2FlKiaaBnwKIeIZCxKQ3HKxANDP5oWa23ntwhj8aAaE79tkJLxgHT7frnLWtHcxNY6jFA2T6Q8pTdu6kf8SAAYumIok2R6WqHPC65CK3TP&X-Amz-Signature=dfae608f3e1c731966da251a2cbc1662d121fd3b42387cbf7645d8c3d91b6506&X-Amz-SignedHeaders=host&x-id=GetObject)

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

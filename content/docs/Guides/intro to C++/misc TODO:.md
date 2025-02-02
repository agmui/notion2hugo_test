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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEHN45SG%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T090342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB65rmE%2BCLDiMMRwhS%2FSegevt%2FNAS832tBQdIv9GAu3KAiEA9scvcQ85LnUam72aojniMvz30bmUzj6J92waJWGjvLoqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLXFHFf3ggkw3GY%2FLircA%2BpcRIvyKS4I4u8TeNnwL2hzxP8hCwpK8rukKTepWo8ruYRnzz5uPowi2hYvk24fI4EOG2ZtOJO5Uafp1mXKzp2NSs%2FfT0DsLf23Qp56H%2FgKfuv%2Fy0RBaTmMBfQtRdWrkWKKgJepWJ66dnFChAuS2JpQW9ezBgbac7oEdHaOxIKTKkg5HD1Ln7stMdGiE9LmxUA4K%2BqCsUOoC4wXgfIw51LkNo%2FLAndt5mocv0BuxfCb4kUx9I3M75wgRB7uItdGsDXdPIINewDhK8Equ0kOv52R0OGSub%2Fk1jmEER8D52diXwv8OoHqiwDIaKaVol3FlCI9HNRc3PL3ce3pzql%2BhqKq9MCb16q0RSJOyoeHhkb9iShjE3mCntfO8M7pFStEDOXBrY7gJGBDzTmCSse%2BWOFg47LjYdQmCxzjrE%2Fi2ni39OZjB0HyKuFOH%2BX8ExfcYcZ%2FTVFupsTVWLPfv3F0WMzNHpRKt6OY%2BT9JsEoidYWl8yO7VzHJGRajQ4agXSl8naX4PRCcMo3eQrf4kc8aRO%2FjuC8%2F0%2F6ZU2blqkLR%2B3YZFH3Wwe1XyaWW8tqWEEsFqg5g5jKcoYcWrWf99iFus1I7FU7S6bXW%2F1G96WQPQq1Y5JIez6RjNimesTpwMLud%2FLwGOqUBJdLCV%2FKVo7LdVY3z29BFMweOu8Xw91OhnKfXU4MqLGHbcyH3o70or2JsAOpDTCRd96hYddFRYUEdh31HlS9YGZ0GTdvRflKADC2hl088I0TlcuoBs3RmV27IG45Ix4eAdmyTpLdmuFh5LavQh%2BUiAycLtDwUX%2FjGavUsdPstAEi5r6apEtCuP4Y3TqHXdztv0pJazjwEMmLTnjS4sAy4XvsVQHR4&X-Amz-Signature=aa4e39edfdff05062581fb6b3e6f11c156f8e434bcab47de79843a4ba5b96b40&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEHN45SG%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T090342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB65rmE%2BCLDiMMRwhS%2FSegevt%2FNAS832tBQdIv9GAu3KAiEA9scvcQ85LnUam72aojniMvz30bmUzj6J92waJWGjvLoqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLXFHFf3ggkw3GY%2FLircA%2BpcRIvyKS4I4u8TeNnwL2hzxP8hCwpK8rukKTepWo8ruYRnzz5uPowi2hYvk24fI4EOG2ZtOJO5Uafp1mXKzp2NSs%2FfT0DsLf23Qp56H%2FgKfuv%2Fy0RBaTmMBfQtRdWrkWKKgJepWJ66dnFChAuS2JpQW9ezBgbac7oEdHaOxIKTKkg5HD1Ln7stMdGiE9LmxUA4K%2BqCsUOoC4wXgfIw51LkNo%2FLAndt5mocv0BuxfCb4kUx9I3M75wgRB7uItdGsDXdPIINewDhK8Equ0kOv52R0OGSub%2Fk1jmEER8D52diXwv8OoHqiwDIaKaVol3FlCI9HNRc3PL3ce3pzql%2BhqKq9MCb16q0RSJOyoeHhkb9iShjE3mCntfO8M7pFStEDOXBrY7gJGBDzTmCSse%2BWOFg47LjYdQmCxzjrE%2Fi2ni39OZjB0HyKuFOH%2BX8ExfcYcZ%2FTVFupsTVWLPfv3F0WMzNHpRKt6OY%2BT9JsEoidYWl8yO7VzHJGRajQ4agXSl8naX4PRCcMo3eQrf4kc8aRO%2FjuC8%2F0%2F6ZU2blqkLR%2B3YZFH3Wwe1XyaWW8tqWEEsFqg5g5jKcoYcWrWf99iFus1I7FU7S6bXW%2F1G96WQPQq1Y5JIez6RjNimesTpwMLud%2FLwGOqUBJdLCV%2FKVo7LdVY3z29BFMweOu8Xw91OhnKfXU4MqLGHbcyH3o70or2JsAOpDTCRd96hYddFRYUEdh31HlS9YGZ0GTdvRflKADC2hl088I0TlcuoBs3RmV27IG45Ix4eAdmyTpLdmuFh5LavQh%2BUiAycLtDwUX%2FjGavUsdPstAEi5r6apEtCuP4Y3TqHXdztv0pJazjwEMmLTnjS4sAy4XvsVQHR4&X-Amz-Signature=3b1e7f5ab2d897acf2ef4aafffcb5242592d671fda8353453f438ebe676c4ce1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4YG7WO3%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0EVYmw67ztaBraQ5D1ENnSvTNKfXq8uNLOCNPWxaosAiBs2yAbppZbDESXVukAoIRQLFZfMBSQA1BGzEZdZ5pefSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZNMe2%2FLi19XRoCG0KtwD6nRiIgrvnABfNK2RBDgDTw8SVmFjB9dek%2FjbTvFu7NqWU%2BjOLLrEocvKNMvqSexx6QzEWaLiAkjzBqKbFPcaxGxoQbHp5RbNQgOVkdkuWu3mD%2BsSI2kEuxvnNoononwBJqavcv7I%2FmfwjlOhm9MVfNnJ02THiH7x2ds93j6VpusXSiObAUVuofAqDRVBgvjZomUzQRaUS94a4iyHYzL%2Fliw3QTTO6OEvp8Quceu3BXXQUHlmGOc9YQcE%2Flqoh%2B4ss4MBrWJCkS8gLN9sYRArbVDeTlWRvKFTnCN6qpuRfvl%2FkTujFPnPii0Io3ypv5fGQno9iKUzalFDD3bGOMgaJn4Afymqq6Vsu8ulpu56EL8jSsDckVwMzXI0dgGgIkaDD6yeRdlZQ0dkqufE76Bfd0J%2F3CpAPobWU6D34dl7Xso4QMLPAD575ZE%2BjcDz77aLwUwFJlbbN%2F6co6eiQ8rN9Bno2lDloYdDQHVZSmBI5MMmCgHwZ84BB0tnMg1cCV8sSMtPtc5YK2ePUbjhkpcE%2FAhgMAdpLZ%2FBENos0JRm6tnDYb1TjWR6cpU0BPHwQ18VmpnaZxa5nep%2B19GpRCcrzd9gFOtGTugzIUMcClSCo6fGXVfcMVcIHlGCeacwkNf8wgY6pgFR%2FT99Na38jaPX3GEE%2Fe6Jl08oFoGHz7zePhLkaLNe7%2FomxGVlmWG7AfYoBNRNfSDoBid5arH6fKt%2BcGMXOHYeFSePjH9FCmYYrjl9pk0l316%2FNY5K%2BFW9LClTuOu9kfMrZwvWwgF7tGf8F%2F%2BPI0gPXASGINFvWKmpg2CsH%2BBVt6WR4mBm%2F71BgytE6aykXvH1FIRTnKCtTheS0Zf9TkA%2Ba4y5rGOq&X-Amz-Signature=ce22b321f41c5a6a2912d2f1c2e4954eb827558be8d7f514f65d2b587cf832f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4YG7WO3%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0EVYmw67ztaBraQ5D1ENnSvTNKfXq8uNLOCNPWxaosAiBs2yAbppZbDESXVukAoIRQLFZfMBSQA1BGzEZdZ5pefSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZNMe2%2FLi19XRoCG0KtwD6nRiIgrvnABfNK2RBDgDTw8SVmFjB9dek%2FjbTvFu7NqWU%2BjOLLrEocvKNMvqSexx6QzEWaLiAkjzBqKbFPcaxGxoQbHp5RbNQgOVkdkuWu3mD%2BsSI2kEuxvnNoononwBJqavcv7I%2FmfwjlOhm9MVfNnJ02THiH7x2ds93j6VpusXSiObAUVuofAqDRVBgvjZomUzQRaUS94a4iyHYzL%2Fliw3QTTO6OEvp8Quceu3BXXQUHlmGOc9YQcE%2Flqoh%2B4ss4MBrWJCkS8gLN9sYRArbVDeTlWRvKFTnCN6qpuRfvl%2FkTujFPnPii0Io3ypv5fGQno9iKUzalFDD3bGOMgaJn4Afymqq6Vsu8ulpu56EL8jSsDckVwMzXI0dgGgIkaDD6yeRdlZQ0dkqufE76Bfd0J%2F3CpAPobWU6D34dl7Xso4QMLPAD575ZE%2BjcDz77aLwUwFJlbbN%2F6co6eiQ8rN9Bno2lDloYdDQHVZSmBI5MMmCgHwZ84BB0tnMg1cCV8sSMtPtc5YK2ePUbjhkpcE%2FAhgMAdpLZ%2FBENos0JRm6tnDYb1TjWR6cpU0BPHwQ18VmpnaZxa5nep%2B19GpRCcrzd9gFOtGTugzIUMcClSCo6fGXVfcMVcIHlGCeacwkNf8wgY6pgFR%2FT99Na38jaPX3GEE%2Fe6Jl08oFoGHz7zePhLkaLNe7%2FomxGVlmWG7AfYoBNRNfSDoBid5arH6fKt%2BcGMXOHYeFSePjH9FCmYYrjl9pk0l316%2FNY5K%2BFW9LClTuOu9kfMrZwvWwgF7tGf8F%2F%2BPI0gPXASGINFvWKmpg2CsH%2BBVt6WR4mBm%2F71BgytE6aykXvH1FIRTnKCtTheS0Zf9TkA%2Ba4y5rGOq&X-Amz-Signature=ec765c7b0800a9c7866c37766c43387d5632e27887c375694e6c31ec5027bb67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

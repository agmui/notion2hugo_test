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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFRZILCF%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T150814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIEUTddmJcFYHXC%2BZe8UTkHAnVjyevrv1Kvne%2BLVlwge%2FAiEAlyfMugk%2FYQPhxszGTFwktGsk%2BSis3n5mfWgTweTqh8MqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJcLUXI79lNsunenvSrcA97OdsEmB3EXcrxT10eJfR%2FAMQyddkY93GzIrWWdKyNjm%2FK9fGx5SSV4oQtOiq1JPpV%2BnUTVvxTyxjBh%2FTX%2BEIyLNauzlPm36%2BpzjOznBPz9BXFYy5Q626n307iINNz7bwvW6r6uU3hAmb%2F3RDFnHj6KEUCoFAGcbctG8z5eaOkXMq9rVJZ6INykiualn%2FVUmlgDccGA1rC6T%2FZN0AkRGk9JrZvurcgz7DP4B9ofrZ5f4lSGxiRNYRcwC443beJs5GkHWkATHava5oWx2HVGmWT0LcWTEZ1FgEZS1lovqdzH%2BiNDFMuVccQhNRnarjUbq9kLeXAK3Zp%2BM0mUObvtIiuAXLYjo8Ggm1SKYYe%2BXACHX6wM%2FB%2BjMmqPHL5sOkS81twkvEvHE0pB%2Fb5T3URiOWiMUBsgw2YvRiRsbk1Xm6bOgoUMHy2t3iPQF7JS5WlyNKXITrSvzKvdOHnFFycf%2BafLnvAlWtlGTHZp%2BSGt2rsuYf3bl8%2FrGaQKBnXez25tpBm1Nw6B%2FUBHEJ%2FzGUqYrSr1re8aGKRbdb0DfBhOcX9WXbtZVlBqnXqvBRjyPaoU5GZq3zf5R6aczvt9evAUxqnfyhnBYaTPs%2FKRmsTNuF87GCkp8gPITcLh7bjXMPay0r0GOqUBFbrtr2D4Eb8BnfN5wofmC0WPbGdJ2pzPaMzF31%2BCszJ20y1GNA5VcrZL8vEagJa49KLHF7uO4ygAWce7%2BkYgXgo9ARno%2BWajD0W9KnJDnL4ceet8EMn3SB1Kpi%2B80IGpidigkJxfxQXUhgTeGyw37Jo%2BY%2FntqGOcbhjsHItOlhZQgxDaIpl64pxgG8ww%2BcC9LQw%2FvI8xV2IqUHGnyCPR3OpNwq0O&X-Amz-Signature=40b17d54fdacc83afe3a514a318c79f760db024e51fb80b0f404fd3eb2727991&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFRZILCF%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T150814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIEUTddmJcFYHXC%2BZe8UTkHAnVjyevrv1Kvne%2BLVlwge%2FAiEAlyfMugk%2FYQPhxszGTFwktGsk%2BSis3n5mfWgTweTqh8MqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJcLUXI79lNsunenvSrcA97OdsEmB3EXcrxT10eJfR%2FAMQyddkY93GzIrWWdKyNjm%2FK9fGx5SSV4oQtOiq1JPpV%2BnUTVvxTyxjBh%2FTX%2BEIyLNauzlPm36%2BpzjOznBPz9BXFYy5Q626n307iINNz7bwvW6r6uU3hAmb%2F3RDFnHj6KEUCoFAGcbctG8z5eaOkXMq9rVJZ6INykiualn%2FVUmlgDccGA1rC6T%2FZN0AkRGk9JrZvurcgz7DP4B9ofrZ5f4lSGxiRNYRcwC443beJs5GkHWkATHava5oWx2HVGmWT0LcWTEZ1FgEZS1lovqdzH%2BiNDFMuVccQhNRnarjUbq9kLeXAK3Zp%2BM0mUObvtIiuAXLYjo8Ggm1SKYYe%2BXACHX6wM%2FB%2BjMmqPHL5sOkS81twkvEvHE0pB%2Fb5T3URiOWiMUBsgw2YvRiRsbk1Xm6bOgoUMHy2t3iPQF7JS5WlyNKXITrSvzKvdOHnFFycf%2BafLnvAlWtlGTHZp%2BSGt2rsuYf3bl8%2FrGaQKBnXez25tpBm1Nw6B%2FUBHEJ%2FzGUqYrSr1re8aGKRbdb0DfBhOcX9WXbtZVlBqnXqvBRjyPaoU5GZq3zf5R6aczvt9evAUxqnfyhnBYaTPs%2FKRmsTNuF87GCkp8gPITcLh7bjXMPay0r0GOqUBFbrtr2D4Eb8BnfN5wofmC0WPbGdJ2pzPaMzF31%2BCszJ20y1GNA5VcrZL8vEagJa49KLHF7uO4ygAWce7%2BkYgXgo9ARno%2BWajD0W9KnJDnL4ceet8EMn3SB1Kpi%2B80IGpidigkJxfxQXUhgTeGyw37Jo%2BY%2FntqGOcbhjsHItOlhZQgxDaIpl64pxgG8ww%2BcC9LQw%2FvI8xV2IqUHGnyCPR3OpNwq0O&X-Amz-Signature=0b941d9a0c796dcad7762adb90e21526d4acfaea152f8c1fffd361318471e993&X-Amz-SignedHeaders=host&x-id=GetObject)

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

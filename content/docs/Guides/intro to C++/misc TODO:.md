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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TER7D6N%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJlf0uEWyN0KSZfunH9rrtIuVT8fkBUGOBpp8X0Y3RCAIgDGGxDjpdCXzRfo8dSOoOXU7TZ0J2KaS04%2Brp%2FswhVPYqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMmfC7LdHYKOyoiSircA6k8iYJatbFB6YFk4thkHJmCoF98hnFFm7IZ6o9Rkh1r5CW4iKFD5L2mk8Qz8fVPGPfYHpMzbMSXOfh9AfsgriOtRQ6EcLDLhEc0sABiEmKvDucjDL57IQfEsQAleqC2qU7wGW6y3p06K8T4vUHUEkljOLgkL97ply7MKrw3A2HDvZNwnG82PV4MMdzqrrrftuF68zATdxhTjOg0nfR3CWVe8ZntGrQVty3SLo7B%2B9yWX7aPUDenGUvq4vGBs5q7TW9hQHd0sVjX8hOR0seb4AFgRJ7CLvzCOs9AWspLbDmsACqayeMRMyX9MewiYQLyFOkdF9hE8WYbcNlsb9TmS%2BBzjhBZ2%2BnlZV77odVqhoj%2B%2F69vaJeN19zein0wimw%2B3%2FNJTaY%2BUHxy3SyiBSTOJKS1dZMOdM%2F9k2b5qnQZ2bMAq52mMPLrPNrAirmE7z%2FBoDL1J3xi8x8%2FvIXcQBV4KnueO8iYGos3KwoUxuZLvU0U384LR99Pfab%2BEIav0fr8piJrmB9GFzcsxr%2FHySNvT%2FuZR1fU15xfxbZzUDQNt5vlqVyDz2HKG8V0L25WBD3OTjcoos3DrqSBGPxmc4CCPjwN5TCJYqNsRfR%2FO1ouKvL02yGNUO1YFCmnIrVsMPOdrcQGOqUBzZkdk8RL5ryJAX4S5nsB821u5D8xep4QmGIpC2eQi8K%2FWWTXsfyGLxWl788DRhaQplfVI6xDhk5yQR2dwgarq0YOKu%2Fwj6wLPzI3iPc85lrB%2Fa67F196eHFXEjbkq7Mn%2FdwLjfcuLqUUZpgrm5tBx8OSXje%2Fco2p16C9%2Fig16cRzuUy4Cyu20iW6OUjAInbjKiQu9w7Isyykq3Y58PrxJklUJv7J&X-Amz-Signature=e2d74f9dffd6b8ede16aed6ca702f7ae7aa1d2e1028feeea17291ce5c0905f3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TER7D6N%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJlf0uEWyN0KSZfunH9rrtIuVT8fkBUGOBpp8X0Y3RCAIgDGGxDjpdCXzRfo8dSOoOXU7TZ0J2KaS04%2Brp%2FswhVPYqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMmfC7LdHYKOyoiSircA6k8iYJatbFB6YFk4thkHJmCoF98hnFFm7IZ6o9Rkh1r5CW4iKFD5L2mk8Qz8fVPGPfYHpMzbMSXOfh9AfsgriOtRQ6EcLDLhEc0sABiEmKvDucjDL57IQfEsQAleqC2qU7wGW6y3p06K8T4vUHUEkljOLgkL97ply7MKrw3A2HDvZNwnG82PV4MMdzqrrrftuF68zATdxhTjOg0nfR3CWVe8ZntGrQVty3SLo7B%2B9yWX7aPUDenGUvq4vGBs5q7TW9hQHd0sVjX8hOR0seb4AFgRJ7CLvzCOs9AWspLbDmsACqayeMRMyX9MewiYQLyFOkdF9hE8WYbcNlsb9TmS%2BBzjhBZ2%2BnlZV77odVqhoj%2B%2F69vaJeN19zein0wimw%2B3%2FNJTaY%2BUHxy3SyiBSTOJKS1dZMOdM%2F9k2b5qnQZ2bMAq52mMPLrPNrAirmE7z%2FBoDL1J3xi8x8%2FvIXcQBV4KnueO8iYGos3KwoUxuZLvU0U384LR99Pfab%2BEIav0fr8piJrmB9GFzcsxr%2FHySNvT%2FuZR1fU15xfxbZzUDQNt5vlqVyDz2HKG8V0L25WBD3OTjcoos3DrqSBGPxmc4CCPjwN5TCJYqNsRfR%2FO1ouKvL02yGNUO1YFCmnIrVsMPOdrcQGOqUBzZkdk8RL5ryJAX4S5nsB821u5D8xep4QmGIpC2eQi8K%2FWWTXsfyGLxWl788DRhaQplfVI6xDhk5yQR2dwgarq0YOKu%2Fwj6wLPzI3iPc85lrB%2Fa67F196eHFXEjbkq7Mn%2FdwLjfcuLqUUZpgrm5tBx8OSXje%2Fco2p16C9%2Fig16cRzuUy4Cyu20iW6OUjAInbjKiQu9w7Isyykq3Y58PrxJklUJv7J&X-Amz-Signature=00a0fe1af1072cfc24d457904a15d2c013c66a9da18d008ef7f8383e16e993a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

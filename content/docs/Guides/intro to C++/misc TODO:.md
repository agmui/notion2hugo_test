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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW7MJT4G%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIEwfEE4yMIS73U3%2BODnL%2FJzQRN8A%2Bsqsu%2FRyiDxSflPaAiEAvgFuOckBD26F%2BiZUqZaX%2F2Bsz8GZjKJlBhMOyzBqzj4qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWemTqkpEY2frb1XSrcA%2FpPVbzsKVGu3ukDHchsWioIqWP5idWAWW19rktmqw%2B1sBt2IYXT1AhQH3lYjlb6wJ71YBuyrbFy%2Bkx%2B9KIf43nse4AY5zYLt58LuylxYeJAzWMnipTi6LH1V6hjStmvcN48nw06t1Jo2dkVqIm9nnu4UCq6pYSmU04%2F01q23jSWxePKBWjPBjv%2BBEhYq9Ujdh3TYOBSVrdYGOBL%2BVIIFQOvV%2FH8R864UohVUTl50E2%2F09cGwm5bLHLdPImCaeZ%2F72rt3yKsvZUDCann510ic8XMOCDi7yBVcso%2Ba4E0wPrsFWFwsKGJ69Z1jYkoTB%2Fd7fdovOixRCogd6UkAGFXAvxhp%2BVGEQ1aWQfkzxCbEwFKf3%2BmnNtwg72KDBrAxSbNGKq7UfOBIbT%2BpPVn867NrrMDEJ7GxVGdLKYxQPj6DI0uI4CIvFEpW9n9KNo2uu2lCkAKofgSgm0CtnHR4NVfrCVE%2BpkWj1XdonRlXMOuc5l4u1oUVklpmc0SL%2FEe6TYVKfJSgxoZBFKDDZpGwW8AQpoLGEViKQGtFeFb5LV0dBsJ6bCYN7PzWWgqdvt4YMjzdHwozlNNCmlesbv%2FWPOfPPhxdKMcJCFXLnh1oq%2BrAi7UST%2BgBdcAvGIx3NswMOm71r0GOqUB7PwCN7KKspEcj6oZEXZho4BPrFDo47rOWh8VW2JjGTG8Ae0nhcMO661nUQADhqqaFj6LV7idphajMqZIkCWaCLFkV%2BYe7P1R3NrrdNi4AoL8ZtLxX7cuFyLoS75VF%2BAmTLGDlnTS5FnWSCOZjOP610E4Bw%2BCI6htokpKmDc9QIw7Nr3J8%2FcXPSwNozpo15pCLJM2m8tG5lZDRod9syV4mCfG%2F9Ya&X-Amz-Signature=af2516459e3884067238780b8c615f41aa30b0611fbfff8576647f1f8f97bab9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW7MJT4G%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIEwfEE4yMIS73U3%2BODnL%2FJzQRN8A%2Bsqsu%2FRyiDxSflPaAiEAvgFuOckBD26F%2BiZUqZaX%2F2Bsz8GZjKJlBhMOyzBqzj4qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWemTqkpEY2frb1XSrcA%2FpPVbzsKVGu3ukDHchsWioIqWP5idWAWW19rktmqw%2B1sBt2IYXT1AhQH3lYjlb6wJ71YBuyrbFy%2Bkx%2B9KIf43nse4AY5zYLt58LuylxYeJAzWMnipTi6LH1V6hjStmvcN48nw06t1Jo2dkVqIm9nnu4UCq6pYSmU04%2F01q23jSWxePKBWjPBjv%2BBEhYq9Ujdh3TYOBSVrdYGOBL%2BVIIFQOvV%2FH8R864UohVUTl50E2%2F09cGwm5bLHLdPImCaeZ%2F72rt3yKsvZUDCann510ic8XMOCDi7yBVcso%2Ba4E0wPrsFWFwsKGJ69Z1jYkoTB%2Fd7fdovOixRCogd6UkAGFXAvxhp%2BVGEQ1aWQfkzxCbEwFKf3%2BmnNtwg72KDBrAxSbNGKq7UfOBIbT%2BpPVn867NrrMDEJ7GxVGdLKYxQPj6DI0uI4CIvFEpW9n9KNo2uu2lCkAKofgSgm0CtnHR4NVfrCVE%2BpkWj1XdonRlXMOuc5l4u1oUVklpmc0SL%2FEe6TYVKfJSgxoZBFKDDZpGwW8AQpoLGEViKQGtFeFb5LV0dBsJ6bCYN7PzWWgqdvt4YMjzdHwozlNNCmlesbv%2FWPOfPPhxdKMcJCFXLnh1oq%2BrAi7UST%2BgBdcAvGIx3NswMOm71r0GOqUB7PwCN7KKspEcj6oZEXZho4BPrFDo47rOWh8VW2JjGTG8Ae0nhcMO661nUQADhqqaFj6LV7idphajMqZIkCWaCLFkV%2BYe7P1R3NrrdNi4AoL8ZtLxX7cuFyLoS75VF%2BAmTLGDlnTS5FnWSCOZjOP610E4Bw%2BCI6htokpKmDc9QIw7Nr3J8%2FcXPSwNozpo15pCLJM2m8tG5lZDRod9syV4mCfG%2F9Ya&X-Amz-Signature=61ec3faa9ea539da8f46eb078a6adb5b61c66619638b29572719e80db0e6be08&X-Amz-SignedHeaders=host&x-id=GetObject)

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

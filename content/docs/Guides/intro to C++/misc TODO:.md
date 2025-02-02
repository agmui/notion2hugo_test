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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFA3O6UZ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T031106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwbiT4QAUdRKxWpnU8w%2BlHXdYfANRDVGBStIrr3UUNSAiEAr9SkMR4uDdk%2Fj86dZl3Yl1YMGdJBvtN7MUDrDIQjS3cqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSidKtuwpYpGrzmVyrcA17J1diIaPda1djdfmzN3lhj3PD5NgQOEKsR8FXQqWQ7c4R7wqnJv%2FX9mqq6pCAdhiwTaOaAeg%2BsLtsTVVXO7OurcW9r1x74KgdPeCjcP%2FAtBqrOXFRf5ZUlPgt4%2FrVjdZ36Wpx%2B8blMh12f6brT9Ij25o81K1LhHQfqXLTH0PHTxR19XzoDrJTvGBbePqFFGm%2Fh0pZgWRxoZy7qa1EkSi9sBzVSbfjml92%2BFtKhpWD%2FnfG%2FRINAtkJ4N9kdJds7jV6hRydGny5uZo1PDGxJEJPgR88MoQsjXCTyfrmIfiUp4GFqWYlmynWZzq5mmGmnZRPB%2B6YHLSB6KPjxg%2B5CBF60wfGBowwSlssVtcFxsLt%2F2VhrHFgkO0YUNbvBzDNR%2FLVQwSVIoijri1DbfTAcVp82qLWxdUocWuiLDom7KxBrvS3%2B6W5iBoVeEsf7ycofOTeGDubUi4G%2ByDYlHd4vebBOB8PruVM33c6b%2FtMVeYTaLSMw8IJQK%2BtwpFD9NbvriX0aaH0FuESV%2Fg5KsMv1jbOoP8ncHEP49ClbRrvpQERbB5v727jwqZHXr9v7cbC8ozp7%2BYUGkZRg20R0ZbQOXoVJlqAEoGXxT8gRfAsZedSPGk2MVkNk91%2Fq7aNkMLK8%2B7wGOqUByBPh4MtgdHAOSNDfE9pbHXikMp%2F6UiC8JntNJ5KZ2%2BaT1ADiIO3lwUTGEdClsYmkHVdbrwV4c0QzUy5024RI83EB2E6ow9chSCZvEv05mbNYc9wQjy4L9P1aZrQzbpUDEiPpMy3Kh7viosFDbqfAP4ABYACxUAUM3E6Ex8rKTqJbTC%2FzOtvqwW9JkE%2F8OMw2fvAO2XF0liGIbLyp8pUMEQMRiZly&X-Amz-Signature=c1afae80c082965195a3358f97a8806f94a54083f7a509775e26adb7bcbbe3e0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFA3O6UZ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T031106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwbiT4QAUdRKxWpnU8w%2BlHXdYfANRDVGBStIrr3UUNSAiEAr9SkMR4uDdk%2Fj86dZl3Yl1YMGdJBvtN7MUDrDIQjS3cqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSidKtuwpYpGrzmVyrcA17J1diIaPda1djdfmzN3lhj3PD5NgQOEKsR8FXQqWQ7c4R7wqnJv%2FX9mqq6pCAdhiwTaOaAeg%2BsLtsTVVXO7OurcW9r1x74KgdPeCjcP%2FAtBqrOXFRf5ZUlPgt4%2FrVjdZ36Wpx%2B8blMh12f6brT9Ij25o81K1LhHQfqXLTH0PHTxR19XzoDrJTvGBbePqFFGm%2Fh0pZgWRxoZy7qa1EkSi9sBzVSbfjml92%2BFtKhpWD%2FnfG%2FRINAtkJ4N9kdJds7jV6hRydGny5uZo1PDGxJEJPgR88MoQsjXCTyfrmIfiUp4GFqWYlmynWZzq5mmGmnZRPB%2B6YHLSB6KPjxg%2B5CBF60wfGBowwSlssVtcFxsLt%2F2VhrHFgkO0YUNbvBzDNR%2FLVQwSVIoijri1DbfTAcVp82qLWxdUocWuiLDom7KxBrvS3%2B6W5iBoVeEsf7ycofOTeGDubUi4G%2ByDYlHd4vebBOB8PruVM33c6b%2FtMVeYTaLSMw8IJQK%2BtwpFD9NbvriX0aaH0FuESV%2Fg5KsMv1jbOoP8ncHEP49ClbRrvpQERbB5v727jwqZHXr9v7cbC8ozp7%2BYUGkZRg20R0ZbQOXoVJlqAEoGXxT8gRfAsZedSPGk2MVkNk91%2Fq7aNkMLK8%2B7wGOqUByBPh4MtgdHAOSNDfE9pbHXikMp%2F6UiC8JntNJ5KZ2%2BaT1ADiIO3lwUTGEdClsYmkHVdbrwV4c0QzUy5024RI83EB2E6ow9chSCZvEv05mbNYc9wQjy4L9P1aZrQzbpUDEiPpMy3Kh7viosFDbqfAP4ABYACxUAUM3E6Ex8rKTqJbTC%2FzOtvqwW9JkE%2F8OMw2fvAO2XF0liGIbLyp8pUMEQMRiZly&X-Amz-Signature=a0459b5e8fde7a87727d61498ec378235df46c84805cb8afe1dd4ea46ccc89fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

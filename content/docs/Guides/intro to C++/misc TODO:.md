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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466773G5GLF%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BEua8CgL15tgm%2BSeGshAwcm%2FxEnMXZ0oHxXGGMEmo7AiEAl96D3x4NPQvdIP13NyLIplMIAguDw9wP%2F71l6xT9E7Aq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDHIkFmuPPTuprcRv7SrcA%2BbHc3p%2BmmKZxwxIhSq987ED5SoyjP1vbdephcdL%2FZ%2BGq64LZ9smnwtxWEDGSxZNtFx0y2NpzdqHC5ucW7XZz%2FcKovYYzAYE0jq7SJm7UZV10sucOmY%2BUpUUqtXkTiCNIWY%2BQMCg3nUar8FYUHgdCm%2BiGR3rQA729X36B1WJ%2FW27BwUOOIvC2s5KdUyQhGnPwt%2B2EYKl3%2B9KyVYEwPcHkuF918TOPPXDiGzZGTiVNzae0RADFdvA9FqInSt7q7HrS4%2BWMvnUWiQBS1YfhAc%2BpIvivhuWTq4L4bsi55HsQlKh0BIYcTUMMMyjnxy70jaTTb0miG%2Fll7RqwbUxh5E6JMVbPl3rP29w4YP7k7VPhuYih8pPoJEpTOUQutTHgWSTduC0mKaRr9%2FWtUMjFzgnhEGZ2izPeT9m%2FyLZA06da%2B6bsFMaClzhw8Nas1joA%2BjRwhLYLVQ2qSg4WhoZE9sCANvkVGcDe3wuFMOANMOkXGmEGtEpzlGmGq3w%2BZ3pKo1NSIyZX7are6UMFs2r11Yozkr0hYUztlrKGj5elSTtr6MIU6PLfF9%2BmZa8TMo7khzcciHkcJCuTqc3LpIDrSy8XAQ6FSWyahnIWe3KF%2FjMENetE9wznu%2BQLZyw0eajMP%2BIx8IGOqUBhOx%2FbZ8YVNP%2BoafTD2d2TueaxjBmJXo0JLP%2BoTP1VlOp3%2BByaa90HWUn%2FyG059%2FCMygfh2O9%2F9F9YaecCbvLOn4tYBR2JTg7VIxyH%2Ffo6WR78yvZGMANB8PXupkfDD4Yw%2BnrPF1q%2FUSw%2FPSi7YLGdo1qGkrMZjT7j2SYCPqD2M7Vwi15%2FK5f4EuV%2FbgvBjJsz8L%2Bp5NgHUFhvxySzixwizwyXXO5&X-Amz-Signature=8ba8738a4e71c0857dc95482695607769fe9263cda66be626c9c2a15eada32da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466773G5GLF%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BEua8CgL15tgm%2BSeGshAwcm%2FxEnMXZ0oHxXGGMEmo7AiEAl96D3x4NPQvdIP13NyLIplMIAguDw9wP%2F71l6xT9E7Aq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDHIkFmuPPTuprcRv7SrcA%2BbHc3p%2BmmKZxwxIhSq987ED5SoyjP1vbdephcdL%2FZ%2BGq64LZ9smnwtxWEDGSxZNtFx0y2NpzdqHC5ucW7XZz%2FcKovYYzAYE0jq7SJm7UZV10sucOmY%2BUpUUqtXkTiCNIWY%2BQMCg3nUar8FYUHgdCm%2BiGR3rQA729X36B1WJ%2FW27BwUOOIvC2s5KdUyQhGnPwt%2B2EYKl3%2B9KyVYEwPcHkuF918TOPPXDiGzZGTiVNzae0RADFdvA9FqInSt7q7HrS4%2BWMvnUWiQBS1YfhAc%2BpIvivhuWTq4L4bsi55HsQlKh0BIYcTUMMMyjnxy70jaTTb0miG%2Fll7RqwbUxh5E6JMVbPl3rP29w4YP7k7VPhuYih8pPoJEpTOUQutTHgWSTduC0mKaRr9%2FWtUMjFzgnhEGZ2izPeT9m%2FyLZA06da%2B6bsFMaClzhw8Nas1joA%2BjRwhLYLVQ2qSg4WhoZE9sCANvkVGcDe3wuFMOANMOkXGmEGtEpzlGmGq3w%2BZ3pKo1NSIyZX7are6UMFs2r11Yozkr0hYUztlrKGj5elSTtr6MIU6PLfF9%2BmZa8TMo7khzcciHkcJCuTqc3LpIDrSy8XAQ6FSWyahnIWe3KF%2FjMENetE9wznu%2BQLZyw0eajMP%2BIx8IGOqUBhOx%2FbZ8YVNP%2BoafTD2d2TueaxjBmJXo0JLP%2BoTP1VlOp3%2BByaa90HWUn%2FyG059%2FCMygfh2O9%2F9F9YaecCbvLOn4tYBR2JTg7VIxyH%2Ffo6WR78yvZGMANB8PXupkfDD4Yw%2BnrPF1q%2FUSw%2FPSi7YLGdo1qGkrMZjT7j2SYCPqD2M7Vwi15%2FK5f4EuV%2FbgvBjJsz8L%2Bp5NgHUFhvxySzixwizwyXXO5&X-Amz-Signature=cbc0bfc6b1edacff5f91ebefb86133c8138e2453aa254909310daad494466166&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

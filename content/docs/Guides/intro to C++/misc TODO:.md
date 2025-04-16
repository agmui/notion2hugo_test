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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMKLBA7K%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T004032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6pSJ0qMfdeNOHHA3mo7476TX6qs8CBqPmmYC5zUpOHAiEAxKpm%2BXfMIcdU3jGp5%2FzshURVfkYyHyu0mmdMwxPkUaQq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDBXQFuHF5GmCbG3CWircA13MLe0Ub3%2BN1kKbLzEUBsroBzHrclRZSM2hbdPwd%2Bg0dbYTTqXw3ZCX89C4QvYJ4hUBrMXmiUFvoLdK7HMBUy1Dk927krDOjnsSuAp0%2FY6GEN8hYm8MgMC2nhKUa0bA2q2o2FT7%2Be%2B8uJN6ou1cpw2k3jX%2F1qJsPIDZ%2B%2Bqu2%2FuOd53szFjfOJArmo2WFXVSzwZe%2FGpc3RBzJ%2BorQPP14bGoa1tMC2Aa3KrIrSh3qpu5g3JeDymKluF4gFRk2Qt4LWv0dKROAE9s3QYBDrTQfFcFGo0cSFknxkht%2Bq7Y0u5iur5V0BcON5Fo1vXtIG2zsvsKwiJZhIogTFKcu8MSKi%2Bu8JtEk%2BdzYul44GPrck7ugA25tE8LGQbZCbKyxioNGIDzj7rHEfZPW7fpobV4mwCSeRHePBLzq5ObKGHZITXLjeMj1lWKW1c77TGfGVwYrBzFL3G0n5%2FktjHXJ3YLzryHnnBXbU6f0x5j%2BOQqgVGye6SBCC0RQh5KCjFnRyuX7EgGta29eAtz7MbKGZWL2WAuX1z0AJTph4T6qd3q4xRE5ioCTrWA2R75f1Jdrl5ofldX%2BDgpl8NzolKJ6UAq5rgT0QX%2Felro%2F%2BKtOSyh7eDQcdx51dYS%2BuMPuB1dMPXv%2B78GOqUBWxcFWfDn%2FBAkf6HKaTvoCBEoiUfmSJJPCugeMULyrIJhxm%2FJEwyNUaoIpVz9jCVvJh9k1c2umINMs%2BaGLyyijhAMp0ZO4qMSAHA%2F7vZ%2FpavmfuHgQ3%2F%2FSeYf19c0v%2B2be2MYIYiQTG9nW3AZKHKbnrcPWerouq%2FxJ7O9bSU5YdoXZa6WOGjkxqZC%2F8fCj%2BPuwdwokOU7HJbqHgdfxkAVFi4BzR6F&X-Amz-Signature=fe81962763ec30f381891a2e729bbd0b96990476e7e23c4ec50c38012ce43f23&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMKLBA7K%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T004032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6pSJ0qMfdeNOHHA3mo7476TX6qs8CBqPmmYC5zUpOHAiEAxKpm%2BXfMIcdU3jGp5%2FzshURVfkYyHyu0mmdMwxPkUaQq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDBXQFuHF5GmCbG3CWircA13MLe0Ub3%2BN1kKbLzEUBsroBzHrclRZSM2hbdPwd%2Bg0dbYTTqXw3ZCX89C4QvYJ4hUBrMXmiUFvoLdK7HMBUy1Dk927krDOjnsSuAp0%2FY6GEN8hYm8MgMC2nhKUa0bA2q2o2FT7%2Be%2B8uJN6ou1cpw2k3jX%2F1qJsPIDZ%2B%2Bqu2%2FuOd53szFjfOJArmo2WFXVSzwZe%2FGpc3RBzJ%2BorQPP14bGoa1tMC2Aa3KrIrSh3qpu5g3JeDymKluF4gFRk2Qt4LWv0dKROAE9s3QYBDrTQfFcFGo0cSFknxkht%2Bq7Y0u5iur5V0BcON5Fo1vXtIG2zsvsKwiJZhIogTFKcu8MSKi%2Bu8JtEk%2BdzYul44GPrck7ugA25tE8LGQbZCbKyxioNGIDzj7rHEfZPW7fpobV4mwCSeRHePBLzq5ObKGHZITXLjeMj1lWKW1c77TGfGVwYrBzFL3G0n5%2FktjHXJ3YLzryHnnBXbU6f0x5j%2BOQqgVGye6SBCC0RQh5KCjFnRyuX7EgGta29eAtz7MbKGZWL2WAuX1z0AJTph4T6qd3q4xRE5ioCTrWA2R75f1Jdrl5ofldX%2BDgpl8NzolKJ6UAq5rgT0QX%2Felro%2F%2BKtOSyh7eDQcdx51dYS%2BuMPuB1dMPXv%2B78GOqUBWxcFWfDn%2FBAkf6HKaTvoCBEoiUfmSJJPCugeMULyrIJhxm%2FJEwyNUaoIpVz9jCVvJh9k1c2umINMs%2BaGLyyijhAMp0ZO4qMSAHA%2F7vZ%2FpavmfuHgQ3%2F%2FSeYf19c0v%2B2be2MYIYiQTG9nW3AZKHKbnrcPWerouq%2FxJ7O9bSU5YdoXZa6WOGjkxqZC%2F8fCj%2BPuwdwokOU7HJbqHgdfxkAVFi4BzR6F&X-Amz-Signature=2b383013a07ad41d3f74f0d4bf7b1902b1fc2c438b4699b8d9f4bbb868fd857f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

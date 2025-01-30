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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGL4WPZI%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T110115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDu2fy%2BZffNhqo0dr8%2BqCifVJYKyZrT26pkw8hZkJk8PAiEAy8PsvxrhkOBuguTwbqCWYKOnZpHNmKm69oLbFwceoBEqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJI4J%2BtH1q%2BqoTJKGCrcA%2BRMyII3p97mMhVKMpaqpNeL1d%2F8g4%2FfyFmCxTSwpdR%2F2LVJOHvCzNsqgOd2w6Q%2Fbpgj0sOUDImNo8a1aiQHt35gC6UJR7eg2lybwsM70eAxQrqfQJksXwC9EFsMHsAgM7JPk9QAjvSG3xh5JM3DxzhVr8UJa%2F6A0W9WLsA9ufNyDLK3ZGA8QBtAvU6gjjLZr%2Bi9Tm9A3HEC2DlvkBB7qFSyYK%2B0QyYEedyJCV1Nx6%2FBb3DHAaT%2FYUdqDIao4PqL4WuR%2BD4ZKGKYzPQvZsr4YEd08ht0cAVUmvuUYDSWkwDCR%2BbRtAZ961YvSGc5PuAGjSLfDnyH4Sb%2BPRe5GWaEBI2ofdb1NS6%2B3t8yDlXwVKgNtG1ojJfhwwBIvRISpW4aDRywFPDlToeQtzDngORvoc%2BGrhX0p8R5ZG0nvgS19mK0mEGVxxYzpfKvD7%2FUMuxzAo9ogqOZfAm2qvoGpsOUls6%2FVI%2BXvqhZj3ZmOHsxriKM5q4gebT%2FWyQGRm5caVr35GBBeQmZ5Htwog92S6Bw9sQXOqJNdCrQ78Vq0%2BhnhDjXX8ut0gRpddoiOFLaYJgaIXMmVOV%2FhGZOspywGIJIXv%2BrxupOIC972%2B1rp%2B1K6mY1yAqyR2%2FMcBSW2wU8MIyr7bwGOqUBd5dKohU11lJVmmh732%2F8AfCwcwQVdNSS5MM9nR3iC0JbNDxNKgwWgZho8wuYpRoPC48%2B2gvzRBzcGpmxK2i2jG6ZEomkJLdScEhC%2B9uIyS502CAC4%2BGn%2F1U9ldAfvzsRPXm3vSID0scSwkzbpECBKOlunXoXBPkrcrQduH6dN9buyNcALM%2B%2BiBRecUuV%2By83NAU6gN23ZkdqQ7Qr77lhe3RSrT9V&X-Amz-Signature=7ae33d02b5a821455dbefa7793066f56972041a2acd9b3f5e2aeb557381dd0e1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGL4WPZI%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T110115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDu2fy%2BZffNhqo0dr8%2BqCifVJYKyZrT26pkw8hZkJk8PAiEAy8PsvxrhkOBuguTwbqCWYKOnZpHNmKm69oLbFwceoBEqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJI4J%2BtH1q%2BqoTJKGCrcA%2BRMyII3p97mMhVKMpaqpNeL1d%2F8g4%2FfyFmCxTSwpdR%2F2LVJOHvCzNsqgOd2w6Q%2Fbpgj0sOUDImNo8a1aiQHt35gC6UJR7eg2lybwsM70eAxQrqfQJksXwC9EFsMHsAgM7JPk9QAjvSG3xh5JM3DxzhVr8UJa%2F6A0W9WLsA9ufNyDLK3ZGA8QBtAvU6gjjLZr%2Bi9Tm9A3HEC2DlvkBB7qFSyYK%2B0QyYEedyJCV1Nx6%2FBb3DHAaT%2FYUdqDIao4PqL4WuR%2BD4ZKGKYzPQvZsr4YEd08ht0cAVUmvuUYDSWkwDCR%2BbRtAZ961YvSGc5PuAGjSLfDnyH4Sb%2BPRe5GWaEBI2ofdb1NS6%2B3t8yDlXwVKgNtG1ojJfhwwBIvRISpW4aDRywFPDlToeQtzDngORvoc%2BGrhX0p8R5ZG0nvgS19mK0mEGVxxYzpfKvD7%2FUMuxzAo9ogqOZfAm2qvoGpsOUls6%2FVI%2BXvqhZj3ZmOHsxriKM5q4gebT%2FWyQGRm5caVr35GBBeQmZ5Htwog92S6Bw9sQXOqJNdCrQ78Vq0%2BhnhDjXX8ut0gRpddoiOFLaYJgaIXMmVOV%2FhGZOspywGIJIXv%2BrxupOIC972%2B1rp%2B1K6mY1yAqyR2%2FMcBSW2wU8MIyr7bwGOqUBd5dKohU11lJVmmh732%2F8AfCwcwQVdNSS5MM9nR3iC0JbNDxNKgwWgZho8wuYpRoPC48%2B2gvzRBzcGpmxK2i2jG6ZEomkJLdScEhC%2B9uIyS502CAC4%2BGn%2F1U9ldAfvzsRPXm3vSID0scSwkzbpECBKOlunXoXBPkrcrQduH6dN9buyNcALM%2B%2BiBRecUuV%2By83NAU6gN23ZkdqQ7Qr77lhe3RSrT9V&X-Amz-Signature=5e73fb455e54af7863b131424b488d3606601e1ac2c0ea76499c7002c8be0f94&X-Amz-SignedHeaders=host&x-id=GetObject)

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

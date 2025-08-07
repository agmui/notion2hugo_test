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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCBDQRQP%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIBRJkZiR1eNXMXTzy2%2FARMENg8vvIzBJWWrEIFIV0GkdAiEAy52e7ZJPZQKeb1%2FYZNJz65r0bOgXdJn5ODzgWZlqbc8qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBFLUOxPCU8ysbnPircA9ThQbJo%2BT9pAJL9GSTWkhJOVPq0FI6nxKzI9ZFLYuzfCexj%2BHr7hwzTYC2s%2Bs5Ks0%2Fyzz9vAw976hZl2bUcntPTtoXQTDT1nt08hRLGJQA9fqOJCGES4VZv8hMxHs%2FAVorwYS99K4ons4ab9lzfqESd0kvj8SEBblB4F9rihX8zMtwa3XXCr2nzQytMz4poGj1iaVbXBVZIRctAAKXYRJ3p3%2Bm9ifuaIJgxac769gzN05sz2014ar5%2BpTbmcAhSlLuDyV4f9C%2B%2B%2FpCtdZvt97jlax2fxv7tlq8mZhTPqTOrlcMaqM6%2FWOQedrqeIQ8T0HFa4ILeOef9MY4IpPiam6FrISV%2F3%2FQWUVUYNCM%2BMHH37YaEB9lPoxHuxWP3%2Bu4Chr3ajPq9%2FMmrzNNyCEYLo%2FtK%2FYfuTdOFww7eVWXtxpQlLoCL8gOzcNUBxWFeM%2BQp8IZg1MPprJCwuBilNhX9MVWau3Bebrx%2F7gaeMKgCGt9b1dHQLDeEgJ6bvYmgLJRjYeKmXsnXgnsQ%2F5%2B5jNs0b3f22Z8DX2GK0tnQB4sOx%2F6y6xrlhb5pGSGYCMpfspWfFKnVXkaw9YUxHeGZJHGVydNnyHfB7b9dYzgfNowrggH%2FONNTuaQZTXtguDdVMOPU0sQGOqUBW0nilJqDd5wdQBRqpjRN3VlHffAMYJwRsk%2BQ3hBJn7d3XPPTp2fvCMqkMerdsXTP1uSjq2Pmu4lDhyhyjJrgfKB452I6EjIrNpatDr0DGfyTnWLgNY7bwROQTXRUVAQS63AzJ1xiG8kK5XHAzO2BnViffSvWznzGtrpOLZT3NEWEkliYBxIJHXKL5w0NKUO3kYbqbmTqDdFgFfvT0kEDGd4pbpDh&X-Amz-Signature=83dd1940570a4039c4c556540d8f5344631aea7e39856b9d404a146ee591b5b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCBDQRQP%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIBRJkZiR1eNXMXTzy2%2FARMENg8vvIzBJWWrEIFIV0GkdAiEAy52e7ZJPZQKeb1%2FYZNJz65r0bOgXdJn5ODzgWZlqbc8qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBFLUOxPCU8ysbnPircA9ThQbJo%2BT9pAJL9GSTWkhJOVPq0FI6nxKzI9ZFLYuzfCexj%2BHr7hwzTYC2s%2Bs5Ks0%2Fyzz9vAw976hZl2bUcntPTtoXQTDT1nt08hRLGJQA9fqOJCGES4VZv8hMxHs%2FAVorwYS99K4ons4ab9lzfqESd0kvj8SEBblB4F9rihX8zMtwa3XXCr2nzQytMz4poGj1iaVbXBVZIRctAAKXYRJ3p3%2Bm9ifuaIJgxac769gzN05sz2014ar5%2BpTbmcAhSlLuDyV4f9C%2B%2B%2FpCtdZvt97jlax2fxv7tlq8mZhTPqTOrlcMaqM6%2FWOQedrqeIQ8T0HFa4ILeOef9MY4IpPiam6FrISV%2F3%2FQWUVUYNCM%2BMHH37YaEB9lPoxHuxWP3%2Bu4Chr3ajPq9%2FMmrzNNyCEYLo%2FtK%2FYfuTdOFww7eVWXtxpQlLoCL8gOzcNUBxWFeM%2BQp8IZg1MPprJCwuBilNhX9MVWau3Bebrx%2F7gaeMKgCGt9b1dHQLDeEgJ6bvYmgLJRjYeKmXsnXgnsQ%2F5%2B5jNs0b3f22Z8DX2GK0tnQB4sOx%2F6y6xrlhb5pGSGYCMpfspWfFKnVXkaw9YUxHeGZJHGVydNnyHfB7b9dYzgfNowrggH%2FONNTuaQZTXtguDdVMOPU0sQGOqUBW0nilJqDd5wdQBRqpjRN3VlHffAMYJwRsk%2BQ3hBJn7d3XPPTp2fvCMqkMerdsXTP1uSjq2Pmu4lDhyhyjJrgfKB452I6EjIrNpatDr0DGfyTnWLgNY7bwROQTXRUVAQS63AzJ1xiG8kK5XHAzO2BnViffSvWznzGtrpOLZT3NEWEkliYBxIJHXKL5w0NKUO3kYbqbmTqDdFgFfvT0kEDGd4pbpDh&X-Amz-Signature=99061f84dda987bf027a861d78f1f799a8c268bd60b35a6e9fa64d01344d2c31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

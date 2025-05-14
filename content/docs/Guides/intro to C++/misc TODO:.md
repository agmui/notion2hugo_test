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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7JEUS65%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T181126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC9AtPJyRcfzQn4c0SOmAIDOMewA9K58guDxPoBXkAw3AIhAKiQOsW2Uzqc6kT8xBLcl6d%2FC7kez54jSekA8uo6dmFkKv8DCBoQABoMNjM3NDIzMTgzODA1Igx%2FZa3j3RBGfnh7LSAq3AN3VRSybllWJXD3mGjaQfszW2pCJHms1z2abaKL3POiQq1d2xmN6RDlMdj4Gs3KtDRxiMQPYIYV6vLfevl49L4RNf0TIcoSxsqHHHnq%2FOPlITj8iv13KRZLWYPCPRvTdv05GAbH3vJNG6swpS4VXCA9WwpOW0ljOAuxcuL13U%2Fz1MHXzwuqy%2BJxWMCQKN%2BWd967YGGvUVtlDVTLYBZRK0dTg7l6Ny%2B2dwh1QP9rlt%2F3z1uzGPAOeR1SDFMWT4u6QWmGAGDnWzA2r2RT7Y4c59QFXhIihc1CeuWhn%2BECOlExv8FbeFtGFpJyoqmpdmwlcShnrmIBXoidnj%2F52fvfx7J7dVWFOKKJDv%2BSbpUMjniuzUzSRw6Zgj3nJiw%2B%2BS7YGhy1sDmWSEDzjfSvzVEPtRPz6H66QUfwjqtiKU%2B2ETXxaDRud%2BsR%2Fm6sE8GM9gKzt1e3dAGQ6qvIn5ZQCPqyLpeVr9vpGcKikZEb0PW4Jf0jcPxVMIPaVXKVDKNzeJRJ6IYCLuTXmMqgn88L40j8LZKOj4tyiMo%2FS0G6OJyKTI0HsME8bN3%2FDFjZ92LRyOAbmV3%2FLXmUHdRxhkpqEubWnkek2tVVd%2BDt90ub94DG6cQj3yg5VXXZ94AbSt59ejCPo5PBBjqkAX3cOZyi%2Bly0WcWM3MVBvvhDz6tf26DTWVGQ1NYWNpcsiEtnP7Soi4H74vUUuDg1UTR5iMASDOINCUOgrVMqAY61f%2F5e9ABleGt1olqH3BC3dtGmxtk1eJiMt9X1sbARX4DWTlazd1PUEmkFSRkQ0mjpLqJrWAn%2FmLK34AradYS90KbLpk2rcF9plIUZ%2FMxhOZm7DEK0%2Bh7UWgkF3Bu6ms%2BVIm8u&X-Amz-Signature=0ef2a166f416f4bfc60a9d6733ed40fab5fd2221e3079550ec928f6f12234ab9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7JEUS65%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T181126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC9AtPJyRcfzQn4c0SOmAIDOMewA9K58guDxPoBXkAw3AIhAKiQOsW2Uzqc6kT8xBLcl6d%2FC7kez54jSekA8uo6dmFkKv8DCBoQABoMNjM3NDIzMTgzODA1Igx%2FZa3j3RBGfnh7LSAq3AN3VRSybllWJXD3mGjaQfszW2pCJHms1z2abaKL3POiQq1d2xmN6RDlMdj4Gs3KtDRxiMQPYIYV6vLfevl49L4RNf0TIcoSxsqHHHnq%2FOPlITj8iv13KRZLWYPCPRvTdv05GAbH3vJNG6swpS4VXCA9WwpOW0ljOAuxcuL13U%2Fz1MHXzwuqy%2BJxWMCQKN%2BWd967YGGvUVtlDVTLYBZRK0dTg7l6Ny%2B2dwh1QP9rlt%2F3z1uzGPAOeR1SDFMWT4u6QWmGAGDnWzA2r2RT7Y4c59QFXhIihc1CeuWhn%2BECOlExv8FbeFtGFpJyoqmpdmwlcShnrmIBXoidnj%2F52fvfx7J7dVWFOKKJDv%2BSbpUMjniuzUzSRw6Zgj3nJiw%2B%2BS7YGhy1sDmWSEDzjfSvzVEPtRPz6H66QUfwjqtiKU%2B2ETXxaDRud%2BsR%2Fm6sE8GM9gKzt1e3dAGQ6qvIn5ZQCPqyLpeVr9vpGcKikZEb0PW4Jf0jcPxVMIPaVXKVDKNzeJRJ6IYCLuTXmMqgn88L40j8LZKOj4tyiMo%2FS0G6OJyKTI0HsME8bN3%2FDFjZ92LRyOAbmV3%2FLXmUHdRxhkpqEubWnkek2tVVd%2BDt90ub94DG6cQj3yg5VXXZ94AbSt59ejCPo5PBBjqkAX3cOZyi%2Bly0WcWM3MVBvvhDz6tf26DTWVGQ1NYWNpcsiEtnP7Soi4H74vUUuDg1UTR5iMASDOINCUOgrVMqAY61f%2F5e9ABleGt1olqH3BC3dtGmxtk1eJiMt9X1sbARX4DWTlazd1PUEmkFSRkQ0mjpLqJrWAn%2FmLK34AradYS90KbLpk2rcF9plIUZ%2FMxhOZm7DEK0%2Bh7UWgkF3Bu6ms%2BVIm8u&X-Amz-Signature=1d2c7a9b34f913c4331bbb3ef4a5281c9c0dc22cca6b2ee009d425b628c2bd2a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

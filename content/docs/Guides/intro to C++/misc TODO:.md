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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P67LWGJ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDVKu%2FJSnRBoi%2BxQigr5QF6XOTnytXznGNxtPxBoZZjOAIhALN2gH61yDm71Kubpwu7y1t57ZR6AJiywQtrK8mMQpnUKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuJvqoAn79p36a9FUq3AP0a3LC0cvZihlRXp7H8fQ%2Fga4z8zNILkrq5OFj5TitmzHp8fr2vFziSZgnd5YsaVBfv%2FOj%2FAgN%2F%2Fm2LRIvo59yvyx%2F5ncZ1SWgqfzqDNJC3FrmrMWl1V0p2EnHo04AUgvvNyAi1Szm5rSL1qKRwz7HplK8%2F2Ujoe2TfoY7t%2Bj2%2BmveuuB768kAc4pRACPuumWwor5%2BcVKAd6z4AiOJ5Uftu0hvhPo70q0wy1LwIfSKisdz1XZsz8zUouZAEnheLbX84S8qfKLe4CpJsFCb6ztsY7dO%2F0OewpvkZlQN5rnUQaYtoxu0Xj1VNoemf0MJVMjupjmD5%2BOtKfCtgc6wNkhuTWmCfTynUbZWgXALF%2FEs8IR635pExLoKUGj3XHyVn4dv%2FaThYRzAL4wjHg%2BBDSi1A7sKJnLgNUK6kmuoexOVscMXMQoXIZAC%2FA5g3SVjjXypejw%2FcflZNrHj07aDv%2BVq0yk8ThpYZ5dvvnFxyKFAUJHOuubM%2Fwf%2FWeb3oSdqf5EZ6ZWKzC0854tFPbUh2GZs42EYAu%2BpwDqDCir0Bgl7ZY4yCIe%2BhwpugA%2Fz4wfEBYXMdtPGb%2FZIrVo4Jepg0gmi1SI2u9jh0AEB4hd4DsyHwLQ7VfhnWTDH5t9UMDDuysC%2BBjqkAXHr0EUVwOYjdK%2FKZFJsnsnMOhlWJ8NZ62e%2F%2BELGZR7LekZ5GDWmq3%2Bfxn%2FQUWFdEbxcSbf%2B70ghxoPLesS4CsdcVMiRqk%2BK8g3rrGI0LX75HG5sYIClSm8JPBqtKRYMKuk0eOo508GqqA8sixZiBqZ3LNXzesikCR%2FEDdjbBCr8xMbmqAEuGuTGcuSNWXKBmwWCQyGGD1oC013m03avW1VKPBfp&X-Amz-Signature=04e661528dea798fdc10d749ad93e2a8982f460cc634bba763377dd7efd9e46f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P67LWGJ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDVKu%2FJSnRBoi%2BxQigr5QF6XOTnytXznGNxtPxBoZZjOAIhALN2gH61yDm71Kubpwu7y1t57ZR6AJiywQtrK8mMQpnUKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuJvqoAn79p36a9FUq3AP0a3LC0cvZihlRXp7H8fQ%2Fga4z8zNILkrq5OFj5TitmzHp8fr2vFziSZgnd5YsaVBfv%2FOj%2FAgN%2F%2Fm2LRIvo59yvyx%2F5ncZ1SWgqfzqDNJC3FrmrMWl1V0p2EnHo04AUgvvNyAi1Szm5rSL1qKRwz7HplK8%2F2Ujoe2TfoY7t%2Bj2%2BmveuuB768kAc4pRACPuumWwor5%2BcVKAd6z4AiOJ5Uftu0hvhPo70q0wy1LwIfSKisdz1XZsz8zUouZAEnheLbX84S8qfKLe4CpJsFCb6ztsY7dO%2F0OewpvkZlQN5rnUQaYtoxu0Xj1VNoemf0MJVMjupjmD5%2BOtKfCtgc6wNkhuTWmCfTynUbZWgXALF%2FEs8IR635pExLoKUGj3XHyVn4dv%2FaThYRzAL4wjHg%2BBDSi1A7sKJnLgNUK6kmuoexOVscMXMQoXIZAC%2FA5g3SVjjXypejw%2FcflZNrHj07aDv%2BVq0yk8ThpYZ5dvvnFxyKFAUJHOuubM%2Fwf%2FWeb3oSdqf5EZ6ZWKzC0854tFPbUh2GZs42EYAu%2BpwDqDCir0Bgl7ZY4yCIe%2BhwpugA%2Fz4wfEBYXMdtPGb%2FZIrVo4Jepg0gmi1SI2u9jh0AEB4hd4DsyHwLQ7VfhnWTDH5t9UMDDuysC%2BBjqkAXHr0EUVwOYjdK%2FKZFJsnsnMOhlWJ8NZ62e%2F%2BELGZR7LekZ5GDWmq3%2Bfxn%2FQUWFdEbxcSbf%2B70ghxoPLesS4CsdcVMiRqk%2BK8g3rrGI0LX75HG5sYIClSm8JPBqtKRYMKuk0eOo508GqqA8sixZiBqZ3LNXzesikCR%2FEDdjbBCr8xMbmqAEuGuTGcuSNWXKBmwWCQyGGD1oC013m03avW1VKPBfp&X-Amz-Signature=170e21e104375fe05c2498cb6b85ac7f807d4b7c72d8f3330a0d733b4ea8f962&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAUIWGUY%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8C7Wx8GBSq7Q3LILLI9RYw%2Bu4mZY%2FQc55Ebsg7lqH%2BAiEAmTFev3ueQNbjHhuWDCv8yTzXeTJIuqq6CjAZXtSHQ2kqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGrBaR9QsFJ8PoYkMircAzAFgT4PfZh6ozpYUBdfTbDY90QiE83geKGUxv5o2GPIQBZ8KvABNVmSzGQHuqcUImmhUPdtz5NdusqbWLR1Hp9UwNvkDi8XtOounmFJC2QjpBzJFm9%2BPjAR5aTlHR5tdsh0bRcV%2BvZUNsJTJN2yPd8wp4ArkyR2lBCjgG7mIHMp6bUZ2Ae7sqUoQJq9i5Q3mtTsgnarnusIubAZnM%2Fnl%2FGG2SGZzp83tSC7YbXloZCpsrLjJjWfX7dmOYOxwhmG36Ww9qBPQsDX7WXwbkjJAfD1u%2FklpN%2F45xuiDJ2rNGT7hVtiMnogr48uEzkVl4Gh9s4FRZEeA83C7qcjY%2FOC67J5WJGbjOUQhRi6giv8%2FiGOJSfZeJlV4gxKBpiLU%2BXUSa%2BsZP7%2BGmNlekgI0KXFG%2BIsaufvEme85PTjYZe3sxC0fTaM8HERsFOFiGeUSXofIwvyhiT9uXeaWyAkt3mBoQUhnIzm93F2xHK3ho%2FCZEeKb3lmhXZ1a3tHvodrUBU%2B%2BrajgpZwdhOP8TUCq6gNnAqQL%2BkMYhcvJwjKhYvWfxSHvoglm76BAWx%2FJEKJ%2Bo91MW7hGRSJg9A1poyltD82TKfAYP%2B%2FQbGcGkTj7qi5zfKAwcWFr6snTJz5GGlEMMGBrL0GOqUBlj70OqVosMuFx59pgZNp9o4Hz5aM%2FnoI8OYEcRELPGpGOJhNEoUBKttdEKABSGvHcnnn71jJp%2FbFQkfF6vupXDsaKNTWNm70jcTBlxALMmR8Cya5hDSZh61E4U%2BqyfHoSx0s9uXnPbsVZx3P97PV8Mdw2C2669LdDMHJRgTCSFEO%2BR7iguaQned9LdRTS7mPB%2BZxOgQ2Ar5oHeQRdNNMP%2BmA%2Bg4v&X-Amz-Signature=e91147bc1356e54fa453327f145fdb6fdd9bd25d23d8af1d33b4575c01ba07bd&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAUIWGUY%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8C7Wx8GBSq7Q3LILLI9RYw%2Bu4mZY%2FQc55Ebsg7lqH%2BAiEAmTFev3ueQNbjHhuWDCv8yTzXeTJIuqq6CjAZXtSHQ2kqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGrBaR9QsFJ8PoYkMircAzAFgT4PfZh6ozpYUBdfTbDY90QiE83geKGUxv5o2GPIQBZ8KvABNVmSzGQHuqcUImmhUPdtz5NdusqbWLR1Hp9UwNvkDi8XtOounmFJC2QjpBzJFm9%2BPjAR5aTlHR5tdsh0bRcV%2BvZUNsJTJN2yPd8wp4ArkyR2lBCjgG7mIHMp6bUZ2Ae7sqUoQJq9i5Q3mtTsgnarnusIubAZnM%2Fnl%2FGG2SGZzp83tSC7YbXloZCpsrLjJjWfX7dmOYOxwhmG36Ww9qBPQsDX7WXwbkjJAfD1u%2FklpN%2F45xuiDJ2rNGT7hVtiMnogr48uEzkVl4Gh9s4FRZEeA83C7qcjY%2FOC67J5WJGbjOUQhRi6giv8%2FiGOJSfZeJlV4gxKBpiLU%2BXUSa%2BsZP7%2BGmNlekgI0KXFG%2BIsaufvEme85PTjYZe3sxC0fTaM8HERsFOFiGeUSXofIwvyhiT9uXeaWyAkt3mBoQUhnIzm93F2xHK3ho%2FCZEeKb3lmhXZ1a3tHvodrUBU%2B%2BrajgpZwdhOP8TUCq6gNnAqQL%2BkMYhcvJwjKhYvWfxSHvoglm76BAWx%2FJEKJ%2Bo91MW7hGRSJg9A1poyltD82TKfAYP%2B%2FQbGcGkTj7qi5zfKAwcWFr6snTJz5GGlEMMGBrL0GOqUBlj70OqVosMuFx59pgZNp9o4Hz5aM%2FnoI8OYEcRELPGpGOJhNEoUBKttdEKABSGvHcnnn71jJp%2FbFQkfF6vupXDsaKNTWNm70jcTBlxALMmR8Cya5hDSZh61E4U%2BqyfHoSx0s9uXnPbsVZx3P97PV8Mdw2C2669LdDMHJRgTCSFEO%2BR7iguaQned9LdRTS7mPB%2BZxOgQ2Ar5oHeQRdNNMP%2BmA%2Bg4v&X-Amz-Signature=151517e1816c514cd584c9b66f08268b4396fe94fd5fb3190980640bd009a3bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

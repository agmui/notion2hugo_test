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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G373DJF%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T033104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9Owh3BN86JMNjUGMSfxh3hbwXXxwZ0C873KaTu1b3NAiEA9bvR80uIIKs28QMeH2xIrgA6GJ84byEe4MtVLer33JIqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH9%2FaNuE%2BJnd3gYs2yrcA3gA2PS91DX0xV4CvWzxJSH3TLXefK1BzdW4rf8nGgAIPdVgSTnvmEffQc1v6QWyyLJk0CmfiUG6zv227fsolaeX64bdXTOIi%2FcgLdxpck00K7jC%2Buuvg4BJd1zZpNcKseMga5QtKJS%2FD9U1d3cyMA97z2bhqVkMIVPUtK6%2Bxc68T1JHslt3B85hcI%2FAWNowdjRdzhklRcSYOM88S5g1fHS5uzsPoBShghM2983dBMMxEMrCrJ2mMB0dHsCznTCh%2BVkEXQ09TmHFH9jfTzT8FFMNEFyveNv0aYDg5LJ1U9kWXszw%2B8lnFGaMzXc0RlxMND0ShZixpPeduTaiN1rvZt40WsEFIABe0CeGh%2Fb7HJjzCspzesAGmXe7LwutS9h%2BXaT89agEa%2FjD7%2BZVfHo%2FW7rCT4Kg%2BguqKZh4fuZpWATjd48R1Xd6MbDLLlYPFs7iEZXj6hxGGGBvpQqzp055uuLozQHpuHfp0JSkBN18BdB%2BsPsuOHfR4kxMzjOQuKe4NkwuK%2FC3y4pcCyLkBwwrEB5xvlk8z4pUmNMn41xFn3%2BD2Dy5T02AsWxK9Rq5nCSTDQ0JYpkvPkHAVIKZDJQbbqKWH24J7ahcULXMs8lknlqlX0ol5699AaX2NzEFMPe48b8GOqUBRtTG1MD70TWIx92Hioha%2Fc2Cd%2FWj1xxWNL%2FxoORcOxiup4pXUeZfwfnkZKbCQJQKQ4bJ5mRBEm1fqMFfuYOWHRdh50E%2FkEYTfqd%2FKHex%2B9oTqF4imyXpQNISN9kaCMhEsGlKDZoHQ7BzoYlVhGUK7YbVVv%2F4cIazaVmSLKJQW3Hk1SSxCOk9QxVf7MWRpkQx6gWu3xhHcyh7xMGStvnLF52RAgaf&X-Amz-Signature=759d6b2a9689b43f6b434fe37059ffb016d302b557bbbfe40ffc0340464cbbe4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G373DJF%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T033104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9Owh3BN86JMNjUGMSfxh3hbwXXxwZ0C873KaTu1b3NAiEA9bvR80uIIKs28QMeH2xIrgA6GJ84byEe4MtVLer33JIqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH9%2FaNuE%2BJnd3gYs2yrcA3gA2PS91DX0xV4CvWzxJSH3TLXefK1BzdW4rf8nGgAIPdVgSTnvmEffQc1v6QWyyLJk0CmfiUG6zv227fsolaeX64bdXTOIi%2FcgLdxpck00K7jC%2Buuvg4BJd1zZpNcKseMga5QtKJS%2FD9U1d3cyMA97z2bhqVkMIVPUtK6%2Bxc68T1JHslt3B85hcI%2FAWNowdjRdzhklRcSYOM88S5g1fHS5uzsPoBShghM2983dBMMxEMrCrJ2mMB0dHsCznTCh%2BVkEXQ09TmHFH9jfTzT8FFMNEFyveNv0aYDg5LJ1U9kWXszw%2B8lnFGaMzXc0RlxMND0ShZixpPeduTaiN1rvZt40WsEFIABe0CeGh%2Fb7HJjzCspzesAGmXe7LwutS9h%2BXaT89agEa%2FjD7%2BZVfHo%2FW7rCT4Kg%2BguqKZh4fuZpWATjd48R1Xd6MbDLLlYPFs7iEZXj6hxGGGBvpQqzp055uuLozQHpuHfp0JSkBN18BdB%2BsPsuOHfR4kxMzjOQuKe4NkwuK%2FC3y4pcCyLkBwwrEB5xvlk8z4pUmNMn41xFn3%2BD2Dy5T02AsWxK9Rq5nCSTDQ0JYpkvPkHAVIKZDJQbbqKWH24J7ahcULXMs8lknlqlX0ol5699AaX2NzEFMPe48b8GOqUBRtTG1MD70TWIx92Hioha%2Fc2Cd%2FWj1xxWNL%2FxoORcOxiup4pXUeZfwfnkZKbCQJQKQ4bJ5mRBEm1fqMFfuYOWHRdh50E%2FkEYTfqd%2FKHex%2B9oTqF4imyXpQNISN9kaCMhEsGlKDZoHQ7BzoYlVhGUK7YbVVv%2F4cIazaVmSLKJQW3Hk1SSxCOk9QxVf7MWRpkQx6gWu3xhHcyh7xMGStvnLF52RAgaf&X-Amz-Signature=3ba8f472a1de7d65632cf4457ff19a14ad2bfb89d76ad1a9579d68bc4825b360&X-Amz-SignedHeaders=host&x-id=GetObject)

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

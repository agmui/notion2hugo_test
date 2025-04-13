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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB4MGRY6%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T230757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIDsJ19FEF%2F3B52NvKotc1kJzUHNfVIshIpFDa3UtvI0jAiEAuUZoXS%2BFstcqpwhJNF9Hraa4coS0Md9AsfxZabxexGEqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfY6moPc4Drf9e%2BzircA0Vl%2F7Wpki5UU3oJZMLF92d8dIjUD9eXEGe%2BtNmsjXDarTjlJJN0RYlAICQfVtXMrSCeBfbbhKA09mU2NOwXxuGyS8D5eJpFNitvTJzuojtavCNImBb%2BoCiiRjsAvig%2BRQ0WuK3tGNkmE7BvHgMuA2cJlIE4n8oVQE5fqtwFon1KwWz1vyLN5NDC7EN9ll3RTy4FCgxXVEz02M1Oolxr8k%2BPbgjRoY%2F1ehMp8gceNMRXS1MZjwyR7RwIa6Z%2BEukz8J65kOYJUBDcX608HdZY%2FAzZH%2FEUkAoEMmiPbgCjuJxVFBq%2B%2Fhy6FVNj6ois%2F5%2FmUXZI%2Fsc08hz0XTEuZiwCNb9cftuDgB%2FXutQbmD3DNpxV9CydwUThY%2BBWjG47MbVIv43WPik%2Bxma0EVyjVbMcIP0dWKGtJYLJKPMjZpT5E6Tb5%2BEF6jUdXQmEO%2BVKPeBLKJ5yioHbAfj5PsByVPnwMueEc%2B502735njhOyCpdGWZ3pFDYSGzz6ZrxgkOoDrjoDS8zcsTJQ6gl87mnruJz5HtQjN%2B%2BnYdtMWJJa9U0lfjgq9hQ0BQnN%2FLvktJmcpgY9EnWy8CxhpOMhUn4rMvbi6JSnkN7rNlHjZBh4cS8gBwJZiHly2uwmAA7EEqFMJGC8b8GOqUBatMgFPfJEulTVbuHQjFgWFaXkyHq28dSzXbwvwbiepDI8ObdEBZH9De9ek%2FkUoIkMqymaBqnTAgqP8hGmlTe6q9qai6segfQHAsqKH0FYNk5EyysdcSJ4DG2l5HPihnmMBPMPFKiWmQTTOVJ9vwnoLd9NSzcJjO7cjKvhiJDyMUvmYlBKWmkCeG22izU3Xk%2BZROdDzPsRtkUv0MJAW%2FXA1fmdFV6&X-Amz-Signature=404d975200cb7c99333aa9bf896437f9070e7ec6e4f4985822e20d2f11146302&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB4MGRY6%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T230757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIDsJ19FEF%2F3B52NvKotc1kJzUHNfVIshIpFDa3UtvI0jAiEAuUZoXS%2BFstcqpwhJNF9Hraa4coS0Md9AsfxZabxexGEqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfY6moPc4Drf9e%2BzircA0Vl%2F7Wpki5UU3oJZMLF92d8dIjUD9eXEGe%2BtNmsjXDarTjlJJN0RYlAICQfVtXMrSCeBfbbhKA09mU2NOwXxuGyS8D5eJpFNitvTJzuojtavCNImBb%2BoCiiRjsAvig%2BRQ0WuK3tGNkmE7BvHgMuA2cJlIE4n8oVQE5fqtwFon1KwWz1vyLN5NDC7EN9ll3RTy4FCgxXVEz02M1Oolxr8k%2BPbgjRoY%2F1ehMp8gceNMRXS1MZjwyR7RwIa6Z%2BEukz8J65kOYJUBDcX608HdZY%2FAzZH%2FEUkAoEMmiPbgCjuJxVFBq%2B%2Fhy6FVNj6ois%2F5%2FmUXZI%2Fsc08hz0XTEuZiwCNb9cftuDgB%2FXutQbmD3DNpxV9CydwUThY%2BBWjG47MbVIv43WPik%2Bxma0EVyjVbMcIP0dWKGtJYLJKPMjZpT5E6Tb5%2BEF6jUdXQmEO%2BVKPeBLKJ5yioHbAfj5PsByVPnwMueEc%2B502735njhOyCpdGWZ3pFDYSGzz6ZrxgkOoDrjoDS8zcsTJQ6gl87mnruJz5HtQjN%2B%2BnYdtMWJJa9U0lfjgq9hQ0BQnN%2FLvktJmcpgY9EnWy8CxhpOMhUn4rMvbi6JSnkN7rNlHjZBh4cS8gBwJZiHly2uwmAA7EEqFMJGC8b8GOqUBatMgFPfJEulTVbuHQjFgWFaXkyHq28dSzXbwvwbiepDI8ObdEBZH9De9ek%2FkUoIkMqymaBqnTAgqP8hGmlTe6q9qai6segfQHAsqKH0FYNk5EyysdcSJ4DG2l5HPihnmMBPMPFKiWmQTTOVJ9vwnoLd9NSzcJjO7cjKvhiJDyMUvmYlBKWmkCeG22izU3Xk%2BZROdDzPsRtkUv0MJAW%2FXA1fmdFV6&X-Amz-Signature=420b5846b1082932d5399cc3a7d722395fe1ff90c242b026f5156b39746faa54&X-Amz-SignedHeaders=host&x-id=GetObject)

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

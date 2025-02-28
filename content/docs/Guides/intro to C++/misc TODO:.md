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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647453MZ5%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCZQ5RYwG06oWlwtEJ8ZFu%2FMtS1RTJlN33ZIhWafOGxDwIhAOyE30aqOCoJChrJHjYbGpc7FbspS1QX62YRofqcw8TCKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyx%2FjPvQE6iku5Yr7Qq3AMhhlJV3R46creuhsLZ7s%2B%2FJEQcTozdGhauLKEmBUxh%2BqSPuLFmQzYVj0%2BD0td5j7TWazdZ2QFIIusEcbbaDUhnJrYHB0Kcc0Wxz1jE6QFFBHrDOWIi104b4pziBeFi6SBdmj9TODOem1qiXL8kWCcIujvmy8L%2Fsz7WID9TS9vu5Y%2FboE31rXIKf%2FC3IgQq1PlS5qLcXk0oiPhFxC0E9AMzbkRsI6iwYtQ9TMU1IKY%2Bm59zhKq5bNj42L%2FnWp6IbHAhD9AP2eNh2BJUxROxCFhe8LmorY5gTeK9EQ7wYO5c76x8Lhw4qqXjBmfdpR8RSJ3IEtcqwNVrffoMRk2d3Q6a%2FdiR8KRwKAlFLi3enLq%2FPm08BOGNY0pDnaNI5rWuHL%2F%2FAwwD9BnQzFwFDdNT45fuqn5lPdkHLChcFgTAUf4eMWzgVzyoFxR5U8HxmVLKX5cAHgMvvAMgdl8Bl6Le47RsghubPeGa9xpy6XhuTZ4FTlbANGbqTweemCBN3CXyv5zMMkLyeXOFBswZOk4LT0xW8iQ1oT%2BWMEriqYmZ0NoUMn%2Bm6h25dRTN4T94aJt456j3wWKx1%2Bjto8DNVDk0mhcUtPnnUFDwOQEow5nBDIYdpd%2B1uM4ettx5uf3GjjDdi4i%2BBjqkAf2s6hsoJcmKeZbozJRy%2FT0BHsIwRvo4H%2FxDtuVeZOgwlGKo89EzZvZKkkT0R5v6E%2FIqN0OCjaDPrFjbjysMKv45Rb0VZ2YyqdFb25N2iNBVI2726zpU42%2FzQQlxu%2B3LGmtapXebGo5MKflBORTWGcY2Srkyo%2BHWHDZOPOmc3y%2BTsTrth5Co%2BJ9S2aachUZPMC75XHsg9s38PNvcP7xATA7oPpQf&X-Amz-Signature=5653402ed77030c881cb257167dd8b065f2bdb1bf6a22dfddbae6f6dfb9cb357&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647453MZ5%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCZQ5RYwG06oWlwtEJ8ZFu%2FMtS1RTJlN33ZIhWafOGxDwIhAOyE30aqOCoJChrJHjYbGpc7FbspS1QX62YRofqcw8TCKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyx%2FjPvQE6iku5Yr7Qq3AMhhlJV3R46creuhsLZ7s%2B%2FJEQcTozdGhauLKEmBUxh%2BqSPuLFmQzYVj0%2BD0td5j7TWazdZ2QFIIusEcbbaDUhnJrYHB0Kcc0Wxz1jE6QFFBHrDOWIi104b4pziBeFi6SBdmj9TODOem1qiXL8kWCcIujvmy8L%2Fsz7WID9TS9vu5Y%2FboE31rXIKf%2FC3IgQq1PlS5qLcXk0oiPhFxC0E9AMzbkRsI6iwYtQ9TMU1IKY%2Bm59zhKq5bNj42L%2FnWp6IbHAhD9AP2eNh2BJUxROxCFhe8LmorY5gTeK9EQ7wYO5c76x8Lhw4qqXjBmfdpR8RSJ3IEtcqwNVrffoMRk2d3Q6a%2FdiR8KRwKAlFLi3enLq%2FPm08BOGNY0pDnaNI5rWuHL%2F%2FAwwD9BnQzFwFDdNT45fuqn5lPdkHLChcFgTAUf4eMWzgVzyoFxR5U8HxmVLKX5cAHgMvvAMgdl8Bl6Le47RsghubPeGa9xpy6XhuTZ4FTlbANGbqTweemCBN3CXyv5zMMkLyeXOFBswZOk4LT0xW8iQ1oT%2BWMEriqYmZ0NoUMn%2Bm6h25dRTN4T94aJt456j3wWKx1%2Bjto8DNVDk0mhcUtPnnUFDwOQEow5nBDIYdpd%2B1uM4ettx5uf3GjjDdi4i%2BBjqkAf2s6hsoJcmKeZbozJRy%2FT0BHsIwRvo4H%2FxDtuVeZOgwlGKo89EzZvZKkkT0R5v6E%2FIqN0OCjaDPrFjbjysMKv45Rb0VZ2YyqdFb25N2iNBVI2726zpU42%2FzQQlxu%2B3LGmtapXebGo5MKflBORTWGcY2Srkyo%2BHWHDZOPOmc3y%2BTsTrth5Co%2BJ9S2aachUZPMC75XHsg9s38PNvcP7xATA7oPpQf&X-Amz-Signature=859c0de677c671bd1b0a8e52cca245a147db029eea1d3f3bee5076c31815f136&X-Amz-SignedHeaders=host&x-id=GetObject)

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

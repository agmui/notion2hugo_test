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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU7EE3YC%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T003833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIEdXcPCzMdhell5R%2FFQlwyHbyk1wuSLT8c46TXbG5uWEAiEAv%2FOfHLyn6YnrKDGVLoNtylMFWtCFNhfVyyiHQL5nBSkqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTuryEYof2VXa0l8SrcA6NzzZz1QYyhR3CNBBWcF1a5lmigMwC%2BGOb4mOiC9LnPj%2FU8J2UHIjVksjzQL8vVmoWKct%2FRn8HStsL4jPyoLMeF0H%2BMVkSHG%2BPRNQv7EgWBwLiG4zg8UvE%2BcQ5MCUQgdi6ZS6USloLril9Nt445UzKKQ5JiV0q0srG8KQOOH02Mc%2F%2FnFaesYKl%2BwrtRQfU4ulC9IGrZqDO0%2Bmu%2FI7kbuJcvlNnMlkFBkDij8LvSB%2FVqtcWV%2FvAM3zlfjXUwvncR9dq4Z253uFBHPtlHXtJ6EalEqZR4feIcM29uROwSG%2ByHC3Oq%2BLR3YZ60gX5UTVZoG0xd%2FVTsjB%2FDHe4gtdBUrLuicXVdP7N8vZTYdlSPdktJFw4apkAfg9wef02nPXYue6hdkoYiZICNkZpXtL6krsHX97Nrjl9tZ%2BsqusdyhHGGxyTnjLq4COEL74CEKIxw62ZK3b02%2BN3JH4gweDHUL84KMVHuCR%2BsnJwTxKOUQv2LqcwZH2lM0MXGMvXIu8dONg9PxM%2BC5YMWMpoJwtmkMd6w6uF%2FoMn18lLu9oRAVu52%2BDcCqg3tIu%2Bnuf1EyaLl7mEhZlzKkwUD0DufisPzvp8DcXphvDcydJnGVSrVsu99EjlxNUPdO9c2eejZMNOvt78GOqUBkHC7eU3vlL7B7eE327E1sbYLUgDfgDzyiCl49bAF%2FgfAX0wgWfYINJdY6ydXhkWEd%2BRjgDIbzUFvqQu8%2BqHIlNRlji1HSQVAQVwJukAQBzOMukuO58oRBNFJk19tNSDLUGmbt6%2BX%2Bk4Mir2meFqLcJMiy92mmsK8dx5K%2F0nBRcCfeypSeFFigQqoFqoOOiZXVwTnzScnG7AsRsuTz1a0K%2FUCWqXU&X-Amz-Signature=a2ec2f53ba4a6ffc8c89a2c4098cb826f92509e976f8212b4a0f9172dc12005a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU7EE3YC%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T003833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIEdXcPCzMdhell5R%2FFQlwyHbyk1wuSLT8c46TXbG5uWEAiEAv%2FOfHLyn6YnrKDGVLoNtylMFWtCFNhfVyyiHQL5nBSkqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTuryEYof2VXa0l8SrcA6NzzZz1QYyhR3CNBBWcF1a5lmigMwC%2BGOb4mOiC9LnPj%2FU8J2UHIjVksjzQL8vVmoWKct%2FRn8HStsL4jPyoLMeF0H%2BMVkSHG%2BPRNQv7EgWBwLiG4zg8UvE%2BcQ5MCUQgdi6ZS6USloLril9Nt445UzKKQ5JiV0q0srG8KQOOH02Mc%2F%2FnFaesYKl%2BwrtRQfU4ulC9IGrZqDO0%2Bmu%2FI7kbuJcvlNnMlkFBkDij8LvSB%2FVqtcWV%2FvAM3zlfjXUwvncR9dq4Z253uFBHPtlHXtJ6EalEqZR4feIcM29uROwSG%2ByHC3Oq%2BLR3YZ60gX5UTVZoG0xd%2FVTsjB%2FDHe4gtdBUrLuicXVdP7N8vZTYdlSPdktJFw4apkAfg9wef02nPXYue6hdkoYiZICNkZpXtL6krsHX97Nrjl9tZ%2BsqusdyhHGGxyTnjLq4COEL74CEKIxw62ZK3b02%2BN3JH4gweDHUL84KMVHuCR%2BsnJwTxKOUQv2LqcwZH2lM0MXGMvXIu8dONg9PxM%2BC5YMWMpoJwtmkMd6w6uF%2FoMn18lLu9oRAVu52%2BDcCqg3tIu%2Bnuf1EyaLl7mEhZlzKkwUD0DufisPzvp8DcXphvDcydJnGVSrVsu99EjlxNUPdO9c2eejZMNOvt78GOqUBkHC7eU3vlL7B7eE327E1sbYLUgDfgDzyiCl49bAF%2FgfAX0wgWfYINJdY6ydXhkWEd%2BRjgDIbzUFvqQu8%2BqHIlNRlji1HSQVAQVwJukAQBzOMukuO58oRBNFJk19tNSDLUGmbt6%2BX%2Bk4Mir2meFqLcJMiy92mmsK8dx5K%2F0nBRcCfeypSeFFigQqoFqoOOiZXVwTnzScnG7AsRsuTz1a0K%2FUCWqXU&X-Amz-Signature=8d4a2a841975c08a5710811b3e9071cb76754b5c7e349f65977d9f2f32131185&X-Amz-SignedHeaders=host&x-id=GetObject)

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

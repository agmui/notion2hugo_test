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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCWA2DTS%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T160744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCwmAG9YiWnfJWHCFJVrbT%2F6lAKgrU48tOaiMTn5rdiAwIgGHkTT49VDNbdkC8VKkI%2FtyUerwrFdstWEFDZa6YhsKsqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDFT3leyj%2BVa2sf7iircA9DK4mmHKojIGU5mF548xj3LLQunuKjFzGEhH2lrk1zNsODvs7uTQ%2FogLo%2FAsD%2BNbcQdPEVr67QsxkIry48tEyD%2BlAacb0qLIUZ9pRzYprr6jdwdcqcYNXk7Jyr3xorWxKwwMnyGMPVlRBBDWolUBJhO25hkeHFwo4dQEqbbSO58A8lx5doKiDeg1GO5tccN6KlHYF8g3PbfLTvOb2E9jKosC%2Fok%2BTOrPzabnJkC6knPz3r2Y%2B%2Fh0fsN0mXgGPUS06DNoCDrIbHuDlGsiuONA8CkklfcKWhN5o8HgAnKD2iEKNYlAMct%2FJV%2BM%2BsXKW4Ho1Ldeg9vVEkvcPk189DxWSfGBMJ9SJdySgwOwe39KER%2FcJczj0XEq6qkfyJy9ZtrWmIlq0t2%2FYF2rUgAZeX6OouXLU3p5d3YVcG7S4VK2ArycrWP%2BnMB1gFzSaVzSK3fwPBClN%2Bj9CDxtnQIl2S3OeCeatzUxCyTAWNkFkLE5ATLl51DTaFimi3wuYFipZOWvLtqIeHsNEixZC1nVfJKzsXGKvDgqcUbI7HoGb8UArWSgumlATuAa2g4yNmIv26ALTNyhVoa6eT3ESG%2FNMYFfMkicQH3m3h4%2BzKDLd%2BhmnOQezb6uYEe%2FZ4JSq6cMLCVjL4GOqUBSMrMZaR4mEntto1F0BiXlCDEFVBrVMUjIUUe9P1uMIsdcRO3LgZdA1C496Co62%2BwdeA8CMd6WbenFUNAcTeNCOQ00ksBphz7d7OunqIXX%2B4IRqEXWRAn1PtgGKuZvmrudvPvzy5YKQxaceoVLf2Wx0E1Y0%2Br03%2F%2BK%2BTXqMe8buPvr%2BT%2F8wiC74KNf%2B1%2F%2BjjDeB%2BOStc%2BZeFlMmPi%2B203lU%2BONQiL&X-Amz-Signature=ee9e9d84e85977743aef9f27fa8a30335abc6dbe1cce70cfb750d949f57ebe7f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCWA2DTS%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T160744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCwmAG9YiWnfJWHCFJVrbT%2F6lAKgrU48tOaiMTn5rdiAwIgGHkTT49VDNbdkC8VKkI%2FtyUerwrFdstWEFDZa6YhsKsqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDFT3leyj%2BVa2sf7iircA9DK4mmHKojIGU5mF548xj3LLQunuKjFzGEhH2lrk1zNsODvs7uTQ%2FogLo%2FAsD%2BNbcQdPEVr67QsxkIry48tEyD%2BlAacb0qLIUZ9pRzYprr6jdwdcqcYNXk7Jyr3xorWxKwwMnyGMPVlRBBDWolUBJhO25hkeHFwo4dQEqbbSO58A8lx5doKiDeg1GO5tccN6KlHYF8g3PbfLTvOb2E9jKosC%2Fok%2BTOrPzabnJkC6knPz3r2Y%2B%2Fh0fsN0mXgGPUS06DNoCDrIbHuDlGsiuONA8CkklfcKWhN5o8HgAnKD2iEKNYlAMct%2FJV%2BM%2BsXKW4Ho1Ldeg9vVEkvcPk189DxWSfGBMJ9SJdySgwOwe39KER%2FcJczj0XEq6qkfyJy9ZtrWmIlq0t2%2FYF2rUgAZeX6OouXLU3p5d3YVcG7S4VK2ArycrWP%2BnMB1gFzSaVzSK3fwPBClN%2Bj9CDxtnQIl2S3OeCeatzUxCyTAWNkFkLE5ATLl51DTaFimi3wuYFipZOWvLtqIeHsNEixZC1nVfJKzsXGKvDgqcUbI7HoGb8UArWSgumlATuAa2g4yNmIv26ALTNyhVoa6eT3ESG%2FNMYFfMkicQH3m3h4%2BzKDLd%2BhmnOQezb6uYEe%2FZ4JSq6cMLCVjL4GOqUBSMrMZaR4mEntto1F0BiXlCDEFVBrVMUjIUUe9P1uMIsdcRO3LgZdA1C496Co62%2BwdeA8CMd6WbenFUNAcTeNCOQ00ksBphz7d7OunqIXX%2B4IRqEXWRAn1PtgGKuZvmrudvPvzy5YKQxaceoVLf2Wx0E1Y0%2Br03%2F%2BK%2BTXqMe8buPvr%2BT%2F8wiC74KNf%2B1%2F%2BjjDeB%2BOStc%2BZeFlMmPi%2B203lU%2BONQiL&X-Amz-Signature=2c263af48e85d8cfa28d93d780b02e5c9d885862414c33ab47d697bba3d52f78&X-Amz-SignedHeaders=host&x-id=GetObject)

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

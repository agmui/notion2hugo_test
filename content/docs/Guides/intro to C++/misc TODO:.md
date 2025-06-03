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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6VEJKYT%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T140948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDVpLtVzHijrZdi9ddU795LfROioCUG4UFGpY3hiELCYQIhAJbeiI25Pl%2B00s9HGTjQ2KzK0ktmpKnBjfMjepekDXLvKv8DCBYQABoMNjM3NDIzMTgzODA1IgxKnoJQZmjE7zRiIOsq3ANfGfyAMeuEoGrobAXB8imTDWUYaKkJBjF1gl9Dp06v3bpKXjHXt3HnIFyGSMhw6pfCRs%2BKUHGZBnRN32U2OXDvGyYGJFZlsZhR5lPDWIp8R7sOC4149xBESrovgy02cipotbERaZhsqeb4CSaEhTFWfu9TRVC7LKFDfjrv25iRRywuLhudlCEuLMb1l%2FEUg375GiIKByKFZVniXr4KCySmrbJazQv3Bn4cWAuzvHOAKfjxsmFuAWu1LT8lRxlWGu%2BeGtPpn07xvvFb%2BLtY%2F8F8RX80%2FQ1eTkolwLN1pfrfFi83%2F16FWrH%2BYeYBAt2DZSpAm6phFOuRdx2CboIEkPRoP8%2BH5Hqu4bngVrCLGxVwrjAEJh3G5v7%2BHYO3YKet%2FGyzkEINw%2Fx5tNHwaIcua7qOuxS9KIZrKD8qVVeW4IeAIExQNdESW5tPgAgfrvELMP7rWfTY7xeeERrYJBa592A5IAM3Eg9C2Qhu3ohv6s5dr8miZ%2BXBDEUXqXsM4SDSMfWI92TzAAWqahlnsK1azZ8NxodofaxyfpVNgEQT41iFJwZ0n4KAOyDV3zIjVSEhLsc3ppGEldRmvqrToYtGP5oPKynP504Jff2LQ5iBUzLb9IXD3Ikn8z%2BLX5AZYTCJ5%2FvBBjqkAYsNeXCRzuxra%2Fyu%2Fjpa0FhjIEp39KaLX8hZfItKkQ2rJcigKC4AM6E96wwVlTKG3Tounzt1ajmHAaRg1GDi5Kl55PvzoCwPDyKfBQVsAfZhmIYo4TIx1BVoaUuH84Q%2FwBgfjlo6jQTkmU6ZM9Wr3bwLe6BeTN%2BpAmanWdBZL%2Bb3G%2BzAJTxhIJOFhjzP%2BCzn3DlWsfUS3dKilGo5fwqZiTfvqHP%2F&X-Amz-Signature=b57017eefb6303cdbc3f6aeff9e3d57f786c6720773611cbb6ea5dcddd2ad7cf&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6VEJKYT%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T140948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDVpLtVzHijrZdi9ddU795LfROioCUG4UFGpY3hiELCYQIhAJbeiI25Pl%2B00s9HGTjQ2KzK0ktmpKnBjfMjepekDXLvKv8DCBYQABoMNjM3NDIzMTgzODA1IgxKnoJQZmjE7zRiIOsq3ANfGfyAMeuEoGrobAXB8imTDWUYaKkJBjF1gl9Dp06v3bpKXjHXt3HnIFyGSMhw6pfCRs%2BKUHGZBnRN32U2OXDvGyYGJFZlsZhR5lPDWIp8R7sOC4149xBESrovgy02cipotbERaZhsqeb4CSaEhTFWfu9TRVC7LKFDfjrv25iRRywuLhudlCEuLMb1l%2FEUg375GiIKByKFZVniXr4KCySmrbJazQv3Bn4cWAuzvHOAKfjxsmFuAWu1LT8lRxlWGu%2BeGtPpn07xvvFb%2BLtY%2F8F8RX80%2FQ1eTkolwLN1pfrfFi83%2F16FWrH%2BYeYBAt2DZSpAm6phFOuRdx2CboIEkPRoP8%2BH5Hqu4bngVrCLGxVwrjAEJh3G5v7%2BHYO3YKet%2FGyzkEINw%2Fx5tNHwaIcua7qOuxS9KIZrKD8qVVeW4IeAIExQNdESW5tPgAgfrvELMP7rWfTY7xeeERrYJBa592A5IAM3Eg9C2Qhu3ohv6s5dr8miZ%2BXBDEUXqXsM4SDSMfWI92TzAAWqahlnsK1azZ8NxodofaxyfpVNgEQT41iFJwZ0n4KAOyDV3zIjVSEhLsc3ppGEldRmvqrToYtGP5oPKynP504Jff2LQ5iBUzLb9IXD3Ikn8z%2BLX5AZYTCJ5%2FvBBjqkAYsNeXCRzuxra%2Fyu%2Fjpa0FhjIEp39KaLX8hZfItKkQ2rJcigKC4AM6E96wwVlTKG3Tounzt1ajmHAaRg1GDi5Kl55PvzoCwPDyKfBQVsAfZhmIYo4TIx1BVoaUuH84Q%2FwBgfjlo6jQTkmU6ZM9Wr3bwLe6BeTN%2BpAmanWdBZL%2Bb3G%2BzAJTxhIJOFhjzP%2BCzn3DlWsfUS3dKilGo5fwqZiTfvqHP%2F&X-Amz-Signature=da9c96bb97eed7f36ec5b3413ba9e9071d2089e7ea45cfbb42aa3d3c1d2a51d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

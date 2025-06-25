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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXN3CX4L%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T110841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCBiXMWtAbImBEpunNOOa9q4SHoUWRS7WQf0TO8zlSK1wIhAM%2Beu0q%2BtVRWc3PEdphy5COmiuaV8zzBfeOE%2Fuu7tvHzKv8DCEQQABoMNjM3NDIzMTgzODA1IgyckVb2uoEmZD3%2FiNYq3AON3eRPa7%2F8gG4TgwexbpRaYGEkkfYLEFoTNwzUYZ3PomaTz63p6Y9n1hf3dskSxl%2Fr%2FWZRaFT66lJ2nD32EU6pRe3SL5SHoKiI8M4ain2PB%2FVErbVwuJ28mUn85FPnV1CI6Mr6QMsIwb396HsgFcTMmNi9HrHwTRZJE73dw00QJCGtFQDyVOKjhPvlPdsYY4rzxjLTiHtPUgmTMQDJz1ABB%2FmgCtJIJCBGZm4mScpXhKIfGfy%2FpnQ0z2w7QCH%2FkrKyCYepAXzwpUmiOv4IhOJ%2BzMizVgPMa8C8rNb87LvmUBUL%2B%2BL2SpKai6CaikZsnZqKBlO40lfCzzy%2B05npje9F9BrKXHfUnnmNYhl30qJ1bYXWLIOIlDMRqxkrrspuubhK6SUtDwLGtuZze0BnYRoZ%2BQysNKQASq0DeS2SRg7kOPY3jjEsRQeXi%2BHfoj5jtgMgvzccag0WFTYYcU1rku7kZQpdqh9ICPRKiSHCLsDffnEDbmhNREXXEqhFhliMTN96PLcobXhF6M62srgmy0lrQ%2FMxmC9rdfGJQx8kuMY67tjqTqI4MlwrpCTq%2BovKpElD3J0hvNnSjOzchKC7mZp%2F9N2e%2BSPuUswBl2nuSQxD0CTH0ACBkU5mPXCyFzCwo%2B%2FCBjqkAUviN%2FfGFsK9ImqhCLCa2IMh9gkJJJg3T4SZOxDSkTKmcabVXNQt311kSZQAnLJbiZkZlsHsVoWAzAqL6vNYYTXxG%2FjynKN6pdjXbbBjdqNAQOSIO3rbgjbf6RAqZZO%2BnHaTxS63BvwpihAtowsWXXuf0dbND6405j1Q49HDnw4sDWb%2FP1ek6JtvGoXt%2F7jCp1BUHqroqOCf9CVUj%2BfBysLaz8ih&X-Amz-Signature=b227a76162d9ff6b88b6a6c0f74a8ad1410c1318e171ba815063aef343315b5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXN3CX4L%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T110841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCBiXMWtAbImBEpunNOOa9q4SHoUWRS7WQf0TO8zlSK1wIhAM%2Beu0q%2BtVRWc3PEdphy5COmiuaV8zzBfeOE%2Fuu7tvHzKv8DCEQQABoMNjM3NDIzMTgzODA1IgyckVb2uoEmZD3%2FiNYq3AON3eRPa7%2F8gG4TgwexbpRaYGEkkfYLEFoTNwzUYZ3PomaTz63p6Y9n1hf3dskSxl%2Fr%2FWZRaFT66lJ2nD32EU6pRe3SL5SHoKiI8M4ain2PB%2FVErbVwuJ28mUn85FPnV1CI6Mr6QMsIwb396HsgFcTMmNi9HrHwTRZJE73dw00QJCGtFQDyVOKjhPvlPdsYY4rzxjLTiHtPUgmTMQDJz1ABB%2FmgCtJIJCBGZm4mScpXhKIfGfy%2FpnQ0z2w7QCH%2FkrKyCYepAXzwpUmiOv4IhOJ%2BzMizVgPMa8C8rNb87LvmUBUL%2B%2BL2SpKai6CaikZsnZqKBlO40lfCzzy%2B05npje9F9BrKXHfUnnmNYhl30qJ1bYXWLIOIlDMRqxkrrspuubhK6SUtDwLGtuZze0BnYRoZ%2BQysNKQASq0DeS2SRg7kOPY3jjEsRQeXi%2BHfoj5jtgMgvzccag0WFTYYcU1rku7kZQpdqh9ICPRKiSHCLsDffnEDbmhNREXXEqhFhliMTN96PLcobXhF6M62srgmy0lrQ%2FMxmC9rdfGJQx8kuMY67tjqTqI4MlwrpCTq%2BovKpElD3J0hvNnSjOzchKC7mZp%2F9N2e%2BSPuUswBl2nuSQxD0CTH0ACBkU5mPXCyFzCwo%2B%2FCBjqkAUviN%2FfGFsK9ImqhCLCa2IMh9gkJJJg3T4SZOxDSkTKmcabVXNQt311kSZQAnLJbiZkZlsHsVoWAzAqL6vNYYTXxG%2FjynKN6pdjXbbBjdqNAQOSIO3rbgjbf6RAqZZO%2BnHaTxS63BvwpihAtowsWXXuf0dbND6405j1Q49HDnw4sDWb%2FP1ek6JtvGoXt%2F7jCp1BUHqroqOCf9CVUj%2BfBysLaz8ih&X-Amz-Signature=43cbbedc5dedb5ab6608b68c4d8efcfd598f050ad60d02361321d2d89f52251b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

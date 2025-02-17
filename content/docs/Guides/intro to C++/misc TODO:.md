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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GTHBVS2%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T160850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBM1SUBJn1UcCbTv%2BsrwvexIdWG14eq8HXtzfppH6k%2BJAiEAiyXLapiaDYgT7lX1EcQBsrOmfYomDDN0ttfDEnO48n0q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDNpxJviwDLGtWki%2F7yrcAwhV4WkSiIlsuvZLL7kDOA195L0rs1fI6BfcQoU7ev%2Fjtw2s7zZgFXxlocOKV2KBSpOb97ArwDIotMxyCk%2Bh%2FAVpFMIsEtNBeG%2FtY4O9A4hZa2Nf6ccyfjD0Ex51Lb9F0R28QiFPZhIHcCeAu3HuGMuN5TeUlkeDsH2tWzRipkE7xKmSgIP1BsMiFzJkpO1l9EfsInYXUi%2BMW%2Bi54DZWfO42cMKgJQY0C00DCLjqEbKJSOdEfrpDMk%2BpJ4GG93ZG9p%2Fb%2Fg9L4O1BE1Bb3sMrDemtQfBauYJo96dBpbj4k0IEkqk1hWsFJSbVKuj%2Bm9jKI68%2FjZtcj3F2BzZph5aLd85cGcEymf3sAj2oCkcvXromVTF07mA5szdtiqhp8%2FzKq4qE1VZCHKhFCwePYHJK0Y2rKTRbdmpcozSkVmNYPRYVqqEdUTtrHPjhZ2lTuUZLYzXjp%2BL7Mj0tN99W1n4wNEGjU%2FnjgWahas6VRhZusfcpEwka4XgJw4YiQk7ko4vrAsZo2EEmhxrrgpVmNFpgbY03VbHDZgOE7h4RSNemJRmYonpUcQhJBg09kcfA%2FLTlbbBtutPrbPYxSuzvtUKgsLuHIUH8yA3cIStN7cL88qABA%2BcXEXkI7yMoi8JlMNKWzb0GOqUB8iIhDsR6tba7odRcgW36aVGd3loNE7lvB7ULx8WF%2B5B1oucb%2FP8BdRsBOAZ%2F%2BFAbQcj9NeXThYnjivTqw5IukdMfEGyGDvDdZI0Ev%2FKGVMjDpJqnvBOKBt62fcP%2BLCwAoxQN2X3brr86iJ8aG7rd5WjgL72v6VJvOgY2pjALrtEoXrPDSRCcYt0XyTVFcJM2KXWaP1chJHCLm3YpdEewQQeyQpuC&X-Amz-Signature=9b0c30d9a61e88187348c6abb9247a0414301838ad07d2898079c7cebabeeb6f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GTHBVS2%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T160850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBM1SUBJn1UcCbTv%2BsrwvexIdWG14eq8HXtzfppH6k%2BJAiEAiyXLapiaDYgT7lX1EcQBsrOmfYomDDN0ttfDEnO48n0q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDNpxJviwDLGtWki%2F7yrcAwhV4WkSiIlsuvZLL7kDOA195L0rs1fI6BfcQoU7ev%2Fjtw2s7zZgFXxlocOKV2KBSpOb97ArwDIotMxyCk%2Bh%2FAVpFMIsEtNBeG%2FtY4O9A4hZa2Nf6ccyfjD0Ex51Lb9F0R28QiFPZhIHcCeAu3HuGMuN5TeUlkeDsH2tWzRipkE7xKmSgIP1BsMiFzJkpO1l9EfsInYXUi%2BMW%2Bi54DZWfO42cMKgJQY0C00DCLjqEbKJSOdEfrpDMk%2BpJ4GG93ZG9p%2Fb%2Fg9L4O1BE1Bb3sMrDemtQfBauYJo96dBpbj4k0IEkqk1hWsFJSbVKuj%2Bm9jKI68%2FjZtcj3F2BzZph5aLd85cGcEymf3sAj2oCkcvXromVTF07mA5szdtiqhp8%2FzKq4qE1VZCHKhFCwePYHJK0Y2rKTRbdmpcozSkVmNYPRYVqqEdUTtrHPjhZ2lTuUZLYzXjp%2BL7Mj0tN99W1n4wNEGjU%2FnjgWahas6VRhZusfcpEwka4XgJw4YiQk7ko4vrAsZo2EEmhxrrgpVmNFpgbY03VbHDZgOE7h4RSNemJRmYonpUcQhJBg09kcfA%2FLTlbbBtutPrbPYxSuzvtUKgsLuHIUH8yA3cIStN7cL88qABA%2BcXEXkI7yMoi8JlMNKWzb0GOqUB8iIhDsR6tba7odRcgW36aVGd3loNE7lvB7ULx8WF%2B5B1oucb%2FP8BdRsBOAZ%2F%2BFAbQcj9NeXThYnjivTqw5IukdMfEGyGDvDdZI0Ev%2FKGVMjDpJqnvBOKBt62fcP%2BLCwAoxQN2X3brr86iJ8aG7rd5WjgL72v6VJvOgY2pjALrtEoXrPDSRCcYt0XyTVFcJM2KXWaP1chJHCLm3YpdEewQQeyQpuC&X-Amz-Signature=55d7b090f08fe7b66c4a84f86d7b73a0a7c5b234de78e6a1ffeba26b5eff61c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

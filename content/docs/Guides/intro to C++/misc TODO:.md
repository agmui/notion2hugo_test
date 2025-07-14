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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666ZQHU6T%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T210851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQC8qxlnhF6mBStd1iZ7soC93IoXC21O3tzUnHkgQ%2FQ5egIhAMST3yNHyW%2F6CjwFBJo8XQKg%2Fl%2FHmL1VVJJc0jyGJpeFKv8DCDQQABoMNjM3NDIzMTgzODA1IgyGDyY0RVE%2FLpJcaYUq3AMu2da8bgcoSV5DI7Fv6cAf5%2BwjYReY4ckIuI6dlyUKq04zfWCIDUVMyqMzABVqa2fZ%2FE002YiQ%2FGl9Y4swKTASFgCd%2BqkWOlMpG2d20QuTdZ8B8gDhgU9rqOtPVNK98%2B0Q%2BXze2ewAJ4Lrpy9nnc%2BxHynuIyw5pu2E%2BS4exhkpN5kmmAl6JMqxuEjetx1TYTrAzC7ClN2alKz1DY%2FyCqP6I5i%2Bfnl5oMPvy27nwXcYlq3zjUZu2V9yhuN0IAr40%2FxfZcib0CGmeH7aSZ0BgqeS4vgmv7q0mnQmPynM8WF4Io3puvi6MLku%2BZVYgM4plROVYZQqPAgAP5bog7PLrDEE6XAUdCaL%2Fb4QALEd75EykHKMNyqTA7%2B05VC7DISMt5agDm7%2BLeSwLjCrD2qlWWemDAEVUHGeFaXzQ79ECct%2FXhhCL18RNdqDrKq6baLsblwGLr6X0Whg6PphYLZcEf7ctmTpRDyJu1cGnsYCpxrlumsUvA10DZMbISSaY%2BMFA7c71pb%2Fn57xUOvv3mtl8fXc3v20HT3Lce%2BTytU0CRR8PXEw%2FNTRj6%2BYETpLUT13fMEwuMYLcn1ktAGpmnPfjQj58hE7ic%2FzYP1EK%2Bk5fi6mwuq2MC20TPzlg5PntTC%2BpNXDBjqkAbYEn9Ru1ZSrQUII%2FT1Z7sMrvD6XkehfDmDEKwSO7nPa48ApmY87MUal%2BAVYdi0OgK28zgc5d8tw1tfAcAvLdhKp84HhvX2VELPeQu4y4axWHgE1YlDT7LZ7ClMJg%2Bz1Mh%2FwsGo2zwHZQ%2BynEzMm6qCiFrWx6pfdBuGEdOcWUzsUKzYLfAN%2FuhP7%2F%2BygjPwpBBMWx%2BaYV8leE9PqKxnm3Vcfzt14&X-Amz-Signature=90dc9bc6909a1d3cca88e582639651b44d319d197e1e8aabc906e1f828ef7dfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666ZQHU6T%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T210851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQC8qxlnhF6mBStd1iZ7soC93IoXC21O3tzUnHkgQ%2FQ5egIhAMST3yNHyW%2F6CjwFBJo8XQKg%2Fl%2FHmL1VVJJc0jyGJpeFKv8DCDQQABoMNjM3NDIzMTgzODA1IgyGDyY0RVE%2FLpJcaYUq3AMu2da8bgcoSV5DI7Fv6cAf5%2BwjYReY4ckIuI6dlyUKq04zfWCIDUVMyqMzABVqa2fZ%2FE002YiQ%2FGl9Y4swKTASFgCd%2BqkWOlMpG2d20QuTdZ8B8gDhgU9rqOtPVNK98%2B0Q%2BXze2ewAJ4Lrpy9nnc%2BxHynuIyw5pu2E%2BS4exhkpN5kmmAl6JMqxuEjetx1TYTrAzC7ClN2alKz1DY%2FyCqP6I5i%2Bfnl5oMPvy27nwXcYlq3zjUZu2V9yhuN0IAr40%2FxfZcib0CGmeH7aSZ0BgqeS4vgmv7q0mnQmPynM8WF4Io3puvi6MLku%2BZVYgM4plROVYZQqPAgAP5bog7PLrDEE6XAUdCaL%2Fb4QALEd75EykHKMNyqTA7%2B05VC7DISMt5agDm7%2BLeSwLjCrD2qlWWemDAEVUHGeFaXzQ79ECct%2FXhhCL18RNdqDrKq6baLsblwGLr6X0Whg6PphYLZcEf7ctmTpRDyJu1cGnsYCpxrlumsUvA10DZMbISSaY%2BMFA7c71pb%2Fn57xUOvv3mtl8fXc3v20HT3Lce%2BTytU0CRR8PXEw%2FNTRj6%2BYETpLUT13fMEwuMYLcn1ktAGpmnPfjQj58hE7ic%2FzYP1EK%2Bk5fi6mwuq2MC20TPzlg5PntTC%2BpNXDBjqkAbYEn9Ru1ZSrQUII%2FT1Z7sMrvD6XkehfDmDEKwSO7nPa48ApmY87MUal%2BAVYdi0OgK28zgc5d8tw1tfAcAvLdhKp84HhvX2VELPeQu4y4axWHgE1YlDT7LZ7ClMJg%2Bz1Mh%2FwsGo2zwHZQ%2BynEzMm6qCiFrWx6pfdBuGEdOcWUzsUKzYLfAN%2FuhP7%2F%2BygjPwpBBMWx%2BaYV8leE9PqKxnm3Vcfzt14&X-Amz-Signature=50b55dbf87ee3d88d7711c663304b155ab9322d2ad152dec51c6d32e6380df89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

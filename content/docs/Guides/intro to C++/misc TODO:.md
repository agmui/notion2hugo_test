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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NDGG7MY%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCGa6P8DbmN9GX3Qdt168%2FEzuwvrGq4g511sztHtq849wIhAN70yvsj6OlVVRqyckO2DQZPmiey7HyDbQqQnD4gOofXKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZjEfp8VN%2BLhpvRaMq3APTL7yYrG6QbISyN61iJrdgoJpSpX4W2x1aguJ6r8UOe3Sfln2twkrlqRJQvJFRNnSvdA%2Fn1%2BhicZE2KFrJCt3lxlX2nFf2OFRz3iSVteUWK4ijEQIfWTYPWmPn7l8MIh%2B7%2FHgkkA7r5PGHYS8X7mJ2gVit6S735O1rQ%2Bmoc3e%2FvAtMFSEwz2jWHKs5M%2F0ZkJ0daTvrOq9rnaSOyS2f7A1SWABRITUTwlNQKAaFvtTjFfUOCR2sTq%2FG1czK5H1ABPXQqF4%2Bark479M50a3BrzVgqPjNk%2Fz6%2FEL0JP1Lu3gMDECoCdUW0RY8tXOAiFWHotXVD0cDddtjJ5ZozDdq%2BG0ru7RYdlADYWQmDzcIM3sDYEuRgvm0CqeIzJ%2BQH4A4UGVV35zrrJPVk28ENzeH92xYC8rw4InFcW2v6vOimveknddPSCcwtme3h7VgbQf%2FdQPmEYIIAj3Rmy617Qf3hiZ8z4UZ6T0CWT%2BEUjiS0Lj4smiLcEvLTiwu3850o2n6NXh8EzKITC81z1mjlJvpqmgGziPf058rcJhMGqUwlHbsrsXIsEWHirkA5dNs8imObrKegEp5Mm%2FAuTt0e6C6QDwnzYn1TOek%2B%2FOc86RobxnSYesf1IdqH9CskhTagjD9hfK%2BBjqkAcZC5XZGULvSQ4gPpnHuA6TBxoIwhwaM%2F6q5m5%2F7DcWvDLRL9JELvktbTYvrrOarIj0WW%2FTIiQzh1oTLYm8w1NnwwyYXib7coxVzDkotbi2RkAia8FHBN9reQfnCFq5DvnN1HdqQbdI1SUkU85VSdFLUgKPk%2Bac83DJn%2F6L15UNoQ1LODuwEVgE7nWGmHspS0PghBjFd4WHovPbzx1OE1l2xd71f&X-Amz-Signature=3803cca5dee8a39c9ab9f25ae99c8b0b8de85cbd4d1a386c33f04f41d1d72098&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NDGG7MY%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCGa6P8DbmN9GX3Qdt168%2FEzuwvrGq4g511sztHtq849wIhAN70yvsj6OlVVRqyckO2DQZPmiey7HyDbQqQnD4gOofXKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZjEfp8VN%2BLhpvRaMq3APTL7yYrG6QbISyN61iJrdgoJpSpX4W2x1aguJ6r8UOe3Sfln2twkrlqRJQvJFRNnSvdA%2Fn1%2BhicZE2KFrJCt3lxlX2nFf2OFRz3iSVteUWK4ijEQIfWTYPWmPn7l8MIh%2B7%2FHgkkA7r5PGHYS8X7mJ2gVit6S735O1rQ%2Bmoc3e%2FvAtMFSEwz2jWHKs5M%2F0ZkJ0daTvrOq9rnaSOyS2f7A1SWABRITUTwlNQKAaFvtTjFfUOCR2sTq%2FG1czK5H1ABPXQqF4%2Bark479M50a3BrzVgqPjNk%2Fz6%2FEL0JP1Lu3gMDECoCdUW0RY8tXOAiFWHotXVD0cDddtjJ5ZozDdq%2BG0ru7RYdlADYWQmDzcIM3sDYEuRgvm0CqeIzJ%2BQH4A4UGVV35zrrJPVk28ENzeH92xYC8rw4InFcW2v6vOimveknddPSCcwtme3h7VgbQf%2FdQPmEYIIAj3Rmy617Qf3hiZ8z4UZ6T0CWT%2BEUjiS0Lj4smiLcEvLTiwu3850o2n6NXh8EzKITC81z1mjlJvpqmgGziPf058rcJhMGqUwlHbsrsXIsEWHirkA5dNs8imObrKegEp5Mm%2FAuTt0e6C6QDwnzYn1TOek%2B%2FOc86RobxnSYesf1IdqH9CskhTagjD9hfK%2BBjqkAcZC5XZGULvSQ4gPpnHuA6TBxoIwhwaM%2F6q5m5%2F7DcWvDLRL9JELvktbTYvrrOarIj0WW%2FTIiQzh1oTLYm8w1NnwwyYXib7coxVzDkotbi2RkAia8FHBN9reQfnCFq5DvnN1HdqQbdI1SUkU85VSdFLUgKPk%2Bac83DJn%2F6L15UNoQ1LODuwEVgE7nWGmHspS0PghBjFd4WHovPbzx1OE1l2xd71f&X-Amz-Signature=4d27451d8a17fc2820e541648ab7e48271cdab1b30a926e39a5157cf92dbf79b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

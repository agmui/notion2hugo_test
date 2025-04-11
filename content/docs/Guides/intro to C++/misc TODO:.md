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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655QGDMYO%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T003939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCjts8RsocbD%2BxVtPnsnZJNmCR%2FQztaOrYQ8XuG%2F2g4HwIhAO2ux6uMyQf%2F4BcsbyMk9cLyeZY18Fhdt2f1uNc2r%2F2LKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDmKV79F%2B1Xgz2rakq3AM%2FqW7j2%2BqZJTUbz4Yaj2Nm3QqawAyiKZZ8gfRK1IUu9SGNA3hfML9inWjBopIbgVUCHXwaskOYWjv4uFS55BOpPRDJ5wgZNJbzoVNeTFVFG8ErqZ1oXbovEI8siPjPjFi%2FUuKmiMfyN%2F4uWABR1DKYICgOr60%2FXXBU5ySvXl1jlRL7cS71JubKGHAV43s4ZQ1zZSh8UZtLoN%2FoBt3CRs8IQ%2BrP8RdWqng8rqmKpyy3L32qBHVn1HigXG4QBr%2F26pLffNEjmCrqPcykJKDmLUlZNnIyDUKrJgc0fS1f2ynj5YgIDPydENgVxqSo%2FEPbyVKXj2wEpKZKDRau1rTuLmzlr0elFXQdvjTnBD4JPbfj0uXKT2uEvO5ThSn%2FKO4D%2BjmBvj0Asi1oH9ScA7DsyVTBYDPhdHfZA2fT8oD6zWLEQhUiaUmx5RBTxV3Pm%2Bqby21a5i5so1I8d%2B4Ytm6nNQHzryuiuuFwmThKQVfYRuZeHTwhNN5oGN%2FONqM5wuUPsHMY8uIvOpiIowl5ZsDhs6IKRx2Txx%2FF9cvTP9jAprV29LoYl2vVvjzGjEAvu%2B7TfmL63yngJZhN%2Fdk0JVJWbpu9TvaxGE1xJDreC772QICZXryqJvgLBEXjD0QW7jDTwuG%2FBjqkAcsRf%2BNAqaIylkU0su7Hd6mHQn%2FDJenhVw4ZSRipnWhRjq3RTpLk9c5sp8r7IKLPzKca2AA0oSN6m1wZEhFyExC3Cu78R2%2BLXOZvWFbrNvMby7FOdxIa9Yx%2BEeevBX1KK6Xz9%2Fvdk2VmDXGi%2FBIUbdARTcqanW0kDRd06UbVdq%2Bsam5FmXSHg9%2BzLryOjA16TFqRz3U9lixGt2TVhtpPBP9TIvrs&X-Amz-Signature=0cd95319e6194768038679ddea5f7b71f69ae199cd57a5bfdbce03452bef128d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655QGDMYO%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T003939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCjts8RsocbD%2BxVtPnsnZJNmCR%2FQztaOrYQ8XuG%2F2g4HwIhAO2ux6uMyQf%2F4BcsbyMk9cLyeZY18Fhdt2f1uNc2r%2F2LKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDmKV79F%2B1Xgz2rakq3AM%2FqW7j2%2BqZJTUbz4Yaj2Nm3QqawAyiKZZ8gfRK1IUu9SGNA3hfML9inWjBopIbgVUCHXwaskOYWjv4uFS55BOpPRDJ5wgZNJbzoVNeTFVFG8ErqZ1oXbovEI8siPjPjFi%2FUuKmiMfyN%2F4uWABR1DKYICgOr60%2FXXBU5ySvXl1jlRL7cS71JubKGHAV43s4ZQ1zZSh8UZtLoN%2FoBt3CRs8IQ%2BrP8RdWqng8rqmKpyy3L32qBHVn1HigXG4QBr%2F26pLffNEjmCrqPcykJKDmLUlZNnIyDUKrJgc0fS1f2ynj5YgIDPydENgVxqSo%2FEPbyVKXj2wEpKZKDRau1rTuLmzlr0elFXQdvjTnBD4JPbfj0uXKT2uEvO5ThSn%2FKO4D%2BjmBvj0Asi1oH9ScA7DsyVTBYDPhdHfZA2fT8oD6zWLEQhUiaUmx5RBTxV3Pm%2Bqby21a5i5so1I8d%2B4Ytm6nNQHzryuiuuFwmThKQVfYRuZeHTwhNN5oGN%2FONqM5wuUPsHMY8uIvOpiIowl5ZsDhs6IKRx2Txx%2FF9cvTP9jAprV29LoYl2vVvjzGjEAvu%2B7TfmL63yngJZhN%2Fdk0JVJWbpu9TvaxGE1xJDreC772QICZXryqJvgLBEXjD0QW7jDTwuG%2FBjqkAcsRf%2BNAqaIylkU0su7Hd6mHQn%2FDJenhVw4ZSRipnWhRjq3RTpLk9c5sp8r7IKLPzKca2AA0oSN6m1wZEhFyExC3Cu78R2%2BLXOZvWFbrNvMby7FOdxIa9Yx%2BEeevBX1KK6Xz9%2Fvdk2VmDXGi%2FBIUbdARTcqanW0kDRd06UbVdq%2Bsam5FmXSHg9%2BzLryOjA16TFqRz3U9lixGt2TVhtpPBP9TIvrs&X-Amz-Signature=ae0b5593139765df7b51d86c7ad7a247e3c08e179aa10031b055e990ec199f26&X-Amz-SignedHeaders=host&x-id=GetObject)

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

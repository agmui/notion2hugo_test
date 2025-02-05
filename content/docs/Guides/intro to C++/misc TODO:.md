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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WJRIIAN%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T131455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCph3RorK3rn%2BXcslTiUOx8zZf3gUPlGsfziH8QivvSFgIhAKrd%2B%2FyhRvilyguw6nXK%2Fokbcpv1wqvwfz3rxs6gH9E7Kv8DCEQQABoMNjM3NDIzMTgzODA1IgzvU3csTiBG6OLuBFoq3AO%2FAlSwSei%2FbatBeU9phaC19T8wik1Sle0zShqoZ%2BubD7u%2B1AHZWsa%2B6fToxHsoCO0EeJYbAlgfO0jbLnYCBGMQrxxcCAP6XxdiOzQskOewGEhDLE4Y%2BzFiA7cfWlw21dxCwE6jetJPpzZI8clDAyDSKX9FJIwPFT%2FxBBBZGuktr17QAyw0nZ8iunE7zDCze%2Bj6VmBm5Yx2NOvuzkJVrQPOA7ufyaCqYxaKjK1NCIJHksvG%2B8iAvQOR4cfkvXyARNV0RO%2BnQFtedCKzjYNTTcve8vZSXhq4fZaMs684Tkd51fzzlGiQBU4R8fj6nKIAB%2BR%2FXmDopkEZf9yXP59d%2FZU2NMGteTbZW5Meai3KXO4d4oUF%2ButSOwnH16cA7Wpq5bW9i3K1ZttBccJcKf31jxX8YserVOej5fpX2AY88UiGkdHjRVr5rEYoRJvMsFQT6RrhLxMGj5nubFE2zReqBwiD%2FBqz9Fnln0eBZi8zuydZm%2BcrSfmi78KuxNaF%2F1PYHEjWlT0cDIzLJJvKRUjmKdmAHzn%2Bwc6Q5XTyKGbu6d1eLkQz7yoFJht%2FP%2FaQk4UFM5rIJGN20HHJIQkPL7xITEjG2JNvOK6YmFiU%2FYuvM4RKKlfk29ZgmCYFDBhGZjDCjI29BjqkAaL6yZWljyqtnDQx2eSdnABrSz5YxhhZId45SHWIfEQbmX889OOQEAeOBIiCeAR0nVYiN4N%2BSS5eIV94ZqemEQcAcAxYy5VTrBGL9gXMKGqpRYe%2Ba8StdfYIbAT1Ittu0PoYxiEdfscR7vYlej9nhrYHqfcAEYsEFUoSEI%2F24vWgQbi8WmX%2FMi4Qg%2FPh%2FnzPslwDrkFckiTVFUFn8QmGyxT%2F%2FeTv&X-Amz-Signature=553b1eabbe2dac42ef247128e780d0e7cc2fc86258efb3824dc0efdee3f94860&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WJRIIAN%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T131455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCph3RorK3rn%2BXcslTiUOx8zZf3gUPlGsfziH8QivvSFgIhAKrd%2B%2FyhRvilyguw6nXK%2Fokbcpv1wqvwfz3rxs6gH9E7Kv8DCEQQABoMNjM3NDIzMTgzODA1IgzvU3csTiBG6OLuBFoq3AO%2FAlSwSei%2FbatBeU9phaC19T8wik1Sle0zShqoZ%2BubD7u%2B1AHZWsa%2B6fToxHsoCO0EeJYbAlgfO0jbLnYCBGMQrxxcCAP6XxdiOzQskOewGEhDLE4Y%2BzFiA7cfWlw21dxCwE6jetJPpzZI8clDAyDSKX9FJIwPFT%2FxBBBZGuktr17QAyw0nZ8iunE7zDCze%2Bj6VmBm5Yx2NOvuzkJVrQPOA7ufyaCqYxaKjK1NCIJHksvG%2B8iAvQOR4cfkvXyARNV0RO%2BnQFtedCKzjYNTTcve8vZSXhq4fZaMs684Tkd51fzzlGiQBU4R8fj6nKIAB%2BR%2FXmDopkEZf9yXP59d%2FZU2NMGteTbZW5Meai3KXO4d4oUF%2ButSOwnH16cA7Wpq5bW9i3K1ZttBccJcKf31jxX8YserVOej5fpX2AY88UiGkdHjRVr5rEYoRJvMsFQT6RrhLxMGj5nubFE2zReqBwiD%2FBqz9Fnln0eBZi8zuydZm%2BcrSfmi78KuxNaF%2F1PYHEjWlT0cDIzLJJvKRUjmKdmAHzn%2Bwc6Q5XTyKGbu6d1eLkQz7yoFJht%2FP%2FaQk4UFM5rIJGN20HHJIQkPL7xITEjG2JNvOK6YmFiU%2FYuvM4RKKlfk29ZgmCYFDBhGZjDCjI29BjqkAaL6yZWljyqtnDQx2eSdnABrSz5YxhhZId45SHWIfEQbmX889OOQEAeOBIiCeAR0nVYiN4N%2BSS5eIV94ZqemEQcAcAxYy5VTrBGL9gXMKGqpRYe%2Ba8StdfYIbAT1Ittu0PoYxiEdfscR7vYlej9nhrYHqfcAEYsEFUoSEI%2F24vWgQbi8WmX%2FMi4Qg%2FPh%2FnzPslwDrkFckiTVFUFn8QmGyxT%2F%2FeTv&X-Amz-Signature=1cd1e487de79215284fc076d1ca31811864e51a0bc35d28548d879870b88df8e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

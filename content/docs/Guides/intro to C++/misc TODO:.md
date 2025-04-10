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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQQEMNNH%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T132028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCyLurB6RERy%2B3vfJ3DKcmhEcnB%2FSU%2FjtjwHlWI8FImVQIhANOCGGdOoYbPLmSykNtpEpKve7ssrVGCYnb8Rej5C%2FpxKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgH8TqD7v3egMSzzIq3APDyGj6LUng3P59gKsJk%2Bjl9LiaVPV0UZF4jMQOyN%2Fk4TzJ9f105ejH2f8MZiH%2FP2CAvMufa6rq2i8yBP5DFa%2Bfq9TKklsa11K5tSLSMLNCx7g6PnbrxV%2BarYeEIbKvZwjbVYNWLFTTbnilxjcRweS%2FV8CxlNxBaO%2BiHJeKHUhzxnITGYHLk3fRByaekP9iYwZBM5CILg3UKgh5Ut7f2r1%2BB6Y9rLjNIP8VRC4cSSisQkCWbdrf7xvKzrOEltxjqv5UUfDBro%2Fmy4Ce2oajBvRuOh2nZvmMlTh8Z%2FWKj6srttllTy%2BLGgaZl7djrvdleUEpfJ0zVg%2B7E3M2EDOk5u3tIWmDSf4tE1a8wVSHE1bVp2GSOoWpwgX4A93v4OdBEf3U5E03xOqZd3N4ESBScUfHhSTQ%2BhzykvdZKtQOgaPNJc68ob9L52FVSlIZzqvnRP6WN0Gt1NTDnXlVKJw7CBG41IC0ihSYRD0g0966p9b9%2FWiP%2FTqQ40zuzgnYLXB%2BBIyih3dj1FyC%2FYRPAuzF10uv1cMR0G%2FdqYdgw%2FbhTrZMyPLLbioQL9Tbj4TLecwcyP%2Bd4gJ%2FRaO0OFKvhLvMtRZla3H9R00WHK4mjoAj5gY8sx%2Ftc8ECn3LqYak5pTDIit%2B%2FBjqkAaD1XCo6H9qPDSsCM%2FlLYUbwPHpnDaggP5V%2BFh1iDYGWv0Db1iNNJk%2BMZe8wIczcHtFxEEBQsddl%2BVuGtFyUgI3Bkz2LTgABQT0UxuLQR7LfbMohPH7QBhx0k56twZ5uzlUWEgEEeydBWG1LW8viiYum5FvFq4PUaGWQ4xMmE5yCkeWtATXrQbjkLrHOSsKFkIlKulVr9BECh655up1aBRC%2FBMx%2F&X-Amz-Signature=8cfbb92a5d486039d9cef114391d86482966de084c9a4c24f3f573947dc0f970&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQQEMNNH%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T132028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCyLurB6RERy%2B3vfJ3DKcmhEcnB%2FSU%2FjtjwHlWI8FImVQIhANOCGGdOoYbPLmSykNtpEpKve7ssrVGCYnb8Rej5C%2FpxKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgH8TqD7v3egMSzzIq3APDyGj6LUng3P59gKsJk%2Bjl9LiaVPV0UZF4jMQOyN%2Fk4TzJ9f105ejH2f8MZiH%2FP2CAvMufa6rq2i8yBP5DFa%2Bfq9TKklsa11K5tSLSMLNCx7g6PnbrxV%2BarYeEIbKvZwjbVYNWLFTTbnilxjcRweS%2FV8CxlNxBaO%2BiHJeKHUhzxnITGYHLk3fRByaekP9iYwZBM5CILg3UKgh5Ut7f2r1%2BB6Y9rLjNIP8VRC4cSSisQkCWbdrf7xvKzrOEltxjqv5UUfDBro%2Fmy4Ce2oajBvRuOh2nZvmMlTh8Z%2FWKj6srttllTy%2BLGgaZl7djrvdleUEpfJ0zVg%2B7E3M2EDOk5u3tIWmDSf4tE1a8wVSHE1bVp2GSOoWpwgX4A93v4OdBEf3U5E03xOqZd3N4ESBScUfHhSTQ%2BhzykvdZKtQOgaPNJc68ob9L52FVSlIZzqvnRP6WN0Gt1NTDnXlVKJw7CBG41IC0ihSYRD0g0966p9b9%2FWiP%2FTqQ40zuzgnYLXB%2BBIyih3dj1FyC%2FYRPAuzF10uv1cMR0G%2FdqYdgw%2FbhTrZMyPLLbioQL9Tbj4TLecwcyP%2Bd4gJ%2FRaO0OFKvhLvMtRZla3H9R00WHK4mjoAj5gY8sx%2Ftc8ECn3LqYak5pTDIit%2B%2FBjqkAaD1XCo6H9qPDSsCM%2FlLYUbwPHpnDaggP5V%2BFh1iDYGWv0Db1iNNJk%2BMZe8wIczcHtFxEEBQsddl%2BVuGtFyUgI3Bkz2LTgABQT0UxuLQR7LfbMohPH7QBhx0k56twZ5uzlUWEgEEeydBWG1LW8viiYum5FvFq4PUaGWQ4xMmE5yCkeWtATXrQbjkLrHOSsKFkIlKulVr9BECh655up1aBRC%2FBMx%2F&X-Amz-Signature=fbe2a65bcfad96fb751e649ae43f97feac9bd2e4a517fb2fe7a89606b1fc420b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

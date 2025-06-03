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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NDOTHDX%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T051022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCJc8cJ4r487KNQipZw8KEbCt50v%2F4A3F2YFrNswM%2B1zgIhAOKDcHQR%2FB8cG9S2cLnVQ%2FqR27mUr4zDMCbWuGrkqYsNKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrytjYLQps363QQ9Uq3APh0poMTSB4RSqhGkCJ%2FdTyk567e2zMgzQzi%2FpfmvFQssoh2QD4dzkgtUYYKNIpG5qZGNSJApvGpAgpeOwxkdwLSZ1X3pyywDJHaRvtUd1zqmybD2f%2FTpTC4qg9%2FsgXluSUOzsSJmL50G0usUs8EK9KwjoI74%2BMoUyj5imHrDz5u7u6RefpdkaHdNpimINgWAG6OdKoE%2FJL7xAyUxIiBguuOVFWnksvwRGuNuaGp3hAbiGcNC9CRbscZBOjJXM7Q%2BKkhxXBVMYGazpo5wNdi0jnFDxgBjQtZ9kA2Q5ifVvoL3sVmLgCEuK4rRB%2BxJoEd3lxCE33GjFVcqW%2F0GJ3KVW2kqx29aWdTSEwIb9SCDP%2BtqaEcMsCW2UJCZSZTuAYNVIxK9A2ZvluMRZ7Ma6ef407g4LhkiirO%2BqwdCw%2BZUEk0Y0X%2B94amZ5Rp%2FJ8Y%2FkBDaJ2vYFZjidbhdGaTzroFJ75DaI3vZ7SU9xDgP%2Bn64kN4w%2BYn6ddNIZg2LJ4tAiP6YyT9CGAzEDOffX%2B%2BlpJtxIWZ9Z7SD7BbQ%2BH7ghVBj%2Fi5mYZYLMxaqFdffhKufYy%2FQgRdR6NEI92UgkRJY9RN%2FFKWGiHGY08yUegWZu35Btvf7Jh%2B8JDDgTCo0doETCTgvrBBjqkAaynmai4MulbtQRVYPBrL82niFNqjo%2Bmy1b60Ldq3MTrtylC3POIZ51VUM9Yr%2BrZ3AsiLUde5j0rUw216uXpYugUFW40mOgEczQui0WdMn9DixrSm3AjO7alxLFw05w40DLbg5BCq9ZmoJ3b0CLKvoh4GKnUxvLswQtLjb%2FIRt2GFyEzbQ84IN9zjd8s4%2FMup%2BVIRp3ICoYg89S1wPmKVDvsMy3p&X-Amz-Signature=36db2c6e6f67a2fc1c85a2adfeb42b3acfc483adb95bab444941594f75dda413&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NDOTHDX%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T051022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCJc8cJ4r487KNQipZw8KEbCt50v%2F4A3F2YFrNswM%2B1zgIhAOKDcHQR%2FB8cG9S2cLnVQ%2FqR27mUr4zDMCbWuGrkqYsNKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrytjYLQps363QQ9Uq3APh0poMTSB4RSqhGkCJ%2FdTyk567e2zMgzQzi%2FpfmvFQssoh2QD4dzkgtUYYKNIpG5qZGNSJApvGpAgpeOwxkdwLSZ1X3pyywDJHaRvtUd1zqmybD2f%2FTpTC4qg9%2FsgXluSUOzsSJmL50G0usUs8EK9KwjoI74%2BMoUyj5imHrDz5u7u6RefpdkaHdNpimINgWAG6OdKoE%2FJL7xAyUxIiBguuOVFWnksvwRGuNuaGp3hAbiGcNC9CRbscZBOjJXM7Q%2BKkhxXBVMYGazpo5wNdi0jnFDxgBjQtZ9kA2Q5ifVvoL3sVmLgCEuK4rRB%2BxJoEd3lxCE33GjFVcqW%2F0GJ3KVW2kqx29aWdTSEwIb9SCDP%2BtqaEcMsCW2UJCZSZTuAYNVIxK9A2ZvluMRZ7Ma6ef407g4LhkiirO%2BqwdCw%2BZUEk0Y0X%2B94amZ5Rp%2FJ8Y%2FkBDaJ2vYFZjidbhdGaTzroFJ75DaI3vZ7SU9xDgP%2Bn64kN4w%2BYn6ddNIZg2LJ4tAiP6YyT9CGAzEDOffX%2B%2BlpJtxIWZ9Z7SD7BbQ%2BH7ghVBj%2Fi5mYZYLMxaqFdffhKufYy%2FQgRdR6NEI92UgkRJY9RN%2FFKWGiHGY08yUegWZu35Btvf7Jh%2B8JDDgTCo0doETCTgvrBBjqkAaynmai4MulbtQRVYPBrL82niFNqjo%2Bmy1b60Ldq3MTrtylC3POIZ51VUM9Yr%2BrZ3AsiLUde5j0rUw216uXpYugUFW40mOgEczQui0WdMn9DixrSm3AjO7alxLFw05w40DLbg5BCq9ZmoJ3b0CLKvoh4GKnUxvLswQtLjb%2FIRt2GFyEzbQ84IN9zjd8s4%2FMup%2BVIRp3ICoYg89S1wPmKVDvsMy3p&X-Amz-Signature=936451d1a11510e3a24e7504e7a99d3c564ebeb47660569c477bc6f323e82bfb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

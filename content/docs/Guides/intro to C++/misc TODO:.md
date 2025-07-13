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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVYGDY3Q%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T160940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHcABLfhN22g6JL0a8M1nI8JiF0lgft493T19CR0dyq0AiAq7MJbCuChw6wGGtbh8xefbdYlFvPyfRAo1riQZ69EFyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIM7ss%2FOos6z9NuMfBwKtwDk8ee3zaKXk%2B%2FUsxgJIgT54iZeBhZXDueglBpKHd%2Fb%2FwqpFpZK2Jn6SbAB3hA4JcNc%2FsjUkScWvyZSpTxUmGXzjTO6o6usnwRti9kzHsaV3OKzZjG0WSN6RHG6PJNIcZ8HU9u2%2BVPUuFnSGcga1%2F4Z2HLenCfiEu6I8lPzSvDdR%2FF1%2FnQzdPcMZHCvzyTcQ6ztioD%2BHL1i3FBfeJxHc6V%2FBkMBa0%2Fz9gY3FrMtPoB0t4VELWW5Tw4RmtFL%2FKSh%2FYh7mu3Zop5QF6wgUR%2FuHsiMtgPbwq2BL0obj8KZHVwxvKyNreABB9ApjXh1umQLE%2FjAUGSbAKkq%2BNBQpJ2xvNwNPeMEvaZCoUZU2%2B4Om%2F3%2Fg72QKApykWi54kcAY3AAfrasKjaUSS1j3RptOPBp2%2FsyYSpQJWmHdeKURJnVU2Olug3b%2BWm4XJN2ljypmXtOSctunjGvPBWDTVR9iYhHzj%2FiA3fg6cJBS2MrlORMeUzy5766%2BzNCD9laVywD3XHmizDt3phdk2A8Re1LCkIYtWPZ4FxxWQISw4GGo%2Bbm%2F4lofHDoEeQX0t4DgkHztaj83QX7%2BfZS59TnRfEW3YnEKsyeFnEHMvPJe6g0iUEWqGICFNDfw2llQHVXo0inncwiJbPwwY6pgE%2BQFRiz%2BETIV%2BuRcXTKS7TRAkkchXzFXT0fVYDLpYFYpEmrxC77nVdMijINGztv8Syq3oUUG5vHU4q6L%2BH71wI4%2BBcgPKy9xM%2BbsjdDOUaD%2BKlflUe%2BDFzgxltkANA6ya8W8GyCjh95%2B2ZZX5m2qXpK549wtWOuBKKLMxnWeIsvzPXFLBiSDxKeTWp%2FBZLFZjWX%2FRFD6ZffAItOA6SKnPAhW5ZGg%2Bm&X-Amz-Signature=6add2e60db2c94c07865641fed946a9d3615f3d7d86350ffbeb7faf8313257e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVYGDY3Q%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T160940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHcABLfhN22g6JL0a8M1nI8JiF0lgft493T19CR0dyq0AiAq7MJbCuChw6wGGtbh8xefbdYlFvPyfRAo1riQZ69EFyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIM7ss%2FOos6z9NuMfBwKtwDk8ee3zaKXk%2B%2FUsxgJIgT54iZeBhZXDueglBpKHd%2Fb%2FwqpFpZK2Jn6SbAB3hA4JcNc%2FsjUkScWvyZSpTxUmGXzjTO6o6usnwRti9kzHsaV3OKzZjG0WSN6RHG6PJNIcZ8HU9u2%2BVPUuFnSGcga1%2F4Z2HLenCfiEu6I8lPzSvDdR%2FF1%2FnQzdPcMZHCvzyTcQ6ztioD%2BHL1i3FBfeJxHc6V%2FBkMBa0%2Fz9gY3FrMtPoB0t4VELWW5Tw4RmtFL%2FKSh%2FYh7mu3Zop5QF6wgUR%2FuHsiMtgPbwq2BL0obj8KZHVwxvKyNreABB9ApjXh1umQLE%2FjAUGSbAKkq%2BNBQpJ2xvNwNPeMEvaZCoUZU2%2B4Om%2F3%2Fg72QKApykWi54kcAY3AAfrasKjaUSS1j3RptOPBp2%2FsyYSpQJWmHdeKURJnVU2Olug3b%2BWm4XJN2ljypmXtOSctunjGvPBWDTVR9iYhHzj%2FiA3fg6cJBS2MrlORMeUzy5766%2BzNCD9laVywD3XHmizDt3phdk2A8Re1LCkIYtWPZ4FxxWQISw4GGo%2Bbm%2F4lofHDoEeQX0t4DgkHztaj83QX7%2BfZS59TnRfEW3YnEKsyeFnEHMvPJe6g0iUEWqGICFNDfw2llQHVXo0inncwiJbPwwY6pgE%2BQFRiz%2BETIV%2BuRcXTKS7TRAkkchXzFXT0fVYDLpYFYpEmrxC77nVdMijINGztv8Syq3oUUG5vHU4q6L%2BH71wI4%2BBcgPKy9xM%2BbsjdDOUaD%2BKlflUe%2BDFzgxltkANA6ya8W8GyCjh95%2B2ZZX5m2qXpK549wtWOuBKKLMxnWeIsvzPXFLBiSDxKeTWp%2FBZLFZjWX%2FRFD6ZffAItOA6SKnPAhW5ZGg%2Bm&X-Amz-Signature=62c84915429a20f61425811dc7c9128ba1a9ef5fb810d7dec087e5a84da68c27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZZ4VCRN%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T101025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDYNqeH%2BY8R8vN%2FK9Ha%2BiPmMBGn%2FWAh8uAUSxBPbXf9BQIhAPPwO%2Blym79S7qYx9OrdjR1F4RVoMdoMVJZtZZJaaARJKv8DCFsQABoMNjM3NDIzMTgzODA1IgwL6H7zNsvqJHFgygYq3AMcJEDkTUhZ6ENonW0liUXMG0%2Fz3pss%2F%2FBZI6b8sX2k%2BuStuqdXXuzJgYcz0combRrEgSX4KCNRxFW0rLXgmoaPEg3G7Cx7Or%2FEZOxvI8mTzO29TXhjBxwssL2PRvjs7BjrZ4YXvTuzu%2FTuVr4uFtS78dfNADs2BpbYE1ZYCAMsYJNS%2FlFgPrRVMEl7YWvpCD7Onc4y9Zsw%2F32SPwjXTImGpdJYKY5suiCyBJ2DurEcgMCGgXUuzAQLZRblIyr871ZnR0bnfYlJRrp1M6XFCJIR5qac0k3IqpBSLxHOF1SIGYYGmRvfHT4fAAyrCANwGuSUepEctnaC9iT0YX%2FR7Pt0%2BJBCJkyi2u2YDD%2F3v1oNM1NpnTGhdi1vd%2Bm7UrwD3f4uxg1UOpGbh07SvsBLExt7V%2BWE4%2Fima2UwzVPvLw5J%2Bi%2FSrMydLdD2MCTrZVKeVeoiA5M7%2Fiy8la4Q973QlGizAdkG%2BID5OCIx9GuxG3DfTvd22NtVjLcO7C5lOBLXZuuuiZ8M8ZxTeJExbHvqi5mbWYapgl0AmslSi6zK43D%2FcszL3Z3mWFCgK%2BjRNOTmydjezo6Ic8TvGMwNHTiiHI7wVnYRDyIce3gyHJIJzH7HYRmCfWXTyONOl4l0HjDLyr%2FCBjqkAXF87Zaz01y4Y90LW7SzxIJWj73diaXwciccP0dEd918J67%2BJnvd53EyFfbVjUXp5FI2BQ9kgXh6qi47cDsLtWuw3XpqBKAMeTfpx%2BBCe2fvJw7Ru2MVkKGC9Uwdtd8FtEmOyHp2%2BZTkDKw9CIbEXHQpUKMsUgA0gLGN6TQbUqGk3E9q%2Fj26Rv2WqlXNtwZ3ENnYQp2DpAWk8BnuOEPHHY7QEYMv&X-Amz-Signature=d28c16d643ff0509a5453b5af635cad9957c13317d00180b1c5c9935dbbc11d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZZ4VCRN%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T101025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDYNqeH%2BY8R8vN%2FK9Ha%2BiPmMBGn%2FWAh8uAUSxBPbXf9BQIhAPPwO%2Blym79S7qYx9OrdjR1F4RVoMdoMVJZtZZJaaARJKv8DCFsQABoMNjM3NDIzMTgzODA1IgwL6H7zNsvqJHFgygYq3AMcJEDkTUhZ6ENonW0liUXMG0%2Fz3pss%2F%2FBZI6b8sX2k%2BuStuqdXXuzJgYcz0combRrEgSX4KCNRxFW0rLXgmoaPEg3G7Cx7Or%2FEZOxvI8mTzO29TXhjBxwssL2PRvjs7BjrZ4YXvTuzu%2FTuVr4uFtS78dfNADs2BpbYE1ZYCAMsYJNS%2FlFgPrRVMEl7YWvpCD7Onc4y9Zsw%2F32SPwjXTImGpdJYKY5suiCyBJ2DurEcgMCGgXUuzAQLZRblIyr871ZnR0bnfYlJRrp1M6XFCJIR5qac0k3IqpBSLxHOF1SIGYYGmRvfHT4fAAyrCANwGuSUepEctnaC9iT0YX%2FR7Pt0%2BJBCJkyi2u2YDD%2F3v1oNM1NpnTGhdi1vd%2Bm7UrwD3f4uxg1UOpGbh07SvsBLExt7V%2BWE4%2Fima2UwzVPvLw5J%2Bi%2FSrMydLdD2MCTrZVKeVeoiA5M7%2Fiy8la4Q973QlGizAdkG%2BID5OCIx9GuxG3DfTvd22NtVjLcO7C5lOBLXZuuuiZ8M8ZxTeJExbHvqi5mbWYapgl0AmslSi6zK43D%2FcszL3Z3mWFCgK%2BjRNOTmydjezo6Ic8TvGMwNHTiiHI7wVnYRDyIce3gyHJIJzH7HYRmCfWXTyONOl4l0HjDLyr%2FCBjqkAXF87Zaz01y4Y90LW7SzxIJWj73diaXwciccP0dEd918J67%2BJnvd53EyFfbVjUXp5FI2BQ9kgXh6qi47cDsLtWuw3XpqBKAMeTfpx%2BBCe2fvJw7Ru2MVkKGC9Uwdtd8FtEmOyHp2%2BZTkDKw9CIbEXHQpUKMsUgA0gLGN6TQbUqGk3E9q%2Fj26Rv2WqlXNtwZ3ENnYQp2DpAWk8BnuOEPHHY7QEYMv&X-Amz-Signature=bc228bd7058c727bac71fcf492b9ae7a66852607b8c71cbba50b511c230bbd57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

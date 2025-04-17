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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633KOME7Q%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T003926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHc7gJiaB2XiaMwmOd0Afl6y0bTCXgfKk8mmjyl756XUAiEAnDSSRXDrx%2FwPS991jnRWrrofzQdu%2F9PqNqflhpd%2FUDsq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDPPaZlz3YF960Y%2Bx%2FircA33JGPKY8LBHf7sE8GbiRspyj72MaBJmqlrATJGoterolMLvW66uv4tkP%2F80KoJzUewdhSw2UXXdLOXkS9qWIRMO3grRw5m62qsWajAAGSocj7UZfepvJsZ8tfgqdzhvZyFfK3AQ22qaDEVayerr7L%2FUVUQKjQ2ZUmnAxbqrwgGWrKIdBe%2BJPqnoaUz4cZPUYs%2BnO8nB3qcotCu%2BVRJf92qbxa%2FGk694sqsZk4TH2x3TKiodqioxBged5V4vJdraLfASny2qZfFBmbDN%2Bg%2FgjKEkdd0riXtBVLFQpSr5YPvunTxMseoun%2Frng%2F%2FwfjDo8t9vMzqZ2ol10eWJSZ%2Fm00073izR6x0svelzW80WoSWneEy9mUoxvAZFsN8ROaNS5oKTeCn%2FWjX2CylYX0ZQ8Wl9grlmtfOpF6CfQWpdlcZdtOAch0vdbRf95PeNYjTvynC%2Bn%2BNjOw1H5xpY7Cg1Es7tHY%2FjbPf1mBbS%2FSOjW2DRgQaaEm2omx3uKpNbCN1rjO%2B6AStbtfIMgYQc8rnn%2FMFKXw%2Fb4IHv2%2Fok2Fi7TIlb8HBiI1514g4qCdnDMYONRgxv9b1NrV4JVLDjTQgTdYtB8z6sNMAugajKXnXNy9IBTnDiq784WJsyP1rCMJKTgcAGOqUBo1bJBrMncO%2FOBFWR94Bq8yyfTV5WTh7NhPVeKKJF7jULPiSYJ2xB%2FAH8DAiIkGxSyXqM7G%2B8q6yFD5sdyMfpto6VEMhnpUUP11vU%2FVhHWTUvvjcrOmimOlwT0Z7b4tjjVrvAZ6luVuP9wrEE6IXnt2qNxShWNmy%2BbEtHQRRYigyy1uLkjtVz1JAB8ZMuG1sCojyL7LSVRmAkC%2F9M1YEdkYe0lii7&X-Amz-Signature=a6b80fe4dfea84d479cd956c413a40bba87080d163617f41a6b063220c0f7822&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633KOME7Q%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T003926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHc7gJiaB2XiaMwmOd0Afl6y0bTCXgfKk8mmjyl756XUAiEAnDSSRXDrx%2FwPS991jnRWrrofzQdu%2F9PqNqflhpd%2FUDsq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDPPaZlz3YF960Y%2Bx%2FircA33JGPKY8LBHf7sE8GbiRspyj72MaBJmqlrATJGoterolMLvW66uv4tkP%2F80KoJzUewdhSw2UXXdLOXkS9qWIRMO3grRw5m62qsWajAAGSocj7UZfepvJsZ8tfgqdzhvZyFfK3AQ22qaDEVayerr7L%2FUVUQKjQ2ZUmnAxbqrwgGWrKIdBe%2BJPqnoaUz4cZPUYs%2BnO8nB3qcotCu%2BVRJf92qbxa%2FGk694sqsZk4TH2x3TKiodqioxBged5V4vJdraLfASny2qZfFBmbDN%2Bg%2FgjKEkdd0riXtBVLFQpSr5YPvunTxMseoun%2Frng%2F%2FwfjDo8t9vMzqZ2ol10eWJSZ%2Fm00073izR6x0svelzW80WoSWneEy9mUoxvAZFsN8ROaNS5oKTeCn%2FWjX2CylYX0ZQ8Wl9grlmtfOpF6CfQWpdlcZdtOAch0vdbRf95PeNYjTvynC%2Bn%2BNjOw1H5xpY7Cg1Es7tHY%2FjbPf1mBbS%2FSOjW2DRgQaaEm2omx3uKpNbCN1rjO%2B6AStbtfIMgYQc8rnn%2FMFKXw%2Fb4IHv2%2Fok2Fi7TIlb8HBiI1514g4qCdnDMYONRgxv9b1NrV4JVLDjTQgTdYtB8z6sNMAugajKXnXNy9IBTnDiq784WJsyP1rCMJKTgcAGOqUBo1bJBrMncO%2FOBFWR94Bq8yyfTV5WTh7NhPVeKKJF7jULPiSYJ2xB%2FAH8DAiIkGxSyXqM7G%2B8q6yFD5sdyMfpto6VEMhnpUUP11vU%2FVhHWTUvvjcrOmimOlwT0Z7b4tjjVrvAZ6luVuP9wrEE6IXnt2qNxShWNmy%2BbEtHQRRYigyy1uLkjtVz1JAB8ZMuG1sCojyL7LSVRmAkC%2F9M1YEdkYe0lii7&X-Amz-Signature=1a302d21d4efc8a1b353c8435730bcfac4d9bc36e21a34873b6e3823fb51fea1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

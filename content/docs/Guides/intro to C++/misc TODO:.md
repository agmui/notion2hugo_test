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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZBBW75R%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJbvqn0MtJHkt%2BHbm14AyZ8iY7kmkw3sKKt9KmFI510AiBEA4OLsCvkWojuHQDyx7nctk5OlyScPS1uEDofyAVUMyqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmkRKt5nwNJg5EDlmKtwDwrbBye%2Fj%2FThWXG9JiMaX84uDL%2By23K3ADesFoZ8957oKyJ87J5gBe6cdWgQ%2FsS%2BpcnXycjTC73eLKPKmqVlg5HNuqWw%2B6KafpJcXF9dKAIiFLgHtTBCMP3n%2FOb7yTJ3VCDZZoGaArmGu%2BbcRNyD5wshq9DjD1TOoiWIW5z%2BixLa4u23lTsod8OZLQP5fZ74baFefBaynbd1QJmYmj%2F%2Bbmfkji%2FUrS0zK4VAwC%2FPHtppnXPLpho39PcR0zjGNqaxfw9gU15EPRAFc6CMeNQdJmogGHm%2FRB5UiFvN3WmedgHKx6rjgqz7OEgCmR88Rsqqt8Avzt5wIuBAOvhu%2Bz8jUkOho78aYc1RxuR18W76C3rIzhsu6G8M3PhCkhT37x2b8ajNKKC%2F1TKNQMaYX0WbYnO%2Bp%2FCsSOjJ5Y5vt6F2niZtiPYWmw4N0jNf1Z0suHK2p4So0O9DWHYqI5XCuVzUd0eZqJdwpzbhGIGJnuGddyNU%2BXlBQk3Sin6DG4OJzs02GJA83pxVqviB9FaaGx24DxtrJJOBKdQFbEzeN8X1QeKb1tGCy5KYT2fDLCUN1NUuXpd0NsnylUUZopBHh%2BugjZqeFZDZGyve3PtYO%2FpaTgxPfOkum78fLq9RX0%2FEw77LfxAY6pgFh6whpko5BAWdckt26kAqvPaZU5uoNccDK2KNkB42WjE64W9qg8ObPPqXnNxEQcUkcMcQayEXNSzn3ecvLH4euiNLOSzyGTUxLUjCRMOxx5V%2BLtlIzQXrPc%2F2oJGZyGj5PBM3Pq%2FeTXVrQiTm9JuEzng5m%2BCXszoLv8%2B0WT%2FCLGCoi16r3bdotuhIaEub47Si5DtUzB4b6QB46yNiDCRYqTBTMlzB6&X-Amz-Signature=572ea3611c1e5d8aef6803793bb63674da8bfb74392a141fcf04882a1c889118&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZBBW75R%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJbvqn0MtJHkt%2BHbm14AyZ8iY7kmkw3sKKt9KmFI510AiBEA4OLsCvkWojuHQDyx7nctk5OlyScPS1uEDofyAVUMyqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmkRKt5nwNJg5EDlmKtwDwrbBye%2Fj%2FThWXG9JiMaX84uDL%2By23K3ADesFoZ8957oKyJ87J5gBe6cdWgQ%2FsS%2BpcnXycjTC73eLKPKmqVlg5HNuqWw%2B6KafpJcXF9dKAIiFLgHtTBCMP3n%2FOb7yTJ3VCDZZoGaArmGu%2BbcRNyD5wshq9DjD1TOoiWIW5z%2BixLa4u23lTsod8OZLQP5fZ74baFefBaynbd1QJmYmj%2F%2Bbmfkji%2FUrS0zK4VAwC%2FPHtppnXPLpho39PcR0zjGNqaxfw9gU15EPRAFc6CMeNQdJmogGHm%2FRB5UiFvN3WmedgHKx6rjgqz7OEgCmR88Rsqqt8Avzt5wIuBAOvhu%2Bz8jUkOho78aYc1RxuR18W76C3rIzhsu6G8M3PhCkhT37x2b8ajNKKC%2F1TKNQMaYX0WbYnO%2Bp%2FCsSOjJ5Y5vt6F2niZtiPYWmw4N0jNf1Z0suHK2p4So0O9DWHYqI5XCuVzUd0eZqJdwpzbhGIGJnuGddyNU%2BXlBQk3Sin6DG4OJzs02GJA83pxVqviB9FaaGx24DxtrJJOBKdQFbEzeN8X1QeKb1tGCy5KYT2fDLCUN1NUuXpd0NsnylUUZopBHh%2BugjZqeFZDZGyve3PtYO%2FpaTgxPfOkum78fLq9RX0%2FEw77LfxAY6pgFh6whpko5BAWdckt26kAqvPaZU5uoNccDK2KNkB42WjE64W9qg8ObPPqXnNxEQcUkcMcQayEXNSzn3ecvLH4euiNLOSzyGTUxLUjCRMOxx5V%2BLtlIzQXrPc%2F2oJGZyGj5PBM3Pq%2FeTXVrQiTm9JuEzng5m%2BCXszoLv8%2B0WT%2FCLGCoi16r3bdotuhIaEub47Si5DtUzB4b6QB46yNiDCRYqTBTMlzB6&X-Amz-Signature=9eb49f5db9dff59bc809391924f5e90f50fa216aeb34b395333e036c6a235d0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

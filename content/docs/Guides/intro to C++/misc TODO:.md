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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USANVR6D%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T230107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICUm6i3HTBppX5zV0jG11INnNXmB5kYutiKXlQynIiMjAiEAzcANOci71eW1PdLk9cnYAuFfhoodTmhiWpa4eCf9T6Eq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDIeyq%2BZ0nRcmuCxePSrcA5NBV%2Fys%2FQh8gBGw0VG7c91LGuWAQSSOHlPjTKaRRUCLInQDzS4gGAF7j0HVaOGNgFblHdIjilAku%2BkuUz85dQlZlxdLeCMdA7qM%2BqjG%2FSg6j5VaMyJ0Jyni8pUZtazFEaNsQLd1qKkhldOA3zJuPxZie%2FuRLwh%2Fy2yadP90Buw1h8P8KAJeUHBrTo58nFck6XTIRYbmzBjbSD1WaFbXxMO5uPtL7HxPZNwLOV1DKCU5L6ZpGNd8%2Be4m1S0YT4xzOaCQ95l9Qi%2BibqSMRflJ6wevKlplh05ift5edM5mcFAvEgl1741XCJLF0%2BEaH0t1p%2Fi5qog%2BN15x%2B1eCHE0Hev9GKWUxxRIppgl%2F1yRa4feoKoCgIREJYQ4L91pmZSfyt99w75h9G9vsI5ZowsbQWQGpcQmZAuneey%2Fw2r0qXbb16WbYojnZ7L8P0fMUWw5nObWkKKa9rEnJHElV9Uu83FYHkTzkI2lJYe2ypqZsdp0FgW6En%2FXKdBC7Z4os8gUT%2Fw3pes5lu7WFhtquVnS9jGujbbtTGJF4EfyrquOvqvIzvyVeDT8KAffQHPCSLAHB5ShRqE87udsPG2efI%2BdGZZ7hiFiVw44yQrWTTiQAQ%2BbGcJ3z%2BqlbOErEoG9TMNTDnL8GOqUB0t9NICtqsJ2BZBXV4xeAv0nsbbfYA5CP06XLbCMyV51Z0WZleg48cqiWpxIBlRoLX86K8MHxYVby164uTZdB8K%2BwahCwRmGJV4sioFX%2B2khnXvZPyobTX6AWa35MStJt56mUKRYkA4nrbiAPvLGXEn9f3kBcXJNfmaOrXBlQFzAFs08Wa9COxhmmGqjcc3lBFlqHaPGZ2rl6YsxGeLKUzHkXfkYB&X-Amz-Signature=fc9b9998ccb68813770c01108e58296164f5d77b3bcfe79060d8cf432a6e3fbc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USANVR6D%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T230107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICUm6i3HTBppX5zV0jG11INnNXmB5kYutiKXlQynIiMjAiEAzcANOci71eW1PdLk9cnYAuFfhoodTmhiWpa4eCf9T6Eq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDIeyq%2BZ0nRcmuCxePSrcA5NBV%2Fys%2FQh8gBGw0VG7c91LGuWAQSSOHlPjTKaRRUCLInQDzS4gGAF7j0HVaOGNgFblHdIjilAku%2BkuUz85dQlZlxdLeCMdA7qM%2BqjG%2FSg6j5VaMyJ0Jyni8pUZtazFEaNsQLd1qKkhldOA3zJuPxZie%2FuRLwh%2Fy2yadP90Buw1h8P8KAJeUHBrTo58nFck6XTIRYbmzBjbSD1WaFbXxMO5uPtL7HxPZNwLOV1DKCU5L6ZpGNd8%2Be4m1S0YT4xzOaCQ95l9Qi%2BibqSMRflJ6wevKlplh05ift5edM5mcFAvEgl1741XCJLF0%2BEaH0t1p%2Fi5qog%2BN15x%2B1eCHE0Hev9GKWUxxRIppgl%2F1yRa4feoKoCgIREJYQ4L91pmZSfyt99w75h9G9vsI5ZowsbQWQGpcQmZAuneey%2Fw2r0qXbb16WbYojnZ7L8P0fMUWw5nObWkKKa9rEnJHElV9Uu83FYHkTzkI2lJYe2ypqZsdp0FgW6En%2FXKdBC7Z4os8gUT%2Fw3pes5lu7WFhtquVnS9jGujbbtTGJF4EfyrquOvqvIzvyVeDT8KAffQHPCSLAHB5ShRqE87udsPG2efI%2BdGZZ7hiFiVw44yQrWTTiQAQ%2BbGcJ3z%2BqlbOErEoG9TMNTDnL8GOqUB0t9NICtqsJ2BZBXV4xeAv0nsbbfYA5CP06XLbCMyV51Z0WZleg48cqiWpxIBlRoLX86K8MHxYVby164uTZdB8K%2BwahCwRmGJV4sioFX%2B2khnXvZPyobTX6AWa35MStJt56mUKRYkA4nrbiAPvLGXEn9f3kBcXJNfmaOrXBlQFzAFs08Wa9COxhmmGqjcc3lBFlqHaPGZ2rl6YsxGeLKUzHkXfkYB&X-Amz-Signature=549863f12b3d34c29e220fd9d88d0b686c094953b98d82d6fd2023cf37b79e71&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ6EHGCL%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T170131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDwtvxagdYRgIRZmnWKftIs%2Brzn0NDTpR1KsuuuSKK8GAIgJm0dx8mso90r6XpD4MVnvFVX2yGJvo2272rU8wsV2mIq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJGruGlBwWmFw%2FRMAircA8Ivxt2wJmuhKBk0tylFyHMI62h632QfvVjQ1z5XDhYOehDfNiCnzuiHG5iSaKCblSaSB2MySfDztYboQR1Mmv0Wq7B1IfvG2kSdBxMBUB8r%2FyLvbVb9AOd9%2BLtTGN78adL5yt2HpbZXkCguC3U5erPQOZL7ehukkswff8Kynlxt%2FCEq2IkSYFHgcaRUS2QFdIDdBK7WIfqhXxR4V9IQlSriKY8f%2B59tw9QljJE1E2wxrhjCfTun9mJ1WfbHZneCR2dXsSJVieTEC1IMM0oQv7ipGM%2B9UXGz60wfyF0LhDDyWOPAffCVnA4LkInKhqig0zCTKq2vUz63FBpqMxqCYqgjN4mE9CmSyGdSG4XV1bpDPc5u%2BjKibCP5aUSCVuDHIsiH1RMBG0AQ%2B83wulr5b4LvsNLN2fm3QbtWQ85XPiD4ImZ83LpZycHU8VhBaKjxPb%2Bdu9rkfnIE7i%2BNqOkaJHiJnQsF%2BTx8ZW%2Bcq38qgFKaqyP%2FKMGPC%2FylP2dDlA31Z6HmfXNOc4NVjVrAEGULmA07UHltW1glR1SJjwKuSi%2BoIawqkzn6wdzErFRvd0LHJTQC1EXAuY2wEAzwlbqLqBKce0iXaJ8yftuXIYgxvZUgJ3XrZrEIlS%2BVOXj%2FMKbUsb4GOqUBBpJ5dbH9CuUjW1Ho1QwOVPoxMtGqKBPOrdygIEfG6Q7Y5wOMDxBmb%2Bqk6qFlvpcEFRkSSj7L1iMzcwx0b4vUyDgxzkkwgyGDSWAA7eESMOXZoJXP%2F0TC5Nou1%2Fnrd2otDzzeoqRm6LKzfA%2FUPITtLvPQATjZ0tJEcRz1CkVG3bQs4yZTsNCtD8hsilltUEVKU2utYfdem3Bawri8fgd9iCLuWEOC&X-Amz-Signature=22734408aa8c36af73ff53972b6641bdd75dbae1d7799a748281fa26b941cabe&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ6EHGCL%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T170131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDwtvxagdYRgIRZmnWKftIs%2Brzn0NDTpR1KsuuuSKK8GAIgJm0dx8mso90r6XpD4MVnvFVX2yGJvo2272rU8wsV2mIq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJGruGlBwWmFw%2FRMAircA8Ivxt2wJmuhKBk0tylFyHMI62h632QfvVjQ1z5XDhYOehDfNiCnzuiHG5iSaKCblSaSB2MySfDztYboQR1Mmv0Wq7B1IfvG2kSdBxMBUB8r%2FyLvbVb9AOd9%2BLtTGN78adL5yt2HpbZXkCguC3U5erPQOZL7ehukkswff8Kynlxt%2FCEq2IkSYFHgcaRUS2QFdIDdBK7WIfqhXxR4V9IQlSriKY8f%2B59tw9QljJE1E2wxrhjCfTun9mJ1WfbHZneCR2dXsSJVieTEC1IMM0oQv7ipGM%2B9UXGz60wfyF0LhDDyWOPAffCVnA4LkInKhqig0zCTKq2vUz63FBpqMxqCYqgjN4mE9CmSyGdSG4XV1bpDPc5u%2BjKibCP5aUSCVuDHIsiH1RMBG0AQ%2B83wulr5b4LvsNLN2fm3QbtWQ85XPiD4ImZ83LpZycHU8VhBaKjxPb%2Bdu9rkfnIE7i%2BNqOkaJHiJnQsF%2BTx8ZW%2Bcq38qgFKaqyP%2FKMGPC%2FylP2dDlA31Z6HmfXNOc4NVjVrAEGULmA07UHltW1glR1SJjwKuSi%2BoIawqkzn6wdzErFRvd0LHJTQC1EXAuY2wEAzwlbqLqBKce0iXaJ8yftuXIYgxvZUgJ3XrZrEIlS%2BVOXj%2FMKbUsb4GOqUBBpJ5dbH9CuUjW1Ho1QwOVPoxMtGqKBPOrdygIEfG6Q7Y5wOMDxBmb%2Bqk6qFlvpcEFRkSSj7L1iMzcwx0b4vUyDgxzkkwgyGDSWAA7eESMOXZoJXP%2F0TC5Nou1%2Fnrd2otDzzeoqRm6LKzfA%2FUPITtLvPQATjZ0tJEcRz1CkVG3bQs4yZTsNCtD8hsilltUEVKU2utYfdem3Bawri8fgd9iCLuWEOC&X-Amz-Signature=6cf280ef82c80d862a00fe3e504896810b05d7291252d47a3326620ce55caafe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

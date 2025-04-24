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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ2AXMPS%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMCn4oTZ32StdTuVjY0IU%2BYlR4s%2BQ58Bi70yD0kh7y6QIhAJSB5T2g6nhHO1gq242GfRGrk%2FxM9lol%2Fri5ruL4gZuPKv8DCB8QABoMNjM3NDIzMTgzODA1IgxB7cquqRkdogq%2BxuEq3AMyQie3Pzvzg54gcYBKZdZmPBBuG7ayDCA8rVopIexGXaovSUUKiKuI1%2BYcTy2g2YvorZICkiV6quzQOhPU5fgVjQ1fQNiT%2FesK8%2FpMTx1iT3l97ReHEP5%2Bn8cCs3rGQdV4mjSvQQfqPypCxFoB5ZcE58HQFSAc8yaJKYNvsvcWMJKc9kz54JR6RWhcOwqPRaz8iLIdrNXcMDm83uB4eMHjTDnNXiFC%2BeQWSD%2F%2FskELz6rBFJ%2FRsvxb96WEzJCbdATTb74wr8R5EpbBHdCd2MmuDSIDrDtOFz8pq7OkNaq%2FgxQyLe1RmhL4FRZwg6jHlVxL96Gj%2FAijegKyaFj3qxroqs4J8v80I8F8TaOaj7LNaOexirT5wVj4GOWpqfNPYiZ4FjQsyeIkNln%2BFC%2FsusfkipDyt%2Bq472JjLA7Ge1rOxVwuRi8WJpFBWj8m%2Bce6QaBOT4roT5XvfpGApw817awOuEBhNTQuMu3xO31MrFJBQpf3bGG9RXg9fVmSl740WQRLiS4f9XWGijXQw9aaAmPouV28zPASJ5PPkQAW8sAWCHpHIXpJreuyyh%2FlY3AhtdtT94SapeEB0S6Z6F1IqTPYYIg8wa%2FMKkcerzEqbnS%2F73pVuWqUDkofOHaW7zC826rABjqkAaMc0ewfPNVKgY3VnKKf0kBIao4w2b0i3vOSzefhpRvTm1LXQ%2BE5fhiqUPyLryccHCwo1qv0yKPDyiNTzmA509bh0VGkfUJLSwOtc7J06MSqRMSC5V6lLD1Ekx%2BGj0e7jiYse260HdNCc92WM2R2Xip%2BrWsz8oaRB4Hniz%2BldN39kcRNZKPrHqS8Zk%2BBWPPgBANkjaxVYzc7sRP%2FOhkk3DzGfYI9&X-Amz-Signature=42794fc89ceabfb82c4e8060c8485edbe298747227fa62d7256eca0a5476e13d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ2AXMPS%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMCn4oTZ32StdTuVjY0IU%2BYlR4s%2BQ58Bi70yD0kh7y6QIhAJSB5T2g6nhHO1gq242GfRGrk%2FxM9lol%2Fri5ruL4gZuPKv8DCB8QABoMNjM3NDIzMTgzODA1IgxB7cquqRkdogq%2BxuEq3AMyQie3Pzvzg54gcYBKZdZmPBBuG7ayDCA8rVopIexGXaovSUUKiKuI1%2BYcTy2g2YvorZICkiV6quzQOhPU5fgVjQ1fQNiT%2FesK8%2FpMTx1iT3l97ReHEP5%2Bn8cCs3rGQdV4mjSvQQfqPypCxFoB5ZcE58HQFSAc8yaJKYNvsvcWMJKc9kz54JR6RWhcOwqPRaz8iLIdrNXcMDm83uB4eMHjTDnNXiFC%2BeQWSD%2F%2FskELz6rBFJ%2FRsvxb96WEzJCbdATTb74wr8R5EpbBHdCd2MmuDSIDrDtOFz8pq7OkNaq%2FgxQyLe1RmhL4FRZwg6jHlVxL96Gj%2FAijegKyaFj3qxroqs4J8v80I8F8TaOaj7LNaOexirT5wVj4GOWpqfNPYiZ4FjQsyeIkNln%2BFC%2FsusfkipDyt%2Bq472JjLA7Ge1rOxVwuRi8WJpFBWj8m%2Bce6QaBOT4roT5XvfpGApw817awOuEBhNTQuMu3xO31MrFJBQpf3bGG9RXg9fVmSl740WQRLiS4f9XWGijXQw9aaAmPouV28zPASJ5PPkQAW8sAWCHpHIXpJreuyyh%2FlY3AhtdtT94SapeEB0S6Z6F1IqTPYYIg8wa%2FMKkcerzEqbnS%2F73pVuWqUDkofOHaW7zC826rABjqkAaMc0ewfPNVKgY3VnKKf0kBIao4w2b0i3vOSzefhpRvTm1LXQ%2BE5fhiqUPyLryccHCwo1qv0yKPDyiNTzmA509bh0VGkfUJLSwOtc7J06MSqRMSC5V6lLD1Ekx%2BGj0e7jiYse260HdNCc92WM2R2Xip%2BrWsz8oaRB4Hniz%2BldN39kcRNZKPrHqS8Zk%2BBWPPgBANkjaxVYzc7sRP%2FOhkk3DzGfYI9&X-Amz-Signature=deb67444ea48fba6b0986f51e4b62e8a0f411ef5a4e0a534b3697a62914415c9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

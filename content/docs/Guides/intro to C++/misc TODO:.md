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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URCWI6ND%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIB64Gihg1o2HKCN65tp9L%2FHjwnPybZ%2F5s8lwZFZn3UX6AiB5%2Bxh0Gx%2FtlBkEGhTw5PgKHuF9nNSilRc8XK6AasDsAyqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOXaWCV1slrLE2BMEKtwDwQ%2F9RhS7sUC1IXvIK56F8tFxXbukkGok1L5We%2BdIb4CKRxdQQB6ZeD55FqEUru5Mf1zR4jDNjgBdrJie4%2B%2FVZDD%2FRkUDxVrrUj8wvPiq4hB1uFlwMWR8j%2FOZhM2U4OuCySOGVzTTXYAe4MlR5a6aLJcNvF7ym2R4Mbj9dHf3KQuEti4nnA1wNmfMDPzyiKG3pvEtiKlB9T7aZfoG0PE8tqMDE%2BTqlrWkuH%2Fb8RAmaV1Z7cIWHW1Bb4DRlWWrnA5I2mPlxJonvrKBe2EI3OWmKdaXtG1q4zPaZU%2FEzyoIJCbP2gyeiRDw%2FVNRIQG%2BbjyzP%2F2n8pSfUCZkT2WWJ5dVqP4W2bVD9zN3r7wYIGMX8PScuJETiJNQo48gv1PLA%2BgTxsvh1RgcpGQZ4EeWJ6LC%2BaZJSKQAYArahEvvrXIaSmM4dhYoobXmrMgOn4v0oW9LGvAIy5MIviSiiEWUCD9T4dKLs1ulAjc%2FCivueqM%2FMOASoKKhvRT3gqptArefCgZT63yYLmMoy%2BL7bObIzcs5SQmxTBEMzqRXKrhlwO70twas3z1n8CRmv00x2YXk%2F6pGPqNd7hWPmd5ZvJPhvW7a1sIXAcsjSUvdUb40ZN%2FCbdVBg7rDqOXhDgvGE%2BQw%2Ba64vwY6pgGh5%2FgXnp0uXCbg9BxyGzef2wNm%2BoEvbZPOYQzP9oi%2Bmb6u42ABjo7QL7oJiLktO%2BFqtTt6mwhqUXUrboUrPa3a5vyD2J8kG96aJ7hAatXPh8pMxw00ufgGqAiwe7orI6cmHff6jMg9xWm7y%2B8%2Bv0UsvWvHElJn%2FdTXLmC4AXvg%2B%2FP9%2BYqWm2amWWumZseY1%2F47GL0QhFzEGZx8F9MmstuXWY6oDxB1&X-Amz-Signature=180a4838a440b03bd3237ced220d2f459909a4e240c65d0fd8e2b6ebda68a565&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URCWI6ND%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIB64Gihg1o2HKCN65tp9L%2FHjwnPybZ%2F5s8lwZFZn3UX6AiB5%2Bxh0Gx%2FtlBkEGhTw5PgKHuF9nNSilRc8XK6AasDsAyqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOXaWCV1slrLE2BMEKtwDwQ%2F9RhS7sUC1IXvIK56F8tFxXbukkGok1L5We%2BdIb4CKRxdQQB6ZeD55FqEUru5Mf1zR4jDNjgBdrJie4%2B%2FVZDD%2FRkUDxVrrUj8wvPiq4hB1uFlwMWR8j%2FOZhM2U4OuCySOGVzTTXYAe4MlR5a6aLJcNvF7ym2R4Mbj9dHf3KQuEti4nnA1wNmfMDPzyiKG3pvEtiKlB9T7aZfoG0PE8tqMDE%2BTqlrWkuH%2Fb8RAmaV1Z7cIWHW1Bb4DRlWWrnA5I2mPlxJonvrKBe2EI3OWmKdaXtG1q4zPaZU%2FEzyoIJCbP2gyeiRDw%2FVNRIQG%2BbjyzP%2F2n8pSfUCZkT2WWJ5dVqP4W2bVD9zN3r7wYIGMX8PScuJETiJNQo48gv1PLA%2BgTxsvh1RgcpGQZ4EeWJ6LC%2BaZJSKQAYArahEvvrXIaSmM4dhYoobXmrMgOn4v0oW9LGvAIy5MIviSiiEWUCD9T4dKLs1ulAjc%2FCivueqM%2FMOASoKKhvRT3gqptArefCgZT63yYLmMoy%2BL7bObIzcs5SQmxTBEMzqRXKrhlwO70twas3z1n8CRmv00x2YXk%2F6pGPqNd7hWPmd5ZvJPhvW7a1sIXAcsjSUvdUb40ZN%2FCbdVBg7rDqOXhDgvGE%2BQw%2Ba64vwY6pgGh5%2FgXnp0uXCbg9BxyGzef2wNm%2BoEvbZPOYQzP9oi%2Bmb6u42ABjo7QL7oJiLktO%2BFqtTt6mwhqUXUrboUrPa3a5vyD2J8kG96aJ7hAatXPh8pMxw00ufgGqAiwe7orI6cmHff6jMg9xWm7y%2B8%2Bv0UsvWvHElJn%2FdTXLmC4AXvg%2B%2FP9%2BYqWm2amWWumZseY1%2F47GL0QhFzEGZx8F9MmstuXWY6oDxB1&X-Amz-Signature=6d350e704b68c3ef3e946d196896252954d8b69f512154037912245782e4c173&X-Amz-SignedHeaders=host&x-id=GetObject)

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

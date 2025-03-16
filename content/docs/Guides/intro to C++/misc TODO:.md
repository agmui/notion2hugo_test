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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q56U66DS%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T121233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYBGepl3UsT%2Be8hCS7dgb%2F0ofSKwsCPvrHiIBUq3jkkQIhAJslbvtAby8LUbnzRPZk8pWxBs%2Brum2P%2BE%2Fw%2Be3hOaNPKv8DCCwQABoMNjM3NDIzMTgzODA1Igy2ehrMQeioCEAo0FUq3APTa0tWCMJaQJ072TZ1O%2BYR6dRa0JfLgU%2B%2BAWBslTpQyDMmf1DkZ%2B8KSEb14nqS7thNfcSH3jQ3iXts%2BQD4fZdectEDIxjnbIZwNFs1enjCL%2BF0GXq1f7oVi7U%2BKHU0cvvcshuXkZDJrsGe6QkKUihMu%2F1Xkl8xvSJlox0EqEFjqayfYkcbz4QR%2FLsjjZD3FAXjtCgAwmXhzcp8BwZ%2B%2BUoVbhYMOtHe%2FD0jx4bwjykPYD0vSHkxu2AlpVzxWXRP%2FUDlsUsr3eeAqqXzFinVy2n1yJsdTaQdQKE0nvtoV63K9G5E9J7a5XZNw%2BXjKB7HgzdFWeKP0fhXk3Kd7r4NAZPwsAsnWcoqiPPgJvP4ttnkHHVObEKH%2BiNNh%2F6vXOAHJT%2Ft%2BJmouiF5D9dx8R%2BXNP0AspbYtESSholVZA8d08ToNNpBaScod%2Bqirbd3iMMKMWjy4%2BnhaTnXRK4NbNXu8jzP3JZPsMTWZKtIfFzQiHHOhUOquuov7ysZBIiDMW96skOQXUTS4kai%2FGqH7gF%2B2laIC%2FMUM4AE3udyegmkbrZES%2BhWuNuOiemUZWxupca0pLpKnyaMePLcRKwk7BBg9bf131IB4%2F71ZOEhCLR%2B7MeCdmczqFOQH6tDw3oHiTDs2Nq%2BBjqkAWXnKLvx8Hx%2FuB%2FsEFn%2FPk0QiE%2Ba9J2cFxF5frLt3Dd4PP5xmPO1jdxKMrBPjZ1wHie5Pp%2B%2FwEAGY6qfMM85f3yE4qR8n%2Fvmo%2BOMjDteDM1xaY0txa79bPvGJWwsFT%2Fw3de3hcowcEIumUQlVF3tJNNwhTHBTZXZB28mttVDJT6bu%2BKFtqjYa1lXH7p1ai01Dn%2BaMPnxg4InUbt90SVjhgZCJDa%2F&X-Amz-Signature=7f38934d581d028dd29935189ee827ed79a7b023e4562d51b5e78b7706bb00cb&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q56U66DS%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T121232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYBGepl3UsT%2Be8hCS7dgb%2F0ofSKwsCPvrHiIBUq3jkkQIhAJslbvtAby8LUbnzRPZk8pWxBs%2Brum2P%2BE%2Fw%2Be3hOaNPKv8DCCwQABoMNjM3NDIzMTgzODA1Igy2ehrMQeioCEAo0FUq3APTa0tWCMJaQJ072TZ1O%2BYR6dRa0JfLgU%2B%2BAWBslTpQyDMmf1DkZ%2B8KSEb14nqS7thNfcSH3jQ3iXts%2BQD4fZdectEDIxjnbIZwNFs1enjCL%2BF0GXq1f7oVi7U%2BKHU0cvvcshuXkZDJrsGe6QkKUihMu%2F1Xkl8xvSJlox0EqEFjqayfYkcbz4QR%2FLsjjZD3FAXjtCgAwmXhzcp8BwZ%2B%2BUoVbhYMOtHe%2FD0jx4bwjykPYD0vSHkxu2AlpVzxWXRP%2FUDlsUsr3eeAqqXzFinVy2n1yJsdTaQdQKE0nvtoV63K9G5E9J7a5XZNw%2BXjKB7HgzdFWeKP0fhXk3Kd7r4NAZPwsAsnWcoqiPPgJvP4ttnkHHVObEKH%2BiNNh%2F6vXOAHJT%2Ft%2BJmouiF5D9dx8R%2BXNP0AspbYtESSholVZA8d08ToNNpBaScod%2Bqirbd3iMMKMWjy4%2BnhaTnXRK4NbNXu8jzP3JZPsMTWZKtIfFzQiHHOhUOquuov7ysZBIiDMW96skOQXUTS4kai%2FGqH7gF%2B2laIC%2FMUM4AE3udyegmkbrZES%2BhWuNuOiemUZWxupca0pLpKnyaMePLcRKwk7BBg9bf131IB4%2F71ZOEhCLR%2B7MeCdmczqFOQH6tDw3oHiTDs2Nq%2BBjqkAWXnKLvx8Hx%2FuB%2FsEFn%2FPk0QiE%2Ba9J2cFxF5frLt3Dd4PP5xmPO1jdxKMrBPjZ1wHie5Pp%2B%2FwEAGY6qfMM85f3yE4qR8n%2Fvmo%2BOMjDteDM1xaY0txa79bPvGJWwsFT%2Fw3de3hcowcEIumUQlVF3tJNNwhTHBTZXZB28mttVDJT6bu%2BKFtqjYa1lXH7p1ai01Dn%2BaMPnxg4InUbt90SVjhgZCJDa%2F&X-Amz-Signature=0e61ab07fb8885922d1aac60191a2cc4db0311bf515c95717dccd31979448b32&X-Amz-SignedHeaders=host&x-id=GetObject)

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

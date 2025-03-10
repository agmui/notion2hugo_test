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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X37BI4A%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T180955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCc9XGZzKkuiGi6bM547Ee6ZY5ZhKUoF89MEdVIGAwCfgIgfSb5aAoVm4uldkkducDNFsBu9EpahaPYks6WJWrDmQsqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1z84lSLI05oMDrUyrcA%2FOpKT71hHZkGnVYA5%2BPLcXh9eyBK1GY6ZbLt02SVJnmcTR2WWMKl75emj3qhoO6Ug5cFIF6qz4GrX%2BhW9W9nXYB1RXaMHkhhrn8y8rOvizHhBWfLnzfF3%2BZnujkzmufIbd6IRDmCFv3y4F34sY0ThJdPbOzv7A9htCYnmbRBO3nmNdlw6BcsblN0Rh6qYitQ1v0%2FaKGq1BsOSI92jRyXrCe5MyHHiq3wCKeOx3Upy9JyPRQ3daK%2BUSWy%2BHj8s1pzwWZzc3oj41zSO2cJUZcW3UzHc6b3vU4nx0%2Bmpxlq%2B2KwEEfv5kHEGYm65daZvW5fDBv1lefWbUS%2BRWdbYbGK%2FRRXvnJpdoea3xwQPXfp9BTbCDhSimpbz%2FvomqIw8k%2BVhwbpSB9jTSi69i9NKnm6Aax%2BhlzCioTeYte79NatHJif9vCls6r2dETDeyWTm7nO1QxwmNPHbuKoZ8RpIXTXb9BxoKtlQ60iQEoy5VrpNQyFeu4n8p4MA%2BbzfcIflEOvSftwjUGwwvsdETrn%2F1dVDJAKCkvCgVXYMUD2DWlfb8jkIPdhkrXA2P8c5NmJeQCbWnVf7uK4wh3GW%2FfqvSzOBrelXpK4KK3nLJuEiQB1zi9YaMLC2pEmcj%2FhDWvMKHLvL4GOqUBrYXQ6ySHNqYju6q5Ehf6y%2FPEtp0lOp%2BioyvmkboVPfpNtj5IJCwHh%2Bs5owX13xepfiLXHEuZKqi3nYNoTgbe7QNmqJCjIvRtmJljI3v9C%2FaWk39uM%2Fp%2FBh2LWbN8jeFcf0LtvWBR%2BDZUSPfeMxKKOfGEVNoNtScA0utiAKQrJ64OiQN0X1qr7BJsI0u8pEz0sJ%2FCrv%2Bj%2BfC4i0cQvGFKKnS7qRQ9&X-Amz-Signature=2b7b491bfbb314ccc5ef592526a434f3f7e40c2134718312ab4bb9046c974157&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X37BI4A%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T180955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCc9XGZzKkuiGi6bM547Ee6ZY5ZhKUoF89MEdVIGAwCfgIgfSb5aAoVm4uldkkducDNFsBu9EpahaPYks6WJWrDmQsqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1z84lSLI05oMDrUyrcA%2FOpKT71hHZkGnVYA5%2BPLcXh9eyBK1GY6ZbLt02SVJnmcTR2WWMKl75emj3qhoO6Ug5cFIF6qz4GrX%2BhW9W9nXYB1RXaMHkhhrn8y8rOvizHhBWfLnzfF3%2BZnujkzmufIbd6IRDmCFv3y4F34sY0ThJdPbOzv7A9htCYnmbRBO3nmNdlw6BcsblN0Rh6qYitQ1v0%2FaKGq1BsOSI92jRyXrCe5MyHHiq3wCKeOx3Upy9JyPRQ3daK%2BUSWy%2BHj8s1pzwWZzc3oj41zSO2cJUZcW3UzHc6b3vU4nx0%2Bmpxlq%2B2KwEEfv5kHEGYm65daZvW5fDBv1lefWbUS%2BRWdbYbGK%2FRRXvnJpdoea3xwQPXfp9BTbCDhSimpbz%2FvomqIw8k%2BVhwbpSB9jTSi69i9NKnm6Aax%2BhlzCioTeYte79NatHJif9vCls6r2dETDeyWTm7nO1QxwmNPHbuKoZ8RpIXTXb9BxoKtlQ60iQEoy5VrpNQyFeu4n8p4MA%2BbzfcIflEOvSftwjUGwwvsdETrn%2F1dVDJAKCkvCgVXYMUD2DWlfb8jkIPdhkrXA2P8c5NmJeQCbWnVf7uK4wh3GW%2FfqvSzOBrelXpK4KK3nLJuEiQB1zi9YaMLC2pEmcj%2FhDWvMKHLvL4GOqUBrYXQ6ySHNqYju6q5Ehf6y%2FPEtp0lOp%2BioyvmkboVPfpNtj5IJCwHh%2Bs5owX13xepfiLXHEuZKqi3nYNoTgbe7QNmqJCjIvRtmJljI3v9C%2FaWk39uM%2Fp%2FBh2LWbN8jeFcf0LtvWBR%2BDZUSPfeMxKKOfGEVNoNtScA0utiAKQrJ64OiQN0X1qr7BJsI0u8pEz0sJ%2FCrv%2Bj%2BfC4i0cQvGFKKnS7qRQ9&X-Amz-Signature=6475d27492193ad73766d2f65087d12ec771219e02ae6aa430c58a0685ace586&X-Amz-SignedHeaders=host&x-id=GetObject)

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

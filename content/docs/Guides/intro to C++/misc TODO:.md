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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV2NOBCQ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T050843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJZWVx8ntJXJsn9dfHo3uWYrG2qZjTJMTdEqg2gyP%2B2AIhAIr%2FSQO98Jo7YhfESfpFvr91SnkPD%2FbO%2BY9drgITYJlFKv8DCG4QABoMNjM3NDIzMTgzODA1Igwf0klMN0Vg8u8tGeAq3AOEemwFPVhHcCGGaHhl5kQ6dGvmMb%2FIVRCEB9yXyTo1kXnBp7DbEZsnjlqR3tSXsL5wHocVcgpRsSYY6LwgPQ5zn5X1z3frosINNoMmR%2B%2BTOT55RB1Fm2%2BQFZxA9wQgA99AGobCstNfN2GrFXyaePLszVF0swdwbXvsZ0N9ylUswbS3qiYrczDFhJTavCQR2BPumSGMlu4bKM3WXxO09ZloqpnL6gs26Q8XDz4oxfxLdO0XB7%2Bv26pGD7gw75oku8%2BeEaBtSqveUAQAKKQ8OH9ms7y3HnOmPvZGVN4qYgNH8gjjdyFOOuAdfwavEpzkZ0G5g29jZBeao52vYzXn7aD70AuUeM4jqnuoupztVpaL%2F%2F6ii0g5CeboLMbbK7tLCJx3icwBXT0JIhrSRyPxT%2Ffuhqbvn6VParWkh13nOj1w3YoW0dCrNUwzVS5K0yHy3cmubpwq1TvNBtK0yk4uuaj3b683d6WA%2FAitH85FXumSmEnHDpYpzKZdYy%2BeYi7w6UErevMkMn2vQBHa%2BbejfnqOoKQWz4qT7CajAe3JsYttYjBWRqacPiMDvfQnWzBaUfuCC7%2FuwBTGpLEx8N9FkkxEcI5%2FfDlsycANX%2FqI8LLb6LeIuYJzDtQdTRUjOzDqjY%2FCBjqkAcZOFpRYmdV9cn4CjGWx03vcr75JDU5FPfki67uve3zN3TOvQj7doqpVsV%2BoJh4aLFq9jYA9vDEhUfz63WUQlRltSLYm2K2gVrx0iWFRJg4Vtnq6Sj8%2FIFHugCD1IuvrZaCB9KkREzpnIEz%2B5jG%2F2jL1H%2FvXOtn9gr3%2FOyje9UFBbkxFLEKnghE6OUAFGqMahH8sLziqfK4vAUTwLV5dUD2sW6wL&X-Amz-Signature=1bf146b6229951f74398d88270196a8463af448b791734dd2435fd014df918a0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV2NOBCQ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T050843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJZWVx8ntJXJsn9dfHo3uWYrG2qZjTJMTdEqg2gyP%2B2AIhAIr%2FSQO98Jo7YhfESfpFvr91SnkPD%2FbO%2BY9drgITYJlFKv8DCG4QABoMNjM3NDIzMTgzODA1Igwf0klMN0Vg8u8tGeAq3AOEemwFPVhHcCGGaHhl5kQ6dGvmMb%2FIVRCEB9yXyTo1kXnBp7DbEZsnjlqR3tSXsL5wHocVcgpRsSYY6LwgPQ5zn5X1z3frosINNoMmR%2B%2BTOT55RB1Fm2%2BQFZxA9wQgA99AGobCstNfN2GrFXyaePLszVF0swdwbXvsZ0N9ylUswbS3qiYrczDFhJTavCQR2BPumSGMlu4bKM3WXxO09ZloqpnL6gs26Q8XDz4oxfxLdO0XB7%2Bv26pGD7gw75oku8%2BeEaBtSqveUAQAKKQ8OH9ms7y3HnOmPvZGVN4qYgNH8gjjdyFOOuAdfwavEpzkZ0G5g29jZBeao52vYzXn7aD70AuUeM4jqnuoupztVpaL%2F%2F6ii0g5CeboLMbbK7tLCJx3icwBXT0JIhrSRyPxT%2Ffuhqbvn6VParWkh13nOj1w3YoW0dCrNUwzVS5K0yHy3cmubpwq1TvNBtK0yk4uuaj3b683d6WA%2FAitH85FXumSmEnHDpYpzKZdYy%2BeYi7w6UErevMkMn2vQBHa%2BbejfnqOoKQWz4qT7CajAe3JsYttYjBWRqacPiMDvfQnWzBaUfuCC7%2FuwBTGpLEx8N9FkkxEcI5%2FfDlsycANX%2FqI8LLb6LeIuYJzDtQdTRUjOzDqjY%2FCBjqkAcZOFpRYmdV9cn4CjGWx03vcr75JDU5FPfki67uve3zN3TOvQj7doqpVsV%2BoJh4aLFq9jYA9vDEhUfz63WUQlRltSLYm2K2gVrx0iWFRJg4Vtnq6Sj8%2FIFHugCD1IuvrZaCB9KkREzpnIEz%2B5jG%2F2jL1H%2FvXOtn9gr3%2FOyje9UFBbkxFLEKnghE6OUAFGqMahH8sLziqfK4vAUTwLV5dUD2sW6wL&X-Amz-Signature=c23362cb3f545f7405419392e0301b8af3255f1de46f69d437a713d587298e3d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

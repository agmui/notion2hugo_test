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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT3A33MS%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T190109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQD%2FWhY5znmdJPuS5zrXB5PWujTThtZlftySKAaz7UKiSgIhAMmnes13fjbge25pAkaXjjihESy6ISMen6JF3NyGA8eTKv8DCHsQABoMNjM3NDIzMTgzODA1IgxmWzYOKFh0eYbAeAAq3AOsOmBSDx6VafTGgLs%2BMTEyYRLiRun3hdjnTAF6DGf81HKRbE6q0frf3cXCxfT%2FJ9KNWhicFha59oVx0RVopT3rg4A32Bbq4yu%2F0QddNQISHJ%2FfX%2Bnz50w63JlySjGZpgZbjlqYFG34e%2BMe1yF1mgC85lCaPru%2Fz8QHFACSZ6P3P5CW2de5klzSBVyuml1NFfqOHyiG7HS6LmrNP4Zioh2mdnLCAaA3z7NxyY4X9EU62oZdBOTuviND3Q9TjwbJKcJ%2BsH0CTAcKxlf1JsoB2g6DydZCy1kR21NnoqKFNUfk9EkdnD4ea7dkB6rfyFV2pRHjiV2e6fsMUkhQFu7wMUhmB3bA11hixGV%2FpjrapIUmJuQ0Kgjq3Q%2FJ8HoU5ZlE2pKkSJmB21wnqWUmUV5yzsd2cfrCEfFEZQZL4QnnAbch2Kk0zRLVad76uX%2BOYhWJ6ZI7x%2FhQXA03cYDbQKEgEgw151UA9d10DPoSqqWWN72%2FBrDNrnXRLqkE2kxD1mjG8rb04F8ce75XOUMpizKdQVkrANhcvPIHpOhP5BePxPJDUvafDkVjkjU%2BA55vqSFvN22ckNZUCe5xYNEmsXjBJnDoWnUo6EhHtQLjgcJgRuLUoQVwuoZNsQnYVZ1gPTCu8aC%2FBjqkARNMxDqiCMRCdksYmqFeNqq3PkYasw7sjK%2FcDCuu7bj%2FnnrFQmf4eVa4LWvR1F3SzT76wDh1FUF5MUhT%2FgFLj3DXic3kmMmucjLlgn%2BSjq0AJ0TKwc6Qcfzs1%2Fwj5lIIwVQTLujwENnLy0shGpkCy6dyjxS%2Bi3wHrNoXVAEOXyE8YhHBj%2F9bAS8aNiQkZPBAK8CHqecy656Wr6GKX7Jjkc92YkzA&X-Amz-Signature=e864eec74beb79b11300bcd29c0845eb52e80dd91fa3d9b08052f99da2b3f554&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT3A33MS%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T190109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQD%2FWhY5znmdJPuS5zrXB5PWujTThtZlftySKAaz7UKiSgIhAMmnes13fjbge25pAkaXjjihESy6ISMen6JF3NyGA8eTKv8DCHsQABoMNjM3NDIzMTgzODA1IgxmWzYOKFh0eYbAeAAq3AOsOmBSDx6VafTGgLs%2BMTEyYRLiRun3hdjnTAF6DGf81HKRbE6q0frf3cXCxfT%2FJ9KNWhicFha59oVx0RVopT3rg4A32Bbq4yu%2F0QddNQISHJ%2FfX%2Bnz50w63JlySjGZpgZbjlqYFG34e%2BMe1yF1mgC85lCaPru%2Fz8QHFACSZ6P3P5CW2de5klzSBVyuml1NFfqOHyiG7HS6LmrNP4Zioh2mdnLCAaA3z7NxyY4X9EU62oZdBOTuviND3Q9TjwbJKcJ%2BsH0CTAcKxlf1JsoB2g6DydZCy1kR21NnoqKFNUfk9EkdnD4ea7dkB6rfyFV2pRHjiV2e6fsMUkhQFu7wMUhmB3bA11hixGV%2FpjrapIUmJuQ0Kgjq3Q%2FJ8HoU5ZlE2pKkSJmB21wnqWUmUV5yzsd2cfrCEfFEZQZL4QnnAbch2Kk0zRLVad76uX%2BOYhWJ6ZI7x%2FhQXA03cYDbQKEgEgw151UA9d10DPoSqqWWN72%2FBrDNrnXRLqkE2kxD1mjG8rb04F8ce75XOUMpizKdQVkrANhcvPIHpOhP5BePxPJDUvafDkVjkjU%2BA55vqSFvN22ckNZUCe5xYNEmsXjBJnDoWnUo6EhHtQLjgcJgRuLUoQVwuoZNsQnYVZ1gPTCu8aC%2FBjqkARNMxDqiCMRCdksYmqFeNqq3PkYasw7sjK%2FcDCuu7bj%2FnnrFQmf4eVa4LWvR1F3SzT76wDh1FUF5MUhT%2FgFLj3DXic3kmMmucjLlgn%2BSjq0AJ0TKwc6Qcfzs1%2Fwj5lIIwVQTLujwENnLy0shGpkCy6dyjxS%2Bi3wHrNoXVAEOXyE8YhHBj%2F9bAS8aNiQkZPBAK8CHqecy656Wr6GKX7Jjkc92YkzA&X-Amz-Signature=a5cb1603a8e0370fc611cf1778115dc3fdc38fcafa2e97e773da16ef6192c7e1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

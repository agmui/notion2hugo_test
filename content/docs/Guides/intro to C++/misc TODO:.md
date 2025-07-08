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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X2BTNWX%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T161112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGoxGMbT8ufb45%2BREJsyljhFI%2FAJcxVvi9HktZGrUm%2BtAiAl9BBHEbZtgCqmQtTw3lJRJ8VLy4RAbVfswwl5honRUyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FDeWhE3QAgZk%2BKtUKtwDFPG3%2BcFah%2B5PIqZxuSYI04QBbf7mKtGK4mrqp8DoYXyBq2zrTUqtsBVxHnfWdk0ymRqHwK0KkA3yIy5%2B%2BFeJGvq%2FS73BjCmrUPX0RuJFgeR7WcLnC5vH5gPgcNsp7QLhv9MN0J0pUkQA3mcWqPO0Wp0qEESPNNLGNUfUpxz4L57O7FMbvtaQkcMzKaYiatFaTZAiGKXRmGcpmzmqJoZohc0Xi8y7S4dH9grFOu6yqHtrzcc%2FKEbFdCOti6qAxeG%2BAgt%2B01jKYPetEQLmKDgYwy0vRaCqNGwBdSWijy5eZbx8%2BdYvtQLdWqnop4VUgPATkr5BrPF6pxxRR3%2FmlHOAhkNJesokxWJ4brmriUrJZXH8yF1j%2BT77%2BMfR0lnjmyUskieCbata3UnhmvzPWefTjU8GjeRLVsGN7HggFszUhAyQP4XYmsE84tUbdLYbTOIlxdP5PjgxHIzImafPdOK31F%2BIZemkC%2BZ1enkOhsIIj%2BsJ6zFs97AFm8bpoLI%2BdyyRfW3%2FFPTwpwQOWLTaINsEZqLuWKxjMcGo17XqY97sF0qrgemKkROXj6yjNN3zWa7WJGI9aWsrsVomZE25n2j5p%2BxxMJxjuscDqZX%2FLwQNvCLXMMgJgMpYr44ZM2Iw8v%2B0wwY6pgH0ZXVqwSZnlU2qzaXq0e3c0iChHuz%2FPArlJyB9RYrUbq7LITXlHqXMWCExS7TzjTI12fSgOEyvqnlOCyNOaHkxBxgQU2v5f8iVQsN8TLKiTgmut1OZkgPFtXFsiFUaKLUSJ3qfAHwa6dzC%2Bsut06rdHdK4Nti%2BqwuCM2%2BWMeVrW8vfXDxW0molnStuf%2F0XKehiZ0sMROkONl7rFPaqx1UduGFbTT16&X-Amz-Signature=91a8872e74b965074da6b2547ecbe03d4d3b281946f16d36cdab1c6e56109cf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X2BTNWX%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T161112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGoxGMbT8ufb45%2BREJsyljhFI%2FAJcxVvi9HktZGrUm%2BtAiAl9BBHEbZtgCqmQtTw3lJRJ8VLy4RAbVfswwl5honRUyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FDeWhE3QAgZk%2BKtUKtwDFPG3%2BcFah%2B5PIqZxuSYI04QBbf7mKtGK4mrqp8DoYXyBq2zrTUqtsBVxHnfWdk0ymRqHwK0KkA3yIy5%2B%2BFeJGvq%2FS73BjCmrUPX0RuJFgeR7WcLnC5vH5gPgcNsp7QLhv9MN0J0pUkQA3mcWqPO0Wp0qEESPNNLGNUfUpxz4L57O7FMbvtaQkcMzKaYiatFaTZAiGKXRmGcpmzmqJoZohc0Xi8y7S4dH9grFOu6yqHtrzcc%2FKEbFdCOti6qAxeG%2BAgt%2B01jKYPetEQLmKDgYwy0vRaCqNGwBdSWijy5eZbx8%2BdYvtQLdWqnop4VUgPATkr5BrPF6pxxRR3%2FmlHOAhkNJesokxWJ4brmriUrJZXH8yF1j%2BT77%2BMfR0lnjmyUskieCbata3UnhmvzPWefTjU8GjeRLVsGN7HggFszUhAyQP4XYmsE84tUbdLYbTOIlxdP5PjgxHIzImafPdOK31F%2BIZemkC%2BZ1enkOhsIIj%2BsJ6zFs97AFm8bpoLI%2BdyyRfW3%2FFPTwpwQOWLTaINsEZqLuWKxjMcGo17XqY97sF0qrgemKkROXj6yjNN3zWa7WJGI9aWsrsVomZE25n2j5p%2BxxMJxjuscDqZX%2FLwQNvCLXMMgJgMpYr44ZM2Iw8v%2B0wwY6pgH0ZXVqwSZnlU2qzaXq0e3c0iChHuz%2FPArlJyB9RYrUbq7LITXlHqXMWCExS7TzjTI12fSgOEyvqnlOCyNOaHkxBxgQU2v5f8iVQsN8TLKiTgmut1OZkgPFtXFsiFUaKLUSJ3qfAHwa6dzC%2Bsut06rdHdK4Nti%2BqwuCM2%2BWMeVrW8vfXDxW0molnStuf%2F0XKehiZ0sMROkONl7rFPaqx1UduGFbTT16&X-Amz-Signature=0161b7691003b6dbb6b90dafdff8ca01ad21774f0f01241833cdd92546e2f410&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

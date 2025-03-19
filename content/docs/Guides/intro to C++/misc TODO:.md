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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NUJQZKR%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICmsDeuu3RX%2BFzdlq1REXaV%2BZFAHg9rIdsBHumW7wODSAiAScleKwXAdxYJZk4PMoJ3m6eHCaTyyBUXURSypsLpxgSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMhwaNYgz7dA1TkcJGKtwDf55t0042J44HUaebw8TZhJNnu50YgcQ4d4gENMUhnH1gKWD3knON05d%2F7o3ssafTSu04k%2Bf4tqE%2B1t0B3wMw%2FzgT2MEwNdbGB26Ew6dLEK7l3YCMg4kba%2FPtXON3O81cFfylKc5v9goLJa%2B6z8%2FiTdRB1yGH%2BwXG2V8Y8XJdFU%2BcBJTuQHQoV5zSH1x5FXPPbA0tuOdpU%2B5PQ%2BM3BMgE6lHe14r91Vu5TIecfnxgysVcj2G%2Fdn6yD7Wn9P5YJZkFQ33r7ywcDcnPTWPJUY7royhXvkNzNIR9x8KaTIwFlPyDzaY1r8rlA4aAdu3jxkrm7LKKDeK8s3eo8Gcoavr5RRHJAKBl48Sq5Mww6YN1rtysPVDnM2HsJRza1UiAyUN3a39mV%2BAF9UfeXjopZJtRMYwo3VzUoaKCJZADYeSLb9l8cSUCdAcQfTXO%2F4i2Yaq7HeH5axLDkhJZ8sTfgOsGVfOyBqPntR5T6Ns71DWCEoAEkeXJTvgGM%2Fe8Nr3ZOGXW96dOOFzL0ET2NLRovwW6BtNP08n0KtvELTluBhMDuqxqHKDiSY45Oj7eOZt4h2aHpDgk5lA3qkk6aPN2RgX0f0lZ6jxvUbkunmbjeInydRreLOMl6WdXhKXIqxcwzbzrvgY6pgFSqOe6QXa8Xt41%2BwF%2Fl4tU8LFl0TVin1%2Bowp7RLBpy8wNBzD7LP44xChRJPRWcRdMrUos48lOUmEGTZmGQoms%2F9jhSqR2sb3jBJCZwY6LEQKKOWhna7bC5qpYIhI5LlJIR42V5xkGSngNCZY7uyODHqBIVK93uHa7To4pgtR1FF3UwAANmqr6gpGKAnTdapZizwrGPnOkwwfQiXsBe1hbvNyUkNqEE&X-Amz-Signature=0cf882fc86761881f01e24a121adc297c18baed0b1096dfc031befea3c52606e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NUJQZKR%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICmsDeuu3RX%2BFzdlq1REXaV%2BZFAHg9rIdsBHumW7wODSAiAScleKwXAdxYJZk4PMoJ3m6eHCaTyyBUXURSypsLpxgSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMhwaNYgz7dA1TkcJGKtwDf55t0042J44HUaebw8TZhJNnu50YgcQ4d4gENMUhnH1gKWD3knON05d%2F7o3ssafTSu04k%2Bf4tqE%2B1t0B3wMw%2FzgT2MEwNdbGB26Ew6dLEK7l3YCMg4kba%2FPtXON3O81cFfylKc5v9goLJa%2B6z8%2FiTdRB1yGH%2BwXG2V8Y8XJdFU%2BcBJTuQHQoV5zSH1x5FXPPbA0tuOdpU%2B5PQ%2BM3BMgE6lHe14r91Vu5TIecfnxgysVcj2G%2Fdn6yD7Wn9P5YJZkFQ33r7ywcDcnPTWPJUY7royhXvkNzNIR9x8KaTIwFlPyDzaY1r8rlA4aAdu3jxkrm7LKKDeK8s3eo8Gcoavr5RRHJAKBl48Sq5Mww6YN1rtysPVDnM2HsJRza1UiAyUN3a39mV%2BAF9UfeXjopZJtRMYwo3VzUoaKCJZADYeSLb9l8cSUCdAcQfTXO%2F4i2Yaq7HeH5axLDkhJZ8sTfgOsGVfOyBqPntR5T6Ns71DWCEoAEkeXJTvgGM%2Fe8Nr3ZOGXW96dOOFzL0ET2NLRovwW6BtNP08n0KtvELTluBhMDuqxqHKDiSY45Oj7eOZt4h2aHpDgk5lA3qkk6aPN2RgX0f0lZ6jxvUbkunmbjeInydRreLOMl6WdXhKXIqxcwzbzrvgY6pgFSqOe6QXa8Xt41%2BwF%2Fl4tU8LFl0TVin1%2Bowp7RLBpy8wNBzD7LP44xChRJPRWcRdMrUos48lOUmEGTZmGQoms%2F9jhSqR2sb3jBJCZwY6LEQKKOWhna7bC5qpYIhI5LlJIR42V5xkGSngNCZY7uyODHqBIVK93uHa7To4pgtR1FF3UwAANmqr6gpGKAnTdapZizwrGPnOkwwfQiXsBe1hbvNyUkNqEE&X-Amz-Signature=41b042226f1b9ed8b5ca867e5caaef1a64429c069597320c0ce7a4bfa12753ac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

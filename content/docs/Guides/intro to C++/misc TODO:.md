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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ6PX36K%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIAo%2FOcQQk2A6c2ofk0Ll7H62YBmZ9BBXHsW0UngD4hiVAiAgzbUvmJkcjUroF%2Bjhf8jGsEdle6e6%2FinIuqj2t8xUTSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMbufGnZp5yHKTCkMnKtwDZnuglNK%2B9LncZoFlIU5zemQSDRlHe5TW8vwqb6OlYr9ZspNdC8cy6OyNWhJqJFak51wG%2BH3q3OKHMcN1EFMgvqDa%2FPLkZ6UdI0hvDHD%2BvomXhLtTIoloPTnjjQqTajJxQVjsW%2BiiG9gupwz6yvDaQiEowKMehG0%2BVVbxKhIZokY8SpA%2F8ErNuz57bjYOnUoIqwthpT1SouI84%2BuBvhLwlpiGaqlEtQ0KV%2BOsqfKfKMbnTy%2BWyjbx%2B5lxPXUZm5Jmt1wx7XUHnH0Hsq5GUMLqDMlmkqga9oAg5PHQhbr5CRa0zQREJYI7XdtmAH%2B2XzQ%2BCfkwTpeiqfLeFdah0vgdaVn0xpVber4sYOGhE3tIhOS%2B%2BNL4RfjtpIc3aVVoz0bE2CYzbOI4k13akbKE20Rpi%2F5fpDCPENWtKZ7q9IaHUsE3Zk44D8OGxuJ6ncBdvBQffhbNs6K4IYlOfgALs3pGNqVOtlbOhfNngMq9rjq6M%2BN2oBHq%2BBZ%2FoXAuPS79dGfXMBV5Qz3nWHx6ALfdi3Xs%2FTK09c0Ve5QHFeXHCCXmvxt%2BjJUSMEoAw3ZCxyH1MthM%2FlAICpTEz29k%2F%2BiOoJgObvEDckh2G7F9Eh2cKD1vwnYn9j1mC0AcO1vgdUMw%2F574xAY6pgFkLdZpgqYXdZu5htqE3lz3vXmkcTBnTcLwW6WzEjD%2FzkiurdewbK6QcWIjmIspB3qYuf8HMzUUeQFp2LNiN9zL%2Fp8YprtNLb2P%2BbmizHe8VSYO7Pfvir9Ei1b1r1Ak5gRLwW8CJjLTNz8A6SA0rJHDbloiEvSXinWJJ3AXn%2FjLjIK7YrWNgMDHs3%2F17lcY5q6fQk43keTwAbXJEUGl2MlEPm8E7hld&X-Amz-Signature=3961981f2db0b64130691686e7461e457d0fbad3f3a4e00146ac31098be8d485&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ6PX36K%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIAo%2FOcQQk2A6c2ofk0Ll7H62YBmZ9BBXHsW0UngD4hiVAiAgzbUvmJkcjUroF%2Bjhf8jGsEdle6e6%2FinIuqj2t8xUTSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMbufGnZp5yHKTCkMnKtwDZnuglNK%2B9LncZoFlIU5zemQSDRlHe5TW8vwqb6OlYr9ZspNdC8cy6OyNWhJqJFak51wG%2BH3q3OKHMcN1EFMgvqDa%2FPLkZ6UdI0hvDHD%2BvomXhLtTIoloPTnjjQqTajJxQVjsW%2BiiG9gupwz6yvDaQiEowKMehG0%2BVVbxKhIZokY8SpA%2F8ErNuz57bjYOnUoIqwthpT1SouI84%2BuBvhLwlpiGaqlEtQ0KV%2BOsqfKfKMbnTy%2BWyjbx%2B5lxPXUZm5Jmt1wx7XUHnH0Hsq5GUMLqDMlmkqga9oAg5PHQhbr5CRa0zQREJYI7XdtmAH%2B2XzQ%2BCfkwTpeiqfLeFdah0vgdaVn0xpVber4sYOGhE3tIhOS%2B%2BNL4RfjtpIc3aVVoz0bE2CYzbOI4k13akbKE20Rpi%2F5fpDCPENWtKZ7q9IaHUsE3Zk44D8OGxuJ6ncBdvBQffhbNs6K4IYlOfgALs3pGNqVOtlbOhfNngMq9rjq6M%2BN2oBHq%2BBZ%2FoXAuPS79dGfXMBV5Qz3nWHx6ALfdi3Xs%2FTK09c0Ve5QHFeXHCCXmvxt%2BjJUSMEoAw3ZCxyH1MthM%2FlAICpTEz29k%2F%2BiOoJgObvEDckh2G7F9Eh2cKD1vwnYn9j1mC0AcO1vgdUMw%2F574xAY6pgFkLdZpgqYXdZu5htqE3lz3vXmkcTBnTcLwW6WzEjD%2FzkiurdewbK6QcWIjmIspB3qYuf8HMzUUeQFp2LNiN9zL%2Fp8YprtNLb2P%2BbmizHe8VSYO7Pfvir9Ei1b1r1Ak5gRLwW8CJjLTNz8A6SA0rJHDbloiEvSXinWJJ3AXn%2FjLjIK7YrWNgMDHs3%2F17lcY5q6fQk43keTwAbXJEUGl2MlEPm8E7hld&X-Amz-Signature=f5fca6adf1e0a7d557baccda7ff1209281dbcc7e8bdd7eb11a8947a287aabcfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

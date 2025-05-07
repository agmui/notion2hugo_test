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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AOHS4P2%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzClufQBqZnl5f23ZsmQ1x8kSPWR66kdqfui%2FEYNxN5wIgSBPdJbIGgcgrXNgtqPPgzLCjmRK4YciJuHdAJGYB5XMq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDJuKs1nss2KiL8xAoSrcA97DdOdrGa0YWzdEMPuDnIUPDLXUzhSxwoYLt5Az7MClzcAlC4JIv0DHYc9n2yyFzmml%2BtqJXCD5LxqXplnF0zNeqE4%2BzTSsFk6vavguzDXotCSp%2BZ2xvhPAVU1CctOUNDAyuPwhiAElHLliLBJ%2Bzwd5m4gfw%2F7hNqjRBv0q2FUxH7CS3rx%2FMcYCPh2A8jgvU7srBeTxGvz9jK58SHyjYvwxlIo%2FmCvNfc%2BFGEk6oT7MqLujzGUeOsn18DxX9yvr6xb7zfkGe98yFZcdY6cHM%2Fx1WPz5lka2OeW8ZIIcKVWwrczkDhFdXinyM%2BV8M%2B8s7uFLeU42ciHIjaw6DucK%2BuxV2vuaAzICt9M6JCrIUx5vzN3hXrmixtEL4yElfc6YHTfJh2A%2B8LyKGYzbMDdHhxj879N7c3Pc%2FblOtgfxY6VnABP61Q%2F8CvAAgOQ2CqGt2AK0LGB%2BHd4OARSBXZq2dPeNJ83zSEArVr0zI72VBdtujopxDN%2BiXXRCQeGtMs91mXOYvb%2BJSJMzqrb5tqN5%2FGxj9YEhqUDAPz2smszo3PMiiA%2B%2B6PgUtE1lQ%2B1%2BRHnkFkytAUeSke%2BAd89DA1rOUhO491TyZLw98Ds0mhKrNUM7MZ7nXUW%2F0Cv3tuOKMJWc78AGOqUB4SpvsP8OKEWhTgSN0Bs9zECat5gKwCIftLXtQww9mJNb2sL7b0xzvafglc665udsVpvt9YDB%2BAA1uFGiDye9A6uF7OEryjRNR4uNSIfgbwgacb%2BK50C8ROqRRCzP%2Bi2LmYggeE3xrvOT1ZUhLrgCG7rQsq%2BOcbgYwLFkuHcKE1qAFsHIRup0KUS1n71xMyQ1vfkNUxwNd2xmMNkqtl7wMfocf9Fw&X-Amz-Signature=e5b2c6c42051c89fa2545a7aab0ff13b679e2fb1812ff58719c0f8b97c688566&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AOHS4P2%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzClufQBqZnl5f23ZsmQ1x8kSPWR66kdqfui%2FEYNxN5wIgSBPdJbIGgcgrXNgtqPPgzLCjmRK4YciJuHdAJGYB5XMq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDJuKs1nss2KiL8xAoSrcA97DdOdrGa0YWzdEMPuDnIUPDLXUzhSxwoYLt5Az7MClzcAlC4JIv0DHYc9n2yyFzmml%2BtqJXCD5LxqXplnF0zNeqE4%2BzTSsFk6vavguzDXotCSp%2BZ2xvhPAVU1CctOUNDAyuPwhiAElHLliLBJ%2Bzwd5m4gfw%2F7hNqjRBv0q2FUxH7CS3rx%2FMcYCPh2A8jgvU7srBeTxGvz9jK58SHyjYvwxlIo%2FmCvNfc%2BFGEk6oT7MqLujzGUeOsn18DxX9yvr6xb7zfkGe98yFZcdY6cHM%2Fx1WPz5lka2OeW8ZIIcKVWwrczkDhFdXinyM%2BV8M%2B8s7uFLeU42ciHIjaw6DucK%2BuxV2vuaAzICt9M6JCrIUx5vzN3hXrmixtEL4yElfc6YHTfJh2A%2B8LyKGYzbMDdHhxj879N7c3Pc%2FblOtgfxY6VnABP61Q%2F8CvAAgOQ2CqGt2AK0LGB%2BHd4OARSBXZq2dPeNJ83zSEArVr0zI72VBdtujopxDN%2BiXXRCQeGtMs91mXOYvb%2BJSJMzqrb5tqN5%2FGxj9YEhqUDAPz2smszo3PMiiA%2B%2B6PgUtE1lQ%2B1%2BRHnkFkytAUeSke%2BAd89DA1rOUhO491TyZLw98Ds0mhKrNUM7MZ7nXUW%2F0Cv3tuOKMJWc78AGOqUB4SpvsP8OKEWhTgSN0Bs9zECat5gKwCIftLXtQww9mJNb2sL7b0xzvafglc665udsVpvt9YDB%2BAA1uFGiDye9A6uF7OEryjRNR4uNSIfgbwgacb%2BK50C8ROqRRCzP%2Bi2LmYggeE3xrvOT1ZUhLrgCG7rQsq%2BOcbgYwLFkuHcKE1qAFsHIRup0KUS1n71xMyQ1vfkNUxwNd2xmMNkqtl7wMfocf9Fw&X-Amz-Signature=a23dc5183868832a5895b8bfdd4ef633e20ee4f8e054f2ac2e06e92e176432c6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QFYUDTJ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T131600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCICKmyFV%2BhMbev3qzgyIgQFGhWJzbTyjzikT4lz%2BdtycAAiEAiiVkvmGXwLlm5IF0ymB4pT9jz7yfs4ZT%2BCYXvBOIBxUqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLcH7ysGksXUp1lxACrcA8FS5qRZlhq1s%2BA%2FLZYy5939aYDBc0YHLToMDfLBopL4TtBQ1QFl0nTyQg2VKeVDD%2BPd8WkPjAui%2F9KTcPfiGOPK0pUI%2FcvDdCNXGwo02ndqDLa4lsxuWjE4e8MO9iNQD9dzfpC%2B8gKWJWs2fISbkGW%2BBH99DPZZDPNEFiWq5lB6z%2FTd3kJXHonwlmgVHmpn8FWAQeNE6yAgAsIeOqNrqLbg53axsV5o6%2FOXBVKGGmRyBvvQ2%2BR0Xz9bYSOEAn7n4ZHL294TppoqRDSUME5WZpmLKaLYqTfCjAv7dsbNLC98hoqLBBy5J1q5JBE4%2BdZv5rWC%2BQDVDPehb400q9Wg0yWnb%2FHQrPsWfORKoKvuRYcnZ9mmGyt%2BIYsr%2Fbz3GI5I9CEO5UdIZDO7WKIHF5WLQMyy4%2Bfn727cWq1k8UfeZgPPCZWe0y%2BUX3bcSTDgAsWuGguq84CoZ96wHIHqCU%2F%2B0EYEKEZoM%2Fi58POadtwslriSjbUwv6%2FIAgM5N%2B9LSVYCKX0GJ9XFb8F%2B22BPAI5iFEjKv0azE%2F8vvQreiswiQSk6rRVfXlnVQisvyi2%2Bb3LIvNpnfHVeSo9lFB0HQbxC4dZ5Qa1Fc60YzJ1yOmTA1pkl2rZRpCJ4sBMS7%2FT9ML3Qhr4GOqUBzxThyW5oLfRi6L3Fk%2B5vmpuSOJTpeUKjVQHYaLp79L07tcO3hlLbXJSfpaYBT8WL7xz5RCh0bSXaeI3puF4Vvx8mXi2WzH62IlcQlkU3H3c9P7FmhBnmQjE5fjINaENe9cfDTxtJNuc6NwDPmGTdv0a7KaPEwu9JvQj2xlVV4KY5Ifst%2FTt9UDjeFkOlO1ts7JkDE%2FjXqY78FtF3bgoPQiSba0eb&X-Amz-Signature=95929ff6d68fbc03fd376e41ddd18d1829ca0ae4100595e044fbc924b8ed435d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QFYUDTJ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T131600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCICKmyFV%2BhMbev3qzgyIgQFGhWJzbTyjzikT4lz%2BdtycAAiEAiiVkvmGXwLlm5IF0ymB4pT9jz7yfs4ZT%2BCYXvBOIBxUqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLcH7ysGksXUp1lxACrcA8FS5qRZlhq1s%2BA%2FLZYy5939aYDBc0YHLToMDfLBopL4TtBQ1QFl0nTyQg2VKeVDD%2BPd8WkPjAui%2F9KTcPfiGOPK0pUI%2FcvDdCNXGwo02ndqDLa4lsxuWjE4e8MO9iNQD9dzfpC%2B8gKWJWs2fISbkGW%2BBH99DPZZDPNEFiWq5lB6z%2FTd3kJXHonwlmgVHmpn8FWAQeNE6yAgAsIeOqNrqLbg53axsV5o6%2FOXBVKGGmRyBvvQ2%2BR0Xz9bYSOEAn7n4ZHL294TppoqRDSUME5WZpmLKaLYqTfCjAv7dsbNLC98hoqLBBy5J1q5JBE4%2BdZv5rWC%2BQDVDPehb400q9Wg0yWnb%2FHQrPsWfORKoKvuRYcnZ9mmGyt%2BIYsr%2Fbz3GI5I9CEO5UdIZDO7WKIHF5WLQMyy4%2Bfn727cWq1k8UfeZgPPCZWe0y%2BUX3bcSTDgAsWuGguq84CoZ96wHIHqCU%2F%2B0EYEKEZoM%2Fi58POadtwslriSjbUwv6%2FIAgM5N%2B9LSVYCKX0GJ9XFb8F%2B22BPAI5iFEjKv0azE%2F8vvQreiswiQSk6rRVfXlnVQisvyi2%2Bb3LIvNpnfHVeSo9lFB0HQbxC4dZ5Qa1Fc60YzJ1yOmTA1pkl2rZRpCJ4sBMS7%2FT9ML3Qhr4GOqUBzxThyW5oLfRi6L3Fk%2B5vmpuSOJTpeUKjVQHYaLp79L07tcO3hlLbXJSfpaYBT8WL7xz5RCh0bSXaeI3puF4Vvx8mXi2WzH62IlcQlkU3H3c9P7FmhBnmQjE5fjINaENe9cfDTxtJNuc6NwDPmGTdv0a7KaPEwu9JvQj2xlVV4KY5Ifst%2FTt9UDjeFkOlO1ts7JkDE%2FjXqY78FtF3bgoPQiSba0eb&X-Amz-Signature=f2928ba7bc3d78ed45db16cd3107e17cfad44326789c30ba0afbf1efe813724d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

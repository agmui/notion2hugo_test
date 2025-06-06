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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCMK7TG3%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T181213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYWmDCMxmydFPOXCj5R3V0sF2aI19M6knIerbQFxioqAiEAm%2FyQlJmpIHOYTkD%2FVOsTg0xTY8pPr6m0qqMcoPnLFKEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDALnFFoA0Ftanj%2BUpyrcA2Bz6ef%2B5hdnjMSv7lmnVAtrxgGjCqOG1PdBZla%2BQMerE6wXXYsgF%2FXeoRfNlNsqZp6TD3QIemoXv5BA51RJIYHmXKqz1kdpYEqwf7sv1Pm%2F93GCBzeEa%2FumYPnS5HuDCWC8HjKMjsMZ9wIMrDQbCSjiPlc89q4x44eDXlisv6yo1lan82zwXPSP%2BQMs90twQR4hR1gHsxwyRPq9KdgDCgczOgvmV5Dq57bg4yiQQHeruJi3iHTxK8j489F%2FhYve5etBLdCVnE%2BIF%2BW5EbuG6pDlfgjaRih6lqf%2FC%2FZrVqUFH0ukf9ASKqZsaAQcL%2FaDi96YZuxAPEINeAjnpSCaHHZcB3d9LO74pEvjtqC6lUJh%2Fc%2Fh4ikKSzlAWrvKop1%2BKSKx3f68dLx7c%2B%2FbwlBUP0JUVC7nFBOmz1vDULaHkngDRaRKQRPcRwoLGZG8Udbs77%2By29HVlxBXUGkTTTGGNSCDgqj6JZMllkXT%2FDfA2ekXN0eDlYVUkUNfNskqzYit5AU1a0Dd2pN5gugHZ9aNUWr7tSslbtzxnXUkjIxtFWLZiXX%2BUymc1IIsRNqdwBjJXkr6PgjTv9JR7TLcSQrhqZAInESCQLzAfLCY9hV60A6IFImtFZspQXpAQO0IMKjWjMIGOqUBUZA0NblDx%2FUNByCF5VaoW83MBcJjPPaPFw%2Fl6Or65d4JL8AqwqG9OeTSE919VcY5mTUBrjkvoNXkycaUX5QLCEDq%2BzwQPmep5sjO7qaX2eZCNxWYYGMTNwf3TObTEQVh4x5LqF%2FFyM4pXmUJQxBBtOUjS0GNxlf0gNShe5qY0oSfdf7RHkwT3bkjQ1WBNLEZ0%2Fg%2BFKqjsG7c1Zk1c74eeWykUZb%2B&X-Amz-Signature=e382b1d0e14d00ad7cc391a91a6f65773d5a9fb4c347092a51baf9895892d186&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCMK7TG3%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T181213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYWmDCMxmydFPOXCj5R3V0sF2aI19M6knIerbQFxioqAiEAm%2FyQlJmpIHOYTkD%2FVOsTg0xTY8pPr6m0qqMcoPnLFKEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDALnFFoA0Ftanj%2BUpyrcA2Bz6ef%2B5hdnjMSv7lmnVAtrxgGjCqOG1PdBZla%2BQMerE6wXXYsgF%2FXeoRfNlNsqZp6TD3QIemoXv5BA51RJIYHmXKqz1kdpYEqwf7sv1Pm%2F93GCBzeEa%2FumYPnS5HuDCWC8HjKMjsMZ9wIMrDQbCSjiPlc89q4x44eDXlisv6yo1lan82zwXPSP%2BQMs90twQR4hR1gHsxwyRPq9KdgDCgczOgvmV5Dq57bg4yiQQHeruJi3iHTxK8j489F%2FhYve5etBLdCVnE%2BIF%2BW5EbuG6pDlfgjaRih6lqf%2FC%2FZrVqUFH0ukf9ASKqZsaAQcL%2FaDi96YZuxAPEINeAjnpSCaHHZcB3d9LO74pEvjtqC6lUJh%2Fc%2Fh4ikKSzlAWrvKop1%2BKSKx3f68dLx7c%2B%2FbwlBUP0JUVC7nFBOmz1vDULaHkngDRaRKQRPcRwoLGZG8Udbs77%2By29HVlxBXUGkTTTGGNSCDgqj6JZMllkXT%2FDfA2ekXN0eDlYVUkUNfNskqzYit5AU1a0Dd2pN5gugHZ9aNUWr7tSslbtzxnXUkjIxtFWLZiXX%2BUymc1IIsRNqdwBjJXkr6PgjTv9JR7TLcSQrhqZAInESCQLzAfLCY9hV60A6IFImtFZspQXpAQO0IMKjWjMIGOqUBUZA0NblDx%2FUNByCF5VaoW83MBcJjPPaPFw%2Fl6Or65d4JL8AqwqG9OeTSE919VcY5mTUBrjkvoNXkycaUX5QLCEDq%2BzwQPmep5sjO7qaX2eZCNxWYYGMTNwf3TObTEQVh4x5LqF%2FFyM4pXmUJQxBBtOUjS0GNxlf0gNShe5qY0oSfdf7RHkwT3bkjQ1WBNLEZ0%2Fg%2BFKqjsG7c1Zk1c74eeWykUZb%2B&X-Amz-Signature=8c7467d8293194701a55ed830c41b77a3a374fc43396f5278a72325d11edd397&X-Amz-SignedHeaders=host&x-id=GetObject)

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

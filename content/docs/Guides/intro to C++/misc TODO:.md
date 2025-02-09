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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SWSLQUS%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T021123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDis%2F23wccTcrv8EOJsJgFnfvXW6wNThSiWSiKwMf08qAIgSgTMh7oTSUZs7ick1ThYTeeyC3Eku89S2L76QPi2qycqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKD8wmzkGQZ4c9BXayrcA7dCe1FqfsMZylTIpjJNQulJlz%2BmdVvxEwFa7KcFXzfySkm8dPPIHC6kvYSN1G8Ah5LwA1OcsW8Q%2FGZ%2BTWiUXnMe7lmlqW55IYH0id2M87q3g8yJ9ojixvSknnGRyjk22MuPrCyHR7WCZ500LyA4qZ660s12cNN0%2BFTc8ch64Ilu3xE%2Fq%2F76Lcj0vQ%2BaiqX6fM5%2FodStPSrzOiU%2FGCrDNDFb8OSCNE3Mx%2F8s%2BRb7ypE%2BHPse1tJ4wMaZL%2FLlzzdKhKkIayRlE2pdPOStH4T3rtx7hjMHmue6IGYBLAJF%2FOoCPqaPnq3v%2FbEtvqCYZznm9T0a8bP1d8%2FQ2uJuOJlH4pAx5HkasoviTiGP6U56jbt644L9PwYV8vu%2B6KXRYar8TxgElFqqzbtr8L28%2Fw2Ua6vIaE4j4FtvGVAthw2HCIaiTPH6cTuPHJayMIMZRJIbeMLMdoBRy5CULzpRRrTwIUz28ex9lIjJunQXOMT5PLU7kiJidfXohpzhSXa7mleWxuXQQT6ikg8Iz86Lxvd%2BQ%2FsEQPhVz3A7%2F92djdnVJodM2XeNRFgKVxDZJBn8gmqMaT1RLUjCZ1Jwc%2FFBGODlcvrii3I8w4fev7Iczly0LldGqL4h30dzyEeU5Zd%2BMLj0n70GOqUB4to3n%2FkiM1B8DSNiC5c0sdHMM%2F45jdab5v5cXdsPi4QOXjIjuoCk2coldHcBboLim1tpKXSnj4OuGSwX%2FnNmu9TbVyg7xCMbontXZ4bR%2FxZgUYlNvHXSGohY%2FMRJbbp46ndEgRHQ5QrTqhVxZ8ojmvJYXuiRV%2FCOpItqpZpQxiY%2FDpdhIDcuaU4SaGqiCF9T6DaNcDoOMdiG5Xg84SwZKTZyaesr&X-Amz-Signature=e50e31f74d81cc3d4727f080025aa934fea9fbf76b2096b95ed07928e6d7644c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SWSLQUS%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T021123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDis%2F23wccTcrv8EOJsJgFnfvXW6wNThSiWSiKwMf08qAIgSgTMh7oTSUZs7ick1ThYTeeyC3Eku89S2L76QPi2qycqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKD8wmzkGQZ4c9BXayrcA7dCe1FqfsMZylTIpjJNQulJlz%2BmdVvxEwFa7KcFXzfySkm8dPPIHC6kvYSN1G8Ah5LwA1OcsW8Q%2FGZ%2BTWiUXnMe7lmlqW55IYH0id2M87q3g8yJ9ojixvSknnGRyjk22MuPrCyHR7WCZ500LyA4qZ660s12cNN0%2BFTc8ch64Ilu3xE%2Fq%2F76Lcj0vQ%2BaiqX6fM5%2FodStPSrzOiU%2FGCrDNDFb8OSCNE3Mx%2F8s%2BRb7ypE%2BHPse1tJ4wMaZL%2FLlzzdKhKkIayRlE2pdPOStH4T3rtx7hjMHmue6IGYBLAJF%2FOoCPqaPnq3v%2FbEtvqCYZznm9T0a8bP1d8%2FQ2uJuOJlH4pAx5HkasoviTiGP6U56jbt644L9PwYV8vu%2B6KXRYar8TxgElFqqzbtr8L28%2Fw2Ua6vIaE4j4FtvGVAthw2HCIaiTPH6cTuPHJayMIMZRJIbeMLMdoBRy5CULzpRRrTwIUz28ex9lIjJunQXOMT5PLU7kiJidfXohpzhSXa7mleWxuXQQT6ikg8Iz86Lxvd%2BQ%2FsEQPhVz3A7%2F92djdnVJodM2XeNRFgKVxDZJBn8gmqMaT1RLUjCZ1Jwc%2FFBGODlcvrii3I8w4fev7Iczly0LldGqL4h30dzyEeU5Zd%2BMLj0n70GOqUB4to3n%2FkiM1B8DSNiC5c0sdHMM%2F45jdab5v5cXdsPi4QOXjIjuoCk2coldHcBboLim1tpKXSnj4OuGSwX%2FnNmu9TbVyg7xCMbontXZ4bR%2FxZgUYlNvHXSGohY%2FMRJbbp46ndEgRHQ5QrTqhVxZ8ojmvJYXuiRV%2FCOpItqpZpQxiY%2FDpdhIDcuaU4SaGqiCF9T6DaNcDoOMdiG5Xg84SwZKTZyaesr&X-Amz-Signature=208f95659dc1cd5dc8d68eaece7fcf6a87940991a585d33b9849103b8b17909e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

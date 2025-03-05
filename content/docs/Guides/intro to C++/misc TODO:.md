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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKMOIYTB%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T090857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICYsgtWnYENZVgiz5OOSdEgCrdA%2FZQ28aEXxxCN1%2BzBFAiEA0nIt6NFexn5l4ZQQGLLMmE%2Bii82DttUE4pLDG9riR%2BAq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDH%2BoNQXVkk%2BeewDvjircA24HN%2FU%2FwuCBZyqFbBv7bTsMETFfDlNU%2FxmE6jY1rxTDb4c1OxNT%2FJFgr3y%2F4a04AhvTel2J7JLsMdFhYuzpb8PmROHRqB35F8w5oZEtbmS7OrBevedZ8JVSP5ZgnrEsyN3%2FADUwJUvufkofc7vkaC9BMBmO4G6D%2Fq8s0%2BbQBjoh8EN4weGYCdAMrCK8cngVPMrelkfx8785WlFworgMB7muEfFbOLZbh92elvw1ZPgL%2F6RApAnikNM4nJN2z0SHYZWD5xJdCspLAUZZ3iDxGcKHWj8Nf%2BcmNoAL50Ss%2FFNXDeaqkIQ2Ye6fL7iaF5e7LFQGEAwldAcFIVO9y4IKSPKdJ%2B0NbA%2FYH6NgAOGOcvP%2BF7zaRSzMUOeO9aJv6s1ihoyX72ZG3REYuRLKQZuSJLfHYtNtQhzbQUok7%2F4yerosb%2BbYToVZcQlJE8f5SGJmmOFgK8AQy1JDfRB3MKLnuEOZR6%2B4LL%2FHomeWOw2OqTQmsNRr6CKfhkE87WkykPwXrRNguX9MMJZ%2FKbgMpKOoeCLqhVwenWFtx1KxF1ojdvRklQ7L2IFb6LYwdSXHgBPGq2OiJMql4eJFbOqckeL1YdyLfCb%2BcDctbSGM1U8%2Bn5clZT754zWw%2F97qDrajMKONoL4GOqUBb0CO%2BrCj%2Fjh45xU45eEAsXPJ3xbwNZqJXjNFWiVr0kGWOYbVlbhOXu1Ss7cbV8JhJrws2rJWZe%2BS8lfDBJP1c%2BaIdq3HKWovns8O2oM9Mt8rwosIy7M4KK7cNRBTBxVcGak4%2Bc85aQUQUgZDrJyGaQ4rQ9%2Fd8NVMCmmv%2B49%2BlUkUJr4G2fn50A98NSSUSRJLmLQNOJA6WO1t0R2cL2Y3ASegCltb&X-Amz-Signature=5af8f310acc056c6c18c5f17d484318c32eca5c643d25e99e56e60bdfa5e814f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKMOIYTB%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T090857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICYsgtWnYENZVgiz5OOSdEgCrdA%2FZQ28aEXxxCN1%2BzBFAiEA0nIt6NFexn5l4ZQQGLLMmE%2Bii82DttUE4pLDG9riR%2BAq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDH%2BoNQXVkk%2BeewDvjircA24HN%2FU%2FwuCBZyqFbBv7bTsMETFfDlNU%2FxmE6jY1rxTDb4c1OxNT%2FJFgr3y%2F4a04AhvTel2J7JLsMdFhYuzpb8PmROHRqB35F8w5oZEtbmS7OrBevedZ8JVSP5ZgnrEsyN3%2FADUwJUvufkofc7vkaC9BMBmO4G6D%2Fq8s0%2BbQBjoh8EN4weGYCdAMrCK8cngVPMrelkfx8785WlFworgMB7muEfFbOLZbh92elvw1ZPgL%2F6RApAnikNM4nJN2z0SHYZWD5xJdCspLAUZZ3iDxGcKHWj8Nf%2BcmNoAL50Ss%2FFNXDeaqkIQ2Ye6fL7iaF5e7LFQGEAwldAcFIVO9y4IKSPKdJ%2B0NbA%2FYH6NgAOGOcvP%2BF7zaRSzMUOeO9aJv6s1ihoyX72ZG3REYuRLKQZuSJLfHYtNtQhzbQUok7%2F4yerosb%2BbYToVZcQlJE8f5SGJmmOFgK8AQy1JDfRB3MKLnuEOZR6%2B4LL%2FHomeWOw2OqTQmsNRr6CKfhkE87WkykPwXrRNguX9MMJZ%2FKbgMpKOoeCLqhVwenWFtx1KxF1ojdvRklQ7L2IFb6LYwdSXHgBPGq2OiJMql4eJFbOqckeL1YdyLfCb%2BcDctbSGM1U8%2Bn5clZT754zWw%2F97qDrajMKONoL4GOqUBb0CO%2BrCj%2Fjh45xU45eEAsXPJ3xbwNZqJXjNFWiVr0kGWOYbVlbhOXu1Ss7cbV8JhJrws2rJWZe%2BS8lfDBJP1c%2BaIdq3HKWovns8O2oM9Mt8rwosIy7M4KK7cNRBTBxVcGak4%2Bc85aQUQUgZDrJyGaQ4rQ9%2Fd8NVMCmmv%2B49%2BlUkUJr4G2fn50A98NSSUSRJLmLQNOJA6WO1t0R2cL2Y3ASegCltb&X-Amz-Signature=50c31fc34fdf08dc605ee54dccd6d815667726b028cb170bd1f34cea015894ec&X-Amz-SignedHeaders=host&x-id=GetObject)

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

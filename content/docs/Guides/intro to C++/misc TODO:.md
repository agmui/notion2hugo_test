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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ542FN2%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWYVKmi4FaWRc84tHMGMLM5dPRU2pFZt9OqzJ4SksuBwIgfLLthokz2PU6C9MCQ4AoqISqW9OOecbZC5EOv3X6KlwqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEXC%2BMDw2vpBDH9lCrcA0tlk9OH1JC7Dpkq6jAgmrMhZ0qqYNmlAVGNQF4Ps78U9N5u9VrgM0Zk9VlhmYMc1zqc08feSjKhhg5qv4QzgdtVxPmKSd3i97Lsd3AdDQEB4vlGNLo9tWD3iwSIPASCKiPo%2Fv%2BPLROkGtAkGe3gBaM16CoWwAJA3ibZ9heAulCojUU9xXpxFL3NhFlvnHSETh3l4vT%2B8rR0Aec6WAop8lcxbJWnMXkBVyMb918vxKrrczP9h%2FpEg61xrzoQIACS1rN1JliSG0TXFMnfCHo1aC7Bxo4XGSuORDdjL8jo24l%2Bo0hSXYqSz1R%2FXUCSGkBinHpOeIGlBP4QubrE4iGs0Q2wEG%2BrnW2mq7OCrOzGG4RARR9ub96BwS6M7VxjUz2RJjjBYdYpyFOhZYF%2By0%2F4PPpIJ0yhVCJlMC6ipFWvIQJle7cQcih3LOgmGkwTAkmUBsC15nPKieiAsSSandZXhMPnO5CDdZolnnun8rMIq4BXWX1n6%2B5b7XwKqHWBT0DDFoPQvD%2BxiBaJh%2BgnStb14luJDWHDobjWNhkkmgznfZyqr%2FD6s9bCTd2srDKpQ1rjuC0Dy6KVquoLsOXhM9nfr18WreTqdwr57E9aHqXfaRHe0rwqkGJwH7ATAPyZMN30ysIGOqUB4KvcYoP842s2gtgE%2FdPNielWXBw2l%2FjskKN0MLvEds5jJcGqcvX7%2FVkntrjF1zLS%2FESkMg%2FrMHVG5zSzebD6Hs7iD%2B02%2BwC32qELeMus0Hyl0J5pl1XN9pCr10uWrxgcyOTWqpXlI6TK15a%2Bj1VHLeteCkTCeyiR1j0pxkQTDlVsRrxqcMcLbed6FU1UFd%2B6cSo6k0cWAW3rvAoHPcQMAjtoiuLy&X-Amz-Signature=2562978fe76210747305e764455f6fcac51435ed20e4774fc8a83901cc2749c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ542FN2%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWYVKmi4FaWRc84tHMGMLM5dPRU2pFZt9OqzJ4SksuBwIgfLLthokz2PU6C9MCQ4AoqISqW9OOecbZC5EOv3X6KlwqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEXC%2BMDw2vpBDH9lCrcA0tlk9OH1JC7Dpkq6jAgmrMhZ0qqYNmlAVGNQF4Ps78U9N5u9VrgM0Zk9VlhmYMc1zqc08feSjKhhg5qv4QzgdtVxPmKSd3i97Lsd3AdDQEB4vlGNLo9tWD3iwSIPASCKiPo%2Fv%2BPLROkGtAkGe3gBaM16CoWwAJA3ibZ9heAulCojUU9xXpxFL3NhFlvnHSETh3l4vT%2B8rR0Aec6WAop8lcxbJWnMXkBVyMb918vxKrrczP9h%2FpEg61xrzoQIACS1rN1JliSG0TXFMnfCHo1aC7Bxo4XGSuORDdjL8jo24l%2Bo0hSXYqSz1R%2FXUCSGkBinHpOeIGlBP4QubrE4iGs0Q2wEG%2BrnW2mq7OCrOzGG4RARR9ub96BwS6M7VxjUz2RJjjBYdYpyFOhZYF%2By0%2F4PPpIJ0yhVCJlMC6ipFWvIQJle7cQcih3LOgmGkwTAkmUBsC15nPKieiAsSSandZXhMPnO5CDdZolnnun8rMIq4BXWX1n6%2B5b7XwKqHWBT0DDFoPQvD%2BxiBaJh%2BgnStb14luJDWHDobjWNhkkmgznfZyqr%2FD6s9bCTd2srDKpQ1rjuC0Dy6KVquoLsOXhM9nfr18WreTqdwr57E9aHqXfaRHe0rwqkGJwH7ATAPyZMN30ysIGOqUB4KvcYoP842s2gtgE%2FdPNielWXBw2l%2FjskKN0MLvEds5jJcGqcvX7%2FVkntrjF1zLS%2FESkMg%2FrMHVG5zSzebD6Hs7iD%2B02%2BwC32qELeMus0Hyl0J5pl1XN9pCr10uWrxgcyOTWqpXlI6TK15a%2Bj1VHLeteCkTCeyiR1j0pxkQTDlVsRrxqcMcLbed6FU1UFd%2B6cSo6k0cWAW3rvAoHPcQMAjtoiuLy&X-Amz-Signature=9a42f43c3da82fdefd76f7289a473a170b0ae2a463b5861f77ecd68e0cfea320&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

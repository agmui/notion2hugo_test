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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VEGDGON%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T091204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBvN7i8yENBTqozRwonQQnNKxCSYlhOPn4GCMs1Fgx9sAiEAryRYxwWFSpywe8WiGcu300QlTICbU7wUy4x8U77J37YqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHBTPRodqlPkVi5JyrcA%2BBUTcptwcTWgmBuEhLEhlCscOezsBBUc%2B45sReYkb9SmwYow7E6Yfe2ZCzXD5sHgPdAChOlE3j80D4hNJYqK61IWKV2F1XNji7e3I5e8UdTg8X6BfUqCHF9gD2B2W6Rg%2BbBWCkJbE3kLhgROmtgA645XEpS2M%2FnT%2BSTMDuwIJL7ta7aeCiOdLEyOeF3oH1QPfl1jtxgr9Rxhru%2BMS6Ui5dnd9BwUvOrhgWDDbhPX6nYYm6tgbsFwj8Bfl7Q3dRPCfCYRNaC8cva7pL6d9hygu7wahiYOFSiJR%2BTmzCngtpG2iO3lLo0SB0n8wmw%2FRWVLF9ce7gTyrCZJBhWl4G%2FDS5EwJyBtcOjFEmNtVy1dNJZrA3JOD1LPfT1AKCYhOEJenzBGKcFJaQ8JfoDC9ohfdcm9XNMU0zDu5cNNBrRqeSLC%2FaBSPe3b9kgpDhuUa5t1YxBXVcivz96FvCTpGheg4SaFIP%2FejpMCoUefKFCBIfYDkVcs%2F2XGr3ZL6tH4MciHo2KgoDH23iaatlQE2HhTkcVVOONHg0Q%2FeWzb%2Bu44qTVuoC1VfljOuUQFshM5ZDKoatiUVvp54U%2Bsp%2F%2B%2FDHfw7YZbXr1tPsZQpa43qbG8sqZkTxYfNldx1ZWTj1zMJGHjsMGOqUBS3KEOf7BVHTclcYLVfVxEbpVEVrivTsktvUB1SFt01BBMz9%2BJF4hAhmfNrNMjRM1nU7FZ6F11M08Cwwm%2FJ6%2BUz1KO0kJzBHX6YHlTwmu%2FznDuCrrSUyabFhyScGXglKlagGwdFpIKcqnh4EMpLfISfOs4qfZkt%2BxJUnKdWtJVFLWD6hioU5U5q2tq8WkE%2FlGg8is1MkEbra99LJ8wZ8K6GuANuqW&X-Amz-Signature=8ad2f8e1659d47368e13ad802aa45045d2066b5d5ac8446b2b9a3235a3bd6a5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VEGDGON%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T091204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBvN7i8yENBTqozRwonQQnNKxCSYlhOPn4GCMs1Fgx9sAiEAryRYxwWFSpywe8WiGcu300QlTICbU7wUy4x8U77J37YqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHBTPRodqlPkVi5JyrcA%2BBUTcptwcTWgmBuEhLEhlCscOezsBBUc%2B45sReYkb9SmwYow7E6Yfe2ZCzXD5sHgPdAChOlE3j80D4hNJYqK61IWKV2F1XNji7e3I5e8UdTg8X6BfUqCHF9gD2B2W6Rg%2BbBWCkJbE3kLhgROmtgA645XEpS2M%2FnT%2BSTMDuwIJL7ta7aeCiOdLEyOeF3oH1QPfl1jtxgr9Rxhru%2BMS6Ui5dnd9BwUvOrhgWDDbhPX6nYYm6tgbsFwj8Bfl7Q3dRPCfCYRNaC8cva7pL6d9hygu7wahiYOFSiJR%2BTmzCngtpG2iO3lLo0SB0n8wmw%2FRWVLF9ce7gTyrCZJBhWl4G%2FDS5EwJyBtcOjFEmNtVy1dNJZrA3JOD1LPfT1AKCYhOEJenzBGKcFJaQ8JfoDC9ohfdcm9XNMU0zDu5cNNBrRqeSLC%2FaBSPe3b9kgpDhuUa5t1YxBXVcivz96FvCTpGheg4SaFIP%2FejpMCoUefKFCBIfYDkVcs%2F2XGr3ZL6tH4MciHo2KgoDH23iaatlQE2HhTkcVVOONHg0Q%2FeWzb%2Bu44qTVuoC1VfljOuUQFshM5ZDKoatiUVvp54U%2Bsp%2F%2B%2FDHfw7YZbXr1tPsZQpa43qbG8sqZkTxYfNldx1ZWTj1zMJGHjsMGOqUBS3KEOf7BVHTclcYLVfVxEbpVEVrivTsktvUB1SFt01BBMz9%2BJF4hAhmfNrNMjRM1nU7FZ6F11M08Cwwm%2FJ6%2BUz1KO0kJzBHX6YHlTwmu%2FznDuCrrSUyabFhyScGXglKlagGwdFpIKcqnh4EMpLfISfOs4qfZkt%2BxJUnKdWtJVFLWD6hioU5U5q2tq8WkE%2FlGg8is1MkEbra99LJ8wZ8K6GuANuqW&X-Amz-Signature=3fabb800f6d82a227a863b302baad525410b82fb53d243fefd6fab11071593c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ASG4BLG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T081420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBVDX4CjBh%2B0GhOYMeDjvR0hF4it5Jmsf9BBukJw5AmQAiEAyFT2z9JJKqeLGTinn7%2F%2BTQbrmxTtrjR3qJkn9ROFrGQqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENBx5fznhJ%2FvM3ngCrcA0lWxDlNiPmXVsU%2F%2Fpl1GZ7Vhyr7bOCOx6614FRHbp8iZ0QE2cmrb7pp1%2BVQndqbkAw94vP0pQszq6lzYraxOELaGw%2BxX%2BVqBZl1c2luuYN8oJ7OeVcB7VWxXqGmW%2B65yI2j8dGEWwrgN7Yffp%2F%2B6B5fDZoiY99pbweKXvl0Zm1raao%2FjzPtr5l6x72VCcBCnceFoFB44qhP9eMaDqD77vLDj0dds90DFBPKsK9%2FyKq210PlLMRn5K7KpdP2qh7FAD6m8OTRI9zVaZ7tJZNw47nSnbXXgpNVjW2JGkAzzvQGE4N7Q1%2FA26RlSif0fuavmdtyg5%2Fg%2Fv5Nlno4kjmxWa33Dn17%2B3%2BBkW7dndlfy0F%2BZ7S4vPuVnvpEAr%2Fjvkjc7GTzGkGMIKlZUJRvAm%2F6I8UymToUiYWnFUfQ501VPcAi6mPIlX%2FmEQhBdC85wQSwpxW8BhNyG9fZ5%2BnK4XLeHBZM%2B6k1X06kflsm1gL%2FSUjcC9de4BZXwla1rCMEG%2FPad1E1poCL8E8DgRfIp3ST0SmVlcarbTB%2BGc3Bts4VPbqkocuY69qzQ5moHCaBRZsxU9QmQhR4O0DfUt5hMJ9hQKi9j5Vkywwwv20btxrMJFPZtPaN0KN%2BsRuRKpMQMNiarMQGOqUBZgULHkLLquIv9M4hD%2BYaTW668bKSF1jnfwg3P%2FzEnA%2B7fPeILML3ls3F%2Bi%2BxhfNxVYgl1Qi0GgM%2B68OgUExHpK9JScdKKaI1vfVz%2BcLtuomyuajzsOwaRxSIiDqD7dgnr4zomguQU8du8hoGfHjjsW4viagdRKFHsjrIyLTaQ1TlPspQPRCLDoSxWiH9ze8UvrgRaHxiGrTa75v%2B9mTvDjABGsJd&X-Amz-Signature=0488315bb9ee9c4e4662ea773d521ef682a9a4ae4f36ca7461e958d133c54278&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ASG4BLG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T081420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBVDX4CjBh%2B0GhOYMeDjvR0hF4it5Jmsf9BBukJw5AmQAiEAyFT2z9JJKqeLGTinn7%2F%2BTQbrmxTtrjR3qJkn9ROFrGQqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENBx5fznhJ%2FvM3ngCrcA0lWxDlNiPmXVsU%2F%2Fpl1GZ7Vhyr7bOCOx6614FRHbp8iZ0QE2cmrb7pp1%2BVQndqbkAw94vP0pQszq6lzYraxOELaGw%2BxX%2BVqBZl1c2luuYN8oJ7OeVcB7VWxXqGmW%2B65yI2j8dGEWwrgN7Yffp%2F%2B6B5fDZoiY99pbweKXvl0Zm1raao%2FjzPtr5l6x72VCcBCnceFoFB44qhP9eMaDqD77vLDj0dds90DFBPKsK9%2FyKq210PlLMRn5K7KpdP2qh7FAD6m8OTRI9zVaZ7tJZNw47nSnbXXgpNVjW2JGkAzzvQGE4N7Q1%2FA26RlSif0fuavmdtyg5%2Fg%2Fv5Nlno4kjmxWa33Dn17%2B3%2BBkW7dndlfy0F%2BZ7S4vPuVnvpEAr%2Fjvkjc7GTzGkGMIKlZUJRvAm%2F6I8UymToUiYWnFUfQ501VPcAi6mPIlX%2FmEQhBdC85wQSwpxW8BhNyG9fZ5%2BnK4XLeHBZM%2B6k1X06kflsm1gL%2FSUjcC9de4BZXwla1rCMEG%2FPad1E1poCL8E8DgRfIp3ST0SmVlcarbTB%2BGc3Bts4VPbqkocuY69qzQ5moHCaBRZsxU9QmQhR4O0DfUt5hMJ9hQKi9j5Vkywwwv20btxrMJFPZtPaN0KN%2BsRuRKpMQMNiarMQGOqUBZgULHkLLquIv9M4hD%2BYaTW668bKSF1jnfwg3P%2FzEnA%2B7fPeILML3ls3F%2Bi%2BxhfNxVYgl1Qi0GgM%2B68OgUExHpK9JScdKKaI1vfVz%2BcLtuomyuajzsOwaRxSIiDqD7dgnr4zomguQU8du8hoGfHjjsW4viagdRKFHsjrIyLTaQ1TlPspQPRCLDoSxWiH9ze8UvrgRaHxiGrTa75v%2B9mTvDjABGsJd&X-Amz-Signature=bdc563298b86c34d764c0d034f6c754f9983f4bc4880de8add98a94a176e144e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

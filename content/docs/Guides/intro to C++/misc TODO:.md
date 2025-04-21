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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J3MAY7P%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIBFNKUSDt8o5a88oY2YQKx1zJ6qDSqH1oTkShWz2%2BSFRAiBg1c0hyoHrwUuF5fWFOhTo1%2F%2F5YYfC4w6W49vsX75lSyqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYubvjNqJ58Zri8hGKtwD6tjh4pu61IXSFVsg3KZJmq6FXpLf7MdppRxlYCuQhhhphJJo5egNNCXniNiJTkftbI1s1r8AnfDNtkvA0aivyNQFFGhD0SZv9C2hYgB0lD%2FIpICVm5%2FUDVBgj3l%2BQ5nKTi5IWpLQUJlSCYany5GgH6f0ka%2F%2Fb7K9%2FrNuI5FfeD7Swn4ajlOPfL9bfjjk3BYx3ZK75d7d%2F5W2%2BcqnN438FtqjW%2BWYV55v3QO709QWaR2%2FuAocks7lRIJ7t1swZDtFWGIY1Euc6cU10%2BCjoq9cZ5i9pBdkd8bJMN35U19TG8pdKKDaqGFVnoZ48D8rX2hct5msvz3wuToBp9E7x%2BFQ1hp1bULq47FGgAD0ohkGe%2FO3jax0%2BTYJURRAL1PZeHWbwvzVcbvgbzhs52aGlHAIeRKAAsJFskmtWUKeNxl%2B4CJ5jNy2yC0w%2FqEML%2BngdYGXLX61rss5suZBv9Qx6ACOnZQUGtQueSU0RAM5M1udG1q8L10GPIZRKsGQIPbZbLBg%2BeWWwXffDNiroZx3nTnlIkb%2FnKRSG6E6%2Bpxu8nJLZTzn2vTrep0o61jzHt4oyNLqvTa%2BiZv50agYiwFRKV26a5ipzVmql9R9My6Hvwi7CeI4gJElDbSDrctQS4gwsNOawAY6pgGC4JAZTasKes2esL0W22O4wKwpfuGaMV5yzh0KXJ2Whggdr0U%2BkcT4Aaer3GtkRFgVqIE0JkQYNEhVSOmmFFp1YJvuqIw3%2Bs5tnSYsIekh9CJGPe%2FdGz84yMforS%2FndQWoy8aL4JxS9uPlxsx%2FAt3Y9gvv9pbaZwUdnOSXpt3slE%2FMTLBD1w9IO2tyuRCqjhX0BPZENy%2F%2BQnQ7nd6yuZNm1iO32elb&X-Amz-Signature=58772b3b38f573f6880f59410bcc1af88e4961364c065c1070647451fe353cae&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J3MAY7P%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIBFNKUSDt8o5a88oY2YQKx1zJ6qDSqH1oTkShWz2%2BSFRAiBg1c0hyoHrwUuF5fWFOhTo1%2F%2F5YYfC4w6W49vsX75lSyqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYubvjNqJ58Zri8hGKtwD6tjh4pu61IXSFVsg3KZJmq6FXpLf7MdppRxlYCuQhhhphJJo5egNNCXniNiJTkftbI1s1r8AnfDNtkvA0aivyNQFFGhD0SZv9C2hYgB0lD%2FIpICVm5%2FUDVBgj3l%2BQ5nKTi5IWpLQUJlSCYany5GgH6f0ka%2F%2Fb7K9%2FrNuI5FfeD7Swn4ajlOPfL9bfjjk3BYx3ZK75d7d%2F5W2%2BcqnN438FtqjW%2BWYV55v3QO709QWaR2%2FuAocks7lRIJ7t1swZDtFWGIY1Euc6cU10%2BCjoq9cZ5i9pBdkd8bJMN35U19TG8pdKKDaqGFVnoZ48D8rX2hct5msvz3wuToBp9E7x%2BFQ1hp1bULq47FGgAD0ohkGe%2FO3jax0%2BTYJURRAL1PZeHWbwvzVcbvgbzhs52aGlHAIeRKAAsJFskmtWUKeNxl%2B4CJ5jNy2yC0w%2FqEML%2BngdYGXLX61rss5suZBv9Qx6ACOnZQUGtQueSU0RAM5M1udG1q8L10GPIZRKsGQIPbZbLBg%2BeWWwXffDNiroZx3nTnlIkb%2FnKRSG6E6%2Bpxu8nJLZTzn2vTrep0o61jzHt4oyNLqvTa%2BiZv50agYiwFRKV26a5ipzVmql9R9My6Hvwi7CeI4gJElDbSDrctQS4gwsNOawAY6pgGC4JAZTasKes2esL0W22O4wKwpfuGaMV5yzh0KXJ2Whggdr0U%2BkcT4Aaer3GtkRFgVqIE0JkQYNEhVSOmmFFp1YJvuqIw3%2Bs5tnSYsIekh9CJGPe%2FdGz84yMforS%2FndQWoy8aL4JxS9uPlxsx%2FAt3Y9gvv9pbaZwUdnOSXpt3slE%2FMTLBD1w9IO2tyuRCqjhX0BPZENy%2F%2BQnQ7nd6yuZNm1iO32elb&X-Amz-Signature=984c15a3b6e30b91d5395487d5d1bfac020989cbbf7209caa4d3659d4b97877b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

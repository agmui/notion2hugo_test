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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUWPTUII%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T160953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKgeT199kf2AF6jrDKmCB55fp%2Fyg%2BaXi0VeHzoyogJcwIgbFk9RQb%2B2KzZOFIQNjybe%2BhfX6XEoRy8r04%2FM6EBH9kq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDQfpZZ9s5gkzxH77CrcA9tXd%2B1dPALARDkM%2FjQLxMLjkwy6Tv%2BDLDYRizcsXi%2FAwr3jBnRIgqt%2FOIDVyMsviQQUiEsDRI%2BFPxLtbKnLC8eBq2Qyy7NFNINs%2FWnwpN1%2Bg7bcnUUPI3yCQhMJuToqqsDcjFWHX%2BlNTxPO4qhQ%2BR3WTlpdj%2FNrNMZDjid9xEzFmZXWqtLvj8mnDpaHMwa0jNv6oXKBk%2FVfpOM79T%2FX9T18SJoPI7JRi%2FcTz%2Bcv7hMny9J1HzJM3awsoJNdkdKGl91ZOXk%2Bfi0XhMGtS2qzJxMhKreNu4AKwlT6aE4TN7G5%2FmcrOfyqrhDwTTcbW5NCKgrNXcs3bzxiwTp%2FkNEXVZXVEoNAvgYymLi5jt1ljQcKR4eMO%2BTvIqFTtpd9L45IibDRhldvfeSxfYudnyc9sXRQJx4FTg9NQJh%2BoOHT9RvivtqUsoSbwTxzGqqGwrR6mFw5qAMlBli%2Bj92Pz1GqXyFSmVivFyh5g3kbNQdlYxryAe4D1Uzd4RR5gHtgz8SCrb4%2FPF7xhgpsLQRcdaHAAf7mlQ7llKa%2FjdQBP87oFi%2FF9617YDVPPXaavBsdCO0AFfDmMD4GU%2FzCDFZJFJq%2Fvnj756JC8CuK%2BPnr7gPNbiGFWViEUs8BNxAMSMNvMNSJuMQGOqUB7tGlYEIsheCcdRie1HBnqxAeDuWuZ79lnXYev2lni5MQQo8mz%2FJtAj%2BE5xgTvfKG4AeOTkQD%2FgWz%2BRUIG5psk%2Bu0D%2FkVH3XIgKfVAkS0hXx2y1uMOqrTowSpir5Sls2IpWcVLeM5ZKMblWREB5QPu4mCO2l%2BBGZO%2Fry0tazYMHQ7hND07meM0QvigZE7vp3mm%2BuGY0rIjoMqIC3gvtfmnznCnmBf&X-Amz-Signature=d9891c70f622fc645cff16ac29c4adfc8947980ebc14d7779d2b53fe14c81288&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUWPTUII%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T160953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKgeT199kf2AF6jrDKmCB55fp%2Fyg%2BaXi0VeHzoyogJcwIgbFk9RQb%2B2KzZOFIQNjybe%2BhfX6XEoRy8r04%2FM6EBH9kq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDQfpZZ9s5gkzxH77CrcA9tXd%2B1dPALARDkM%2FjQLxMLjkwy6Tv%2BDLDYRizcsXi%2FAwr3jBnRIgqt%2FOIDVyMsviQQUiEsDRI%2BFPxLtbKnLC8eBq2Qyy7NFNINs%2FWnwpN1%2Bg7bcnUUPI3yCQhMJuToqqsDcjFWHX%2BlNTxPO4qhQ%2BR3WTlpdj%2FNrNMZDjid9xEzFmZXWqtLvj8mnDpaHMwa0jNv6oXKBk%2FVfpOM79T%2FX9T18SJoPI7JRi%2FcTz%2Bcv7hMny9J1HzJM3awsoJNdkdKGl91ZOXk%2Bfi0XhMGtS2qzJxMhKreNu4AKwlT6aE4TN7G5%2FmcrOfyqrhDwTTcbW5NCKgrNXcs3bzxiwTp%2FkNEXVZXVEoNAvgYymLi5jt1ljQcKR4eMO%2BTvIqFTtpd9L45IibDRhldvfeSxfYudnyc9sXRQJx4FTg9NQJh%2BoOHT9RvivtqUsoSbwTxzGqqGwrR6mFw5qAMlBli%2Bj92Pz1GqXyFSmVivFyh5g3kbNQdlYxryAe4D1Uzd4RR5gHtgz8SCrb4%2FPF7xhgpsLQRcdaHAAf7mlQ7llKa%2FjdQBP87oFi%2FF9617YDVPPXaavBsdCO0AFfDmMD4GU%2FzCDFZJFJq%2Fvnj756JC8CuK%2BPnr7gPNbiGFWViEUs8BNxAMSMNvMNSJuMQGOqUB7tGlYEIsheCcdRie1HBnqxAeDuWuZ79lnXYev2lni5MQQo8mz%2FJtAj%2BE5xgTvfKG4AeOTkQD%2FgWz%2BRUIG5psk%2Bu0D%2FkVH3XIgKfVAkS0hXx2y1uMOqrTowSpir5Sls2IpWcVLeM5ZKMblWREB5QPu4mCO2l%2BBGZO%2Fry0tazYMHQ7hND07meM0QvigZE7vp3mm%2BuGY0rIjoMqIC3gvtfmnznCnmBf&X-Amz-Signature=bfef8c87ddac95114d3ca2f904d126e5aac0ff661558257b9c7f2c0195a2157f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

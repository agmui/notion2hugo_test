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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OYI54BU%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIHoA9igmBrg2cl%2FjQRQkkHPI0b2txPuJ0vwI4mkxGAE4AiEA%2BOPZua72D31xu2NeTEqhFz2jqITXkoguAsDHDCTIdjgqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNihnH2HoypXYiIAkCrcAxW0MKBJKJbyzGd2dqMkxBv41rtU3f9KrivR9Sc8K7r5wF8gtxyt4%2FnHtCa79Lg9PbXgWOMQ94m%2FN9qh5VOgWe%2Bwv8z4442%2Fuiy8zLbX8GzeXvCbsq%2FKcjstsa2oeipJXWMNAcATbRzb1bvl8WqAMEO7yigRxCJgtzel1ECIDgQoJWG%2B37WQIrlSxpf1AouXp0pDfn%2FjuUzCRyl%2Fizcd%2BXkWrhZpK9xr7SFQPPBbQoe3%2BjFVpmKO%2BA2jmo5epn53ZZuhys4B%2FAEYaTOG%2FAADYwGnYx5y%2BebZZS8xgFHvohp707iMJlNzmymsTOQlMR3QuQBTetW09ieEG44OynT3OkGoBFb3NHR3MnbqiIQ%2BOqzM31iehidvvI0OfXPwf5UszabK%2Fk03WlrhDUc1zztCX1G8s%2FmkH1%2Bge9OuWzTbawtg3D9kE%2BnW73c6veZXA1NhiFjzrgFEXCHgNRSn9sEYz%2FRYj0idOr6ACRmjdkj46i%2B7e3MJ60EInAWKVCGQvRTmc%2BuIMh6Umi9DI%2Fyq8AJ3OHlgOduaHl4tjQBTniKvGEc7rrj8M52dU%2FhzDooCf5ceaZeK6peO242rH87pdpipkVBRJSgv1IkKQkydZWfq7K63oCVkY6aFv1NWHP9FMKOQrMIGOqUBEhqNaMSpZ%2FHKkif%2BFCq%2Blc5HYvTty5LvjHwA82DUin6yS377oJ8aMHSO9I4KXGG4pU9Ku0ue6vojyW1go7f8GUFRNGqIAPxaCKvp28D6AnEwIlbiJGf2Vd64%2BMPiPBCFl%2FlZKKo6nw0wczSB4HmmVVVviZSUavKzVH7hN6nOhHHOEVSXk8U6oQRBqFLvxZzEFIjbj%2FQUiUBvacaDknQaWX2yDriF&X-Amz-Signature=3a3241fddb65e49a986d44c201848c9548842823d35bc16b1a7d47a725cf0fa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OYI54BU%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIHoA9igmBrg2cl%2FjQRQkkHPI0b2txPuJ0vwI4mkxGAE4AiEA%2BOPZua72D31xu2NeTEqhFz2jqITXkoguAsDHDCTIdjgqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNihnH2HoypXYiIAkCrcAxW0MKBJKJbyzGd2dqMkxBv41rtU3f9KrivR9Sc8K7r5wF8gtxyt4%2FnHtCa79Lg9PbXgWOMQ94m%2FN9qh5VOgWe%2Bwv8z4442%2Fuiy8zLbX8GzeXvCbsq%2FKcjstsa2oeipJXWMNAcATbRzb1bvl8WqAMEO7yigRxCJgtzel1ECIDgQoJWG%2B37WQIrlSxpf1AouXp0pDfn%2FjuUzCRyl%2Fizcd%2BXkWrhZpK9xr7SFQPPBbQoe3%2BjFVpmKO%2BA2jmo5epn53ZZuhys4B%2FAEYaTOG%2FAADYwGnYx5y%2BebZZS8xgFHvohp707iMJlNzmymsTOQlMR3QuQBTetW09ieEG44OynT3OkGoBFb3NHR3MnbqiIQ%2BOqzM31iehidvvI0OfXPwf5UszabK%2Fk03WlrhDUc1zztCX1G8s%2FmkH1%2Bge9OuWzTbawtg3D9kE%2BnW73c6veZXA1NhiFjzrgFEXCHgNRSn9sEYz%2FRYj0idOr6ACRmjdkj46i%2B7e3MJ60EInAWKVCGQvRTmc%2BuIMh6Umi9DI%2Fyq8AJ3OHlgOduaHl4tjQBTniKvGEc7rrj8M52dU%2FhzDooCf5ceaZeK6peO242rH87pdpipkVBRJSgv1IkKQkydZWfq7K63oCVkY6aFv1NWHP9FMKOQrMIGOqUBEhqNaMSpZ%2FHKkif%2BFCq%2Blc5HYvTty5LvjHwA82DUin6yS377oJ8aMHSO9I4KXGG4pU9Ku0ue6vojyW1go7f8GUFRNGqIAPxaCKvp28D6AnEwIlbiJGf2Vd64%2BMPiPBCFl%2FlZKKo6nw0wczSB4HmmVVVviZSUavKzVH7hN6nOhHHOEVSXk8U6oQRBqFLvxZzEFIjbj%2FQUiUBvacaDknQaWX2yDriF&X-Amz-Signature=40173e269bd2bdde02b27e068c68ee1d2bed1f9c8666cdb6bbfe566056370189&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JKJ5K7Q%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T081434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIH%2BI5Hm%2BdIQJLR0IypA%2F45B3wHPsK1kLQVdrid385C4BAiEApOXZEI2ByMEFxemLcy8vCW1KnNiWH%2BZ40p8bl%2BT7N2gq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDNidQmJeq%2BsPolBYmCrcA3xpAnLNKLMRfmwap7wd%2B9PY0r3CJWf4UBadAQ3xIK9269G5u0YoxBpSUqX4%2BNUsRIwbNKGnp6xtrKcXqndJVctHQkEv49CK5JWQ472pUWrYZ9Jby4i6CEn00Od2W648DLKe9JzLQkeBZ4tU%2FPMVsa58rSu5C8qB0ruv8BDnZBcwWwLd0iuo1cRParhXTskYF0x61Asj4PiKFzNHJpP%2FeffPzk2U7xhOVGqoyrn%2FfSQch6sMCsWxoVheT%2Ba45EE4IgxsHhTxq1Vjpc%2BP%2FGuQKFzPv00WvEsMlETwySM6IyuIeDD9Ze8snWO%2BJv7JqxvjUsSrspqaQA4DGlARwknh86MdFMvttUhDhZbNAPelBkWrm4m%2B6qB7N5G%2B2iv0WWrrAcDPNYF27NH53SJTHImcyBr7PWqomyEcd%2FOmPYu5rJY32FKnes07%2B8LD7yAgmey3hzjZRaJxBRlo2aAL%2Bg5tey7%2FyP5cIxyfLgWrS3LVYb%2F9MjSTLifcQpKR0qJRBKP1xxOqOb%2BFlIbM0be6EL4Kh%2BhJstoApIUmv92XTboCE5M%2Fn0i6a%2FEF7WaLX0mh5Exz0u9xbm9xJmEpDY%2BeuAO1Yu0QN3NcKSaDNSAZCYp%2BGdXUSZZAJ8kvTraVJ4OAMK3c0sMGOqUBrQEwddbtWxACKnMJFIPJnIclw1n%2FAkKZNfwj6JWw6aZwzTCXuQyOzEJCPBB4VJXwqQySpuy2Lb%2FyxRcIUPwWxbsgP6him1sDveCVgDsigle7urgXpiK4jE20r06Z1sCu%2BOCg1QZ5uoCbQe4AHVmb318ztd%2BRTidUpspTUCT0%2B2VVK62BvDkehrte81JOcA2Cf6zvVbqc33EmZEsiKziHfdxq8%2FlP&X-Amz-Signature=7b25f9da47936405d08543bf9cdd09d3380b08859293723adf27c7ca103b5a84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JKJ5K7Q%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T081434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIH%2BI5Hm%2BdIQJLR0IypA%2F45B3wHPsK1kLQVdrid385C4BAiEApOXZEI2ByMEFxemLcy8vCW1KnNiWH%2BZ40p8bl%2BT7N2gq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDNidQmJeq%2BsPolBYmCrcA3xpAnLNKLMRfmwap7wd%2B9PY0r3CJWf4UBadAQ3xIK9269G5u0YoxBpSUqX4%2BNUsRIwbNKGnp6xtrKcXqndJVctHQkEv49CK5JWQ472pUWrYZ9Jby4i6CEn00Od2W648DLKe9JzLQkeBZ4tU%2FPMVsa58rSu5C8qB0ruv8BDnZBcwWwLd0iuo1cRParhXTskYF0x61Asj4PiKFzNHJpP%2FeffPzk2U7xhOVGqoyrn%2FfSQch6sMCsWxoVheT%2Ba45EE4IgxsHhTxq1Vjpc%2BP%2FGuQKFzPv00WvEsMlETwySM6IyuIeDD9Ze8snWO%2BJv7JqxvjUsSrspqaQA4DGlARwknh86MdFMvttUhDhZbNAPelBkWrm4m%2B6qB7N5G%2B2iv0WWrrAcDPNYF27NH53SJTHImcyBr7PWqomyEcd%2FOmPYu5rJY32FKnes07%2B8LD7yAgmey3hzjZRaJxBRlo2aAL%2Bg5tey7%2FyP5cIxyfLgWrS3LVYb%2F9MjSTLifcQpKR0qJRBKP1xxOqOb%2BFlIbM0be6EL4Kh%2BhJstoApIUmv92XTboCE5M%2Fn0i6a%2FEF7WaLX0mh5Exz0u9xbm9xJmEpDY%2BeuAO1Yu0QN3NcKSaDNSAZCYp%2BGdXUSZZAJ8kvTraVJ4OAMK3c0sMGOqUBrQEwddbtWxACKnMJFIPJnIclw1n%2FAkKZNfwj6JWw6aZwzTCXuQyOzEJCPBB4VJXwqQySpuy2Lb%2FyxRcIUPwWxbsgP6him1sDveCVgDsigle7urgXpiK4jE20r06Z1sCu%2BOCg1QZ5uoCbQe4AHVmb318ztd%2BRTidUpspTUCT0%2B2VVK62BvDkehrte81JOcA2Cf6zvVbqc33EmZEsiKziHfdxq8%2FlP&X-Amz-Signature=c4c40bfaa176303561a6d0969338ecfe6148b50938456b3a076fe1c1cde52bbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

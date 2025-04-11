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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT6VPAGX%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T032616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIDEvQodAMJVTnwyXSyxb5HfFNpk1d%2FI8sZuuC5z7PoQ2AiBpC0%2BgOdSeWFoX2IQi0gt%2BZtgfpnwrLej3TxfQx%2FjcXCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM405aqptZeAHpq%2BWnKtwDinjRf3u4jKvVOjCvnke3Y%2BJ30l4DIQ6S7RuGHnO2Vyz7hflxyxxFoGGg3TAuUD0MOnUR9VUsLExC3AZ7fHpptqW2sOWbK5M9si%2FgFzYW%2B%2FxYNO38nxNzI5yFy05TLs74GDTa%2FLCvC5PNzqPY%2FZfOB%2BvxixvN7VfknWqIJFReDNR%2BfJsb3Dn3JbTEdSRslb7ggaEfXIobXxO23bePFgFr9di3DBMic5qr6k%2BBIH7B1BmagnLDfoxuISC9bKNyDQq3hy21W%2BySDrByYbcWO2%2BiUt%2Fx0U756Px7j09fvTENq6U0ZsXMeU1hcmIeXAYVEqR8JeKS9zEQBlxRtE5splf803Sw0lQLT6cdEgJAzRb3y2vs%2Fnuk5Pvab11UzKbbiS%2FO%2FbHGoOtlRQNKRcn7nPv0RRA2582D8knhaXG24%2Bnl5FR2q%2Fovp2PQ%2BShzvQWWXwTtQUfAW4YdKo8bWhqlGuyNdsaqJbevgbLcKBQnCjN4MkBibjKCrS%2FBTo7qHGlvnLL%2Fx1yd0u3uBmygFwmfyrYD5TvfJk7%2FdRTfMxDpMArH0%2Fg0Zj7CK12EW8HTSRQ%2Ftuu9crD4WeWdqqSuzkVUQyOXHYGRe%2FHQwpsOaV49ibuuuPuorxuJIgcuz9QwEsEw35LivwY6pgFk4Caib9tdm0TsWb4wqyNmj%2Fy7vIkJcfRkZemom4Yhu1kw9Bv4vVH6r8HCT2JaIDi9TjxL3Z5QFFfePbNm%2F6DR01x98a%2BJcHhPPtmbLSEezGWqS54Yz%2FQrWikmt2WY9AUP0K5L4Qtlo2KM%2FOEmgFwf3sn6o7Jy5SVo8R3SxKCEVdQvFfuQIAWPnwUWYST0MQj5m3awuBWfS4YImWK1vOp7sSkxe1VL&X-Amz-Signature=8ff0bdcb851c61824e8d067c828dde37eeca34222ece81b4c2e957de04f4ff5e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT6VPAGX%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T032616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIDEvQodAMJVTnwyXSyxb5HfFNpk1d%2FI8sZuuC5z7PoQ2AiBpC0%2BgOdSeWFoX2IQi0gt%2BZtgfpnwrLej3TxfQx%2FjcXCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM405aqptZeAHpq%2BWnKtwDinjRf3u4jKvVOjCvnke3Y%2BJ30l4DIQ6S7RuGHnO2Vyz7hflxyxxFoGGg3TAuUD0MOnUR9VUsLExC3AZ7fHpptqW2sOWbK5M9si%2FgFzYW%2B%2FxYNO38nxNzI5yFy05TLs74GDTa%2FLCvC5PNzqPY%2FZfOB%2BvxixvN7VfknWqIJFReDNR%2BfJsb3Dn3JbTEdSRslb7ggaEfXIobXxO23bePFgFr9di3DBMic5qr6k%2BBIH7B1BmagnLDfoxuISC9bKNyDQq3hy21W%2BySDrByYbcWO2%2BiUt%2Fx0U756Px7j09fvTENq6U0ZsXMeU1hcmIeXAYVEqR8JeKS9zEQBlxRtE5splf803Sw0lQLT6cdEgJAzRb3y2vs%2Fnuk5Pvab11UzKbbiS%2FO%2FbHGoOtlRQNKRcn7nPv0RRA2582D8knhaXG24%2Bnl5FR2q%2Fovp2PQ%2BShzvQWWXwTtQUfAW4YdKo8bWhqlGuyNdsaqJbevgbLcKBQnCjN4MkBibjKCrS%2FBTo7qHGlvnLL%2Fx1yd0u3uBmygFwmfyrYD5TvfJk7%2FdRTfMxDpMArH0%2Fg0Zj7CK12EW8HTSRQ%2Ftuu9crD4WeWdqqSuzkVUQyOXHYGRe%2FHQwpsOaV49ibuuuPuorxuJIgcuz9QwEsEw35LivwY6pgFk4Caib9tdm0TsWb4wqyNmj%2Fy7vIkJcfRkZemom4Yhu1kw9Bv4vVH6r8HCT2JaIDi9TjxL3Z5QFFfePbNm%2F6DR01x98a%2BJcHhPPtmbLSEezGWqS54Yz%2FQrWikmt2WY9AUP0K5L4Qtlo2KM%2FOEmgFwf3sn6o7Jy5SVo8R3SxKCEVdQvFfuQIAWPnwUWYST0MQj5m3awuBWfS4YImWK1vOp7sSkxe1VL&X-Amz-Signature=a3f75348be26638d5339d6e8597b372b56da783f677d3434fa77061a77613b94&X-Amz-SignedHeaders=host&x-id=GetObject)

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

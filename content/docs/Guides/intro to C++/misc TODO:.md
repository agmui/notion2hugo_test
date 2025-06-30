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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BT56WLR%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T091158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4B4I%2FL9c%2FNk8AOIW6tn%2BXajlzho3GhpWUamroawJr3AIgJaYtNnaeB7yuvVLEHpjBhJ7h%2F0wLB0KJyUVDPf3qbNwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNz5VkRRT7Y9%2FYWKrCrcA%2F6H%2FOK2Z9zbuUU6zFMMjUn89cN80%2BcfgSzAfXtS9EgpLDTPK8xU12awEhP8sW%2BlvyVSEfelBlPTMI4VZdlFafdWguJlrGaDnVc%2BO0%2Fc2YpASFxMP1JNda9WrD%2FiVF0DQcrH0xg2Ps7G%2FVKsCugndz%2B59P0OqML0OHK2J2CfNiVefqYoKnR1mKSQ6KrU39vS2ihA0dSH9BrtJocc7r8OQuc9lX%2BQFdYrk6bE5XFSWFSi4Q9%2FgSkwOViSyYRl1JZxb%2FWzeKr9s7T1u2sML8IYAUzeJhyXxtwmQ53FnMwqP%2B5nrbu2NAYQ%2BiytBKhw9fEo1Bq3H76Z3cCRLNuF4RSB7VH0hKegh%2BhAkvjUsy7aDS1D3G62KHT1lwEruCxUyJh4ud4nvH2DU8Lb5tvDtf8L6BrtiQbE%2FGsgXQQFUsC%2BYawpJm%2FJb7kgTz3NWcXFVsMko2OVa2z%2BcGQRuQGfEYkaqf1Lm22hdZ5Sepia61QeCYwIinbk8jYMMNhE9WqjTnsVCp7sz3mgAQ4Nt2rCbUSzmgllrANG2gRqhoqrCahT2jqffKHnQgCjZStPIkQszOtGTUP7d1b9RfB7P0fvqOxlSy9Z%2BNyAObAVLpnEVP9f%2BLQhH5wL9gs3VIx3aYavMJKjicMGOqUBzMMfVnTJB7gNctCBKRvoyN6BTC1Y%2FwQGbwRQ%2FGSZThpwpxRC70Zk84R%2B1AW1cCK0QKiuQ8bkZYRPO5Iq2RcX%2F1ys0tEhFPdBH%2B2T7%2FB6CeZ4ZWb%2BaAcQj3IyS0lxc4hlpNknZ24iPFuPFZzQ3VjPO46Ht3apH%2FuDgK%2BWfFqdlqxOIYHnUmBK8WW3JhAiOpRbEZ%2Btwr1%2FHq%2F8QAahr2RtJdDPx0Jp&X-Amz-Signature=72af9aa79af8abc1e92ab08b5d192023401a633f5cd3c6edff197916498ad01c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BT56WLR%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T091158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4B4I%2FL9c%2FNk8AOIW6tn%2BXajlzho3GhpWUamroawJr3AIgJaYtNnaeB7yuvVLEHpjBhJ7h%2F0wLB0KJyUVDPf3qbNwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNz5VkRRT7Y9%2FYWKrCrcA%2F6H%2FOK2Z9zbuUU6zFMMjUn89cN80%2BcfgSzAfXtS9EgpLDTPK8xU12awEhP8sW%2BlvyVSEfelBlPTMI4VZdlFafdWguJlrGaDnVc%2BO0%2Fc2YpASFxMP1JNda9WrD%2FiVF0DQcrH0xg2Ps7G%2FVKsCugndz%2B59P0OqML0OHK2J2CfNiVefqYoKnR1mKSQ6KrU39vS2ihA0dSH9BrtJocc7r8OQuc9lX%2BQFdYrk6bE5XFSWFSi4Q9%2FgSkwOViSyYRl1JZxb%2FWzeKr9s7T1u2sML8IYAUzeJhyXxtwmQ53FnMwqP%2B5nrbu2NAYQ%2BiytBKhw9fEo1Bq3H76Z3cCRLNuF4RSB7VH0hKegh%2BhAkvjUsy7aDS1D3G62KHT1lwEruCxUyJh4ud4nvH2DU8Lb5tvDtf8L6BrtiQbE%2FGsgXQQFUsC%2BYawpJm%2FJb7kgTz3NWcXFVsMko2OVa2z%2BcGQRuQGfEYkaqf1Lm22hdZ5Sepia61QeCYwIinbk8jYMMNhE9WqjTnsVCp7sz3mgAQ4Nt2rCbUSzmgllrANG2gRqhoqrCahT2jqffKHnQgCjZStPIkQszOtGTUP7d1b9RfB7P0fvqOxlSy9Z%2BNyAObAVLpnEVP9f%2BLQhH5wL9gs3VIx3aYavMJKjicMGOqUBzMMfVnTJB7gNctCBKRvoyN6BTC1Y%2FwQGbwRQ%2FGSZThpwpxRC70Zk84R%2B1AW1cCK0QKiuQ8bkZYRPO5Iq2RcX%2F1ys0tEhFPdBH%2B2T7%2FB6CeZ4ZWb%2BaAcQj3IyS0lxc4hlpNknZ24iPFuPFZzQ3VjPO46Ht3apH%2FuDgK%2BWfFqdlqxOIYHnUmBK8WW3JhAiOpRbEZ%2Btwr1%2FHq%2F8QAahr2RtJdDPx0Jp&X-Amz-Signature=35b3c929545753d66554f1343c8e2a5ee0e45f6385a8454c16d45d1df64cfa44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

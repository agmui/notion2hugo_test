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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE7R2KFV%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T081000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwKEKCN9YGg59RWi%2FrasQew3kI5J9JS1mqC21K5T7o5AiEA2E%2BVIWZBTHVshuSPDAuT5xbIEN2jL3OyYaZlKvofWC0q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDOtoQ92Ody2zBmqljyrcA0o3W0fglx%2BNFDv%2ByYt8EU6v%2FNJsO4E%2F5lBc%2Brujk2xtYi7WhEBZzCIFV5DIYd4FZZ2D%2FzDEoN6NBzocjAvml%2BBC9Fc%2B535dcMOvsaAZRaJue3532ydujZA0PY6gEb9aMPl%2BrtDqt8T8onbU%2BCBxFfXg%2FF%2F%2FhwFbYWqTSSnZsTg2Nr4Hyt6E2WIj8LKI%2B818aLQPcGJTn%2FpBGe0PfsayfjUVh7UgE%2Fh0Q%2FV570KhsvOuR8TwJbHXbRe2Qm7uk60qz0k3rhl%2Bg3m0lqxjG8LGju5sKeSTNb6pNHcY5UB7PzT2MB8YaJMYgP1aO1OrNtqRj14%2F2uWiSCkK85VLXUmCl0Nee2ZNyT9E8cwZlmU9tpXcUtqD8yPM0Qn4WkTl2HWaGjoGm1P1DN%2FVWYhk5gBV%2BIUL8Bv9fruYL5ozUdRtv9ExRSMUpe5lLiG%2BTwiwwiC1k8ZflUIv8yMEK3NJnh7P9BojrC3uYGzJ3sE2FZdjwV65pb1K%2FDVgDixPgF%2FzrnEDQi8mozmdeRHLpbYgA9wfirmd%2FTyPuhnLHU9dOxdx6mjUstFxLbuCm%2FfUf2%2FY15fPeRZ0Lp7v6%2FVhoWtdNIKr5chcTu78UNaHdBSk4C13LlJzxnQqcokeeJQqaOXPMKqEssAGOqUBoU5%2FC6obf34DY7wf4svHq9x%2B3V4Snf3%2Bt8oe4SO588J%2FPT3NvUwRrEhoQqHx5yvy2lT0Kdmu6LEM%2F1j%2BJBANxMB78OsR0KYDjPaDgaGt5ghBEAhruNFPag3GkEYntix3Y3G7SRFJJ0x3%2ByFuVTVAp7VwLX6hDwAZvZeR4tHU98852dAfWj9GQi8EZNKXRsJVg2F6CAM92t1xY0gue83p0YNVmaax&X-Amz-Signature=0f87db176c5ea3d30cf444515588d8b98eafb3fb915a18edb3d568814f4e7318&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE7R2KFV%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T081000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwKEKCN9YGg59RWi%2FrasQew3kI5J9JS1mqC21K5T7o5AiEA2E%2BVIWZBTHVshuSPDAuT5xbIEN2jL3OyYaZlKvofWC0q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDOtoQ92Ody2zBmqljyrcA0o3W0fglx%2BNFDv%2ByYt8EU6v%2FNJsO4E%2F5lBc%2Brujk2xtYi7WhEBZzCIFV5DIYd4FZZ2D%2FzDEoN6NBzocjAvml%2BBC9Fc%2B535dcMOvsaAZRaJue3532ydujZA0PY6gEb9aMPl%2BrtDqt8T8onbU%2BCBxFfXg%2FF%2F%2FhwFbYWqTSSnZsTg2Nr4Hyt6E2WIj8LKI%2B818aLQPcGJTn%2FpBGe0PfsayfjUVh7UgE%2Fh0Q%2FV570KhsvOuR8TwJbHXbRe2Qm7uk60qz0k3rhl%2Bg3m0lqxjG8LGju5sKeSTNb6pNHcY5UB7PzT2MB8YaJMYgP1aO1OrNtqRj14%2F2uWiSCkK85VLXUmCl0Nee2ZNyT9E8cwZlmU9tpXcUtqD8yPM0Qn4WkTl2HWaGjoGm1P1DN%2FVWYhk5gBV%2BIUL8Bv9fruYL5ozUdRtv9ExRSMUpe5lLiG%2BTwiwwiC1k8ZflUIv8yMEK3NJnh7P9BojrC3uYGzJ3sE2FZdjwV65pb1K%2FDVgDixPgF%2FzrnEDQi8mozmdeRHLpbYgA9wfirmd%2FTyPuhnLHU9dOxdx6mjUstFxLbuCm%2FfUf2%2FY15fPeRZ0Lp7v6%2FVhoWtdNIKr5chcTu78UNaHdBSk4C13LlJzxnQqcokeeJQqaOXPMKqEssAGOqUBoU5%2FC6obf34DY7wf4svHq9x%2B3V4Snf3%2Bt8oe4SO588J%2FPT3NvUwRrEhoQqHx5yvy2lT0Kdmu6LEM%2F1j%2BJBANxMB78OsR0KYDjPaDgaGt5ghBEAhruNFPag3GkEYntix3Y3G7SRFJJ0x3%2ByFuVTVAp7VwLX6hDwAZvZeR4tHU98852dAfWj9GQi8EZNKXRsJVg2F6CAM92t1xY0gue83p0YNVmaax&X-Amz-Signature=84a080cd5f476035072917afa791e0b57297024d65eb6e35a4f54a3738ddf085&X-Amz-SignedHeaders=host&x-id=GetObject)

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

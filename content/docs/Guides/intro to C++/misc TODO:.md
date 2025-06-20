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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662BFDCTS%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVp9J1w4CodtOQ7ARrMRi0ytjBTEAO1IFjh5n1KP6%2BwgIgKdeNcsgKGXI5W72sQaJ08Dchd%2FX%2FXi0wy1e6P4jpzLIqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASRC8aYfIyqUL556ircAySp1GYNeeeKyymS1lQQZNHUq8AZrqT5y0sdu3Pc1OpQBQsKsPE3tSfIS2lmSxR4S9FziKAsGB%2FAvPr8gqgALTkRCZ5d3R1r%2BvSnDbxTAdnpKmnIwVmlZzGJSF1JbQUwq8daePpehYbUfIcNvuSbE5t75JO%2FgyoCTe2dU6u%2FfdLyGqwbUzKmiDoEv7mT4G1J5UtZrHNKlvbK38tYpbkj1quD7TD0SGg21l1LpPKTAng%2B7k0WOhQklxKQTP%2BS9WLzPc4wPp0jTM0eCR3QqOMz2MH%2BkVasArf0wv%2FfU6p2RzKiv%2F2UVmx5C6%2FplYTJMrAuo3RU4jrTZGJpEgZx61u0dvdN2PHm6nNBjSbvqm1mN7LgtAESYXwo7w6ta0weNWKXsI69NYAi96VDuYDQte%2FdWuMz09MvdZRSIk8zgs6UTe5od3tcHVWiO%2FRZwcU7EM6G6BLIukF9lQ33XYs4zKkSX3Yym8HUgcyfSPVwZWLl5eeAS4Uz1Qx1AkNEp9pgP4z0%2FFJ33JMbPDhAMG3GfIFHaHza3zzrWVTFFkGQYUkriY93lqNoei728t9ZIAY%2F%2F0q50yWEYvHsKBpBQcH%2B867c5qkJM2PNf4V8%2FO4mNo%2BDS7db1TR1YauJ5lk4wKniMLfx1MIGOqUB7NjfIfuAnMwQmpOCk3IQppHGAyC%2Bu1vmxkGCUx74zU%2FcL4Km6O54%2FRVuWhE8N4aIQLThcRF9ldxEFqnrcQMFhYSsb8gyucBcxSyL3LRO8U7W1ShkzG6B3PnFj%2BNzJ4s%2FzBFJEJT%2F3kTqMPEo2%2FHSChg6vfmMLMNtM5X3LGZp2tOeB4Yfwmxv7RAWNmPFjQMci4tpzkEZcfCZsGvvVgt%2BxXgR4kVi&X-Amz-Signature=8b9d33a81657c7ba58ce3ca400a9331ab9ddb07a90be2792361bd036b3809bbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662BFDCTS%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVp9J1w4CodtOQ7ARrMRi0ytjBTEAO1IFjh5n1KP6%2BwgIgKdeNcsgKGXI5W72sQaJ08Dchd%2FX%2FXi0wy1e6P4jpzLIqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASRC8aYfIyqUL556ircAySp1GYNeeeKyymS1lQQZNHUq8AZrqT5y0sdu3Pc1OpQBQsKsPE3tSfIS2lmSxR4S9FziKAsGB%2FAvPr8gqgALTkRCZ5d3R1r%2BvSnDbxTAdnpKmnIwVmlZzGJSF1JbQUwq8daePpehYbUfIcNvuSbE5t75JO%2FgyoCTe2dU6u%2FfdLyGqwbUzKmiDoEv7mT4G1J5UtZrHNKlvbK38tYpbkj1quD7TD0SGg21l1LpPKTAng%2B7k0WOhQklxKQTP%2BS9WLzPc4wPp0jTM0eCR3QqOMz2MH%2BkVasArf0wv%2FfU6p2RzKiv%2F2UVmx5C6%2FplYTJMrAuo3RU4jrTZGJpEgZx61u0dvdN2PHm6nNBjSbvqm1mN7LgtAESYXwo7w6ta0weNWKXsI69NYAi96VDuYDQte%2FdWuMz09MvdZRSIk8zgs6UTe5od3tcHVWiO%2FRZwcU7EM6G6BLIukF9lQ33XYs4zKkSX3Yym8HUgcyfSPVwZWLl5eeAS4Uz1Qx1AkNEp9pgP4z0%2FFJ33JMbPDhAMG3GfIFHaHza3zzrWVTFFkGQYUkriY93lqNoei728t9ZIAY%2F%2F0q50yWEYvHsKBpBQcH%2B867c5qkJM2PNf4V8%2FO4mNo%2BDS7db1TR1YauJ5lk4wKniMLfx1MIGOqUB7NjfIfuAnMwQmpOCk3IQppHGAyC%2Bu1vmxkGCUx74zU%2FcL4Km6O54%2FRVuWhE8N4aIQLThcRF9ldxEFqnrcQMFhYSsb8gyucBcxSyL3LRO8U7W1ShkzG6B3PnFj%2BNzJ4s%2FzBFJEJT%2F3kTqMPEo2%2FHSChg6vfmMLMNtM5X3LGZp2tOeB4Yfwmxv7RAWNmPFjQMci4tpzkEZcfCZsGvvVgt%2BxXgR4kVi&X-Amz-Signature=b4f3ec0d9d52664a575e3c7476fea3c102567692002415ff925e983b08eb7cef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

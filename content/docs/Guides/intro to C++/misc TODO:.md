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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VANFIUM%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T061100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDHGvpvdkD7X0XoE2PMrfQ3CPvTj2GV9VzPY51anxFLTwIgWqPlpKa1EZ9h1A61MPx22214aBbGJMlSqiR4nuwDTs8qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUVNFFv3E13gxUzlCrcA%2Fzu4vugzJUzDw4vmP6NCoBzkMNzTQgO1CVAkhuMKHAR0fvtuiZixrsnRDrkx1YIDVhbH4ACnbF9qFF8qpHKXnGUGCxnAZCT%2FCV17lK6SKyabYVSL1%2BviD2dBJtKqCdRpuVghKFubyI%2BSSK%2FDKEMGZ1T%2B4cV4nHiDW7Wjtes0Oze%2Bdfkq6dj6G7sAL38wLAQXumADB1A5fZaDmUP9MIL%2FTHUoan9vuaPFerei15lQViNEQlZnOKDA7qNWAHqi2Au%2FAqStH%2B%2FgOSKxmR3Vbs%2BfTHQP%2BDrCJ%2BHi%2BVGE5rs%2BSGt39RvHBGPrX5kbD0NbXGTG9JWDXraZqoU8dtbXztAzzLSZQJKlf0If3FoZt0enyQs8HfcEOG07f3a5XKzvo0R8wEueNSPz0GJ3UwdSgWaYXtXqcXpG%2BT4VNeTuwGyiu6W40B4QSpIO8Y6NntknLYURvP6VsOmqSF7arlbGmWjoku8mttnRaQ8VB72VuPwhjCIdEk3gj51IpZ9I2ysoPMdnYB4lQ2FXJQs8oEgvuTgNpwWYlNXDL9h%2FNp8%2BXGUzuIQsmckRLL%2BbtEd80uD1QzZYv%2BJ8SfIRdiO%2FCk%2BNc7jbJGUFgjMdqoSikVHk4AzcvldkGvOaBkxq3LyNKcMMKHi1b0GOqUB%2B%2BEfxrrrvUPKHBsiHGkhk5V6K4DIvPlc30Pi13wXGXjnob6sxS4w%2Br0bhaM2zMyn22GtvkqU52B3gflN%2F99v%2FEIgvyvN559Io040yTNdqLBTigpqmKflr6A4IwA7YFs83ThUdXE4UfghoiI2un3CBSTAlOXNqTGMGMwiTqfEsUagZeZyk1UVpW989%2Fknbw3dXyTXUqQbvJDe6HV7Hxj0CfUKeGzB&X-Amz-Signature=a0fb4c14b1caf92969bb833fb7acd9074fb9a16139369241ff184dc877848193&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VANFIUM%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T061100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDHGvpvdkD7X0XoE2PMrfQ3CPvTj2GV9VzPY51anxFLTwIgWqPlpKa1EZ9h1A61MPx22214aBbGJMlSqiR4nuwDTs8qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUVNFFv3E13gxUzlCrcA%2Fzu4vugzJUzDw4vmP6NCoBzkMNzTQgO1CVAkhuMKHAR0fvtuiZixrsnRDrkx1YIDVhbH4ACnbF9qFF8qpHKXnGUGCxnAZCT%2FCV17lK6SKyabYVSL1%2BviD2dBJtKqCdRpuVghKFubyI%2BSSK%2FDKEMGZ1T%2B4cV4nHiDW7Wjtes0Oze%2Bdfkq6dj6G7sAL38wLAQXumADB1A5fZaDmUP9MIL%2FTHUoan9vuaPFerei15lQViNEQlZnOKDA7qNWAHqi2Au%2FAqStH%2B%2FgOSKxmR3Vbs%2BfTHQP%2BDrCJ%2BHi%2BVGE5rs%2BSGt39RvHBGPrX5kbD0NbXGTG9JWDXraZqoU8dtbXztAzzLSZQJKlf0If3FoZt0enyQs8HfcEOG07f3a5XKzvo0R8wEueNSPz0GJ3UwdSgWaYXtXqcXpG%2BT4VNeTuwGyiu6W40B4QSpIO8Y6NntknLYURvP6VsOmqSF7arlbGmWjoku8mttnRaQ8VB72VuPwhjCIdEk3gj51IpZ9I2ysoPMdnYB4lQ2FXJQs8oEgvuTgNpwWYlNXDL9h%2FNp8%2BXGUzuIQsmckRLL%2BbtEd80uD1QzZYv%2BJ8SfIRdiO%2FCk%2BNc7jbJGUFgjMdqoSikVHk4AzcvldkGvOaBkxq3LyNKcMMKHi1b0GOqUB%2B%2BEfxrrrvUPKHBsiHGkhk5V6K4DIvPlc30Pi13wXGXjnob6sxS4w%2Br0bhaM2zMyn22GtvkqU52B3gflN%2F99v%2FEIgvyvN559Io040yTNdqLBTigpqmKflr6A4IwA7YFs83ThUdXE4UfghoiI2un3CBSTAlOXNqTGMGMwiTqfEsUagZeZyk1UVpW989%2Fknbw3dXyTXUqQbvJDe6HV7Hxj0CfUKeGzB&X-Amz-Signature=17715edef81e71318131358fba7780d4c3f507d698f3f9c7bd377e2e0caa7198&X-Amz-SignedHeaders=host&x-id=GetObject)

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

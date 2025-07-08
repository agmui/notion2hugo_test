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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2VA4W6Z%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T042007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDB1wldii8HIMaKjVX%2Fz4CsCYxoJeidTCtcFk%2F%2Bphq9PwIgfsEd5mc9jAk4m7x4EGF7g5eRgIr1AGhy33Z5j8na%2BZQqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHCChEa8cmNJD%2FbN%2FyrcA5X5Kf%2FknWkVDcQJg0U8m8cw0IUYOKyMCGbw9EnqCQ324HSDsYpHnvv7MekXeq83HcBhb97qASzz5aHTF5BYFJ9BkVIwLQ3boCSyvOShj98k3DADTnoRLREuFm4KElBmU6bz1xRuVP8nehpWgUwf6AFQJHwXuEya3Xu8SRWaN9X1tqzQrvjdzxFn0V8HXUZ8v1Ffn71kDJY59RydR9gqwaAKvRmRCvzryf3gugSUC9ienxcuYzLG9gyLTQ7HDYVKYkcO03i1VUTOfhsLHxEQTCrUznh3vpJ31NdJvB3eFAEvNarXf2uWGO5QWhN5iAG5Axtlk%2BJmc0YFqGEXiPJbficziEEzphzrCYM6geCILB3%2FzxqbmB4cRGKun6ubEWmFe5ljF343EqujftMnIWbvMsxl82u%2BoPV4ORb5e8JFy4IbNnh8JfXy4UEAcFJ6RBSYNE7FxVb3xl2mbK9sR5O14yC8V6riywGnVQg1uKKarOjw2xYrN62Dox%2FS%2FPIGqTNlevq2Zjr7T17RmtbghY9JsxK8wXrj%2Ft0KVVb8tAWW%2FbH6EXX13spBcB3sWbdzGmd6AMnj%2BE1bkpnB2eN4OEEv1vXWA%2FVptVwlqbb5uzaoVAsWxyJn7Ddvdoc4MBBfMP2DssMGOqUBNJeH%2FUKWjnmMiq6XT8rhchaggkeQ%2BgnT15Dcd5X31ciaHI5tbzD1mb0SYpyOC2BkrCDYmxeskUq6%2FHptmm5Ln12UV9aCgaL9JDgwEf%2FNBwPHxUZ1ftNvVk6pm5TmYkxJt%2BCtRkve78dXvxR3FgBAWcVK4sAmrHyqn9O%2FQLNsTKJL86x%2FYuyogsqg%2BelI63UHtYCXxdcZxUHIdyddREAiCT%2FOlnTR&X-Amz-Signature=390d5a8e32cf441f882cc5528b7e9189d5be84a6a34ade1e90fc0fe9f598470f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2VA4W6Z%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T042007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDB1wldii8HIMaKjVX%2Fz4CsCYxoJeidTCtcFk%2F%2Bphq9PwIgfsEd5mc9jAk4m7x4EGF7g5eRgIr1AGhy33Z5j8na%2BZQqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHCChEa8cmNJD%2FbN%2FyrcA5X5Kf%2FknWkVDcQJg0U8m8cw0IUYOKyMCGbw9EnqCQ324HSDsYpHnvv7MekXeq83HcBhb97qASzz5aHTF5BYFJ9BkVIwLQ3boCSyvOShj98k3DADTnoRLREuFm4KElBmU6bz1xRuVP8nehpWgUwf6AFQJHwXuEya3Xu8SRWaN9X1tqzQrvjdzxFn0V8HXUZ8v1Ffn71kDJY59RydR9gqwaAKvRmRCvzryf3gugSUC9ienxcuYzLG9gyLTQ7HDYVKYkcO03i1VUTOfhsLHxEQTCrUznh3vpJ31NdJvB3eFAEvNarXf2uWGO5QWhN5iAG5Axtlk%2BJmc0YFqGEXiPJbficziEEzphzrCYM6geCILB3%2FzxqbmB4cRGKun6ubEWmFe5ljF343EqujftMnIWbvMsxl82u%2BoPV4ORb5e8JFy4IbNnh8JfXy4UEAcFJ6RBSYNE7FxVb3xl2mbK9sR5O14yC8V6riywGnVQg1uKKarOjw2xYrN62Dox%2FS%2FPIGqTNlevq2Zjr7T17RmtbghY9JsxK8wXrj%2Ft0KVVb8tAWW%2FbH6EXX13spBcB3sWbdzGmd6AMnj%2BE1bkpnB2eN4OEEv1vXWA%2FVptVwlqbb5uzaoVAsWxyJn7Ddvdoc4MBBfMP2DssMGOqUBNJeH%2FUKWjnmMiq6XT8rhchaggkeQ%2BgnT15Dcd5X31ciaHI5tbzD1mb0SYpyOC2BkrCDYmxeskUq6%2FHptmm5Ln12UV9aCgaL9JDgwEf%2FNBwPHxUZ1ftNvVk6pm5TmYkxJt%2BCtRkve78dXvxR3FgBAWcVK4sAmrHyqn9O%2FQLNsTKJL86x%2FYuyogsqg%2BelI63UHtYCXxdcZxUHIdyddREAiCT%2FOlnTR&X-Amz-Signature=ccbcc4532da7c99742b63fba1ce6fb75cadb8efe106b1ae4be4d986e79dc22d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

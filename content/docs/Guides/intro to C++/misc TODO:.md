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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NSXDBJT%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T150910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCID%2F9mk%2Fdyt%2FPu2bwxVAbVhOijuo%2FpZuDv11bcN9W4QIPAiEA1RXJS30u3Qd8uDE4MM7%2BxGmH1EdYscZfzVLmmgck764qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJi6G0FTEEM3R7GLqCrcA2Z0Q%2BoJOBS7vPvhHamA%2B0sDJwkYfTGqOJqc3G23q7b3k7D1wHRE7U8uQl4AKSxcS7h10bkZJM5jLXp3QBEaJ4k8Jy5y%2FdbDmKy2xGOTIopQsN4xAlW37hJvkrqy8nIAQ4oaKGhpffCql9XTtjKD90wOUpvQ1VbyU%2BpSRZPPDeI7Cke41IrQhX5pWI8GLKd0u5DKnwGmjCVScU44D0g8weBdPVZ7Ul0i18Zn9funuSdcsLgic5l9jOxurBJ70Fhu4RBvE1OvJBKHzVA8u0NJizI3d4ttADvhLx0zRsXrpiAtcQh0kUEz0HmxYblPveJnUOnrlgFNnVKmE9fGRHCEN5EiL0ZNh6WDCpr2JGcSeLhxhXLPs1CwBZmrZ4IKuONeR6DS0Dfae%2FREoAzjMHbza3kkXF0DZ2cay8AswXBzJgmahfLhzEBFJBaloiAfTZ1%2BT9crU1Q2dov8jpzm%2BLLbjGsAxs4avrDlgimvdKokGRLzIG1BSNIm4%2BSobfyf%2BWMRg6g4rTqgkUVrz7VbMHpFT8TJGoLWnZ%2FB92azTjBzfNLQGoljdo2ysOzAXOH%2FHlhHXImhd6AjcyLQOAJYoD60DT2F%2Fm5qMiakoUbbJoVQ1FC%2F%2BXTB33jOYfmp%2FRgSMJrQ6MMGOqUBV5OzRGz1FejpDplfcCiVvgsT4KXAWQr30i4OE0b%2FsPXfLYwQZHa2C9upXTpbkfgT%2FwYzaGzCP0EGTORst5QScglKEDC4xKKrXAxoyC41HIwJqg%2FTRfal4uvrdEZkGs%2F4rH72n0%2B6fd8hwQtOyVgH5NIFF6BhGrzDBAoBBxcbBcLwrGG8R%2FYRHLP6CofvLTwDm3I88jFnu7A4M%2BUX7NLn7JyVBaLM&X-Amz-Signature=6f7b8668dd1b29fd5d739152187c6775958a256a46267d2d0ee47041a460eff6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NSXDBJT%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T150910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCID%2F9mk%2Fdyt%2FPu2bwxVAbVhOijuo%2FpZuDv11bcN9W4QIPAiEA1RXJS30u3Qd8uDE4MM7%2BxGmH1EdYscZfzVLmmgck764qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJi6G0FTEEM3R7GLqCrcA2Z0Q%2BoJOBS7vPvhHamA%2B0sDJwkYfTGqOJqc3G23q7b3k7D1wHRE7U8uQl4AKSxcS7h10bkZJM5jLXp3QBEaJ4k8Jy5y%2FdbDmKy2xGOTIopQsN4xAlW37hJvkrqy8nIAQ4oaKGhpffCql9XTtjKD90wOUpvQ1VbyU%2BpSRZPPDeI7Cke41IrQhX5pWI8GLKd0u5DKnwGmjCVScU44D0g8weBdPVZ7Ul0i18Zn9funuSdcsLgic5l9jOxurBJ70Fhu4RBvE1OvJBKHzVA8u0NJizI3d4ttADvhLx0zRsXrpiAtcQh0kUEz0HmxYblPveJnUOnrlgFNnVKmE9fGRHCEN5EiL0ZNh6WDCpr2JGcSeLhxhXLPs1CwBZmrZ4IKuONeR6DS0Dfae%2FREoAzjMHbza3kkXF0DZ2cay8AswXBzJgmahfLhzEBFJBaloiAfTZ1%2BT9crU1Q2dov8jpzm%2BLLbjGsAxs4avrDlgimvdKokGRLzIG1BSNIm4%2BSobfyf%2BWMRg6g4rTqgkUVrz7VbMHpFT8TJGoLWnZ%2FB92azTjBzfNLQGoljdo2ysOzAXOH%2FHlhHXImhd6AjcyLQOAJYoD60DT2F%2Fm5qMiakoUbbJoVQ1FC%2F%2BXTB33jOYfmp%2FRgSMJrQ6MMGOqUBV5OzRGz1FejpDplfcCiVvgsT4KXAWQr30i4OE0b%2FsPXfLYwQZHa2C9upXTpbkfgT%2FwYzaGzCP0EGTORst5QScglKEDC4xKKrXAxoyC41HIwJqg%2FTRfal4uvrdEZkGs%2F4rH72n0%2B6fd8hwQtOyVgH5NIFF6BhGrzDBAoBBxcbBcLwrGG8R%2FYRHLP6CofvLTwDm3I88jFnu7A4M%2BUX7NLn7JyVBaLM&X-Amz-Signature=e185c911626168b64a571c73cdfb76f28d41969247a47fda33234baeaf36a0f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

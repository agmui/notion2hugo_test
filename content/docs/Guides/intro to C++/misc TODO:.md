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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STL6MLMI%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T220657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIByXSVGEimZbjcLExFbWtNyF%2FloMbnSAIC8bbk%2BRRk9%2BAiA9fqtHdT4LJ3uR082ne%2F%2Fra%2FiTUoheWe%2FohPVMR%2F4mMCqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxo6hcbuD%2Bk65NxI3KtwDkFHr9J1Sq6cvQEwu%2Bmvwd4Viq5chBv4w9Fo5XksNQ3vQBlax7I%2BVy7VWqHB%2Far6xHsrzQchzeo6sKfqOyn7cs%2BR4LF9aiC40rmRC0PUxdBRPb3j94fyXaLixKAhDhCz6mHCJeW8W8%2BmMcBMlTqSniOSZ2q0AV0mDkC5C0JihMSLgkm9fyO8P3iE6m0oGjfbQMbb8B%2BIK8CzhE6NDXZYM2HoWu4zWyiHfZMeo1nHCf8ZafTDOvxP3AQpa1spCxxYu0KT8KC%2FpU4fw9l9OMnn5KGqLhVEUu6baaDBi2ucAlVYZCac4qB3Lwgv%2BaF6Y%2BTj%2BYQrc3lx0GhiIbnE0NglY%2Fl5yVzpgdDjFFnobK3ivMqMi4LoHWAelXMs8DQut2R9BFmKeYK69DIyxILzUHA4VRnMkRb8LkR4iwZ6CAa7%2FKHUmNeXHc6dDotkmZtQkaEsk2e2jnPikFbtqhmklTfJETSafBKkUm83hn3rTrIOVgjGa3Z9gLZsr8QlXXHezUYkqhqa6m81D6MfVQ6ChNUp5uUL92NRjpcB%2B%2Fk6%2BKRHoJqCeK2OzeRR2QS%2F43esZ10RoAQDI4iiljWY41QPLDKdLix6%2BvIrnQjWwfKX3JaFYudGRH1Of5%2B9ZQyejzpIwqIr%2FwAY6pgFilnAV0bkLjXuG3n2IKmGwFiYfDGseOcjbxm%2BExxYQkf%2FApxE4dzDNQtvPkZxbhmCJflx2K3NHUnKMLclqjy0%2Fjy47PvEMxhgN0e3360q0KhmaLemQbqJDfm9Wfcbz%2BxDkZTQPOsR5q6HIiKuT2bLxBfXBSz59W7DYW52PPworoZquBf2jg2cCl93PdDXZ%2B7K%2FoErlaev7dopk3wZldd%2BicMyMkY7e&X-Amz-Signature=42f7beb4f6dd99dd6e07926665bb7da65a63d66869f0c9a2604c67446a1741b9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STL6MLMI%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T220657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIByXSVGEimZbjcLExFbWtNyF%2FloMbnSAIC8bbk%2BRRk9%2BAiA9fqtHdT4LJ3uR082ne%2F%2Fra%2FiTUoheWe%2FohPVMR%2F4mMCqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxo6hcbuD%2Bk65NxI3KtwDkFHr9J1Sq6cvQEwu%2Bmvwd4Viq5chBv4w9Fo5XksNQ3vQBlax7I%2BVy7VWqHB%2Far6xHsrzQchzeo6sKfqOyn7cs%2BR4LF9aiC40rmRC0PUxdBRPb3j94fyXaLixKAhDhCz6mHCJeW8W8%2BmMcBMlTqSniOSZ2q0AV0mDkC5C0JihMSLgkm9fyO8P3iE6m0oGjfbQMbb8B%2BIK8CzhE6NDXZYM2HoWu4zWyiHfZMeo1nHCf8ZafTDOvxP3AQpa1spCxxYu0KT8KC%2FpU4fw9l9OMnn5KGqLhVEUu6baaDBi2ucAlVYZCac4qB3Lwgv%2BaF6Y%2BTj%2BYQrc3lx0GhiIbnE0NglY%2Fl5yVzpgdDjFFnobK3ivMqMi4LoHWAelXMs8DQut2R9BFmKeYK69DIyxILzUHA4VRnMkRb8LkR4iwZ6CAa7%2FKHUmNeXHc6dDotkmZtQkaEsk2e2jnPikFbtqhmklTfJETSafBKkUm83hn3rTrIOVgjGa3Z9gLZsr8QlXXHezUYkqhqa6m81D6MfVQ6ChNUp5uUL92NRjpcB%2B%2Fk6%2BKRHoJqCeK2OzeRR2QS%2F43esZ10RoAQDI4iiljWY41QPLDKdLix6%2BvIrnQjWwfKX3JaFYudGRH1Of5%2B9ZQyejzpIwqIr%2FwAY6pgFilnAV0bkLjXuG3n2IKmGwFiYfDGseOcjbxm%2BExxYQkf%2FApxE4dzDNQtvPkZxbhmCJflx2K3NHUnKMLclqjy0%2Fjy47PvEMxhgN0e3360q0KhmaLemQbqJDfm9Wfcbz%2BxDkZTQPOsR5q6HIiKuT2bLxBfXBSz59W7DYW52PPworoZquBf2jg2cCl93PdDXZ%2B7K%2FoErlaev7dopk3wZldd%2BicMyMkY7e&X-Amz-Signature=53aee53c603a762943ffccb00891a1b777eeba84f34d3a58f194c29d02449375&X-Amz-SignedHeaders=host&x-id=GetObject)

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

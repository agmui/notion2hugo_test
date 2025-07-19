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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI7KRRFR%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHt7v8O4c4VZJHyYqxZzZ6kWF2i%2B4Ozl608lktdpJjrAiBKGd%2Bp%2FNUi7d0E%2B1joBXEeDD%2FhR9WgRUgL%2BPdr%2BUG31yqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM072QuXXX4BCepzG7KtwDgrWzS1s2NcXJQeMqTjnb07GccdPi19oS%2F81X2e%2BCF7FJ0ePuISwCBrvq60P%2BR3pyvzINybAR4YEWs6B0TWuegr0NNbWZJuwUgvL51cK495O8ri4T%2FGLOKlnC6GmspkJ8D%2BWX5qxSWY8nXnhZlwtjor57CEDIuuvq67DukV%2BGCV4Ym7IBX4XuyKMoREzekyXRv8alUZqnx9npSsghclE20%2FoP5%2FjiGen56xnUSbvXpFQRVtwx12S8lNvsG0HWv72pOetx6y7qFqGJT55u2OO5WbiXYghC0LzKMBwzTyVEtIBWk67JOiGa4Sesicx8GSNGDF1v8UxzaIwiCyRXnGZWJacW02z6DrSnhrcSy8hC5zXjoEUZ87H58GcVwrh4HJa%2BkOaZ%2BJe2M6E97lPkJiA6SAglzxJqOSvbyg0cpd1Bn41%2FpJDwhLVssV%2FzUpRLXtjn3BVIsAlRL2r5r%2FojeG8h9L%2B4q3QIKaJYlCY%2BZjaq0saTxCspsuheqMZ4maotEYDE2MXfxgD9Zj5bCmXJiLdRN6G0a6zHH7O1NbeclYnk8VH1JvPgKv4IYlWtRPxhMXUXap60LtucavB0bH7I%2B2khN0L3E35qSKM9iE3mE54SiR%2FXvTYbhgNrEXSWRVwwsfXvwwY6pgGJg0%2B9tZBPOza3XxGdh8ihm8ZAPEhiA5NZRzJK6a%2F%2BhY9UPYtSdTFRYwRm5WVWIv6qNahSP2jmaQD8qmgYUM3C5vH3q6G5DzfqEV3U7CbJZvC4r2uZtOQ6WpK9mG6iiVqjKRvssT7vwyr%2BNsGEu1Z9RpjPemCDYV8wYFuc4EgbaVGZvNtpSqPnbiWMO3QTr32D%2F7JFTyjGGQ7eCmu02I%2BaOMzQkrtK&X-Amz-Signature=6c2fad9299b6ae59c7c22cefc32e95d4607a1056c3b406c38ef0ae42dc5c9d83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI7KRRFR%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHt7v8O4c4VZJHyYqxZzZ6kWF2i%2B4Ozl608lktdpJjrAiBKGd%2Bp%2FNUi7d0E%2B1joBXEeDD%2FhR9WgRUgL%2BPdr%2BUG31yqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM072QuXXX4BCepzG7KtwDgrWzS1s2NcXJQeMqTjnb07GccdPi19oS%2F81X2e%2BCF7FJ0ePuISwCBrvq60P%2BR3pyvzINybAR4YEWs6B0TWuegr0NNbWZJuwUgvL51cK495O8ri4T%2FGLOKlnC6GmspkJ8D%2BWX5qxSWY8nXnhZlwtjor57CEDIuuvq67DukV%2BGCV4Ym7IBX4XuyKMoREzekyXRv8alUZqnx9npSsghclE20%2FoP5%2FjiGen56xnUSbvXpFQRVtwx12S8lNvsG0HWv72pOetx6y7qFqGJT55u2OO5WbiXYghC0LzKMBwzTyVEtIBWk67JOiGa4Sesicx8GSNGDF1v8UxzaIwiCyRXnGZWJacW02z6DrSnhrcSy8hC5zXjoEUZ87H58GcVwrh4HJa%2BkOaZ%2BJe2M6E97lPkJiA6SAglzxJqOSvbyg0cpd1Bn41%2FpJDwhLVssV%2FzUpRLXtjn3BVIsAlRL2r5r%2FojeG8h9L%2B4q3QIKaJYlCY%2BZjaq0saTxCspsuheqMZ4maotEYDE2MXfxgD9Zj5bCmXJiLdRN6G0a6zHH7O1NbeclYnk8VH1JvPgKv4IYlWtRPxhMXUXap60LtucavB0bH7I%2B2khN0L3E35qSKM9iE3mE54SiR%2FXvTYbhgNrEXSWRVwwsfXvwwY6pgGJg0%2B9tZBPOza3XxGdh8ihm8ZAPEhiA5NZRzJK6a%2F%2BhY9UPYtSdTFRYwRm5WVWIv6qNahSP2jmaQD8qmgYUM3C5vH3q6G5DzfqEV3U7CbJZvC4r2uZtOQ6WpK9mG6iiVqjKRvssT7vwyr%2BNsGEu1Z9RpjPemCDYV8wYFuc4EgbaVGZvNtpSqPnbiWMO3QTr32D%2F7JFTyjGGQ7eCmu02I%2BaOMzQkrtK&X-Amz-Signature=b212bd9025e5f9566599b8e2983760dd85f4f02c346f2cf6322c24ac92c99b5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

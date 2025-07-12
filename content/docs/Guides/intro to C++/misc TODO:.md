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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EDJPASM%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfdCmkC%2BNh665RZEZfD%2BM1IShuPcyvOsD177h%2FgUsMbAiEAlROFubdeBfejiP9MpBVpezHvODkt8Yac%2FIy8esDd%2Fl0qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFLcEgvTB94%2BZE%2FAyrcA%2FVYzDlzdTmQKfgLpnORXqBDav9Rk2HnJ%2F8NkQcxworrPH3RZ%2BWmtcg%2F%2Fnzp9YHZNpLBri7akeg94t8BMxm%2FBUD3OPTKsFVwy6Ssbd9eirokFwOBjS7fUKkRFmc4mwM9HhwCvmb2dc8xcwznXZcoONIFI6rqhhZfIg0jsRPrvfIdVgJiLwiKdu1y31Q7b72mxCaZNpdhbOhhHJPvjvUHzpfjiK1usSTTG3E9onJU944dHp5HkwebNiXpxR47hV%2F9NE39XMM2qnOlbuXH1f%2FZYPPp4rXguuB2Z%2Bj3UKNH4cZBLQCbB6TW0wyHcGCKIUsP1%2FiKePRICQAwUzqcfhIZvUcMZ0Mj6mwoHY9XXcIytJLvScZwuJh2y8yEU9FDahVTUuBd3IAyL%2F9p4gXmOY6F8UnoYyaFoNsfgWFt551SsYXuon0MA9G%2FLvuizSCMxEt3DbLa%2BltueBkGXE1FrHXtPVyZLk6RKa2s%2FU%2FCtAjRP73BwUIj0zM83qJ12n90KBhce1PWNl%2F%2FkWIG5zrmNx7cPGqx9xC0NZ9uUd6V%2Fbj4tQxFprEcTMfyBY%2BkHjpbrS79Kv2wDoNIkqRE9GaYXMFZIkRCU0OKnPK7ErN5RykA5XWUG34zV9I9TqGwXFZ4MNv8yMMGOqUBvYm3HSneVkc5h8wb3lEggP2UejOmOZtc1AVKLUgbFjXKxwnICZgL%2FkmxrHy%2BDqBDdWm5RQW0J%2FUbUec58wmwSvj0D9IwdT3CN%2BwPTNpCI%2B%2F3zH0o3zjHq8AeZ0ldO%2BsxH3UEnZQ%2FqYVTXGGANV4RXJ4LfInRA%2ByvebwaWhWy8lRrI987fxVqlagvtoLawEaPwow15hKkxo8dnUUiW7IddWRjP2Xb&X-Amz-Signature=583830e3b87eede7f7d1c0e9cc449a3ca6bd1dd1ee38dac14506733d23a14bf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EDJPASM%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfdCmkC%2BNh665RZEZfD%2BM1IShuPcyvOsD177h%2FgUsMbAiEAlROFubdeBfejiP9MpBVpezHvODkt8Yac%2FIy8esDd%2Fl0qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFLcEgvTB94%2BZE%2FAyrcA%2FVYzDlzdTmQKfgLpnORXqBDav9Rk2HnJ%2F8NkQcxworrPH3RZ%2BWmtcg%2F%2Fnzp9YHZNpLBri7akeg94t8BMxm%2FBUD3OPTKsFVwy6Ssbd9eirokFwOBjS7fUKkRFmc4mwM9HhwCvmb2dc8xcwznXZcoONIFI6rqhhZfIg0jsRPrvfIdVgJiLwiKdu1y31Q7b72mxCaZNpdhbOhhHJPvjvUHzpfjiK1usSTTG3E9onJU944dHp5HkwebNiXpxR47hV%2F9NE39XMM2qnOlbuXH1f%2FZYPPp4rXguuB2Z%2Bj3UKNH4cZBLQCbB6TW0wyHcGCKIUsP1%2FiKePRICQAwUzqcfhIZvUcMZ0Mj6mwoHY9XXcIytJLvScZwuJh2y8yEU9FDahVTUuBd3IAyL%2F9p4gXmOY6F8UnoYyaFoNsfgWFt551SsYXuon0MA9G%2FLvuizSCMxEt3DbLa%2BltueBkGXE1FrHXtPVyZLk6RKa2s%2FU%2FCtAjRP73BwUIj0zM83qJ12n90KBhce1PWNl%2F%2FkWIG5zrmNx7cPGqx9xC0NZ9uUd6V%2Fbj4tQxFprEcTMfyBY%2BkHjpbrS79Kv2wDoNIkqRE9GaYXMFZIkRCU0OKnPK7ErN5RykA5XWUG34zV9I9TqGwXFZ4MNv8yMMGOqUBvYm3HSneVkc5h8wb3lEggP2UejOmOZtc1AVKLUgbFjXKxwnICZgL%2FkmxrHy%2BDqBDdWm5RQW0J%2FUbUec58wmwSvj0D9IwdT3CN%2BwPTNpCI%2B%2F3zH0o3zjHq8AeZ0ldO%2BsxH3UEnZQ%2FqYVTXGGANV4RXJ4LfInRA%2ByvebwaWhWy8lRrI987fxVqlagvtoLawEaPwow15hKkxo8dnUUiW7IddWRjP2Xb&X-Amz-Signature=54ddd0f7fba9ae7f8818fa7e24efdf37e1d9c3661158e38ef4e6e4e5110923dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

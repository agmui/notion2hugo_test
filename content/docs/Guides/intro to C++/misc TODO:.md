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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N23UCSI%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T130943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLU%2BMEWiUShq6MVW%2F3uIPyZUBncF0pc4ngkSngfhA%2FCAiEAuKo9Myd7kdFAe24%2BvCoP57c1c71FJ7rCmsaE7tEHFTgqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ76a%2BTULdXjPQ5ftircA2yhN0sKNM9XARMwgbljnnb6AwTznWfW8j%2BGJGTWTHV8%2FkGwTaK7CRJqItCcJ3WIazKAgpgs12RgX2xHYlor00ChG4B2xtSzO1rycZ4USlObjlx4efGe2iOp5FhHXQtBkP2fYrC2AAqaeTPr7O%2FoOXOjk5h4tACdVc%2FA%2FA%2FL2vcKvOix3ZaH%2FZmkmnDkVaRR2Mp6Cjzy1YQQBLqWOstz%2BqtvkzkpB8K3Mls9SaBbENzIazusYDnmZfOfOLfepxDlhE1iUNovghN4yaghkUY0PEayOfvVk08C6Hdzb1buwHFK88qKtlvBuXhU7Ti0isClbkg6q9%2F%2FelZCBw%2F%2Bfap3HqspA3G6ItR3n5tphwx0eCM5G0Xzv4ie6vDkkLtwMmNcQMdrOfpsk2lI3oG%2BjXVQQQOjsInnMs21y%2FbRb7dfnPDH7TdgANE2a%2FTLrbdfmMQlud5U%2FZqvnYyza7HdYYF91YBntWOS6u6tDy9h0SBM19znD0JsAcorNy1BY0jgwRwwtRO5yQ4GsXR0taMu6BLiT5BwacfygdKawaDeugm90AFTSSzgWPfowQtyvLphSZeIwKVtX3SKu9%2B2JWpkmhIZSsnAbMk7k6GeT%2FRqqXIxMz5E6Eg%2BkLv%2B8ShvJcXyMPel97wGOqUBK2k6%2F3AmLhVlkOB5pGA9C6apDRURI%2BmvgnnwPDVVTN%2Bl9Pe6uqC67Q4aXI0XpJYaYXOcuQB3JzKSZ48sNwce6%2F%2FrcfWB%2BgBSeJj9oLc%2BRwewjv27HmTultG%2F%2BuYCo278NZ%2FpQuyX5g8kRjoUafsrP0FiaTXw5KQBmUxY5jM0%2BwpQVrVvm24Pk%2FHz4j16Fs%2FggpMuydLR1wiq%2FfoPlT1EGj8nX%2BFS&X-Amz-Signature=dd1c7fdb0b968cd727fc3d964a23930dc70bcb34b7cae5da7f254622e1a6f137&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N23UCSI%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T130943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLU%2BMEWiUShq6MVW%2F3uIPyZUBncF0pc4ngkSngfhA%2FCAiEAuKo9Myd7kdFAe24%2BvCoP57c1c71FJ7rCmsaE7tEHFTgqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ76a%2BTULdXjPQ5ftircA2yhN0sKNM9XARMwgbljnnb6AwTznWfW8j%2BGJGTWTHV8%2FkGwTaK7CRJqItCcJ3WIazKAgpgs12RgX2xHYlor00ChG4B2xtSzO1rycZ4USlObjlx4efGe2iOp5FhHXQtBkP2fYrC2AAqaeTPr7O%2FoOXOjk5h4tACdVc%2FA%2FA%2FL2vcKvOix3ZaH%2FZmkmnDkVaRR2Mp6Cjzy1YQQBLqWOstz%2BqtvkzkpB8K3Mls9SaBbENzIazusYDnmZfOfOLfepxDlhE1iUNovghN4yaghkUY0PEayOfvVk08C6Hdzb1buwHFK88qKtlvBuXhU7Ti0isClbkg6q9%2F%2FelZCBw%2F%2Bfap3HqspA3G6ItR3n5tphwx0eCM5G0Xzv4ie6vDkkLtwMmNcQMdrOfpsk2lI3oG%2BjXVQQQOjsInnMs21y%2FbRb7dfnPDH7TdgANE2a%2FTLrbdfmMQlud5U%2FZqvnYyza7HdYYF91YBntWOS6u6tDy9h0SBM19znD0JsAcorNy1BY0jgwRwwtRO5yQ4GsXR0taMu6BLiT5BwacfygdKawaDeugm90AFTSSzgWPfowQtyvLphSZeIwKVtX3SKu9%2B2JWpkmhIZSsnAbMk7k6GeT%2FRqqXIxMz5E6Eg%2BkLv%2B8ShvJcXyMPel97wGOqUBK2k6%2F3AmLhVlkOB5pGA9C6apDRURI%2BmvgnnwPDVVTN%2Bl9Pe6uqC67Q4aXI0XpJYaYXOcuQB3JzKSZ48sNwce6%2F%2FrcfWB%2BgBSeJj9oLc%2BRwewjv27HmTultG%2F%2BuYCo278NZ%2FpQuyX5g8kRjoUafsrP0FiaTXw5KQBmUxY5jM0%2BwpQVrVvm24Pk%2FHz4j16Fs%2FggpMuydLR1wiq%2FfoPlT1EGj8nX%2BFS&X-Amz-Signature=328be6a76a5656ac43cabb8a11803b7d5d0c96edcb4d95baf8c5713ec353ef82&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5EUJS75%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T042130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF79an1LKaGIXxLnkc9tpXWUIdFpowaoA8WWdlYSfPdNAiASt7Mkn13ZEJpG%2FTwmlKf1OAGrObOn3cEO4Qt0T%2FYuGiqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BgTWBh1cH4tlrLMpKtwDZ70TCE6Ep%2FYE1F9wItyZvEwEwOnqhU7ZRoPeNxTqnVj3HwNhxcDvSZxEKdEb40vsirL1Cycb%2BeIXfCX0YJxDBHldQeHxzBOWhrjno69EewyFt3sUvBjeOuC%2BI%2BHFMxdM02yq7YbqNWM%2BTjFd2DDDQ4sF43xMLnBqGV7zsWlgpsn5FMg1uxB9jjg0gtqMPiRA9095hOhKWHC9LRmubNr%2FBjD8596rOlFy6EmijIvoNn1UWIQR%2BchnvM9JnmevSiO%2FRxOsaZfR0Gt4jXh6sSLHpXuFWHKVjxkTGNAoSsIRXdA8zeo4UiKcymUquPYy7uPVOkwDhkMJxvVZEQoji8UGMfLqVS8xfVgQ2mVQ%2FPWiPLqh6kiJZrRHK30znqk0YCgw7vuRk4AfzA%2BVEU2sdyyQYbDkUhhdujE2cW0HQKvVMVwOg2tBBEoprQATOs22KFvipE40wfSvRKw43mGsHxYOl3jVqermYutoRATjL4zM6yfz3mi1I20BG9B%2FmdhdEbEneU%2BLX%2BvHX7XpWe%2FCct2NDDOB1YQQ23r2M60DzSUH9qid3175MBEw6tpEyn1WlNA043qztXnGEPGY%2B8v4MzNrif%2B5Iqru%2F0hzKR04sZrA4IO1SC4TbMf%2Ba5ovG3owubXGwwY6pgGIaGosZdzmNdns%2Bw2%2BJYmTL48Do0NEZ3K53Gk6J633gpBC0lyFnEHDYKV0jM%2F9IDXggCdvM0DNIwVh9uHG1Ip8RUiI%2FiHbJGOvosEf2tHUGzCO%2Fp7PuIVy5UzwoUnfVC60P7fbuUHpFAWYxLNyHRlWSgt8VljvaXuQSIt5RiJ2TBWmYAar59byJiFh%2B%2B9tq1gWkLislIvhakThRDSdS7F5NeswbTp9&X-Amz-Signature=f90595c1054c49789731f45e809d3cc66155ee02a5b3e5320746335f97cc8e7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5EUJS75%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T042130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF79an1LKaGIXxLnkc9tpXWUIdFpowaoA8WWdlYSfPdNAiASt7Mkn13ZEJpG%2FTwmlKf1OAGrObOn3cEO4Qt0T%2FYuGiqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BgTWBh1cH4tlrLMpKtwDZ70TCE6Ep%2FYE1F9wItyZvEwEwOnqhU7ZRoPeNxTqnVj3HwNhxcDvSZxEKdEb40vsirL1Cycb%2BeIXfCX0YJxDBHldQeHxzBOWhrjno69EewyFt3sUvBjeOuC%2BI%2BHFMxdM02yq7YbqNWM%2BTjFd2DDDQ4sF43xMLnBqGV7zsWlgpsn5FMg1uxB9jjg0gtqMPiRA9095hOhKWHC9LRmubNr%2FBjD8596rOlFy6EmijIvoNn1UWIQR%2BchnvM9JnmevSiO%2FRxOsaZfR0Gt4jXh6sSLHpXuFWHKVjxkTGNAoSsIRXdA8zeo4UiKcymUquPYy7uPVOkwDhkMJxvVZEQoji8UGMfLqVS8xfVgQ2mVQ%2FPWiPLqh6kiJZrRHK30znqk0YCgw7vuRk4AfzA%2BVEU2sdyyQYbDkUhhdujE2cW0HQKvVMVwOg2tBBEoprQATOs22KFvipE40wfSvRKw43mGsHxYOl3jVqermYutoRATjL4zM6yfz3mi1I20BG9B%2FmdhdEbEneU%2BLX%2BvHX7XpWe%2FCct2NDDOB1YQQ23r2M60DzSUH9qid3175MBEw6tpEyn1WlNA043qztXnGEPGY%2B8v4MzNrif%2B5Iqru%2F0hzKR04sZrA4IO1SC4TbMf%2Ba5ovG3owubXGwwY6pgGIaGosZdzmNdns%2Bw2%2BJYmTL48Do0NEZ3K53Gk6J633gpBC0lyFnEHDYKV0jM%2F9IDXggCdvM0DNIwVh9uHG1Ip8RUiI%2FiHbJGOvosEf2tHUGzCO%2Fp7PuIVy5UzwoUnfVC60P7fbuUHpFAWYxLNyHRlWSgt8VljvaXuQSIt5RiJ2TBWmYAar59byJiFh%2B%2B9tq1gWkLislIvhakThRDSdS7F5NeswbTp9&X-Amz-Signature=5dc3072208f871f00cf5b8ab94e70d500f717e8203b2ec07051380579fe6c130&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

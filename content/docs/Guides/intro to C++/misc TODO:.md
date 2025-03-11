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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPZPYITI%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T031956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCb3XanJ69DmeruHlu7f1OEggwLkqE2UsHz%2BuzlnVTeNgIhAL%2BnGCyzUM6YDn8ZZBcwPwDlmeR9MjHC6MAa4D5GPtMsKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWKQQBGN%2B5ddZq%2FFkq3AOVzlGL3tTZL1qGKSVQdM2mqkDt%2BW89iPqT6pwcZn7ecZVk8sX4kaIbh7mS2IuqR1HiiZWUzh8ir%2FjObLVPhGRNdFtpUiejBvWJ61u6WYtSnH5ZdCK37Ca2Ri%2F9eW9W6XQjjyyoxG7Htr%2BFGCUTuw7wLzhboGSrSo%2BkKnI2eUmh%2F4RJYiA8NuZUFfHxm%2BoxNJVN%2Bf34%2B2o%2F9vA1l4490yMdSMc5NEoOC7UibKgNYgnAiyShqYyOLOCXGbroYCZz%2B6cZgpJsFcE%2F4WRHsD9a3jPKgLRvRCmIn7O7rbmIQouIfJHPIN9WeI%2FGVw9G%2FcSynvI%2Fnxk4mwkOp5bIxmrwxalVd%2BOb2Id8j6IU%2BbrB4dGuheYNhwKiI2TUsIuAAtTsxXTSzl%2BsPc5NKbLyO9spvLoO6SPLf32sMH5OCrMqVVaVFsRkP7u12jeKlgziOjcB%2BmfR9XEgBbDAZzoBTr6Pu9Zngu6FrWg8w5GR8ojM9PJn7w6cuC5lf26FfD6bTSMqbI4K8%2FP1wSoPMXLzwtXHqsnurxcbEpYQ4yOF0Awp3XupGqJGKh%2F%2BFRPVoCSXqhkEOAHGDt6MHHALNSgUPMiLpeO5joJtEzMZzjrCjmLz7CU3RaOdX54IWxCl0GpIuzC10L6%2BBjqkATYw7U0TZHnD7XhgXJ6cnwWiBj3xk1gM%2Fg8m5spPbodzcfZ%2Fb67NSDSQDmaYnEVEWYztqCNnfbmO2%2Fpm1UShZl5a%2F97sQtGJMOBkOLkSCTrR0Q4JwUh4K9K6H0sKD6iXwF0Wvhs%2FNJ9rYjMnBEb5vu5rpQmPXAxt3MzkSNr7hznGSf%2BtmCaVdATSXl1dQCciiMbhNu9rezASUyjEAGqoG9xu%2FHuP&X-Amz-Signature=6d19daf2afdbfe85d1ca4d3454d33f4671b7ca9503b03d9864b38af729ed2c5c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPZPYITI%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T031956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCb3XanJ69DmeruHlu7f1OEggwLkqE2UsHz%2BuzlnVTeNgIhAL%2BnGCyzUM6YDn8ZZBcwPwDlmeR9MjHC6MAa4D5GPtMsKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWKQQBGN%2B5ddZq%2FFkq3AOVzlGL3tTZL1qGKSVQdM2mqkDt%2BW89iPqT6pwcZn7ecZVk8sX4kaIbh7mS2IuqR1HiiZWUzh8ir%2FjObLVPhGRNdFtpUiejBvWJ61u6WYtSnH5ZdCK37Ca2Ri%2F9eW9W6XQjjyyoxG7Htr%2BFGCUTuw7wLzhboGSrSo%2BkKnI2eUmh%2F4RJYiA8NuZUFfHxm%2BoxNJVN%2Bf34%2B2o%2F9vA1l4490yMdSMc5NEoOC7UibKgNYgnAiyShqYyOLOCXGbroYCZz%2B6cZgpJsFcE%2F4WRHsD9a3jPKgLRvRCmIn7O7rbmIQouIfJHPIN9WeI%2FGVw9G%2FcSynvI%2Fnxk4mwkOp5bIxmrwxalVd%2BOb2Id8j6IU%2BbrB4dGuheYNhwKiI2TUsIuAAtTsxXTSzl%2BsPc5NKbLyO9spvLoO6SPLf32sMH5OCrMqVVaVFsRkP7u12jeKlgziOjcB%2BmfR9XEgBbDAZzoBTr6Pu9Zngu6FrWg8w5GR8ojM9PJn7w6cuC5lf26FfD6bTSMqbI4K8%2FP1wSoPMXLzwtXHqsnurxcbEpYQ4yOF0Awp3XupGqJGKh%2F%2BFRPVoCSXqhkEOAHGDt6MHHALNSgUPMiLpeO5joJtEzMZzjrCjmLz7CU3RaOdX54IWxCl0GpIuzC10L6%2BBjqkATYw7U0TZHnD7XhgXJ6cnwWiBj3xk1gM%2Fg8m5spPbodzcfZ%2Fb67NSDSQDmaYnEVEWYztqCNnfbmO2%2Fpm1UShZl5a%2F97sQtGJMOBkOLkSCTrR0Q4JwUh4K9K6H0sKD6iXwF0Wvhs%2FNJ9rYjMnBEb5vu5rpQmPXAxt3MzkSNr7hznGSf%2BtmCaVdATSXl1dQCciiMbhNu9rezASUyjEAGqoG9xu%2FHuP&X-Amz-Signature=891f7f06c848b6dc8b60b9d2cff9d874d4254de79b651a1196cd025f47c6a040&X-Amz-SignedHeaders=host&x-id=GetObject)

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

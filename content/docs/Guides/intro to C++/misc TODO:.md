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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAZW45BM%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T003958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIHaAnkHHSm5sb7W2KCw6rsENQpE%2Butm32yKt66t%2FvsKYAiBBOYvEbvy4ExE9c391%2FYWPs%2B4o4ioC%2BOUqR1EapDTtKyqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Fi8K0T9S6gnLcPFfKtwDLjEFz5eoICvBgg3b9HuHMg9ckZtP8eLHfnTEoTvWzb7ovjOrdc3QRc0a1LiUKHIlSQ8YiT8fFjt4Eo%2FUoU0b81mEpMGvNLfc%2FV%2Bh6AlVb7dJiN3Bz%2FWu0tdgbY7gx0heiw18WipbWi0nRddZJqXu1ZyramuF%2BCaBP9schPltkBkF0kaYlNXU4kTMTYqCVeVqwrGFgFRoAnd7iHR%2FqjGkXRdOedbN2pqljIAxNc4OqFc7JuoN7Vct3MC4rlIWaqn33QEgveOyOD46a4yBpLCUMgpify%2Brz6FYsTZcBU1vFvLF5QOaZS9HhqzBWqX50xyPP6dc2eC7uaHXOEd694JFfPlZNoxqOTsF%2BizfsGGCHeINXbBLYmyXBmYTRkd31ET4FSw0BCaJKZ3wiFFgaZyuqE6a0e3UGXnwIjsxX5ht%2Fl0wsAXaavb7Lu5RQbiv2wvwqM8d%2BCvxXqPSKTpyxTzyK294h5xHJjhijdqZArdutg%2FyJQFDfPNz1BdJnhh5C7NyS3O%2BqGYeLdETV52tiICqPnQTrI9bo%2FK6YC9rlL8jnKXS%2FIARszIyOxRGrmqtRbO1Aev7ufwJcwzZFShEOPvvpJR0g5bdfY1BG2FG51HFRiKfUOwZnwur7PkCio8wmrmOvgY6pgHlw1RCsA1YgU%2FLPknGoEYLCWw0x185yqTCX0RS5BLCGdP85DvfVDdPaG%2FKE5xXBSzATX6tFEhf9O0x0vnHQp3yFgs8A21kwLj%2FnA%2BNaMlmkIkRBVvfaNVOXIKLcXyRpQ8hYsBuMj671du6l6b1xa0zSbKjMFM4wlmOQRSk03Ud%2B9JwbANwdRR%2FflzpDniGbDGv%2BuxwO7I%2FL0%2FwFDoHT4cV1aZ310t8&X-Amz-Signature=969b37051e2a1687cb30dd432a42f7e65f407621ab9f794ee1f499f435ff6089&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAZW45BM%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T003958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIHaAnkHHSm5sb7W2KCw6rsENQpE%2Butm32yKt66t%2FvsKYAiBBOYvEbvy4ExE9c391%2FYWPs%2B4o4ioC%2BOUqR1EapDTtKyqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Fi8K0T9S6gnLcPFfKtwDLjEFz5eoICvBgg3b9HuHMg9ckZtP8eLHfnTEoTvWzb7ovjOrdc3QRc0a1LiUKHIlSQ8YiT8fFjt4Eo%2FUoU0b81mEpMGvNLfc%2FV%2Bh6AlVb7dJiN3Bz%2FWu0tdgbY7gx0heiw18WipbWi0nRddZJqXu1ZyramuF%2BCaBP9schPltkBkF0kaYlNXU4kTMTYqCVeVqwrGFgFRoAnd7iHR%2FqjGkXRdOedbN2pqljIAxNc4OqFc7JuoN7Vct3MC4rlIWaqn33QEgveOyOD46a4yBpLCUMgpify%2Brz6FYsTZcBU1vFvLF5QOaZS9HhqzBWqX50xyPP6dc2eC7uaHXOEd694JFfPlZNoxqOTsF%2BizfsGGCHeINXbBLYmyXBmYTRkd31ET4FSw0BCaJKZ3wiFFgaZyuqE6a0e3UGXnwIjsxX5ht%2Fl0wsAXaavb7Lu5RQbiv2wvwqM8d%2BCvxXqPSKTpyxTzyK294h5xHJjhijdqZArdutg%2FyJQFDfPNz1BdJnhh5C7NyS3O%2BqGYeLdETV52tiICqPnQTrI9bo%2FK6YC9rlL8jnKXS%2FIARszIyOxRGrmqtRbO1Aev7ufwJcwzZFShEOPvvpJR0g5bdfY1BG2FG51HFRiKfUOwZnwur7PkCio8wmrmOvgY6pgHlw1RCsA1YgU%2FLPknGoEYLCWw0x185yqTCX0RS5BLCGdP85DvfVDdPaG%2FKE5xXBSzATX6tFEhf9O0x0vnHQp3yFgs8A21kwLj%2FnA%2BNaMlmkIkRBVvfaNVOXIKLcXyRpQ8hYsBuMj671du6l6b1xa0zSbKjMFM4wlmOQRSk03Ud%2B9JwbANwdRR%2FflzpDniGbDGv%2BuxwO7I%2FL0%2FwFDoHT4cV1aZ310t8&X-Amz-Signature=900618bb8370884c2dcea810cce600b8bc6df0e4ed715766198d8b1a450d7281&X-Amz-SignedHeaders=host&x-id=GetObject)

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

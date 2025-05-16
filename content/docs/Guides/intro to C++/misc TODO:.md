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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q5TZAYP%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T200937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRskFojLshqtoax2u7FJbwUrKVavWZhVcG6lc%2F%2BJXW6AiBmi7iAVRm9DhMySUDr%2F3tKrmOXWOMzxh4OXZsGrnz%2FMCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMOlkxbuOORtcGksjgKtwDDhOUxddrdcxEOEaX35F9Bi%2Fh1it4lVIpzp8ik7M%2BAZx1kFkeGPYadCNit1lD8Ysx6UAgVN7LrJ5iSgZfpa5b9D9fO4XKBpx%2BciDaiLaHa15D8FH1qIXwG1k56B2JZ64NRQEvRWpt%2F2dcpvhNRu8BPZ0Nr5yb%2FiRcf8vVwdOwIK4ncV03TqPEm5nK9rJQ7BLPlblD3FyhbOQqhO5GPm9PH7q7Fcrym3fA9ZQgvRyo5zt1yPkhy79UwcvLwRgE%2BIlsqCWHHGWUM1II5I5nvBzxLZSv93Cx0IlgHpTy8VWg%2B1ZWm36DjrdI2FL3lvGCinmDAdNnE6522aOmWUuIJlUCiWpbg8G6%2Fyupn6UOCnqlUqIBfmj6xsgK%2Bg%2BI78SQJORIE3uQZFuMN65wbO3y24pGmmaG9eI69qohZb3q9NpZBUw1hqwvYvY8jtcZL9fPPVqV3Dokh2YHEmzc47uPDApiYVc6rx40%2BhnCjOhOchhowj%2BQTSxZ5%2BmSTnnd8xxXDWoG8ghZJyRFrLORQdgc4EDyH2drEjdO%2BoF36pAdgp7IV5uGU53hHpT9m42O1tIXTl4csW1gE0gQfv5i7cDV7HmE0z5SV6NoQNlgbos2Kd40TRIW%2BLnEFBD7AFO0Kfkw%2BI%2BewQY6pgHwlKQNjPF5q5ffj24LvfD9O7lMdxF2upIX%2Feadj6%2FiYEr%2FVPRlS42WVnPzjk%2BS9lJmyqm6V2RBROS3aLStmCvM4vXzZLczcBS9PRhf7zA%2Bk0h092j%2BrRwhuQl5qosxTTUB%2FPmza%2FpQKq29AJZ7DX3oYPrFrkDbtbcCHfzmWibAQj4p07RxYhu5Ybpdose6TwOsU8Sbka%2F%2FVpKtaMpn6Weyheco1fbe&X-Amz-Signature=0b4be68ac59fd2444b169d6f1c599877b5df92fd24c8e05a244a450828c9e362&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q5TZAYP%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T200937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRskFojLshqtoax2u7FJbwUrKVavWZhVcG6lc%2F%2BJXW6AiBmi7iAVRm9DhMySUDr%2F3tKrmOXWOMzxh4OXZsGrnz%2FMCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMOlkxbuOORtcGksjgKtwDDhOUxddrdcxEOEaX35F9Bi%2Fh1it4lVIpzp8ik7M%2BAZx1kFkeGPYadCNit1lD8Ysx6UAgVN7LrJ5iSgZfpa5b9D9fO4XKBpx%2BciDaiLaHa15D8FH1qIXwG1k56B2JZ64NRQEvRWpt%2F2dcpvhNRu8BPZ0Nr5yb%2FiRcf8vVwdOwIK4ncV03TqPEm5nK9rJQ7BLPlblD3FyhbOQqhO5GPm9PH7q7Fcrym3fA9ZQgvRyo5zt1yPkhy79UwcvLwRgE%2BIlsqCWHHGWUM1II5I5nvBzxLZSv93Cx0IlgHpTy8VWg%2B1ZWm36DjrdI2FL3lvGCinmDAdNnE6522aOmWUuIJlUCiWpbg8G6%2Fyupn6UOCnqlUqIBfmj6xsgK%2Bg%2BI78SQJORIE3uQZFuMN65wbO3y24pGmmaG9eI69qohZb3q9NpZBUw1hqwvYvY8jtcZL9fPPVqV3Dokh2YHEmzc47uPDApiYVc6rx40%2BhnCjOhOchhowj%2BQTSxZ5%2BmSTnnd8xxXDWoG8ghZJyRFrLORQdgc4EDyH2drEjdO%2BoF36pAdgp7IV5uGU53hHpT9m42O1tIXTl4csW1gE0gQfv5i7cDV7HmE0z5SV6NoQNlgbos2Kd40TRIW%2BLnEFBD7AFO0Kfkw%2BI%2BewQY6pgHwlKQNjPF5q5ffj24LvfD9O7lMdxF2upIX%2Feadj6%2FiYEr%2FVPRlS42WVnPzjk%2BS9lJmyqm6V2RBROS3aLStmCvM4vXzZLczcBS9PRhf7zA%2Bk0h092j%2BrRwhuQl5qosxTTUB%2FPmza%2FpQKq29AJZ7DX3oYPrFrkDbtbcCHfzmWibAQj4p07RxYhu5Ybpdose6TwOsU8Sbka%2F%2FVpKtaMpn6Weyheco1fbe&X-Amz-Signature=c796c09f51c063ad68f6af7917a04ac7a62dd7b82addccd2fb5e86501559fe31&X-Amz-SignedHeaders=host&x-id=GetObject)

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

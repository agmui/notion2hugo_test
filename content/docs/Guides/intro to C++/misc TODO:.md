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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676VRHZFH%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSe02ftITNIMWq%2BqySJdPOEGip3g47B95CzBktgAZlYAiAi%2Fm4LKTBCBun66Q%2Bww6nA%2BUqMO1iBEX9IqwK9qUkRXSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMJjsLHCtiF5X0pdL5KtwDvA4vzTZIgZyWv9tvwFRYLA6f2ZCrvZ11Q3rAVsGKZInWv9%2FGq8SPIPaPPzbRDp02%2B3Svhli1yl6wBIyh12urfp%2FzZyjC2B1lr%2BW4s8W8qjSUJlWjm4aKb7H0OTishm4%2BAob%2B3VXvb0py%2FT%2FTqxzYsKRi%2BlV2TFlL%2BmizgT6kGYrBhXmJ75NcJOyowageYMJ%2Bk%2FFXI%2FbIhkX5fN9q3tsV4cJ07nhX%2Beqjf0nvS2Yof6fj1UuquDNODh2qBF6OsoEzJk4uZ1tp58EuTbZebroa1bdI80N3ah75M8hEFeyx2ClUtCeODYrp1mqZ%2BXWMp%2B9ohhfZ0Lky9lbS%2Fl1BKBGK6AhaixcF0wK0k%2BJfaJCi6yIbaT%2FDiC1AhjKMjwZZiRyGiTT184MmY35lbUaB8E2k0t17tK4O0p3zi%2B7wvf6QIMA%2BXHAjV4Y6Y%2FG946DW3Rhx8O%2BROP%2B95%2BmY3ZuxFJDcxRIsEHHbbdZNfaeglXHALcmUaI93qHU8A0Kq%2FUBvqsNxxSycxW1ra2MqQ%2FGtQHYQSys1o08ACO3J4HctiEzeWTVSipb6qAx72U9cPI4STIMdeD0Sx%2FtmwbYuYDN6TwYbsSxb%2FtKimY8AL6trge%2Fh5slwf%2B2mK7e93mXzysEw8OXzwAY6pgHi%2FcOAXTow8eKpX%2FUkuzZWWtmGxNGAc6V8%2FrO6gvS8%2FM7io%2F2GuGWvIiL%2F2%2B4oOfpkZhtW25T4LFKEyu2zVr14VUgKZc%2BBKs2CjVouhk%2F1VudhPV%2FSprxrDseNi%2Fg7XlBAwTzDsxboW4EdBgHtn7led05b%2BWxCZAcPJFeKFPiISXhfDSGqvoRDYobGFw49I59Qod4nID1R1Yq0oMczlHfMxrFoPVx7&X-Amz-Signature=3030f43d843b9d3ee297a5dec88025fe0db724014714c4bd50188bea81dd98f1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676VRHZFH%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSe02ftITNIMWq%2BqySJdPOEGip3g47B95CzBktgAZlYAiAi%2Fm4LKTBCBun66Q%2Bww6nA%2BUqMO1iBEX9IqwK9qUkRXSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMJjsLHCtiF5X0pdL5KtwDvA4vzTZIgZyWv9tvwFRYLA6f2ZCrvZ11Q3rAVsGKZInWv9%2FGq8SPIPaPPzbRDp02%2B3Svhli1yl6wBIyh12urfp%2FzZyjC2B1lr%2BW4s8W8qjSUJlWjm4aKb7H0OTishm4%2BAob%2B3VXvb0py%2FT%2FTqxzYsKRi%2BlV2TFlL%2BmizgT6kGYrBhXmJ75NcJOyowageYMJ%2Bk%2FFXI%2FbIhkX5fN9q3tsV4cJ07nhX%2Beqjf0nvS2Yof6fj1UuquDNODh2qBF6OsoEzJk4uZ1tp58EuTbZebroa1bdI80N3ah75M8hEFeyx2ClUtCeODYrp1mqZ%2BXWMp%2B9ohhfZ0Lky9lbS%2Fl1BKBGK6AhaixcF0wK0k%2BJfaJCi6yIbaT%2FDiC1AhjKMjwZZiRyGiTT184MmY35lbUaB8E2k0t17tK4O0p3zi%2B7wvf6QIMA%2BXHAjV4Y6Y%2FG946DW3Rhx8O%2BROP%2B95%2BmY3ZuxFJDcxRIsEHHbbdZNfaeglXHALcmUaI93qHU8A0Kq%2FUBvqsNxxSycxW1ra2MqQ%2FGtQHYQSys1o08ACO3J4HctiEzeWTVSipb6qAx72U9cPI4STIMdeD0Sx%2FtmwbYuYDN6TwYbsSxb%2FtKimY8AL6trge%2Fh5slwf%2B2mK7e93mXzysEw8OXzwAY6pgHi%2FcOAXTow8eKpX%2FUkuzZWWtmGxNGAc6V8%2FrO6gvS8%2FM7io%2F2GuGWvIiL%2F2%2B4oOfpkZhtW25T4LFKEyu2zVr14VUgKZc%2BBKs2CjVouhk%2F1VudhPV%2FSprxrDseNi%2Fg7XlBAwTzDsxboW4EdBgHtn7led05b%2BWxCZAcPJFeKFPiISXhfDSGqvoRDYobGFw49I59Qod4nID1R1Yq0oMczlHfMxrFoPVx7&X-Amz-Signature=46737f506d80de7117fc6006dd6558c87349b10d7e8ac3b1bfa482e2d6ee2245&X-Amz-SignedHeaders=host&x-id=GetObject)

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

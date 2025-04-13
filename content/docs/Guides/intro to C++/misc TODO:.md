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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W6FS4YD%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T051602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCICvTVRWGAOga2wLrmnq96JpgSYAQYAFW%2BUGm3fubEc%2BWAiEArDV3dvP7yynbxPsvtAirWaIrF4q%2FmiMOew1xWdLFmZIqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BIFzZPdkYJ7%2FOvwSrcAyN6bIClaUJbYKSYIsvaTYZ7WnagbfcScOYDyTkyeMlKe4I5nkjqe1m1t9aPWaBSZoWfl%2B%2FKH6SS7dMqXVRt6ZtGaSzKEwmCZo3qnO9cGcOqCbKU0N74ZlaMXsQ88obAKap%2FnGIgU7NS0BjeRBu%2FXqBumu8JvCvjvDYWzODBh%2FOd81cd%2B%2FTF%2BLhd4LkPAgGXK5NybeHAGFxTdzu7xce5q7iD26T1Mwe3kWILBqH0sGXdq8NvwmbNuzbMiM%2B5CRe%2BGFGHkYxMJOhlghv71jnS3shigsL2WQcQrUaCFLVso%2BfZ0%2FSa0TbYcfpcz8kug7y3ZckLkKiyMh7JD5Kvukt5uG3zxVpvI0TqGMXVPz0zCCOpcoCiFj9E173hz23MirtoeQOy7rcBMalZ56ARjybRFaLH1dJcsxVIyYPhfDrSgkgbkfg%2Bl7KklLrQruqCDRQW%2Fw%2BnWNZjh68LKSwU6igimhT8A7OinJdCKJgl9yUSU2fBSU6Ug47Mpg7%2BuEchbagzJbGkg%2F7L%2BGhYXHVaog3A1EhOsR0cxhiCILC%2F%2Fpj9QAPjAcrycgDozHmZh8XhQPOPNXOZIKT47lGtMQQDCyK4iCmKskvu48u1saU2tP5tbto2ehd0wD0NIvMXoWaZMOKN7b8GOqUBG%2F4lfndLR6zyJQBvROpmbzQh6YPuScS%2BKmu%2F1xl2VF72uJkp%2FONA8X0OPx3lwzzgzG038EbCW2uqbw%2Fgi5msKbEpZPuA3UDKsnALQC44%2FmBm3VYLywe3UOyEfgNlOia8F%2B5E8bALSiwGkh%2BgRIC9uZehwOviZHucgD7whgUgK18BbqHctf6bvAbtHcyojibR0p3%2BoOu8DP50odOlm%2FRySTcY%2B%2BwX&X-Amz-Signature=675e7c6e05775310398bdad09ae02a9fa0268833ab3867e1d80c01ebea50f9b9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W6FS4YD%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T051602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCICvTVRWGAOga2wLrmnq96JpgSYAQYAFW%2BUGm3fubEc%2BWAiEArDV3dvP7yynbxPsvtAirWaIrF4q%2FmiMOew1xWdLFmZIqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BIFzZPdkYJ7%2FOvwSrcAyN6bIClaUJbYKSYIsvaTYZ7WnagbfcScOYDyTkyeMlKe4I5nkjqe1m1t9aPWaBSZoWfl%2B%2FKH6SS7dMqXVRt6ZtGaSzKEwmCZo3qnO9cGcOqCbKU0N74ZlaMXsQ88obAKap%2FnGIgU7NS0BjeRBu%2FXqBumu8JvCvjvDYWzODBh%2FOd81cd%2B%2FTF%2BLhd4LkPAgGXK5NybeHAGFxTdzu7xce5q7iD26T1Mwe3kWILBqH0sGXdq8NvwmbNuzbMiM%2B5CRe%2BGFGHkYxMJOhlghv71jnS3shigsL2WQcQrUaCFLVso%2BfZ0%2FSa0TbYcfpcz8kug7y3ZckLkKiyMh7JD5Kvukt5uG3zxVpvI0TqGMXVPz0zCCOpcoCiFj9E173hz23MirtoeQOy7rcBMalZ56ARjybRFaLH1dJcsxVIyYPhfDrSgkgbkfg%2Bl7KklLrQruqCDRQW%2Fw%2BnWNZjh68LKSwU6igimhT8A7OinJdCKJgl9yUSU2fBSU6Ug47Mpg7%2BuEchbagzJbGkg%2F7L%2BGhYXHVaog3A1EhOsR0cxhiCILC%2F%2Fpj9QAPjAcrycgDozHmZh8XhQPOPNXOZIKT47lGtMQQDCyK4iCmKskvu48u1saU2tP5tbto2ehd0wD0NIvMXoWaZMOKN7b8GOqUBG%2F4lfndLR6zyJQBvROpmbzQh6YPuScS%2BKmu%2F1xl2VF72uJkp%2FONA8X0OPx3lwzzgzG038EbCW2uqbw%2Fgi5msKbEpZPuA3UDKsnALQC44%2FmBm3VYLywe3UOyEfgNlOia8F%2B5E8bALSiwGkh%2BgRIC9uZehwOviZHucgD7whgUgK18BbqHctf6bvAbtHcyojibR0p3%2BoOu8DP50odOlm%2FRySTcY%2B%2BwX&X-Amz-Signature=6d01b3319048e672f80943e1c822f63aa73e87749f04bf58849409bc008263a7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

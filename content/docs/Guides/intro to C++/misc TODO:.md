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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQHZBBQP%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDH00WKDOiwdvwrvCjdcfzRtVlO9OH%2Ff%2Bg0smHyaDQCQQIgRJVp9vTLvmRDVe9cSfaaKwf2RB8BujaVfFxhclXq%2FsUq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDNnsY9yLbSwiUdR1RCrcA8jw4lTM6ohr2g5bNdrlVwAL1hzG3IoSZeL224XGrqodrAyO33NZrnt8dZGL0M9ol2WECASErBS2atvWEsVrml6UVanJl66FZmyWn%2FxEC62TSZyGnv4sI1jaDQQEpdKj7l7o4iZHmP9Yswr3CDz1i2fT9KBBMF51djStnIZ2FfHB5P00%2Fln1w4kS4dGg%2B6DWOLsNgJb3nKN610gO5d4209PgE2hqhxEZWc38P5JBokTzX1hEOTcE0MVmzd%2FDT5eW9OcXkjbd5hr%2FTxP42YSt9l7JswK6T2cVfJQcAGW4SYKuvutup5MdK1X2FmnyIOhnBYCn6%2F%2FM%2FK5FZ0l6UVRkVbiH8oDtg%2BcJyK5%2BX860og70V4lcju5SPhDyNNwB1n3FGOVV2pi39%2BQpSqh11%2BNare8uVMzZJuNDJvbY789GMth2VAXQ0ETcg27i83UPPCqWoAps02tksyA6JW8kD3TxI7mXhqiliLfkdjkINMJqV5KAASTV8%2FFmt7TvuZG4mea7PyJdNzYSYlOMCUqVMX0V57advm0AvF%2B4GQ8rEGrzwXuxsdFXS6e0R6lWM6oJzO4lQQlq9r7Ec7XDO5jlK1FnzEMyrVgcySnXOo3EUp%2FI2fg1QPqwU7mzAfCWlnogMMfMiMIGOqUBm2Fud7Vu1s4nmJmXPDU7sqPZ%2FbMuezp4AiSlkKlbb33hyl7bRixv1tIjEDL1R8rTNUqk6HbVy7ikQGyUE12pupR%2B44wkws2BNIAIcP6llCUJfNDP5h7r1WW7%2Bt2m93y6tTwvFb0dGJDsiisQJ%2B96yDmWbQ38gExlAPhsn3lv7hoety2xVrQbqSFVLBAAFFQqVBgmpNZFJOSnoR4YHtx5jBYblJcm&X-Amz-Signature=ec0430f9c7e173ef159fd6d58b9baabfc9e57d3e35469c257c1550a7e1b4fb8c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQHZBBQP%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDH00WKDOiwdvwrvCjdcfzRtVlO9OH%2Ff%2Bg0smHyaDQCQQIgRJVp9vTLvmRDVe9cSfaaKwf2RB8BujaVfFxhclXq%2FsUq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDNnsY9yLbSwiUdR1RCrcA8jw4lTM6ohr2g5bNdrlVwAL1hzG3IoSZeL224XGrqodrAyO33NZrnt8dZGL0M9ol2WECASErBS2atvWEsVrml6UVanJl66FZmyWn%2FxEC62TSZyGnv4sI1jaDQQEpdKj7l7o4iZHmP9Yswr3CDz1i2fT9KBBMF51djStnIZ2FfHB5P00%2Fln1w4kS4dGg%2B6DWOLsNgJb3nKN610gO5d4209PgE2hqhxEZWc38P5JBokTzX1hEOTcE0MVmzd%2FDT5eW9OcXkjbd5hr%2FTxP42YSt9l7JswK6T2cVfJQcAGW4SYKuvutup5MdK1X2FmnyIOhnBYCn6%2F%2FM%2FK5FZ0l6UVRkVbiH8oDtg%2BcJyK5%2BX860og70V4lcju5SPhDyNNwB1n3FGOVV2pi39%2BQpSqh11%2BNare8uVMzZJuNDJvbY789GMth2VAXQ0ETcg27i83UPPCqWoAps02tksyA6JW8kD3TxI7mXhqiliLfkdjkINMJqV5KAASTV8%2FFmt7TvuZG4mea7PyJdNzYSYlOMCUqVMX0V57advm0AvF%2B4GQ8rEGrzwXuxsdFXS6e0R6lWM6oJzO4lQQlq9r7Ec7XDO5jlK1FnzEMyrVgcySnXOo3EUp%2FI2fg1QPqwU7mzAfCWlnogMMfMiMIGOqUBm2Fud7Vu1s4nmJmXPDU7sqPZ%2FbMuezp4AiSlkKlbb33hyl7bRixv1tIjEDL1R8rTNUqk6HbVy7ikQGyUE12pupR%2B44wkws2BNIAIcP6llCUJfNDP5h7r1WW7%2Bt2m93y6tTwvFb0dGJDsiisQJ%2B96yDmWbQ38gExlAPhsn3lv7hoety2xVrQbqSFVLBAAFFQqVBgmpNZFJOSnoR4YHtx5jBYblJcm&X-Amz-Signature=b159cdc2618ed6ad52ed17d821b7600c1a7c39386becec9fe7473c743cbda09a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

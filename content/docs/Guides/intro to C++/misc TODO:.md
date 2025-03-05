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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EG67BRQ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyLk9KYiKJhPX5n%2FS%2Byi8fMG37McOED1avGZsEZldjfgIhAO99VOo2A2IcWDrK%2BeftJ4GQVBYTomUtWLPcqBLb7n1cKv8DCB0QABoMNjM3NDIzMTgzODA1IgxSNVhsb0Eat8E4i9kq3AOjhfSn6x5h4%2BzREtrmn0a2uQ%2FmWcezIb%2BP%2BhnJcw8P0MDtT9CSbKlFm7aIh4y%2BEY3KLBOSPuF1V%2BDqahBmf%2FmTIDNRfas%2BbRCUTgbIdufsAYGdQNgT6tvt4rezAL9AzTsld%2F0XKAabFtlIxm237sKEuXFj9AQ2zfyKF0rjlR5YFN9l83FTPEVhC95UwowzP0npGawNqVhLUVe0zbCB1XU6U1e%2FyNdWq4qAT7hJy66z2VkK3YFz1TiYpo3EGBspTaENHU7bKnvx%2BHegl%2Bu0Bvd7IBxECO5m%2F0zWr06JAzhlcX8jiH2RaWYpY%2FT%2Fs4dAm8vI2SSQukzFpNXiP4uEeF%2BP5IQDSdKBxchU3clPV7balq1nNilmT3LXcS1icbfatE6IpLIezh7kiqZVyG1Me8oi8XnUU5Pu%2F6MJqo%2FoS7Br2v%2FwX81CTp7rmE8TwTAsfoQeObcVDfICnulnBDggvfZRH0Ev848rgfr1QTTyB6m1avHUpB%2BeCitejRWkyQ5aCLzz07V%2BtxJmF0JNIRyAS0ClvYU7N2A8JkqSGNz7nKg0MaX%2FpX1pc6Ws6QW8ffNmd3y%2Bqf9vvVykzHbZV4tBYqSwM%2BdKQkSk6qRU49FjEJfU6LIQaZfqARNf22ITlzDs4KK%2BBjqkAXVN1T%2BuQAqbH1JSoE9Ahd1hQ2E9brVZ434c4HVH5R5t4UEjuyTGVycuBgLub%2BQsibbay13y3YaLDAVN3H8%2Bo4zy%2Btz0VH4UHWsSQV4yYOmuEYnOsrZ7pBcK3Ekp7KEKJcPDrFV77sPcpLo545FPLXiYf7csFgIbJN4Hy0X1wGFdkHsJIuC88FHVJ4V9EqBgt9ndV6XWF9XZFAXra%2FMT6F%2B8KJrY&X-Amz-Signature=467fa53da4a545e04bb67a2671e4569982290e3dc43b7adc3751b76b481c9159&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EG67BRQ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyLk9KYiKJhPX5n%2FS%2Byi8fMG37McOED1avGZsEZldjfgIhAO99VOo2A2IcWDrK%2BeftJ4GQVBYTomUtWLPcqBLb7n1cKv8DCB0QABoMNjM3NDIzMTgzODA1IgxSNVhsb0Eat8E4i9kq3AOjhfSn6x5h4%2BzREtrmn0a2uQ%2FmWcezIb%2BP%2BhnJcw8P0MDtT9CSbKlFm7aIh4y%2BEY3KLBOSPuF1V%2BDqahBmf%2FmTIDNRfas%2BbRCUTgbIdufsAYGdQNgT6tvt4rezAL9AzTsld%2F0XKAabFtlIxm237sKEuXFj9AQ2zfyKF0rjlR5YFN9l83FTPEVhC95UwowzP0npGawNqVhLUVe0zbCB1XU6U1e%2FyNdWq4qAT7hJy66z2VkK3YFz1TiYpo3EGBspTaENHU7bKnvx%2BHegl%2Bu0Bvd7IBxECO5m%2F0zWr06JAzhlcX8jiH2RaWYpY%2FT%2Fs4dAm8vI2SSQukzFpNXiP4uEeF%2BP5IQDSdKBxchU3clPV7balq1nNilmT3LXcS1icbfatE6IpLIezh7kiqZVyG1Me8oi8XnUU5Pu%2F6MJqo%2FoS7Br2v%2FwX81CTp7rmE8TwTAsfoQeObcVDfICnulnBDggvfZRH0Ev848rgfr1QTTyB6m1avHUpB%2BeCitejRWkyQ5aCLzz07V%2BtxJmF0JNIRyAS0ClvYU7N2A8JkqSGNz7nKg0MaX%2FpX1pc6Ws6QW8ffNmd3y%2Bqf9vvVykzHbZV4tBYqSwM%2BdKQkSk6qRU49FjEJfU6LIQaZfqARNf22ITlzDs4KK%2BBjqkAXVN1T%2BuQAqbH1JSoE9Ahd1hQ2E9brVZ434c4HVH5R5t4UEjuyTGVycuBgLub%2BQsibbay13y3YaLDAVN3H8%2Bo4zy%2Btz0VH4UHWsSQV4yYOmuEYnOsrZ7pBcK3Ekp7KEKJcPDrFV77sPcpLo545FPLXiYf7csFgIbJN4Hy0X1wGFdkHsJIuC88FHVJ4V9EqBgt9ndV6XWF9XZFAXra%2FMT6F%2B8KJrY&X-Amz-Signature=0ecb226312463a48c1dfdfe5a427a8aec00ae90bdbfe6eb04aaf12d3c32b8373&X-Amz-SignedHeaders=host&x-id=GetObject)

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

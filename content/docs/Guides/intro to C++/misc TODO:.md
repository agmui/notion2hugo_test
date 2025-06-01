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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HICCBPS%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T121415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDxXkZ3B%2B37urc%2BtkWfxkwRCy0JS7YpjEIF6d%2BkIYRP%2BQIgYGapUz%2BFWKWC3O25LS0fiPXLFacDSE3rLKWQu05lQlUqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFh5%2BO%2Fwl6KZ34qg2yrcA7I2Qv9RjsfS78f7sGBKVv3NSrKUdTQx10DPeGenqEp1qtm9zyBo4a%2BQ6OQXKDNFM3bI8t%2Bdo9tiFvz4U2NAtwQmeJsQmRwRevGJRTyoNCvXCc6UtQ4D%2BWRICUMJeTtywcpctTgBpLxfcc9psGwZ5GGy7jN5%2F8VKIzIsFtukB%2B1ugBKwN5BLQ2vXLfzooW8%2BYTPFp83ZlTYDH4vgo54PSlm%2Bwt3AjsjnTk1tYSmX6PBC4myaBkBej4AufnMHVke6%2FJuzYQPfsU%2BRwXFvMqNeLrhaLHIiDIKwPszTe7vxuivgHNFwNYZrsGcbxvV8wrIvlKY%2Bb7EKh6rnRQ1wegU2Al9IYOMtmtVohJef8%2B0H61S9CnBqPhOLQx4M8C3fg7S%2Fl%2F8ppvfN%2FdrbxTDXtWuuEiNHjbVOVd8yVN7RIdRur6QADZDGKdUelxyFlVndJpGonhX05FT3gURgnXgOXvnm0r94wcXYIefgDFR86X0ai5kuar4doAPsC6%2FoIDllEleyTCRwMhOeXuF6g%2FuHh7dW9rw3kBK%2Ba4LAEhy30F2ChnKdwR7c1u419O1vt3YNkzVrFEkgQf%2FTe1a95VGAeJqEWnPxvN9CjuPj8ojLDZ6q8YZLk94pVnxPFpqP8g9sMLTf8MEGOqUBy70IOm9H4Hu3hrzRj4%2FEt5PAXpNTxIZ8qDxMWIPrmwS2Jat9cPGOj%2Fy0i4XBMF3%2BRmA%2BQQ33Y%2BJwNN9JdnFBxjvEs1NAGV5XAXywZSzS0Dh6kkwSimUzUB%2B5S7p70t9ZY5xBt0Rgan5D%2FiD8FQVmR0Nugnqptf0w1%2BiAyZsj8SjYZ56TsDBUCXHpNX86iZ64HNbG05ZyZnhZpmIc%2Fvj77irVNnqP&X-Amz-Signature=0a806e5989bc80300efa277b9d0b5cbd4836a7d1c026343ad6c1283f8fe67a59&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HICCBPS%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T121415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDxXkZ3B%2B37urc%2BtkWfxkwRCy0JS7YpjEIF6d%2BkIYRP%2BQIgYGapUz%2BFWKWC3O25LS0fiPXLFacDSE3rLKWQu05lQlUqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFh5%2BO%2Fwl6KZ34qg2yrcA7I2Qv9RjsfS78f7sGBKVv3NSrKUdTQx10DPeGenqEp1qtm9zyBo4a%2BQ6OQXKDNFM3bI8t%2Bdo9tiFvz4U2NAtwQmeJsQmRwRevGJRTyoNCvXCc6UtQ4D%2BWRICUMJeTtywcpctTgBpLxfcc9psGwZ5GGy7jN5%2F8VKIzIsFtukB%2B1ugBKwN5BLQ2vXLfzooW8%2BYTPFp83ZlTYDH4vgo54PSlm%2Bwt3AjsjnTk1tYSmX6PBC4myaBkBej4AufnMHVke6%2FJuzYQPfsU%2BRwXFvMqNeLrhaLHIiDIKwPszTe7vxuivgHNFwNYZrsGcbxvV8wrIvlKY%2Bb7EKh6rnRQ1wegU2Al9IYOMtmtVohJef8%2B0H61S9CnBqPhOLQx4M8C3fg7S%2Fl%2F8ppvfN%2FdrbxTDXtWuuEiNHjbVOVd8yVN7RIdRur6QADZDGKdUelxyFlVndJpGonhX05FT3gURgnXgOXvnm0r94wcXYIefgDFR86X0ai5kuar4doAPsC6%2FoIDllEleyTCRwMhOeXuF6g%2FuHh7dW9rw3kBK%2Ba4LAEhy30F2ChnKdwR7c1u419O1vt3YNkzVrFEkgQf%2FTe1a95VGAeJqEWnPxvN9CjuPj8ojLDZ6q8YZLk94pVnxPFpqP8g9sMLTf8MEGOqUBy70IOm9H4Hu3hrzRj4%2FEt5PAXpNTxIZ8qDxMWIPrmwS2Jat9cPGOj%2Fy0i4XBMF3%2BRmA%2BQQ33Y%2BJwNN9JdnFBxjvEs1NAGV5XAXywZSzS0Dh6kkwSimUzUB%2B5S7p70t9ZY5xBt0Rgan5D%2FiD8FQVmR0Nugnqptf0w1%2BiAyZsj8SjYZ56TsDBUCXHpNX86iZ64HNbG05ZyZnhZpmIc%2Fvj77irVNnqP&X-Amz-Signature=38dcdd8b71b676d6c186b27c954c94c1d1286b9ba1ce762274c956fc55b6446e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

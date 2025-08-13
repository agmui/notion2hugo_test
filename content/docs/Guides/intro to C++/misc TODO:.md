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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXXTSTH3%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDU6%2BiaCZrkDDsZV9qF7P6xsKBolZw0M32DIQOLHye2LgIgOMuRxrD%2B8SOGAA492DI28%2BNTaJvIjB3Ff4s8I3v2WIUq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDLCnFMQNpWICBamXkyrcA2Bz7kDtXeSU7aFLFex76oNUVOpF53WzGQME1G83jH7LG0mQkrr9bkR9H2NHKTkZTJIcl9dEtp3gDyuUYokp6HhMAYqZWGHZhCffknkvwyAyeAWk4FF44sYowyjIZGIup5QbrXgXqZ8Oxd9YU4kF0PQ7cklyM6S7CQeoQpTw25nHUNet8JxChoAFiQbptVHFgl0hzhL54EelLvCzvhcNdtk51RVLHBgaRiRabMNpG5QqDHHh52kauCq%2F9R87vY%2FkPgftdk%2F%2Fe6RDMW6jhz%2FOQ5niq62QVaPN8tl%2FK6oWFObQqAxWzI6BMycSBT8LJAIkZY2WBS4YYKfbI1wEiU3o7tQo18y6U8YqT9oWdRkfFqm2N3Jr2dyoqUckTiJ2uRWfunI3ifgQwn2wdnBDMRuNfceJYIX3FnGn9ti4ftSg0AoY0j%2FOBaLMJpsq5o7k2s26%2FAvToDY7O39o%2F5WMjz1ZBDDaPAid6zSDjOnR6nyS7UQun0o1lJiFxKUUlfOdcqkdhK%2BcHRAUZFZDjxw9d5Ph6m%2BPW29pjaTYYpUDDzXVekiop%2B%2BmRnd%2BkpWYjfPkpyn8KoOsMbP5hilTDY5EDlw0KwHAA8s5P%2F%2FWJiRfgTjSvA6bhm0pf6fqZGdYJm6FMPrQ8MQGOqUBnZbsgeCR%2FzEslaNxAe2i8C6m8V04dYzor74R0%2BtJBU9wIGtmnUjVQDT%2FrlN6s2bek2E8fjCM4nsoepx%2BNSF8AS6%2B6viDHAkukLvV3%2FsKuxjJysags40Fl359Z0O5ej6%2BFpz3ayu8Ry9SSwN2nwAa1mXHZ5uFe7YRptMPIT3Nk48thvR4%2BBLSyMpM7rtrhrmFpnu%2FgrkfwSv1PMe2Z%2FIBRIk234Fe&X-Amz-Signature=4de8c9e5c62d5cbbd832e161bd51d910057e80b389c67af3ece91cc00f7b18e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXXTSTH3%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDU6%2BiaCZrkDDsZV9qF7P6xsKBolZw0M32DIQOLHye2LgIgOMuRxrD%2B8SOGAA492DI28%2BNTaJvIjB3Ff4s8I3v2WIUq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDLCnFMQNpWICBamXkyrcA2Bz7kDtXeSU7aFLFex76oNUVOpF53WzGQME1G83jH7LG0mQkrr9bkR9H2NHKTkZTJIcl9dEtp3gDyuUYokp6HhMAYqZWGHZhCffknkvwyAyeAWk4FF44sYowyjIZGIup5QbrXgXqZ8Oxd9YU4kF0PQ7cklyM6S7CQeoQpTw25nHUNet8JxChoAFiQbptVHFgl0hzhL54EelLvCzvhcNdtk51RVLHBgaRiRabMNpG5QqDHHh52kauCq%2F9R87vY%2FkPgftdk%2F%2Fe6RDMW6jhz%2FOQ5niq62QVaPN8tl%2FK6oWFObQqAxWzI6BMycSBT8LJAIkZY2WBS4YYKfbI1wEiU3o7tQo18y6U8YqT9oWdRkfFqm2N3Jr2dyoqUckTiJ2uRWfunI3ifgQwn2wdnBDMRuNfceJYIX3FnGn9ti4ftSg0AoY0j%2FOBaLMJpsq5o7k2s26%2FAvToDY7O39o%2F5WMjz1ZBDDaPAid6zSDjOnR6nyS7UQun0o1lJiFxKUUlfOdcqkdhK%2BcHRAUZFZDjxw9d5Ph6m%2BPW29pjaTYYpUDDzXVekiop%2B%2BmRnd%2BkpWYjfPkpyn8KoOsMbP5hilTDY5EDlw0KwHAA8s5P%2F%2FWJiRfgTjSvA6bhm0pf6fqZGdYJm6FMPrQ8MQGOqUBnZbsgeCR%2FzEslaNxAe2i8C6m8V04dYzor74R0%2BtJBU9wIGtmnUjVQDT%2FrlN6s2bek2E8fjCM4nsoepx%2BNSF8AS6%2B6viDHAkukLvV3%2FsKuxjJysags40Fl359Z0O5ej6%2BFpz3ayu8Ry9SSwN2nwAa1mXHZ5uFe7YRptMPIT3Nk48thvR4%2BBLSyMpM7rtrhrmFpnu%2FgrkfwSv1PMe2Z%2FIBRIk234Fe&X-Amz-Signature=d7291d4d201e14f751c9a30ce0a28814690f06609fc27cfeaff0fcc8a10d64c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

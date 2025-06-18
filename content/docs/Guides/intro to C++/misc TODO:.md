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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD5GJSX3%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T071021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZ15JoVHwQX%2Bz%2F2ddAjjp0Kj7rzGTLQUbLC0XpscR9EAiAZw1BeqUyJfh5hs7OqtyjZSUsCnjH%2F9HFvz1%2BrWMsVJCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwDqkI4Agm1a4hX6qKtwDM7ne1XqRJ0Z5xNqyYbONnZdM6qJ8fs9kA5UtNgIznpeGkJxZMkYhxWV7nr%2FFx%2Fr8eQ%2B7dL2JJZkseQeN%2By6msDWYGHdvhVRX1T%2FqmlgkJwSkky3Mpn80p4p0oJA7ronFWPOiXCnO9P6D76%2BSHXZ2oT0XdfZYfQ03HjPqHz91fU754h9TbHc5Ctpf7LWokw2mjweetMQC%2BBJvDRFoo8UeicMcjweKBQkdDiArFg6TI%2B3AYSKKT57ONmxbKXfLIxOVRN65ioUJioYyjLQ8re949fmStsimd%2FRo2uQUESG8J%2BKevzw60uKdzn6f7qYBZfHgH22n5SmhZqN7biZ8Ldb7lBrDVG01Ecbe25dxwpCihjb6aNtuQc5PQvGluMsu26Z%2BUqXOry15Vwg66SDECeswU%2Bj16cDaoYkFPhWAbfRdAQ2ciuDw%2B2F9ys3W3vLRmOO7f%2BEmUbLXluojE51p36jVQEZjiXoYD7Or6NU%2FScO415BwNQk65G0kkjGLWzBU0WVj0byL%2F3TdMaWR22xXsgVDe2TNBgvhYi8xk1Ko%2FUhApwG%2BgREY8sHO2FlDalqGmrBDsJnW%2FlVmAakjSA4rMyBbJBQCmv9w1LbcU9UkbkPXm2cR732kjFdKvB2vi24w6qPJwgY6pgHcWSZzauQO%2BIlrfz7sAvgw0uJo6Ap8ABj8lNSZyqj9UR%2BsukTJinmCrbdLCyWLh%2BKs00uqLnkK7yStE7IUVyMkVo%2BI1x8I3h6QgVEodL74K2LqyImC%2BiSDdl9OC92LqCdxsP71b1uHg%2FHPZdxtJ8lf4DrjOqmXlAHwmX08WkX%2BRrXarMv2ybPDQvKwpcmlG4hbUsuez3mIhhHQDVKRryUEyQgJlayI&X-Amz-Signature=a5ca0eac4931e5f811d55d10c1e74083269cbf4ed39d34fa0c5dcdd6af103735&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD5GJSX3%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T071021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZ15JoVHwQX%2Bz%2F2ddAjjp0Kj7rzGTLQUbLC0XpscR9EAiAZw1BeqUyJfh5hs7OqtyjZSUsCnjH%2F9HFvz1%2BrWMsVJCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwDqkI4Agm1a4hX6qKtwDM7ne1XqRJ0Z5xNqyYbONnZdM6qJ8fs9kA5UtNgIznpeGkJxZMkYhxWV7nr%2FFx%2Fr8eQ%2B7dL2JJZkseQeN%2By6msDWYGHdvhVRX1T%2FqmlgkJwSkky3Mpn80p4p0oJA7ronFWPOiXCnO9P6D76%2BSHXZ2oT0XdfZYfQ03HjPqHz91fU754h9TbHc5Ctpf7LWokw2mjweetMQC%2BBJvDRFoo8UeicMcjweKBQkdDiArFg6TI%2B3AYSKKT57ONmxbKXfLIxOVRN65ioUJioYyjLQ8re949fmStsimd%2FRo2uQUESG8J%2BKevzw60uKdzn6f7qYBZfHgH22n5SmhZqN7biZ8Ldb7lBrDVG01Ecbe25dxwpCihjb6aNtuQc5PQvGluMsu26Z%2BUqXOry15Vwg66SDECeswU%2Bj16cDaoYkFPhWAbfRdAQ2ciuDw%2B2F9ys3W3vLRmOO7f%2BEmUbLXluojE51p36jVQEZjiXoYD7Or6NU%2FScO415BwNQk65G0kkjGLWzBU0WVj0byL%2F3TdMaWR22xXsgVDe2TNBgvhYi8xk1Ko%2FUhApwG%2BgREY8sHO2FlDalqGmrBDsJnW%2FlVmAakjSA4rMyBbJBQCmv9w1LbcU9UkbkPXm2cR732kjFdKvB2vi24w6qPJwgY6pgHcWSZzauQO%2BIlrfz7sAvgw0uJo6Ap8ABj8lNSZyqj9UR%2BsukTJinmCrbdLCyWLh%2BKs00uqLnkK7yStE7IUVyMkVo%2BI1x8I3h6QgVEodL74K2LqyImC%2BiSDdl9OC92LqCdxsP71b1uHg%2FHPZdxtJ8lf4DrjOqmXlAHwmX08WkX%2BRrXarMv2ybPDQvKwpcmlG4hbUsuez3mIhhHQDVKRryUEyQgJlayI&X-Amz-Signature=43c07856cb3241802a77ae6aaa52855509d1771433669b25a3c53763543aef54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZHOZEPS%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKQ3SjRb94%2FvU%2By2kfON07hxnRD3skrrUTd0MlxJG2FQIhAIZ6dwfI0vgHQTtDoT%2FX5lkvS8uNY8I%2B5uoOKago6Qc1KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO8w6wguYdRF%2BtcQIq3AMPrWEsmgdL3GkUwKP8HYfTk%2BvqK9BQ2p1MANokovNlW7VtO4Fj5sfbD%2Bh9CdFA1q%2BgMYRDXwp7kNWOMSSjGY8oSW70OVFZlQM3soQggy35wiYFxn1lnILlOdfR4IcyVANUC4H8uvm7npmePYalxVBdcsA5s%2BxdKEpJWWpN78Aqee%2B2FXEYxGsqJE9r20LFMZRVdXb%2B%2BxY3gbipUsPsCrgcOcIFhhEJ0d3WkRV4sG0NejoqBZ%2Bo4YV3XgZi9g73p4%2FBsFzhA9LVK1iexRGSsauSuF%2F8I2Swz%2FU9i7Qd8e5rTc0jPqedj9IXwHAl34a%2F%2BrCUTFEA9ZE5EHS%2BQBws5BCrC088WKuREy7vHAM9Z6JJboi%2BcSg6SYA%2FcW5jh4QWsOiFaC3SFWA2Fqbsn%2FMKfuNMLyoVx4VtVyROx%2FkC1kHzlahzyH3gwwFVHF7zoq6%2FLapTFxvv%2FIy9lEMsSYW4298uYdrrY3EDg%2BdJv6cJkTYx6QOLbPrCtyXZ5rILfM5xkI3Sg4OKo4rJ%2FuDBGYAhIGckGZfmZXjHKKDsN3IqCMllFciQOAy%2B%2FMnona4UuatZUACrtKIv7EO%2Fdr6%2B8TmFSfEKrstkmJhh9NRDIZvg3ipngLyzoJqjHkwwwWP1EjCZnJa%2BBjqkAYP68v9PtzFtmaxgh0QhBJ8jjpJK1iVvheyQtaTZm%2B7z6Im9KHw%2B8L8tNxCyUnEPbpq6Vn%2FYyKqL6dpbBUYFzQrpWxEYOZgEAlW%2BZIDz3NnIzDIDI6QFuQS2JMVKnQmQT4mwZV85G2v3muZJjoJ8sgsd8I3%2FulqNHlxSv1add%2BJRZmOxjlPwAVhH%2Bil5EqwRN8C6d8pYZOP4onbmO5CJTM7ka2Re&X-Amz-Signature=c76dcecc65ef498de51d4f41ea4b81a2ac479f22729249df4fa28da288633601&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZHOZEPS%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKQ3SjRb94%2FvU%2By2kfON07hxnRD3skrrUTd0MlxJG2FQIhAIZ6dwfI0vgHQTtDoT%2FX5lkvS8uNY8I%2B5uoOKago6Qc1KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO8w6wguYdRF%2BtcQIq3AMPrWEsmgdL3GkUwKP8HYfTk%2BvqK9BQ2p1MANokovNlW7VtO4Fj5sfbD%2Bh9CdFA1q%2BgMYRDXwp7kNWOMSSjGY8oSW70OVFZlQM3soQggy35wiYFxn1lnILlOdfR4IcyVANUC4H8uvm7npmePYalxVBdcsA5s%2BxdKEpJWWpN78Aqee%2B2FXEYxGsqJE9r20LFMZRVdXb%2B%2BxY3gbipUsPsCrgcOcIFhhEJ0d3WkRV4sG0NejoqBZ%2Bo4YV3XgZi9g73p4%2FBsFzhA9LVK1iexRGSsauSuF%2F8I2Swz%2FU9i7Qd8e5rTc0jPqedj9IXwHAl34a%2F%2BrCUTFEA9ZE5EHS%2BQBws5BCrC088WKuREy7vHAM9Z6JJboi%2BcSg6SYA%2FcW5jh4QWsOiFaC3SFWA2Fqbsn%2FMKfuNMLyoVx4VtVyROx%2FkC1kHzlahzyH3gwwFVHF7zoq6%2FLapTFxvv%2FIy9lEMsSYW4298uYdrrY3EDg%2BdJv6cJkTYx6QOLbPrCtyXZ5rILfM5xkI3Sg4OKo4rJ%2FuDBGYAhIGckGZfmZXjHKKDsN3IqCMllFciQOAy%2B%2FMnona4UuatZUACrtKIv7EO%2Fdr6%2B8TmFSfEKrstkmJhh9NRDIZvg3ipngLyzoJqjHkwwwWP1EjCZnJa%2BBjqkAYP68v9PtzFtmaxgh0QhBJ8jjpJK1iVvheyQtaTZm%2B7z6Im9KHw%2B8L8tNxCyUnEPbpq6Vn%2FYyKqL6dpbBUYFzQrpWxEYOZgEAlW%2BZIDz3NnIzDIDI6QFuQS2JMVKnQmQT4mwZV85G2v3muZJjoJ8sgsd8I3%2FulqNHlxSv1add%2BJRZmOxjlPwAVhH%2Bil5EqwRN8C6d8pYZOP4onbmO5CJTM7ka2Re&X-Amz-Signature=c3d0d86cb5ee690f4ac06eb43bfd46a4270c0c3b4c4d4732c50a401780ebe998&X-Amz-SignedHeaders=host&x-id=GetObject)

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

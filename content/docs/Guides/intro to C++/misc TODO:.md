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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMTXNAIA%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T150714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzIKr8JLBYG3gYec8PyLAXmBFLJLO%2FNSgl3t6QzP5mqAiBHPljVwDEN8qP5I8J6iUifjg1oMTVPlPzlNlDc723Tryr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMbxpLTvw7nQgy2XiXKtwDH2c%2BfntiM4Q8swLD%2FUEDeWNEtMSFc2Th%2Fjl9WCvo1qOJOeen7P7Si%2F3BL6XYpKQmONvbgyG6KgPaOY1oBKtX0d7VysoW2yA8hY1oFLfYZqNGNPhUCZgGdJIL42PGzkMWVzajLMs5HN5uV%2BQ3%2Fse7hjaFjlJ6WpNaC7bKkkAMx8%2F1tsPnaUMxU3MHLvZXU3NoILoAieWEyC4hjk7VIaYEaUUNz8xLnDkK9N%2ByosLbyuI9WYVkD8eb5M%2Bpfh2U8lVtLjNIRz6Te7j0J%2FVDWplC9TsohoRr1dCUY8gUaTiLonyrE9%2FMxIZgh97ccJwMwN8h36my2LRYjB%2BtUMmmeH%2BitXCoDFPOwHCrppLQxc9od8i77QDjmmEuDJIHEkz4ADKOF8Havf8hemFZ%2FxuUsnotPJU7akZBkF5FR4oaqfQ1uBOUVD1pBcHR5tKAnHB16gybsrSZFRtj18KX2Dpre2ZixMAJCzvgmTpn9uBFRYsVH0vh7gwdnVTPlyPyHUzoXfA5VHckEZxHSAALXMmPNUCboJFZnWnr7tJjxM5lwrABCnFAyhPgXv6vnkZxEzMWOK4Hxw0Nmg%2FD75EKWnr8edZ%2FUoOBtbx7WqoING2oVT6RfBb4zjOO9rWvVsWAe1EwsraiwQY6pgFSRHUIdcLHbZWt5f7JzfriGk4Qudwdw%2FniHCSpACJa2fsW%2FeQVXqm8vNhdHwXwo6vfq0EABcRWGABejCQ8oGjFqCh0%2FOgTZCW0AIbkJEWuniise6139UspNa7KKbA5xed%2F198N4R7CL3A%2B9jTYAhUZc%2FAu5hpw3Qhm0UikSttmZ6Acp%2Ba8rqya3hwP9WOS0i%2BxPZFenhyWGKbB%2BBF0%2FQx8Eyiaxg7e&X-Amz-Signature=cae339c5eb6aa09fd67dab98ac082f116abd6c9dac65af5d83278e5f2c70228a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMTXNAIA%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T150714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzIKr8JLBYG3gYec8PyLAXmBFLJLO%2FNSgl3t6QzP5mqAiBHPljVwDEN8qP5I8J6iUifjg1oMTVPlPzlNlDc723Tryr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMbxpLTvw7nQgy2XiXKtwDH2c%2BfntiM4Q8swLD%2FUEDeWNEtMSFc2Th%2Fjl9WCvo1qOJOeen7P7Si%2F3BL6XYpKQmONvbgyG6KgPaOY1oBKtX0d7VysoW2yA8hY1oFLfYZqNGNPhUCZgGdJIL42PGzkMWVzajLMs5HN5uV%2BQ3%2Fse7hjaFjlJ6WpNaC7bKkkAMx8%2F1tsPnaUMxU3MHLvZXU3NoILoAieWEyC4hjk7VIaYEaUUNz8xLnDkK9N%2ByosLbyuI9WYVkD8eb5M%2Bpfh2U8lVtLjNIRz6Te7j0J%2FVDWplC9TsohoRr1dCUY8gUaTiLonyrE9%2FMxIZgh97ccJwMwN8h36my2LRYjB%2BtUMmmeH%2BitXCoDFPOwHCrppLQxc9od8i77QDjmmEuDJIHEkz4ADKOF8Havf8hemFZ%2FxuUsnotPJU7akZBkF5FR4oaqfQ1uBOUVD1pBcHR5tKAnHB16gybsrSZFRtj18KX2Dpre2ZixMAJCzvgmTpn9uBFRYsVH0vh7gwdnVTPlyPyHUzoXfA5VHckEZxHSAALXMmPNUCboJFZnWnr7tJjxM5lwrABCnFAyhPgXv6vnkZxEzMWOK4Hxw0Nmg%2FD75EKWnr8edZ%2FUoOBtbx7WqoING2oVT6RfBb4zjOO9rWvVsWAe1EwsraiwQY6pgFSRHUIdcLHbZWt5f7JzfriGk4Qudwdw%2FniHCSpACJa2fsW%2FeQVXqm8vNhdHwXwo6vfq0EABcRWGABejCQ8oGjFqCh0%2FOgTZCW0AIbkJEWuniise6139UspNa7KKbA5xed%2F198N4R7CL3A%2B9jTYAhUZc%2FAu5hpw3Qhm0UikSttmZ6Acp%2Ba8rqya3hwP9WOS0i%2BxPZFenhyWGKbB%2BBF0%2FQx8Eyiaxg7e&X-Amz-Signature=d27c0d12d4bde384a99d55bd48660fcdb3f65bf1f7a43a8425c394811c1f9c23&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PG2IGII%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T110714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHDphGHKszWXI%2BXoIId4h8EUnjYeAgFWhwtXGuGqTQDQIhAKiepth3%2FhtNWAYKVmZ6vd4Hsb7uOW88243wnrUl244AKv8DCHIQABoMNjM3NDIzMTgzODA1Igwb52NtLbue8xfz9yMq3AOPdzYPaa7zQvKHV0JyZ%2BEYyy2FAjv3J4fkAyt4abQPNJGrSB8dNwl7gI38ook29lef3VZUq5Xbq%2Fj6YFZ6R314YD49FAuWPCnmFM1ecb%2BXOk04FspzaKYBAHOTUmv7qBlP6z6zEv1oYKiNkvP1kIR1pqM9G8m8fxPVFYlDXHC0gotXrqKJMyKrbMFQGQNgvo6qajuwpGM7ZzWQ7daJLNMpTWnrpzVyijPD3tFafrB2CZkXomQkUp%2FhANcWCRf8Z7foPNvjtVmc7YV842XjP2xeYWpSUK1iq1XJX%2BrPNUsmaj1ys5p%2FOBcrTtsoLy49E2lvspyg6NGWDzxfYCjULbASR1vPAcdd%2FGoTP6%2FkdN%2BIpbhZvIZUkvllACCW1h5XlCy6J002%2B2E9BpMy8DGgRFMHJMHCq%2BVUjG6ixZXvrCvUiUCiiD0Hgx96n6Ko4liLL9JbWyg4hl1gGoYKjb5R6BsyChIXPJKdx4Dbpf8ly3b%2Fw81ILco1331wdn27L7TCs7k%2BpuF9nUzfSYDdgrlTnTknxKtGeMA2XIuE72ctO7aVKYqMbdUbz4%2Fv1fFhrQl32B56fcMotehpCenHrgmHxdE2zYLPYhpWgjCirjs6gDZPlEzDpM7hgWQimehKJzCCrYjABjqkAUMgsWrtFQ9fo3S%2F04rh%2FPth%2FvGcxWln3rvwk%2BjgaHmYYzp8uUqz7Yn0m0nPKnRF55UYbAJZMz6GIfHgqgugu15%2FGY4RNYPZp%2BHyqhw2qVIAJzlhjQfF53vr7MnIO6oroCfS4FD25x5pOMGP9K3gdL8KYicl1s%2BVzlZueP0%2Buzzvj64zYJtlyaMBzuhhzPHkwfezFK%2BmPzWCKrmgBAUBpryPL6Wl&X-Amz-Signature=4a61238363f9648d3c1829b68be6e4fe0222ec7174f0a7df62545a8c7109eb44&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PG2IGII%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T110714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHDphGHKszWXI%2BXoIId4h8EUnjYeAgFWhwtXGuGqTQDQIhAKiepth3%2FhtNWAYKVmZ6vd4Hsb7uOW88243wnrUl244AKv8DCHIQABoMNjM3NDIzMTgzODA1Igwb52NtLbue8xfz9yMq3AOPdzYPaa7zQvKHV0JyZ%2BEYyy2FAjv3J4fkAyt4abQPNJGrSB8dNwl7gI38ook29lef3VZUq5Xbq%2Fj6YFZ6R314YD49FAuWPCnmFM1ecb%2BXOk04FspzaKYBAHOTUmv7qBlP6z6zEv1oYKiNkvP1kIR1pqM9G8m8fxPVFYlDXHC0gotXrqKJMyKrbMFQGQNgvo6qajuwpGM7ZzWQ7daJLNMpTWnrpzVyijPD3tFafrB2CZkXomQkUp%2FhANcWCRf8Z7foPNvjtVmc7YV842XjP2xeYWpSUK1iq1XJX%2BrPNUsmaj1ys5p%2FOBcrTtsoLy49E2lvspyg6NGWDzxfYCjULbASR1vPAcdd%2FGoTP6%2FkdN%2BIpbhZvIZUkvllACCW1h5XlCy6J002%2B2E9BpMy8DGgRFMHJMHCq%2BVUjG6ixZXvrCvUiUCiiD0Hgx96n6Ko4liLL9JbWyg4hl1gGoYKjb5R6BsyChIXPJKdx4Dbpf8ly3b%2Fw81ILco1331wdn27L7TCs7k%2BpuF9nUzfSYDdgrlTnTknxKtGeMA2XIuE72ctO7aVKYqMbdUbz4%2Fv1fFhrQl32B56fcMotehpCenHrgmHxdE2zYLPYhpWgjCirjs6gDZPlEzDpM7hgWQimehKJzCCrYjABjqkAUMgsWrtFQ9fo3S%2F04rh%2FPth%2FvGcxWln3rvwk%2BjgaHmYYzp8uUqz7Yn0m0nPKnRF55UYbAJZMz6GIfHgqgugu15%2FGY4RNYPZp%2BHyqhw2qVIAJzlhjQfF53vr7MnIO6oroCfS4FD25x5pOMGP9K3gdL8KYicl1s%2BVzlZueP0%2Buzzvj64zYJtlyaMBzuhhzPHkwfezFK%2BmPzWCKrmgBAUBpryPL6Wl&X-Amz-Signature=dc81ef04c47b7d8f2ea4180e462e8406020ddf508be83f9093779f272f63b2ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2Y6EOOX%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T081253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BiBfwVJghNGSneZ%2BN749eaQVtEJGJmhE9neG%2FuKq5BwIgH78MPo0Rnrr58r33Wcw0pDNo17nFnb1%2BLJSS3W82R%2BgqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCX2sV70m54i7qanircA23BZwp7Qa2GodytxmjeMc1Sn71ER66me9SU5KLmVxGNXqvqkGg1Mcms5x%2BcupdOdl6iyCIrshsOKdBfslCThvK1rBgs%2FnRm8p2NOKJgN74R7C0Notbsz9uerTIPxcHyhadBCegdNFt1ZXxb7wLeX6aMWJ8P5LPg5dXS1Tt7EvT0qvpRxc%2BUQMwd4PT0F0rQMYaFGJKWPdJkUh107470pO4Eayd5tCzim4eAa%2Fh1b0fUJOLpISVkaghI6zISyrGgAY8gL07vTQ2K3VgOGx4uwvqBK4GkZhBXeKmNTbIYCC9jNMRu27tR%2Bo9ZX44dn4Eaul1nOtjNhjbI8HO3gtjRfmh29wzU1Uu6Yh6TFT5%2BVRuvNe3gswY2CQfywFA5CIxVtmImYMXjCORuBbA6LQzNU9uQD1%2Ff4An2HWFYEe%2Fe6fAZyrUDgng45e2kYW5c3r9CucagcCm3mmKQlFaYR01wJw1xHblpuf05dVH7Q4FDYgFFY4Bm%2BlCyfAhnWIR%2B8TM77nSn7441EKQUGi07aKhHaS4znYeiQhX%2F%2Bi%2BcS0XIKeIJopw4DGcioRAcPQDRp59KOR%2Blhzf8i28wK%2BrRQ%2F4nfH29bEVbyBUNIjlnFmrfBhRyRdOBYufY0Kt9UB2aMPCjuMMGOqUBy%2FA95Z3zc6%2Bi4cFZHT4DDF7Y%2B5NFQuljjwH4YFyWfCDTldMQnS7dWtW6vBISQovbmRPWC7IqvjzESjFZwuyzxE9UTRT%2BuNJXw3j8zYJM7xyrTVucKDgoDMv4wJELXW2rfGGpyJaKaH5KV%2BdIpxR0TZ%2FB4BqSOgoLWhgd38izDIqnGmkmIXyThaVudN5jbU4qvo5HX5%2FTS2N14z%2BrpAOOCV6ezcbc&X-Amz-Signature=a6c798f18af6a70cc7654974abe5184dc24a3fc6b970b156b204e71cd2d339e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2Y6EOOX%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T081253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BiBfwVJghNGSneZ%2BN749eaQVtEJGJmhE9neG%2FuKq5BwIgH78MPo0Rnrr58r33Wcw0pDNo17nFnb1%2BLJSS3W82R%2BgqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCX2sV70m54i7qanircA23BZwp7Qa2GodytxmjeMc1Sn71ER66me9SU5KLmVxGNXqvqkGg1Mcms5x%2BcupdOdl6iyCIrshsOKdBfslCThvK1rBgs%2FnRm8p2NOKJgN74R7C0Notbsz9uerTIPxcHyhadBCegdNFt1ZXxb7wLeX6aMWJ8P5LPg5dXS1Tt7EvT0qvpRxc%2BUQMwd4PT0F0rQMYaFGJKWPdJkUh107470pO4Eayd5tCzim4eAa%2Fh1b0fUJOLpISVkaghI6zISyrGgAY8gL07vTQ2K3VgOGx4uwvqBK4GkZhBXeKmNTbIYCC9jNMRu27tR%2Bo9ZX44dn4Eaul1nOtjNhjbI8HO3gtjRfmh29wzU1Uu6Yh6TFT5%2BVRuvNe3gswY2CQfywFA5CIxVtmImYMXjCORuBbA6LQzNU9uQD1%2Ff4An2HWFYEe%2Fe6fAZyrUDgng45e2kYW5c3r9CucagcCm3mmKQlFaYR01wJw1xHblpuf05dVH7Q4FDYgFFY4Bm%2BlCyfAhnWIR%2B8TM77nSn7441EKQUGi07aKhHaS4znYeiQhX%2F%2Bi%2BcS0XIKeIJopw4DGcioRAcPQDRp59KOR%2Blhzf8i28wK%2BrRQ%2F4nfH29bEVbyBUNIjlnFmrfBhRyRdOBYufY0Kt9UB2aMPCjuMMGOqUBy%2FA95Z3zc6%2Bi4cFZHT4DDF7Y%2B5NFQuljjwH4YFyWfCDTldMQnS7dWtW6vBISQovbmRPWC7IqvjzESjFZwuyzxE9UTRT%2BuNJXw3j8zYJM7xyrTVucKDgoDMv4wJELXW2rfGGpyJaKaH5KV%2BdIpxR0TZ%2FB4BqSOgoLWhgd38izDIqnGmkmIXyThaVudN5jbU4qvo5HX5%2FTS2N14z%2BrpAOOCV6ezcbc&X-Amz-Signature=adf721b7700f34d6632b7f79acfd234ed449a6ffeb90c6f30c3ed43137a87b9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

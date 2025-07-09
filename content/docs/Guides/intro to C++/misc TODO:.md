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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7MMAHFS%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T171058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDck1L4mig8%2FIH7bG6KclMjBpmbeikxU%2Fqt47lA9PbhOAiEA5uOUVB1eroXNrNv431MPgV1oqMai1Q72jGVM68t9%2BhoqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2F3vIhBgCg8GdAw3CrcA5MCyXdYYVntd6o5Qn9e3MVIlNjU69T06OAXoISxyyzbP0mSLfSkA9LErY2r4kbCKkz3m4%2BHAxj4JEwVEGZAOpDrVPyd%2B0sTcvUwqvHaQfI8dvuV%2F748%2F4lFC6feS7X8ScKKxAYkwHlN9J8SYjDiNZ1aV%2BXFRHt2znAW%2FuOXGTPQANvt91WBomrjqQ%2Fq%2B3m3Yhvl3bQV7eGJl%2F026bLogAJtfRNN4iRr2VdnyjFtD%2Beud7nmHoTjfyCcr5augGQoIurCPkk6t75xRQqY4cFJXkYXkGz9KytK2nsaMD1coJWp1xufv4Evf8B%2BqrkhYTLr1TFcLPG%2F3Zj0L4wVVqaJMHIbKl%2BIeOajDWTSkJIrJRSkgECJMGaQv2Y2V2O4AN8rPTSMKMYutzBNrNgFy54b9KwCIpMJMzN10QSa4Mrr11wv17rXI%2BEakAQMuKJfawuD6JPtw7iKBDSgeRBEKwBAkL7%2BCcpk%2Bz7N%2B8sswOPqJtkMQ1PkOg1xphwWsXNvXRKDoUtgv%2FZnNa%2F8doRhKYLcOACb9t1XgkHbmBOVM5cGbE7Rz9r82bI6aYmmpDsG0M6NXWtSh3qMJE17J0N2G%2Bt%2FT6YnvZAYAXBJ3y0O0fZYRWg%2BxoI8nrOeVyrWRdJ9MI6YusMGOqUBAOVw7zVSUwor3xseVyGOcCapeNy8HoYD%2F1yNNU40%2BeF28zRt3OXRCsRaQvjXyw%2B9r2XkuBCO%2FDhP5ML51jxwE2iDL7uNCVWAthsNhpcGH7RVQ1M9MWsXKTXIrSKNTZkHuJc1GVVqFaZcYYN%2Baq6sCUdiO7vBwxQ%2BYlehVBo6V2P%2Fzdmmip46pk9s4LjAZCjyRDfj0f6PgSmlLjuv%2FDuvFDL1fqmD&X-Amz-Signature=b7a24d6296e7c74ccb0cc785698174d3a1785268d571f42936a8bab33fdf0164&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7MMAHFS%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T171058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDck1L4mig8%2FIH7bG6KclMjBpmbeikxU%2Fqt47lA9PbhOAiEA5uOUVB1eroXNrNv431MPgV1oqMai1Q72jGVM68t9%2BhoqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2F3vIhBgCg8GdAw3CrcA5MCyXdYYVntd6o5Qn9e3MVIlNjU69T06OAXoISxyyzbP0mSLfSkA9LErY2r4kbCKkz3m4%2BHAxj4JEwVEGZAOpDrVPyd%2B0sTcvUwqvHaQfI8dvuV%2F748%2F4lFC6feS7X8ScKKxAYkwHlN9J8SYjDiNZ1aV%2BXFRHt2znAW%2FuOXGTPQANvt91WBomrjqQ%2Fq%2B3m3Yhvl3bQV7eGJl%2F026bLogAJtfRNN4iRr2VdnyjFtD%2Beud7nmHoTjfyCcr5augGQoIurCPkk6t75xRQqY4cFJXkYXkGz9KytK2nsaMD1coJWp1xufv4Evf8B%2BqrkhYTLr1TFcLPG%2F3Zj0L4wVVqaJMHIbKl%2BIeOajDWTSkJIrJRSkgECJMGaQv2Y2V2O4AN8rPTSMKMYutzBNrNgFy54b9KwCIpMJMzN10QSa4Mrr11wv17rXI%2BEakAQMuKJfawuD6JPtw7iKBDSgeRBEKwBAkL7%2BCcpk%2Bz7N%2B8sswOPqJtkMQ1PkOg1xphwWsXNvXRKDoUtgv%2FZnNa%2F8doRhKYLcOACb9t1XgkHbmBOVM5cGbE7Rz9r82bI6aYmmpDsG0M6NXWtSh3qMJE17J0N2G%2Bt%2FT6YnvZAYAXBJ3y0O0fZYRWg%2BxoI8nrOeVyrWRdJ9MI6YusMGOqUBAOVw7zVSUwor3xseVyGOcCapeNy8HoYD%2F1yNNU40%2BeF28zRt3OXRCsRaQvjXyw%2B9r2XkuBCO%2FDhP5ML51jxwE2iDL7uNCVWAthsNhpcGH7RVQ1M9MWsXKTXIrSKNTZkHuJc1GVVqFaZcYYN%2Baq6sCUdiO7vBwxQ%2BYlehVBo6V2P%2Fzdmmip46pk9s4LjAZCjyRDfj0f6PgSmlLjuv%2FDuvFDL1fqmD&X-Amz-Signature=fe88b1810bd8883a48bb388f03e46aee4fb431bf81f9ef175559c3602893a833&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BYRSM54%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDIN%2FnewwRfProMuj%2FLDPMhd1tOXV6nGQtRvTFOODwvNQIhAOSKTU6JvBYqO1qAznXToF1Gj9d8urbJ%2FvjQXq0ON0bHKv8DCBwQABoMNjM3NDIzMTgzODA1IgxtSQOiiDUWMsljH%2Bwq3AOXdGVIHx%2Bf8f8DJ0n3l8DrwwVuwhxJaSS6KcJAyB3DHR3sMGdwMZSIoSf%2FhS8RjJtZuzvdfR8w2fHjTkqWLY2AW1gv1wxcAoXa0%2FwBX15pSU2CAF73UyY5SapGnJ3H4IP%2B1Z86aL2Tw4SJAFahKHQl8T9WziTxbiwR1Xgq148vmyq2uaGEqIWKKdSvcktmSzadaTORgWPkESaoWD31NclKHGTp1kxPwAp2BdlnjY0YH6Fsgi9o63RnJMwC9WQ8vAXKjaH99HXlvjyJOvOoV7drOdkL4iZR%2BXFNt1dTvyFDnxTNvbdj8vFCbB%2BA1LpezsozEtTepiZprAiiUFkxJznBphlrFmKvlyKGlxhO6ayk%2BLKShFDpuI1xu%2BUG42ISlGDGLtzyiyZwYEjm8g0674EB5GnLMRawAMyBnuxxkzOzxOlrhTRwtshoHzvRZxW0ki9yaYhLm2pcrfIJZHB1umhKDSe%2BoeJtI0roErb2Cau8e5QFzUmPzU%2BQ9SfmxXWgyfAsgwoIcSrADHNeetiiBYvkjdqw8xumMLSS%2FnU%2BmsAFAh9eRQWB0ZBZI%2BH6MoB7nQyZ%2FSY5T3VqnnnuP%2FHVXoVT2BMObZbKyUICTASNcvrOAhY4ZIQmkX7sy4H0qzCzooS9BjqkAfkkqQj9hPfl1LwVUzXx%2Be7LLz5FWaZRsNiTcUFoyLUubdyMFlNFtivtRWVroc0kDjLvXI7RWBEQ0uHGfzIktoCKZq%2FXFftFvYRKAddWbnz7KHybj3IFqR27YBwExgKbYvSsTEb8VP2hjBaTWMtOGb%2FjsU0BNwfztbPWlPtyX0tDZ2ajWw0PsSfUrWt%2FkKTncoJ4maeOaa1y57WUddyIn%2Btr4UCg&X-Amz-Signature=8709819a3b14e2440e91eaf2b3005147c5d0cebc11199ffb195e022f6718a4de&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BYRSM54%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDIN%2FnewwRfProMuj%2FLDPMhd1tOXV6nGQtRvTFOODwvNQIhAOSKTU6JvBYqO1qAznXToF1Gj9d8urbJ%2FvjQXq0ON0bHKv8DCBwQABoMNjM3NDIzMTgzODA1IgxtSQOiiDUWMsljH%2Bwq3AOXdGVIHx%2Bf8f8DJ0n3l8DrwwVuwhxJaSS6KcJAyB3DHR3sMGdwMZSIoSf%2FhS8RjJtZuzvdfR8w2fHjTkqWLY2AW1gv1wxcAoXa0%2FwBX15pSU2CAF73UyY5SapGnJ3H4IP%2B1Z86aL2Tw4SJAFahKHQl8T9WziTxbiwR1Xgq148vmyq2uaGEqIWKKdSvcktmSzadaTORgWPkESaoWD31NclKHGTp1kxPwAp2BdlnjY0YH6Fsgi9o63RnJMwC9WQ8vAXKjaH99HXlvjyJOvOoV7drOdkL4iZR%2BXFNt1dTvyFDnxTNvbdj8vFCbB%2BA1LpezsozEtTepiZprAiiUFkxJznBphlrFmKvlyKGlxhO6ayk%2BLKShFDpuI1xu%2BUG42ISlGDGLtzyiyZwYEjm8g0674EB5GnLMRawAMyBnuxxkzOzxOlrhTRwtshoHzvRZxW0ki9yaYhLm2pcrfIJZHB1umhKDSe%2BoeJtI0roErb2Cau8e5QFzUmPzU%2BQ9SfmxXWgyfAsgwoIcSrADHNeetiiBYvkjdqw8xumMLSS%2FnU%2BmsAFAh9eRQWB0ZBZI%2BH6MoB7nQyZ%2FSY5T3VqnnnuP%2FHVXoVT2BMObZbKyUICTASNcvrOAhY4ZIQmkX7sy4H0qzCzooS9BjqkAfkkqQj9hPfl1LwVUzXx%2Be7LLz5FWaZRsNiTcUFoyLUubdyMFlNFtivtRWVroc0kDjLvXI7RWBEQ0uHGfzIktoCKZq%2FXFftFvYRKAddWbnz7KHybj3IFqR27YBwExgKbYvSsTEb8VP2hjBaTWMtOGb%2FjsU0BNwfztbPWlPtyX0tDZ2ajWw0PsSfUrWt%2FkKTncoJ4maeOaa1y57WUddyIn%2Btr4UCg&X-Amz-Signature=934104a9b4caac5889739a12bfdb5f3833bf76f74daaf912478c2f7a3f146b9e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

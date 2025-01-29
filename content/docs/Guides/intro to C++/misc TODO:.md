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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMBG7GGI%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T230726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGUEpJf%2FcKdA1uihYTplavcOvTbhRO5D6BMTOAmUielwIgFSU%2FUG%2BDE6UG36YAzUsu0C%2Bn2pYV%2FRzSNEwhqo99TRUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFqVRpqmGNHLcDfcCrcA4kfXTV7P2VneX8WdWFiKamK%2Bd%2F1BRZqXECDlmw5lL0PJLSoWe7OAie33TOLU%2BnS5wtsOnbh0m923J6RHoMjKlm5L%2FS6i0%2Bu2cgwbDO2oILnPFxjCO7j63FJ%2BkKMBGKVoBYNOHx9YZ63OzVRxP6zdC%2BD%2BK%2Fcs7mfzZuoTiiCVt8PwwkQxWm2Ol9%2B5Ms64GIvU8HZq3JbbUkLHBTgsFD8GRBAJ4oc9hcAIUbwg0pZde2snORrc13FK6KxJmFq4QbimToXdu79CH9M3wa2vMFm5D%2BnTncWjz6lg3x5iP945JWbF0d59D6uE8nRrkqU8LDbSdmOVFybnUCOLLDrnSMTB%2F2%2FETarO%2BudE%2BWQPFDXnNASWRYivCd2HstuDaDTrtsqznxygoC%2BtW9qNTm0EjP2h73EXc01cj6hJJ4g4O6%2BhdoTY3m9yr3px7ARPqvMHZtF6qGNUu1h0RHm4Ya1g74kOBFWT17R3V2vmgA6f%2F%2BbrD0bAKzM2ZdZnKtlerI5kSNCr2qz%2FymiW1tJ8HaIUzym8PB8tpPNggMqguWIqkEYBPDzcL9z6hSZFgKxBSfGotR08J9I08e%2FSVUhFl%2FahLUUCRbGCKJiOMNSpBtg8k4%2Ff87m0clwzimHtIgGmRxMMLXF6rwGOqUBOnFq6DwEuz9ZsgtEkdCa%2F8WS8OAK%2B8VErk02jaXGLXaNkNMmcWNUTdRxsZzJxp5HMAgENAvhi9SU8MLrBRO2lh4HldfoXB0M2oStaf5kV8CUVGYkdtU1ClTIF7864k4SkA9hArToa4LRB871COBjGQQeeBBzZlsXUTiMrQe822RTuH2lF82jh5tYNm6un0gf%2BAXmTd%2FfbbvH0jKPfBRpF9Dl45SU&X-Amz-Signature=8dea08f8d8fe9cad7f4c8c77e45835c4bd213a9f41ea6082af1544c6e3bbc6c3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMBG7GGI%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T230726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGUEpJf%2FcKdA1uihYTplavcOvTbhRO5D6BMTOAmUielwIgFSU%2FUG%2BDE6UG36YAzUsu0C%2Bn2pYV%2FRzSNEwhqo99TRUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFqVRpqmGNHLcDfcCrcA4kfXTV7P2VneX8WdWFiKamK%2Bd%2F1BRZqXECDlmw5lL0PJLSoWe7OAie33TOLU%2BnS5wtsOnbh0m923J6RHoMjKlm5L%2FS6i0%2Bu2cgwbDO2oILnPFxjCO7j63FJ%2BkKMBGKVoBYNOHx9YZ63OzVRxP6zdC%2BD%2BK%2Fcs7mfzZuoTiiCVt8PwwkQxWm2Ol9%2B5Ms64GIvU8HZq3JbbUkLHBTgsFD8GRBAJ4oc9hcAIUbwg0pZde2snORrc13FK6KxJmFq4QbimToXdu79CH9M3wa2vMFm5D%2BnTncWjz6lg3x5iP945JWbF0d59D6uE8nRrkqU8LDbSdmOVFybnUCOLLDrnSMTB%2F2%2FETarO%2BudE%2BWQPFDXnNASWRYivCd2HstuDaDTrtsqznxygoC%2BtW9qNTm0EjP2h73EXc01cj6hJJ4g4O6%2BhdoTY3m9yr3px7ARPqvMHZtF6qGNUu1h0RHm4Ya1g74kOBFWT17R3V2vmgA6f%2F%2BbrD0bAKzM2ZdZnKtlerI5kSNCr2qz%2FymiW1tJ8HaIUzym8PB8tpPNggMqguWIqkEYBPDzcL9z6hSZFgKxBSfGotR08J9I08e%2FSVUhFl%2FahLUUCRbGCKJiOMNSpBtg8k4%2Ff87m0clwzimHtIgGmRxMMLXF6rwGOqUBOnFq6DwEuz9ZsgtEkdCa%2F8WS8OAK%2B8VErk02jaXGLXaNkNMmcWNUTdRxsZzJxp5HMAgENAvhi9SU8MLrBRO2lh4HldfoXB0M2oStaf5kV8CUVGYkdtU1ClTIF7864k4SkA9hArToa4LRB871COBjGQQeeBBzZlsXUTiMrQe822RTuH2lF82jh5tYNm6un0gf%2BAXmTd%2FfbbvH0jKPfBRpF9Dl45SU&X-Amz-Signature=08731e438d00bb831d14d06efed302a4d9f80887bbf3eca2a0f4498b2a60e9d7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

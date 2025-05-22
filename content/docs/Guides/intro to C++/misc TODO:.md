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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDX4324D%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T050936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIDANMP%2FHm7JoF36eiaLM02RIkFfM7UJF3ItbPgDOkSPBAiAIyNOX4D%2BK1R1FPVRl4TFORo0fOKyzGCfdg0BjB%2Bsx5CqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNw1UP%2FevvqgTz5fAKtwDEzZ27tM%2BOVQ3HKAtJO7uUR4V06BJXeYwVeKA5xKtdpcuQy%2FGGzliLUZ3s7EhY8rS5DVRNSvSL9QR6vDDDAsOfVXHhFoM5%2FwhKFKD3J%2BAuRf29X5uQcbHzwMopPh7MNe6iGFYyxmBuuqX96FAeCVRdrVghm0gIdZ2MUF4ptRnQ%2FQfJkmOOPEZ9ohUOS97ngWXe3QXsDIC8xr63m%2B%2F8X4VP2eSBCL%2B3UW6709DWwSqxgUqnYMDEqPSZWcZWYYESQGtpQhLvCBIQYj9NQzP3uIpXvxt8jnUfQO1k3H2FaPXp0Tw%2BsJXwBpyMxQXiO1l7Fpjv0LSdqjEYacYWuE7R6B%2B%2Fku7pIvhQMcn%2BixKqZxd0rTBt8vRH08L%2B7CzVH18qk3%2Fx02lpal2wpA%2BTHEplfgoaPW03%2Bq4AOeg3hpE2dKEMiJmyE%2BMcyJjKz3%2FvZIEBQOFcHgy14t%2FDRFQfPy7z6J2kNuuqPcBhIGanxkfSFo4C8Hs%2BiIlLL7P0COAlBwZxnJuOIy8Mdyhcjqd4vxA7d9U2DxIL8GrtxZLZnEBy4agFGPvYsPUZOp%2FD%2FdtO6p03jJwWK06Zkxll%2FHzvnfL9LfS2uj4j0YHj6Og7xrFyK1h9tW5US48RyY6qqImrYIwlca6wQY6pgEICwvafeVks%2Ftoxzfb%2ByoAC2XlhxPt5X4ORGXGB5s44vPRHCk%2B0O768U%2BxxPY23h9D5tP9ZePejZ8CCy845CXzRXL9IlIQrINMm8ujc72N1um0INDUgMu3pURZYDae9ftmbHdDbiY280bI4tGI3b8ztbzEiQRJezt%2BUqhQxL2LrLC3iP7Gfw1xLV4i6QAFmQe7OKe2v3XIY%2BGDHb8x%2BpNEwmQ2DGD6&X-Amz-Signature=a6c7c67ed57da98fb113bc3b432b70fb440dfe781c981b9bcf91592041690fae&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDX4324D%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T050936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIDANMP%2FHm7JoF36eiaLM02RIkFfM7UJF3ItbPgDOkSPBAiAIyNOX4D%2BK1R1FPVRl4TFORo0fOKyzGCfdg0BjB%2Bsx5CqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNw1UP%2FevvqgTz5fAKtwDEzZ27tM%2BOVQ3HKAtJO7uUR4V06BJXeYwVeKA5xKtdpcuQy%2FGGzliLUZ3s7EhY8rS5DVRNSvSL9QR6vDDDAsOfVXHhFoM5%2FwhKFKD3J%2BAuRf29X5uQcbHzwMopPh7MNe6iGFYyxmBuuqX96FAeCVRdrVghm0gIdZ2MUF4ptRnQ%2FQfJkmOOPEZ9ohUOS97ngWXe3QXsDIC8xr63m%2B%2F8X4VP2eSBCL%2B3UW6709DWwSqxgUqnYMDEqPSZWcZWYYESQGtpQhLvCBIQYj9NQzP3uIpXvxt8jnUfQO1k3H2FaPXp0Tw%2BsJXwBpyMxQXiO1l7Fpjv0LSdqjEYacYWuE7R6B%2B%2Fku7pIvhQMcn%2BixKqZxd0rTBt8vRH08L%2B7CzVH18qk3%2Fx02lpal2wpA%2BTHEplfgoaPW03%2Bq4AOeg3hpE2dKEMiJmyE%2BMcyJjKz3%2FvZIEBQOFcHgy14t%2FDRFQfPy7z6J2kNuuqPcBhIGanxkfSFo4C8Hs%2BiIlLL7P0COAlBwZxnJuOIy8Mdyhcjqd4vxA7d9U2DxIL8GrtxZLZnEBy4agFGPvYsPUZOp%2FD%2FdtO6p03jJwWK06Zkxll%2FHzvnfL9LfS2uj4j0YHj6Og7xrFyK1h9tW5US48RyY6qqImrYIwlca6wQY6pgEICwvafeVks%2Ftoxzfb%2ByoAC2XlhxPt5X4ORGXGB5s44vPRHCk%2B0O768U%2BxxPY23h9D5tP9ZePejZ8CCy845CXzRXL9IlIQrINMm8ujc72N1um0INDUgMu3pURZYDae9ftmbHdDbiY280bI4tGI3b8ztbzEiQRJezt%2BUqhQxL2LrLC3iP7Gfw1xLV4i6QAFmQe7OKe2v3XIY%2BGDHb8x%2BpNEwmQ2DGD6&X-Amz-Signature=7c1c05b664f5124656a73b6df90e15a5a1553a3526601d8ac630f09ead970385&X-Amz-SignedHeaders=host&x-id=GetObject)

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

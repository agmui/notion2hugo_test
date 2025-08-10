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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YP5XCTS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG7itWxvRg5ArMJcabh5nkuZEK3%2FOvWquYWgbzUsnU2AIhAPFPCfBjlTxvOUv62sRlIKH5QzVjoL4YPlr5BHjo1RIIKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsZ2uJXK8tL5Vp0zAq3APZfW1kGW0fHorcQRcTGMZL9AddzojWJVCBMRKqCOZ1%2B6757cH3liiQ%2FLyCyrCGfI6WgoCGhPez%2B0GHVKDP7yNTqdHJ6F1iHv3del2TmdEeocSWMDvTsvr8L%2BVYNPv6WEs9VsI6AdObyiz1vD4%2BwoQui6%2FX5%2BdnjqV%2FvrsQgDxHzdQtIgeWMCRT3FP%2FD19qjkLlON5x8MEUPX4D43vXMgMwAFiDkFUA%2FxiamJzkz%2F%2FcHKIXIHCl58JYyaQXJDMdcIZKztrlSDHheDd3QgiwDqmoPMbZgHSosiM0aJJ7Qg%2FPYE3RyCZjKshKWp5X71nc7vm2XZnn0kCLwshEOwNygHF%2BGUzsFdOVOHaBLoWYLwzjtZP3gJFVGlUcPS31NdBuba8q1qdka2zoUzppDthzDDY2ixuR7NWhlCc1ka35LcOBunL7eWAKfZOtl3e9li6efsxSJlUiVLPrKRo4Ut4%2BWsehKBYkTe2WaYK6grxB4dwY80wV5F3Wnubm42l8xaa0RryvBw6k%2FbyvrbWzEr9GrZCAEVTAwh%2BdP9GkzfEqPAKbSoRza6IyAMSkJKfZIIuLnANjYIShGFdDSlGpamnEFwTehg72LwwmCJcL9VOMDmgAk4d%2Bc3EKWGFwKg4MbjCxuuPEBjqkAQM325zigaJkpkLkhK0hQYVStieVOFcwINOv8yI%2BfTPPLwpvtUxoYEVftbtbnXHPAsfUlMQeV2fokF1J3C4VKBYZDKS0HKGP79NU5WUoOrLTx2BlkAaHX9S0u%2Fyam5jkZkPw4%2B%2B%2BteUQf32cSbfYy1imnIWPYXrXMbpKWKMLE%2FyAPLj26kFfrcsqhi0kjrZGINLvsaVkSjBtE%2BRhAqm2bXhK%2Bko5&X-Amz-Signature=c57ae8269064d31316bd80eb1a6efa8e65700bbf17ba0e90b97264c431f9a9c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YP5XCTS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG7itWxvRg5ArMJcabh5nkuZEK3%2FOvWquYWgbzUsnU2AIhAPFPCfBjlTxvOUv62sRlIKH5QzVjoL4YPlr5BHjo1RIIKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsZ2uJXK8tL5Vp0zAq3APZfW1kGW0fHorcQRcTGMZL9AddzojWJVCBMRKqCOZ1%2B6757cH3liiQ%2FLyCyrCGfI6WgoCGhPez%2B0GHVKDP7yNTqdHJ6F1iHv3del2TmdEeocSWMDvTsvr8L%2BVYNPv6WEs9VsI6AdObyiz1vD4%2BwoQui6%2FX5%2BdnjqV%2FvrsQgDxHzdQtIgeWMCRT3FP%2FD19qjkLlON5x8MEUPX4D43vXMgMwAFiDkFUA%2FxiamJzkz%2F%2FcHKIXIHCl58JYyaQXJDMdcIZKztrlSDHheDd3QgiwDqmoPMbZgHSosiM0aJJ7Qg%2FPYE3RyCZjKshKWp5X71nc7vm2XZnn0kCLwshEOwNygHF%2BGUzsFdOVOHaBLoWYLwzjtZP3gJFVGlUcPS31NdBuba8q1qdka2zoUzppDthzDDY2ixuR7NWhlCc1ka35LcOBunL7eWAKfZOtl3e9li6efsxSJlUiVLPrKRo4Ut4%2BWsehKBYkTe2WaYK6grxB4dwY80wV5F3Wnubm42l8xaa0RryvBw6k%2FbyvrbWzEr9GrZCAEVTAwh%2BdP9GkzfEqPAKbSoRza6IyAMSkJKfZIIuLnANjYIShGFdDSlGpamnEFwTehg72LwwmCJcL9VOMDmgAk4d%2Bc3EKWGFwKg4MbjCxuuPEBjqkAQM325zigaJkpkLkhK0hQYVStieVOFcwINOv8yI%2BfTPPLwpvtUxoYEVftbtbnXHPAsfUlMQeV2fokF1J3C4VKBYZDKS0HKGP79NU5WUoOrLTx2BlkAaHX9S0u%2Fyam5jkZkPw4%2B%2B%2BteUQf32cSbfYy1imnIWPYXrXMbpKWKMLE%2FyAPLj26kFfrcsqhi0kjrZGINLvsaVkSjBtE%2BRhAqm2bXhK%2Bko5&X-Amz-Signature=6a2da337bd7936e6a405a8dcce803b115e1267f378a7b7b49ecc77e02c6ea77a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

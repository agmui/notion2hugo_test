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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4V72DQJ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T061045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2FHCgAjX4yCu0ow4wzFdi2GCepFYJ5%2BP2BsDUPqh8%2FuAiEAuVI3T%2BOTgxIhfdy4AkvWk4zzVEEOnB2J3CJij6oDoEwq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDCazxssr9KCZuJXUGircA6F%2FKWrlMp78VeAGFFJr6rBl5%2BwhUWjH2RAkrrJLlndaIVqofBHOn46vtAH3E7ti4KJgukVL8hfvim4spfJRKazSsgT3V0vkkffyD4CLFrUlNg98ZlfZ7vqQvsNcjtsmRUQGjHc4hWAX2zTkjFJxBU4gFe1gsYIh1i4NS2CiRdn%2FL1XBqvksd0bEGpwqAaCQHjflSoeDcVdWsQmm%2Bi7pyOJfpx35v0x2aVasrd%2BQAGHkCWXDeYENfnxFftYrMTQUvUQs9m56tFX2GJwv4PlZvMRGIwr3WD9YSB3vY%2BdxUg%2Fj9kz5mjwiGmEU%2FAHJkFcs%2B%2FzwaAwAse28cVZ7SIEUoPS18fsK8Ez1EWOxTvRRD7%2FL7gtG%2FdYmNRs5luchD2C6oUAzuldQVCOVPD9%2FDzb0dX0XxV4nNMVVlqkeG4B6oZiCrkL4gNF0db8mnMMs90jg%2Fey%2B8PWZFHnK4KgZQnk7966ClxABXbKdJfrDIdvR6bLFmjcdtrY99VFF%2BiB%2FCrasT6wvfp2y0Lh2tVIDvE1jtcVWg9PJXWx4efLFukn9WwCgLh0SSPxTDJE9g%2Fb23pGS0JK4youjv8SaKgDw%2BomHT6t9X%2F67ww0Z91xTFy4cNPS0XCtt0crd3utuLmp2MKXkscAGOqUBn7N5mRL3ihHdRKEsXTPmfv%2FZBeYnoVOCDKhiQk15n4uVNTPPUAaT%2FyJnYGw%2BLy4YS%2FdeuqCVVREws1wVMjhhVObcVz0HdO4lvGOdztkZFLch1OTAFl%2FrwWJARQHShaB2Nb3fmIDD525t1CXviFHC6ajndQZ47%2F8RmcVeDRCHpaiD6znoVWwFDzOJ3Zdkt6x9Bt1xuzn6G0zKRWisXZxz2bmc%2BE5t&X-Amz-Signature=9f82e277e91db6f82dc60d03d68b127f335bcc35064b4bf563e52997f18868ca&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4V72DQJ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T061045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2FHCgAjX4yCu0ow4wzFdi2GCepFYJ5%2BP2BsDUPqh8%2FuAiEAuVI3T%2BOTgxIhfdy4AkvWk4zzVEEOnB2J3CJij6oDoEwq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDCazxssr9KCZuJXUGircA6F%2FKWrlMp78VeAGFFJr6rBl5%2BwhUWjH2RAkrrJLlndaIVqofBHOn46vtAH3E7ti4KJgukVL8hfvim4spfJRKazSsgT3V0vkkffyD4CLFrUlNg98ZlfZ7vqQvsNcjtsmRUQGjHc4hWAX2zTkjFJxBU4gFe1gsYIh1i4NS2CiRdn%2FL1XBqvksd0bEGpwqAaCQHjflSoeDcVdWsQmm%2Bi7pyOJfpx35v0x2aVasrd%2BQAGHkCWXDeYENfnxFftYrMTQUvUQs9m56tFX2GJwv4PlZvMRGIwr3WD9YSB3vY%2BdxUg%2Fj9kz5mjwiGmEU%2FAHJkFcs%2B%2FzwaAwAse28cVZ7SIEUoPS18fsK8Ez1EWOxTvRRD7%2FL7gtG%2FdYmNRs5luchD2C6oUAzuldQVCOVPD9%2FDzb0dX0XxV4nNMVVlqkeG4B6oZiCrkL4gNF0db8mnMMs90jg%2Fey%2B8PWZFHnK4KgZQnk7966ClxABXbKdJfrDIdvR6bLFmjcdtrY99VFF%2BiB%2FCrasT6wvfp2y0Lh2tVIDvE1jtcVWg9PJXWx4efLFukn9WwCgLh0SSPxTDJE9g%2Fb23pGS0JK4youjv8SaKgDw%2BomHT6t9X%2F67ww0Z91xTFy4cNPS0XCtt0crd3utuLmp2MKXkscAGOqUBn7N5mRL3ihHdRKEsXTPmfv%2FZBeYnoVOCDKhiQk15n4uVNTPPUAaT%2FyJnYGw%2BLy4YS%2FdeuqCVVREws1wVMjhhVObcVz0HdO4lvGOdztkZFLch1OTAFl%2FrwWJARQHShaB2Nb3fmIDD525t1CXviFHC6ajndQZ47%2F8RmcVeDRCHpaiD6znoVWwFDzOJ3Zdkt6x9Bt1xuzn6G0zKRWisXZxz2bmc%2BE5t&X-Amz-Signature=c8a40f6c8417d07fd277e02dd6f406376d9307c3f8051cacabca81a20b2c1298&X-Amz-SignedHeaders=host&x-id=GetObject)

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

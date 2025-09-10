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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UBI46GT%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBJ9SZcB9hay%2FEhvef17LapLdjvH%2FUW6UiX0xZB72fJrAiAP41Kx1zSMgBcAcLBsabSLIoT04lEZO%2B0SmaCXhf4hqiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM62ziRR1ysLNMNTipKtwDQtOBqkviF%2FOHc%2BN%2FjXdgw2jj%2FQ%2BfZ%2FfH0OfjjO03CXZm3VUp6qqyM2Yb190akx%2FWqKSs7rdPOg%2BnoPLAzHiRiy1ZruX0uaNPqb%2BHEu9a3zMmOw6yRUevDR2PG3R5GHGHPnxkMswvY5LxeDxzz5ERtex60V%2FFrtKa2LyhvcDlyEuRwvLi0LxiLdv2fyBLFO6slXiPwPL%2Bu%2BbLwXnoUlqdYoSvf3Y3suRH67N%2FQ3bysa7KOeVewWOCGu2EimkzzSk86CQNMzgy0JemLn%2FdVEJBo0k4H1dqySjBnNsVxo5ADm9NNZFXw1Kzw%2Bd7KmetfNvwNtSLrIthRdI1l6YVJvjRvGAiqe7OI%2Bw3XbpFE3LbjRiL2D6c1GfAh7wHy9xqSgyyZuMpwvUtNCWygaOaCrVArOPMqIJ8sKK3JNUu%2FnaXCjH0YlU0pHlgkKrTDJmRz4pXgCtlFlsKV7QgYzojrlmvlCUcphjFYEsP14DpPGIk5ruepvmzi83munbuuN65ZcpccO%2FChBgwooKT0Xr7baAXJGvFysnbBBLO7EKFVAQtiWojI346GjLfsoaLvLCrvyefiO0flj1m%2FTjF2pB0DBiX2g0SSOg6Ri27E9ya8ug%2FP4JxZK5XSBug8vP6l4kwkYyDxgY6pgEkSQ%2BTY1OPoU%2F4t7HP0Np76%2BE%2FUg5fYMidxpA1t%2FGWVloTEekF3CYWbycnlH0XimxG8xEuTN8Kw3F6tyn3h81DcsBWsXL%2FwGnTIqK82L%2Fkn421Law3Sg1ldAi22i2SPvi3Kbf%2FgMURjARxxPSz0H%2FB9gGW%2BVVDz8C5CMxseDWINnH0BTDh9AIgwAfThJHbQ%2BiIiGfJCioHiMgA%2FpONWjLiWu%2BElQVu&X-Amz-Signature=e9ba9567a14c92c5754eafc40166b285166ab0c8a7252f00b82fae5b5a69bf37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UBI46GT%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBJ9SZcB9hay%2FEhvef17LapLdjvH%2FUW6UiX0xZB72fJrAiAP41Kx1zSMgBcAcLBsabSLIoT04lEZO%2B0SmaCXhf4hqiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM62ziRR1ysLNMNTipKtwDQtOBqkviF%2FOHc%2BN%2FjXdgw2jj%2FQ%2BfZ%2FfH0OfjjO03CXZm3VUp6qqyM2Yb190akx%2FWqKSs7rdPOg%2BnoPLAzHiRiy1ZruX0uaNPqb%2BHEu9a3zMmOw6yRUevDR2PG3R5GHGHPnxkMswvY5LxeDxzz5ERtex60V%2FFrtKa2LyhvcDlyEuRwvLi0LxiLdv2fyBLFO6slXiPwPL%2Bu%2BbLwXnoUlqdYoSvf3Y3suRH67N%2FQ3bysa7KOeVewWOCGu2EimkzzSk86CQNMzgy0JemLn%2FdVEJBo0k4H1dqySjBnNsVxo5ADm9NNZFXw1Kzw%2Bd7KmetfNvwNtSLrIthRdI1l6YVJvjRvGAiqe7OI%2Bw3XbpFE3LbjRiL2D6c1GfAh7wHy9xqSgyyZuMpwvUtNCWygaOaCrVArOPMqIJ8sKK3JNUu%2FnaXCjH0YlU0pHlgkKrTDJmRz4pXgCtlFlsKV7QgYzojrlmvlCUcphjFYEsP14DpPGIk5ruepvmzi83munbuuN65ZcpccO%2FChBgwooKT0Xr7baAXJGvFysnbBBLO7EKFVAQtiWojI346GjLfsoaLvLCrvyefiO0flj1m%2FTjF2pB0DBiX2g0SSOg6Ri27E9ya8ug%2FP4JxZK5XSBug8vP6l4kwkYyDxgY6pgEkSQ%2BTY1OPoU%2F4t7HP0Np76%2BE%2FUg5fYMidxpA1t%2FGWVloTEekF3CYWbycnlH0XimxG8xEuTN8Kw3F6tyn3h81DcsBWsXL%2FwGnTIqK82L%2Fkn421Law3Sg1ldAi22i2SPvi3Kbf%2FgMURjARxxPSz0H%2FB9gGW%2BVVDz8C5CMxseDWINnH0BTDh9AIgwAfThJHbQ%2BiIiGfJCioHiMgA%2FpONWjLiWu%2BElQVu&X-Amz-Signature=5c0c5c83e7843c151088549fabed93998337f25995fad8d8b9ba127332e5327e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDSFMAEZ%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T220722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRmqlDxg3e8P%2FlOW3qArezdYlwKqGN%2FwqFkzVzrObrUwIgNjIFYXK35F9U6KMbNf%2FAYlTUxHLp3g3p6ESsPObzoRUq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPvyUmCyF4hJoURNtircAxvHKyFiIe7uRLS03Zvm5aO16rIonG%2F9R%2BoxMQXSGNmocT98QMwnXuTRlbnL837gVptEq3q7n8vGUcL42jMOhw1WZKKlPMHeOBAxWo1DPHuDoFO1Q%2Fi3GIZkRe2UGvFisI8QYJDAJ%2FdZA5X0qRVIOhM5QL7KoQsY53cA5K1MsMuxkzBY8dnEoqxZ6rA22nXEoOOaqC%2BcZse2U9h%2FQbnEy2WsuFiXEKc882sym%2B7j2%2Bh9ooaopK%2FYGgQQiGYb%2BHTy0bT46ogxT7tGcqhgeax%2BhEh9YuEHTeS4kSvs00Rpr5ufBIkXdVLYyHTXpoYFJZAewjyIrPYvtArueLjWpnL2WU5TBym8hqkxZE58FngdQRgqCSL%2FYZi8Z95q6UU2AOZ4lmEUTJzkY1rigHhyVlTd0LjH%2BjPmrNOT1kJtwi4nzfzOzRagjHwnAFLVAmqd8pRExSkmqMvdB6jGxDrM%2BU3SSMbMAx5VbtZntPKRrlU4rpMUary0YHpf4gfMvUX%2BL3XMFn3otjtAkpeeQNAqcBxBAy%2BCKogznpZ6XAP2RdNIfSenxOvyuGfNpgdqx%2B4DllTGQ7vw%2BBkjVCtcfZZuV2k6pIWZPeA7eL05aQggji%2Bta6tLA43n0%2F5rscHxJMgyMIrnqMEGOqUB0HvWStV30lDlXFQuUWgISfjIjkTKAapASnZ11IJwoJ3rKTBMcNze69u19e7bT3D9KFj6WAea3pgIfu3YkoCGHtduYqbKowvkXqRbmr6Xtl%2FhmxMLqXDL5xTbGmI8vu%2FB1bqKEwnwieSGG62W0fkRSvN3rxjzF%2FA3liuKE5J3kG0f1MK2dQ74WKqV0B7kUDGXfnj2vmeM0zFAW3KTVrL%2B76PObnty&X-Amz-Signature=6dfbbd4f6667efd89ef95b172039854f74e78e24077d25dd8d6463ed7ea3ad9b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDSFMAEZ%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T220722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRmqlDxg3e8P%2FlOW3qArezdYlwKqGN%2FwqFkzVzrObrUwIgNjIFYXK35F9U6KMbNf%2FAYlTUxHLp3g3p6ESsPObzoRUq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPvyUmCyF4hJoURNtircAxvHKyFiIe7uRLS03Zvm5aO16rIonG%2F9R%2BoxMQXSGNmocT98QMwnXuTRlbnL837gVptEq3q7n8vGUcL42jMOhw1WZKKlPMHeOBAxWo1DPHuDoFO1Q%2Fi3GIZkRe2UGvFisI8QYJDAJ%2FdZA5X0qRVIOhM5QL7KoQsY53cA5K1MsMuxkzBY8dnEoqxZ6rA22nXEoOOaqC%2BcZse2U9h%2FQbnEy2WsuFiXEKc882sym%2B7j2%2Bh9ooaopK%2FYGgQQiGYb%2BHTy0bT46ogxT7tGcqhgeax%2BhEh9YuEHTeS4kSvs00Rpr5ufBIkXdVLYyHTXpoYFJZAewjyIrPYvtArueLjWpnL2WU5TBym8hqkxZE58FngdQRgqCSL%2FYZi8Z95q6UU2AOZ4lmEUTJzkY1rigHhyVlTd0LjH%2BjPmrNOT1kJtwi4nzfzOzRagjHwnAFLVAmqd8pRExSkmqMvdB6jGxDrM%2BU3SSMbMAx5VbtZntPKRrlU4rpMUary0YHpf4gfMvUX%2BL3XMFn3otjtAkpeeQNAqcBxBAy%2BCKogznpZ6XAP2RdNIfSenxOvyuGfNpgdqx%2B4DllTGQ7vw%2BBkjVCtcfZZuV2k6pIWZPeA7eL05aQggji%2Bta6tLA43n0%2F5rscHxJMgyMIrnqMEGOqUB0HvWStV30lDlXFQuUWgISfjIjkTKAapASnZ11IJwoJ3rKTBMcNze69u19e7bT3D9KFj6WAea3pgIfu3YkoCGHtduYqbKowvkXqRbmr6Xtl%2FhmxMLqXDL5xTbGmI8vu%2FB1bqKEwnwieSGG62W0fkRSvN3rxjzF%2FA3liuKE5J3kG0f1MK2dQ74WKqV0B7kUDGXfnj2vmeM0zFAW3KTVrL%2B76PObnty&X-Amz-Signature=336d83dfda984af53b1e7ac8ac44950f220752b83b60a6072eff91c99c5a6389&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5RQKP2Y%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIFWoHPMOY0im1dkFRyT7IIWmM9ZzCjwZszfd4gZwkFhfAiBoFNrkx32C3nkrqf1UKkhmKhPfuZtYAxvH15kHEfDABSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgEq9twNnXf8%2BcXZtKtwDRkUFbgSxsZHTOdG0hDmHdbzKv6pCWuHvfFtxYgq9JrIMirSXjTefxC%2ByNHS1lK8yOlVmluiN%2BF4DedZ3X0oqYkFM7CIAAvm1GUDAi1Erors%2BdKkMCLOq7FyggVG5k3UckeJep7xQ0FXfIaG7SYuRMxTAp2l32V0xY5gGIEv88JvQ0UGy4Zx1RL5X5o0H9rkVe988YKwvkq0LKec22W9RhhqXZFFroVv%2F91YTurG27OeLKjAd4EU%2FjoG8hbBz%2FVILyBTfDrs0uUupT1AHGU1W6%2BYldUzij%2F4r%2BMSxngybGUkGld3gYtnwuUrbUbcOx2B71soDqVVnX6onjUaFxZSKIhs6cUJXgHW4VIzESn6bbSJnI%2B1B7zewZPjm2hZDBt%2FD0QxoOeqJ5FkEQPi1TbHBGHN5ZYjZAhzdgm6jLCux3b6Xgs4WhJZsVGbvOSWJxCM3uWdsIvT%2FyyLnNoP8NG5mZmIhBchM5OxtLzJJ1CL3a%2FnIR2NlbV4DsQJPw%2Bvp2nkY8GgTJjmMvM2E%2B0oJ9tXrkApIbb6JVJWx7KiuJ3j%2FrItvhoMQRYatt8QmGb6Ar5olkm%2FKdu4gC6Qw1Uj0FRbD7eggJFdgNj39BOqJIWeZM%2B17C24VwTaQ1J20fKIw%2FevevwY6pgEEfsDet2ff6fe15z6EQjGulhhhkr0TnOt3K6pOvAx3fPablSSoR8PEG0yjvWdChEQNCDxvSUTBOeCBGQTmcWN%2BtTp%2F4azpQ84UJxwW%2FJARTp6d%2Fp32AlO3nf1t0jwyjKEI%2FVh9AxoxJ4WJMKveI2dCf4S4r6kVmzaho%2BK2r6nIIk2oQVUymVd3VyCgxLzy%2Brq2U4F2s70t08RVP1UgOpBECjb5E4%2F0&X-Amz-Signature=fa7abc7f3275dbec8756e53bc6cdce688b5329afa9ca4bc489a480f392572e14&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5RQKP2Y%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIFWoHPMOY0im1dkFRyT7IIWmM9ZzCjwZszfd4gZwkFhfAiBoFNrkx32C3nkrqf1UKkhmKhPfuZtYAxvH15kHEfDABSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgEq9twNnXf8%2BcXZtKtwDRkUFbgSxsZHTOdG0hDmHdbzKv6pCWuHvfFtxYgq9JrIMirSXjTefxC%2ByNHS1lK8yOlVmluiN%2BF4DedZ3X0oqYkFM7CIAAvm1GUDAi1Erors%2BdKkMCLOq7FyggVG5k3UckeJep7xQ0FXfIaG7SYuRMxTAp2l32V0xY5gGIEv88JvQ0UGy4Zx1RL5X5o0H9rkVe988YKwvkq0LKec22W9RhhqXZFFroVv%2F91YTurG27OeLKjAd4EU%2FjoG8hbBz%2FVILyBTfDrs0uUupT1AHGU1W6%2BYldUzij%2F4r%2BMSxngybGUkGld3gYtnwuUrbUbcOx2B71soDqVVnX6onjUaFxZSKIhs6cUJXgHW4VIzESn6bbSJnI%2B1B7zewZPjm2hZDBt%2FD0QxoOeqJ5FkEQPi1TbHBGHN5ZYjZAhzdgm6jLCux3b6Xgs4WhJZsVGbvOSWJxCM3uWdsIvT%2FyyLnNoP8NG5mZmIhBchM5OxtLzJJ1CL3a%2FnIR2NlbV4DsQJPw%2Bvp2nkY8GgTJjmMvM2E%2B0oJ9tXrkApIbb6JVJWx7KiuJ3j%2FrItvhoMQRYatt8QmGb6Ar5olkm%2FKdu4gC6Qw1Uj0FRbD7eggJFdgNj39BOqJIWeZM%2B17C24VwTaQ1J20fKIw%2FevevwY6pgEEfsDet2ff6fe15z6EQjGulhhhkr0TnOt3K6pOvAx3fPablSSoR8PEG0yjvWdChEQNCDxvSUTBOeCBGQTmcWN%2BtTp%2F4azpQ84UJxwW%2FJARTp6d%2Fp32AlO3nf1t0jwyjKEI%2FVh9AxoxJ4WJMKveI2dCf4S4r6kVmzaho%2BK2r6nIIk2oQVUymVd3VyCgxLzy%2Brq2U4F2s70t08RVP1UgOpBECjb5E4%2F0&X-Amz-Signature=890dbfa4fb750df3070827330e4b301cad8f9813d085a7fc1091645a67690980&X-Amz-SignedHeaders=host&x-id=GetObject)

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

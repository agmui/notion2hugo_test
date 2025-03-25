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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHY4B42O%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T041028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEiTo75wnmSJRDgq4McLp2L2uMDC2PmzarQ8wK6xC8qaAiBnR0rKx1Ub879Ke3L09FddAWSbeC8qeGcA%2FoXMne9kdyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgSAr92RrsiXhvKe%2FKtwDSjwdZPlkTK7JeQhchmJK30gXmYra9fnhF%2FSV8f%2F7RkxmUpkvTEsTxfB9Ljqx%2FcdLsf5KivOUaiLtz%2F%2BNs9KAoAIj86RzZTezItT8CyixiI2e98tfvtoQwXP0uEkS6IAinxTjAo4FSgKZlmNcfNLFD4x%2FYF7eXRDQLPJn3nysqQyMwqNFavCGs4iCbPu9P8tuHR2UzaxXLPAF23eJfVQP%2F9mL61cFK9gJqeI0tFRDUGZuOV%2FsM1fE91SmBHHnpn3ClViRoDEJJWb6lJw%2FwH%2B5z%2Fy6X7WUIHqQwjBDv6RqwdT0pMOYcEtTWlhHkfBUrtWHgV79ZTTL3T3Zhzn2RMKfX73AWXFC94aFw%2BrskTv%2BJP8Mjkg2bZ8%2FcJf90Z0wi5qdJ6vTkD46j5ZSSSabzZy9DsjLhR1v%2BTHSa3DeEhY4bzQG%2FCxLwwGFFvXtgQ%2BKePpsRlyjwT9MmMt7zlWR32etXpBYq06KV8xZvcx26q42Eflv%2F64PJiAcbEA%2FW2zTiniqKmICxb59VlmqKEmvQhiTbkJ9Xzlf%2F2K%2FAt1Ir9shIEUx9OC4zVmjML8x2nSGdCfKJ2HJhKxzpkYUfRbOnTQ9llvai7EQalxZabrLs3DEolAg6aHgnveyfpR3NfAwl9KIvwY6pgEleICJnZwRvqcbS6PrAx8oVollMVIYRnwXieqItyyQ0Z%2BQsBmRC8YqWCH2kIS6Ul8iqAfug8bvmCY9BAOv09D1ymv3McQt2l13QbbVEvLlMZ%2F82attbVOFFAPWST3HooPqZLJKagnSa8d7mE9hb6Sw2I8kScO4HAk94wpFoVVC2DhJMlTGLtO5ONX9gB7Rb92YjnifrO5l2PsgqLykZHL1%2FOdK%2Bfhq&X-Amz-Signature=c3d2e4fa3f000b2692557198448a2b30c80e7dd22cf5e00e45b6860a80b72e27&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHY4B42O%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T041028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEiTo75wnmSJRDgq4McLp2L2uMDC2PmzarQ8wK6xC8qaAiBnR0rKx1Ub879Ke3L09FddAWSbeC8qeGcA%2FoXMne9kdyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgSAr92RrsiXhvKe%2FKtwDSjwdZPlkTK7JeQhchmJK30gXmYra9fnhF%2FSV8f%2F7RkxmUpkvTEsTxfB9Ljqx%2FcdLsf5KivOUaiLtz%2F%2BNs9KAoAIj86RzZTezItT8CyixiI2e98tfvtoQwXP0uEkS6IAinxTjAo4FSgKZlmNcfNLFD4x%2FYF7eXRDQLPJn3nysqQyMwqNFavCGs4iCbPu9P8tuHR2UzaxXLPAF23eJfVQP%2F9mL61cFK9gJqeI0tFRDUGZuOV%2FsM1fE91SmBHHnpn3ClViRoDEJJWb6lJw%2FwH%2B5z%2Fy6X7WUIHqQwjBDv6RqwdT0pMOYcEtTWlhHkfBUrtWHgV79ZTTL3T3Zhzn2RMKfX73AWXFC94aFw%2BrskTv%2BJP8Mjkg2bZ8%2FcJf90Z0wi5qdJ6vTkD46j5ZSSSabzZy9DsjLhR1v%2BTHSa3DeEhY4bzQG%2FCxLwwGFFvXtgQ%2BKePpsRlyjwT9MmMt7zlWR32etXpBYq06KV8xZvcx26q42Eflv%2F64PJiAcbEA%2FW2zTiniqKmICxb59VlmqKEmvQhiTbkJ9Xzlf%2F2K%2FAt1Ir9shIEUx9OC4zVmjML8x2nSGdCfKJ2HJhKxzpkYUfRbOnTQ9llvai7EQalxZabrLs3DEolAg6aHgnveyfpR3NfAwl9KIvwY6pgEleICJnZwRvqcbS6PrAx8oVollMVIYRnwXieqItyyQ0Z%2BQsBmRC8YqWCH2kIS6Ul8iqAfug8bvmCY9BAOv09D1ymv3McQt2l13QbbVEvLlMZ%2F82attbVOFFAPWST3HooPqZLJKagnSa8d7mE9hb6Sw2I8kScO4HAk94wpFoVVC2DhJMlTGLtO5ONX9gB7Rb92YjnifrO5l2PsgqLykZHL1%2FOdK%2Bfhq&X-Amz-Signature=2bb6d1720d571b289ef625d979609085e6065f9b006290ab51d0517027c6e814&X-Amz-SignedHeaders=host&x-id=GetObject)

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

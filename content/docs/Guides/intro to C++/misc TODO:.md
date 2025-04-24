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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFSEEW7E%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T121519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIHGn%2BSThTePzoPZV6H0g1zJHvaz9zyhWxR20Qr%2FuW%2FWIAiABBEjniZpzFUF0LqLBEqiSJMpyNCb%2BMC6eWFEXtTb72Cr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMvPhfNkr3AGtgN9QdKtwDJryjp%2BOZVIZT6PiAnf18CYCpr166EB%2BZAdz3gQIcK1LI1kY5l1vHJ0N2e0XWvakQ53ltDm61gf4Dt2cdk3b%2BS60z19DImrBHClVJ5qjg9ASbkWPRCZtxz1hmPf2iReU3MLhQLh%2BUGw4ar5PJaVJXj0yfJ4qZacXDqzMRAC5hKiI5XNKY3BBdX7VSfg112%2BTDcQlcWTUPn8xKezqxZtvexYSdp0scBSVZ8y6w0h%2F7LycilYFynAFzJP12wl9vfEdR0ChNv2%2FgrSpOSmc0kR2wyb80ZjdbOMSSCVDwv9C5w9KLbghySDaNuzjx4hWs4gsYfo6qv8ruBTqykckAjFbvq%2BVGYQkLAlTtGvSmZwnvi6AN%2Bhc028V8RnCdt15aHfxVvr1UTv%2FD0Qe5u9zDtpdubFyD%2BdWS39lnnFRwOcaGVcvNf5wYqnmHlNX3tVhG14lf7mivDxUP9OTMOYeHJziHQXKpYQisqvpTYlMHLgu7zMaG1c6PA%2FIOu8rdofmKbgPa5EF7v8dy08VLZY5TEbzMFH8l3BSzqCYqLYRvhdxM6zaZa2Uu6qDOvUMX7xGDpep7Nwpp0DysXAURvmC%2BId2H%2BVvtnTyqitjAMqHPaJG1vYBA8J0q%2FXfXhUU8F7cwjbyowAY6pgE%2BlirU4LiYHT9QCMOBps%2Fsn0Ve9eQzoGuYd%2BvhfjyQR%2FygcZH22RmUIzmmP%2BQjPBZ%2F7xkq%2BEzyTk2uIj2ZZDr5PEnGhBqXaCv8C%2Bstz93T2b0CfPbWtCclho3t4EP949G50NuLKygu2WTZRlzS7YvkTV6e1JZdq1uKr4zR%2FBQfJh6M5i5qUaKH%2FFy7CE83f1KTpW9UwC19hl2plnUZu2QKOm65GeJt&X-Amz-Signature=0f913fa227590d2d9b2e32802f746e63ea652c5453e73a14b6694395504df527&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFSEEW7E%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T121519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIHGn%2BSThTePzoPZV6H0g1zJHvaz9zyhWxR20Qr%2FuW%2FWIAiABBEjniZpzFUF0LqLBEqiSJMpyNCb%2BMC6eWFEXtTb72Cr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMvPhfNkr3AGtgN9QdKtwDJryjp%2BOZVIZT6PiAnf18CYCpr166EB%2BZAdz3gQIcK1LI1kY5l1vHJ0N2e0XWvakQ53ltDm61gf4Dt2cdk3b%2BS60z19DImrBHClVJ5qjg9ASbkWPRCZtxz1hmPf2iReU3MLhQLh%2BUGw4ar5PJaVJXj0yfJ4qZacXDqzMRAC5hKiI5XNKY3BBdX7VSfg112%2BTDcQlcWTUPn8xKezqxZtvexYSdp0scBSVZ8y6w0h%2F7LycilYFynAFzJP12wl9vfEdR0ChNv2%2FgrSpOSmc0kR2wyb80ZjdbOMSSCVDwv9C5w9KLbghySDaNuzjx4hWs4gsYfo6qv8ruBTqykckAjFbvq%2BVGYQkLAlTtGvSmZwnvi6AN%2Bhc028V8RnCdt15aHfxVvr1UTv%2FD0Qe5u9zDtpdubFyD%2BdWS39lnnFRwOcaGVcvNf5wYqnmHlNX3tVhG14lf7mivDxUP9OTMOYeHJziHQXKpYQisqvpTYlMHLgu7zMaG1c6PA%2FIOu8rdofmKbgPa5EF7v8dy08VLZY5TEbzMFH8l3BSzqCYqLYRvhdxM6zaZa2Uu6qDOvUMX7xGDpep7Nwpp0DysXAURvmC%2BId2H%2BVvtnTyqitjAMqHPaJG1vYBA8J0q%2FXfXhUU8F7cwjbyowAY6pgE%2BlirU4LiYHT9QCMOBps%2Fsn0Ve9eQzoGuYd%2BvhfjyQR%2FygcZH22RmUIzmmP%2BQjPBZ%2F7xkq%2BEzyTk2uIj2ZZDr5PEnGhBqXaCv8C%2Bstz93T2b0CfPbWtCclho3t4EP949G50NuLKygu2WTZRlzS7YvkTV6e1JZdq1uKr4zR%2FBQfJh6M5i5qUaKH%2FFy7CE83f1KTpW9UwC19hl2plnUZu2QKOm65GeJt&X-Amz-Signature=2635ace478314bef44139fdf198ecbcddb7aa115f5948e6f939a5f580fb76e4d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

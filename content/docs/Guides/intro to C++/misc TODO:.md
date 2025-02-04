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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGA4FPAY%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T150738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCH1izY0rEtHo9Em4PcGSWhCP42AqiYEG7wuPfotGhcZUCIQC767gzoTtHdb5So0rALvTTRLfYAaf%2BXB2XElK8mfZoFir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMfSMS%2BMm7Z2FskE85KtwDfvvWQ7leheR0qJYCcgkPokBTvyoQVepf105%2BKTQ6IG7zoxK8xmj%2Fw4GzEmsTsniq5FUqClvVBwVcqMuGOV4a90fS9L0vv5wsEAbpoHdItT2Y9owTugnJSS4vWfYHtwADqpN4Ty4A9lUINGjvXAm%2By2idlXBq1kP3%2FMum225B7GujFAB3BCj6Dt54WSR3WBZJDPyxFe2ICJHMfUPdq4kdg1pCa4bClzZsuQRm7AMFAP9xqOs6dA4xF5TMyTyy2x68k36oy7x0FtcdepY0i%2BhgL47u8UsdcRRSZKWo5PDq8eym%2BaCbpHb6hPOub4TPnxrp%2BOGGXBiFzs0304fTlD3LAMGoxULNluiAxCnA3MTsF31zo0u9V1FFNuQjK40ZSISRpQwgZmZpBtPYLklYmzanpqWgjpLYCL9P6UjMDlChror3pV0epFGHZqTBFxw8XYUQ4ZNWvRfSwl%2B6eJvlQZ%2BO0OMoE8vaCK19JAax7kxSE5nXcJcnXVe%2Bzf5%2FeKiSWhes43EyFw1V4H3SlYSkMZZ4gTvzy5kiEjgNZ40rJbRxFd0BCfrXedFu6n5uyrdiy5BsDJi1h8euoU4O3yiyn7yQnzE3yP9PozhxSO2MdbCJEr0BFQpw96Kim3vxY3cw7r6IvQY6pgFZrkKneujuwAvrISZa7P3stKASQ68%2B9HTAo819lEc2iWZsU9In5P7d5X0SOYPxNV2T%2Fka%2BcRuRKZcZ3u1mf%2F3OmToIi7vRBh0PgObiVRHovlb8hQXFHwhEWFEieAUYyBanj5M%2BioApG3deO4J%2BhClUvwWjGgTWzEx1xmYWF5uwdf6kYcgYYqrXKq4ibrDJkSD%2BVW90owXlTP7jEabTKSeiGW0JEZpY&X-Amz-Signature=96425747696290642b72d01290f762c4f64645ff2b03aa2e42ba02884c23c904&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGA4FPAY%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T150738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCH1izY0rEtHo9Em4PcGSWhCP42AqiYEG7wuPfotGhcZUCIQC767gzoTtHdb5So0rALvTTRLfYAaf%2BXB2XElK8mfZoFir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMfSMS%2BMm7Z2FskE85KtwDfvvWQ7leheR0qJYCcgkPokBTvyoQVepf105%2BKTQ6IG7zoxK8xmj%2Fw4GzEmsTsniq5FUqClvVBwVcqMuGOV4a90fS9L0vv5wsEAbpoHdItT2Y9owTugnJSS4vWfYHtwADqpN4Ty4A9lUINGjvXAm%2By2idlXBq1kP3%2FMum225B7GujFAB3BCj6Dt54WSR3WBZJDPyxFe2ICJHMfUPdq4kdg1pCa4bClzZsuQRm7AMFAP9xqOs6dA4xF5TMyTyy2x68k36oy7x0FtcdepY0i%2BhgL47u8UsdcRRSZKWo5PDq8eym%2BaCbpHb6hPOub4TPnxrp%2BOGGXBiFzs0304fTlD3LAMGoxULNluiAxCnA3MTsF31zo0u9V1FFNuQjK40ZSISRpQwgZmZpBtPYLklYmzanpqWgjpLYCL9P6UjMDlChror3pV0epFGHZqTBFxw8XYUQ4ZNWvRfSwl%2B6eJvlQZ%2BO0OMoE8vaCK19JAax7kxSE5nXcJcnXVe%2Bzf5%2FeKiSWhes43EyFw1V4H3SlYSkMZZ4gTvzy5kiEjgNZ40rJbRxFd0BCfrXedFu6n5uyrdiy5BsDJi1h8euoU4O3yiyn7yQnzE3yP9PozhxSO2MdbCJEr0BFQpw96Kim3vxY3cw7r6IvQY6pgFZrkKneujuwAvrISZa7P3stKASQ68%2B9HTAo819lEc2iWZsU9In5P7d5X0SOYPxNV2T%2Fka%2BcRuRKZcZ3u1mf%2F3OmToIi7vRBh0PgObiVRHovlb8hQXFHwhEWFEieAUYyBanj5M%2BioApG3deO4J%2BhClUvwWjGgTWzEx1xmYWF5uwdf6kYcgYYqrXKq4ibrDJkSD%2BVW90owXlTP7jEabTKSeiGW0JEZpY&X-Amz-Signature=9a5b23d08f341557bd5c5be56d0548830e4b0e3e8af2179c42813e339fd7aa5b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

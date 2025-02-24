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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6BDBEHT%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGqcBLSCj7VOhYG7pKjmDcQ%2BInuchm%2B%2FW6oDSHh6kwoDAiEAqVKM1bGphOWUnO6%2Bm%2FpcKrQqjhPhyalqGct%2B53f6MYwq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDASWy5D2FQhIe2iYsSrcA0BxY2%2FFyIJXbaCHJq58xHP1GSpqH2Zp1VO2VxKC3thsR9yiNY5kJQNpC0qOW3XoV8tjzY3oZEy9lBh%2FVgspQd%2FcTOYGuMZEv0ygnd0XEPNKFd8XJrxn2Z6B8c9OX4ZNEfggg1aNN1O1tvotoRM5WA6Wgb5JWfRBju89Zpvw0tapia2cryqbObAxDW%2BPFVVbcF5O9pCXivLf%2Bs2B0IYXSLp50nMaFpbI%2FTMOZ3GcEXi%2FEqds%2Bq8zrgvFNL9IK1dnW%2BROfnUOAjEF3TzQEB%2FXvUIrGrUHDSvcJBYUkI%2FHSmBK%2FcJdk2hZ9692tZf%2F3LXfMQ7HtoAj4NR8R4DsEC6yTsG2ivRnlD8rigoyI9%2FlXrOoY6tkiZoeuqN9c5tcSSokNspFppEQr985he6goP1GFerIIzatZ9Rn6f8vtixgOOCu%2FjxJOH4h86vyrW6X1fzh1TlenPYyng%2BYmHzT8ZaoAUgSoyT%2B2e%2B3xaGJe9Mf0m7hqEH68BRorI72QComHPXTnwbv1XkotiCvEkUK5pWMCvhrGL75eR5pRHcvO%2FlMUSF%2Bhz2iYuk4dvr4GCEqTKXWd2vK1ABUoYO4cRcurKYdqBS6%2FMMuQQyRjbhs7Wox3OBEU8%2B75nSJ1MJJ0K5VMNC6870GOqUBVUsnEcdiT7tpUN2sW46qrrs%2F%2BmKcfPTF3m6ht3Y2YZn7Azepgh5w4SwwllS1%2BmTCqe%2BeQom%2BREpnbHpE4m7uTdgba2ed1CHnKHp5txjlOQAz%2FGbLGNFHlJXmbb2o3axb3QihvOvNzP0Ns13HJFWGPSCNGIc33YQ5Yx96khKEL4t1xx1v4VR1m%2BQpPNrVMltSUInvqiImizPPgnSA9dGta0U7nROe&X-Amz-Signature=55ae21ce2d40f05aaf489c33e9d3a7fb65222e4b92b40094a39a7af3a06d9238&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6BDBEHT%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGqcBLSCj7VOhYG7pKjmDcQ%2BInuchm%2B%2FW6oDSHh6kwoDAiEAqVKM1bGphOWUnO6%2Bm%2FpcKrQqjhPhyalqGct%2B53f6MYwq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDASWy5D2FQhIe2iYsSrcA0BxY2%2FFyIJXbaCHJq58xHP1GSpqH2Zp1VO2VxKC3thsR9yiNY5kJQNpC0qOW3XoV8tjzY3oZEy9lBh%2FVgspQd%2FcTOYGuMZEv0ygnd0XEPNKFd8XJrxn2Z6B8c9OX4ZNEfggg1aNN1O1tvotoRM5WA6Wgb5JWfRBju89Zpvw0tapia2cryqbObAxDW%2BPFVVbcF5O9pCXivLf%2Bs2B0IYXSLp50nMaFpbI%2FTMOZ3GcEXi%2FEqds%2Bq8zrgvFNL9IK1dnW%2BROfnUOAjEF3TzQEB%2FXvUIrGrUHDSvcJBYUkI%2FHSmBK%2FcJdk2hZ9692tZf%2F3LXfMQ7HtoAj4NR8R4DsEC6yTsG2ivRnlD8rigoyI9%2FlXrOoY6tkiZoeuqN9c5tcSSokNspFppEQr985he6goP1GFerIIzatZ9Rn6f8vtixgOOCu%2FjxJOH4h86vyrW6X1fzh1TlenPYyng%2BYmHzT8ZaoAUgSoyT%2B2e%2B3xaGJe9Mf0m7hqEH68BRorI72QComHPXTnwbv1XkotiCvEkUK5pWMCvhrGL75eR5pRHcvO%2FlMUSF%2Bhz2iYuk4dvr4GCEqTKXWd2vK1ABUoYO4cRcurKYdqBS6%2FMMuQQyRjbhs7Wox3OBEU8%2B75nSJ1MJJ0K5VMNC6870GOqUBVUsnEcdiT7tpUN2sW46qrrs%2F%2BmKcfPTF3m6ht3Y2YZn7Azepgh5w4SwwllS1%2BmTCqe%2BeQom%2BREpnbHpE4m7uTdgba2ed1CHnKHp5txjlOQAz%2FGbLGNFHlJXmbb2o3axb3QihvOvNzP0Ns13HJFWGPSCNGIc33YQ5Yx96khKEL4t1xx1v4VR1m%2BQpPNrVMltSUInvqiImizPPgnSA9dGta0U7nROe&X-Amz-Signature=20f64ff43d8030284aa1a34e95f2f0a6f3ca8af9842f878e0d5c3f42676e642d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

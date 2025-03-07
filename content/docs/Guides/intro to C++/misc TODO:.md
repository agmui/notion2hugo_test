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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDXGMJCQ%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T190151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCR4NmLqwk29sHlsQedsyqjRaW1V%2FP%2FwTpX8NJ1J0iOjQIgZJ7W%2FfmTEPHLiDy%2FNKhh8Bb6gPWpB1eB0qLgaYGRMHoq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDBlxiCNL004%2BCM6UgyrcAzJvMpkw9Fi7cw6EDM3jY7gO5FRHPoL4MWTjbCY9cz%2FQHftPA2Yh38RIc3GDVOuHENQBGGoQyAgDV4c0sfAPJyWMXaoDHfnhl5tD3fzjMH%2BPuCyVbSM1cf3NGHzByfk6vc31uZxXyktbxDGJQcvHe7CvzFBzwoAp1fMQeCbqrSwTF6LhRkwEj57O9BQTwpqy10g%2BD6UhpfbtVlvsLkHRSDhkKWwkJrATFrBnOhkoDoKA9ga9XDLmXcjTnyRpHz9Qara5UKE76WTnuk0VS%2BtK3jk2jaEd1tP7pu2uWfcaM%2FiZ7yRtvSVj5L2iNxoajaiBKCtPq9pF9GRVWOxFN6q2PnuubQJeOZMzbtCser8MQnzGlIUDDkFw0epSlXoiJhqy54Bto3d%2BKtEBkO%2BoA4Md4dT2ZXgW80zB08I9q%2BgX49kZzE8x2EdjiZAOQMiE%2FmSt7aop%2FjaQgq9x3Oqw93Mc3ygESTuyK%2FOJ0YI7JK6dl5Q3IOLjnLT%2BQqBLYOKSzeg7g5bdva%2FP5O74tJtJMB836kNLu0zhZr8MhJJfJUKEqP%2F%2FWl1MolEczb0TNnmBNdiKwfKhswfLtLXOvuBUvLcqUIqMwo6mY%2FrG5dYMAm%2FBiG7K92YXYxq%2Fqm2xK2tkMNj%2FrL4GOqUBWpsMOARjN1FUdgpShOMPFm8qbXaodZF5RgUiL4%2BMkr4khSBaRn0A%2BJufu%2FHi6i%2BWD2uY7hjY1MSyZ3VEQAPK6QKVN9S05%2BghereEM7y5xT%2BMeL4V8b82aIYxxLS5%2FPJj6UzFoln4zh9%2BoI4VKhWOdhFtaOid9kvtsEg%2BNz9N7kOx2WXL%2FAzfH2uu0mXZMywr4Opu0F2VpOVpMeZvlrSpL6L1isYv&X-Amz-Signature=9073786e90eee9f0a53a88fcd3441b6af367cc99611617dbf64c0597d21ab555&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDXGMJCQ%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T190151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCR4NmLqwk29sHlsQedsyqjRaW1V%2FP%2FwTpX8NJ1J0iOjQIgZJ7W%2FfmTEPHLiDy%2FNKhh8Bb6gPWpB1eB0qLgaYGRMHoq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDBlxiCNL004%2BCM6UgyrcAzJvMpkw9Fi7cw6EDM3jY7gO5FRHPoL4MWTjbCY9cz%2FQHftPA2Yh38RIc3GDVOuHENQBGGoQyAgDV4c0sfAPJyWMXaoDHfnhl5tD3fzjMH%2BPuCyVbSM1cf3NGHzByfk6vc31uZxXyktbxDGJQcvHe7CvzFBzwoAp1fMQeCbqrSwTF6LhRkwEj57O9BQTwpqy10g%2BD6UhpfbtVlvsLkHRSDhkKWwkJrATFrBnOhkoDoKA9ga9XDLmXcjTnyRpHz9Qara5UKE76WTnuk0VS%2BtK3jk2jaEd1tP7pu2uWfcaM%2FiZ7yRtvSVj5L2iNxoajaiBKCtPq9pF9GRVWOxFN6q2PnuubQJeOZMzbtCser8MQnzGlIUDDkFw0epSlXoiJhqy54Bto3d%2BKtEBkO%2BoA4Md4dT2ZXgW80zB08I9q%2BgX49kZzE8x2EdjiZAOQMiE%2FmSt7aop%2FjaQgq9x3Oqw93Mc3ygESTuyK%2FOJ0YI7JK6dl5Q3IOLjnLT%2BQqBLYOKSzeg7g5bdva%2FP5O74tJtJMB836kNLu0zhZr8MhJJfJUKEqP%2F%2FWl1MolEczb0TNnmBNdiKwfKhswfLtLXOvuBUvLcqUIqMwo6mY%2FrG5dYMAm%2FBiG7K92YXYxq%2Fqm2xK2tkMNj%2FrL4GOqUBWpsMOARjN1FUdgpShOMPFm8qbXaodZF5RgUiL4%2BMkr4khSBaRn0A%2BJufu%2FHi6i%2BWD2uY7hjY1MSyZ3VEQAPK6QKVN9S05%2BghereEM7y5xT%2BMeL4V8b82aIYxxLS5%2FPJj6UzFoln4zh9%2BoI4VKhWOdhFtaOid9kvtsEg%2BNz9N7kOx2WXL%2FAzfH2uu0mXZMywr4Opu0F2VpOVpMeZvlrSpL6L1isYv&X-Amz-Signature=01426d70b90db5d7403bd344bf3fb6bb7e78be7fb6ff49b535b56bad84b47096&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBXVNRVM%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T050921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtIr1WMWEX45T0%2FT%2BgSws5Vp%2FvHePoxHcYn922Ft4MIgIgEPwt%2FNExiYAXecctofffswqdPG4ouWruE3S8DS0vYkUq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDOxSXoIKwjvyyUgbPircAxPAdy6Qwn5gXWazXUVK32SBilNLx54SWj2vmIbTORlfCWnyyHwQOHmh%2FkM8ptt1kEKceHNenAJNk%2Fn7tTp88DTrtTwUh%2BMDIGyc3BLi6cpF18sFE9xMX%2FEBUF%2Fxwn9UMmV36uuKbk%2FyMVgB%2F6bZifbpFwn2rRCG2EYvt6yp40D%2BU7hfkFb6OQOOVznaYESUkeJpHZguxT7%2FwFVSnD0Ady3SJb9MSR08VwrldNycZTKId0IfLodGtgkUCX47aVHe7w3oxHqnMZKafzsqrb3OEngLuBY06eP8s6UdyCpKo9mkQ6Q0%2F2illyvy%2BcRZCcz7sy1rVFetnoLGBYRGfB33QbyCns9UAoRZFQOy1vuXfiKj39kyugSxcsLhUdrtUs%2FaAFtydaLYwu4QMIPxun2Pqk7G2SZ%2F0oByPfpzTFv1m337ceNb0%2Bd0%2BvNDNFm%2FHwSYoNibfDn4TO1C0pya%2BOtXGIa1O5Qe6i5Uw7rmED0XY%2Fi%2BpSpKmvZSgZBjJE90PPhxD58Wql4AJD71Ay7b7NoK5AUnTSEkFrkqsb3zwEi0eS0Ac%2F4dK9PWVZJjAMS2BpHErfxa6GUCV%2BddqF6dFTKydBN1zbg8x6aIEigu%2Fq5JMs7KMd8D54HHXZxeWTwZMPKR68AGOqUBXjonOyNG6ChN3f2cyHgRM5sRAs5YL1OJpgC4Lp737P1%2Bu7nqxyp2MAG8e1lFHcDl5r%2BJra45JjGFsbdof0kuF8eZH2lMRsz5JMS7y6gnIkw9R%2BxVDCLFZZW8Tzq9XjYda%2FY%2Bu4eQheBf6fKZC9LZ9Yhy%2BLQHTdPjmB%2BFcrRp6AV521GF1wMZEcQ5C%2B2mKe7N2OH57w16X0a6JsjPFjJVVzYR7oZE&X-Amz-Signature=ac5249587b8eb4daff93b61292263ad1e59e19d4d6d10514b4d87c9c5b67af07&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBXVNRVM%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T050921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtIr1WMWEX45T0%2FT%2BgSws5Vp%2FvHePoxHcYn922Ft4MIgIgEPwt%2FNExiYAXecctofffswqdPG4ouWruE3S8DS0vYkUq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDOxSXoIKwjvyyUgbPircAxPAdy6Qwn5gXWazXUVK32SBilNLx54SWj2vmIbTORlfCWnyyHwQOHmh%2FkM8ptt1kEKceHNenAJNk%2Fn7tTp88DTrtTwUh%2BMDIGyc3BLi6cpF18sFE9xMX%2FEBUF%2Fxwn9UMmV36uuKbk%2FyMVgB%2F6bZifbpFwn2rRCG2EYvt6yp40D%2BU7hfkFb6OQOOVznaYESUkeJpHZguxT7%2FwFVSnD0Ady3SJb9MSR08VwrldNycZTKId0IfLodGtgkUCX47aVHe7w3oxHqnMZKafzsqrb3OEngLuBY06eP8s6UdyCpKo9mkQ6Q0%2F2illyvy%2BcRZCcz7sy1rVFetnoLGBYRGfB33QbyCns9UAoRZFQOy1vuXfiKj39kyugSxcsLhUdrtUs%2FaAFtydaLYwu4QMIPxun2Pqk7G2SZ%2F0oByPfpzTFv1m337ceNb0%2Bd0%2BvNDNFm%2FHwSYoNibfDn4TO1C0pya%2BOtXGIa1O5Qe6i5Uw7rmED0XY%2Fi%2BpSpKmvZSgZBjJE90PPhxD58Wql4AJD71Ay7b7NoK5AUnTSEkFrkqsb3zwEi0eS0Ac%2F4dK9PWVZJjAMS2BpHErfxa6GUCV%2BddqF6dFTKydBN1zbg8x6aIEigu%2Fq5JMs7KMd8D54HHXZxeWTwZMPKR68AGOqUBXjonOyNG6ChN3f2cyHgRM5sRAs5YL1OJpgC4Lp737P1%2Bu7nqxyp2MAG8e1lFHcDl5r%2BJra45JjGFsbdof0kuF8eZH2lMRsz5JMS7y6gnIkw9R%2BxVDCLFZZW8Tzq9XjYda%2FY%2Bu4eQheBf6fKZC9LZ9Yhy%2BLQHTdPjmB%2BFcrRp6AV521GF1wMZEcQ5C%2B2mKe7N2OH57w16X0a6JsjPFjJVVzYR7oZE&X-Amz-Signature=9ed33856822028c1a4ffbcf893ece66fae5282abe45e99ecca8b7db54175ea6f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

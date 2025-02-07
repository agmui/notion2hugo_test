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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QMJHP4I%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T140724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCzm3Zn3oTAmfQu%2FO9AvKrISvtiPRTSZpYPxCuhhkd0qQIhALoK6fHB8PAmsCybJuMLnfg20is4eXBhczc8cWlpZCOiKv8DCHYQABoMNjM3NDIzMTgzODA1IgwW6ZN6SsWLNb917S0q3AOB8I%2BsOpwLUnXN75oDBpP90DFiCU9XNgS4AqKr57KbmyrbN3%2FaQuj8ntJUb39%2FQzA02bxfnCvS%2BDULwsVcK25RgxQJoEwe4PSXNEXPVvLZ4ZR0%2FreD%2F5yly%2FfxQzvuA4DbgvOe1pcLEH1CcJUXfzVhlUXX301oSiYbTOKFHulfOGqIzphL%2FEvVzjh4dztL4h90Ak%2FOWLXjpNC4HW1yzQrCIR5yCaKV09OpKz63kb0bENNT0rTNTKm%2Bw5QWfoA87ycFhjYLWZ8hHwftrBg0IakwyOgG5ln0hL0TcKj6dXASCbATMuznXX8CBOb%2FGbtmHbFKib7L%2BrNKGkb%2FShLEgPiiQcFL1OjSrBczy3LiqglmJyZxmmhtsQv1Ws0UqA%2BbIKRfzUTStbqHWKOsbE%2FX125dUExUHjAbjS6cHkHokfV3w7XzJZZgmGQB7x%2BmBQz2LKOmQX%2FCCiZt%2FnGonXqFz3%2FznabNrITj4hLdDKY2P4JmXmChk88eBReaKfxP1jsoLi5Z0267sYI89QQER7wd75XXD3rhGKJJu8UyFhWuLpAhbBTJ6YD0IStCrKI6RfzxND2anDyHxJbuW5k8k3kT%2B4gr7b1NDdS7OIq4fs9n%2Bf9Hl%2FP%2BkSlafXu%2F%2B5RI5zDejJi9BjqkAfCwRJ245GzpsRmY5IaxmcYxyPmnb98HbQqUPVFCpMcirCxEzG3%2BuF8fQHU2NRjhk12cj9FeyM0A07WX0Z1RAzhr5sg11IuOhl1lUgLewDToBf9DnMVp%2BprLgqtPyZpbich4Ket37Ljz5IV1rBrdcqRx2lvLNR5KYbm3QjlIflzq59xZEAhVhZS6EV97hvdYjM6iPncDgvj0x7kbmYg4fgEWG494&X-Amz-Signature=05c6c3a4d053bc1a15a94916e33405d2cdfaf563ddbba1b29dbaaff636d81366&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QMJHP4I%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T140724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCzm3Zn3oTAmfQu%2FO9AvKrISvtiPRTSZpYPxCuhhkd0qQIhALoK6fHB8PAmsCybJuMLnfg20is4eXBhczc8cWlpZCOiKv8DCHYQABoMNjM3NDIzMTgzODA1IgwW6ZN6SsWLNb917S0q3AOB8I%2BsOpwLUnXN75oDBpP90DFiCU9XNgS4AqKr57KbmyrbN3%2FaQuj8ntJUb39%2FQzA02bxfnCvS%2BDULwsVcK25RgxQJoEwe4PSXNEXPVvLZ4ZR0%2FreD%2F5yly%2FfxQzvuA4DbgvOe1pcLEH1CcJUXfzVhlUXX301oSiYbTOKFHulfOGqIzphL%2FEvVzjh4dztL4h90Ak%2FOWLXjpNC4HW1yzQrCIR5yCaKV09OpKz63kb0bENNT0rTNTKm%2Bw5QWfoA87ycFhjYLWZ8hHwftrBg0IakwyOgG5ln0hL0TcKj6dXASCbATMuznXX8CBOb%2FGbtmHbFKib7L%2BrNKGkb%2FShLEgPiiQcFL1OjSrBczy3LiqglmJyZxmmhtsQv1Ws0UqA%2BbIKRfzUTStbqHWKOsbE%2FX125dUExUHjAbjS6cHkHokfV3w7XzJZZgmGQB7x%2BmBQz2LKOmQX%2FCCiZt%2FnGonXqFz3%2FznabNrITj4hLdDKY2P4JmXmChk88eBReaKfxP1jsoLi5Z0267sYI89QQER7wd75XXD3rhGKJJu8UyFhWuLpAhbBTJ6YD0IStCrKI6RfzxND2anDyHxJbuW5k8k3kT%2B4gr7b1NDdS7OIq4fs9n%2Bf9Hl%2FP%2BkSlafXu%2F%2B5RI5zDejJi9BjqkAfCwRJ245GzpsRmY5IaxmcYxyPmnb98HbQqUPVFCpMcirCxEzG3%2BuF8fQHU2NRjhk12cj9FeyM0A07WX0Z1RAzhr5sg11IuOhl1lUgLewDToBf9DnMVp%2BprLgqtPyZpbich4Ket37Ljz5IV1rBrdcqRx2lvLNR5KYbm3QjlIflzq59xZEAhVhZS6EV97hvdYjM6iPncDgvj0x7kbmYg4fgEWG494&X-Amz-Signature=7e60318da7ddf0e6aa992f2999681ba7ddff87f9c648dadbdea53d23fd91a9a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

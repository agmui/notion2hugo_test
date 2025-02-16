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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HOAQFLW%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T080904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCrYDw1c9MkPssjQhWGIxLgmsk%2Fd7GSzYQUUAFCJuGTEQIhAMp7oxohzYmGiWlsvccviavy13UPGU10W7F13kn28kV0Kv8DCFcQABoMNjM3NDIzMTgzODA1IgwO%2Frk%2B0gSYW44jpH4q3APYnZRx2aZau3XWy3pe9FVRpHyhr9ZJVILVCL1KW%2FtklHYlmnfO0I7FfaQdhKmE1ABjljNhLS4ygfNzjJdqc2EqeJo2G%2FleA4FL8r5SMm0Y8YDG5RNiNtrupi00LwKUZk%2B0VKBrRWborIWxbhGCkozrnlMz1DU0jLdWft5vJaGg7yHfVPaLKs5Z6bQMxdG7PDrR8kax%2BC%2Fg0jvjjO9p7jz78no7HcDyLYNlCq2GIviBz57%2BT6kA4G3qbuSlume17ofHeNPf0rJSmhekCAzcJYMOY0VV34Pl9eG2LP3r%2FwVyOx6wGHMR2IxoHQYCvs%2FiOd48Tw%2FaLDP4ZTwUn9a%2B9mqAmqv%2B0Ln8cjWax62F33azWLs8HXWxpe7TcCTPHDIfGIVuYYf%2BZFn8j6h3o7LfqiIFbSEoS9N1D%2BsHw478xX3vPZIsBargsz2tGw4W8TGPyKMeYyjGX9uGuzafArUbTs%2FeZwWuu6ZDaOK8asi%2BWg32%2BNn27tua%2BGFdTXSRS8gMA19k1V89t%2BZT2K3GfX5b1cqoVmU%2Fw2PDK%2BHPThpOzEDgzeYRv5gjb9MoDPerxQgJ4Pmf0Xn901dJR1wikgoqfzqF9MjaZcAmSfXHIozbAAz6zNgtZcacrjSf03DZfjDG%2FcW9BjqkAeTQKZygI0bcm%2BITPOoFlXpuS4aoFG92JLrBk8aEK7Fx%2BnMuUfKN0pPp%2FUwIXT1Gck4D6MGO46IgbuvHhOpeYUwT5mK0fUFcfKbidpinMNplePfWKm%2FeB3B4CNDKG7guiR6noMzuq1zubRu7K%2BhQRPOwWPy9j2HLfv3SgcSQqnP%2BBBQOO9eENjzBELveEmqLZVto1nVZ2fB0uvfnLcgkL%2Bmv4sOO&X-Amz-Signature=293c32c96db84fc7374fdc13e663afbe80d574c1c1ffd0c061e78c1586bfc55a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HOAQFLW%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T080904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCrYDw1c9MkPssjQhWGIxLgmsk%2Fd7GSzYQUUAFCJuGTEQIhAMp7oxohzYmGiWlsvccviavy13UPGU10W7F13kn28kV0Kv8DCFcQABoMNjM3NDIzMTgzODA1IgwO%2Frk%2B0gSYW44jpH4q3APYnZRx2aZau3XWy3pe9FVRpHyhr9ZJVILVCL1KW%2FtklHYlmnfO0I7FfaQdhKmE1ABjljNhLS4ygfNzjJdqc2EqeJo2G%2FleA4FL8r5SMm0Y8YDG5RNiNtrupi00LwKUZk%2B0VKBrRWborIWxbhGCkozrnlMz1DU0jLdWft5vJaGg7yHfVPaLKs5Z6bQMxdG7PDrR8kax%2BC%2Fg0jvjjO9p7jz78no7HcDyLYNlCq2GIviBz57%2BT6kA4G3qbuSlume17ofHeNPf0rJSmhekCAzcJYMOY0VV34Pl9eG2LP3r%2FwVyOx6wGHMR2IxoHQYCvs%2FiOd48Tw%2FaLDP4ZTwUn9a%2B9mqAmqv%2B0Ln8cjWax62F33azWLs8HXWxpe7TcCTPHDIfGIVuYYf%2BZFn8j6h3o7LfqiIFbSEoS9N1D%2BsHw478xX3vPZIsBargsz2tGw4W8TGPyKMeYyjGX9uGuzafArUbTs%2FeZwWuu6ZDaOK8asi%2BWg32%2BNn27tua%2BGFdTXSRS8gMA19k1V89t%2BZT2K3GfX5b1cqoVmU%2Fw2PDK%2BHPThpOzEDgzeYRv5gjb9MoDPerxQgJ4Pmf0Xn901dJR1wikgoqfzqF9MjaZcAmSfXHIozbAAz6zNgtZcacrjSf03DZfjDG%2FcW9BjqkAeTQKZygI0bcm%2BITPOoFlXpuS4aoFG92JLrBk8aEK7Fx%2BnMuUfKN0pPp%2FUwIXT1Gck4D6MGO46IgbuvHhOpeYUwT5mK0fUFcfKbidpinMNplePfWKm%2FeB3B4CNDKG7guiR6noMzuq1zubRu7K%2BhQRPOwWPy9j2HLfv3SgcSQqnP%2BBBQOO9eENjzBELveEmqLZVto1nVZ2fB0uvfnLcgkL%2Bmv4sOO&X-Amz-Signature=f4b0f70e2077aef219f976a1856d236f181f71c8f9afe131a7b6493259ef89ca&X-Amz-SignedHeaders=host&x-id=GetObject)

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

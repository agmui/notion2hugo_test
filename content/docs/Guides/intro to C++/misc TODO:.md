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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T47JBT2H%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCws9EdKyAH0rYs4pKr877uslwZD%2FXJm7dzmwin2OnQ8gIgSP5fQaEP2rvwl5KaFPthi4FCIZoT1nYERjQE%2Fu4PJUEqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIbXjiPUrjLqbgXFyrcA7HY9apCoz%2FQ4Ws4HQp3KF%2FXmoDHh%2FO9tEFFL4X81QNaOqsZzdL8oFTxhLEGzbXwGT1q8AQiA%2BpG7k4DrYoSRePH%2FYs%2FHCy%2Bxsc6dmNaMrNuXqKi42vD3k3yL5B9I448wRArrdFzCzwFd4%2FZEsCnq089FG9yop4FnrurZdA%2BO0hJAcEEcA64w4Aq3s6ShWTm6SJ8uDdyqBOnsUDkl7cuxn5qAkZXFZBG2pM29%2FDYG9wHrBHD%2BsScSUhI7eGVMXQwDAJhOazNOu5Kn2tvlaaAu0f4dLOcSgmAgG53tTtQ0XiOP61c9sP6j0QcCLr6BdY25kNYTyF9t%2B4hUYN0WrPkKFWYyoinfSm2JwGjCc1pmyxiucVnpfrgdJeMiozFKQLHiZvyqakRZBrX0hVktS9kpUgCq0cVBxzy7g4cYAQ97MNlZVq3b3RER%2FH1fuO4rM%2FcFqrk1hD8iTGUwyhvgSdgN4fguW%2BAWph%2Bvmlye%2FJs%2FAsCtHNeJtviXPGUSMuFfWv0PHd3G8Tihj8Iegd2oThV9vfJIlJbbsdzGx8gbvrvodxg1OMZIYhWywipVtIaCec%2BHlaQW6To9Sw0aPFe9aCrV3UMUMMOyNdBwPbGIr1bGglzYeKGBk52skwxYQwrMMS10cQGOqUBQakZJPx7QmhqiF6cvzfHvU%2B1s0yEkXX%2B9ejYJqgNpvOwhm2ASc0%2FeFqVjSwCPcizlyw6IITXMzB%2FHuvRjDooZpPZE%2FLI25UrUfes5tDi%2Br4hXdE94gUXcyz8MwyiWsMpgjnX9szj5568sz%2FkaN6TGXemJeatSwEWzurJ57jrMm0QX4toCZ618w%2F6%2BkKX5S4EHGn%2Blnt0Q0b%2BRbYjstqT%2FuOvnU8I&X-Amz-Signature=e5c10defeec6aa73f22bfcef42c7898fbe455ce6e1b03754af6313954ce48634&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T47JBT2H%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCws9EdKyAH0rYs4pKr877uslwZD%2FXJm7dzmwin2OnQ8gIgSP5fQaEP2rvwl5KaFPthi4FCIZoT1nYERjQE%2Fu4PJUEqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIbXjiPUrjLqbgXFyrcA7HY9apCoz%2FQ4Ws4HQp3KF%2FXmoDHh%2FO9tEFFL4X81QNaOqsZzdL8oFTxhLEGzbXwGT1q8AQiA%2BpG7k4DrYoSRePH%2FYs%2FHCy%2Bxsc6dmNaMrNuXqKi42vD3k3yL5B9I448wRArrdFzCzwFd4%2FZEsCnq089FG9yop4FnrurZdA%2BO0hJAcEEcA64w4Aq3s6ShWTm6SJ8uDdyqBOnsUDkl7cuxn5qAkZXFZBG2pM29%2FDYG9wHrBHD%2BsScSUhI7eGVMXQwDAJhOazNOu5Kn2tvlaaAu0f4dLOcSgmAgG53tTtQ0XiOP61c9sP6j0QcCLr6BdY25kNYTyF9t%2B4hUYN0WrPkKFWYyoinfSm2JwGjCc1pmyxiucVnpfrgdJeMiozFKQLHiZvyqakRZBrX0hVktS9kpUgCq0cVBxzy7g4cYAQ97MNlZVq3b3RER%2FH1fuO4rM%2FcFqrk1hD8iTGUwyhvgSdgN4fguW%2BAWph%2Bvmlye%2FJs%2FAsCtHNeJtviXPGUSMuFfWv0PHd3G8Tihj8Iegd2oThV9vfJIlJbbsdzGx8gbvrvodxg1OMZIYhWywipVtIaCec%2BHlaQW6To9Sw0aPFe9aCrV3UMUMMOyNdBwPbGIr1bGglzYeKGBk52skwxYQwrMMS10cQGOqUBQakZJPx7QmhqiF6cvzfHvU%2B1s0yEkXX%2B9ejYJqgNpvOwhm2ASc0%2FeFqVjSwCPcizlyw6IITXMzB%2FHuvRjDooZpPZE%2FLI25UrUfes5tDi%2Br4hXdE94gUXcyz8MwyiWsMpgjnX9szj5568sz%2FkaN6TGXemJeatSwEWzurJ57jrMm0QX4toCZ618w%2F6%2BkKX5S4EHGn%2Blnt0Q0b%2BRbYjstqT%2FuOvnU8I&X-Amz-Signature=8f6be3a139f1032bf83f9d8f38791624723febc2ef812b7cc2a91cdda6ff79d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

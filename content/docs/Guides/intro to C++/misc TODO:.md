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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LJAJN6I%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T081138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1YWdQFRPc6RuuFI%2F%2FmBpPx3phv9LH6Tk0duzwhf%2BTrwIgHcNwrFPbHonkrCzSDZtIgHLhtG5KynP%2FKgOY0Z37qoMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPBVY9YZDt7CuHhVSyrcA01%2Fc4%2Frjr6iVgNY7KYggocX98HphTsnpuxng4qJnZDC6C%2BlkKVF0lfNMk3uPklRQpAO3HoJ4EseluySrAZH%2FM78e0WunlSFgsjjvJ%2F4SveRbUvmKZMr2rvCbJpsmXTQqNuCiSvlaprI%2B25AJrdhETTfs%2BogI8jhy%2BPUeFMqax5uJVsiqA8G4zwkU%2Beh2DdBOl36SP79X0GK%2FOWzpoJBENbs9Opq8qJ5c8VPqW41L8vsDSoHH6dZmA3UAN1OGfg14yMFanqhHjTUL9jLh9xJ%2Fkqf4a3BfVsD1XAxjn4pKSYDkcXlS5ioAubdzicpov%2FI%2BTA3Uj1AJ2BSuHIy2pEp3z288%2BE0YqXlSr0%2FzizAE6%2B%2BoHxtoiPhYmdl7gkEyX7QPWqhWqUD9rdB8fN0%2BcIEOkMjU1r2aI8ZkZjDv0ThVB3KohCRGnfTum3H2ixLChNM%2BfuxNMKNdMRN7fpmV7IE%2BojAuP4YayklKzOH1VfmAFIgxVOCP1hmX%2FTHx%2BnZgLxVSD7ISjg8Q7XYASd6ZadrfIXytN1t%2BuWuF64l1mBAlDXAxtTRO42jxtdPOxLop07KoHSDzE9oQd1d%2B%2BswpUoW6XzZj89e3PCfZo6dyqqLWWXqECWD9LYJGapNGcG8MPfF7MMGOqUBOXd8Q2MvRuyg5%2FdYs9cofDgRnlyoRN%2BzSVctZSlNXCjKc5Nn1MwfwE1VKvfSU%2FQDmQ3lR2xH8orfdTZtBi5lE7pfsE7WbQBmkLwM0hrPRx7K6aovFZ3LKs4BzBlLypEPYvgCwjEXJwxhdcL%2FnSxyMb2nGIfK7KBJ4Zug4jU2uqtStIWsRARUTPGVsCC%2BoXpA%2FAvfrhTXVoKs3QIq3L640qDKuzgX&X-Amz-Signature=ff98f05dc6288beaaa8422f31b1759714e402564f178e655362fd82a9862826d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LJAJN6I%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T081138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1YWdQFRPc6RuuFI%2F%2FmBpPx3phv9LH6Tk0duzwhf%2BTrwIgHcNwrFPbHonkrCzSDZtIgHLhtG5KynP%2FKgOY0Z37qoMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPBVY9YZDt7CuHhVSyrcA01%2Fc4%2Frjr6iVgNY7KYggocX98HphTsnpuxng4qJnZDC6C%2BlkKVF0lfNMk3uPklRQpAO3HoJ4EseluySrAZH%2FM78e0WunlSFgsjjvJ%2F4SveRbUvmKZMr2rvCbJpsmXTQqNuCiSvlaprI%2B25AJrdhETTfs%2BogI8jhy%2BPUeFMqax5uJVsiqA8G4zwkU%2Beh2DdBOl36SP79X0GK%2FOWzpoJBENbs9Opq8qJ5c8VPqW41L8vsDSoHH6dZmA3UAN1OGfg14yMFanqhHjTUL9jLh9xJ%2Fkqf4a3BfVsD1XAxjn4pKSYDkcXlS5ioAubdzicpov%2FI%2BTA3Uj1AJ2BSuHIy2pEp3z288%2BE0YqXlSr0%2FzizAE6%2B%2BoHxtoiPhYmdl7gkEyX7QPWqhWqUD9rdB8fN0%2BcIEOkMjU1r2aI8ZkZjDv0ThVB3KohCRGnfTum3H2ixLChNM%2BfuxNMKNdMRN7fpmV7IE%2BojAuP4YayklKzOH1VfmAFIgxVOCP1hmX%2FTHx%2BnZgLxVSD7ISjg8Q7XYASd6ZadrfIXytN1t%2BuWuF64l1mBAlDXAxtTRO42jxtdPOxLop07KoHSDzE9oQd1d%2B%2BswpUoW6XzZj89e3PCfZo6dyqqLWWXqECWD9LYJGapNGcG8MPfF7MMGOqUBOXd8Q2MvRuyg5%2FdYs9cofDgRnlyoRN%2BzSVctZSlNXCjKc5Nn1MwfwE1VKvfSU%2FQDmQ3lR2xH8orfdTZtBi5lE7pfsE7WbQBmkLwM0hrPRx7K6aovFZ3LKs4BzBlLypEPYvgCwjEXJwxhdcL%2FnSxyMb2nGIfK7KBJ4Zug4jU2uqtStIWsRARUTPGVsCC%2BoXpA%2FAvfrhTXVoKs3QIq3L640qDKuzgX&X-Amz-Signature=e80899a0e4382c6b9c9d29235026080e4722210b5eb4de22b216a528d7697a5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

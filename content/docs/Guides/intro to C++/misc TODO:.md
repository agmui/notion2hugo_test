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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXLQJD2X%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T181138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBiREdJ4qjHwIacMIOtv%2Bx1G1aoc1JJlFKblgmQIgjLMAiBTWgIFpkNB%2F2QmcRcRN8Txa6XOsYgoqesAgDSwi9DBdyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM88ooSALfvSzEEg%2BjKtwDGRjtuMlQSTtfVrRxqrexQugRCg%2FS4Ule6oXT8gAnzN3VNox9WHGd9RWLvEcGok8gc6OxyY6kMoorqIZWMM%2BTpUSLBISWi88KYGC4BFJgSHKpvG2yfMzY7MIez5VmjNlBOD2dhf4n4CL42fssU0civTI5seV%2Bgtzx6tozMt%2B4qrL7r%2FuWm7DOBZQ8lPuS2hJ9amfUv%2BS5btkELYSKJG3S3hwnziuLbAE1J7qdhxu6%2FCibbrI2L%2FBUJfYrffyR1z9pYLXBWOgg84et%2BsbWhowxqlnFWU0a9%2BK%2BxOMUQ0wO4mibS2u%2B3UsuDrWEjscBSwql7i8uhpxZ8vc4BzRRVzn3rv0SAZELrGpXq%2FqbITWqDQwbipF4MKC35Jm9p787nw2SEtR58j%2FW%2B%2FJgDijsNO%2BLI3z34yCB7%2Fd3jZsgT7vRDNlh%2FYprN%2FMXRvTr9WcjHdIr3Z3xVMbtZW%2FWTkuaqVzFNgKE1v8hq9Z7TsY6FumKIz6pFoLslWU%2Faj41tl3YPEpeGQPISuGj%2BnSarjUEZat1%2FBjjdEUce%2Bbwjzp11MTeuyBA0iTU7wGtK7nwrdO%2Bi3b0xLabWkuWZTFATyazd%2F67BPucpCpydn%2F%2FIIeipQoemalNKOZym1f4a5%2FuKhgwmrjuwwY6pgGPPgbp9Et9a9caWQPos6B6TgSGxbYU5iqgaQARCQDk8QK1beFzUk1WSDNpp7yff7BBHw6GLj3L8WCxiLxbemPq%2BghdsRNUolzSUWY5h3Ffwz%2BGMlLi8ZWerXY9LA1rndrjkCeyC0AZt9sdqvl8Y6SNOLwIVc19UiOZV8Rfr9NcyFIMRKNoYWOu3B7J4nHUpvM0KH%2Bou6O6XTCD%2B%2FMSADDALFewW97W&X-Amz-Signature=9cecb173f672b8fb54f6c3b8747b5feab6e0fa85bffe9a6e840164e48919d296&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXLQJD2X%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T181138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBiREdJ4qjHwIacMIOtv%2Bx1G1aoc1JJlFKblgmQIgjLMAiBTWgIFpkNB%2F2QmcRcRN8Txa6XOsYgoqesAgDSwi9DBdyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM88ooSALfvSzEEg%2BjKtwDGRjtuMlQSTtfVrRxqrexQugRCg%2FS4Ule6oXT8gAnzN3VNox9WHGd9RWLvEcGok8gc6OxyY6kMoorqIZWMM%2BTpUSLBISWi88KYGC4BFJgSHKpvG2yfMzY7MIez5VmjNlBOD2dhf4n4CL42fssU0civTI5seV%2Bgtzx6tozMt%2B4qrL7r%2FuWm7DOBZQ8lPuS2hJ9amfUv%2BS5btkELYSKJG3S3hwnziuLbAE1J7qdhxu6%2FCibbrI2L%2FBUJfYrffyR1z9pYLXBWOgg84et%2BsbWhowxqlnFWU0a9%2BK%2BxOMUQ0wO4mibS2u%2B3UsuDrWEjscBSwql7i8uhpxZ8vc4BzRRVzn3rv0SAZELrGpXq%2FqbITWqDQwbipF4MKC35Jm9p787nw2SEtR58j%2FW%2B%2FJgDijsNO%2BLI3z34yCB7%2Fd3jZsgT7vRDNlh%2FYprN%2FMXRvTr9WcjHdIr3Z3xVMbtZW%2FWTkuaqVzFNgKE1v8hq9Z7TsY6FumKIz6pFoLslWU%2Faj41tl3YPEpeGQPISuGj%2BnSarjUEZat1%2FBjjdEUce%2Bbwjzp11MTeuyBA0iTU7wGtK7nwrdO%2Bi3b0xLabWkuWZTFATyazd%2F67BPucpCpydn%2F%2FIIeipQoemalNKOZym1f4a5%2FuKhgwmrjuwwY6pgGPPgbp9Et9a9caWQPos6B6TgSGxbYU5iqgaQARCQDk8QK1beFzUk1WSDNpp7yff7BBHw6GLj3L8WCxiLxbemPq%2BghdsRNUolzSUWY5h3Ffwz%2BGMlLi8ZWerXY9LA1rndrjkCeyC0AZt9sdqvl8Y6SNOLwIVc19UiOZV8Rfr9NcyFIMRKNoYWOu3B7J4nHUpvM0KH%2Bou6O6XTCD%2B%2FMSADDALFewW97W&X-Amz-Signature=05b96ac263e01912fc8a23b726ed16bd29fcce2fdf4d940a6c9d9a524d5983e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

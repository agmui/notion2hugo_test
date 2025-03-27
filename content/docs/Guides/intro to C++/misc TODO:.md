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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M356X36%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T150854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHTPSNMNTBtpax3jBDPIcTzCIM%2BTNovXpMcIJhcd8lBAiEA6aCSW7R7kBe4yI6cCMpZIHPepVZt2mU%2BXzqkU%2FoCQMQq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDAhUmpKV%2FQ4NiQEVpSrcA0FinMLUXK3eJ6xq6TpqMIThDxL9gW8xNn0JKOggDCKS3VYn83i9gHTaNPt0y6t8Cb7BeoaBGlXckhINugdQz5Gi336ztbvSAWtLRKt42ZDAfEa0CoGM8LyPFB70xbcwdrFuNr3mHAvpZyy%2FJvKz9loUq853VlZjdpDy1NIpHRMxhz%2BXLjPcQF%2BhxMYHa5BVEy8JPP9Eb3ITce7992b%2FqeRRp%2BhEiq1geC%2B3ZbTGMTXth9wkQxxRw9CA2j2WhnamrJweFXI3UrvghIo6LO4CaRa3N9GDpfzYEQ4FrRSukB2am4SE8%2BXz1VqgjwW5HnStDKl76Y7J%2BEml%2FfDhtsua2y4B81zNuU%2F3A7K3MKQGGEjajWsdXdNsKjerGQnjrKTaEEH%2FrnsPL4EsUj0JXBTQrZUVGsMVC4e71Kbp8eWNV2lAxr7G90ezJ0bfCUmX3%2F4EWc9NaA%2Fv3K6Due91d5D6Hgf7QXs9MeXaa6te4xCV1F8ryaN0KiQzADi3KIdPz5MsthPMZpD5mt%2BjmnD5%2BcRg9EjRf7h6gL0Eg9l%2FgA%2B%2F00BXhrLoR9Y6gDhlqBKGacYKFcnMnEKEM%2BtnCZvS1%2BhMUpbjJIauENGWK%2F%2FRwuG3v23bcNyg55BGtjyOjJX%2BMN7Mlb8GOqUB0U8ZeR6U46kNil2ho%2FU4G2U4Vg3yFaMnWOvyaJHxfEopNBZPhmit9%2BZ6z4NMXvu9MZP10CE8ueXi7w%2F4GOmEyh87MU38D3wvUsVLRD335b9PztjAha2TyIIhFopw%2FghuqoQ5lDDViUaRi8KXrwEKuCToYxiDuWrGjUXcGzjxxlFqTSEcK0DKQxfNUAfl8QMefvJj9N%2BVzioTHxrs0eRzUpwZVGvz&X-Amz-Signature=f7181c5364bdf2628121734062c796836138a46adc0d634c2a39fc3fbf982324&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M356X36%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T150854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHTPSNMNTBtpax3jBDPIcTzCIM%2BTNovXpMcIJhcd8lBAiEA6aCSW7R7kBe4yI6cCMpZIHPepVZt2mU%2BXzqkU%2FoCQMQq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDAhUmpKV%2FQ4NiQEVpSrcA0FinMLUXK3eJ6xq6TpqMIThDxL9gW8xNn0JKOggDCKS3VYn83i9gHTaNPt0y6t8Cb7BeoaBGlXckhINugdQz5Gi336ztbvSAWtLRKt42ZDAfEa0CoGM8LyPFB70xbcwdrFuNr3mHAvpZyy%2FJvKz9loUq853VlZjdpDy1NIpHRMxhz%2BXLjPcQF%2BhxMYHa5BVEy8JPP9Eb3ITce7992b%2FqeRRp%2BhEiq1geC%2B3ZbTGMTXth9wkQxxRw9CA2j2WhnamrJweFXI3UrvghIo6LO4CaRa3N9GDpfzYEQ4FrRSukB2am4SE8%2BXz1VqgjwW5HnStDKl76Y7J%2BEml%2FfDhtsua2y4B81zNuU%2F3A7K3MKQGGEjajWsdXdNsKjerGQnjrKTaEEH%2FrnsPL4EsUj0JXBTQrZUVGsMVC4e71Kbp8eWNV2lAxr7G90ezJ0bfCUmX3%2F4EWc9NaA%2Fv3K6Due91d5D6Hgf7QXs9MeXaa6te4xCV1F8ryaN0KiQzADi3KIdPz5MsthPMZpD5mt%2BjmnD5%2BcRg9EjRf7h6gL0Eg9l%2FgA%2B%2F00BXhrLoR9Y6gDhlqBKGacYKFcnMnEKEM%2BtnCZvS1%2BhMUpbjJIauENGWK%2F%2FRwuG3v23bcNyg55BGtjyOjJX%2BMN7Mlb8GOqUB0U8ZeR6U46kNil2ho%2FU4G2U4Vg3yFaMnWOvyaJHxfEopNBZPhmit9%2BZ6z4NMXvu9MZP10CE8ueXi7w%2F4GOmEyh87MU38D3wvUsVLRD335b9PztjAha2TyIIhFopw%2FghuqoQ5lDDViUaRi8KXrwEKuCToYxiDuWrGjUXcGzjxxlFqTSEcK0DKQxfNUAfl8QMefvJj9N%2BVzioTHxrs0eRzUpwZVGvz&X-Amz-Signature=57ac265b0c8a4bff8ddc45bb52f848a1c00c6517a073724f6cbced51792b33ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

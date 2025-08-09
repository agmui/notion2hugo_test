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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SSY3Y2E%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1zBnxSAVIbesOmW2yPZbHEJmqfn5hUEwV1e9hhRf3EQIgZjCm%2BweWgwDTSASNgM%2BwoZxcrXfnAZzmjdlWiWU4SDAqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLi4hsb7XpVHnK%2BHZSrcAylXBqVWnxYWcVc2brReShbe5OLH5y9QJYqqktngYyXKkgMywRjnILIgb%2BsGDHGn%2F6DZMbY1ZORxQy7AgZHVrk%2BXc%2FsLliI2ML6XAk2AuvwakCohruWIJJw5RgHpFX450bOsBHnLE0LtW5LUd5yBvrlHZbSzPlBHVLUWc5C3uPu4GFMrhqGJE%2Br8daLai5QBxxe5tt6qoVezU7gsKK%2F7QPw6bQx6SFBsdnjZFbuT4gQVf9XXxb16UghRB%2FvwbvEAdcWpvjwqVMI1EJVGC1niy9uUeJVKKNxip3jdUgUelkXkYmvLyQhFM7Tvs9pVSaM5GX5e0KqyX3IwnZ12YPcTQOkVzDStVO35rK7g9hpVyWg2UYXxTRatuqXGPhVpPMrNZtAJUtqzHHc9ebBJh%2Fbw0Q0UHTA%2FMRWdsedm59m51mvLMP8xBs81DIeDtBjvPpFwFfOQovRFaruBSJZys%2B%2FhEA%2BzEF5y7Rb%2FDXxs4o7v9%2FP%2B5QuaouO3wIK%2B8covSbYmaJqSpy%2BVbK2%2FG3mPy6uZ4mrn3GcuNsf%2Bxu5ZbyJb1Kwj%2B3TtTfjJDm3JdvECBYD%2FpQat1v12gtz2QrFGU9I1I45cd8dEX%2BDnf9vh0MgCvyllZP6P5a8C2hoDnJbnMMyK3sQGOqUB0nFWzYIMoYzIDM4pvS4tbxmSnYDNxWMWif7kPlWD7TU7CoTxya7cR9F2dJvSP2mJnEb7OCbMAwkt0Zr0OCzBdP0cKglKhz261HkqumcYZVbilUXZYNSL3nTJOgwTwbudvzCOAP9389fOfXcBfLPP2KcY34e%2FoXRKHV6D9NDyuIr03hL2T1twmdop6hJypMf2st5mW93b4BNIEr6gfHZABc7%2F7ec9&X-Amz-Signature=b185c3a00aceb59d3c64a96750e14ae3133a4f4d222243bf7fa1f2083644e28d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SSY3Y2E%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1zBnxSAVIbesOmW2yPZbHEJmqfn5hUEwV1e9hhRf3EQIgZjCm%2BweWgwDTSASNgM%2BwoZxcrXfnAZzmjdlWiWU4SDAqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLi4hsb7XpVHnK%2BHZSrcAylXBqVWnxYWcVc2brReShbe5OLH5y9QJYqqktngYyXKkgMywRjnILIgb%2BsGDHGn%2F6DZMbY1ZORxQy7AgZHVrk%2BXc%2FsLliI2ML6XAk2AuvwakCohruWIJJw5RgHpFX450bOsBHnLE0LtW5LUd5yBvrlHZbSzPlBHVLUWc5C3uPu4GFMrhqGJE%2Br8daLai5QBxxe5tt6qoVezU7gsKK%2F7QPw6bQx6SFBsdnjZFbuT4gQVf9XXxb16UghRB%2FvwbvEAdcWpvjwqVMI1EJVGC1niy9uUeJVKKNxip3jdUgUelkXkYmvLyQhFM7Tvs9pVSaM5GX5e0KqyX3IwnZ12YPcTQOkVzDStVO35rK7g9hpVyWg2UYXxTRatuqXGPhVpPMrNZtAJUtqzHHc9ebBJh%2Fbw0Q0UHTA%2FMRWdsedm59m51mvLMP8xBs81DIeDtBjvPpFwFfOQovRFaruBSJZys%2B%2FhEA%2BzEF5y7Rb%2FDXxs4o7v9%2FP%2B5QuaouO3wIK%2B8covSbYmaJqSpy%2BVbK2%2FG3mPy6uZ4mrn3GcuNsf%2Bxu5ZbyJb1Kwj%2B3TtTfjJDm3JdvECBYD%2FpQat1v12gtz2QrFGU9I1I45cd8dEX%2BDnf9vh0MgCvyllZP6P5a8C2hoDnJbnMMyK3sQGOqUB0nFWzYIMoYzIDM4pvS4tbxmSnYDNxWMWif7kPlWD7TU7CoTxya7cR9F2dJvSP2mJnEb7OCbMAwkt0Zr0OCzBdP0cKglKhz261HkqumcYZVbilUXZYNSL3nTJOgwTwbudvzCOAP9389fOfXcBfLPP2KcY34e%2FoXRKHV6D9NDyuIr03hL2T1twmdop6hJypMf2st5mW93b4BNIEr6gfHZABc7%2F7ec9&X-Amz-Signature=59472147a010f0b123a0a50560584fd04cdaaea8965c3c555323dc94a19e3313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XMWPSFA%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCjzSYMMyzgyo1iygv8Gq8df%2BSTSCLlXswWyr%2F4TNwe5gIhAPqcpxcBkWFResm5Wfgmb6XArGGBJd1k3x259TrnBKqHKv8DCFAQABoMNjM3NDIzMTgzODA1Igyxla9SExjl1NGKu%2B4q3AOu%2FLp5lYdIdxpWi9lC%2Fw3scKs4lHYZKPg%2FQGJE2G4dREhV2GM0Pf2VdOmewvciijRKGK0K%2FeXmm2W7n7ygPdsRYdHFPJurc%2BojrAdAec4hF98TT1FgmR%2FwC1uav%2FaGpmRja0E8XVof6jkeINZkc%2Bi7zrh7qV4HIbUULHdCOENbUrsi0tulQ2vzRIBz9VbqbQ4TdXgZUynagvtvK799OqxXmKbagaEATpg4HucwB9gOklcMobYOVWpsn52dcznucJr4%2FmLyc3tPkIRzbGeuAQC33VC5%2BzIRssNCPhG0rQzRp8XfKkAIJlQYZ4CiGCtm3hktD9Dn9Hp8z2IhfBTZ8Lj3n2oL9QVsbxdxiwlqu%2FUG2VMGuckkYUtILXHsrtqJSwLUeYQyiC9rP24jiAcXjeRRD%2BikLoK6tVqDX9UqV985vnrXeNA3uxE4MP9Jy6cllIOKbO11R5DKzGGoO1R7ohm4MwcO%2BK9uI18ipxUMfG2fiEx52pNPwluEwfmbONSTBlHIPRhnBZoTmTVJebT1mEgHGyoT7%2F9JVUQArf1W9EhNmG8iwp9cB46aRnTkjKsOjExYRFNCkqjZuYvTx1x5jIZQhijRGKDKp%2Bdb7EkrTYBesRUIEMBhuW50QYNUBDCh9MTEBjqkAYbjTAvPLmgV5oSCcPMYOmHomu0mzCYIOAa43YV%2F8U1R0bkGia8IGR2lrORlel3G26DvGDS4ZbRf8z4yQCAR4%2Bgada1QYhcSi%2FtI3REv6mSOT3ukDWiBwJ7P07%2FXRzH9kzHMYxS3xkORtYHTeLGFtYj1kGu2hcFNdvfVTY4Nuc1%2BvDqTQ8LdgUjT6%2Fnwoiof7wGHDqHsd3Or8ep12F%2BwjDzQ0bnE&X-Amz-Signature=5d8bb5bf9388f11820858d07e8c1e92f7febd873038e4dfc5521b0b4de9c4e9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XMWPSFA%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCjzSYMMyzgyo1iygv8Gq8df%2BSTSCLlXswWyr%2F4TNwe5gIhAPqcpxcBkWFResm5Wfgmb6XArGGBJd1k3x259TrnBKqHKv8DCFAQABoMNjM3NDIzMTgzODA1Igyxla9SExjl1NGKu%2B4q3AOu%2FLp5lYdIdxpWi9lC%2Fw3scKs4lHYZKPg%2FQGJE2G4dREhV2GM0Pf2VdOmewvciijRKGK0K%2FeXmm2W7n7ygPdsRYdHFPJurc%2BojrAdAec4hF98TT1FgmR%2FwC1uav%2FaGpmRja0E8XVof6jkeINZkc%2Bi7zrh7qV4HIbUULHdCOENbUrsi0tulQ2vzRIBz9VbqbQ4TdXgZUynagvtvK799OqxXmKbagaEATpg4HucwB9gOklcMobYOVWpsn52dcznucJr4%2FmLyc3tPkIRzbGeuAQC33VC5%2BzIRssNCPhG0rQzRp8XfKkAIJlQYZ4CiGCtm3hktD9Dn9Hp8z2IhfBTZ8Lj3n2oL9QVsbxdxiwlqu%2FUG2VMGuckkYUtILXHsrtqJSwLUeYQyiC9rP24jiAcXjeRRD%2BikLoK6tVqDX9UqV985vnrXeNA3uxE4MP9Jy6cllIOKbO11R5DKzGGoO1R7ohm4MwcO%2BK9uI18ipxUMfG2fiEx52pNPwluEwfmbONSTBlHIPRhnBZoTmTVJebT1mEgHGyoT7%2F9JVUQArf1W9EhNmG8iwp9cB46aRnTkjKsOjExYRFNCkqjZuYvTx1x5jIZQhijRGKDKp%2Bdb7EkrTYBesRUIEMBhuW50QYNUBDCh9MTEBjqkAYbjTAvPLmgV5oSCcPMYOmHomu0mzCYIOAa43YV%2F8U1R0bkGia8IGR2lrORlel3G26DvGDS4ZbRf8z4yQCAR4%2Bgada1QYhcSi%2FtI3REv6mSOT3ukDWiBwJ7P07%2FXRzH9kzHMYxS3xkORtYHTeLGFtYj1kGu2hcFNdvfVTY4Nuc1%2BvDqTQ8LdgUjT6%2Fnwoiof7wGHDqHsd3Or8ep12F%2BwjDzQ0bnE&X-Amz-Signature=4159ae4a4af5610d42470135285579a5b7943720649fc4e53f8b0119c35049ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

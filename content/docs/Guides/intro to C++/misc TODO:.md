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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQHOPNTP%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T181059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6JZ%2FLRPtYFdvVU3i%2FxlhuvO6xAe%2BI3Rmr74TKw65M2gIhANAriagVVyJ5a%2FH6ZDUBfDHbtZhijiIxSPPYOxYU4ZwPKv8DCDMQABoMNjM3NDIzMTgzODA1IgwmYOQ0lf7wgP6U57Qq3APoRgzcU0qt1gCaXq4NtVzx3reyoZG4En8TVxu6bNcJQmd1YMA3dEpoerZZl2S8%2BJmkjHuTSHBGNSJ%2BnVcmqscqaGOjlUIporcEgnNtxn6XIGbnzz%2Fqgw2GUX%2BVUAq4cyOWsY4anh4%2FXJIlcY9wQUlcQjnX6WrASdUGbAQQhFaClogAwqjoPmASePWdIMrpp5sjfLDuHQMftWqpqnOIhKkOl8M0UksoC3A2vFC%2FS5gRgtrwG0kbJqzz%2BcPUf7kpTcn5hi%2FrHaqDMffUWGyz32tFFQrclRSm53ab8IizFHApwlqUyQgM5CxzJgWRypVY9mEvBccaIuocGYKb36HkL5voQ8d5KquJvDRK3gpStVXKhNQatHfuUNzDCBd8TSsruBvNtaTnMUuFBvJ3s%2BZ6he1FreJesb7ieTaoHcXwo0MyJqiIlf4hK2QG5QvEijuQvFQCg4ohjovbeweSDBSuVjeuxm3094XTfVxT1yWXCy7z8i1BOXkOQmONofMuW0BjS%2BfpUq7VFoobzp6rct4KqA%2BAg%2Fp67Oo%2BXfiXEfc49xV3%2Fpgx5beLNf5%2Fk8v%2BVixmP9nZh%2BydXTWV42T%2BmVs8%2BQAKu2AeUwuVQ7sbY5P1YuSD5UFj1SmmqXgl%2FD%2FOHTDS3fK9BjqkATE68ISrjArlceyK58i11%2BDAypbNo6mu68reWUMC7mC%2FVOGlh37IL3LabTAd8haVaVaW0ZJ2KVZPTSWmeSfGTTOpdyaU5ITO%2Fiihf3KlXxh4YNmtW7J1OZWPBvrLfJXUa1RSMCAqa72t46RYzWFWJqsZ3%2BHaAckk1FmCWyQ86khXynTS0XNP414oJ7HQyY6PrnvEXZTmIBpuoMHwd6kvYm%2Ba1EMd&X-Amz-Signature=2a4dc3808447346e24ad63d58b23cec3f09da41efb106f9af779204b62141dc1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQHOPNTP%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T181059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6JZ%2FLRPtYFdvVU3i%2FxlhuvO6xAe%2BI3Rmr74TKw65M2gIhANAriagVVyJ5a%2FH6ZDUBfDHbtZhijiIxSPPYOxYU4ZwPKv8DCDMQABoMNjM3NDIzMTgzODA1IgwmYOQ0lf7wgP6U57Qq3APoRgzcU0qt1gCaXq4NtVzx3reyoZG4En8TVxu6bNcJQmd1YMA3dEpoerZZl2S8%2BJmkjHuTSHBGNSJ%2BnVcmqscqaGOjlUIporcEgnNtxn6XIGbnzz%2Fqgw2GUX%2BVUAq4cyOWsY4anh4%2FXJIlcY9wQUlcQjnX6WrASdUGbAQQhFaClogAwqjoPmASePWdIMrpp5sjfLDuHQMftWqpqnOIhKkOl8M0UksoC3A2vFC%2FS5gRgtrwG0kbJqzz%2BcPUf7kpTcn5hi%2FrHaqDMffUWGyz32tFFQrclRSm53ab8IizFHApwlqUyQgM5CxzJgWRypVY9mEvBccaIuocGYKb36HkL5voQ8d5KquJvDRK3gpStVXKhNQatHfuUNzDCBd8TSsruBvNtaTnMUuFBvJ3s%2BZ6he1FreJesb7ieTaoHcXwo0MyJqiIlf4hK2QG5QvEijuQvFQCg4ohjovbeweSDBSuVjeuxm3094XTfVxT1yWXCy7z8i1BOXkOQmONofMuW0BjS%2BfpUq7VFoobzp6rct4KqA%2BAg%2Fp67Oo%2BXfiXEfc49xV3%2Fpgx5beLNf5%2Fk8v%2BVixmP9nZh%2BydXTWV42T%2BmVs8%2BQAKu2AeUwuVQ7sbY5P1YuSD5UFj1SmmqXgl%2FD%2FOHTDS3fK9BjqkATE68ISrjArlceyK58i11%2BDAypbNo6mu68reWUMC7mC%2FVOGlh37IL3LabTAd8haVaVaW0ZJ2KVZPTSWmeSfGTTOpdyaU5ITO%2Fiihf3KlXxh4YNmtW7J1OZWPBvrLfJXUa1RSMCAqa72t46RYzWFWJqsZ3%2BHaAckk1FmCWyQ86khXynTS0XNP414oJ7HQyY6PrnvEXZTmIBpuoMHwd6kvYm%2Ba1EMd&X-Amz-Signature=aef1fec622874f6c37bfb9ed62720fd09846352d77644348d46d90ca4a58f588&X-Amz-SignedHeaders=host&x-id=GetObject)

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

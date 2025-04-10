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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFKDMMTF%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQD4QOsEO9El94IHeSUohtg%2BdQJMBm4jq9fShPJ9ikLluAIhAKq8okzZBl8XVQr0AtePC2Nl5bwEYEvBbgxC7aaU1%2FyHKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwptTmDSR8Lo%2FriSc8q3APOQkKFN8OEz2%2BzivrSo5ewiHOko9SN9zp5b2AUJUIpz1FuIEyDg7%2F8Qle9NnZCrPkdmE6qau2cg9yas77R0eXIMqII8Vb68B%2FOGnMXZyhnAbYQPnbbgS6Ar1A3OPsgmYizxQzg6L1LC4aGJAWZQL4gLtJhaQwmcFOBpYOt3D5ZAFjUeZLIe3lHBP4eRxg%2Fc%2BPqefSxbsM3Ujl5Rt2ph%2F7qlR07m%2B%2FlSBTTFF3Hs4MCgEmREP0OLPfWgNzQDonZsw%2B%2BAWPDFaJP6LdErsRs2%2BJtZsa493CcCVDbhJo5q2NjKqm1jrNiXzvxfV1YLAnHvlW1smSCzmOJNLmEpgy1gcKjKVz8YlSDaM8NW42X27IPu4i4HdaUs%2FDqxZfoP8VFGQtWM06V%2FmRuHUTVbz0J%2B8Czm69MdsBHOQ1OJsBrScWHj0zNGh9Q8KAnfFabI4tNFt%2BderygB2IOpmilHrmHYxvRdBctKNuRep3BfM9VqmuybsCHg19nwN0Jl%2FKEZ9H7mwPn%2F90LoYbNPqn17G%2B6P9VQIp8LgmdN4B9FdKM9FCwP0sgZzIckAco%2F0o3vcWGBfWiaH6gj6ixUUSjEVp4OiWrAC%2Bns5vt9FWDyzE52rIkBZtHNU5PC7JiRt%2FM%2BtjCJ1N%2B%2FBjqkAc5VQ9tvzvJ8jFe3N4z69jjDB0i4%2FcOlU2ZSeL1cupvbCw5RVYVw4zVZTc0w1J3vsW0Ti%2Bx9FWESpwd3Qtb9NiOqRi0VvybPqclSIYdo4g5gAf791VXn74c6uVU8ileYW9Ghg5vTB%2F%2BaPqPKGdngUGdv2AaVGlzGddLKC%2Be1K7aHDbV8KHb%2BISR3n4csV8ngg6wBgU6Mh%2BmqtC9AI72VfrmBeTjT&X-Amz-Signature=a1865e4582c233e8921a06faf343631b0ea1f2be0ed0881f3e9570b72c4c458f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFKDMMTF%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQD4QOsEO9El94IHeSUohtg%2BdQJMBm4jq9fShPJ9ikLluAIhAKq8okzZBl8XVQr0AtePC2Nl5bwEYEvBbgxC7aaU1%2FyHKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwptTmDSR8Lo%2FriSc8q3APOQkKFN8OEz2%2BzivrSo5ewiHOko9SN9zp5b2AUJUIpz1FuIEyDg7%2F8Qle9NnZCrPkdmE6qau2cg9yas77R0eXIMqII8Vb68B%2FOGnMXZyhnAbYQPnbbgS6Ar1A3OPsgmYizxQzg6L1LC4aGJAWZQL4gLtJhaQwmcFOBpYOt3D5ZAFjUeZLIe3lHBP4eRxg%2Fc%2BPqefSxbsM3Ujl5Rt2ph%2F7qlR07m%2B%2FlSBTTFF3Hs4MCgEmREP0OLPfWgNzQDonZsw%2B%2BAWPDFaJP6LdErsRs2%2BJtZsa493CcCVDbhJo5q2NjKqm1jrNiXzvxfV1YLAnHvlW1smSCzmOJNLmEpgy1gcKjKVz8YlSDaM8NW42X27IPu4i4HdaUs%2FDqxZfoP8VFGQtWM06V%2FmRuHUTVbz0J%2B8Czm69MdsBHOQ1OJsBrScWHj0zNGh9Q8KAnfFabI4tNFt%2BderygB2IOpmilHrmHYxvRdBctKNuRep3BfM9VqmuybsCHg19nwN0Jl%2FKEZ9H7mwPn%2F90LoYbNPqn17G%2B6P9VQIp8LgmdN4B9FdKM9FCwP0sgZzIckAco%2F0o3vcWGBfWiaH6gj6ixUUSjEVp4OiWrAC%2Bns5vt9FWDyzE52rIkBZtHNU5PC7JiRt%2FM%2BtjCJ1N%2B%2FBjqkAc5VQ9tvzvJ8jFe3N4z69jjDB0i4%2FcOlU2ZSeL1cupvbCw5RVYVw4zVZTc0w1J3vsW0Ti%2Bx9FWESpwd3Qtb9NiOqRi0VvybPqclSIYdo4g5gAf791VXn74c6uVU8ileYW9Ghg5vTB%2F%2BaPqPKGdngUGdv2AaVGlzGddLKC%2Be1K7aHDbV8KHb%2BISR3n4csV8ngg6wBgU6Mh%2BmqtC9AI72VfrmBeTjT&X-Amz-Signature=d27524734f91212eab049e92c9f4b2ea7fb8a5a241d2ff76649a79bba09aab01&X-Amz-SignedHeaders=host&x-id=GetObject)

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

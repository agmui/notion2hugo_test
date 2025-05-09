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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BJXSUXQ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T132108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCESAogd1iVPO95sLECCm9C3rOHkOI8PON1wIFbgOX8gAIhAMAZM1T4L0y9NSW6zzx%2BPVZy%2BcilAT6QwY7wD9w5VI9MKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwB33oJ%2BiD%2FHt8nVpUq3AN%2BMGcUofhoDk23SSe5S%2Fnlx2bbqEiAgF7ZaMuYFpCqf8MQv4v%2BnjnNozTdAwUEp2qU31uQo740jC90XAr%2BVyXu9g0XQ1eoAHnJdrFhuYH1FG0tFlnDk8PlDRqWHodvkmTTbwsLxIs8NPkssSoQChwltby8aFFCbjktsI91z6yrmXCRmfZwM%2B22knrDkPVlQCB01EQw8sh9FIXhZeeb30XJqyudSAxe6hDodEsA03d6SiPXIx7W7cWrRpJQqv9VNhLmzDl2t9zO8WEG4hDIqWcGrE7Urus66PQdshjI2vmbsexXtyVQ9oMCAxmRVXUcHSVX7gyVnYgGsLMaVuyU9kWTpXdzPJV2PsC33ybHMNOA6mpjYvrmijSowQP4HUfPj5%2BOqiEAKr0OJWivnP6xcWu1rELBheHB878%2BE%2BwHuda6kx3a0VHy5LcA0hXAsYHNwBG0zd5WJHAETUFWMxyjaUFcdfNykADlD63QHOfDnztcxasGusg%2BtANcFZkmD1Tzhhbpl7ZUYyAfYHatkFta3TQ8q6MALi7PLidZnFVBNhq%2B%2BV3NEcYqHXFNlYGeKhsFRy6gjppFargQ3kRlAXp8zx%2FNVxc5K3vagmjPlyCYbU9zrSZWET6QKtzFjZ0f%2BDDn7%2FfABjqkAXjBLPNpFVFWae9vn8AXokpvQ4QkSjuNQmEzas0MJXaCFxPatdLbcHldivNrzSm%2Bs6%2BKgRWPxB6l8EPH9Tr%2FcEgq%2FToge%2Bl%2Fhb5KNz5fj8jaN8jlL8meYktdnOU4yObaZJEcf%2BAKJI0rEWC5qHotQ0sx4ndYUwc%2F6fiCDhxfTJrUgtO4J1%2Fj3yzxFM2v7bY0xL6lapXMY09Fzz7JtcZbbAnIhkOY&X-Amz-Signature=2b1f792b726dbda0a1a9bdd9a96d81e26b9ce5e2b0ef6cded3f00b65bd92bcf5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BJXSUXQ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T132108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCESAogd1iVPO95sLECCm9C3rOHkOI8PON1wIFbgOX8gAIhAMAZM1T4L0y9NSW6zzx%2BPVZy%2BcilAT6QwY7wD9w5VI9MKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwB33oJ%2BiD%2FHt8nVpUq3AN%2BMGcUofhoDk23SSe5S%2Fnlx2bbqEiAgF7ZaMuYFpCqf8MQv4v%2BnjnNozTdAwUEp2qU31uQo740jC90XAr%2BVyXu9g0XQ1eoAHnJdrFhuYH1FG0tFlnDk8PlDRqWHodvkmTTbwsLxIs8NPkssSoQChwltby8aFFCbjktsI91z6yrmXCRmfZwM%2B22knrDkPVlQCB01EQw8sh9FIXhZeeb30XJqyudSAxe6hDodEsA03d6SiPXIx7W7cWrRpJQqv9VNhLmzDl2t9zO8WEG4hDIqWcGrE7Urus66PQdshjI2vmbsexXtyVQ9oMCAxmRVXUcHSVX7gyVnYgGsLMaVuyU9kWTpXdzPJV2PsC33ybHMNOA6mpjYvrmijSowQP4HUfPj5%2BOqiEAKr0OJWivnP6xcWu1rELBheHB878%2BE%2BwHuda6kx3a0VHy5LcA0hXAsYHNwBG0zd5WJHAETUFWMxyjaUFcdfNykADlD63QHOfDnztcxasGusg%2BtANcFZkmD1Tzhhbpl7ZUYyAfYHatkFta3TQ8q6MALi7PLidZnFVBNhq%2B%2BV3NEcYqHXFNlYGeKhsFRy6gjppFargQ3kRlAXp8zx%2FNVxc5K3vagmjPlyCYbU9zrSZWET6QKtzFjZ0f%2BDDn7%2FfABjqkAXjBLPNpFVFWae9vn8AXokpvQ4QkSjuNQmEzas0MJXaCFxPatdLbcHldivNrzSm%2Bs6%2BKgRWPxB6l8EPH9Tr%2FcEgq%2FToge%2Bl%2Fhb5KNz5fj8jaN8jlL8meYktdnOU4yObaZJEcf%2BAKJI0rEWC5qHotQ0sx4ndYUwc%2F6fiCDhxfTJrUgtO4J1%2Fj3yzxFM2v7bY0xL6lapXMY09Fzz7JtcZbbAnIhkOY&X-Amz-Signature=3a9bbebdbd12090a7820d89ff1254f12fe6dfe9c74d4911e9ef733ef2d5dcc36&X-Amz-SignedHeaders=host&x-id=GetObject)

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

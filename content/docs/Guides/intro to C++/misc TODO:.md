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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWY4DNPZ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T110200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIDTejZYL34d7ympy2MD1KifUmRGZ2eBxvNi7BqWaSqeGAiEA2c1aO7Bmhhmt1BZ2Z6l%2BOh3FzSvLhztaKxh9IseXo2oq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDPXBbYNNeGv51s6Y3ircA8JMmI%2FsDPkibMLpjZdnRPyQGPCiYZnrJdUOHHVquPCkkWj7uEnLHcaqaRmVmLtnK5o%2Fkq7gY82p0EhLuLj7m08On3Ei6ie8gNt00kx801uB9UesRZoXEnBByWK1KBEYXANj%2FsdAAyd7A9Zj16PO1cLJn7bSXBjJ6kqMGuDct%2BGosTUKXD0SQjgaFSooVTT4NuTmoxbh9MYQ%2B8z2KapwsxzaLPvvPJ2mzn3hEUXmc5zL4jmQiXVWufAI%2FZkynRF%2BIEtqJxU91CmWog7X%2BWURfu84l%2F%2BmX4%2FgQWZEgkBf7d2CV168VfaB5hvVzduRgMpY6W1zR%2Bmr13LabVGQlfahVoA4HXIGnYb13lv1nCzv7uxQjsR516encJw45ylXB9JRelT2PA0%2BEHhGsjxj8RTci%2FT9xgtrPOfGzpFN1ZTAtMbKqvUzVctKgxDwtyBu5%2FuVGhx7LX2p5RYpj04J0TJJJWF4oVDCcy3MU1Dfgxgmgd4p1g2PCtwljArKeVuTB0ewijVfvixczfCWFoxRvRlJD6nAQ%2FmzQsgOqHExGPWg25nGJZ7Am11wOkFl6N7eQy1xzSrtXzzTwsjhjwgCVsFI4U3MDCwFK6Vfv4f8d7q2JfdwwTWsSIogmraYRLF3MIDuy8EGOqUBN3htdfn%2BfePkxlGsg0p%2B9w7Xyp6qeSFKG7fEw9NYHMEifmoWPPUmnRH3TiFjZiTtwIoGHh4zJVSGWYVc9h9dcWYbzyPWsq5KB9nrwV%2B6Mf3%2FOYEVYo13%2FTh6g8UD2juudLuAe3NwB9h3SpMpjM2VuK4SyLXTb7A%2BT3n%2Bw04dUOCjscIs70L5A9hc%2BHVJ6yu92LXaPUHMWKYryeZrC%2BNda5jQJj83&X-Amz-Signature=447fd5bf40f435d887224048cafcc9d8c217e1e247abf8ee4308f11fe0c9a2ea&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWY4DNPZ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T110200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIDTejZYL34d7ympy2MD1KifUmRGZ2eBxvNi7BqWaSqeGAiEA2c1aO7Bmhhmt1BZ2Z6l%2BOh3FzSvLhztaKxh9IseXo2oq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDPXBbYNNeGv51s6Y3ircA8JMmI%2FsDPkibMLpjZdnRPyQGPCiYZnrJdUOHHVquPCkkWj7uEnLHcaqaRmVmLtnK5o%2Fkq7gY82p0EhLuLj7m08On3Ei6ie8gNt00kx801uB9UesRZoXEnBByWK1KBEYXANj%2FsdAAyd7A9Zj16PO1cLJn7bSXBjJ6kqMGuDct%2BGosTUKXD0SQjgaFSooVTT4NuTmoxbh9MYQ%2B8z2KapwsxzaLPvvPJ2mzn3hEUXmc5zL4jmQiXVWufAI%2FZkynRF%2BIEtqJxU91CmWog7X%2BWURfu84l%2F%2BmX4%2FgQWZEgkBf7d2CV168VfaB5hvVzduRgMpY6W1zR%2Bmr13LabVGQlfahVoA4HXIGnYb13lv1nCzv7uxQjsR516encJw45ylXB9JRelT2PA0%2BEHhGsjxj8RTci%2FT9xgtrPOfGzpFN1ZTAtMbKqvUzVctKgxDwtyBu5%2FuVGhx7LX2p5RYpj04J0TJJJWF4oVDCcy3MU1Dfgxgmgd4p1g2PCtwljArKeVuTB0ewijVfvixczfCWFoxRvRlJD6nAQ%2FmzQsgOqHExGPWg25nGJZ7Am11wOkFl6N7eQy1xzSrtXzzTwsjhjwgCVsFI4U3MDCwFK6Vfv4f8d7q2JfdwwTWsSIogmraYRLF3MIDuy8EGOqUBN3htdfn%2BfePkxlGsg0p%2B9w7Xyp6qeSFKG7fEw9NYHMEifmoWPPUmnRH3TiFjZiTtwIoGHh4zJVSGWYVc9h9dcWYbzyPWsq5KB9nrwV%2B6Mf3%2FOYEVYo13%2FTh6g8UD2juudLuAe3NwB9h3SpMpjM2VuK4SyLXTb7A%2BT3n%2Bw04dUOCjscIs70L5A9hc%2BHVJ6yu92LXaPUHMWKYryeZrC%2BNda5jQJj83&X-Amz-Signature=5690d77aad16708ca704f418adaeac51aec5346300da9a5d6dbd7935d36b28b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

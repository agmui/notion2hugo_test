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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656ER7RHT%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T070814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIHWm2n4xHRa%2BTkOVOUlRCLU78S4eMxIBAkq%2Fk9bVQyLeAiAKsyofRAzuFetBeeaNolWbCZ9lXCK5zMUw9Zl18UAwBir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMSl4%2FCWUUvwnja%2BQMKtwDEgRcyPt1z9uyRE9uiF6NiyI8rWnQ%2BUSD0u8PyKnPQ2lVZYHudU9Yzj0%2BebSk0X8D%2FKiLnICYfqE%2BavZkOaXa1LVplZ483qZsS8ZfwuWRIeSVPkzoAxmozM8uG0w%2BkIh2s6UXb8r%2B2WDspbhsPC0H0kUggwZeBjRQ8vcCMPQ8SKDp4MQBQQkFhiNrzA5jakJaVXNNtBjC7fR12ig%2FT4kh4w6q9GuiiiRjYmt5CNRRAUlrDziYD3Lkh5%2B33V3nI%2B6Pf5MvcxkWvMlRUCzI85Mj%2Fock9gfRj9IzCD0Whxs%2FthVThY34ay2Lbbkt7XkJ3F7Y73lUwCVFefpB%2FizlXjtQHsoA9HttAzb%2B2%2FnOIBKdtEN6w2HlSDpLcKwaMyAQloKmas0m8tum3ZsnnZfXSX%2BF5NMYKDWHHekBez3eRRgZvLyfMGYCCkusIR8RfS5RZlhoLEGVZih44xzY2h%2F4p1BYWdz8oo%2BsIyv4QP5C8XMyjDKwqaQGMhvVMe3RLyp2GPpKlQhgNTqHaOA%2BRYuqm%2FOx1iyn9Mzrhtuu1dzz5tusCiXArWazZVkCHyAVn87%2BhisCRuhRqPhIhZ6RKbIbWH2VG8F%2BIfndrdXu1SsoKima%2BJskcfEwAQhunDNX6BUw5b%2BGvQY6pgGHypAR5NIozdwSazgRoua%2F5DeLpVhe0%2BtH87yY3oQZXUzC1vQO5qGs282hLs0o46I9DwjaTrEPklVEbRBn17yfQRGVJm3D3xzYFUqSFo01KIAsYvPXy%2Bmy8E%2FvZwx%2B1WOnj3A28y0K9o%2BtDPSnEsWp1qtXcKspLe0LM7PJxFMFn4uuCPglM88vAHdFyEU9QfnRIblOFNRub%2BmH4xqEebhB2coCL21r&X-Amz-Signature=c0dc9a60bf4e2d711d667fbad5985d054c89bab11d701d73475cdaf009668ec4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656ER7RHT%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T070814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIHWm2n4xHRa%2BTkOVOUlRCLU78S4eMxIBAkq%2Fk9bVQyLeAiAKsyofRAzuFetBeeaNolWbCZ9lXCK5zMUw9Zl18UAwBir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMSl4%2FCWUUvwnja%2BQMKtwDEgRcyPt1z9uyRE9uiF6NiyI8rWnQ%2BUSD0u8PyKnPQ2lVZYHudU9Yzj0%2BebSk0X8D%2FKiLnICYfqE%2BavZkOaXa1LVplZ483qZsS8ZfwuWRIeSVPkzoAxmozM8uG0w%2BkIh2s6UXb8r%2B2WDspbhsPC0H0kUggwZeBjRQ8vcCMPQ8SKDp4MQBQQkFhiNrzA5jakJaVXNNtBjC7fR12ig%2FT4kh4w6q9GuiiiRjYmt5CNRRAUlrDziYD3Lkh5%2B33V3nI%2B6Pf5MvcxkWvMlRUCzI85Mj%2Fock9gfRj9IzCD0Whxs%2FthVThY34ay2Lbbkt7XkJ3F7Y73lUwCVFefpB%2FizlXjtQHsoA9HttAzb%2B2%2FnOIBKdtEN6w2HlSDpLcKwaMyAQloKmas0m8tum3ZsnnZfXSX%2BF5NMYKDWHHekBez3eRRgZvLyfMGYCCkusIR8RfS5RZlhoLEGVZih44xzY2h%2F4p1BYWdz8oo%2BsIyv4QP5C8XMyjDKwqaQGMhvVMe3RLyp2GPpKlQhgNTqHaOA%2BRYuqm%2FOx1iyn9Mzrhtuu1dzz5tusCiXArWazZVkCHyAVn87%2BhisCRuhRqPhIhZ6RKbIbWH2VG8F%2BIfndrdXu1SsoKima%2BJskcfEwAQhunDNX6BUw5b%2BGvQY6pgGHypAR5NIozdwSazgRoua%2F5DeLpVhe0%2BtH87yY3oQZXUzC1vQO5qGs282hLs0o46I9DwjaTrEPklVEbRBn17yfQRGVJm3D3xzYFUqSFo01KIAsYvPXy%2Bmy8E%2FvZwx%2B1WOnj3A28y0K9o%2BtDPSnEsWp1qtXcKspLe0LM7PJxFMFn4uuCPglM88vAHdFyEU9QfnRIblOFNRub%2BmH4xqEebhB2coCL21r&X-Amz-Signature=f9d0e726cd06c077f4aef9a4b6a62e1ccf26749d4895126cc1ecc4ba26710df0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

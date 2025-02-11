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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF6EVWQK%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T230116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhzKmt8SkMpcoWgTx%2FWtZ9YrDTn2%2BExCOg7KNge%2BYvlAiEA0fRJn8%2BdHjOZq7Rp7NWrD4mjNv7eGd8ykSs9FTFCcuoqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHoZKbh94E44ghkjCrcAxbyP1SAHuJjQm8Z5qZnhxT6Eo41XzF5H4nAB1ZbZqNjWTS6oQIcgYd5MgQ4tptd%2B88ZXu6NVPz25yGkzCV0iVOhncuqvLLWAYeJ66Q%2FWUvQ%2F7NE3pxPZiPE%2Fvpmq37CnQTz10bwXL7HoN%2FGuqU%2BvGBnLEKClOS%2FvAm%2FBN1hoNBqjdSCWzHvmVsgpEx34mBoF85jzoxHc9q%2FUbZi7HNf%2FrX1w4rizpe4h8V6t%2B5bhzwcr%2B%2F1eQ4hfFh9nwEwRz2H3U0kyuft2n25qIQG5EUYDm98gOw3adxTgZPHNJxpFtXGrwLQ94bm0lBkiVJk1DYfXjBPOlluhQZkLs5IjUzsDd55wSrDpVyKxlotF%2Fxhk2b5ACMLFmpn%2FA66h3ZNSIDf6nXQvBPeN7BDMHPFOxQd5IuMUDHXbPYGX1jDsORNnrvnBB2EoPZWMLaBrK27s73GOTi%2Fqyn7xtQDLIH3fwwUN7a5Rt9ICobBkal%2FzV%2Fjk3U3pp8enyg355rVZIix5Ihw7OQjh%2Byxy%2B3jA%2BNrnnpAdRe8BL%2BFF8G9tNwjKAEn0nA3fDTw%2FwhzAPayNKt8ph3GZoiOK7J6dTBPL0RjjdP24YrGt7NWCj9cv7QMcIe84T15jGN4XxjKvz98KiCfMOTJrr0GOqUB2ZCKoiRaLcRleQioaGXbTk%2FVuBRAPY%2FnZvpKSwQo4K7rkvd%2BAEEYADn9MSDbrhx%2BCGZJtvaTFHW%2FSNgp8eT9wbP3JE3gt1jrg9V0Dt%2FSfSRTltRWelg%2BMz1Q8TG7vk6iC1XnNAbPhnLwyTiqft7K9V4sY7sQHE6cgj5K4TediYZCl9bD5ptWx6XCql3GsiYXAVcwPx39c2a34dtdJytjja6JRF7K&X-Amz-Signature=0888189543f0bd07b0e781c0e9446a97810bf0ef8353a951845372cfd47371ec&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF6EVWQK%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T230116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhzKmt8SkMpcoWgTx%2FWtZ9YrDTn2%2BExCOg7KNge%2BYvlAiEA0fRJn8%2BdHjOZq7Rp7NWrD4mjNv7eGd8ykSs9FTFCcuoqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHoZKbh94E44ghkjCrcAxbyP1SAHuJjQm8Z5qZnhxT6Eo41XzF5H4nAB1ZbZqNjWTS6oQIcgYd5MgQ4tptd%2B88ZXu6NVPz25yGkzCV0iVOhncuqvLLWAYeJ66Q%2FWUvQ%2F7NE3pxPZiPE%2Fvpmq37CnQTz10bwXL7HoN%2FGuqU%2BvGBnLEKClOS%2FvAm%2FBN1hoNBqjdSCWzHvmVsgpEx34mBoF85jzoxHc9q%2FUbZi7HNf%2FrX1w4rizpe4h8V6t%2B5bhzwcr%2B%2F1eQ4hfFh9nwEwRz2H3U0kyuft2n25qIQG5EUYDm98gOw3adxTgZPHNJxpFtXGrwLQ94bm0lBkiVJk1DYfXjBPOlluhQZkLs5IjUzsDd55wSrDpVyKxlotF%2Fxhk2b5ACMLFmpn%2FA66h3ZNSIDf6nXQvBPeN7BDMHPFOxQd5IuMUDHXbPYGX1jDsORNnrvnBB2EoPZWMLaBrK27s73GOTi%2Fqyn7xtQDLIH3fwwUN7a5Rt9ICobBkal%2FzV%2Fjk3U3pp8enyg355rVZIix5Ihw7OQjh%2Byxy%2B3jA%2BNrnnpAdRe8BL%2BFF8G9tNwjKAEn0nA3fDTw%2FwhzAPayNKt8ph3GZoiOK7J6dTBPL0RjjdP24YrGt7NWCj9cv7QMcIe84T15jGN4XxjKvz98KiCfMOTJrr0GOqUB2ZCKoiRaLcRleQioaGXbTk%2FVuBRAPY%2FnZvpKSwQo4K7rkvd%2BAEEYADn9MSDbrhx%2BCGZJtvaTFHW%2FSNgp8eT9wbP3JE3gt1jrg9V0Dt%2FSfSRTltRWelg%2BMz1Q8TG7vk6iC1XnNAbPhnLwyTiqft7K9V4sY7sQHE6cgj5K4TediYZCl9bD5ptWx6XCql3GsiYXAVcwPx39c2a34dtdJytjja6JRF7K&X-Amz-Signature=13695a8b5825a232ab43dfc0e8fd91abb2beed7fae71070835815edeedbad010&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CZHLAL6%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T100805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIAVJ6%2Btngu7J9zArbsBV4wapolzqgtX7mvt1U1LLuntoAiBKO0uzprWlI4MTwOdAvEOmdNTKBBZtxJjEiLIWlOuh2iqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5x5cYmaXaEai7npSKtwDURqanyWTZgYTaySafyMPPSMjWFdnLptnCNGaU73go6WcKv%2FX3oBgOMQUtkpwwNkXqsZpV%2BtqfrwcmXF0jioqHygOciL0xsPs5Hv0h%2FHSOgjnDNKzlZAIkvbI8YOeJbl0gcamsg1Pb%2BC4ktxHczlidLGUif2bRXuAuPp9p5q8YfnJIlXj9Ui8dRdYVHV9y7PeDaJeUrPSdxzwDiTNr8abDtNwuwh6cKch7q4NorHB9fGsvJpHi3W%2BTsUppotkZniqam7L%2F%2F2rq6sLhwqUT8d4ZLqb%2BJIrrKpf5imzfeYK1%2B38hhq%2BZU%2FkXSllwagRyEBVh6KEahpv9TXcOcs0WZ%2BW6VgUjluddggDmJE5iv26lD%2F2EF625Bxy03JxDodmvVu3VbjBbsieQYzs9JufeWW%2F317Sdb44S99zmbqVBgeX7Gx0VCB%2F85ShbVV%2BML3mE%2BMHJK9WwdnzIF9H27v%2F%2FnDS5xfdLyiucbExIhdNtlqOCzdzmia1kThllgUynnpYNuBc5Z4vzWA9%2FNxGZs8j4mZfM87tOMg1MIXG2kz9IWvw2kNA4SSVdjOgQAAY2dXq1l6qSpgLYkR8zckXMwNVyUC8Oq18ntG8MTrKY2frAKkOxUvJS2nG0mMSdYf3D7swrLmBwQY6pgFXRHd90KncBllkkMD76STkwqEUYI%2Bxalc8iZUsqkAiI02tTFs%2FhjsbPO%2Fkvknltl4ayye3AwHbyo5k6QZzffRqF6uM7nFSYAgcMCvuz1QoPWD1KbYBbZlbJVJfnzOTMIcnRsLemsrl3iLWufHANpFSVv5myXcipdziynyqNnH2xd1QKYBr28Ozq3ru5EHUZu1ypuxB3UTFT9%2BtGUEv3Oeui8Orn0V1&X-Amz-Signature=24ae0bf8e57eb5b3b17253d91bb03948832327963c9512398d72dce10d782985&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CZHLAL6%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T100805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIAVJ6%2Btngu7J9zArbsBV4wapolzqgtX7mvt1U1LLuntoAiBKO0uzprWlI4MTwOdAvEOmdNTKBBZtxJjEiLIWlOuh2iqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5x5cYmaXaEai7npSKtwDURqanyWTZgYTaySafyMPPSMjWFdnLptnCNGaU73go6WcKv%2FX3oBgOMQUtkpwwNkXqsZpV%2BtqfrwcmXF0jioqHygOciL0xsPs5Hv0h%2FHSOgjnDNKzlZAIkvbI8YOeJbl0gcamsg1Pb%2BC4ktxHczlidLGUif2bRXuAuPp9p5q8YfnJIlXj9Ui8dRdYVHV9y7PeDaJeUrPSdxzwDiTNr8abDtNwuwh6cKch7q4NorHB9fGsvJpHi3W%2BTsUppotkZniqam7L%2F%2F2rq6sLhwqUT8d4ZLqb%2BJIrrKpf5imzfeYK1%2B38hhq%2BZU%2FkXSllwagRyEBVh6KEahpv9TXcOcs0WZ%2BW6VgUjluddggDmJE5iv26lD%2F2EF625Bxy03JxDodmvVu3VbjBbsieQYzs9JufeWW%2F317Sdb44S99zmbqVBgeX7Gx0VCB%2F85ShbVV%2BML3mE%2BMHJK9WwdnzIF9H27v%2F%2FnDS5xfdLyiucbExIhdNtlqOCzdzmia1kThllgUynnpYNuBc5Z4vzWA9%2FNxGZs8j4mZfM87tOMg1MIXG2kz9IWvw2kNA4SSVdjOgQAAY2dXq1l6qSpgLYkR8zckXMwNVyUC8Oq18ntG8MTrKY2frAKkOxUvJS2nG0mMSdYf3D7swrLmBwQY6pgFXRHd90KncBllkkMD76STkwqEUYI%2Bxalc8iZUsqkAiI02tTFs%2FhjsbPO%2Fkvknltl4ayye3AwHbyo5k6QZzffRqF6uM7nFSYAgcMCvuz1QoPWD1KbYBbZlbJVJfnzOTMIcnRsLemsrl3iLWufHANpFSVv5myXcipdziynyqNnH2xd1QKYBr28Ozq3ru5EHUZu1ypuxB3UTFT9%2BtGUEv3Oeui8Orn0V1&X-Amz-Signature=3e722d4089ca5db7864147edb680102b5565db9fc082959252ad14649c860e8c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

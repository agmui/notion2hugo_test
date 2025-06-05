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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYA45EZ4%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQC4BcPO6MTe8W4BHjZ%2FO93LHW5LKXY6%2BlOG%2FLSOGALX5gIhAKj2qup4ABtUMIAf4485fjOhnPWOamgXKemA%2FDPHU6YtKv8DCEwQABoMNjM3NDIzMTgzODA1Igx5%2FYuW55MGnMGAXMYq3ANkCPWkqdyiQ9eCNcGOKRLxP5fGEJKdAG%2BITXxvnz0m9M4%2BxpW1fb0AzIBlt5DtyaIdwPINCXFRP4Zpo0qE%2BQ7WZ0b1K84zjbwbuFigXmD2b5btu69j3%2Foi3W6REqcdq%2FYtMzr%2FWMgL%2F%2FPjI82VCTPGkdSgoamQfh8EfyuCROeFbj4gYnB80iasTE%2BDhFTCqZGhYCMI2Q6lBuWwiqxSgpsQg7WFugUT8VVLcNjPVrWQ37Dh1XTPPjJ0PCTZm0Y4ji34gS3dupOeWXsZftHMbGzPm2p70LVHA0CnRtu88GLN7PQW8gl0%2BIp2m4%2B2Md9WEVwyOhNlDmBGKQ1wxBgZlFOPfWueViSpuxTngFSY7sqCKniwWH4XdORLdQg%2Fj8jNIuXGWvftYwt9%2F9HsYM05UZnIyH4Sm1W3FyKz5paoQZhHsN0TkYuFnVaPEOxVqPO2CjtvISg8eFikFnJVZxS3RFn2aEOYZ5sO33S%2F00p696HeXK1lpB6LdaI%2BrlTZdTCx%2BqrRVVh4Ko5xJ6XxNKgcpNH2Q17hsD%2Bi3VQfoul1aeTUm7%2B8rJOe6xpMrEyBnZwiT3duiS1SyZ%2B06unSAG%2F%2BPBzkIcuJ1NWP1nyTvHd5eFxEW4%2FRMMu4HEhEs7H2vjDD2IfCBjqkAQ%2FtV0L5coTlAbSeqyGHDcLralpWKwvS65OZl398YohWAciIbna7FidUOF2hyBw88Pa46e%2BKvQovZO0i8qte1gEwSc0eHCigKFQc6c2mimMTd%2Bn4pI92YPqzn80z03rkhbo3Ae3NTlEBf5W0TbhBX89fCs6GofiKRVLq9EAjlYYCGqJHWGb2VAYCVOj3LIsLRXj93BkuHqEshI81AwHy1i5A%2F5fc&X-Amz-Signature=4a6d32b34816d99c5e8f7a517f00c71def9a68aa76166aba2c014602f730487d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYA45EZ4%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQC4BcPO6MTe8W4BHjZ%2FO93LHW5LKXY6%2BlOG%2FLSOGALX5gIhAKj2qup4ABtUMIAf4485fjOhnPWOamgXKemA%2FDPHU6YtKv8DCEwQABoMNjM3NDIzMTgzODA1Igx5%2FYuW55MGnMGAXMYq3ANkCPWkqdyiQ9eCNcGOKRLxP5fGEJKdAG%2BITXxvnz0m9M4%2BxpW1fb0AzIBlt5DtyaIdwPINCXFRP4Zpo0qE%2BQ7WZ0b1K84zjbwbuFigXmD2b5btu69j3%2Foi3W6REqcdq%2FYtMzr%2FWMgL%2F%2FPjI82VCTPGkdSgoamQfh8EfyuCROeFbj4gYnB80iasTE%2BDhFTCqZGhYCMI2Q6lBuWwiqxSgpsQg7WFugUT8VVLcNjPVrWQ37Dh1XTPPjJ0PCTZm0Y4ji34gS3dupOeWXsZftHMbGzPm2p70LVHA0CnRtu88GLN7PQW8gl0%2BIp2m4%2B2Md9WEVwyOhNlDmBGKQ1wxBgZlFOPfWueViSpuxTngFSY7sqCKniwWH4XdORLdQg%2Fj8jNIuXGWvftYwt9%2F9HsYM05UZnIyH4Sm1W3FyKz5paoQZhHsN0TkYuFnVaPEOxVqPO2CjtvISg8eFikFnJVZxS3RFn2aEOYZ5sO33S%2F00p696HeXK1lpB6LdaI%2BrlTZdTCx%2BqrRVVh4Ko5xJ6XxNKgcpNH2Q17hsD%2Bi3VQfoul1aeTUm7%2B8rJOe6xpMrEyBnZwiT3duiS1SyZ%2B06unSAG%2F%2BPBzkIcuJ1NWP1nyTvHd5eFxEW4%2FRMMu4HEhEs7H2vjDD2IfCBjqkAQ%2FtV0L5coTlAbSeqyGHDcLralpWKwvS65OZl398YohWAciIbna7FidUOF2hyBw88Pa46e%2BKvQovZO0i8qte1gEwSc0eHCigKFQc6c2mimMTd%2Bn4pI92YPqzn80z03rkhbo3Ae3NTlEBf5W0TbhBX89fCs6GofiKRVLq9EAjlYYCGqJHWGb2VAYCVOj3LIsLRXj93BkuHqEshI81AwHy1i5A%2F5fc&X-Amz-Signature=bcadcf339f501718adffc9e525dcb60548ab8aa404415cded86ecc9629566acf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

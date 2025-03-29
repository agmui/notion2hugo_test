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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654OKOTQ5%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T121230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIHVMv7zFOOIiR%2F45mBZD1sOQLEV2tgguuNoViWMt0VnOAiA9FYPJOZTZEipnso%2FnWu26iWPZ17Hd2HHbQnCi9Bk5nir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMP4W%2FLFPIAKVO30VjKtwDgV3Q74RSWmNvSZcI6A6SY2HiivGqkSIo5uyTI%2BXK60ox4VYxU4JoKzKzemGKKLb5A%2BWx4GgZiIkUIgn41U9Iy1XCgxxfVwZ1DSVwEg3qJ7SdMaBxOtBqoDmcGYp8KG4MbwOPCPpIroKgNstY1wYeiMQl9aPf4stw7tsJPLxdoRfqrufoxogsB9XhOlT11OktiZwqdz6cbPCCQQznpdMoDCEq7MIalCGx7h1%2Fgmltifd8BdQtzUlSQ8phUvCn%2Bv7R9oNO%2B4%2Fxsl3HSNPDkCkqXxAw3jYdEBohBJI36x%2BI243Fe3QWar0iIVWxjlb4WO3E9%2FhXHq6RQsmyYsHGczuWg4xjlc2%2BN6J697nnvCGFO%2FvPEnm00d4ywvCHG4IYcJ1bg3LkSgbORv%2F95ERvwAoUo16a30EhgEgwmTnJFxiz43Baw7QxKVqvtDdyH1XOU9Gf4x%2Fv9ZBrYn1cGrP51UwmNYGb97Pj%2Fj6RXyG71lIpHFZ1jKwn1iu3NyrKOzRXFxuebd0rU%2BQpsRKyvIvONfUGS7fexZeGkPc2dDRbAHEXodx0Ui3mdg8YeLkHj7MZR1vGKQgmk46X5u8tI29XS5fpLfOpbVJIs3MVeIJ5Z446czC2uPFfpa1%2BVnv37Icw97SfvwY6pgE6u7%2FKbVcu%2BafIFXOD3p%2Fhv51pLAzhOY%2B2IR8ta618UX7dhttKvQ6pKb72hMZDhFlq48U6QMGclNZNmGl1cKt%2BlFR3jlWRr18mdc%2BfydoNOyfsTryzfINyLnfUUmO%2B8k2qwhWxrGouB8EHlYzrJJZ5Y3BfE1gtYvT1jpbJbdXy9YcxjDHREj0d3%2Bs2K1kctT2cNON2uOr8pQWgpue8Uittb0cEhBfr&X-Amz-Signature=391c0091b9a1e7fa2049957ad66a16c3ca4801e4ab9c7988ae69734b0260a378&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654OKOTQ5%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T121230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIHVMv7zFOOIiR%2F45mBZD1sOQLEV2tgguuNoViWMt0VnOAiA9FYPJOZTZEipnso%2FnWu26iWPZ17Hd2HHbQnCi9Bk5nir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMP4W%2FLFPIAKVO30VjKtwDgV3Q74RSWmNvSZcI6A6SY2HiivGqkSIo5uyTI%2BXK60ox4VYxU4JoKzKzemGKKLb5A%2BWx4GgZiIkUIgn41U9Iy1XCgxxfVwZ1DSVwEg3qJ7SdMaBxOtBqoDmcGYp8KG4MbwOPCPpIroKgNstY1wYeiMQl9aPf4stw7tsJPLxdoRfqrufoxogsB9XhOlT11OktiZwqdz6cbPCCQQznpdMoDCEq7MIalCGx7h1%2Fgmltifd8BdQtzUlSQ8phUvCn%2Bv7R9oNO%2B4%2Fxsl3HSNPDkCkqXxAw3jYdEBohBJI36x%2BI243Fe3QWar0iIVWxjlb4WO3E9%2FhXHq6RQsmyYsHGczuWg4xjlc2%2BN6J697nnvCGFO%2FvPEnm00d4ywvCHG4IYcJ1bg3LkSgbORv%2F95ERvwAoUo16a30EhgEgwmTnJFxiz43Baw7QxKVqvtDdyH1XOU9Gf4x%2Fv9ZBrYn1cGrP51UwmNYGb97Pj%2Fj6RXyG71lIpHFZ1jKwn1iu3NyrKOzRXFxuebd0rU%2BQpsRKyvIvONfUGS7fexZeGkPc2dDRbAHEXodx0Ui3mdg8YeLkHj7MZR1vGKQgmk46X5u8tI29XS5fpLfOpbVJIs3MVeIJ5Z446czC2uPFfpa1%2BVnv37Icw97SfvwY6pgE6u7%2FKbVcu%2BafIFXOD3p%2Fhv51pLAzhOY%2B2IR8ta618UX7dhttKvQ6pKb72hMZDhFlq48U6QMGclNZNmGl1cKt%2BlFR3jlWRr18mdc%2BfydoNOyfsTryzfINyLnfUUmO%2B8k2qwhWxrGouB8EHlYzrJJZ5Y3BfE1gtYvT1jpbJbdXy9YcxjDHREj0d3%2Bs2K1kctT2cNON2uOr8pQWgpue8Uittb0cEhBfr&X-Amz-Signature=ffd20cb92852f4797b31460278f32c340de0373e25a03b1493a5002f3a0627d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

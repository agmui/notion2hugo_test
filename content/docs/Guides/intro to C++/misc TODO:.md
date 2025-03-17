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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U3GLHUH%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T181118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6fJZgMupCGOCYQKJSECJPlBiAd1kP2SqfDSbQ%2FWY7%2BAiAHNHEBaTVilzkWUPgycCi1HS4PhaRs7X1SyQU%2FboPkiCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM%2FO4QHssz9gGXuLicKtwDFO4wt3cKyPGR%2BvD8aqJjcuy3eB4w%2F2KZXHhMnW0pZumC0lTBqT15sYFZTgjluy3%2FyibIwuoSVMGS6jvwqZYN6xNT85i7%2ByDUsgIT%2FnJ5SroW4Qdo5gI3yhJLzCP2eoVPMgSAi9xt7coJsqz2j05%2BVHeGStGqAAbSSSNuYjRJbkCXOFq8ADbMTHiUVUEd4emt6IiO7vBhNWcumWhBC1%2BjHCuOWYXsmp0Iu44st5WGm%2BKDjoKCjMsygXawPngBQYU7i8HXAyS03vvOfbVngPyC8kKJJujEeGm13cBe8TF0cqcZySeNRCrEIGNHxXsCBr63RNAz%2FS%2BJgfPgLdiSJEtFGUmRiB9FYgFw2y0gvwaU99aV%2FoPJy3qh7hSH38zQkNuoSBsD%2FDai9JUaxxjlSrkfySqtY6olldclLTmmlMIS8iiCpFl8SnjGyfv3aQY82FnU%2FQEZAV394w%2BGJFXXoes6WZJDKa8dHEWi7nh05J310l%2B4%2Bxb9m%2FVzqF%2B5l6XLWDr0Iz41B%2FRbCnEOUfpNaqJolrff1x88WJ9ijFtTBO1nDnTv1UfJoLBebF6Q5Skc6vjK%2Bbdn6w2e7c9ZqDhDBYdWCUsnm7zvhEVVUA8tyEvorpfBwYuYBOsaRFs5znMwtMXhvgY6pgGi8kqKmpWoTywsx9GNaag4GcYKn2aNBONRM4qna4RbdXw1wr4msPAJLeUgUiF9sbBOu8nYv9acNbOh%2B0I%2FRN13Wyoqvh86Q5T4s8MlJKk9HrLvfSFg%2Bjx2LSuJbP5dmO6mg%2Fy%2F58IRfBYS8T7WOawyeKh0wAi%2FFK%2B3758u6Zx9L4U73psuhqh94N5j3w4mxI0ctUfOc%2BIYcV987VlVo1OzblqSoLj2&X-Amz-Signature=8f10ebf7b5885b8719fddb3b26b3c3ba8a95fcb3a10801a1a27f4ad9700f4ad0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U3GLHUH%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T181118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6fJZgMupCGOCYQKJSECJPlBiAd1kP2SqfDSbQ%2FWY7%2BAiAHNHEBaTVilzkWUPgycCi1HS4PhaRs7X1SyQU%2FboPkiCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM%2FO4QHssz9gGXuLicKtwDFO4wt3cKyPGR%2BvD8aqJjcuy3eB4w%2F2KZXHhMnW0pZumC0lTBqT15sYFZTgjluy3%2FyibIwuoSVMGS6jvwqZYN6xNT85i7%2ByDUsgIT%2FnJ5SroW4Qdo5gI3yhJLzCP2eoVPMgSAi9xt7coJsqz2j05%2BVHeGStGqAAbSSSNuYjRJbkCXOFq8ADbMTHiUVUEd4emt6IiO7vBhNWcumWhBC1%2BjHCuOWYXsmp0Iu44st5WGm%2BKDjoKCjMsygXawPngBQYU7i8HXAyS03vvOfbVngPyC8kKJJujEeGm13cBe8TF0cqcZySeNRCrEIGNHxXsCBr63RNAz%2FS%2BJgfPgLdiSJEtFGUmRiB9FYgFw2y0gvwaU99aV%2FoPJy3qh7hSH38zQkNuoSBsD%2FDai9JUaxxjlSrkfySqtY6olldclLTmmlMIS8iiCpFl8SnjGyfv3aQY82FnU%2FQEZAV394w%2BGJFXXoes6WZJDKa8dHEWi7nh05J310l%2B4%2Bxb9m%2FVzqF%2B5l6XLWDr0Iz41B%2FRbCnEOUfpNaqJolrff1x88WJ9ijFtTBO1nDnTv1UfJoLBebF6Q5Skc6vjK%2Bbdn6w2e7c9ZqDhDBYdWCUsnm7zvhEVVUA8tyEvorpfBwYuYBOsaRFs5znMwtMXhvgY6pgGi8kqKmpWoTywsx9GNaag4GcYKn2aNBONRM4qna4RbdXw1wr4msPAJLeUgUiF9sbBOu8nYv9acNbOh%2B0I%2FRN13Wyoqvh86Q5T4s8MlJKk9HrLvfSFg%2Bjx2LSuJbP5dmO6mg%2Fy%2F58IRfBYS8T7WOawyeKh0wAi%2FFK%2B3758u6Zx9L4U73psuhqh94N5j3w4mxI0ctUfOc%2BIYcV987VlVo1OzblqSoLj2&X-Amz-Signature=df91c87393aff500bdd7432dbd71d62a911a038fd92bd5263053325d79c51949&X-Amz-SignedHeaders=host&x-id=GetObject)

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

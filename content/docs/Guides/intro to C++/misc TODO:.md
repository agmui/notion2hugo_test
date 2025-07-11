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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OSDVIKZ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T035250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICYxRJCBAxM6CgVGHV7o3DwlYmGoxNxYSvzhNpyY55xCAiBZrnKaiPr4lKiI6WkSt55c7W3VzsHgQA%2Fbhw5nIyjtNyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn1dsJe2brPHNneqWKtwD%2BuLxOY0eUaEvw%2FXB8icwdijVExeH9qvOY%2FCCP4unMyXNYJFcW3ijbI7%2B%2FPZjrV7SA5Y7bF8s75zajcZ3DdJm27Vq7Vlrd07dtaN2GTr%2BU57mPXIJqKvZSL0GXJAPAPC0zne1ncZycgqBg2IxGNgPcIxUKVjzGCV1f6tKvVS0u3a3rzokdDDJJB6wx5ppY2NVF6oaCdufcQN7DuwVivIHjn%2B474XAr084073nq6atAXbeHDFVzkhl3o6SzgkBDRUOrhrmpX5r5DVG5nmJkDXOK6EBhOGlLS%2Fk7yAuxXNKLFQXwqQAR2NOOKjeovelZ274gOuQdc2eCKH4mIrJFzig2qju5i7aRgZcZLGo9OjuHc2ZyakOP5rs9ivBiobHflbSeHr66oI%2BKZa7K4HsDqg4yiFkryArzT%2B%2FXFwZJ3jwtFqjgN0aaXo%2BaY%2BlWozALBSoDXrR6ZBgHC4g9PyNa1NeuioQHaD4wNbaJRDg%2FuIL%2BRdmUE7nJkC9Sna%2BhEOze6cYhK8zRxGypcxIwrUZoGkqc%2BiPtBoBimrcvuquFO5qwa0hBWIpikT2Pie41oEM0vGKMews6V05%2FciGevMz22YVqTHVcmN%2B4ib5HYhmvmdEskxu4dBr%2Fh1i6bCpXdQwlPzBwwY6pgHRY3WIvLEYKCmSCXlIK2cFhjl471Vfq7UUxot5PuzZy2fjlU%2FT4jDOybOxqoBOsbaX8Pbc75M341pIWLVwZb0UbxtYUzLoNkjzqQ04tZ7Yqo%2BVhfRHPGRweWK1LBeyyqF54CEcoNNUPhYJBUNkUhbL%2B8vX8yViWJITOmReqZFemjD%2B9Igxgvnucr9c3%2F4uEZIaz33WK8GzcHUfmkREaiJEeyGLAjs1&X-Amz-Signature=3f9884e8b8aaf8bb1ec11b6451599240b81360f7ec8737c2dc855844d19b1e30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OSDVIKZ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T035250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICYxRJCBAxM6CgVGHV7o3DwlYmGoxNxYSvzhNpyY55xCAiBZrnKaiPr4lKiI6WkSt55c7W3VzsHgQA%2Fbhw5nIyjtNyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn1dsJe2brPHNneqWKtwD%2BuLxOY0eUaEvw%2FXB8icwdijVExeH9qvOY%2FCCP4unMyXNYJFcW3ijbI7%2B%2FPZjrV7SA5Y7bF8s75zajcZ3DdJm27Vq7Vlrd07dtaN2GTr%2BU57mPXIJqKvZSL0GXJAPAPC0zne1ncZycgqBg2IxGNgPcIxUKVjzGCV1f6tKvVS0u3a3rzokdDDJJB6wx5ppY2NVF6oaCdufcQN7DuwVivIHjn%2B474XAr084073nq6atAXbeHDFVzkhl3o6SzgkBDRUOrhrmpX5r5DVG5nmJkDXOK6EBhOGlLS%2Fk7yAuxXNKLFQXwqQAR2NOOKjeovelZ274gOuQdc2eCKH4mIrJFzig2qju5i7aRgZcZLGo9OjuHc2ZyakOP5rs9ivBiobHflbSeHr66oI%2BKZa7K4HsDqg4yiFkryArzT%2B%2FXFwZJ3jwtFqjgN0aaXo%2BaY%2BlWozALBSoDXrR6ZBgHC4g9PyNa1NeuioQHaD4wNbaJRDg%2FuIL%2BRdmUE7nJkC9Sna%2BhEOze6cYhK8zRxGypcxIwrUZoGkqc%2BiPtBoBimrcvuquFO5qwa0hBWIpikT2Pie41oEM0vGKMews6V05%2FciGevMz22YVqTHVcmN%2B4ib5HYhmvmdEskxu4dBr%2Fh1i6bCpXdQwlPzBwwY6pgHRY3WIvLEYKCmSCXlIK2cFhjl471Vfq7UUxot5PuzZy2fjlU%2FT4jDOybOxqoBOsbaX8Pbc75M341pIWLVwZb0UbxtYUzLoNkjzqQ04tZ7Yqo%2BVhfRHPGRweWK1LBeyyqF54CEcoNNUPhYJBUNkUhbL%2B8vX8yViWJITOmReqZFemjD%2B9Igxgvnucr9c3%2F4uEZIaz33WK8GzcHUfmkREaiJEeyGLAjs1&X-Amz-Signature=46856dae1f32429e8a90b9cd5e0a0920cd40c848accdcc9c272e08c2022c84ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

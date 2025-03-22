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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466443SGKTA%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T180922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCICMLLG490eJmnOqnhFa9zkulntQ%2Fa3dEAfBmIzotaiYLAiBobtK8VqrGwBMSym70lQk5YyIZMAdv%2FQjZ3G81v%2B1sTyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCcSjF6iPZUWc%2BFaUKtwDhvT4l1lzPhndR74inVP%2BHv6rFPEhV0EKLUYUZLRsuO9pc%2BKrphTcuQi3FUuce%2FpJmbUrdVZWK3tUJxwnCR1%2Fdu8ttQG9mGnvpbNMkYa0pwfBxUnXq5CFkRU5JgFjP5ofMSV1f31zNrUvmjQSDSiGRJpLGT3%2BcCQDMN3Yk5w5SP5QiCDBbmCA3Xgq4KbPpZsfWt62CRYMgvpEIEhxxjlbFp986GVTLongIFU2XuLCNGoFgBZ7cV7ZQNXjxYmQ1bPJdF2104WRn9AOxKP0W7I3zHQjkvI0vQdQqtu6ICp%2FC%2BhaMHFD7qHVBzIN9qb3UKxrBh6uoraXFExktf2pvU%2FCR4tEnwOPyC2uTesdJ6ppb8ZtIwYjhUELt7T%2Bysh73i%2FdgEYdasgIwZUro%2FPpgfBeawnOoYyN4f%2BvU6l01nnqwMSB7VFPkbXBpsNj1zLBovRIdQ%2FfQv%2FBJ%2BrVt1J6DVCLZtfycnrY%2B5pO7m6QPMq2wrPb7l0Dvce3uHWX8Pp97cHfm6AaN%2FXwHj6gBSZRkXXeARya6dAQNm6wa1kIZQyYdquRur%2FqSAnVoBGuL5nHCzF7p0Rb1CqKNgyvY5wqCOuwFDTR9mWuXN1SGWn4VXvdw3EjgdozRmkWYM86lIsw9e77vgY6pgEF8oCb5iPtCQEcT%2BSRrPyyD5zqopXdJRC1cvtdVVeupczANrSHkC%2FLcUEsEmj1VzYqlgLw3lPeG8ACVUsQkeDBaiIsKjtBXina5of0uCgSr1gqYKa9SRWT9hLo6HflyIPoIPch5VYLy0Al6ofRzb%2F6A4UM34JCRuygiG%2BAtSI49cNymWR6cAnBAJ0t8ZKTnmLn8PgpDLG46LG8tR45%2BMw7tmJ3%2FZzw&X-Amz-Signature=12a5f548ad3541f6827a65fc9b23d5750615c40eb1d3575f13c6528d0b585e53&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466443SGKTA%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T180922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCICMLLG490eJmnOqnhFa9zkulntQ%2Fa3dEAfBmIzotaiYLAiBobtK8VqrGwBMSym70lQk5YyIZMAdv%2FQjZ3G81v%2B1sTyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCcSjF6iPZUWc%2BFaUKtwDhvT4l1lzPhndR74inVP%2BHv6rFPEhV0EKLUYUZLRsuO9pc%2BKrphTcuQi3FUuce%2FpJmbUrdVZWK3tUJxwnCR1%2Fdu8ttQG9mGnvpbNMkYa0pwfBxUnXq5CFkRU5JgFjP5ofMSV1f31zNrUvmjQSDSiGRJpLGT3%2BcCQDMN3Yk5w5SP5QiCDBbmCA3Xgq4KbPpZsfWt62CRYMgvpEIEhxxjlbFp986GVTLongIFU2XuLCNGoFgBZ7cV7ZQNXjxYmQ1bPJdF2104WRn9AOxKP0W7I3zHQjkvI0vQdQqtu6ICp%2FC%2BhaMHFD7qHVBzIN9qb3UKxrBh6uoraXFExktf2pvU%2FCR4tEnwOPyC2uTesdJ6ppb8ZtIwYjhUELt7T%2Bysh73i%2FdgEYdasgIwZUro%2FPpgfBeawnOoYyN4f%2BvU6l01nnqwMSB7VFPkbXBpsNj1zLBovRIdQ%2FfQv%2FBJ%2BrVt1J6DVCLZtfycnrY%2B5pO7m6QPMq2wrPb7l0Dvce3uHWX8Pp97cHfm6AaN%2FXwHj6gBSZRkXXeARya6dAQNm6wa1kIZQyYdquRur%2FqSAnVoBGuL5nHCzF7p0Rb1CqKNgyvY5wqCOuwFDTR9mWuXN1SGWn4VXvdw3EjgdozRmkWYM86lIsw9e77vgY6pgEF8oCb5iPtCQEcT%2BSRrPyyD5zqopXdJRC1cvtdVVeupczANrSHkC%2FLcUEsEmj1VzYqlgLw3lPeG8ACVUsQkeDBaiIsKjtBXina5of0uCgSr1gqYKa9SRWT9hLo6HflyIPoIPch5VYLy0Al6ofRzb%2F6A4UM34JCRuygiG%2BAtSI49cNymWR6cAnBAJ0t8ZKTnmLn8PgpDLG46LG8tR45%2BMw7tmJ3%2FZzw&X-Amz-Signature=02d4259ee5117cce3c822f14628c49ca8f378320ec65a78d23b251015b136f98&X-Amz-SignedHeaders=host&x-id=GetObject)

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

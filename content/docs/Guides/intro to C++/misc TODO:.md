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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7G22ENS%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T080854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2Blw1mSl%2Bm%2Frb%2FW6oDY%2F3mo4wp3slOcuMGYq1lcXtr8AiBk4IjNlvb4AeicimUSXcQqHGBYmgfb5fW1Vwocr7iBmiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF39ZwMSnYFHS9D7xKtwD%2FJue6%2Fc8qpE6w2ppqwcAQDYxJVWOLjbkrKriRL0A2zZqGVhdRS4dPuoDGpPezR%2Byi5cnR%2FPXftsIQsMd3dkjZgtnIm9d7NB79lJA%2FZCV1M9Y%2FxIfqlJx2jNFdcIJzOM04pMG0uJ9O6IxfFHq0hIM%2FPlz5Ash5jss0Cblb45Qhghf%2BBGJbWRYmYdQtYY09jK%2FmJhbsht3pHWxf%2BrHRNdZjJsZR7LeQuxvvlr0JfeaLfONYyE43ORjqegEXCE%2F634zdrBTwoTIb2tqP2XDUc1V1BJY9M%2FGe44O2y8Fpcg%2FaCtXK9duBxoSKGfrlXm62DVWVjsVycuSRWKTkrMVtmaZzX3BWzPl5cjvcLL6zBdHhffg7DQ0FeRGVMIdFttyPGsfq9vrPazDHpDLluqMqWGhe9UNiubwmRrme%2FOskzHW%2F%2FZAkIX5RHbRjQe5D3JUy2kkR%2BAmeZPHh1h4jMr5Zdg0CAsDZAhXaYyfxMu8fcOggnMoBs%2F%2FHWdGOzTM%2FbW4aZHT2GZAX%2B%2BQk0dCMmKvWkkIlB6mngO%2BVVsHQqnr%2Fom%2FkIO3jCZPNcEB07Vmm1ZDHRwe1v42Rz%2FysCd%2FFZPtR1gcb7sRk3ejWqIG87PVwFg%2FJRvi%2B3kF3LH09fHcnEQwlJ38vAY6pgHKLnEpCALp%2B%2FrAmuw1ymtBzKZvN1xwZgBjiP5GI%2FLZjfXKbguhmwwI1piOJIjXENmGIH0iVEQ1uWrMxr%2FIE%2FeBe4zQyndVvaR1JXAH8uqM6PY4otAjSS6uKuguMrKrDEloBOiA0DRL36kUADDYjBMuBUF0bgZz7ym8hvA6pqYl7weSlnawQszancxq4NGUTO%2FJKZEM%2FQDWDxJzoM9b2Z40%2F3r%2Fb5AZ&X-Amz-Signature=6b5e5842ca4da700872b9a8315610c097f239174f76e8f3e0ad0109ecbc0a899&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7G22ENS%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T080854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2Blw1mSl%2Bm%2Frb%2FW6oDY%2F3mo4wp3slOcuMGYq1lcXtr8AiBk4IjNlvb4AeicimUSXcQqHGBYmgfb5fW1Vwocr7iBmiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF39ZwMSnYFHS9D7xKtwD%2FJue6%2Fc8qpE6w2ppqwcAQDYxJVWOLjbkrKriRL0A2zZqGVhdRS4dPuoDGpPezR%2Byi5cnR%2FPXftsIQsMd3dkjZgtnIm9d7NB79lJA%2FZCV1M9Y%2FxIfqlJx2jNFdcIJzOM04pMG0uJ9O6IxfFHq0hIM%2FPlz5Ash5jss0Cblb45Qhghf%2BBGJbWRYmYdQtYY09jK%2FmJhbsht3pHWxf%2BrHRNdZjJsZR7LeQuxvvlr0JfeaLfONYyE43ORjqegEXCE%2F634zdrBTwoTIb2tqP2XDUc1V1BJY9M%2FGe44O2y8Fpcg%2FaCtXK9duBxoSKGfrlXm62DVWVjsVycuSRWKTkrMVtmaZzX3BWzPl5cjvcLL6zBdHhffg7DQ0FeRGVMIdFttyPGsfq9vrPazDHpDLluqMqWGhe9UNiubwmRrme%2FOskzHW%2F%2FZAkIX5RHbRjQe5D3JUy2kkR%2BAmeZPHh1h4jMr5Zdg0CAsDZAhXaYyfxMu8fcOggnMoBs%2F%2FHWdGOzTM%2FbW4aZHT2GZAX%2B%2BQk0dCMmKvWkkIlB6mngO%2BVVsHQqnr%2Fom%2FkIO3jCZPNcEB07Vmm1ZDHRwe1v42Rz%2FysCd%2FFZPtR1gcb7sRk3ejWqIG87PVwFg%2FJRvi%2B3kF3LH09fHcnEQwlJ38vAY6pgHKLnEpCALp%2B%2FrAmuw1ymtBzKZvN1xwZgBjiP5GI%2FLZjfXKbguhmwwI1piOJIjXENmGIH0iVEQ1uWrMxr%2FIE%2FeBe4zQyndVvaR1JXAH8uqM6PY4otAjSS6uKuguMrKrDEloBOiA0DRL36kUADDYjBMuBUF0bgZz7ym8hvA6pqYl7weSlnawQszancxq4NGUTO%2FJKZEM%2FQDWDxJzoM9b2Z40%2F3r%2Fb5AZ&X-Amz-Signature=a7c7360a0ed9cec2a1625f5835c454fbcccce660025b4e1cfc1fdf6d0d78996a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

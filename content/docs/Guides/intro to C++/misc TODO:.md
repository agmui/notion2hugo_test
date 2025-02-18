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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KPK244A%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T160949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDwjAtrZ1quLWp4TksROXgzHTKXfBOMpCH%2FJnZgCYeDrAIhAPV84A5G0vDaGL7HgFjRbovomht7Sr%2FlabnPaKKH22qKKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZm%2BIVSbUJqWH1WdEq3AOB0%2Fmdd3Bk80bCkyenO0n%2Bbv76fi4W%2FFaOki4r%2FniB7s6a1av8rVYcjxZEjHbG3Bh3hQSZs41pGWMw0L7O%2FN7bH7hKYttXUTWcFJnT%2FkYULo4istRm3E5hMDddR%2BJ2N0PLaq56C8s4whAE5F6jcxRzucZh%2F2dRX2%2BZ04sPJ2miowiCTNa4aqMnK9J1iQgspH8Qrwr3%2FXo0bc5nAY4MktArp1RIS1VMaKchmWSusN%2BOOPQdLa6cRYklfvPNgLB2yHbwpLP0Yty9AEeBmuU5UMpMYEiawOZ4PpjSmtbvj%2FQEpvuL4hRvOp3anPPQi6FEWwSvKuP0lq7htzYMuRrQuGtBX8PkYegCodHRGo%2B1WzVDR2CEfKZWxkju6MKtVliflyDT4H2%2BQgNzzSjIlacXTt0GvHZaCNawFU5xFLFBOHTwy1BjIk23FpD0EqrhrbtIFvhYMjmniGrJAaPfZ94GagulDixr%2FFSx2z17lQH0Mb0YaHBNWynMSYyUCh8mrzgahw5zT5oPsgZUIlj1WHLAHCb22Xzk4gUPPpCLUFQ3GEQeCow5WHOmUJjtyCYOyeez0drSvhPj0LjGnq5r7CT8AzaVfeiLEJZa3yZTaKsvM%2FcKCASM789u7Sl%2FsY419DDpstK9BjqkAdlIc94bOcnAlr%2FGpoa2OjtpPBrN9D%2F%2FwoaogJ8P39uQyIyqWXIQqRW9p%2BghPYju3O6wZygGJl9baCISoAkPIcG5bLZSAw1uEpfFEJ6YOs5YEJ7sq9iEpu9Olpi72su9ikTvGNw4DCCnQwOnd%2Brz0DIlbQ9WC2ICCA2GOzxGfXQQ6rnvoiwG%2FLMtrL9f%2Fq4xsBtEl3wH4aiVOsJx%2BICCqlejRmCH&X-Amz-Signature=9f79cd97dde6ef154a615cfe570270d14c127032fd1593b2dd59b75faeaab3fa&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KPK244A%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T160949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDwjAtrZ1quLWp4TksROXgzHTKXfBOMpCH%2FJnZgCYeDrAIhAPV84A5G0vDaGL7HgFjRbovomht7Sr%2FlabnPaKKH22qKKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZm%2BIVSbUJqWH1WdEq3AOB0%2Fmdd3Bk80bCkyenO0n%2Bbv76fi4W%2FFaOki4r%2FniB7s6a1av8rVYcjxZEjHbG3Bh3hQSZs41pGWMw0L7O%2FN7bH7hKYttXUTWcFJnT%2FkYULo4istRm3E5hMDddR%2BJ2N0PLaq56C8s4whAE5F6jcxRzucZh%2F2dRX2%2BZ04sPJ2miowiCTNa4aqMnK9J1iQgspH8Qrwr3%2FXo0bc5nAY4MktArp1RIS1VMaKchmWSusN%2BOOPQdLa6cRYklfvPNgLB2yHbwpLP0Yty9AEeBmuU5UMpMYEiawOZ4PpjSmtbvj%2FQEpvuL4hRvOp3anPPQi6FEWwSvKuP0lq7htzYMuRrQuGtBX8PkYegCodHRGo%2B1WzVDR2CEfKZWxkju6MKtVliflyDT4H2%2BQgNzzSjIlacXTt0GvHZaCNawFU5xFLFBOHTwy1BjIk23FpD0EqrhrbtIFvhYMjmniGrJAaPfZ94GagulDixr%2FFSx2z17lQH0Mb0YaHBNWynMSYyUCh8mrzgahw5zT5oPsgZUIlj1WHLAHCb22Xzk4gUPPpCLUFQ3GEQeCow5WHOmUJjtyCYOyeez0drSvhPj0LjGnq5r7CT8AzaVfeiLEJZa3yZTaKsvM%2FcKCASM789u7Sl%2FsY419DDpstK9BjqkAdlIc94bOcnAlr%2FGpoa2OjtpPBrN9D%2F%2FwoaogJ8P39uQyIyqWXIQqRW9p%2BghPYju3O6wZygGJl9baCISoAkPIcG5bLZSAw1uEpfFEJ6YOs5YEJ7sq9iEpu9Olpi72su9ikTvGNw4DCCnQwOnd%2Brz0DIlbQ9WC2ICCA2GOzxGfXQQ6rnvoiwG%2FLMtrL9f%2Fq4xsBtEl3wH4aiVOsJx%2BICCqlejRmCH&X-Amz-Signature=d7713d5405b14a89046706150cbc4d59e8e344d743aba3e24355a35f36d67725&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQFZACKX%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T210217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD02d%2BLdJGOJ5zE%2FC9ZYVMPWVbvabpzW6%2FPMG9NzgiAZAIhAK%2BK4E%2B9yto9jsOqPQDz6Nu57Ym1sDvjFZxD00ydmlCpKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2Fdng0%2BeifmuZgixoq3AN26F2VdPOerDZUtKbl5ToVK%2Bul1YjekYQZroA35tiKTT00MXP0tjFn6vsh3W3Fr4xspsA3%2FN9U2cRQdAZ5WcUprzE1Dj98FOT%2BnxCCvIp4m7TcVd3f2ZwrCUjNXps0HGdzEIWn3d%2Fe5ERp5bxrq4eShS%2Fo7HQQn%2BRAYfWydrRBiRs4IEz6F4SXN1NY6AfFvrO9IHJCm9MgaR01ESNJdU8BU8pshbvdxHFrVGIsfjB3oQyY7ypX%2BJTipZPriC81sEr3fpflReSlyMLiSeLj3mR36UlFZ4kcHF%2BwadeJsihSqK44ATdNOBoKFeZurwP3Fo73MRD9EaivCpZfTAGspB%2BS0hb5%2FCLQUjjiZ8S7Es86SvpZqQjabWriIJroinXro0LptPG5pYSt6iEfrRiVUdtAe4ZP%2FsKeiV%2F4oq2TYsvKEAmFHcZ2Csxl6SBWWHsJiv8Vs3SQ1489JJi6zf4ycrEpGyxXTIXFCx1ZDycW6Lz%2B8Efk0tLXvQHZWVUBCR9%2BAq6sLRmgpKFwfoxwavdgGM7ULZQzXMyIiUwrpykII7f%2B%2F%2BnG6LtrcsuKIMPSk8TyOFEn3yb987GRAC8sXMTT2OfDvnQjMs4oML2CBKMfBg9ZTUdd9jzzqmdyKdH%2FGDC42%2F68BjqkAQpyHsY8cMG7UpuQVKu75EYsLUaGBL92uCgXpxrwGxS5XIMRaP9mocyXI4UW1qxOS0z1J2vVlB7sc1aezwuiYPbY0cnFNd%2F1YRBkTunPJBtT15UDM%2FlWBF4c2K%2FQPFXQwmlPp4xKuyXyxyb94bPuXae9J3khWju%2FkDJBgyX3P1521GCOYitOK%2FUMdmBbWyiGLOMbJ9vt0C1wTAGF063%2FNUpm1ISX&X-Amz-Signature=f8b0a33806bb8b3ba6834b95a6045a5da6b88a7bcf6f8b6d0ff264801694d2a8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQFZACKX%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T210217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD02d%2BLdJGOJ5zE%2FC9ZYVMPWVbvabpzW6%2FPMG9NzgiAZAIhAK%2BK4E%2B9yto9jsOqPQDz6Nu57Ym1sDvjFZxD00ydmlCpKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2Fdng0%2BeifmuZgixoq3AN26F2VdPOerDZUtKbl5ToVK%2Bul1YjekYQZroA35tiKTT00MXP0tjFn6vsh3W3Fr4xspsA3%2FN9U2cRQdAZ5WcUprzE1Dj98FOT%2BnxCCvIp4m7TcVd3f2ZwrCUjNXps0HGdzEIWn3d%2Fe5ERp5bxrq4eShS%2Fo7HQQn%2BRAYfWydrRBiRs4IEz6F4SXN1NY6AfFvrO9IHJCm9MgaR01ESNJdU8BU8pshbvdxHFrVGIsfjB3oQyY7ypX%2BJTipZPriC81sEr3fpflReSlyMLiSeLj3mR36UlFZ4kcHF%2BwadeJsihSqK44ATdNOBoKFeZurwP3Fo73MRD9EaivCpZfTAGspB%2BS0hb5%2FCLQUjjiZ8S7Es86SvpZqQjabWriIJroinXro0LptPG5pYSt6iEfrRiVUdtAe4ZP%2FsKeiV%2F4oq2TYsvKEAmFHcZ2Csxl6SBWWHsJiv8Vs3SQ1489JJi6zf4ycrEpGyxXTIXFCx1ZDycW6Lz%2B8Efk0tLXvQHZWVUBCR9%2BAq6sLRmgpKFwfoxwavdgGM7ULZQzXMyIiUwrpykII7f%2B%2F%2BnG6LtrcsuKIMPSk8TyOFEn3yb987GRAC8sXMTT2OfDvnQjMs4oML2CBKMfBg9ZTUdd9jzzqmdyKdH%2FGDC42%2F68BjqkAQpyHsY8cMG7UpuQVKu75EYsLUaGBL92uCgXpxrwGxS5XIMRaP9mocyXI4UW1qxOS0z1J2vVlB7sc1aezwuiYPbY0cnFNd%2F1YRBkTunPJBtT15UDM%2FlWBF4c2K%2FQPFXQwmlPp4xKuyXyxyb94bPuXae9J3khWju%2FkDJBgyX3P1521GCOYitOK%2FUMdmBbWyiGLOMbJ9vt0C1wTAGF063%2FNUpm1ISX&X-Amz-Signature=8cc5b321e75badca918b1ff0d8bcd26b3353547fa9e8aa11c3bc4b44933742fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

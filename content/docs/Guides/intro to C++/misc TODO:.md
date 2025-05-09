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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSFBXEVY%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaIuntdStoWHvQ74JvSZ9VzVR9tbZOhbC%2FSMivrQ6xyAIgaiiM46d4kBO9MuOez0EbUCLA%2BoHjCrRsQQkB6WYIvr0qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG0OPl9CVB0xJuMzircA%2FoVucw12tGhiT2nAq80OOX24yFpxilnps6pJyhlhp9Rr5iARIQ383rf0j65NLrmcjEkYMdedKS%2FhN5oGT3OtKa5U3hpAXNviNqNmPwCecjtykdWxO4SUuHPwZMtRKNGKAScoD9uT%2BngIvK97J9CrkvLC2acaysA6Oy%2ByUl%2BcFAdCB2OGu2TDioUwDFMVOAmeS%2BVzKCwIWUZq3RQpRNGLlalpB2bpiZkheHuUJid%2FfwCJK%2Bl4T757WtHnAcRdZBRswO%2FmbLy193Y29tFV3NrrR6z3IWA32gqTKghNJVTS3LoJsrl3mlP1gKCdt7XyJLdOxkMEQt61evgDjMeQOZEbpqqPshHE2w7goGGoi4nxUX1X9xDqQ388FvY5Re27MHxQvni6n9qJU1ohlC56Dgrjfs9nlDvclGsSDjdYDyTf%2FjIuzU39RCnpGRYH3JEMjCTvjd%2BXLg9ihlqWqJrz2lg278moK%2BpeLEoqBWr7UFv2bJqiv9rPAIimSGhQCK3I5FY%2FJYbTTfbTC3GS4hfIGIEIkI5RkmEEXFUk%2F8p0Y4RyMl6e%2F3DiCld9gv0gKkKB43s6Y3Zq05xqaifk7wHzh%2Brzz224KmJ4ii08GxXXqodl9d55Q3t3fSLu39EoUpIMMvX%2BMAGOqUBMBwtA4DarVUWZBhEI1LgQ3PcRoZL%2BETsgyfHBueI4ycG4DIFt3SW6XC1x0PK1UJC2B5gDJYxfLyf9kBXVhSCfc102q3L1HhGdevMoGoX4LWNmeCKvb2W22nw6%2BQj44GJH%2B6obR3dbSIMvLaGfEmvwsEzF4t1kliqkgFYAxa9inhNzOcCwqOBWBNHjlnnTEMwBPisLeu8lCy1gzp6FWoaXqqi%2B02J&X-Amz-Signature=0cc8d439fe7b1c8435ebbd9c27dc0edf798c5b939808542a1d843c2712285b06&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSFBXEVY%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaIuntdStoWHvQ74JvSZ9VzVR9tbZOhbC%2FSMivrQ6xyAIgaiiM46d4kBO9MuOez0EbUCLA%2BoHjCrRsQQkB6WYIvr0qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG0OPl9CVB0xJuMzircA%2FoVucw12tGhiT2nAq80OOX24yFpxilnps6pJyhlhp9Rr5iARIQ383rf0j65NLrmcjEkYMdedKS%2FhN5oGT3OtKa5U3hpAXNviNqNmPwCecjtykdWxO4SUuHPwZMtRKNGKAScoD9uT%2BngIvK97J9CrkvLC2acaysA6Oy%2ByUl%2BcFAdCB2OGu2TDioUwDFMVOAmeS%2BVzKCwIWUZq3RQpRNGLlalpB2bpiZkheHuUJid%2FfwCJK%2Bl4T757WtHnAcRdZBRswO%2FmbLy193Y29tFV3NrrR6z3IWA32gqTKghNJVTS3LoJsrl3mlP1gKCdt7XyJLdOxkMEQt61evgDjMeQOZEbpqqPshHE2w7goGGoi4nxUX1X9xDqQ388FvY5Re27MHxQvni6n9qJU1ohlC56Dgrjfs9nlDvclGsSDjdYDyTf%2FjIuzU39RCnpGRYH3JEMjCTvjd%2BXLg9ihlqWqJrz2lg278moK%2BpeLEoqBWr7UFv2bJqiv9rPAIimSGhQCK3I5FY%2FJYbTTfbTC3GS4hfIGIEIkI5RkmEEXFUk%2F8p0Y4RyMl6e%2F3DiCld9gv0gKkKB43s6Y3Zq05xqaifk7wHzh%2Brzz224KmJ4ii08GxXXqodl9d55Q3t3fSLu39EoUpIMMvX%2BMAGOqUBMBwtA4DarVUWZBhEI1LgQ3PcRoZL%2BETsgyfHBueI4ycG4DIFt3SW6XC1x0PK1UJC2B5gDJYxfLyf9kBXVhSCfc102q3L1HhGdevMoGoX4LWNmeCKvb2W22nw6%2BQj44GJH%2B6obR3dbSIMvLaGfEmvwsEzF4t1kliqkgFYAxa9inhNzOcCwqOBWBNHjlnnTEMwBPisLeu8lCy1gzp6FWoaXqqi%2B02J&X-Amz-Signature=348eeff70ddb50d8817ea6f8569844e831aaeff0d08a1304b3880f7ee55bb7e3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

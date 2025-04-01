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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKI26WHL%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCZ69x9FrGHJxYjCWkK28Qy20Y8r%2FLLZgcohrigfyN5UwIhAPDjgV4STX2B0aUX7oB29irceJyNhkC%2BH1cH%2FxdhhK5oKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFTLkc1nSkXHsYmPEq3AOe23DsJnflOFtYFrMXsTJWrPeqBfPSSR2Je%2FCXHK9DG1CNGfrEue9PvpP1%2FQEspAnF4R2ONOPLlzHEmy7I6tbl31GOJRZyWKgINb4GTQ8ZDJAwce8NQlsfGxJ6sDRthsj9shwNOTvRvPrzTzQ8h8arbpfFiBy%2FSp1rVQ7F%2FjcyI8SNVeku%2BpnMr7bthGZY3mwyIvpboNhjvRpICi%2BcU%2BzMIw0qXcH5C1Sy8%2FtXbIi%2Fm4HtrOVtV%2BX%2BL%2BoV3S0Hf%2B6ONh%2Bt1ZWnGuYBvTgKqMyKtudt8rajsrnk%2Fko1rQlqiKaAiikYDiUosTsW3D5vNc69WmmQ0jAmqQNOSnSZ8oab%2BJFB0X0F7r7aG37Pb%2F68PYBFBxawk6LOOIyuJjwWujwan7gaf53bOCKQB0MHBZf4sYSjZ8M2MO51R8sd%2BESik59UnSyQfMjQCplET4BVy0tEEuNsMx0w921cOxkD0o1DYmTLHaxqHUmQwS4U03tpfCz7a1W8rxNv%2B2sklHfE0Na6TVv3l8RHYEsYNuIS%2Fb1U4AIl3DYOY7Mjk6ySlbLSB9iK7F37yX8D%2F9k2QGpPmdSHSd2bX%2FsW2jeUEayclyXBkVJGyQRBSnmBNuIEShSwptSOSl4O8fl9UcdITzCwqbG%2FBjqkATNg91bRSClM23O0pDg%2BWkpYUovYwt3b7dh5YhhTctJGygmG%2BjzhU77znNFkaRgua3o7vd%2FJvQgvz7IZNcXg8GvB%2Bnz%2BeeD5R1ZGTlMnqVtg%2BRQoV0c15ivQqrMpncTCb%2BN9XLbo6IgBxFmxy7cQ6qp86M31RjhpbOlPEp5oz9%2FfZBS2pwqcF7p2PYXndQ32dJUeotmkyIEUU0Sqri%2BmV90teocX&X-Amz-Signature=6ec356f8b5e5254d19ae4eaa0ebfd255d003d0b5eaaa2d77c777aed8d8e33f3c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKI26WHL%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCZ69x9FrGHJxYjCWkK28Qy20Y8r%2FLLZgcohrigfyN5UwIhAPDjgV4STX2B0aUX7oB29irceJyNhkC%2BH1cH%2FxdhhK5oKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFTLkc1nSkXHsYmPEq3AOe23DsJnflOFtYFrMXsTJWrPeqBfPSSR2Je%2FCXHK9DG1CNGfrEue9PvpP1%2FQEspAnF4R2ONOPLlzHEmy7I6tbl31GOJRZyWKgINb4GTQ8ZDJAwce8NQlsfGxJ6sDRthsj9shwNOTvRvPrzTzQ8h8arbpfFiBy%2FSp1rVQ7F%2FjcyI8SNVeku%2BpnMr7bthGZY3mwyIvpboNhjvRpICi%2BcU%2BzMIw0qXcH5C1Sy8%2FtXbIi%2Fm4HtrOVtV%2BX%2BL%2BoV3S0Hf%2B6ONh%2Bt1ZWnGuYBvTgKqMyKtudt8rajsrnk%2Fko1rQlqiKaAiikYDiUosTsW3D5vNc69WmmQ0jAmqQNOSnSZ8oab%2BJFB0X0F7r7aG37Pb%2F68PYBFBxawk6LOOIyuJjwWujwan7gaf53bOCKQB0MHBZf4sYSjZ8M2MO51R8sd%2BESik59UnSyQfMjQCplET4BVy0tEEuNsMx0w921cOxkD0o1DYmTLHaxqHUmQwS4U03tpfCz7a1W8rxNv%2B2sklHfE0Na6TVv3l8RHYEsYNuIS%2Fb1U4AIl3DYOY7Mjk6ySlbLSB9iK7F37yX8D%2F9k2QGpPmdSHSd2bX%2FsW2jeUEayclyXBkVJGyQRBSnmBNuIEShSwptSOSl4O8fl9UcdITzCwqbG%2FBjqkATNg91bRSClM23O0pDg%2BWkpYUovYwt3b7dh5YhhTctJGygmG%2BjzhU77znNFkaRgua3o7vd%2FJvQgvz7IZNcXg8GvB%2Bnz%2BeeD5R1ZGTlMnqVtg%2BRQoV0c15ivQqrMpncTCb%2BN9XLbo6IgBxFmxy7cQ6qp86M31RjhpbOlPEp5oz9%2FfZBS2pwqcF7p2PYXndQ32dJUeotmkyIEUU0Sqri%2BmV90teocX&X-Amz-Signature=8960170246dbe9c8dbe1526498e51afed67794e80349c541a5d0b9048bdf79b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653UZ4BWO%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T170824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDCVZPcckrGW9xZU9ZTYRYTwlgqdWLV%2BY6QiAfKLJ9luQIgX5MUtB1N%2BS8GsixCtLFeXKlfsVBBrqXcjnmIoE75eTIq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDHlVnI4qajixjGGZbCrcAy3UVF%2FpJhVz57gpEPJg4jmAaoGeOot%2B895%2BT10irpqlRWszz2glMM44vOMA9YYQYm%2B223AuL%2FY0XkdCZcz6H0mBGqakyG2XsVrc3GCSoq2Cg67UwFnCwuzpHgE3Ug53ddUcoFDzObjy9kGXnsLX%2Bms0BjXx%2B0DTX4V8KIAXoi3R%2F0Pieiu%2FtmvDcrr3yMm1nC7dI3Mk%2BEog85LCE4Phz7odRDR96yX9B3JDw3BRqvVjDt74YLJzAv7W9Nu3Tkh%2FA60Cloj8MXGDuFRzVCXjzJsS0S2o09694thcrpv%2B%2BeDvXD1YGWXuyXNdBVrLkZP2Ggn%2Fzj2ogFt%2FchAqYUniVIkTSbRqEEXMilD2AfJ1vsEZS5RBWLOcP2cb4nOoYsJTvKpoaH5lrS8zdTCdnu33Z6cRX7iNLpdhuNUdyNJNs55yCs7Ok6ayk8V1Qp04veWYOtStG9uk%2B3CCdbWScBcGrpTsB7aqsqyeuJz3MwfTfHNFSnR0SOV59fsB920tufltsjm7njeXt0QBjbiCIfUC%2F74f8goEWc7k6uwSb9lStyl6fxthA2PPsj1MB%2B%2FIltsXs%2BDxMfeYeBTXqaXBe7wb1owalV1qNhkRZH9mcJHuKYi5Q2gIqGag7D5eEelzMImc9cIGOqUBwQ8zYqjTMu%2Fj7wdNsaMsob7EuH5L4%2Fom0JQceUgJ%2B4WG8LAIe0ixkSg4CRkPbFa2EPNSrfAhV3FcrG%2FtCaTya51QaNQL8fpvGg79aQSKhSyVlOUJ8NgZfPaCGevLdFcdHBi1zY%2BWRE3bgDw%2FgUPZnG7JDzjp7g6YNih%2BVoqJyjzw5PesTYEO34LjMhKyX3DpNBlmWPH3H%2FpOc8y2hyO1tNEexXpi&X-Amz-Signature=e021646464aea8f4a496326f1fb9e07d87656b94daa909c86351a79da58d280d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653UZ4BWO%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T170824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDCVZPcckrGW9xZU9ZTYRYTwlgqdWLV%2BY6QiAfKLJ9luQIgX5MUtB1N%2BS8GsixCtLFeXKlfsVBBrqXcjnmIoE75eTIq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDHlVnI4qajixjGGZbCrcAy3UVF%2FpJhVz57gpEPJg4jmAaoGeOot%2B895%2BT10irpqlRWszz2glMM44vOMA9YYQYm%2B223AuL%2FY0XkdCZcz6H0mBGqakyG2XsVrc3GCSoq2Cg67UwFnCwuzpHgE3Ug53ddUcoFDzObjy9kGXnsLX%2Bms0BjXx%2B0DTX4V8KIAXoi3R%2F0Pieiu%2FtmvDcrr3yMm1nC7dI3Mk%2BEog85LCE4Phz7odRDR96yX9B3JDw3BRqvVjDt74YLJzAv7W9Nu3Tkh%2FA60Cloj8MXGDuFRzVCXjzJsS0S2o09694thcrpv%2B%2BeDvXD1YGWXuyXNdBVrLkZP2Ggn%2Fzj2ogFt%2FchAqYUniVIkTSbRqEEXMilD2AfJ1vsEZS5RBWLOcP2cb4nOoYsJTvKpoaH5lrS8zdTCdnu33Z6cRX7iNLpdhuNUdyNJNs55yCs7Ok6ayk8V1Qp04veWYOtStG9uk%2B3CCdbWScBcGrpTsB7aqsqyeuJz3MwfTfHNFSnR0SOV59fsB920tufltsjm7njeXt0QBjbiCIfUC%2F74f8goEWc7k6uwSb9lStyl6fxthA2PPsj1MB%2B%2FIltsXs%2BDxMfeYeBTXqaXBe7wb1owalV1qNhkRZH9mcJHuKYi5Q2gIqGag7D5eEelzMImc9cIGOqUBwQ8zYqjTMu%2Fj7wdNsaMsob7EuH5L4%2Fom0JQceUgJ%2B4WG8LAIe0ixkSg4CRkPbFa2EPNSrfAhV3FcrG%2FtCaTya51QaNQL8fpvGg79aQSKhSyVlOUJ8NgZfPaCGevLdFcdHBi1zY%2BWRE3bgDw%2FgUPZnG7JDzjp7g6YNih%2BVoqJyjzw5PesTYEO34LjMhKyX3DpNBlmWPH3H%2FpOc8y2hyO1tNEexXpi&X-Amz-Signature=ec703e0e6ddd720397b75564c9023019fec79a4a9da0fffd758bace8a9b926fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

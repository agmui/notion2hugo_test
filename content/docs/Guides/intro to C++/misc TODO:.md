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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666INVALJL%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T121143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDmcp8cbyCDoaRjE2xBhFSsvVsuO5nX%2B1rDN2GrlDBfQwIhAOfRCKajutDoqAZ1R%2FIOxv6qab%2F%2FTbFHXOu42kDd8ybdKv8DCEQQABoMNjM3NDIzMTgzODA1IgztZ5OriMz39Aclkx0q3APemaUCZ6K5ZRR2Zg1jlSPXJqcWGDTNbaWuf%2Fg%2BuNg1xPMe%2Fvy1aDlpc3Fn%2BflVO40pO1qJ2xbC4bjeKH%2BjH3kJ3KHYK76C0DvYSLrAunfXn6kbpbgOTpfbi0VqTYt3p1dKP131Aj%2BSAhS%2F4sR99cAtOPV8dgJPe08ONVtV2rcOV21q1km9wqqPjna02Um%2BdoICU7aXUN%2F55wIlhRPs%2BPBsHfDeeXU3Pzi5xP1dpELb%2FHLI5Ip%2FhzgWbHZy65NQEQ8lRkffrS%2BbZgiG51S3lozT2krp1Y15gOFPOuPp%2FoA1uOfhb%2FhpwBBF9zOin4iXGyCZh5W%2BaSQt3gGA0vGQuTAdzTjFkMzjiccsqIPHKSUHFOdDpDCFCfXsLtJXntMV687mzUx51wDlj1DrLwvcHsN21siCbnsZXzikRdfUNR5vDFQrJ2aV51OoFVl3FqKalqMcQyx%2BfHud0u146OpP5HwLvB7qmBYtzYEr0m2HUMqmuPSStZ0v95ljNARWgSkl5GdkM18fhUdn6n9A5B1c0OoFXv%2FLx1S1TTSJOOdTiWYBj6Uf6%2B01UnKSq3eonQVtjIDexx2VLPb4pykx0IxZwKC6I1POaFByz9uMdevcMZ%2FLvzRTHsgRAuIAGkGfFjDz7cG9BjqkASL1%2Brk5SZhbRJpYSKoNx3EoO6s2yK0WompIWMthspxDOX7baQ7wRN2jAv2WX25rzIogqU7DphCeBHMlKO4ieoUqQOfcQjY0Idmh6MuO7Yf9VpayqPdhROiSYjypFmaP6Bb%2B08bdbK6FD9P9Z7c7xDI4zwvCm2FqvC2skdy7V1HorndjGCC%2Fv%2FtEBBJZEuMeePxNgVKG8l97d0tkmM5za5n%2BcRJN&X-Amz-Signature=b1e0430c443a250e9eaf8cbdfbb232ab1d40df36a5f8966d05952b0f50c51717&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666INVALJL%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T121143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDmcp8cbyCDoaRjE2xBhFSsvVsuO5nX%2B1rDN2GrlDBfQwIhAOfRCKajutDoqAZ1R%2FIOxv6qab%2F%2FTbFHXOu42kDd8ybdKv8DCEQQABoMNjM3NDIzMTgzODA1IgztZ5OriMz39Aclkx0q3APemaUCZ6K5ZRR2Zg1jlSPXJqcWGDTNbaWuf%2Fg%2BuNg1xPMe%2Fvy1aDlpc3Fn%2BflVO40pO1qJ2xbC4bjeKH%2BjH3kJ3KHYK76C0DvYSLrAunfXn6kbpbgOTpfbi0VqTYt3p1dKP131Aj%2BSAhS%2F4sR99cAtOPV8dgJPe08ONVtV2rcOV21q1km9wqqPjna02Um%2BdoICU7aXUN%2F55wIlhRPs%2BPBsHfDeeXU3Pzi5xP1dpELb%2FHLI5Ip%2FhzgWbHZy65NQEQ8lRkffrS%2BbZgiG51S3lozT2krp1Y15gOFPOuPp%2FoA1uOfhb%2FhpwBBF9zOin4iXGyCZh5W%2BaSQt3gGA0vGQuTAdzTjFkMzjiccsqIPHKSUHFOdDpDCFCfXsLtJXntMV687mzUx51wDlj1DrLwvcHsN21siCbnsZXzikRdfUNR5vDFQrJ2aV51OoFVl3FqKalqMcQyx%2BfHud0u146OpP5HwLvB7qmBYtzYEr0m2HUMqmuPSStZ0v95ljNARWgSkl5GdkM18fhUdn6n9A5B1c0OoFXv%2FLx1S1TTSJOOdTiWYBj6Uf6%2B01UnKSq3eonQVtjIDexx2VLPb4pykx0IxZwKC6I1POaFByz9uMdevcMZ%2FLvzRTHsgRAuIAGkGfFjDz7cG9BjqkASL1%2Brk5SZhbRJpYSKoNx3EoO6s2yK0WompIWMthspxDOX7baQ7wRN2jAv2WX25rzIogqU7DphCeBHMlKO4ieoUqQOfcQjY0Idmh6MuO7Yf9VpayqPdhROiSYjypFmaP6Bb%2B08bdbK6FD9P9Z7c7xDI4zwvCm2FqvC2skdy7V1HorndjGCC%2Fv%2FtEBBJZEuMeePxNgVKG8l97d0tkmM5za5n%2BcRJN&X-Amz-Signature=27b1947de4b157b8f185e814cb898754c4961f659e1eae53d9fbaad1ff2fdc80&X-Amz-SignedHeaders=host&x-id=GetObject)

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

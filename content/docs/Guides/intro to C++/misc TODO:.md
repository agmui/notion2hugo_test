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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIJ7CP7G%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T022813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQC4hCVt3LpLDG3x9efEa741W7F78s84KbJ8tT7p0MSWugIhANoxgZgpLUCGwdD1SV%2F7Z1kMXValf2zF12YpBYDZF8a0Kv8DCB4QABoMNjM3NDIzMTgzODA1IgzkGYNE7DLYTXl9Y94q3AMqdSndjK9Bn%2B1Qvit6E2fCrTOejg0EkdCL%2Fudh8zUta2NqedG0%2FhZQXJq%2BMtzMIytMLbFAFmEn9p4BXZUE%2FnUpd%2BtyobBCNg7Bf6kaB5sFx7aymzZdMZG%2BpteLNFnUUcYZzvA7hXN7EhJXuCln4ZPyTNJo%2FQpwf0SSpC294vj1oNQYzrVjEFkbR%2Bwkep3Y1BdQdb8TkhKosTuv64Fs7VWzD5suPi7to1Sc4iz8oLCm9Lx9zUTkr2PPlzvglk3yBFzAOmNBrCg6PwVkvBC%2FkSp9NwI%2BDPS2pGo8H7P8U%2BW5k%2BHDgtFQiKq8QAimanv5UR%2FaQ%2FZ7bk6LiQ%2ByQdbOtwhPv249Onb%2BVK%2FthM7qbspXJTEvugGtsJ8TA1RPiVtSRvYtrW1XkWVIPsa7Z%2BXO09Gurlp9J2qz57BSYW5VrqV0IqqTWO1qM3LOnrwfDajCRoWmChSIKdUplbr3q33N%2BsLTY3SvFGERlezdHycr3n4tyOywe0PPTBO28JgBBefbqVXIXis43IZN%2Bn4tShaHgRDhI975wXVaLA33XhddcK8y1BsnNBN0e4KDON1auiKDXpMBSv79%2Fq95f8DuEKJtSWz8JxN5P2q76ajQsqaR5LGV1TYyHJ5d9XUQlkgQ9DC4rN%2FABjqkASffH2L4M%2FVQetP%2B3mT43XiPBEE8oNlptY5FqVFmU6hSWFtYz5rUw23ns%2Fn3v5hCRku1f7S618CFVfXR4pMUMn%2BzGzDCpMl1UxImwrvHIqEXj73ialdWFisN5SUWsjDJwh4oMAyUIwJKLkS7LHnryfwZpp2jO6CK8rMkBrGVEVcIEi%2Fl4YURvr3ODEYWPP7fYfIBGNw1df7zBffFlJR5vhMBdbt6&X-Amz-Signature=d44d89bb47bfcb4a4ee3ad37f3eda33d74150dccf6df68b90e3dda89e220eacf&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIJ7CP7G%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T022813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQC4hCVt3LpLDG3x9efEa741W7F78s84KbJ8tT7p0MSWugIhANoxgZgpLUCGwdD1SV%2F7Z1kMXValf2zF12YpBYDZF8a0Kv8DCB4QABoMNjM3NDIzMTgzODA1IgzkGYNE7DLYTXl9Y94q3AMqdSndjK9Bn%2B1Qvit6E2fCrTOejg0EkdCL%2Fudh8zUta2NqedG0%2FhZQXJq%2BMtzMIytMLbFAFmEn9p4BXZUE%2FnUpd%2BtyobBCNg7Bf6kaB5sFx7aymzZdMZG%2BpteLNFnUUcYZzvA7hXN7EhJXuCln4ZPyTNJo%2FQpwf0SSpC294vj1oNQYzrVjEFkbR%2Bwkep3Y1BdQdb8TkhKosTuv64Fs7VWzD5suPi7to1Sc4iz8oLCm9Lx9zUTkr2PPlzvglk3yBFzAOmNBrCg6PwVkvBC%2FkSp9NwI%2BDPS2pGo8H7P8U%2BW5k%2BHDgtFQiKq8QAimanv5UR%2FaQ%2FZ7bk6LiQ%2ByQdbOtwhPv249Onb%2BVK%2FthM7qbspXJTEvugGtsJ8TA1RPiVtSRvYtrW1XkWVIPsa7Z%2BXO09Gurlp9J2qz57BSYW5VrqV0IqqTWO1qM3LOnrwfDajCRoWmChSIKdUplbr3q33N%2BsLTY3SvFGERlezdHycr3n4tyOywe0PPTBO28JgBBefbqVXIXis43IZN%2Bn4tShaHgRDhI975wXVaLA33XhddcK8y1BsnNBN0e4KDON1auiKDXpMBSv79%2Fq95f8DuEKJtSWz8JxN5P2q76ajQsqaR5LGV1TYyHJ5d9XUQlkgQ9DC4rN%2FABjqkASffH2L4M%2FVQetP%2B3mT43XiPBEE8oNlptY5FqVFmU6hSWFtYz5rUw23ns%2Fn3v5hCRku1f7S618CFVfXR4pMUMn%2BzGzDCpMl1UxImwrvHIqEXj73ialdWFisN5SUWsjDJwh4oMAyUIwJKLkS7LHnryfwZpp2jO6CK8rMkBrGVEVcIEi%2Fl4YURvr3ODEYWPP7fYfIBGNw1df7zBffFlJR5vhMBdbt6&X-Amz-Signature=20a092bb95917dd193374ffdaeb6548f42483d11f3f7339bdeea29c9a635cb7a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

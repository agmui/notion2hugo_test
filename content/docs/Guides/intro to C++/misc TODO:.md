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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z7PU6UB%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T110727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCJs2fCwLLSN%2BErEJwxzVCnjnJMP8gGGpA2U6zXxJzy6AIhAIOS5l58sJNs5VFuVvg8ZoM8fyp3H4ITm575PI6w9bUWKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynJz6Y7nKfT3dhzbMq3AM%2BVM%2FkE8u3Dzdrn9EcB32KMsX9UMnYsp0Zkur3jBDQrU52LbBybuLcjFyXsAbfEj9ArqowTsUM6RBaxYL2C12YMqvabBtTGSXhL4Yt9PnHE65Pxr4kT5mYDIUZ0clrWSed2hJvNR6kTYLcBsFmsDKoJkEsYyauwrXHFS00Xz7f%2BUB1THYokrKc5sGVB3BEUoGrUOQTR%2FGvqju3eCGd6w%2BTKAnHM0FP%2BPm6qjSS2ig8kvkgKOomnMA0KpHkAB9fNxMPMVuUXHKbfkaGhDIHsghL%2FkZrgXAKgrqlrB%2FRSANBWJ96LJBZHAjMQG6fniw%2BhYQygkq4WBwXR%2FHPPJ5UiDkFyWgKZq4yPn9H5cIZSJJjHLAPr6cOH3AcSaNnqqmtLZs6t0hyi4i0sB1d4RNGcRneK67h6%2FPR3cEAqFRdBXO5Za0avWjZrgyL9mP3apfDdLPtc9m22%2FDoXQACCTvzHat8BxB00cz1DVH3rG1UZp2CBDsnl5e6VVe5zlLmNsE3N%2BuP1e9zdavKnStNTseGNgV5pEF8TGp1mJLi74tMvGRUSmTCyGyIBauY4ZDM4r2FRjdf9qw5kAa6uc7cbbT82BY%2BbVqE2Km0IuCc2Ntx9qZ%2BOrxFSzigtDA3z%2BQe2TCvqrS%2FBjqkAeEY6atNyuqXgqS5kk9pf6lm4SFtaF4mQbij5IK6XMMXlP8ZTiOhsIGyq1pEFiZaaMio9sAE98QpNs056vc%2BS3yDQR%2FJJxjCc1m5UZ7hfSgLBb6FwdV1oZRjF6ue1c8zFk9JRV53tXJlTSFCwqd47w7pbeSonHU0eFND03uxTW7EQ8vKRltZWEFcjFhDdAmkpL13PoiGOBsFbL6qhnloSA%2BRfMn0&X-Amz-Signature=5413b36267cbf6a50b18bcf9bd98b97b0cbd082b4c3e1d08ecc6100944627c5b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z7PU6UB%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T110727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCJs2fCwLLSN%2BErEJwxzVCnjnJMP8gGGpA2U6zXxJzy6AIhAIOS5l58sJNs5VFuVvg8ZoM8fyp3H4ITm575PI6w9bUWKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynJz6Y7nKfT3dhzbMq3AM%2BVM%2FkE8u3Dzdrn9EcB32KMsX9UMnYsp0Zkur3jBDQrU52LbBybuLcjFyXsAbfEj9ArqowTsUM6RBaxYL2C12YMqvabBtTGSXhL4Yt9PnHE65Pxr4kT5mYDIUZ0clrWSed2hJvNR6kTYLcBsFmsDKoJkEsYyauwrXHFS00Xz7f%2BUB1THYokrKc5sGVB3BEUoGrUOQTR%2FGvqju3eCGd6w%2BTKAnHM0FP%2BPm6qjSS2ig8kvkgKOomnMA0KpHkAB9fNxMPMVuUXHKbfkaGhDIHsghL%2FkZrgXAKgrqlrB%2FRSANBWJ96LJBZHAjMQG6fniw%2BhYQygkq4WBwXR%2FHPPJ5UiDkFyWgKZq4yPn9H5cIZSJJjHLAPr6cOH3AcSaNnqqmtLZs6t0hyi4i0sB1d4RNGcRneK67h6%2FPR3cEAqFRdBXO5Za0avWjZrgyL9mP3apfDdLPtc9m22%2FDoXQACCTvzHat8BxB00cz1DVH3rG1UZp2CBDsnl5e6VVe5zlLmNsE3N%2BuP1e9zdavKnStNTseGNgV5pEF8TGp1mJLi74tMvGRUSmTCyGyIBauY4ZDM4r2FRjdf9qw5kAa6uc7cbbT82BY%2BbVqE2Km0IuCc2Ntx9qZ%2BOrxFSzigtDA3z%2BQe2TCvqrS%2FBjqkAeEY6atNyuqXgqS5kk9pf6lm4SFtaF4mQbij5IK6XMMXlP8ZTiOhsIGyq1pEFiZaaMio9sAE98QpNs056vc%2BS3yDQR%2FJJxjCc1m5UZ7hfSgLBb6FwdV1oZRjF6ue1c8zFk9JRV53tXJlTSFCwqd47w7pbeSonHU0eFND03uxTW7EQ8vKRltZWEFcjFhDdAmkpL13PoiGOBsFbL6qhnloSA%2BRfMn0&X-Amz-Signature=2a18671dde2d728484df56abdccda60530235352926e427502d14514f1abef6a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

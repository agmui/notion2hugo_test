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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AOLGGDE%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T080934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkVYiAkOc0sEW01Vb22Kinv1UVuwcZyDYZiIb%2FWPRuwAIgNHse4f0Ke3ZbeRIJAxrtLI%2BwW%2F1DV3Buu%2F5dYD8TlR4q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDGgEA0yYCEXvoxKxxSrcAzLbtTZFde6nT1ftCT7jC3cA8cgAS%2Bt7wUvvJ%2BhhyJ1LF7UcKM5%2BBWxBvxjDUgYeuEEY98Zi%2FVmn6MVxkyPaoNnMwXoR3MIiSoftulkeyp8Z%2Fs3tJFe7NNd8cNa7Djia%2F%2F4cMRiE3R9%2Fa7CRYHHF3ZZgcEPTZDygh0Gev6jyPYqel8MEMC7r3hWDpyjGi6fliGwcHSCb6p3HL3k0FHAqRMJa%2FUywlTzvqeDsWW8%2FpPWqb1eNU7KOGTTCElV0uXLpG6fDTvlBPtVt7EXZOW0zCwTBHzR73Y%2BOiuFA2CN4y3Xh0O22YDYZ1dGRSjqQTrUltn2OYtyqIVbTMu%2FNkDlGWy0Ve%2FphwWEPMqUXt87FkLE0IyqQr5Bp3rA06Fv5riMROo%2FImmBj2NiFKCI9fEdDOuue63lOOFP0tglZTBQvpVoGrkGt%2Bk0heYFB0ulv2P7mKPep7lwGQeLCxeYY39ai0Wx2wHDEWvwYLpZEXzPBJBVdyGboATQZPOOy1089M1ZgcClX8rvX0vVZjYPMFv2SjyPJ%2BDzDlI8pV7BVh4bDbRV5VNqLwN1dawF8353AQHedzTNi5BV7EumgjoSXWxaUFlm5PrL4xGtv%2F13ccTLKsMqW8wM%2BCgwcAq4qBFgQMLfh1L4GOqUB%2FCiWQ7Zoaf1yDcqcQWrQkr5%2BJwSoNYS7o%2B%2B8l%2BbTAfBTkJ2C9XiTkmu6ofCfk%2BvQQXCYUt9C4%2FAXvwIAhMTLIDU9tgXmRkhMUfHPY31%2FLMZjwZrL3edJvexk3f43A9joaMpij3ODC%2B%2FG7p04t7fi6d7uQmOFbz%2BL7SCUSVuugNTFUb6%2BxDebUhLn8phKDKlxQwAwMFlRZwb%2FXz9mhgZ3C7YeiW7%2B&X-Amz-Signature=601015eecce2bb539cd5b34d32028e4e02d5f41d8914cd23f4b3bfbe00446f50&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AOLGGDE%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T080934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkVYiAkOc0sEW01Vb22Kinv1UVuwcZyDYZiIb%2FWPRuwAIgNHse4f0Ke3ZbeRIJAxrtLI%2BwW%2F1DV3Buu%2F5dYD8TlR4q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDGgEA0yYCEXvoxKxxSrcAzLbtTZFde6nT1ftCT7jC3cA8cgAS%2Bt7wUvvJ%2BhhyJ1LF7UcKM5%2BBWxBvxjDUgYeuEEY98Zi%2FVmn6MVxkyPaoNnMwXoR3MIiSoftulkeyp8Z%2Fs3tJFe7NNd8cNa7Djia%2F%2F4cMRiE3R9%2Fa7CRYHHF3ZZgcEPTZDygh0Gev6jyPYqel8MEMC7r3hWDpyjGi6fliGwcHSCb6p3HL3k0FHAqRMJa%2FUywlTzvqeDsWW8%2FpPWqb1eNU7KOGTTCElV0uXLpG6fDTvlBPtVt7EXZOW0zCwTBHzR73Y%2BOiuFA2CN4y3Xh0O22YDYZ1dGRSjqQTrUltn2OYtyqIVbTMu%2FNkDlGWy0Ve%2FphwWEPMqUXt87FkLE0IyqQr5Bp3rA06Fv5riMROo%2FImmBj2NiFKCI9fEdDOuue63lOOFP0tglZTBQvpVoGrkGt%2Bk0heYFB0ulv2P7mKPep7lwGQeLCxeYY39ai0Wx2wHDEWvwYLpZEXzPBJBVdyGboATQZPOOy1089M1ZgcClX8rvX0vVZjYPMFv2SjyPJ%2BDzDlI8pV7BVh4bDbRV5VNqLwN1dawF8353AQHedzTNi5BV7EumgjoSXWxaUFlm5PrL4xGtv%2F13ccTLKsMqW8wM%2BCgwcAq4qBFgQMLfh1L4GOqUB%2FCiWQ7Zoaf1yDcqcQWrQkr5%2BJwSoNYS7o%2B%2B8l%2BbTAfBTkJ2C9XiTkmu6ofCfk%2BvQQXCYUt9C4%2FAXvwIAhMTLIDU9tgXmRkhMUfHPY31%2FLMZjwZrL3edJvexk3f43A9joaMpij3ODC%2B%2FG7p04t7fi6d7uQmOFbz%2BL7SCUSVuugNTFUb6%2BxDebUhLn8phKDKlxQwAwMFlRZwb%2FXz9mhgZ3C7YeiW7%2B&X-Amz-Signature=4b835acef4b20092fe1c2eb10e85804cc7e006ef5e61ef828beccf552c6cdf79&X-Amz-SignedHeaders=host&x-id=GetObject)

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

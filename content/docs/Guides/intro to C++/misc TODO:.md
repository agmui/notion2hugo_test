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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SANCL4AZ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T150723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCpkWXQy4CUf2tHVQkBjWVV37eNjc9yKy9ErK4mReyyXAIgD4iF1jrGND4geAIvUOHKSBHFtyOhU31A9hTp0oFWSiUqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCVeiEYJ8r3CA%2FwudircA1VcW%2FBJFP5p7rPK5xLwmgz65obcmL7Ak30VDraCGcE08cP1ck8emj%2BGSlNI721qGAzFPiUDhk14JbAIuivkV%2F%2F156n5sz7o09q%2BZbvcrl6bNcdmVCcJZb%2Bi0P8J1JYmdDIW4ro97MvuQ7TwdY1tzfonzYWD4MunWpIgQXBaVp70Ylcixbdeo49fod0FUMFzyk%2B5j0ZMuT2d1e2hMT5%2FMV03mlgM3%2BYmH%2FSWge0BhoBCV%2FI2ymHnVqh%2FfjDjWPAddB40zkwHsdVMJuXEoiNcEpmEN2UHNc6aejlCz1NerCqu1kDy9UOODIsLLyETzIG%2FeUPUgBUQs%2FfnnzKSbQ0RJ8XdU5izWmk%2FsaNHw2eXIRLkaIg1vmkKSnutUItna6eNaqqYItDkONX%2Bl%2BwZbkhUIijsoDwNdQ489DPyp7UotHpspHHjUcGaZ2BF5txRFR6RO609HW2Pd%2Fi6%2FmeAGlqP0Canw3VTiY4uGZrGtX03NVCBew81TSLDWSIdRslgM%2Fd7dfjcDeHo847tpD2%2BenbrsLsDiluFnhyB9DjNA3YSzV3UdVrsPIl2iVE8W9BTdT0IcgbYkXcPDWwlOvO%2FIZUWQ8ok%2BA4nHA8HHmaoeiISXAR1c061Y9AHgrqENNOKMN7e18AGOqUBqC%2Frc%2BjV7s%2FzCcEl6jlDzK%2Fejo4HV%2Bkzln%2B7i2RSm3uSnwl%2BhQskwuwhh%2BgVaBTMAM8MSt6Qir%2Bkvl%2B05DioTbTQLj3ilXHQMHciTYOF3HDdaPNaGsxy6lD64yTLrSyYVvxp9JaAQY1aXXxehZV3PFX8Qe85mcE4v1sRbQ7iOAaTIkjhAUXeP1COZ8zVY4YVo6zC5Szpw95hVZ%2FQuanIdxZZwcYn&X-Amz-Signature=efdfa34a8fc1096beef2f666f84feb40ef6137b94eb677441eeb9f6551caa81e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SANCL4AZ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T150723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCpkWXQy4CUf2tHVQkBjWVV37eNjc9yKy9ErK4mReyyXAIgD4iF1jrGND4geAIvUOHKSBHFtyOhU31A9hTp0oFWSiUqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCVeiEYJ8r3CA%2FwudircA1VcW%2FBJFP5p7rPK5xLwmgz65obcmL7Ak30VDraCGcE08cP1ck8emj%2BGSlNI721qGAzFPiUDhk14JbAIuivkV%2F%2F156n5sz7o09q%2BZbvcrl6bNcdmVCcJZb%2Bi0P8J1JYmdDIW4ro97MvuQ7TwdY1tzfonzYWD4MunWpIgQXBaVp70Ylcixbdeo49fod0FUMFzyk%2B5j0ZMuT2d1e2hMT5%2FMV03mlgM3%2BYmH%2FSWge0BhoBCV%2FI2ymHnVqh%2FfjDjWPAddB40zkwHsdVMJuXEoiNcEpmEN2UHNc6aejlCz1NerCqu1kDy9UOODIsLLyETzIG%2FeUPUgBUQs%2FfnnzKSbQ0RJ8XdU5izWmk%2FsaNHw2eXIRLkaIg1vmkKSnutUItna6eNaqqYItDkONX%2Bl%2BwZbkhUIijsoDwNdQ489DPyp7UotHpspHHjUcGaZ2BF5txRFR6RO609HW2Pd%2Fi6%2FmeAGlqP0Canw3VTiY4uGZrGtX03NVCBew81TSLDWSIdRslgM%2Fd7dfjcDeHo847tpD2%2BenbrsLsDiluFnhyB9DjNA3YSzV3UdVrsPIl2iVE8W9BTdT0IcgbYkXcPDWwlOvO%2FIZUWQ8ok%2BA4nHA8HHmaoeiISXAR1c061Y9AHgrqENNOKMN7e18AGOqUBqC%2Frc%2BjV7s%2FzCcEl6jlDzK%2Fejo4HV%2Bkzln%2B7i2RSm3uSnwl%2BhQskwuwhh%2BgVaBTMAM8MSt6Qir%2Bkvl%2B05DioTbTQLj3ilXHQMHciTYOF3HDdaPNaGsxy6lD64yTLrSyYVvxp9JaAQY1aXXxehZV3PFX8Qe85mcE4v1sRbQ7iOAaTIkjhAUXeP1COZ8zVY4YVo6zC5Szpw95hVZ%2FQuanIdxZZwcYn&X-Amz-Signature=ddfc0a29db55484280e89544af53e5b90973727bdb9e27cd43c6c16b97d66ea1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

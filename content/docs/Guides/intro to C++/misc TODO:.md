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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAM4K2JT%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T210846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBK2PTWsPgSblJT3gmAmjWUt6wcrruwqIlqZ7al61uh5AiAtujJQUhGh52YyShARraSJ9M614U0jALwaQ2Yx6rPigCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF4jxJul9SNWGnz7YKtwDYKJJNDGCzRicVq3hFV0Xf1cnKGxPQUxhPL0ZrEzv5wXmZvhno82kmeYQaU8s%2Bq6lpd6k1LBTnMS4%2BsfWroSE5kXTY92CW6ssNux7%2BnsWsAA3%2BSP4BbmN4QrAQ46X8G%2BjebtSjjux60P7W3Fv2yx%2BKD8bIlkeoN3QHRPrZzwEm0CwQoqXoNgzV83XFn5QNJTcfJGSLwZCXYXBoNYkJ93BiXdlxTUjwEV2o7NtMot180shIqgOoZtLvwty8PC8nGkWIhKQJSL%2FdtBQ%2Bx1bEP4b16apHHgBwhpoYtdYqaHshbaxXMF2ng1L8JkLH5r9qRj42rdAqMYTA6Y7BWs%2FOerKzm1cNE4ZE7mv0waJteKIy0u0wAL8huZG4%2BdOSDeKroTtgonqiG9sQ%2FHqEorgbnw530RlZOJ%2Fv8jT%2BaJlqFh1WehS2i0Jg2aBDLdrxGEMSV%2BwYJ38Dfx5wuHeluCy9jotvKAk%2BinFdkgmSrk1yZJ5bOCTTTwtXodHVZqhCO0GIOA5qWL1mzpucIcWzG3bRYQC87Y%2Bun1jb6%2FjKAfgm3px%2FKk6m2lFtVol0Pc7U4vHL2jsIQRIhab%2BpxZ1FNtnvg2n7cI7RYNrEBhF%2BiQiLSvzzU9s2QTVdQ2bm2LKhzMwmLOiwgY6pgEg1IgaKZjbCiTY%2Bfti5oni%2BFLDvdAhyjHlQZCcmVSEzFoLbG3t0EY9rfume4YmGd%2B6LXonNblUFlRfED9R8C9v7GoWXIAU%2FtZQoretScDXLrqJXN7orBXhF%2FolS8HmHUO3l%2FOcZs66BAx%2F%2FeEhcReor29fu1cafmtcNzWJwL7JXRy4PJdpgVIifQtB0K9iHqyZeIlf%2BvDCvumKUVVGI9y8q2Dtq24X&X-Amz-Signature=0aee8235f950ecd926236c1be5038ba8502de7398cd50a536b488b7662445aa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAM4K2JT%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T210846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBK2PTWsPgSblJT3gmAmjWUt6wcrruwqIlqZ7al61uh5AiAtujJQUhGh52YyShARraSJ9M614U0jALwaQ2Yx6rPigCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF4jxJul9SNWGnz7YKtwDYKJJNDGCzRicVq3hFV0Xf1cnKGxPQUxhPL0ZrEzv5wXmZvhno82kmeYQaU8s%2Bq6lpd6k1LBTnMS4%2BsfWroSE5kXTY92CW6ssNux7%2BnsWsAA3%2BSP4BbmN4QrAQ46X8G%2BjebtSjjux60P7W3Fv2yx%2BKD8bIlkeoN3QHRPrZzwEm0CwQoqXoNgzV83XFn5QNJTcfJGSLwZCXYXBoNYkJ93BiXdlxTUjwEV2o7NtMot180shIqgOoZtLvwty8PC8nGkWIhKQJSL%2FdtBQ%2Bx1bEP4b16apHHgBwhpoYtdYqaHshbaxXMF2ng1L8JkLH5r9qRj42rdAqMYTA6Y7BWs%2FOerKzm1cNE4ZE7mv0waJteKIy0u0wAL8huZG4%2BdOSDeKroTtgonqiG9sQ%2FHqEorgbnw530RlZOJ%2Fv8jT%2BaJlqFh1WehS2i0Jg2aBDLdrxGEMSV%2BwYJ38Dfx5wuHeluCy9jotvKAk%2BinFdkgmSrk1yZJ5bOCTTTwtXodHVZqhCO0GIOA5qWL1mzpucIcWzG3bRYQC87Y%2Bun1jb6%2FjKAfgm3px%2FKk6m2lFtVol0Pc7U4vHL2jsIQRIhab%2BpxZ1FNtnvg2n7cI7RYNrEBhF%2BiQiLSvzzU9s2QTVdQ2bm2LKhzMwmLOiwgY6pgEg1IgaKZjbCiTY%2Bfti5oni%2BFLDvdAhyjHlQZCcmVSEzFoLbG3t0EY9rfume4YmGd%2B6LXonNblUFlRfED9R8C9v7GoWXIAU%2FtZQoretScDXLrqJXN7orBXhF%2FolS8HmHUO3l%2FOcZs66BAx%2F%2FeEhcReor29fu1cafmtcNzWJwL7JXRy4PJdpgVIifQtB0K9iHqyZeIlf%2BvDCvumKUVVGI9y8q2Dtq24X&X-Amz-Signature=302faeb85ee5324bd891cdecc1f9eb32614c96562d29bbaca91413e540d6a38d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2KLSWP7%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T061138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUtr3FTT5IYu%2BjTvHzChrKmqZRdeAAWDAM4CiJbvaxrAIhAPEk8g4SwLajwoRbIQ3Ze7E7TaRSVvNauo6Ra2w9WPf3Kv8DCD8QABoMNjM3NDIzMTgzODA1IgwxaYck2v6r2kBFHzoq3AP6SQ4UcM0PmPph2cAQGjYfvFjhit2hK2xhNgiPlFWcuC3AfCpfQmjEpZPBRHMWjMKfWkfTx4CwI0poNk77WvHlxgaVEjvyBLWO5nSi3jq3pmIplzBVXAU04v6D7j2P2JQPbR%2BksHS71zIUj%2B32mI6Nan61Djvj3Q2dH%2FIhA8IFsdltH9KEqgTjYn6yWJ721RzTz71wqKM6NDEC8YJEUQqbGWUuvbjq1SyHxjnah8gZEcyk2iwfvid9VK5b3GAvzDVmkWpV817MVFOcuVAiyMR66%2Fz1eVuOWnN4Ls8fcVIHYJGiCVA3cZZmrg4PRA875CGFBXWrf%2FXc6ot5P4R%2BCpWUgTcvTMKu90pYw512DF6q5c8d%2Fvx5d5kmWkrK4wITZoeGWIRoijlyzaq68OzGnT%2F%2BSCeeSFT8CCKyFsBuTyiX6RzxXk0o4TaAO8riuYb9itn3dp0mx6eTBN4lYeo068GIeQbgveN5RmPNba4dh1ed%2Be1%2B8VsQyR9wFc%2BkUMMu%2F9VJyjm2WOyKs7X4RgVRJ2Oo6LXOE99M75cEx24gAG%2FcfJ5od4a%2FEsHF7H%2BvmK7uw%2FSolMgAtfJvh1w8qDrd%2B5SyXc6TuG4FkaXtapN2n9UcjKD1xRqc9VCgjmkxjTDZy5O%2FBjqkAUmojnIHGKhOX%2FlqDal0wtL1C2%2FnoM4oNDCT8UJJnrzjgpbGLxusteuF5W6wCBqiggxs4stqJzRUnAkJKyhvi0we1lEEjSrnoQkQfdd9DNws%2Bm3iCZEPS1pHgYckjd4RD5F10DRZW7FHoEGZxNklq2UU%2FevN8vgtEpo9EMb5g8%2B808a3tTZKDN48B2CsSvrrQlqK1O5OsvOAWcgkifrBYiSmJyJ7&X-Amz-Signature=892b3883c4624f948cbd0ee0ae20154ba284e6f4bdee6256e6ec712f4c835c31&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2KLSWP7%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T061138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUtr3FTT5IYu%2BjTvHzChrKmqZRdeAAWDAM4CiJbvaxrAIhAPEk8g4SwLajwoRbIQ3Ze7E7TaRSVvNauo6Ra2w9WPf3Kv8DCD8QABoMNjM3NDIzMTgzODA1IgwxaYck2v6r2kBFHzoq3AP6SQ4UcM0PmPph2cAQGjYfvFjhit2hK2xhNgiPlFWcuC3AfCpfQmjEpZPBRHMWjMKfWkfTx4CwI0poNk77WvHlxgaVEjvyBLWO5nSi3jq3pmIplzBVXAU04v6D7j2P2JQPbR%2BksHS71zIUj%2B32mI6Nan61Djvj3Q2dH%2FIhA8IFsdltH9KEqgTjYn6yWJ721RzTz71wqKM6NDEC8YJEUQqbGWUuvbjq1SyHxjnah8gZEcyk2iwfvid9VK5b3GAvzDVmkWpV817MVFOcuVAiyMR66%2Fz1eVuOWnN4Ls8fcVIHYJGiCVA3cZZmrg4PRA875CGFBXWrf%2FXc6ot5P4R%2BCpWUgTcvTMKu90pYw512DF6q5c8d%2Fvx5d5kmWkrK4wITZoeGWIRoijlyzaq68OzGnT%2F%2BSCeeSFT8CCKyFsBuTyiX6RzxXk0o4TaAO8riuYb9itn3dp0mx6eTBN4lYeo068GIeQbgveN5RmPNba4dh1ed%2Be1%2B8VsQyR9wFc%2BkUMMu%2F9VJyjm2WOyKs7X4RgVRJ2Oo6LXOE99M75cEx24gAG%2FcfJ5od4a%2FEsHF7H%2BvmK7uw%2FSolMgAtfJvh1w8qDrd%2B5SyXc6TuG4FkaXtapN2n9UcjKD1xRqc9VCgjmkxjTDZy5O%2FBjqkAUmojnIHGKhOX%2FlqDal0wtL1C2%2FnoM4oNDCT8UJJnrzjgpbGLxusteuF5W6wCBqiggxs4stqJzRUnAkJKyhvi0we1lEEjSrnoQkQfdd9DNws%2Bm3iCZEPS1pHgYckjd4RD5F10DRZW7FHoEGZxNklq2UU%2FevN8vgtEpo9EMb5g8%2B808a3tTZKDN48B2CsSvrrQlqK1O5OsvOAWcgkifrBYiSmJyJ7&X-Amz-Signature=0cd250b095967ac4cf038301abcae0e8b0721fc00fc9e2c8b11554913201739c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

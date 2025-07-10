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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466763IRXKN%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdklGdHECDx1qoe%2BrKTkmwAUwEE0W85tZV%2BAzCTQ3FgAIgIzCmbA6MDVFKRDXTL8gC1j5GAx2YxaMjw%2B8bqkBBDYgqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBlxEfbxafPCCEFtCrcA5cnHeaNQMMTyMkJLHDF%2Bz9wC2NVOBgxSFlyXiGD5yhHoeAHUFh6gQYbvqRNv%2Fu%2F1dtMVoAjcK2ABV2Opz2YhlosIlDP%2FrXK%2FBMdkUmB%2B2OxtjtoJBR%2FYKGS6TDpRmAWVpHE5fYsKvWjMB5LoYPd2hNdZ%2BTdPjs%2BEnlia5XvpIABqgbBD3hrHrW1NT7Isgrhuqng52hOUM7bCwTzBqdk7zJIhzbQnEAvJchIll1YKlOsxR3tl2XbYWUcdQfsbjpWYdl4i1Gyfi1YqXpr0afDpQyZTOFbDdMJS5PRbtBJskNrTZGjg0pgLlO56dffEqkI%2BhmOKC6DEwzxiYD9GLXOfTuqXZZ9CZEX%2FHsYHzlm0UNepqnR20hxT%2BAJGIxGFh%2FDFQEcrLgxTKk25ggilcSLOrR7cE5GQT7vTz3ppeqW2l1hOx0HVv0HtWDnRL6kSUY12KUxMBQKM5uJWgWr98p3ard%2Fo8N4pkXU%2Fv1PX9dvGPZ%2BUBCnCqFCGt28zKwKp5aD68Dc%2BI2JAm4658RHCqwYPrDvWJzGqMDXlV3uZUiUpZTNEfWMYKx5%2FPljVisvGdio55baG%2B8LTkAAvvujOhXvBqNi1UtHHWimWxKQqO83LoS2qTFgrF4lHA22br8IMLuiwMMGOqUBjxQ2igEbwwsiW5pWUCUM1J7bQFsanPPACLwaEf1LAlhq2%2ByZDemDv8sXAb6qzBuHzEpw8KNSB12bUk4ixphn%2BhqXR7kNW3wrIA7QHdLGorlod21qGIQs6ulKB7JCfx2ebo%2Bm6HUlotSrMsfMrWsb8r5drbg6NjhfVbqiGzHuQov3CtWaigf6B5zrkldjmdW1P87ko50FmkjRlpuVu0ZjodcS%2F4su&X-Amz-Signature=006e913f67385c7b6149b0c9bdcf04c96c85eeb85e4233764934eb3a46c53e22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466763IRXKN%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdklGdHECDx1qoe%2BrKTkmwAUwEE0W85tZV%2BAzCTQ3FgAIgIzCmbA6MDVFKRDXTL8gC1j5GAx2YxaMjw%2B8bqkBBDYgqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBlxEfbxafPCCEFtCrcA5cnHeaNQMMTyMkJLHDF%2Bz9wC2NVOBgxSFlyXiGD5yhHoeAHUFh6gQYbvqRNv%2Fu%2F1dtMVoAjcK2ABV2Opz2YhlosIlDP%2FrXK%2FBMdkUmB%2B2OxtjtoJBR%2FYKGS6TDpRmAWVpHE5fYsKvWjMB5LoYPd2hNdZ%2BTdPjs%2BEnlia5XvpIABqgbBD3hrHrW1NT7Isgrhuqng52hOUM7bCwTzBqdk7zJIhzbQnEAvJchIll1YKlOsxR3tl2XbYWUcdQfsbjpWYdl4i1Gyfi1YqXpr0afDpQyZTOFbDdMJS5PRbtBJskNrTZGjg0pgLlO56dffEqkI%2BhmOKC6DEwzxiYD9GLXOfTuqXZZ9CZEX%2FHsYHzlm0UNepqnR20hxT%2BAJGIxGFh%2FDFQEcrLgxTKk25ggilcSLOrR7cE5GQT7vTz3ppeqW2l1hOx0HVv0HtWDnRL6kSUY12KUxMBQKM5uJWgWr98p3ard%2Fo8N4pkXU%2Fv1PX9dvGPZ%2BUBCnCqFCGt28zKwKp5aD68Dc%2BI2JAm4658RHCqwYPrDvWJzGqMDXlV3uZUiUpZTNEfWMYKx5%2FPljVisvGdio55baG%2B8LTkAAvvujOhXvBqNi1UtHHWimWxKQqO83LoS2qTFgrF4lHA22br8IMLuiwMMGOqUBjxQ2igEbwwsiW5pWUCUM1J7bQFsanPPACLwaEf1LAlhq2%2ByZDemDv8sXAb6qzBuHzEpw8KNSB12bUk4ixphn%2BhqXR7kNW3wrIA7QHdLGorlod21qGIQs6ulKB7JCfx2ebo%2Bm6HUlotSrMsfMrWsb8r5drbg6NjhfVbqiGzHuQov3CtWaigf6B5zrkldjmdW1P87ko50FmkjRlpuVu0ZjodcS%2F4su&X-Amz-Signature=a6533caf37c3813f115b9a946a3007b97d91d41550c9030ad69ad5524eb3b8e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

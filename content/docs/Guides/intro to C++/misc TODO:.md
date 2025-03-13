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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGCCWY36%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNJqoJwn2SnMUkMz4tlHmtmA8uXwNXGkpZwiqYsKeGqwIhAMKFdfhx8xe1aLk34uDV0EopZggHNd8Im3f%2FA944mzjZKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzfk5%2B42fTr5qkRV7Eq3ANJ5pQqp8XurD3fvjQJweOpeWhojH9A6xArnkK8LPngpZ7GoO1pmCbx2wN9k0zM2BThjiMgb3XR6cVdqMpuGS6WlKB9u1iSIMq3pL22g6W9dixkdCfUHtmV3p%2FHX48NUQL9MzNRc7G8EeGlPVnYOKvwLjHOTc35nbkmKUMMK%2FUYvedVtVC%2F11i3fNpmjutvU6ltCDxTHj5mVbPYSCkWwy5GNTofuCe0pqilDedOsvisw2pZ14VGAWUGWt24kBu75UIzKdfh5and5aYNWCAhaXQDtUyAKIfs4K2YtpVurNgxVZK%2BGQFH28%2B9m0gEBdf1R7Nfr7Ui3mK%2BUitc%2FWvvDUOZE2yTwnS4Z3HARGN3i9%2BDqn%2BQHrRIU8F3kldsWH1UDozF5BWdSWxI7nq5YEkWlEKyr0kzQWVfYVndqvehF%2BaUjVAi3GXj%2FKsm%2B81I4TWv4UpZhoU%2FT3xg7EtAKEsMSp814uZ%2Fg2BCFXPppelVJwKgsQEl9EMC%2FGsc0v%2BYy37Ot3V5P8WMkytxHn96cVT92os4NHPsw4JXnQZbRTaOYv56%2FvQrof0PQrARHbJaZfDJrf5GVGalZIdBlU%2BxQCoP97nyIuGAEojzreqQWO3EpsLbvz4vL7bHsHoSbuaTiDDbsc2%2BBjqkAb2B5egLVcBAQB8Q5WVhKWxIY%2F2t03ncJe8U1mHnnmpDNi6wnfw4q1R40glgyx41NPGKM3u6pXjplI97vp%2F1TkcYuYBnXoUIp2H2wisVdVyE1nIiQ342ZsluIynqABMKzbePY6DL%2FfOFo0LSXlSF3FGRXulKVlx522H%2BEgX9SOsUOQEobjR3NK86%2F%2BYZv2Ve%2BKAmXMKnKX%2FWhBJFdbCf9BbtL4u%2F&X-Amz-Signature=98abf3a43d20231760ef6585434ef8e405a8f8c6bf8ae30ca4cb9b3ba53b3d31&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGCCWY36%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNJqoJwn2SnMUkMz4tlHmtmA8uXwNXGkpZwiqYsKeGqwIhAMKFdfhx8xe1aLk34uDV0EopZggHNd8Im3f%2FA944mzjZKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzfk5%2B42fTr5qkRV7Eq3ANJ5pQqp8XurD3fvjQJweOpeWhojH9A6xArnkK8LPngpZ7GoO1pmCbx2wN9k0zM2BThjiMgb3XR6cVdqMpuGS6WlKB9u1iSIMq3pL22g6W9dixkdCfUHtmV3p%2FHX48NUQL9MzNRc7G8EeGlPVnYOKvwLjHOTc35nbkmKUMMK%2FUYvedVtVC%2F11i3fNpmjutvU6ltCDxTHj5mVbPYSCkWwy5GNTofuCe0pqilDedOsvisw2pZ14VGAWUGWt24kBu75UIzKdfh5and5aYNWCAhaXQDtUyAKIfs4K2YtpVurNgxVZK%2BGQFH28%2B9m0gEBdf1R7Nfr7Ui3mK%2BUitc%2FWvvDUOZE2yTwnS4Z3HARGN3i9%2BDqn%2BQHrRIU8F3kldsWH1UDozF5BWdSWxI7nq5YEkWlEKyr0kzQWVfYVndqvehF%2BaUjVAi3GXj%2FKsm%2B81I4TWv4UpZhoU%2FT3xg7EtAKEsMSp814uZ%2Fg2BCFXPppelVJwKgsQEl9EMC%2FGsc0v%2BYy37Ot3V5P8WMkytxHn96cVT92os4NHPsw4JXnQZbRTaOYv56%2FvQrof0PQrARHbJaZfDJrf5GVGalZIdBlU%2BxQCoP97nyIuGAEojzreqQWO3EpsLbvz4vL7bHsHoSbuaTiDDbsc2%2BBjqkAb2B5egLVcBAQB8Q5WVhKWxIY%2F2t03ncJe8U1mHnnmpDNi6wnfw4q1R40glgyx41NPGKM3u6pXjplI97vp%2F1TkcYuYBnXoUIp2H2wisVdVyE1nIiQ342ZsluIynqABMKzbePY6DL%2FfOFo0LSXlSF3FGRXulKVlx522H%2BEgX9SOsUOQEobjR3NK86%2F%2BYZv2Ve%2BKAmXMKnKX%2FWhBJFdbCf9BbtL4u%2F&X-Amz-Signature=c8e8d75bc39028770885be9d1ee12f7d2e7f7fb65fd8461fb749f245eb65987f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

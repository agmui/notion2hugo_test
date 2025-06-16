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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WCRGBZM%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T121651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDZdjAD9Om5UNIRS%2FDvTH15MZ274%2FrZu8%2BA61SvKmLZ7QIhAPDwSoAApAMHStKEfZj6tdGIoNhl1ekPaWqBJv02NrB3Kv8DCFsQABoMNjM3NDIzMTgzODA1IgwVTETi5DX%2FgMS6ee4q3APwGwr63o2Qv9CKSgDJwe%2Bmv1lYTi70WNJUDjDSeaQ%2BFKW1sViE62NmWKXko9GyjNHNJI4RZTkpFuDSJgdnEWyZUXkfgmuu7YhMKAmQKSfJzdCdcyg2KIarGu6IYPZRaNZ7Jsq2LzGPGcaWK8oActmI3CcU1RnSoLDcvhHp5dFt7eJXTQdWEm7ZAkLPpQG%2BzGqkGyBALXzkelDm%2FQLQ2IOpcudN731HWehwKj7Y3bsITjIsUkMg0LJJqtT8WlETyQY7CS4Rcs8wT2nETtArKuf5%2BvticSRUtnLyUjRbto0HU20IcnLcPag1oFQpyam4nNhE9cbaqGEGpGGa9xpICGFijS11CaW2vlTb2tnbAVmotdiQQwnif31pB3gQkAN%2Bp0I4Dkt72tMr0yPjn%2FlFdiAwQaFvo2n8pjMD5DkRq3EILfs8k%2BwcYfjet6l5vwGY4tbj3zyV%2FaJ2sxHseo8fq8aZ1UqQ5BwPpCR8XHg5q2ux%2FRlsfnKL2IAE3b6XHgNJ4u2n%2FVwQH2TCQvwcxP5kp37vHcZ7%2B2vmaVM5m4UsZuvE%2Fvuomlu6vLwoJ%2FowWiXkVmWAJ4Uy3dTit7zqVhUstuaH5KPuyk3YSPvrYVUHdcX3nk818Wb0c9vNjlz1OjDU47%2FCBjqkATazNhzRSaqBI%2BlYVRzBwoa6HicUvXU1wGmf%2BltBFydDAtZD2VGxgQTSbFD%2BaG2EZIIvcCkxLJ7zx9nQeTwSiLeXbqAURLsth0%2FgJWngiCMVBCiGFDCDsJjFZbNWrz1NiHmjxIARaRqhx9OOk6wahZXhhI6rH08%2FK7UiBbkNJSJjbXNlDA8RVSLZL%2Bm5N%2FYyFdpM84%2BHyfq2moTdV8piQRhVtLz0&X-Amz-Signature=abd44e4501829510ed5b008cbe5e316dbdeb53c6acfef829d79cc0582781ec34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WCRGBZM%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T121651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDZdjAD9Om5UNIRS%2FDvTH15MZ274%2FrZu8%2BA61SvKmLZ7QIhAPDwSoAApAMHStKEfZj6tdGIoNhl1ekPaWqBJv02NrB3Kv8DCFsQABoMNjM3NDIzMTgzODA1IgwVTETi5DX%2FgMS6ee4q3APwGwr63o2Qv9CKSgDJwe%2Bmv1lYTi70WNJUDjDSeaQ%2BFKW1sViE62NmWKXko9GyjNHNJI4RZTkpFuDSJgdnEWyZUXkfgmuu7YhMKAmQKSfJzdCdcyg2KIarGu6IYPZRaNZ7Jsq2LzGPGcaWK8oActmI3CcU1RnSoLDcvhHp5dFt7eJXTQdWEm7ZAkLPpQG%2BzGqkGyBALXzkelDm%2FQLQ2IOpcudN731HWehwKj7Y3bsITjIsUkMg0LJJqtT8WlETyQY7CS4Rcs8wT2nETtArKuf5%2BvticSRUtnLyUjRbto0HU20IcnLcPag1oFQpyam4nNhE9cbaqGEGpGGa9xpICGFijS11CaW2vlTb2tnbAVmotdiQQwnif31pB3gQkAN%2Bp0I4Dkt72tMr0yPjn%2FlFdiAwQaFvo2n8pjMD5DkRq3EILfs8k%2BwcYfjet6l5vwGY4tbj3zyV%2FaJ2sxHseo8fq8aZ1UqQ5BwPpCR8XHg5q2ux%2FRlsfnKL2IAE3b6XHgNJ4u2n%2FVwQH2TCQvwcxP5kp37vHcZ7%2B2vmaVM5m4UsZuvE%2Fvuomlu6vLwoJ%2FowWiXkVmWAJ4Uy3dTit7zqVhUstuaH5KPuyk3YSPvrYVUHdcX3nk818Wb0c9vNjlz1OjDU47%2FCBjqkATazNhzRSaqBI%2BlYVRzBwoa6HicUvXU1wGmf%2BltBFydDAtZD2VGxgQTSbFD%2BaG2EZIIvcCkxLJ7zx9nQeTwSiLeXbqAURLsth0%2FgJWngiCMVBCiGFDCDsJjFZbNWrz1NiHmjxIARaRqhx9OOk6wahZXhhI6rH08%2FK7UiBbkNJSJjbXNlDA8RVSLZL%2Bm5N%2FYyFdpM84%2BHyfq2moTdV8piQRhVtLz0&X-Amz-Signature=937ec454e55089a67a3035910318fac03c7b0da9bb6a026a023de6ac0a927fee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

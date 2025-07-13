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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNWG66XC%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T081116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrLCy4eEOhYjFdIdqcw%2BNycEhKNIBXouRnT2ZziiuWTQIhAKNfAQGg%2BTc6lCiwb1UFESsqdrL4G95p55MHdl6LDrXrKv8DCBAQABoMNjM3NDIzMTgzODA1IgwYnPJha99bXXSVdiQq3AP6zbg4vBeorDRMoNu%2B9M6hpWaqbxpKEu757NMuUZjIkbai%2F07xlcNw%2BNcXOWu0KkhcACmZkYK7I%2FEN%2FiwezeBdqDXT%2FrOlUS%2FdcmxwqnKZgV9dhQOMhju7AGJ1KCGE%2FPD0pU%2FNxSCzJ0n62NM2X%2BVx3RPUp3ksCMhut5lOiNmE1kSWAyVmBD8OHuxfFZHFVPpypOZT3SwEZ9ckKeSDqi5DZKpvlThW0Hp9EsVLV2bTR%2Bz124UNcFD6tCQUznFp7%2B%2BuiFZS6zOmWV237vg%2FdN8Dcv%2FYHmL9doo%2B%2FaEspnvzD4RAxKFprsHkEGZizcsO99DYZ6lMtVLkh1DGV5En15CFkzgxJhX0tvbm0GCbHy3meQVTx4Vb8b1Jrgv46xHseaEgcsUO7KNCGeuBDDI5x2o354Wv9PPXKczN4WGq6v6Gs6c61jebFpMd4g%2BDGoY42QYrBL4F8dVK6L5G650OYToav1epAjoXDlsS9f%2FNL52kboioEWkiTCcm8RSQAVt6nupDJVNSnJPtRFiQMqFkaYlOLUo3Ak0c2pOXqiN1xJ9cD6uGkgHWApalOe38Nt%2F%2FK8CMhRJZDewMW4DaeWSB60WmOkWMAXm4uTp0Hm8fiA3WeZde46iaURRbU1yQPTDIpM3DBjqkAdfdD54OBrBlHWIKjExrxknqsVVFm4WgnTTthgmUvA2RAzrj2PB05DR%2BPdZCU9R3H%2B4%2FCM3QM6DSdU2wRdbbxIyVvZ8KjEsVUtYPYm7X0ffbm3N6kLNfqYNxSy9VpVsu3MidbGmUEsgnreTB9J%2BB0fqG%2B5c1encabKwBGnwjtUP%2FOy7XxJyd9qE3LCIgl5IIomcmq2nfZnexQajOHO5F33%2FRNTrk&X-Amz-Signature=c35a75d4685aded61177c1ca806d047467aaf962d313f076d41756359ec5901a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNWG66XC%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T081116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrLCy4eEOhYjFdIdqcw%2BNycEhKNIBXouRnT2ZziiuWTQIhAKNfAQGg%2BTc6lCiwb1UFESsqdrL4G95p55MHdl6LDrXrKv8DCBAQABoMNjM3NDIzMTgzODA1IgwYnPJha99bXXSVdiQq3AP6zbg4vBeorDRMoNu%2B9M6hpWaqbxpKEu757NMuUZjIkbai%2F07xlcNw%2BNcXOWu0KkhcACmZkYK7I%2FEN%2FiwezeBdqDXT%2FrOlUS%2FdcmxwqnKZgV9dhQOMhju7AGJ1KCGE%2FPD0pU%2FNxSCzJ0n62NM2X%2BVx3RPUp3ksCMhut5lOiNmE1kSWAyVmBD8OHuxfFZHFVPpypOZT3SwEZ9ckKeSDqi5DZKpvlThW0Hp9EsVLV2bTR%2Bz124UNcFD6tCQUznFp7%2B%2BuiFZS6zOmWV237vg%2FdN8Dcv%2FYHmL9doo%2B%2FaEspnvzD4RAxKFprsHkEGZizcsO99DYZ6lMtVLkh1DGV5En15CFkzgxJhX0tvbm0GCbHy3meQVTx4Vb8b1Jrgv46xHseaEgcsUO7KNCGeuBDDI5x2o354Wv9PPXKczN4WGq6v6Gs6c61jebFpMd4g%2BDGoY42QYrBL4F8dVK6L5G650OYToav1epAjoXDlsS9f%2FNL52kboioEWkiTCcm8RSQAVt6nupDJVNSnJPtRFiQMqFkaYlOLUo3Ak0c2pOXqiN1xJ9cD6uGkgHWApalOe38Nt%2F%2FK8CMhRJZDewMW4DaeWSB60WmOkWMAXm4uTp0Hm8fiA3WeZde46iaURRbU1yQPTDIpM3DBjqkAdfdD54OBrBlHWIKjExrxknqsVVFm4WgnTTthgmUvA2RAzrj2PB05DR%2BPdZCU9R3H%2B4%2FCM3QM6DSdU2wRdbbxIyVvZ8KjEsVUtYPYm7X0ffbm3N6kLNfqYNxSy9VpVsu3MidbGmUEsgnreTB9J%2BB0fqG%2B5c1encabKwBGnwjtUP%2FOy7XxJyd9qE3LCIgl5IIomcmq2nfZnexQajOHO5F33%2FRNTrk&X-Amz-Signature=bc7f3bfb86cb78f3d07ee603e461e94f875d06f8fbb2fa935345bd98309094c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

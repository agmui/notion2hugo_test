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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X75QWNWT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFEO2517IZggi99bRJnwUqt3hWxF3LHtAO%2B4bcbZUjR7AiB%2BB4gy7qWiYglzgjX6R0CjgFl%2FscfOhRvA9U8qH6uMhyqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3mNER6rOCKuIQ5bjKtwDAYs39KK8EHvLeMF4eKOeUpEH%2FZ%2Bbbn3XJKmW9rcv7Yvu3QPrFfQ0ecmZ4o4JpyK96GTjmdUNNMsEFvOqDTESys%2B8LAH%2FxT0IvI8bWZmjjPnwDhmfy3Iti0qdzciretBO3eGei6GG21kBskcTSi6znbM5ObQsQuzYNmLzzQRwUPlMGh6kzl4Yl%2BLvsvr%2BlUgcWrZM6YSkLj0M7XHrTtZiHdCDR4YakL371LE16x6bDMR9eLUaeYZ%2BA5zUH43EwFqARJzA1P9%2BtAjFXWYWxmpM%2F%2Bw1DibItQQC61utNJfkTpObZ7qn1Cc3DU1AVqUgfDMa3Ze2xPWLtWzvYcbDCAkKEOdONtHoOxwSBHJpcDXWZTezOStcPGX8bbzyuhEXH%2Bm5sWzTV2XCLNI03qMwAYO4KXs0zjjpFhQjWhZIFQhF2%2B5oiWGwkrsUojyKrxFfYjsEC8VTrP%2FD%2BBWiPQ3v32bPMS%2BHOPV5JeUC9mZ%2FTWZXoyQsD2Od7Rd0e8CklE581G%2BErjsA%2BotjuGljdN2y6quWCmntM0smkQnie3Lq1E9a4sUwu9pKk5vJ%2F7%2BiK2ASbZabyiFmgmTf2atIPKzk74VvdBwQkGGdmCKy%2BZbiErZioUC5qJVHjT14Qv1M%2FDswlq21xAY6pgF31%2BgesmbDKZuk%2BP9PhyHvfH5wsur7NsYlyhVcPcVt6m06BX3Xsh6W3Q5ILKNn3d94eMFP%2BDKY8JSlps9MaWP3LnDGBRvzgdLcx9BVaGSu82ml1fgi9FAMmyuEitkp31QftIdd31tG2lYclLLYHcwQjPbajw2n3CHUAkvnD%2FT4vVXnh64neLK1paWLyWlVVKnktU37oNXUAQr0TGN8g8V8n85JCV7t&X-Amz-Signature=b6eb3b4f033dd954335557bcc48897465cf53fa00e7c2a827babfbb9f81d0812&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X75QWNWT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFEO2517IZggi99bRJnwUqt3hWxF3LHtAO%2B4bcbZUjR7AiB%2BB4gy7qWiYglzgjX6R0CjgFl%2FscfOhRvA9U8qH6uMhyqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3mNER6rOCKuIQ5bjKtwDAYs39KK8EHvLeMF4eKOeUpEH%2FZ%2Bbbn3XJKmW9rcv7Yvu3QPrFfQ0ecmZ4o4JpyK96GTjmdUNNMsEFvOqDTESys%2B8LAH%2FxT0IvI8bWZmjjPnwDhmfy3Iti0qdzciretBO3eGei6GG21kBskcTSi6znbM5ObQsQuzYNmLzzQRwUPlMGh6kzl4Yl%2BLvsvr%2BlUgcWrZM6YSkLj0M7XHrTtZiHdCDR4YakL371LE16x6bDMR9eLUaeYZ%2BA5zUH43EwFqARJzA1P9%2BtAjFXWYWxmpM%2F%2Bw1DibItQQC61utNJfkTpObZ7qn1Cc3DU1AVqUgfDMa3Ze2xPWLtWzvYcbDCAkKEOdONtHoOxwSBHJpcDXWZTezOStcPGX8bbzyuhEXH%2Bm5sWzTV2XCLNI03qMwAYO4KXs0zjjpFhQjWhZIFQhF2%2B5oiWGwkrsUojyKrxFfYjsEC8VTrP%2FD%2BBWiPQ3v32bPMS%2BHOPV5JeUC9mZ%2FTWZXoyQsD2Od7Rd0e8CklE581G%2BErjsA%2BotjuGljdN2y6quWCmntM0smkQnie3Lq1E9a4sUwu9pKk5vJ%2F7%2BiK2ASbZabyiFmgmTf2atIPKzk74VvdBwQkGGdmCKy%2BZbiErZioUC5qJVHjT14Qv1M%2FDswlq21xAY6pgF31%2BgesmbDKZuk%2BP9PhyHvfH5wsur7NsYlyhVcPcVt6m06BX3Xsh6W3Q5ILKNn3d94eMFP%2BDKY8JSlps9MaWP3LnDGBRvzgdLcx9BVaGSu82ml1fgi9FAMmyuEitkp31QftIdd31tG2lYclLLYHcwQjPbajw2n3CHUAkvnD%2FT4vVXnh64neLK1paWLyWlVVKnktU37oNXUAQr0TGN8g8V8n85JCV7t&X-Amz-Signature=16dd822cedeada86cae1e29354968667f798419653950464b7b3a4966c174d88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

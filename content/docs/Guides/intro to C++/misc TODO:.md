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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOJJ7KWI%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T100756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDRlnQYc5%2FBN4%2BO3iAPiakpTTggsLXz1uWipx6CqrSfCAIhAJX1T9IsEGoEAH1MR%2B3jV7QlBIesoo%2BY8jYzIL80HBJbKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8xc4n6uDOuLQD%2BQ0q3AM3xKtKEdu5A%2BCKauWiEB0nViyKO2KBzj%2B3N8qL87%2FciOCycRgphvPVf0qyr3v4F2nPd35I6WlXeIoNFsdYzQ%2FSofFePfiM9ARhT8x%2FNs5JFrwjoTesggXygisMS8LwuS7GHWoCawYACo9SN6l6lZpxHAYK6z7oSdxlO%2FPrmLdoAOpXDRTLTQYZgErm7M2jtrp%2BqtmNQ1e3s3r2bLSB5upf2MMDjgYDlpAcULWAgr0zYRAWDsV2jZKafVy7Ut7cQBuGKtDfF8Z9YcW%2FGPi7Uh8KGH38M90E7qiU%2BY2F8e6eM9CtrJILXVgdd0DoaPnj4nYosYt3Iqp0dYPnQfE0KMp56p0Q0LxPYAuhqQl3UL22wA2adSOYQUFv89uZsAAGH%2Bi%2BACblMhjfpoVqnTA8Z8syhAgycBGFJXyg%2Fv8qV473oA0S2Xw39oHDbRVDZauBvMVpG7c6hkV3nv88hPpLdVMXGfXJurphoi8K%2FdOcPs3c9tEsP289SJwum3QFxPILo0KrFPpCSTfYOIQz%2BLkchDRwT%2FkcQe9QAvFgfSPqQZ1RFGyRqJWNOa7GWXCwG5kz7UUHuZ%2FMYWN3FLMXD8Gb8L5NOBdRdHMT2y8k1AiMqND8HKweXnicvlUXDhNzfTCopJLABjqkARqScB0%2BrE6er%2FaSd9HLds3yRCNfx8MHrq%2FHj7YS82jKysXqrOXCmUF47xvUJqh1BSTgpYyeXorAdvG3IC1VIytS8gm%2Bgxo4bAqFqE1OQr6QxdPUTdsAB85JoMvwgDsg6OaRmNeam3woTJ4JXh1rR1aBaGP0cuASV2saOoxw%2F74F8wT7I0WJpvFaLGu70vChWy5mcDFeOSqQU%2FM%2FLEILjoRBFtpL&X-Amz-Signature=da622b42462fd7ef874f4a3e1917e284ae75f87a6866fcb471a046f5e39c9163&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOJJ7KWI%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T100756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDRlnQYc5%2FBN4%2BO3iAPiakpTTggsLXz1uWipx6CqrSfCAIhAJX1T9IsEGoEAH1MR%2B3jV7QlBIesoo%2BY8jYzIL80HBJbKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8xc4n6uDOuLQD%2BQ0q3AM3xKtKEdu5A%2BCKauWiEB0nViyKO2KBzj%2B3N8qL87%2FciOCycRgphvPVf0qyr3v4F2nPd35I6WlXeIoNFsdYzQ%2FSofFePfiM9ARhT8x%2FNs5JFrwjoTesggXygisMS8LwuS7GHWoCawYACo9SN6l6lZpxHAYK6z7oSdxlO%2FPrmLdoAOpXDRTLTQYZgErm7M2jtrp%2BqtmNQ1e3s3r2bLSB5upf2MMDjgYDlpAcULWAgr0zYRAWDsV2jZKafVy7Ut7cQBuGKtDfF8Z9YcW%2FGPi7Uh8KGH38M90E7qiU%2BY2F8e6eM9CtrJILXVgdd0DoaPnj4nYosYt3Iqp0dYPnQfE0KMp56p0Q0LxPYAuhqQl3UL22wA2adSOYQUFv89uZsAAGH%2Bi%2BACblMhjfpoVqnTA8Z8syhAgycBGFJXyg%2Fv8qV473oA0S2Xw39oHDbRVDZauBvMVpG7c6hkV3nv88hPpLdVMXGfXJurphoi8K%2FdOcPs3c9tEsP289SJwum3QFxPILo0KrFPpCSTfYOIQz%2BLkchDRwT%2FkcQe9QAvFgfSPqQZ1RFGyRqJWNOa7GWXCwG5kz7UUHuZ%2FMYWN3FLMXD8Gb8L5NOBdRdHMT2y8k1AiMqND8HKweXnicvlUXDhNzfTCopJLABjqkARqScB0%2BrE6er%2FaSd9HLds3yRCNfx8MHrq%2FHj7YS82jKysXqrOXCmUF47xvUJqh1BSTgpYyeXorAdvG3IC1VIytS8gm%2Bgxo4bAqFqE1OQr6QxdPUTdsAB85JoMvwgDsg6OaRmNeam3woTJ4JXh1rR1aBaGP0cuASV2saOoxw%2F74F8wT7I0WJpvFaLGu70vChWy5mcDFeOSqQU%2FM%2FLEILjoRBFtpL&X-Amz-Signature=3b91ff0c8aec95bfe16127aa9fff9302261048221741e34da875eba486806909&X-Amz-SignedHeaders=host&x-id=GetObject)

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
